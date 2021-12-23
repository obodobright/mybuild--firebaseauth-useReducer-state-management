import React from "react";
import { useFetchCLient } from "../hooks/useFetchUser";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Loadings } from "../layout/loader";
import { useEffect } from "react";

const Clients = () => {
  const { loading, error } = useFetchCLient();
  const client = useSelector((state) => state.user.client);

  function Sum(a, b, c) {
    return a + b + c;
  }
  const getTotalBalance = () => {
    const total = client?.map((prop) => console.log(Sum(prop?.data?.balance)));
    return total;
  };

  console.log(client);
  useEffect(() => {
    getTotalBalance();
  }, []);
  // if (client) {
  return (
    <div className="row">
      <div className="d-flex align-items-center justify-content-between w-100">
        <h2>Clients</h2>
        <div style={{ fontSize: "20px", fontWeight: "bold" }}>${parseFloat(0).toFixed(2)}</div>
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
          {loading && <Loadings color="blue" height={40} width={40} />}

          {client?.map((prop, i) => (
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
          {error && <div>{error}</div>}
        </tbody>
      </table>
    </div>
  );
  // } else {
  //   return <div>LOADING</div>;
  // }
};

export default Clients;
