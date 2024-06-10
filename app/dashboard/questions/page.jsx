import React from 'react'

function questions() {
  return (
    <div className='p-10'> 
         <h2 className='font-bold text-3xl text-primary'>Questions</h2>
         <h2 className='text-gray-500'>How we Ask Questions</h2>


         <div className='grid grid-cols-1 md:grid-cols-3 my-5 gap-5'>
  <div className='col-span-1 md:col-span-3 p-4 bg-white rounded-lg shadow-md'>
    <h2 className='text-gray-700 font-semibold mb-2 ' style={{ color: '#00008B' }}>Welcome to the Questions Page!</h2>
    <p className='text-gray-500'>
      Preparing for an interview is a crucial step in landing your dream job, and this page is designed to be your ultimate resource. Here, you can engage with Gemini AI, our cutting-edge artificial intelligence, to ask any questions you have about the interview process. Whether you're looking for tips on answering common interview questions, strategies for showcasing your skills, or advice on what to expect during different types of interviews, Gemini AI has you covered. Proper preparation can make the difference between a successful interview and a missed opportunity, and our goal is to ensure you walk into every interview with confidence and clarity. Use this page to refine your approach, gain valuable insights, and enhance your readiness for any interview scenario. Dive in and let Gemini AI support you on your path to success!
    </p>
  </div>
</div>
    </div>
  )
}

export default questions