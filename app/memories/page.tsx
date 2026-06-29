"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function MemoriesPage() {
    const [photos, setPhotos] = useState<string[]>([]);
    const [nextCursor, setNextCursor] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [initialLoaded, setInitialLoaded] = useState(false);

    // Ref attached to the bottom sentinel element to detect scrolling
    const observerRef = useRef<HTMLDivElement | null>(null);

    // Main function to fetch photos page by page
    const fetchPhotos = (cursorUrlParam: string | null = null) => {
        if (loading) return;
        setLoading(true);

        const url = cursorUrlParam
            ? `/api/photos?cursor=${encodeURIComponent(cursorUrlParam)}`
            : "/api/photos";

        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                if (data && Array.isArray(data.photos)) {
                    // CRITICAL: Append new photos to the end to prevent shifting up top
                    setPhotos((prev) => [...prev, ...data.photos]);
                    setNextCursor(data.nextCursor);
                }
                setInitialLoaded(true);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Failed to load photos:", err);
                setLoading(false);
                setInitialLoaded(true);
            });
    };

    // 1. Initial Load (First Batch)
    useEffect(() => {
        fetchPhotos(null);
    }, []);

    // 2. Infinite Scroll Observer Setup
    useEffect(() => {
        const currentObserverRef = observerRef.current;
        if (!currentObserverRef || !nextCursor) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !loading) {
                    fetchPhotos(nextCursor);
                }
            },
            { threshold: 0.1, rootMargin: "200px" }, // Pre-loads 200px before user hits bottom
        );

        observer.observe(currentObserverRef);

        return () => {
            if (currentObserverRef) observer.unobserve(currentObserverRef);
        };
    }, [nextCursor, loading]);

    return (
        <div className="min-h-screen bg-[#f9f8f6] text-[#333] font-sans antialiased">
            {/* Hero Area */}
            <header className="relative h-[40vh] w-full bg-gradient-to-r from-red-500 to-pink-500 flex flex-col justify-center items-center text-center px-4 text-white">
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-wider m-0 mb-3 drop-shadow-md">
                    2025 MEMORIES
                </h1>
                <p className="text-gray-100 text-sm md:text-lg font-medium m-0 max-w-md border-t border-white/30 pt-2">
                    あの眩しい一瞬を、もう一度。
                </p>
            </header>

            {/* Main Content */}
            <main className="max-w-[1200px] mx-auto p-5 pb-20">
                {photos.length === 0 && !loading && initialLoaded && (
                    <p className="text-center text-gray-400 py-20">
                        画像がありません...
                    </p>
                )}

                {/* STABLE LAYOUT: Standard CSS Grid with micro-tracks prevents re-balancing shifts */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 auto-rows-[10px]">
                    {photos.map((url, index) => (
                        <PhotoItem key={url + index} url={url} index={index} />
                    ))}
                </div>

                {/* Bottom target element to trigger infinite scroll loading */}
                <div
                    ref={observerRef}
                    className="w-full text-center py-10 h-10 flex items-center justify-center"
                >
                    {loading && (
                        <p className="text-gray-400 animate-pulse text-sm font-medium">
                            さらに読み込み中...
                        </p>
                    )}
                </div>
            </main>

            {/* Footer */}
            <footer className="text-center py-12 bg-white border-t border-gray-100">
                <Link
                    href="/"
                    className="inline-block text-gray-500 text-sm mb-4 hover:text-[#ff5a60]"
                >
                    ← トップページへ戻る
                </Link>
                <p className="m-0 text-xs text-gray-400">
                    © 2026 赤団HP. All rights reserved.
                </p>
            </footer>
        </div>
    );
}

// Custom Grid Item component mapping sizes cleanly into row spans
function PhotoItem({ url, index }: { url: string; index: number }) {
    // Baseline span sizing while loading to maintain grid density
    const [rowSpan, setRowSpan] = useState("row-span-[22]");

    return (
        <div
            className={`relative rounded-xl overflow-hidden shadow-sm hover:scale-[1.02] transition-transform bg-gray-200 w-full h-full ${rowSpan}`}
        >
            <Image
                src={url}
                alt={`思い出の写真 ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                onLoad={(e) => {
                    const img = e.target as HTMLImageElement;
                    const ratio = img.naturalHeight / img.naturalWidth;

                    // Allocate dynamic track spaces cleanly according to the actual aspect ratio
                    if (ratio > 1.2) {
                        setRowSpan("row-span-[28]"); // Portrait (Tall)
                    } else if (ratio < 0.8) {
                        setRowSpan("row-span-[16]"); // Landscape (Wide)
                    } else {
                        setRowSpan("row-span-[22]"); // Square-ish
                    }
                }}
            />
        </div>
    );
}
