import { FC } from "react";
import { Link } from "react-router-dom";
import { Article } from "./ArticleModel";
import "./Installation.css";

interface InstallationProps {
    installations: Article[]
}

const Installation: FC<InstallationProps> = ({ installations }) => {
    return (
        <div className="installation">
            <p className="title-group">INSTALLATION</p>
            <div className="split-wrap">
                <div className="split"></div>
            </div>
            {installations && (
                <div className="installation-wrap">
                    {installations.map((item, index) => (
                        <div className="wrap-card" key={index}>
                            <Link to={item.path} className="link-wrap-card"></Link>
                            <div className={`card ${item.backgroundColor}`}>
                                <div className="img-wrap">
                                    <img
                                        alt=""
                                        src={item.image}
                                    />
                                </div>
                                <div className="card-info">
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
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export { Installation };