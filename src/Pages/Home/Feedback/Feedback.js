import React from 'react';

const Feedback = () => {
    return (
        <div>
            <h2 className='text-center text-3xl mb-3 text-bold'>Feedback</h2>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center'>
                <div className="card card-compact w-full max-w-xl bg-base-200 shadow-xl mx-auto p-5">
                    <div className='flex gap-2 items-center mb-4'>
                        <img className='w-[32px] h-[32px] rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6k8UM_jAl4mWN96Uh42l3NZT5tvXYhivF5w&usqp=CAU" alt="" />
                        Alison Davis
                    </div>
                    <p>Thank you for your for feedback and Wedding Photography Reviews it means the world to me that you love the images and that you enjoy having me there on you very special day.</p>
                </div>

                <div className='card card-compact w-full max-w-xl bg-base-200 shadow-xl mx-auto p-5'>
                    <div className="flex gap-2 items-center mb-4">
                        <img className='w-[32px] h-[32px] rounded-full' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZIwylh1lB6GKXeubHbTPp2lnIYvZittUXLA&usqp=CAU' alt="" />
                        Pete Joseph
                    </div>
                    <p>Thank you for your for feedback and Wedding Photography Reviews it means the world to me that you love the images and that you enjoy having me there on you very special day.</p>
                </div>

                <div className="card card-compact w-full max-w-xl bg-base-200 shadow-xl mx-auto p-5">
                    <div className='flex gap-2 items-center mb-4'>
                        <img className='w-[32px] h-[32px] rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPWI6WzXs-icMbQJ7zW2AsD8JTOGW6PBZ3CQ&usqp=CAU" alt="" />
                        Olivia Kim
                    </div>
                    <p>Thank you for your for feedback and Wedding Photography Reviews it means the world to me that you love the images and that you enjoy having me there on you very special day.</p>
                </div>
                
            </div>
        </div>
    );
};

export default Feedback;