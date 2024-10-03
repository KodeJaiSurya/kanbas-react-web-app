import { Link } from "react-router-dom";
import "./index.css";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div
          className="row row-cols-1 row-cols-md-5 g-4"
          style={{ margin: "30px" }}
        >
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <Link
              className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kanbas/Courses/1234/Home"
            >
              <img src="/images/fai.jpg" width={250} height={160} />
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS5610 FAI
                </h5>
                <p className="wd-dasboard-course-title card-texr">
                  Foundations of Artificial Intelligence
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <Link
              className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kanbas/Courses/1234/Home"
            >
              <img src="/images/reactjs.jpg" width={250} height={160} />
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS5610 React JS
                </h5>
                <p className="wd-dasboard-course-title card-texr">
                  Full Stack software developer
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <Link
              className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kanbas/Courses/1234/Home"
            >
              <img src="/images/pdp.jpg" width={250} height={160} />
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS5010 Java
                </h5>
                <p className="wd-dasboard-course-title card-texr">
                  Programming Design Paradigms
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <Link
              className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kanbas/Courses/1234/Home"
            >
              <img src="/images/algo.jpg" width={250} height={160} />
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS5800 Algo
                </h5>
                <p className="wd-dasboard-course-title card-texr">Algorithms</p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <Link
              className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kanbas/Courses/1234/Home"
            >
              <img src="/images/ir.jpg" width={250} height={160} />
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS6200 IR
                </h5>
                <p className="wd-dasboard-course-title card-texr">
                  Information Retrival
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <Link
              className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kanbas/Courses/1234/Home"
            >
              <img src="/images/ml.jpg" width={250} height={160} />
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS6140 ML
                </h5>
                <p className="wd-dasboard-course-title card-texr">
                  Machine Learning
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <Link
              className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kanbas/Courses/1234/Home"
            >
              <img src="/images/nlp.jpg" width={250} height={160} />
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS6120 NLP
                </h5>
                <p className="wd-dasboard-course-title card-texr">
                  Natural Language Processing
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <Link
              className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kanbas/Courses/1234/Home"
            >
              <img src="/images/llm.jpg" width={250} height={160} />
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  DS5983 LLMs
                </h5>
                <p className="wd-dasboard-course-title card-texr">
                  Large Language Models
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
