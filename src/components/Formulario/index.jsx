// importação para mudar o estado (Pegar valores)
import { useState, useEffect } from "react"

const Formulario = () => {
    // Criação dos estados para receber o conteúdo do input
    const [materiaA,setMateriaA] = useState(0);
    const [materiaB,setMateriaB] = useState(0);
    const [materiaC,setMateriaC] = useState(0);
    const [nome, setNome] = useState('');

    useEffect(() => {
        console.log('O estado mudou!')
    },[nome]);

    // Só executa quando o componente é iniciado
    useEffect(() => {
        console.log('O componente iniciou')
    },[]);
    
    //Toda vez que alterar o campo materiaA ele imprime na tela
    useEffect(() => {
        console.log('A Matéria A mudou para' + materiaA)
    },[materiaA]);

    
    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        if (media >= 7) {
            return <p>Você foi aprovado</p>
        } else {
            return (
                <p> Você foi reprovado</p>
            )
        }
    }

    return (

        <form>
            <ul>
                {[1,2,3,4,5].map(item => (
                    // A propriedade key serve para direcionar o React, caso precise apagar
                    // um item ele vai saber qual é pela key
                <li key={item}>{item}</li>                     
                ) )}
            </ul>

            <input type="text" placeholder="Nome" onChange={evento => setNome(evento.target.value)}/>
            <input type="number" placeholder="Nota Matéria A" onChange={evento => setMateriaA(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota Matéria B" onChange={evento => setMateriaB(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota Matéria C" onChange={evento => setMateriaC(parseInt(evento.target.value))}/>
            {renderizaResultado()}
        </form>
    )
}

export default Formulario