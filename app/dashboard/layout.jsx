import React from 'react';

export default function DashboardLayout({children, products, statistics, users}) {
  return (
    <div>
      {children}
      <div className='flex w-screen justify-between'>
        {products}
        {users}
      </div>
      {statistics}
    </div>
  );
}

