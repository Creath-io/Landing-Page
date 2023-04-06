import React from "react";

const Terms = () => {
  return (
    <div className="w-full">
      <div className="relative h-[80vh] flex justify-center items-center ">
        <div className="contain flex  flex-col items-center">
          <h1 className="heading text-[22px] md:!text-[35px] text-center ">
            Terms and Conditions
          </h1>
          <h3 className="max-w-[400px] font-Manrope text-secondary !mb-9 text-center text-[17px] leading-[45px] md:text-xl md:!leading-10 ">
            Lorem ipsum dolor it amet, con sec Lorem ipsum dolor Lorem ipsum
            dolor it ame
          </h3>
        </div>
        <div className="absolute bottom-0  w-full h-[100px] md:h-[147px]   rounded-r-[20px] bg-[url('/pattern.svg')] bg-no-repeat bg-cover "></div>
      </div>
    </div>
  );
};

export default Terms;