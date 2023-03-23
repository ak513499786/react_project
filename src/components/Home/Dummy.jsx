import React, { useRef } from "react";

function Dummy() {
  const parentDivRef = useRef(null);
  const leftDivRef = useRef(null);
  const rightDivRef = useRef(null);

  const handleParentScroll = () => {
    if (leftDivRef.current && rightDivRef.current) {
      leftDivRef.current.scrollLeft = parentDivRef.current.scrollTop;
      rightDivRef.current.scrollTop = parentDivRef.current.scrollLeft;
    }
  };

  return (
    <div
      ref={parentDivRef}
      style={{ position: "relative", height: "500px", overflow: "scroll" }}
      onScroll={handleParentScroll}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "80%",
          height: "100%",
        }}
        ref={leftDivRef}
      >
        {/* content for left div */}
        <div style={{ height: "2000px" }}>
          <div className="vertical-animation-container">
            <h1 className="vertical-animation-h1">Market Research</h1>
            <p className="vertical-animation-para">
              As technology is propelling the world into a new realm of
              disruptions, our strategic market research enables you to identify
              the viability of the product by directly taking insights from
              targeted consumers and market trends, enabling you to make
              decisions driven by consumer behaviour and data.
            </p>
          </div>
          <div className="vertical-animation-container">
            <h1 className="vertical-animation-h1">Market Research</h1>
            <p className="vertical-animation-para">
              As technology is propelling the world into a new realm of
              disruptions, our strategic market research enables you to identify
              the viability of the product by directly taking insights from
              targeted consumers and market trends, enabling you to make
              decisions driven by consumer behaviour and data.
            </p>
          </div>
          <div className="vertical-animation-container">
            <h1 className="vertical-animation-h1">Market Research</h1>
            <p className="vertical-animation-para">
              As technology is propelling the world into a new realm of
              disruptions, our strategic market research enables you to identify
              the viability of the product by directly taking insights from
              targeted consumers and market trends, enabling you to make
              decisions driven by consumer behaviour and data.
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "80%",
          width: "20%",
          height: "100%",
        }}
        ref={rightDivRef}
      >
        {/* content for right div */}
        <div style={{ width: "2000px", height: "100%" }}><div className="vertical-animation-container">
            <h1 className="vertical-animation-h1">Market Research</h1>
            <p className="vertical-animation-para">
              As technology is propelling the world into a new realm of
              disruptions, our strategic market research enables you to identify
              the viability of the product by directly taking insights from
              targeted consumers and market trends, enabling you to make
              decisions driven by consumer behaviour and data.
            </p>
          </div><div className="vertical-animation-container">
            <h1 className="vertical-animation-h1">Market Research</h1>
            <p className="vertical-animation-para">
              As technology is propelling the world into a new realm of
              disruptions, our strategic market research enables you to identify
              the viability of the product by directly taking insights from
              targeted consumers and market trends, enabling you to make
              decisions driven by consumer behaviour and data.
            </p>
          </div></div>
      </div>
    </div>
  );
}

export default Dummy;
