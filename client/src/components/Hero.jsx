import {
  CardBorder,
  CardColor,
  CardFont,
  CardSize,
  heroContent,
} from "../enums/enums";
import Card from "./Card";
import { useTypewriter } from "react-simple-typewriter";

const Hero = () => {
  // const [text] = useTypewriter({
  //   words: heroContent.TITLES,
  //   loop: 0,
  //   typeSpeed: 80,
  //   deleteSpeed: 20,
  //   delaySpeed: 1500,
  // });

  return (
    <section className="h-screen flex items-center">
      <div className="img_bg flex justify-center items-start">
        <Card
          // title={`Lorem, ipsum ${text}`}
          body={heroContent.BODY}
          cardBorder={CardBorder.HERO}
          cardColor={CardColor.HERO}
          cardFont={CardFont.HERO}
          cardSize={CardSize.HERO}
        ></Card>
      </div>
    </section>
  );
};

export default Hero;
