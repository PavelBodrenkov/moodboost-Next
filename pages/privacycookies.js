import Header from '../components/Header';
import stylesMain from '../styles/MainContainer.module.scss';
import privacy from '../styles/privacy.module.scss';
import PopupAuth from '../components/PopupAuth/PopupAuth';

const Privacy = () => {
    return(
        <>
        <Header />
        <div id={stylesMain.app_moodboost} className={`container ${privacy.privacy_cookies}`}>
            <div className={privacy.privacy_cookies__container}>
                <h3>
                    Privacy Policy
                </h3>
                <p>
                    moodboost.me website administration is obliged to maintain your privacy on the Internet. We pay great attention 
                    to securing the data you provided to us. Our privacy policy is based on <a href="https://ec.europa.eu/info/law/law-topic/data-protection_en" target="_blank" rel="noreferrer noopener">the General Data Protection Regulation (GDPR) 
                    of the European Union.</a> The purposes, for which we collect your personal data are: improvement of our service, communication 
                    with visitors to this site, presenting the information requested by the user, , and for other actions listed below.
                </p>
                <h3>
                    Personal data storage and processing
                </h3>
                <p>
                    We collect and process your personal data only with your willing consent. With your permission, we can collect and process the 
                    following data: name and surname, e-mail address, . Collection and processing of your personal information is carried out in 
                    accordance with the laws of the European Union and the USA.
                </p>
                <h3>
                    Data storage, alteration, and removal
                </h3>
                <p>
                    The user, who has provided moodboost.me with their personal data, has the right for their alteration and removal, as well as the right to recall the 
                    agreement to data processing. Time, during which your personal data will be stored is: time the personal data is used that is necessary for the website’s 
                    main activity. After finishing with the processing of your personal data, the website’s administration will permanently delete it. To access your personal 
                    data, you can contact the administration on: moodboost.me@gmail.com. We will be able to pass your data to a third party only with your willing consent. If 
                    the data was transferred to a third party, which is not associated with our organization, we cannot perform any changes to that data.
                </p>
                <h3>
                    Processing of visiting technical data
                </h3>
                <p>
                    Records of your IP address, time of visit, browser settings, operational system and other technical information is saved in the database when you visit moodboost.me. 
                    This data is necessary for the correct display of the website’s content. It is impossible to identify the person of the visitor using this data.
                </p>
                <h3>
                    Children’s personal information
                </h3>
                <p>
                    If you are a parent or a legal guardian of an underage child, and you know that the child has provided us with their personal information without your consent, please contact us 
                    on: moodboost.me@gmail.com. It is forbidden to enter personal data of underage users without the agreement of parents or lawful guardians.
                </p>
                <h3>
                    Cookies processing
                </h3>
                <p>
                    We use cookie files for the correct display of the website’s content and for the convenience of browsing moodboost.me. They are small files, that are stored on your device. They help the 
                    website to remember information about you, such as in which language you use the website and which pages have you already opened. This information will be useful in the next visit. Thanks to 
                    cookie files, the website’s browsing becomes much more convenient. You can learn more about these files <a href="https://en.wikipedia.org/wiki/HTTP_cookie" target="_blank" rel="noreferrer noopener">here.</a> You can set up cookies reception and blocking in your browser yourself. Inability 
                    to receive cookie files may limit the functionality of the website.
                </p>
                <h3>
                    Processing of personal data by other services
                </h3>
                <p>
                    This website uses third-party online services, which perform data collecting, independent from us. Such services include: Facebook.com, .

                    Data collected by these services may be provided to other services within those organizations. They can use the data for advertising personalization of their own advertising network. You can learn about user agreements 
                    of those organizations on their websites. You can also refuse their collection of your personal data. For example, Google Analytics Opt-out Browser Add-on can be found <a href="https://tools.google.com/dlpage/gaoptout?hl=en" target="_blank" rel="noreferrer noopener">here.</a> We do not pass any personal data to other organizations 
                    or services, which are not listed in this privacy policy. As an exception, the collected data may be provided on a lawful request of state authorities, that are authorized to request such information.
                </p>
                <h3>
                    Links to other websites
                </h3>
                <p>
                    Our website moodboost.me may contain links to other websites, which are not under our control. We are not responsible for the content of these websites. We recommend you familiarize yourself with the privacy policy of every website that you 
                    visit, if such policy exists.
                </p>
                <h3>
                    Changes to the privacy policy
                </h3>
                <p>
                    From time to time, our website moodboost.me may update our privacy policy. We inform about any changes to the privacy policy, placed on this webpage. We are monitoring any changes in legislation, which is related to personal data in European Union and USA. 
                    If you have entered any of your personal data on our website, we will inform you about the changes in our privacy policy. If your personal data, and more specifically, your contact information was entered incorrectly, we will not be able to contact you.
                </p>
                <h3>
                    Feedback and final clauses
                </h3>
                <p>
                    You can contact the administration of moodboost.me regarding any questions related to privacy policy on: moodboost.me@gmail.com, or by filling a contact form specified in a corresponding section of this website. If you do not agree with this privacy 
                    policy, you cannot use the services of moodboost.me. In this case you should avoid visiting our website.
                </p>
            </div>
        </div>
        <PopupAuth />
        </>
    )
}

export default Privacy