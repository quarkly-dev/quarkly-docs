import React from "react";
import theme from "theme";
import { Theme, Link, Box, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index/interface/work-area/props-panel/styles-basic"} />
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
						Styles
					</Components.HelpHeader2>
					<Box margin="24px 0px 0px 0px" id="properties-styles">
						<Components.HelpVideo videoId="kDEtTCMTEY8" />
						<Components.HelpParagraph>
							Here, you can set the visual representation of the element. You can configure both default state and pseudo-class styles: hover, active, focused and more.
						</Components.HelpParagraph>
						<Components.HelpParagraph>
							All style properties are grouped into the following tabs:
						</Components.HelpParagraph>
						<Components.HelpListMarked>
							<Components.HelpLink href="styles-states">
								States
							</Components.HelpLink>
							<Components.HelpLink href="styles-layout">
								Layout
							</Components.HelpLink>
							<Components.HelpLink href="styles-typography">
								Typography
							</Components.HelpLink>
							<Components.HelpLink href="styles-indents">
								Indents
							</Components.HelpLink>
							<Components.HelpLink href="styles-border">
								Border
							</Components.HelpLink>
							<Components.HelpLink href="styles-position">
								Position
							</Components.HelpLink>
							<Components.HelpLink href="styles-effects">
								Effects
							</Components.HelpLink>
						</Components.HelpListMarked>
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