
import React from "react";
import { useSelector } from "react-redux";


const SongDetails = () => {
  const selectedSong = useSelector(state => state.song)

    return(
        <div>
            {
                selectedSong && (
                    <div>
                         <h1>{selectedSong.name}</h1>
                         <p>{selectedSong.duration}</p>
                         <p>{selectedSong.artist}</p>
                         <p>{selectedSong.album}</p>
                    </div>
                )
            }
        </div>
    )
}

export default SongDetails;