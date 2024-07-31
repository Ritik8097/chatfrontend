import {MultiChatSocket , MultiChatWindow , useMultiChatLogic} from 'react-chat-engine-advanced'
const ChatsPage = (props) => {

    const chatProps = useMultiChatLogic('768f31e6-7305-41a2-b886-876858020721',
        props.user.username ,
         props.user.secret)
    return <div style={{height:"100vh"}}>
        <MultiChatSocket {...chatProps}/>
        <MultiChatWindow {...chatProps} style={{height:"100%"}}/>
         </div>
  };
  export default ChatsPage;