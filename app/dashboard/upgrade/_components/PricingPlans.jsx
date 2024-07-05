'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import plans from '../../utils/planData';

function PricingPlans() {
    const router = useRouter();

    const handlePlanSelection = (plan) => {
        if (plan.cost === 0) {
            router.push('/dashboard');
        } else {
            window.location.href = plan.paymentLink;
        }
    };

    return (
        <div className='p-10'>
            <h2 className='font-bold text-3xl text-primary'>Choose a Plan</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-5'>
                {plans.map((plan) => (
                    <div key={plan.id} className='border p-5 rounded'>
                        <h3 className='font-bold text-2xl'>{plan.name}</h3>
                        <p className='text-xl'>${plan.cost}</p>
                        <ul className='list-disc list-inside'>
                            {plan.offering.map((offer, index) => (
                                <li key={index}>{offer.value}</li>
                            ))}
                        </ul>
                        <button
                            className='mt-5 px-4 py-2 bg-blue-500 text-white rounded'
                            onClick={() => handlePlanSelection(plan)}
                        >
                            Select
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PricingPlans;
