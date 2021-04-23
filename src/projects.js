import React from 'react';
import Project from './project';


function Projects() {
    return (
    <section className='container'>
      <h1>Shawn's Project and Group Portfolio</h1>
      <hr />
      <div className='content'>
      
        <Project image='/img/chatsRus.jpeg' href='https://group-3-project-2.herokuapp.com/'  title='Group Project 2' />
        <p>This is my second group project.it allows teams to communicate with each other both individually or a group. You are able to see who is online in the chat room, and view previous messages.</p>
        <hr />
        <Project image='img/project1.jpeg' href='https://ezkenneth.github.io/GAIDO/'  title='Group Project 1'  />
        <p>This is my first group project. It allows users to view resturants near by and cant direct them to it aswell.</p>
        <hr />
        <Project image='img/emdirect.jpeg' href='https://theharv1.github.io/Employee-Directory/index.html'  title='Employee Directory' />
        <p>An application built to veiw and sort employees.</p>
        <hr />
        <Project image='img/weather.jpeg' href='https://theharv1.github.io/A-weather-dashboard/index.html'  title='Weather Dashboard' />
        <p>This is a simple weather application to view the weather in your local area, or if your planning a trip and can plan accordingly to the weather in that area.</p>
        <hr />
        <Project image='img/planner.png' href='https://theharv1.github.io/work-day-planner/index.html'  title='Work Day Scheduler' />
        <p>In this application, you are able to keep track of your day by schedualing it or if your at work.</p>

      </div>
      <hr />
      <p>Click on one of the links above to view one of my projects. These are the links to the live websites.</p>
    </section>
  );
}

export default Projects;