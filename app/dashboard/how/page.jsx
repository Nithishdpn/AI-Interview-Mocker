import React from 'react'

function how() {
  return (
    <div className='p-10'> 
    <h2 className='font-bold text-3xl text-primary'>How it Works?</h2>
    <h2 className='text-gray-500'>How Our Application Work?</h2>


    <div className='grid grid-cols-1 md:grid-cols-3 my-5 gap-5'>
<div className='col-span-1 md:col-span-3 p-4 bg-white rounded-lg shadow-md'>
<h2 className='text-gray-700 font-semibold mb-2 ' style={{ color: '#00008B' }}>Welcome to our AI-Powered Mock Interview Platform!</h2>
<p className='text-gray-500'>
  Here’s a step-by-step guide to help you understand how our application can assist you in preparing for your next big interview:

1. AI-Powered Interview Questions
Our platform uses Gemini AI to generate realistic and challenging interview questions. These questions are designed to simulate the actual interview experience, giving you a feel for what you might face during a real interview.

2. Real-Time Interview Simulation
Once you start the mock interview, Gemini AI will ask you a series of five questions. Each question is carefully crafted to assess different aspects of your skills and knowledge. You can respond to these questions in real-time, just as you would in a live interview.

3. Recording and Saving Your Answers
Your responses to the interview questions are recorded and automatically saved into our secure database. This allows you to review your answers later and track your progress over time.

4. Comprehensive Rating System
After you complete the interview, each of your responses will be evaluated and rated on a scale of 1 to 5. These ratings are based on various factors, such as clarity, relevance, and completeness of your answers. You will receive an overall score out of 25, giving you a clear indication of your performance.

5. Detailed Feedback
In addition to the ratings, our platform provides detailed feedback on your performance. This feedback highlights your strengths and areas for improvement, offering you actionable insights to enhance your interview skills.

6. Performance Dashboard
Your performance data, including the questions asked, your answers, the ratings, and the feedback, are all accessible through your personal dashboard. This feature allows you to:

Review the questions and your responses
See the ratings and feedback for each answer
Track your progress over time and identify patterns in your performance
7. Continuous Improvement
Use the insights from your mock interviews to refine your approach and improve your skills. Regular practice with our AI-powered platform will help you build confidence, enhance your performance, and increase your chances of success in actual interviews.


</p>
</div>
</div>
</div>
  )
}

export default how