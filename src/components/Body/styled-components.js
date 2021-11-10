import styled from "styled-components";

//Body Styling
export const Wrapper = styled.div`
	max-width: 1176px;
`;

//Load Button styling
export const LoadButton = styled.button`
	color: #212120;
	border-radius: 30px;
	border: 2px solid #212120;
	font-size: 24px;
	font-weight: 400;
	font-family: "Poynter Oldstyle Disp Semi Bd", serif;
	padding-top: 14px;
	padding-bottom: 14px;
	padding-left: 24px;
	padding-right: 24px;
	text-decoration: none;
	&:hover {
		color: #ffefe2;
		background-color: #212120;
		transition: linear 0.4s;
	}
`;

//Load Button Wrapper styling
export const LoadWrapper = styled.div`
	text-align: center;
`;
