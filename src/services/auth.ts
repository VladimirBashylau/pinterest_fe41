import { ICredentials, Login } from "./interface";
import { api } from "./api";

class AuthService {
  register(body: ICredentials) {
    return api.post("/auth/users/", body);
  }

  verifyEmail(body: { uid: string; token: string }) {
    return api.post("/auth/users/activation/", body);
  }

  getAccessRefreshTokens(body: Login) {
    return api.post<{ access: string; refresh: string }>(
      "/auth/jwt/create/",
      body
    );
  }

  refreshAccessToken(refresh: string) {
    return api.post<{ access: string }>("/auth/jwt/refresh/", {
      refresh,
    });
  }

  getCurrentUser() {
    return api.get<{ id: number; email: string; username: string }>(
      "/auth/users/me/"
    );
  }
}

export const authService = new AuthService();
