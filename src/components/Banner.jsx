import img1 from "../assets/images/banner/1.jpg"
import img2 from "../assets/images/banner/2.jpg"
import img3 from "../assets/images/banner/3.jpg"
import img4 from "../assets/images/banner/4.jpg"
import img5 from "../assets/images/banner/5.jpg"
import img6 from "../assets/images/banner/6.jpg"

const Banner = () => {
    return (
        <div className="carousel w-full max-h-[600px] rounded-lg ">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full object-cover" />
                <div className="bg-gradient-to-r from-[#151515] to-[#15151500] h-full absolute space-y-5  left-0 right-0 bottom-0 text-white flex flex-col justify-center px-8 md:px-24">
                    <h1 className="font-bold text-2xl md:text-6xl">Affordable <br /> Price For Car <br /> Servicing</h1>
                    <p className="hidden md:flex">There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                    <div className="flex flex-wrap gap-3">
                        <div className="flex gap-3 flex-col md:flex-row">
                            <button className="btn btn-sm md:btn-md border-none outline-none bg-[#FF3811] text-white hover:text-black">Discover More</button>
                            <button className="btn btn-sm md:btn-md bg-transparent text-white hover:text-black">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide6" className="btn btn-sm md:btn-md btn-circle border-none outline-none hover:text-white hover:bg-[#FF3811]">❮</a>
                    <a href="#slide2" className="btn btn-sm md:btn-md btn-circle border-none outline-none hover:text-white hover:bg-[#FF3811]">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full object-cover" />
                <div className="bg-gradient-to-r from-[#151515] to-[#15151500] h-full absolute space-y-5  left-0 right-0 bottom-0 text-white flex flex-col justify-center px-8 md:px-24">
                    <h1 className="font-bold text-2xl md:text-6xl">Affordable <br /> Price For Car <br /> Servicing</h1>
                    <p className="hidden md:flex">There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                    <div className="flex flex-wrap gap-3">
                        <div className="flex gap-3 flex-col md:flex-row">
                            <button className="btn btn-sm md:btn-md border-none outline-none bg-[#FF3811] text-white hover:text-black">Discover More</button>
                            <button className="btn btn-sm md:btn-md bg-transparent text-white hover:text-black">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-sm md:btn-md btn-circle border-none outline-none hover:text-white hover:bg-[#FF3811]">❮</a>
                    <a href="#slide3" className="btn btn-sm md:btn-md btn-circle border-none outline-none hover:text-white hover:bg-[#FF3811]">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full object-cover" />
                <div className="bg-gradient-to-r from-[#151515] to-[#15151500] h-full absolute space-y-5  left-0 right-0 bottom-0 text-white flex flex-col justify-center px-8 md:px-24">
                    <h1 className="font-bold text-2xl md:text-6xl">Affordable <br /> Price For Car <br /> Servicing</h1>
                    <p className="hidden md:flex">There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                    <div className="flex flex-wrap gap-3">
                        <div className="flex gap-3 flex-col md:flex-row">
                            <button className="btn btn-sm md:btn-md border-none outline-none bg-[#FF3811] text-white hover:text-black">Discover More</button>
                            <button className="btn btn-sm md:btn-md bg-transparent text-white hover:text-black">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-sm md:btn-md btn-circle border-none outline-none hover:text-white hover:bg-[#FF3811]">❮</a>
                    <a href="#slide4" className="btn btn-sm md:btn-md btn-circle border-none outline-none hover:text-white hover:bg-[#FF3811]">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full object-cover" />
                <div className="bg-gradient-to-r from-[#151515] to-[#15151500] h-full absolute space-y-5  left-0 right-0 bottom-0 text-white flex flex-col justify-center px-8 md:px-24">
                    <h1 className="font-bold text-2xl md:text-6xl">Affordable <br /> Price For Car <br /> Servicing</h1>
                    <p className="hidden md:flex">There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                    <div className="flex flex-wrap gap-3">
                        <div className="flex gap-3 flex-col md:flex-row">
                            <button className="btn btn-sm md:btn-md border-none outline-none bg-[#FF3811] text-white hover:text-black">Discover More</button>
                            <button className="btn btn-sm md:btn-md bg-transparent text-white hover:text-black">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-sm md:btn-md btn-circle border-none outline-none hover:text-white hover:bg-[#FF3811]">❮</a>
                    <a href="#slide5" className="btn btn-sm md:btn-md btn-circle border-none outline-none hover:text-white hover:bg-[#FF3811]">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img src={img5} className="w-full object-cover" />
                <div className="bg-gradient-to-r from-[#151515] to-[#15151500] h-full absolute space-y-5  left-0 right-0 bottom-0 text-white flex flex-col justify-center px-8 md:px-24">
                    <h1 className="font-bold text-2xl md:text-6xl">Affordable <br /> Price For Car <br /> Servicing</h1>
                    <p className="hidden md:flex">There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                    <div className="flex flex-wrap gap-3">
                        <div className="flex gap-3 flex-col md:flex-row">
                            <button className="btn btn-sm md:btn-md border-none outline-none bg-[#FF3811] text-white hover:text-black">Discover More</button>
                            <button className="btn btn-sm md:btn-md bg-transparent text-white hover:text-black">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-sm md:btn-md btn-circle border-none outline-none hover:text-white hover:bg-[#FF3811]">❮</a>
                    <a href="#slide6" className="btn btn-sm md:btn-md btn-circle border-none outline-none hover:text-white hover:bg-[#FF3811]">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img src={img6} className="w-full object-cover" />
                <div className="bg-gradient-to-r from-[#151515] to-[#15151500] h-full absolute space-y-5  left-0 right-0 bottom-0 text-white flex flex-col justify-center px-8 md:px-24">
                    <h1 className="font-bold text-2xl md:text-6xl">Affordable <br /> Price For Car <br /> Servicing</h1>
                    <p className="hidden md:flex">There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                    <div className="flex flex-wrap gap-3">
                        <div className="flex gap-3 flex-col md:flex-row">
                            <button className="btn btn-sm md:btn-md border-none outline-none bg-[#FF3811] text-white hover:text-black">Discover More</button>
                            <button className="btn btn-sm md:btn-md bg-transparent text-white hover:text-black">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide5" className="btn btn-sm md:btn-md btn-circle border-none outline-none hover:text-white hover:bg-[#FF3811]">❮</a>
                    <a href="#slide1" className="btn btn-sm md:btn-md btn-circle border-none outline-none hover:text-white hover:bg-[#FF3811]">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;