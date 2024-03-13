import { useState, useEffect } from "react";

function getRandomQuote(quotes) {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

export default function App() {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState(null);

  function PageLoad(){
    const json = {
      data: [
        {
          id: 7,
          email: "michael.lawson@reqres.in",
          first_name: "Michael",
          last_name: "Lawson",
          avatar: "https://reqres.in/img/faces/7-image.jpg",
        },
        {
          id: 8,
          email: "lindsay.ferguson@reqres.in",
          first_name: "Lindsay",
          last_name: "Ferguson",
          avatar: "https://reqres.in/img/faces/8-image.jpg",
        },
        {
          id: 9,
          email: "tobias.funke@reqres.in",
          first_name: "Tobias",
          last_name: "Funke",
          avatar: "https://reqres.in/img/faces/9-image.jpg",
        },
        {
          id: 10,
          email: "byron.fields@reqres.in",
          first_name: "Byron",
          last_name: "Fields",
          avatar: "https://reqres.in/img/faces/10-image.jpg",
        },
        {
          id: 11,
          email: "george.edwards@reqres.in",
          first_name: "George",
          last_name: "Edwards",
          avatar: "https://reqres.in/img/faces/11-image.jpg",
        },
        {
          id: 12,
          email: "rachel.howell@reqres.in",
          first_name: "Rachel",
          last_name: "Howell",
          avatar: "https://reqres.in/img/faces/12-image.jpg",
        },
      ],
    };
    console.log(json);
    setQuotes(json.data);
    setQuote(json.data[0]);
  }
 


  function newRandomQuote() {
    window.onload = PageLoad();
    var u = getRandomQuote(quotes);
    setQuote(u);
  }

  return (
    <>
      <main>
        <h2> Quote Generator</h2>
        <div className="main-class">
          <button onClick={newRandomQuote}>New Email</button><hr></hr>
          <img src={quote?.avatar} alt="here is the pic"></img>
          <h3>" {quote?.email}</h3>

          <p> - {quote?.first_name}</p>
        </div>
      </main>
    </>
  );
}
