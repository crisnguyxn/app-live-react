import { TvFill } from "react-bootstrap-icons"
import { PersonCircle } from "react-bootstrap-icons"
import '../styles/header.css'
function Header(){
    return (
        <div className="header">
            <div className="header-left">
                <TvFill size={40} color="#660029"/>
                <h3>HinJinTV</h3>
            </div>
            <div className="header-right">
                <div>Huynh</div>
                <PersonCircle size={40} color="#660029"/>
            </div>
        </div>
    )
}

export default Header