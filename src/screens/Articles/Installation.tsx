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
            <div className="installation-wrap">
                {installations.map((item, index) => (
                    <div className={`card ${item.backgroundColor}`} key={index}>
                        <div className="img-wrap">
                            <img
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
                ))}
            </div>
        </div>
    )
}

export { Installation };