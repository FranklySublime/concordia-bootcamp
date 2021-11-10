import { useContext } from "react";
import { StoreContext } from "../../contexts/Store";

import { Wrapper, Title, Category, Thumbnail } from "./styled-components";
const Article = ({ fields }) => {
	return (
		<Wrapper>
			<Thumbnail src="https://via.placeholder.com/566x300.png" />
			<Title>{fields.title}</Title>
			<Category> {fields.category}</Category>
		</Wrapper>
	);
};

export default Article;
