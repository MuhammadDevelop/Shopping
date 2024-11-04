import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../../components/button/Button'
import Footer from '../../components/footer/Footer'
import Nav from '../../components/nav/Nav'
import r from './Register.module.scss'
import axios from '../../api'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Register = () => {
  const [name,setName]= useState("")
  const [email,setEmail]= useState("")
  const [password,setPassword]= useState("")
  const [phone,setPhone]= useState("")
  const [street,setStreet]= useState("")
  const [apart,setApart]= useState("")
  const [zip,setZip]= useState("")
  const [city,setCity]= useState("")
  const [country,setCountry]= useState("")
let navigate = useNavigate()
  const getData = async ()=>{
       try{
      let responce = await axios.post("/users/register",{
        name,
        email,
        password,
        phone,
        street,
        apartment:apart,
        zip,
        city,
        country,
      })
      console.log(responce);
      if(responce.status === 200){
        setTimeout(()=>{
navigate('/login')
        },2000)
      }
       }
    
       catch(error){
console.log(error);
       }
  }
 
  const handleSendRgisterId=(e)=>{
e.preventDefault();
getData()
  }
  return (
    <>
    <Nav/>
    <div className={r.register}>
        <div className={r.container}>
            <div className={r.form__parent}>
                <h1 className={r.form__tit}>
                    Register
                </h1>
                <p className={r.fom__text}>
                Enter your credential to access your account.
                </p>
                <form onSubmit={handleSendRgisterId} action="#" className={r.form}>
                 <div className={r.form__box}>
                 <h3 className="form__innerTit">
                  Name
                    </h3>
                    <input type="name" className={r.form__inp} placeholder='name' value={name} onChange={ (e)=>setName(e.target.value)} />
                 </div>
                 <div className={r.form__box}>
                 <h3 className="form__innerTit">
                    Email address
                    </h3>
                    <input type="email" className={r.form__inp} placeholder='email@domain.com' value={email}onChange={(e)=>setEmail(e.target.value)} />
                 </div>
                 <div className={r.form__box}>
                 <h3 className="form__innerTit">
                 Password
                    </h3>
                    <input type="password" className={r.form__inp} placeholder='Password' value={password}onChange={(e)=>setPassword(e.target.value)} />
                 </div>
                 <div className={r.form__box}>
                 <h3 className="form__innerTit">
                   Phone
                    </h3>
                    <input type="number" className={r.form__inp} placeholder='Phone' value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                 </div>
                 <div className={r.form__box}>
                 <h3 className="form__innerTit">
                  Street
                    </h3>
                    <input type="text" className={r.form__inp} placeholder='Street' value={street} onChange={(e)=>setStreet(e.target.value)} />
                 </div>
              
                 <div className={r.form__box}>
                   <h3 className="form__innerTit">
                   Apartment
                    </h3>
                  
                    <input type="text" className={r.form__inp} placeholder='Apartment' value={apart} onChange={(e)=>setApart(e.target.value)}/>
                  
                 </div>   <div className={r.form__box}>
                   <h3 className="form__innerTit">
                Zip
                    </h3>
                  
                    <input type="password" className={r.form__inp} placeholder='Zip' value={zip} onChange={(e)=>setZip(e.target.value)} />
                  
                 </div>   <div className={r.form__box}>
                   <h3 className="form__innerTit">
                 City
                    </h3>
                  
                    <input type="`text" className={r.form__inp} placeholder='City' value={city} onChange={(e)=>setCity(e.target.value)}/>
                  
                 </div>
                 <div className={r.form__box}>
                   <h3 className="form__innerTit">
                 Country
                    </h3>
                  
                    <input type="text" className={r.form__inp} placeholder='Country' value={country} onChange={(e)=>setCountry(e.target.value)} />
                  
                 </div> 
                    <Button btnType="submit">Register</Button>
                 
                </form>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Register