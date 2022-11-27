import React from 'react';

const SellerName = (v,seller) => {
    console.log(seller);
    return (
        <div>
            {
                v.status?<span>Verify {seller}</span>:<span>{seller}</span>
            }
        </div>
    );
};

export default SellerName;