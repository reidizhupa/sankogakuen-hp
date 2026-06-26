"use client";

import { useEffect, useState } from "react";

// Target date: September 15, 10:00 AM JST
// ISO string with JST offset (+09:00)
const TARGET_DATE = new Date("2026-09-15T10:00:00+09:00").getTime();

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export default function Countdown() {
    const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date().getTime();
            const difference = TARGET_DATE - now;

            if (difference <= 0) {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            setTimeLeft({
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            });
        };

        // Calculate immediately on mount, then interval kicks in
        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, []);

    // Prevent hydration mismatch by showing a loading state until mounted
    if (!timeLeft) {
        return (
            <div className="flex items-center justify-center min-h-[200px]">
                <div className="animate-pulse text-xl text-slate-400 font-medium">
                    読み込み中...
                </div>
            </div>
        );
    }

    const timeBlocks = [
        { label: "日", value: timeLeft.days },
        { label: "時間", value: timeLeft.hours },
        { label: "分", value: timeLeft.minutes },
        { label: "秒", value: timeLeft.seconds },
    ];

    return (
        <div className="flex flex-col items-center justify-center p-8 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 rounded-3xl shadow-2xl border border-slate-800 max-w-2xl mx-auto backdrop-blur-md">
            <h2 className="text-sm uppercase tracking-widest text-indigo-400 font-semibold mb-6">
                目標日時：9月15日 10:00 (JST)
            </h2>

            <div className="grid grid-cols-4 gap-4 sm:gap-6 w-full">
                {timeBlocks.map((block, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center bg-slate-900/50 border border-slate-700/50 rounded-2xl p-4 sm:p-6 shadow-inner transform transition-all duration-500 hover:scale-105"
                    >
                        <span className="text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-300 font-mono tracking-tight tabular-nums">
                            {String(block.value).padStart(2, "0")}
                        </span>
                        <span className="text-xs sm:text-sm font-medium text-indigo-300 mt-2">
                            {block.label}
                        </span>
                    </div>
                ))}
            </div>

            {timeLeft.days === 0 &&
                timeLeft.hours === 0 &&
                timeLeft.minutes === 0 &&
                timeLeft.seconds === 0 && (
                    <div className="mt-8 text-xl font-bold text-emerald-400 animate-bounce">
                        時間になりました！
                    </div>
                )}
        </div>
    );
}
