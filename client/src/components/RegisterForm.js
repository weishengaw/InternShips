import { useState } from 'react'

const RegisterForm = ({ onRegister }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [password2, setPassword2] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if (!email || !password || !name || !password2) {
            alert('Please fill in all fields')
            return
        }

        if (password !== password2) {
            alert('Passwords must match')
            return
        }

        onRegister(name, email, password)

        setEmail('')
        setName('')
        setPassword('')
        setPassword2('')

    }

    return (
        <form className='login-form' onSubmit={onSubmit}>
            <h2>Register</h2>
            <div className='form-control'>
                <label>Name</label>
                <input type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Email</label>
                <input type='text' placeholder='Add email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Password</label>
                <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Re-enter Password</label>
                <input type='password' placeholder='Type Password Again' value={password2} onChange={(e) => setPassword2(e.target.value)}/>
            </div>

            <input type='submit' value='Login' className='btn btn-block'/>
            
        </form>

    )
}

export default RegisterForm
