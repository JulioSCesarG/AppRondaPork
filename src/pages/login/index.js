import React from 'react';
import { Link } from 'react-router-dom';
//import {startUi} from '../../services/firebase';

class Login extends React.Component {
    /*componentDidMount(){
        startUi('#firebaseui');
    }*/
    render() {
        return(
            <div id= "firebaseui">
                hola mundo
                <div >
                    <li>
                        <Link to="./dashboard">Principal </Link>
                    </li>
                    <li>
                        <Link to="./formas">Formas</Link>
                    </li>
                </div>  
            </div>
        )
    }
}
export default Login;