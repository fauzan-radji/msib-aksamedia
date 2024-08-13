import { Header, NoteForm } from "@/components";
import { Navigate, useNavigate, useParams } from "react-router-dom";

import { useAuth } from "@/context";
import { useLocalStorage } from "@/hooks";
import { useMemo } from "react";

export default function Edit() {
  const { isLoggedIn } = useAuth();
  const { noteId } = useParams();
  const [notes, setNotes] = useLocalStorage("notes", []);
  const navigate = useNavigate();

  const note = useMemo(
    () => notes.find((note) => note.id === +noteId),
    [noteId, notes],
  );

  if (!isLoggedIn) return <Navigate to="/login" replace={true} />;

  return (
    <div className="flex flex-col">
      <Header>Edit Note</Header>

      <NoteForm
        note={note}
        handleNote={(title, content) => {
          setNotes((notes) =>
            notes.map((oldNote) =>
              oldNote.id === note.id
                ? {
                    ...oldNote,
                    title,
                    content,
                  }
                : oldNote,
            ),
          );

          navigate("/");
        }}
      />
    </div>
  );
}
