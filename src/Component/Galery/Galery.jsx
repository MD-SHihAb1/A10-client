import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Animaction from "../Animaction/Animaction";


const Galery = () => {


    useEffect(() => {
        AOS.init({duration: "1000"})
    }, [])

    return (
        <div className="my-20">
            <div>
                
            </div>
       <div>
            <div className='font-poppins my-44'>
                <div>
                    <h1 className='text-6xl text-center  animate__animated animate__flipInX '>Explore Our Painting Gallery</h1>
                    
                    <br />
                    <br />
                    <p className='text-center text-xl'>Immerse yourself in a world of color and creativity with our exquisite painting gallery. <br /> From captivating landscapes to thought-provoking abstracts, each piece tells a unique story and invites <br /> you to experience the artist's vision. Discover the perfect masterpiece to adorn your space or simply indulge <br /> in the beauty of artistic expression. Welcome to our painting gallery, where every stroke ignites inspiration</p>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    
                </div>
                <div className="my-52">
                    <Animaction></Animaction>
                </div>
            </div>
                    <div>
               <div>
                <div data-aos="fade-right">
                <div className='w-1/3 mx-40'>
                        <div>
                        <img src="https://i.ibb.co/nnV0z4r/1ef80945440175-5607a2a1b2658.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <div data-aos="fade-left">
                <div className='w-1/3 mx-[60%]'>
                    <div>
                    <img src="https://i.ibb.co/P55bPxX/360-F-582156555-hbyp1b5f45x-Gt-Op2-PPDng-IOX4-YKv7t-ZF.jpg" alt="" />
                    </div>
                </div>
                </div>
               </div>
               <br />
               <br />
               <br />
               <br />
               <div>
                <div  data-aos="fade-right">
                <div className='w-1/3 mx-40'>
                        <div>
                        <img src="https://i.ibb.co/bJ6ND1J/H1039-L04167867.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <div data-aos="fade-left">
                <div className='w-1/3 mx-[60%]'>
                    <div>
                    <img src="https://i.ibb.co/xF3XMW5/largeschumann2.jpg" alt="" />
                    </div>
                </div>
                </div>
               </div>
               <br />
               <br />
               <br />
               <br />
               <div>
                <div  data-aos="fade-right">
                <div className='w-1/3 mx-40'>
                        <div>
                        <img src="https://i.ibb.co/FXrVf8f/1ef80945440175-5607a2a1b2658-1.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <div data-aos="fade-left">
                <div className='w-1/3 mx-[60%]'>
                    <div>
                    <img src="https://i.ibb.co/cJJm4HV/3-a116c2ad-b3cd-4d23-a8e3-9c068b20484a.jpg" alt="" />
                    </div>
                </div>
                </div>
               </div>
            </div>
        </div>
        </div>
        
    );
};

export default Galery;