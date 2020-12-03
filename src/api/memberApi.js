const request = require("../utils/request");
const url = "/v1/member/myCenter/getLoginUser";

module.exports.myCenter = async (param) => {
  return request
    .get(`${url}`, param)
    .then((res) => {
      return res;
    })
    .catch((res) => {});
};
