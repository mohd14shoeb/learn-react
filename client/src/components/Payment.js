import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

class Payment extends Component {
  render() {
    return (
      <StripeCheckout
        name="Emaily"
        description="$5 for 5 credits to send email"
        amount={500}
        token={token => console.log(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <a className="waves-effect waves-light btn blue flat z-depth-0">
          <i className="material-icons left">add</i>
          <small>Add Credit</small>
        </a>
      </StripeCheckout>
    );
  }
}

export default Payment;
