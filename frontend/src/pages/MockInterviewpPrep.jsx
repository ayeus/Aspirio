import React from 'react';

export default function MockInterviewPrep() {
  return (
    <>
      <div className="w-full h-screen">
        <iframe
          src="http://localhost:8503/"
          className="w-full h-full"
          title="Streamlit UI"
        ></iframe>
      </div>
    </>
  );
}
