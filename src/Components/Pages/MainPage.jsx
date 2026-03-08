import MainAbout from "../Layout/MainAbout";
import ScrollVelocity from "../Element/ScrollVelocity.jsx";
import MoreAbout from "../Layout/MoreAbout.jsx";
import RiwayatPendidikan from "../Layout/RiwayatPendidikan.jsx";
import Kontak from "../Layout/Kontak.jsx";
import Galeri from "../Layout/Galeri.jsx";
import RiwayatKarir from "../Layout/RiwayatKarir.jsx";
import Penulis from "../Layout/Penulis.jsx";
import Footer from "../Layout/Footer.jsx";

const MainPage = () => {
  return (
    <div>
      <div id="beranda">
        <MainAbout />
      </div>

      <div id="tentang">
        <ScrollVelocity
          texts={[
            "PROFESIONAL TEACHER - SINCE 2010",
            "SMK TI BALI GLOBAL DENPASAR",
          ]}
          className="custom-scroll-text font-Poppins"
          velocity={40}
        />
        <MoreAbout />
      </div>

      <div id="pendidikan">
        <RiwayatPendidikan />
      </div>

      <div id="karir">
        <RiwayatKarir />
      </div>

      <div id="galeri">
        <Galeri></Galeri>
      </div>

      <div id="penulis">
        <Penulis></Penulis>
      </div>

      <div id="kontak">
        <Kontak />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainPage;
