import { create } from "zustand";

type UserTokenStore = {
  accessToken: string | null;
  isAuthenticated: boolean;

  loginTokenHandler: (
    accessToken: string | null,
    isAuthenticated: boolean,
  ) => void;
  logoutTokenHandler: () => void;
};

const initialState = {
  accessToken: "",
  isAuthenticated: false,
};

export const useAuthStore = create<UserTokenStore>((set) => ({
  ...initialState,
  loginTokenHandler: (accessToken: string | null, isAuthenticated: boolean) => {
    set({
      accessToken,
      isAuthenticated,
    });
  },
  logoutTokenHandler: () => {
    set({
      accessToken: null,
      isAuthenticated: false,
    });
  },
}));
