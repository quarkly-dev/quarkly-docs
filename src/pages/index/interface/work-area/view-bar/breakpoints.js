import React from "react";
import theme from "theme";
import { Theme, Link, Section, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index/interface/work-area/view-bar/breakpoints"} />
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
				<Components.HelpGroup>
					<Components.HelpImageBlockCapture>
						<Override slot="helpImageBlock" src="https://test-upl.quarkly.io/607d3473b99fb9001fcbcc16/images/docs-new-workarea-viewbar-breakpoints.png?v=2021-05-15T14:05:39.826Z" />
						<Override slot="text">
							Выбор брейкпоинта в View bar
						</Override>
					</Components.HelpImageBlockCapture>
					<Components.HelpParagraph>
						Breakpoints (control points) are the conditions under which additional design options for your page appear. For example, if your screen width is less than 768px, your can turn your four-column layout into a two-column layout.
					</Components.HelpParagraph>
					<Components.HelpParagraph>
						Choosing the breakpoint design is up to you. Just activate the desired breakpoint and set the element styles. There are three ways to activate a breakpoint:
					</Components.HelpParagraph>
					<Components.HelpListMarked>
						<Components.HelpListItem>
							Select an option from the dropdown list.
						</Components.HelpListItem>
						<Components.HelpListItem>
							Click on the corresponding breakpoint width range on the panel.
						</Components.HelpListItem>
						<Components.HelpListItem>
							Stretch or narrow down the page to the desired width.
						</Components.HelpListItem>
					</Components.HelpListMarked>
					<Components.HelpParagraph>
						If you want to add a custom breakpoint or edit an existing one, go to the Theme panel and click on the{" "}
						<Components.HelpKey display="inline-block">
							+
						</Components.HelpKey>
						{" "}button to add a new value to the Breakpoints section.
					</Components.HelpParagraph>
					<Components.HelpImageBlockCapture>
						<Override slot="helpImageBlock" src="https://test-upl.quarkly.io/607d3473b99fb9001fcbcc16/images/docs-new-workarea-viewbar-breakpoints-create-new.png?v=2021-05-15T14:15:25.374Z" />
						<Override slot="text">
							Настройка брейкпоинта в Theme / Breakpoints
						</Override>
					</Components.HelpImageBlockCapture>
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