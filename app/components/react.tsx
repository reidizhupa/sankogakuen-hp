import React from "react";
import Image from "next/image";

export default function AkadanPage() {
  return (
    <div className="relative w-full h-screen max-h-[86.6667vh] overflow-hidden font-sans">
      <Image
        src="/img/hyouga.jpg"
        alt="赤団 豹牙"
        fill
        priority
        className="object-cover object-center "
      />

      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* 
        全体の配置コンテナ 
        md:pr-[12%] で右側の余白を少し広げ、よりバランスを取りやすくしています
      */}
    </div>
  );
}
