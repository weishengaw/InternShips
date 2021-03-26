import { useState } from 'react'

const LoginForm = ({ onLogin }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if (!email && !password) {
            alert('Please enter email and password')
            return
        }

        if (!email) {
            alert('Please enter email')
            return
        }

        if (!password) {
            alert('Please enter password')
            return
        }

        onLogin(email, password)

        setEmail('')
        setPassword('')

    }

    return (
        <form className='login-form' onSubmit={onSubmit}>
            <h2>Login</h2>
            <div className='form-control'>
                <label>Email</label>
                <input type='text' placeholder='Add email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Password</label>
                <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <input type='submit' value='Login' className='btn btn-block'/>
            
        </form>

    )
}

export default LoginForm
