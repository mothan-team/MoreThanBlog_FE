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
            <div className="top-feature-wrap">
                {features.map((item, index) => (
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

export { TopFeature };