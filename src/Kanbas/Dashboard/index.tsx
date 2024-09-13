import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <img src="/images/fai.jpg" width={200} />
          <div>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/CS5100/Home"
            >
              CS5100 FAI
            </Link>
            <p className="wd-dashboard-course-title">
              Foundations of Artificial Intelligence
            </p>
            <Link to="/Kanbas/Courses/CS5100/Home"> Go </Link>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/reactjs.jpg" width={200} />
          <div>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/CS5610/Home"
            >
              CS5610 React JS
            </Link>
            <p className="wd-dashboard-course-title">
              Full Stack software developer
            </p>
            <Link to="/Kanbas/Courses/CS5610/Home"> Go </Link>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/pdp.jpg" width={200} />
          <div>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/CS5010/Home"
            >
              CS5010 Java
            </Link>
            <p className="wd-dashboard-course-title">
              Programming Design Paradigms
            </p>
            <Link to="/Kanbas/Courses/CS5010/Home"> Go </Link>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/algo.jpg" width={200} />
          <div>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/CS5800/Home"
            >
              CS5800 Algo
            </Link>
            <p className="wd-dashboard-course-title">Algorithms</p>
            <Link to="/Kanbas/Courses/CS5800/Home"> Go </Link>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/ir.jpg" width={200} />
          <div>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/CS6200/Home"
            >
              CS6200 IR
            </Link>
            <p className="wd-dashboard-course-title">Information Retrival</p>
            <Link to="/Kanbas/Courses/CS6200/Home"> Go </Link>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/ml.jpg" width={200} />
          <div>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/CS6140/Home"
            >
              CS6140 ML
            </Link>
            <p className="wd-dashboard-course-title">Machine Learning</p>
            <Link to="/Kanbas/Courses/CS6140/Home"> Go </Link>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/nlp.jpg" width={200} />
          <div>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/CS6120/Home"
            >
              CS6120 NLP
            </Link>
            <p className="wd-dashboard-course-title">
              Natural Language Processing
            </p>
            <Link to="/Kanbas/Courses/CS6120/Home"> Go </Link>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/llm.jpg" width={200} />
          <div>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/DS5983/Home"
            >
              DS5983 LLMs
            </Link>
            <p className="wd-dashboard-course-title">Large Language Models</p>
            <Link to="/Kanbas/Courses/DS5983/Home"> Go </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
