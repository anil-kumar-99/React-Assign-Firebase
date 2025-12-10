import { useEffect, useState } from "react";
import { useAppSelector } from "../app/hooks";
import type { RootState } from "../app/store";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../firebase";

interface SummaryItem {
  id: string;
  text: string;
  summary: string;
  timestamp: any; // can convert to Date later
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
    <div>
      <h1>My Summary History</h1>
      {history.length === 0 ? (
        <p>No summaries yet.</p>
      ) : (
        <ul>
          {history.map((item) => (
            <li key={item.id}>
              <p><strong>Original:</strong> {item.text}</p>
              <p><strong>Summary:</strong> {item.summary}</p>
              <p><em>{item.timestamp?.toDate?.()?.toLocaleString()}</em></p>
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
