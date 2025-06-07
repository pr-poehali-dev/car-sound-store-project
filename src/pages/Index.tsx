import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Профессиональный
              <br />
              <span className="text-blue-200">Автозвук</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Широкий выбор качественного аудиооборудования для вашего
              автомобиля. Магнитолы, динамики, усилители и сабвуферы от ведущих
              брендов.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                <Link to="/catalog">
                  <Icon name="Search" size={20} className="mr-2" />
                  Посмотреть каталог
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                <Link to="/about">
                  <Icon name="Info" size={20} className="mr-2" />О нас
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Более 10 лет опыта в сфере автомобильного аудио
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Оригинальные товары
              </h3>
              <p className="text-gray-600">
                Работаем только с официальными поставщиками Pioneer, JBL, Alpine
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Wrench" size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Профессиональная установка
              </h3>
              <p className="text-gray-600">
                Сертифицированные мастера с опытом работы более 5 лет
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Гарантия качества</h3>
              <p className="text-gray-600">
                До 3 лет гарантии на товары и 1 год на установку
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Популярные товары
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Самые востребованные позиции в нашем каталоге
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="outline">
              <Link to="/catalog">
                Посмотреть все товары
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
