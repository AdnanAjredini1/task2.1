import data from "../../assets/data";
import Card from "../Card/Card";

function WordpressHosting() {
  return (
    <main>
    {data.data5.map((item) => (
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

export default WordpressHosting