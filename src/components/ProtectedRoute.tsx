import { useSelector } from "react-redux";
import type { RootState } from "../app/store";

import { Navigate } from "react-router-dom";

interface Props {
  children: React.ReactNode; 
}

export default function ProtectedRoute({ children }: Props) {
  const user = useSelector((state: RootState) => state.auth.user);

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
}
