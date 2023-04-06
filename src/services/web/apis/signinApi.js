import constantUtils from "../../utils/constantUtils";
import sendApiRequestWithCallBack from "../genericWebRequest";

const signinApi = async (params) => {
  try {
    await sendApiRequestWithCallBack(
      constantUtils.USER_SIGN_IN,
      params,
      null,
      {},
      (data, error) => {
        if (data) {
          return data.data;
        } else {
          console.log(error);
        }
      }
    );
  } catch (exp) {
    return null;
  }
};
export default signinApi;
