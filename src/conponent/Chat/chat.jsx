import './chat.css'
import ChatIcon from '@mui/icons-material/Chat';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
import { useRef, useState } from 'react';
export const Chat = () => {
    const [messagesSends, setMessagesSends] = useState([

    ])
    const [showChat, setShowChat] = useState(false)
    const [writer, setWriter] = useState(false)
    const [message, setMessage] = useState('')
    const inputRef = useRef(null);
    const changeMessages = (e) => {
        const newMessage = e.target.value;
        setMessage(newMessage)
        if (message.length != null) {
            setWriter(!false)
        } else if (message.length === 0) {
            setWriter(!true)
        }

        console.log(message)
    }
    const SendMessages = (e) => {
        e.preventDefault()
        setMessagesSends([...messagesSends, ''])
    }
    const showChatsBot = () => {
        setShowChat(!showChat)
    }
    const closeChatsBot = () => {
        setShowChat(false)
    }
    return (
        <>
            {!showChat && <div onClick={showChatsBot} className='chats'>
                <ChatIcon fontSize='large' />
            </div>}

            {showChat && <div className="chatwrite">
                <CloseIcon onClick={closeChatsBot} className='span' />
                <div className="messages">
                    <div className="lugarMessages">
                        <div className="messageSended">
                            E ai, fala belezinha?
                        </div>
                    </div>
                    {messagesSends.map((mensagem, index) => (
                        <div
                            key={mensagem.title} id='I' className="lugarMessages">
                            <div
                                className="messageSended"
                            >
                                {`mensage ${index + 1}`}
                            </div>
                        </div>
                    ))}

                    {writer && <div className="writing">
                        A escrever ...
                    </div>}
                </div>
                <div className="inputSend">
                    <textarea
                        id='text'
                        className='text'
                        value={message}
                        onChange={changeMessages}
                        name='message'
                        placeholder='Ecreva a sua memsagem'
                        ref={inputRef}
                    />
                    <SendIcon onClick={SendMessages} sx={{

                    }} />
                </div>
            </div>}
        </>
    )
}

