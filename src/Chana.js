import React from 'react';

 

class Chana extends React.Component {

    constructor(props) {

        super(props)

        this.state = {

            viewCart: [],

            amounttotal: 0

        }

    }

    componentDidMount() {

        fetch('https://jsonblob.com/api/65ff9f13-9543-11ea-9b86-bdcb0004ed87').then(response => response.json()).then(json => {

            this.setState({

                viewCart: [...json]

            })

        })

    }

    componentDidUpdate(prevProps, prevState) {

        if (prevState.viewCart != this.state.viewCart) {

          let { amounttotal, viewCart } = this.state;

          this.setState({ amounttotal: viewCart.reduce((a, b) => a + Number(b.cutOffPrice) * b.quantity,0) });

        }

      }

 

    incrementCounter(index) {

        let { viewCart } = this.state

        viewCart[index].quantity++

        this.setState({ viewCart: [...viewCart] })

    }

    decrementCounter(index) {

        let { viewCart } = this.state

        viewCart[index].quantity--

        this.setState({ viewCart: [...viewCart] })

    }

    deleteItem(index) {

        let { viewCart } = this.state

        viewCart.splice(index, 1)

        this.setState({ viewCart: [...viewCart] })

    }

    render() {

        let { viewCart, amounttotal } = this.state

        return (

            <>

       

                <div class="section">

                    <div class="row">

                        <div class="col-8 card m-2">

                            <div class="row card-header">

                                <div class="col">

                                    <h4>My Cart({viewCart.length})</h4>

                                </div>

 

                            </div>

                            <div className="card-body">

                                {viewCart.map((x, index) =>

                                    <div>

                                    <div class="row mt-3">

                                        <div class="col-3 ">

                                            <div>

                                                <img class="m-4" height="100" width="100" src={x.img} />

                                            </div>

                                            <div className="m-3">

                                                {!!x.quantity && (<button type="button" class="btn btn-dark text-white" onClick={() => this.decrementCounter(index)} ><i class="fa fa-minus" />-</button>

)}

                                                <div class="badge mx-3">

                                                    <span className="font-weight-bold">{x.quantity}</span>

                                                </div>

                                                <button type="button" class="btn btn-dark text-white" onClick={() => this.incrementCounter(index)}><i class="fa fa-plus" />+</button>

                                            </div>

 

                                        </div>

                                        <div class="col-6">

 

                                            <h5>{x.productName}</h5>

                                            <p ><span className="font-weight-bold">₹{Number(x.cutOffPrice)*x.quantity}</span> <strike className="mx-2 text-dark">{x.actualPrice}</strike><span className="mx-3">offer available</span></p>

                                            <div className="d-flex mt-5">

                                                <h5 className="mr-5 btn-hover"><a>SAVE FROM LATER</a></h5>

                                                <h5 className="btn btn-success context-menu"><a onClick={() => this.deleteItem(index)}>REMOVE</a></h5>

                                            </div>

                                        </div>

                                        

                                    </div>

                                    <hr></hr>

                                    </div>

                                    

                                )}

 

                            </div>

 

                        </div>

                        <div class="col-3 card m-2">

                            <div className="card-header">

                                <h5 className="text-muted">PRICE DETAILS</h5>

                            </div>

                            <div className="card-body">

                                <div className="row">

                                    <div className="col">

                                        <h5>Price</h5>

                                    </div>

                                    <div className="col">

                                        <p>{amounttotal}</p>

                                    </div>

                                </div>

                                <hr></hr>

                                <div className="row">

                                    <div className="col">

                                        <h3>Total</h3>

                                    </div>

                                    <div className="col">

                                        <h3>{amounttotal}</h3>

                                    </div>

                                </div>

                            </div>

 

                        </div>

                    </div>

                </div>

 

            </>

        )

    }

}

 

export default Chana;