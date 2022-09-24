import React, { useState } from "react";
import css from "./css/style.module.css";
import Image from "next/image";
import Link from "next/link";

import { IoIosArrowDown } from "react-icons/io";

import { menuList } from "./sidebarList";

const Sidebar = () => {
  return (
    <div className={css.sidebar}>
      <div className={css.sidebar__wrapper}>
        <div className={`${css.sidebar__header}`}>
          <div className={css.sidebar__name}>
            Furniture <span>Admin</span>
          </div>
        </div>

        <div className={css.menu}>Menu</div>
        <nav className={css.nav__container}>
          {menuList.map(({ name, path, icon, dropDownList }, indx) =>
            !dropDownList ? (
              <Link href={path} key={indx}>
                <a className={css.nav__link}>
                  <span>{icon}</span> {name}
                </a>
              </Link>
            ) : (
              <DropDown
                name={name}
                icon={icon}
                dropDownList={dropDownList}
                key={indx}
              />
            )
          )}
        </nav>
        <div className={css.menu}>perferences</div>
      </div>
    </div>
  );
};

export const DropDown = ({ name, icon, dropDownList }) => {
  const [dropDown, setDropDown] = useState(false);

  return (
    <div className={css.dropDown}>
      <div
        className={`${css.nav__link} ${dropDown ? css.rotate__arrow : " "}`}
        onClick={() => setDropDown(!dropDown)}
      >
        <span>{icon}</span> {name}
        <span>
          <IoIosArrowDown />
        </span>
      </div>
      <div
        className={`${css.dropDown__list} ${
          dropDown ? css.dropDown__active : " "
        }`}
      >
        {dropDownList.map(({ name, path }, indx) => (
          <Link href={path} key={indx}>
            <a className={` ${css.dropDown__link}`}>{name}</a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
