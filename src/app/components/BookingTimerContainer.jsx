"use client";
import BookingTimer from "@/app/components/BookingTimer";
import { useTimer } from "react-timer-hook";
import React from "react";
import { FiShoppingCart } from "react-icons/fi";

export default function BookingTimerContainer({ children }) {
  // container til bookingtimer, der håndterer logikken bag
  // bla. wrapper denne komponenterne der skal bruge timeren og sender startfunktionen med ned

  // sæt timeren til 5 minutter
  const expiryTimestamp = new Date();
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 300);

  // lav variablerne der skal sendes med ned til BookingTimer komponenten
  const { seconds, minutes, start, pause } = useTimer({
    //
    expiryTimestamp,
    // når nedtellingen er ferdig, paus den og reload siden
    onExpire: () => {
      console.warn("Timer expired");
      pause();

      // Lav en message der vises når tiden er udløbet
      const message = document.createElement("p");
      message.textContent = `Time ran out,try again!`;
      message.style.position = "fixed";
      message.style.top = "50%";
      message.style.left = "50%";
      message.style.transform = "translate(-50%, -50%)";
      message.style.backgroundColor = "rgba(255, 255, 255)";
      message.style.color = "black";
      message.style.padding = "20px";
      message.style.borderRadius = "25px";
      message.style.border = "2px solid #FDBA74";
      message.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.5)";
      message.style.zIndex = "1000";
      document.body.appendChild(message);

      // baggrund når timeren løber ud
      const overlay = document.createElement("div");
      overlay.style.position = "fixed";
      overlay.style.top = "0";
      overlay.style.left = "0";
      overlay.style.width = "100%";
      overlay.style.height = "100%";
      overlay.style.backdropFilter = "blur(5px)";
      overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
      overlay.style.zIndex = "999";
      document.body.appendChild(overlay);

      // vis besked i 3 sekunder inden reload af siden
      setTimeout(() => {
        location.reload();
      }, 3000);
    },

    // ikke start timeren  automatisk
    autoStart: false,
  });

  return (
    <div className="col-span-2 flex flex-col gap-16 ">
      <div className="flex justify-between z-10  sticky top-20 ">
        <BookingTimer seconds={seconds} minutes={minutes} />
        <div className="col-start-2   xl:hide lg:hide">
          <a href="#shoppingCart">
            <FiShoppingCart className="h-10 w-10 transition-text duration-150 ease-in hover:text-orange-300" />
          </a>
        </div>
      </div>
      {/* mapper igennem alle children og sender timerens start funktion med */}
      {React.Children.map(children, (child) => React.cloneElement(child, { start }))}
    </div>
  );
}
