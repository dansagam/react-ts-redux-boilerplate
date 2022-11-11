import jwtDecode, { JwtPayload } from "jwt-decode";

export interface IUserDecoded extends JwtPayload {
  firstname: string;
  lastname: string;
}

export default class Auth {
  static getDecodedJwt(tkn = ""): IUserDecoded {
    try {
      const token = this.getToken();
      const t = token || tkn;
      const decoded = jwtDecode<IUserDecoded>(t);
      return decoded;
    } catch (error) {
      return {} as IUserDecoded;
    }
  }

  static isAuthenticated() {
    try {
      const decodedToken = this.getDecodedJwt();
      if (decodedToken) {
        const { exp } = decodedToken;
        const currentTime = Date.now() / 1000;
        if (exp) {
          return exp > currentTime;
        }
        return true;
      }
      return false;
    } catch (e) {
      return false;
    }
  }

  static setToken(token: string) {
    localStorage.setItem("accessToken", token);
  }

  static setRefreshToken(token: string) {
    localStorage.setItem("refreshToken", token);
  }

  static getToken() {
    return localStorage.getItem("accessToken");
  }

  static getRefreshToken() {
    return localStorage.getItem("refreshToken");
  }

  static removeToken() {
    localStorage.removeItem("accessToken");
  }
}
