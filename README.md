# Образовательная онлайн-платформа — Адаптивный и инклюзивный веб-интерфейс

## 📚 Описание

Этот проект представляет собой современный веб-интерфейс для образовательной платформы с акцентом на **адаптивность** (корректное отображение на всех устройствах) и **инклюзивность** (поддержка пользователей с ограниченными возможностями).

Разработка велась в рамках выпускной квалификационной работы. Система интегрируется с **Moodle API**, обеспечивает доступ к образовательным материалам и позволяет взаимодействовать с курсами в реальном времени.

---

## 🎯 Цели проекта

- Разработать адаптивный интерфейс для веб-приложения;
- Обеспечить доступность и навигацию с клавиатуры, поддержку экранных читалок;
- Интегрировать фронтенд с LMS Moodle через REST API;
- Продемонстрировать использование современных веб-технологий.

---

## 💡 Функциональные возможности

- 🔑 Аутентификация пользователей (через Moodle API);
- 📋 Отображение списка курсов с возможностью фильтрации;
- 📂 Просмотр подробной информации о курсе (включая разделы и уроки);
- 🧭 Навигация с клавиатуры, aria-label'ы и другие элементы доступности (WCAG);
- 📱 Адаптивный дизайн под разные экраны (ПК, планшет, мобильные устройства);
- ⚙️ Работа с API Moodle (GET-запросы к данным пользователя и курсов);
- 🌐 Поддержка мультиязычности (опционально, в зависимости от конфигурации Moodle).

---

## 🛠️ Используемые технологии

### Frontend

- [React](https://reactjs.org/) — компонентный подход, высокая производительность;
- [TypeScript](https://www.typescriptlang.org/) — строгая типизация и масштабируемость;
- [Tailwind CSS](https://tailwindcss.com/) — утилитарный CSS-фреймворк для быстрой вёрстки;
- [Vite](https://vitejs.dev/) — современный сборщик с быстрой перезагрузкой;
- [Axios](https://axios-http.com/) — отправка HTTP-запросов к Moodle REST API.

### Backend / LMS

- [Moodle](https://moodle.org/) — система управления обучением (установлена через XAMPP);
- [PHP 8.2.12 + MariaDB 10.11.4] — стандартная среда Moodle;
- [XAMPP](https://www.apachefriends.org/index.html) — локальный сервер Apache + MySQL.

---

### Тестирование
Проводилось ручное тестирование интерфейса:
- Проверка навигации с клавиатуры;
- Отображение данных с Moodle API;
- Работа на разных устройствах (эмуляция через devtools);
- Доступность через скринридер (NVDA / VoiceOver).

