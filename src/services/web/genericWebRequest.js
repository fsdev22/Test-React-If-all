import axios from "axios";
import ConstantUtils from "../utils/constantUtils";

const sendApiRequestWithCallBack = async (
  apiDetails,
  params = {},
  authToken = null,
  headers = {},
  callback = {}
) => {
  try {
    const requestConfig = {
      method: apiDetails.METHOD,
      url: ConstantUtils.API_BASE_URL + apiDetails.URL,
      headers: {
        "Content-Type": apiDetails.CONTENT_TYPE,
        "auth-token": authToken,
        ...headers,
      },
      data: params,
    };
    let dataBody = await axios(requestConfig);
    callback(dataBody, null);
  } catch (exp) {
    console.error("EXCEPTION: INSIDE sendApiRequest() METHOD. : ", exp.message);
    let error = {};
    if (exp.message.includes("401")) {
      error = { msg: "Access denied" };
    }
    if (exp.message.includes("Network Error")) {
      error = { msg: "Network Error" };
    }
    callback(null, error);
  }
};

export default sendApiRequestWithCallBack;
