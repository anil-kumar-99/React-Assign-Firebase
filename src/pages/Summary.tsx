import { useState } from "react";
import { useAppSelector } from "../app/hooks";
import type { RootState } from "../app/store";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import "../styles/summary.css";

export default function Summary() {
  const user = useAppSelector((state: RootState) => state.auth.user);
  const [inputText, setInputText] = useState("");
  const [summary, setSummary] = useState("");

  const handleGenerateSummary = async () => {
    if (!inputText.trim()) return;

    try {
      const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `Summarize this text in 4-5 lines:\n\n${inputText}`,
                  },
                ],
              },
            ],
          }),
        }
      );

      const data = await response.json();

      const aiSummary =
        data?.candidates?.[0]?.content?.parts?.[0]?.text || "No summary generated";

      setSummary(aiSummary);

      if (!user?.uid) return;

      // Save to Firestore
      await addDoc(collection(db, "users", user.uid, "summaries"), {
        text: inputText,
        summary: aiSummary,
        timestamp: new Date(),

      });

    } catch (error) {
      console.error("AI Summary Error:", error);
    }
  };

  return (
    <div className="summary-container">
      <h1 className="summary-title">AI Text Summary</h1>

      <div className="summary-card">
        <textarea
          className="summary-textarea"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter your text here…"
          rows={8}
        />

        <button className="summary-btn" onClick={handleGenerateSummary}>
          Generate Summary
        </button>
      </div>

      {summary && (
        <div className="summary-output">
          <h2>Generated Summary</h2>
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
}
