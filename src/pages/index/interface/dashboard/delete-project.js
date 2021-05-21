import React from "react";
import theme from "theme";
import { Theme, Link, Section, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index/interface/dashboard/delete-project"} />
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
					Полное удаление проекта
				</Components.HelpHeader2>
				<Components.HelpGroup>
					<Components.HelpImageBlockCapture>
						<Override slot="helpImageBlock" src="https://test-upl.quarkly.io/607d3473b99fb9001fcbcc16/images/docs-new-dashboard-delete-project-forever.png?v=2021-05-15T08:13:53.940Z" />
						<Override slot="text">
							Пункт "Delete forever" в контекстном меню удаляет проект полностью
						</Override>
					</Components.HelpImageBlockCapture>
					<Components.HelpParagraph>
						Как удалить проект полностью:
					</Components.HelpParagraph>
					<Components.HelpListNumbered>
						<Components.HelpListItem>
							Перейдите в раздел Archived
						</Components.HelpListItem>
						<Components.HelpListItem>
							Выберите проект, который хотите полностью удалить
						</Components.HelpListItem>
						<Components.HelpListItem>
							Вызовите контекстное меню проекта на правую кнопку мыши
						</Components.HelpListItem>
						<Components.HelpListItem>
							Выберите пункт "Delete Forever"
						</Components.HelpListItem>
						<Components.HelpListItem>
							В диалоговом окне подтверждения выберите "Delete Forever"
						</Components.HelpListItem>
					</Components.HelpListNumbered>
					<Components.HelpParagraph>
						После полного удаления проекта, он исчезает из Dashboard. Но если вам всё таки необходимо восстановить этот проект, отправьте запрос в службу поддержки.
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