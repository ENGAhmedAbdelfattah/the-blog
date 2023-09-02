"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsSun } from "react-icons/bs";
import { FiMoon } from "react-icons/fi";
type props = {
  name: string;
};

function ThemeSwitcher({ name }: props) {
  const [mounted, setMounted] = useState(false);
  const [finishFirstEffect, setFinishFirstEffect] = useState(false);
  const { theme, setTheme, systemTheme }: any = useTheme();
  const [darkActive,setDarkActive ] = useState(systemTheme);
  useEffect(() => {
    setMounted(true);
    setTheme(systemTheme);
    setFinishFirstEffect(true);
  }, []);
  useEffect(() => {
    if (finishFirstEffect) {
      setTheme(theme || systemTheme);
      setDarkActive(theme || systemTheme);
    }
  }, [finishFirstEffect, theme, systemTheme, setTheme]);

  if (!mounted) {
    return null;
  }
  const handleClick = () => {
    if(theme === "dark") {
      setTheme("light");
      setDarkActive("light")
    } else {
      setTheme("dark");
      setDarkActive("dark")
    }
  }
  return (
    <>
      <div className="theme-box" onClick={handleClick}>
        <BsSun size={25} cursor="pointer" className={name} />
        <FiMoon size={25} cursor="pointer" className={name} />
        <div
          className={`icon-cover ${darkActive === "dark" ? "dark" : "light"}`}
        ></div>
      </div>
      {/* {iconTheme} */}
    </>
  );
}

export default ThemeSwitcher;

{
  /*
<select value={theme} onChange={e => setTheme(e.target.value)}>
  <option value="system">System</option>
  <option value="dark">Dark</option>
  <option value="light">Light</option>
</select>
*/
}
