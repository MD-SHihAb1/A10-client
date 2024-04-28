import { useLoaderData } from "react-router-dom";
import PaintingCard from "../PaintingCard/PaintingCard";


const Painting = () => {

    const paintings = useLoaderData();

    return (
        <div>
            <h1>Painting: {paintings.length}</h1>

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