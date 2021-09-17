import styleHash from '../styles/hashTags.module.scss';
import React from 'react';
import Link from 'next/link'
import Image from 'next/image';
import logo_facebook from '../public/image/logos_facebook.svg';
import logo_telega from '../public/image/logos_telegram.svg';
import logo_pinterest from '../public/image/logos_pinterest.svg';
import categoryStore from '../store/categoryStore';
import { observer } from 'mobx-react-lite';
import pers_footer from '../public/image/pers_hesh.svg';
import logo_footer from '../public/image/logo-footer.svg';

const Hashtags = observer(({visibCategory}) => {
    // const {category} = useContext(Context)
  
    return(
            <aside className={styleHash.tags_list__container}>
                <h4 className={styleHash.tags_list__title}>Life</h4>
                    {visibCategory?.slice().sort((a, b) => {
                        if(a.name < b.name) {
                            return -1
                        } else if (a.name > b.name) {
                            return 1
                        }
                    }).map((hash) => {
                        return(
                            <Link href="/category/[id]" as={`/category/${hash._id}`} key={hash._id}>
                            <a className={styleHash.linkHash}>
                                <button onClick={() => {categoryStore.setOneCategory(hash), categoryStore.setIsAsideOpen(false)}}
                                    className={`${styleHash.tags_list__item} ${hash._id === categoryStore.oneCategory._id && styleHash.color_green}`} key={hash._id}>#{hash.name}
                                   
                                </button>
                            </a>
                            </Link>
                        )
                    })
                }
                <div className={styleHash.tags_list__footer}>
                    <a href="/" className={styleHash.tags_list__logo_container}>
                        <Image className={styleHash.tags_list__pers_footer}  src={pers_footer} width={60} height={57}/>
                        <Image className={styleHash.tags_list__logo_footer}  src={logo_footer} width={115} height={20}/>
                    </a>
                    <nav>
                        <ul className={styleHash.tags_list__lists}>
                            {/* <li className="tags-list__list">About</li> */}
                            <Link href="/privacycookies">
                                <a className={styleHash.tags_list__list_link} ><li className={styleHash.tags_list__list}>Privacy & Cookies</li></a>
                            </Link>
                                
                            
                            
                        </ul>
                    </nav>
                    <nav>
                        <ul className={styleHash.tags_list__footer_soc_icon_lists}>
                            <li className={styleHash.tags_list__footer_soc_icon_list}><a target="_blank" rel="noreferrer noopener" href="https://www.facebook.com/moodboost.me"><Image className={styleHash.tags_list__footer_soc_icon}  src={logo_facebook}/></a></li>
                            <li className={styleHash.tags_list__footer_soc_icon_list}><a target="_blank" rel="noreferrer noopener" href="https://t.me/joinchat/QTzr38Tg5dhjZDI1/"><Image className={styleHash.tags_list__footer_soc_icon} src={logo_telega}/></a></li>
                            <li className={styleHash.tags_list__footer_soc_icon_list}><a target="_blank" rel="noreferrer noopener" href="https://www.pinterest.com/moodboostm/"><Image className={styleHash.tags_list__footer_soc_icon}  src={logo_pinterest}/></a></li>
                        </ul>
                    </nav>
                </div>
                </aside>
    )
})

export default Hashtags