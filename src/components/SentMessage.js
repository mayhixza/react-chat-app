const SentMessage = ({message}) => {

    if(message?.attachments?.length > 0){
        return (
            <img src={message.attachments[0].file} alt="message-attachment" className="message-image" style={{float: "right", marginRight: "1vw"}} />
        )
    }

    return (
        <div className="message" style={{ float: 'right', marginRight: "1vw", color: "white", backgroundColor: "#e98872"}}>
            {message.text}
        </div>
    )
}

export default SentMessage;