function Komponenta(props) {
    return( <h1>Nova komponenta ma sirsku {props.sirka} a vysku {props.vyska}
        <br></br> obsah je {props.sirka*props.vyska}, obvod je {2*(props.sirka+props.vyska)}
    </h1> 
    );
}

export default Komponenta;