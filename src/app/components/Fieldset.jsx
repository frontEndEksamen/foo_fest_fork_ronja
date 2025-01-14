export default function Fieldset({ children, title }) {
  // komponent brugt for at dele et form op i sektioner
  return (
    <fieldset className="flex flex-col md:fieldset-xlwidth xl:fieldset-xlwidth lg:fieldset-lgwidth w-80  bg-white  custom-border p-7 ">
      <legend className="sr-only">{title}</legend>
      <h5 className="mb-3">{title}</h5>

      {children}
    </fieldset>
  );
}
