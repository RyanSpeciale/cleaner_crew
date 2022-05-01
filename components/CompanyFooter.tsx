import { Footer, Text } from "grommet";

const CompanyFooter = () => {
    return (
        <div>
            <Footer justify="center" align="center">
                <Text>
                    &copy; The Cleaner Crew {new Date().getFullYear()}
                </Text>
            </Footer>
        </div>
    );
};

export default CompanyFooter;