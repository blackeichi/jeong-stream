import client from "../../../libs/client";
import withHandler, { ResponseType } from "../../../libs/server/withHandler";
import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiRequest, NextApiResponse } from "next";
import { withApiSession } from "../../../libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { username, password } = req.body;
  let error;
  const user = await client.user.findUnique({
    where: {
      username,
    },
  });
  if (!user) {
    error = "존재하지 않는 아이디입니다.";
    return res.status(404).json({ error });
  }
  if (user.password !== password) {
    error = "비밀번호가 일치하지 않습니다.";
    return res.status(404).json({ error });
  }
  req.session.user = {
    id: user.id,
  };
  await req.session.save();
  res.status(200).json({ ok: true });
}
export default withApiSession(
  withHandler({ method: "POST", handler, isPrivate: false })
);
