import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";
import authService from "../../appwrite/auth";

function LogoutBtn(props) {
  const dispatch = useDispatch();
  const handleLogout = () => {
    authService
      .logout()
      .then(() => {
        console.log("User logged out successfully");
        dispatch(logout());
      })
      .catch((error) => {
        console.error("Error logging out:", error);
      });
  };

  return (
    <button
      onClick={handleLogout}
      className="inline-block px-6 py-2 text-white bg-red-600 rounded hover:bg-red-700"
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
