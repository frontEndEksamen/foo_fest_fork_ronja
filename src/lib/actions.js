"use client";

// -------- FOOFEST API ----------
// PUT request to reserve spot
const glitchHeadersList = {
  Accept: "application/json",
  "Content-Type": "application/json",
  // Prefer: "return=representation",
};

export default async function putReservation(reservationData) {
  console.log("putReservation funktion kører");
  const response = await fetch("https://polarized-chrome-trouser.glitch.me/reserve-spot", {
    method: "PUT",
    headers: glitchHeadersList,
    body: JSON.stringify(reservationData),
  });

  const responseData = await response.json();
  const reservationId = responseData.id;
  console.log("reservationId returneret fra putReservation: ", reservationId);
  return reservationId;
}

// POST request with reservationId to confirm booking

export async function postReservation(reservationData) {
  console.log("postReservation funktion kører");
  const response = await fetch("https://polarized-chrome-trouser.glitch.me/fullfill-reservation", {
    method: "POST",
    headers: glitchHeadersList,
    body: JSON.stringify(reservationData),
  });

  const data = await response.json();
  const reservationMessage = data.message;
  console.log("returneret message fra postReservation", reservationMessage);
  return reservationMessage;
}
