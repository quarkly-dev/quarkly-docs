import React from "react";
import theme from "theme";
import { Theme, Link, Strong, Section, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index/welcome-to-quarkly"} />
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
				<Override slot="Wrapper" />
				<Override slot="Content" />
				<Override slot="Button" />
				<Override slot="Button Icon" />
			</Components.SidebarMenu>
			<Section background="--color-white" padding="24px 0 64px 0">
				<Override slot="SectionContent" max-width="760px" />
				<Components.HelpHeader2>
					Welcome to Quarkly
				</Components.HelpHeader2>
				<Components.HelpHeader3>
					Что такое Quarkly
				</Components.HelpHeader3>
				<Components.HelpParagraph>
					Quarkly — это инструмент для создания сайтов, лендингов и веб-приложений. Он совмещает в себе визуальный редактор, интегрированную среду разработки и конструктор сайтов. Специалистам web-разработки в нём доступна совместная работа над одним проектом:
				</Components.HelpParagraph>
				<Components.HelpListMarked>
					<Components.HelpListItem>
						<Strong font="600 18px/27px &quot;Source Sans Pro&quot;, sans-serif">
							Дизайнерам
						</Strong>
						{" "}— визуальный редактор для создания макетов, прототипов и компонентов
					</Components.HelpListItem>
					<Components.HelpListItem>
						<Strong
							font="600 18px/27px &quot;Source Sans Pro&quot;, sans-serif"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Разработчикам
						</Strong>
						{" "}— готовый код, возможность добавлять бизнес-логику или писать свои собственные компоненты с нуля
					</Components.HelpListItem>
					<Components.HelpListItem>
						<Strong
							font="600 18px/27px &quot;Source Sans Pro&quot;, sans-serif"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Контент-мейкерам
						</Strong>
						{" "}— возможность удобного редактирования и публикации
					</Components.HelpListItem>
				</Components.HelpListMarked>
				<Components.HelpParagraph>
					Любой макет созданный в Quarkly — это уже готовый проект, доступный для экспорта и публикации. Ваши макеты и прототипы — это уже готовый код, который не нужно писать с нуля разработчику. А также ваш код — это готовые макеты и прототипы, которые не нужно переносить в ручную в визуальный редактор.
				</Components.HelpParagraph>
				<Components.HelpHeader3>
					Как выглядит рабочий процесс
				</Components.HelpHeader3>
				<Components.HelpParagraph>
					Процесс создания проекта в Quarkly делится на несколько этапов:
				</Components.HelpParagraph>
				<Components.HelpListNumbered>
					<Components.HelpListItem>
						<Strong
							font="600 18px/27px &quot;Source Sans Pro&quot;, sans-serif"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						/>
						Вы{" "}
						<Strong
							font="600 18px/27px &quot;Source Sans Pro&quot;, sans-serif"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							создаете новый проект
						</Strong>
						{" "}и делитесь им с вашей командой;
					</Components.HelpListItem>
					<Components.HelpListItem>
						В визуальном редакторе{" "}
						<Strong
							font="600 18px/27px &quot;Source Sans Pro&quot;, sans-serif"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							наполняете страницы
						</Strong>
						{" "}используя базовые примитивы и при необходимости создаете из них компоненты для повторного использования;
					</Components.HelpListItem>
					<Components.HelpListItem>
						При необходимости, разработчик{" "}
						<Strong
							font="600 18px/27px &quot;Source Sans Pro&quot;, sans-serif"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							добавляет бизнес-логику
						</Strong>
						{" "}проекта;
					</Components.HelpListItem>
					<Components.HelpListItem>
						Вы{" "}
						<Strong
							font="600 18px/27px &quot;Source Sans Pro&quot;, sans-serif"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							публикуете готовый проект
						</Strong>
						{" "}на своем или доступном в Quarkly хостинге.
					</Components.HelpListItem>
				</Components.HelpListNumbered>
				<Components.HelpHeader3>
					Как работает Quarkly
				</Components.HelpHeader3>
				<Components.HelpParagraph>
					Основой всех проектов на Quarkly является{" "}
					<Strong font="600 18px/27px &quot;Source Sans Pro&quot;, sans-serif">
						React-компоненты
					</Strong>
					{" "}и библиотека{" "}
					<Strong font="600 18px/27px &quot;Source Sans Pro&quot;, sans-serif">
						@quarkly/atomize
					</Strong>
					. Каждый отдельно взятый примитив на холсте редактора — это уже готовый к работе и повторному использованию код.
				</Components.HelpParagraph>
				<Components.HelpParagraph>
					Когда вы создаете новый макет, прототип или компонент,{" "}
					<Strong font="600 18px/27px &quot;Source Sans Pro&quot;, sans-serif">
						Quarkly генерирует для вас реальный код
					</Strong>
					, который в дальнейшем может быть использован разработчиком и доработан, либо экспортирован и опубликован без изменений.
				</Components.HelpParagraph>
				<Components.HelpParagraph>
					Вам не стоит беспокоится, если вы не владеете навыками программирования и верстки, потому что любой компонент доступен к работе через{" "}
					<Strong font="600 18px/27px &quot;Source Sans Pro&quot;, sans-serif">
						визуальный редактор
					</Strong>
					{" "}и многочисленные{" "}
					<Strong font="600 18px/27px &quot;Source Sans Pro&quot;, sans-serif">
						панели свойств
					</Strong>
					. Работа в Quarkly для дизайнера, ничем не сложнее работы в любом другом графическом редакторе.{" "}
				</Components.HelpParagraph>
				<Components.HelpPrevNextButton />
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