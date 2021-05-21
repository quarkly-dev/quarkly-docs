import React from "react";
import theme from "theme";
import { Theme, Link, Section, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index/interface/work-area/theme/breakpoint"} />
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
					Breakpoints
				</Components.HelpHeader2>
				<Components.HelpVideo videoId="dbS52XWCBcI" />
				<Components.HelpParagraph>
					Breakpoints (control points) are conditions under which additional design options appear on your page. Breakpoint values contain the following set of properties:
				</Components.HelpParagraph>
				<Components.HelpListMarked>
					<Components.HelpListItem>
						Type, breakpoint type with max-width before the specified value and min-width after the specified value.
					</Components.HelpListItem>
					<Components.HelpListItem>
						Value, breakpoint values in pixels.
					</Components.HelpListItem>
				</Components.HelpListMarked>
				<Components.HelpParagraph>
					The breakpoints specified in the theme are applied to all pages. To add a breakpoint to the theme, click on the{" "}
					<Components.HelpKey>
						+
					</Components.HelpKey>
					{" "}icon next to the category.
				</Components.HelpParagraph>
				<Components.HelpImageBlock src="https://uploads.quarkly.io/landing/docs-theme-panel-breakpoints-create.png" />
				<Components.HelpHeader4>
					Configuring the code
				</Components.HelpHeader4>
				<Components.HelpCodeBlock code="sm-width=’100%’" />
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