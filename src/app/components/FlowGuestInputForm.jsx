"use client";
import { useStore } from "@/app/store";
import FormButton from "./FormButton";
import GuestInput from "./GuestInput";
import { postInfo } from "@/lib/supabase";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function FlowGuestInputForm({ isVisible, setIsVisible }) {
  // hent antal billetter fra zustand store
  const { count, reservationId, setReservationMessage } = useStore();

  const router = useRouter();

  // State for managing the guests array
  const [guests, setGuests] = useState([]);

  // Synchonize the guests array's length with the ticket amount
  useEffect(() => {
    setGuests((prev) =>
      /*
          A few things happen here:
            1.
            Using the .from() method on the Array object to create a new Array object
            
            2.
            The length of the array is being set to "count", which is the same as the amount of tickets (this essentially sets the length of the array to be the same as the amount of tickets)

            3.
            A callback function keeping track of the current index is passed to the .from() method (this callback takes two arguments - the value current value of the item and the index number of the current item - but since we only care about the indices, the first argument is left empty (represented by the underscore))

            The prev[index] retrieves the existing guest object at the current index in the guests array (the state of the array in the previous iteration). If no previous index exists, only an id is being set, and the value is left empty.  

      */
      Array.from({ length: count }, (_, index) => prev[index] || { guestName: "", id: index + 1 })
    );
  }, [count]);

  async function handleFormSubmit(event) {
    // ingen refresh
    event.preventDefault();

    //---- SUPABASE POST request ----
    const formData = new FormData(event.target);
    const guestsData = guests.map((guest) => ({
      guestFirstName: formData.get(`guestFirstName_${guest.id}`),
      guestLastName: formData.get(`guestLastName_${guest.id}`),
      guestEmail: formData.get(`guestEmail_${guest.id}`),
      guestPhone: formData.get(`guestPhone_${guest.id}`),
    }));

    // looper igennem guestsData og for hver guest sender den en POST request med postInfo(guestData) til supabase.
    for (const guestData of guestsData) {
      await postInfo(guestData);
    }

    // ---------------------------

    await router.push("./payment");
  }

  return (
    <form
      onSubmit={handleFormSubmit}
      className={`${isVisible ? "" : "hidden"} flex flex-col gap-16 items-center`}
    >
      <div className=" grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-5">
        {guests.map((guest) => (
          <GuestInput key={guest.id} guest={guest} />
        ))}
      </div>
      <FormButton buttonText={"Confirm reservation"}></FormButton>
    </form>
  );
}
