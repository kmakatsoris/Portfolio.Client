import React, { useContext } from "react";
import styles from "./Menu.module.css";
import RenderListOfItemsInACircle from "../../modules/components/showupViewer/RenderListOfItemsInACircle";

import home from "../../images/icons/home.png";
import bio from "../../images/icons/bio.png";
import skills from "../../images/icons/technicalSkills.png";
import projects from "../../images/icons/projects.png";
import apis from "../../images/icons/apis.png";
import contacts from "../../images/icons/contacts.png";
import ContentViewerPatch2 from "../../modules/components/contentViewer/ContentViewerPatch2";
import TitleAndContentViewer from "../../modules/components/contentViewer/TitleAndContentViewer";
import { useNavigate } from "react-router-dom";
import { GeneralDataContext } from "../../services/DataProviders/GeneralDataProvider";

interface MenuProps {}

const Menu = (props: MenuProps) => {
  const { setGlassModalInstance, setPrevGlassModalInstance } =
    useContext(GeneralDataContext);
  const navigate = useNavigate();

  const menuItemsClickHandler = (location: string) => {
    navigate(location);
    setGlassModalInstance((prevState: GlassModalDataContract) => {
      setPrevGlassModalInstance(prevState);
      return {
        ...prevState,
        isOpen: false,
      };
    });
  };

  const _renderMenuObjects = () => {
    return (
      <RenderListOfItemsInACircle
        items={[
          <div className={styles.iconContainer}>
            <img
              src={home}
              alt="Home"
              className={styles.icons}
              onClick={() => {
                menuItemsClickHandler("/home");
              }}
            />
          </div>,
          <div className={styles.iconContainer}>
            <img
              src={bio}
              alt="bio"
              className={styles.icons}
              onClick={() => {
                menuItemsClickHandler("/bio");
              }}
            />
          </div>,
          <div className={styles.iconContainer}>
            <img
              src={skills}
              alt="skills"
              className={styles.icons}
              onClick={() => {
                menuItemsClickHandler("/skills");
              }}
            />
          </div>,
          <div className={styles.iconContainer}>
            {" "}
            <img
              src={projects}
              alt="projects"
              className={styles.icons}
              onClick={() => {
                menuItemsClickHandler("/projects");
              }}
            />
          </div>,
          <div className={styles.iconContainer}>
            <img
              src={apis}
              alt="apis"
              className={styles.icons}
              onClick={() => {
                menuItemsClickHandler("/apis");
              }}
            />
          </div>,
          <div className={styles.iconContainer}>
            {" "}
            <img
              src={contacts}
              alt="contacts"
              className={styles.icons}
              onClick={() => {
                menuItemsClickHandler("/contact");
              }}
            />
          </div>,
        ]}
        radius={25}
        top={"40%"}
        left={"48%"}
      />
    );
  };
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <ContentViewerPatch2
          graphic={
            <div className={styles.menuObjectsContainer}>
              {_renderMenuObjects()}
            </div>
          }
          content={
            <div className={styles.titleContainer}>
              <TitleAndContentViewer
                title={"Menu, Choose Wisely!"}
                content={
                  <div className={styles.description}>
                    Welcome to our menu selection. Here, you have the
                    opportunity to choose from a variety of options tailored to
                    suit your preferences. Explore our options and make your
                    selections wisely to craft your ideal experience. Enjoy!
                  </div>
                }
                linehorizonalW={"100%"}
              />
            </div>
          }
          orientation={"row"}
          animationModes={[4, 5]}
          graphicContainerInlineStyle={{}}
        />
      </div>
    </div>
  );
};

export default Menu;
