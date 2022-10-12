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
            {" "}
            <h1>{city}</h1> <img width={"400px"} src={img} alt="img" />{" "}
          </div>
        );
      })}
    </div>
  );
};

export default Card;
