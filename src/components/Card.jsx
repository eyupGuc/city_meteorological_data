import CardStyle from "../scss/card.module.scss";
const Card = ({ data }) => {
  // console.log(data);
  return (
    <div className={CardStyle.container}>
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
          <div key={id} className={CardStyle.card}>
            <div className={CardStyle.title}>
              <h2>{city}</h2>
            </div>

            <img src={img} alt="img" />
            <div className={CardStyle.desc}>
              <p>En yüksek sıcaklık: {highestTemperature}°C</p>
              <p>En düşük sıcaklık: {lowestTemperature}°C</p>
              <p>Yıllık ortalama yağış: {totalPrecipitation}</p>
              <p>Max. kar kalınlığı: {maxSnowThickness}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
