import React, { useEffect } from "react";
import "../css/projectdetails.css";
import { useNavigate, useParams } from "react-router-dom";
import textguard from "../../../images/textguard.png";
import messegit from "../../../images/messegit.png";
import prsek from "../../../images/propertyseekers.png";
import arrow from "../../../images/arrow2.png";
import cinemorphia from "../../../images/cinemorphia.png";

const ProjectDetails = () => {
  const { id: projectName } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {};
  }, []);

  const navigate = useNavigate();
  return (
    <div className="projectDetails">
      <img
        src={arrow}
        className="backarrowbutton"
        onClick={() => {
          navigate(-1);
        }}
      />
      <div className="wrapperinProjectDetails">
        {projectName === "messegit" ? (
          <>
            <div className="image">
              <img src={messegit} />
            </div>
            <div className="textinProjectDetails">
              <h1>Messegit: Building a Powerful Chat Experience</h1>
              <p>
                I'd like to introduce you to Messegit, my most ambitious project
                to date. Built using the MERN Stack (MongoDB, Express.js,
                React.js, and Node.js), Messegit is a feature-rich chat
                application designed to empower users and foster meaningful
                connections.
              </p>
              <h1>Intuitive and Feature-Packed:</h1>
              <p>
                Messegit goes beyond basic chat. Users can create accounts,
                search for others, and engage in one-on-one conversations or
                dynamic group chats. The ability to personalize profiles with
                pictures and adjust privacy settings fosters a sense of
                community while maintaining control.
              </p>
              <h1>Empowering Users and Groups:</h1>
              <p>
                Messegit prioritizes user experience. Granular privacy settings
                allow you to choose who can see your profile picture and
                initiate chats. <br /> Group admins have the power to manage
                participants, ensuring a positive and inclusive environment. In
                turn, members can report inappropriate groups, upholding the
                platform's standards.
              </p>
              <h1>Unveiling the Magic: Lessons Learned from Messegit</h1>
              <p>
                Building Messegit wasn't just about creating a chat app; it was
                a journey of exploration and learning. Here are some of the
                unique aspects that pushed my boundaries and expanded my
                development skillset:
              </p>
              <ul>
                <li>
                  <span>Mastering Real-Time Communication with Socket.IO:</span>{" "}
                  This powerful library became the backbone of Messegit's
                  real-time chat functionality, allowing seamless and instant
                  messaging.
                </li>
                <li>
                  <span>
                    Crafting a Secure User Experience with Privacy Features:{" "}
                  </span>{" "}
                  Designing granular privacy controls for profile pictures and
                  chat initiation solidified the importance of user control in
                  online interactions.
                </li>
                <li>
                  <span>
                    Embracing Best Practices for a Robust Application:{" "}
                  </span>{" "}
                  Following established best practices ensured a clean,
                  efficient, and maintainable codebase, laying the foundation
                  for future growth.
                </li>
                <li>
                  <span>
                    Navigating the Intricacies of Complex Database Structures:{" "}
                  </span>{" "}
                  Messegit's feature set demanded a well-structured database
                  that could handle diverse data types and relationships. This
                  project honed my ability to design and implement complex
                  database models.
                </li>
                <li>
                  <span>
                    Optimizing Performance with Backend Processing and Caching:{" "}
                  </span>{" "}
                  Understanding the power of backend processing and caching
                  techniques allowed me to optimize Messegit's performance for a
                  smooth and responsive user experience.
                </li>
              </ul>
              <div className="projectDetailButtons">
                <button
                  onClick={() => {
                    window.open("https://messegit.vercel.app");
                  }}
                >
                  Live Demo
                </button>
                <button
                  onClick={() => {
                    window.open("https://github.com/M-Uzair-dev/messegit");
                  }}
                >
                  Source Code
                </button>
              </div>
            </div>
          </>
        ) : projectName === "cinemorphia" ? (
          <>
            <div className="image">
              <img src={cinemorphia} />{" "}
            </div>
            <div className="textinProjectDetails">
              <h1>Cinemorphia: Your One-Stop Movie Hub</h1>
              <p>
                Dive into the world of cinema with Cinemorphia, your ultimate
                platform for discovering, downloading, and reviewing movies.
                Built with a user-centric approach, Cinemorphia empowers you to
                explore and engage with your movie passions.
              </p>
              <h1>Seamless Movie Exploration:</h1>
              <p>
                Cinemorphia caters to all your movie-hunting needs. Search for
                specific titles, or embark on a journey of discovery by
                filtering through a vast genre library. Find the perfect movie
                for any mood or occasion, all at your fingertips.
              </p>
              <h1>Empowering Your Voice:</h1>
              <p>
                Cinemorphia isn't just about watching movies, it's about
                fostering a community of movie enthusiasts. Share your thoughts
                and experiences by leaving detailed reviews on each movie's
                dedicated page. Contribute to the platform and help others
                discover hidden gems!
              </p>
              <h1>Unveiling the Magic: Lessons Learned from Cinemorphia</h1>
              <p>
                Building Cinemorphia was a rewarding journey that pushed my
                development skills to new heights. Here are some of the key
                areas I mastered:
              </p>
              <ul>
                <li>
                  <span>Database Management:</span> Efficiently storing and
                  retrieving movie data was paramount. This project solidified
                  my understanding of database structures and optimization
                  techniques.
                </li>
                <li>
                  <span>User Authentication with Firebase:</span> Implementing
                  secure login through Firebase ensured user privacy and
                  personalized experiences within Cinemorphia.
                </li>
                <li>
                  <span>CSS Flexbox Mastery:</span> Creating a visually
                  appealing and responsive user interface with CSS flexbox
                  layouts became second nature during Cinemorphia's development.
                </li>
                <li>
                  <span>React Expertise Deepened:</span> Cinemorphia heavily
                  relied on React's capabilities. This project further
                  strengthened my grasp of React concepts and best practices.
                </li>
                <li>
                  <span>Fetching Data from APIs:</span> Seamlessly retrieve
                  movie data from external APIs was crucial for Cinemorphia's
                  functionality. This project honed my skills in working with
                  APIs and integrating them effectively.
                </li>
              </ul>
              <div className="projectDetailButtons">
                <button
                  onClick={() => {
                    window.open("https://cinemorphia.vercel.app");
                  }}
                >
                  Live Demo
                </button>
                <button
                  onClick={() => {
                    window.open("https://github.com/M-Uzair-dev/Cinemorphia");
                  }}
                >
                  Source Code
                </button>
              </div>
            </div>
          </>
        ) : projectName === "textguard" ? (
          <>
            <>
              <div className="imageinProjectDetails">
                <img src={textguard} />{" "}
              </div>
              <div className="textinProjectDetails">
                <h1>TextGuard: Your Secure Note Haven</h1>
                <p>
                  Never lose track of your thoughts again with TextGuard, the
                  user-friendly note-taking application built with the MERN
                  stack. TextGuard boasts a stunning and intuitive interface,
                  making it a pleasure to capture and organize your ideas.
                </p>
                <h1>Effortless Access, Anywhere, Anytime:</h1>
                <p>
                  TextGuard prioritizes convenience. Sign up or log in
                  seamlessly using your email and password. With secure
                  cross-device syncing, your notes are always accessible,
                  wherever you go and whenever you need them.
                </p>
                <h1>Unparalleled Versatility:</h1>
                <p>
                  TextGuard caters to all your note-taking needs. Whether you're
                  jotting down code snippets, brainstorming personal ideas, or
                  crafting detailed lists, TextGuard provides a flexible
                  platform to capture it all.
                </p>
                <h1>Unveiling the Magic: Lessons Learned from TextGuard</h1>
                <p>
                  Building TextGuard was a journey of exploration that expanded
                  my front-end development skillset. Here are some of the key
                  areas I focused on:
                </p>
                <ul>
                  <li>
                    <span>CSS Animations:</span> Breathing life into the UI with
                    smooth and engaging animations enhanced the user experience
                    in TextGuard.
                  </li>
                  <li>
                    <span>CSS Mastery:</span> TextGuard's beautiful interface is
                    a result of in-depth exploration of various CSS properties
                    and their creative application.
                  </li>
                  <li>
                    <span>Theming Expertise:</span> Empower user preference with
                    the implementation of customizable themes, like dark and
                    light modes, in TextGuard.
                  </li>
                  <li>
                    <span>CRUD Operations Conquered:</span> TextGuard's core
                    functionality relies on mastering CRUD (Create, Read,
                    Update, Delete) operations, ensuring seamless data
                    manipulation within the application.
                  </li>
                  <li>
                    <span>Security Focus: Bcrypt and Beyond:</span> User data
                    security is paramount. TextGuard utilizes bcrypt hashing and
                    other security measures to safeguard your information.
                  </li>
                </ul>
                <div className="projectDetailButtons">
                  <button
                    onClick={() => {
                      window.open("https://text-guard.vercel.app");
                    }}
                  >
                    Live Demo
                  </button>

                  <button
                    onClick={() => {
                      window.open("https://github.com/M-Uzair-dev/TextGuard");
                    }}
                  >
                    Source Code
                  </button>
                </div>
              </div>
            </>
          </>
        ) : (
          <>
            <>
              <div className="image">
                <img src={prsek} />{" "}
              </div>
              <div className="textinProjectDetails">
                <h1>PropertySeekers: Your One-Stop Real Estate Hub</h1>
                <p>
                  Empowering both property owners and renters, PropertySeekers
                  is a user-friendly real estate agency application designed to
                  streamline the search and management process. With a stunning
                  and animated interface, PropertySeekers offers a seamless and
                  engaging experience for everyone involved.
                </p>
                <h1>Effortless Management for Owners:</h1>
                <p>
                  PropertySeekers equips owners with a powerful dashboard.
                  Easily add, remove, and update property listings, keeping your
                  inventory fresh and accurate. Gain valuable insights through
                  built-in analytics to make data-driven decisions.
                  PropertySeekers empowers owners to manage user interactions by
                  banning, unbanning, or monitoring user activity on the
                  platform.
                </p>
                <h1>Seamless Search for Renters:</h1>
                <p>
                  Renters can explore an extensive database of properties with
                  ease. Find your dream home by browsing through listings or
                  utilizing filters. When you discover a property that sparks
                  your interest, simply click the "Chat Now" button to initiate
                  a direct conversation with the property owner or their
                  representative. Owners can effortlessly manage these
                  interactions from within their dashboard, fostering efficient
                  communication.
                </p>
                <h1>
                  Unveiling the Magic: Lessons Learned from PropertySeekers
                </h1>
                <p>
                  Building PropertySeekers challenged me to elevate my skills
                  across various aspects of development. Here are some of the
                  key areas I focused on:
                </p>
                <ul>
                  <li>
                    <span>Charting Expertise:</span> Visualize valuable real
                    estate data through the creation of informative and
                    user-friendly charts within PropertySeekers.
                  </li>
                  <li>
                    <span>Complex Database Mastery:</span> PropertySeekers
                    thrives on a well-structured and intricate database that
                    efficiently manages listings, user details, and
                    communication channels.
                  </li>
                  <li>
                    <span>CSS Prowess:</span> The beautiful and animated
                    interface of PropertySeekers is a testament to my in-depth
                    knowledge of CSS properties and their creative application.
                  </li>
                  <li>
                    <span>Crafting Industry-Level Applications:</span>{" "}
                    PropertySeekers adheres to industry standards and best
                    practices, ensuring a robust and professional real estate
                    solution.
                  </li>
                  <li>
                    <span>Animation with AOS Integration:</span> I leveraged
                    Animation On Scroll (AOS) to create a dynamic and engaging
                    user experience within PropertySeekers.
                  </li>
                </ul>
                <div className="projectDetailButtons">
                  <button
                    onClick={() => {
                      window.open("https://propertyseekers.vercel.app");
                    }}
                  >
                    Live Demo
                  </button>
                  <button
                    onClick={() => {
                      window.open(
                        "https://github.com/M-Uzair-dev/PropertySeekers"
                      );
                    }}
                  >
                    Source Code
                  </button>
                </div>
              </div>
            </>
          </>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
