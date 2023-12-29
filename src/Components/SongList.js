import React from "react"; 
import { useSelector, useDispatch } from "react-redux";
import { selectSong } from "../redux/features/songs/songSlice";
import songData from "../data/songData";

const SongList = () => {
    const currentSong = useSelector(state => state.song)
    console.log(currentSong)
    const dispatch = useDispatch()


    return(
        <div>
             <h1>Song List</h1>
             {
                songData.map(song => (
                    <p key={song.id}
                        onClick={() => dispatch(selectSong(song))}
                    >
                        {song.name}
                    </p>
                ))
             }
        </div>
    )
}

export default SongList;