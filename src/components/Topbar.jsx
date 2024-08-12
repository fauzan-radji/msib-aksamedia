import { ArrowLeftIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";

import PropTypes from "prop-types";
import { useAuth } from "@/context";

export default function Topbar({ title }) {
  const { user } = useAuth();

  return (
    <header className="bg-primary text-primaryContrast">
      <div className="container mx-auto flex items-center justify-between px-2">
        <div className="pointer-events-none aspect-square p-4 opacity-0">
          <ArrowLeftIcon className="h-6 w-6" />
        </div>
        <h1 className="p-4 text-xl font-bold">{title}</h1>
        <div className="aspect-square cursor-pointer p-4">
          {user ? (
            <span
              className="bg-secondary text-secondaryContrast flex h-6 w-6 items-center justify-center rounded-full font-bold uppercase"
              title={user.name}
            >
              {user.name[0]}
            </span>
          ) : (
            <Cog6ToothIcon className="text-secondary h-6 w-6" />
          )}
        </div>
      </div>
    </header>
  );
}

Topbar.propTypes = {
  title: PropTypes.string.isRequired,
};
