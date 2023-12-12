function PrvniKomponenta(props) {
    let pole= ["Michal","Saša","Karel","Martin","Stanislav","Jan"]


    return (
        <>
    <h1>Ahoj uživateli jmeném: {props.jmeno}?</h1>
    <h3>{props.dotaz}</h3>
    <h3>Moje oblíbené číslo je: {props.oblibeneCislo}</h3>
    <h3>{pole.map(jmeno => jmeno + ",")}</h3>
    </>
    );
}
export default PrvniKomponenta;