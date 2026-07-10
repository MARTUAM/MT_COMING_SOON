import { useEffect, useState } from 'react';
import Folder from '../Folder/Folder';
import TextType from '../TextType/TextType';
import mtWordmark from '../../assets/svg/mtfinal.svg';
import mtBadge from '../../assets/svg/mt_favicon.svg';
import perrito from '../../assets/svg/perrito_elegante.svg';
import './Hero.css';

const ALT_O = String.fromCharCode(0xf007);
const CAPTION_TEXT = `MUY PR${ALT_O}NT${ALT_O}`;

const folderItems = [
  <img src={perrito} alt="Perrito elegante" />,
  <img src={mtWordmark} alt="Marco Tulio" />,
  <img src={mtBadge} alt="MT" />
];

const useIsMobile = (breakpoint = 640) => {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.innerWidth <= breakpoint
  );

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const handleChange = e => setIsMobile(e.matches);
    mql.addEventListener('change', handleChange);
    return () => mql.removeEventListener('change', handleChange);
  }, [breakpoint]);

  return isMobile;
};

const Hero = () => {
  const isMobile = useIsMobile();

  return (
    <section className="hero">
      <div className="hero__overlay" />
      <div className="hero__folder">
        <Folder color="#cccbce" size={isMobile ? 1.4 : 2.3} items={folderItems} />
      </div>
      <TextType
        className="hero__caption"
        text={[CAPTION_TEXT]}
        typingSpeed={90}
        initialDelay={300}
        loop={false}
        showCursor
        cursorCharacter="_"
      />
    </section>
  );
};

export default Hero;
