// src/app/memories/page.tsx
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function MemoriesPage() {
  const [photos, setPhotos] = useState<string[]>([]);

  // ページが開かれたら、自動で裏方のAPI（/api/photos）を叩いて画像一覧をもらう
  useEffect(() => {
    fetch('/api/photos')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setPhotos(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-[#f9f8f6] text-[#333] font-sans antialiased">
      
      {/* ヒーローエリア */}
      <header className="relative h-[40vh] w-full bg-gradient-to-r from-red-500 to-pink-500 flex flex-col justify-center items-center text-center px-4 text-white">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-wider m-0 mb-3 drop-shadow-md">
          2025 MEMORIES
        </h1>
        <p className="text-gray-100 text-sm md:text-lg font-medium m-0 max-w-md border-t border-white/30 pt-2">
          あの眩しい一瞬を、もう一度。
        </p>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-[1200px] mx-auto p-5 pb-20">
        {photos.length === 0 && (
          <p className="text-center text-gray-400 py-20">画像を読み込み中、または画像がありません...</p>
        )}

        {/* 画像のサイズに合わせて自動でレンガ状に並べるエリア */}
        <div className="columns-2 sm:columns-3 md:columns-4 gap-4 space-y-4">
          {photos.map((url, index) => (
            <PhotoItem key={index} url={url} index={index} />
          ))}
        </div>
      </main>

      {/* フッター */}
      <footer className="text-center py-12 bg-white border-t border-gray-100">
        <Link href="/" className="inline-block text-gray-500 text-sm mb-4 hover:text-[#ff5a60]">
          ← トップページへ戻る
        </Link>
        <p className="m-0 text-xs text-gray-400">© 2026 赤団HP. All rights reserved.</p>
      </footer>

    </div>
  );
}

// 画像1枚ごとのコンポーネント（ここで縦長・横長を自動判別）
function PhotoItem({ url, index }: { url: string; index: number }) {
  const [aspectClass, setAspectClass] = useState('aspect-square');

  return (
    <div className={`break-inside-avoid relative rounded-xl overflow-hidden shadow-sm hover:scale-[1.02] transition-transform bg-gray-200 ${aspectClass}`}>
      <Image
        src={url}
        alt={`思い出の写真 ${index + 1}`}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
        onLoad={(e) => {
          const img = e.target as HTMLImageElement;
          if (img.naturalHeight > img.naturalWidth) {
            setAspectClass('aspect-[3/4]'); // 縦長
          } else if (img.naturalWidth > img.naturalHeight * 1.3) {
            setAspectClass('aspect-[4/3]'); // 横長
          } else {
            setAspectClass('aspect-square'); // 正方形っぽいやつ
          }
        }}
      />
    </div>
  );
}