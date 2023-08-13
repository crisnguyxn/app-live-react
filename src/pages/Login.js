import { Google } from 'react-bootstrap-icons';
import '../styles/login.css'
import { ChatFill } from 'react-bootstrap-icons';
import { TelephoneFill } from 'react-bootstrap-icons';
import { Cast } from 'react-bootstrap-icons';
function Login() {
    return (
            <div className="container">
                <div className="login-form">
                    <h3>Login</h3>
                    <Google size={40} color='red'/>
                    <form className='form'>
                        <span>or use your account</span>
                        <label for="email">
                            <input type='text' placeholder="Email"></input>
                        </label>
                        <label for="password">
                            <input type="password" placeholder='Password'></input>
                        </label>
                        <p>Forgot your password</p>
                        <input className='submit-btn' type="submit" value="LOG IN"/>
                    </form>

                </div>
                <div className="login-info">
                    <h3>LIVESTREAM APP</h3>
                    <p>Connect each other by us !</p>
                    <div className='functions'>
                        <ChatFill className='btn' size={30}/>
                        <TelephoneFill className='btn' size={30}/>
                        <Cast className='btn' size={30}/>
                    </div>
                </div>
            </div>
    );
  }
  
  export default Login;
  