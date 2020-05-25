import React, { Component } from 'react';
import './Cart.css';
class Cart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
            counter: 0
        }
    }
    componentDidMount() {
        fetch('https://jsonblob.com/api/ccc35a10-94fe-11ea-9b86-bbf36a432533')
            .then(response => response.json())
            .then(json => this.setState({ products: [...json] }));
    }
    deleteHandler(tableRow) {
        const products = [...this.state.products]
        products.splice(tableRow, 1);
        this.setState({ products: products })
    }
    render() {
        const { products, counter } = this.state
        return (
            <div className="row">
                <div className=" col-6 shadow ">
                    <h6>My Cart<hr /></h6>
                    <div >

                        {
                            products.map(({ url, productName, price }, index) =>
                                <div className="row">
                                    <div className="col-5 m-2">
                                        <img src={url} width="200px" />
                                        </div>
                                    <div className="col-5">
                                        <p>{productName}</p>
                                        <p>${price}</p>
                                        <button type="submit" onClick={() => this.deleteHandler(index)} className="btn btn-danger">Delete</button>
                                    </div>
                                </div>
                            )
                        }


                    </div>
                </div>
                <div className="col-3 shadow ml-4">
                    <h5>Price Details<hr /></h5>
                    <p>price <span className="float-right"> ${products.reduce((acc, item) => acc + item.price, 0)}</span></p>
                    <p>Delivery Fee <span className="float-right text-success">Free</span><hr /></p>
                    <p><h5>Total Amount <span className="float-right"> ${products.reduce((acc, item) => acc + item.price, 0)}</span></h5></p>
                </div>
            </div>
        )
    }
}
export default Cart;