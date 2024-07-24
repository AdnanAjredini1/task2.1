import data from "../../assets/data";
import Card from "../Card/Card";

function VirtualCloudServers() {
  return (
    <main>
      {data.data4.map((item) => (
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

export default VirtualCloudServers;
