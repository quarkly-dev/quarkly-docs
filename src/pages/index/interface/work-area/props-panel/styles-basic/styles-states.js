import React from "react";
import theme from "theme";
import { Theme, Link, Box, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index/interface/work-area/props-panel/styles-basic/styles-states"} />
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
						States (pseudo-classes)
					</Components.HelpHeader2>
					<Box margin="24px 0px 0px 0px" id="properties-styles">
						<Components.HelpImageBlockCapture>
							<Override slot="helpImageBlock" src="https://test-upl.quarkly.io/60a657b1e3623a001f692958/images/docs-new-workarea-props-panel-styles-states.png?v=2021-05-20T15:36:47.246Z" />
							<Override slot="text">
								Состояния элементов (pseudo-classes)
							</Override>
						</Components.HelpImageBlockCapture>
						<Components.HelpParagraph>
							To configure the styles for a pseudo-class, select the desired style in the tab and change it. Don't forget to go back to the default state. To check how it works, go to the preview mode.
						</Components.HelpParagraph>
					</Box>
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