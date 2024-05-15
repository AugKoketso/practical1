// pages/index.js
import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the BoxComponent with SSR disabled
const BoxComponent = dynamic(() => import('./anime'), {
  ssr: false
});

function Page() {
  return (
    <div>
      <h1>Welcome to My Page</h1>
      <BoxComponent />
    </div>
  );
}

export default Page;





