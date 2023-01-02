import Image from "react-bootstrap/Image";
import React from "react";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import "./Pics.css";
const Pics = () => {
  const [show, setShowPhotoModal] = useState(false);

  return (
    <div className="outer-container">
      <div
        id="photos-Wrapper"
        style={{
          display: "flex",
          alignContent: "flex-start",
        }}
      >
        <div className="images">
          <div className="column1">
            <Image
              id="big-photo"
              className="photo-format"
              style={{
                height: "450px",
              }}
              src={
                "https://a0.muscache.com/im/pictures/miso/Hosting-52383325/original/b3581ace-16a9-49d5-a68b-99a289654bbf.jpeg?im_w=1200"
              }
              onClick={() => {
                setShowPhotoModal(true);
                // console.log(rentalData.photo[0]);
              }}
            />
          </div>
          <div className="column2">
            <Image
              id="small-photo-1"
              className="photo-format"
              style={{ height: "221px", width: "296px", position: "relative" }}
              src="https://a0.muscache.com/im/pictures/miso/Hosting-52383325/original/83dbb118-71db-4104-bc61-e5f02073cf35.jpeg?im_w=720"
              onClick={() => setShowPhotoModal(true)}
            />
            <p className="pspan" />

            <Image
              id="small-photo-2"
              style={{ height: "221px", width: "296px", position: "relative" }}
              src="https://a0.muscache.com/im/pictures/miso/Hosting-52383325/original/8bb2c6dc-889b-4ea4-a15b-7a6c8a2d7207.jpeg?im_w=720"
              onClick={() => setShowPhotoModal(true)}
            />
          </div>
          <div className="column3">
            <Image
              id="small-photo-3"
              className="photo-format"
              style={{ height: "221px", width: "296px", position: "relative" }}
              src="https://a0.muscache.com/im/pictures/miso/Hosting-52383325/original/45b2c617-1a17-43ef-a1ba-f5ae140150bb.jpeg?im_w=1200"
              onClick={() => setShowPhotoModal(true)}
            />
            <p className="pspan" />
            <Image
              id="small-photo-4"
              style={{ height: "221px", width: "296px", position: "relative" }}
              src="https://a0.muscache.com/im/pictures/miso/Hosting-52383325/original/cf41e5a1-47d8-4941-a9c2-f9300a66c92a.jpeg?im_w=720"
              onClick={() => setShowPhotoModal(true)}
            ></Image>
          </div>
        </div>
      </div>

      <div className="btndiv">
        <Button
          id="show-all-photos-btn"
          variant="light"
          onClick={() => setShowPhotoModal(true)}
        >
          <svg
            id="dots"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style={{
              display: "block",
              height: "16px",
              width: "16px",
              fill: "current color",
            }}
          >
            <path
              d="m3 11.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"
              fill-rule="evenodd"
            ></path>
          </svg>{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;Show all photos
        </Button>{" "}
      </div>
    </div>
  );
};

export default Pics;
