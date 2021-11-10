import React, { useState, useEffect, useContext } from "react";
import { getAllArticles } from "../services/contentful";

export const StoreContext = React.createContext();

export const StoreProvider = ({ children }) => {
	const [featuredArticle, setFeaturedArticle] = useState(null);
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		(async function fetchArticles() {
			setArticles(await getAllArticles());
		})();
	}, []);

	// TODO: Update the method below to return the latest featured article from the list of articles
	const getFeatured = (array) => {
		// filtering featured articles
		let featuredArray = array.filter((index) => {
			return index.fields.featured === true;
		});

		//converting the array to a number
		let latestArticles = featuredArray.map((index) => {
			return new Date(index.fields.date).getTime();
		});

		let newestArticle = array.filter((index) => {
			return (
				new Date(index.fields.date).getTime() ===
				latestArticles.sort()[0]
			);
		});
		// output array with latest article object

		return newestArticle[0];
	};

	return (
		<StoreContext.Provider
			value={{
				featuredArticle,
				setFeaturedArticle,
				// getFeaturedArticle: getFeatured,
				getFeatured,
				articles,
			}}
		>
			{children}
		</StoreContext.Provider>
	);
};

export const useStore = () => useContext(StoreContext);
