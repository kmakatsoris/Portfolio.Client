import React, { useContext } from "react";
import styles from "./Menu_extraSmall_PortraitAndLanscape.module.css";
import RenderListOfItemsInACircle from "../../../modules/components/showupViewer/RenderListOfItemsInACircle";

import home from "../../../images/icons/home.png";
import bio from "../../../images/icons/bio.png";
import skills from "../../../images/icons/technicalSkills.png";
import projects from "../../../images/icons/projects.png";
import apis from "../../../images/icons/apis.png";
import contacts from "../../../images/icons/contacts.png";
import ContentViewerPatch2 from "../../../modules/components/contentViewer/ContentViewerPatch2";
import TitleAndContentViewer from "../../../modules/components/contentViewer/TitleAndContentViewer";
import { useNavigate } from "react-router-dom";
import { GeneralDataContext } from "../../../services/DataProviders/GeneralDataProvider";

interface Menu_extraSmall_PortraitAndLanscapeProps {}

const Menu_extraSmall_PortraitAndLanscape = (
  props: Menu_extraSmall_PortraitAndLanscapeProps
) => {
  const { setGlassModalInstance, setPrevGlassModalInstance } =
    useContext(GeneralDataContext);
  const navigate = useNavigate();

  const Menu_extraSmall_PortraitAndLanscapeItemsClickHandler = (
    location: string
  ) => {
    navigate(location);
    setGlassModalInstance((prevState: GlassModalDataContract) => {
      setPrevGlassModalInstance(prevState);
      return {
        ...prevState,
        isOpen: false,
      };
    });
  };

  const _renderMenu_extraSmall_PortraitAndLanscapeObjects = () => {
    return (
      <RenderListOfItemsInACircle
        items={[
          <div className={styles.iconContainer}>
            <img
              src={home}
              alt="Home"
              className={styles.icons}
              onClick={() => {
                Menu_extraSmall_PortraitAndLanscapeItemsClickHandler("/home");
              }}
            />
          </div>,
          <div className={styles.iconContainer}>
            <img
              src={bio}
              alt="bio"
              className={styles.icons}
              onClick={() => {
                Menu_extraSmall_PortraitAndLanscapeItemsClickHandler("/bio");
              }}
            />
          </div>,
          <div className={styles.iconContainer}>
            <img
              src={skills}
              alt="skills"
              className={styles.icons}
              onClick={() => {
                Menu_extraSmall_PortraitAndLanscapeItemsClickHandler("/skills");
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
                Menu_extraSmall_PortraitAndLanscapeItemsClickHandler(
                  "/projects"
                );
              }}
            />
          </div>,
          <div className={styles.iconContainer}>
            <img
              src={apis}
              alt="apis"
              className={styles.icons}
              onClick={() => {
                Menu_extraSmall_PortraitAndLanscapeItemsClickHandler("/apis");
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
                Menu_extraSmall_PortraitAndLanscapeItemsClickHandler(
                  "/contact"
                );
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
            <div
              className={
                styles.renderMenu_extraSmall_PortraitAndLanscapeObjectsContainer
              }
            >
              {_renderMenu_extraSmall_PortraitAndLanscapeObjects()}
            </div>
          }
          content={
            <div className={styles.titleContainer}>
              <TitleAndContentViewer
                title={"Menu_extraSmall_PortraitAndLanscape, Choose Wisely!"}
                content={
                  <div className={styles.description}>
                    Welcome to our Menu_extraSmall_PortraitAndLanscape
                    selection. Here, you have the opportunity to choose from a
                    variety of options tailored to suit your preferences.
                    Explore our options and make your selections wisely to craft
                    your ideal experience. Enjoy!
                  </div>
                }
                linehorizonalW={"100%"}
                fontSize="90%"
              />
            </div>
          }
          orientation={"column"}
          animationModes={[4, 5]}
          graphicContainerInlineStyle={{}}
        />
      </div>
    </div>
  );
};

export default Menu_extraSmall_PortraitAndLanscape;
