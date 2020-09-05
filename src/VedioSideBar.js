import React,{useState} from 'react';
import './VedioSideBar.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';

function VedioSideBar() {
    const [like,setLike]=useState(false);

    return (
        <div className='VedioSideBar'>
           <div className='VedioSideBar_button'>
               {like ? 
                <FavoriteIcon onClick={(e)=>setLike(false)} /> : 
                <FavoriteBorderIcon onClick={(e)=>setLike(true)} />
               }
               <p>{like ? 300 : 300+1}</p>
           </div>
           <div className='VedioSideBar_button'>
                <MessageIcon/>
                <p>100</p>
           </div>
           <div className='VedioSideBar_button'>
                <ShareIcon/>
                <p>100</p>
           </div>
        </div>
    );
}

export default VedioSideBar;
