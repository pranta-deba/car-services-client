import { useEffect, useState } from "react";
import Card from "./Card";

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div className=" px-3 md:px-0">
            <div className="text-center my-10">
                <h4 className="text-[#FF3811] text-xl font-semibold">Service</h4>
                <h1 className="text-4xl font-bold">Our Service Area</h1>
                <p className="w-1/2 mx-auto text-[#737373] text-sm">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center">
                {
                    services.map(service => (
                        <Card key={service._id} service={service}></Card>
                    ))
                }

            </div>
            <div className="text-center my-10">
            <a className="btn border-2 border-[#FF3811] text-[#FF3811]  bg-transparent hover:bg-[#FF3811] hover:text-white text-lg font-semibold">More Services</a>
            </div>
        </div>
    );
};

export default Services;