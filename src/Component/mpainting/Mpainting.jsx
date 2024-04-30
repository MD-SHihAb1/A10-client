import { IoMdTime } from "react-icons/io";
import { FaStar } from "react-icons/fa6";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const Mpainting = ({painting}) => {

    const { 
        _id,
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


      const handleDelete = _id => {
        console.log(_id)
    
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5001/painting/${_id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your Painting has been deleted.",
                            icon: "success"
                        });
                    }
                })
                .catch(error => {
                    console.error('Error deleting painting:', error);
                    
                });
            }
        });
    }
    


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

                    <div className="flex sm:gap-10 md:gap-64">
                    <div className="card-actions justify-end">
                    <button
                    onClick={() =>handleDelete(_id)}
                    className="btn btn-primary">Delete</button>
                    </div>
                    <div className="card-actions justify-start">
                   <Link to={`/myPainting/updatePainting/${_id}`}>
                   <button
                   
                   className="btn btn-primary">Update</button>
                   </Link>
                    </div>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default Mpainting;