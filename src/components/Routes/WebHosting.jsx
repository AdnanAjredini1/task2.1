import data from "../../assets/data";
import Card from "../Card/Card";

function WebHosting() {
  return (
    <main>
      {data.data2.map((item) => (
        <Card
          key={item.title}
          title={item.title}
          price={item.price}
          paragraph={item.paragraph}
        />
      ))}
    </main>
  );
}

export default WebHosting;
