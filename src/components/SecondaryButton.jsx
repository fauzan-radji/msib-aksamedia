import Button from "./Button";
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

export default function SecondaryButton({
  children,
  className,
  onClick,
  size = "medium",
  disabled = false,
}) {
  return (
    <Button
      onClick={onClick}
      size={size}
      disabled={disabled}
      className={twMerge("bg-secondary text-secondaryContrast", className)}
    >
      {children}
    </Button>
  );
}

SecondaryButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.string,
  disabled: PropTypes.bool,
};
