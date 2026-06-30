import Image from "next/image";

export default function SanFesSection() {
    return (
        <section className="relative w-full min-h-[720px] lg:h-[720px] mx-auto overflow-hidden flex items-center bg-[#111111] font-sans text-white">
            {/* 1. BACKGROUND IMAGE WITH GRADIENT OVERLAY */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                <Image
                    src="/img/bg11.jpeg" // ← Replace with your actual image path
                    alt="三フェス メインビジュアル"
                    fill
                    priority
                    className="object-cover object-center opacity-40 mix-blend-luminosity" // mix-blend turns the photo monochrome for that cool magazine look
                />
                {/* Dark vignette gradient overlay to ensure text contrast */}
                <div className="absolute inset-0 bg-[#111111]/20 mix-blend-multiply" />{" "}
            </div>

            {/* Neon accent glow to add depth over the image */}
            <div className="absolute top-1/3 -right-20 w-80 h-80 bg-[#FA2D66]/20 rounded-full blur-[120px] pointer-events-none z-0" />

            {/* 2. THE CONTENT GRID */}
            <div className="relative z-10 w-[90%] max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                {/* HERO TITLE */}
                <div className="lg:col-span-5 flex flex-col justify-center border-b border-white/10 pb-8 lg:border-b-0 lg:pb-0">
                    <span className="text-xs font-black tracking-[0.3em] text-[#FA2D66] uppercase mb-4 block">
                        // MAIN COLLEGE EVENT
                    </span>
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-wider text-white uppercase leading-none drop-shadow-md">
                        三フェス
                    </h2>
                    <p className="mt-4 text-white/40 text-sm font-mono tracking-widest">
                        [ SANSHIRO FESTIVAL ]
                    </p>
                </div>

                {/* THE CONTENT BLOCK */}
                <div className="lg:col-span-4 flex flex-col justify-center lg:pt-16">
                    <p className="text-gray-200 text-base md:text-lg font-medium leading-relaxed tracking-wide drop-shadow">
                        リゾスポ生が姉妹校と力を合わせてつくり上げる最大のイベント。助け合い、励まし合い、時にはうまくいかないことも・・・。いくつもの困難を乗り越えて得られる感動は、一生の思い出として胸に刻めます。
                    </p>
                </div>

                {/* THE ACTION ZONE (Big interactive circular button) */}
                <div className="lg:col-span-3 flex flex-col justify-end lg:justify-center items-center lg:items-end">
                    <a
                        href="/3fes"
                        className="
                            group
                            relative
                            w-full
                            max-w-[280px]
                            aspect-square
                            rounded-full
                            border border-white/30
                            backdrop-blur-sm
                            hover:border-[#FA2D66]
                            flex
                            flex-col
                            items-center
                            justify-center
                            transition-all
                            duration-500
                            hover:bg-[#FA2D66]
                            overflow-hidden
                        "
                    >
                        {/* Hover ripple effect */}
                        <span className="absolute inset-0 bg-gradient-to-tr from-[#FA2D66] to-[#ff5284] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

                        {/* Button Content */}
                        <div className="relative z-10 text-center space-y-2">
                            <span className="block text-sm font-black tracking-[0.2em] group-hover:text-white text-gray-400 transition-colors">
                                ENTER VIEW
                            </span>
                            <span className="block text-lg font-black tracking-widest text-white">
                                詳しくはこちら
                            </span>
                            <span className="block transform translate-y-0 group-hover:translate-x-2 transition-transform duration-300 text-xl">
                                →
                            </span>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}
