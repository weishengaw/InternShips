import axios from "axios";

const API_URL = "http://localhost:8080";

const register = (name, email, password) => {
    return axios.post(API_URL + "/register",
        {
            email: email,
            name: name,
            password: password
        }
    )
        .then(
            res => {
                console.log(res.data.message);
                if (res.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(res.data))
                }
                return res.data;
            }

        )
        .catch(err => {
            
            return { err: err };
        });
    
};

const login = (email, password) => {
    return axios.post(API_URL + "/login",
        {
        email: email,
        password: password
        }
    )
        .then(res => {
            console.log(res.data.message)
            if (res.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(res.data))
            }
            return res.data;
        })
        .catch(err => {return { err: err }});
};

const logout = () => {
    localStorage.removeItem("user");
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

export default {
    register,
    login,
    logout,
    getCurrentUser
};


