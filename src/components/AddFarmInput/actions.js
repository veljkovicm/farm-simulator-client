import { API } from 'libs';

export const submitFarm = async (name) => {

  try {
    const body = { name };

    const response = await API({
      method: 'POST',
      path: process.env.API_FARMS_PATH,
      body,
    });

    if (response.status === 201) {
      return response.data;
    }
  } catch (error) {
    console.error(error);
  }
};
