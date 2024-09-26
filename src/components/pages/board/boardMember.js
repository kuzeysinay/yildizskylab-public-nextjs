import React from 'react';

const BoardMember = ({ member }) => {
  return (
    <div className="flex flex-col rounded-[15px] w-80 max-w-xs bg-gradient-to-b from-[rgba(212,184,249,0.42)] to-[rgba(234,218,255,0.41)] p-5 text-center overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
      <div className="member-photo-container">
        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
          <img
            src={member.photo.photoUrl}
            alt={`${member.firstName} ${member.lastName}`}
            className="h-[150px] w-[150px] object-cover rounded-full cursor-pointer mx-auto"
          />
        </a>
      </div>
      <div className="member-title-cover mt-4">
        <h3
          className="text-[24px] text-[#eadaff] font-semibold mb-0"
          style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
        >
          {member.firstName} {member.lastName}
        </h3>
        <p
          className="text-[16px] text-[#eadaff] font-normal mt-[10px]"
          style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
        >
          {member.department}
        </p>
      </div>
    </div>
  );
};

export default BoardMember;
