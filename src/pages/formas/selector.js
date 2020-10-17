import React from 'react';
import styles from './style.module.scss';
import Select from 'react-select';

const options=[
    {label:'Canal Fria', value:'canal_fria'},
    {label:'Canal Caliente', value:'canal_caliente'},
    {label:'Cerdo en Pie', value:'cerdo_en_pie'},
]
function onChangeInput(value){
   
 console.log(value.value);
 if(value.value==="canal_fria"){
     console.log("hola mundo");
 }
}
function Selector(props){
    return (
    <div className={styles.contenedor1}>
        <h1 className={styles.title}>
            Seleccione un producto
        </h1>
        <Select options={options} onChange={onChangeInput} className={styles.selector}/>
    </div>
    );
}
export default Selector;