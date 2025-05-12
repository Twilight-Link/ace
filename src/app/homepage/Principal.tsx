'use client'
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperInstance } from 'swiper'; // Import the Swiper class for proper typing
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Principal() {
    const listofperson = [
        {
            name: "Dr. Farrukh Sayeed",
            profession: "Principal, Ace College of Engineering",
            words: 'It\'s my privilege to warmly welcome you to ACE College of Engineering, committed to achieving academic excellence by inspiring, transforming and developing young students and delivering them as effective and dynamic industry-ready professionals.',
            foregroundImg: "/principle/principle.jpg",
            backgroundImg: "/principle/principle.jpg"
        },
        {
            name: "Dr. M.K. Kamaluddin",
            profession: "Chairman, Manarul Huda Trust",
            words: 'I proudly welcome you all to a new arena of technology to explore the world. The ACE College of Engineering. It has been a full cycle of seasons since we expanded our radius of ‘educational care’ by establishing ACE in Trivandrum. I know, you are on the rim of making a decision that will influence throughout your life and career. Choosing a college ought to be a successful resolution in life.',
            foregroundImg: "/principle/principle.jpg",
            backgroundImg: "/principle/principle.jpg"
        }
    ];

    const [selectedImg, setImg] = useState(listofperson[0].backgroundImg);
    const swiperRef = useRef<SwiperInstance | null>(null); // Ref for Swiper instance

    useEffect(() => {
        // Set an interval to automatically change slides every second (1000ms)
        const intervalId = setInterval(() => {
            if (swiperRef.current) {
                swiperRef.current.slideNext(); // Move to the next slide
                const nextIndex = swiperRef.current.realIndex; // Get the active slide index
                setImg(listofperson[nextIndex].backgroundImg); // Update background image
            }
        }, 3000); // Change slides every 3 seconds

        return () => clearInterval(intervalId); // Clean up interval when the component is unmounted
    }, []);

    return (
        <div className="w-full relative bg-black h-screen text-white flex items-center justify-center">
            {/* Background Image */}
            <div
                style={{
                    backgroundImage: `url(${selectedImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
                className="w-full h-screen absolute top-0 left-0 z-0 opacity-35"
            />

            {/* Swiper Component for Vertical Scrolling */}
            <Swiper
                direction="vertical" // Enable vertical scrolling
                spaceBetween={50} // Space between slides
                slidesPerView={1} // Show 1 slide at a time
                loop={true} // Enable looping for continuous slides
                speed={1000} // Set the speed of the transition (1000ms = 1 second)
                onSlideChange={(swiper) => setImg(listofperson[swiper.activeIndex].backgroundImg)} // Update background on slide change
                className="swiper-container overflow-hidden w-full h-screen"
                onSwiper={(swiper) => {
                    swiperRef.current = swiper; // Initialize swiperRef with the actual Swiper instance
                }}
            >
                {listofperson.map((person, index) => (
                    <SwiperSlide key={person.name}>  {/* Use a unique "key" here */}
                        <div className="pt-20">
                            <div className="w-full max-w-7xl mx-auto flex flex-row my-auto h-fit z-50 justify-between align-middle">
                                <h1 className="text-8xl font-bold text-white font-serif z-50">‘‘</h1>
                                <h2 className="text-4xl font-serif p-11 text-white opacity-100 z-50">
                                    {person.words}
                                </h2>
                            </div>
                            <div className="flex flex-row z-50 w-full max-w-7xl mx-auto mt-11 ">
                                <img className="rounded-full size-20 object-cover z-50 ml-20 mr-9 my-5" src={person.foregroundImg} />
                                <div className="z-50">
                                    <h1 className="mt-8 text-xl text-white z-50 font-semibold">{person.name}</h1>
                                    <h3 className="font-thin">{person.profession}</h3>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
