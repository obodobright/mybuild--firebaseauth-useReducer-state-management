import React from "react";
import { Link } from "react-router-dom";
const Clients = () => {
  const client = [
    {
      firstName: "Sewa",
      lastName: "Amriat",
      phone: "245-55-55",
      email: "amriatsew@gmail.com",
      balance: "300",
    },
    {
      firstName: "Aina",
      lastName: "Bisi",
      phone: "256-35-55",
      email: "ainabisi@gmail.com",
      balance: "400",
    },
    {
      firstName: "Sunny",
      lastName: "Adedeji",
      phone: "234-76-55",
      email: "sunnydeji@gmail.com",
      balance: "35.34",
    },
  ];
  if (client) {
    return (
      <div className="row">
        <div className="col-md-6">
          <h2>Clients</h2>
        </div>
        <div className="col-md-6"></div>
        <table className="table table-striped">
          <thead className="thead-inverse">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Balance</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {client.map((prop, i) => (
              <tr key={i}>
                <td>
                  {prop.firstName}
                  {prop.lastName}
                </td>
                <td>{prop.email}</td>
                <td>${parseFloat(prop.balance).toFixed(2)}</td>
                <td>
                  <Link to={`/client/${i}`} className="btn btn-secondary">
                    Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  } else {
    return <h1>Loading...</h1>;
  }
};

export default Clients;
