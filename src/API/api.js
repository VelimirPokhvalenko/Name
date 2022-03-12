import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '7c6ccbb2-9e87-498a-81a8-0b0a2c72b002'
    }
})
export const usersAPI = {
    getUsers: (currentPage = 1, usersCount = 100) => {
        return instance.get(`users?count=${usersCount}&page=${currentPage}`)
    },
    unfollow: (id) => {
        return instance.delete(`follow/${id}`)
    },
    follow: (id) => {
        return instance.post(`follow/${id}`)
    },
    setProfile: (id) => {
        return instance.get(`profile/${id}`)
    }
}
export const profileAPI = {
    setProfile: (id) => {
        return instance.get(`profile/${id}`)
    },
    SetUserStatus: (status) => {
        return instance.put(`profile/status`, {status: status})
    },
    getStatus: (userId) => {
        return instance.get(`profile/status/${userId}`);
    }
}
export const authAPI = {
    me: () => {
        return instance.get('auth/me');
    },
    login: (email, password, rememberMe = false) => {
        return instance.post('/auth/login/', {email: email, password: password, rememberMe: rememberMe});
    },
    logout: () => {
        return instance.delete(`/auth/login/`);
    }
}