import React from 'react'
import dynamic from 'next/dynamic';

const BodyComponent = dynamic(() => import('@/components/bodyComponent'), {
  loading: () => <p>Loading...</p>,
});

const TitleComponent = dynamic(() => import('@/components/titleComponent'), {
  loading: () => <p>Loading...</p>,
});

const Test = () => {
  
  return (
    <div>
      <TitleComponent title='Title' />
      <BodyComponent />
    </div>
  )
}

export default Test; 