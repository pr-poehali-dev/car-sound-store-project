import { Product } from "@/context/CartContext";

export const products: Product[] = [
  // Магнитолы
  {
    id: 1,
    name: "Pioneer DEH-X8700DAB",
    price: 15990,
    image:
      "https://images.unsplash.com/photo-1493663284031-b7e3aaa4cab7?w=400&h=300&fit=crop",
    description:
      "Автомагнитола с поддержкой DAB+, Bluetooth и USB. Мощность 4х50Вт, съёмная панель, подсветка клавиш.",
    category: "Магнитолы",
    rating: 4.8,
    reviews: 124,
  },
  {
    id: 2,
    name: "Kenwood DMX8020DABS",
    price: 32900,
    image:
      "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?w=400&h=300&fit=crop",
    description:
      "2-DIN мультимедиа с 6.8' экраном, Apple CarPlay, Android Auto, DAB+",
    category: "Магнитолы",
    rating: 4.9,
    reviews: 89,
  },
  {
    id: 3,
    name: "Alpine CDE-205DAB",
    price: 18900,
    image:
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
    description: "CD/USB ресивер с DAB+, Bluetooth, поддержка Hi-Res Audio",
    category: "Магнитолы",
    rating: 4.7,
    reviews: 156,
  },
  {
    id: 4,
    name: "Sony XAV-AX3005DB",
    price: 28500,
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    description: "6.95' сенсорный экран, Apple CarPlay, Android Auto, WebLink",
    category: "Магнитолы",
    rating: 4.6,
    reviews: 203,
  },

  // Динамики
  {
    id: 5,
    name: "JBL GTO629",
    price: 8990,
    image:
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400&h=300&fit=crop",
    description:
      'Коаксиальная акустика 6.5" 180W, частотный диапазон 53-21000 Гц',
    category: "Динамики",
    rating: 4.6,
    reviews: 89,
  },
  {
    id: 6,
    name: "Focal 165 AS",
    price: 23990,
    image:
      "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=400&h=300&fit=crop",
    description:
      "Компонентная акустика премиум класса 6.5', алюминиевые твитеры",
    category: "Динамики",
    rating: 5.0,
    reviews: 67,
  },
  {
    id: 7,
    name: "Kenwood KFC-PS1796",
    price: 6790,
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop",
    description: 'Овальная акустика 6x9" 320W, 3-полосная конструкция',
    category: "Динамики",
    rating: 4.4,
    reviews: 203,
  },
  {
    id: 8,
    name: "Pioneer TS-G1720F",
    price: 3990,
    image:
      "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=300&fit=crop",
    description: 'Коаксиальные динамики 6.5" 250W, бумажный диффузор',
    category: "Динамики",
    rating: 4.3,
    reviews: 145,
  },
  {
    id: 9,
    name: "Morel Maximo Ultra 602",
    price: 15900,
    image:
      "https://images.unsplash.com/photo-1531525645387-7f14be1bdbbd?w=400&h=300&fit=crop",
    description: 'Компонентная система 6.5", шёлковые твитеры, мощность 120W',
    category: "Динамики",
    rating: 4.8,
    reviews: 92,
  },

  // Сабвуферы
  {
    id: 10,
    name: "Sony XS-W104ES",
    price: 18900,
    image:
      "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=300&fit=crop",
    description:
      'Сабвуфер 10" 1100W, двойная катушка, частотный диапазон 28-400 Гц',
    category: "Сабвуферы",
    rating: 4.7,
    reviews: 98,
  },
  {
    id: 11,
    name: "JBL Stage 1200B",
    price: 12900,
    image:
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
    description: 'Пассивный сабвуфер 12" 250W RMS, полипропиленовый диффузор',
    category: "Сабвуферы",
    rating: 4.5,
    reviews: 156,
  },
  {
    id: 12,
    name: "Alpine SWS-1243D",
    price: 8490,
    image:
      "https://images.unsplash.com/photo-1493663284031-b7e3aaa4cab7?w=400&h=300&fit=crop",
    description: 'Сабвуфер 12" 300W RMS, двойная катушка 4+4 Ом',
    category: "Сабвуферы",
    rating: 4.6,
    reviews: 134,
  },

  // Усилители
  {
    id: 13,
    name: "Alpine KTA-450",
    price: 12500,
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    description:
      "4-канальный усилитель мощности 45W x 4, класс AB, компактный размер",
    category: "Усилители",
    rating: 4.9,
    reviews: 156,
  },
  {
    id: 14,
    name: "Focal FPX 4.400",
    price: 24900,
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    description: "4-канальный усилитель 70W x 4, класс D, защита от перегрева",
    category: "Усилители",
    rating: 4.8,
    reviews: 87,
  },
  {
    id: 15,
    name: "Kenwood KAC-M3004",
    price: 8900,
    image:
      "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?w=400&h=300&fit=crop",
    description:
      "Компактный 4-канальный усилитель 50W x 4, высокий/низкий вход",
    category: "Усилители",
    rating: 4.4,
    reviews: 112,
  },
  {
    id: 16,
    name: "Pioneer GM-DX971",
    price: 15900,
    image:
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
    description: "Моноблок для сабвуфера 1600W, класс D, регулируемый фильтр",
    category: "Усилители",
    rating: 4.7,
    reviews: 98,
  },

  // Аксессуары
  {
    id: 17,
    name: "Набор проводов 4AWG",
    price: 3490,
    image:
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400&h=300&fit=crop",
    description:
      "Комплект проводов для подключения усилителя, предохранители, клеммы",
    category: "Аксессуары",
    rating: 4.2,
    reviews: 234,
  },
  {
    id: 18,
    name: "Конденсатор 1 Фарад",
    price: 4900,
    image:
      "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=400&h=300&fit=crop",
    description: "Буферный конденсатор для стабилизации питания усилителей",
    category: "Аксессуары",
    rating: 4.3,
    reviews: 67,
  },
  {
    id: 19,
    name: "Короб для сабвуфера 12'",
    price: 5900,
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop",
    description: "Готовый корпус из МДФ для 12' сабвуфера, фазоинвертор",
    category: "Аксессуары",
    rating: 4.1,
    reviews: 89,
  },
  {
    id: 20,
    name: "Антенна GPS/GLONASS",
    price: 1990,
    image:
      "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=300&fit=crop",
    description:
      "Внешняя антенна для навигационных систем, магнитное крепление",
    category: "Аксессуары",
    rating: 4.0,
    reviews: 156,
  },
];
