import { prisma } from "../../lib/prisma";
import { withSessionRoute } from "../../lib/withSession";
import { NextApiRequest, NextApiResponse } from "next";

export default withSessionRoute(loginRoute);

async function loginRoute(req: NextApiRequest, res: NextApiResponse) {
  const { username, password} = req.body
  try {
    const user = await prisma.admin.findUnique({
      where: {
        username: username
      }
    })
    if (password == user?.password) {
      req.session.user = {
        id: user?.id!,
        admin: true
      }
      await req.session.save()
      res.status(202).json({ succuess: true, message: "Logged In"})
    } else {
      res.status(402).json({ success: false, message: "Could not authenticate user"})
    }

  } catch(error) {
    res.status(500).json({ success: false, message: 'Something went wrong'})
  }
  
  // req.session.user = {
  //   id: 230,
  //   admin: true,
  // };
  // await req.session.save();
  // res.send("Logged in");
}