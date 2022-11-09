import React, { useState } from 'react';

const AddService = () => {
    const [error, setError] = useState(null);
    const [service, setService] = useState({});

    const addService = e => {
        e.preventDefault();
        setError(null);
        if (service?.rating > 5) {
            setError('Rating can be 5 or lower.');
            return;
        };
        fetch('http://localhost:5000/service', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        });
    };

    const handleInputBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newService = { ...service };
        newService[field] = value;
        setService(newService);
    };

    return (
        <div className="hero my-5">
            <div className="hero-content w-full">
                <form onSubmit={addService} className='flex flex-col w-full md:w-3/5 gap-5'>
                    <input onBlur={handleInputBlur} name='name' type="text" placeholder="Service Name" className="input input-bordered" required />
                    <input onBlur={handleInputBlur} name='imageUrl' type="url" placeholder="Service Image Url" className="input input-bordered" required />
                    <input onBlur={handleInputBlur} name='price' type="number" placeholder="Service Price" className="input input-bordered" />
                    <input onBlur={handleInputBlur} name='rating' type="number" placeholder="Service rating" className="input input-bordered" />
                    <textarea onBlur={handleInputBlur} name='description' className="textarea textarea-bordered resize-none h-32" placeholder="Service Description" required></textarea>
                    {
                        error && <div className='text-center py-1 rounded-3xl bg-error'>
                            <p>{error}</p>
                        </div>
                    }
                    <button className='btn'>Add Service</button>
                </form>
            </div>
        </div>
    );
};

export default AddService;