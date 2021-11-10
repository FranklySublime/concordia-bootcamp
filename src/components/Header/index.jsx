import logo from "../../images/logo.svg";
import Container from "../Container";

import { Logo, StyledHeader } from "./styled-components";

// switched this to an arrow function
const Header = () => {
	return (
		<StyledHeader>
			<Container>
				<a href="https://www.dialogue.co" data-testid="logo">
					<Logo src={logo} alt="Dialogue" />
				</a>
			</Container>
		</StyledHeader>
	);
};

export default Header;
