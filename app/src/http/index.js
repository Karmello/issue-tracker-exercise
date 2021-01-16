import axios from "axios";

import {
  requestInterceptor,
  requestErrorInterceptor,
  responseInterceptor,
  responseErrorInterceptor,
} from "./interceptors/index";

const instance = axios.create();

instance.interceptors.request.use(requestInterceptor, requestErrorInterceptor);
instance.interceptors.response.use(
  responseInterceptor,
  responseErrorInterceptor
);

export default instance;
