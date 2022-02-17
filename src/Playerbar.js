import audiobar1 from './playericons/audiobar1.svg';
import Timer from './Timer';
import volup from './playericons/volup.svg';
import circle from './playericons/circle.svg';
import vol from './playericons/vol.svg';
import design from './playericons/design.svg';
import Volume from './Volume';
import Rewind from './Rewind'
import Forward from './Forward';
import Player from './Player';

const Playerbar = () => {
    return ( 
       <footer className='container'>
        <img className='audiobar' src={audiobar1} alt='Audiobar' />
        <img className='design' src={design} alt='design' />
        {/*<img className='timer' src={timer} alt='timer' />*/}
        <img className='circle' src={circle} alt='circlevector' />
        {/*<img className='timer1' src={timer} alt='timer1' />*/}
        <img className='volup' src={volup} alt='volup' />
        <img className='vol' src={vol} alt='vol' />
        <Timer type="primary" />
        <Timer type="tertiary" />
        <Player />
        <Volume />
        <Rewind />
        <Forward />
       </footer>
     );
}
 
export default Playerbar;