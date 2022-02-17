import Vector from './icons/Vector.svg';
import Vector1 from './icons/Vector1.svg';
import Vector2 from './icons/Vector2.svg';
import Vector3 from './icons/Vector3.svg';
import Vectorlayer from './icons/Vectorlayer.svg';

const Navbar = () => {
    return ( 
<nav className="navbar">
<button className="btn">Sign in</button>
<img className='vtr' src={Vector} alt='Vector' />
<img className='vtr1' src={Vector1} alt='Vector1' />
<img className='vtr2' src={Vector2} alt='Vector2' />
<img className='vtr3' src={Vector3} alt='Vector3' />
<img className='vtrlayer' src={Vectorlayer} alt='Vectorlayer' />
</nav>
);
}
export default Navbar;