"use client";
import { useState } from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import logo from "../../component/images/logo.svg";
import Sidebar from "@/component/dashboard/sidebar";
const Main = styled.main`
  background: #1f1f1f;
  padding: 30px;
  height: 100%;
`;
const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  .btnsc {
    display: flex;
    gap: 15px;
    a {
      text-decoration: none;
      border: 2px solid #bebebe;
      width: 120px;
      height: 42px;
      text-align: center;
      color: #fff;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s;
      &:hover {
        background: #fff;
        border: 2px solid #fff;
        color: #000;
      }
    }
  }
`;
const Dashboardsc = styled.div`
  width: 100%;
  position: relative;
`;

export default function layout({ children }) {
  return (
    <>
      <body style={{ background: "#1f1f1f" }}>
        <Main>
          <Dashboardsc>
            <Sidebar />
            {children}
          </Dashboardsc>
        </Main>
      </body>
    </>
  );
}
