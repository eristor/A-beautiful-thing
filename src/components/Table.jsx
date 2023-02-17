import React, { useEffect, useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/slice/users";

import "./Table.css";

function Table({ order }) {
  const state = useSelector((state) => state);
  const [data, setData] = useState(state.user.data);
  const [loading, setLoading] = useState(state.user.isLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
    setData(state.user.data);
    setLoading()
  }, [setData]);

  

  const columns = useMemo(
    () => [
      {
        name: "Id",
        selector: (row) => row.id,
        sortable: true,
        omit: !order[0].state,
      },
      {
        name: "Name",
        selector: (row) => row.name,
        sortable: true,
        omit: !order[1].state,
      },
      {
        name: "Email",
        selector: (row) => row.email,
        sortable: true,
        omit: !order[2].state,
      },
      {
        name: "Website",
        selector: (row) => row.website,
        sortable: true,
        omit: !order[3].state,
      },
      {
        name: "Company",
        selector: (row) => row.company.name,
        sortable: true,
        omit: !order[4].state,
      },
    ],
    [order]
  );

  return (
    <>
      <DataTable columns={columns} data={data} progressPending={loading} />
    </>
  );
}

export default Table;
