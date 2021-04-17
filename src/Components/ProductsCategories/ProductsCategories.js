import React, {Component} from 'react';
import './ProductsCategories.css';
import { categoryElements } from './CategoryElements';

class ProductsCategories extends Component{
    render(){
        return (
            <div className="mainContainer">
                {categoryElements.map((item, index)=>{
                    return(
                    <div>
                        <div className="categoryImgContainer">
                            <a href={item.url}>
                            <img className="img" src={item.imgUrl}></img>
                            <p className="text">{item.title}</p>
                            </a>
                        </div>
                    </div>
                    )
                })}

            </div>
        )
    }

}

export default ProductsCategories;