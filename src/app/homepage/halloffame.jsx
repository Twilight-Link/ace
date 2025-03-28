export default function HallOfFame() {
  return (
    <section className="flex flex-col h-[100dvh] md:flex-row gap-8 p-12 bg-black"
    style={{
      background : "black",
      backgroundRepeat: "no-repeat",
      backgroundImage :"url('svg-bottom.png'), url('svg-top.png')",
      backgroundSize: "30%, 50%",
      backgroundPosition : "bottom left,top right", }}>
      {/* Left Column */}
      <div className="flex-1 h-full p-8">
        <h2 className="text-5xl font-black uppercase mb-4 leading-[1.2]">
          HALL OF{" "}
          <p className="text-customBlue">FAME</p>
          <img
            src="logos/svg.png"
            className="relative top-[-75px] left-[200px] w-[5vw] h-[5vw]"
            alt="Graduation Cap Icon"
          />
        </h2>
        <div className="h-[85%] w-[85%] relative text-lg lg:mt-16">
         
          Celebrating the achievements of our outstanding graduates! Our alumni have made their mark in top companies worldwide, 
          showcasing excellence, innovation, and leadership.<br/><br/>Meet our stars who continue to inspire the next generation.
          
        </div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col justify-center flex-1 p-8 overflow-y-auto max-h-[85vh] scroll-smooth scrollbar-hide">
        <div className="space-y-4 h-full">
          {/* Graduate Profiles List */}
          <ul role="list">
            {/* Example Profile 1 */}
            <li className="flex gap-x-6 py-4 p-5 rounded-lg h-48 items-center">
              <img
                alt="Vinu"
                src="logos/images (1).png"
                className="rounded-[34px] h-full"
              />
              <div className="flex flex-col min-w-0 flex-auto">
                <p className="text-2xl font-inter text-grey-200">Vinu</p>
                <p className="mt-2 text-sm text-gray-200 capitalize">
                  A talented graduate of ACE College of Engineering, secured a
                  role at Harie Tech Solutions after excelling in software.
                </p>
              </div>
            </li>
            {/* Example Profile 2 */}
            <li className="flex gap-x-6 py-4  p-5 rounded-lg h-48 items-center">
              <img
                alt="Alwin"
                src="logos/images (1).png"
                className=" rounded-[34px] h-full"
              />
              <div className="flex flex-col min-w-0 flex-auto">
                <p className="text-2xl font-inter text-gray-200">Alwin</p>
                <p className="mt-2 text-sm text-gray-200 capitalize">
                  A talented graduate of ACE College of Engineering, secured a
                  role at Harie Tech Solutions after excelling in software.
                </p>
              </div>
            </li>
            {/* Example Profile 3 */}
            <li className="flex gap-x-6 py-4  p-5 rounded-lg h-48 items-center">
              <img
                alt="Seetha"
                src="logos/images (1).png"
                className=" rounded-[34px] h-full"
              />
              <div className="flex flex-col min-w-0 flex-auto">
                <p className="text-2xl font-inter text-gray-200">Seetha</p>
                <p className="mt-2 text-sm text-gray-200 capitalize">
                  A talented graduate of ACE College of Engineering, secured a
                  role at Harie Tech Solutions after excelling in software.
                </p>
              </div>
            </li>
            {/* Example Profile 4 */}
            <li className="flex gap-x-6 py-4  p-5 rounded-lg h-48 items-center">
              <img
                alt="Seetha"
                src="logos/images (1).png"
                className=" rounded-[34px] h-full"
              />
              <div className="flex flex-col min-w-0 flex-auto">
                <p className="text-2xl font-inter text-gray-200">Akshay</p>
                <p className="mt-2 text-sm text-gray-200 capitalize">
                  A talented graduate of ACE College of Engineering, secured a
                  role at Google after excelling in software.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
