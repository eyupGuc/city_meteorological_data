import CardStyle from "../scss/card.module.scss";
const Card = ({ data }) => {
  // console.log(data);
  return (
    <div>
      {data.map((item) => {
        const {
          id,
          city,
          highestTemperature,
          lowestTemperature,
          maxSnowThickness,
          totalPrecipitation,
          img,
        } = item;
        return (
          <div key={id} className={CardStyle.container}>
            <div className={CardStyle.title}><h2>{city}</h2></div>
            
             <img  src={img} alt="img" />
             <div className={CardStyle.desc}>
<p>En yüksek sıcaklık:{highestTemperature}</p>

             </div>
          </div>
          
        );
      })}
    </div>
  );
};

export default Card;
