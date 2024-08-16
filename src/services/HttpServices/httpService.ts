import { ExtractConnectionStringValue, GetEnvironmentAppSettings } from "../GeneralPurpose.Service";
import axios from 'axios';

// [Interfaces]
interface MakeApiCallRequest {
  endpoint: string;
  baseUrl?: string;
  method?: string;
  body?: any;
  token?: string;
}

// [PUBLIC METHODS]
export const MakeApiCall = async (request: MakeApiCallRequest) => {
    try {
      if (!request) return null;
  
      const envSettings = GetEnvironmentAppSettings();
      if (!envSettings) {
        console.error(`Error loading environment settings.`);
        return null;
      }
  
      const url: string | undefined = (await ExtractConnectionStringValue(request?.baseUrl))?.BaseUrl;
      if (!url || !request?.endpoint || request?.endpoint === '') {
        console.error(`Endpoint not found: \nUrl: ${url} \nEndpoint: ${request?.endpoint}`);
        return null;
      }
  
      const config = {
        method: request?.method ?? 'POST',
        url: url + request?.endpoint,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': request?.token ? `Bearer ${request.token}` : ''
        },
        data: request?.body ? JSON.stringify(request?.body) : undefined,
      };

      const response = await axios(config);
  
      if (response.status < 200 || response.status >= 300) {
        console.error(`Error making API call to ${url}${request?.endpoint}`);
        return null;
      }
  
      return response.data;
    } catch (ex) {
      console.error(`Error making API call to ${request?.endpoint}: \n----------------------------------------\n`, ex);
  
      if (axios.isAxiosError(ex)) {
        console.error('Axios error message:', ex.message);
        if (ex.response) {
          console.error('Response data:', ex.response.data);
          console.error('Response status:', ex.response.status);
          console.error('Response headers:', ex.response.headers);
        } else if (ex.request) {
          console.error('Request was made but no response was received:', ex.request);
        } else {
          console.error('Error setting up the request:', ex.message);
        }
      } else {
        console.error('Non-Axios error:', ex);
      }
  
      return null;
    }
  };
  