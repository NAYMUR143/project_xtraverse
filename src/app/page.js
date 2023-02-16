"use client";
import Link from "next/link";
import styled from "@emotion/styled";
import { Box } from "@mui/system";
import { Roboto } from "@next/font/google";
import bg from "../component/images/bg.png";
import Login from "../component/auth/signin";
import Image from "next/image";

const Herosec = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
  background-color: #212121;
  position: relative;
  p {
    font-size: 1.1em;
    padding: 14px 0px;
    color: rgba(255, 255, 255, 0.7);
  }
`;
const Imgsc = styled.div`
  position: absolute;
  top: 50%;
  left: 75%;
  transform: translate(-50%, -50%);
  width: 700px;
  height: 700px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Heading = styled.div`
  h1 {
    text-transform: uppercase;
    line-height: 130%;
    border-bottom: 2px solid rgba(255, 255, 255, 0.5);
    font-weight: 500;
    font-size: 3.7em;
    span {
      font-weight: 800;
    }
  }
`;
const H1 = styled.h1`
  padding-left: 50px;
`;

export default function Home() {
  return (
    <>
      <Herosec>
        <Box
          sx={{
            position: "relative",
            zIndex: "2",
          }}
        >
          <Heading>
            <h1>
              Instanly <span>Launch</span>
            </h1>
            <H1>
              And <span>Manage</span> your
            </H1>
            <h1>
              Next <span>NFT Project</span>
            </h1>
          </Heading>
          <p>
            Xtraverse streamlines the production of NFT projects by <br />{" "}
            equipping your agency with what it needs to scale without limits
          </p>
          <Login />
        </Box>
        <Imgsc>
          <Image src={bg} alt="bg image" />
        </Imgsc>
      </Herosec>
    </>
  );
}
