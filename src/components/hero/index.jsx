import './sass/style.scss'
import Hero from './img/hero.svg'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Index = () => {
    const [form, setForm] = useState({
        username: '',
        email: '',
        password: '',
        confirm_pass: ''
    })
    const navigate = useNavigate()
    const [isError, setIsError] = useState(false)

    const handleChange = (event) => {
        const { name, value } = event.target
        setForm({ ...form, [name]: value })
        setIsError(false)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (form.username !== '' && form.email && form.password !== '' && form.confirm_pass !== '') {
            navigate('/home')
        } else {
            alert("You have an error in input, please write full own information.")
            setIsError(true)
        }
    }

    return (
        <div>
            <section className='hero'>
                <div className="container">

                    <div className="hero_wrapper">
                        <div className="hero_img">
                            <img src={Hero} alt="Hero Image" />
                        </div>
                        <div className="hero_right">
                            <form onSubmit={handleSubmit}>
                                <div className="hero_title">
                                    <h1>Create Account</h1>
                                    <div className="h3">             
                                    <h3>Welcome! Enter your details and start creating, collecting, and selling NFTs.</h3>
                                    </div>
                                </div>
                                <div className="hero_actions">
                                    <input
                                        type="text"
                                        name='username'
                                        placeholder='Username'
                                        value={form.username}
                                        onChange={handleChange}
                                        style={{
                                            border: isError ? "2px solid red" : "2px solid #ccc",
                                            padding: "10px",
                                            borderRadius: "5px",
                                            outline: "none",
                                        }}
                                    />
                                    <input
                                        type="email"
                                        name='email'
                                        placeholder='Email address'
                                        value={form.email}
                                        onChange={handleChange}
                                        style={{
                                            border: isError ? "2px solid red" : "2px solid #ccc",
                                            padding: "10px",
                                            borderRadius: "5px",
                                            outline: "none",
                                        }}
                                    />
                                    <input
                                        type="password"
                                        name='password'
                                        placeholder='Password'
                                        value={form.password}
                                        onChange={handleChange}
                                        style={{
                                            border: isError ? "2px solid red" : "2px solid #ccc",
                                            padding: "10px",
                                            borderRadius: "5px",
                                            outline: "none",
                                        }}
                                    />
                                    <input
                                        type="password"
                                        name='confirm_pass'
                                        placeholder='Confirm Password'
                                        value={form.confirm_pass}
                                        onChange={handleChange}
                                        style={{
                                            border: isError ? "2px solid red" : "2px solid #ccc",
                                            padding: "10px",
                                            borderRadius: "5px",
                                            outline: "none",
                                        }}
                                    />
                                    <button className='btn-login' type='submit'>Log In</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Index
