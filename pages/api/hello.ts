import type { NextApiRequest, NextApiResponse } from 'next'

interface data {
  name: string;
  age: number;
  rating: number;
  body: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const myData: data = {
    name: req.body.name,
    age: req.body.age,
    rating: req.body.rating,
    body: req.body.body
  }

}
