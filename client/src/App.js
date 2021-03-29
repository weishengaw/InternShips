import Header from './components/Header.js';
import Container from './components/Container.js';
import LoginForm from './components/LoginForm.js';
import RegisterForm from './components/RegisterForm.js';
import { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
    const API_URL = "https://intern-shippings.herokuapp.com/";

    const [loggedIn, setLoggedIn] = useState(false)
    const [email, setEmail] = useState('')
    const [counters, setCounters] = useState({})
    const [errorMessages, setErrorMessages] = useState('')
    const [successMessages, setSuccessMessages] = useState('')

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"))
        if (user) {
            setLoggedIn(true);
            setCounters(user);
            setEmail(user.email);
        } else {
            error("Please log in to view this page.");
        }
    }, []);

    const logout = () => {
        localStorage.removeItem("user");
        setLoggedIn(false);
        success("You are now successfully logged out.");
    }

    const error = (message) => {
        setErrorMessages(message);
    }

    const exitError = () => {
        setErrorMessages('');
    }

    const success = (message) => {
        setSuccessMessages(message);
    }

    const exitSuccess = () => {
        setSuccessMessages('');
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
                    setCounters({
                        applied: 0,
                        rejected: 0,
                        OA: 0,
                        interviews: 0,
                        offers: 0
                    });                        
                    if (res.data.accessToken) {
                        localStorage.setItem("user", JSON.stringify(res.data));
                    }
                    success("You are now registered and may log in.");

                }

            )
            .catch(err => {
                console.error(err);
                error("Email already exists");
            });
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
                exitError()
                exitSuccess()                   
                if (res.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(res.data));
                }
            })
            .catch(err => {
                console.error(err);
                error("Invalid email/password combination");
            });
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
        <div id="centerContent">
            <div id='top'>
                <Header onClick={logout} loggedIn={loggedIn}/>
                {errorMessages && <div id="notificationCenter" onClick={exitError}>
                                    <div class="notif bad">
                                        <div class="icon" onClick={exitError}>

                                        </div>
                                        <div class="message">
                                            <div class="title" style={{fontSize: 20}}>Error</div>
                                            <div style={{fontSize:30}}>{errorMessages}</div>
                                        </div>
                                    </div>
                                </div>}
                {successMessages && <div id="notificationCenter" onClick={exitSuccess}>
                    <div class="notif good">
                        <div class="icon" onClick={exitSuccess}>

                        </div>
                        <div class="message">
                            <div class="title" style={{fontSize: 20}}>Success</div>
                            <div style={{fontSize:30}}>{successMessages}</div>
                        </div>
                    </div>
                </div>}


            </div>

            
            <div id='middle'>
                {loggedIn && <Container userInfo={counters} update={update} />}

                {!loggedIn && <div class="pageLogin"> <RegisterForm onRegister={registerAttempt} error={error}/> <LoginForm onLogin={loginAttempt}/></div>}
            </div>
        </div>
    )
}

export default App
