import { useEffect, useState } from 'react';
import './Secao.css';

export default function Secao() {

    const [data, setData] = useState([]);
    useEffect(()=>{
        async function carregarItens() {
            const response = await fetch('https://minecraft-api.vercel.app/api/items');
            setData(await response.json())
        }
        carregarItens();
    },[])
   
    return (
        <section>
            <h1>Itens</h1>
            <div className="itens">
                {data.map((item, i) => {
                    <div key={i} className='item'>
                        <h3>{item.name}</h3>
                        <img src={item.image} alt={item.image} />
                        <div className='item-details'>
                            <span><strong>Máximo</strong>: {item.stack}</span>
                            <span><strong>Renovável</strong>: {item.renewable}</span>
                        </div>
                    </div>
                })}
                
                
                {/* <div className='item'>
                    <h3>Graveto</h3>
                    <img src="https://minecraft-api.vercel.app/images/items/stick.png" alt="Graveto" />
                    <p>A stick is an item used for crafting many tools and items.</p>
                    <div className="item-details">
                        <span><strong>Stack</strong>: 64</span>
                        <span><strong>Renewable</strong>: Yes</span>
                    </div>
                </div>

                <div className='item'>
                    <h3>Acacia Boat</h3>
                    <img src="https://minecraft-api.vercel.app/images/items/acacia_boat.png" alt="Acacia Boat" />
                    <p>A boat is both an item and a vehicle entity used primarily for fast transport of players and passenger mobs over bodies of water.</p>
                    <div className="item-details">
                        <span><strong>Stack</strong>: 1</span>
                        <span><strong>Renewable</strong>: Yes</span>
                    </div>
                </div>

                <div className='item'>
                    <h3>Diamond</h3>
                    <img src="https://minecraft-api.vercel.app/images/items/diamond.png" alt="Diamond" />
                    <p>A diamond is a rare mineral obtained from diamond ore or loot chests.</p>
                    <div className="item-details">
                        <span><strong>Stack</strong>: 64</span>
                        <span><strong>Renewable</strong>: No</span>
                    </div>
                </div>

                <div className='item'>
                    <h3>Golden Apple</h3>
                    <img src="https://minecraft-api.vercel.app/images/items/golden_apple.png" alt="Golden Apple" />
                    <p>A golden apple is a special food item that bestows beneficial effects.</p>
                    <div className="item-details">
                        <span><strong>Stack</strong>: 64</span>
                        <span><strong>Renewable</strong>: Yes</span>
                    </div>
                </div>

                <div className='item'>
                    <h3>Ender Pearl</h3>
                    <img src="https://minecraft-api.vercel.app/images/items/ender_pearl.png" alt="Ender Pearl" />
                    <p>An item dropped by endermen that allows the player to teleport.</p>
                    <div className="item-details">
                        <span><strong>Stack</strong>: 16</span>
                        <span><strong>Renewable</strong>: Yes</span>
                    </div>
                </div>

                <div className='item'>
                    <h3>Iron Ingot</h3>
                    <img src="https://minecraft-api.vercel.app/images/items/iron_ingot.png" alt="Iron Ingot" />
                    <p>Iron ingots are versatile metal resources used to craft tools, armor, and many other items.</p>
                    <div className="item-details">
                        <span><strong>Stack</strong>: 64</span>
                        <span><strong>Renewable</strong>: Yes</span>
                    </div>
                </div>

                <div className='item'>
                    <h3>Obsidian</h3>
                    <img src="https://minecraft-api.vercel.app/images/items/obsidian.png" alt="Obsidian" />
                    <p>Obsidian is a dark purple block with high blast resistance used to create nether portals.</p>
                    <div className="item-details">
                        <span><strong>Stack</strong>: 64</span>
                        <span><strong>Renewable</strong>: Yes</span>
                    </div>
                </div>

                <div className='item'>
                    <h3>Elytra</h3>
                    <img src="https://minecraft-api.vercel.app/images/items/elytra.png" alt="Elytra" />
                    <p>Elytra are wings that allow the player to glide through the air when equipped in the chestplate slot.</p>
                    <div className="item-details">
                        <span><strong>Stack</strong>: 1</span>
                        <span><strong>Renewable</strong>: No</span>
                    </div>
                </div>

                <div className='item'>
                    <h3>Compass</h3>
                    <img src="https://minecraft-api.vercel.app/images/items/compass.png" alt="Compass" />
                    <p>A compass is an item that points to the world spawn point when held or viewed.</p>
                    <div className="item-details">
                        <span><strong>Stack</strong>: 64</span>
                        <span><strong>Renewable</strong>: Yes</span>
                    </div>
                </div>

                <div className='item'>
                    <h3>Netherite Ingot</h3>
                    <img src="https://minecraft-api.vercel.app/images/items/netherite_ingot.png" alt="Netherite Ingot" />
                    <p>A netherite ingot is a rare crafting material used to upgrade diamond gear to netherite gear.</p>
                    <div className="item-details">
                        <span><strong>Stack</strong>: 64</span>
                        <span><strong>Renewable</strong>: No</span>
                    </div>
                </div> */}
                
            </div>
        </section>
    );
}