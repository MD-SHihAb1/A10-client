import { IoMdTime } from "react-icons/io";
import { FaStar } from "react-icons/fa6";

const PaintingCard = ({painting}) => {

    const {
        photo,
        name,
        subcategory_Name,
        short_description,
        price,
        rating,
        customization,
        processing_time,
        stock,
        user_Name,
        email,
      } = painting;

    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={photo} alt="Movie"/></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Subcategory Name: {subcategory_Name}</p>
                    <p>Description: {short_description}</p>
                    
                    <p>Stock: {stock}</p>
                    <p>Customization: {customization}</p>
                    <p className="flex gap-1"> <FaStar />
                    
                     <p className="-my-1">  {rating} </p>
                    
                    </p>
                    <p className="flex gap-2"> < IoMdTime />
                    
                    <p className="-my-1">Processing Time {processing_time} Days</p>
                   
                   </p>
                   <p>Price: ${price}</p>

                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">View Details</button>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default PaintingCard;