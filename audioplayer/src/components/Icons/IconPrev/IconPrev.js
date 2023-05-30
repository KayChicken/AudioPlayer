import React from 'react';
import s from "../../AudioPlayer/AudioPlayer.module.css";

const IconPrev = ({skipBack}) => {




    return (
        <svg onClick={() => {skipBack()}} className={s.icon_prev} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 330 330">
            <path d="M165,0C74.019,0,0,74.019,0,164.999C0,255.98,74.019,330,165,330s165-74.02,165-165.001C330,74.019,255.981,0,165,0z M165,300c-74.44,0-135-60.561-135-135.001C30,90.561,90.56,30,165,30s135,60.561,135,134.999C300,239.439,239.439,300,165,300z"/>
            <path d="M234.999,149.992l-103.784,0.006l34.392-34.393c5.858-5.857,5.858-15.355,0-21.213c-5.857-5.857-15.355-5.857-21.213,0 l-60,60.001C81.58,157.207,80,161.021,80,165s1.581,7.794,4.394,10.606l60,59.999c2.929,2.929,6.767,4.393,10.606,4.393 c3.839,0,7.678-1.465,10.606-4.393c5.858-5.857,5.858-15.355,0-21.213l-34.395-34.395l103.79-0.006 c8.284,0,14.999-6.717,14.999-15.001C249.999,156.707,243.283,149.992,234.999,149.992z"/>
        </svg>
    );
};

export default IconPrev;