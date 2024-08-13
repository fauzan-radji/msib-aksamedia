import { Header, NoteForm } from "@/components";
import { Navigate, useNavigate } from "react-router-dom";

import { useAuth } from "@/context";
import { useLocalStorage } from "@/hooks";

export default function New() {
  const { isLoggedIn } = useAuth();
  const setNotes = useLocalStorage("notes", [])[1];
  const navigate = useNavigate();

  if (!isLoggedIn) return <Navigate to="/login" replace={true} />;

  return (
    <div className="flex flex-col">
      <Header>New Note</Header>

      <NoteForm
        handleNote={(title, content) => {
          setNotes((notes) => [
            ...notes,
            {
              id: Math.round(Date.now() + Math.random() * 100),
              title,
              content,
            },
          ]);

          navigate("/");
        }}
      />
    </div>
  );
}
