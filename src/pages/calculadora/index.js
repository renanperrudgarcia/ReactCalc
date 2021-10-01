import { useParams } from 'react-router';
import { useState } from 'react'
import '../estilos.css'
export default function PagesCalculadora() {
   
    return (
      
       <Calcular a={1} b={1} />
   )
    
}

function Calcular({a, b}) {
    const [values, setValues] = useState({a, b});
    const resultado = values.a + values.b;

    function onChange(ev) {
       
    setValues({
        ...values,
        [ev.target.name]: Number(ev.target.value),
    });
}

return (
    <div className="PagesCalculadora">
        <input className="PagesCalculadora__input" type='number' name='a' placeholder='a' value={values.a} onChange={onChange} />
        <div className="PagesCalculadora__text">+</div>
        <input  className="PagesCalculadora__input"type='number' name='b' placeholder='b' value={values.b} onChange={onChange} />
        <div className="PagesCalculadora__text"> = {resultado}</div>
    </div>
)
}
