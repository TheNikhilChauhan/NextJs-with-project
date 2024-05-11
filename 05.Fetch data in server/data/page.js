async function fetchData() {
  let data = await fetch("https://jsonplaceholder.typicode.com/posts");
  data = await data.json();
  return data;
}

const Data = async () => {
  let products = await fetchData();
  console.log(products);
  return (
    <div>
      <div className="border m-2 p-2">
        {products?.map((p) => (
          <p key={p.userId} className="m-3">
            {p.title}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Data;
