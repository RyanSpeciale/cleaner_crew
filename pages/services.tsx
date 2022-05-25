import { Box, Heading, Tab, Text } from "grommet";
import styles from '../styles/services.module.css'
import { Tabs } from "grommet";
import Map from '../components/Map'





const services = () => {
    return (
        <div className={styles.container}>
            <Box justify="center" align="center">
                <Box direction="column" width='large' justify="center" basis="50%" className={styles.descriptionbox}>
                    <Text size="xlarge" alignSelf="center">Below is a description of our services broken down by category, as well as a map with the general area that we cover!</Text>
                </Box>
                <Box className={styles.tabsBox} width='large' direction="row-responsive" round="medium" height='medium' justify="center" border={{ size:'small', color: 'black' }}>
                    <Tabs>
                        <Tab title="Kitchen Area">

                        </Tab>
                        <Tab title="Living Area">
 
                        </Tab>
                    </Tabs>
                </Box>
                <Box margin={{ top: '0.5cm'}} border={{ size: 'medium', color: 'black' }} round="small"   >
                    <Map />
                </Box>
            </Box>
        </div>
    );
}

export default services;