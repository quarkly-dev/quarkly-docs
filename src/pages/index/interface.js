import React from "react";
import theme from "theme";
import { Theme, Link, Section, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index/interface"} />
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
					Interface
				</Components.HelpHeader2>
				<Components.HelpHeader4>
					<Link href="dashboard" color="--link" hover-color="--linkHover">
						Dashboard
					</Link>
				</Components.HelpHeader4>
				<Components.HelpParagraph>
					Отдельная страница, где вы создаете и управляете проектами.
				</Components.HelpParagraph>
				<Components.HelpHeader3>
					Визуальный редактор
				</Components.HelpHeader3>
				<Components.HelpParagraph>
					Открывая проект, вы попадаете в визуальный редактор. Это основной интерфейс Quarkly. Здесь вы наполняете контентом стилизуете и настраиваете страницы вашего проекта.
				</Components.HelpParagraph>
				<Components.HelpHeader4>
					<Link href="topbar" color="--link" hover-color="--linkHover">
						Top Bar
					</Link>
				</Components.HelpHeader4>
				<Components.HelpParagraph>
					Эта панель располагается сверху. Здесь находятся кнопки открытия панелей, название и действия над проектом, кнопки отмены и возврата, превью, публикации и настройки аккаунта.
				</Components.HelpParagraph>
				<Components.HelpHeader4>
					<Link href="topbar/publish" color="--link" hover-color="--linkHover">
						Publication
					</Link>
				</Components.HelpHeader4>
				<Components.HelpParagraph>
					Нажимая на кнопку "Publish" вы открываете модальное окно публикации проекта. Сам процесс публикации состоит из нескольких этапов: выбор структуры, выбор GitHub репозитория, сборка сайта на Netlify. В результате вы получаете ссылку на опубликованный проект.
				</Components.HelpParagraph>
				<Components.HelpHeader4>
					<Link
						href="work-area/view-bar"
						color="--link"
						hover-color="--linkHover"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
					>
						View Bar
					</Link>
				</Components.HelpHeader4>
				<Components.HelpParagraph>
					Эта панель располагается под Top Bar. Она отвечает за работу со страницей. Здесь находятся индикаторы брейкпоинтов, переключатели масштаба, размеров страницы и брейкпоинтов.
				</Components.HelpParagraph>
				<Components.HelpHeader4>
					<Link href="work-area/adding" color="--link" hover-color="--linkHover">
						Elements
					</Link>
				</Components.HelpHeader4>
				<Components.HelpParagraph>
					Страница состоит из элементов. Вы можете добавлять, редактировать, удалять, дублировать элементы. В качестве элементов страницы могут быть примитивы, компоненты каталога, или ваши собственные компоненты.
				</Components.HelpParagraph>
				<Components.HelpHeader4>
					<Link href="work-area/theme" color="--link" hover-color="--linkHover">
						Theme
					</Link>
				</Components.HelpHeader4>
				<Components.HelpParagraph>
					Панель содержит в себе группы с переменными и их значениями. Вы можете использовать существующие и добавлять свои переменные, чтобы потом использовать их в проекте. При необходимости значения можно менять, они также изменяться везде где были использованы.
				</Components.HelpParagraph>
				<Components.HelpHeader4>
					<Link href="work-area/project-settings" color="--link" hover-color="--linkHover">
						Project Settings
					</Link>
				</Components.HelpHeader4>
				<Components.HelpParagraph>
					Панель позволяет задавать общие для всех страницы фавиконки, информацию для SEO, стили, пользовательские теги внутрь &lt;head&gt; и &lt;body&gt;. Ещё здесь можно задавать имя проекта и добавлять внешние зависимости (библиотеки).
				</Components.HelpParagraph>
				<Components.HelpHeader4>
					<Link href="work-area/props-panel" color="--link" hover-color="--linkHover">
						Props Panel
					</Link>
				</Components.HelpHeader4>
				<Components.HelpParagraph>
					Панель дает возможность менять стилевые и функциональные свойства элементов. Стилевые свойства сгруппированы по назначению: макет, типографика, отступы, фон, границы, позиционирование, эффекты. Функциональные свойства уникальны для каждого элемента.
				</Components.HelpParagraph>
				<Components.HelpHeader4>
					<Link href="work-area/context-menu" color="--link" hover-color="--linkHover">
						Context Menu
					</Link>
				</Components.HelpHeader4>
				<Components.HelpParagraph>
					Контекстное меню содержит список действий над элементом, страницей, компонентом и другой сущностью. Чтобы вызвать контекстное меню, наведите курсор и нажмите правой кнопкой мыши.
				</Components.HelpParagraph>
				<Components.HelpHeader4>
					<Link href="work-area/code-editor" color="--link" hover-color="--linkHover">
						Code Editor
					</Link>
				</Components.HelpHeader4>
				<Components.HelpParagraph>
					The second most important work area in Quarkly is the code editor. It displays all the components and their props that you can see on the screen. You can also work with the components, their props, and values much faster than on the page. You need to be able to follow JSX syntax, know the set of available components, CSS props and values.
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