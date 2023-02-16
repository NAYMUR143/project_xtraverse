"use client";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import { Box } from "@mui/material";
import logo from "../../../component/images/logo.svg";
import { useSelectedLayoutSegment } from "next/navigation";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const drawerWidth = 240;

const Ul = styled.ul`
  width: 540px;
  display: flex;
  list-style: none;
  justify-content: space-between;
  margin: 100px auto 25px;
  li {
    display: flex;
    align-items: center;
    gap: 8px;
    span {
      font-size: 1.5em;
    }
  }
  a {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    padding: 5px 0px;
    display: block;
    font-size: 0.95em;
    font-weight: 500;
    &.activeli {
      color: rgba(255, 255, 255.1);
      font-weight: 700;
    }
  }
`;

export default function layout({ children }) {
  const activeSegment = useSelectedLayoutSegment();
  console.log(activeSegment);

  const links = [
    {
      label: " Template",
      path: "/dashboard/createproject",
      targetSegment: null,
      id: "1",
    },
    {
      label: " Upload NFTs",
      path: "/dashboard/createproject/uploadnfts",
      targetSegment: "uploadnfts",
      id: "3",
    },
    {
      label: " Edit homepage",
      path: "/dashboard/createproject/edithomepage",
      targetSegment: "edithomepage",
      id: "4",
    },
    {
      label: " Connection",
      path: "/dashboard/createproject/connection",
      targetSegment: "connection",
      id: "5",
    },
    {
      label: " Domain",
      path: "/dashboard/createproject/domain",
      targetSegment: "domain",
      id: "6",
    },
  ];
  return (
    <Box
      sx={{
        width: { lg: `calc(100% - ${drawerWidth}px)` },
        marginLeft: "auto",
        background: "#1f1f1f",
        height: "100%",
        overflow: "hidden",
        display: "grid",
        gridTemplateColumns: "100%",
        alignItems: "center",
      }}
    >
      <div>
        <Ul>
          {links.map((l, index) => {
            console.log(l.targetSegment);

            return (
              <>
                <li>
                  <Link
                    className={
                      activeSegment === l.targetSegment ? "activeli" : ""
                    }
                    key={l.id}
                    href={l.path}
                  >
                    {l.label}
                  </Link>
                  <span>/</span>
                </li>
              </>
            );
          })}
        </Ul>
        {children}
      </div>
    </Box>
  );
}
