import CONFIG from './config';

const ApiEndpoint = {
  LIST: `${CONFIG.BASE_URL}list`,
  RESTAURANT_IMAGE: `${CONFIG.BASE_URL}images/medium/`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
};

export default ApiEndpoint;
