import React from "react";
import theme from "theme";
import { Theme, Link, Section, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index/interface/work-area/view-bar/zoom"} />
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
				<Components.HelpHeader2>
					Zoom
				</Components.HelpHeader2>
				<Components.HelpGroup>
					<Components.HelpImageBlockCapture>
						<Override slot="helpImageBlock" src="https://test-upl.quarkly.io/607d3473b99fb9001fcbcc16/images/docs-new-workarea-viewbar-zoom.png?v=2021-05-15T13:56:15.654Z" />
						<Override slot="text">
							Настройки масштабирования в View bar
						</Override>
					</Components.HelpImageBlockCapture>
					<Components.HelpParagraph margin="8px 0px 18px 0px">
						Zoom in on the page if you want to take a closer look at the details, and zoom out if you want to see an overall view of the page design. To speed up your work even more, use the following shortcuts.
					</Components.HelpParagraph>
					<Components.HelpTable cols="3" showHeader rows="3">
						<Override slot="Text THead Col-0">
							Action
						</Override>
						<Override slot="Text THead Col-1">
							Windows and Linux
						</Override>
						<Override slot="Text THead Col-2">
							macOs
						</Override>
						<Override slot="Text 0-0">
							Zoom In
						</Override>
						<Override slot="Text 1-0">
							Zoom Out
						</Override>
						<Override slot="Text 2-0">
							Actual view
						</Override>
						<Override slot="Text 0-1">
							<Components.HelpKey>
								Ctrl
							</Components.HelpKey>
							{" "}+{" "}
							<Components.HelpKey>
								+
							</Components.HelpKey>
						</Override>
						<Override slot="Text 1-1">
							<Components.HelpKey>
								Ctrl
							</Components.HelpKey>
							{" "}+{" "}
							<Components.HelpKey>
								-
							</Components.HelpKey>
						</Override>
						<Override slot="Text 2-1">
							<Components.HelpKey>
								Ctrl
							</Components.HelpKey>
							{" "}+{" "}
							<Components.HelpKey>
								0
							</Components.HelpKey>
						</Override>
						<Override slot="Text 0-2">
							<Components.HelpKey>
								Cmd
							</Components.HelpKey>
							{" "}+{" "}
							<Components.HelpKey>
								+
							</Components.HelpKey>
						</Override>
						<Override slot="Text 1-2">
							<Components.HelpKey>
								Cmd
							</Components.HelpKey>
							{" "}+{" "}
							<Components.HelpKey>
								-
							</Components.HelpKey>
						</Override>
						<Override slot="Text 2-2">
							<Components.HelpKey>
								Cmd
							</Components.HelpKey>
							{" "}+{" "}
							<Components.HelpKey>
								0
							</Components.HelpKey>
						</Override>
						<Override slot="Cell" width="33.333%" text-align="left" />
					</Components.HelpTable>
				</Components.HelpGroup>
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