import React from "react";
import Image from "next/image";

export default function AkadanPage() {
  return (
    // h-screen（画面ぴったり）のままでいく場合、背景のグレーなどが浮かないように背景色を画像に合わせると綺麗です
    <div className="relative w-full h-screen bg-[#b9b7ae] overflow-hidden font-sans">
      <Image
        src="/img/hyouga.jpg"
        alt="赤団 豹牙"
        fill
        priority
        // object-contain で z-index を前面に。
        // 上下がはみ出るのを防ぐため、親要素のh-screen内にきっちり収めます
        className="object-contain z-10" 
      />

      {/* 
        もし画像の上に黒い透過レイヤーを重ねて文字などを載せる予定なら z-20 に。
        画像自体の色をそのまま見せたい（暗くしたくない）場合は、このレイヤーは削除するか、画像の後ろ（z-0）に回してください 
      */}
      <div className="absolute inset-0 bg-black/30 z-20" />
    </div>
  );
}