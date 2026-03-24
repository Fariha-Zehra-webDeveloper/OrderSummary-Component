import heroImg from '../assets/images/illustration-hero.svg';
function Hero(){
    return(
        <div className="hero-section">
          <img src={heroImg} alt="Hero Illustration" />
        </div>
    );
}
export default Hero;