import Navbar from "../components/Navbar";
import "../styles/dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <Navbar />

      <div className="dashboard-content">
        <h2 className="dashboard-title">Welcome to AI Summary App</h2>

        <p className="dashboard-subtitle">
          Generate AI-powered summaries and access your saved history — all in one place.
        </p>

        <div className="dashboard-card">
          <h3>Start Summarizing</h3>
          <p>
            Navigate to the Summary page to generate summaries quickly and efficiently.
          </p>
        </div>
      </div>
    </div>
  );
}
