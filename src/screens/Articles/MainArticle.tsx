import { FC } from "react";
import { Link } from "react-router-dom";
import { Article } from "./ArticleModel";
import "./MainArticle.css";

interface MainArticleProps {
    mainArticles: Article[],
    isLoadMore: Boolean,
    handleLoadMore: Function
}

const MainArticle: FC<MainArticleProps> = ({ mainArticles, isLoadMore, handleLoadMore }) => {
    return (
        <div className="article">
            <p className="lastest-post-title-group">LASTEST POST</p>
            <div className="split-wrap">
                <div className="split"></div>
            </div>
            {mainArticles && mainArticles.length > 0 && (
                <div className="article-wrap">
                    <div className="article-lastest">
                        <Link to={mainArticles[0].path}>
                            <div className="img-wrap">
                                <img className="thumbnail" src={mainArticles[0].image}></img>
                            </div>
                        </Link>
                        <div className="info">
                            <div className="tag">
                                <div className="tag-item">
                                    <Link to={mainArticles[0].tagPath}>{mainArticles[0].tag}</Link>
                                </div>
                            </div>
                            <div className="title">
                                <Link to={mainArticles[0].path}>{mainArticles[0].title}</Link>
                            </div>
                            <div className="split"></div>
                            <div className="preview">
                                <p>{mainArticles[0].preview}</p>
                            </div>
                            <div className="author">
                                <div className="avatar">
                                    <img src={mainArticles[0].authorImage}></img>
                                </div>
                                <div className="author-info">
                                    <div className="name">{mainArticles[0].author}</div>
                                    <div className="time">{`${mainArticles[0].createDate} ∙ ${mainArticles[0].timeToRead}`}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="article-list">
                        <div className="article-list-wrap">
                            <div className="article-list-1">
                                {mainArticles.filter((item, index) => index > 0 && index < 6).map((item, index) => (
                                    <div className="wrap-card" key={index}>
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
                                ))}
                            </div>
                            {isLoadMore && (
                                <div className="article-list-2">
                                    {mainArticles.filter((item, index) => index >= 6).map((item, index) => (
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
            )}
        </div>
    );
};

export { MainArticle };