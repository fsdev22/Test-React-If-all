import constantUtils from "../../utils/constantUtils";
import sendApiRequest from "../requestWebService";

const signupApi = async (params) => {
  try {
    const res = await sendApiRequest(constantUtils.USER_SIGN_UP, params);
    if (!res) return null;
    return res;
  } catch (exp) {
    return null;
  }
};
export default signupApi;
