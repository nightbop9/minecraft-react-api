import "./Header.css"

export default function Header() { 
    return (
        <header>
            <div className="logo">
                {/* carrega a imagem do logo do minecraft */}
                <img src="src/images/minecraft.svg" alt="Logotipo do jogo Minecraft." />
                <h2>API</h2>
            </div>
            {/* texto explicativo sobre o proposito da aplicacao */}
            <h3>Veja os itens do jogo e seus detalhes!</h3>
        </header>
    );
}