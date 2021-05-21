import React from "react";
import theme from "theme";
import { Theme, Link, Section, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index/interface/topbar/publish/domain-name"} />
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
					Доменное имя сайта
				</Components.HelpHeader2>
				<Components.HelpGroup>
					<Components.HelpParagraph>
						На последнем этапе, вы можете поменять техническое доменное имя своего сайта или прикрепить своё купленное имя.
					</Components.HelpParagraph>
					<Components.HelpParagraph>
						Для того чтобы изменить имя домена предоставляемого сервисом Netlify, необходимо:
					</Components.HelpParagraph>
					<Components.HelpListNumbered>
						<Components.HelpListItem>
							Нажать кнопку "Edit"
						</Components.HelpListItem>
						<Components.HelpListItem>
							Ввести нужное имя домена
						</Components.HelpListItem>
						<Components.HelpListItem>
							Нажать кнопку "Save"
						</Components.HelpListItem>
					</Components.HelpListNumbered>
					<Components.HelpImageBlockCapture>
						<Override slot="helpImageBlock" src="https://test-upl.quarkly.io/607d3473b99fb9001fcbcc16/images/docs-new-topbar-publication-technical-domain.png?v=2021-05-15T12:21:09.444Z" />
						<Override slot="text">
							Публикация проекта на техническом доменном имени
						</Override>
					</Components.HelpImageBlockCapture>
					<Components.HelpParagraph>
						Чтобы прикрепить своё доменное имя к сайту, необходимо:
					</Components.HelpParagraph>
					<Components.HelpListNumbered>
						<Components.HelpListItem>
							Выберите вкладку Custom
						</Components.HelpListItem>
						<Components.HelpListItem>
							Введите в поле ввода ваше доменное имя
						</Components.HelpListItem>
						<Components.HelpListItem>
							Нажать кнопку "Save"
						</Components.HelpListItem>
						<Components.HelpListItem>
							У регистратора, где вы покупали свое доменное имя, в настройках Name Servers (NS) необходимо указать адреса серверов указанные в инструкции.
						</Components.HelpListItem>
					</Components.HelpListNumbered>
					<Components.HelpImageBlockCapture>
						<Override slot="helpImageBlock" src="https://test-upl.quarkly.io/607d3473b99fb9001fcbcc16/images/docs-new-topbar-publication-custom-domain.png?v=2021-05-15T12:21:09.443Z" />
						<Override slot="text">
							Публикация проекта на своём персональном доменном имени
						</Override>
					</Components.HelpImageBlockCapture>
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