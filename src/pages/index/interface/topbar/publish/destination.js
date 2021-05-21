import React from "react";
import theme from "theme";
import { Theme, Link, Section, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index/interface/topbar/publish/destination"} />
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
					Выбор источника хранения
				</Components.HelpHeader2>
				<Components.HelpGroup>
					<Components.HelpParagraph>
						После того как вы выбрали структуру проекта, необходимо выбрать источник хранения. Мы предлагаем два варианта:
					</Components.HelpParagraph>
					<Components.HelpListNumbered>
						<Components.HelpListItem>
							GitHub репозиторий
						</Components.HelpListItem>
						<Components.HelpListItem>
							Zip-архив
						</Components.HelpListItem>
					</Components.HelpListNumbered>
					<Components.HelpImageBlockCapture>
						<Override slot="helpImageBlock" src="https://test-upl.quarkly.io/607d3473b99fb9001fcbcc16/images/docs-new-topbar-publication-destination.png?v=2021-05-15T11:42:16.961Z" />
						<Override slot="text">
							Выбор источника хранения перед публикацией проекта
						</Override>
					</Components.HelpImageBlockCapture>
				</Components.HelpGroup>
				<Components.HelpGroup>
					<Components.HelpHeader4>
						Zip-архив
					</Components.HelpHeader4>
					<Components.HelpParagraph>
						В случае Zip-архива, вы скачиваете и собираете проект сами у себя на компьютере. Сборку и публикацию в интернет вы также делаете самостоятельно. Инструкции о том, как собрать и развернуть проект находятся в файле Readme.md в корневой папке архива.
					</Components.HelpParagraph>
				</Components.HelpGroup>
				<Components.HelpGroup>
					<Components.HelpHeader4>
						GitHub репозиторий
					</Components.HelpHeader4>
					<Components.HelpParagraph>
						Если вы хотите опубликовать ваш проект с помощью Quarkly, то хранение проекта в вашем GitHub репозитории — необходимость.{" "}
					</Components.HelpParagraph>
					<Components.HelpParagraph>
						Как отправить код проекта в GitHub репозиторий:
					</Components.HelpParagraph>
					<Components.HelpListNumbered>
						<Components.HelpListItem>
							Нажмите на кнопку "Log In with GitHub" чтобы предоставить доступ Quarkly к вашим  GitHub репозиториям. Войдите или зарегистрируйтесь в GitHub если это необходимо.
						</Components.HelpListItem>
						<Components.HelpListItem>
							Выберите существующий или введите имя нового репозитория для вашего проекта.
						</Components.HelpListItem>
						<Components.HelpListItem>
							Если вы создали новый репозиторий, то проект сохраниться в него автоматически. Если вы выбрали существующий репозиторий, то нужно нажать кнопку "Commit changes" чтобы сохранить проект в репозиторий.{" "}
						</Components.HelpListItem>
					</Components.HelpListNumbered>
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