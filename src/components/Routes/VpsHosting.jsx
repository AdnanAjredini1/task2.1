import data from "../../assets/data";
import Card from "../Card/Card";

const VpsHosting = () => {
  return (
    <main>
      {data.data7.map((item) => (
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

export default VpsHosting