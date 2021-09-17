import styleAuth from '../../styles/PopupAuth.module.scss';
import HeadPers from '../../public/image/pers-footer-2.svg'
import HeadLogo from '../../public/image/logo-footer.svg'
import viewsPassword from '../../public/image/views-password.svg'
import React, {useEffect, useRef, useState} from 'react';
import { observer } from 'mobx-react-lite';
import FacebookLogin from 'react-facebook-login';
import FacebookService from '../../http/facebookAPI';
import {CSSTransition} from 'react-transition-group'
import userStore from '../../store/userStore';
import Image from 'next/image'

const PopupAuth = observer(() => {

const views = useRef(null)
const[loginIn, setLoginIn] = useState(true)
const[signUp, setSignUp] = useState(false)
const[forgitPass, setForgotPass] = useState(false)
const[text, setText] = useState('')
const [textError, setTextError] = useState("The field cannot be empty")
const [textDirty, setTextDirty] = useState(false)
const[email, setEmail] = useState('')
const [emailError, setEmailError] = useState("The field cannot be empty")
const [emailDirty, setEmailDirty] = useState(false)
const[password, setPassword] = useState('')
const [passwordError, setPasswordError] = useState("The field cannot be empty")
const [passwordlDirty, setPasswordDirty] = useState(false)
const[verifyPassword, setVerifyPassword] = useState('')
const[verifyPasswordError, setVerifyPasswordError] = useState("")
const [verifyPasswordDirty, setVerifyPasswordDirty] = useState(true)
const [formValid, setFormValid] = useState(false)
const [checked, setChecked] = useState(false);

    useEffect (() => {
        if(emailError || passwordError || textError || verifyPasswordDirty || !checked) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    },[emailError, passwordError, textError, verifyPasswordDirty, checked])

    const textHendler = (e) => {
        setText(e.target.value)
        if(e.target.value === '') {
            setTextError("The field cannot be empty")
        } else {
            setTextError("")
        }
    }

    const emailHendler = (e) => {
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(String(e.target.value).toLowerCase())) {
            setEmailError("invalid email")
            if(!e.target.value) {
                setEmailError("The field cannot be empty")
            }
        }else {
            setEmailError("")
        }
    }

    const passwordHendler = (e) => {
        setPassword(e.target.value)
        if(e.target.value.length < 6) {
            setPasswordError("Password is too short (minimum is 6 characters)")
            if(!e.target.value) {
                setPasswordError("The field cannot be empty")
            }
        } else {
            setPasswordError("")
        }
    }

    const verifyPasswordHendler = (e) => {
        setVerifyPassword(e.target.value)
    }

    useEffect(() => {
    if( password !== verifyPassword && verifyPassword.length > 1) {
        setVerifyPasswordError('Passwords dont match')
        setVerifyPasswordDirty(true)
    } else if (verifyPassword.length <= 1) {
        setVerifyPasswordDirty(true)
    } else {
        setVerifyPasswordError('')
        setVerifyPasswordDirty(false)
    }
        
    }, [password, verifyPassword, verifyPasswordError])

    const blurHendler = (e) => {
        switch (e.target.name) {
            case 'text':
                setTextDirty(true)
                break
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
            case 'verifyPassword':
                setVerifyPasswordDirty(true)
                break
        }
    }

    //Запрос регистрации
    function hendleSubmin (e) {
        e.preventDefault()
        userStore.registration(text, email, password)
        chengeLogin()
        userStore.setUserError('')
    }

    //Запрос на вход
    function hendleSubmitLogin (e) {
        e.preventDefault()
        userStore.login(email, password)
        // Router.push('/')
        userStore.setOpenAuth(false)
    }

    const responseFacebook = async (response) => {
        try {
            const response1 = await FacebookService.lognFacebook(response.accessToken, response.userID)
            localStorage.setItem('userToken', response1.data.accessToken)
            userStore.setUser(response1.data.user)
            userStore.setIsAuth(true)
            userStore.setOpenAuth(false)
        } catch (e) {
            console.log(e.response1?.data?.message)
        }
    }


    //Проверка токена
 useEffect(() => {
    if(localStorage.getItem("userToken")) {
        userStore.checkAuth()
    }
 }, [])

    function targetViews () {
        if(views.current.type === 'password') {
            views.current.type = 'text';
        } else {
            views.current.type = 'password';
        }
    }
    function chengeLogin () {
        setLoginIn(true)
        setSignUp(false)
        setForgotPass(false)
        setPassword('')
        setEmail('')
        userStore.setUserError('')
        setEmailDirty(false)
        setEmailError('')
    }

    function chengeSignUp () {
        setLoginIn(false)
        setSignUp(true)
        setForgotPass(false)
        setText('')
        setEmail('')
        setVerifyPassword('')
        setPassword('')
        userStore.setUserError('')
        setVerifyPasswordError('')
    }

    function chengeForgotPassword () {
        setForgotPass(true)
        setLoginIn(false)
        setSignUp(false)
    }

    function handleChange() {
		setChecked(!checked);
	}

    function escClose(event) {
        if (event.target.classList.contains("alert-enter-done")) {
            userStore.setOpenAuth(false)
            setText('')
            setEmail('')
            setVerifyPassword('')
            setPassword('')
            setTextError('')
            setEmailError('')
            setPasswordError('')
            setVerifyPasswordError('')
            setLoginIn(true)
            setSignUp(false)
            setForgotPass(false)
        }
    }

    return(
        <CSSTransition in={userStore.openAuth} classNames='alert' timeout={20} unmountOnExit>
        <div onClick={(e) => escClose(e)}>
            <div className={`${styleAuth.popup_auth__content} ${signUp && styleAuth.popup_signUp}`}>
                <div className={`${styleAuth.popup_auth__main} ${signUp && styleAuth.main_signUp} ${forgitPass && styleAuth.main_forgot}`}>
                    <div className={styleAuth.head}>
                        <div className={styleAuth.head__container}>
                            <Image src={HeadPers} className={styleAuth.head__pers}/>
                            <Image src={HeadLogo} className={styleAuth.head__logo}/>
                        </div>
                        <div className={styleAuth.head__buttons}>
                            <button onClick={() => chengeLogin()} type="button" className={styleAuth.head__buttons_log}>Log in</button>
                            <button onClick={() => chengeSignUp()} type="button" className={styleAuth.head__buttons_sign}>Sign Up</button>
                        </div>
                        <div className={styleAuth.facebook_button}>
                        <FacebookLogin
                            appId={process.env.FACEBOOK_ID}
                            autoLoad={false}
                            fields="id,name,picture,email"
                            callback={responseFacebook} />
                        </div>
                    </div>
                   {loginIn && 
                    <form onSubmit={(e) => hendleSubmitLogin(e)} className={styleAuth.popup_auth__form} autoComplete="off">
                        {userStore.userError ? <span className={styleAuth.register__error}>* {userStore.userError}</span> : ""}
                        <div className={styleAuth.popup_auth__form_content}>
                            <div className={styleAuth.popup_auth__form_email_block}>
                                <p className={styleAuth.popup_auth__form_email_title}>Username or E-mail</p>
                                <input onChange={(e) => emailHendler(e)} className={styleAuth.popup_auth__form_email_input} type="email" placeholder="Enter E-mail"/>
                            </div>
                            <div>
                                <div className={styleAuth.popup_auth__form_passwords}>
                                    <p className={styleAuth.popup_auth__form_email_title}>Password</p>
                                </div>
                                <div className={styleAuth.popup_auth__form_passwords_block}>
                                    <input onChange={(e) => passwordHendler(e)} className={styleAuth.popup_auth__form_password_input} type="password" ref={views} placeholder="password"/>
                                    <Image src={viewsPassword} className={styleAuth.popup_auth__form_passwords_views} onClick={() => targetViews()}/>
                                </div>
                            </div>
                        </div>
                        <button className={styleAuth.popup_auth__form_button}>Go to profile</button>
                    </form>}
                    {signUp &&
                        <form onSubmit={(e) => hendleSubmin(e)} className={styleAuth.popup_auth__form} autoComplete="off">
                             {(textDirty && textError) && <span className={styleAuth.register__error}>* {textError}</span>}
                             {(emailDirty && emailError) && <span className={styleAuth.register__error}>* {emailError}</span>}
                             {(passwordlDirty && passwordError) && <span className={styleAuth.register__error}>* {passwordError}</span>}
                             {(verifyPasswordError) && <span className={styleAuth.register__error}>* {verifyPasswordError}</span>}
                             {userStore.userError ? <span className={styleAuth.register__error}>* {userStore.userError}</span> : ""}
                            <div className={styleAuth.popup_auth__form_content_sign}>
                                <div className={styleAuth.popup_auth__form_email_block}>
                                    <p  className={styleAuth.popup_auth__form_email_title}>Username</p>
                                    <div className={styleAuth.popup_auth__form_text_block}>
                                        <input onBlur={(e) => blurHendler(e)} onChange={(e) => textHendler(e)} className={styleAuth.popup_auth__form_email_input} name="text" type="text" placeholder="user name" value={text}/>
                                        {/* <Image src={textDirty ? ((textDirty && textError) ?  ErrorStatus: GoodStatus) : "" } className={styleAuth.popup_auth__form_good_status}/> */}
                                    </div>
                                </div>
                                <div className={styleAuth.popup_auth__form_email_block}>
                                    <p className={styleAuth.popup_auth__form_email_title}>Username or E-mail</p>
                                    <div className={styleAuth.popup_auth__form_text_block}>
                                        <input onBlur={e => blurHendler(e)} onChange={(e) => emailHendler(e)} className={styleAuth.popup_auth__form_email_input} name="email" type="email" placeholder="email" value={email}/>
                                        {/* <Image src={emailDirty ? ((emailDirty && emailError) ?  ErrorStatus: GoodStatus) : "" } className={styleAuth.popup_auth__form_good_status}/> */}
                                    </div>
                                </div>
                                <div>
                                    <div className={styleAuth.popup_auth__form_passwords}>
                                        <p className={styleAuth.popup_auth__form_email_title}>Password</p>
                                    </div>
                                    <div className={styleAuth.popup_auth__form_passwords_block}>
                                        <input onBlur={e => blurHendler(e)} onChange={(e) => passwordHendler(e)} className={styleAuth.popup_auth__form_password_input} name="password" type="password" ref={views} placeholder="password" value={password}/>
                                        <Image src={viewsPassword} className={styleAuth.popup_auth__form_passwords_views} onClick={() => targetViews()}/>
                                    </div>
                                </div>
                                <div className={styleAuth.popup_auth__form_verify_password}>
                                    <p className={styleAuth.popup_auth__form_email_title}>Verify password</p>
                                    <div className={styleAuth.popup_auth__form_passwords_block}>
                                        <input onChange={(e) => verifyPasswordHendler(e)} className={`${styleAuth.popup_auth__form_password_input} verifyPassword`} type="password" name="verifyPassword" placeholder="6+ characters" value={verifyPassword}/>
                                        {/* <img src={(verifyPassword.length > 1) ? (verifyPasswordError ?  ErrorStatus : GoodStatus) : ''} className={styleAuth.popup_auth__form_good_status}/> */}
                                    </div>
                                </div>
                                <div className={styleAuth.popup_auth__form_checkbox}>
                                    <input id="check" type="checkbox" checked={checked} onChange={() => handleChange()} className={styleAuth.popup_auth__form_input_checkbox}/>
                                    <label htmlFor="check"></label>
                                    <p className={styleAuth.popup_auth__form_checkbox_text}>
                                        Creating an account means you’re okay with our&nbsp;
                                        {/* <Link id={styleAuth.checkbox_link_signup}onClick={() => userStore.setOpenAuth(false)} to={PRIVACYCOOKIES_ROUTE}>Privacy Policy</Link> */}
                                        </p>
                                </div>
                             </div>
                        <button disabled={!formValid} className={`${styleAuth.popup_auth__form_button} ${!formValid && styleAuth.disabled}`}>Create account</button>
                    </form>
                    }
                    {forgitPass &&
                    <form className={`${styleAuth.popup_auth__form} ${forgitPass && styleAuth.form_forgot}`} autoComplete="off">
                        <div className={styleAuth.popup_auth__form_content}>
                            <p className={styleAuth.popup_auth__form_forgot_text}>Forgot Password? <span>Enter the email address you used</span> when you joined and <span>we’ll 
                                send you instructions</span> to reset your password.</p>
                            <div className={`${styleAuth.popup_auth__form_email_block} ${styleAuth.popup_auth__form_email_block_forgot}`}>
                                <p className={styleAuth.popup_auth__form_email_title}>E-mail adress</p>
                                <input className={styleAuth.popup_auth__form_email_input} type="email" placeholder="email"/>
                            </div>
                        </div>
                        <button className={`${styleAuth.popup_auth__form_button} ${forgitPass && styleAuth.form_button_forgot}`}>Send Reset Insructions</button>
                    </form>
                    }
                </div>
            </div>
        </div>
        </CSSTransition>
    )
})

export default PopupAuth