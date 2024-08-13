import { Edit, Home, Login, New, Profile, Setting } from "@/views";
import { Route, Routes } from "react-router-dom";

import { Topbar } from "@/components";

export default function App() {
  return (
    <div className="flex h-dvh flex-col bg-light text-dark dark:bg-dark dark:text-light">
      <Topbar title="My Notes" />

      <main className="no-scrollbar container mx-auto flex-auto flex-col overflow-auto px-6 pt-4">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/edit/:noteId" element={<Edit />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/setting" element={<Setting />} />
        </Routes>
      </main>
    </div>
  );
}
