# AI Text Summary App (TypeScript + Firebase + Redux Toolkit)

This is a **React + TypeScript** web application that allows users to register, log in, generate AI-based text summaries, and view their personal summary history. It uses **Firebase Authentication** and **Firestore** for backend services and **Redux Toolkit** for state management.

---

## Features

* **Authentication:**

  * User registration and login
  * Logout functionality
  * Protected routes for authenticated users
* **AI Text Summary:**

  * Input text in a textarea
  * Generate summaries (AI-powered or basic summarization)
  * Display the generated summary
* **History:**

  * Store each generated summary in Firebase Firestore
  * Display user's summary history with timestamp
* **State Management:**

  * Auth slice
  * Summary slice
  * History slice

---

## Tech Stack

* React 18 + TypeScript
* Redux Toolkit
* Firebase Authentication & Firestore
* Tailwind CSS
* React Router DOM
* Optional OpenAI API for advanced summarization

---

## Setup & Installation

1. **Clone repository:**

```sh
git clone <your-repo-url>
cd ai-summary-app
```

2. **Install dependencies:**

```sh
npm install
```

3. **Configure environment variables:**

Create a `.env` file in the project root:

```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_OPENAI_KEY=sk-REPLACE_ME  # Optional
```

4. **Run the app locally:**

```sh
npm run dev
```

5. **Build for production:**

```sh
npm run build
```

---

## Firebase Setup

1. Create a Firebase project at (https://console.firebase.google.com/).
2. Enable **Email/Password** authentication.
3. Create Firestore database.
4. Add your Firebase config to `.env`.

---

## Optional: OpenAI Integration

> Recommended: call OpenAI API from a secure server.

* Place your OpenAI API key in `.env` as `VITE_OPENAI_KEY`.
* Replace local summarization in `Dashboard.tsx` with the API call.

---

## Deployment (Firebase Hosting)

1. Install Firebase CLI:

```sh
npm install -g firebase-tools
```

2. Login:

```sh
firebase login
```

3. Initialize hosting:

```sh
firebase init hosting
```

4. Deploy:

```sh
firebase deploy
```

---

## Folder Structure

```
ai-summary-app/
├─ src/
│  ├─ app/store.ts
│  ├─ features/
│  │  ├─ auth/authSlice.ts
│  │  ├─ summary/summarySlice.ts
│  │  └─ history/historySlice.ts
│  ├─ pages/
│  │  ├─ Login.tsx
│  │  ├─ Register.tsx
│  │  ├─ Dashboard.tsx
│  │  └─ History.tsx
│  ├─ routes/ProtectedRoute.tsx
│  ├─ hooks.ts
│  ├─ firebase.ts
│  ├─ main.tsx
│  └─ index.css
├─ .env
├─ package.json
└─ tsconfig.json
```

---

