import React from 'react';
import s from '../../AudioPlayer/AudioPlayer.module.css'


const IconStop = ({isPlaying,setIsPlaying}) => {


    return (
        <svg onClick={() => {setIsPlaying(!isPlaying)}} className={s.icon_stop}  version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
             viewBox="0 0 395 395" >
            <path d="M73.75,395h102.5V0H73.75V395z M103.75,30h42.5v335h-42.5V30z"/>
            <path d="M218.75,0v395h102.5V0H218.75z M291.25,365h-42.5V30h42.5V365z"/>
        </svg>

    );
};

export default IconStop;