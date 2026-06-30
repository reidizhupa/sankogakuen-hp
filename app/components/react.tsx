import React from "react";
import Image from "next/image";

export default function AkadanPage() {
  return (
    // 💡 親要素に md:h-screen（PC版は画面ぴったり）を指定
    <div className="relative w-full h-auto md:h-screen bg-[#b9b7ae] overflow-hidden font-sans">
      
      {/* 💻 PC版 */}
      {/* 💡 object-contain を維持しつつ、最大サイズを画面（100vh/100vw）の中に収まるように制限します */}
      <div className="hidden md:block absolute inset-0 w-full h-full p-4 z-10">
        <Image
          src="/img/hyouga.png"
          alt="赤団 豹牙"
          fill
          priority
          className="object-contain max-w-full max-h-full"
        />
      </div>

      {/* 📱 スマホ版 */}
      <div className="absolute inset-0 flex items-center justify-center md:hidden z-10">
        <Image
          src="/img/sannkajyou.png"
          alt="赤団 三箇条"
          width={700}
          height={1200}
          priority
          className="w-full h-full object-cover"
        />
      </div>

    </div>
  );
}