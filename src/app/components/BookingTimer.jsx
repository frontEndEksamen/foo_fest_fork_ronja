"use client";

export default function BookingTimer({ seconds, minutes }) {
  // komponent til den fysiske bookingtimer
  return (
    <div className="flex justify-end px-8 py-2 w-fit h-fit bg-red-300  h-40 w-30 rounded-full text-xl">
      <h5>
        <span>0{minutes}</span>:<span>{seconds < 10 ? `0${seconds}` : seconds}</span>
      </h5>
    </div>
  );
}
