import { useState } from 'react'
import style from "@/styles/Footer.module.css"

const FooterNavigation = () => {

    const [isActiveFooter, setIsActiveFooter] = useState(true);
    const [isActiveLink, setIsActiveLink] = useState(true);

    const handleFooterActive = () => {
        setIsActiveFooter(!isActiveFooter);
    };

    const handleQuickActive = () => {
        setIsActiveLink(!isActiveLink);
    };

    const footerLinks = ["About Us", "Stories", "Artisans", "Boutiques", "Contact Us", "EU Compliances Docs"];
    const quickLinks = ["Orders & Shipping", "Join/Login as a Seller", "Payment & Pricing", "Return & Refunds", "FAQs Us", "Privacy Policy", "Terms & Conditions"];

    return (
        <div className={style.lowerFooter}>
            <div className={style.footerLinks}>
                <h4 onClick={handleFooterActive}>
                    mettā muse
                    {isActiveFooter ? (
                        <span>
                            <img src="/icons/upArrowWhite.svg" />
                        </span>
                    ) : (
                        <span>
                            <img src="/icons/downArrowWhite.svg" />
                        </span>
                    )}
                </h4>
                {isActiveFooter && footerLinks.map((link, index) => (
                    <h5 key={index}>{link}</h5>
                ))}
            </div>
            <div className={style.quickLinks}>
                <h4 onClick={handleQuickActive}>
                    QUICK LINKS
                    {isActiveLink ? (
                        <span>
                            <img src="/icons/upArrowWhite.svg" />
                        </span>
                    ) : (
                        <span>
                            <img src="/icons/downArrowWhite.svg" />
                        </span>
                    )}
                </h4>
                {
                    isActiveLink && quickLinks.map((link, index) => (
                        <h5 key={index}>{link}</h5>
                    ))
                }
            </div>
            <div className={style.folloUsSeciton}>
                <div className={style.folloUs}>
                    <h4>FOLLOW US</h4>
                    <div className={style.socialLink}>
                        <img src="/icons/insta.svg" alt="insta flag" />
                        <img src="/icons/linkedIn.svg" alt="linkedIn flag" />
                    </div>
                </div>
                <div className={style.folloUs}>
                    <h4>mettā muse ACCEPTS</h4>
                    <div className={style.socialLink}>
                        <img src="/icons/media.svg" alt="media flag" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterNavigation

