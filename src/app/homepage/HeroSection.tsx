import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'


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
        <div className="overflow-hidden bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pt-4 lg:pr-8">
                        <div className="lg:max-w-lg">
                            <div className="absolute top-[359px] left-[56px] w-[795px] h-[595px]">
                                <div className="text-[#c8c6c6] font-medium capitalize text-2xl leading-[1.2] absolute top-[359px] left-[12px] w-[783px]">
                                    The Best Place to Shape Your Future Ace College of Engineering is a center of excellence, fostering innovation and hands-on learning. Our dynamic campus and expert faculty prepare students for a successful caree
                                </div>
                                <div className="font-black capitalize text-[80px] leading-[1.2] absolute top-[0px] left-[12px] w-[728px]">
                                    The best place to chase your dreams
                                </div>
                                <div className="absolute top-[528px] left-[0px] w-[259px] h-[67px]">
                                    <div className="absolute top-[0px] left-[0px] w-[259px] h-[67px] bg-[#4c52e6] rounded-[20px]"></div>
                                    <div className="text-white capitalize text-3xl leading-[1.2] absolute top-[15px] left-[43px] w-[172px] h-[37px]">
                                        Apply Now
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>

                    <img alt="Product screenshot"
                        src="/logos/Group.png"
                        className="w-1/5 max-w-none  sm:w-1/5 md:-ml-4 lg:-ml-0"
                        />


                </div>
            </div>
        </div>
    )
}
