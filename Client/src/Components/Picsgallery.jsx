import Modal from "react-bootstrap/Modal";
import ShareButton from "../title-module/ShareButton";
import SaveButton from "../title-module/SaveButton";
import { FaChevronLeft } from "react-icons/all";
import { useState } from "react";
import { useContext } from "react";
import { appContext } from "../../App";
import Image from "react-bootstrap/Image";

function PicsModal() {
  const {
    setShowPhotoSlideModal,
    showPhotoModal,
    setShowPhotoModal,
    photosData,
  } = useContext(appContext);
  const handleHide = () => {
    setShowPhotoModal(false);
  };
  const handleShow = () => {
    setShowPhotoSlideModal(true);
  };

  return (
    <Modal
      show={showPhotoModal}
      fullscreen={true}
      onHide={handleHide}
      scrollable
    >
      <Modal.Body>
        <div id="photo-modal-header">
          <div id="arrow-left-wrapper">
            <FaChevronLeft
              id="arrow-left"
              style={{ marginTop: "10px" }}
              onClick={handleHide}
            />
          </div>
          <div id="photo-modal-buttons" style={{ float: "right" }}>
            <ShareButton />
            <SaveButton />
          </div>
        </div>
        <div id="all-photos">
          <div id="style1-photo">
            <Image
              id="small-photo-2"
              style={{ width: "367px", height: "246px" }}
              src={
                "https://a0.muscache.com/im/pictures/miso/Hosting-52383325/original/b3581ace-16a9-49d5-a68b-99a289654bbf.jpeg?im_w=1200"
              }
              onClick={handleShow}
            />
            <Image
              id="small-photo-2"
              style={{ width: "367px", height: "499px" }}
              src={
                "https://a0.muscache.com/im/pictures/miso/Hosting-52383325/original/83dbb118-71db-4104-bc61-e5f02073cf35.jpeg?im_w=720://a0.muscache.com/im/pictures/miso/Hosting-52383325/original/b3581ace-16a9-49d5-a68b-99a289654bbf.jpeg?im_w=1200"
              }
              onClick={() => {
                setPhotoSlide(true);
              }}
            />
            <Image
              id="small-photo-2"
              style={{ width: "367px", height: "246px" }}
              src={
                "https://a0.muscache.com/im/pictures/miso/Hosting-52383325/original/8bb2c6dc-889b-4ea4-a15b-7a6c8a2d7207.jpeg?im_w=720"
              }
              onClick={handleShow}
            />
          </div>
          <Image
            id="small-photo-2"
            style={{ width: "740px", height: "498px" }}
            src={
              "https://a0.muscache.com/im/pictures/miso/Hosting-52383325/original/45b2c617-1a17-43ef-a1ba-f5ae140150bb.jpeg?im_w=1200"
            }
            onClick={handleShow}
          />
          <div id="style2-photo">
            <Image
              id="small-photo-2"
              style={{ width: "367px", height: "246px" }}
              src={
                "https://a0.muscache.com/im/pictures/miso/Hosting-52383325/original/cf41e5a1-47d8-4941-a9c2-f9300a66c92a.jpeg?im_w=720"
              }
              onClick={handleShow}
            />
            <Image
              id="small-photo-2"
              style={{ width: "367px", height: "246px" }}
              src={
                "https://a0.muscache.com/im/pictures/miso/Hosting-52383325/original/ce292b91-ef26-4034-ab7a-e2aa8ee16bcf.jpeg?im_w=1200"
              }
              onClick={handleShow}
            />
          </div>
          <Image
            id="small-photo-2"
            style={{ width: "740px", height: "498px" }}
            src={
              "https://a0.muscache.com/im/pictures/miso/Hosting-52383325/original/33723a0b-f574-4ae1-99ec-b1a2d4317cba.jpeg?im_w=720"
            }
            onClick={handleShow}
          />
          <div id="style2-photo">
            <Image
              id="small-photo-2"
              style={{ width: "367px", height: "246px" }}
              src={
                "https://a0.muscache.com/im/pictures/miso/Hosting-52383325/original/bd9cbcae-f80d-4821-83ad-1dd57139e3b6.jpeg?im_w=720"
              }
              onClick={handleShow}
            />
            <Image
              id="small-photo-2"
              style={{ width: "367px", height: "246px" }}
              src={
                "https://a0.muscache.com/im/pictures/miso/Hosting-52383325/original/5ff40b40-3474-47b6-b0e5-92c67fb451f7.jpeg?im_w=1200"
              }
              onClick={handleShow}
            />
          </div>
          <div id="style1-photo">
            <Image
              id="small-photo-2"
              style={{ width: "367px", height: "246px" }}
              src={
                "https://a0.muscache.com/im/pictures/miso/Hosting-52383325/original/c58b4639-2a42-4cd2-9a81-e7cac532ca09.jpeg?im_w=720"
              }
              onClick={handleShow}
            />
            <Image
              id="small-photo-2"
              style={{ width: "367px", height: "499px" }}
              src={
                "https://a0.muscache.com/im/pictures/miso/Hosting-52383325/original/b97c4bc0-1ac2-4abe-8355-2c40159d7bdf.jpeg?im_w=720"
              }
              onClick={handleShow}
            />
            <Image
              id="small-photo-2"
              style={{ width: "367px", height: "246px" }}
              src={
                "https://a0.muscache.com/im/pictures/miso/Hosting-52383325/original/9b719d4f-d2b6-4b68-acf5-1a26f179dce6.jpeg?im_w=1200"
              }
              onClick={handleShow}
            />
          </div>
          <Image
            id="small-photo-2"
            style={{ width: "740px", height: "498px" }}
            src={
              "https://a0.muscache.com/im/pictures/miso/Hosting-52383325/original/06798ccb-067b-46c5-9fc6-612f2abebdff.jpeg?im_w=720"
            }
            onClick={handleShow}
          />
          <div id="style2-photo">
            <Image
              id="small-photo-2"
              style={{ width: "367px", height: "246px" }}
              src={
                "https://a0.muscache.com/im/pictures/miso/Hosting-52383325/original/7128ce81-54ff-459d-b5e5-abe8fd364537.jpeg?im_w=720"
              }
              onClick={handleShow}
            />
            <Image
              id="small-photo-2"
              style={{ width: "367px", height: "246px" }}
              src={
                "https://a0.muscache.com/im/pictures/miso/Hosting-52383325/original/9ad1708f-f4f5-4bb2-8121-eaf7b9fac4e9.jpeg?im_w=720"
              }
              onClick={handleShow}
            />
          </div>
          <Image
            id="small-photo-2"
            style={{ width: "740px", height: "498px" }}
            src={
              "https://a0.muscache.com/im/pictures/miso/Hosting-52383325/original/9e9757d9-deab-4fee-82b8-8768cdc85b11.jpeg?im_w=720"
            }
            onClick={handleShow}
          />
          <div id="style2-photo">
            <Image
              id="small-photo-2"
              style={{ width: "367px", height: "246px" }}
              src={
                "https://a0.muscache.com/im/pictures/miso/Hosting-52383325/original/fe1bc992-bcda-4ac4-bfe8-f037f41f3a65.jpeg?im_w=720"
              }
              onClick={handleShow}
            />
            <Image
              id="small-photo-2"
              style={{ width: "367px", height: "246px" }}
              src={
                "https://a0.muscache.com/im/pictures/miso/Hosting-52383325/original/a61b04d4-5bd5-4bad-"
              }
              onClick={handleShow}
            />
          </div>
          <Image
            id="small-photo-2"
            style={{ width: "740px", height: "498px" }}
            src={
              "https://a0.muscache.com/im/pictures/miso/Hosting-52383325/original/87929166-24f8-4b48-b0d7-dc1917430160.jpeg?im_w=1200"
            }
            onClick={handleShow}
          />
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default PicsModal;
