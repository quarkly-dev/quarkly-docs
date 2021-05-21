import React from "react";
import theme from "theme";
import { Theme, Link, Section, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index/interface/work-area/theme/transforms"} />
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
				<Override slot="Sub Head Text-overview12211111">
					Theme
				</Override>
			</Components.SidebarMenu>
			<Section background="--color-white" padding="24px 0 64px 0">
				<Override slot="SectionContent" max-width="760px" />
				<Components.HelpHeader2>
					Transforms
				</Components.HelpHeader2>
				<Components.HelpVideo videoId="iBgOBURPrm8" />
				<Components.HelpParagraph>
					Transforms allow you to rotate, zoom or move an element and even more. Transform values contain the following set of properties:
				</Components.HelpParagraph>
				<Components.HelpListMarked>
					<Components.HelpListItem>
						Type, transform type.
					</Components.HelpListItem>
					<Components.HelpListItem>
						Arguments, value.
					</Components.HelpListItem>
				</Components.HelpListMarked>
				<Components.HelpParagraph>
					To add a transform to the theme, click on the{" "}
					<Components.HelpKey>
						+
					</Components.HelpKey>
					{" "}icon next to the category.{" "}
				</Components.HelpParagraph>
				<Components.HelpImageBlock src="https://uploads.quarkly.io/landing/docs-theme-panel-transforms-styles-create.png" />
				<Components.HelpParagraph>
					To add a background style from the theme to an element, go to the Effect section, click on the{" "}
					<Components.HelpImageInline />
					{" "}icon next to the Transform property and select the transform value you want.
				</Components.HelpParagraph>
				<Components.HelpImageBlock src="https://uploads.quarkly.io/landing/docs-theme-panel-transforms-styles-apply.png" />
				<Components.HelpHeader4>
					Configuring the code
				</Components.HelpHeader4>
				<Components.HelpCodeBlock code="transform=’--rotate90’" />
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