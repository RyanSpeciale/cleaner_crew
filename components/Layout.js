import Nav from "./Nav";
import Bottom from './Bottom';
import CompanyFooter from "./CompanyFooter";

const Layout = ({ children }) => {
    return (
        <>
            <Nav />
            <main>{children}</main>
            <CompanyFooter />
            <Bottom />
        </>
    );
};

export default Layout;