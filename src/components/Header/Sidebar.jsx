import styles from './Sidebar.module.css';
import logo from './../../assets/logo.png';
import home from './../../assets/home.png';
import profile from './../../assets/profile.png';
import search from './../../assets/search.png';
import like from './../../assets/like.png';
import plus from './../../assets/plus.png';
import settings from './../../assets/setting.png';


const Sidebar = () => {
    return (<div className={styles.sidebar}>

        <div className={styles.logo}>
            <a href="/" className={styles.logoLink}>
                <img className={styles.logo} src={logo} alt=""/>
            </a>
        </div>
        <nav className={styles.navigation}>
            <a href="/home">
                <img className={styles.navIcon} src={home} alt=""/>
            </a>
            <a href="/search">
                <img className={styles.navIcon} src={search} alt=""/>
            </a>
            <a href="/add">
                <img className={styles.navIcon} src={plus} alt=""/>
            </a>
            <a href="/likes">
                <img className={styles.navIcon} src={like} alt=""/>
            </a>
            <a href="/profile">
                <img className={styles.navIcon} src={profile} alt=""/>
            </a>
        </nav>

        <div className={styles.settings} title="Настройки">
            <img className={styles.navIcon} src={settings} alt=""/>
        </div>
    </div>);
};

export default Sidebar;