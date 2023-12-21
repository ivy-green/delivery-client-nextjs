"use client";

import React, { useEffect, useState } from "react";
import { Dropdown, MyTable, Drawer } from "../../../../components";
import "../../../assets/css/Pages/customer.css";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
// import { tableSelector } from "../../../selectors/consumerSelector";
import { CaretLeft } from "phosphor-react";
import { ICON_SIZE_BIG } from "@/utils/constraint.jsabout";

function Customer() {
  const [userSelected, setUserSelected] = useState({});
  const [isShowDetail, setIsShowDetail] = useState(false);
  const [isShowAdd, setIsShowAdd] = useState(false);
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const tableData = useSelector(tableSelector);
  const dispatch = useDispatch();

  const detailsModal = (
    <>
      <div className="go_back_button_container">
        <CaretLeft
          // onClick={handleCloseDetail}

          size={ICON_SIZE_BIG}
        />
      </div>
      {/*<DetailCustomer userSelected={userSelected} />*/}
    </>
  );

  return (
    <div className="padding-body">
      {!isShowAdd && (
        <>
          <div className="header_of_customer">
            <div className="row">
              <div className="col-8">
                <div className="header_bar_left_Cus ">
                  <div className="title_total_number_Cus">
                    <h3 className="title_Cus">Clients list </h3>
                    <p className="total_number_Cus">{userList.length}</p>
                  </div>
                  <p className="introduce_Cus">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    View, add, edit and delete your client's details.{" "}
                  </p>
                </div>
              </div>

              <div className="col-4">
                <div className="feature_of_customer">
                  <div className="option_dropdown">
                    <Dropdown placeholder="Options" item={itemOptions} />
                  </div>
                  <button className="btnAdd" onClick={() => setIsShowAdd(true)}>
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>

          <MyTable
            list={userList}
            showCheckBox={true}
            // callback={handleButtonAction}
            // deleteCallback={handleDelete}
            hideDelete={true}
          />
        </>
      )}

      {isShowAdd && (
        <div className="add_employee_container">
          <AddCustomer showAdd={setIsShowAdd} />
        </div>
      )}
      <div className="w-100">
        <Drawer
          anchor="right"
          open={isShowDetail}
          // onClose={handleCloseDetail}
          child={detailsModal}
        />
      </div>
    </div>
  );
}

export default Customer;
