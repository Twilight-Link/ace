import React from 'react'

const Epoch = () => {
  return (
   <main  className="relative w-full max-w-[100vw] h-[52vw]"
   style={{
    background: "white",
    backgroundRepeat: "no-repeat, no-repeat",
    backgroundImage: "url('backgroundSvg/epoch-svg-bottom.png'), url('backgroundSvg/epoch-svg-top.png')",
    backgroundPosition: "bottom left, top right",
  }}>
   <div class="font-black text-black uppercase text-[60px] leading-[1.2] absolute top-[28px] left-[39px] w-[700px] h-[270px]">
    <div>Electrifying</div>
    <div>Memories Of</div>
    <div className='text-customBlue' >Epoch 25</div>
   </div>
   <div class="absolute top-[78.15dvh] left-[3.54vw] w-[19.79vw] h-[9.81dvh] bg-black/75 rounded-3xl flex items-center px-6">
    <div class="text-white font-medium text-[2.34vw] leading-[1.2]">
        EPOCH
    </div>
    <img src="/epoch/svg-path.svg" alt="Arrow" class="w-[2.60vw] h-[4.63dvh] ml-auto"/>
</div>

   {/* <img src="https://picsum.photos/301/376" class="absolute top-[122px] left-[685px] w-[301px] h-[376px] rounded-[25px]"/>
   <img src="https://picsum.photos/373/466" class="absolute top-[530px] left-[590px] w-[373px] h-[450px] rounded-[25px]"/>
   <img src="https://picsum.photos/639/801" class="absolute top-[55px] left-[1010px] w-[560px] h-[800px] rounded-[25px]"/>
   <img src="https://picsum.photos/284/355" class="absolute top-[137px] left-[1599px] w-[284px] h-[355px] rounded-[25px]"/>
   <img src="https://picsum.photos/298/372" class="absolute top-[594px] left-[1596px] w-[298px] h-[372px] rounded-[25px]"/> */}
   
   <img src="epoch\EFCHU.png" class="absolute top-[11.3dvh] left-[35.7vw] w-[14.68vw] h-[34.35vh] rounded-[25px]"/>
  <img src="epoch\BENJI.png" class="absolute top-[49.1dvh] left-[30.7vw] w-[19.43vw] h-[43.15dvh] rounded-[25px]"/>
  <img src="epoch\THIRUMALI.png" class="absolute top-[5.1dvh] left-[52.0vw] w-[30.0vw] h-[74.17dvh] rounded-[25px]"/>
  <img src="epoch\FATHIMA.png" class="absolute top-[12.7dvh] left-[83.4vw] w-[14.79vw] h-[35.87dvh] rounded-[25px]"/>
  <img src="epoch\RIDDIX.png" class="absolute top-[55.0dvh] left-[83.2vw] w-[15.52vw] h-[34.44dvh] rounded-[25px]"/>

   </main>
  )
}

export default Epoch