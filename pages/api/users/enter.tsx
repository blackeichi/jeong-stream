import { NextApiRequest, NextApiResponse } from "next";
import client from "../../../libs/client";
import withHandler from "../../../libs/server/withHandler";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { phone, email, username } = req.body;
  let user;
  if (email) {
    user = await client.user.findUnique({
      where: {
        email,
      },
    });
    if (user) console.log("Email Exist");
    if (!user) {
      console.log("사용가능한 이메일입니다.");
    }
  } else if (phone) {
    user = await client.user.findUnique({
      where: {
        phone: +phone,
      },
    });
    if (user) console.log("Phone Exist");
    if (!user) {
      console.log("사용가능한 핸드폰번호입니다.");
    }
  }
  user = await client.user.findUnique({
    where: {
      username,
    },
  });
  if (user) console.log("이미 존재하는 ID입니다.");
  if (!user) console.log("사용가능한 ID입니다.");

  return res.status(200).end();
}
export default withHandler("POST", handler);
