import React from "react";
import theme from "theme";
import { Theme, Link, Section, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index/interface/topbar/publish/structure"} />
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
			<Section background="--color-white">
				<Override slot="SectionContent" max-width="760px" />
				<Components.HelpHeader2>
					Выбор структуры
				</Components.HelpHeader2>
				<Components.HelpGroup>
					<Components.HelpImageBlockCapture>
						<Override slot="helpImageBlock" src="https://test-upl.quarkly.io/607d3473b99fb9001fcbcc16/images/docs-new-topbar-publication-structure.png?v=2021-05-15T11:38:28.941Z" />
						<Override slot="text">
							Выбор структуры перед публикацией проекта
						</Override>
					</Components.HelpImageBlockCapture>
					<Components.HelpParagraph>
						Проекты на React содержат в себе зависимости, рабочие файлы и контент. Для организации сборки проектов нужна определенная структура.
					</Components.HelpParagraph>
					<Components.HelpParagraph>
						Структура экспорта это то, как в проекте организованы файлы, как будет происходить сборка и какие вспомогательные библиотеки будут участвовать в сборке проекта. В Quarkly мы предлагаем две самые популярные на сегодняшний день:
					</Components.HelpParagraph>
					<Components.HelpListMarked>
						<Components.HelpListItem>
							Gatsby Project — больше подходит для сайтов
						</Components.HelpListItem>
						<Components.HelpListItem>
							Create React App — больше подходит для приложений
						</Components.HelpListItem>
					</Components.HelpListMarked>
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