import axios from "axios";

const BASE_URL = "http://localhost:8080/moodle";
const LOGIN_URL = `${BASE_URL}/login/token.php`;
const API_URL = `${BASE_URL}/webservice/rest/server.php`;

/**
 * Получение токена по логину и паролю
 */
export const login = async (username: string, password: string) => {
  const res = await axios.get(LOGIN_URL, {
    params: {
      username,
      password,
      service: "frontend_api",
    },
  });

  console.log("login response", res.data);
  return res.data;
};

/**
 * Получение списка пользователей (поиск по username/email и т.д.)
 */
export const searchUsers = async (token: string, query: string) => {
  const params = new URLSearchParams();
  params.append("wstoken", token);
  params.append("wsfunction", "core_user_get_users");
  params.append("moodlewsrestformat", "json");
  params.append("criteria[0][key]", "username");
  params.append("criteria[0][value]", query);

  const res = await axios.post(API_URL, params);
  return res.data?.users ?? [];
};

/**
 * Получение всех курсов
 */
export const getCourses = async (token: string) => {
  const params = new URLSearchParams();
  params.append("wstoken", token);
  params.append("wsfunction", "core_course_get_courses");
  params.append("moodlewsrestformat", "json");

  const res = await axios.post(API_URL, params);
  return res.data;
};

/**
 * Получение курса по ID
 */
export const getCourseById = async (token: string, id: number) => {
  const params = new URLSearchParams();
  params.append("wstoken", token);
  params.append("wsfunction", "core_course_get_courses_by_field");
  params.append("moodlewsrestformat", "json");
  params.append("field", "id");
  params.append("value", String(id));

  const res = await axios.post(API_URL, params);
  return res.data?.courses?.[0] ?? null;
};
