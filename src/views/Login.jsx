import {
  ArrowRightEndOnRectangleIcon,
  LockClosedIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { Header, Input, PrimaryButton } from "@/components";

import { useRef } from "react";

export default function Login() {
  const usernameInput = useRef();
  const passwordInput = useRef();

  function onInputError(error) {
    // TODO: show error message with toast
    console.log(error);
  }
  function handleSubmit() {
    // TODO: handle form submission
  }

  return (
    <div className="flex h-svh flex-col items-center justify-center px-6 py-4">
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
          onInputError={onInputError}
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
          onInputError={onInputError}
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
