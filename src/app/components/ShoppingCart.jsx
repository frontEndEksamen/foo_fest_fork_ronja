"use client";

import Fieldset from "./Fieldset";
import Button from "./Button";
import { useState } from "react";

export default function ShoppingCart() {
  const fixedBookingFee = 99;
  const greenCampingFee = 299;
  // disse to skal kobles til antal biletter
  const regularTotal = 799;
  const vipTotal = 1299;
  return (
    <fieldset className="flex flex-col sticky top-36 mt-16   bg-orange-100 w-80 xl:fieldset-xlwidth lg:fieldset-lgwidth md:fieldset-xlwidth p-7 rounded-3xl shadow-xl">
      <h5 className="mb-3">Shopping cart</h5>
      <div className="flex flex-col justify-between min-h-96">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between rounded-2xl p-3 bg-orange-100">
            <p>Booking fee: </p>
            <p>{fixedBookingFee},-</p>
          </div>
          <hr className="border-orange-300"></hr>
          <div className="flex justify-between rounded-2xl p-3 bg-orange-100">
            <p>Regular pass: </p>
            <p>{regularTotal},-</p>
          </div>
          <hr className="border-orange-300"></hr>
          <div className="flex justify-between rounded-2xl p-3 bg-orange-100">
            <p>VIP pass: </p>
            <p>{vipTotal},-</p>
          </div>
        </div>

        <div>
          <div className="flex justify-between bg-white border-2 border-orange-300 rounded-2xl p-3 mb-4">
            <p>TOTAL: </p>
            <p className="font-bold">{fixedBookingFee + regularTotal + vipTotal},-</p>
          </div>
          {/* <div className="flex flex-col items-center">
            <Button href={"/payment"} buttonText={"Go to payment"}></Button>
          </div> */}
        </div>
      </div>
    </fieldset>
  );
}
