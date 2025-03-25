import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import BentoGridHeroSection from '../component/bentogrid'


const features = [
    {
        name: 'Push to deploy.',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'SSL certificates.',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: LockClosedIcon,
    },
    {
        name: 'Database backups.',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: ServerIcon,
    },
]

export default function HeroSection() {
    return (
        <div className="overflow-hidden py-24 sm:py-32 select-none">

            <img src='/bg/IMG-20250318-WA0000.jpg' className='opacity-15 -z-50 w-full object-cover object-center h-full absolute top-3 left-0'></img>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pt-2 lg:pr-8">
                        <div className="lg:max-w-lg">
                            <div className="relative w-max h-screen flex flex-col gap-7">
                                <h1 className="font-black capitalize text-6xl leading-[1.2] max-w-2xl text-start">
                                    The <span className='text-[#4c52e6]'> best place</span>  to chase your <br /> <span className='text-[#4c52e6]' >dreams</span>
                                </h1>
                                <p className="text-[#c8c6c6] font-medium capitalize text-base leading-[1.2] relative max-w-xl">
                                    The Best Place to Shape Your Future Ace College of Engineering is a center of excellence, fostering innovation and hands-on learning. Our dynamic campus and expert faculty prepare students for a successful caree
                                </p>
                                <a href="#" className="rounded-md bg-indigo-600 px-3.5 py-2.5 w-fit text-lg  text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Apply Now</a>
                            </div>


                        </div>
                    </div>

                    <BentoGridHeroSection/>


                </div>
            </div>
        </div>
    )
}
