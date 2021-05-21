import React from "react";
import theme from "theme";
import { Theme, Link, Text, Section, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index/interface/topbar"} />
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
					Top Bar
				</Components.HelpHeader2>
				<Components.HelpGroup>
					<Components.HelpImageBlockCapture>
						<Override slot="helpImageBlock" src="https://test-upl.quarkly.io/607d3473b99fb9001fcbcc16/images/docs-new-topbar.png?v=2021-05-15T08:41:25.809Z" />
						<Override slot="text">
							Top bar в верхней части экрана
						</Override>
					</Components.HelpImageBlockCapture>
					<Components.HelpParagraph>
						Вам понадобиться Top bar, если вам нужно открыть панель со слоями и страницами, редактор кода, опубликовать, открыть предпросмотр страницы, отменить или вернуть изменения и некоторые другие действия. Top bar — это верхняя панель конструктора, в которой содержится:
					</Components.HelpParagraph>
					<Components.HelpListMarked>
						<Components.HelpListItem>
							<Text font="600 18px/27px &quot;Source Sans Pro&quot;, sans-serif" margin="0 0 0 0">
								Dashboard
							</Text>
							Здесь вы создаете удаляете и переходите в проекты
						</Components.HelpListItem>
						<Components.HelpListItem>
							<Text font="600 18px/27px &quot;Source Sans Pro&quot;, sans-serif" margin="0 0 0 0">
								Pages and Layers Panel
							</Text>
							Здесь вы управляете страницами и слоями (элементами) страницы
						</Components.HelpListItem>
						<Components.HelpListItem>
							<Text font="600 18px/27px &quot;Source Sans Pro&quot;, sans-serif" margin="0 0 0 0">
								Code Editor
							</Text>
							Здесь можно смотреть и редактировать код страницы и код компонентов
						</Components.HelpListItem>
						<Components.HelpListItem>
							<Text font="600 18px/27px &quot;Source Sans Pro&quot;, sans-serif" margin="0 0 0 0">
								Название проекта
							</Text>
							Двойной клик — редактирование названия
						</Components.HelpListItem>
						<Components.HelpListGroup>
							<Components.HelpListItem>
								<Text font="600 18px/27px &quot;Source Sans Pro&quot;, sans-serif" margin="0 0 0 0">
									Действия над проектом
								</Text>
								Вы можете переименовать проект, открыть его свойства, поделиться проектом с другими или удалить его. Для этого нажмите на иконку &#123;иллюстрация&#125; и покажется список команд:
							</Components.HelpListItem>
							<Components.HelpListMarked>
								<Components.HelpListItem>
									Share project
								</Components.HelpListItem>
								<Components.HelpListItem>
									Rename
								</Components.HelpListItem>
								<Components.HelpListItem>
									Delete
								</Components.HelpListItem>
								<Components.HelpListItem>
									Settings
								</Components.HelpListItem>
							</Components.HelpListMarked>
							<Components.HelpLink>
								&#123;ссылка на подробный раздел&#125;
							</Components.HelpLink>
						</Components.HelpListGroup>
						<Components.HelpListItem>
							<Text font="600 18px/27px &quot;Source Sans Pro&quot;, sans-serif" margin="0 0 0 0">
								Undo
							</Text>
							Отмена любого действия в проекте
						</Components.HelpListItem>
						<Components.HelpListItem>
							<Text font="600 18px/27px &quot;Source Sans Pro&quot;, sans-serif" margin="0 0 0 0">
								Redo
							</Text>
							Возврат отмененного действия в проекте
						</Components.HelpListItem>
						<Components.HelpListItem>
							<Text font="600 18px/27px &quot;Source Sans Pro&quot;, sans-serif" margin="0 0 0 0">
								Preview
							</Text>
							Переход в режим предпросмотра страницы. Это удобно, когда нужно посмотреть как работают разные эффекты, например при наведении курсора мыши.
						</Components.HelpListItem>
						<Components.HelpListGroup>
							<Components.HelpListItem>
								<Text font="600 18px/27px &quot;Source Sans Pro&quot;, sans-serif" margin="0 0 0 0">
									Publish
								</Text>
								Чтобы проект был доступен по URL адресу его нужно опубликовать. Кнопка "Publish" открывает модальное окно публикации проекта.
							</Components.HelpListItem>
							<Components.HelpLink>
								&#123;ссылка на раздел&#125;
							</Components.HelpLink>
						</Components.HelpListGroup>
						<Components.HelpListGroup>
							<Components.HelpListItem>
								<Text font="600 18px/27px &quot;Source Sans Pro&quot;, sans-serif" margin="0 0 0 0">
									Account Settings
								</Text>
								Здесь информация об аккаунте и кнопка выхода
							</Components.HelpListItem>
							<Components.HelpLink>
								&#123;ссылка на раздел&#125;
							</Components.HelpLink>
						</Components.HelpListGroup>
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