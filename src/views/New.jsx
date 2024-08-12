import {
  Bars3BottomLeftIcon,
  BookmarkSquareIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import { Input, PrimaryButton } from "@/components";

import { useRef } from "react";

export default function New() {
  const titleInput = useRef();
  const contentInput = useRef();

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
        ref={titleInput}
        type="text"
        placeholder="Title"
        validate={(value) => {
          if (value.length < 1)
            return "Title must be at least 1 characters long";

          return "";
        }}
        onInputError={onInputError}
      >
        <PencilSquareIcon className="h-4 w-4" />
      </Input>

      <Input
        ref={contentInput}
        type="textarea"
        placeholder="Content"
        validate={() => ""}
        onInputError={onInputError}
      >
        <Bars3BottomLeftIcon className="h-4 w-4" />
      </Input>

      <PrimaryButton className="w-full">
        Save
        <BookmarkSquareIcon className="h-4 w-4" />
      </PrimaryButton>
    </form>
  );
}
