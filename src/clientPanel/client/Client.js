import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useFetchCLient } from "../hooks/useFetchUser";
const Clients = () => {
  const { fetchClient } = useFetchCLient();
  useEffect(() => {
    fetchClient();
  }, [fetchClient]);

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

        {/* <tbody>
          {client?.map((prop, i) => (
            <tr key={i}>
              <td>
                {prop?.firstName}
                {prop?.lastName}
              </td>
              <td>{prop?.email}</td>
              <td>${parseFloat(prop?.balance).toFixed(2)}</td>
              <td>
                <Link to={`/client/${i}`} className="btn btn-secondary">
                  Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody> */}
      </table>
    </div>
  );
};

export default Clients;
