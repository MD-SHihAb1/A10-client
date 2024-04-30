import { useLoaderData } from "react-router-dom";
import PaintingCard from "../PaintingCard/PaintingCard";
import { Typewriter, Cursor, useTypewriter } from 'react-simple-typewriter'


const Painting = () => {


  const [text] = useTypewriter({
    words: [ 'Mountain view canvas', 'Artistic wonderland', ' Ink Outline Portrait', 'Realistic Oil Portrait,', ' Abstract Oil Painting', ' Figure Charcoal Sketch'],
    loop: 3,
    onLoopDone: () => console.log(`loop completed after 3 runs.`)
  })

    const paintings = useLoaderData();

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
            <h1 className="text-5xl text-center my-60">Painting: {paintings.length}</h1>

            

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
          {
                paintings.map(painting => <PaintingCard
                key={painting._id}
                painting={painting}
                ></PaintingCard>)
            }
          </div>

        </div>
    );
};

export default Painting;