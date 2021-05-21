import React from "react";
import theme from "theme";
import { Theme, Link, Box, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index/interface/work-area/props-panel"} />
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
			<Components.SidebarMenu />
			<Section background="--color-white" padding="24px 0 64px 0">
				<Override slot="SectionContent" max-width="760px" />
				<Box margin="48px 0px 0px 0px" id="interface-context-menu">
					<Components.HelpHeader2>
						Props panel
					</Components.HelpHeader2>
					<Components.HelpImageBlockCapture>
						<Override slot="helpImageBlock" src="https://test-upl.quarkly.io/60a657b1e3623a001f692958/images/docs-new-workarea-props-panel.png?v=2021-05-20T15:36:47.243Z" />
						<Override slot="text">
							Панель свойств
						</Override>
					</Components.HelpImageBlockCapture>
					<Components.HelpParagraph>
						To open the element props editor, select the desired element in one of the following ways:
					</Components.HelpParagraph>
					<Components.HelpListMarked>
						<Components.HelpListItem>
							Click on the element on the page
						</Components.HelpListItem>
						<Components.HelpListItem>
							Click on the element on the layers panel
						</Components.HelpListItem>
						<Components.HelpListItem>
							Set the сaret (text cursor) on the code element in the editor
						</Components.HelpListItem>
					</Components.HelpListMarked>
					<Components.HelpParagraph>
						Once the element is selected, its props panel will appear on the right. There, you will see:
					</Components.HelpParagraph>
					<Components.HelpListMarked>
						<Components.HelpListItem>
							Element name
						</Components.HelpListItem>
						<Components.HelpListItem>
							Tab bar with styles and props
						</Components.HelpListItem>
					</Components.HelpListMarked>
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