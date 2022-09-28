import Api from "stores/Api";

const getAllAuth = async () => {
  const { data } = await Api.get("");
  return data;
};

const authGeneral = {
  getAllAuth,
};
export default authGeneral;
