import React, {memo} from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import {SidebarProps} from "./sidebar.ts";

const Sidebar: React.FC<SidebarProps> = ({ items, setDefault }) => {
    return (
        <div className="sidebar">
            <ul className="sidebar__list">
                {items.map((item, index) => (
                    <li key={index} className="sidebar__item">
                        <Link to={item.path} className="sidebar__link">
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
            <button onClick={() => setDefault()}>SET DEFAULT</button>
        </div>
    );
};

export default memo(Sidebar);
