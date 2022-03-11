import React, { Fragment, useEffect } from 'react'
import Carousel from 'react-material-ui-carousel'
import Product from '../Home/Product'
import './ProductDetails.css'
import { useSelector , useDispatch } from 'react-redux'
import { getProductDetails } from '../../actions/productAction'
import { productDetailsReducer } from '../../reducers/productReducer'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    const dispatch = useDispatch();

    const {product , loading , error  } = useSelector(state=>state.productDetails)

    const {id} = useParams();
    
    useEffect(()=>{
        
        dispatch(getProductDetails(id))
    } , [dispatch , id]);
    return (
        <Fragment>
            <div className='ProductDetails'>
                <div>
                    <Carousel>
                        {productDetailsReducer.images && 
                            product.images.map((item , i) => (
                                <img
                                    className='CarouselImage'
                                    key={item.url}
                                    src={item.url}
                                    alt={`${i} Slide`}
                                />
                            ))}
                    </Carousel>
                </div>
            </div>
        </Fragment>
  ) 
}

export default ProductDetails