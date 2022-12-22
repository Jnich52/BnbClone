import Image from "react-bootstrap/Image";
import React from "react";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { Modal } from "react-bootstrap";

const Pics = () => {
  const [show, setShowPhotoModal] = useState(false);

  return (
    <div id="photos-Wrapper">
      <Image
        id="big-photo"
        style={{ width: "550px", height: "497px", position: "absolute" }}
        src={
          "https://a0.muscache.com/im/pictures/miso/Hosting-52383325/original/b3581ace-16a9-49d5-a68b-99a289654bbf.jpeg?im_w=1200"
        }
        onClick={() => {
          setShowPhotoModal(true);
          console.log(rentalData.photo[0]);
        }}
      />
      <div id="photoColumn">
        <Image
          id="small-photo-1"
          style={{ width: "272px", height: "230px", position: "Absolute" }}
          src="https://a0.muscache.com/im/pictures/miso/Hosting-52383325/original/83dbb118-71db-4104-bc61-e5f02073cf35.jpeg?im_w=720"
          onClick={() => setShowPhotoModal(true)}
        />
        <Image
          id="small-photo-2"
          style={{ width: "272px", height: "260px", position: "relative" }}
          src="https://a0.muscache.com/im/pictures/miso/Hosting-52383325/original/8bb2c6dc-889b-4ea4-a15b-7a6c8a2d7207.jpeg?im_w=720"
          onClick={() => setShowPhotoModal(true)}
        />
      </div>
      <div id="photoColumn2">
        <Image
          id="small-photo-3"
          style={{ width: "272px", height: "230px", position: "relative" }}
          src="https://a0.muscache.com/im/pictures/miso/Hosting-52383325/original/45b2c617-1a17-43ef-a1ba-f5ae140150bb.jpeg?im_w=1200"
          onClick={() => setShowPhotoModal(true)}
        />
        <Image
          id="small-photo-4"
          style={{ width: "272px", height: "260px", position: "relative" }}
          src="https://a0.muscache.com/im/pictures/miso/Hosting-52383325/original/cf41e5a1-47d8-4941-a9c2-f9300a66c92a.jpeg?im_w=720"
          onClick={() => setShowPhotoModal(true)}
        />
        <Button
          id="show-all-photos-btn"
          variant="light"
          onClick={() => setShowPhotoModal(true)}
        >
          {/* <TbGridDots
            style={{
              width: "18px",
              height: "18px",
            }}
          />{" "} */}
          Show all photos
        </Button>
      </div>
    </div>
  );
};

export default Pics;
