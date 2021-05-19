// import { COLORS } from './designConstants'

const RecievedMessages = ({lastMessage, message}) => {

    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username
    return (
        <div className="message-row">
            {isFirstMessageByUser && (
                <div className="message-avatar" style={{backgroundImage: `url(${message?.sender?.avatar})`}}/>
            )}
            {
                message?.attachments?.length > 0 ? 
                    (
                        <img src={message.attachments[0].file} alt="message-attachment" className="message-image" style={{marginLeft: isFirstMessageByUser ?'0.5vw' : '4vw' }} />
                    ) : 
                    (
                        <div className="message" style={{ float: 'left', backgroundColor: '#E0AC9D', color: 'white', marginLeft: isFirstMessageByUser ? '0.5vw' : '4vw'}}>
                            {message.text}
                        </div>
                    )
                }
        </div>
    )
}

export default RecievedMessages;