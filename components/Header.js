import Head from 'next/Head';
import styles from './../styles/Header.module.scss';
import A from './../components/A';
import pers from './../public/image/pers.svg';
import menu from './../public/image/burger-icon.svg';
import load from './../public/image/Iphone-spinner-2.gif'
import { MAINPOSTS_ROUTE, SEARCH_ROUTE } from './../utils/consts';
import moodboostLogo from './../public/image/moodboost-logo.svg';
import Image from 'next/image'

function Header() {
    return (
        <>
            <Head>
                <title>moodboost-Next</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
                    integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
                    crossorigin="anonymous" 
                />
                <script
                    src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
                    crossorigin="anonymous">
                </script>
            </Head>
            <header className={styles.header}>
            <nav className={`${styles.header__navbar} container`}>
                <ul className={styles.header__navbar_logo_container}>
                    <li onClick={(e) => asideHendler(e)} className={styles.header__navbar_menu_li, styles.header__navbar_menu_li_toggler}>
                        <a href="#" id="sidebar_toggler" className={styles.header__navbar_menu_link}>
                            <Image width={19} heigth={19} src={menu} />
                        </a>
                    </li>
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
                        <A href={SEARCH_ROUTE} className={styles.header__navbar_menu_link}><i className="icon-search"></i></A>
                    </li>
                    <li onClick={() => openAuth()} className={styles.header__navbar_menu__logn_in}>
                        <button  className={styles.header__navbar_menu__logn_in_button}>hgjfghj</button>
                    </li>
                </ul>
            </nav>  
            </header>
        </>
    )
}

export default Header
