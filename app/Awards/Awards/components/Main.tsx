"use client";

import React from "react";
import Image from "next/image";

interface AwardItem {
  id: number;
  title: string;
  description: string;
  imgUrl: string;
}

const awardsList: AwardItem[] = [
  {
    id: 1,
    title: "絆賞",
    description: "ひとりじゃ届かない夢も、仲間となら。心を結び、想いをつなぐことで築いた強い絆を称む鍵となる。",
    imgUrl: "/img/akadannsiryou8.jpg",
  },
  {
    id: 2,
    title: "協力賞",
    description: "全員がひとつの目標に向かって力を合わせ、素晴らしいチームワークを発揮した団に贈られます。",
    imgUrl: "/img/akadannsiryou8.jpg",
  },
  {
    id: 3,
    title: "情熱賞",
    description: "誰よりも熱く、会場全体を沸かせるほどの圧倒的なエネルギーとパッションを見せてくれた団に贈られます。",
    imgUrl: "/img/akadannsiryou8.jpg",
  },
];

export default function AwardsMain() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col gap-16 md:gap-20">
      {awardsList.map((award, index) => {
        const isEven = index % 2 === 1;

        return (
          <div
            key={award.id}
            className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${
              isEven ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="flex-1 w-full space-y-3">
              <h2 className="text-xl md:text-2xl font-black text-gray-900 tracking-wide">
                {award.title}
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium whitespace-pre-wrap">
                {award.description}
              </p>
            </div>

            <div className="flex-1 w-full">
              <div className="relative aspect-[16/10] w-full bg-gray-100 rounded-lg overflow-hidden shadow-sm border border-gray-100">
                <Image
                  src={award.imgUrl}
                  alt={award.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}