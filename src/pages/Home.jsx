import About from "../components/About";
import Banner from "../components/Banner";
import ContactInfo from "../components/ContactInfo";
import Features from "../components/Features";
import Products from "../components/Products";
import Services from "../components/Services";
import Team from "../components/Team";
import Testimonial from "../components/Testimonial";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <ContactInfo></ContactInfo>
            <Products></Products>
            <Team></Team>
            <Features></Features>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;