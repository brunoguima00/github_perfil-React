import { useEffect, useState } from "react";
import styles from '../RepoList/ReposList.module.css'

const RepoList = ({nomeUsuario}) => {
    const [repos,setRepos] = useState([]);
    // Essa linha é usada para controle se está ou não, então o atributo é boolean
    const [estaCarregando,setEstaCarregando] = useState(true);

    useEffect (() => {
        setEstaCarregando(true)
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(res => res.json())
        .then(resJson => {
            setTimeout(() => {
                setEstaCarregando(false)
                setRepos(resJson)
            }, 2000)           
        })
    },[nomeUsuario])

    return (
        <div className="container">
        {estaCarregando ? (
        <h1>Carregando...</h1>
        ): (
            <ul className={styles.list}>
            {repos.map(repositorio =>(
                <li className={styles.listItem} key={repositorio.id}>
                    {/* o Conteudo dinámico fica dentro de chaves */}
                    {/* O repositório.name: Foi atribuida uma variavel para mapear (map) o retorno da RepoList
                    // Então colocamos variavel.atributo do json para retrornar na tela */}
                    <div className={styles.listItemName}>
                    <b>Nome:</b> {repositorio.name} 
                    </div>
                    <div className={styles.listItemLanguage}>
                    <b>Linguagem:</b> {repositorio.language} 
                    </div>         
                    <a className={styles.listItemLink} target="_blank" href={repositorio.html_url}>Visitar no github</a> 
                </li>
            ))} 
        </ul>
        )}
        
        
        </div>
    )
}

export default RepoList;