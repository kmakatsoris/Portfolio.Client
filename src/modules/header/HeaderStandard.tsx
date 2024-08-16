import React, { useContext, useEffect, useState } from "react";
import styles from "./HeaderStandard.module.css";
import logo from "../../images/logo/Logo2.png";
import { Link, useNavigate } from "react-router-dom";
import coffee from "../../images/icons/coffee1.png";
import user from "../../images/icons/user1.png";
import menu from "../../images/icons/menu1.png";
import { GeneralDataContext } from "../../services/DataProviders/GeneralDataProvider";
import Menu from "../../pages/Menu/Menu";

interface HeaderStandardProps {
  links: DictionaryType;
}

const HeaderStandard = ({ links }: HeaderStandardProps) => {
  const { setGlassModalInstance, setPrevGlassModalInstance } =
    useContext(GeneralDataContext);
  const [activeLinkIdx, setActiveLinkIdx] = useState<number>(-1);
  const navigate = useNavigate();
  const actionIcons: string[] = [coffee, user, menu];

  const logoClickHandler = () => {
    setActiveLinkIdx(0);
    navigate("/home");
  };

  const linksButtonsHandler = (idx: number) => {
    setActiveLinkIdx(idx);
  };

  const otherButtonsHandler = (idx: number) => {
    if (idx === 0) {
      navigate("/coffee");
    } else if (idx === 1) {
      navigate("/profile");
    } else if (idx === 2) {
      setGlassModalInstance((prevState: GlassModalDataContract) => {
        setPrevGlassModalInstance(prevState);
        return {
          ...prevState,
          content: (
            <>
              <Menu />
            </>
          ),
          isOpen: true,
        };
      });
    }
  };

  const getKeyFromValue = (
    pages: DictionaryType,
    value: string
  ): string | undefined => {
    return Object.keys(pages).find((key) => pages[key] === value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.sections}>
        {/** Logo */}
        <div className={styles.logoSection}>
          <img
            src={logo}
            alt="Logo"
            className={styles.logoImage}
            onClick={logoClickHandler}
          />
        </div>
        {/** Pages */}
        <nav className={styles.pageLinksSection}>
          {links &&
            Object.keys(links).map((k: string, idx: number) => (
              <Link
                key={k}
                className={
                  activeLinkIdx === idx ||
                  getKeyFromValue(links, window.location.pathname) === k
                    ? styles.pageLinkActive
                    : styles.pageLink
                }
                to={links[k]}
                onClick={() => {
                  linksButtonsHandler(idx);
                }}
              >
                {k}
              </Link>
            ))}
        </nav>
        {/** Other Actions Icons/Links */}
        <div className={styles.otherIcons}>
          {actionIcons.map((l: string, idx: number) => (
            <div
              className={styles.actionIcon}
              key={idx}
              onClick={() => {
                otherButtonsHandler(idx);
              }}
            >
              <img src={l} alt="Header Actions" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeaderStandard;
