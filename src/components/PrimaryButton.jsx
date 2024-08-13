import Button from "./Button";
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

export default function PrimaryButton({
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
      size={size}
      as={Alias}
      disabled={disabled}
      className={twMerge("bg-primary text-primaryContrast", className)}
      {...props}
    >
      {children}
    </Button>
  );
}

PrimaryButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  as: PropTypes.object,
  size: PropTypes.string,
  disabled: PropTypes.bool,
};
