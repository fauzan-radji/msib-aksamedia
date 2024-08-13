import {
  ArrowLeftIcon,
  ArrowRightStartOnRectangleIcon,
  Cog6ToothIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { Link, useLocation, useNavigate } from "react-router-dom";

import Dropdown from "./Dropdown";
import PropTypes from "prop-types";
import { twJoin } from "tailwind-merge";
import { useAuth } from "@/context";
import { useState } from "react";

export default function Topbar({ title }) {
  const { user, logout } = useAuth();
  const { pathname } = useLocation();
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

  return (
    <header className="bg-primary text-primaryContrast">
      <div className="container relative mx-auto flex items-center justify-between px-2">
        <Link
          to="/"
          className={twJoin(
            "aspect-square p-4 text-secondary",
            pathname !== "/login" && pathname !== "/"
              ? ""
              : "pointer-events-none opacity-0",
          )}
        >
          <ArrowLeftIcon className="h-6 w-6" />
        </Link>
        <h1 className="p-4 text-xl font-bold">{title}</h1>
        <div
          className="aspect-square cursor-pointer p-4"
          onClick={(e) => {
            setDropdownPosition({ x: e.clientX, y: e.clientY });
            setShowDropdown((prev) => !prev);
          }}
        >
          {user ? (
            <span
              className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary font-bold uppercase text-secondaryContrast"
              title={user.name}
            >
              {user.name[0]}
            </span>
          ) : (
            <Cog6ToothIcon className="h-6 w-6 text-secondary" />
          )}
        </div>

        <Dropdown
          position={dropdownPosition}
          show={showDropdown}
          setShow={setShowDropdown}
          title={user ? `Hello, ${user.name}` : ""}
          options={[
            {
              id: "setting",
              text: "Setting",
              icon: Cog6ToothIcon,
              action: () => {},
            },
            ...(user
              ? [
                  {
                    id: "profile",
                    text: "Profile",
                    icon: UserIcon,
                    action: () => {
                      navigate("/profile");
                    },
                  },
                  {
                    id: "logout",
                    text: "Logout",
                    icon: ArrowRightStartOnRectangleIcon,
                    action: logout,
                  },
                ]
              : []),
          ]}
        />
      </div>
    </header>
  );
}

Topbar.propTypes = {
  title: PropTypes.string.isRequired,
};
