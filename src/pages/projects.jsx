import { Link } from "react-router-dom"
import "./project.css"

export const Projects = () => {
  return (
    <>
      <h2 className="title">Projects</h2>
      <h3 className="project-title">Hook'd</h3>
      <div className="project-info">
        <div className="project-photo">
          <img
            src="https://res.cloudinary.com/yarn-stash/image/upload/v1721093488/D7918796-BE59-405B-9F02-64C81A6D6433_1_201_a_imgtdj.jpg"
            alt="homescreen"
            style={{ width: "45%", height: "250px" }}
          />
          <img
            src="https://res.cloudinary.com/yarn-stash/image/upload/v1721062395/82CD31C0-7253-479B-9072-08C165493059_bwk8p0.png"
            alt="rtsproducts"
            style={{ width: "45%", height: "250px" }}
          />
          <img
            src="https://res.cloudinary.com/yarn-stash/image/upload/v1721094140/10BC9610-4658-40C7-A1DF-C793F09FE78C_humsbv.jpg"
            alt="rtsdetail"
            style={{ width: "45%", height: "250px" }}
          />
          <img
            src="https://res.cloudinary.com/yarn-stash/image/upload/v1721094134/ADDE233C-954B-43FD-9529-4475635E5B01_1_201_a_xrtvsb.jpg"
            alt="cartview"
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
            customers can specify details such as colors and eye styles. I have
            also deployed this site using DigitalOcean, though it is not in use
            by my customers yet.
          </p>
          <p>
            GitHub Repo:{" "}
            <Link to="https://github.com/KSummers16/hookd-server">Server </Link>
            <Link to="https://github.com/KSummers16/hookd-client">Client</Link>
          </p>
          <p>
            <Link to="https://monkfish-app-pi2ii.ondigitalocean.app/">
              Live Website
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
