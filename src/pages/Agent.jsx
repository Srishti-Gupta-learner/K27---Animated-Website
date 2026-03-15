import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

const Agent = () => {

  gsap.registerPlugin(ScrollTrigger)

  const imgDivref = useRef(null)
  const imageRef = useRef(null)
   const imageArray = [
    'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg',
  ]

  // const imageArray = [
  //  '<img src="images/Agent1.jpg" alt="agent1" />',
  //   '<img src="images/Agent2.jpg" alt="agent1" />',
  //   '<img src="images/Agent3.jpg" alt="agent1" />',
  //   '<img src="images/Agent4.jpg" alt="agent1" />',
  //   '<img src="images/Agent5.jpg" alt="agent1" />',
  //   '<img src="images/Agent6.jpg" alt="agent1" />',
  //   '<img src="images/Agent7.jpg" alt="agent1" />',
  //   '<img src="images/Agent8.jpg" alt="agent1" />'
  // ]
 

  useGSAP(function(){
    gsap.to(imgDivref.current,{
      scrollTrigger:{
        trigger:imgDivref.current,
        start:'top 29%',
        end:'top -70%',
        scrub:true,
        pin :true,
        pinSpacing: true,
        pinReparent: true,
        pinType: 'transform',
        anticipatePin: 1,
        invalidateOnRefresh: true,

        onUpdate:(elem)=>{
          let imageIndex ;
          if(elem.progress<1){
            imageIndex = Math.floor(elem.progress*imageArray.length);
          }else{
            imageIndex = imageArray.length-1;
          }
          imageRef.current.src= imageArray[imageIndex]
        }
      }
    })
  })

  return (
    <div >
      <div className="section1 h-screen py-1">
      <div ref={imgDivref} className="absolute h-[20vw] w-[15vw] top-50 left-120 rounded-3xl bg-red-50 ">
        <img ref={imageRef} src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" alt="agent1" />
      </div>

      <div className="font-[font2] relative">
      <div className="mt-[55vh]">
        <h1 className="text-[20vw] uppercase leading-[17vw] text-center">
          SEVEN7Y <br/>TWO
        </h1>
      </div>

      <div className="pl-[40%] mt-20">
        <div className="text-5xl ">
         &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam laboriosam necessitatibus, id aliquam, ullam earum fugiat corporis porro consequatur excepturi saepe officiis nam atque! Explicabo tempore accusantium ex veritatis nemo? Sed asperiores cum ullam dicta?
        </div>
      </div>
    </div>
    </div>
    <div className="section2">
      
    </div>
    </div>
  );
};

export default Agent;
