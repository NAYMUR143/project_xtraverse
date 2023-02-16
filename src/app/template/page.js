"use client";
import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";
import shadow from "../../component/images/shadow.svg";
const ShadowImg = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 400px;
  img {
    height: 100%;
    object-fit: cover;
  }
`;
function page() {
  return (
    <div>
      <ShadowImg>
        <Image src={shadow} alt="shadow img" />
      </ShadowImg>
    </div>
  );
}

export default page;
