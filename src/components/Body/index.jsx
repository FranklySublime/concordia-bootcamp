import { useContext } from "react";
import { StoreContext } from "../../contexts/Store";

import FeaturedArticle from "../FeaturedArticle";
import Article from "../Article";

import LoadMore from "./LoadMore";
import { Wrapper } from "./styled-components";
// Body component to host the grid of articles and featured article
const Body = () => {
	const { featuredArticle, articles, getFeatured } = useContext(StoreContext);

	// console.log(getFeatured(articles));
	return (
		<Wrapper>
			<>
				<FeaturedArticle />
				// getting the articles to show up
				{articles.length &&
					articles.map((article) => {
						return (
							<Article
								fields={article.fields}
								key={article.sys.id}
							></Article>
						);
					})}
			</>
			<LoadMore />
		</Wrapper>
	);
};

export default Body;
