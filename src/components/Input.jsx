import { forwardRef, useId, useState } from "react";

import PropTypes from "prop-types";
import { twJoin } from "tailwind-merge";

const InputIcon = forwardRef(
  (
    {
      children: icon,
      placeholder,
      type = "text",
      required = false,
      max = "",
      min = "",
      validate = () => ({ isError: false, message: "" }),
      onErrorChange = () => {},
    },
    ref,
  ) => {
    const [error, setError] = useState(false);
    const [isValid, setIsValid] = useState(true);
    const id = useId();

    return (
      <div className="flex w-full flex-col gap-1">
        <div className="relative flex w-full flex-col items-center justify-center">
          {type === "textarea" ? (
            <textarea
              id={id}
              ref={ref}
              rows={3}
              required={required}
              placeholder={placeholder}
              className={twJoin(
                "peer h-full w-full resize-none rounded-md border-2 bg-transparent px-3 py-2 outline-none transition duration-300 placeholder:text-transparent",
                isValid
                  ? "border-primary/25 focus:border-primary/50"
                  : "border-danger-600 focus:border-danger-600",
              )}
              onChange={(e) => {
                onErrorChange({ id: e.target.id, error: "" });

                if (!e.target.value) {
                  setError(false);
                  setIsValid(true);
                  return;
                }
                if (!validate) return;

                const message = validate(e.target.value);
                if (message) {
                  onErrorChange({ id: e.target.id, error: message });
                  setError(message);
                  setIsValid(false);
                  return;
                }

                setError(false);
                setIsValid(true);
              }}
            ></textarea>
          ) : (
            <input
              id={id}
              type={type}
              ref={ref}
              required={required}
              min={min}
              max={max}
              placeholder={placeholder}
              className={twJoin(
                "peer h-full w-full rounded-md border-2 bg-transparent px-3 py-2 outline-none transition duration-300 placeholder:text-transparent",
                isValid
                  ? "border-primary/25 focus:border-primary/50"
                  : "border-danger-600 focus:border-danger-600",
              )}
              onChange={(e) => {
                onErrorChange({ id: e.target.id, error: "" });

                if (!e.target.value) {
                  setError(false);
                  setIsValid(true);
                  return;
                }
                if (!validate) return;

                const message = validate(e.target.value);
                if (message) {
                  onErrorChange({ id: e.target.id, error: message });
                  setError(message);
                  setIsValid(false);
                  return;
                }

                setError(false);
                setIsValid(true);
              }}
            />
          )}

          <label
            htmlFor={id}
            className={twJoin(
              "before:bg-light absolute left-2 top-0.5 isolate z-20 m-auto flex origin-left -translate-y-5 scale-90 items-center gap-1 px-1 py-2 transition duration-300 before:absolute before:left-0 before:right-0 before:-z-10 before:h-2 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-5 peer-focus:scale-90",
              isValid
                ? "text-dark peer-focus:text-dark"
                : "text-danger-600 peer-focus:text-danger-600",
            )}
          >
            {icon}
            {placeholder}
          </label>
        </div>

        {error && <span className="text-sm text-danger-600">{error}</span>}
      </div>
    );
  },
);

InputIcon.displayName = "InputIcon";
InputIcon.propTypes = {
  children: PropTypes.node.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string,
  required: PropTypes.bool,
  min: PropTypes.string,
  max: PropTypes.string,
  validate: PropTypes.func,
  onErrorChange: PropTypes.func,
};

export default InputIcon;
