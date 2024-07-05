"use client";
import { UserButton, useUser } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

function Header() {
    const path = usePathname();
    const { user } = useUser();
    const [isSubscribed, setIsSubscribed] = useState(false);

    useEffect(() => {
        // Check user's subscription status
        if (user) {
            // Replace with actual logic to check if user is subscribed
            const subscribed = checkSubscriptionStatus(); // Example function
            setIsSubscribed(subscribed);
        }
    }, [user]);

    const checkSubscriptionStatus = () => {
        // Replace with logic to check subscription status from your backend or state
        return user?.subscriptionStatus === 'active'; // Example condition
    };

    return (
        <div className='flex p-4 items-center justify-between bg-secondary shadow-sm'>
            <Image src={'/logo.svg'} width={160} height={100} alt='logo' />
            <ul className='hidden md:flex gap-6'>
                <Link href="/dashboard">
                    <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path === '/dashboard' && 'text-primary font-bold'}`}>Dashboard</li>
                </Link>
                <Link href="/dashboard/questions">
                    <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path === '/dashboard/questions' && 'text-primary font-bold'}`}>Questions</li>
                </Link>
                <Link href="/dashboard/upgrade">
                    <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path === '/dashboard/upgrade' && 'text-primary font-bold'}`}>Upgrade</li>
                </Link>
                <Link href="/dashboard/how">
                    <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path === '/dashboard/how' && 'text-primary font-bold'}`}>How it Works?</li>
                </Link>
                {isSubscribed && (
                    <Link href="/dashboard/ai-resume-builder">
                        <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path === '/dashboard/ai-resume-builder' && 'text-primary font-bold'}`}>AI Resume Builder</li>
                    </Link>
                )}
            </ul>
            <UserButton />
        </div>
    );
}

export default Header;
