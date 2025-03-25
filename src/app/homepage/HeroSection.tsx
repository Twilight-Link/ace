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
                            <h2 className="text-base/7 font-semibold text-indigo-600">Deploy faster</h2>
                            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                                A better workflow
                            </p>
                            <p className="mt-6 text-lg/8 text-gray-600">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
                                iste dolor cupiditate blanditiis ratione.
                            </p>
                            <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                                {features.map((feature) => (
                                    <div key={feature.name} className="relative pl-9">
                                        <dt className="inline font-semibold text-gray-900">
                                            <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-indigo-600" />
                                            {feature.name}
                                        </dt>{' '}
                                        <dd className="inline">{feature.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>

                    <div>
                        <div className="absolute top-[256px] left-[934px] w-[973px] h-[859px]">
                            <img src="https://picsum.photos/820/821" className="absolute top-[38px] left-[153px] w-[820px] h-[821px]" />
                            <div className="absolute top-[412px] left-[0px] size-[250px]">
                                <div className="absolute top-[0px] left-[0px] size-[250px] bg-[#4d53e6]/80 rounded-[30px]"></div>
                                <svg className="absolute top-[19px] left-[23px] size-[50px]"></svg>
                                <div className="text-[#fdfeff] font-semibold text-2xl leading-[1.2] absolute top-[33px] left-[88px]">
                                    Graduation
                                </div>
                                <div className="text-[#fdfeff] text-lg leading-[1.2] absolute top-[117px] left-[21px] w-[217px]">
                                    Graduation is not the end; it's the beginning of a new journey filled with endless possibilities.
                                </div>
                            </div>
                            <div className="absolute top-[0px] left-[100px] w-[250px] h-[237px]">
                                <div className="absolute top-[0px] left-[0px] w-[250px] h-[237px] bg-[#4d53e6]/80 rounded-[30px]"></div>
                                <svg className="absolute top-[19px] left-[18px] size-[50px]"></svg>
                                <div className="text-[#fdfeff] font-semibold capitalize text-2xl leading-[1.2] absolute top-[33px] left-[84px]">
                                    company
                                </div>
                                <div className="text-[#f8f1f1] text-sm leading-[1.2] absolute top-[105px] left-[21px] w-[217px]">
                                    Strong company relations in a college open doors to career opportunities, internships, and real-world industry exposure.
                                </div>
                            </div>
                            <div className="absolute top-[221px] left-[620px] size-[250px]">
                                <div className="absolute top-[0px] left-[0px] size-[250px] bg-[#4d53e6]/80 rounded-[30px]"></div>
                                <svg className="absolute top-[25px] left-[25px] size-[50px]"></svg>
                                <div className="text-[#fdf7f7]/90 font-semibold capitalize text-2xl leading-[1.2] absolute top-[37px] left-[89px]">
                                    Achivement
                                </div>
                                <div className="text-[#c8c6c6] font-medium text-lg leading-[1.2] absolute top-[103px] left-[28px] w-[200px]">
                                    The achievements we earn in college shape our future, proving that dedication and passion lead to success.
                                </div>
                            </div>
                        </div>


                    </div>


                    w



                </div>
            </div>
        </div>
    )
}
