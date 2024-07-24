
import data from "../../assets/data";
import Card from "../Card/Card";
function DedicatedServers() {
  return (
    <main>
    {data.data3.map((item) => (
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

export default DedicatedServers