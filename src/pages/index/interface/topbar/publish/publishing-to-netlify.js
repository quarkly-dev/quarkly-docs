import React from "react";
import theme from "theme";
import { Theme, Link, Section, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index/interface/topbar/publish/publishing-to-netlify"} />
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
					Публикация проекта на Netlify
				</Components.HelpHeader2>
				<Components.HelpGroup>
					<Components.HelpImageBlockCapture>
						<Override slot="helpImageBlock" src="https://test-upl.quarkly.io/607d3473b99fb9001fcbcc16/images/docs-new-topbar-publication-netlify.png?v=2021-05-15T12:02:18.544Z" />
						<Override slot="text">
							Выбор источника хранения перед публикацией проекта
						</Override>
					</Components.HelpImageBlockCapture>
					<Components.HelpParagraph>
						После того как вы сохранили проект в GitHub репозиторий, появляется возможность опубликовать его с помощью сервиса{" "}
						<Components.HelpLink href="https://netlify.app/" target="_blank">
							Netlify
						</Components.HelpLink>
						.
					</Components.HelpParagraph>
					<Components.HelpParagraph>
						Как выбрать сайт и запустить публикацию:
					</Components.HelpParagraph>
					<Components.HelpListNumbered>
						<Components.HelpListItem>
							Нажмите кнопку "Log In with Netlify" чтобы предоставить доступ Quarkly к вашим сайтам на Netlify. Войдите или зарегистрируйтесь в Netlify если это необходимо.
						</Components.HelpListItem>
						<Components.HelpListItem>
							Выберите уже существующий сайт на вашем аккаунте Netlify или создайте новый.
						</Components.HelpListItem>
						<Components.HelpListItem>
							Нажать "Build" для сборки и публикации проекта.
						</Components.HelpListItem>
					</Components.HelpListNumbered>
					<Components.HelpParagraph>
						Проект соберется не сразу, занимает обычно несколько минут. Для контроля процесса рядом показывается бэйджик{" "}
						<Components.HelpImageInline src="https://test-upl.quarkly.io/607d3473b99fb9001fcbcc16/images/docs-new-topbar-publication-badge.svg?v=2021-05-15T11:14:44.866Z" width="122px" />
						{" "}который показывает состояние.
					</Components.HelpParagraph>
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