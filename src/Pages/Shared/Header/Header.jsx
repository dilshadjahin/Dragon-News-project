import logo from '../../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center'>
            <img src={logo} alt=""  className='mx-auto'/>
            <p>Journalism Without Fear or Favour</p>
            <span className='text-lg '>{moment().format('LLLL')}</span>
            
        </div>
    );
};

export default Header;