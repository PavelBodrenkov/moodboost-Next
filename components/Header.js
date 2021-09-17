
import styles from './../styles/Header.module.scss';
import pers from './../public/image/pers.svg';
import menu from './../public/image/burger-icon.svg';
import {SEARCH_ROUTE } from './../utils/consts';
import moodboostLogo from './../public/image/moodboost-logo.svg';
import Image from 'next/image'
import userStore from '../store/userStore';
import { observer } from 'mobx-react-lite';
import Preloader from '../components/Preloader/Preloader';
import categoryStore from '../store/categoryStore';
import searchImg from '../public/image/search.svg';
import Link from 'next/link';
import {useRouter} from 'next/router';
import { useState, useEffect } from 'react';

const Header = observer(() => {
    const [visibmenu, setVisibMenu] = useState(true)
    const router = useRouter()

    function openAuth () {
        if(userStore.isAuth) {
            userStore.logout()
        } else {
            userStore.setOpenAuth(true)
        }
    }

    function asideHendler (e) {
        e.preventDefault()
        categoryStore.setIsAsideOpen(!categoryStore.isAsideOpen)
    }

    useEffect(() => {
        if(router.pathname === "/search") {
            setVisibMenu(false)
        }
    }, [router.pathname])
    
    



    return (
        <> 
            <header className={styles.header}>
            <nav className={`${styles.header__navbar} container`}>
                <ul className={styles.header__navbar_logo_container}>
                    {visibmenu && <li onClick={(e) => asideHendler(e)} className={`${styles.header__navbar_menu_li} ${styles.header__navbar_menu_li_toggler}`}>
                        <a href="#" id={styles.sidebar_toggler} className={styles.header__navbar_menu_link}>
                            <Image width={19} heigth={19} src={menu} />
                        </a>
                    </li>}
                    <li>
                        <a href='/' className={styles.header__header__navbar}>
                            <div className={styles.header_pers}>
                                <Image width={52} heigth={78} className={styles.header__logo} src={pers}/>
                            </div>
                            <div>
                                <Image width={150} height={30} className={styles.header__navbar_brand_image} src={moodboostLogo}/>
                            </div>
                        </a>
                    </li>
                </ul>
                <ul className={styles.header__navbar_menu}>
                    <li className={styles.headr__navbar_menu_li, styles.header__navbar_menu_li_search}>
                        <Link href={SEARCH_ROUTE} >
                            <a className={styles.header__navbar_menu_link}>
                                <Image width={25} height={25} src={searchImg}/>
                            </a>
                        </Link>
                    </li>
                    <li onClick={() => openAuth()} className={styles.header__navbar_menu__logn_in}>
                        <button  className={styles.header__navbar_menu__logn_in_button}>{userStore.loader ? <Preloader/> : userStore.isAuth ? "Exit" : "Log in"}</button>
                    </li>
                </ul>
            </nav>  
            </header>
        
        </>
    )
})

export default Header
