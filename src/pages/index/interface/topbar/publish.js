import React from "react";
import theme from "theme";
import { Theme, Link, Section, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index/interface/topbar/publish"} />
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
					Publication
				</Components.HelpHeader2>
				<Components.HelpGroup>
					<Components.HelpImageBlockCapture>
						<Override slot="helpImageBlock" src="https://test-upl.quarkly.io/607d3473b99fb9001fcbcc16/images/docs-new-topbar-publication.png?v=2021-05-15T11:06:39.567Z" />
						<Override slot="text">
							Окно процесса публикации проекта
						</Override>
					</Components.HelpImageBlockCapture>
					<Components.HelpParagraph>
						Чтобы проект был доступен по URL адресу его нужно собрать и опубликовать. Кнопка "Publish" открывает модальное окно процесса публикации проекта. Сборка и публикация происходит с помощью сервиса Netlify, а собирается ваш GitHub репозиторий с проектом.
					</Components.HelpParagraph>
					<Components.HelpParagraph>
						Итак, чтобы опубликовать проект нужно:
					</Components.HelpParagraph>
					<Components.HelpListNumbered>
						<Components.HelpListItem>
							Нажмите кнопку "Log In with Netlify" чтобы предоставить доступ Quarkly к вашим сайтам на Netlify. Войдите или зарегистрируйтесь в Netlify если это необходимо.
						</Components.HelpListItem>
						<Components.HelpListItem>
							Выбрать структуру
						</Components.HelpListItem>
						<Components.HelpListItem>
							Войти или зарегистрироваться в GitHub
						</Components.HelpListItem>
						<Components.HelpListItem>
							Прикрепить проект к существующему или к новому репозиторию
						</Components.HelpListItem>
						<Components.HelpListItem>
							Отправить код в репозиторий
						</Components.HelpListItem>
						<Components.HelpListItem>
							Войти или зарегистрироваться в Netlify
						</Components.HelpListItem>
						<Components.HelpListItem>
							Прикрепить проект к существующему или к новому сайту
						</Components.HelpListItem>
						<Components.HelpListGroup>
							<Components.HelpListItem>
								Нажать кнопку "Deploy". Процесс сборки и публикации занимает некоторое количество времени, обычно несколько минут. Статус состояния можно смотреть на бейджике{" "}
								<Components.HelpImageInline src="https://test-upl.quarkly.io/607d3473b99fb9001fcbcc16/images/docs-new-topbar-publication-badge.svg?v=2021-05-15T11:14:44.866Z" width="122px" />
								.
							</Components.HelpListItem>
						</Components.HelpListGroup>
					</Components.HelpListNumbered>
				</Components.HelpGroup>
				<Components.HelpGroup>
					<Components.HelpHeader3>
						Видеоурок "Как опубликовать проект"
					</Components.HelpHeader3>
					<Components.HelpVideo videoId="qePS-JDO-oQ" />
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