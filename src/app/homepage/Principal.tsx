export default function Principal(){
    return(
        <div
            className="relative w-full h-auto"
            style={{
                background: "white",
                backgroundImage: "url('/backgroundSvg/svg_bg_princ_bottom.png'), url('/backgroundSvg/svg_bg_princ_top.png')",
                backgroundSize: "50%, 100%",
                backgroundRepeat: "no-repeat, no-repeat",
                backgroundPosition: "bottom left, top right",
            }}
            // style={{
            //     background: "linear-gradient(28deg, #4145cc 10%,white 30%, white 70%, #4145cc 90%)", // Create gradient with rotation and colors
            // }}
        >

            <div className="font-black uppercase text-6xl text-black leading-[1.2] pt-16 pl-20 w-[446px]">
                MEET OUR <p className="text-blue-700">PRINCIPAL</p>
            </div>
            <div className="flex flex-col md:flex-col lg:flex-row justify-around items-center flex-wrap gap-2 p-4 h-auto">
                <img src="principalphoto.jpg" className=" md:w-[90%] lg:w-[42%]  rounded-[29px]"/>
                <div className="pb-8 text-black font-normal  font-inter capitalize text-xl leading-[1.2] lg:w-[42%]">
                    Meet Our Principal<br/><br/> Dr. Farrukh Sayeed is a visionary academic leader dedicated to nurturing student excellence through a 
                    perfect blend of academics and extracurricular activities. Under his dynamic leadership, ACE College of Engineering fosters 
                    a culture of holistic development, empowering students with leadership, teamwork, and communication skills. <br/><br/>With an unwavering 
                    commitment to innovation and excellence, Dr. Sayeed ensures that students have access to the right platforms and opportunities 
                    to unlock their full potential. His passion for education and mentorship continues to inspire the next generation of engineers 
                    and leaders.
                </div>
            </div>
        </div>
    )
}