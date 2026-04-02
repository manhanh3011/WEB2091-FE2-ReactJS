import { Toaster } from "react-hot-toast";
import { Link, Route, Routes } from "react-router-dom";
import EditForm from "./page/Lab6";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";
import { Button } from "antd";
import { ConfigProvider, theme as antdTheme } from "antd";
import { ThemeContext } from "./context/ThemeContext";
import Register from "./page/Lab8";
import { useAuthStore } from "./stores/useAuthStore";

function App() {
  const { user, logout } = useAuthStore();

  const contextThem = useContext(ThemeContext);
  if (!contextThem) return null;

  const { theme, toggleTheme } = contextThem;

  return (
    <>
      <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="#" className="text-xl font-semibold">
            <strong>WEB2091 App</strong>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-gray-200">
              Trang chủ
            </Link>
            <Link to="/listUser" className="hover:text-gray-200">
              Danh sách
            </Link>
            <Link to="/add" className="hover:text-gray-200">
              Thêm mới
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {user ? (
              <div>
                <span>Email: {user?.email}</span>
                <span>Đã đăng nhập</span>
                <Button danger onClick={logout}>
                  Logout
                </Button>
              </div>
            ) : (
              <span>Bạn chưa đăng nhập</span>
            )}

            <Link to="/register" className="hover:text-gray-200">
              Đăng ký
            </Link>

            <ConfigProvider
              theme={{
                algorithm:
                  theme === "dark"
                    ? antdTheme.darkAlgorithm
                    : antdTheme.defaultAlgorithm,
              }}
            >
              <div style={{ padding: 20 }}>
                <Button onClick={toggleTheme}>
                  {theme === "light" ? "Dark Mode 🌙" : "Light Mode ☀️"}
                </Button>
              </div>
            </ConfigProvider>
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto mt-10 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Chào mừng đến với WEB2091</h1>
        <Routes>
          <Route path="/edit/:id" element={<EditForm />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </div>
      <Toaster />
    </>
  );
}

export default App;
