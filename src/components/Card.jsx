import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { TrashIcon } from "@heroicons/react/24/outline";
import { twMerge } from "tailwind-merge";

export default function Card({ note, deleteNote, className }) {
  return (
    <div
      className={twMerge(
        "relative w-full cursor-pointer rounded-md bg-white hover:bg-white/50",
        className,
      )}
    >
      <Link
        to={`/edit/${note.id}`}
        className="flex h-full w-full flex-col gap-2 p-4"
      >
        <h3 className="line-clamp-1 font-bold" title={note.title}>
          {note.title}
        </h3>

        <p className="line-clamp-6 overflow-hidden text-sm text-gray-700">
          {note.content}
        </p>
      </Link>

      <button
        className="absolute right-0 top-0 flex aspect-square w-8 cursor-pointer items-center justify-center p-2 text-danger-500 hover:text-danger-400"
        onClick={() => deleteNote(note.id)}
      >
        <TrashIcon className="w-full" />
      </button>
    </div>
  );
}

Card.propTypes = {
  note: PropTypes.object.isRequired,
  deleteNote: PropTypes.func.isRequired,
  className: PropTypes.string,
};
