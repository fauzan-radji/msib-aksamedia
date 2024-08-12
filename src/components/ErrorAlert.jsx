import Alert from "./Alert";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import PropTypes from "prop-types";

export default function ErrorAlert({ children, className, close }) {
  return (
    <Alert bgColor="bg-danger-600" className={className} close={close}>
      <ExclamationTriangleIcon className="h-6 w-6 flex-shrink-0" />
      {children}
    </Alert>
  );
}

ErrorAlert.propTypes = {
  close: PropTypes.func.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
};
