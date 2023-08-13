import {
    createClient,
    createMicrophoneAndCameraTracks,
  } from "agora-rtc-react";
import { useEffect, useState } from "react";
import Controls from "./Controls";
import Videos from "./Videos";
import '../styles/session.css'
const config = { 
    mode: "rtc", codec: "vp8",
};
const useClient = createClient(config);
const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
function VideoCall(props){
    const { setIncall, channelName } = props;
    const [users, setUsers] = useState([]);
    const [start, setStart] = useState(false);
    const client = useClient();
    const { ready, tracks } = useMicrophoneAndCameraTracks();

    useEffect(() => {
        // function to initialise the SDK
        let init = async (name) => {
          client.on("user-published", async (user, mediaType) => {
            await client.subscribe(user, mediaType);
            console.log("subscribe success");
            if (mediaType === "video") {
              setUsers((prevUsers) => {
                return [...prevUsers, user];
              });
            }
            if (mediaType === "audio") {
                console.log(user,"checkkk");
              user.audioTrack?.play();
            }
          });
    
          client.on("user-unpublished", (user, type) => {
            console.log("unpublished", user, type);
            if (type === "audio") {
              user.audioTrack?.stop();
            }
            if (type === "video") {
              setUsers((prevUsers) => {
                return prevUsers.filter((User) => User.uid !== user.uid);
              });
            }
          });
    
          client.on("user-left", (user) => {
            console.log("leaving", user);
            setUsers((prevUsers) => {
              return prevUsers.filter((User) => User.uid !== user.uid);
            });
          });
    
          await client.join(props.appId, name, null, null);
          if (tracks) await client.publish([tracks[0], tracks[1]]);
          setStart(true);
    
        };
    
        if (ready && tracks) {
          console.log("init ready");
          init(channelName);
        }
    
      }, [channelName, client, ready, tracks]);
    return (
        <div className="sessions">
            <div className="session-left">
                <h3>participants</h3>
            </div>
            <div className="session-main">
                <div id="stream-box"></div>
                <div className='stream-participants'>
                    {start && tracks && <Videos users={users} tracks={tracks} />}
                </div>
                {ready && tracks && (
                <Controls tracks={tracks} setStart={setStart} setInCall={setIncall} />
                )}
            </div>
            <div className="session-right">
                <h3>chats room</h3>
            </div>
        </div>
    )
}

export default VideoCall