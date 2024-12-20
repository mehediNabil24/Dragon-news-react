
import logo from '../assets/logo.png';
import moment from 'moment';

const Header = () => {
    
    return (
        <div className='flex flex-col justify-center items-center py-2'>
            <div className="logo">
            <img className='w-[300px]' src={logo} alt="" />
            <h2 className='text-gray-400'>Journalism Without Fear or Favour</h2>
            <p>{moment().format('MMMM Do YYYY')}</p>
            </div>
            
        </div>
    );
};

export default Header;