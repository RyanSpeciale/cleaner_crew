import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { first, last, address, number, email } = req.body;

}
