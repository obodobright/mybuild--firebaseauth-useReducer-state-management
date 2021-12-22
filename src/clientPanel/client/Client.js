import React from "react";
import { useEffect, useState } from "react";
import { useFetchCLient } from "../hooks/useFetchUser";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { Loadings } from "../layout/loader";

const Clients = () => {
  const { fetchClient, loading, error } = useFetchCLient();
  const client = useSelector((state) => state.user.client);

  useEffect(() => {
    fetchClient();
  }, []);
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            background: "white",
          }}
        >
          {loading && <Loadings color="red" height={40} width={40} />}
        </div>

        <tbody>
          {client &&
            client?.map((prop, i) => (
              <tr key={i}>
                <td>
                  {prop?.data?.firstName}
                  {prop?.data?.lastName}
                </td>
                <td>{prop?.data?.email}</td>
                <td>${parseFloat(prop?.data?.balance).toFixed(2)}</td>
                <td>
                  <Link to={`/clientdetail/${prop.id}`} className="btn btn-secondary">
                    Details
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Clients;
