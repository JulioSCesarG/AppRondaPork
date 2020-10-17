import React from 'react';
import styles from './style.module.scss';
import Select from 'react-select';

const options=[
    {label:'Antioquia', value:'antioquia'},
    {label:'Bogotá DC', value:'bogota'},
    {label:'Costa Atlantica', value:'costa_atlantica'},
    {label:'Eje Cafetero', value:'eje_cafetero'},
    {label:'Valle del Cauca', value:'valle_del_cauca'},
]
function SelectorMercado(props){
    return (
    <div >
        <h1 className={styles.title}>
            Seleccione un mercado
        </h1>
        <Select options={options} className={styles.selector}/>
    </div>
    );
}
export default SelectorMercado;