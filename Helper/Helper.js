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
  const url = `${Configs.API_BASE_URL_V1}/${endpoint}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};


export const getrequestwithtoken = async (endpoint, token) => {
  const url = `${Configs.API_BASE_URL_V1}/${endpoint}`;
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    console.log(data);
    return data; // Return the data here
  } catch (error) {
    console.error('Error fetching dataa:', error);
    return null;
  }
};



// export async function authSendPostData(endpoint, obj) {
//   const token = await readData("access_token");
//   const url = `${Configs.API_BASE_URL_V1}/${endpoint}`;
//   let response = await fetch(url, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//     body: getJson(obj),
//   });
//   // console.log(await response.text());
//   // return;
//   let data = await response.json();
//   return data;
// }

// export async function sendGetRequest(endpoint) {
//   const token = await readData("access_token");
//   console.log(token, "<===========TOKEN");
//   const url = `${Configs.API_BASE_URL_V1}/${endpoint}`;
//   let response = await fetch(url, {
//     method: "GET",
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   // console.log(await response.json());
//   // return;
//   let data = await response.json();
//   return data;
// }

export const postDataWithFormData = async (endpoint, formData) => {
  const url = `${Configs.API_BASE_URL_V1}/${endpoint}`;
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: formData,

    });
    if (!response.ok) {
      throw new Error('Failed to post data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error posting data:', error);
    return null;
  }
};


export const postDataWithFormDataWithToken = async (endpoint, formData ,token) => {
  const url = `${Configs.API_BASE_URL_V1}/${endpoint}`;
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: formData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error('Failed to post data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error posting data:', error);
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