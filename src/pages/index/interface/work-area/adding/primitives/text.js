import React from "react";
import theme from "theme";
import { Theme, Link, Section, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index/interface/work-area/adding/primitives/text"} />
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
					Text
				</Components.HelpHeader2>
				<Components.HelpGroup>
					<Components.HelpImageBlockCapture>
						<Override slot="helpImageBlock" src="https://test-upl.quarkly.io/607d3473b99fb9001fcbcc16/images/docs-new-workarea-components-primitives-text.png?v=2021-05-16T08:18:11.646Z" />
						<Override slot="text">
							Примитив Text на странице
						</Override>
					</Components.HelpImageBlockCapture>
					<Components.HelpGroup margin="0px 0px 24px 0px">
						<Components.HelpParagraphLead>
							Примитив Text выводит текстовую информацию на странице.
						</Components.HelpParagraphLead>
						<Components.HelpParagraph>
							Часть текста может быть преобразована в примитив Link или в span. Link и Span внутри текста можно стилизовать отдельно от Text.
						</Components.HelpParagraph>
					</Components.HelpGroup>
					<Components.HelpHeader4>
						Доступные свойства
					</Components.HelpHeader4>
					<Components.HelpTable cols="2" rows="7">
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
								as
							</Components.HelpParagraph>
						</Override>
						<Override slot="Text 6-1">
							<Components.HelpParagraph>
								html-элемент, который будет использован в документе:
						h1, h2, h3, h4, h5, h6, p, div
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
								specifies how words should be hyphenated when text wraps across multiple lines
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