import React from "react";
import theme from "theme";
import { Theme, Link, Strong, Section, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index/interface/work-area/edit"} />
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
					Edit
				</Components.HelpHeader2>
				<Components.HelpGroup>
					<Components.HelpHeader4>
						How to resize an element with absolute and fixed position
					</Components.HelpHeader4>
					<Components.HelpVideo videoId="NFfHupUQnHY" />
					<Components.HelpParagraph>
						You can use your mouse to resize elements with absolute and fixed position. Just grab any corner or edge of the selected element and pull it to the desired size.
					</Components.HelpParagraph>
				</Components.HelpGroup>
				<Components.HelpGroup>
					<Components.HelpHeader4>
						Text Editing
					</Components.HelpHeader4>
					<Components.HelpImageBlockCapture>
						<Override slot="helpImageBlock" src="https://test-upl.quarkly.io/60a657b1e3623a001f692958/images/docs-new-workarea-edit-text.png?v=2021-05-20T14:08:25.247Z" />
						<Override slot="text">
							Редактирование текста
						</Override>
					</Components.HelpImageBlockCapture>
					<Components.HelpParagraph>
						When you select the text, a bar allowing you to quickly edit the text appears above the selected text.
There, you can find the following action buttons:
					</Components.HelpParagraph>
					<Components.HelpListMarked>
						<Components.HelpListItem>
							Bold
						</Components.HelpListItem>
						<Components.HelpListItem>
							Italic
						</Components.HelpListItem>
						<Components.HelpListItem>
							Insert link
						</Components.HelpListItem>
						<Components.HelpListItem>
							Convert to a part (span)
						</Components.HelpListItem>
						<Components.HelpListItem>
							Clear formatting
						</Components.HelpListItem>
					</Components.HelpListMarked>
				</Components.HelpGroup>
				<Components.HelpGroup>
					<Components.HelpHeader4>
						Converting to span
					</Components.HelpHeader4>
					<Components.HelpImageBlockCapture>
						<Override slot="helpImageBlock" src="https://test-upl.quarkly.io/60a657b1e3623a001f692958/images/docs-new-workarea-edit-text-span.png?v=2021-05-20T14:08:25.241Z" />
						<Override slot="text">
							Стилизация части текста после преобразования в span
						</Override>
					</Components.HelpImageBlockCapture>
					<Components.HelpParagraph>
						If you need to restyle part of the text, for example, highlight a few words, highlight a sentence, or change the letter spacing of a word, you can select the desired part of the text and convert it to span by clicking on the{" "}
						<Strong>
							[Wrap to span icon]
						</Strong>
						{" "}icon. After the conversion, you can change the style of the span if needed — apply any properties from the panel.
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