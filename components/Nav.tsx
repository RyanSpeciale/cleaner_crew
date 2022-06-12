import { Header } from "grommet";
import { Button } from "grommet";
import { Text } from "grommet";
import { Box } from "grommet";
import styles from '../styles/nav.module.css';

const Nav: React.FunctionComponent = () => {
    return (
        <div>
            <Box direction='row-responsive' gap="medium" align='center' alignContent="center" justify="center" className={styles.titleContainer}>
                <Text className={styles.title} size='4xl'>The Cleaner Crew</Text>
                <Text className={styles.contact} size='large'>Call or Text (262) 612-0397 </Text>   
            </Box>
            <Header align="center" justify='center'>
                <Button primary label='Home' href="/"/>
                <Button primary label='Get A Free Quote' href="/quote"/>
                <Button primary label='Services' href="/services"/>
                <Button primary label='About Us' href="/about"/>
                <Button primary label='Reviews' href="/reviews"/>
            </Header>
        </div>
    );
};

export default Nav;
