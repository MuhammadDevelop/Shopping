import React, { useContext } from 'react'
import h from './Nav.module.scss'
import headerImgOne from '../../images/headerImg1.png'
import headerImgTwo from '../../images/headerImg2.png'
import headerImgThree from '../../images/headerImg3.png'
import { NavLink } from 'react-router-dom'
import AppContext from '../../context/store'
import i18n from '../../language/i18next'
import { useTranslation } from 'react-i18next'

const Nav = () => {
  const [state, dispatch] = useContext(AppContext);
  const userItems = state.user
  const { t } = useTranslation();

  return (
   <nav className={h.header__nav}>
     <div className={h.container}>
       <div className={h.header__navParent}>
         <div className={h.selectParent}>
           <select 
             onChange={(e) => {
               i18n.changeLanguage(e.target.value);
               console.log(e.target.value);
             }} 
             className={h.header__select}
           >
             <option value="en" className={h.header__selectOption}>
               EN
             </option>
             <option value="uz" className={h.header__selectOption}>
               UZB
             </option>
           </select>
         </div>
         
         <div className={h.header__listParent}>
           <ul className={h.header__list}>
             <img src={headerImgOne} alt="" className={h.header__listImg} />
             <img src={headerImgTwo} alt="" className={h.header__listImg} />
             <NavLink to="/korzinka" className={h.nav}>
               {userItems.length > 0 ? (
                 <p style={{ color: "crimson" }}>{userItems.length}</p>
               ) : null}
               <img src={headerImgThree} alt="" className={h.header__listImg} />
             </NavLink>
           </ul>
         </div>
       </div>
     </div>
   </nav>
  )
}

export default Nav
