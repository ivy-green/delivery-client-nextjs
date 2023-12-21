import React, { useEffect } from "react";
import "./MyTable.css";
import { MyTableCell } from "./MyTableCell";
import { MyButton } from "@/componentsabout";
import { useDispatch, useSelector } from "react-redux";
import tableSlice from "../../../../features/table/tableSlice";
import { tableSelector } from "@/selectors/consumerSelector.jsabout";
import { X } from "phosphor-react";

interface MyTableRowProps {
  data:
    | {
        id: string | number; // Assuming the id can be either string or number
        [key: string]: any;
      }
    | string[];
  isHeader: boolean;
  showCheckBox: boolean;
  callback: (data: Object, type: string) => void;
  handleGetData: (e: Object) => void;
  hideDetails: boolean;
  cellContentCenter: boolean;
  ignoreID: boolean;
}

export const MyTableRow = ({
  data,
  isHeader = false,
  showCheckBox = false,
  callback = function (data, type) {},
  handleGetData = function (e) {},
  hideDetails = false,
  cellContentCenter = false,
  ignoreID = false,
}: MyTableRowProps) => {
  const dispatch = useDispatch();
  const tableData = useSelector(tableSelector);

  let className = isHeader
    ? "my_table_row table_header row"
    : "my_table_row row";

  let checkBoxClassName = showCheckBox
    ? `my_table_cell col-1 checkbox`
    : `my_table_cell col-1 checkbox d-none`;

  let rowStyle = {
    // height: rowHeight,
    height: "auto",
  };

  useEffect(() => {
    handleGetData(data);
  }, []);

  const handleActionButtons = async (data: Object, type: string) => {
    dispatch(tableSlice.actions.detailButton(data));
    await callback(data, type);
  };

  //handle select each row
  const handleSelect = async (e: boolean) => {
    if (!Array.isArray(data)) {
      let list = [...tableData.selectList];
      let ids = list.map((ele) => ele.id);
      if (e) list.push(data);
      else {
        console.log(ids);
        let index = ids.indexOf(data.id);
        list.splice(index, 1);
      }
      console.log(list);
      dispatch(tableSlice.actions.handleSelected(list));
    }
  };

  return (
    <div style={rowStyle} className={className}>
      <div className={checkBoxClassName}>
        <div className="checkbox-circle2">
          <input
            type="checkbox"
            id="checkbox-circle2"
            name="check"
            onChange={(e) => handleSelect(e.target.checked)}
          />
        </div>
      </div>
      {Object.values(data).map((e, index) => {
        if ((ignoreID && index !== 0) || !ignoreID) {
          if (index === 0)
            return (
              <MyTableCell
                key={index}
                data={e}
                width={`-1`}
                center={cellContentCenter}
              />
            );
          return (
            <MyTableCell
              key={index}
              data={e}
              width={``}
              center={cellContentCenter}
            />
          );
        }
      })}

      {!isHeader && !hideDetails && (
        <MyTableCell
          data={
            <div>
              <MyButton
                text={"Details"}
                margin="5px 15px"
                borderRadius="20px"
                callback={() => handleActionButtons(data, "details")}
              />
            </div>
          }
          width={``}
        />
      )}
      {/*{actionsElement && <MyTableCell data={actionsElement} onClick={() => callback(data)}/>}*/}
    </div>
  );
};
