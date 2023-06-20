import "./styles.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const url = "https://reqres.in/api/users?page=1";

  const loadUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const jsonResponse = await response.json();
      setUsers(jsonResponse.data);
    } catch (error) {
      console.log("Error While Fetching the data", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="App">
        <div>
          <div className="userGrid">
            <button onClick={loadUsers} className="button-64">
              <span class="text">Get Users</span>
            </button>
          </div>
          <div>
            <h2>Users:</h2>
            {loading ? (
              <div class="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div> // Display loader if loading state is true
            ) : (
              <div className="container">
                <div className="row">
                  {users.map(({ id, email, avatar, first_name, last_name }) => (
                    <div className="col-md-3">
                      <div className="card" key={id} style={{ width: "18rem" }}>
                        <img
                          src={avatar}
                          className="card-img-top"
                          alt={`${first_name} ${last_name}`}
                        />
                        <div className="card-body">
                          <h5 className="card-title">{`${first_name} ${last_name}`}</h5>
                          <p className="card-text">{email}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
