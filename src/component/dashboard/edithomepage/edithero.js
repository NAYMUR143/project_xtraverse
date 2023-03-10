"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import styled from "@emotion/styled";
import Grid from "@mui/material/Grid";
import { IoMdCloudUpload } from "react-icons/io";
import { Form, PreviewBox } from "../uploadnft/uploadnft.style";
import { RiTicketLine } from "react-icons/ri";
import { HomepagePreview } from "./edithomepage.style";
import firstimg from "../../images/project1.png";
import { useRouter } from "next/navigation";
function Edithero(props) {
  const {
    handleNext,
    homeLogo,
    editHeroName,
    setEditHeroName,
    editHeroScript,
    handleImageChange,
    setEditHeroScript,
    blur1,
    blur2,
    blur3,
    setBlur1,
    setBlur2,
    setBlur3,
  } = props;
  const router = useRouter();
  return (
    <>
      <Box
        sx={{
          width: {
            sx: "90%",
            lg: "100%",
            xl: "80%",
          },
          margin: "auto",
          padding: "50px",
        }}
      >
        <Grid container spacing={{ md: 2, xl: 4 }}>
          <Grid item xs={4} lg={4.5} xl={4.5}>
            <Form className="forminput">
              <Grid container spacing={2}>
                <h1 style={{ marginBottom: "35px" }}>Edit Hero</h1>
                <Grid xs={12}>
                  <Grid container spacing={{ lg: 2, xl: 4 }}>
                    <Grid xs={4}>
                      <p className="clrP">Color 1</p>
                      <div className="colorbox">
                        <input
                          type="color"
                          onChange={(e) => setBlur1(e.target.value)}
                        />
                        <span style={{ background: blur1 }}></span>
                      </div>
                    </Grid>
                    <Grid xs={4}>
                      <p className="clrP">Color 2</p>

                      <div className="colorbox">
                        <input
                          type="color"
                          onChange={(e) => setBlur2(e.target.value)}
                        />
                        <span style={{ background: blur2 }}></span>
                      </div>
                    </Grid>
                    <Grid xs={4}>
                      <p className="clrP">Color 3</p>
                      <div className="colorbox">
                        <input
                          type="color"
                          onChange={(e) => setBlur3(e.target.value)}
                        />
                        <span style={{ background: blur3 }}></span>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid xs={12}>
                  <Box
                    sx={{
                      marginTop: "15px",
                    }}
                  >
                    <div className="inputsc">
                      <input
                        type="file"
                        placeholder="upload Logo"
                        onChange={handleImageChange}
                      />
                      <span>
                        Upload Logo
                        <IoMdCloudUpload />
                      </span>
                    </div>
                  </Box>
                </Grid>
                <Grid xs={12}>
                  <Box>
                    <span>Heading</span>
                    <input
                      type="text"
                      placeholder="Ex: Robo Gremlins"
                      onChange={(e) => setEditHeroName(e.target.value)}
                    />
                  </Box>
                </Grid>
                <Grid xs={12}>
                  <Box sx={{}}>
                    <span>Subtext</span>
                    <input
                      onChange={(e) => setEditHeroScript(e.target.value)}
                      type="text"
                      placeholder="EX: Our Fancy shamny NFT..."
                    />
                  </Box>
                </Grid>
                <Grid xs={12}>
                  <Button
                    sx={{
                      background: "#a3f6ab",
                      border: "none",
                      width: "100%",
                      display: "block",
                      padding: "15px ",
                      color: "#000",
                      margin: "15px 0px",
                      "&:hover": {
                        background: "#fff",
                      },
                    }}
                  >
                    Update
                  </Button>
                  <Button
                    sx={{
                      background: "transparent",
                      border: "2px solid #fff",
                      width: "100%",
                      display: "block",
                      padding: "10px ",
                      color: "#000",
                      margin: "15px 0px",
                      color: "#fff",
                      "&:hover": {
                        background: "#fff",
                        color: "#000",
                      },
                    }}
                    onClick={() =>
                      router.push("/dashboard/createproject/connection")
                    }
                  >
                    Continue
                  </Button>
                </Grid>
              </Grid>
            </Form>
          </Grid>
          {/* Preview section */}
          <Grid
            item
            xs={8}
            lg={7.5}
            xl={7.5}
            sx={{
              display: "grid",
              placeItems: "center",
            }}
          >
            <Box
              sx={{
                border: "2px solid #BEBEBE",
                padding: "3px",
                borderRadius: "10px",
                width: "100%",
                height: {
                  xl: "600px",
                  md: "470px",
                },
              }}
            >
              <HomepagePreview>
                {/* svg  */}
                <svg
                  width="1285"
                  height="337"
                  viewBox="0 0 1285 337"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_f_403_33)">
                    <circle
                      cx="711"
                      cy="-55"
                      r="238"
                      transform="rotate(180 711 -55)"
                      fill="url(#paint0_linear_403_33)"
                    />
                  </g>
                  <g filter="url(#filter1_f_403_33)">
                    <circle
                      cx="662"
                      cy="-145"
                      r="238"
                      transform="rotate(180 662 -145)"
                      fill="url(#paint1_linear_403_33)"
                    />
                  </g>
                  <g filter="url(#filter2_f_403_33)">
                    <circle
                      cx="392"
                      cy="-124"
                      r="238"
                      transform="rotate(180 392 -124)"
                      fill={blur2}
                    />
                  </g>
                  <g filter="url(#filter3_f_403_33)">
                    <circle
                      cx="893"
                      cy="-107"
                      r="238"
                      transform="rotate(180 893 -107)"
                      fill={blur1}
                    />
                  </g>
                  <g filter="url(#filter4_f_403_33)">
                    <circle
                      cx="697"
                      cy="-145"
                      r="238"
                      transform="rotate(180 697 -145)"
                      fill="url(#paint2_linear_403_33)"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_403_33"
                      x="319"
                      y="-447"
                      width="784"
                      height="784"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation="77"
                        result="effect1_foregroundBlur_403_33"
                      />
                    </filter>
                    <filter
                      id="filter1_f_403_33"
                      x="270"
                      y="-537"
                      width="784"
                      height="784"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation="77"
                        result="effect1_foregroundBlur_403_33"
                      />
                    </filter>
                    <filter
                      id="filter2_f_403_33"
                      x="0"
                      y="-516"
                      width="784"
                      height="784"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation="77"
                        result="effect1_foregroundBlur_403_33"
                      />
                    </filter>
                    <filter
                      id="filter3_f_403_33"
                      x="501"
                      y="-499"
                      width="784"
                      height="784"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation="77"
                        result="effect1_foregroundBlur_403_33"
                      />
                    </filter>
                    <filter
                      id="filter4_f_403_33"
                      x="305"
                      y="-537"
                      width="784"
                      height="784"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation="77"
                        result="effect1_foregroundBlur_403_33"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_403_33"
                      x1="711"
                      y1="-293"
                      x2="711"
                      y2="183"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color={blur1} />
                      <stop offset="1" stop-color={blur2} />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_403_33"
                      x1="662"
                      y1="-383"
                      x2="662"
                      y2="93"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color={blur3} />
                      <stop offset="1" stop-color={blur1} />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_403_33"
                      x1="697"
                      y1="-383"
                      x2="697"
                      y2="93"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color={blur2} />
                      <stop offset="1" stop-color={blur3} />
                    </linearGradient>
                  </defs>
                </svg>

                <div className="homesec">
                  <div className="headersc">
                    <div className="logo">
                      <Image
                        src={homeLogo}
                        alt="logo"
                        width={100}
                        height={100}
                        style={{ width: "100%", objectFit: "cover" }}
                      />
                    </div>
                    <div className="headerbtn">
                      <button>Collection</button>
                      <Button>Connect Wallet</Button>
                    </div>
                  </div>
                  <div className="herosec">
                    <div className="herotxt">
                      <h1>{editHeroName}</h1>
                      <p>{editHeroScript}</p>
                      <Button>GO TO NFTS</Button>
                    </div>
                    <div className="heroimgs">
                      <Image src={firstimg} alt="" />
                      <Image src={firstimg} alt="" />
                      <Image src={firstimg} alt="" />
                    </div>
                  </div>
                </div>
              </HomepagePreview>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Edithero;
