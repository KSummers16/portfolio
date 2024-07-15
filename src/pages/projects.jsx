import "./project.css"

export const Projects = () => {
  return (
    <>
      <h2>Projects</h2>
      <div className="project-info">
        <h3>Hook'd</h3>
        <div className="project-photo">
          <img
            src="https://res.cloudinary.com/yarn-stash/image/upload/v1721062110/D7918796-BE59-405B-9F02-64C81A6D6433_rwvhys.jpg"
            alt="homescreen"
            style={{ width: "55%", height: "250px" }}
          />
          <img
            src="https://res.cloudinary.com/yarn-stash/image/upload/v1721062395/82CD31C0-7253-479B-9072-08C165493059_bwk8p0.png"
            alt="rtsproducts"
            style={{ width: "45%", height: "250px" }}
          />
        </div>
        <div className="project-details">
          <p>
            Hook'd by Kim began as my final full-stack capstone project at
            Nashville Software School. Post-graduation, I have continued to
            enhance and expand the site. Built using Django, Python, React, and
            CSS, this platform is designed for my small crochet business. It
            allows customers to purchase pre-made products ready for immediate
            shipping and provides an option for custom product requests, where
            customers can specify details such as colors and eye styles.
          </p>
        </div>
      </div>
    </>
  )
}
