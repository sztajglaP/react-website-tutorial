import aboutusImg from './images/aboutus.jpg'

const Aboutus = () => {
    return (
        <div className="aboutus">
            <h2 className="section-title">o nas</h2>
            <div className="wrapper">
                <div className="aboutus-box">

                <div className="aboutus-image">
                    <img src={aboutusImg} alt="" />
                </div>
                <div className="aboutus-text-box">
                    <p className="aboutus-text-title">Niezapomniane przygody</p>
                    <p className='aboutus-text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                        laborum. www.MMCSchool.pl
                    </p>
                </div>
                    
                </div>
            </div>
        </div>
    );
}
 
export default Aboutus;