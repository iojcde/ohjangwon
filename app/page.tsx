import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { addHeart, getHearts } from "./op-hearts";
import { use, useState } from "react";
import Hearts from "./heart";
import Countdown from "./countdown";

export default async function Home() {
  const oldhearts = await getHearts();

  return (
    <>
      <h2 className="text-center text-[#045195]">오장원 교장선생님께</h2>
      <p className="font-bold text-center text-sm mt-8">
        요란하지 않고 조용히 학생들의 고충을 듣고 문제 해결을 했던 남자.. <br />
        <br />
        학생을 앞세워서 방패로 삼지 않던 남자.. <br />
        <br />
        교장실에 박혀있지 않고 학생들과 매일 아침 일찍 책을 읽던 남자.. <br />
        <br />
        오장원 교장선생님의 단대소고에는 낭만이 있다.
        <br /> <br />- 낭만단대
      </p>
      {/* <p className="font-bold text-center text-sm mt-8">
          아니 오장원을 누가 좋아함ㅋㅋㅋㅋ 안녕하세요 누입니다
        </p> */}
      <p className="mt-8">
        2023년 9월 1일 자로 단국대학교부속소프트웨어고등학교(이하 단대소고)의
        오장원 교장선생님께서 단국대학교사범대학부속소프트웨어고등학교(이하
        단대부고)의 교장 선생님으로 취임하시게 되었습니다.
      </p>
      <p>
        오장원 교장 선생님께서는 단대소고를 현위치까지 발전시키기 위해 헌신하신
        위대하신 분입니다.
      </p>
      <p>
        선생님, 단대소고에서의 소중한 시간 동안 항상 지혜롭고 헌신적인 리더로서
        우리를 인도해 주셔서 감사합니다. 새로운 도전을 맞이하시면서도 항상
        건강과 행복을 유지하시길 기원합니다.
      </p>
      <h3>항상 감사합니다.</h3>
      <Hearts oldhearts={oldhearts} />
      <a href="/letter">오장원 선생님께 편지쓰기 =&gt;</a>
      <Countdown />
    </>
  );
}
