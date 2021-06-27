import { Link } from "react-router-dom";
import "./articles.css";
import { getBackgroundColor } from "../../utils"
import { useEffect, useState } from "react";
import { Article } from "./ArticleModel";
import { TopFeature } from "./TopFeature";
import { Installation } from "./Installation";
import { FeatureHeader } from "./FeatureHeader";
import { MainArticle } from "./MainArticle";

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
        temArticleList = [
          ...temArticleList,
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
      }
      setArticleList(temArticleList);
    }
  }, [page]);

  return (
    <div className="mtt-article">
      <FeatureHeader />
      <TopFeature features={featureList} />
      <MainArticle
        mainArticles={articleList}
        isLoadMore={isLoadMore}
        handleLoadMore={handleLoadMore} />
      <Installation installations={installationList} />
    </div>
  )
};

export { Articles };
