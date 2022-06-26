import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { prisma } from '../../utils/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    
    try {
        const data  = req.body;
        const post = await prisma.review.create({
            data: data
        })
        return res.status(200).json({ success: post })
    } catch (error) {
        return res.status(402).json({ error: 'There was an error'})
    }
}