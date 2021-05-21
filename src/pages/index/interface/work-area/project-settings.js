import React from "react";
import theme from "theme";
import { Theme, Link, Section, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index/interface/work-area/project-settings"} />
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
				<Override slot="Sub Head Text-overview122111111" />
			</Components.SidebarMenu>
			<Section background="--color-white" padding="24px 0 64px 0">
				<Override slot="SectionContent" max-width="760px" />
				<Components.HelpHeader2>
					Project Settings
				</Components.HelpHeader2>
				<Components.HelpImageBlock src="https://uploads.quarkly.io/landing/docs-theme-panel-breakpoints-create.png" />
				<Components.HelpParagraph>
					Здесь вы можете переименовать проект, добавить favicons, описание, стили для всех страниц разом, добавить теги script, link, meta, style в head или body, а так же добавить зависимости проекта.{" "}
				</Components.HelpParagraph>
				<Components.HelpParagraph>
					В настройках проектов есть четыре раздела:
				</Components.HelpParagraph>
				<Components.HelpListMarked>
					<Components.HelpListItem>
						General
					</Components.HelpListItem>
					<Components.HelpListItem>
						SEO
					</Components.HelpListItem>
					<Components.HelpListItem>
						Styles
					</Components.HelpListItem>
					<Components.HelpListItem>
						Custom code
					</Components.HelpListItem>
					<Components.HelpListItem>
						Dependencies
					</Components.HelpListItem>
				</Components.HelpListMarked>
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