import React from 'react'

const Epoch = () => {
  return (
   <main  className="relative w-full max-w-[100vw] h-[52vw]"
   style={{
    background: "white",
    backgroundRepeat: "no-repeat, no-repeat",
    backgroundImage: "url('epoch-svg-bottom.png'), url('epoch-svg-top.png')",
    backgroundPosition: "bottom left, top right",
  }}>
   <div class="font-black text-black uppercase text-[78px] leading-[1.2] absolute top-[28px] left-[39px] w-[700px] h-[270px]">
    <div>Electrifying</div>
    <div>Memories Of</div>
    <div className='text-customBlue' >Epoch 25</div>
   </div>
   <div class="absolute top-[844px] left-[68px] w-[380px] h-[106px] bg-black/75 rounded-3xl flex items-center px-6">
    <div class="text-white font-medium text-[45px] leading-[1.2]">
    EPOCH
    </div>
    <img src="/epoch/svg-path.svg" alt="Arrow" class="w-[50px] h-[50px] ml-auto"/>
   </div>
   <img src="https://picsum.photos/301/376" class="absolute top-[122px] left-[685px] w-[301px] h-[376px] rounded-[25px]"/>
   <img src="https://picsum.photos/373/466" class="absolute top-[530px] left-[590px] w-[373px] h-[450px] rounded-[25px]"/>
   <img src="https://picsum.photos/639/801" class="absolute top-[55px] left-[1010px] w-[560px] h-[800px] rounded-[25px]"/>
   <img src="https://picsum.photos/284/355" class="absolute top-[137px] left-[1599px] w-[284px] h-[355px] rounded-[25px]"/>
   <img src="https://picsum.photos/298/372" class="absolute top-[594px] left-[1596px] w-[298px] h-[372px] rounded-[25px]"/>
   </main>
  )
}

export default Epoch