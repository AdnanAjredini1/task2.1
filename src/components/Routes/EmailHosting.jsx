import data from "../../assets/data";
import Card from "../Card/Card";

const EmailHosting = () => {
  return (
    <main>
      {data.data6.map((item) => (
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

export default EmailHosting