import { Header } from "@/components";
import { useSettings } from "@/context";

export default function Setting() {
  const { theme, setTheme } = useSettings();

  return (
    <div className="flex flex-col">
      <Header>Theme</Header>
      <ul className="mx-auto flex w-full max-w-sm list-none flex-col gap-0.5 bg-dark/30 dark:bg-light/30">
        <li className="flex items-center gap-2 bg-light ps-4 dark:bg-dark">
          <input
            type="radio"
            name="theme"
            id="light"
            className="peer hidden"
            onChange={() => setTheme("light")}
            defaultChecked={theme === "light"}
          />
          <label
            htmlFor="light"
            className="inline-block aspect-square h-2 cursor-pointer rounded-full bg-dark ring-2 ring-dark ring-offset-2 ring-offset-light peer-checked:bg-secondary peer-checked:ring-secondary dark:bg-light dark:ring-light dark:ring-offset-dark"
          ></label>
          <label className="flex-auto cursor-pointer py-2 pe-4" htmlFor="light">
            Light
          </label>
        </li>
        <li className="flex items-center gap-2 bg-light ps-4 dark:bg-dark">
          <input
            type="radio"
            name="theme"
            id="dark"
            className="peer hidden"
            onChange={() => setTheme("dark")}
            defaultChecked={theme === "dark"}
          />
          <label
            htmlFor="dark"
            className="inline-block aspect-square h-2 cursor-pointer rounded-full bg-dark ring-2 ring-dark ring-offset-2 ring-offset-light peer-checked:bg-secondary peer-checked:ring-secondary dark:bg-light dark:ring-light dark:ring-offset-dark"
          ></label>
          <label className="flex-auto cursor-pointer py-2 pe-4" htmlFor="dark">
            Dark
          </label>
        </li>
        <li className="flex items-center gap-2 bg-light ps-4 dark:bg-dark">
          <input
            type="radio"
            name="theme"
            id="system"
            className="peer hidden"
            onChange={() => setTheme("system")}
            defaultChecked={theme === "system"}
          />
          <label
            htmlFor="system"
            className="inline-block aspect-square h-2 cursor-pointer rounded-full bg-dark ring-2 ring-dark ring-offset-2 ring-offset-light peer-checked:bg-secondary peer-checked:ring-secondary dark:bg-light dark:ring-light dark:ring-offset-dark"
          ></label>
          <label
            className="flex-auto cursor-pointer py-2 pe-4"
            htmlFor="system"
          >
            System
          </label>
        </li>
      </ul>
    </div>
  );
}
