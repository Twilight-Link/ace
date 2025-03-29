export default function Industries() {
    return (
        <div
            className="relative w-full max-w-[100vw] bg-gradient-to-r flexflex-col items-center pt-[12dvh] pb-[18dvh]"
            style={{
                background: "black",
                backgroundImage: "url('/backgroundSvg/svg-path.svg')",
                backgroundSize: "150%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
            }}
        >
            <div className="text-white font-extrabold uppercase text-[3.3vw] leading-[1.7] justify-center w-full text-center mb-10">
                Our Industrial relation
            </div>
            <div className=" left-0 w-full flex justify-between items-center px-[9.15vw]">
                {/* <embed src="logos/industriesLogo/TCS-crop.svg" type="image/svg+xml" className="w-[12.52vw] h-[12.5vw]" /> */}
                <img src="logos/industriesLogo\TCS-crop.png" className="w-[12.02vw] h-[12.02vw]" />
                <img src="logos/industriesLogo\icons8-apple-250.png" className="w-[11.02vw] h-[11.02vw]" />
                <img src="logos/industriesLogo\icons8-windows-250.png" className="w-[11.02vw] h-[11.02vw]" />
                <img src="logos/industriesLogo\google-icon.svg" className="w-[9.02vw] h-[11.02vw]" />
                <img src="logos/industriesLogo\mahindra_logo.svg" className="w-[13.02vw] h-[12.02vw]" />
            </div>
        </div>
    );
}