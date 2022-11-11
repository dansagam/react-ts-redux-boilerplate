import Api from "stores/Api";

const getAllAuth = async <RS, RQ>(x: RQ) => {
  const response = await Api.get<RS>("", { params: x });
  return response;
};

const loginUser = async <RS, RQ>(payload: RQ) => {
  const response = await Api.post<RS>("auth/login", payload);
  return response;
};

const createPassword = async <RS, RQ>(payload: RQ) => {
  const response = await Api.post<RS>("auth/users/create-password", payload);
  return response;
};

const authGeneral = {
  getAllAuth,
  loginUser,
  createPassword,
};
export default authGeneral;
