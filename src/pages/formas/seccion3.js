import React, { Component, Fragment } from 'react';
import styles from './style.module.scss';
import {RegistroContext} from '../../context/registros';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import moment from 'moment';
import logo from '../../assets/img/fondoRonda1.jpg';
import { Link } from 'react-router-dom';

class Seccion3 extends Component{

    render(){
        
        const{
            registros,
        } = this.context;
        return (
            
            <Fragment>
                <img src={logo} className={styles.imagenEncabezado}></img>
                <div className={styles.appBar}>          
                    <span>Ronda de Precios Históricos</span>
                </div>                                                                       
                <div className={styles.container}>
                    <div align="center">
                        <ReactHTMLTableToExcel 
                            id="botonExportarExcel"
                            className= {styles.btnExportar}
                            table="tabla_registros"
                            filename="RegistrosRonda"
                            sheet="Registros"
                            buttonText="Exportar a Excel"
                        />
                    </div>
                    <br/>
                    <table className ={styles.table} id="tabla_registros"> 
                        <thead>
                            <tr className={styles.tableHeader}>
                                <th>Fecha</th>
                                <th>Producto</th>
                                <th>Cantidad</th>
                                <th>P_Promedio</th>
                                <th>$/Kilo</th>
                                <th>Mercado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {registros.map(row=>{
                                return(
                                    <tr key ={row.id} className ={styles.tableRow}>
                                        <td>{moment(row.Date).format('DD MMM YYYY hh:mm')}</td>
                                        <td>{row.Producto}</td>
                                        <td>{row.Cantidad}</td>
                                        <td>{row.P_promedio}</td>
                                        <td>{row.Pesos_Kilo}</td>
                                        <td>{row.Mercado}</td>
                                    </tr>    
                                );
                            })}
                        </tbody>
                    </table>                                                
                </div>
                <Link to="./formas" className={styles.link4}>Atras</Link>                                            
            </Fragment> 
        );
    }
}
Seccion3.contextType = RegistroContext;
export default Seccion3;