import { Box } from "./styled-components";

// switched this to an arrow function
const Container = ({ children }) => {
	return (
		<>
			<Box>{children}</Box>
		</>
	);
};

export default Container;
