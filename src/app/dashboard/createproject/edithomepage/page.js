"use client";
import styled from "@emotion/styled";
import React, { useState } from "react";
import { IoIosAddCircle, IoIosArrowDropright } from "react-icons/io";
import { useRouter } from "next/navigation";
import { BsPlusLg } from "react-icons/bs";
import Image from "next/image";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import Edithero from "@/component/dashboard/edithomepage/edithero";
import Editsales from "@/component/dashboard/edithomepage/editsales";
import Editfeature from "@/component/dashboard/edithomepage/editfeature";
import Editwaitlist from "@/component/dashboard/edithomepage/editwailist/editwailist";
import EditFAQ from "@/component/dashboard/edithomepage/editfaq";
import Editfooter from "@/component/dashboard/edithomepage/editfooter";
import demoimg from "../../../../component/images/blacklogo.svg";
const EditHomesc = styled.div`
  .activeDot {
    display: flex;
    gap: 8px;
    justify-content: center;
    margin: 30px 0px;
    li {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      list-style: none;
      background: transparent;
      border: 2px solid #fff;
      transition: all 0.3s;
      &.active {
        background: #fff;
      }
    }
  }
`;
const Wrapper = styled.div`
  width: 500px;
  margin: auto;
`;
const Step = styled.div``;

const Form = styled.form`
  width: 100%;
  color: rgba(255, 255, 255, 0.6);
  label {
    display: block;
    padding: 5px 0px;
  }
  input {
    background: transparent;
    border: 2px solid rgba(255, 255, 255, 0.6);
    border-radius: 10px;
    width: 100%;
    padding: 15px 20px;
    font-size: 1em;
    color: #fff;
    outline: none;
    font-family: "Open Sans", sans-serif;
  }
  input[type="submit"] {
    background-color: #fff;
    color: #2f2f2f;
    border: 2px solid #fff;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      background: transparent;
      color: #fff;
    }
  }
`;
const Select_box_container = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;

  align-items: center;

  > div {
    width: 100%;
    display: flex;
    flex-direction: row;

    justify-content: center;

    > div {
      height: 16vh;
      width: 16vh;

      margin: 15px;

      border-radius: 10px;

      border: 2px solid #fff;
    }
  }
`;

function page() {
  const [index, setIndex] = useState(0);

  //! Edit hero
  // blur color
  const [blur1, setBlur1] = useState("#1EA573");
  const [blur2, setBlur2] = useState("#97C35E");
  const [blur3, setBlur3] = useState("#20BC83");
  const [homeLogo, setHomeLogo] = useState(demoimg);
  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    setHomeLogo(imageFile);
    const reader = new FileReader();
    reader.onload = () => setHomeLogo(reader.result);
    reader.readAsDataURL(imageFile);
  };
  const [editHeroName, setEditHeroName] = useState("Robo Gremlins");
  const [editHeroScript, setEditHeroScript] = useState(
    "Our Fancy Shamncy NFT Project is the king of all fancy shamncy NFT projects. And we are sworn enemies of Gary v."
  );
  const handleNext = () => {
    setIndex(index === layouts.length - 1 ? 0 : index + 1);
  };
  const handlePrev = () => {
    setIndex(index === 0 ? layouts.length - 1 : index - 1);
  };
  const layouts = [
    <Edithero
      handleNext={handleNext}
      homeLogo={homeLogo}
      editHeroName={editHeroName}
      setEditHeroName={setEditHeroName}
      editHeroScript={editHeroScript}
      setEditHeroScript={setEditHeroScript}
      handleImageChange={handleImageChange}
      blur1={blur1}
      blur2={blur2}
      blur3={blur3}
      setBlur1={setBlur1}
      setBlur2={setBlur2}
      setBlur3={setBlur3}
    />,
    <Editsales handleNext={handleNext} />,
    <Editfeature handleNext={handleNext} />,
    <Editwaitlist handleNext={handleNext} />,
    <EditFAQ handleNext={handleNext} />,
    <Editfooter handleNext={handleNext} />,
  ];
  return (
    <EditHomesc>
      {layouts[index]}
      {/* <ul className="activeDot">
        <li className={index === 0 ? "active" : ""}></li>
        <li className={index === 1 ? "active" : ""}></li>
        <li className={index === 2 ? "active" : ""}></li>
        <li className={index === 3 ? "active" : ""}></li>
        <li className={index === 4 ? "active" : ""}></li>
        <li className={index === 5 ? "active" : ""}></li>
        <li className={index === 6 ? "active" : ""}></li>
      </ul> */}
    </EditHomesc>
  );
}

export default page;
