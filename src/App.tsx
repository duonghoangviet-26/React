import { Toaster } from "react-hot-toast";
import { Link, Route, Routes } from "react-router-dom";
import StoryForm from "./page/Lab4";
import { StoryList } from "./page/Lab5";
import EditStory from "./page/Lab6";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { Button } from "antd";
import { useAuthStore } from "./stores/useAuthStores";
import RegisterPage from "./page/register";
import LoginPage from "./page/login";

function App() {
  const { user, logout } = useAuthStore();

  const themeContext = useContext(ThemeContext);
  if (!themeContext) return null;

  const { theme, setTheme } = themeContext;

  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <nav className={theme === "dark" ? "bg-black text-white" : "bg-blue-600 text-white"}>
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          
          <Link to="/" className="text-xl font-semibold">
            <strong>WEB2091 App</strong>
          </Link>

          <div className="flex items-center space-x-4">
            <span>Theme: {theme}</span>

            <Button onClick={handleToggleTheme}>
              {theme === "light" ? "Dark" : "Light"}
            </Button>

            <span>
              {user ? `Email: ${user.email}` : "Chưa đăng nhập"}
            </span>

            {user ? (
              <Button onClick={logout}>Logout</Button>
            ) : (
              <>
                <Link to="/login">
                  <Button>Login</Button>
                </Link>
                <Link to="/register">
                  <Button>Đăng ký</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto mt-10 text-center">
        <Routes>
          <Route path="/" element={<StoryList />} />
          <Route path="/add" element={<StoryForm />} />
          <Route path="/edit/:id" element={<EditStory />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>

      <Toaster />
    </>
  );
}

export default App;