import spaceship from "../assets/spaceship.png";

function Spaceship() {
  return (
    <div className="w-[100px] h-[100px] md:w-[300px] md:h-[300px] lg:w-fit lg:h-fit  absolute bottom-4 left-12 animate-bounceSlow opacity-30">
      <img src={spaceship} alt="spaceship" />
    </div>
  );
}

export default Spaceship;
