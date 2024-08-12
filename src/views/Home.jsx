import { Card, Pagination, SecondaryButton } from "@/components";
import { MagnifyingGlassIcon, PlusIcon } from "@heroicons/react/24/outline";
import { useMemo, useState } from "react";

const perPage = 12;

export default function Home() {
  function handleChange(event) {
    // TODO: filter notes
    console.log(event.target.value);
  }

  const [notes] = useState([]);
  const totalPages = Math.ceil(notes.length / perPage);
  const [page, setPage] = useState(1);
  const notesToShow = useMemo(() => {
    const start = (page - 1) * perPage;
    const end = start + perPage;
    return notes.slice(start, end);
  }, [page, notes]);

  return (
    <div className="flex h-full flex-col gap-4">
      <form className="bg-primary/10 text-dark flex items-center gap-2 rounded-md px-4 py-2">
        <input
          type="search"
          placeholder="Search movies..."
          onChange={handleChange}
          className="placeholder:text-dark/50 w-full bg-transparent outline-none"
        />
        <MagnifyingGlassIcon className="text-secondary h-5 w-5" />
      </form>

      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-between">
        <SecondaryButton size="small">
          <PlusIcon className="h-5 w-5" /> Add Note
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
            <Card key={note.id} title={note.title}>
              {note.content}
            </Card>
          ))}
        </div>
      ) : (
        <p className="flex flex-auto items-center justify-center">No notes</p>
      )}
    </div>
  );
}
