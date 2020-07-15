import React from 'react';

const StatusPill = ({ status }) => {
    let color = 'bg-red-200 border-4 border-solid border-red-400 text-red-500 font-bold font-ralweway'
    let message = 'Registration : Closed'
    if (status) {
        color = 'bg-green-200 border-4 border-solid border-green-400 text-green-500 font-bold font-ralweway'
        message = 'Registration : Open'
    }
    return (
        <div className={`mt-4 text-md text-center rounded-full w-56 text-white p-2 ${color}`}>
            {message}
        </div>
    );
}

export default StatusPill;