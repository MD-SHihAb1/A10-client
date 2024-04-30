import { useLoaderData } from "react-router-dom";
import Mpainting from "../mpainting/Mpainting";

const MyPainting = () => {

    const paintings = useLoaderData();

    return (
        <div>
                    <div>
            <h1 className="text-4xl text-center my-28">My Painting</h1>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
          {
                paintings.map(painting => <Mpainting
                key={painting._id}
                painting={painting}
                ></Mpainting>)
            }
          </div>

        </div>
        </div>
    );
};

export default MyPainting;