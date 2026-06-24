import React from "react";
import Image from "next/image";

export default function AkadanPage() {
    return (
        // 💡 高さを一回り大きく変更（h-[500px] md:h-[650px] lg:h-[550px]）
        <div className="relative w-full h-[500px] md:h-[650px] lg:h-[550px] overflow-hidden font-sans">
            <Image
                src="/img/akadannsiryou4.png"
                alt="赤団 豹牙"
                fill
                priority
                className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-black/45 z-10" />

            {/* 💡 横の余白をレスポンシブにし、広い画面でのスケール感を調整 */}
            <div className="relative z-20 flex w-full h-full items-center px-6 md:px-[120px]">
                {/* 💡 テキストエリアの横幅を少し広く（w-[520px]） */}
                <div className="ml-auto flex flex-col justify-center w-full max-w-[520px] shrink-0 text-white">
                    {/* 💡 ボーダーを太く（border-l-[8px]）、上下のパディングを拡大 */}
                    <div className="border-l-[8px] border-red-600 pl-8 py-2">
                        {/* 💡 タイトルを大きく（text-5xl md:text-6xl） */}
                        <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-widest">
                            三か条
                        </h2>
                        {/* 💡 三か条の中身を大きく（text-xl md:text-2xl）、行間をさらに広く */}
                        <p className="text-xl md:text-2xl font-bold leading-loose text-white/90 tracking-wider">
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