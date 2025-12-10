import { useState } from "react";
import { useAppSelector } from "../app/hooks";
import type { RootState } from "../app/store";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

export default function Summary() {
  const user = useAppSelector((state: RootState) => state.auth.user);
  const [inputText, setInputText] = useState("");
  const [summary, setSummary] = useState("");

  const handleGenerateSummary = async () => {
    if (!inputText.trim()) return;

    // Fake AI summary (replace with actual API call)
    const generatedSummary = inputText.slice(0, 500) + "...";
    setSummary(generatedSummary);

    // Save to Firestore only if user is logged in
    if (!user?.uid) return;

    try {
      await addDoc(collection(db, "users", user.uid, "summaries"), {
        text: inputText,
        summary: generatedSummary,
        timestamp: serverTimestamp(),
      });
    } catch (error) {
      console.error("Error saving summary:", error);
    }
  };

  return (
    <div>
      <h1>AI Text Summary</h1>
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter text here..."
        rows={6}
        cols={50}
      />
      <br />
      <button onClick={handleGenerateSummary}>Generate Summary</button>

      {summary && (
        <div>
          <h2>Summary:</h2>
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
}
