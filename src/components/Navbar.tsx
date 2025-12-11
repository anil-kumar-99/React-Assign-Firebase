import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { logout } from "../features/auth/authSlice";
import "../styles/navbar.css";

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    dispatch(logout());
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <h2 className="nav-logo">AI Summary</h2>
        <Link to="/dashboard" className="nav-link">Dashboard</Link>
        <Link to="/summary" className="nav-link">Summary</Link>
        <Link to="/history" className="nav-link">History</Link>
      </div>

      <button className="nav-logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </nav>
  );
}
