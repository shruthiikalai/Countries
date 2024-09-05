const CountryCard = ({name , flagImg, flagAlt}) => {
    return (
        <div 
        style={{
            display:"flex", 
            flexDirection:"column",
            justifyContent:"center",
            alignContent:"center",
            padding:"10px",
            margin:"10px",
            border:"1px solid grey",
            borderRadius : "10px",
            width : "220px",
            height: "200px",
            textAlign:"center"
            }}>
            <img src={flagImg} alt={`Flag of ${flagAlt}`} style={{
                width:"200px",
                height:"110px"
            }} />
            <h2>{name}</h2>
        </div>
    );
}

export default CountryCard