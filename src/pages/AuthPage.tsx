import { useState } from "react";
import { login } from "../api/moodle";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./AuthPage.css";

export default function AuthPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { setToken, setUser } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await login(username, password);
      if (res.error) {
        setError("Неверные данные");
        return;
      }
      setToken(res.token);
      setUser({fullname: res.fullname});
      navigate("/");
    } catch (err) {
      setError("Ошибка при авторизации");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2 className="auth-title">Вход в StudySchool</h2>
        <form onSubmit={handleLogin}>
          {error && <div className="auth-error">{error}</div>}

          <label className="auth-label">Логин</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="auth-input"
            placeholder="Введите логин"
            required
          />

          <label className="auth-label">Пароль</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="auth-input"
            placeholder="Введите пароль"
            required
          />

          <button className="auth-button">Войти</button>
        </form>
      </div>
    </div>
  );
}