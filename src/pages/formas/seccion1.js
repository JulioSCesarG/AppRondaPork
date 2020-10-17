
//import SelectorMercado from '../formas/selectorMercado';
//import Presentacion from '../formas/presentacion';
import React, {Component, useState, Fragment} from 'react';
import Layout from '../../components/layout';
import styles from './style.module.scss';
import swal from 'sweetalert';
import Seccion3 from './seccion3';


//import Selector from '../formas/selector';
const Seccion1 = ()=>{
    const [isLogin, setIsLogin ] = useState(true);
    let usr = 'tres';
    let psw ='';
    function seguro(props){     
        usr=document.getElementById('uno').value;
        psw=document.getElementById('dos').value;
        if(usr=== "2020Porkcolombia" && psw === "rondaPork"){
            swal({
                title: "Ronda de precios históricos",
                text: "Bienvenido",
                icon: "success",
                button: "Aceptar"
            }).then(respuesta=>{
                if(respuesta){
                    console.log("hola");
                    setIsLogin(false);
                }
            })       
        }else{
            swal({
                title: "Ronda de precios históricos",
                text: "Error en los datos",
                icon: "success",
                button: "Aceptar"
            }).then(respuesta=>{
                if(respuesta){ 
                    setIsLogin(true);    
                }
            })     
        } 
    }


    return (
        <div>
        { isLogin &&         
        <Layout>                          
            <div>                    
                <div >
                    <label className={styles.hr}></label>    
                </div>                           
                <div>
                    <label className={styles.titleForm}>Administrador</label>
                </div>            
                <div>
                    <label className={styles.lblForm}>Usuario</label>
                    <input className={styles.txtForm} id='uno' type="text" placeholder="Usuario"></input>
                </div>
                <div>
                    <label className={styles.lblForm1}>Contraseña</label>
                    <input className={styles.txtForm1} id='dos' type="password" placeholder="Contraseña"></input>
                </div>
                <div >
                    <label className={styles.hr1}></label>    
                </div>
                <div >
                    <label onClick={seguro} id='noVer' className={styles.linkcontraseña}>Ingresar</label>
                </div>                                                  
                <div onClick={()=> window.history.back() } className={styles.link3}>
                    Salir
                </div>    
            </div>     
        </Layout>
        }
        { !isLogin &&
            <Seccion3 />
        }
        </div>       
    );
}

export default Seccion1;