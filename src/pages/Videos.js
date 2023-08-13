import { AgoraVideoPlayer } from "agora-rtc-react";
import '../styles/session.css'
function Videos(props){
    const { users, tracks } = props;
    return (
        <>
        <AgoraVideoPlayer className='participant'  videoTrack={tracks[1]} />
        {users.length > 0 &&
          users.map((user) => {
            if (user.videoTrack) {
              return (
                 <AgoraVideoPlayer className='participant' videoTrack={user.videoTrack} key={user.uid} />
              );
            } else return null;
          })}
      </>
    )
}

export default Videos