import Countries from "../Countries.json";
import pageThemes from "../PageThemes.json";

export const GetNextPageTheme = (currentPageIdx: number): string => {
  const themeKeys: string[] = Object.keys(pageThemes);
  const nextIdx: number = (currentPageIdx + 1) % themeKeys.length;
  return themeKeys[nextIdx] ?? "";
}

const EXTRA_SMALL_RESOLUTIONS = [
  { w: 360, h: 640 }, // Mobile Phones: Portrait
  { w: 375, h: 667 }, // Mobile Phones: Portrait
  { w: 414, h: 896 }, // Mobile Phones: Portrait
];

const SMALL_RESOLUTIONS = [
  { w: 768, h: 1024 }, // Tablets: Portrait
  { w: 800, h: 1280 }, // Tablets: Portrait
  { w: 820, h: 1180 }, // Tablets: Portrait Add more that cause problem with extraLarge Implementation.... [Temporary Solution]
];

const MEDIUM_RESOLUTIONS = [
  { w: 1366, h: 768 },  // Laptops: Portrait
  { w: 1440, h: 900 },  // Laptops: Portrait
  { w: 1920, h: 1080 }, // Laptops: Portrait
  { w: 2560, h: 1440 }, // Laptops: Portrait
];

const LARGE_RESOLUTIONS: {w: number, h: number}[] = [];

const EXTRA_LARGE_RESOLUTIONS = [
  { w: 1920, h: 1080 }, // Large Screens: Portrait
  { w: 2560, h: 1440 }, // Large Screens: Portrait
  { w: 3840, h: 2160 }, // Large Screens: Portrait
];

export const LoadResolutions = (resMod: number): {w: number, h: number}[] => {
  if (resMod === 0) return EXTRA_SMALL_RESOLUTIONS;
  else if (resMod === 1) return SMALL_RESOLUTIONS;
  else if (resMod === 2) return EXTRA_SMALL_RESOLUTIONS;
  else if (resMod === 3) return MEDIUM_RESOLUTIONS;
  else if (resMod === 4) return LARGE_RESOLUTIONS;
  return EXTRA_LARGE_RESOLUTIONS;
}

export const isPortraitView = (resolutions: {w: number, h: number}[], windowWidth: number, windowHeight: number): boolean => {
  if (resolutions.some((r) => windowWidth <= r.w && windowHeight <= r.h)) return true;
  return false;
}

export const calculateTheResponsivenessMode = (windowWidth: number, windowHeight: number) => {  
  const checkResolution = (resolutions: {w: number, h: number}[]) => {    
    let v0: boolean = isPortraitView(resolutions, windowWidth, windowHeight);
    let v1: boolean = isPortraitView(resolutions, windowHeight, windowWidth);
    return v0 || v1;
  };

  if (checkResolution(EXTRA_SMALL_RESOLUTIONS)) {
    return 0; // Extra Small
  } else if (checkResolution(SMALL_RESOLUTIONS)) {
    return 1; // Small
  } else if (checkResolution(MEDIUM_RESOLUTIONS)) {
    return 2; // Medium
  } else if (checkResolution(LARGE_RESOLUTIONS)) {
    return 3; // Large
  } else if (checkResolution(EXTRA_LARGE_RESOLUTIONS)) {
    return 4; // Extra Large
  } else {
    return 4; // Default case or undefined resolution
  }
};

// PDF:
export const Base64ToBlob = (base64: string, mimeType: string) => {
  const byteCharacters = atob(base64);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += 512) {
    const slice = byteCharacters.slice(offset, offset + 512);
    const byteNumbers = new Array(slice.length);

    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  return new Blob(byteArrays, { type: mimeType });
};


// AppSettings,
const _validatePages = (pages: any): boolean => {
  const requiredPages = ["Home", "Bio", "Skills & Achievements", "Projects", "APIs", "Contact & Collaborations"];
  return requiredPages.every(page => pages.hasOwnProperty(page));
};

const _validateConnectionStrings = (connectionStrings: any): boolean => {
  return connectionStrings.hasOwnProperty("DefaultConnection") === true && connectionStrings.hasOwnProperty("CMS_Strapi_Connection") === true;
};

