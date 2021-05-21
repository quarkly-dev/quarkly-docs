import React from "react";
import theme from "theme";
import { Theme, Link, Section, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index/interface/work-area/project-settings/custom-code/link"} />
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
					&lt;link&gt;
				</Components.HelpHeader2>
				<Components.HelpImageBlock src="https://uploads.quarkly.io/landing/docs-theme-panel-breakpoints-create.png" />
				<Components.HelpParagraph>
					Устанавливает связь с внешним файлом, например файл с CSS стилями, иконкой или шрифтом.
				</Components.HelpParagraph>
				<Components.HelpParagraph>
					Содержит атрибуты:
				</Components.HelpParagraph>
				<Components.HelpListMarked>
					<Components.HelpListItem>
						href — адрес внешнего файла
					</Components.HelpListItem>
					<Components.HelpListItem>
						rel — определяет отношения между проектом и файлом
					</Components.HelpListItem>
					<Components.HelpListItem>
						sizes — указывает размер иконки в случае импорта файла с иконкой
					</Components.HelpListItem>
					<Components.HelpListItem>
						type — MIME-тип данных подключаемого файла
					</Components.HelpListItem>
					<Components.HelpListItem>
						media — определяет устройство, для которого следует применять стилевое оформление
					</Components.HelpListItem>
					<Components.HelpListItem>
						as — определяет тип загружаемого контента
					</Components.HelpListItem>
					<Components.HelpListItem>
						crossorigin — указывает, должен ли CORS использоваться при получении файла.
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