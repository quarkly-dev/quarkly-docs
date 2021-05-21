import React from "react";
import theme from "theme";
import { Theme, Link, Section, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index/interface/work-area/project-settings/custom-code/script"} />
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
					&lt;script&gt;
				</Components.HelpHeader2>
				<Components.HelpImageBlock src="https://uploads.quarkly.io/landing/docs-theme-panel-breakpoints-create.png" />
				<Components.HelpParagraph>
					Добавляет пользовательский javascript код в проект.
				</Components.HelpParagraph>
				<Components.HelpParagraph>
					{" "}Содержит атрибуты:
				</Components.HelpParagraph>
				<Components.HelpListMarked>
					<Components.HelpListItem>
						content — javascript код
					</Components.HelpListItem>
					<Components.HelpListItem>
						async — асинхронная загрузка скрипта
					</Components.HelpListItem>
					<Components.HelpListItem>
						defer — отложить выполнение скрипта до тех пор, пока вся страница не будет загружена полностью
					</Components.HelpListItem>
					<Components.HelpListItem>
						src — адрес файла с javascript кодом, который будет импортироваться в проект
					</Components.HelpListItem>
					<Components.HelpListItem>
						type — определяет тип содержимого тега script
					</Components.HelpListItem>
					<Components.HelpListItem>
						crossorigin — указывает, должен ли CORS использоваться при получении файла
					</Components.HelpListItem>
					<Components.HelpListItem>
						integrity — содержит встроенные метаданные, которые нужны для проверки того, что файл был доставлен без неожиданных манипуляций
					</Components.HelpListItem>
					<Components.HelpListItem>
						nomodule — использовано для обслуживания резервных скриптов старых браузеров, которые не поддерживают модульный код JavaScript
					</Components.HelpListItem>
					<Components.HelpListItem>
						referrerpolicy — указывает, какой референт отправить при получении скрипта
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