import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Header, Footer } from "./components/index";
import Main from "./main";

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
    <div className="App">
      <Header />
      <Main />

      <Footer />
    </div>
  ) : (
    <div>Loading...</div>
  );
}

export default App;
