import type { Course } from '../types/index';

const courseExtras: { [key: number]: Course } = {
  1: {
    id: 1,
    title: "Основы Python",
    shortname: "python-basics",
    description: `Этот курс охватывает фундаментальные основы языка Python — от базового синтаксиса до работы с переменными, циклами и функциями. 
    Подойдет для новичков, которые хотят быстро войти в мир программирования и научиться писать понятный и эффективный код.`,
    thumbnail: "/images/python.jpg",
    youtubePlaylist: "PLDyJYA6aTY1lPWXBPk0gw6gR8fEtPDGKa",
    teacher: "Школа itProger",
  },
  2: {
    id: 2,
    title: "Веб-разработка с HTML и CSS",
    shortname: "web-html-css",
    description: `Изучите основы веб-разработки: как создавать адаптивные страницы с помощью HTML и CSS, 
    понять структуру сайтов и стилизацию элементов. Практические задания помогут быстро закрепить материал.`,
    thumbnail: "/images/htmlcss.jpg",
    youtubePlaylist: "PLjwm_8O3suyMKWZwlgptQtfCShqZ2syV5",
    teacher: "GreatStack",
  },
  3: {
    id: 3,
    title: "JavaScript с нуля",
    shortname: "js-basics",
    description: `Полный вводный курс по JavaScript — основному языку для создания интерактивных веб-приложений. 
    В курсе много практики, объяснения концепций и разбор типичных ошибок новичков.`,
    thumbnail: "/images/javascript.jpg",
    youtubePlaylist: "PL0MUAHwery4qn4Y27iUxmzC-JiauX7vSL",
    teacher: "Александр Ламков",
  },
  4: {
    id: 4,
    title: "Программирование на C++",
    shortname: "cpp-basics",
    description: `Изучите основы C++ — мощного языка с богатой историей, который применяется в системном программировании, играх и многом другом. 
    Курс подходит для тех, кто хочет понять принципы объектно-ориентированного программирования.`,
    thumbnail: "/images/cplusplus.jpg",
    youtubePlaylist: "PLQOaTSbfxUtCrKs0nicOg2npJQYSPGO9r",
    teacher: "#SimpleCode",
  },
  5: {
    id: 5,
    title: "C# для начинающих",
    shortname: "csharp-basics",
    description: `Погрузитесь в основы C# — языка, популярного для разработки приложений на платформе .NET. Курс охватывает синтаксис, классы, интерфейсы и работу с событиями.`,
    thumbnail: "/images/csharp.jpg",
    youtubePlaylist: "PLDyJYA6aTY1laYPs6iS-SrYl9DZLVCUKr",
    teacher: "Школа itProger",
  },
  6: {
    id: 6,
    title: "React с нуля",
    shortname: "react-basics",
    description: `Изучите популярную библиотеку React для создания пользовательских интерфейсов. 
    Узнайте про компоненты, props, state, хуки и основы маршрутизации.`,
    thumbnail: "/images/react.jpg",
    youtubePlaylist: "PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8",
    teacher: "IT-KAMASUTRA",
  },
  7: {
    id: 7,
    title: "Node.js практический курс",
    shortname: "nodejs-practice",
    description: `Погрузитесь в серверную разработку с помощью Node.js. Курс охватывает создание REST API, работу с базами данных и асинхронное программирование.`,
    thumbnail: "/images/node.jpg",
    youtubePlaylist: "PLDyJYA6aTY1loAdIkiCun_Cz5nnWEF1WW",
    teacher: "Школа itProger",
  },
  8: {
    id: 8,
    title: "Базы данных и SQL",
    shortname: "databases-sql",
    description: `Узнайте, как эффективно хранить и извлекать данные с помощью SQL. 
    Курс охватывает основы реляционных баз данных, создание запросов и оптимизацию производительности.`,
    thumbnail: "/images/sql.jpg",
    youtubePlaylist: "PLBheEHDcG7-k1Y_Uy04Dj2ylWhcfSfqoF",
    teacher: "EngineerSpock - IT & программирование",
  },
  9: {
    id: 9,
    title: "Git и GitHub",
    shortname: "git-github",
    description: `Освойте систему контроля версий Git и платформу GitHub для совместной разработки. Курс включает практические примеры работы с ветками и разрешением конфликтов.`,
    thumbnail: "/images/git.jpg",
    youtubePlaylist: "PLDyvV36pndZFHXjXuwA_NywNrVQO0aQqb",
    teacher: "JavaScript.ru",
  },
  10: {
    id: 10,
    title: "Docker для разработчиков",
    shortname: "docker-basics",
    description: `Изучите контейнеризацию с помощью Docker: создание и управление контейнерами, написание Dockerfile и оптимизация процессов разработки.`,
    thumbnail: "/images/docker.jpg",
    youtubePlaylist: "PL0lO_mIqDDFX1c0JHogP5YuZdOVawoepS",
    teacher: "Гоша Дударь",
  },
  11: {
    id: 11,
    title: "Курс по TypeScript",
    shortname: "typescript-basics",
    description: `Переходите с JavaScript на TypeScript для улучшения качества кода. Курс охватывает типизацию, интерфейсы, дженерики и интеграцию с React и Node.js.`,
    thumbnail: "/images/typescript.jpg",
    youtubePlaylist: "PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI",
    teacher: "Net Ninja",
  },
  12: {
    id: 12,
    title: "Linux для начинающих",
    shortname: "linux-basics",
    description: `Узнайте основы работы с операционной системой Linux: командами терминала, файловой системой, правами доступа и базовой администрированием.`,
    thumbnail: "/images/linux.jpg",
    youtubePlaylist: "PL0lO_mIqDDFUwVWvVitxG2oXA6a-Nq-Qq",
    teacher: "Гоша Дударь",
  },
  13: {
    id: 13,
    title: "Основы алгоритмов",
    shortname: "algorithms-basics",
    description: `Понимание алгоритмов — ключ к решению сложных задач. Курс охватывает базовые алгоритмы, структуры данных и их анализ по времени выполнения.`,
    thumbnail: "/images/algorithms.jpg",
    youtubePlaylist: "PLA0M1Bcd0w8x4jEp1r_aN3xlnlbfx9RQ2",
    teacher: "selfedu",
  },
  14: {
    id: 14,
    title: "Vue.js с нуля",
    shortname: "vuejs-basics",
    description: `Изучите популярный фронтенд-фреймворк Vue.js: компоненты, директивы, реактивность и маршрутизацию для создания современных веб-приложений.`,
    thumbnail: "/images/vuejs.svg",
    youtubePlaylist: "PLC3y8-rFHvwgeQIfSDtEGVvvSEPDkL_1f",
    teacher: "Codevolution",
  },
  15: {
    id: 15,
    title: "Java: основы",
    shortname: "java-basics",
    description: `Погрузитесь в мир Java — одного из самых популярных языков программирования. Курс охватывает синтаксис, ООП и работу с основными библиотеками.`,
    thumbnail: "/images/java.svg",
    youtubePlaylist: "PLlb7e2G7aSpTCB2OxGlezpgOXwq4xer7Z",
    teacher: "Computer Science Center",
  },
  16: {
    id: 16,
    title: "Android-разработка",
    shortname: "android-dev",
    description: `Создавайте мобильные приложения для Android с использованием Java и Kotlin. Курс охватывает основы интерфейса, жизненный цикл приложений и работу с API.`,
    thumbnail: "/images/android.svg",
    youtubePlaylist: "PLXtiZNKIobF5E1JgDaisqnVJfbZeUFYkm",
    teacher: "Young&&Yandex",
  },
  17: {
    id: 17,
    title: "iOS на Swift",
    shortname: "ios-swift",
    description: `Изучите язык Swift и инструменты разработки iOS-приложений. Курс охватывает создание интерфейсов, работу с Xcode и основные паттерны проектирования.`,
    thumbnail: "/images/swift.svg",
    youtubePlaylist: "PLtovLaW_R9-N-KECYTUWqQaVtBXhufJfw",
    teacher: "SwiftBook",
  },
  18: {
    id: 18,
    title: "Machine Learning",
    shortname: "machine-learning",
    description: `Погрузитесь в машинное обучение: от теории до практики с использованием популярных библиотек Python, таких как scikit-learn и TensorFlow.`,
    thumbnail: "/images/ml.jpg",
    youtubePlaylist: "PLxgMO1T8K71xNBaYM5zUpfod4PiKdwhBk",
    teacher: "NPTEL IIT Guwahati",
  },
  19: {
    id: 19,
    title: "Data Science",
    shortname: "data-science",
    description: `Изучите анализ данных, визуализацию и статистику с помощью Python и библиотек pandas, matplotlib, а также познакомьтесь с основами работы с большими данными.`,
    thumbnail: "/images/datascience.jpg",
    youtubePlaylist: "PLEiEAq2VkUUIEQ7ENKU5Gv0HpRDtOphC6",
    teacher: "Simplilearn",
  },
  20: {
    id: 20,
    title: "Kotlin для Android",
    shortname: "kotlin-android",
    description: `Изучите Kotlin — современный язык программирования для Android. Курс охватывает синтаксис, корутины и интеграцию с Android Studio.`,
    thumbnail: "/images/kotlin.svg",
    youtubePlaylist: "PLgPRahgE-Gcu4s-I9mrHUrKUp9dY6QcJC",
    teacher: "Иван Ветров",
  },
};

export default courseExtras;