const _validateEndpoints = (endpoints: any): boolean => {
  const requiredEndpoints = ["Authentication", "Projects", "Resources", "Reviews", "Skills", "CMS_Strapi"];
  const validateEndpointChildren = (endpoint: any, children: any) => {
      return children.every((child: any) => endpoint.hasOwnProperty(child));
  };
  
  const authenticationChildren = ["Register", "Login", "Logout", "ForgotPassword"];
  const projectsChildren = ["GetAllProjects", "GetProjectsByCategroy", "GetprojectsByTags", "GetAllProjectsByTagsAsync", "InsertProject", "UpdateProject", "UpdateProjectComment", "DeleteProject", "DeleteProjectComment"];
  const resourcesChildren = ["GetAllResourcesByTagsAsync", "List", "Find", "Insert", "Edit", "Delete"];
  const reviewsChildren = ["List", "Find", "Insert", "Edit", "Delete"];
  const skillsChildren = ["GetAllSkills", "GetSkillsByCategory", "GetSkillsByTags", "GetAllSkillsByTagsAsync", "GetSkillsCommentedByEmail", "InsertSkill", "UpdateSkill", "UpdateSkillComment", "DeleteSkill", "DeleteSkillComment"];
  const CMS_Strapi_Children = ["List", "Find"];

  const endpointsValidation: any = {
      Authentication: authenticationChildren,
      Projects: projectsChildren,
      Resources: resourcesChildren,
      Reviews: reviewsChildren,
      Skills: skillsChildren,
      CMS_Strapi: CMS_Strapi_Children,
  };

  return requiredEndpoints.every(endpoint => {
      return endpoints.hasOwnProperty(endpoint) && validateEndpointChildren(endpoints[endpoint], endpointsValidation[endpoint]);
  });
};

const _finalAppSettingsValidationPreHomePageImagesPath = (envSettings: any) => envSettings && envSettings.hasOwnProperty("PreHomePageImagesPath") && typeof envSettings.PreHomePageImagesPath === "string";
const _finalAppSettingsPages = (envSettings: any) => envSettings && envSettings.hasOwnProperty("pages") && typeof envSettings.pages === "object" && _validatePages(envSettings.pages);
const _finalAppSettingsConnectionStrings = (envSettings: any) => envSettings && envSettings.hasOwnProperty("ConnectionStrings") && typeof envSettings.ConnectionStrings === "object" && _validateConnectionStrings(envSettings.ConnectionStrings);
const _finalAppSettingsEndpoints = (envSettings: any) => envSettings && envSettings.hasOwnProperty("Endpoints") && typeof envSettings.Endpoints === "object" && _validateEndpoints(envSettings.Endpoints);

const _appSettingsValidation = (envSettings: any) => {    
  return envSettings !== null  && _finalAppSettingsValidationPreHomePageImagesPath(envSettings) && _finalAppSettingsPages(envSettings) && _finalAppSettingsEndpoints(envSettings);
};
const _appEnvironmentSettingsValidation = (envSettings: any) => {    
  return envSettings !== null  && _finalAppSettingsConnectionStrings(envSettings);
};

export const GetEnvironmentAppSettings = (isEnvironmentAppsettings?: boolean) => {
  let validations = true;

  try {
      const appSettings = require("../appSettings.json");
      if (appSettings === null || !appSettings.hasOwnProperty("environment") || !(typeof(appSettings?.environment)=== "string")) validations = false;
      if (!_appSettingsValidation(appSettings)) validations = false;
      if (isEnvironmentAppsettings !== true) return appSettings;
      const envSettings = require(`../appSettings.${appSettings.environment}.json`);
      if (!_appEnvironmentSettingsValidation(envSettings)) validations = false;
      if (validations=== false)
      {
          console.error(`Error loading modules with Exception: Validations Failed.`);            
          return null;
      }
      return envSettings;
  } catch (error) {
      console.error(`Error loading modules with Exception:`, error);
      return null;
  }
}

export const LoadAppsettingEndpoints = async (): Promise<Endpoints> => {
  let loadedEndpoints: Endpoints;

  const envSettings = GetEnvironmentAppSettings();
  if (!_finalAppSettingsEndpoints(envSettings)) {
    console.error(`Error loading modules. Environment settings not found.`);
    loadedEndpoints = {} as Endpoints;
  } else {
    loadedEndpoints = envSettings.Endpoints;
  }

  return loadedEndpoints;
};

export const ExtractConnectionStringValue = async (key: string = 'DefaultConnection'): Promise<ConnectionStringValues | null> => {
  if (key === "") return null;
  let conStr: { [key: string] : string} | null = await LoadAppsettingConnectionStrings();
  if (!conStr || !conStr?.hasOwnProperty(key) || !(typeof conStr[key] === "string"))
  {
      console.error(`Error loading connection strings. @MakeApiCall`);
      return null;
  }
  let result: ConnectionStringValues = {
    BaseUrl: "",
    TimeOut: 0,
    MaxPoolSize: 0,
    MinPoolSize: 0    
  };
  let data: string[] = conStr[key]?.split(';');
  if (data?.length >= 5)
  {
    result.BaseUrl = data[0];
    result.TimeOut = parseInt(data[1]);
    result.MaxPoolSize = parseInt(data[2]);
    result.MinPoolSize = parseInt(data[3]);    
  }
  return result;
}

