const plans = [
    {
        id: 1,
        name: 'Free Plan',
        cost: 0,
        offering: [
            { value: '✔️ Create 3 Free Mock Interviews' },
            { value: '✔️ Unlimited Retake Interview' },
            { value: '❌ Practice Question' },
            { value: '❌ Exclusive App Access' },
            { value: '❌ Email Support' }
        ],
        paymentLink: '/payment/free-plan' // Example relative link
    },
    {
        id: 2,
        name: 'Yearly Plan',
        cost: 599,
        offering: [
            { value: '✔️ Create 3 Free Mock Interviews' },
            { value: '✔️ Unlimited Retake Interview' },
            { value: '✔️ Practice Question' },
            { value: '✔️ Exclusive App Access' },
            { value: '✔️ Email Support' }
        ],
        paymentLink: 'https://buy.stripe.com/test_dR68zF0WA0AR74I000' // Example absolute link
    }
];

export default plans;
