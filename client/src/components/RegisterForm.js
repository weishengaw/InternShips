import { useState } from 'react'

const RegisterForm = ({ onRegister, error }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [password2, setPassword2] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if (!email || !password || !name || !password2) {
            error('Please fill in all fields.')
            return
        }

        if (!email.includes("@")) {
            error("Please enter a valid email.")
        }

        if (password !== password2) {
            error('Passwords must match.')
            return
        }

        onRegister(name, email, password)

        setEmail('')
        setName('')
        setPassword('')
        setPassword2('')

    }

    return (
        <div class='register side'>
            <form class='login-form' onSubmit={onSubmit}>
                <div class="title">register</div>
                <div class='form-control'>
                    <input type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div class='form-control'>
                    <input type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div class='form-control'>
                    <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div class='form-control'>
                    <input type='password' placeholder='Verify Password' value={password2} onChange={(e) => setPassword2(e.target.value)}/>
                </div>                
                <input type='submit' value='Register' className='button'/>
            </form>
        </div>
    )
}

export default RegisterForm
