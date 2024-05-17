import Configs from "../Configss/Configs";

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
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>response", response);
    return data;
  } catch (error) {
    console.error("Error fetching data in helper:", error);
    return null;
  }
};

export const getrequestwithtoken = async (endpoint, token) => {
  const url = `${Configs.API_BASE_URL_V1}${endpoint}`;
  console.log("6666",url,token)
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("554545",response)
    // if (!response.ok) {
    //   throw new Error("Failed to fetch data");
    // }
    const data = await response.json();
    console.log("220202",data);
    
    return data; // Return the data here
  } catch (error) {
    console.error("Error fetching dataa:", error);
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

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

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

export const objectToFormData = (obj) => {
  const formData = new FormData();
  Object.keys(obj).forEach((key) => {
    formData.append(key, obj[key]);
  });
  return formData;
};
