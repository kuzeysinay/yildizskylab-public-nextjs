'use client';
import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { boardMembers } from './boardData';
import BoardMember from './boardMember';

const BoardPage = forwardRef(function BoardPage(props, ref) {
  const pageRef = useRef(null);
  
  useImperativeHandle(ref, () => ({
    scrollIntoView() {
      pageRef.current.scrollIntoView({ behavior: 'smooth' });
    },
  }));

  return (
    <section
      className="w-screen snap-start pt-28 lg:pt-36 bg-customDarkPurple"
      ref={pageRef}
    >
      <div className="w-screen hidden lg:flex lg:justify-center lg:mt-10 lg:mb-24">
        <h2 className="text-customAccent text-3xl lg:text-5xl">YÖNETİM KURULUMUZ</h2>
      </div>
      
      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 justify-items-center">
        {boardMembers.map((member, index) => (
          <BoardMember key={index} member={member} />
        ))}
      </div>
    </section>
  );
});

export default BoardPage;
