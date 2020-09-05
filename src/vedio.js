import React, { useRef, useState } from'react';
import "./vedio.css";
import Vediofooter from './vediofooter.js';
import VedioSideBar from './VedioSideBar.js';

function Vedio (){ 
    const [playing,setplaying]=useState(false);
    const vedioRef=useRef(null);

    const onClickEvent=()=>{
        if(playing){
            vedioRef.current.pause();
            setplaying(false);
        }
        else{
            vedioRef.current.play();
            setplaying(true);
        }
    }
        return(
            <div className="vedio">
               <video 
               className="vedio_player" 
               loop
               ref={vedioRef}
               onClick={onClickEvent}
               src="https://cdn.sharechat.com/232c26c2_1597585576814_c_v__e541d94a-7066-4f32-8a46-d0e2c3d4d440.mp4"
                alt="https://www.youtube.com/watch?v=8l8PB4xkdLA&pbjreload=101">
                </video>
                <Vediofooter channel="praveen" description="Jilla Praveen" song="Ninaithal thane"/>
                <VedioSideBar/>
            </div>
        );
}

export default Vedio;