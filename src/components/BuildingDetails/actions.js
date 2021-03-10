import { API } from 'libs';

export const submitNewUnit = async (buildingId) => {
  try {
    const body = { buildingId };

    const response = await API({
      method: 'POST',
      path: process.env.API_UNITS_PATH,
      body,
    });

    if (response.status === 201) {
      return response.data;
    }

  } catch (error) {
    console.error(error);
  }
};
