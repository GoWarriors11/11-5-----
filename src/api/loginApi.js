const request = require("../utils/request");
const url = "v1/login/member/wxminiapp"; // 微信登录

module.exports.login = async (param) => {
  return request
    .post(`${url}/login`, param)
    .then((res) => {
      return res;
    })
    .catch((res) => {});
};

module.exports.verifyLogin = async () => {
  return request
    .get(`${url}/verify_login`)
    .then((res) => {
      return res;
    })
    .catch((res) => {});
};

module.exports.logout = async () => {
  return request
    .post(`${url}/logout`)
    .then((res) => {
      return res;
    })
    .catch((res) => {});
};

module.exports.bindPhone = async (params) => {
  return request
    .put(`${url}/bindPhone`, params)
    .then((res) => {
      return res;
    })
    .catch((res) => {});
};
