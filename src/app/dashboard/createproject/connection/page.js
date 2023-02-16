"use client";
import React from "react";
import styled from "@emotion/styled";
import { Grid, Box } from "@mui/material";
import stripe from "../../../../component/images/stripe.svg";
import facebook from "../../../../component/images/facebook.svg";
import godaddy from "../../../../component/images/godaddy.svg";
import discord from "../../../../component/images/discord.svg";
import team from "../../../../component/images/team.svg";
import apex from "../../../../component/images/apex.svg";
import ipfs from "../../../../component/images/ipfs.svg";
import twitter from "../../../../component/images/twitter.svg";
import unstoppable from "../../../../component/images/unstoppable.svg";
import tiktok from "../../../../component/images/tiktok.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
const Connectionsec = styled.div`
  width: 800px;
  margin: auto;
  h1 {
    text-align: center;
    margin: 5px 0px 20px;
  }
  img {
    width: 100px;
    height: 45px;
  }
  .cntpara {
    display: flex;
    align-items: center;
    height: 100%;
    p {
      color: #514f4f;
      font-weight: 600;
      font-size: 1.2em;
      span {
        color: #888787;
        font-size: 0.9em;
      }
    }
  }
  .process {
    padding: 15px 20px;
    background: #fff;
    color: #000;
    display: grid;
    gap: 10px;
    grid-template-columns: 15% auto 15%;
    border-bottom: 2px solid #bdc7d3;

    &:first-child {
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }
    &:last-child {
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      border-bottom: none;
    }
  }
`;
const Button = styled.div`
  background: #38a169;
  width: 100%;
  height: 45px;
  display: grid;
  place-content: center;
  cursor: pointer;
  color: #fff;
  border-radius: 5px;
  transition: all 0.3s;
  &:hover {
    background: #212121;
    color: #fff;
  }
`;
const Btn = styled.div`
  background: #38a169;
  width: 100%;
  height: 55px;
  display: grid;
  place-content: center;
  font-weight: 600;
  margin: 20px 0px;
  cursor: pointer;
  color: #fff;
  border-radius: 5px;
  transition: all 0.3s;
  &:hover {
    background: #fff;
    color: #000;
  }
`;
function Connection() {
  const router = useRouter();
  return (
    <Connectionsec>
      <h1>Let's get you on the path to success</h1>
      <Box sx={{ borderRadius: "10px" }}>
        <div className="process">
          <div className="cntpara">
            <Image src={facebook} alt="" />
          </div>
          <div className="cntpara">
            <p>Facebook leads</p>
          </div>
          <Button>Send Link</Button>
        </div>

        <div className="process">
          <div className="cntpara">
            <Image src={twitter} alt="" />
          </div>
          <div className="cntpara">
            <p>Twitter page & ads for project</p>
          </div>
          <Button>Send Link</Button>
        </div>

        <div className="process">
          <div className="cntpara">
            <Image src={discord} alt="" />
          </div>
          <div className="cntpara">
            <p>Discord of project</p>
          </div>
          <Button>Send Link</Button>
        </div>

        <div className="process">
          <div className="cntpara">
            <Image src={tiktok} alt="" />
          </div>
          <div className="cntpara">
            <p>Tik tok page/ads for project</p>
          </div>
          <Button>Send Link</Button>
        </div>

        <div className="process">
          <div className="cntpara">
            <Image src={stripe} alt="" />
          </div>
          <div className="cntpara">
            <p>Stripe</p>
          </div>
          <Button>Connect</Button>
        </div>
        <div className="process">
          <div className="cntpara">
            <Image src={team} alt="" />
          </div>
          <div className="cntpara">
            <p>Team</p>
          </div>
          <Button>Add</Button>
        </div>
        <div className="process">
          <div className="cntpara">
            <Image src={godaddy} alt="" />
          </div>
          <div className="cntpara">
            <p>Domain</p>
          </div>
          <Button>Add</Button>
        </div>
        <div className="process">
          <div className="cntpara">
            <Image src={apex} alt="" />
          </div>
          <div className="cntpara">
            <p>Apex - $200/m</p>
          </div>
          <Button>Add</Button>
        </div>
        <div className="process">
          <div className="cntpara">
            <Image src={ipfs} alt="" />
          </div>
          <div className="cntpara">
            <p>IPFS</p>
          </div>
          <Button>Add</Button>
        </div>
        <div className="process">
          <div className="cntpara">
            <Image src={godaddy} alt="" />
          </div>
          <div className="cntpara">
            <p>GoDaddy</p>
          </div>
          <Button>Add</Button>
        </div>
        <div className="process">
          <div className="cntpara">
            <Image src={unstoppable} alt="" />
          </div>
          <div className="cntpara">
            <p>Unstoppable (apply)</p>
          </div>
          <Button>Add</Button>
        </div>
        <div className="process">
          <div className="cntpara">
            <Image src={godaddy} alt="" />
          </div>
          <div className="cntpara">
            <p>Subdomain - $20/m</p>
          </div>
          <Button>Add</Button>
        </div>
        <div className="process">
          <div className="cntpara">
            <Image src={ipfs} alt="" />
          </div>
          <div className="cntpara">
            <p>IPFS API subdomain manager</p>
          </div>
          <Button>Add</Button>
        </div>
      </Box>
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Btn onClick={() => router.push("/dashboard/createproject/domain")}>
          Go For Domain
        </Btn>
      </Box>
    </Connectionsec>
  );
}

export default Connection;
