import React from 'react'
import './Chat.css'
import { Avatar, IconButton } from '@mui/material'
import { useState, useEffect } from 'react'
import { AttachFile, MoreVert, SearchOutlined } from '@mui/icons-material'

const Chat = () => {
    const [seed, setSeed] = useState('')

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [])

    return (
    <div className='chat'>
        <div className='chat__header'>
            <Avatar src={`https://api.dicebear.com/7.x/pixel-art/svg?seed=${seed}`}/>
            
            <div className='chat__headerinfo'>
                <h3>Room Name</h3>
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

        </div>
    </div>
    )
}

export default Chat
