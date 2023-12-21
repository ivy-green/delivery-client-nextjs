import React, { useState } from "react";
import { ButtonState } from "./ButtonState";

export function CustomMultiSelect({
  selectList = [],
  onSelected = Function,
  selectActive = "",
}) {
  return (
    <div className="flex flex-wrap gap-2 mb-3">
      {selectList.length > 0 &&
        selectList.map(
          (
            e: {
              code: string;
              name: string;
            },
            index,
          ) => (
            <span key={index} className="mx-1">
              <ButtonState
                callback={() => onSelected(e.code)}
                label={e.name}
                hoverColor="var(--primary-color)"
                bgColor="var(--text-white)"
                fontColor="var(--primary-color)"
                selected={selectActive === e.code}
              />
            </span>
          ),
        )}
    </div>
  );
}
