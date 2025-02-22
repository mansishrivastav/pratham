import React from 'react'

const CoursesOffered = () => {
  return (
    <div className='mt-16 w-[1000px] mx-24'>
       <h2 className='text-[#081153] text-2xl font-bold'>Courses offered under the 5-year Integrated LAW Program</h2>
       <div className='w-96 h-1 bg-yellow-500 my-4'></div>
       <div className='w-[900px] border border-gray-300'> 
        <p className='bg-gray-200 p-2'>B.A. LL.B</p>
        <p className='p-2'>B.B.A. LL.B</p>
        <p className='bg-gray-200 p-2'>B.Com. LL.B</p>
        <p className='p-2'>B.Sc. LL.B</p>
        <p className='bg-gray-200 p-2'>B.S.W. LL.B</p>
       </div>
    </div>
  )
}

export default CoursesOffered
