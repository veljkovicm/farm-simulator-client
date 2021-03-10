import { API } from 'libs';

export const submitNewBuilding = async ({
  farmId,
  name,
  farmUnit,
}) => {

  try {
    const body = {
      farmId,
      name,
      farmUnit,
    };

    const response = await API({
      method: 'POST',
      path: process.env.API_BUILDING_PATH,
      body,
    });

    if (response.status === 201) {
      return response.data;
    }

  } catch (error) {
    console.error(error);
  }
};
