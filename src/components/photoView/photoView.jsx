import {React, useEffect, useState} from "react";
import classes from './photoView.module.css';


const PhotoView = ({photos, ...props}) => {
    const left = "«"
    const right = "»"

    const[start, setStart]=useState(1)
    const[currentBackdrop, setCurrentBackdrop]=useState([])

    useEffect(()=>{
        if(photos){
            setCurrentBackdrop(photos.slice(start, start+5))
        }
    },[start, photos])

    function showPhoto(src){
        let img = document.getElementById('show')
        img.src = src
        let d = document.getElementById('photoDialog')
        d.show()
    }

    function closePhoto(){
        let d = document.getElementById('photoDialog')
        d.close()
    }

    return (
        <div className={classes.photoView}>
            <dialog onClick={()=>closePhoto()} className={classes.dialog} id="photoDialog">
                <img id="show" className = {classes.bigPhoto}/>
            </dialog>
            <button className={classes.photoButton} onClick={()=>setStart(start-1)} disabled={start==1}>{left}</button>
            {
                currentBackdrop && currentBackdrop.map(photo=>
                    <img key={photo.file_path} onClick={()=>showPhoto(`https://media.themoviedb.org/t/p/original/${photo.file_path}`)} className={classes.backdrop} src={`https://media.themoviedb.org/t/p/original/${photo.file_path}`} /> 
                )
            }
            <button className={classes.photoButton} onClick={()=>setStart(start+1)} disabled={start==photos.length-5}>{right}</button>

        </div>
    );
}
 
export default PhotoView;