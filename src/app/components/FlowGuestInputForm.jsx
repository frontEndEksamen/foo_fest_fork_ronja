"use client";
import { useStore } from "@/app/store";
import FormButton from "./FormButton";
import GuestInput from "./GuestInput";
import { postInfo } from "@/lib/supabase";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function FlowGuestInputForm({ isVisible }) {
  // hent antal billetter fra zustand store
  const { count } = useStore();

  const router = useRouter();

  // State for managing the guests array
  const [guests, setGuests] = useState([]);

  useEffect(() => {
    setGuests(() =>
      // lav et array med længde=count, value intet da det er tomt, check guests objekt med current index,
      //  hvis undefined, lav et objekt id:index+1
      Array.from({ length: count }, (_, index) => guests[index] || { id: index + 1 })
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
