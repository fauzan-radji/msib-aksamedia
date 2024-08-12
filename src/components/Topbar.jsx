import { ArrowLeftIcon, UserCircleIcon } from "@heroicons/react/24/outline";

import PropTypes from "prop-types";

export default function Topbar({ title }) {
  return (
    <header className="bg-primary text-primaryContrast">
      <div className="container mx-auto flex items-center justify-between px-2">
        <div className="pointer-events-none aspect-square p-4 opacity-0">
          <ArrowLeftIcon className="h-6 w-6" />
        </div>
        <h1 className="p-4 text-xl font-bold">{title}</h1>
        <div className="text-secondary aspect-square p-4">
          <UserCircleIcon className="h-6 w-6" />
        </div>
      </div>
    </header>
  );
}

Topbar.propTypes = {
  title: PropTypes.string.isRequired,
};
