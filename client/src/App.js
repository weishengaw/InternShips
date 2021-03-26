import Header from './components/Header.js';
import Container from './components/Container.js';
import LoginForm from './components/LoginForm.js';
import RegisterForm from './components/RegisterForm.js';
import { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
    const API_URL = "http://localhost:8080";

    const [loggedIn, setLoggedIn] = useState(false)
    const [email, setEmail] = useState('')
    const [counters, setCounters] = useState({})

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"))
        if (user) {
            setLoggedIn(true);
            setCounters(user);
            setEmail(user.email);
        } else {
            console.log("Please log in to view this page.");
        }
    }, []);

    const logout = () => {
        localStorage.removeItem("user");
        setLoggedIn(false);
    }

    const registerAttempt = async (name, email, password) => {
        await axios.post(API_URL + "/register",
            {
                email: email,
                name: name,
                password: password
            }
        )
            .then(
                res => {
                    console.log(res.data.message);
                    setLoggedIn(true);
                    setEmail(email);                        
                    if (res.data.accessToken) {
                        localStorage.setItem("user", JSON.stringify(res.data));
                    }

                }

            )
            .catch(err => console.error(err));
    }

    const loginAttempt = async (email, password) => {
        await axios.post(API_URL + "/login",
            {
            email: email,
            password: password
            }
        )
            .then(res => {
                console.log(res.data.message)
                setCounters(res.data)
                setLoggedIn(true)
                setEmail(email)                    
                if (res.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(res.data));
                }
            })
            .catch(err => console.error(err));
    }

    const update = async (newCounters) => {
        await axios.put(API_URL + "/update",
            {
            applied: newCounters.applied,
            rejected: newCounters.rejected,
            OA: newCounters.OA,
            interviews: newCounters.interviews,
            offers: newCounters.offers,
            email: email
            }
        )
            .then(res => {
                console.log(res.data.message);
                localStorage.setItem("user", JSON.stringify(newCounters));
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            <Header onClick={logout}/>
            {loggedIn && <Container userInfo={counters} update={update}/>}
            {!loggedIn && <LoginForm onLogin={loginAttempt}/>}
            {!loggedIn && <RegisterForm onRegister={registerAttempt}/>}
        </div>
    )
}

export default App
