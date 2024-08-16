import React from "react";
import styles from "./ResumeHelper.module.css";
import { TryGetFromArray } from "../../../../services/GeneralPurpose.Service";

// Utility function to parse text based on the delimiter ";"
const parseText = (t: string): string[] => {
  return t?.split(";") ?? [];
};

// RenderProfile Component
export const RenderProfile: React.FC<{
  profile: { Title: string; Text: string };
  enSecTitle?: boolean;
  fontSizes?: string[];
}> = ({ profile, enSecTitle = true, fontSizes = [] }) => {
  let title: string[] = parseText(profile.Title);
  let text: string[] = parseText(profile.Text);
  return (
    <div className={styles.profileContainer}>
      {enSecTitle && (
        <div
          className={styles.sectionContainer}
          style={{ fontSize: TryGetFromArray(fontSizes, 0) ?? undefined }}
        >
          PROFILE
        </div>
      )}
      <div
        className={styles.profileTitle}
        style={{ fontSize: TryGetFromArray(fontSizes, 1) ?? undefined }}
      >
        {TryGetFromArray(title, 0)}
      </div>
      <div
        className={styles.profileText}
        style={{ fontSize: TryGetFromArray(fontSizes, 2) ?? undefined }}
      >
        {TryGetFromArray(text, 0)}
      </div>
      <div
        className={styles.profileText}
        style={{ fontSize: TryGetFromArray(fontSizes, 3) ?? undefined }}
      >
        {TryGetFromArray(text, 1)}
      </div>
      <div
        className={styles.profileText}
        style={{ fontSize: TryGetFromArray(fontSizes, 4) ?? undefined }}
      >
        {TryGetFromArray(text, 2)}
      </div>
    </div>
  );
};

// RenderWorkExperience Component
export const RenderWorkExperience: React.FC<{
  experiences: Array<{ Title: string; Text: string }>;
  enSecTitle?: boolean;
}> = ({ experiences, enSecTitle = true }) => {
  return (
    <div className={styles.experiencesContainer}>
      {enSecTitle && (
        <div className={styles.sectionContainer}>WORK EXPERIENCE</div>
      )}
      {experiences?.map((e, i) => {
        let title: string[] = parseText(e.Title);
        let text: string[] = parseText(e.Text);

        return (
          <div key={i} className={styles.experienceContainer}>
            <div className={styles.experienceTitle0}>
              {TryGetFromArray(title, 0)}
            </div>
            <div className={styles.experienceTitle1and2}>
              <div className={styles.experienceTitle1}>
                {TryGetFromArray(title, 1)}
              </div>
              <div className={styles.experienceTitle2}>
                {TryGetFromArray(title, 2)}
              </div>
            </div>
            {text?.map((t, j) => {
              let stl = {};
              if (t === "Mainly BackEnd Developer")
                stl = { fontWeight: "bold" };
              else if (t?.includes("Technologies:"))
                stl = { fontWeight: "bold", textDecoration: "underline" };
              return (
                <li key={j} className={styles.experienceText} style={stl}>
                  {t}
                </li>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

// RenderEducation Component
export const RenderEducation: React.FC<{
  educations: Array<{ Title: string; Text: string }>;
  enSecTitle?: boolean;
}> = ({ educations, enSecTitle = true }) => {
  return (
    <div className={styles.educationsContainer}>
      {enSecTitle && <div className={styles.sectionContainer}>EDUCATION</div>}
      {educations?.map((e, i) => {
        let title: string[] = parseText(e.Title);
        let text: string[] = parseText(e.Text);

        let isTheCase: boolean =
          TryGetFromArray(title, 1) ===
          "Intermediate master in Artificial Intelligence and Machine Learning.";

        return (
          <div key={i} className={styles.educationContainer}>
            <div className={styles.educationTitle0}>
              {TryGetFromArray(title, 0)}
            </div>
            {isTheCase && (
              <div className={styles.educationTitle0}>
                {TryGetFromArray(title, 1)}
              </div>
            )}
            {isTheCase && (
              <div className={styles.educationTitle0}>
                {TryGetFromArray(title, 2)}
              </div>
            )}
            <div className={styles.educationTitle12}>
              <div className={styles.educationTitle1}>
                {TryGetFromArray(title, isTheCase ? 3 : 1)}
              </div>
              <div className={styles.educationTitle2}>
                {TryGetFromArray(title, isTheCase ? 4 : 2)}
              </div>
            </div>
            <div className={styles.educationText}>
              {TryGetFromArray(text, 0)}
            </div>
          </div>
        );
      })}
    </div>
  );
};

// RenderProgrammingSkills Component
export const RenderProgrammingSkills: React.FC<{
  skills: Array<{ Title: string; Text: string }>;
  enSecTitle?: boolean;
}> = ({ skills, enSecTitle = true }) => {
  return (
    <div className={styles.programmingSkillsContainer}>
      {enSecTitle && (
        <div className={styles.sectionContainer}>PROGRAMMING SKILLS</div>
      )}
      {skills?.map((s, index) => {
        let title: string[] = parseText(s.Title);
        let text: string[] = parseText(s.Text);
        return (
          <div key={index} className={styles.programmingSkillContainer}>
            <div className={styles.programmingSkillTitle}>{title}</div>
            <div className={styles.programmingSkillText}>{text}</div>
          </div>
        );
      })}
    </div>
  );
};

// RenderVolunteering Component
export const RenderVolunteering: React.FC<{
  volunteering: Array<{ Title: string }>;
  enSecTitle?: boolean;
}> = ({ volunteering, enSecTitle = true }) => {
  return (
    <div className={styles.volunteeringContainer}>
      {enSecTitle && (
        <div className={styles.sectionContainer}>VOLUNTEERING</div>
      )}
      {volunteering?.map((vol, index) => {
        let title: string[] = parseText(vol.Title);
        return (
          <div key={index} className={styles.volunteerContainer}>
            <div className={styles.volunteeringTitle0}>
              {TryGetFromArray(title, 0)}
            </div>
            <div className={styles.volunteeringTitle1}>
              {TryGetFromArray(title, 1)}
            </div>
          </div>
        );
      })}
    </div>
  );
};

// RenderContact Component
export const RenderContact: React.FC<{
  contact: Array<{ Title: string }>;
  enSecTitle?: boolean;
}> = ({ contact, enSecTitle = true }) => {
  return (
    <div className={styles.contactsContainer}>
      {enSecTitle && <div className={styles.sectionContainer}>CONTACT</div>}
      {contact?.map((cont, index) => {
        let title: string[] = parseText(cont.Title);
        return (
          <div key={index} className={styles.contactContainer}>
            <div className={styles.contactTitleContainer0}>
              {TryGetFromArray(title, 0)}
            </div>
            <div className={styles.contactTitleContainer1}>
              {TryGetFromArray(title, 1)}
            </div>
          </div>
        );
      })}
    </div>
  );
};

// RenderLanguages Component
export const RenderLanguages: React.FC<{
  languages: Array<{ Title: string }>;
  enSecTitle?: boolean;
}> = ({ languages, enSecTitle = true }) => {
  return (
    <div className={styles.langsContainer}>
      {enSecTitle && <div className={styles.sectionContainer}>LANGUAGES</div>}
      {languages?.map((language, index) => {
        let title: string[] = parseText(language.Title);
        return (
          <div key={index} className={styles.langContainer}>
            <div className={styles.langTitleContainer0}>
              {TryGetFromArray(title, 0)}
            </div>
            <div className={styles.langTitleContainer1}>
              {TryGetFromArray(title, 1)}
            </div>
          </div>
        );
      })}
    </div>
  );
};
