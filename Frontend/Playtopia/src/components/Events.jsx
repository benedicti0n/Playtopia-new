import React from "react";
import '../Styles/Fonts.css'

const Events2 = () => {
  return (
    <div className="h-screen w-full relative">
      <div className="carousel w-full h-full bg-cover bg-center">

        <div id="item1" className="carousel-item w-full bg-[url('/EventBg/Desktop/bgImg1.jpg')] bg-cover bg-center flex justify-start items-center text-white">
          <div className="h-[500px] w-[700px] mx-[100px] ">
            <h1 className="text-2xl lg:text-8xl m-0 font-[Valorant]">Valorant</h1>
            <p className="text-lg my-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa deserunt at, id itaque dolor dolores cumque consequatur, accusantium quibusdam sequi eaque, assumenda asperiores fugit sint adipisci hic necessitatibus. Nisi, eius.</p>
            <div className="w-full flex mt-12">
              <button className="rounded-md text-center">Register</button>
            </div>
          </div>
        </div>

        <div id="item2" className="carousel-item w-full bg-[url('/EventBg/Desktop/bgImg2.jpg')] bg-cover bg-center flex justify-start items-center text-white">
        <div className="h-[500px] w-[700px] mx-[100px] ">
            <h1 className="text-8xl m-0 font-[PUBG]">
Battlegrounds Mobile India
</h1>
            <p className="text-lg my-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa deserunt at, id itaque dolor dolores cumque consequatur, accusantium quibusdam sequi eaque, assumenda asperiores fugit sint adipisci hic necessitatibus. Nisi, eius.</p>
            <div className="w-full flex mt-12">
              <button className="rounded-md">Register</button>
            </div>
          </div>
        </div>

        <div id="item3" className="carousel-item w-full bg-[url('/EventBg/Desktop/bgImg3.jpg')] bg-cover bg-center flex justify-start items-center text-white">
        <div className="h-[500px] w-[700px] mx-[100px] ">
            <h1 className="text-9xl m-0">8 Ball Pool</h1>
            <p className="text-lg my-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa deserunt at, id itaque dolor dolores cumque consequatur, accusantium quibusdam sequi eaque, assumenda asperiores fugit sint adipisci hic necessitatibus. Nisi, eius.</p>
            <div className="w-full flex mt-12">
              <button className="rounded-md">Register</button>
            </div>
          </div>
        </div>

        <div id="item4" className="carousel-item w-full bg-[url('/EventBg/Desktop/bgImg4.jpg')] bg-cover bg-center flex justify-start items-center text-white">
        <div className="h-[500px] w-[700px] mx-[100px] ">
            <h1 className="text-9xl m-0">Carrom</h1>
            <p className="text-lg my-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa deserunt at, id itaque dolor dolores cumque consequatur, accusantium quibusdam sequi eaque, assumenda asperiores fugit sint adipisci hic necessitatibus. Nisi, eius.</p>
            <div className="w-full flex mt-12">
              <button className="rounded-md">Register</button>
            </div>
          </div>
        </div>

        <div id="item5" className="carousel-item w-full bg-[url('/EventBg/Desktop/bgImg5.jpg')] bg-cover bg-center flex justify-start items-center text-white">
        <div className="h-[500px] w-[700px] mx-[100px] ">
            <h1 className="text-9xl m-0">Table Tennis</h1>
            <p className="text-lg my-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa deserunt at, id itaque dolor dolores cumque consequatur, accusantium quibusdam sequi eaque, assumenda asperiores fugit sint adipisci hic necessitatibus. Nisi, eius.</p>
            <div className="w-full flex mt-12">
              <button className="rounded-md">Register</button>
            </div>
          </div>
        </div>

        <div id="item6" className="carousel-item w-full bg-[url('/EventBg/Desktop/bgImg6.jpg')] bg-cover bg-center flex justify-start items-center text-white">
        <div className="h-[500px] w-[700px] mx-[100px] ">
            <h1 className="text-9xl m-0">Treasure Hunt</h1>
            <p className="text-lg my-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa deserunt at, id itaque dolor dolores cumque consequatur, accusantium quibusdam sequi eaque, assumenda asperiores fugit sint adipisci hic necessitatibus. Nisi, eius.</p>
            <div className="w-full flex mt-12">
              <button className="rounded-md">Register</button>
            </div>
          </div>
        </div>

        <div id="item7" className="carousel-item w-full bg-[url('/EventBg/Desktop/bgImg7.jpg')] bg-cover bg-center flex justify-start items-center text-white">
        <div className="h-[500px] w-[700px] mx-[100px] ">
            <h1 className="text-9xl m-0">Open Mic</h1>
            <p className="text-lg my-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa deserunt at, id itaque dolor dolores cumque consequatur, accusantium quibusdam sequi eaque, assumenda asperiores fugit sint adipisci hic necessitatibus. Nisi, eius.</p>
            <div className="w-full flex mt-12">
              <button className="rounded-md">Register</button>
            </div>
          </div>
        </div>

      </div>


      <div className="h-[150px] w-full flex justify-center absolute bottom-0">
        <a href="#item1" className="h-full w-[150px] bg-cover bg-center">
          <img src="/EventBg/SliderLogo/valoLogo.jpg" alt="" className="h-full w-full hover:scale-110 transition-transform duration-2000 " />
        </a>
        <a href="#item2" className="h-full w-[150px] bg-cover bg-center">
        <img src="/EventBg/SliderLogo/bgmiLogo.jpg" alt="" className="h-full w-full hover:scale-110 transition-transform duration-2000" />
        </a>
        <a href="#item3" className="h-full w-[150px] bg-cover bg-center">
        <img src="/EventBg/SliderLogo/8bpLogo.jpg" alt="" className="h-full w-full hover:scale-110 transition-transform duration-2000" />
        </a>
        <a href="#item4" className="h-full w-[150px] bg-cover bg-center">
        <img src="/EventBg/SliderLogo/carromLogo.jpg" alt="" className="h-full w-full hover:scale-110 transition-transform duration-2000" />
        </a>
        <a href="#item5" className="h-full w-[150px] bg-cover bg-center">
        <img src="/EventBg/SliderLogo/ttLogo.jpg" alt="" className="h-full w-full hover:scale-110 transition-transform duration-2000" />
        </a>
        <a href="#item6" className="h-full w-[150px] bg-cover bg-center">
        <img src="/EventBg/SliderLogo/tresureLogo.jpg" alt="" className="h-full w-full hover:scale-110 transition-transform duration-2000" />
        </a>
        <a href="#item7" className="h-full w-[150px] bg-cover bg-center">
        <img src="/EventBg/SliderLogo/openMicLogo.jpg" alt="" className="h-full w-full hover:scale-110 transition-transform duration-2000" />
        </a>
      </div>
    </div>
  );
};

export default Events2;
