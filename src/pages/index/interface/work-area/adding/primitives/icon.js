import React from "react";
import theme from "theme";
import { Theme, Link, Section, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index/interface/work-area/adding/primitives/icon"} />
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
					Icon
				</Components.HelpHeader2>
				<Components.HelpGroup>
					<Components.HelpImageBlockCapture>
						<Override slot="helpImageBlock" src="https://test-upl.quarkly.io/607d3473b99fb9001fcbcc16/images/docs-new-workarea-components-primitives-icon.png?v=2021-05-16T08:06:42.344Z" />
						<Override slot="text">
							Примитив Icon на странице
						</Override>
					</Components.HelpImageBlockCapture>
					<Components.HelpGroup margin="0px 0px 24px 0px">
						<Components.HelpParagraphLead>
							Иконка из доступного в конструкторе набора.
						</Components.HelpParagraphLead>
						<Components.HelpParagraph>
							В свойствах можно указать размер иконки цвет и выбрать саму иконку из предоставленных наборов.
						</Components.HelpParagraph>
					</Components.HelpGroup>
					<Components.HelpHeader4>
						Доступные свойства
					</Components.HelpHeader4>
					<Components.HelpTable cols="2" rows="4">
						<Override slot="Text 0-0">
							<Components.HelpParagraph>
								size
							</Components.HelpParagraph>
						</Override>
						<Override slot="Text 0-1">
							<Components.HelpParagraph>
								Размер иконки, соответствует размеру шрифта
							</Components.HelpParagraph>
						</Override>
						<Override slot="Text 1-0">
							<Components.HelpParagraph>
								category
							</Components.HelpParagraph>
						</Override>
						<Override slot="Text 2-0">
							<Components.HelpParagraph>
								icon
							</Components.HelpParagraph>
						</Override>
						<Override slot="Text 3-0">
							<Components.HelpParagraph>
								color
							</Components.HelpParagraph>
						</Override>
						<Override slot="Text 1-1">
							<Components.HelpParagraph>
								Имя набора:
							</Components.HelpParagraph>
							<Components.HelpListMarked>
								<Components.HelpListItem>
									fa – Font Awesome
								</Components.HelpListItem>
								<Components.HelpListItem>
									bs – Bootstrap Icons
								</Components.HelpListItem>
								<Components.HelpListItem>
									io – Ionicons
								</Components.HelpListItem>
								<Components.HelpListItem>
									md – Material Design
								</Components.HelpListItem>
								<Components.HelpListItem>
									ti – Typicons
								</Components.HelpListItem>
								<Components.HelpListItem>
									go – GutHub Octicons
								</Components.HelpListItem>
								<Components.HelpListItem>
									fi – Feather
								</Components.HelpListItem>
								<Components.HelpListItem>
									gi – Game Icons
								</Components.HelpListItem>
								<Components.HelpListItem>
									wi – Weather Icons
								</Components.HelpListItem>
								<Components.HelpListItem>
									di – Devicons{" "}
								</Components.HelpListItem>
								<Components.HelpListItem>
									ai – Ant Design
								</Components.HelpListItem>
							</Components.HelpListMarked>
						</Override>
						<Override slot="Text 2-1">
							<Components.HelpParagraph>
								Имя иконки в конкретном наборе, вы можете посмотреть полный список названий на оф. сайте нужного набора или узнать имя нужной иконки выбрав её в конструкторе
							</Components.HelpParagraph>
						</Override>
						<Override slot="Text 3-1">
							<Components.HelpParagraph>
								Цвет иконки, соответствует стилевому свойству color
							</Components.HelpParagraph>
						</Override>
						<Override slot="Column 0" width="120px" />
					</Components.HelpTable>
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