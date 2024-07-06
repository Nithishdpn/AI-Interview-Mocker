// Stripe Webhook Handler Endpoint
const express = require('express');
const app = express();
const stripe = require('stripe')('sk_test_51PZCzx2MuJK9mAWF33E8oDK1E9I4nOznAzlGMnxCEqXdUFaDT75woYNNjX6pLPPJWb8KDzqIKGQDBSfnmzrGIOkL00HMxgrewJ'); // Replace with your actual Stripe secret key

// Middleware to parse JSON request body
app.use(express.json());

// Endpoint to receive Stripe webhook events
app.post('/webhook', async (req, res) => {
    const payload = req.body;
    const sig = req.headers['stripe-signature'];
    const endpointSecret = 'whsec_...'; // Replace with your webhook secret from Stripe

    let event;

    try {
        event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
    } catch (err) {
        console.log(`Webhook Error: ${err.message}`);
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    // Handle the event
    switch (event.type) {
        case 'checkout.session.completed':
            const session = event.data.object;

            // Retrieve necessary data from the session object
            const subscriptionId = session.subscription;
            const customerId = session.customer;

            // Update user's subscription status in your database
            updateUserSubscriptionStatus(customerId, subscriptionId);

            console.log(`Subscription updated for customer: ${customerId}`);
            break;

        default:
            console.log(`Unhandled event type: ${event.type}`);
    }

    res.status(200).end();
});

// Helper method to update user's subscription status in your database
function updateUserSubscriptionStatus(customerId, subscriptionId) {
    // Implement your database update logic here
    // Example: Update user document in MongoDB or user record in SQL database
    // You can use your ORM or database driver of choice
}

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Stripe Webhook Handler is running on port ${PORT}`);
});
