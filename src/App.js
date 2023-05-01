import { ChatEngine } from "react-chat-engine";

import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';

import './App.css'; 

const App=() => {
    if(!localStorage.getItem('username')) return <LoginForm />

    return(
        <ChatEngine 
            height='100vh'
            projectID='3bd855ba-90f5-47d0-b840-6ad0627c4975'
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAPPProps)=> <ChatFeed {...chatAPPProps}/>}

        
        />
    )
}

export default App;