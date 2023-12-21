import React, { useEffect, useState, useRef } from "react";
import "./MyTable.css";
import { MyTableRow } from "./MyTableRow";
import { Toolkit } from "../../toolkit/Toolkit";

interface MyTableProps {
  list: Object[];
  headerAction: React.ReactNode | string;
  showCheckBox: boolean;
  select: [];
  callback: (data: {}, type: string) => {};
  deleteCallback: () => {};
  title?: string;
  hideDetails?: boolean;
  hideDelete?: boolean;
  handleGetData: (e: string) => {};
  hideToolkit?: boolean;
  isDeleteRow?: boolean;
  searchCallback?: () => {};
}

export const MyTable = ({
  list = [],
  headerAction,
  showCheckBox = false,
  select = [],
  callback,
  deleteCallback,
  title,
  hideDetails = false,
  hideDelete = false,
  handleGetData,
  hideToolkit = false,
  isDeleteRow = false,
  searchCallback,
}: MyTableProps) => {
  const headers = list.length > 0 ? Object.keys(list[0]) : [];
  !hideDetails && headers.push("Thao tác");

  const handleActionButtons = async (data: Object, type: string) => {
    console.log("click");
    await callback(data, type);
  };

  const checkboxRef = useRef(true);

  useEffect(() => {}, [select]);

  return (
    <>
      <div className="myTable">
        <div className="row mx-2">
          <div className="col">
            <h3>{title}</h3>
          </div>
          <div className="col text-end">{headerAction}</div>
        </div>
        {!hideToolkit && (
          <Toolkit
            selectedList={select}
            hideDelete={hideDelete}
            deleteCallback={deleteCallback}
          />
        )}
        {list.length > 0 ? (
          <div className="my_table_wrapper">
            <MyTableRow
              showCheckBox={showCheckBox}
              data={headers}
              ignoreID={headers[0] === "ID"}
              isHeader={true}
              cellContentCenter={false}
            />

            {list.length > 0 &&
              list.map((e, index) => {
                return (
                  <MyTableRow
                    callback={handleActionButtons}
                    showCheckBox={showCheckBox}
                    key={index}
                    data={e}
                    ignoreID={headers[0] === "ID"}
                    hideDetails={hideDetails}
                    handleGetData={handleGetData}
                  />
                );
              })}
          </div>
        ) : (
          <div className="center h-75">
            <p>No data to display.</p>
          </div>
        )}
      </div>
    </>
  );
};
