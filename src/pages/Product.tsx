import React from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Product = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <Icon
            name="AlertCircle"
            size={64}
            className="text-gray-400 mx-auto mb-4"
          />
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Товар не найден
          </h1>
          <Button asChild>
            <Link to="/catalog">
              <Icon name="ArrowLeft" size={20} className="mr-2" />
              Вернуться в каталог
            </Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="mb-8">
          <Link
            to="/catalog"
            className="text-blue-600 hover:text-blue-700 flex items-center"
          >
            <Icon name="ArrowLeft" size={20} className="mr-2" />
            Назад к каталогу
          </Link>
        </nav>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="lg:grid lg:grid-cols-2">
            <div className="p-8">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>

            <div className="p-8">
              <div className="mb-4">
                <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                  {product.category}
                </span>
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>

              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={20}
                      className={
                        i < Math.floor(product.rating) ? "fill-current" : ""
                      }
                    />
                  ))}
                </div>
                <span className="text-gray-600">
                  {product.rating} ({product.reviews} отзывов)
                </span>
              </div>

              <p className="text-gray-600 mb-6 text-lg">
                {product.description}
              </p>

              <div className="mb-8">
                <span className="text-4xl font-bold text-blue-600">
                  {product.price.toLocaleString()} ₽
                </span>
              </div>

              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="flex-1 bg-blue-600 hover:bg-blue-700"
                  onClick={() => addToCart(product)}
                >
                  <Icon name="ShoppingCart" size={20} className="mr-2" />
                  Добавить в корзину
                </Button>
                <Button variant="outline" size="lg">
                  <Icon name="Heart" size={20} />
                </Button>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex items-center text-sm text-gray-600">
                  <Icon name="Truck" size={16} className="mr-2" />
                  Бесплатная доставка по Москве
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Icon name="Shield" size={16} className="mr-2" />
                  Официальная гарантия 2 года
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Icon name="Wrench" size={16} className="mr-2" />
                  Профессиональная установка
                </div>
              </div>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Похожие товары
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/product/${relatedProduct.id}`}
                  className="group"
                >
                  <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {relatedProduct.name}
                      </h3>
                      <p className="text-blue-600 font-bold">
                        {relatedProduct.price.toLocaleString()} ₽
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Product;
