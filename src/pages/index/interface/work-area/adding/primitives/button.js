import React from "react";
import theme from "theme";
import { Theme, Link, Section, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index/interface/work-area/adding/primitives/button"} />
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
				<Override slot="Sub Head Text-primitives">
					Primitives
				</Override>
			</Components.SidebarMenu>
			<Section background="--color-white" padding="24px 0 64px 0">
				<Override slot="SectionContent" max-width="760px" />
				<Components.HelpHeader2>
					Button
				</Components.HelpHeader2>
				<Components.HelpGroup>
					<Components.HelpImageBlockCapture>
						<Override slot="helpImageBlock" src="https://test-upl.quarkly.io/607d3473b99fb9001fcbcc16/images/docs-new-workarea-components-primitives-button.png?v=2021-05-16T08:00:52.766Z" />
						<Override slot="text">
							Примитив Button на странице
						</Override>
					</Components.HelpImageBlockCapture>
					<Components.HelpGroup margin="0px 0px 24px 0px">
						<Components.HelpParagraphLead>
							Простая кнопка, которая предназначена для отправки формы
						</Components.HelpParagraphLead>
						<Components.HelpParagraph>
							В свойствах можно выбрать в виде какого тега будет кнопка на опубликованном сайте. Также в свойствах можно установить состояние "отключена".
						</Components.HelpParagraph>
					</Components.HelpGroup>
					<Components.HelpHeader4>
						Доступные свойства
					</Components.HelpHeader4>
					<Components.HelpTable cols="2" rows="2">
						<Override slot="Text 0-0">
							<Components.HelpParagraph>
								type
							</Components.HelpParagraph>
						</Override>
						<Override slot="Text 0-1">
							<Components.HelpParagraph>
								HTML-элемент, который будет использован в документе: input или button
							</Components.HelpParagraph>
						</Override>
						<Override slot="Text 1-0">
							<Components.HelpParagraph>
								disabled
							</Components.HelpParagraph>
						</Override>
						<Override slot="Text 1-1">
							<Components.HelpParagraph>
								Флаг, если кнопка отключена по умолчанию
							</Components.HelpParagraph>
						</Override>
						<Override slot="Column 0" width="120px" />
					</Components.HelpTable>
				</Components.HelpGroup>
				<Components.HelpGroup />
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