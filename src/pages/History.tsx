import { useEffect, useState } from "react";
import { useAppSelector } from "../app/hooks";
import type { RootState } from "../app/store";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../firebase";
import "../styles/history.css";

interface SummaryItem {
  id: string;
  text: string;
  summary: string;
  timestamp: any;
}

export default function History() {
  const user = useAppSelector((state: RootState) => state.auth.user);
  const [history, setHistory] = useState<SummaryItem[]>([]);

  useEffect(() => {
    const fetchHistory = async () => {
      if (!user?.uid) return;

      try {
        const q = query(
          collection(db, "users", user.uid, "summaries"),
          orderBy("timestamp", "desc")

        );

        const snapshot = await getDocs(q);
        const data: SummaryItem[] = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Omit<SummaryItem, "id">),
        }));

        setHistory(data);
      } catch (error) {
        console.error("Error fetching history:", error);
      }
    };

    fetchHistory();
  }, [user]);

  return (
    <div className="history-container">
      <h1 className="history-title">My Summary History</h1>

      {history.length === 0 ? (
        <p className="history-empty">No summaries found.</p>
      ) : (
        <div className="history-list">
          {history.map((item) => (
            <div className="history-card" key={item.id}>
              <p className="history-label">Original Text</p>
              <p className="history-text">{item.text}</p>

              <p className="history-label">AI Summary</p>
              <p className="history-summary">{item.summary}</p>

              <p className="history-time">
                {item.timestamp?.toDate?.()?.toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
