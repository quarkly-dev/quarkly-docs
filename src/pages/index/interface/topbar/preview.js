import React from "react";
import theme from "theme";
import { Theme, Link, Section, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index/interface/topbar/preview"} />
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
			<Section background="--color-white">
				<Override slot="SectionContent" max-width="760px" />
				<Components.HelpHeader2>
					Preview
				</Components.HelpHeader2>
				<Components.HelpGroup>
					<Components.HelpImageBlockCapture>
						<Override slot="helpImageBlock" src="https://test-upl.quarkly.io/607d3473b99fb9001fcbcc16/images/docs-new-topbar-preview.png?v=2021-05-15T09:10:30.807Z" />
						<Override slot="text">
							Режим предпросмотра включается нажатием на кнопку
						</Override>
					</Components.HelpImageBlockCapture>
					<Components.HelpParagraph>
						To preview how the page is going to appear for your visitors, click “Preview” or use the shortcut{"  "}
						<Components.HelpKey display="inline-block">
							⌘(Cmd)
						</Components.HelpKey>
						+{" "}
						<Components.HelpKey display="inline-block">
							{" "}p
						</Components.HelpKey>
						{" "}on MacOs
				 or{" "}
						<Components.HelpKey display="inline-block">
							Crtl
						</Components.HelpKey>
						+{" "}
						<Components.HelpKey display="inline-block">
							p
						</Components.HelpKey>
						{" "}on Windows
				. In this preview mode, it’s easy to check how elements interact with the mouse cursor, how animation effects load and how the site is displayed on devices with different screen width and height.
					</Components.HelpParagraph>
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