import React from 'react'
import ContohGambar from "assets/images/img-mostpick1.jpg";

export default function Categories(props) {

    return(
        props.data.map((item, index) => {
            return (
                <div className='container section-categories' key={`categories-${index}`}>
                    <h4 className='mb-3'>{item.name}</h4>

                    <div className='container-grid'>
                        {
                            item.items.map((item2, index2) => {
                                return(
                                    <div className='item column-3 row-1'>
                                        <div className='card card-featured'>
                                            {
                                                item2.isPopular ? 
                                                <>
                                                <div className='tag'>
                                                    Popular
                                                    <span className='font-weight-light'> Choice </span>
                                                </div>
                                                </> : ""
                                            }
                                            
                                            <figure className='img-wrapper'>
                                                <img src={ContohGambar} alt='' className="img-cover"></img>
                                            </figure>

                                        </div>

                                        <h6 className='mt-3'>
                                            {item2.name} 
                                            <div>
                                                <span className='text-gray-500 font-weight-light'>{item2.city}, {item2.country}</span>
                                            </div>
                                        </h6>
                                    </div>

                                    
                                )
                            })
                        }

                    </div>

                </div>
            );
        })
    )
    
}
