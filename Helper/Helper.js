import Configs from "../Configss/Configs";
import * as mime from "react-native-mime-types";

export async function sendPostData(endpoint, formData) {
  const url = `${Configs.API_BASE_URL_V1}/${endpoint}`;
  let response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    body: formData,
  });
  let data = await response.json();
  return data;
}

export const getdata = async (endpoint) => {
  const url = `${Configs.API_BASE_URL_V1}${endpoint}`;
  console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", url);
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    // console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>response", response);
    return data;
  } catch (error) {
    console.error("Error fetching data in helper:", error);
    return null;
  }
};

export const getrequestwithtoken = async (endpoint, token) => {
  const url = `${Configs.API_BASE_URL_V1}${endpoint}`;
  // console.log("6666", url, token);
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log("554545", response);
    // if (!response.ok) {
    //   throw new Error("Failed to fetch data");
    // }
    const data = await response.json();
    // console.log("220202", data);

    return data; // Return the data here
  } catch (error) {
    console.error("Error fetching dataa:", error);
    return null;
  }
};

export const getRequestWithParamsTokens = async (endpoint, token, params) => {
  const url = new URL(`${Configs.API_BASE_URL_V1}${endpoint}`);

  // Add query parameters to the URL if params are provided
  if (params) {
    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, params[key])
    );
  }

  console.log("6666", url.toString(), token);

  try {
    const response = await fetch(url.toString(), {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("554545", response);

    // if (!response.ok) {
    //   throw new Error("Failed to fetch data");
    // }

    const data = await response.json();
    console.log("220202", data);

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export const postDataWithFormData = async (endpoint, formData) => {
  const url = `${Configs.API_BASE_URL_V1}/${endpoint}`;
  try {
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });
    if (!response.ok) {
      throw new Error("Failed to post data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error posting data:", error);
    return null;
  }
};

export const postDataWithFormDataWithBaseUrl = async (baseurl, formData) => {
  console.log("::::::::::::::::::::::::", baseurl);
  console.log("::::::::::::::::::::::::", formData);
  // const url = `${Configs.API_BASE_URL_V1}/${endpoint}`;
  try {
    const response = await fetch(baseurl, {
      method: "POST",
      body: formData,
    });
    // if (!response.ok) {
    //   throw new Error("Failed to post data");
    // }
    const data = await response.json();
    console.log(data, "IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII");
    return data;
  } catch (error) {
    console.error("Error posting dataa:", error);
    return null;
  }
};

export const GetfetchDataWithParams = async (endpoint, params) => {
  // Construct query string from params object
  const queryString = Object.keys(params)
    .map(
      (key) => encodeURIComponent(key) + "=" + encodeURIComponent(params[key])
    )
    .join("&");

  // Construct full URL with endpoint and query string
  const url = `${Configs.API_BASE_URL_V1}/${endpoint}?${queryString}`;

  try {
    // Fetch data using GET method
    const response = await fetch(url, {
      method: "GET",
    });

    // if (!response.ok) {
    //   throw new Error("Failed to fetch data");
    // }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export const postDataWithFormDataWithToken = async (
  endpoint,
  formData,
  token
) => {
  const url = `${Configs.API_BASE_URL_V1}/${endpoint}`;
  try {
    const response = await fetch(url, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // if (!response.ok) {
    //   throw new Error("Failed to post data");
    // }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error posting data:", error);
    return null;
  }
};

export const objectToFormData = (obj) => {
  const formData = new FormData();
  Object.keys(obj).forEach((key) => {
    formData.append(key, obj[key]);
  });
  return formData;
};

// export const objectToFormDataMultipleObject = (obj, formData = new FormData(), parentKey = '') => {
//   if (obj && typeof obj === 'object' && !(obj instanceof Date) && !(obj instanceof File)) {
//     Object.keys(obj).forEach(key => {
//       const fullKey = parentKey ? `${parentKey}[${key}]` : key;
//       objectToFormData(obj[key], formData, fullKey);
//     });
//   } else {
//     formData.append(parentKey, obj);
//   }
//   return formData;
// };

// export const objectToFormDatawithnestedObject = (obj, formData = new FormData(), parentKey = '') => {
//   if (obj && typeof obj === 'object' && !(obj instanceof Date) && !(obj instanceof File)) {
//     Object.keys(obj).forEach(key => {
//       const value = obj[key];
//       const fullKey = parentKey ? `${parentKey}[${key}]` : key;

//       if (Array.isArray(value)) {
//         value.forEach((arrayValue, index) => {
//           const arrayKey = `${fullKey}[${index}]`;
//           objectToFormData(arrayValue, formData, arrayKey);
//         });
//       } else if (typeof value === 'object') {
//         objectToFormData(value, formData, fullKey);
//       } else {
//         formData.append(fullKey, value);
//       }
//     });
//   } else {
//     formData.append(parentKey, obj);
//   }
//   return formData;
// };

export const objectToFormDatawithnestedObject = (obj) => {
  const formData = new FormData();

  Object.keys(obj).forEach((key) => {
    let value = obj[key];

    if (key === "enquiry_details" || key === "documents") {
      value = JSON.stringify(value);
    }

    formData.append(key, value);
  });

  return formData;
};

export const getFileData = (obj = {}) => {
  let uri = obj?.assets ? obj?.assets[0]?.uri : obj?.uri;

  let arr = uri.split("/");
  let fileName = arr[arr.length - 1];

  return {
    uri: uri,
    name: fileName,
    type: mime.lookup(fileName),
  };
};
