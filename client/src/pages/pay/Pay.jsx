import React, { useEffect, useState } from "react";
import "./Pay.scss";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import newRequest from "../../utils/newRequest";
import { useParams } from "react-router-dom";
import CheckoutForm from "../../components/checkoutForm/CheckoutForm";

const stripePromise = loadStripe(
    "pk_test_51PXogKITOkvGHHsj9xd8SCANIeH0CfS85pKHXe5GFUUC6kv7BkV7i70GH4Yh8u2ptlHKzrjVDHlwN2pGY4cREoZZ00fjU6mrz9"
);

const Pay = () => {
    const [clientSecret, setClientSecret] = useState("");

    const { id } = useParams();

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await newRequest.post(
                    `/orders/create-payment-intent/${id}`
                );
                setClientSecret(res.data.clientSecret);
            } catch (err) {
                console.log(err);
            }
        };
        makeRequest();
    }, []);

    const appearance = {
        theme: 'stripe',
    };
    const options = {
        clientSecret,
        appearance,
    };

    return <div className="pay">
        {clientSecret && (
            <Elements options={options} stripe={stripePromise}>
                <CheckoutForm />
            </Elements>
        )}
    </div>;
};

export default Pay;