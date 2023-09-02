"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { useAppSelector, useAppDispatch } from "@/redux/app/hooks";
import { toggleActive } from "@/redux/features/activeNav/activeNavSlice";
import Link from "next/link";
import ThemeSwitcher from "@/components/UI/common/ThemeSwitcher";

function NavLinks() {
  const pathname = usePathname();
  const activeState = useAppSelector((store) => store.activeNav);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(toggleActive());
  };
  type path = {
    id: string, name: string, path: string
  }
  const paths: path[] = [
    { id: "path1", name: "Blog", path: "/" },
    { id: "path2", name: "Projects", path: "/projects" },
    { id: "path3", name: "About", path: "/about" },
    { id: "path4", name: "News Letter", path: "/newsletter" },
  ];

  return (
    <ul className={`link-list ${activeState.active}`}>
      {paths.map((el: path) => (
        <li key={el.id} onClick={() => dispatch(toggleActive())}>
          <Link
            href={el.path}
            className={`link ${
              el.name.toLowerCase() === pathname ? "active" : ""
            }`}
          >
            {el.name}
          </Link>
        </li>
      ))}
      <li className="new-blog">
        <Link href="/newblog">New blog</Link>
      </li>
      <li className="theme-hand">
        <ThemeSwitcher name={"theme-icon"} />
      </li>
    </ul>
  );
}

export default NavLinks;
