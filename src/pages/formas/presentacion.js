import React from 'react';
import styles from './style.module.scss';
import Layout from '../../components/layout';
import { Link } from 'react-router-dom';

function Presentacion(props){
    return (
        <Layout>
            <div className={styles.texto}>
                Señor porcicultor:<br/>
                Lo invitamos a participar en nuestra Ronda de Precios históricos de la Asociación Porkcolombia, una investigación que realiza el Área Económica de Porkcolombia, la cual sirve como referencia de los precios del cerdo en pie y las canales porcinas en cada región del país. Para participar por favor tenga en cuenta las siguientes pautas.<br />
                •	Los resultados de la Ronda dependerán de la calidad de la información que nos proporcione. Pedimos diligenciar la información con total honestidad.<br />
                *Producto: Seleccione el producto que vende.<br />
                *Cantidad: Registre el volumen comercializado del producto seleccionado en el numeral anterior.<br />        
                *Peso promedio: Peso promedio del cerdo en pie y/o canal vendida.<br />
                *Precio: Registre el precio por kilogramo <br />
                *Ubicación Mercado (Region): Seleccione la region en el cual entrega sus cerdos o canales.<br />  
                •   No utilice simbolos como ($ #) u otros, solo se pueden registrar números positivos.<br />
                •	El registro de valores con decimales se debera hacer con comas(,) verifique la configuracion de su equipo o dispositivo. Este atento de cualquier alerta que cuestione el registro. <br />
                •	Solicitamos revisar la información antes de enviarla.<br />
                *Obligatorio
            </div>
            <Link to="./dashboard" className={styles.link6}>Ronda de precios históricos</Link>
            <Link to="./formas" className={styles.link7}>Ir a inicio</Link>                
        </Layout>
    );
}
export default Presentacion;
/*
La Ronda de Precios Históricos de Porkcolombia se adelanta desde el año 2001 y en ella participan los porcicultoresde las diferentes regiones del pais.Esta ronda permite hacer seguimiento a los precios promedio del cerdo en pie y la canal en las diferentes zonas de producción, registrados cada semana.<br />
Queremos seguir mejorando este indicador y para ello lo invitamos a que participe registrando todas las semanas, los precios a los cuales comercializó el cerdo en pie y/o canal, en la última semana.<br />
                
*/