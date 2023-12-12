import { useState } from "react";

function Pocitadlo() {

    const [pocet, setPocet] = useState(0);
    const [barva, setBarva] = useState(0);
    const [viditelnost, setViditelnost] = useState(true);
    const [viditelnostObrazku, setViditelnostObrazku] = useState(false);

    return (
        <>

            {viditelnost &&
                <div>
                    <h2 style={{ color: barva, fontSize: pocet + 10 }}>{pocet}</h2>
                    <button onClick={() => setPocet(pocet + 1)}>Plus</button>
                    <button onClick={() => setPocet(pocet - 1)}>Minus</button>
                    {/* <button onClick={() => setPocet(pocet*pocet)}>Mocnina</button>
                    <button onClick={() => setPocet(pocet == 0)}>reset</button>
                    <button onClick={() => setPocet(pocet/2)}>delit 2</button> */}
                    {barva == "black" && <button onClick={() => setBarva("red")}>barva</button>}
                    {barva == "red" && <button onClick={() => setBarva("black")}>barva</button>}

                    <button onClick={() => setViditelnostObrazku(!viditelnostObrazku)}>Zobrazit / Skrýt vtip</button>

                </div>
                }
                {viditelnostObrazku &&
                <img src="images/obrazek_IT.jpg" />
            }     
            {!viditelnost && <button onClick={() => setViditelnost(true)}>Zobrazit</button>}
            {viditelnost && <button onClick={() => setViditelnost(false)}>Skrýt</button>}

        </>);
}


export default Pocitadlo