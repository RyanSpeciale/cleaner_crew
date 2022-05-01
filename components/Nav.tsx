import { Header } from "grommet";
import { Button } from "grommet";
import { Text } from "grommet";

const Nav: React.FunctionComponent = () => {
    return (
        <div>
            <Header align="center" justify='center'>
                <Text>The Cleaner Crew</Text>
                <Button primary label='Home'/>
                <Button primary label='Get A Quote'/>
                <Button primary label='Services'/>
                <Button primary label='About Us' />
            </Header>
        </div>
    );
};

export default Nav;
