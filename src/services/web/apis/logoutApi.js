import constantUtils from "../../utils/constantUtils";
import { TOKEN_WITH_CAPITAL_T } from "../../utils/constantValues";
import sendApiRequest from "../requestWebService";

const logoutApi = async (params) => {
  let clearedToken = TOKEN_WITH_CAPITAL_T.concat(" ", params);
  const header = {
    Authorization: clearedToken,
  };
  try {
    const res = await sendApiRequest(
      constantUtils.LOG_OUT_API,
      {},
      null,
      header
    );
    if (!res) return null;
    return res;
  } catch (exp) {
    return null;
  }
};
export default logoutApi;
