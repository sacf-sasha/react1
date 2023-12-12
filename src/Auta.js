
function ukazInfo(nazevAuta, classAuta) {
    window.alert("Auto " + nazevAuta + ", Třída auta " + classAuta);
}
function Auta(props) {
    return ( <>
        <div className="auto" onClick={()=> ukazInfo(props.title, props.class)}> 
        <img src={props.image}></img>
        <div id="profilove_informace">
            <h1>{props.jmeno} {props.prijmeni}</h1>
            <table>
                <tr>
                    <td>{props.Image}</td>
                    <th>title</th>
                    <td>{props.title}</td>
                    <th>class</th>
                    <td>{props.class}</td>
                    <th>Wikipedie:</th>
                    <td><a href={"https://cs.wikipedia.org/w/index.php?search="+props.title+"&title=Speci%C3%A1ln%C3%AD%3AHled%C3%A1n%C3%AD&ns0=1&ns100=1&ns102=1"}>{props.title}</a></td>
                </tr>
            </table>
        </div>
       </div> 














        </>
    );
}
export default Auta;