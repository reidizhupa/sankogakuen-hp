import { notFound } from "next/navigation";
import Link from "next/link";

interface MemberInfo {
    name: string;
    role: string;
    school: string;
    hobbies: string;
    resolution: string;
    imageUrl: string;
}

// 1. Shared Organization Social Media Links (One value for everyone)
const SHARED_SNS = {
    line: "https://line.me/ti/p/~your_official_line",
    instagram: "https://instagram.com/your_official_instagram",
    facebook: "https://facebook.com/your_official_facebook",
    tiktok: "https://tiktok.com/@your_official_tiktok",
};

// 2. Member Database (Sleek and focused only on personal details)
const membersData: Record<string, MemberInfo> = {
    komiya: {
        name: "小宮 遥斗",
        role: "団長",
        school: "東京リゾート＆スポーツ専門学校",
        hobbies: "ギターを弾くこと、一発ギャグ",
        resolution:
            "笑いの絶えない最高の団にします！！ 史上最高の三フェスに！！！",
        imageUrl:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
    arai: {
        name: "新井 真季",
        role: "副団長",
        school: "東京ビューティー＆ブライダル専門学校",
        hobbies: "ネイル、もつ鍋",
        resolution: "みんながキラキラ輝ける サンフェスにします！！",
        imageUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    },
    teppei: {
        name: "泉 哲平",
        role: "副団長",
        school: "東京みらいAI&IT専門学校",
        hobbies: "サイクリングと車の運転",
        resolution: "優勝絶対！",
        imageUrl:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    },
    ida: {
        name: "井田 星南",
        role: "副団長",
        school: "東京スイーツ＆カフェ専門学校",
        hobbies: "バスケ、ドライブ",
        resolution:
            "勝ちにこだわって赤団と サンフェスをさいこうに盛り上げます！！",
        imageUrl:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    },
    takayama: {
        name: "高山 桃悠",
        role: "副団長",
        school: "東京リゾート＆スポーツ専門学校",
        hobbies: "スティッチ探し",
        resolution: "みんなの笑顔と力を合わせて、 最高の赤団を目指します！！",
        imageUrl:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
    },
    atumi: {
        name: "渥美 美月",
        role: "副団長",
        school: "東京立川こども専門学校",
        hobbies: "ライブに行く・マジック",
        resolution:
            "今までにないくらい最高の 三フェスにするために最後まで 笑顔で団を盛り上げます！！！",
        imageUrl:
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop",
    },
    jyunsei: {
        name: "井之上 準星",
        role: "演舞リーダー",
        school: "東京リゾート＆スポーツ専門学校",
        hobbies: "ライブ・ギター",
        resolution: "誰よりも熱く、誰よりも本気で挑みます。",
        imageUrl:
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    },
    aikawa: {
        name: "相川 心那",
        role: "パフォーマンスリーダー",
        school: "東京スイーツ＆カフェ専門学校",
        hobbies: "ライブに行くこと、パッションティー",
        resolution: "笑顔あふれる最高の三フェスに！！！！ 絶対優勝！",
        imageUrl:
            "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
    },
};

interface PageProps {
    params: Promise<{ username: string }>;
}

export default async function MemberPage({ params }: PageProps) {
    const { username } = await params;
    const memberKey = username.toLowerCase();
    const member = membersData[memberKey];

    if (!member) {
        notFound();
    }

    // Generate automated left sidebar items dynamically from data keys
    const automatedSidebarList = Object.entries(membersData).map(
        ([slug, data]) => ({
            slug,
            name: data.name,
        }),
    );

    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-pink-200">
            {/* --- HEADER --- */}
            <header className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center bg-white">
                <div className="font-bold text-xl tracking-tight">サイト名</div>
                <nav className="flex items-center space-x-8 text-sm font-medium text-gray-600">
                    <a href="#" className="hover:text-black">
                        ページ
                    </a>
                    <a href="#" className="hover:text-black">
                        ページ
                    </a>
                    <a href="#" className="hover:text-black">
                        ページ
                    </a>
                    <button className="bg-[#ebdcd0] hover:bg-[#decbc0] text-gray-800 font-semibold py-2 px-6 rounded-md transition-colors text-xs">
                        ボタン
                    </button>
                </nav>
            </header>

            {/* --- BANNER / MAIN AREA --- */}
            <div className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 py-12 px-6 relative overflow-hidden">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 relative z-10">
                    {/* Automated Sidebar */}
                    <aside className="w-full md:w-52 bg-white/80 backdrop-blur-md rounded-3xl p-6 text-gray-800 flex flex-col shadow-sm max-h-[480px] overflow-y-auto">
                        <h2 className="text-[#4146e2] font-bold text-lg mb-4 border-b border-gray-200/50 pb-2">
                            メンバー
                        </h2>
                        <ul className="space-y-3 text-xs font-medium">
                            {automatedSidebarList.map((m, idx) => {
                                const isActive = m.slug === memberKey;
                                return (
                                    <li
                                        key={idx}
                                        className="flex items-center space-x-1"
                                    >
                                        <span
                                            className={
                                                isActive
                                                    ? "text-red-500 font-bold"
                                                    : "text-gray-400"
                                            }
                                        >
                                            •
                                        </span>
                                        <Link
                                            href={`/members/${m.slug}`}
                                            className={`hover:text-blue-600 transition-colors ${
                                                isActive
                                                    ? "text-black font-bold underline"
                                                    : "text-gray-700"
                                            }`}
                                        >
                                            {m.name}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </aside>

                    {/* Dynamic Content Card */}
                    <section className="flex-1 bg-[#ebdcd0]/80 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-sm flex flex-col md:flex-row justify-between items-start gap-8">
                        <div className="flex-1 space-y-4">
                            <h1 className="text-red-500 text-4xl md:text-5xl font-black tracking-widest flex gap-4">
                                {member.name.split(" ").map((part, i) => (
                                    <span key={i}>{part}</span>
                                ))}
                            </h1>
                            <p className="text-lg font-bold text-gray-700 pt-2">
                                {member.role}
                            </p>

                            <div className="space-y-3 text-xs leading-relaxed text-gray-800 border-t border-gray-400/30 pt-4 max-w-xl font-semibold">
                                <p>【学校名】 {member.school}</p>
                                <p>【趣味】 {member.hobbies}</p>
                                <p className="underline decoration-gray-400 decoration-1 underline-offset-4 text-justify pt-2">
                                    意気込み: {member.resolution}
                                </p>
                            </div>
                        </div>

                        {/* Profile Picture */}
                        <div className="w-full md:w-64 aspect-square relative rounded shadow-xl overflow-hidden bg-black flex-shrink-0">
                            <img
                                src={member.imageUrl}
                                alt={member.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </section>
                </div>
            </div>

            {/* --- LOWER SECTIONS --- */}
            <div className="max-w-2xl mx-auto px-6 py-16 space-y-16">
                {/* Social Media Section using SHARED_SNS constant */}
                <section className="space-y-6">
                    <h2 className="text-xl font-bold tracking-tight text-black">
                        SNS 参加してくれたら嬉しいです。
                    </h2>
                    <div className="flex items-center space-x-5">
                        {/* LINE */}
                        <a
                            href={SHARED_SNS.line}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black hover:text-gray-700 transition-colors"
                            aria-label="LINE"
                        >
                            <svg
                                className="w-10 h-10"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M24 10.304c0-5.369-5.383-9.738-12-9.738s-12 4.369-12 9.738c0 4.814 4.269 8.846 10.036 9.564.391.084.922.258 1.057.592.121.303.079.777.039 1.084l-.171 1.027c-.052.303-.251 1.184 1.081.646 1.333-.537 7.18-4.227 9.799-7.236 2.064-2.319 3.159-4.761 3.159-7.673zm-14.865 3.913h-2.344a.43.43 0 0 1-.43-.43v-5.234a.43.43 0 0 1 .43-.43h.521a.43.43 0 0 1 .43.43v4.304h1.393a.43.43 0 0 1 .43.43v.51a.43.43 0 0 1-.43.43zm2.593-.43a.43.43 0 0 1-.43.43h-.521a.43.43 0 0 1-.43-.43v-5.234a.43.43 0 0 1 .43-.43h.521a.43.43 0 0 1 .43.43v5.234zm4.845 0a.43.43 0 0 1-.43.43h-.49a.43.43 0 0 1-.383-.234l-2.022-2.87v2.674a.43.43 0 0 1-.43.43h-.521a.43.43 0 0 1-.43-.43v-5.234a.43.43 0 0 1 .43-.43h.491c.171 0 .326.1.396.255l1.994 2.835v-2.66a.43.43 0 0 1 .43-.43h.521a.43.43 0 0 1 .43.43v5.234zm3.627-3.411h-1.423v1.078h1.423a.43.43 0 0 1 .43.43v.496a.43.43 0 0 1-.43.43h-1.423v1.063h1.423a.43.43 0 0 1 .43.43v.511a.43.43 0 0 1-.43.43h-2.375a.43.43 0 0 1-.43-.43v-5.234a.43.43 0 0 1 .43-.43h2.375a.43.43 0 0 1 .43.43v.511a.43.43 0 0 1-.43.435z" />
                            </svg>
                        </a>
                        {/* Instagram */}
                        <a
                            href={SHARED_SNS.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black hover:text-gray-700 transition-colors"
                            aria-label="Instagram"
                        >
                            <svg
                                className="w-10 h-10"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <rect
                                    x="2"
                                    y="2"
                                    width="20"
                                    height="20"
                                    rx="5"
                                    ry="5"
                                ></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line
                                    x1="17.5"
                                    y1="6.5"
                                    x2="17.51"
                                    y2="6.5"
                                ></line>
                            </svg>
                        </a>
                        {/* Facebook */}
                        <a
                            href={SHARED_SNS.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black hover:text-gray-700 transition-colors"
                            aria-label="Facebook"
                        >
                            <svg
                                className="w-10 h-10"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                        </a>
                        {/* TikTok */}
                        <a
                            href={SHARED_SNS.tiktok}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black hover:text-gray-700 transition-colors"
                            aria-label="TikTok"
                        >
                            <svg
                                className="w-10 h-10"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.03 1.62 4.19 1.15 1.25 2.75 1.93 4.43 2.11v3.83c-1.39-.07-2.78-.54-3.92-1.36-.78-.58-1.42-1.34-1.87-2.22-.01 2.3-.01 4.59-.02 6.89-.04 3.25-1.14 6.51-3.66 8.58-2.6 2.16-6.38 2.61-9.42 1.22-3.14-1.37-5.26-4.71-5.11-8.17.15-3.89 3.09-7.39 6.96-8.06 1.05-.19 2.13-.1 3.16.18v4.03c-1.03-.43-2.23-.41-3.23.13-1.15.58-1.91 1.78-1.93 3.07-.04 1.78 1.27 3.39 3.04 3.61 1.73.28 3.48-.7 3.92-2.39.11-.42.14-.85.14-1.29-.01-4.43-.01-8.86-.01-13.3z" />
                            </svg>
                        </a>
                    </div>
                </section>

                {/* Contact Form */}
                <section className="space-y-6">
                    <h2 className="text-xl font-bold tracking-tight text-black">
                        お問い合わせはこちら
                    </h2>
                    <form className="space-y-4 text-xs font-semibold">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                                <label className="text-gray-700 block">
                                    名
                                </label>
                                <input
                                    type="text"
                                    placeholder="Jane"
                                    className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:border-black bg-white"
                                />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-gray-700 block">
                                    姓
                                </label>
                                <input
                                    type="text"
                                    placeholder="Smitherton"
                                    className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:border-black bg-white"
                                />
                            </div>
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-gray-700 block">
                                メールアドレス
                            </label>
                            <input
                                type="email"
                                placeholder="email@janesfakedomain.net"
                                className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:border-black bg-white"
                            />
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-gray-700 block">
                                あなたのメッセージ
                            </label>
                            <textarea
                                rows={5}
                                placeholder="質問またはメッセージを入力してください"
                                className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:border-black bg-white resize-none"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-black hover:bg-gray-800 text-white font-bold py-3 px-4 rounded transition-colors text-sm tracking-widest mt-2"
                        >
                            送信
                        </button>
                    </form>
                </section>
            </div>
        </div>
    );
}
