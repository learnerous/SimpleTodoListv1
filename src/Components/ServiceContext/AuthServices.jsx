import axios from "axios";

export const login = async (username, password) => {
    localStorage.setItem('user', JSON.stringify({"username":username,"password":password}));
};

export const isAuthenticated = () => {
    const user = localStorage.getItem('user');
    if (!user) {
        return {}
    }
    return JSON.parse(user);
};