import { useState } from 'react'

const LoginForm = ({ onLogin, error }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if (!email && !password) {
            error('Please enter email and password.')
            return
        }

        if (!email) {
            error('Please enter email.')
            return
        }

        if (!password) {
            error('Please enter password.')
            return
        }

        onLogin(email, password)

        setEmail('')
        setPassword('')

    }

    return (
        <div class='side'>
            <form className='login-form' onSubmit={onSubmit}>
                <div class="title">login</div>
                <div class='form-control'>
                    <input type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div class='form-control'>
                    <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <input type='submit' value='Login' className='button'/>
                
            </form>
        </div>

    )
}

export default LoginForm
