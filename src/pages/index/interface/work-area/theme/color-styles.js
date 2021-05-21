import React from "react";
import theme from "theme";
import { Theme, Link, Section, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index/interface/work-area/theme/color-styles"} />
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
					Color styles
				</Components.HelpHeader2>
				<Components.HelpVideo videoId="tPupaz-C_1A" />
				<Components.HelpParagraph>
					To add a color style to the theme, click on the{" "}
					<Components.HelpKey>
						+
					</Components.HelpKey>
					{" "}icon next to the category.{" "}
				</Components.HelpParagraph>
				<Components.NativeVideo src="https://uploads.quarkly.io/landing/docs-theme-panel-color-styles-create.mp4" width="100%" poster="https://uploads.quarkly.io/landing/docs-theme-panel-color-styles-create-poster.png" margin="12px 0px 18px 0px" />
				<Components.HelpParagraph>
					The color value in the theme can be any of those available in CSS. A color from the theme can be set as a font color, block background color, border color, etc.
				</Components.HelpParagraph>
				<Components.HelpParagraph>
					For example, to change the theme, go to the Typography section on the Styles panel, click on the
					<Components.HelpImageInline />
					{" "}icon next to the Color property and select the color you want.
				</Components.HelpParagraph>
				<Components.NativeVideo src="https://uploads.quarkly.io/landing/docs-theme-panel-color-styles-apply.mp4" height="auto" poster="https://uploads.quarkly.io/landing/docs-theme-panel-color-styles-apply-poster.png" margin="12px 0px 18px 0px" />
				<Components.HelpHeader4>
					Configuring the code
				</Components.HelpHeader4>
				<Components.HelpCodeBlock code="color=’--color-primary’" />
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