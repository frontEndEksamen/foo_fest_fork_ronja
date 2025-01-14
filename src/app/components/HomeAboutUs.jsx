import Button from "./Button";

export default function HomepageInfo() {
  return (
    <section>
      <h2 className="text-center">About us</h2>
      <p>
        Join us for an unforgettable week at FooFest, where music, nature, and adventure collide!
        Set in a breathtaking landscape, FooFest features three epic stages — Midgard, Vanaheim, and
        Jotunheim — showcasing the best in live performances from renowned and emerging artists
        across a variety of genres. Whether you’re into rock, electronic, or indie vibes, there’s
        something for everyone! But that’s not all! FooFest offers a range of unique camping areas,
        each designed to give festival-goers a memorable experience. From quiet retreats to lively
        spots, you can find your perfect home-away-from-home for the weekend. Read more about our
        camping areas{" "}
        <a className="underline font-bold" href="#campingAreas">
          here!
        </a>
        Get ready to immerse yourself in music, creativity, and the best festival vibes!
      </p>
      <div className="flex flex-col items-center mt-10">
        <Button href={"/program"} buttonText={"See our program!"}></Button>
      </div>
    </section>
  );
}
