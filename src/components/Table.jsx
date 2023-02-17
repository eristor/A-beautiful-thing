import React, { useEffect, useMemo } from "react";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/slice/users";

import "./Table.css";

function Table({ order }) {
  const state = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
    
  }, [dispatch]);

  

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
      <DataTable columns={columns} data={state.user.data} progressPending={state.user.isLoading} />
    </>
  );
}

export default Table;
