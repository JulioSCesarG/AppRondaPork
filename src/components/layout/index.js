import React from 'react';
import styles from './style.module.scss';
import logo from '../../assets/img/fondoRonda1.jpg';
 
class Layout extends React.Component{
    render(){
        const {
            children,
        }= this.props;
        return(
            <React.Fragment>
                 <br />
                <img src={logo} className={styles.imagenEncabezado}></img>
                <div className={styles.appBar}>          
                    <span>Ronda de Precios Históricos</span>
                </div>
                <div className={styles.content}>
                    {children}
                </div>
            </React.Fragment>
            
        );  
    }
}
export default Layout;