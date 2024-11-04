import React, { useContext } from 'react';
import AppContext from '../../context/store';
import b from './Basket.module.scss';
import Nav from '../nav/Nav';
import Footer from '../footer/Footer';
import { NavLink } from 'react-router-dom';
import { Carousel } from 'antd';
import korzinka from '../../images/headerImg3.png'; 
import { FaTrash } from "react-icons/fa6";
const Basket = () => {
    const [state, dispatch] = useContext(AppContext);
    const userItems = state.user
    console.log(userItems);
const truncate = (limit)=>{
return  limit.slice(0,60)
}
const handleMoveItems = (id)=>{
dispatch({type:"DELETE",id})
}
    
    return (
        <>
            <Nav />
            <div className={b.korzinka}>
                <div className={b.container}>
                    <div className={b.allParentCards}>
{
    userItems.map(item=>{
     return(
        <div className={b.all__card} key={item.id}>
<div className={b.all__cardKorzinka__btn}>
<button onClick={()=>handleMoveItems(item.id)}><FaTrash/></button>
</div>
     
                <img src={item.images} alt="" />
                 <div className={b.all__cardBody}>
                     <h1 className={b.all__cardTit}>
                         {item.title}
                     </h1>
                     <h3 className={b.all__carddesc}>
                     {truncate(item.description, 30)}
                         </h3>
                   
                     <div className={b.all__price}>
                        <h2 className={b.all__cardPrice}>
                              ${item.price}
                         </h2>
     
                         <p className={b.all__sale}>
                             $534000
                         </p>
                         <p className={b.all__skid}>
                             $534000
                         </p>
                     </div>
                 </div>
             </div>
       
     )
    })
}

                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Basket;