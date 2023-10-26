import React, { useEffect, useState } from "react";
import "./FetchData.css";
import axios from "axios";

const FetchData = ({cat}) => {
  const [Data, setData] = useState("");
  const fetchData = async () => {
    await axios
      .get(
        cat?`https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=d57189ee8748490e917bb21c2e76edf2`:
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=d57189ee8748490e917bb21c2e76edf2"
      )
      .then((res) => setData(res.data.articles));
  };
  useEffect(() => {
    fetchData();
  });

  return (
    <div className="container responsive my-4">
      <h3>
        <ul className="headings">TOP HEADLINES</ul>
      </h3>
      <div className="container  news-data my-3 " style={{minHeight:"100vh"}}>
        {Data
          ? Data.map((items, index) => (
              <>
                <div className="container responsive  my-3 p-3" style={{ width: "700px" ,boxShadow:"2px 3px 70px silver", borderRadius:"15 px"}}>
                  <h5 className="my-2  font-weight-bold">{items.title}</h5>
                  <>
                    {
                      <img
                        src={items.urlToImage}
                        alt=" "
                        className="img-fluid news-img"
                      />
                    }
                  </>
                  <p className="my-1">{items.description}</p>
                  <p className="my-1">{items.content}</p>

                  <button>
                    <a
                      class="text-decoration-none  text-reset"
                      href={items.url}
                      target="blank"
                    >
                      view more
                    </a>
                    <svg
                      stroke-width="4"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      fill="none"
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                        stroke-linejoin="round"
                        stroke-linecap="round"
                      ></path>
                    </svg>
                  </button>
                </div>
              </>
            ))
          : "LOADING..."}
      </div>
    </div>
  );
};

export default FetchData;
