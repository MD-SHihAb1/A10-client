import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdatePainting = () => {

    const painting = useLoaderData();

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



      const handleAddPainting = (event) => {
        event.preventDefault();
    
        console.log('Use Auth',user)
    
        const form = event.target;
        const formData = new FormData(form);
        const formProps = Object.fromEntries(formData.entries());
      
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
            
          } = formProps;
      
       
      
          const newPainting = {
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
            
          };
      
          console.log(newPainting);
    
    
    
    
          // send data to server
    
          fetch('http://localhost:5001/painting', {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(newPainting)
          })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if(data.insertedId){
              Swal.fire({
                title: 'Success!',
                text: 'Painting Added Successfully',
                icon: 'success',
                confirmButtonText: 'OK'
              })
            }
          })
    
    
    
    
        };


    return (
        <div>
            <h1>Update Painting 1111{name}</h1>


            <div>
        <h1>Add Painting</h1>
  
                    <div className="w-full max-w-lg p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-20">
                    <h1 className="text-center text-2xl">Update Painting: {name}</h1>
            
                    <form onSubmit={handleAddPainting} className="max-w-md mx-auto my-20">
                        <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="text"
                            name="photo"
                            required
                            placeholder=""
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        />
                        <label
                            htmlFor="photo"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Photo URL</label>
                        </div>
            
                        <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="text"
                            name="name"
                            required
                            placeholder=""
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        />
                        <label
                            htmlFor="name"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            First name
                        </label>
                        </div>
            
                        <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="text"
                            name="subcategory_Name"
                            required
                            placeholder=""
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        />
                        <label
                            htmlFor=""
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Subcategory name
                        </label>
                        </div>
            
                        <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="text"
                            name="short_description"
                            required
                            placeholder=""
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        />
                        <label
                            htmlFor=""
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Short description
                        </label>
                        </div>
            
                        <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="number"
                            name="price"
                            required
                            placeholder="Enter price"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        />
                        <label
                            htmlFor="price"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Price
                        </label>
                        </div>
            
                        <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="number"
                            name="rating"
                            required
                            placeholder=""
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        />
                        <label
                            htmlFor="rating"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Rating
                        </label>
                        </div>
            
                        <div className="flex gap-64">
                        <div>
                            <h1 className="my-3">Customization</h1>
                        </div>
                        <div>
                            <select name="customization" className="select w-full max-w-xs">
                            <option>Yes</option>
                            <option>No</option>
                            </select>
                        </div>
                        </div>
            
                        <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="number"
                            name="processing_time"
                            required
                            placeholder=""
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        />
                        <label
                            htmlFor="processing_time"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Processing time
                        </label>
                        </div>
            
                        <div className="flex gap-64">
                        <div>
                            <h1 className="my-3">Stock </h1>
                        </div>
                        <div>
                            <select name="stock" className="select w-full max-w-xs">
                            <option>In stock</option>
                            <option>Made to Order</option>
                            </select>
                        </div>
                        </div>
            
                        <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="text"
                            name="user_Name"
                            required
                            placeholder=""
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        />
                        <label
                            htmlFor="user_Name"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            User name
                        </label>
                        </div>
            
                        <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder=""
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        />
                        <label
                            htmlFor="email"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Email address
                        </label>
                        </div>
            
                        <button
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                        Add Painting
                        </button>
                        <br />
                    </form>
                    </div>
                </div>

        </div>
    );
};

export default UpdatePainting;