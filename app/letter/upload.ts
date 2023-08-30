"use server";

import { db } from "@/lib/db";

export const upload = async ({
  title,
  author,
  letter,
  pw,
}: {
  title: string;
  author: string;
  letter: string;
  pw: string;
}) => {
  "use server";

  console.log({ title, author, letter, pw });

  try {
    await db.letter.upsert({
      where: {
        author,
        pw,
      },
      create: {
        title,
        author,
        content: letter,
        pw,
      },

      update: {
        title,
        author,
        content: letter,
      },
    });
  } catch (e) {
    return "에러가 발생했습니다. 비밀번호를 확인해주세요.";
  }

  return "정상적으로 제출되었습니다.";
};
