"use client";

import React, { useState } from "react";
//img
import { userDefaultAvatar } from "../../assets/img";
import { ArrowsDownUp, MagnifyingGlass } from "phosphor-react";
//component
import Image from "next/image";
import useToken from "@/generated/hook/useToken.tsxabout";
import Link from "next/link";
import { ICON_SIZE_BIG } from "@/utils/constraint.jsabout";
import { sidebarTab } from "@/utils/sidebar.tsxabout";

//tailwindcss
import { PerfectScrollbar, initTE } from "tw-elements";

initTE({ PerfectScrollbar });

function Sidebar(props: { show: boolean; heading: string }) {
  const [activeTab, setActiveTab] = useState(0);
  const { userPayload } = useToken();

  // const dispatch = useDispatch();
  // const display = useSelector(displaySelector);
  // const consumer = useSelector(consumerSelector);

  const infoStyle = {
    fontSize: "12px",
  };

  return (
    <>
      {props.show && (
        <div className="sidebar_container">
          <div className="sidebar_header">
            <div className="sidebar_company_logo_container flex-center-between">
              <div className="company_image_logo flex-align-center">
                <Image src={userDefaultAvatar} alt="" />
                <h3 className="sidebar_heading_logo">
                  {props.heading}
                  {/*<p>{userPayload && userPayload.role}</p>*/}
                  <p>
                    {/*{userPayload &&*/}
                    {/*  userPayload.branch &&*/}
                    {/*  userPayload.branch.name}*/}
                  </p>
                </h3>
              </div>
              <div style={infoStyle}>
                {/*<div>Point: {userPayload && userPayload.point}</div>*/}
                {/*<div>COD: {userPayload && userPayload.cod}</div>*/}
              </div>
              <div className="sidebar_heading_dropdown">
                <ArrowsDownUp
                  className="sidebar_heading_dropdown--icon"
                  size={ICON_SIZE_BIG}
                />
              </div>
            </div>
            <div className="sidebar_search_box flex-align-center">
              <MagnifyingGlass
                className="sidebar_search_box--icon"
                size={ICON_SIZE_BIG}
              />
              <input placeholder="search" />
              <div className="sidebar_tab_heading_box"></div>
            </div>
            <ul className="sidebar_menu">
              {sidebarTab.length > 0 &&
                sidebarTab
                  .filter((item) => item.position === "header")
                  .map((item, index) => {
                    return (
                      <li
                        onClick={() => setActiveTab(index)}
                        key={index}
                        className={
                          index === activeTab && item.position === "header"
                            ? "sidebar_item active flex-center-between sidebar_item--header"
                            : "sidebar_item flex-center-between sidebar_item--header"
                        }
                      >
                        <div onClick={item?.callback} className="flex flex-row">
                          {item.icon}
                          <span className="sidebar_tab_label font-weight-b">
                            {item.label}
                          </span>
                        </div>
                        {item.option && (
                          <span className="sidebar_tab_option">
                            {item.option.count}
                          </span>
                        )}
                      </li>
                    );
                  })}
            </ul>
          </div>
          <div
            data-te-perfect-scrollbar-init
            data-te-suppress-scroll-x="true"
            className="sidebar_body relative h-[45vh] overflow-hidden"
          >
            <ul className="sidebar_menu">
              {sidebarTab.length > 0 &&
                sidebarTab
                  .filter(
                    (item) => item.position === "body",
                    //   &&
                    // userPayload &&
                    // (!item.role || item.role.includes(userPayload.role)),
                  )
                  .map((item, index) => {
                    return (
                      <Link
                        href={`${item.link}`}
                        onClick={() => setActiveTab(index)}
                        key={index}
                        style={{ color: "var(--text-primary)" }}
                      >
                        <li
                          className={
                            index === activeTab && item.position === "body"
                              ? "sidebar_item active"
                              : "sidebar_item"
                          }
                        >
                          {item.icon}
                          <span className="sidebar_tab_label font-weight-b">
                            {item.label}
                          </span>
                        </li>
                      </Link>
                    );
                  })}
            </ul>
          </div>
          <div className="sidebar_footer">
            <ul className="sidebar_menu sidebar_menu_footer">
              {sidebarTab.length > 0 &&
                sidebarTab
                  .filter((item) => item.position === "footer")
                  .map((item, index) => {
                    return (
                      <Link
                        href={`${item.link}`}
                        onClick={() => setActiveTab(index)}
                        key={index}
                      >
                        <li
                          className={
                            index === activeTab && item.position === "footer"
                              ? "sidebar_item active"
                              : "sidebar_item"
                          }
                        >
                          {item.icon}
                          <span className="sidebar_tab_label font-weight-b">
                            {item.label}
                          </span>
                        </li>
                      </Link>
                    );
                  })}
            </ul>
            <div className="sidebar_footer_avatar_user sidebar_company_logo_container flex-center-between">
              <div className="company_image_logo flex-align-center">
                <Image src={userDefaultAvatar} alt="" />
                <h3 className="sidebar_heading_logo">
                  {props.heading}
                  <p>jay@gmail.com</p>
                </h3>
              </div>
              <div className="sidebar_heading_dropdown">
                <ArrowsDownUp
                  className="sidebar_heading_dropdown--icon"
                  size={ICON_SIZE_BIG}
                />
              </div>
              <div className="sidebar_footer_avatar_dropdown_box">
                <ul className="sidebar_menu sidebar_menu_footer">
                  {sidebarTab.length > 0 &&
                    sidebarTab
                      .filter((item) => item.position === "sub")
                      .map((item, index) => {
                        return (
                          <li
                            onClick={() => setActiveTab(index)}
                            key={index}
                            className={
                              index === activeTab && item.position === "sub"
                                ? "sidebar_item active"
                                : "sidebar_item"
                            }
                          >
                            <Link href={`${item.link}`}>
                              {item.icon}
                              <span className="sidebar_tab_label font-weight-b">
                                {item.label}
                              </span>
                            </Link>
                          </li>
                        );
                      })}
                </ul>
                <h3 className="sidebar_heading_logo footer_version_app flex-center-between">
                  <p>delihub.v1</p>
                  <div className="dot"></div>
                  <p>Term & Condition</p>
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Sidebar;
