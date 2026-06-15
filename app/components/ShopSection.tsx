interface ProductCardProps {
  name: string;
  price: string;
}

function ProductCard({ name, price }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex flex-col justify-between hover:shadow-md transition-shadow">
      <div className="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center text-gray-400">
        Product Image
      </div>
      <div>
        <h3 className="font-semibold text-lg mb-1 text-gray-800">{name}</h3>
        <p className="text-red-600 font-bold">{price}</p>
      </div>
    </div>
  );
}

export default function ShopSection() {
  const products = [
    { name: 'プレミアム赤団Tシャツ', price: '¥3,500' },
    { name: '赤団公式ステッカー', price: '¥1,200' },
    { name: '限定マフラータオル', price: '¥8,000' },
  ];

  return (
    <section id="shop" className="scroll-mt-20">
      <h2 className="text-3xl font-bold border-b-2 border-red-600 pb-2 mb-6">Shop</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} name={product.name} price={product.price} />
        ))}
      </div>
    </section>
  );
}