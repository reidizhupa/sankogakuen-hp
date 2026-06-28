"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function MemoriesSection() {
  const [allPhotos, setAllPhotos] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(0); // 何ページ目か（0からスタート）
  const photosPerPage = 5; // 1ページに表示する枚数

  // APIから画像一覧を取得
  useEffect(() => {
    fetch("/api/photos")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setAllPhotos(data);
        }
      })
      .catch((err) => console.error("プレビュー画像の取得失敗:", err));
  }, []);

  // 現在のページに表示する5枚を計算
  const startIndex = currentPage * photosPerPage;
  const displayPhotos = allPhotos.slice(startIndex, startIndex + photosPerPage);

  // 総ページ数
  const totalPages = Math.ceil(allPhotos.length / photosPerPage);

  // 「次へ」ボタン
  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    } else {
      setCurrentPage(0); // 最後のページだったら最初に戻る
    }
  };

  // 「前へ」ボタン
  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    } else {
      setCurrentPage(totalPages - 1); // 最初だったら最後に飛ぶ
    }
  };

  return (
    <section className="relative w-full min-h-[850px] mx-auto overflow-hidden flex items-center justify-center font-sans py-16">
      {/* 背景のグラフィック画像 */}
      <Image
        src="/img/omide.png"
        alt="赤団 背景"
        fill
        priority
        className="object-cover"
      />

      {/* 前面のテキストカード */}
      <div className="relative z-10 w-[90%] max-w-[1000px] px-6 py-12 md:px-12 md:py-12 text-center bg-white/80 backdrop-blur-sm rounded-3xl shadow-sm border border-white/40">
        {/* セクションタイトル */}
        <h2 className="text-[#FA2D66] text-4xl md:text-5xl font-black tracking-widest mb-4">
          2025の思い出
        </h2>
        <p className="text-xs text-gray-400 font-bold tracking-widest uppercase mb-6">
          Memories of Three Fes
        </p>

        {/* 説明文 */}
        <p className="text-[#333333] text-sm md:text-base font-bold leading-relaxed max-w-[760px] mx-auto mb-8 tracking-wider">
          熱い声援、流した悔し涙、そして最高の笑顔。仲間と共に駆け抜けたあの眩しい一瞬一瞬を、写真とエピソードで振り返ります。赤団が一つになった、最高の記憶がここに。
        </p>

        {/* 📸 5枚の写真を横並びにするエリア（左右にスライド風の切り替えボタン付き） */}
        {allPhotos.length > 0 && (
          <div className="relative max-w-[900px] mx-auto mb-10 px-10 flex items-center justify-center">
            {/* 「前へ」ボタン（画像が5枚以上ある場合のみ表示） */}
            {totalPages > 1 && (
              <button
                onClick={handlePrev}
                className="absolute left-0 z-20 w-8 h-8 rounded-full bg-white/80 hover:bg-[#FA2D66] hover:text-white flex items-center justify-center text-[#FA2D66] font-bold shadow-sm transition-colors"
                aria-label="前の写真"
              >
                ←
              </button>
            )}

            {/* 写真5枚のグリッド（ふわっと切り替わるアニメーション用にkeyを設定） */}
            <div
              key={currentPage}
              className="grid grid-cols-5 gap-3 w-full animate-fade-in"
            >
              {displayPhotos.map((url, index) => (
                <div
                  key={index}
                  className="relative aspect-[3/4] w-full rounded-xl overflow-hidden shadow-sm border-2 border-white hover:scale-105 hover:rotate-1 transition-all duration-300 bg-gray-100"
                >
                  <Image
                    src={url}
                    alt={`プレビュー写真 ${startIndex + index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 20vw, 15vw"
                  />
                </div>
              ))}
            </div>

            {/* 「次へ」ボタン（画像が5枚以上ある場合のみ表示） */}
            {totalPages > 1 && (
              <button
                onClick={handleNext}
                className="absolute right-0 z-20 w-8 h-8 rounded-full bg-white/80 hover:bg-[#FA2D66] hover:text-white flex items-center justify-center text-[#FA2D66] font-bold shadow-sm transition-colors"
                aria-label="次の写真"
              >
                →
              </button>
            )}
          </div>
        )}

        {/* ボタン */}
        <div className="flex justify-center">
          <a
            href="/memories"
            className="
              inline-block
              px-12
              py-4
              bg-[#FA2D66]
              text-white
              text-base
              font-bold
              rounded-2xl
              shadow-md
              hover:bg-[#d61f52]
              hover:shadow-lg
              hover:scale-105
              transition-all
              duration-200
              tracking-widest
              text-center
            "
          >
            思い出の写真を見る
          </a>
        </div>
      </div>
    </section>
  );
}
