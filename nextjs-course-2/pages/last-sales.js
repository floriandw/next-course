import { useEffect, useState } from "react";
import useSWR from "swr";

function LastSalesPage(props) {
  const [sales, setSales] = useState(props.sales);
  //const [loading, setLoading] = useState(false);

  const { data, error } = useSWR(
    "https://nextjs-course-d8a4f-default-rtdb.europe-west1.firebasedatabase.app/sales.json"
  );

  useEffect(() => {
    if (data) {
      const transformedSales = [];

      for (const key in data) {
        transformedSales.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }

      setSales(transformedSales);
    }
  }, [data]);

  /*useEffect(() => {
    setLoading(true);
    fetch(
      "https://nextjs-course-d8a4f-default-rtdb.europe-west1.firebasedatabase.app/sales.json"
    )
      .then((response) => response.json())
      .then((data) => {
        const transformedSales = [];

        for (const key in data) {
          transformedSales.push({
            id: key,
            username: data[key].username,
            volume: data[key].volume,
          });
        }
        setSales(transformedSales);
        setLoading(false);
      });
  }, []);*/

  if (error) {
    return <p>Failed to load</p>;
  }

  if (!data && !sales) {
    return <p>loading</p>;
  }

  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          {sale.username} - ${sale.volume}
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  return fetch(
    "https://nextjs-course-d8a4f-default-rtdb.europe-west1.firebasedatabase.app/sales.json"
  )
    .then((response) => response.json())
    .then((data) => {
      const transformedSales = [];

      for (const key in data) {
        transformedSales.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }

      return { props: { sales: transformedSales }, revalidate: 10 };
    });
}

export default LastSalesPage;
