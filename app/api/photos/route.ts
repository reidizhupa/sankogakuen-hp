import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  // public/memories フォルダの絶対パスを取得
  const dirPath = path.join(process.cwd(), "public/memories");

  try {
    // フォルダ内のファイル名一覧を読み込む
    const files = fs.readdirSync(dirPath);

    // 画像ファイル（jpg, jpeg, png, webpなど）だけをフィルター
    const imageExtensions = [
      ".jpg",
      ".jpeg",
      ".png",
      ".webp",
      ".GIF",
      ".JPG",
      ".PNG",
    ];
    const photoUrls = files
      .filter((file) => imageExtensions.includes(path.extname(file)))
      .map((file) => `/memories/${file}`); // フロントで使えるパスに変換

    return NextResponse.json(photoUrls);
  } catch (error) {
    return NextResponse.json(
      { error: "フォルダが読み込めませんでした" },
      { status: 500 },
    );
  }
}
