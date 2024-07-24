import data from "../../assets/data";
import Card from "../Card/Card";


export default function Domain() {
    return (
        <main>
       {data.data1.map((item) => (
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