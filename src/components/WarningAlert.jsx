import Alert from "./Alert";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import PropTypes from "prop-types";

export default function WarningAlert({ children, className, close }) {
  return (
    <Alert bgColor="bg-warning-600" className={className} close={close}>
      <ExclamationCircleIcon className="h-6 w-6 flex-shrink-0" />
      {children}
    </Alert>
  );
}

WarningAlert.propTypes = {
  close: PropTypes.func.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
};
