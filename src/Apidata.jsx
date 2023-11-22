import React, { useEffect, useState } from "react";
import axios from "axios";

const Apidata = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://kontests.net/api/v1/all");
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="container">
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Contests Details</h1>
          <p className="col-md-8 fs-4">
            Using a series of utilities, you can create this jumbotron, just
            like the one in previous versions of Bootstrap. Check out the
            examples below for how you can remix and restyle it to your liking.
          </p>
          <button className="btn btn-primary btn-lg" type="button">
            Example button
          </button>
        </div>
      </div>

      <div className="row">
        {data.map((item, index) => (
          <div key={index} className="col-md-4 mb-3">
            <div className="card">
              <img
                src="https://cosmosgroup.sgp1.cdn.digitaloceanspaces.com/news/9608604.webp"
                className="card-img-top"
              />

              <div className="card-body">
                <h5 className="card-title">Name: {item.name}</h5>
                <p className="card-text">
                  <b>Starts at: </b>
                  {item.start_time}
                </p>
                <p class="card-text">
                  <b>Ends at: </b> {item.end_time}
                </p>
                <p className="card-text">Duration {item.duration}</p>

                <a href={item.url} class="btn btn-outline-primary">
                  Enter
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Apidata;
