import { Anchor, Text } from "grommet";
import { Footer } from "grommet";
import { Github } from "grommet-icons";
import { Twitter } from "grommet-icons";



/**This website is free of charge as long as my name
 * and social links stay in this Footer componenet
 * if you would like to remove my name and social links
 * please email me at difficultoctet@gmail.com to discuss
 * pricing. Otherwise, the website will remain
 * free of charge. Thank You!
 */

const Bottom: React.FunctionComponent = () => {
    return (
        <div>
            <Footer justify="center" align="center" gap="xsmall">
                <Text>Coded with <span role='img' aria-label="Heart Emoji">💗</span> by Ryan Speciale.</Text>
                <Anchor icon={<Github/>} href="" />
                <Anchor icon={<Twitter/>} href="" />
            </Footer>
        </div>
    );
};

export default Bottom;
