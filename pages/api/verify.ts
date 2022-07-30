import { NextApiRequest, NextApiResponse } from "next";
import { withSessionRoute } from '../../lib/withSession'
import { prisma } from "../../lib/prisma";

export default withSessionRoute(verifyReview)


export async function verifyReview(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.body
    const user = req.session.user;
    if (!user) {
        res.json({ Message: "Bad Request. You are not allowed to do this"})
    }
    try {
        await prisma.review.update({
            data: {
                verified: true
            },
            where: {
                id: id
            }
        })
        res.json({ Message: "Review Verified"})
    } catch(error) {
        res.json({ Message: error })
    }
    
}