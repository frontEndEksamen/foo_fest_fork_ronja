"use client";
import putReservation from "@/lib/actions";
import AreaInput from "./AreaInput";
import GuestPassPriceCalculator from "./GuestPassPriceCalculator";
import { useStore } from "@/app/store";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import FormButton from "./FormButton";

export default function FlowAreaAndAmount({ start, setIsVisible, isDisabled, setIsDisabled }) {
  // hent antal billetter og reservationID fra zustand store
  const { count } = useStore();
  const { reservationId, setReservationId } = useStore();

  // Funktion der kører når form bliver submitted
  async function handleFormSubmit(event) {
    // ingen refresh
    event.preventDefault();

    const formData = new FormData(event.target);

    // få areanavn og antal ledige pladser fra AreaInput's input value, og split dem ad ved : (kolon)
    const [area, availableSpots] = formData.get("area").split(":");

    // funktionen alert der kører warnings baseret på spot availability
    const alert = () => {
      if (availableSpots == 1) {
        // hvis der kun er en plads, brug ordet spot
        toast.warning(
          `There is only ${availableSpots} available spot in ${area}, try a different area!`,
          { position: "top-left" }
        );
      } else {
        // hvis der er flere, brug ordet spots

        toast.warning(
          `There are only ${availableSpots} available spots in ${area}, try a different area!`,
          { position: "top-left" }
        );
      }
    };

    // lav variabel der sendes med ned til putReservation (vores PUT reuquest)
    // sæt amount til at være værdien af count (antal billetter)
    const reservationData = { area, amount: count };

    // kør alert hvis antal biletter er større end antal ledige pladser
    if (count > availableSpots) {
      alert();
      setIsDisabled(false);
    } else {
      // ellers, start timeren
      start();

      // set isDisabled på form til true kun hvis availableSpots > count
      setIsDisabled(true);

      // variabel med returned reservationId
      const reservationId = await putReservation(reservationData);
      // set reservationId i store til at have værdi af det returnerede reservationId
      setReservationId(reservationId);
      // set isVisible to true here
      setIsVisible(true);
    }
  }

  return (
    <section>
      <form
        onSubmit={handleFormSubmit}
        className={`${
          isDisabled ? "form-disabled" : ""
        }  flex flex-col gap-16 items-center mb-16 z-0`}
      >
        <AreaInput />
        <GuestPassPriceCalculator />

        <FormButton buttonText={"Reserve your spots"}></FormButton>
      </form>

      <ToastContainer />
    </section>
  );
}
