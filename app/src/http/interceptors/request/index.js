const requestInterceptor = async (config) => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return config;
};

export default requestInterceptor;
