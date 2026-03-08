import CircularGallery from "../Element/CircularGallery.jsx";
import BlurText from "../Element/BlurText";

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

const GaleriFragment = () => {
  return (
    <div>
      <BlurText
        text="Galeri.."
        delay={150}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-2xl lg:text-[35px] text-center justify-center font-Poppins font-bold  lg:text-5xl"
      />
      <BlurText
        text="Kenang kenangan itu indah...."
        delay={150}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-2xl lg:text-[20px] text-center justify-center font-Poppins mt-4 "
      />
      <div
        style={{ height: "600px", position: "relative" }}
        className="mt-[-50px] md:mt-0"
      >
        <CircularGallery
          bend={0}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollEase={0.02}
        />
      </div>
    </div>
  );
};
export default GaleriFragment;
