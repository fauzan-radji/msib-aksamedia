import Alert from "./Alert";
import { CheckIcon } from "@heroicons/react/24/outline";
import PropTypes from "prop-types";

export default function SuccessAlert({ children, className, close }) {
  return (
    <Alert bgColor="bg-success-700" className={className} close={close}>
      <CheckIcon className="h-6 w-6 flex-shrink-0" />
      {children}
    </Alert>
  );
}

SuccessAlert.propTypes = {
  close: PropTypes.func.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
};
