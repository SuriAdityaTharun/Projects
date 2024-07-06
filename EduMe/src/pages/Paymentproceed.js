import React from 'react'
import { useNavigate } from 'react-router-dom'
import StripeCheckout from 'react-stripe-checkout'
import { Button } from 'reactstrap'

const Paymentproceed = () => {
    const navigate = useNavigate()

    const onToken = (token) => {
        console.log(token);
    }
    const handleHome = () => {
        navigate('/Homepage')
    }
    return (
        <div>
            <StripeCheckout
                token={onToken}
                stripeKey='pk_test_51OAXfXSG7kAiu8f1HmjK0rZpRQ7DqyZHDWFAYBnHYVhjVTOcs3jBb7md4bSDeud5LMlHGPuVBY7FFAEylujMeEJS00iXo49nvV'
            />
        </div>
    )
}

export default Paymentproceed