"use client";

import React from "react";
import PropTypes from "prop-types";
import classes from "./Drawer.module.css";
import { changeAnchor } from "../../../utils/changeAnchor";

interface DrawerProps {
  open: boolean;
  anchor: string;
  onClose: () => void;
  child: React.ReactNode;
}

export const Drawer = ({ open, anchor, onClose, child }: DrawerProps) => {
  const {
    drawer = "drawer",
    animate = "animate",
    hidden = "hidden",
    overlay = "overlay",
    overlayOpen = "overlayOpen",
    overlayHidden = "overlayHidden",
    header = "header",
  } = classes;

  return (
    <>
      <div
        className={`${overlay} ${!open && overlayHidden} ${
          open && overlayOpen
        }`}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        tabIndex={-1}
        className={`${drawer} ${open && animate} ${
          !open && hidden
        } ${changeAnchor(anchor, classes)}`}
      >
        {child}
      </div>
    </>
  );
};

Drawer.propTypes = {
  open: PropTypes.bool.isRequired,
  anchor: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
