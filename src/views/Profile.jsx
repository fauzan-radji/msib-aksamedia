import { BookmarkSquareIcon, UserIcon } from "@heroicons/react/24/outline";
import { Input, PrimaryButton } from "@/components";

import { useRef } from "react";

export default function Profile() {
  const nameInput = useRef();
  const usernameInput = useRef();

  function onInputError(error) {
    // TODO: show error message with toast
    console.log(error);
  }
  function handleSubmit() {
    // TODO: save note
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-4 flex w-full max-w-md flex-col items-center justify-center gap-4 pb-4"
    >
      <Input
        required
        ref={nameInput}
        type="text"
        placeholder="Name"
        validate={(value) => {
          if (value.length < 3)
            return "Name must be at least 3 characters long";

          return "";
        }}
        onInputError={onInputError}
      >
        <UserIcon className="h-4 w-4" />
      </Input>

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

      <PrimaryButton className="w-full">
        Save
        <BookmarkSquareIcon className="h-4 w-4" />
      </PrimaryButton>
    </form>
  );
}
