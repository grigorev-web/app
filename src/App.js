import React, { useEffect } from "react";
import "./App.css";
import NewsTable from "./components/NewsTable";
import {toUrlParams} from "./functions";


function App() {

  let domain = "http://dm2grig.mart-shop.ru";
  let path = "/wp-admin/admin-ajax.php";
  //let ajaxUrl = process.env.NODE_ENV == "development" ? domain + path : path;
  let ajaxUrl = domain + path;

  const [data, setData] = React.useState({
    loading: false,
    result: { news: ["Новостей нету"] },
  });

  useEffect( ()=> console.log(data))
  

  function dgLoader() {
    
    setData({ loading: true, result: { news: ["Загрузка..."] } });

   let pData = { action:'test',name: 'kolya', named: 'Kolyan'}

    fetch(ajaxUrl + toUrlParams(pData))
      .then((res) => res.json())
      .then((res) => {
        if(res) setData({ loading: false, result: res });
        else setData({loading:false, result: { news:['Ошибка загрузки']} })
      })
      
      }

  return (
    <div className="App">
      <p>result:{process.env.NODE_ENV} ver: 0.2</p>
      <button onClick={dgLoader}>load</button>
      <p>status:{data.loading ? "loading..." : ""}</p>
      <h2>Новости</h2>
      <NewsTable data={data}/>
    </div>
  );
}

export default App;