export const LoadAppsettingConnectionStrings = async (): Promise<{ [key: string]: string } | null> => {
  let loadedConnectionStrings: { [key: string]: string } | null = {};        

  let envSettings = GetEnvironmentAppSettings(true);
  if (!_finalAppSettingsConnectionStrings(envSettings)) 
  {
      console.error(`Error loading modules. Environment settings not found.`);
      loadedConnectionStrings = null;            
  }
  else
  {
      for (const k in envSettings.ConnectionStrings) {
          const v: string = envSettings.ConnectionStrings[k];
          loadedConnectionStrings[k] = v;
      }
  }   
  return loadedConnectionStrings;  
};

export const LoadAppsettingPages = async (setPages: (loadedPages: { [key: string]: string }) => void) => {
  let loadedPages: { [key: string]: string } = {};        

  let envSettings = GetEnvironmentAppSettings();
  if (!_finalAppSettingsPages(envSettings)) 
  {
      console.error(`Error loading modules. Environment settings not found.`);
      loadedPages = {};            
  }
  else
  {
      for (const k in envSettings.pages) {
          const v: string = envSettings.pages[k];
          loadedPages[k] = v;
      }
  }    
  setPages(loadedPages);
};


export const LoadAppsettingPreHomePageImagesPath = () => {
  let loadedImages: string = "";        

  let envSettings = GetEnvironmentAppSettings();
  if (!_finalAppSettingsValidationPreHomePageImagesPath(envSettings)) 
  {
      console.error(`Error loading modules. Environment settings not found.`);
      return loadedImages;        
  }    
  return envSettings.PreHomePageImagesPath;
}

// General functions
// --------------------------------------

export const loadValueFromDictionary: (structure: DictionaryType, key: string) => string | null = (structure: DictionaryType, key: string): string | null => {
    if (key && structure.hasOwnProperty(key)) return structure[key];
    return null; 
}

export const isDictionaryActive: (structure: DictionaryType, key: string | null) => boolean = (structure: DictionaryType, key: string | null): boolean => {
    return structure !== null && key !== null && structure.hasOwnProperty(key);
}

export const TryGetFromDictionary: (structure: DictionaryType | null, key: string | null) => string | null = (structure: DictionaryType | null, key: string | null): string | null => {
  return structure !== null && key !== null && isDictionaryActive(structure, key) === true ? structure[key] : null;
}

export const tryGetFromRefDictionary = (structure: RefDictionary, key: string): React.RefObject<HTMLDivElement>[] => {
    return structure !== null && key !== "" && structure.hasOwnProperty(key) ? structure[key] : [];
}

export const TryGetFromArray = <T>(array: T[] | null | undefined, idx: number): T | null => {
  return array && array?.length > idx ? array[idx] : null;
}

export const replaceFirstCharWithLowerCase = (str: string) => {        
    const firstCharLowerCase = str.charAt(0).toLowerCase();        
    return firstCharLowerCase + str.slice(1);
}

// Validation functions
// --------------------------------------
export const validateNames = (value: string, errorMsg: string): string => {
    const regex = /^[a-zA-Z\s]+$/;
    if (!regex.test(value.trim())) {
      return errorMsg;
    }
    return "";
  };

export const validateBirthDate = (value: string): string => {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    if (!regex.test(value.trim())) {
        return "Your Birth Date is Invalid. [YYYY-MM-DD]";
    }
    return "";
};

export const validateCountry = (value: string): string => {    
    const country = value.trim().toLowerCase();
    const included = Countries.some((countryName: string) => countryName.toLowerCase() === country);
    return included ? '' : 'Your country is Invalid. Please check out https://www.worldometers.info/';
};


export const validateText = (value: string): string => {    
    if (!value.trim()) {
      return "Your Text is Invalid. [An example of text....]";
    }
    return "";
  };

export const validateEmail = (value: string): string => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regex.test(value.trim())) {
        return "Your Email Address is Invalid. [example@example.com]";
    }
    return "";
};

export const validatePassword = (value: string): string => {
    if (value.length < 8) {
      return "Password must be at least 8 characters long";
    }
    if (!/\d/.test(value)) {
      return "Password must contain at least one digit";
    }
    if (!/[a-z]/.test(value)) {
      return "Password must contain at least one lowercase letter";
    }
    if (!/[A-Z]/.test(value)) {
      return "Password must contain at least one uppercase letter";
    }
    if (!/[!@#$%^&*()_+[\]{};':"\\|,.<>/?~-]/.test(value)) {
      return "Password must contain at least one special character";
    }
    return "";
  };

export const validateLinkedIn = (value: string): string => {
    const regex = /^(https?:\/\/)?(www\.)?linkedin\.com\/(in\/)?[a-zA-Z0-9_-]+\/?$/;
    if (!regex.test(value.trim())) {
        return "Please enter a valid LinkedIn profile name or URL";
    }
    return "";
};

export const validateURL = (value: string): string => {
    const regex = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+\/?)?/;
    if (!regex.test(value.trim())) {
      return "Please enter a valid URL";
    }
    return "";
  };
