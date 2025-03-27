'use client'
import { useState } from "react"

export default function CourcesList() {

    const Cources = [
        {
            courceName: 'Electrical & electronics engineering',
            description: 'focuses on the design, development, and application of electrical systems and electronic devices across various industries',
            imageUrl:
                '/icons/bolt.png',
            gif: ''
        },
        {
            courceName: 'Aeronotical engineering',
            description: 'Explore the science of flight, aerospace technology, and aircraft design.',
            imageUrl:
                '/icons/fly.png',
            gif: ''

        },
        {
            courceName: 'mechatronics engineering',
            description: 'Mechatronics Engineering integrates mechanical, electrical, and computer engineering to design automated systems.',
            imageUrl:
                '/icons/mechatronics.png.png',

        },
        {
            courceName: 'Electronics & communication engineering',
            description: 'focuses on the design and development of electronic systems and communication technologies.',
            imageUrl:
                '/icons/radio-station.png.png',
            gif: ''

        },
        {
            courceName: 'Civil Engineering',
            description: 'focuses on the design and development of electronic systems and communication technologies.',
            imageUrl:
                '/icons/radio-station.png.png',
            gif: ''

        },



    ]

    const [selectedItem, setSelectedItem] = useState(0)
    const [currentGif, setGif] = useState(Cources[selectedItem].gif)





    return (<div className="w-full relative py-10 bg-white flex flex-col gap-4 z-10">
        <h1 className="w-full text-center text-5xl font-inter font-bold text-black">Explore our cources</h1>
        <h3 className="w-full text-center text-3xl font inter font-medium text-black">Shaping future engineers with cutting-edge skills.</h3>

        <div className="mx-auto max-w-7xl w-full px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                <div className="overflow-y-scroll h-96 scroll-smooth scrollbar-hide">
                    <ul role="list" className="divide-y divide-gray-100">
                        {Cources.map((person, index) => (
                            <li key={index} className="flex justify-between gap-x-6 py-5">
                                <div className="flex min-w-0 gap-x-4">
                                    <img alt="" src={person.imageUrl} className="size-12 flex-none" />
                                    <div className="min-w-0 flex-auto">
                                        <p className="text-lg font-bold font-inter capitalize text-gray-900">{person.courceName}</p>
                                        <p className="mt-1 truncate text-xs/5 capitalize text-gray-500">{person.description}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                
                <img src="/courcegifs/Flying around the world.gif" className="w-96 mx-32"/>
          







            </div>
        </div>






    </div>)

}