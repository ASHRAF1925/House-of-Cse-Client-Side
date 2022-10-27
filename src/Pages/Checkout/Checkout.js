import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const course = useLoaderData();
    
    return (
        <div>
            <h1>checkout{course.course_name}</h1>
        </div>
    );
};

export default Checkout;