import React from "react";
import "../assets/styles/Home.css";
import ProductHome from "../features/ProductDetails/ProductHome.jsx";

function Home() {
  return (
    <div className="home">
      <div className="image">
        <img src="/images/HomeImage4.jpg" alt="img"></img>
      </div>

      <div className="section">
        <div className="bestSeller">
          <a href="">Best Seller</a>
        </div>
        <div className="console">
          <a href="">Console</a>
        </div>
        <div className="games">
          <a href="">Games</a>
        </div>
        <div className="accessories">
          <a href="">Accessories</a>
        </div>
      </div>

      <div className="products">
        <ProductHome
          id={123456}
          image="/images/product1.jpg"
          name="God Of War: Ragnarok"
          price={3000}
          stars={5}
          review={27}
        />
        <ProductHome
          id={1234567}
          image="/images/product2.png"
          name="The Last Of Us 2"
          price={3000}
          stars={4}
          review={27}
        />
        <ProductHome
          id={12345678}
          image="/images/product3.jpg"
          name="Wu Kong"
          price={3000}
          stars={2}
          review={27}
        />
        <ProductHome
          id={123456789}
          image="/images/product4.jpg"
          name="Play Station"
          price={3000}
          stars={1}
          review={27}
        />
        <ProductHome
          id={123456}
          image="/images/product1.jpg"
          name="God Of War: Ragnarok"
          price={3000}
          stars={5}
          review={27}
        />
        <ProductHome
          id={1234567}
          image="/images/product2.png"
          name="The Last Of Us 2"
          price={3000}
          stars={4}
          review={27}
        />
        <ProductHome
          id={12345678}
          image="/images/product3.jpg"
          name="Wu Kong"
          price={3000}
          stars={2}
          review={27}
        />
        <ProductHome
          id={123456789}
          image="/images/product4.jpg"
          name="Play Station"
          price={3000}
          stars={1}
          review={27}
        />
        <ProductHome
          id={123456}
          image="/images/product1.jpg"
          name="God Of War: Ragnarok"
          price={3000}
          stars={5}
          review={27}
        />
        <ProductHome
          id={1234567}
          image="/images/product2.png"
          name="The Last Of Us 2"
          price={3000}
          stars={4}
          review={27}
        />
      </div>
    </div>
  );
}

export default Home;
