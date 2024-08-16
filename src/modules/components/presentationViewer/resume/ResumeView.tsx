import React, { useState, useEffect, useContext } from "react";
import styles from "./ResumeView.module.css";
import axios from "axios";
import {
  RenderContact,
  RenderEducation,
  RenderLanguages,
  RenderProfile,
  RenderProgrammingSkills,
  RenderVolunteering,
  RenderWorkExperience,
} from "./ResumeHelper";
import { UserDataContext } from "../../../../services/DataProviders/UserDataProvider";
import { LoadAppsettingEndpoints } from "../../../../services/GeneralPurpose.Service";
import { MakeApiCall } from "../../../../services/HttpServices/httpService";
import { useNavigate } from "react-router-dom";

const ResumeView = () => {
  const { token } = useContext(UserDataContext);
  const navigate = useNavigate();
  const [resumeData, setResumeData] = useState<MetaData_CMS_Strapi_Res | null>(
    null
  );
  const [endpointsAppsettings, setEndpointsAppsettings] =
    useState<Endpoints | null>(null);

  useEffect(() => {
    navigate("/simplePortfolioPreview");
  }, []);

  useEffect(() => {
    const _getEndpoints: () => Promise<Endpoints> =
      async (): Promise<Endpoints> => {
        if (!endpointsAppsettings) {
          let endpoints = await LoadAppsettingEndpoints();
          setEndpointsAppsettings(endpoints);
          return endpoints;
        }
        return endpointsAppsettings;
      };

    const fetchTexts = async () => {
      try {
        const endpoints: Endpoints = await _getEndpoints();
        const txts: CMS_Strapi_Basic_Res = await MakeApiCall({
          endpoint: endpoints.CMS_Strapi.Find,
          method: "POST",
          token: token,
          body: {
            title: "4",
            renderPath: "HomePage",
            enSync: true,
          },
        });
        let metadata: MetaData_CMS_Strapi_Res | null =
          JSON.parse(txts?.metaData) ?? null;
        setResumeData(metadata);
      } catch (error) {
        console.error("Error fetching introduction texts:", error);
      }
    };

    fetchTexts();
  }, [token]);

  if (!resumeData) {
    return <div>Loading...</div>;
  }

  console.log(resumeData);
  return (
    <div className={styles.container}>
      <div className={styles.leftBackgroundContainer}></div>
      <div className={styles.leftContainer}>
        <div className={styles.lastNameContainer}>MAKATSORIS</div>
        <div className={styles.firstNameContainer}>KONSTANTINOS</div>
        <div className={styles.labelContainer}>Software Engineer</div>
        <div className={styles.contactAndLanguagesContainer}>
          <RenderContact contact={resumeData.CONTACT} />
          <RenderLanguages languages={resumeData.LANGUAGES} />
        </div>
      </div>
      <div className={styles.rightContainer}>
        <RenderProfile
          profile={resumeData?.Profile ?? { Title: "", Text: "" }}
        />
        <RenderWorkExperience experiences={resumeData?.WORK_EXPERIENCE} />
        <div className={styles.educationContainer}>
          <RenderEducation educations={resumeData.EDUCATION} />
        </div>
        <RenderProgrammingSkills skills={resumeData.PROGRAMMING_SKILLS} />
        <RenderVolunteering volunteering={resumeData.VOLUNTEERING} />
      </div>
    </div>
  );
};

export default ResumeView;
