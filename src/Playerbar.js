import audiobar1 from './playericons/audiobar1.svg';
import audioslider from './playericons/audioslider.svg';
import foward from './playericons/foward.svg';
import fwd from './playericons/fwd.svg';
import player from './playericons/player.svg';
import timer from './playericons/timer.svg';
import voldown from './playericons/voldown.svg';
import volumebar from './playericons/volumebar.svg';
import volup from './playericons/volup.svg';

const Playerbar = () => {
    return ( 
       <div>
<img className='audiobar' src={audiobar1} alt='Audiobar' />
<img className='audioslider' src={audioslider} alt='Audiobar' />
        <img className='foward' src={foward} alt='Audiobar' />
        <img className='fwd' src={fwd} alt='Audiobar' />
        <img className='player' src={player} alt='Audiobar' />
        <img className='timer' src={timer} alt='Audiobar' /> 
        <img className='voldown' src={voldown} alt='Audiobar' />
        <img className='volumebar' src={volumebar} alt='Audiobar' />
        <img className='volup' src={volup} alt='Audiobar' />
       </div>
     );
}
 
export default Playerbar;