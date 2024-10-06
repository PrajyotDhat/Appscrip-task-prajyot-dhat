import styles from "@/styles/NavBar.module.css"

const NavBar = () => {

    const navLinks = ["SHOPS", "SKILLS", "STORIES", "ABOUT US", "CONTACT"];
    const navIcon = ["search", "heart", "cart", "profile"];
    const styleClassName = (...className) => className.join(" ");

    return (
        <div className={styles.navHeader}>
            <div className={styles.topBannerWrapper}>
                <div className={styleClassName(styles.wrapperContainer, styles.bannerContent)}>
                    <div className={styleClassName(styles.bannerText, styles.visible)}>
                        <img
                            src={"/icons/squareIcon.svg"}
                            alt="squreIcon"
                            width={16}
                            height={16}
                        />
                        <p>Lorem ipsum dolor.</p>
                    </div>
                    <div className={styleClassName(styles.bannerText, styles.visible)}>
                        <img
                            src={"/icons/squareIcon.svg"}
                            alt="squreIcon"
                            width={16}
                            height={16}
                        />
                        <p>Lorem ipsum dolor.</p>
                    </div>
                    <div className={styleClassName(styles.bannerText)}>
                        <img
                            src={"/icons/squareIcon.svg"}
                            alt="squreIcon"
                            width={16}
                            height={16}
                        />
                        <p>Lorem ipsum dolor.</p>
                    </div>
                </div>
            </div>
            <div className={styleClassName(styles.columnFlex, styles.wrapperContainer)}>
                <div className={styleClassName(styles.mainNavBar)}>
                    <div className={styles.brandIcon}>
                        <img
                            src="/icons/menu.svg"
                            alt="menu"
                            width={20}
                            height={20}
                            className={styles.menuIcon}
                        />
                        <img
                            src="icons/companyIcon.svg"
                            alt="LogoIcon"
                            width={35.61}
                            height={35.61}
                        />
                    </div>
                    <h1 className={styles.brandLogo}>LOGO</h1>
                    <div className={styles.iconGroup}>
                        {navIcon.map((iconName, i, arr) => {
                            return (
                                <img
                                    src={`/icons/${iconName}.svg`}
                                    alt={iconName}
                                    width={24}
                                    height={24}
                                    key={i}
                                    className={
                                        i > arr.length - 2 ? `${styles.visible}` : undefined
                                    }
                                />
                            );
                        })}
                        <span className={styles.visible}>
                            ENG{" "}
                            <img
                                src="/icons/downArrow.svg"
                                alt="downArrow"
                                width={16}
                                height={16}
                            />
                        </span>
                    </div>
                </div>
                <div className={styleClassName(styles.navLink)}>
                    {navLinks.map((links, i) => {
                        return (
                            <a href="#" key={i}>
                                {links}
                            </a>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default NavBar