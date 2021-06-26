import { Link } from "react-router-dom";
import "./articles.css";
import { getBackgroundColor } from "../../utils"
import { useEffect, useState } from "react";
import { Article } from "./ArticleModel";
import { TopFeature } from "./TopFeature";
import { Installation } from "./Installation";

const Articles = (props: object) => {
  var features = [
    {
      path: "",
      title: "Muộn rồi mà sao còn",
      image: `${process.env.PUBLIC_URL}/assets/img/feature-header-item-1.jpeg`,
      author: "More Than Team",
      authorPath: "",
      authorImage: "",
      tag: "",
      tagPath: "",
      preview: "",
      createDate: "",
      timeToRead: "",
      backgroundColor: getBackgroundColor()
    },
    {
      path: "",
      title: "Muộn rồi mà sao còn",
      image: `${process.env.PUBLIC_URL}/assets/img/feature-header-item-1.jpeg`,
      author: "More Than Team",
      authorPath: "",
      authorImage: "",
      tag: "",
      tagPath: "",
      preview: "",
      createDate: "",
      timeToRead: "",
      backgroundColor: getBackgroundColor()
    },
    {
      path: "",
      title: "Muộn rồi mà sao còn",
      image: `${process.env.PUBLIC_URL}/assets/img/feature-header-item-1.jpeg`,
      author: "More Than Team",
      authorPath: "",
      authorImage: "",
      tag: "",
      tagPath: "",
      preview: "",
      createDate: "",
      timeToRead: "",
      backgroundColor: getBackgroundColor()
    },
    {
      path: "",
      title: "Muộn rồi mà sao còn",
      image: `${process.env.PUBLIC_URL}/assets/img/feature-header-item-1.jpeg`,
      author: "More Than Team",
      authorPath: "",
      authorImage: "",
      tag: "",
      tagPath: "",
      preview: "",
      createDate: "",
      timeToRead: "",
      backgroundColor: getBackgroundColor()
    },
    {
      path: "",
      title: "Muộn rồi mà sao còn",
      image: `${process.env.PUBLIC_URL}/assets/img/feature-header-item-1.jpeg`,
      author: "More Than Team",
      authorPath: "",
      authorImage: "",
      tag: "",
      tagPath: "",
      preview: "",
      createDate: "",
      timeToRead: "",
      backgroundColor: getBackgroundColor()
    }
  ];
  var articles = [
    {
      path: "",
      title: "Dependency Injection Lifetime In .NET Core",
      image: `${process.env.PUBLIC_URL}/assets/img/feature-header-item-1.jpeg`,
      author: "More Than Team",
      authorPath: "",
      authorImage: `${process.env.PUBLIC_URL}/assets/img/feature-header-item-1.jpeg`,
      tag: ".NET Framework",
      tagPath: "",
      preview: `The Pioneer of DI is Robert C. Martin. He wrote in his paper about "The Dependency Inversion Principle", which also known as DIP for short. This is eventually known as IoC/DI’s principle, just like now.`,
      createDate: "May 5, 2021",
      timeToRead: "4 minutes read",
      backgroundColor: getBackgroundColor()
    },
    {
      path: "",
      title: "Muộn rồi mà sao còn",
      image: `${process.env.PUBLIC_URL}/assets/img/feature-header-item-1.jpeg`,
      author: "More Than Team",
      authorPath: "",
      authorImage: "",
      tag: "",
      tagPath: "",
      preview: "",
      createDate: "",
      timeToRead: "",
      backgroundColor: getBackgroundColor()
    },
    {
      path: "",
      title: "Muộn rồi mà sao còn",
      image: `${process.env.PUBLIC_URL}/assets/img/feature-header-item-1.jpeg`,
      author: "More Than Team",
      authorPath: "",
      authorImage: "",
      tag: "",
      tagPath: "",
      preview: "",
      createDate: "",
      timeToRead: "",
      backgroundColor: getBackgroundColor()
    },
    {
      path: "",
      title: "Muộn rồi mà sao còn",
      image: `${process.env.PUBLIC_URL}/assets/img/feature-header-item-1.jpeg`,
      author: "More Than Team",
      authorPath: "",
      authorImage: "",
      tag: "",
      tagPath: "",
      preview: "",
      createDate: "",
      timeToRead: "",
      backgroundColor: getBackgroundColor()
    },
    {
      path: "",
      title: "Muộn rồi mà sao còn",
      image: `${process.env.PUBLIC_URL}/assets/img/feature-header-item-1.jpeg`,
      author: "More Than Team",
      authorPath: "",
      authorImage: "",
      tag: "",
      tagPath: "",
      preview: "",
      createDate: "",
      timeToRead: "",
      backgroundColor: getBackgroundColor()
    },
    {
      path: "",
      title: "Muộn rồi mà sao còn",
      image: `${process.env.PUBLIC_URL}/assets/img/feature-header-item-1.jpeg`,
      author: "More Than Team",
      authorPath: "",
      authorImage: "",
      tag: "",
      tagPath: "",
      preview: "",
      createDate: "",
      timeToRead: "",
      backgroundColor: getBackgroundColor()
    }
  ];
  var installations = [
    {
      path: "",
      title: "Muộn rồi mà sao còn",
      image: `${process.env.PUBLIC_URL}/assets/img/feature-header-item-1.jpeg`,
      author: "More Than Team",
      authorPath: "",
      authorImage: "",
      tag: "",
      tagPath: "",
      preview: "",
      createDate: "",
      timeToRead: "",
      backgroundColor: getBackgroundColor()
    },
    {
      path: "",
      title: "Muộn rồi mà sao còn",
      image: `${process.env.PUBLIC_URL}/assets/img/feature-header-item-1.jpeg`,
      author: "More Than Team",
      authorPath: "",
      authorImage: "",
      tag: "",
      tagPath: "",
      preview: "",
      createDate: "",
      timeToRead: "",
      backgroundColor: getBackgroundColor()
    },
    {
      path: "",
      title: "Muộn rồi mà sao còn",
      image: `${process.env.PUBLIC_URL}/assets/img/feature-header-item-1.jpeg`,
      author: "More Than Team",
      authorPath: "",
      authorImage: "",
      tag: "",
      tagPath: "",
      preview: "",
      createDate: "",
      timeToRead: "",
      backgroundColor: getBackgroundColor()
    },
    {
      path: "",
      title: "Muộn rồi mà sao còn",
      image: `${process.env.PUBLIC_URL}/assets/img/feature-header-item-1.jpeg`,
      author: "More Than Team",
      authorPath: "",
      authorImage: "",
      tag: "",
      tagPath: "",
      preview: "",
      createDate: "",
      timeToRead: "",
      backgroundColor: getBackgroundColor()
    },
    {
      path: "",
      title: "Muộn rồi mà sao còn",
      image: `${process.env.PUBLIC_URL}/assets/img/feature-header-item-1.jpeg`,
      author: "More Than Team",
      authorPath: "",
      authorImage: "",
      tag: "",
      tagPath: "",
      preview: "",
      createDate: "",
      timeToRead: "",
      backgroundColor: getBackgroundColor()
    }
  ];

  const [isLoadMore, setIsLoadMore] = useState(false);
  const pageLimit = 6;
  const [page, setPage] = useState(1);
  const [featureList, setFeatureList] = useState<Article[]>([]);
  const [articleList, setArticleList] = useState<Article[]>([]);
  const [installationList, setInstallationList] = useState<Article[]>([]);

  const handleLoadMore = () => {
    setIsLoadMore(true);
    setPage(page + 1);
  };

  useEffect(() => {
    setFeatureList(features);
    setArticleList(articles);
    setInstallationList(installations);
    if (page > 1) {
      var temArticleList = [...articles];
      for (let i = 1; i < page; i++) {
        temArticleList = [...temArticleList, ...articles];
      }
      setArticleList(temArticleList);
    }
  }, [page]);

  return (
    <div className="mtt-article">
      <div className="flex px-32 justify-between h-32">
        <div className={`feature-header-item1 rounded-3xl flex p-4 transition duration-200 transform hover:-translate-y-1 cursor-pointer ${getBackgroundColor()}`}>
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
        <div className={`feature-header-item2 bg-blue-200 rounded-3xl flex p-4 transition duration-200 transform hover:-translate-y-1 cursor-pointer ${getBackgroundColor()}`}>
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
      <TopFeature features={featureList}></TopFeature>
      {articleList.length > 0 && (
        <div className="article">
          <p className="lastest-post-title-group">LASTEST POST</p>
          <div className="article-wrap">
            <div className="article-lastest">
              <Link to={articleList[0].path}>
                <div className="img-wrap">
                  <img className="thumbnail" src={articleList[0].image}></img>
                </div>
              </Link>
              <div className="info">
                <div className="tag">
                  <div className="tag-item">
                    <Link to={articleList[0].tagPath}>{articleList[0].tag}</Link>
                  </div>
                </div>
                <div className="title">
                  <Link to={articleList[0].path}>{articleList[0].title}</Link>
                </div>
                <div className="split">---------------------------</div>
                <div className="preview">
                  <p>{articleList[0].preview}</p>
                </div>
                <div className="author">
                  <div className="avatar">
                    <img src={articleList[0].authorImage}></img>
                  </div>
                  <div className="author-info">
                    <div className="name">{articleList[0].author}</div>
                    <div className="time">{`${articleList[0].createDate} ∙ ${articleList[0].timeToRead}`}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="article-list">
              <div className="article-list-wrap">
                <div className="article-list-1">
                  {articleList.filter((item, index) => index > 0 && index < 4).map((item, index) => (
                    <div className="wrap-card">
                      <Link to={item.path} className="link-wrap-card" />
                      <div className={`card ${item.backgroundColor}`}>
                        <div className="img-wrap">
                          <img
                            src={item.image}
                          />
                        </div>
                        <div className="card-info">
                          <div className="info">
                            <Link
                              to={item.path}
                              className="title"
                            >
                              {item.title}
                            </Link>
                            <div className="author-wrap">
                              <Link
                                to={item.authorPath}
                                className="author"
                              >
                                {item.author}
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="tag">
                          <div className="tag-item">
                            <Link to="">.NET</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    // </Link>
                  ))}
                </div>
                <div className="article-list-2">
                  {articleList.filter((item, index) => index === 4 || index === 5).map((item, index) => (
                    <div className="wrap-card">
                      <Link to={item.path} className="link-wrap-card" />
                      <div className={`card ${item.backgroundColor}`}>
                        <div className="img-wrap">
                          <img
                            src={item.image}
                          />
                        </div>
                        <div className="card-info">
                          <div className="info">
                            <Link
                              to={item.path}
                              className="title"
                            >
                              {item.title}
                            </Link>
                            <div className="author-wrap">
                              <Link
                                to={item.authorPath}
                                className="author"
                              >
                                {item.author}
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="tag">
                          <div className="tag-item">
                            <Link to="">.NET</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    // </Link>
                  ))}
                </div>
                {isLoadMore && (
                  <div className="article-list-3">
                    {articleList.filter((item, index) => index > 5).map((item, index) => (
                      <div className="wrap-card">
                        <Link to={item.path} className="link-wrap-card" />
                        <div className={`card ${item.backgroundColor}`}>
                          <div className="img-wrap">
                            <img
                              src={item.image}
                            />
                          </div>
                          <div className="card-info">
                            <div className="info">
                              <Link
                                to={item.path}
                                className="title"
                              >
                                {item.title}
                              </Link>
                              <div className="author-wrap">
                                <Link
                                  to={item.authorPath}
                                  className="author"
                                >
                                  {item.author}
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="tag">
                            <div className="tag-item">
                              <Link to="">.NET</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      // </Link>
                    ))}
                  </div>
                )}
                <div className="pagination">
                  <button className="load-more-button" onClick={() => handleLoadMore()}>
                    Load more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Installation installations={installationList} />
    </div>
  )
};

export { Articles };
