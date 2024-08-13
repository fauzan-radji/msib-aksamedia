import { BookmarkSquareIcon, UserIcon } from "@heroicons/react/24/outline";
import { Input, PrimaryButton } from "@/components";
import { Navigate, useNavigate } from "react-router-dom";

import { useAuth } from "@/context";
import { useLocalStorage } from "@/hooks";
import { useRef } from "react";

export default function Profile() {
  const { isLoggedIn } = useAuth();
  const [user, setUser] = useLocalStorage("user", null);
  const navigate = useNavigate();
  const nameInput = useRef();
  const usernameInput = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    setUser((prev) => ({
      ...prev,
      name: nameInput.current.value,
      username: usernameInput.current.value,
    }));

    navigate("/");
  }

  if (!isLoggedIn) return <Navigate to="/login" replace={true} />;

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-4 flex w-full max-w-md flex-col items-center justify-center gap-4 pb-4"
    >
      <Input
        required
        ref={nameInput}
        type="text"
        placeholder="Name"
        value={user?.name}
        validate={(value) => {
          if (value.length < 3)
            return "Name must be at least 3 characters long";

          return "";
        }}
      >
        <UserIcon className="h-4 w-4" />
      </Input>

      <Input
        required
        ref={usernameInput}
        type="text"
        placeholder="Username"
        value={user?.username}
        validate={(value) => {
          if (value.length < 3)
            return "Username must be at least 3 characters long";

          return "";
        }}
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
