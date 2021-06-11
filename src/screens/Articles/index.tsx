import { Link } from "react-router-dom";
import "./articles.css";

const Articles = (props: object) => {
  return (
    <div className="mtt-article">
      <div className="flex px-32 justify-between h-32">
        <div className="feature-header-item1 rounded-3xl flex p-4 transition duration-200 transform hover:-translate-y-1 cursor-pointer">
          <Link to="">
            <img
              src={`${process.env.PUBLIC_URL}/assets/img/feature-header-item-1.jpeg`}
              className="rounded-2xl"
            />
          </Link>
          <Link
            to=""
            className="flex items-center text-2xl font-extrabold px-4"
          >
            More Than Team Source
          </Link>
        </div>
        <div className="feature-header-item2 bg-blue-200 rounded-3xl flex p-4 transition duration-200 transform hover:-translate-y-1 cursor-pointer">
          <Link to="">
            <img
              src={`${process.env.PUBLIC_URL}/assets/img/feature-header-item-1.jpeg`}
              className="rounded-2xl"
            />
          </Link>
          <Link
            to=""
            className="flex items-center text-2xl font-extrabold px-4"
          >
            About Me
          </Link>
        </div>
      </div>
      <div className="top-feature">
        <p className="title-group">FEATURED</p>
        <div className="top-feature-wrap">
          <div className="card-1">
            <img
              src={`${process.env.PUBLIC_URL}/assets/img/feature-header-item-1.jpeg`}
            />
            <div className="card-info">
              <Link
                to=""
                className="title"
              >
                Muon roi ma sao con
            </Link>
              <div className="author-wrap">
                <Link
                  to=""
                  className="author"
                >
                  Son Tung MTP
            </Link>
              </div>
            </div>
          </div>
          <div className="card-2">
            <img
              src={`${process.env.PUBLIC_URL}/assets/img/feature-header-item-1.jpeg`}
            />
            <div className="card-info">
              <Link
                to=""
                className="title"
              >
                Muon roi ma sao con
            </Link>
              <div className="author-wrap">
                <Link
                  to=""
                  className="author"
                >
                  Son Tung MTP
            </Link>
              </div>
            </div>
          </div>
          <div className="card-3">
            <img
              src={`${process.env.PUBLIC_URL}/assets/img/feature-header-item-1.jpeg`}
            />
            <div className="card-info">
              <Link
                to=""
                className="title"
              >
                Muon roi ma sao con
            </Link>
              <div className="author-wrap">
                <Link
                  to=""
                  className="author"
                >
                  Son Tung MTP
            </Link>
              </div>
            </div>
          </div>
          <div className="card-4">
            <img
              src={`${process.env.PUBLIC_URL}/assets/img/feature-header-item-1.jpeg`}
            />
            <div className="card-info">
              <Link
                to=""
                className="title"
              >
                Muon roi ma sao con
            </Link>
              <div className="author-wrap">
                <Link
                  to=""
                  className="author"
                >
                  Son Tung MTP
            </Link>
              </div>
            </div>
          </div>
          <div className="card-5">
            <img
              src={`${process.env.PUBLIC_URL}/assets/img/feature-header-item-1.jpeg`}
            />
            <div className="card-info">
              <Link
                to=""
                className="title"
              >
                Muon roi ma sao con
            </Link>
              <div className="author-wrap">
                <Link
                  to=""
                  className="author"
                >
                  Son Tung MTP
            </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="article">
        <p className="lastest-post-title-group">LASTEST POST</p>
        <div className="article-wrap">
          <div className="article-lastest">
            <Link to="">
              <img className="thumbnail" src={`${process.env.PUBLIC_URL}/assets/img/feature-header-item-1.jpeg`}></img>
            </Link>
            <div className="info">
              <div className="tag">
                <div className="tag-item">
                  <Link to="">.NET Framework Core</Link>
                </div>
              </div>
              <div className="title">
                <Link to="">Dependency Injection Lifetime In .NET Core</Link>
              </div>
              <div className="split">---------------------------</div>
              <div className="preview">
                <p>The Pioneer of DI is Robert C. Martin. He wrote in his paper about "The Dependency Inversion Principle", which also known as DIP for short. This is eventually known as IoC/DI’s principle, just like now.</p>
              </div>
              <div className="author">
                <div className="avatar">
                  <img src={`${process.env.PUBLIC_URL}/assets/img/feature-header-item-1.jpeg`}></img>
                </div>
                <div className="author-info">
                  <div className="name">Son Tung MTP</div>
                  <div className="time">May 5, 2021 ∙ 4 minutes read</div>
                </div>
              </div>
            </div>
          </div>
          <div className="article-list">
            <div className="card">
              <Link to="">
                <img src={`${process.env.PUBLIC_URL}/assets/img/feature-header-item-1.jpeg`}></img>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
};

export { Articles };
