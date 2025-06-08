import type { Course } from "../types";

interface Props {
  course: Course;
  onClick: () => void;
}

export default function CourseCard({ course, onClick }: Props) {
  const imageSrc =
    course.thumbnail ||
    "https://via.placeholder.com/280x140?text=Course";

  return (
    <div
      onClick={onClick}
      style={{
        border: "1px solid #ddd",
        borderRadius: 12,
        padding: "1rem",
        width: 280,
        cursor: "pointer",
        boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
        transition: "transform 0.2s",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "scale(1.02)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "scale(1)";
      }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onClick();
      }}
    >
      <img
        src={imageSrc}
        alt={course.shortname}
        style={{
          width: "100%",
          height: 140,
          objectFit: "cover",
          borderRadius: 8,
          marginBottom: 12,
        }}
        loading="lazy"
      />
      <h3
        style={{
          margin: "0 0 8px 0",
          fontSize: 18,
          fontWeight: "bold",
          textAlign: "center",
          overflowWrap: "break-word",
        }}
      >
        {course.title}
      </h3>
      <p
        style={{
          fontSize: 14,
          color: "#555",
          margin: 0,
          textAlign: "center",
          userSelect: "none",
        }}
      >
        {course.shortname}
      </p>
    </div>
  );
}
