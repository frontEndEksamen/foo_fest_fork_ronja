"use client";
import { postReservation } from "@/lib/actions";
import { useStore } from "@/app/store";
import FormButton from "./FormButton";
import GuestInput from "./GuestInput";
import { postInfo } from "@/lib/supabase";
import { useState, useEffect } from "react";

export default function GuestInputForm()
{
  // hent antal billetter fra zustand store
  const { count, reservationId } = useStore();

  // State for managing the guests array
  const [guests, setGuests] = useState([])


  // Synchonize the guests array's length with the ticket amoutn
  useEffect(() =>
  {
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
      Array.from(
        { length: count },
        (_, index) => prev[index] ||
        { guestName: "", id: index + 1 })
    )
  }, [count])

  // Victor udskifter dette med det rigtige array af gæster
  // let guests = [
  //   { name: "Ronja", id: 1 },
  //   { name: "Ronja", id: 2 },
  //   { name: "Ronja", id: 3 },
  //   { name: "Ronja", id: 4 },
  // ];

  // Funktion der kører når form bliver submitted
  async function handleFormSubmit(event)
  {
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
    for (const guestData of guestsData)
    {
      await postInfo(guestData);
      console.log("FORMDATA SENT TO SUPABASE");
    }

    // ---------

    // -----API POST request------
    console.log("reservationId fra GIF:  ", reservationId);
    const reservationData = { id: reservationId };
    console.log("dette sender vi til postReservation", reservationData);

    try
    {
      const response = await postReservation(reservationData);
      console.log("Response from postReservation:", response);
    } catch (error)
    {
      console.error("Error in postReservation:", error);
    }

    // ---------------------------

    // console.log("reservationId from GuestInputForm: ", reservationId);
  }

  return (
    <form onSubmit={handleFormSubmit} className="flex flex-col gap-5 items-center">
      {guests.map((guest) => (
        <GuestInput key={guest.id} guest={guest} />
      ))}
      <FormButton buttonText={"Confirm reservation"}></FormButton>
    </form>
  );
}