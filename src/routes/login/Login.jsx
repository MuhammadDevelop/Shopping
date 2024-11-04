import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Button from '../../components/button/Button'
import Footer from '../../components/footer/Footer'
import Nav from '../../components/nav/Nav'
import r from './Login.module.scss'
import axios from '../../api'


const Login = () => {
  const [email,setEmail]= useState("")
  const [password,setPassword]= useState("")
  let navigate = useNavigate()
  const getData = async ()=>{
       try{
      let responce = await axios.post("/users/login",{
      
        email,
        password,
      
      })
      console.log(responce);
      if(responce.status === 200){
        setTimeout(()=>{
navigate('/allPage')
let date = responce.data.token
date.localStorage.setItem("data",JSON.stringify(date))
        },2000)
      }
      date.getItem("data")
       }
   
       catch(error){
console.log(error);
       }
  }
 
  const handleSendLoginId=(e)=>{
e.preventDefault();
getData()
  }
  return (
    <>
    <Nav/>
    <div className={r.login}>
        <div className={r.container}>
            <div className={r.form__parent}>
                <h1 className={r.form__tit}>
                    Login
                </h1>
                <p className={r.fom__text}>
                Enter your credential to access your account.
                </p>
                <form onSubmit={handleSendLoginId} action="#" className={r.form}>
                 <div className={r.form__box}>
                 <h3 className="form__innerTit">
                    Email address
                    </h3>
                    <input type="email" className={r.form__inp} placeholder='email@domain.com' value={email} onChange={(e)=>setEmail(e.target.value)} />
                 </div>
                 <div className={r.form__box}>
                   <div className={r.form__headTit}>
                   <h3 className="form__innerTit">
                 Password
                    </h3>
                    <NavLink to='/' className={r.formNavlink}>Forgot Password?</NavLink>
                   </div>
                    <input type="password" className={r.form__inp} placeholder='Password'value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <Button btnType="submit">Login</Button>
                    <p className={r.formBtnTit}>
                    Don’t have an account? <NavLink to='/' className={r.navLink}>
                    Register here.
                    </NavLink>
                    </p>
                 </div>
                </form>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Login