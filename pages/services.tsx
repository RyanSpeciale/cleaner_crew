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
        <div className={styles.container}>
            <Box justify="center" align="center">
                <Box className={styles.titleBox} width='24cm' pad='medium' round="medium" height='medium' justify="center" border={{ size:'small', color: 'red' }}>
                    <Heading size="small" textAlign="center">
                        We offer both residential and commercial cleaning services, they are broken down by category below. If you need a service not listed below, just reach out! We also have a map showing the areas around Kenosha that we serve.
                    </Heading>
                </Box>
                <Box className={styles.tabsBox} width='large' direction="row-responsive" round="medium" height='medium' justify="center" border={{ size:'small', color: 'red' }}>
                    <Tabs>
                        <Tab title="Kitchen Area">

                        </Tab>
                        <Tab title="Living Area">
 
                        </Tab>
                    </Tabs>
                </Box>
                <Box border={{ size: 'small', color: 'red' }}>

                </Box>
            </Box>
        </div>
    );
};

export default services;