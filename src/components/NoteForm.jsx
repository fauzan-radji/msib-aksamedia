import {
  Bars3BottomLeftIcon,
  BookmarkSquareIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";

import Input from "./Input";
import PrimaryButton from "./PrimaryButton";
import PropTypes from "prop-types";
import { useRef } from "react";

export default function NoteForm({ note, handleNote }) {
  const titleInput = useRef();
  const contentInput = useRef();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleNote(titleInput.current.value, contentInput.current.value);
      }}
      className="mx-auto mt-4 flex w-full max-w-md flex-col items-center justify-center gap-4 pb-4"
    >
      <Input
        required
        ref={titleInput}
        type="text"
        placeholder="Title"
        value={note ? note.title : ""}
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
        value={note ? note.content : ""}
        validate={() => ""}
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

NoteForm.propTypes = {
  note: PropTypes.object,
  handleNote: PropTypes.func,
};
