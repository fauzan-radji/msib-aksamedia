import { twJoin, twMerge } from "tailwind-merge";

import PropTypes from "prop-types";

export default function Dropdown({
  title,
  options,
  position,
  show = false,
  setShow,
}) {
  return (
    <div
      className={twJoin("fixed inset-0 z-30", !show && "pointer-events-none")}
      onContextMenu={(e) => {
        e.preventDefault();
        setShow(false);
      }}
      onClick={() => setShow(false)}
    >
      <ul
        className={twMerge(
          "pointer-events-none absolute isolate flex -translate-x-1/2 translate-y-0 list-none flex-col rounded-md bg-white text-dark opacity-0 shadow-md transition duration-300",
          show && "pointer-events-auto translate-y-2 opacity-100",
        )}
        style={{
          top: `${position.y}px`,
          left: `${position.x}px`,
        }}
      >
        {title && (
          <li className="flex cursor-pointer items-center justify-center gap-2 text-nowrap border-b border-b-secondary px-4 py-2 text-sm first-of-type:rounded-t-md">
            {title}
          </li>
        )}
        {options.map(({ id, text, icon: Icon, action }) => (
          <li
            key={id}
            className="flex cursor-pointer items-center justify-center gap-2 px-4 py-2 text-sm first-of-type:rounded-t-md last-of-type:rounded-b-md hover:bg-primary/10"
            onClick={() => {
              action();
              setShow(false);
            }}
          >
            <Icon className="h-4 w-4" /> {text}
          </li>
        ))}
      </ul>
    </div>
  );
}

Dropdown.propTypes = {
  title: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
  position: PropTypes.object,
  show: PropTypes.bool,
  setShow: PropTypes.func,
};
