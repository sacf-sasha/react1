function BMI(props) {
    let BMI = props.hmotnost/((props.vyska*props.vyska)/10000)
    return(
        <>
    <h3>
        Vaše výška je {props.vyska} <br></br>
        Vaše hmotnost je {props.hmotnost}<br></br>
        Vaše BMI je {BMI}
    </h3>

    {(BMI <= 18.5)&&<h3>Máte podvahu</h3>}
    {(18.5 > BMI <= 24.9)&&<h3>Máte ideální váhu</h3>}
    {(24.9 > BMI<=29.9 )&&<h3>Máte nadváhu</h3>}
    {(29.9 >  BMI<= 34.9)&&<h3>Máte nadváhu</h3>}
    {(BMI > 34.9)&&<h3>Máte nadváhu</h3>}
    
    </>
    );
}
export default BMI;