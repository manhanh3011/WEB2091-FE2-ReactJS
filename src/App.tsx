import { Toaster } from "react-hot-toast";
import { Link, Route, Routes } from "react-router-dom";
import EditForm from "./page/Lab6";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";
import { Button, Image } from "antd";
import { ConfigProvider, theme as antdTheme } from "antd";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const context = useContext(UserContext);
  if(!context) return;

  const contextThem = useContext(ThemeContext);
  if (!contextThem) return null;

  const { theme, toggleTheme } = contextThem;
  const {user, setUser} = context;
  console.log("username", user);

  const handleLogin = () => {
    setUser({
      name: "anhtm123",
      avatar: "https://wp-cms-media.s3.ap-east-1.amazonaws.com/lay_anh_dai_dien_facebook_dep_1_2967d609e0.jpg",
    })
  };

  const handleLogout = () => {
    setUser(null);
  }
  
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
                <span>Username: {user?.name} </span>
                <Image src={user?.avatar} alt="" width={30} />
                <Link to="#" className="hover:text-gray-200">
                  <Button danger onClick={() => handleLogout()}>
                    Logout
                  </Button>
                </Link>
              </div>
            ) : (
              <>
                <span>Bạn chưa đăng nhập</span>
                <Button onClick={() => handleLogin()}>Login</Button>
              </>
            )}

            <Link to="#" className="hover:text-gray-200">
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
        <Routes>
          <Route path="/edit/:id" element={<EditForm />}></Route>
        </Routes>
        <h1 className="text-4xl font-bold mb-4">Chào mừng đến với WEB2091</h1>
      </div>
      <Toaster />
    </>
  );
}

export default App;
