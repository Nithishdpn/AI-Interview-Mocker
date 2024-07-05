"use client";
import { MockInterview } from 'utils/schema';
import React, { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { db } from 'utils/db';
import { desc, eq } from 'drizzle-orm';
import InterviewItemCard from './InterviewItemCard';
import moment from 'moment';

function InterviewList() {
  const { user } = useUser();
  const [interviewList, setInterviewList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (user) {
      GetInterviewList();
    }
  }, [user]);

  const GetInterviewList = async () => {
    try {
      const result = await db.select()
        .from(MockInterview)
        .where(eq(MockInterview.createdBy, user?.primaryEmailAddress?.emailAddress))
        .orderBy(desc(MockInterview.id));

      console.log(result);
      // Ensure dates are formatted before setting state
      const formattedResult = result.map(interview => ({
        ...interview,
        createdAt: moment(interview.createdAt).format('YYYY-MM-DD HH:mm:ss'), // Adjust format as needed
        updatedAt: moment(interview.updatedAt).format('YYYY-MM-DD HH:mm:ss') // Adjust format as needed
      }));

      setInterviewList(formattedResult);
    } catch (err) {
      console.error("Failed to fetch interview list:", err);
      setError(err);
    }
  };

  return (
    <div>
      <h2 className='font-medium text-xl'>Previous Mock Interview</h2>

      {error && <p className="text-red-500">Failed to load interviews. Please try again later.</p>}

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-3'>
        {interviewList.length > 0 ? (
          interviewList.map((interview, index) => (
            <InterviewItemCard
              interview={interview}
              key={index}
            />
          ))
        ) : (
          <p>No interviews available</p>
        )}
      </div>
    </div>
  );
}

export default InterviewList;
