import React from "react";
import theme from "theme";
import { Theme, Link, Section, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index/interface/work-area/project-settings/custom-code/meta"} />
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
				<Override slot="Sub Head Text-overview1221111112111">
					Custom code
				</Override>
			</Components.SidebarMenu>
			<Section background="--color-white" padding="24px 0 64px 0">
				<Override slot="SectionContent" max-width="760px" />
				<Components.HelpHeader2>
					&lt;meta&gt;
				</Components.HelpHeader2>
				<Components.HelpImageBlock src="https://uploads.quarkly.io/landing/docs-theme-panel-breakpoints-create.png" />
				<Components.HelpParagraph>
					Добавляет метатеги в проект. Метатеги используются для хранения информации предназначенной для браузеров и поисковых систем.
				</Components.HelpParagraph>
				<Components.HelpParagraph>
					{" "}Содержит атрибуты:
				</Components.HelpParagraph>
				<Components.HelpListMarked>
					<Components.HelpListItem>
						charset — задает кодировку документа
					</Components.HelpListItem>
					<Components.HelpListItem>
						name — имя метатега, также косвенно устанавливает его предназначение
					</Components.HelpListItem>
					<Components.HelpListItem>
						content — содержит значение для атрибута http-equiv или name, в зависимости от того какой используется
					</Components.HelpListItem>
					<Components.HelpListItem>
						http-equiv — предназначен для конвертирования метатега в заголовок HTTP
					</Components.HelpListItem>
					<Components.HelpListItem>
						itemprop — предназначен для добавления пользовательских метаданных
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