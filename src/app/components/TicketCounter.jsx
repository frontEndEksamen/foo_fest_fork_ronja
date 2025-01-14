"use client";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import Fieldset from "@/app/components/Fieldset.jsx";

export default function TicketCounter({
  ticketType,
  ticketPrice,
  count,
  onIncrement,
  onDecrement,
}) {
  return (
    <Fieldset>
      <article
        className={`${
          ticketType === "VIP" ? "vip-ticket-counter-background-color" : "custom-border"
        } w-[300px] h-[150px] rounded-[20px]`}
      >
        <header className="py-4">
          <h4 className="flex justify-around whitespace-nowrap">
            {ticketType} pass: <span>{ticketPrice}</span>
          </h4>
        </header>
        <div className="mx-auto px-4 py-2 flex justify-between items-center my-4 w-[60%] bg-white rounded-md">
          <button className="decrement-btn" onClick={onDecrement} type="button">
            <CiCircleMinus size={30} />
          </button>
          <span className="guest-counter">{count}</span>
          <button className="increment-btn" onClick={onIncrement} type="button">
            <CiCirclePlus size={30} />
          </button>
        </div>
      </article>
    </Fieldset>
  );
}
