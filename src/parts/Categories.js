import React from 'react'
import ContohGambar from "assets/images/img-mostpick1.jpg";
import Button from 'elements/Button';

export default function Categories(props) {

    return(
        props.data.map((item, index) => {
            return (
                <section className='container' key={`category-${index}`}>

                    <h4 className='mb-3'>{item.name}</h4>

                    <div className='container-grid'>

                        {
                            item.items.map((item2, index2) => {
                                return(

                                    <div className='item column-3 row-1' key={`category-item-${index2}`}>
                                        <div className='card'>
                                            {
                                                item2.isPopular && (
                                                    <div className='tag'>
                                                        Popular
                                                        <span className='font-weight-light'> choice</span>
                                                    </div>
                                                )
                                            }

                                            <figure className='img-wrapper'>
                                                <img src={ContohGambar} className='img-cover' style={{height: 180}}></img>
                                            </figure>

                                            <div className='meta-wrapper'>
                                                <Button type='link' className='streched-link d-block text-gray-800' href=''>
                                                    <h5>{item2.name}</h5>
                                                </Button>
                                                <span className='text-gray-500'>
                                                    {item2.city}, {item2.country}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                )
                            })
                        }


                    </div>

                </section>
            );
        })
    )
    
}
