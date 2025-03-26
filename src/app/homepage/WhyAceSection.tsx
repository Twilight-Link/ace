

export default function WhyAceSection() {

    return (
        <div className="overflow-hidden py-4 sm:py-6 select-none">

            <img src='/bg/IMG-20250318-WA0000.jpg' className='opacity-15 -z-50 w-full object-cover object-center h-full absolute top-3 left-0'></img>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pt-2 lg:pr-8">
                        <div className="lg:max-w-lg">
                            <div className="relative w-max h-screen flex flex-col gap-7">
                                <h1 className="font-black capitalize text-6xl leading-[1.2] max-w-2xl text-start">
                                    Why<span className='text-[#4c52e6]'>ACE</span> <br/> College of  <br /> <span className='text-[#4c52e6]' >Engineering ?</span>
                                </h1>
                                <p className="text-[#c8c6c6] font-medium capitalize text-base leading-[1.2] relative max-w-xl">
                                    ACE College of Engineering, founded in 2013 by Manarul Huda Trust, is a leading institution in Thiruvananthapuram, known for its excellence in professional and value-based education. With advanced facilities and a strong focus on technical and ethical growth, ACE nurtures young minds, empowering them for a bright future.
                                </p>
                                <a href="#" className="rounded-md bg-[#4c52e6] px-3.5 py-2.5 w-fit text-lg  text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Apply Now</a>
                            </div>


                        </div>
                    </div>

                    {/* <BentoGridHeroSection/> */}


                </div>
            </div>
        </div>
    );
}