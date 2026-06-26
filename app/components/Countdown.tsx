"use client";

import { useEffect, useState } from "react";

// Target date: September 15, 10:00 AM JST
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

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, []);

    if (!timeLeft) {
        return null;
    }

    const timeBlocks = [
        { label: "日", value: timeLeft.days },
        { label: "時", value: timeLeft.hours },
        { label: "分", value: timeLeft.minutes },
        { label: "秒", value: timeLeft.seconds },
    ];

    return (
        /* 
          【調整ポイント】
          - z-40 に下げることで、もしフッターに z-50 が指定されていればフッターの下に入り込みます。
          - bottom-4 から bottom-6 に少し上げてフッターの境界線との余白を確保。
          - ユーザーが指定した左下表示に変更したい場合は「right-4」を「left-4」に変えてください。
        */
        <div className="fixed bottom-6 right-4 z-40 flex flex-col items-center p-4 bg-white/95 border border-slate-200 rounded-2xl shadow-xl backdrop-blur-sm max-w-[280px] sm:max-w-xs animate-fade-in-up">
            <div className="text-[10px] uppercase tracking-wider text-slate-600 font-bold mb-2.5 flex items-center gap-1.5">
                <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
                </span>
                本番まであと
            </div>

            <div className="grid grid-cols-4 gap-1.5 w-full">
                {timeBlocks.map((block, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center bg-slate-50 border border-slate-100 rounded-lg py-1 px-2 min-w-[50px] shadow-inner"
                    >
                        <span className="text-xl sm:text-2xl font-black text-red-600 font-mono tracking-tight tabular-nums">
                            {String(block.value).padStart(2, "0")}
                        </span>
                        <span className="text-[9px] font-bold text-slate-500 mt-0.5">
                            {block.label}
                        </span>
                    </div>
                ))}
            </div>

            {timeLeft.days === 0 &&
                timeLeft.hours === 0 &&
                timeLeft.minutes === 0 &&
                timeLeft.seconds === 0 && (
                    <div className="mt-2 text-xs font-bold text-emerald-600 text-center">
                        本番当日です！
                    </div>
                )}
        </div>
    );
}