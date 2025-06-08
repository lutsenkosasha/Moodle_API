import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Header.css"

export default function Header() {
  const { user, setToken, setUser } = useAuth();

  const handleLogout = () => {
    setToken(null);
    setUser(null);
  };

  return (
    <header className="header">
      <Link to="/" className="header__logo-link">
        <img
          src="/images/logo1.png"
          alt="StudySchool Logo"
          className="header__logo"
          loading="lazy"
        />
      </Link>

      <div className="header__user-section">
        {user?.fullname && (
          <span className="header__username">{user.fullname}</span>
        )}
        <button className="header__logout-btn" onClick={handleLogout}>
          Выйти
        </button>
      </div>
    </header>
  );
}
