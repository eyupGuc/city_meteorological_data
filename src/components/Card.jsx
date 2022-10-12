
const Card=({data})=>{
    // console.log(data);
    return (<div className="card-container">
        {data.map((item)=>{
const{id,city,highestTemperature,lowestTemperature,maxSnowThickness,totalPrecipitation}=data;
return( <div key={id}><img src={item.img} alt="img"/> <h1>{item.city}</h1></div>)
        })}
        




        </div>
    )
}

export default Card;