import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Header, Footer } from "./components/index";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const service = "appwrite";
  useEffect(() => {
    authService
      .getCurrentUser()
      .then((user) => {
        if (user) {
          dispatch(login({ userData: user }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return !loading ? (
    <div className="min-h-screen flex flex-col flex-wrap content-between  align-middle bg-gray-400">
      <div className="w-full">
        <Header />
        <main className="min-h-screen">
          {/* Main content will go here */}
          <div className="w-full py-8 justify-center  flex">
            <h1>Welcome to AppWriteUp</h1>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  ) : (
    <div className="items-center justify flex min-h-screen">Loading...</div>
  );
}

export default App;
