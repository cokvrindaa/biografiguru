import Lanyard from "../Element/Lanyard/Lanyard/Lanyard.jsx";
import SplitText from "../Element/SplitText.jsx";
import SpotlightCard from "../Element/SpotlightCard.jsx";
import AnimatedContent from "../Element/AnimatedContent.jsx";

import { useState } from "react";
const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};

const isi = {
  deskirpsiBasic:
    "Nyoman Hendra Adi Wijaya lahir di Singaraja pada tanggal 14 April 1983. Beliau merupakan seorang guru yang mengajar pelajaran Agama Hindu di SMK TI Bali Global Denpasar. Beliau memiliki pengalaman mengajar siswa selama 15 tahun. Selama kegiatan ajar mengajar, beliau dikenal dengan sosok yang santai, humoris, ramah. Beliau juga berperan dalam membimbing siswa untuk memahami nilai-nilai agama serta contoh penerapanya dalam kehidupan sehari-hari.",
  latarBelakang: `Menjadi seorang guru merupakan bagian dari perjalanan hidup yang beliau yakini sebagai karma. Pada masa SMK, beliau termasuk siswa yang cukup nakal dan sering membuat guru merasa kesal. Namun, kini beliau berada di posisi yang sama seperti mereka dahulu, sehingga memberikan beliau sudut pandang dan pemahaman yang berbeda. 
    `,
  kehidupan: ` Beliau berasal dari keluarga yang sederhana secara ekonomi. Meskipun demikian, beliau merasa bangga karena orang tua beliau tetap berusaha menyekolahkan beliau hingga jenjang SMK. Masa kecil beliau merupakan masa yang sangat menyenangkan, karena belum adanya teknologi seperti telepon genggam maupun media sosial, sehingga kehidupan terasa lebih sederhana.`
};

const MoreAboutFragment = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center gap-4 px-4">
      <div className="w-full lg:w-[2000px] flex justify-center max-h-[660px] lg:max-h-full overflow-hidden">
        <Lanyard position={[0, 0, 11]} gravity={[0, -40, 0]} />
      </div>
      <div>
        <SplitText
          text={`Perjalanan Hidup`}
          className="text-justify text-large md:text-lg font-Poppins font-bold  lg:text-3xl"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="words"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          onLetterAnimationComplete={handleAnimationComplete}
        />

        <SplitText
          text={isi.deskirpsiBasic}
          className="text-justify text-large md:text-lg font-Poppins lg:text-lg mb-5"
          delay={40}
          duration={0.6}
          ease="power3.out"
          splitType="words"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          onLetterAnimationComplete={handleAnimationComplete}
        />
        <Card text="Latar Belakang" deskripsi={isi.latarBelakang}></Card>
        <Card text="Kehidupan Pribadi" deskripsi={isi.latarBelakang}></Card>
      </div>
    </div>
  );
};
const Card = (props) => {
  const { text, deskripsi } = props;
  const [open, setOpen] = useState(false);

  // menentukan batas karakter untuk preview
  const previewText = deskripsi.substring(0, 90) + "...";

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
          className="custom-spotlight-card relative flex flex-col gap-4 mt-5 h-full p-6 transition-all duration-500"
          spotlightColor="rgba(0, 229, 255, 0.2)"
        >
          <h2 className="text-white text-xl font-semibold">{text}</h2>

          {/* Jika dibuka, maka akan tampilkan deskirpsinya, jika tidak tampilkan preview saja */}
          <p className="text-gray-400 text-justify whitespace-pre-line">
            {open ? deskripsi : previewText}
          </p>
          {/* Jika di buka tampilkan less info, jika tidak tampilkan ore info */}
          <div className="text-xs text-white font-Poppins font-semibold uppercase">
            {open ? "Info lebih sedikit🔼 " : "Info lebih lanjut 🔽 "}
          </div>
        </SpotlightCard>
      </div>
    </AnimatedContent>
  );
};

export default MoreAboutFragment;
