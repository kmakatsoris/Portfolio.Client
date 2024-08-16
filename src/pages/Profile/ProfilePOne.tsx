import React, { useContext, useState } from "react";
import styles from "./ProfilePOne.module.css";
import DefaultForm from "../../modules/components/inputs/forms/DefaultForm";
import {
  validateBirthDate,
  validateCountry,
  validateEmail,
  validateLinkedIn,
  validateNames,
  validatePassword,
  validateText,
} from "../../services/GeneralPurpose.Service";
import ContentViewerPatch2 from "../../modules/components/contentViewer/ContentViewerPatch2";
import MetaDataViewerScheduler from "../../modules/components/detailsViewer/MetaDataViewerScheduler";
import backgroundImg from "../../images/content/storySet3.jpg";
import { GeneralDataContext } from "../../services/DataProviders/GeneralDataProvider";
import RenderWithDelay from "../../modules/components/showupViewer/RenderWithDelay";

const REGISTER_FIELD_TITLE: { [key: string]: string } = {
  FirstName: "",
  LastName: "",
  BirthDate: "",
  BornCountry: "",
  CurrentCountry: "",
  Education: "",
  JobTitle: "",
  CompanyName: "",
  Email: "",
  Password: "",
  ConfirmPassword: "",
  LinkedIn: "",
  MoreAboutYou: "",
  HowCanIHelpYou: "",
  Interests: "",
  HowYouFoundUs: "",
};

const REGISTER_FIELD_TITLE_NAMES: { [key: string]: string } = {
  FirstName: "First Name:",
  LastName: "Last Name:",
  BirthDate: "Birth Date:",
  BornCountry: "Born Country:",
  CurrentCountry: "Living Country:",
  Education: "Education:",
  JobTitle: "Current Highest Position Held:",
  CompanyName: "Name of the Company You Work For:",
  Email: "Email:",
  Password: "Password:",
  ConfirmPassword: "Confirm Your Password:",
  LinkedIn: "LinkedIn Profile:",
  MoreAboutYou: "What about you?",
  HowCanIHelpYou: "Is there anything I can assist you with?",
  Interests:
    "I'm sure you have many interests. Would you mind sharing some with me?",
  HowYouFoundUs: "How did you come across me?",
};

const REGISTER_FIELD_VALIDATIONS: {
  [key: string]: (value: string, errorMsg: string) => string;
} = {
  FirstName: validateNames,
  LastName: validateNames,
  BirthDate: validateBirthDate,
  BornCountry: validateCountry,
  CurrentCountry: validateCountry,
  Education: validateText,
  JobTitle: validateText,
  CompanyName: validateText,
  Email: validateEmail,
  Password: validatePassword,
  ConfirmPassword: validatePassword,
  LinkedIn: validateLinkedIn,
  MoreAboutYou: validateText,
  HowCanIHelpYou: validateText,
  Interests: validateText,
  HowYouFoundUs: validateText,
};

const SIGNIN_FIELD_TITLE: { [key: string]: string } = {
  Email: "",
  Password: "",
};

const SIGNIN_FIELD_TITLE_NAMES: { [key: string]: string } = {
  Email: "Email:",
  Password: "Password:",
};

const SIGNIN_FIELD_VALIDATIONS: {
  [key: string]: (value: string, errorMsg: string) => string;
} = {
  Email: validateEmail,
  Password: validatePassword,
};

interface ProfilePOneProps { }

