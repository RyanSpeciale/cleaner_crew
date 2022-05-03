import { Footer, Text } from "grommet";
import styles from '../styles/companyFooter.module.css'

const CompanyFooter = () => {
    return (
        <div className={styles.company}>
            <Footer justify="center" align="center">
                <Text>
                    &copy; The Cleaner Crew {new Date().getFullYear()}
                </Text>
            </Footer>
        </div>
    );
};

export default CompanyFooter;