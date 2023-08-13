function ChannelForm(props){
    const { setIncall, setChannelName } = props;
    return (
        <form className="join">
            {props.APP_ID === '' && <p style={{color: 'red'}}>Please enter your Agora App ID in App.tsx and refresh the page</p>}
            <input type="text"
                placeholder="Enter Channel Name"
                onChange={(e) => setChannelName(e.target.value)}
            />
            <button onClick={(e) => {
                e.preventDefault();
                setIncall(true);
            }}>
                Join
            </button>
        </form>
    )
}

export default ChannelForm