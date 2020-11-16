import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { MdPayment } from "react-icons/md";
import styled from "styled-components";
import { connect } from "react-redux";
import { handleToken } from "../../actions";

const Button = styled.div`
  background-color: green;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: #fff;
  border-radius: 4px;
  margin-right: 10px;
  padding: 10px 0;
  padding-right: 30px;
  padding-left: 10px;
  cursor: pointer;

  -webkit-box-shadow: 3px 0px 9px 1px rgba(50, 50, 50, 0.75);
  -moz-box-shadow: 3px 0px 9px 1px rgba(50, 50, 50, 0.75);
  box-shadow: 3px 0px 9px 1px rgba(50, 50, 50, 0.75);
`;

const Paymenticon = styled(MdPayment)`
  color: white;
  margin-right: 10px;
  font-size: 1.5rem;
`;

// test card number is 4242 4242 4242 4242
const Payments = ({ handleToken }) => {
  return (
    <StripeCheckout
      name="Emaily"
      description="$5 for five email credits"
      amount={500} // default dollar amount in cents
      token={(token) => handleToken(token)} // expecting callback that will be called after we retrive auth token from stripe
      stripeKey={process.env.REACT_APP_STRIPE_KEY}
    >
      <Button>
        <Paymenticon /> Add Credits
      </Button>
    </StripeCheckout>
  );
};

export default connect(null, { handleToken })(Payments);
