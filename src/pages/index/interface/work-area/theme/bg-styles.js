import React from "react";
import theme from "theme";
import { Theme, Link, Section, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index/interface/work-area/theme/bg-styles"} />
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
					Background styles
				</Components.HelpHeader2>
				<Components.HelpVideo videoId="r353OYO5C60" />
				<Components.HelpParagraph>
					Backgrounds are used a lot in design. In addition to a plain color, you may want to a gradient, tile or an image. Element properties allow you to create a complex background consisting of several simpler overlapping ones. A background style is a set of the following properties:
				</Components.HelpParagraph>
				<Components.HelpListMarked>
					<Components.HelpListItem>
						Color, a background color is displayed when no other types are set;
					</Components.HelpListItem>
					<Components.HelpListItem>
						Type, background type (image, linear-, radial- and conic-gradient);
					</Components.HelpListItem>
					<Components.HelpListItem>
						Position, background position relative to the container;
					</Components.HelpListItem>
					<Components.HelpListItem>
						Size, background size relative to the container;
					</Components.HelpListItem>
					<Components.HelpListItem>
						Repeat, background repetition;
					</Components.HelpListItem>
					<Components.HelpListItem>
						Attachment, background scrolling;
					</Components.HelpListItem>
					<Components.HelpListItem>
						Clip, background/border ratio.
					</Components.HelpListItem>
				</Components.HelpListMarked>
				<Components.HelpParagraph>
					To add a background style to the theme, click on the{" "}
					<Components.HelpKey>
						+
					</Components.HelpKey>
					{" "}icon next to the category.
				</Components.HelpParagraph>
				<Components.HelpImageBlock src="https://uploads.quarkly.io/landing/docs-theme-panel-background-styles-create.png" />
				<Components.HelpParagraph>
					To add a background style from the theme to an element, go to the Styles panel, click on the{" "}
					<Components.HelpImageInline />
					{" "}icon next to the Background property and select the background style you want.
				</Components.HelpParagraph>
				<Components.HelpImageBlock src="https://uploads.quarkly.io/landing/docs-theme-panel-background-styles-apply.png" />
				<Components.HelpHeader4>
					Configuring the code
				</Components.HelpHeader4>
				<Components.HelpCodeBlock code="background=’--primaryGradient’" />
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