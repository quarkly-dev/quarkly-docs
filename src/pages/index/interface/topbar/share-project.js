import React from "react";
import theme from "theme";
import { Theme, Link, Section, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index/interface/topbar/share-project"} />
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
					Share project
				</Components.HelpHeader2>
				<Components.HelpGroup>
					<Components.HelpImageBlockCapture>
						<Override slot="helpImageBlock" src="https://test-upl.quarkly.io/607d3473b99fb9001fcbcc16/images/docs-new-topbar-share.png?v=2021-05-15T08:49:57.618Z" />
						<Override slot="text">
							Top bar в верхней части экрана
						</Override>
					</Components.HelpImageBlockCapture>
					<Components.HelpParagraph>
						Для того, чтобы поделиться проектом с другими пользователями ,необходимо нажать кнопку "Share"
У вас откроется окно ,где будут отображены все пользователи имеющие доступ в данный проект.  Нажимаем кнопку "Copy invite link", ссылка на проект будет скопирована в буфер обмена.
					</Components.HelpParagraph>
					<Components.HelpImageBlockCapture>
						<Override slot="helpImageBlock" src="https://test-upl.quarkly.io/607d3473b99fb9001fcbcc16/images/docs-new-topbar-share-list.png?v=2021-05-15T09:02:59.392Z" />
						<Override slot="text">
							Окно Share project со списком пользователей у кого есть доступ
						</Override>
					</Components.HelpImageBlockCapture>
					<Components.HelpParagraph>
						You can share your project to work on it together with your team. The access to the project is given by link only. Everyone has edit permissions.
					</Components.HelpParagraph>
					<Components.HelpParagraph>
						To share the project with other users, click on the “Share project” button. A window with a list of users the project is available to will appear. At the end of the list, you will find the “Copy invite link” button. Click on it to copy the link. Send the link to another user so that this user can work on too.
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