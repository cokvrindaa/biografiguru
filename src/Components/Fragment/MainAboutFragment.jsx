import GradientText from "../Element/GradientText.Jsx";
import BlurText from "../Element/BlurText";
import AnimatedContent from "../Element/AnimatedContent.jsx";
import GlareHover from "../Element/GlareHover.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import ProfileCard from "../Element/ProfileCard.jsx";

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

const MainAboutFragment = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center  lg:gap-20  p-8">
      <div className="scale-60 md:scale-100 mt-[-10px] md:mt-0">
        <ProfileCard
          name="Javi A. Torres"
          title=""
          handle=""
          status=""
          contactText=""
          avatarUrl="/portofolio25/image/tesw.png"
          showUserInfo={false}
          enableTilt={true}
          enableMobileTilt={false}
          onContactClick={() => console.log("Contact clicked")}
          behindGlowColor="rgba(125, 190, 255, 0.67)"
          iconUrl="/portofolio25/image/logoTI.png"
          behindGlowEnabled
          innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
        />
      </div>
      <div className="gap-3 flex items-center flex-col justify-center mt-2">
        <Text />
        <div className="gap-3 flex flex-row justify-center mt-2 lg:mt-2">
          <Button link="https://www.instagram.com/cokvrindaaa/">
            <FontAwesomeIcon icon={faInstagram} />
          </Button>
          <Button link="https://github.com/cokvrindaa">
            <FontAwesomeIcon icon={faGithub} />
          </Button>
          <Button link="https://www.tiktok.com/@cokvrindaa">
            <FontAwesomeIcon icon={faTiktok} />
          </Button>
        </div>
      </div>
    </div>
  );
};
const Gambar = () => {
  return (
    <AnimatedContent
      distance={40}
      direction="vertical"
      reverse={true}
      duration={1.2}
      ease="power3.out"
      initialOpacity={0.2}
      animateOpacity
      scale={1.1}
      threshold={0.2}
      delay={0.3}
    >
      <img
        src={`/portofolio25/image/profilsatu.jpg`}
        className=" rounded-full w-58 justify-center items-center mb-5 m-auto lg:w-96"
      ></img>
    </AnimatedContent>
  );
};

const Button = (props) => {
  const { children, link } = props;
  return (
    <AnimatedContent
      distance={40}
      direction="vertical"
      reverse={true}
      duration={1.2}
      ease="power3.out"
      initialOpacity={0.2}
      animateOpacity
      scale={1.1}
      threshold={0.2}
      delay={0.3}
    >
      <button>
        <a href={link}>
          <GlareHover
            glareColor="#ffffff"
            glareOpacity={0.3}
            glareAngle={-30}
            glareSize={300}
            transitionDuration={800}
            playOnce={false}
          >
            <h2
              style={{
                fontSize: "20px",
                fontWeight: "900",
                color: "white",
                margin: 0,
                // marginLeft: "-2px",
              }}
            >
              {children}
            </h2>
          </GlareHover>
        </a>
      </button>
    </AnimatedContent>
  );
};

const Text = () => {
  return (
    <div>
      <BlurText
        text="Haloo 👋, nama saya"
        delay={150}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-[20px] md:mt-0 mt-[-100px] text-center justify-center lg:text-[25px]  font-Poppins"
      />

      <AnimatedContent
        distance={40}
        direction="vertical"
        reverse={true}
        duration={1.2}
        ease="power3.out"
        initialOpacity={0.2}
        animateOpacity
        scale={1.1}
        threshold={0.2}
        delay={0.3}
      >
        <GradientText
          colors={["#FFFF, #4079ff, #FFFF, #4079ff, #FFFF"]}
          animationSpeed={8}
          showBorder={false}
          className=" text-[54px] font-bold lg:text-[70px]"
        >
          Cok Vrinda
        </GradientText>
      </AnimatedContent>

      <BlurText
        text="Guru di SMK TI Bali Global Denpasar"
        delay={150}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-[20px] text-center justify-center lg:text-[25px]  font-Poppins"
      />
    </div>
  );
};

export default MainAboutFragment;
