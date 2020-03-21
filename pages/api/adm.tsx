import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.writeHead(301, {
    Location: "http://localhost:3000/admin/index.html"
  });
  return res.end();
};
