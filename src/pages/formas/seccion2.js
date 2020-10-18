import React from 'react';
import styles from './style.module.scss';
import { Link } from 'react-router-dom';
import Layout from '../../components/layout';

function Seccion2(props){
    return (
        <Layout>                      
            <Link to="./presentacion" className={styles.link1}>Ronda de precios históricos</Link>
            <Link to="./seccion1" className={styles.link2}>Menu privado</Link>                        
            <div onClick={()=> window} className={styles.link3}>
                Salir
            </div>                        
        </Layout>
    );
}
export default Seccion2;