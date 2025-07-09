import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img
                src="/img/691a8288-5dbb-40de-ab27-bca6f6418eeb.jpg"
                alt="Logo"
                className="w-10 h-10 rounded-lg"
              />
              <h1 className="text-2xl font-bold text-gray-900">АвтоЗапчасти</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#"
                className="text-gray-700 hover:text-auto-blue transition-colors"
              >
                Главная
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-auto-blue transition-colors"
              >
                Каталог
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-auto-blue transition-colors"
              >
                Бренды
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-auto-blue transition-colors"
              >
                Услуги
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-auto-blue transition-colors"
              >
                Гарантии
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-auto-blue transition-colors"
              >
                Контакты
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Icon name="Phone" size={16} className="mr-2" />
                +7 (495) 123-45-67
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-auto-blue to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-6">
              Качественные автозапчасти
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Оригинальные, аналоги и б/у запчасти для всех марок автомобилей
            </p>

            <div className="bg-white rounded-lg p-6 shadow-lg max-w-2xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <Input
                    placeholder="Поиск запчастей (например: тормозные колодки)"
                    className="text-gray-900"
                  />
                </div>
                <div className="flex-1">
                  <Input
                    placeholder="VIN код или марка авто"
                    className="text-gray-900"
                  />
                </div>
                <Button className="bg-auto-blue hover:bg-blue-700 px-8">
                  <Icon name="Search" size={20} className="mr-2" />
                  Найти
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Типы запчастей
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 bg-auto-blue rounded-full flex items-center justify-center">
                  <Icon name="Award" size={32} className="text-white" />
                </div>
                <CardTitle>Оригинальные запчасти</CardTitle>
                <CardDescription>
                  Запчасти от производителей автомобилей
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="mr-2 text-green-500"
                    />{" "}
                    Гарантия качества
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="mr-2 text-green-500"
                    />{" "}
                    Официальная гарантия
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="mr-2 text-green-500"
                    />{" "}
                    Идеальная совместимость
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-auto-blue hover:bg-blue-700">
                  Перейти в каталог
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                  <Icon name="Wrench" size={32} className="text-white" />
                </div>
                <CardTitle>Аналоги</CardTitle>
                <CardDescription>
                  Качественные аналоги по доступным ценам
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="mr-2 text-green-500"
                    />{" "}
                    Отличное соотношение цена/качество
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="mr-2 text-green-500"
                    />{" "}
                    Проверенные производители
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="mr-2 text-green-500"
                    />{" "}
                    Гарантия на все товары
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-orange-500 hover:bg-orange-600">
                  Перейти в каталог
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                  <Icon name="Recycle" size={32} className="text-white" />
                </div>
                <CardTitle>Б/у запчасти</CardTitle>
                <CardDescription>
                  Проверенные подержанные детали
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="mr-2 text-green-500"
                    />{" "}
                    Максимальная экономия
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="mr-2 text-green-500"
                    />{" "}
                    Техническая проверка
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="mr-2 text-green-500"
                    />{" "}
                    Краткосрочная гарантия
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-green-500 hover:bg-green-600">
                  Перейти в каталог
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-16 bg-auto-light">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Популярные бренды
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {["BMW", "Mercedes", "Audi", "Volkswagen", "Toyota", "Honda"].map(
              (brand) => (
                <div
                  key={brand}
                  className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                    <Icon name="Car" size={32} className="text-gray-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900">{brand}</h4>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Наши услуги
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-auto-blue rounded-full flex items-center justify-center">
                <Icon name="Truck" size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-gray-900">
                Быстрая доставка
              </h4>
              <p className="text-gray-600">
                Доставим запчасти по Москве и области в день заказа
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-auto-blue rounded-full flex items-center justify-center">
                <Icon name="Settings" size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-gray-900">
                Установка
              </h4>
              <p className="text-gray-600">
                Профессиональная установка в нашем сервисном центре
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-auto-blue rounded-full flex items-center justify-center">
                <Icon name="Search" size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-gray-900">
                Подбор по VIN
              </h4>
              <p className="text-gray-600">
                Точный подбор запчастей по VIN-коду автомобиля
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-auto-blue rounded-full flex items-center justify-center">
                <Icon name="Headphones" size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-gray-900">
                Консультации
              </h4>
              <p className="text-gray-600">
                Помощь специалистов в выборе нужных запчастей
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-16 bg-auto-light">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Гарантии качества
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-green-500 rounded-full flex items-center justify-center">
                <Icon name="Shield" size={40} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-4 text-gray-900">
                Гарантия качества
              </h4>
              <p className="text-gray-600">
                Все запчасти проходят контроль качества. Гарантия на
                оригинальные детали до 2 лет
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-blue-500 rounded-full flex items-center justify-center">
                <Icon name="RotateCcw" size={40} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-4 text-gray-900">
                Возврат товара
              </h4>
              <p className="text-gray-600">
                Возможность возврата в течение 14 дней при сохранении товарного
                вида
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-orange-500 rounded-full flex items-center justify-center">
                <Icon name="CreditCard" size={40} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-4 text-gray-900">
                Удобная оплата
              </h4>
              <p className="text-gray-600">
                Наличными, картой, безналичный расчет. Возможна рассрочка
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold mb-6">Контакты</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Icon
                    name="Phone"
                    size={20}
                    className="mr-4 text-auto-blue"
                  />
                  <div>
                    <p className="font-semibold">+7 (495) 123-45-67</p>
                    <p className="text-gray-400">
                      Звонки принимаем с 9:00 до 21:00
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" size={20} className="mr-4 text-auto-blue" />
                  <div>
                    <p className="font-semibold">info@autozapchasti.ru</p>
                    <p className="text-gray-400">
                      Ответим на email в течение часа
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Icon
                    name="MapPin"
                    size={20}
                    className="mr-4 text-auto-blue"
                  />
                  <div>
                    <p className="font-semibold">
                      Москва, ул. Автозаводская, 15
                    </p>
                    <p className="text-gray-400">Склад и офис продаж</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Режим работы</h4>
              <div className="space-y-2 text-gray-300">
                <p>Пн-Пт: 9:00 - 21:00</p>
                <p>Сб: 10:00 - 18:00</p>
                <p>Вс: выходной</p>
              </div>
              <div className="mt-6">
                <Button className="bg-auto-blue hover:bg-blue-700">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Написать в WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
