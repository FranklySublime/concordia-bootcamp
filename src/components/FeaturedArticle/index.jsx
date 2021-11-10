import { useContext, useEffect } from "react";
import { StoreContext } from "../../contexts/Store";

import {
	Wrapper,
	DetailsWrapper,
	Title,
	Category,
	Thumbnail,
} from "./styled-components";
const FeaturedArticle = () => {
	const { featuredArticle, articles, setFeaturedArticle, getFeatured } =
		useContext(StoreContext);

	useEffect(() => {
		if (articles.length > 0) {
			setFeaturedArticle(getFeatured(articles));
		}
	}, [articles]);

	return featuredArticle !== null ? (
		<Wrapper>
			<Thumbnail src="https://via.placeholder.com/566x300.png" />
			<DetailsWrapper>
				<Title>{featuredArticle.fields.title}</Title>
				<Category> {featuredArticle.fields.category}</Category>
			</DetailsWrapper>
		</Wrapper>
	) : (
		<div></div>
	);
};

export default FeaturedArticle;
