import React from 'react';
import './vediofooter.css';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from 'react-ticker';

function Vediofooter({channel,description,song}) {
    return (
        <div className='vedioFooter'>
            <div className='vedioFooter_text'>
                <h3>@{channel}</h3>
                 <p>{description}</p>
                <div className='ticker'>
               <MusicNoteIcon id='music_icon'> </MusicNoteIcon>
               <Ticker mode="smooth" id='inner_ticker' >
                 {({ index }) => (
                <h3>{song}</h3>
                )}
               </Ticker>
                 </div>
            </div>
            <img className='vedioFooter_record'
            src='https://static.thenounproject.com/png/934821-200.png'>
            </img>
        </div>
    );
}

export default Vediofooter;
