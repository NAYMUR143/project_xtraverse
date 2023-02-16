"use client";
import React, { useState, Component } from "react";
import Slider from "react-slick";
import { Box } from "@mui/system";
import styled from "@emotion/styled";
import Link from "next/link";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import template1 from "../../../component/images/template1.png";
import template2 from "../../../component/images/template2.png";
import template3 from "../../../component/images/template3.png";
import template4 from "../../../component/images/template4.jpeg";
import template5 from "../../../component/images/template5.jpg";
import template6 from "../../../component/images/template6.jpg";
const SlderTemplatesc = styled.div`
  width: 100%;
  height: 100%;
  margin: 50px 0px 0px;
  .TitleTxt {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 100px;
    width: 100%;
    height: 100%;
    span {
      color: #fff;
    }
    h1 {
      color: #fff;
    }
    a {
      display: inline-block;
      padding: 10px 55px;
      background: transparent;
      border: 2px solid rgba(255, 255, 255, 0.6);
      border-radius: 5px;
      color: #fff;
      text-decoration: none;
      font-weight: 600;
      transition: all 0.3s;
      margin: 30px 0px;
      &:hover {
        background: #fff;
        color: #000;
      }
    }
  }
`;
const SliderSec = styled.div`
  width: 90%;
  object-fit: cover;
  span {
    text-align: center;
    display: block;
    padding: 10px 0px;
    color: rgba(255, 255, 255, 0.6);
  }
`;

function page() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <SlderTemplatesc>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={4.5}>
            <div className="TitleTxt">
              <div>
                <span>Step 3</span>
                <h1>Select Template</h1>

                <Link href="/dashboard/createproject/uploadnfts">
                  Next step
                </Link>
              </div>
            </div>
          </Grid>
          <Grid item xs={6} md={7.5}>
            <SliderSec>
              <Slider {...settings}>
                <Image src={template1} alt="Picture of the author" />
                <Image src={template2} alt="Picture of the author" />
                <Image src={template3} alt="Picture of the author" />
                <Image src={template4} alt="Picture of the author" />
                <Image src={template5} alt="Picture of the author" />
                <Image src={template6} alt="Picture of the author" />
              </Slider>
              <span>More templates to come!</span>
            </SliderSec>
          </Grid>
        </Grid>
      </Box>
    </SlderTemplatesc>
  );
}

export default page;
