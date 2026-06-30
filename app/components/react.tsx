import React from "react";
import Image from "next/image";

export default function AkadanPage() {
  return (
    // 外側のコンテナ：背景が黒、もしくは全体のバランスを取るためのラッパー
    <div className="w-full min-h-screen bg-[#f1e6cc] flex items-center justify-center overflow-hidden font-sans">
      
      {/* =================================================================
          PC版 (md以上)
          背景画像の縦横比（例として 16:11 や 4:3 などの固定アスペクト比コンテナ）を維持
          ================================================================= */}
      <div className="hidden md:block relative w-full max-w-[1200px] aspect-[16/11] mx-auto select-none">
        {/* 背景画像：コンテナのサイズに100%追従させる */}
        <Image
          src="/img/hyouga.png"
          alt="赤団 豹牙"
          fill
          priority
          className="object-contain z-10"
        />

        {/* 文字オーバーレイ：フォント指定と配置 */}
        <div
          className="absolute inset-0 z-20 pointer-events-none"
          style={{
            fontFamily: "'Shippori Mincho', 'Zen Antique', 'Noto Serif JP', serif",
          }}
        >
          {/* スローガン */}
          <p
            className="absolute text-red-900 font-black text-center"
            style={{
              top: "16%", /* 実際のHPの赤文字の位置に合わせて微調整 */
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: "clamp(16px, 2.2vw, 32px)",
              letterSpacing: "0.65em",
              whiteSpace: "nowrap",
              textIndent: "0.65em",
            }}
          >
            スローガン
          </p>

          {/* 和気藹々 大見出し */}
          <h1
            className="absolute text-[#8a1010] font-black text-center"
            style={{
              top: "32%", /* 中央の赤丸の真上・黄色ストロークの間 */
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: "clamp(36px, 5.2vw, 76px)",
              letterSpacing: "0.32em",
              textIndent: "0.32em",
              whiteSpace: "nowrap",
              lineHeight: 1,
            }}
          >
            和気藹々
          </h1>

          {/* 3箇条 ラベル */}
          <p
            className="absolute text-[#3b2a1a] font-black text-center"
            style={{
              top: "47%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: "clamp(22px, 3vw, 42px)",
              letterSpacing: "0.5em",
              textIndent: "0.5em",
              whiteSpace: "nowrap",
            }}
          >
            3箇条
          </p>

          {/* 区切り線（3箇条の下のライン） */}
          <div
            className="absolute bg-[#8a1010]/70"
            style={{
              top: "52%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "4%",
              height: "2px",
            }}
          />

          {/* ①笑顔（左の赤丸の下） */}
          <div
            className="absolute flex flex-col items-center text-center"
            style={{
              top: "66%",
              left: "11%", /* 実際のHP画像内の左赤丸の位置 */
              transform: "translateX(-50%)",
              width: "24%",
            }}
          >
            <div className="flex items-center justify-center gap-[8px]">
              <span
                className="flex items-center justify-center rounded-full bg-[#8a1010] text-white font-black border border-white/90"
                style={{
                  width: "clamp(24px, 2.8vw, 38px)",
                  height: "clamp(24px, 2.8vw, 38px)",
                  fontSize: "clamp(13px, 1.5vw, 20px)",
                }}
              >
                1
              </span>
              <span
                className="text-[#241a10] font-extrabold"
                style={{
                  fontSize: "clamp(18px, 2vw, 28px)",
                  letterSpacing: "0.22em",
                  textIndent: "0.22em",
                }}
              >
                笑顔
              </span>
            </div>
            <p
              className="mt-[8px] text-[#3a2c1d] font-medium leading-[1.7]"
              style={{
                fontSize: "clamp(10px, 1.1vw, 15px)",
              }}
            >
              仲間とたくさん笑い合い、
              <br />
              思いやりを忘れない。
              <br />
              笑顔あふれる団に！
            </p>
          </div>

          {/* ②元気（中央の赤丸の下） */}
          <div
            className="absolute flex flex-col items-center text-center"
            style={{
              top: "66%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "24%",
            }}
          >
            <div className="flex items-center justify-center gap-[8px]">
              <span
                className="flex items-center justify-center rounded-full bg-[#8a1010] text-white font-black border border-white/90"
                style={{
                  width: "clamp(24px, 2.8vw, 38px)",
                  height: "clamp(24px, 2.8vw, 38px)",
                  fontSize: "clamp(13px, 1.5vw, 20px)",
                }}
              >
                2
              </span>
              <span
                className="text-[#241a10] font-extrabold"
                style={{
                  fontSize: "clamp(18px, 2vw, 28px)",
                  letterSpacing: "0.22em",
                  textIndent: "0.22em",
                }}
              >
                元気
              </span>
            </div>
            <p
              className="mt-[8px] text-[#3a2c1d] font-medium leading-[1.7]"
              style={{
                fontSize: "clamp(10px, 1.1vw, 15px)",
              }}
            >
              大きな声・全力の応援！
              <br />
              最後まであきらめず、
              <br />
              みんなで盛り上げる！
            </p>
          </div>

          {/* ③メリハリ（右の赤丸の下） */}
          <div
            className="absolute flex flex-col items-center text-center"
            style={{
              top: "66%",
              left: "89%", /* 豹の爪やデザインを避けた右位置 */
              transform: "translateX(-50%)",
              width: "24%",
            }}
          >
            <div className="flex items-center justify-center gap-[8px]">
              <span
                className="flex items-center justify-center rounded-full bg-[#8a1010] text-white font-black border border-white/90"
                style={{
                  width: "clamp(24px, 2.8vw, 38px)",
                  height: "clamp(24px, 2.8vw, 38px)",
                  fontSize: "clamp(13px, 1.5vw, 20px)",
                }}
              >
                3
              </span>
              <span
                className="text-[#241a10] font-extrabold"
                style={{
                  fontSize: "clamp(18px, 2vw, 28px)",
                  letterSpacing: "0.14em",
                  textIndent: "0.14em",
                }}
              >
                メリハリ
              </span>
            </div>
            <p
              className="mt-[8px] text-[#3a2c1d] font-medium leading-[1.7]"
              style={{
                fontSize: "clamp(10px, 1.1vw, 15px)",
              }}
            >
              やるときは全力でやる。
              <br />
              聞くときはしっかり聞く。
              <br />
              けじめをつけて行動する！
            </p>
          </div>

          {/* 一番下：まとめの一文 */}
          <p
            className="absolute font-extrabold text-[#fdf3dc] text-center"
            style={{
              bottom: "12%", /* シルエットの手前・最下部のバランス位置 */
              left: "50%",
              transform: "translateX(-50%)",
              fontSize: "clamp(14px, 1.8vw, 24px)",
              letterSpacing: "0.08em",
              whiteSpace: "nowrap",
              textShadow: "0 2px 4px rgba(0,0,0,0.8)",
            }}
          >
            3つを大切にして、和気藹々をつくり上げよう！
          </p>
        </div>
      </div>

      {/* =================================================================
          スマホ版 (md未満)
          ================================================================= */}
      <div className="block md:hidden w-full relative">
        <Image
          src="/img/sannkajyou.png"
          alt="赤団 三箇条"
          width={720}
          height={1280}
          priority
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
}