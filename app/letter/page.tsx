"use client";
import Link from "next/link";
import { Input } from "../components/input";
import { Label } from "../components/label";
import { upload } from "./upload";

const LetterPage = () => {
  const clientSubmit = async (data: FormData) => {
    const title = data.get("title")?.toString();
    const author = data.get("name")?.toString();
    const letter = data.get("letter")?.toString();
    const pw = data.get("pw")?.toString();

    if (!title || !author || !letter || !pw) return alert("빈칸을 채워주세요!");

    alert(await upload({ title, author, letter, pw }));
  };

  return (
    <div>
      <Link href="/">홈으로 돌아가기</Link>
      <h1 className="mt-8">오장원 선생님께 편지쓰기</h1>
      <p>떠나시는 오장원 선생님을 위해 편지를 써보세요!</p>
      <form action={clientSubmit}>
        <Label htmlFor="title">제목</Label>
        <Input type="input" name="title" />

        <Label htmlFor="name">닉네임</Label>
        <Input type="input" name="name" />

        <Label htmlFor="pw">비밀번호</Label>
        <Input type="input" name="pw" />

        <Label htmlFor="letter">편지</Label>
        <textarea
          name="letter"
          className="flex h-48 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        />
        <button
          type="submit"
          className=" px-6 py-1 hover:shadow text-white font-bold mt-8 rounded-lg border bg-[#045195]"
        >
          제출하기
        </button>
      </form>
    </div>
  );
};

export default LetterPage;
