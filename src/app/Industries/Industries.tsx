export default function Industries() {
    return (
        <div
            className="relative w-full max-w-[100vw] h-[53vw] bg-gradient-to-r"
            style={{
                background: "black",
                backgroundImage: "url('/backgroundSvg/svg-path.svg')",
                backgroundSize: "fill",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
            }}
        >
            <div className="absolute top-[-43.98vw] left-[-15.57vw] w-[100vw] h-[35.52vw] blur-[5.21vw]"></div>
            <div className="text-white font-extrabold uppercase text-[4.06vw] leading-[1.7] absolute top-[7.76vw] justify-center w-full text-center">
                Our Industrial relation
            </div>
            <div className="absolute top-[21.61vw] left-0 w-full flex justify-between px-[9.15vw]">
                <embed src="logos/industriesLogo/TATA.svg" type="image/svg+xml" className="w-[12.52vw] h-[13.02vw]" />
                <img src="logos/industriesLogo\icons8-apple-250.png" className="w-[13.02vw] h-[13.02vw]" />
                <img src="logos/industriesLogo\icons8-windows-250.png" className="w-[13.02vw] h-[13.02vw]" />
                <img src="logos/industriesLogo\google-icon.svg" className="w-[10.02vw] h-[13.02vw]" />
                <img src="logos/industriesLogo\mahindra_logo.svg" className="w-[14.02vw] h-[13.02vw]" />
            </div>
        </div>
    );
}