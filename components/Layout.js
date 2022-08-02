import Nav from "./Nav";
import Bottom from './Bottom';
import CompanyFooter from "./CompanyFooter";
import styles from '../styles/layout.module.scss'

const Layout = ({ children }) => {
    return (
        <>
            <Nav className={styles.nav} />
            <main className={styles.main}>{children}</main>
            <CompanyFooter className={styles.companyFooter} />
            <Bottom className={styles.bottom} />
        </>
    );
};

export default Layout;