const local = {
  app: {
    REACT_APP_BASE_URL:"https://jsonplaceholder.typicode.com",
  }
};

const dev = {
  app: {
    REACT_APP_BASE_URL:"base/link/to/api/endpoint",
  },
};

const uat = {
  app: {
    REACT_APP_BASE_URL:"base/link/to/api/endpoint",
  },
};

const prod = {
  app: {
    REACT_APP_BASE_URL:"base/link/to/api/endpoint",
  },
};

console.log(process.env.REACT_APP_STAGE,    'REACT_APP_STAGE')
const config = process.env.REACT_APP_STAGE === 'production'  ? prod
             : process.env.REACT_APP_STAGE === 'development' ? dev
             : process.env.REACT_APP_STAGE === 'uat' ? uat
             : local;

export default {
  // Add common config values here
  ...config
};
