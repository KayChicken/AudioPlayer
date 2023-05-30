import React, {useEffect, useRef, useState} from 'react';
import s from './AudioPlayer.module.css'
import IconPrev from "../Icons/IconPrev/IconPrev";
import IconPlay from "../Icons/IconPlay/IconPlay";
import IconNext from "../Icons/IconNext/IconNext";
import IconStop from "../Icons/IconStop/IconStop";
import {songsData} from "../../static/music/songs"


const AudioPlayer = () => {

    const [songs,setSongs] = useState(songsData)
    const [isPlaying,setIsPlaying] = useState(false)
    const [currentSong,setCurrentSong] = useState(songsData[0])

    const songRef = useRef()
    const clickRef = useRef()

    const onPlaying = () => {
        const duration = songRef.current.duration
        const ct = songRef.current.currentTime
        setCurrentSong({...currentSong , "progress" : ct / duration * 100 , "length" : duration})

    }


    useEffect(() => {
        console.log(songRef)
        if (isPlaying) {
            songRef.current.play()
        }
        else if (!isPlaying) {
            songRef.current.pause()
        }
    },[isPlaying,currentSong])


    const checkWidth = (e) => {
        let width = clickRef.current.clientWidth
        const offset = e.nativeEvent.offsetX

        const divprogress = offset / width * 100
        songRef.current.currentTime = divprogress / 100 * songRef.current.duration
    }

    const skipBack = () => {
        const index = songs.findIndex(x => x.title === currentSong.title)
        if (index === 0) {
            setCurrentSong(songs[songs.length - 1])
        }
        else {
            setCurrentSong(songs[index - 1])
        }
        songRef.current.currentTime = 0



    }


    const skipToNext = () => {
        const index = songs.findIndex(x => x.title === currentSong.title)
        if (index === songs.length - 1) {
            setCurrentSong(songs[0])
        }
        else {
            setCurrentSong(songs[index + 1])
        }
        songRef.current.currentTime = 0


    }




    return (
        <div className={s.root}>

            <audio ref={songRef} src={currentSong.link} onTimeUpdate={onPlaying}></audio>
            <div className={s.contentBlock}>
                <div>
                    <div className={s.audio_name}>{currentSong.title}</div>
                    <p className={s.audio_author}>{currentSong.author}</p>
                    <div className={s.navigation_wrapper} onClick={checkWidth} ref={clickRef}>
                        <div className={s.seek_bar} style={{width : `${currentSong.progress+"%"}`}}></div>
                    </div>
                    <div className={s.audioPlayer_function_block}>
                        <IconPrev skipBack = {skipBack} />
                        {isPlaying ? <IconStop isPlaying={isPlaying} setIsPlaying={setIsPlaying}/> : <IconPlay isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>}
                        <IconNext skipToNext = {skipToNext}/>
                    </div>
                </div>
                <div className={s.audio_label}>
                    <img className={s.audio_image} src={currentSong.albom} alt=""/>
                </div>
            </div>


        </div>
    );
};

export default AudioPlayer;