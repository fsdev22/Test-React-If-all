// Generic web request. Accepts apiDetails(Configuartion object of constantutils), paramteres (if any otherwise pass empty objet),authToken (if any), headers(if any)
import axios from "axios";
import ConstantUtils from "../utils/constantUtils";

const sendApiRequest = async (
  apiDetails,
  params = {},
  authToken = null,
  headers = {}
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
    return await axios(requestConfig);
  } catch (exp) {
    console.error("EXCEPTION: INSIDE sendApiRequest() METHOD. : ", exp);
    return exp;
  }
};

export default sendApiRequest;
