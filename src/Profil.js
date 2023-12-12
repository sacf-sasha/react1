function Profil(props) {
    return (
       <div className="profil">
        <img src={props.img}></img>
        <div id="profilove_informace">
            <h1>{props.jmeno} {props.prijmeni}</h1>
            <table>
                <tr>
                    <th>Vek</th>
                    <td>{props.vek}</td>
                    <th>Mesto</th>
                    <td>{props.mesto}</td>
                </tr>
            </table>
        </div>
       </div> 
    );
}
export default Profil;
