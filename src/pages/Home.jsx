import About from "../components/About";
import Banner from "../components/Banner";
import ContactInfo from "../components/ContactInfo";
import Products from "../components/Products";
import Services from "../components/Services";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <ContactInfo></ContactInfo>
            <Products></Products>
        </div>
    );
};

export default Home;