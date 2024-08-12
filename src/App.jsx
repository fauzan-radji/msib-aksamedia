import { Home, Login, New } from "@/views";
import { Route, Routes } from "react-router-dom";

import { Topbar } from "@/components";

export default function App() {
  return (
    <div className="bg-light text-dark flex h-dvh flex-col">
      <Topbar title="My Notes" />

      <main className="no-scrollbar container mx-auto flex-auto flex-col overflow-auto px-6 pt-4">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </div>
  );
}
