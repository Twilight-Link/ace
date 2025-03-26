import { AcademicCapIcon, BuildingOfficeIcon, TrophyIcon  } from '@heroicons/react/24/outline';
import "./css/Bentostyle.css"

export default function BentoGridHeroSection() {
    return (
        <div className='lg:max-w-lg overflow-visible relative '>
            <img src='/bg/girl_cover.png' className='absolute left-32 w-auto h-auto'></img>

            <div className="parent relative m-10">
                <div className="div1 w-44">
                    <div className='rounded-lg bg-[#4d53e6] flex-col flex justify-center'>
                        <div className="flex px-2 py-2">
                            <div className="flex-auto"><BuildingOfficeIcon className='size-6' /></div>
                            <div className="flex-auto ">Company</div>
                        </div>
                        <p className='text-[9px] px-2 text-pretty py-2'>
                            Strong company relations in a college open doors to career opportunities, internships, and real-world industry exposure.
                        </p>
                    </div>
                </div>
                <div className="div2 w-44">
                    <div className='rounded-lg bg-[#4d53e6] flex-col flex justify-center'>
                        <div className="flex px-2 py-2">
                            <div className="flex-auto"><AcademicCapIcon className='size-6' /></div>
                            <div className="flex-auto ">Graduation</div>
                        </div>
                        <p className='text-[11px] px-2 text-pretty py-2'>
                            Strong company relations in a college open doors to career opportunities, internships, and real-world industry exposure.
                        </p>
                    </div>
                </div>
                <div className="div3 w-44">
                    <div className='rounded-lg bg-[#4d53e6] flex-col flex justify-center'>
                        <div className="flex px-2 py-2">
                            <div className="flex-auto"><TrophyIcon className='size-6' /></div>
                            <div className="flex-auto ">Achivement</div>
                        </div>
                        <p className='text-[11px] px-2 text-pretty py-2'>
                        The achievements we earn in college shape our future, proving that dedication and passion lead to success.
                        </p>
                    </div>
                </div>
            </div>


        </div>
    )
}
