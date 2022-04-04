import React, { useState } from "react";
import imageResource from "../../assets/imageResoucres";
import { StyledMain, StyledMainModal } from "./Main.styled";
import { AbsoluteFlexContainerPC } from "../Flex/Flex.styled";
const Main = () => {
  const [toggleImage, setToggalImage] = useState(false);
  return (
    <StyledMain>
      <div className="product-image">
        <div className="product-feature">
          <img
            onClick={() => setToggalImage(true)}
            src={imageResource.Product1}
            alt="Feature-product-1"
          />
        </div>
        <div className="product-side-container">
          <img
            src={imageResource.ImageProduct1Thumbnail}
            alt="Thumbnail product 1"
          />
          <img
            src={imageResource.ImageProduct2Thumbnail}
            alt="Thumbnail product 2"
          />
          <img
            src={imageResource.ImageProduct3Thumbnail}
            alt="Thumbnail product 3"
          />
          <img
            src={imageResource.ImageProduct4Thumbnail}
            alt="Thumbnail product 4"
          />
        </div>
      </div>
      <div className="product-info">
        <div className="product-header">
          <h1>Sneaker Company</h1>
          <h2>Fall Limited Edition Sneakers</h2>
        </div>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div className="product-price">
          <h3 className="discount-price">$125.00</h3>
          <h3 className="discount">50%</h3>
          <h3 className="original-price">$250.00</h3>
        </div>

        <div className="button-container">
          <div className="operator-container">
            <h3 className="operand">-</h3>
            <h3 className="quantity">0</h3>
            <h3 className="operand">+</h3>
          </div>
          <button>
            <img src={imageResource.CartIconWhite} alt="Cart icon" />
            <p>Add to cart</p>
          </button>
        </div>
      </div>

      {toggleImage && (
        <AbsoluteFlexContainerPC>
          <StyledMainModal>
            <div onClick={() => setToggalImage(false)}>
              <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                  fill="#ffffff"
                  fill-rule="evenodd"
                />
              </svg>
            </div>
            <div className="product-image">
              <div className="product-feature">
                <div className="button previous">
                  <svg
                    width="12"
                    height="18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 1 3 9l8 8"
                      stroke="#1D2026"
                      stroke-width="3"
                      fill="none"
                      fill-rule="evenodd"
                    />
                  </svg>
                </div>

                <img src={imageResource.Product1} alt="Feature-product-1" />

                <div className="button next">
                  <svg
                    width="13"
                    height="18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m2 1 8 8-8 8"
                      stroke="#1D2026"
                      stroke-width="3"
                      fill="none"
                      fill-rule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div className="product-side-container">
                <img
                  src={imageResource.ImageProduct1Thumbnail}
                  alt="Thumbnail product 1"
                />
                <img
                  src={imageResource.ImageProduct2Thumbnail}
                  alt="Thumbnail product 2"
                />
                <img
                  src={imageResource.ImageProduct3Thumbnail}
                  alt="Thumbnail product 3"
                />
                <img
                  src={imageResource.ImageProduct4Thumbnail}
                  alt="Thumbnail product 4"
                />
              </div>
            </div>
          </StyledMainModal>
        </AbsoluteFlexContainerPC>
      )}
    </StyledMain>
  );
};

export default Main;
