import { useParams, useNavigate } from "react-router-dom";
import courseExtras from "../api/courseExtras";
import type { Course } from "../types";

export default function CoursePage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const course: Course | undefined = id
    ? courseExtras[Number(id)]
    : undefined;

  // Если курс не найден
  if (!course) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <button
          onClick={() => navigate(-1)}
          style={{
            backgroundColor: "#1E90FF",
            color: "white",
            padding: "0.75rem 1.rem",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            marginBottom: "1rem",
            fontSize: "1rem",
          }}
        >
          ← Назад
        </button>
        <p style={{ color: "red" }}>Курс не найден.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem", maxWidth: 900, margin: "0 auto" }}>
      {/* Кнопка "Назад" */}
      <button
        onClick={() => navigate(-1)}
        style={{
          backgroundColor: "#1E90FF",
          color: "white",
          padding: "0.75rem 1.5rem",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          marginBottom: "1.5rem",
          fontSize: "1rem",
          display: "inline-flex",
          alignItems: "center",
        }}
      >
        ← Назад
      </button>

      {/* Заголовок по центру */}
      <h2
        style={{
          fontSize: "2rem",
          marginBottom: "1.5rem",
          textAlign: "center",
        }}
      >
        {course.title}
      </h2>

      {/* Видеопроигрыватель по центру */}
      {course.youtubePlaylist && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "2rem",
          }}
        >
          <iframe
            width="100%"
            height="450"
            style={{ maxWidth: 800, borderRadius: 8 }}
            src={`https://www.youtube.com/embed/videoseries?list=${course.youtubePlaylist}`}
            title={`Курс: ${course.title}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}

      {/* Описание курса во всю ширину контейнера */}
      <div
        style={{
          marginBottom: "1.5rem",
          lineHeight: 1.6,
          fontSize: "1rem",
          color: "#333",
        }}
      >
        {course.description}
      </div>

      {/* Преподаватель */}
      <p
        style={{
          fontStyle: "italic",
          textAlign: "right",
          fontSize: "0.9rem",
          color: "#555",
        }}
      >
        Преподаватель: {course.teacher}
      </p>
    </div>
  );
}
