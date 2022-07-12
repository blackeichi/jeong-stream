import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiRequest, NextApiResponse } from "next";
import client from "../../../libs/client";
import withHandler from "../../../libs/server/withHandler";
import { withApiSession } from "../../../libs/server/withSession";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const profile = await client.user.findUnique({
    where: { id: req.session.user?.id },
  });
  res.json({
    ok: true,
    profile,
  });
}

export default withApiSession(withHandler({ method: "GET", handler }));
