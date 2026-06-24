import React from "react";
import Image from "next/image";

export default function AkadanPage() {
  return (
    <div className="relative w-full h-screen overflow-hidden font-sans">
      <Image
        src="/img/akadannsiryou4.png"
        alt="赤団 豹牙"
        fill
        priority
        className="object-cover object-center scale-105"
      />

      <div className="absolute inset-0 bg-black/50 z-10" />

      <div className="relative z-20 flex w-full h-full items-center justify-end pr-8 md:pr-[10%] pl-6 pt-20">
        <div className="shrink-0 text-white flex flex-col justify-center items-start text-left">
          {/* 左側の赤い線（border）も文字サイズに合わせて少し細く調整 */}
          <div className="border-l-[12px] md:border-l-[16px] border-red-600 pl-6 md:pl-10 py-2">
            {/* 「三か条」の見出しを小さく変更 (text-7xl/20rem -> text-4xl/md:text-7xl) */}
            <h2 className="text-4xl md:text-7xl font-black mb-4 md:mb-6 tracking-[0.1em] leading-none drop-shadow-2xl">
              三か条
            </h2>
            {/* 各項目の文字サイズを小さく変更 (text-5xl/11rem -> text-2xl/md:text-4xl) */}
            <p className="text-2xl md:text-4xl font-black leading-relaxed text-white/95 tracking-[0.1em] drop-shadow-xl whitespace-nowrap">
              1. 笑顔
              <br />
              2. 元気
              <br />
              3. メリハリ
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}