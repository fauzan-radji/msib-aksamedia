import PropTypes from "prop-types";
import { createContext } from "react";
import { useLocalStorage } from "@/hooks";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [users, setUsers] = useLocalStorage("users", [
    {
      id: 1,
      name: "Fauzan Radji",
      username: "fauzan",
      password: "12345678",
    },
    {
      id: 2,
      name: "John Doe",
      username: "john",
      password: "12345678",
    },
    {
      id: 3,
      name: "Bruce Wayne",
      username: "bruce",
      password: "12345678",
    },
  ]);

  const [user, setUser] = useLocalStorage("user", null);

  function login(username, password) {
    const matchedUser = users.find((user) => user.username === username);
    if (!matchedUser) return "Wrong username or password";
    if (matchedUser.password !== password) return "Wrong username or password";

    setUser(matchedUser);
  }
  function logout() {
    setUser(null);
  }

  function updateUser(newUser) {
    setUser((prev) => ({
      ...user,
      ...newUser,
      id: prev.id,
    }));
    setUsers((prev) =>
      prev.map((u) =>
        u.id === user.id
          ? {
              ...u,
              ...newUser,
              id: u.id,
            }
          : u,
      ),
    );
  }

  return (
    <AuthContext.Provider
      value={{ user, updateUser, isLoggedIn: !!user, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
