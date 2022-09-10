import React, { useState, useEffect } from "react";

const App = () => {
  const [countries, setCountries] = useState(null);
  const Countries = async (url) => {
    await fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        return setCountries(data);
      });
  };
  useEffect(()=>{Countries("https://restcountries.com/v3.1/all")},[]);
  return <>{countries && {}}</>;
};

export default App;
