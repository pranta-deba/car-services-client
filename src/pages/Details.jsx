import { useLoaderData, useNavigate } from "react-router-dom";
import img1 from "../assets/images/checkout/checkout.png";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import toast from 'react-hot-toast';


const Details = () => {
    const service = useLoaderData();
    const { user } = useContext(AuthContext);
    const [startDate, setStartDate] = useState(new Date());
    const { _id, title, description, facility, img, price } = service || {};
    const navigate = useNavigate();


    const handleCheckOut = async e => {
        e.preventDefault();
        const first_name = e.target.first_name.value;
        const last_name = e.target.last_name.value;
        const customer_email = e.target.customer_email.value;
        const customer_number = e.target.customer_number.value;
        const message = e.target.message.value;

        const order = {
            customer_name: first_name + " " + last_name,
            customer_email,
            customer_number,
            message,
            status: 'pending',
            order_date: startDate,
            service_id: _id,
            service_title: title,
            service_img: img,
            service_price: parseFloat(price),
        };

        try {
            const { data } = await axios.post(
                `${import.meta.env.VITE_API_URL}/orders`,
                order
            )
            if (data.insertedId) {
                toast.success('ordered Successfully!')
                e.target.reset();
                navigate("/service")
            }
        } catch (err) {
            console.log(err)
        }
    }



    return (
        <div className="my-12 mx-4">
            <div className="mb-12 relative w-full bg-gradient-to-r from-[#151515] to-[#15151500] rounded-lg">
                <img src={img1} className="w-full object-cover max-h-[200px]" />
                <div className="bg-gradient-to-r from-[#151515] to-[#15151500] h-full absolute left-0 right-0 bottom-0 text-white flex items-center">
                    <h1 className="md:text-5xl font-bold mx-12 md:mx-28">Service Details</h1>
                </div>
                <div className="hidden md:flex md:flex-col absolute bottom-0 left-1/2 transform -translate-x-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="296" height="50" viewBox="0 0 296 50" fill="none">
                        <path d="M296 49.3H0L27.8 0H268.3L296 49.3Z" fill="#FF3811" />
                    </svg>
                    <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white w-fit text-sm">Home/Service Details</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-6 gap-9 justify-center">
                <div className="md:col-span-4 space-y-8">
                    <img src={img} alt="" />
                    <h1 className="text-3xl font-bold">{title}</h1>
                    <p className="text-slate-400">{description}</p>
                    <div className="grid md:grid-cols-2 justify-center items-center gap-6 ">
                        {
                            facility?.map((item, index) => (
                                <div key={index} className="bg-[#F3F3F3] rounded-xl border-y-2 border-[#FF3811]">
                                    <div className="p-8">
                                        <h1 className="text-xl font-bold">{item?.name}</h1>
                                        <p className="text-slate-400">{item?.details.slice(0, 100)}...</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="space-y-3 my-8">
                        <h1 className="text-3xl font-bold">3 Simple Steps to Process</h1>
                        <p className="text-slate-400">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text</p>
                    </div>
                </div>
                <div className="md:col-span-2">
                    <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                        <h2 className="text-2xl text-[#FF3811] font-semibold capitalize dark:text-white">Check Out</h2>
                        <form onSubmit={handleCheckOut}>
                            <div className="grid grid-cols-1 gap-6 mt-4">
                                <div>
                                    <label className="text-gray-700 dark:text-gray-200" htmlFor="username">First Name</label>
                                    <input id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" name="first_name" required />
                                </div>

                                <div>
                                    <label className="text-gray-700 dark:text-gray-200" htmlFor="emailAddress">Last Name</label>
                                    <input id="emailAddress" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" name="last_name" required />
                                </div>

                                <div>
                                    <label className="text-gray-700 dark:text-gray-200" htmlFor="password">Your Phone</label>
                                    <input id="password" type="number" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" name="customer_number" required />
                                </div>

                                <div>
                                    <label className="text-gray-700 dark:text-gray-200" htmlFor="passwordConfirmation">Your Email</label>
                                    <input disabled defaultValue={user?.email} id="passwordConfirmation" type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" name="customer_email" required />
                                </div>
                                <div>
                                    <label className="text-gray-700 dark:text-gray-200" htmlFor="passwordConfirmation">Date</label> <br />
                                    <DatePicker className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" selected={startDate} onChange={(date) => setStartDate(date)} />
                                </div>
                                <div>
                                    <label className="text-gray-700 dark:text-gray-200" htmlFor="passwordConfirmation">Your Message</label>
                                    <textarea name="message" id="" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required></textarea>
                                </div>
                            </div>

                            <div className="flex justify-end mt-6">
                                <button type="submit" className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-[#FF3811] rounded-md hover:bg-[#FF3811] focus:outline-none focus:bg-[#FF3811]">Order Confirm</button>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Details;