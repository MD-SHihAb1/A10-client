import Animaction from "../Animaction/Animaction";
import Galery from "../Galery/Galery";
import Painting from "../Painting/Painting";

import { Typewriter, Cursor, useTypewriter } from 'react-simple-typewriter'
import Review from "../Review/Review";

const Home = () => {

    const [text] = useTypewriter({
        words: [ 'Creative Realm', 'Artistic wonderland', 'Imagination', 'Artistic journey', 'Boundless inspirationr', 'Artistic realm'],
        loop: 3,
        onLoopDone: () => console.log(`loop completed after 3 runs.`)
      })
    return (
        <div>
           


           <div className="text-5xl text-center my-10">
           <h1 style={{margin: '50px'}}>Explore the 
            <span style={{fontWeight: 'bold', color: 'green', textShadow: '2px 2px 5px black'}}>
            {text}
            </span>
            <span style={{color: 'red'}}>
            <Cursor></Cursor>
            </span>
            </h1>
           </div>
           

            <div className="my-16">
           

            <p className="text-center text-lg my-24  ">Embark on a visual voyage with our Painting & Drawing Carousel! <br /> Explore a captivating array of artworks,  each a testament <br /> to creativity and expression.  Let inspiration take flight as you journey through <br /> a gallery of diverse styles and techniques. Join us and awaken your inner artist</p>
            </div>

                

            <div className="carousel w-full ">
            <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/2sBKKbW/3-a116c2ad-b3cd-4d23-a8e3-9c068b20484a.jpg" className="w-auto" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a> 
                    <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
            </div> 
            <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/2sBKKbW/3-a116c2ad-b3cd-4d23-a8e3-9c068b20484a.jpg" className="w-auto" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a> 
                    <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
            </div> 
            <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/XSjnrQr/78cd8445440169-5607a34add678.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a> 
                    <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
            </div> 
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/2S9N6hb/1ef80945440175-5607a2a1b2658.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a> 
                    <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

           <Painting></Painting>


           <div>
            <Galery></Galery>
           </div>
           <div>
            <Animaction></Animaction>
           </div>
           <div>
            <Review></Review>
           </div>


        </div>
    );
};

export default Home;


