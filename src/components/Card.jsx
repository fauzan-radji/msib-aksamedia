import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";

import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

export default function Card({ title, children, className }) {
  return (
    <div
      className={twMerge(
        "flex w-full cursor-pointer flex-col gap-2 rounded-md bg-white p-4 hover:bg-white/50",
        className,
      )}
    >
      <div className="flex justify-between">
        <h3 className="line-clamp-1 font-bold" title={title}>
          {title}
        </h3>
        <div className="flex">
          <button className="flex aspect-square w-6 cursor-pointer items-center justify-center text-success-800 hover:text-success-600">
            <PencilSquareIcon className="h-4 w-4" />
          </button>
          <button className="flex aspect-square w-6 cursor-pointer items-center justify-center text-danger-500 hover:text-danger-400">
            <TrashIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
      <p className="line-clamp-6 overflow-hidden text-sm text-gray-700">
        {children}
      </p>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
};
