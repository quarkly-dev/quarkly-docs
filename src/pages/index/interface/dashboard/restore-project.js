import React from "react";
import theme from "theme";
import { Theme, Link, Section, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index/interface/dashboard/restore-project"} />
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
					Восстановление удаленного проекта
				</Components.HelpHeader2>
				<Components.HelpGroup>
					<Components.HelpImageBlockCapture>
						<Override slot="helpImageBlock" src="https://test-upl.quarkly.io/607d3473b99fb9001fcbcc16/images/docs-new-dashboard-restore-project.png?v=2021-05-15T08:15:05.691Z" />
						<Override slot="text">
							Пункт "Restore" в контекстном меню восстанавливает проект
						</Override>
					</Components.HelpImageBlockCapture>
					<Components.HelpParagraph>
						После первого удаления проекта он перемещается в Archived. Редактировать проект в этом разделе нельзя. Чтобы появилась возможность редактировать проект, нужно его восстановить. Как восстановить проект:
					</Components.HelpParagraph>
					<Components.HelpListNumbered>
						<Components.HelpListItem>
							Перейдите в раздел Archived
						</Components.HelpListItem>
						<Components.HelpListItem>
							Выберите проект, который хотите восстановить
						</Components.HelpListItem>
						<Components.HelpListItem>
							Вызовите контекстное меню проекта на правую кнопку мыши
						</Components.HelpListItem>
						<Components.HelpListItem>
							Выберите пункт "Restore"
						</Components.HelpListItem>
					</Components.HelpListNumbered>
				</Components.HelpGroup>
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