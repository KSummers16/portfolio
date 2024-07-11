import "./home.css"

export const Home = () => {
  return (
    <>
      <section className="title">
        <h2 className="name">Kim Summers</h2>
        <h3>Software Developer</h3>
        <h4>
          PYTHON | DJANGO | SQL | HTML | CSS | JavaScript | React | Git/GitHub|
          CodePen| Word Processing | Excel
        </h4>
      </section>
      <section className="info">
        <img
          className="profilepic"
          src="https://res.cloudinary.com/yarn-stash/image/upload/v1720720789/IMG_2464_uelzfw.jpg"
          alt="kimprofile"
          style={{ width: "35%", height: "auto" }}
        />
        <div className="words">
          <h3>My Professional Introduction</h3>
          <p>
            My journey into software development has been driven by a passion
            for problem-solving and a lifelong affinity for technology. Having
            spent over a decade at Verizon Wireless, I honed my ability to
            diagnose and resolve issues while providing exceptional customer
            service. Whether it was troubleshooting technical problems or
            assisting customers with their mobile devices, I thrived in
            environments that demanded critical thinking and effective
            communication.
          </p>
          <p>
            The decision to transition into web development was a natural
            progression for me, fueled by my early exposure to HTML and a desire
            to delve deeper into coding. During my time at Nashville Software
            School, I gained proficiency in a range of technologies including
            HTML, CSS, JavaScript, React, and Python. Through hands-on projects
            and collaborative sprints, I developed a solid foundation in
            front-end development and gained experience in project management
            tools like GitHub Projects.
          </p>
          <p>
            In addition to my technical skills, I bring a strong work ethic,
            adaptability, and a commitment to continuous learning. My experience
            working remotely for the past three years has equipped me with the
            communication and collaboration skills necessary for thriving in a
            distributed team environment.
          </p>
        </div>
      </section>
    </>
  )
}
