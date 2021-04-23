import React from 'react';

const Project = ({ title, image, href }) => {
  return (
    <a href={href} target='_blank'>
      <img src={image}/>
      <div className='pjs'>
        <div className=''>{title}</div>
      </div>
    </a>
  );
}

export default Project;