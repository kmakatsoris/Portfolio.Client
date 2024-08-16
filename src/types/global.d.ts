declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.png' {
  const value: any;
  export default value;
}

declare module '*.json' {
  const value: any;
  export default value;
}

declare type PageThemesType = {
  comment: string;
  backgroundColor?: string;
  backgroundImage?: string;
  backgroundSize?: string;
  backgroundImage?: string;
};

declare type EnvSettings = {
  pages: { [key: string]: string };
  // Add other properties as needed based on your actual EnvSettings structure
};

declare type DictionaryType = {
  [key: string]: string;
};

declare type PositionValues = {
  [key: number]: { x: number; y: number };
}

declare module NodeJS {
  interface Require {
    context(
      directory: string,
      useSubdirectories?: boolean,
      regExp?: RegExp
    ): {
      (key: string): any;
      keys(): string[];
    };
  }
}

declare type InformationModulesBannerContent = {
  id: string;
  mainContent: string;
  sideContent: string;
  imageContent: string;
  backgroundImage: string;
  metaData: InformationModulesBannerContentMetaData;
}

declare type InformationModulesBannerContentMetaData = {
  modifiedDate: string;
  originFrom: string;
  author: string;
  category: string;
  language: string;
  keywords: string;
  version: string;
  license: string;
  audience: string;
  location: string;
  format: string;
}

declare type ShowUpContentDataType = {
  id: string;
  length: number;
  src: string;
  intervalTime: number;
}

declare type ValidFlexDirections = 'row' | 'row-reverse' | 'column' | 'column-reverse';

declare type RefDictionary = {
  [key: string]: React.RefObject<HTMLDivElement>[];
}

declare type GradeType = {
  score: string;
  title: string;
  description: string;
  content: JSX.Element;
}

declare type SectionsDefaultInputItem = {
  headerTitleElement: JSX.Element;
  delegateFunc: () => void;
  content: JSX.Element;
}

declare type ValidationFunctionType = ((value: string) => string) | ((value: string, errorMsg: string) => string);

declare type GlassModalDataContract = {
  content: JSX.Element,
  subOverlayContent: JSX.Element,
  isOpen: boolean,
  contentW: string,
  contentH: string,
  theme: CSSProperties
}

declare type MetaDataContents = {
  [key: string]: MetaDataContent;
};

declare type MetaDataContent = {
  title: string;
  text: string;
  contentTexts: string[];
};

declare type LabelSkill = {
  id: number;
  title: string;
  description: string;
  content: JSX.Element;
};

declare type ConnectionStringValues = {
  BaseUrl: string;
  TimeOut: number;
  MaxPoolSize: number;
  MinPoolSize: number;  
}

declare type Endpoints = {  
  Authentication: {
    Register: string;
    Login: string;
    Logout: string;
    ForgotPassword: string;
  };
  Projects: {
    GetAllProjects: string;
    GetProjectsByCategroy: string;
    GetprojectsByTags: string;
    GetAllProjectsByTagsAsync: string;
    InsertProject: string;
    UpdateProject: string;
    UpdateProjectComment: string;
    DeleteProject: string;
    DeleteProjectComment: string;
  };
  Resources: {
    GetAllResourcesByTagsAsync: string;
    List: string;
    Find: string;
    Insert: string;
    Edit: string;
    Delete: string;
  };
  Reviews: {
    List: string;
    Find: string;
    Insert: string;
    Edit: string;
    Delete: string;
  };
  Skills: {
    GetAllSkills: string;
    GetSkillsByCategory: string;
    GetSkillsByTags: string;
    GetAllSkillsByTagsAsync: string;
    GetSkillsCommentedByEmail: string;
    InsertSkill: string;
    UpdateSkill: string;
    UpdateSkillComment: string;
    DeleteSkill: string;
    DeleteSkillComment: string;
  };
  CMS_Strapi: {
    List: string;
    Find: string;
  }
}

// DTO Request:
// ---------------------------------------------
declare type CMS_Strapi_PreviewDataDTO = {
  url: string,
  caption: string,
  width: string,
  height: string
}

declare type ExtensiveDescriptionDTO = {
  text: string;
  color: string;
  location: string;
}

// Endpoints Request:
// ---------------------------------------------
declare type CMS_Strapi_Basic_Req = {
  title: string;
  renderPath: string;
  enSync: boolean;
}

// Endpoints Response:
// ---------------------------------------------
declare type CMS_Strapi_Basic_Res = {
  title: string;
  briefDescription: string;
  extensiveDescriptionDTO: ExtensiveDescriptionDTO[];
  extensiveDescription: string;  
  metaDataID: string;
  metaData: string
  renderPath: string;
  storagePath: string;
  previewDataDTO: CMS_Strapi_PreviewDataDTO;
  previewData: string;  
  dimension: string;
  tags: string;
  typeEnum: string;
  type: string;
  createdAt: string;
  updatedAt: string;
}

declare type MetaData_CMS_Strapi_Res = {
  BriefDescription: string | null;
  ExtensiveDescription: string | null;
  TAG: string;
  Profile: { Title: string; Text: string } | null;
  WORK_EXPERIENCE: Array<{ Title: string; Text: string }>;
  EDUCATION: Array<{ Title: string; Text: string }>;
  PROGRAMMING_SKILLS: Array<{ Title: string; Text: string }>;
  VOLUNTEERING: Array<{ Title: string }>;
  CONTACT: Array<{ Title: string }>;
  LANGUAGES: Array<{ Title: string }>;
  // "WORK EXPERIENCE": Array<{ Title: string; Text: string }>;
  // "PROGRAMMING SKILLS": Array<{ Title: string; Text: string }>;
}
