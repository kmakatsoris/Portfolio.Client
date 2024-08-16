import React, { useContext, useEffect, useState } from "react";
import styles from "./HeaderStandard_extraSmall_small.module.css";
import logo from "../../../images/logo/Logo2.png";
import { Link, useNavigate } from "react-router-dom";
import coffee from "../../../images/icons/coffee1.png";
import user from "../../../images/icons/user1.png";
import menu from "../../../images/icons/menu1.png";
import { GeneralDataContext } from "../../../services/DataProviders/GeneralDataProvider";
import Menu from "../../../pages/Menu/Menu";
import Menu_extraSmall_PortraitAndLanscape from "../../../pages/responsivePages/Menu/Menu_extraSmall_PortraitAndLanscape";

interface HeaderStandard_extraSmall_smallProps {
  links: DictionaryType;
}

const HeaderStandard_extraSmall_small = ({
  links,
}: HeaderStandard_extraSmall_smallProps) => {
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
              <Menu_extraSmall_PortraitAndLanscape />
            </>
          ),
          contentW: "80%",
          contentH: "80%",
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

export default HeaderStandard_extraSmall_small;
