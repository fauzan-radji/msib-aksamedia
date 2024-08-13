import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

export default function Button({
  children,
  className,
  onClick,
  as: Alias,
  size = "medium",
  disabled = false,
  ...props
}) {
  return Alias ? (
    <Alias
      onClick={onClick}
      disabled={disabled}
      className={twMerge(
        "flex items-center justify-center gap-2 text-center disabled:cursor-not-allowed disabled:opacity-50",
        className,
        size === "small" && "rounded px-4 py-2 text-sm",
        size === "medium" && "rounded-md px-4 py-2",
        size === "large" && "rounded-lg px-6 py-3 text-lg",
      )}
      {...props}
    >
      {children}
    </Alias>
  ) : (
    <button
      onClick={onClick}
      disabled={disabled}
      className={twMerge(
        "flex items-center justify-center gap-2 text-center disabled:cursor-not-allowed disabled:opacity-50",
        className,
        size === "small" && "rounded px-4 py-2 text-sm",
        size === "medium" && "rounded-md px-4 py-2",
        size === "large" && "rounded-lg px-6 py-3 text-lg",
      )}
      {...props}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  as: PropTypes.object,
  size: PropTypes.string,
  disabled: PropTypes.bool,
};
