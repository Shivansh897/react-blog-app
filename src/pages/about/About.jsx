import './about.css'
import React from 'react';


const  AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1>About Us</h1>
        <p>Welcome to Our Blog - Your Source for knowledge</p>
      </div>
      <hr className="horizontal-line" />
      <div className="about-content">
        <div className="about-text">
          <h2>Our Story</h2>
          <p>
            Our Blog App was founded with a passion for exploring knowledge. Our goal is to provide high-quality,
            informative, and engaging content to our readers. Whether you're a novice or an expert in any field,
            we're here to inspire and educate you.
          </p>
        </div>
        <div className="about-image">
          {/* Add an image that represents your blog or team */}
          <img src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="Our Team" />
        </div>
      </div>
      <hr className="horizontal-line" />
      <div className="about-team">
        <h2>Meet the Team</h2>
        <div className="team-member">
          <div className="team-member-image">
            {/* Add an image of team member 1 */}
            <img src={window.location.origin + '/images/myPic.jpeg' } alt="Team Member 1" />
          </div>
          <div className="team-member-info">
            <h3>Shivansh Singh</h3>
            <p>Co-Founder & Writer</p>
            <p>
              Shivansh is passionate about Software Development and has 1 year of experience in the field. He's dedicated
              to sharing his knowledge and insights with our readers.
            </p>
          </div>
        </div>
        {/* Repeat the above structure for each team member */}
        <div className="team-member">
          {/* Team member 2 */}
        </div>
      </div>
      <hr className="horizontal-line" />
      <div className="about-contact">
        <h2>Contact Us</h2>
        <p>
          If you have any questions, suggestions, or would like to collaborate with us, feel free to get in touch. We'd
          love to hear from you!
        </p>
        <a href="mailto:contact@yourblog.com">Email: contact@yourblog.com</a>
        {/* You can also add links to your social media profiles */}
        {/* Add social media icons here */}
      </div>
    </div>
  );
}

export default AboutPage;
