import styleHash from '../styles/hashTags.module.scss';
import React from 'react';
import { useLocation } from 'react-router-dom';

const Hashtags = ({visibCategory})  => {
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
                            <button 
                                className={styleHash.tags_list__item} key={hash._id}>#{hash.name} 
                            </button>
                        )
                    })
                }
                <div className={styleHash.tags_list__footer}>
                    <a href="#" className={styleHash.tags_list__logo_container}>
                        <img className={styleHash.tags_list__pers_footer}  />
                        <img className={styleHash.tags_list__logo_footer}  />
                    </a>
                    <nav>
                        <ul className={styleHash.tags_list__lists}>
                            {/* <li className="tags-list__list">About</li> */}
                            <a className={styleHash.tags_list__list_link} href="#"><li className={styleHash.tags_list__list}>Privacy & Cookies</li></a>
                        </ul>
                    </nav>
                    <nav>
                        <ul className={styleHash.tags_list__footer_soc_icon_lists}>
                            <li className={styleHash.tags_list__footer_soc_icon_list}><a target="_blank" rel="noreferrer noopener" href="https://www.facebook.com/moodboost.me"><img className={styleHash.tags_list__footer_soc_icon}  /></a></li>
                            <li className={styleHash.tags_list__footer_soc_icon_list}><a target="_blank" rel="noreferrer noopener" href="https://t.me/joinchat/QTzr38Tg5dhjZDI1/"><img className={styleHash.tags_list__footer_soc_icon} /></a></li>
                            <li className={styleHash.tags_list__footer_soc_icon_list}><a target="_blank" rel="noreferrer noopener" href="https://www.pinterest.com/moodboostm/"><img className={styleHash.tags_list__footer_soc_icon}  /></a></li>
                        </ul>
                    </nav>
                </div>
                
                </aside>
    )
}

export default Hashtags