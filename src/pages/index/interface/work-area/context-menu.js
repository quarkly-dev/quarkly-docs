import React from "react";
import theme from "theme";
import { Theme, Link, Section, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index/interface/work-area/context-menu"} />
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
					Context Menu
				</Components.HelpHeader2>
				<Components.HelpGroup>
					<Components.HelpImageBlockCapture>
						<Override slot="helpImageBlock" src="https://test-upl.quarkly.io/60a657b1e3623a001f692958/images/docs-new-workarea-context-menu-primitive.png?v=2021-05-20T15:59:40.385Z" />
						<Override slot="text">
							Контекстное меню примитива
						</Override>
					</Components.HelpImageBlockCapture>
					<Components.HelpParagraph>
						Контекстное меню содержит список действий над элементом, страницей, компонентом и другой сущностью. Чтобы вызвать контекстное меню, наведите курсор и нажмите правой кнопкой мыши.
					</Components.HelpParagraph>
				</Components.HelpGroup>
				<Components.HelpGroup>
					<Components.HelpHeader3>
						Context menu of a page
					</Components.HelpHeader3>
					<Components.HelpImageBlockCapture>
						<Override slot="helpImageBlock" src="https://test-upl.quarkly.io/60a657b1e3623a001f692958/images/docs-new-workarea-context-menu-page.png?v=2021-05-20T16:16:44.663Z" />
						<Override slot="text">
							Контекстное меню страницы
						</Override>
					</Components.HelpImageBlockCapture>
					<Components.HelpParagraph>
						Содержит
					</Components.HelpParagraph>
					<Components.HelpListMarked>
						<Components.HelpListItem>
							Edit Code
						</Components.HelpListItem>
						<Components.HelpListItem>
							Settings
						</Components.HelpListItem>
						<Components.HelpListItem>
							New Page
						</Components.HelpListItem>
						<Components.HelpListItem>
							Duplicate
						</Components.HelpListItem>
						<Components.HelpListItem>
							Rename
						</Components.HelpListItem>
						<Components.HelpListItem>
							Delete
						</Components.HelpListItem>
					</Components.HelpListMarked>
				</Components.HelpGroup>
				<Components.HelpGroup>
					<Components.HelpHeader3>
						Контекстное меню для элемента в списке слоев{" "}
					</Components.HelpHeader3>
					<Components.HelpImageBlockCapture>
						<Override slot="helpImageBlock" src="https://test-upl.quarkly.io/60a657b1e3623a001f692958/images/docs-new-workarea-context-menu-layer.png?v=2021-05-20T16:17:09.011Z" />
						<Override slot="text">
							Контекстное меню слоя
						</Override>
					</Components.HelpImageBlockCapture>
					<Components.HelpParagraph>
						Содержит
					</Components.HelpParagraph>
					<Components.HelpListMarked>
						<Components.HelpListItem>
							Show in Code Editor
						</Components.HelpListItem>
						<Components.HelpListItem>
							Settings
						</Components.HelpListItem>
						<Components.HelpListItem>
							Duplicate
						</Components.HelpListItem>
						<Components.HelpListItem>
							Rename
						</Components.HelpListItem>
						<Components.HelpListItem>
							Delete
						</Components.HelpListItem>
						<Components.HelpListItem>
							Create Component
						</Components.HelpListItem>
					</Components.HelpListMarked>
				</Components.HelpGroup>
				<Components.HelpGroup>
					<Components.HelpHeader3>
						Контекстное меню для компонента в списке слоев и на странице
					</Components.HelpHeader3>
					<Components.HelpImageBlockCapture>
						<Override slot="helpImageBlock" src="https://test-upl.quarkly.io/60a657b1e3623a001f692958/images/docs-new-workarea-context-menu-component.png?v=2021-05-20T16:17:22.664Z" />
						<Override slot="text">
							Контекстное меню компонента
						</Override>
					</Components.HelpImageBlockCapture>
					<Components.HelpParagraph>
						Содержит
					</Components.HelpParagraph>
					<Components.HelpListMarked>
						<Components.HelpListItem>
							Edit Code
						</Components.HelpListItem>
						<Components.HelpListItem>
							Show in Code Editor
						</Components.HelpListItem>
						<Components.HelpListItem>
							Duplicate
						</Components.HelpListItem>
						<Components.HelpListItem>
							Rename
						</Components.HelpListItem>
						<Components.HelpListItem>
							Delete
						</Components.HelpListItem>
						<Components.HelpListItem>
							Create new Component
						</Components.HelpListItem>
						<Components.HelpListItem>
							Detach
						</Components.HelpListItem>
						<Components.HelpListItem>
							Reset Overrides
						</Components.HelpListItem>
						<Components.HelpListItem>
							Reset All Overrides
						</Components.HelpListItem>
						<Components.HelpListItem>
							Push to Master
						</Components.HelpListItem>
						<Components.HelpListItem>
							Push All to Master
						</Components.HelpListItem>
					</Components.HelpListMarked>
				</Components.HelpGroup>
				<Components.HelpGroup>
					<Components.HelpHeader3>
						Элемент(примитив) на странице
					</Components.HelpHeader3>
					<Components.HelpImageBlockCapture>
						<Override slot="helpImageBlock" src="https://test-upl.quarkly.io/60a657b1e3623a001f692958/images/docs-new-workarea-context-menu-primitive.png?v=2021-05-20T15:59:40.385Z" />
						<Override slot="text">
							Контекстное меню примитива
						</Override>
					</Components.HelpImageBlockCapture>
					<Components.HelpParagraph>
						Содержит
					</Components.HelpParagraph>
					<Components.HelpListMarked>
						<Components.HelpListItem>
							Show in Code Editor
						</Components.HelpListItem>
						<Components.HelpListItem>
							Duplicate
						</Components.HelpListItem>
						<Components.HelpListItem>
							Delete
						</Components.HelpListItem>
						<Components.HelpListItem>
							Create new Component
						</Components.HelpListItem>
					</Components.HelpListMarked>
				</Components.HelpGroup>
				<Components.HelpGroup>
					<Components.HelpHeader3>
						Контекстное меню для группы элементов на странице
					</Components.HelpHeader3>
					<Components.HelpImageBlockCapture>
						<Override slot="helpImageBlock" src="https://test-upl.quarkly.io/60a657b1e3623a001f692958/images/docs-new-workarea-context-menu-group-elements.png?v=2021-05-20T16:18:53.644Z" />
						<Override slot="text">
							Контекстное меню для группы элементов
						</Override>
					</Components.HelpImageBlockCapture>
					<Components.HelpParagraph>
						Содержит
					</Components.HelpParagraph>
					<Components.HelpListMarked>
						<Components.HelpListItem>
							Duplicate
						</Components.HelpListItem>
						<Components.HelpListItem>
							Delete
						</Components.HelpListItem>
					</Components.HelpListMarked>
				</Components.HelpGroup>
				<Components.HelpGroup>
					<Components.HelpHeader3>
						Контекстное меню для группы элементов в списке слоев
					</Components.HelpHeader3>
					<Components.HelpImageBlockCapture>
						<Override slot="helpImageBlock" src="https://test-upl.quarkly.io/60a657b1e3623a001f692958/images/docs-new-workarea-context-menu-group-layers.png?v=2021-05-20T16:19:06.845Z" />
						<Override slot="text">
							Контекстное меню для группы слоев
						</Override>
					</Components.HelpImageBlockCapture>
					<Components.HelpParagraph>
						Содержит
					</Components.HelpParagraph>
					<Components.HelpListMarked>
						<Components.HelpListItem>
							Duplicate
						</Components.HelpListItem>
						<Components.HelpListItem>
							Delete
						</Components.HelpListItem>
					</Components.HelpListMarked>
				</Components.HelpGroup>
				<Components.HelpGroup>
					<Components.HelpHeader3>
						Контекстное меню для значения в Theme
					</Components.HelpHeader3>
					<Components.HelpImageBlockCapture>
						<Override slot="helpImageBlock" src="https://test-upl.quarkly.io/60a657b1e3623a001f692958/images/docs-new-workarea-context-menu-theme-variable.png?v=2021-05-20T16:19:21.866Z" />
						<Override slot="text">
							Контекстное меню для значения в теме
						</Override>
					</Components.HelpImageBlockCapture>
					<Components.HelpParagraph>
						Содержит
					</Components.HelpParagraph>
					<Components.HelpListMarked>
						<Components.HelpListItem>
							Duplicate
						</Components.HelpListItem>
						<Components.HelpListItem>
							Delete
						</Components.HelpListItem>
					</Components.HelpListMarked>
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