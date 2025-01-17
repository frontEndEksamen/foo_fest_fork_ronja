"use client";
import { useRouter } from "next/navigation";
import Button from "@/app/components/Button";
import { useStore } from "@/app/store";

export default function Confirmation() {
  const router = useRouter();
  const { reservationMessage } = useStore();

  return (
    <div className="flex flex-col items-center gap-16 h-96 mt-24  ">
      <h1>
        {reservationMessage === "Reservation completed"
          ? reservationMessage
          : "Something went wrong, try again"}
      </h1>
      <Button href={"/"} buttonText="Return to home page" />
    </div>
  );
}
