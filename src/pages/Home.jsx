import About from "../components/About";
import Banner from "../components/Banner";
import ContactInfo from "../components/ContactInfo";
import Products from "../components/Products";
import Services from "../components/Services";
import Team from "../components/Team";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <ContactInfo></ContactInfo>
            <Products></Products>
            <Team></Team>
        </div>
    );
};

export default Home;