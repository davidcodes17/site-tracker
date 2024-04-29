import { NextApiRequest, NextApiResponse } from 'next';
import db from '@/app/config/db';
import jwt from 'jsonwebtoken';

const getLocation = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const token = req.cookies['token']; // or req.headers['authorization']
    if (!token) {
      return res.status(400).json({ msg: 'Invalid Token' });
    }

    const decode = jwt.verify(token, process.env.JWT_SECRET!);
    const u = await db.user.findUnique({
      where: {
        //@ts-expect-error
        uuid: decode.id,
        role: 0,
      },
    });
    if (!u) {
      return res.status(400).json({ msg: 'Invalid Token' });
    }

    const locations = await db.locations.findMany({});
    return res.status(200).json({ msg: 'Fetched Locations', data: locations });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: 'Internal Server Error' });
  }
};

export default getLocation;