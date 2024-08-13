import Button from "./Button";
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

export default function SecondaryButton({
  children,
  className,
  onClick,
  as: Alias,
  size = "medium",
  disabled = false,
  ...props
}) {
  return (
    <Button
      onClick={onClick}
      as={Alias}
      size={size}
      disabled={disabled}
      className={twMerge("bg-secondary text-secondaryContrast", className)}
      {...props}
    >
      {children}
    </Button>
  );
}

SecondaryButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  as: PropTypes.object,
  size: PropTypes.string,
  disabled: PropTypes.bool,
};
