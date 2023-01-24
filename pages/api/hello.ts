// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  fetch("https://createapi.app/mock/64a44544-ab7b-4115-ab68-c2b39ac3059d")
    .then((resp) => resp.json())
    .then((resp) => {
      res.status(200).json(resp);
    });
}
