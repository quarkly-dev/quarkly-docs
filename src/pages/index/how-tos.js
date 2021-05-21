import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Image, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index/how-tos"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.MobileMenu>
			<Override slot="menu">
				<Override slot="item-404" display="none" />
			</Override>
		</Components.MobileMenu>
		<Components.Header />
		<Box display="flex" quarkly-title="Content">
			<Components.SidebarMenu>
				<Override slot="Link :open" />
				<Override slot="Link :active" />
				<Override slot="Link" />
				<Override slot="Sub Head" />
				<Override slot="Sub Head Icon" />
				<Override slot="Sub Body" />
				<Override slot="Sub Head Text" />
				<Override slot="Sub Head Text :open" />
				<Override slot="Sub Head Text-code-editor1" />
				<Override slot="Sub Head Text-code-editor12" />
				<Override slot="Sub Head Text-code-editor122111" />
				<Override slot="Sub Head Text-code-editor1221121" />
				<Override slot="Sub Head Text-code-editor12211212" />
			</Components.SidebarMenu>
			<Section background="--color-white" padding="24px 0 64px 0">
				<Override slot="SectionContent" max-width="760px" />
				<Text font="--h2" color="--darkL2" sm-font="--h2Sm" margin="32px 0px 16px 0px">
					How to's
				</Text>
				<Text font="--h3" margin="8px 0px 4px 0px" color="--darkL2" sm-font="--baseSm">
					Дашборд
				</Text>
				<Box margin="24px 0px 0px 0px" id="code-editor-components" />
				<Box margin="12px 0px 0px 0px" id="properties-about">
					<Text font="--baseSm" margin="0px 0px 8px 0px" color="--darkL2">
						The second most important work area in Quarkly is the code editor. It displays all the components and their props that you can see on the screen. You can also work with the components, their props, and values much faster than on the page. You need to be able to follow JSX syntax, know the set of available components, CSS props and values.
					</Text>
					<Image src="https://test-upl.quarkly.io/5e60efa12db4d10024432a9f/images/docs-dashboard.png?v=2021-02-16T13:26:06.939Z" width="100%" />
				</Box>
				<Components.HelpPrevNextButton hierarchy="several" />
			</Section>
		</Box>
		<Components.FooterHigh />
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});