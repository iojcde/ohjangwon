import { db } from "@/lib/db";
import { Letter } from "./letter";

const Letters = async ({
  params: { password },
}: {
  params: { password: string };
}) => {
  if (password != process.env.PASSWORD) {
    return <>ㅁㄴㅇㄹ</>;
  }

  const letters = await db.letter.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <div>
      <h2>지금까지 보내진 편지들</h2>

      {letters.map((l, i) => (
        <Letter author={l.author} key={i} title={l.title} content={l.content} />
      ))}
    </div>
  );
};

export default Letters;
