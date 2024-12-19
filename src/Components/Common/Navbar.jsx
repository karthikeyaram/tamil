import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleLanguage } from "../../Redux/Slices/LanguageSlice";
import { useNavigate } from "react-router-dom";
import menuData from "../../Data/Menu.json";

const Navbar = () => {
    const { language } = useSelector((state) => state.language);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const menu = menuData[language].menu;

    return (
        <div className="nav-container">
            <button onClick={() => dispatch(toggleLanguage())}>
                    {language === "tamil" ? "ENGLISH" : "TAMIL"}
                </button>
            <nav className="navbar">                
                <ul className="menu-list">
                    {menu.map((item, index) => (
                        <li key={index} className="menu-item">
                            <a href="#" onClick={() => navigate(item.path)}>
                                {item.navtitle}
                            </a>
                            {item.details && (
                                <ul className="submenu-list">
                                    {item.details.map((detail, subIndex) => (
                                        <li key={subIndex} className="submenu-item">
                                            <a href="#" onClick={() => navigate(detail.path)}>
                                                {detail.subtitle}
                                            </a>
                                            {detail.childsubtitle && (
                                                <ul className="childsubmenu-list">
                                                    {detail.childsubtitle.map((child, childIndex) => (
                                                        <li key={childIndex} className="childsubmenu-item">
                                                            <a
                                                                href="#"
                                                                onClick={() => navigate(child.path)}
                                                            >
                                                                {child.description}
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
