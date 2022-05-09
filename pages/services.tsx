import { Box, Heading, Tab } from "grommet";
import { CardFooter } from "grommet";
import { Form } from "grommet";
import { Card } from "grommet";
import { Text } from "grommet";
import { Menu } from "grommet";
import { CardHeader } from "grommet";
import { CardBody } from "grommet";
import styles from '../styles/services.module.css'
import { Tabs } from "grommet";



const services = () => {
    return (
        <div>
            <Box justify="center" align="center">
                <Heading  size="small">Below is our services broken down by category for your convienience! If you need a service not listed, just reach out and we will try and accommodate!</Heading>
            </Box>
            <Box className={styles.mainBox} direction='row-responsive' round='medium' justify="center">
                <Tabs alignControls="center">
                    <Tab title='Residential'>
                        <Box className={styles.residential} round='medium' border={{ size: 'small', color: 'black', style: 'solid'}} elevation="medium" width='24cm' height='medium'>
                            <Text>We offer</Text>
                        </Box>
                    </Tab>
                    <Tab title='Commercial'>
                        <Box className={styles.commercial} round='medium' elevation="medium" width='24cm' height='medium'>
                            
                        </Box>
                    </Tab>
                </Tabs>
            </Box>
        </div>
    );
};

export default services;