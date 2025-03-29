export default function NewsAndUpdates(){
    const News = [
        {
            courceName: 'Electrical & electronics engineering',
            description: 'focuses on the design, development, and application of electrical systems and electronic devices across various industries',
            imageUrl:
                'NewsAndUpdates/EEE1.png',
            gif: '/courcegifs/Electrician.gif'
        },
        {
            courceName: 'Aeronotical engineering',
            description: 'Explore the science of flight, aerospace technology, and aircraft design.',
            imageUrl:
                'NewsAndUpdates/EEE2.png',
            gif: '/courcegifs/Flying around the world.gif'

        },
        {
            courceName: 'mechatronics engineering',
            description: 'Mechatronics Engineering integrates mechanical, electrical, and computer engineering to design automated systems.',
            imageUrl:
                'NewsAndUpdates/EEE3.png',
            gif: '/courcegifs/Time machine (1).gif'

        },
        {
            courceName: 'Electronics & communication engineering',
            description: 'focuses on the design and development of electronic systems and communication technologies.',
            imageUrl:
                'NewsAndUpdates/EEE1.png',
            gif: '/courcegifs/Printed circuit board.gif'

        },
        {
            courceName: 'Civil Engineering',
            description: 'focuses on the design and development of electronic systems and communication technologies.',
            imageUrl:
                'NewsAndUpdates/EEE2.png',
            gif: '/courcegifs/Bricklayer.gif'

        },
        {
            courceName: 'Civil Engineering',
            description: 'focuses on the design and development of electronic systems and communication technologies.',
            imageUrl:
                'NewsAndUpdates/EEE3.png',
            gif: '/courcegifs/Bricklayer.gif'

        },
        {
            courceName: 'Civil Engineering',
            description: 'focuses on the design and development of electronic systems and communication technologies.',
            imageUrl:
                'NewsAndUpdates/EEE1.png',
            gif: '/courcegifs/Bricklayer.gif'

        },
    ]

    return(
        <div className="flex flex-col md:flex-row gap-8 p-12"
        style={{
            background: "black",
            backgroundRepeat: "no-repeat, no-repeat",
            backgroundSize:"40%, 50%",
            backgroundImage: "url('backgroundSvg/svg-newsUpdates-left.png'), url('backgroundSvg/svg-newsUpdates-right.png')",
            backgroundPosition: "bottom left,bottom right",
          }}>
            {/* Left Div */}
            <div className="flex-1 h-full p-8">
                <h2 className="text-5xl font-black uppercase mb-4">News<span className='text-[#4c52e6]'> &</span>  <br/>Updates</h2>
                <div className="h-[85%] w-[85%] relative">
                    <img src="NewsAndUpdates\newsmain.jpg" alt="Image" className="w-full h-full rounded-3xl"/>
                    <div className="absolute bottom-0 left-0 w-full bg-black font-inter text-sm text-white/80 bg-opacity-70 p-3">
                        <p className="text-lg text-white">Publication of magazine</p>
                        The publication of a magazine involves the process of 
                        producing and distributing a periodical publication, typically focused on a specific topic or interest. It requires 
                        collaboration among writers, editors, designers, and marketers to ensure high-quality content reaches its target audience.</div>
                </div>
            </div>
            
            {/* Right Div */}
            <div className="flex flex-col justify-center flex-1 p-8 overflow-y-auto max-h-[80vh] scroll-smooth scrollbar-hide">
                <div className="space-y-4 h-full">
                    <div className="overflow-y-scroll h-100 scroll-smooth scrollbar-hide">
                        <ul role="list" >
                            {News.map((news, index) => (
                                <li key={index} className=" justify-between gap-x-6 py-2">
                                    <div className="flex min-w-0 gap-x-4 bg-[#1f1f1f] p-5 rounded-lg">
                                        <img alt="" src={news.imageUrl} className="w-24 flex-none" />
                                        <div className="min-w-0 flex-auto">
                                            <p className="text-lg font-bold font-inter capitalize text-white">{news.courceName}</p>
                                            <p className="mt-1 text-base/5 capitalize text-white ">{news.description}</p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}