export const NavBar = () => {
    let nome = prompt("Digite o título do navbar: ")
    return (
        <nav className="nav navbar bg-dark text-white">
            <div className="title">{nome}</div>
            <div>
                <button className="btn btn-primary">Sair</button>
            </div>
        </nav>
    )
}