import React from 'react';
import styles from './style.module.scss';
import Select from 'react-select';

const options=[
    {label:'Si', value:'si'},
    {label:'No', value:'no'},
    
]
function onChangeInput(value){
   
 console.log(value.value);
 if(value.value==="si"){
     console.log("hola mundo si");
 }
}
function Continuar(props){
    return (
    <div className={styles.contenedor6}>
        <h1 className={styles.title}>
            ¿Desea agregar otra operación?
        </h1>
        <Select options={options} onChange={onChangeInput} className={styles.selector}/>
    </div>
    );
}
export default Continuar;