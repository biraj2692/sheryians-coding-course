import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
const ServiceDetails = () => {
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);
  
    return (
    <div>
        <h1>Service Name</h1>
        <h1>Deatials</h1>
        <button onClick={() => navigate(-1)} className="px-4 py-2 text-white transition-colors duration-200 bg-blue-600 rounded-lg hover:bg-blue-700">
                    Add to Cart
        </button>

        
    </div>
    )
}

export default ServiceDetails