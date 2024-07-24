import data from "../../assets/data";
import Card from "../Card/Card";

const FreeHosting = () => {
  return (
    <main>
    {data.data8.map((item) => (
      <Card
        key={item.title}
        title={item.title}
        price={item.price}
        paragraph={item.paragraph}
      />
    ))}
  </main>
  )
}

export default FreeHosting