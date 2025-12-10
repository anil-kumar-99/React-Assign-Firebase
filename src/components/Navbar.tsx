import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { logout } from "../features/auth/authSlice";

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    dispatch(logout());
    navigate("/");
  };

  return (
    <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
      <Link to="/dashboard" style={{ marginRight: "15px" }}>Dashboard</Link>
      <Link to="/summary" style={{ marginRight: "15px" }}>Summary</Link>
      <Link to="/history" style={{ marginRight: "15px" }}>History</Link>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
}
