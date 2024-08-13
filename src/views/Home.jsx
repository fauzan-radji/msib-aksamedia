import { Card, Pagination, SecondaryButton } from "@/components";
import { Link, Navigate } from "react-router-dom";
import { MagnifyingGlassIcon, PlusIcon } from "@heroicons/react/24/outline";
import { useMemo, useState } from "react";

import { useAuth } from "@/context";
import { useLocalStorage } from "@/hooks";

const perPage = 12;

export default function Home() {
  const { isLoggedIn } = useAuth();

  function handleChange(event) {
    // TODO: filter notes
    console.log(event.target.value);
  }

  const [notes, setNotes] = useLocalStorage("notes", []);
  const totalPages = Math.ceil(notes.length / perPage);
  const [page, setPage] = useState(1);
  const notesToShow = useMemo(() => {
    const start = (page - 1) * perPage;
    const end = start + perPage;
    return notes.slice(start, end);
  }, [page, notes]);

  if (!isLoggedIn) return <Navigate to="/login" replace={true} />;

  return (
    <div className="flex h-full flex-col gap-4">
      <form className="flex items-center gap-2 rounded-md bg-primary/10 px-4 py-2 text-dark">
        <input
          type="search"
          placeholder="Search movies..."
          onChange={handleChange}
          className="w-full bg-transparent outline-none placeholder:text-dark/50"
        />
        <MagnifyingGlassIcon className="h-5 w-5 text-secondary" />
      </form>

      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-between">
        <SecondaryButton as={Link} to="/new" size="small">
          <PlusIcon className="h-5 w-5" /> New Note
        </SecondaryButton>

        {notesToShow.length > 0 && (
          <Pagination
            currentPage={Math.max(1, Math.min(totalPages, page))}
            pagesToShow={2}
            totalPages={totalPages}
            onPageChange={(page) => setPage(page)}
          />
        )}
      </div>

      {notesToShow.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 pb-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
          {notesToShow.map((note) => (
            <Card
              key={note.id}
              note={note}
              deleteNote={(id) => {
                setNotes((prev) => prev.filter((note) => note.id !== id));
              }}
            />
          ))}
        </div>
      ) : (
        <p className="flex flex-auto items-center justify-center">No notes</p>
      )}
    </div>
  );
}
