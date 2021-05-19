import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import Login from './components/Login';
import './App.css';

const App = () => {   
  
  if (!localStorage.getItem('username')) return <Login />

  return (
    <ChatEngine 
    height= "100vh"
    projectID = "588dd1b8-c70f-4567-a9f4-8652451cbac6"
    userName={localStorage.getItem('username')}
    userSecret={localStorage.getItem('password')}
    renderChatFeed = {(chatAppProps) => <ChatFeed {... chatAppProps}/>}
  />
  )
}

export default App; 
