"use client"
import { db } from 'utils/db';
import { MockInterview } from 'utils/schema';
import React, { useEffect, useState } from 'react';
import { UserAnswer } from 'utils/schema';
import { eq } from 'drizzle-orm';
import { ChevronsUpDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

function Feedback({ params }) {
  const [feedbackList, setFeedbackList] = useState([]);
  const [overallRating, setOverallRating] = useState(0);
  const router = useRouter();

  useEffect(() => {
    GetFeedback();
  }, []);

  const GetFeedback = async () => {
    const result = await db.select()
      .from(UserAnswer)
      .where(eq(UserAnswer.mockIdRef, params.interviewId))
      .orderBy(UserAnswer.id);

    setFeedbackList(result);

    // Ensure all ratings are numbers and calculate total points earned
    const totalPointsEarned = result.reduce((acc, item) => acc + (Number(item.rating) || 0), 0);
    const totalPossiblePoints = 25; // Since there are 5 questions and each is rated out of 5

    // Calculate overall rating
    const overallRating = Math.round((totalPointsEarned / totalPossiblePoints) * 25);

    setOverallRating(overallRating);
  };

  return (
    <div className='p-10'>
      {feedbackList.length === 0 ? (
        <h2 className='font-bold text-xl text-gray-500'>No Interview Feedback Record Found</h2>
      ) : (
        <>
          <h2 className='text-3xl font-bold text-green-500'>Congratulations!</h2>
          <h2 className='font-bold text-2xl'>Here is your interview feedback</h2>
          <h2 className='text-lg my-3' style={{ color: '#00008B' }}>
            Your overall interview rating: <strong>{overallRating}/25</strong>
          </h2>
          <h2 className='text-sm text-gray-500'>
            Find below interview questions with correct answers, your answers, and feedback for improvement
          </h2>
          {feedbackList.map((item, index) => (
            <Collapsible key={index} className='mt-7'>
              <CollapsibleTrigger className='p-2 bg-secondary rounded-lg flex justify-between my-2 text-left gap-7 w-full'>
                {item.question}<ChevronsUpDown className='h-5 w-5' />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className='flex flex-col gap-2'>
                  <h2 className='text-red-500 p-2 border rounded-lg'>
                    <strong>Rating : </strong>{item.rating}
                  </h2>
                  <h2 className='p-2 border rounded-lg bg-red-50 text-sm text-red-900'>
                    <strong>Your Answer: </strong>{item.userAns}
                  </h2>
                  <h2 className='p-2 border rounded-lg bg-green-50 text-sm text-green-900'>
                    <strong>Correct Answer: </strong>{item.correctAns}
                  </h2>
                  <h2 className='p-2 border rounded-lg bg-blue-50 text-sm' style={{ color: '#00008B' }}>
                    <strong>Feedback: </strong>{item.feedback}
                  </h2>
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </>
      )}
      <Button onClick={() => router.replace('/dashboard')}>Go Home</Button>
    </div>
  );
}

export default Feedback;
