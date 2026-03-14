import Lanyard from "../Element/Lanyard/Lanyard/Lanyard.jsx";
import SplitText from "../Element/SplitText.jsx";


const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};

const MoreAboutFragment = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center gap-4 px-4">
      <div className="w-full lg:w-[2000px] flex justify-center max-h-[600px] lg:max-h-full overflow-hidden">
        <Lanyard position={[0, 0, 12]} gravity={[0, -40, 0]} />
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
          text={`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, iure debitis? Sunt dolor adipisci ducimus nemo et mollitia exercitationem dolore vel? Harum quas sed, velit ab ut sit eligendi optio ad minus? Voluptatum commodi et sed voluptas unde quos amet laborum numquam natus voluptate minima delectus, totam ab eveniet omnis. Repudiandae maiores voluptatibus facere, similique odio esse sit eligendi asperiores numquam obcaecati, nam enim corrupti quis, eos qui modi quam quos blanditiis. Obcaecati id quidem distinctio quam sunt voluptatum sapiente molestias nemo cumque cum excepturi aspernatur aliquam molestiae quia magnam, ut nulla corporis alias optio voluptates temporibus veritatis. Optio, unde?`}
          className="text-justify text-large md:text-lg font-Poppins lg:text-lg"
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
       
      </div>
    </div>
  );
};

export default MoreAboutFragment;
