import subscribeBtn from '../../public/image/subscribe.png';
import styleSignWeekly from '../../styles/signUpWeekly.module.scss';

const SignUpWeekly = () => {
    return(
        <>
        {/* <section className={styleSignWeekly.sign_up_weekly}> */}
            <form action="https://login.sendpulse.com/forms/simple/u/eyJ1c2VyX2lkIjo3NzE1ODI4LCJhZGRyZXNzX2Jvb2tfaWQiOjM4MTY0MiwibGFuZyI6InJ1In0=" method="post" className={styleSignWeekly.sign_up_weekly__form}>
               <h4 className={styleSignWeekly.sign_up_weekly__form_title}>Sign up for weekly moodboost</h4>
               <div className={styleSignWeekly.sign_up_weekly__container_input}>
                   <input className={styleSignWeekly.sign_up_weekly__form_input} type="email" placeholder="Enter E-mail" name="email"/>
                   <input type="hidden" name="sender" value="news@moodboost.me" />
                   <button className={styleSignWeekly.sign_up_weekly__form_button}>
                       Subscribe
                       <img src={subscribeBtn} />
                    </button>
               </div>
            </form>
        {/* </section> */}
        </>
    )
}

export default SignUpWeekly


