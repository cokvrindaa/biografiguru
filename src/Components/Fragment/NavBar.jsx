import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <div className="fixed top-4 rounded-[100px] z-50 w-[98%] mx-auto items-center backdrop-blur-sm px-8 py-8 shadow-sm flex justify-between">
      <Logo />
      <div className="flex gap-6 invisible lg:visible">
        <Content text="Beranda" to="beranda" />
        <Content text="Tentang" to="tentang" />
        <Content text="Pendidikan" to="pendidikan" />
        <Content text="Karir" to="karir" />

        <Content text="Galeri" to="galeri" />
        <Content text="Penulis" to="penulis" />
        <Content text="Kontak" to="kontak" />
      </div>
    </div>
  );
};

const Logo = () => {
  return <p className="font-bold text-2xl font-Poppins">@cokvrinda'25</p>;
};

const Content = ({ text, to }) => {
  return (
    <Link
      to={to}
      smooth={true}
      duration={500}
      className="hover:font-bold text-xl font-Poppins cursor-pointer"
    >
      {text}
    </Link>
  );
};

export default NavBar;
