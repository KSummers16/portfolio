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
      <h3>Yarn Stash</h3>
      <div className="project-info">
        <div className="project-photo">
          <img
            src="https://res.cloudinary.com/yarn-stash/image/upload/v1721407021/7C90EB17-D43A-4139-BD0B-CBB3BE1E2DF7_urgj2j.jpg"
            alt="stash-home"
          />
          <img
            src="https://res.cloudinary.com/yarn-stash/image/upload/v1721407090/0BB0906D-254F-4B9C-97C4-005BA3679D2A_i0esza.jpg"
            alt="stash-view"
          />
          <img
            src="https://res.cloudinary.com/yarn-stash/image/upload/v1721407182/1463AD3C-6F31-43F8-AEAC-A4E12E195B8E_vznivq.jpg"
            alt="stash-detail"
          />
          <img
            src="https://res.cloudinary.com/yarn-stash/image/upload/v1721407134/71F401CA-F9B0-4F29-A47A-E9CEFFABC4F7_v3jf1f.jpg"
            alt="stash-new"
          />
        </div>
        <div className="project-detail">
          <p>
            Yarn Stash was developed to address the common challenge yarn
            enthusiasts face in remembering their inventory details, such as
            color name, weight, brand, color family, and quantity needed for
            upcoming projects. With Yarn Stash, users can maintain a
            comprehensive database of their yarn collection, allowing them to
            add, edit, or remove items as their inventory changes. This
            application served as my frontend capstone project and was built
            using JavaScript, React, and CSS.
          </p>
          <p>
            GitHub Repo:{" "}
            <Link to="https://github.com/KSummers16/yarn-stash">
              Application{" "}
            </Link>
            <Link to="https://github.com/KSummers16/yarn-stash-api">
              Database
            </Link>
          </p>
        </div>
      </div>
      <h3>Bangazon</h3>
      <div className="project-info">
        <div className="project-photo">
          <img
            src="https://res.cloudinary.com/yarn-stash/image/upload/v1721940686/D663A758-CF0C-4D7D-9A91-C9CC0CBFD9D7_fadgur.jpg"
            alt="bang-home"
          />
          <img
            src="https://res.cloudinary.com/yarn-stash/image/upload/v1721940686/672A7DDD-D851-46F8-A113-2F653C22F644_x3ivck.jpg"
            alt="bang-stores"
          />
          <img
            src="https://res.cloudinary.com/yarn-stash/image/upload/v1721940686/85E16BFA-DA6A-458D-A8F5-23741863E160_4_5005_c_nbiypw.jpg"
            alt="bang-payment"
          />
          <img
            src="https://res.cloudinary.com/yarn-stash/image/upload/v1721940686/55A0B2CC-CFF3-4F50-982A-87FE7F801846_4_5005_c_f3dhbc.jpg"
            alt="bang-report"
          />
        </div>
        <div className="project-detail">
          <p>
            Bangazon was a collaborative project designed to enhance our
            teamwork skills, as well as our abilities in debugging, feature
            development, and testing. We were assigned a pre-existing project
            and utilized a GitHub ticket board to address various issues and
            implement new features. In addition to resolving and testing current
            bugs, all pull requests required peer review and approval before
            integration into the main codebase. I contributed by developing a
            feature that enabled users to create storefronts and display them,
            resolving a bug that incorrectly displayed all payments instead of
            just the user's payments, and generating the unpaid orders report.
            This project involved the use of React, CSS, Django, and Python.
          </p>
          <p>
            GitHub Repo:{" "}
            <Link to="https://github.com/NSS-Day-Cohort-68/bangazon-client-chupacabra-t2">
              Application{" "}
            </Link>
            <Link to="https://github.com/NSS-Day-Cohort-68/bangazon-api-chupacabra-team-2/tree/main">
              API
            </Link>
          </p>
        </div>
      </div>
      <h3>Kneel Diamonds</h3>
      <div className="project-info">
        <div className="project-photo">
          <img
            src="https://res.cloudinary.com/yarn-stash/image/upload/v1722440756/2AB126B5-A8A2-4BCF-ADCD-C6C84BA07652_lsinla.jpg"
            alt="kneel-home"
          />
        </div>
        <div className="project-detail">
          <p>
            Kneel Diamonds was a two part project. Part one we learned React,
            how to do fetch calls and use array methods. In Part two we
            recreated the database using sql and python and then used them to
            build new orders, cancel orders, update prices, and embedding
            tables.
          </p>
          <p>
            GitHub Repo:{" "}
            <Link to="https://github.com/KSummers16/kneel_diamond">
              Application{" "}
            </Link>
            <Link to="https://github.com/KSummers16/kneel-server/blob/main/json-server.py">
              Server
            </Link>
          </p>
        </div>
      </div>
      <h3>My Portfolio</h3>
      <div className="project-info">
        <div className="project-photo">
          <div className="project-detail">
            <p>
              Creating this application for my portfolio was an insightful
              experience. To obtain screenshots of my previous projects (all
              except Hook'd by Kim), I first needed to debug and resolve any
              issues preventing them from running. Revisiting and relearning
              these older projects was both challenging and rewarding, as it
              allowed me to apply and reinforce my skills once again.
            </p>
            <p>
              GitHub Repo:{" "}
              <Link to="https://github.com/KSummers16/kneel_diamond">
                Application{" "}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
