import { API } from 'libs';

export const submitFeedUnit = async (id) => {
  try {
    const body = { id };

    const response = await API({
      method: 'PATCH',
      path: process.env.API_UNITS_PATH,
      body,
    });

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error(error);
  }
};
