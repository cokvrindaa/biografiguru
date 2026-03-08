import SpotlightCard from "../Element/SpotlightCard.jsx";

import AnimatedContent from "../Element/AnimatedContent.jsx";
import DecryptedText from "../Element/DecryptedText.jsx";

const RiwayatPendidikanFragment = () => {
  return (
    <div>
      <DecryptedText
        text="Riwayat Pendidikan"
        animateOn="view"
        revealDirection="center"
        className="font-Poppins text-2xl lg:text-4xl mx-auto text-center font-bold "
      />{" "}
      <p className="mt-[-5px] mb-4 text-sm lg:text-2xl lg:mb-5">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium,
        excepturi.
      </p>
      <div className="flex flex-col gap-6 lg:grid lg:grid-cols-4 ">
        <Card
          text="SD Negri Amba"
          gambar={`/portofolio25/image/javascript.png`}
          textisi="2007"
        ></Card>
        <Card
          text="SMP Negri Amba"
          gambar={`/portofolio25/image/php.png`}
          textisi="2008"
        ></Card>

        <Card
          text="SMA Negri Amba"
          textisi="2009"
          gambar={`/portofolio25/image/tailwindcss.png`}
        ></Card>

        <Card
          text="Amba Institut"
          textisi="2010"
          gambar={`/portofolio25/image/htmlcss.png`}
        ></Card>
      </div>
    </div>
  );
};
const Card = (props) => {
  const { text, gambar, textisi } = props;
  return (
    <AnimatedContent
      distance={100}
      direction="vertical"
      reverse={false}
      duration={1.2}
      ease="power3.out"
      initialOpacity={0.2}
      animateOpacity
      scale={1.0}
      threshold={0.2}
      delay={0.3}
    >
      <SpotlightCard
        className="custom-spotlight-card relative flex items-start gap-4 h-full p-6"
        spotlightColor="rgba(0, 229, 255, 0.2)"
      >
        <img src={gambar} className="w-16 rounded-lg" />
        <div className="flex flex-col mt-1.5">
          <span className="text-white text-justify text-lg font-semibold">
            {text}
          </span>
          <p>{textisi}</p>
        </div>
      </SpotlightCard>
    </AnimatedContent>
  );
};
export default RiwayatPendidikanFragment;
