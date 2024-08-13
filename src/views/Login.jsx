import { AlertContainer, Header, Input, PrimaryButton } from "@/components";
import {
  ArrowRightEndOnRectangleIcon,
  LockClosedIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { useReducer, useRef } from "react";

import { ACTION } from "@/enums";
import { Navigate } from "react-router-dom";
import { alert as alertReducer } from "@/reducers";
import { useAuth } from "@/context";

export default function Login() {
  const { isLoggedIn, login } = useAuth();
  const [alerts, alertsDispatch] = useReducer(alertReducer, []);
  const usernameInput = useRef();
  const passwordInput = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    const error = login(
      usernameInput.current.value,
      passwordInput.current.value,
    );
    if (error) {
      alertsDispatch({
        type: ACTION.ERROR_PUSH,
        payload: error,
      });
    }
  }

  if (isLoggedIn) return <Navigate to="/" replace={true} />;

  return (
    <div className="relative flex h-full flex-col items-center px-6 py-4">
      <AlertContainer
        alerts={alerts}
        dispatch={alertsDispatch}
        className="absolute left-0 right-0 top-0 z-30"
      />

      <Header>Login</Header>
      <form
        onSubmit={handleSubmit}
        className="mt-4 flex w-full max-w-md flex-col items-center justify-center gap-4 pb-4"
      >
        <Input
          required
          ref={usernameInput}
          type="text"
          placeholder="Username"
          validate={(value) => {
            if (value.length < 3)
              return "Username must be at least 3 characters long";

            return "";
          }}
        >
          <UserIcon className="h-4 w-4" />
        </Input>

        {/* TODO: add show/hide password feature */}
        <Input
          required
          ref={passwordInput}
          type="password"
          placeholder="Password"
          validate={(value) => {
            if (value.length < 8)
              return "Password must be at least 8 characters long";

            return "";
          }}
        >
          <LockClosedIcon className="h-4 w-4" />
        </Input>

        <PrimaryButton className="w-full">
          Login
          <ArrowRightEndOnRectangleIcon className="h-4 w-4" />
        </PrimaryButton>
      </form>
    </div>
  );
}
