import React from "react";
import theme from "theme";
import { Theme, Link, Section, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index/interface/work-area/adding/primitives/link-primitive"} />
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
					Link
				</Components.HelpHeader2>
				<Components.HelpGroup>
					<Components.HelpImageBlockCapture>
						<Override slot="helpImageBlock" src="https://test-upl.quarkly.io/607d3473b99fb9001fcbcc16/images/docs-new-workarea-components-primitives-link.png?v=2021-05-16T08:11:09.789Z" />
						<Override slot="text">
							Примитив Link на странице
						</Override>
					</Components.HelpImageBlockCapture>
					<Components.HelpGroup margin="0px 0px 24px 0px">
						<Components.HelpParagraphLead>
							Примитив Link служит для:
						</Components.HelpParagraphLead>
						<Components.HelpListMarked>
							<Components.HelpListItem>
								создания ссылки на другие страницы,
							</Components.HelpListItem>
							<Components.HelpListItem>
								создания ссылки на части внутри текущей или другой страницы (якорь),{" "}
							</Components.HelpListItem>
							<Components.HelpListItem>
								создания ссылки на открытие файлов,
							</Components.HelpListItem>
							<Components.HelpListItem>
								cоздания ссылки для написания письма,
							</Components.HelpListItem>
							<Components.HelpListItem>
								cоздания ссылки с номером телефона.
							</Components.HelpListItem>
						</Components.HelpListMarked>
						<Components.HelpParagraph>
							В свойствах Link можно задавать адрес перехода, поведение вкладки при переходе по ссылке, поведение при переносе строк и при переполнении.{" "}
						</Components.HelpParagraph>
					</Components.HelpGroup>
					<Components.HelpHeader4>
						Доступные свойства
					</Components.HelpHeader4>
					<Components.HelpTable cols="2" rows="8">
						<Override slot="Text 0-0">
							<Components.HelpParagraph>
								overflow-wrap
							</Components.HelpParagraph>
						</Override>
						<Override slot="Text 0-1">
							<Components.HelpParagraph>
								Sets whether the browser should insert line breaks within an otherwise unbreakable string to prevent text from overflowing its line box
							</Components.HelpParagraph>
						</Override>
						<Override slot="Column 0" width="120px" />
						<Override slot="Text 6-0">
							<Components.HelpParagraph>
								href
							</Components.HelpParagraph>
						</Override>
						<Override slot="Text 6-1">
							<Components.HelpParagraph>
								Задает адрес, на который следует переходить при клике
							</Components.HelpParagraph>
						</Override>
						<Override slot="Text 1-0">
							<Components.HelpParagraph>
								word-break
							</Components.HelpParagraph>
						</Override>
						<Override slot="Text 1-1">
							<Components.HelpParagraph>
								Sets whether line breaks appear wherever the text would otherwise overflow its content box
							</Components.HelpParagraph>
						</Override>
						<Override slot="Text 2-0">
							<Components.HelpParagraph>
								white-space
							</Components.HelpParagraph>
						</Override>
						<Override slot="Text 2-1">
							<Components.HelpParagraph>
								Sets how white space inside an element is handled
							</Components.HelpParagraph>
						</Override>
						<Override slot="Text 3-0">
							<Components.HelpParagraph>
								text-indent
							</Components.HelpParagraph>
						</Override>
						<Override slot="Text 3-1">
							<Components.HelpParagraph>
								Sets the length of empty space (indentation) that is put before lines of text in a block
							</Components.HelpParagraph>
						</Override>
						<Override slot="Text 4-0">
							<Components.HelpParagraph>
								text-overflow
							</Components.HelpParagraph>
						</Override>
						<Override slot="Text 4-1">
							<Components.HelpParagraph>
								Sets how hidden overflow content is signaled to users
							</Components.HelpParagraph>
						</Override>
						<Override slot="Text 5-0">
							<Components.HelpParagraph>
								hyphens
							</Components.HelpParagraph>
						</Override>
						<Override slot="Text 5-1">
							<Components.HelpParagraph>
								Specifies how words should be hyphenated when text wraps across multiple lines
							</Components.HelpParagraph>
						</Override>
						<Override slot="Text 7-0">
							<Components.HelpParagraph>
								target
							</Components.HelpParagraph>
						</Override>
						<Override slot="Text 7-1">
							<Components.HelpParagraph>
								Вы можете определить окно, в которое будет загружаться страница, открытая по ссылке:{" "}
								<br />
								_self — загружает страницу в текущее окно,{" "}
								<br />
								_blank — загружает страницу в новое окно браузера,
								<br />
								{" "}_parent — загружает страницу во фрейм-родитель, если фреймов нет, то это значение работает как _self,
								<br />
								{" "}_top — отменяет все фреймы и загружает страницу в полном окне браузера, если фреймов нет, то это значение работает как _self.
							</Components.HelpParagraph>
						</Override>
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