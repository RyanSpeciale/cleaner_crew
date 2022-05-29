import { Box, Heading, Tab, Text } from "grommet";
import styles from '../styles/services.module.css'
import { Tabs } from "grommet";
import Map from '../components/Map'





const services = () => {
    return (
        <div className={styles.container}>
            <Box justify="center" align="center">
                <Box direction="column" width='large' justify="center" basis="50%" className={styles.descriptionbox}>
                    <h3 className="font-serif text-2xl font-semibold">Below is a list of our services broken down by category, as well as a map of the area we cover</h3>
                </Box>
                <Box className={styles.tabsBox} width='large' direction="row-responsive" round="medium" height='medium' gap="medium" justify="center" border={{ size:'small', color: 'black' }}>
                    <Tabs>
                        <Tab title="Kitchen Area">
                            <ul className="list-disc">
                                <li className="text-xl">Kitchen includes cleaning and disinfecting</li>
                            </ul>
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