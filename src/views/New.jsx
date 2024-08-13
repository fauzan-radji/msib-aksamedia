import {
  Bars3BottomLeftIcon,
  BookmarkSquareIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import { Header, Input, PrimaryButton } from "@/components";
import { Navigate, useNavigate } from "react-router-dom";

import { useAuth } from "@/context";
import { useLocalStorage } from "@/hooks";
import { useRef } from "react";

export default function New() {
  const { isLoggedIn } = useAuth();
  const setNotes = useLocalStorage("notes", [])[1];
  const navigate = useNavigate();
  const titleInput = useRef();
  const contentInput = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    setNotes((notes) => [
      ...notes,
      {
        title: titleInput.current.value,
        content: contentInput.current.value,
      },
    ]);

    navigate("/");
  }

  if (!isLoggedIn) return <Navigate to="/login" replace={true} />;

  return (
    <div className="flex flex-col">
      <Header>New Note</Header>

      <form
        onSubmit={handleSubmit}
        className="mx-auto mt-4 flex w-full max-w-md flex-col items-center justify-center gap-4 pb-4"
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
        >
          <PencilSquareIcon className="h-4 w-4" />
        </Input>

        <Input
          ref={contentInput}
          type="textarea"
          placeholder="Content"
          validate={() => ""}
        >
          <Bars3BottomLeftIcon className="h-4 w-4" />
        </Input>

        <PrimaryButton className="w-full">
          Save
          <BookmarkSquareIcon className="h-4 w-4" />
        </PrimaryButton>
      </form>
    </div>
  );
}
