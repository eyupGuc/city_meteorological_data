// import adana from "../img/adana.jpeg";
// import agri from "../img/agri.jpeg";
// import ankara from "../img/ankara.jpg";
// import gaziantep from "../img/gaziantep.jpg";
// import igdir from "../img/igdir.jpg";
// import istanbul from "../img/istanbul.jpg";
// import izmir from "../img/izmir.jpg";
// import rize from "../img/rize.jpg";
// import sanliurfa from "../img/adana.jpg";
const Card=({data})=>{
    console.log(data);
    return (<div className="card-container">
        {data.map((item)=>{
const{id,city,highestTemperature,lowestTemperature,maxSnowThickness,totalPrecipitation}=data;
return( <img src={item.img} alt="img"/>)
        })}
        




        </div>
    )
}

export default Card;