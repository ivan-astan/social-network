import axios from "axios";
const API_KEY = "82f5a9d1-dfdf-42e1-b6dd-18178cca8f2e";
const intense = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": API_KEY,
  },
});

export const userAPI = {
  unfollow: (id) => {
    return intense.delete(`follow/${id}`);
  },
  follow: (id) => {
    return intense.post(`follow/${id}`);
  },
  getUsers: (pageSize, currentPage, term) => {
    return intense.get(
      `users?count=${pageSize}&page=${currentPage}&term=${term}`
    );
  },
};

export const profileAPI = {
  getProfile: (userId) => {
    return intense.get(`profile/${userId}`);
  },
  updateStatus: (status) => {
    return intense.put(`profile/status`, { status });
  },
  getStatus: (userId) => {
    return intense.get(`profile/status/${userId}`);
  },
  setPhoto: (image) => {
    const formData = new FormData ()
    formData.append('image', image)
    return intense.put(`profile/photo`,formData, { headers: {
      'Content-Type': 'multipart/form-data'
    } });
  },
  changeProfile: (profile) => {
    return intense.put(`profile`, {...profile})
  }
};

export const loginAPI = {
  auth: () => {
    return intense.get(`auth/me`);
  },
  login: (email, password, rememberMe = false, captcha ) => {
    return intense.post(`auth/login`, { email, password, rememberMe, captcha });
  },
  logout: () => {
    return intense.post(`auth/logout`);
  },
  getCaptcha: () => {
    return intense.get(`security/get-captcha-url`)
  }
};

export const dialogAPI = {
  getMessageList: () => {
    return intense.get(`dialogs`);
  },
  getDialog: (userId) => {
    return intense.get(`dialogs/${userId}/messages`);
  },
  sendMessage: (userId, body) => {
    return intense.post(`dialogs/${userId}/messages`, { body });
  },
  createDialog: (userId) => {
    return intense.put(`dialogs/${userId}`)
  },
  deleteMessage: (messageId) => {
    return intense.delete(`dialogs/messages/${messageId}`)
  },
};
