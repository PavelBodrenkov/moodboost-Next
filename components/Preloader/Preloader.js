import React from 'react'
import stylePreload from '../../styles/Preloader.module.scss';



const Preloader = () => {
    return (
        // <div className="preloader">
        //     <div className="preloader__container">
        //         <span className="preloader__round"></span>
        //     </div>
        // </div>
        <div className={stylePreload.lds_dual_ring}></div>
    )
};

export default Preloader
