import React from "react";
import Image from "next/image";

export default function AkadanPage() {
  return (
    <div className="relative w-full h-screen bg-[#b9b7ae] overflow-hidden font-sans">
      {/* PC版 */}
      <div className="hidden md:block relative w-full h-full">
        <Image
          src="/img/hyouga.png"
          alt="赤団 豹牙"
          fill
          priority
          className="object-contain z-10"
        />

        {/* PC版 文字オーバーレイ（背景画像の表示領域に合わせて絶対配置） */}
        <div
          className="absolute z-20 pointer-events-none"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "min(100vw, calc(100vh * 1536 / 1024))",
            aspectRatio: "1536 / 1024",
            fontFamily:
              "'Shippori Mincho', 'Zen Antique', 'Noto Serif JP', serif",
          }}
        >
          {/* スローガン */}
          <p
            className="absolute text-red-800 font-bold drop-shadow-[0_1px_1px_rgba(255,255,255,0.6)]"
            style={{
              top: "2.5%",
              left: "50%",
              transform: "translateX(-50%)",
              fontSize: "clamp(14px, 1.6vw, 28px)",
              letterSpacing: "0.5em",
              whiteSpace: "nowrap",
            }}
          >
            スローガン
          </p>

          {/* 和気藹々 大見出し */}
          <h1
            className="absolute text-[#7a0e0e] font-extrabold drop-shadow-[0_2px_2px_rgba(0,0,0,0.15)]"
            style={{
              top: "27.5%",
              left: "50%",
              transform: "translateX(-50%)",
              fontSize: "clamp(36px, 5.2vw, 90px)",
              letterSpacing: "0.2em",
              whiteSpace: "nowrap",
              lineHeight: 1,
            }}
          >
            和気藹々
          </h1>

          {/* 3箇条 ラベル */}
          <p
            className="absolute text-stone-800 font-bold"
            style={{
              top: "39%",
              left: "50%",
              transform: "translateX(-50%)",
              fontSize: "clamp(13px, 1.3vw, 22px)",
              letterSpacing: "0.4em",
              whiteSpace: "nowrap",
            }}
          >
            3箇条
          </p>

          {/* ①笑顔（左の赤丸の真下） */}
          <div
            className="absolute flex flex-col items-center text-center"
            style={{
              top: "45%",
              left: "12.5%",
              transform: "translateX(-50%)",
              width: "26%",
            }}
          >
            <span
              className="text-red-700 font-extrabold leading-none"
              style={{ fontSize: "clamp(20px, 2vw, 34px)" }}
            >
              ①
            </span>
            <span
              className="mt-1 text-stone-900 font-bold"
              style={{
                fontSize: "clamp(18px, 1.7vw, 28px)",
                letterSpacing: "0.15em",
              }}
            >
              笑顔
            </span>
            <p
              className="mt-1 text-stone-700 leading-snug"
              style={{ fontSize: "clamp(11px, 0.85vw, 15px)" }}
            >
              いつも明るい
              <br />
              笑顔を絶やさない
            </p>
          </div>

          {/* ②元気（中央の赤丸の真下） */}
          <div
            className="absolute flex flex-col items-center text-center"
            style={{
              top: "45%",
              left: "44%",
              transform: "translateX(-50%)",
              width: "26%",
            }}
          >
            <span
              className="text-red-700 font-extrabold leading-none"
              style={{ fontSize: "clamp(20px, 2vw, 34px)" }}
            >
              ②
            </span>
            <span
              className="mt-1 text-stone-900 font-bold"
              style={{
                fontSize: "clamp(18px, 1.7vw, 28px)",
                letterSpacing: "0.15em",
              }}
            >
              元気
            </span>
            <p
              className="mt-1 text-stone-700 leading-snug"
              style={{ fontSize: "clamp(11px, 0.85vw, 15px)" }}
            >
              大きな声と
              <br />
              全力のプレー
            </p>
          </div>

          {/* ③メリハリ（右の赤丸の真下、豹の影響範囲は避ける） */}
          <div
            className="absolute flex flex-col items-center text-center"
            style={{
              top: "45%",
              left: "75.5%",
              transform: "translateX(-50%)",
              width: "26%",
            }}
          >
            <span
              className="text-red-700 font-extrabold leading-none"
              style={{ fontSize: "clamp(20px, 2vw, 34px)" }}
            >
              ③
            </span>
            <span
              className="mt-1 text-stone-900 font-bold"
              style={{
                fontSize: "clamp(18px, 1.7vw, 28px)",
                letterSpacing: "0.1em",
              }}
            >
              メリハリ
            </span>
            <p
              className="mt-1 text-stone-700 leading-snug"
              style={{ fontSize: "clamp(11px, 0.85vw, 15px)" }}
            >
              やる時とやすむ時
              <br />
              の切り替え
            </p>
          </div>

          {/* 一番下：まとめの一文（人物シルエットの上の余白に収める） */}
          <p
            className="absolute font-bold text-[#fdf6e3]"
            style={{
              top: "53%",
              left: "50%",
              transform: "translateX(-50%)",
              fontSize: "clamp(14px, 1.3vw, 22px)",
              letterSpacing: "0.05em",
              whiteSpace: "nowrap",
              textShadow: "0 1px 3px rgba(0,0,0,0.85)",
            }}
          >
            3つを大切にして、和気藹々をつくり上げよう！
          </p>
        </div>
      </div>

      {/* スマホ版 */}
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