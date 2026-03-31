import { Toaster } from "react-hot-toast";
import { Link, Route, Routes } from "react-router-dom";
import StoryForm from "./page/Lab4";
import { StoryList } from "./page/Lab5";
import EditStory from "./page/Lab6";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";
import { ThemeContext } from "./context/ThemeContext";
import { Button } from "antd";

function App() {
  const context = useContext(UserContext);
  const themeContext = useContext(ThemeContext);

  if (!context) return null;
  if (!themeContext) return null;

  const { user, setUser } = context;
  const { theme, setTheme } = themeContext;

  const hanhleLogin = () => {
    setUser({
      name: "duonghv",
      avarta: "https://i.pravatar.cc/40?img=12",
    });
  };

  const hanhleLogout = () => {
    setUser(null);
  };

  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <nav
        className={
          theme === "dark"
            ? "bg-black text-white shadow"
            : "bg-blue-600 text-white shadow"
        }
      >
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="#" className="text-xl font-semibold">
            <strong>WEB2091 App</strong>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="#" className="hover:text-gray-200">
              Trang chủ
            </Link>
            <Link to="/" className="hover:text-gray-200">
              Danh sách
            </Link>
            <Link to="/add" className="hover:text-gray-200">
              Thêm mới
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <span>Theme: {theme}</span>

            <Button onClick={handleToggleTheme}>
              {theme === "light" ? "Dark" : "Light"}
            </Button>

            <span>User: {user?.name || "Chưa đăng nhập"}</span>

            {user?.avarta && (
              <img
                className="w-[30px] h-[30px] rounded-full"
                src={user.avarta}
                alt="avatar"
              />
            )}

            <Button onClick={hanhleLogin}>Login</Button>
            <Button onClick={hanhleLogout}>Logout</Button>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto mt-10 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Chào mừng đến với WEB2091</h1>

        <Routes>
          <Route path="/" element={<StoryList />} />
          <Route path="/add" element={<StoryForm />} />
          <Route path="/edit/:id" element={<EditStory />} />
        </Routes>
      </div>

      <Toaster />
    </>
  );
}

export default App;