import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">О нас</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Мы — профессионалы в области автомобильного аудио с более чем
            10-летним опытом
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=400&fit=crop"
              alt="Наш магазин"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Наша история
            </h2>
            <p className="text-gray-600 mb-4">
              Компания "АвтоЗвук" была основана в 2014 году группой энтузиастов
              автомобильного звука. За эти годы мы помогли тысячам клиентов
              создать идеальную звуковую систему в их автомобилях.
            </p>
            <p className="text-gray-600">
              Мы работаем только с проверенными брендами и предлагаем полный
              цикл услуг: от консультации и продажи до профессиональной
              установки и настройки оборудования.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Наши преимущества
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Опыт и экспертиза</h3>
              <p className="text-gray-600">
                Более 10 лет опыта в области автомобильного аудио
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Команда профессионалов
              </h3>
              <p className="text-gray-600">
                Сертифицированные специалисты по установке и настройке
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Star" size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Высокое качество</h3>
              <p className="text-gray-600">
                Работаем только с оригинальным оборудованием ведущих брендов
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Готовы улучшить звук в вашем автомобиле?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами для бесплатной консультации. Мы поможем подобрать
            оптимальное решение под ваш бюджет и предпочтения.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+74951234567"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              <Icon name="Phone" size={20} className="mr-2" />
              Позвонить нам
            </a>
            <a
              href="mailto:info@autosound.ru"
              className="inline-flex items-center px-6 py-3 border border-blue-600 text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-colors"
            >
              <Icon name="Mail" size={20} className="mr-2" />
              Написать email
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