const ProfilePOne = (props: ProfilePOneProps) => {
  const { setMetaDataContentKey } = useContext(GeneralDataContext);
  const [isRegister, setIsRegister] = useState<boolean | null>(null);

  const isRegisterHandler = () => {
    setIsRegister((prevIsRegister: boolean | null) => !prevIsRegister);
  };

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <ContentViewerPatch2
          graphic={
            isRegister ?
              <DefaultForm
                key={`DefaultForm_${isRegister}`}
                formTitle="Register Information. Unlock exclusive benefits—register now!"
                titleMargin={"3% 0px 0px 3.3%"}
                submitMargin={"0px 0px 20px 3.3%"}
                formMargin={"2% 0px 20px 3.3%"}
                columnExpression={"100%"}
                inputW={"60%"}
                inputH={"38px"}
                fieldTitles={REGISTER_FIELD_TITLE}
                validationFunctions={REGISTER_FIELD_VALIDATIONS}
                titleNames={REGISTER_FIELD_TITLE_NAMES}
              /> :
              <DefaultForm
                key={`DefaultForm_${isRegister}`}
                formTitle="Join the Community: Sign In for Limitless Access!"
                titleMargin={"3% 0px 0px 3.3%"}
                submitMargin={"0px 0px 20px 3.3%"}
                formMargin={"2% 0px 20px 3.3%"}
                columnExpression={"100%"}
                inputW={"60%"}
                inputH={"38px"}
                fieldTitles={SIGNIN_FIELD_TITLE}
                validationFunctions={SIGNIN_FIELD_VALIDATIONS}
                titleNames={SIGNIN_FIELD_TITLE_NAMES}
                sideSubmitMessage={"Have you forgot your password?"}
              />
          }
          content={
            <MetaDataViewerScheduler
              defaultComponent={
                <div className={styles.backgroundImgContainer}>
                  <RenderWithDelay
                    key={`ProfilePOne_backgroundImgLabel1_${isRegister}`}
                    content={<div className={styles.backgroundImgLabel1} onClick={isRegisterHandler}>{isRegister ? "Sign In" : "Register"}</div>}
                    interval={isRegister !== null ? 0 : 2000} mode={2} transitionDistance={"100%"}
                  />
                  <RenderWithDelay
                    key={`ProfilePOne_backgroundImgLabel2_${isRegister}`}
                    content={<div className={styles.backgroundImgLabel2} onClick={isRegisterHandler}>{isRegister ? "Sign In" : "Register"}</div>}
                    interval={isRegister !== null ? 400 : 2400} mode={2} transitionDistance={"100%"}
                  />
                  <RenderWithDelay
                    key={`ProfilePOne_backgroundImgLabel3_${isRegister}`}
                    content={<div className={styles.backgroundImgLabel3} onClick={isRegisterHandler}>{isRegister ? "Sign In" : "Register"}</div>}
                    interval={isRegister !== null ? 800 : 2800} mode={2} transitionDistance={"100%"}
                  />
                  <RenderWithDelay
                    key={`ProfilePOne_backgroundImgLabel4_${isRegister}`}
                    content={<div className={styles.backgroundImgLabel4} onClick={isRegisterHandler}>{isRegister ? "Sign In" : "Register"}</div>}
                    interval={isRegister !== null ? 1300 : 3300} mode={2} transitionDistance={"100%"}
                  />
                  <RenderWithDelay
                    key={`ProfilePOne_backgroundImgLabel5_${isRegister}`}
                    content={<div className={styles.backgroundImgLabel5} onClick={isRegisterHandler}>{isRegister ? "Sign In" : "Register"}</div>}
                    interval={isRegister !== null ? 1600 : 3600} mode={2} transitionDistance={"100%"}
                  />
                  <img src={backgroundImg} alt="Background Content" className={styles.backgroundImg} />
                </div>
              }
              infoImgWidth={25}
              animationMode={0}
              onClickMetaDataViewerSchedulerSelectedIdHandler={() => console.log("Clikced!")}
              onClickInfoHandler={() => {
                setMetaDataContentKey("profilePage/backgroundImage");
              }}
              titleFontSize={"30px"} textFontSize={"20px"} titleContainerMarginBottom={"20px"} lineHorizontalMarginBottom={"20px"}
              leftActionWidth={"15px"} rightActionWidth={"15px"} enumerationTextFontSize={"18px"}
            />
          }
          orientation={"row"}
          animationModes={[0, 1]}
          graphicContainerInlineStyle={{ margin: "0px 4% 0px 0px" }}
        />
      </div>
    </div>
  );
};

export default ProfilePOne;