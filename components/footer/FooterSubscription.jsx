import style from "@/styles/Footer.module.css"

const FooterSubscription = () => {
    return (
        <div className={style.footerTop}>
            <div className={style.subscriptionSection}>
                <h4>BE THE FIRST TO KNOW</h4>
                <p>Sign up for updates from mettā muse</p>
                <div className={style.inputWrapper}>
                    <input type="text" placeholder="Enter your e-mail..." />
                    <button>SUBSCRIBE</button>
                </div>
            </div>
            <div className={style.contactSection}>
                <div className={style.contactDetails}>
                    <h4>CONTACT US</h4>
                    <p>+44 221 133 5360</p>
                    <p>customercare@mettamuse.com</p>
                </div>
                <div className={style.currencySection}>
                    <h4>CURRENCY</h4>
                    <div className={style.currency}>
                        <img src="/icons/usa.svg" alt="usa flag" />
                        <h6>&#10022; USA</h6>
                    </div>
                    <p className={style.message}>
                        Transactions will be completed in Euros and a currency reference is
                        available on hover.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default FooterSubscription