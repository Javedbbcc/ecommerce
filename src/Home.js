import "./App.css";

function Home() {
  return (
    <div className="py-80 flex w-full  m-auto bg-teal-900">
      
      <div className="w-1/2 text-white text-xl m-auto">
        <h1 className=" text-3xl text-blue-400 text-center pb-20"> Ecommerece Website</h1>
        <p>Ecommerce is a method of buying and selling goods and services online. 
          The definition of ecommerce business can also include tactics like 
          affiliate marketing. You can use ecommerce channels such as your own 
          website, an established selling website like Amazon, or social 
          media to drive online sales.</p>

      </div>
      <div className="m-auto">
        <img src="./img.png" alt="Ecommerce"></img>
      </div>
    </div>
  );
}

export default Home;
