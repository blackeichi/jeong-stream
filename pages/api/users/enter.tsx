import { NextApiRequest, NextApiResponse } from "next";
import client from "../../../libs/client";
import withHandler from "../../../libs/server/withHandler";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { phone, email, username, bimil, birth } = req.body;
  let error;
  const payload = phone ? { phone: +phone } : { email };
  const existId = await client.user.findUnique({
    where: {
      username,
    },
  });
  if (existId) {
    error = "이미 존재하는 ID입니다.";
    return res.status(404).end();
  }
  const user = await client.user.upsert({
    where: {
      ...payload,
    },
    create: {
      ...payload,
      username,
      password: bimil,
      birth,
    },
    update: {},
  });
  /*   let error;
  let user;
  if (email) {
    user = await client.user.findUnique({
      where: {
        email,
      },
    });
    if (user) {
      error = "Email Exist";
      return res.status(404).end();
    }
    if (!user) {
      console.log("사용가능한 이메일입니다.");
    }
  } else if (phone) {
    user = await client.user.findUnique({
      where: {
        phone: +phone,
      },
    });
    if (user) {
      error = "Phone Exist";
      return res.status(404).end();
    }
    if (!user) {
      console.log("사용가능한 핸드폰번호입니다.");
    }
  }
  user = await client.user.findUnique({
    where: {
      username,
    },
  });
  if (user) {
    error = "이미 존재하는 ID입니다.";
    return res.status(404).end();
  }
  if (!user) {
    const created = await client.user.create({
      data: {
        username,
        phone,
        email,
        password: bimil,
        birth,
      },
    });
  } */
  return res.json({
    ok: true,
  });
}
export default withHandler("POST", handler);
