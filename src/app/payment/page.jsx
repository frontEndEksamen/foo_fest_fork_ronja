"use client";

import { useState } from "react";
import Fieldset from "../components/Fieldset";
import Form from "../components/Form";
import Button from "../components/Button";
import FormButton from "../components/FormButton";
import BackArrowButton from "@/app/components/BackArrowButton.jsx";
import { useRouter } from "next/navigation";
import { useStore } from "@/app/store";
import { postReservation } from "@/lib/actions";

export default function Payment() {
  const router = useRouter();
  const { reservationId, setReservationMessage } = useStore();

  async function completeReservation(event) {
    event.preventDefault();

    // -----API POST request------
    const reservationData = { id: reservationId };
    console.log("reservationData vi sender med til postReservation", reservationData);

    const response = await postReservation(reservationData);
    setReservationMessage(response);

    // ---------------------------

    await router.push("./confirmation");
  }

  return (
    <div className="flex flex-col">
      <BackArrowButton href="book" />
      <div className="self-center">
        <form onSubmit={completeReservation}>
          <Fieldset title={"Insert payment info"}>
            <div className="flex flex-col gap-3  lg:mt-5 md:gap-4 max-sm:gap-7">
              <div className="flex flex-col">
                <label htmlFor="cardNumber">Card number:</label>
                <input
                  id="cardNumber"
                  type="text"
                  name="cardInformation"
                  autoComplete="cc-number"
                  className="w-56 bg-slate-200 rounded-xl pl-2 p-1"
                  minLength={16}
                ></input>
              </div>

              <div className="flex flex-col">
                <label htmlFor="cardExpirationMM cardExpirationYY">Expiration date:</label>
                <div className="flex bg-slate-200 rounded-xl w-fit p-1">
                  <input
                    id="cardExpirationMM"
                    type="text"
                    name="cardInformation"
                    autoComplete="cc-exp"
                    placeholder="MM "
                    maxLength={2}
                    minLength={2}
                    className="w-8 mr-2 ml-2 bg-slate-200 text-center "
                  ></input>
                  <span> / </span>
                  <input
                    id="cardExpirationYY"
                    type="text"
                    name="cardInformation"
                    autoComplete="cc-exp"
                    placeholder=" YY"
                    maxLength={2}
                    minLength={2}
                    className="w-8  ml-2 mr-2 bg-slate-200 text-center"
                  ></input>
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="cardCVC">Security number (CVC)</label>
                <input
                  id="cardCVC"
                  type="text"
                  name="cardInformation"
                  max={3}
                  className="w-20 bg-slate-200 rounded-xl pl-2 pr-2 text-center p-1"
                ></input>
              </div>

              <div className="flex gap-2 items-start">
                <input
                  id="termsCheckbox"
                  type="checkbox"
                  name="cardInformation"
                  className="bg-slate-200 rounded-xl pl-2 pr-2 text-center mt-1"
                  required
                ></input>
                <span className="text-red-500 font-bold">* </span>
                <label htmlFor="termsCheckbox">
                  I have read and agree to the website terms and conditions{" "}
                </label>
              </div>

              <div className="self-center sm: mt-5">
                <FormButton buttonText={"Submit purchase"}></FormButton>
              </div>
            </div>
          </Fieldset>
        </form>
      </div>
    </div>
  );
}
