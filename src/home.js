import React, { useState, useEffect } from 'react';
import {
    Link
  } from "react-router-dom";
import pic from './shawn.img.jpg';
import pdf from './Shawn Programming Resume.pdf';

const HomePage = (props) => {
    return (
        <>
         <section className='container'>

      <article className="block main-article">
                    <h1 className="block-header">About Shawn</h1>
                    <hr />
                    <img src={pic} alt="picture of myself" className="about-img" height='200px'/>
                    <br/>
                    <p>Hello, my name is Shawn Harvey, and im a student in a coding bootcamp. Im confident that when im done the coding bootcamp that i will find employment as a front end or back end developer, or be a full stack developer.</p>
                    <p>I can be reached at the following: <a href="mailto:shawn.harvey.93@hotmail.com">shawn.harvey.93@hotmail.com</a> || 613-295-2996</p>
                    <br />
                    <p>You can find me on <a target='_blank' href="https://github.com/theharv1">Github</a> or on <a target='_blank' href="https://www.linkedin.com/in/shawn-harvey-7bb3a41b6/">LinkedIn</a>.</p>
                    <br />
                    <p>You can download my resume here:
                    <Link to={pdf} target="_blank" download> Download</Link>
                    </p>
                </article>
      <hr />
    </section> 
        <section className="row">
            <div className="col-md-8">


            </div>
        </section>

        </>
    );
}

export default HomePage;