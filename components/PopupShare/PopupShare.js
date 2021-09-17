import stulePopShare from '../../styles/PopupShare.module.scss';
import sharelink from '../../public/image/share-link.png'
import shareTwitter from '../../public/image/imgShare/shareTwitter.png';
import shareFacebook from '../../public/image/imgShare/shareFacebook.png';
import sharePinterest from '../../public/image/imgShare/sharePinterest.png';
import React, {useState} from "react"
import { observer } from 'mobx-react-lite';
import {FacebookShareButton} from 'react-share';
import {TwitterShareButton} from 'react-share'
import {PinterestShareButton} from 'react-share'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import postStore from '../../store/postStore';
import Image from 'next/image'

const PopupShare = observer((log) => {
    const [copy, setCopy] = useState(false)

    function escClose(event) {
        if (event.target.classList.contains("PopupShare_openSharePopup__1E4Aq")) {
            
            postStore.setOpenShare(false)
            setCopy(false)
        }
    }

    function clickShare () {
        log.shareClick(log.id)
    }
 
    return(
        <div onClick={(e) => escClose(e)} className={`${stulePopShare.popupShare} ${postStore.openShare && stulePopShare.openSharePopup}`}>
            <div className={stulePopShare.popupShare__container}>
                <div className={stulePopShare.popupShare__container_link}>
                    <div className={stulePopShare.popupShare__copy_link_container}>
                        <CopyToClipboard text={log.log} onCopy={() => setCopy(true)}>
                            <button className={stulePopShare.button_copy_url}><Image className={stulePopShare.popupShare__copy_link_img} src={sharelink}/><p>{copy ? 'Copied' : 'Copy post link'}</p></button>
                        </CopyToClipboard>
                    </div>
                </div>
                <div className={stulePopShare.popupShare__main}>
                    <div className={stulePopShare.popupShare__main_container}>
                        <p>Share in social media:</p>
                        <ul className={stulePopShare.popupShare__main_lists}>
                            <li onClick={() => clickShare()} className={stulePopShare.popupShare__main_list1}>
                                <TwitterShareButton url={log.log} className={stulePopShare.popupShare__main_list1}>
                                    <Image src={shareTwitter}/>
                                    <p>Twitter</p>
                                </TwitterShareButton>
                            </li>
                            <li onClick={() => clickShare()} className={stulePopShare.popupShare__main_list2}>
                                <FacebookShareButton url={log.log} className={stulePopShare.popupShare__main_list2}>
                                    <Image src={shareFacebook}/>
                                    <p>Facebook</p>
                                </FacebookShareButton>
                                {/* <FacebookButton url={log.log} appId="384773476332427">
                                <img src={shareFacebook}/>
                                    <p>Facebook</p>
                                </FacebookButton> */}
                            </li>
                            <li onClick={() => clickShare()} className={stulePopShare.popupShare__main_list3}>
                                <PinterestShareButton url={log.log} media={log.img} className={stulePopShare.popupShare__main_list3}>
                                    <Image src={sharePinterest}/>
                                    <p>Pinterest</p>
                                </PinterestShareButton>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default PopupShare