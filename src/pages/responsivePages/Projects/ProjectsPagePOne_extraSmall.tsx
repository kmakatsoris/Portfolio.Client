import React, { useContext, useState } from "react";
import styles from "./ProjectsPagePOne_extraSmall.module.css";
import CustomShape from "../../../modules/components/shapes/CustomShape";
import HoverComponent from "../../../modules/components/showupViewer/HoverComponent";
import CheckDetailsComponentTransformation from "../../../modules/components/showupViewer/CheckDetailsComponentTransformation";
import htmlContentSmallImg from "../../../images/content/htmlContentSmall.png"; // @TODO: Fetch
import uavs_image_0 from "../../../images/content/HomePagePTwoPage.Sec1/projects/Project-0.png";
import uavs_image_1 from "../../../images/content/HomePagePTwoPage.Sec1/projects/Project-3.png";
import uavs_image_2 from "../../../images/content/HomePagePTwoPage.Sec1/projects/Project-1.png";
import uavs_image_3 from "../../../images/content/HomePagePTwoPage.Sec1/projects/Project-2.png";
import { GeneralDataContext } from "../../../services/DataProviders/GeneralDataProvider";
import ComingSoonLoader from "../../../modules/components/loaders/ComingSoonLoader";
import puzzleImg from "../../../images/content/BioPuzzle.png";
import SpawnListOfItemsTimeSequentially from "../../../modules/components/presentationViewer/SpawnListOfItemsTimeSequentially";

interface ProjectsPagePOne_extraSmallProps {}

const ProjectsPagePOne_extraSmall = (
  props: ProjectsPagePOne_extraSmallProps
) => {
  const { setGlassModalInstance, setPrevGlassModalInstance } =
    useContext(GeneralDataContext);
  const [selectedItem, setSelectedItem] = useState<number | undefined>(
    undefined
  );

  const _handlerDefault = (idx: number) => {
    setSelectedItem(idx);
    setGlassModalInstance((prevState: GlassModalDataContract) => {
      setPrevGlassModalInstance(prevState);
      return {
        ...prevState,
        content: (
          <>
            <ComingSoonLoader />
          </>
        ),
        contentW: "50%",
        contentH: "30%",
        isOpen: true,
      };
    });
  };

  const TrianglesContainers = [
    <div className={styles.triangleContainer0}>
      <CustomShape
        widthPercent={100}
        heightPercent={100}
        path={"M1,1 L100,1 L50,100 Z"}
        imageElement={
          <HoverComponent
            contentWithoutHover={
              <div className={styles.previewContainer0}>
                <img
                  src={uavs_image_0}
                  alt="Project-Preview"
                  className={styles.previewContent0_noHover}
                />
              </div>
            }
            contentWithHover={
              <CheckDetailsComponentTransformation
                content={
                  <div className={styles.previewContainer0}>
                    <img
                      src={uavs_image_0}
                      alt="Project-Preview"
                      className={styles.previewContent0}
                      onClick={() => _handlerDefault(0)}
                    />
                  </div>
                }
                mode={0}
              />
            }
          />
        }
        strokeWidth={0.4}
        clipPathId={"triangleContainer0"}
      />
    </div>,
    <div className={styles.triangleContainer1}>
      <CustomShape
        widthPercent={100}
        heightPercent={100}
        path={"M50,1 L100,99 L1,99 Z"}
        imageElement={
          <HoverComponent
            contentWithoutHover={
              <div className={styles.previewContainer1}>
                <img
                  src={uavs_image_2}
                  alt="Project-Preview"
                  className={styles.previewContent1_noHover}
                />
              </div>
            }
            contentWithHover={
              <CheckDetailsComponentTransformation
                content={
                  <div className={styles.previewContainer1}>
                    <img
                      src={uavs_image_2}
                      alt="Project-Preview"
                      className={styles.previewContent1}
                      onClick={() => _handlerDefault(0)}
                    />
                  </div>
                }
                mode={0}
              />
            }
          />
        }
        strokeWidth={0.4}
        clipPathId={"triangleContainer1"}
      />
    </div>,
    <div className={styles.triangleContainer2}>
      <CustomShape
        widthPercent={100}
        heightPercent={100}
        path={"M1,1 L100,1 L50,100 Z"}
        imageElement={
          <HoverComponent
            contentWithoutHover={
              <div className={styles.previewContainer2}>
                <img
                  src={uavs_image_1}
                  alt="Project-Preview"
                  className={styles.previewContent2_noHover}
                />
              </div>
            }
            contentWithHover={
              <CheckDetailsComponentTransformation
                content={
                  <div className={styles.previewContainer2}>
                    <img
                      src={uavs_image_1}
                      alt="Project-Preview"
                      className={styles.previewContent2}
                      onClick={() => _handlerDefault(0)}
                    />
                  </div>
                }
                mode={0}
              />
            }
          />
        }
        strokeWidth={0.4}
        clipPathId={"triangleContainer2"}
      />
    </div>,
    <div className={styles.triangleContainer3}>
      <CustomShape
        widthPercent={100}
        heightPercent={100}
        path={"M1,1 L100,1 L50,100 Z"}
        imageElement={
          <HoverComponent
            contentWithoutHover={
              <div className={styles.previewContainer3}>
                <img
                  src={puzzleImg}
                  alt="Project-Preview"
                  className={styles.previewContent3_noHover}
                />
              </div>
            }
            contentWithHover={
              <CheckDetailsComponentTransformation
                content={
                  <div className={styles.previewContainer3}>
                    <img
                      src={puzzleImg}
                      alt="Project-Preview"
                      className={styles.previewContent3}
                      onClick={() => _handlerDefault(0)}
                    />
                  </div>
                }
                mode={0}
              />
            }
          />
        }
        strokeWidth={0.4}
        clipPathId={"triangleContainer3"}
      />
    </div>,
  ];

  return (
    <div className={styles.container}>
      <div className={styles.titleAndDescriptionContainer}>
        <div className={styles.titleContainer}>
          <div className={styles.title}>Projects</div>
        </div>
        <div className={styles.descriptionContainer}>
          <div className={styles.description}>
            On this page, you can find detailed information about my projects.
            This includes an overview of the work I've done, the technologies
            I've used, and the challenges I've overcome. You'll also find
            descriptions of the goals and outcomes of each project, along with
            any demos, examples and analytics that illustrate the functionality
            and effectiveness of the solutions I've developed. Additionally, I
            have included a section on future goals where I outline upcoming
            projects and areas of interest. I am open to any suggestions and
            welcome collaboration opportunities to further enhance my work.
          </div>
        </div>
      </div>
      {
        <div className={styles.spawnContainer}>
          <SpawnListOfItemsTimeSequentially
            items={TrianglesContainers}
            setMode={null} // Change if want to know the current item that is previewed
            interval={9 * 1000}
            delay={1 * 1000}
          />
        </div>
      }
    </div>
  );
};

export default ProjectsPagePOne_extraSmall;
