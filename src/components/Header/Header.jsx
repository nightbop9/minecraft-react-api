import "./Header.css"

export default function Header() {
    return (
        <header>
            <div className="logo">
                <img src="src/images/minecraft.svg" alt="Logotipo do jogo Minecraft." />
                <h2>API</h2>
            </div>
            <h3>Veja os itens do jogo e seus detalhes!</h3>
        </header>
    );
}