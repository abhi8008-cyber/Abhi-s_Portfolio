import React from 'react'
import './Skills.css'

const Skills = () => {
  return (
    <section id="skill">
    <div class="skills ">
      <div class="container mt-5 p-5">
        <h1 class='mt-5 text-light fw-5 text-center mb-5'>Skills</h1>
        <hr class='text-light' />
        <div class="row">
          <div class="col-lg-4 col-md-6 p-2  ">
            <div class="zoom">
              <img src="src\assets\html.jpeg" alt="" />
              <h4 class='text-center text-light'>HTML5</h4>
              <p><i class="bi bi-check-circle-fill ms-2"></i><span class='ms-3 text-light'>HTML is the standard markup
                  language for creating Web pages.</span></p>

            </div>
          </div>


          <div class="col-lg-4 col-md-6  p-2  ">
            <div class="zoom">
              <img src="src\assets\css.jpeg" alt="" />
              <h4 class='text-center text-light'>CSS 3</h4>
              <p><i class="bi bi-check-circle-fill ms-2"></i><span class='ms-3 text-light'>[CSS]- Cascading Style Sheets
                  is a stylesheet language</span></p>

            </div>
          </div>


          <div class="col-lg-4 col-md-6  p-2  ">
            <div class="zoom">
              <img src="src\assets\WhatsApp Image 2024-08-09 at 12.34.19 PM.jpeg" alt="" />
              <h4 class='text-center text-light'>Bootstrap</h4>
              <p><i class="bi bi-check-circle-fill ms-2"></i><span class='ms-3 text-light'>Bootstrap is a free, open
                  source front-end development CSS framework.</span></p>

            </div>
          </div>



          <div class="col-lg-4 col-md-6  p-2  ">
            <div class="zoom">
              <img src="src\assets\js.jpeg" alt="" />
              <h4 class='text-center text-light'>JavaScript</h4>
              <p><i class="bi bi-check-circle-fill ms-2"></i><span class='ms-3 text-light'>[JS]- javaScript is a
                  high-level, interpreted programming language. </span></p>

            </div>
          </div>
          <div class="col-lg-4 col-md-6  p-2  ">
            <div class="zoom">
              <img src="src\assets\jquery.jpeg" alt="" class="hd-logo" />
              <h4 class='text-center text-light'>jQuery</h4>
              <p><i class="bi bi-check-circle-fill ms-2"></i><span class='ms-3 text-light'>jQuery is a
                  lightweight,"write
                  less, do more", JavaScript library.</span></p>

            </div>
          </div>


          <div class="col-lg-4 col-md-6 p-2  ">
            <div class="zoom">
              <img src="src\assets\WhatsApp Image 2024-08-09 at 12.34.19 PM (1).jpeg" alt="" />
              <h4 class='text-center text-light'>React.js</h4>
              <p><i class="bi bi-check-circle-fill ms-2"></i><span class='ms-3 text-light'>React is a JavaScript library
                  created by Facebook.</span></p>

            </div>
          </div>

          <div class="col-lg-4 col-md-6 p-2  ">
            <div class="zoom">
              <img src="./images/java.jpg" alt="" class="hd-logo" />
              <h4 class='text-center text-light'>Java</h4>
              <p><i class="bi bi-check-circle-fill ms-2"></i><span class='ms-3 text-light'>Java is used to develop
                  mobile apps, web apps, desktop apps, games and much more.</span></p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 p-2  ">
            <div class="zoom">
              <img src="src\assets\mysql.jpeg" alt="" class="hd-logo" />
              <h4 class='text-center text-light'>My Sql</h4>
              <p><i class="bi bi-check-circle-fill ms-2"></i><span class='ms-3 text-light'>MySQL is a widely used
                  relational database management system (RDBMS)..</span></p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 p-2  ">
            <div class="zoom">
              <img src="src\assets\WhatsApp Image 2024-08-09 at 12.34.21 PM.jpeg" alt="" />
              <h4 class='text-center text-light'>Spring Boot</h4>
              <p><i class="bi bi-check-circle-fill ms-2"></i><span class='ms-3 text-light'>Spring Boot makes it easy to
                  create stand-alone, production-grade Spring based Applications.</span></p>
            </div>
          </div>
          {/* <div class="col-lg-4 col-md-6 p-2  ">
            <div class="zoom">
              <img src="./images/hyber logo.png" alt="" class="hd-logo" />
              <h4 class='text-center text-light'>HYBERNET</h4>
              <p><i class="bi bi-check-circle-fill ms-2"></i><span class='ms-3 text-light'>an open-source
                  object-relational mapping (ORM) framework for Java.</span></p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  </section>

  )
}

export default Skills