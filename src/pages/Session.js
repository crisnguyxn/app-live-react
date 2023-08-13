import { useState } from 'react';
import VideoCall from './VideoCall';
import ChannelForm from './ChannelForm';
const APP_ID = '17ceab7b426247a3a8a06baf8a44e29d'
const token = null

function Session(){
    const [inCall, setIncall] = useState(false)
    const [channelName,setChannelName] = useState("")
   
    return (
        <>
             {inCall ? (
                 <VideoCall setIncall={setIncall} channelName={channelName} token={token} appId={APP_ID}/>
            ) : (
                <ChannelForm setIncall={setIncall} setChannelName={setChannelName} appId={APP_ID}/>
            )}
        </>
    )
}

export default Session