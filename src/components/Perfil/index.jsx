import styles from '../Perfil/Perfil.module.css'

const Perfil = ({nomeUsuario}) => {
    const usuario = {
    nome: 'Bruno Guimarães',
    avatar: 'https://github.com/brunoguima00.png'
    }      
    return (
        <header className={styles.header}>
            <img className ={styles.avatar} src={`https://github.com/${nomeUsuario}.png`}/>
            <h1 className={styles.name}>{nomeUsuario}</h1>
        </header>
    )
}

export default Perfil