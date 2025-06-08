import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CourseCard from "../components/CourseCard";
import type { Course } from "../types";
import courseExtras from "../api/courseExtras";


export default function HomePage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

   useEffect(() => {
    const allCourses: Course[] = Object.values(courseExtras);
    setCourses(allCourses);
    setLoading(false);
  }, []);

  if (loading)
    return (
      <div className="text-center mt-8 text-gray-500">Загрузка курсов...</div>
    );

  return (
    <main
      style={{
        padding: "2rem",
        maxWidth: 1200,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <section
        style={{
          backgroundColor: "#f9f9f9",
          padding: "1.5rem",
          borderRadius: 12,
          maxWidth: 1200,
          textAlign: "justify",
          lineHeight: 1.6,
        }}
      >
        <h2 style={{ fontSize: "1.8rem", marginBottom: "0.5rem" }}>
          Добро пожаловать в <strong>StudySchool</strong>
        </h2>
        <p style={{ marginBottom: "1rem", fontWeight: "500" }}>
          Твоя онлайн-платформа для прокачки знаний и реальных навыков
        </p>

        <p style={{ marginBottom: "1rem" }}>
          <strong>StudySchool</strong> — это место, где учёба становится
          осознанным выбором, а не обязаловкой. Мы собрали лучшие курсы по IT,
          дизайну, маркетингу, языкам и не только — от практиков, которые реально
          шарят в своём деле.
        </p>

        <p style={{ marginBottom: "0.5rem", fontWeight: "600" }}>
          Что ты найдёшь у нас:
        </p>
        <ul style={{ marginLeft: "1rem", marginBottom: "1rem" }}>
          <li>
            📚 <strong>Курсы от профи</strong> — никаких скучных лекций, только
            живое объяснение и реальные кейсы
          </li>
          <li>
            🧠 <strong>Интерактив</strong> — практические задания, тесты, проекты и
            фидбек от менторов
          </li>
          <li>
            ⏰ <strong>Гибкий график</strong> — учись в любое время, с любого
            устройства
          </li>
          <li>
            🎓 <strong>Сертификаты</strong> — подтверждение твоих знаний для
            резюме или портфолио
          </li>
          <li>
            🤝 <strong>Комьюнити</strong> — поддержка, общение и новые знакомства
            среди таких же заряженных на рост людей
          </li>
        </ul>

        <p style={{ marginBottom: "0.5rem", fontWeight: "600" }}>
          Мы для тех, кто:
        </p>
        <ul style={{ marginLeft: "1rem", marginBottom: "1rem" }}>
          <li>Хочет сменить профессию и ищет понятный старт</li>
          <li>Прокачивает себя параллельно с учёбой или работой</li>
          <li>
            Не верит в «вышку ради вышки», а делает ставку на практику и результат
          </li>
        </ul>

        <p style={{ fontStyle: "italic" }}>
          <strong>StudySchool</strong> — это не просто про знания, это про путь к
          себе новой версии.
        </p>
      </section>

      <h1 style={{ marginBottom: "1rem", fontWeight: "700", fontSize: "2rem" }}>Бесплатные курсы</h1>
      {courses.length === 0 ? (
        <p>Курсы не найдены.</p>
      ) : (
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1rem",
            width: "100%",
            justifyItems: "center",
          }}
        >
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onClick={() => navigate(`/course/${course.id}`)}
            />
          ))}
        </section>
      )}
    </main>
  );
}
