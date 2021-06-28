import { FC } from "react";
import { Link } from "react-router-dom";
import { Article } from "./ArticleModel";
import "./TopFeature.css";

interface TopFeatureProps {
    features: Article[]
}

const TopFeature: FC<TopFeatureProps> = ({ features }) => {
    return (
        <div className="top-feature">
            <p className="title-group">FEATURED</p>
            <div className="split-wrap">
                <div className="split"></div>
            </div>
            {features && (
                <div className="top-feature-wrap">
                    {features.map((item, index) => (
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

export { TopFeature };