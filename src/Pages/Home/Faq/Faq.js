import React from 'react';

const Faq = () => {
    return (
        <div className='mt-5 flex flex-col gap-3'>
            <h2 className='text-center text-3xl mb-3 text-bold'>FAQ</h2>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-300 rounded-box">
                <div className="collapse-title text-xl font-medium">
                What types of photography do you do?
                </div>
                <div className="collapse-content">
                    <p>Some photographers do a little of everything. Others specialize in one type of photography or another. The first thing that people are going to want to know is what kind of services you offer. If they’re looking for a family photographer or someone to do their son’s senior portraits, for example, they wouldn’t want to work with a wedding photographer. </p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-300 rounded-box">
                <div className="collapse-title text-xl font-medium">
                Why should I hire a professional photographer?
                </div>
                <div className="collapse-content">
                    <p>This is the million-dollar question. People want to know exactly what it is that sets you apart and makes you worth their time. This is your place to make it known. Explain all the benefits of working with a professional, including the fact that you won’t have to worry about one of your family members or friends missing out on whatever event is being captured because they’re the one manning the camera. Explain that you have experience in producing high-quality images that will last a lifetime and create wonderful memories and take advantage of this opportunity to link to testimonials to seal the deal. </p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-300 rounded-box">
                <div className="collapse-title text-xl font-medium">
                Do you include digital images?
                </div>
                <div className="collapse-content">
                    <p>Today, people often want digital copies of photos along with or even instead of physical photos. Moreover, some photographers only work with certain mediums in the same regard, for one reason or another. Therefore, most people will ask if digital images are available if they want them. However, they may not always be an option. Be sure to advise as to whether you offer digital images with prints, instead of them, or in any other capacity. If you do not provide digital image copies for any reason, explain that here so that clients understand your reasoning. </p>
                </div>
            </div>
        </div>
    );
};

export default Faq;