import { PrettyChatWindow} from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    
    return (
    <div style={{height: '100vh'}}>
        <PrettyChatWindow
        projectId='4f18cdf4-bc32-4256-99ba-61c0286b9b25'
        username= {props.user.username}
        secret= {props.user.secret}
        style={{height:'100%'}}
    />
    </div>
    )
}

export default ChatsPage