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
    },
    setProfilePhoto: (userPhoto) => {
        let formData = new FormData();
        formData.append("image", userPhoto);
        return instance.put(`profile/photo`, formData,
            {headers: {
                    'Content-type': 'multipart/form-data'
                }});
    },
    editProfileData: (profileData) => {
        return instance.put(`profile`, profileData)
    }
}
export const authAPI = {
    me: () => {
        return instance.get('auth/me');
    },
    login: (email, password, rememberMe = false, captchaSymbols) => {
        return instance.post('/auth/login/', {email: email, password: password, rememberMe: rememberMe, captcha: captchaSymbols});
    },
    logout: () => {
        return instance.delete(`/auth/login/`);
    }
}

export const securityAPI = {
    getCaptchaURL: () => {
        return instance.get('security/get-captcha-url');
    }
}