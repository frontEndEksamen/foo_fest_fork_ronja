import Image from "next/image";
import Button from "./Button";

export default function HomeAboutCamping() {
  return (
    <section id="campingAreas" className="mt-10">
      <div className="flex flex-col items-center">
        <Image
          src="/images/foofest_map.webp" // path to img
          alt="AI generated map over FooFest"
          width={500}
          height={500}
        />
      </div>
      <h2 className="text-center">Our camping areas</h2>

      <div className="flex flex-col gap-10 mt-10">
        <div>
          <h4>Svartheim</h4>
          <p>
            Tucked away in the heart of nature, Svartheim offers a peaceful, serene experience. It's
            the perfect spot for those seeking quiet, undisturbed nights under the stars. Situated
            further away from the stages, Svartheim allows you to escape the noise while still being
            a short walk from the action.
          </p>
        </div>
        <div>
          <h4>Nilfheim</h4>
          <p>
            Located near the festival's central hub, Nilfheim is a balanced option. With a mix of
            proximity to the stages and a relaxed atmosphere, it’s ideal for festival-goers who want
            to be close to the music but enjoy some quiet time between sets. Expect a lively, yet
            not overwhelming vibe.
          </p>
        </div>
        <div>
          <h4>Helheim</h4>
          <p>
            A bold choice for those looking for the full festival experience! Positioned near the
            Jotunheim stage, Helheim is known for its energetic and social atmosphere. This camping
            area is perfect for those who want to stay close to the action, surrounded by fellow
            festival lovers who embrace the loud, vibrant environment.
          </p>
        </div>
        <div>
          <h4>Muspelheim</h4>
          <p>
            The farthest from the stages, Muspelheim is designed for those who want a bit more
            solitude. Surrounded by rolling hills, it offers a quiet retreat with panoramic views. A
            great choice if you're looking to enjoy nature and recharge, while still being close
            enough to join in on the fun when the mood strikes.
          </p>
        </div>
        <div>
          <h4>Alfheim</h4>
          <p>
            For those who want a balance between social interaction and quiet relaxation, Alfheim is
            ideal. It’s centrally located, making it convenient for access to all the festival’s
            main attractions, including Vanaheim and Midgard stages. Alfheim offers a comfortable,
            community-oriented vibe without being too noisy or too distant from the action.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center mt-10">
        <Button href={"/book"} buttonText={"Book your stay now!"}></Button>
      </div>
    </section>
  );
}
