import React from 'react'
import './Chat.css'
import { Avatar, IconButton } from '@mui/material'
import { useState, useEffect } from 'react'
import { AttachFile, InsertEmoticon, Mic, MoreVert, SearchOutlined } from '@mui/icons-material'
import { useParams } from 'react-router-dom'
import db from '../../firebase'

const Chat = () => {
    const [input, setInput] = useState('')
    const [seed, setSeed] = useState('')
    const [roomName, setRoomName] = useState('')
    const {roomId}  = useParams();

    useEffect(() => {
        if(roomId){
            db.collection('rooms').doc(roomId).onSnapshot((snapshot) => {setRoomName(snapshot.data().name)})
        }
        setSeed(Math.floor(Math.random() * 5000))
    }, [roomId])

    const sendMessage = (e) => {
        e.preventDefault();
        console.log(input)
        setInput('')
    }

    return (
    <div className='chat'>
        <div className='chat__header'>
            <Avatar src={`https://api.dicebear.com/7.x/pixel-art/svg?seed=${seed}`}/>
            
            <div className='chat__headerinfo'>
                <h3>{roomName}</h3>
                <p>Last seen at...</p>
            </div>

            <div className='chat_headerRight'>
                <IconButton>
                    <SearchOutlined />
                </IconButton>
                <IconButton>
                    <AttachFile />
                </IconButton>
                <IconButton>
                    <MoreVert />
                </IconButton>
            </div>    
        </div>

        <div className='chat__body'>
            <p className={`chat__message ${true && 'chat__receiver'}`}>
                <span className='chat__name'>sender</span>
                Hey Guys
                <span className='chat__timestamp'>3:53pm</span>  
            </p>

        </div>

        <div className='chat_footer'>
            <InsertEmoticon />
    
            <form>
                <input type='text' placeholder='Type a message' value={input} onChange={e => setInput(e.target.value)}/>
                <button onClick={sendMessage} type='submit'>Send a message</button>
            </form>

            <Mic />
        </div>
    </div>
    )
}

export default Chat
