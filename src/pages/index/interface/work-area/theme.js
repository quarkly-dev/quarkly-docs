import React from "react";
import theme from "theme";
import { Theme, Link, Section, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index/interface/work-area/theme"} />
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
					Theme
				</Components.HelpHeader2>
				<Components.HelpImageBlockCapture>
					<Override slot="helpImageBlock" src="https://test-upl.quarkly.io/60a657b1e3623a001f692958/images/docs-new-workarea-theme.png?v=2021-05-21T06:27:12.926Z" />
					<Override slot="text">
						Панель темы проекта
					</Override>
				</Components.HelpImageBlockCapture>
				<Components.HelpParagraph>
					Some of the values can be used as part of other values. For example, a color value can be part of a shadow style value.
				</Components.HelpParagraph>
				<Components.HelpVideo videoId="fyLLNYVNG30" />
				<Components.HelpParagraph>
					You can edit, remove and add new theme values. To edit or remove a value, mouse over it and click the relevant button. To add a new value, click on the{" "}
					<Components.HelpKey>
						+
					</Components.HelpKey>
					{" \n\t\t\t "}icon next to the category of the value you want to add. The categories are:
				</Components.HelpParagraph>
				<Components.HelpListMarked>
					<Components.HelpLink href="text-styles">
						Text style
					</Components.HelpLink>
					<Components.HelpLink href="color-styles">
						Color style
					</Components.HelpLink>
					<Components.HelpLink href="bg-styles">
						Background style
					</Components.HelpLink>
					<Components.HelpLink href="shadows">
						Shadow
					</Components.HelpLink>
					<Components.HelpLink href="transitions">
						Transitions
					</Components.HelpLink>
					<Components.HelpLink href="transforms">
						Transforms
					</Components.HelpLink>
					<Components.HelpLink href="filters">
						Filters
					</Components.HelpLink>
					<Components.HelpLink href="breakpoint">
						Breakpoints
					</Components.HelpLink>
				</Components.HelpListMarked>
				<Components.HelpParagraph>
					When creating a custom design, it’s better to apply a limited number of text styles, colors, fonts, shadows and so on. In the Quarkly Theme panel, you will find categorized values for various purposes.
				</Components.HelpParagraph>
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