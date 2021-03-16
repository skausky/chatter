import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine 
            height="100vh"
            projectID="a8684b62-ea2b-47ea-a8f1-13049c27f359"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatterProps) => <ChatFeed {...chatterProps}/>}
        />
    );
}

export default App;