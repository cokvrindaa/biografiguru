import SpotlightCard from "../Element/SpotlightCard.jsx";
import CountUp from "../Element/CountUp.jsx";
import AnimatedContent from "../Element/AnimatedContent.jsx";
import DecryptedText from "../Element/DecryptedText.jsx";
import { useState } from "react";
const RiwayatKarirFragment = () => {
  return (
    <div>
      <DecryptedText
        text="Riwayat Karir"
        animateOn="view"
        revealDirection="center"
        className="font-Poppins text-2xl lg:text-4xl mx-auto font-bold  "
      />{" "}
      <p className="mt-[-5px] mb-4 text-sm lg:text-2xl lg:mb-5">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium,
        excepturi, dengan {" "}
          <CountUp
            from={0}
            to={5}
            separator=","
            direction="up"
            duration={1}
            className="count-up-text font-Poppins font-bold"
            startCounting
          />
        {" "} tahun pengalaman kerja
      </p>
      <div className="flex flex-col gap-6 lg:grid lg:grid-cols-4 ">
        <Card
          text="SD Negri Amba"
          gambar={`/portofolio25/image/javascript.png`}
          textisi="2007"
          deskripsi = "Tes 1"
        ></Card>
        <Card
          text="SMP Negri Amba"
          gambar={`/portofolio25/image/php.png`}
          textisi="2008"
          deskripsi = "Tes 2"
        ></Card>

        <Card
          text="SMA Negri Amba"
          textisi="2009"
          gambar={`/portofolio25/image/tailwindcss.png`}
          deskripsi = "Tes 3"
        ></Card>

        <Card
          text="Amba Institut"
          textisi="2010"
          gambar={`/portofolio25/image/htmlcss.png`}
          deskripsi ="tes 4"
        ></Card>
      </div>
    </div>
  );
};
const Card = (props) => {
  const { text, gambar, textisi, deskripsi } = props;
  const [open, setOpen] = useState(false);

  return (
    <AnimatedContent
      distance={100}
      direction="vertical"
      duration={1.2}
      ease="power3.out"
      initialOpacity={0.2}
      animateOpacity
      threshold={0.2}
      delay={0.3}
    >
      <div onClick={() => setOpen(!open)} className="cursor-pointer">
        <SpotlightCard
          className="custom-spotlight-card relative flex flex-col gap-4 h-full p-6 transition-all duration-500"
          spotlightColor="rgba(0, 229, 255, 0.2)"
        >
          <div className="flex items-start gap-4">
            <img src={gambar} className="w-16 rounded-lg" />

            <div className="flex flex-col mt-1.5">
              <span className="text-white text-lg font-semibold">
                {text}
              </span>
              <p>{textisi}</p>
            </div>
          </div>

          {open && (
            <div className="mt-3 text-sm text-gray-300">
              {deskripsi}
            </div>
          )}

          <div className="mt-2 text-xs text-white font-Poppins font-semibold">
            {open ? "Less info " : "More info "}
          </div>
        </SpotlightCard>
      </div>
    </AnimatedContent>
  );
};
export default RiwayatKarirFragment;
