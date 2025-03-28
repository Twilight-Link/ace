export default function HallOfFame() {
  return (
    <section className="h-screen bg-black flex flex-col lg:flex-row px-6 lg:px-16 max-w-7xl"
     style={{
      background : "black",
      backgroundRepeat: "no-repeat",
      backgroundImage :"url('svg-bottom.png'), url('svg-top.png')",
      backgroundPosition : "bottom left,top right", }}>
      <div className="w-1/2 flex items-center justify-center px-16 relative">
        <div className="font-black uppercase text-6xl leading-[1.2] absolute top-[100px] left-[70px] w-[431px] h-[343px]">
          <span>
            HALL OF{" "}
            <span className=" relative text-customBlue top-[10px]">FAME</span>
          </span>{" "}
          <img
            src="logos/svg.png"
            className="relative top-[-75px] left-[200px] w-[87px] h-[92px]"
            alt="Graduation Cap Icon"
          />
        </div>
        <div className="text-[#f4f4f4] text-[27px] leading-[1.2] absolute top-[372px] left-[70px] w-[598px] h-[371px]">
          <sapn>
            Celebrating the achievements of our outstanding graduates! Our
            alumni have made their mark in top companies worldwide, showcasing
            excellence, innovation, and leadership.
          </sapn>
          <br />
          <span className="relative top-[25px]">
            Meet our stars who continue to inspire the next generation.
          </span>
        </div>
      </div>

      <div className=" absolute w-1/2  flex items-center justify-center">
        <div className="absolute top-[110px] left-[861px] w-[900px] h-[802px]">
          <div className="absolute top-[0px] left-[0px] w-[891px] h-[242px]">
            <img
              src="logos\images (1).png"
              className="absolute top-[0px] left-[0px] w-[259px] h-[242px] rounded-[34px]"
            />
            <div className="text-[#f4f4f4] capitalize text-[25px] leading-[1.2] absolute top-[92px] left-[305px] w-[586px] h-[130px]">
              Vinu a talented graduate of **ACE College of Engineering,secured a
              role at **Harie Tech Solutions** after excelling in software
            </div>
            <div className="text-[#f4f4f4] uppercase text-[40px] leading-[1.2] absolute top-[25px] left-[305px]">
              Vinu
            </div>
          </div>
          <div className="absolute top-[280px] left-[0px] w-[891px] h-[242px]">
            <img
              src="logos\images (1).png"
              className="absolute top-[0px] left-[0px] w-[259px] h-[242px] rounded-[34px]"
            />
            <div className="text-[#f4f4f4] capitalize text-[25px] leading-[1.2] absolute top-[102px] left-[305px] w-[586px]">
              Alwin, a talented graduate of **ACE College of Engineering,secured
              a role at **Harie Tech Solutions** after excelling in software
            </div>
            <div className="text-[#f4f4f4] uppercase text-[40px] leading-[1.2] absolute top-[25px] left-[305px]">
              ALwin
            </div>
          </div>
          <div className="absolute top-[560px] left-[0px] w-[891px] h-[242px]">
            <img
              src="logos\images (1).png"
              className="absolute top-[0px] left-[0px] w-[259px] h-[242px] rounded-[34px]"
            />
            <div className="text-[#f4f4f4] capitalize text-[25px] leading-[1.2] absolute top-[102px] left-[305px] w-[586px]">
              seetha, a talented graduate of **ACE College of
              Engineering,secured a role at **Harie Tech Solutions** after
              excelling in software
            </div>
            <div className="text-[#f4f4f4] uppercase text-[40px] leading-[1.2] absolute top-[25px] left-[305px]">
              seetha
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
