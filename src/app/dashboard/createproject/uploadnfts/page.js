"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Box } from "@mui/system";
import styled from "@emotion/styled";
import Link from "next/link";
import { BsPlusLg } from "react-icons/bs";
import Image from "next/image";
import { Button } from "@mui/material";
import UploadNftsc from "@/component/dashboard/uploadnft/uploadNftsc";
import Nftdetails from "@/component/dashboard/uploadnft/nftdetails";
import Uploadnftvideo from "@/component/dashboard/uploadnft/uploadnftvideo";

const Main = styled.main`
  background: #1f1f1f;
  padding: 30px;
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
function page() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex(index === layouts.length - 1 ? 0 : index + 1);
  };
  const handlePrev = () => {
    setIndex(index === 0 ? layouts.length - 1 : index - 1);
  };

  // nft details name, utitlity, tag
  const [nftName, setNftName] = useState("Draken");
  const [addUntility, setAddUntility] = useState(
    "DRK is the first of its kind. Bringing AAA quality to the #NFT world with mythical creatures inside virtual realtiy space."
  );

  // const imageChange = (e) => {
  //   if (e.target.files && e.target.files.length > 0) {
  //     const slcimg = setSelectedImage(e.target.files[0]);
  //     console.log(slcimg);
  //   }
  // };

  // for upload videosec
  const [addStory, setAddStory] = useState(
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem,provident vero numquam aperiam ratione vel corrupti maioresconsequuntur aliquid impedit"
  );

  // video url
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState(null);
  const handleVideoChange = (event) => {
    const videoFile = event.target.files[0];
    setSelectedVideo(videoFile);
    const videoUrl = URL.createObjectURL(videoFile);
    setSelectedVideoUrl(videoUrl);
  };

  // for image url
  const [selectedImage, setSelectedImage] = useState();
  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    setSelectedImage(imageFile);
    const reader = new FileReader();
    reader.onload = () => setSelectedImage(reader.result);
    reader.readAsDataURL(imageFile);
  };
  const removeSelectedImage = () => {
    setSelectedImage();
  };

  //for tags
  const [tags, setTags] = useState([]);

  const layouts = [
    <UploadNftsc
      handleNext={handleNext}
      handleImageChange={handleImageChange}
      selectedImage={selectedImage}
      removeSelectedImage={removeSelectedImage}
    />,
    <Nftdetails
      handleNext={handleNext}
      selectedImage={selectedImage}
      handlePrev={handlePrev}
      setNftName={setNftName}
      nftName={nftName}
      addUntility={addUntility}
      setAddUntility={setAddUntility}
      setTags={setTags}
    />,
    <Uploadnftvideo
      handlePrev={handlePrev}
      handleVideoChange={handleVideoChange}
      selectedVideoUrl={selectedVideoUrl}
      setAddStory={setAddStory}
      addStory={addStory}
      selectedImage={selectedImage}
      nftName={nftName}
      addUntility={addUntility}
      tags={tags}
    />,
  ];

  return (
    <Main>
      {layouts[index]}
      <ul className="activeDot">
        <li className={index === 0 ? "active" : ""}></li>
        <li className={index === 1 ? "active" : ""}></li>
        <li className={index === 2 ? "active" : ""}></li>
      </ul>
    </Main>
  );
}

export default page;
