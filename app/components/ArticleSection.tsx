interface ArticleCardProps {
  title: string;
  summary: string;
}

function ArticleCard({ title, summary }: ArticleCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-md transition-shadow">
      <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-400">
        画像プレースホルダー
      </div>
      <div className="p-6">
        <h3 className="font-bold text-xl mb-2 group-hover:text-red-600 transition-colors">{title}</h3>
        <p className="text-gray-600 text-sm">{summary}</p>
      </div>
    </div>
  );
}

export default function ArticleSection() {
  const articles = [
    { title: '記事タイトル 1', summary: 'ここに1つ目の記事の概要やリード文が入ります。' },
    { title: '記事タイトル 2', summary: 'ここに2つ目の記事の概要やリード文が入ります。' },
  ];

  return (
    <section id="article" className="scroll-mt-20">
      <h2 className="text-3xl font-bold border-b-2 border-red-600 pb-2 mb-6">Article</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article, index) => (
          <ArticleCard key={index} title={article.title} summary={article.summary} />
        ))}
      </div>
    </section>
  );
}