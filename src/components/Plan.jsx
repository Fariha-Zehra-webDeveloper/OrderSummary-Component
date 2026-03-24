import musicIcon from '../assets/images/icon-music.svg';
function Plan(){
    return (
       <div className='plan-container'>
            <div className='plan-info'>
               <img src={musicIcon} alt="Music Icon" />
               <div className='plans'>
                <h3 className='plan-title'>Annual Plan</h3>
                <p className='plan-price'>$59.99/year</p>
               </div>
            </div>
            <a href="#" className='change-link'>Change</a>
       </div>
    );
}
export default Plan;