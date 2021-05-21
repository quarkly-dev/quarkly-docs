import React from "react";
import theme from "theme";
import { Theme, Link, Section, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index/interface/work-area/pages-and-layers"} />
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
					Pages and Layers
				</Components.HelpHeader2>
				<Components.HelpGroup>
					<Components.HelpImageBlockCapture>
						<Override slot="helpImageBlock" src="https://test-upl.quarkly.io/607d3473b99fb9001fcbcc16/images/docs-new-pages-layers-panel.png?v=2021-05-16T13:18:58.776Z" />
						<Override slot="text">
							Панель Pages and Layers
						</Override>
					</Components.HelpImageBlockCapture>
					<Components.HelpParagraph>
						Проекты состоят из страниц, а страницы содержат в себе элементы. Панель страниц и слоев содержит в себе:
					</Components.HelpParagraph>
					<Components.HelpListMarked>
						<Components.HelpListItem>
							List of pages
						</Components.HelpListItem>
						<Components.HelpListItem>
							List of elements the page contains
						</Components.HelpListItem>
					</Components.HelpListMarked>
					<Components.HelpParagraph>
						You can perform the following actions to both pages and elements:
					</Components.HelpParagraph>
					<Components.HelpListMarked>
						<Components.HelpListItem>
							Select
						</Components.HelpListItem>
						<Components.HelpListItem>
							Add new
						</Components.HelpListItem>
						<Components.HelpListItem>
							Delete
						</Components.HelpListItem>
						<Components.HelpListItem>
							Rename
						</Components.HelpListItem>
						<Components.HelpListItem>
							Move the page/element up or down
						</Components.HelpListItem>
						<Components.HelpListItem>
							Nest
						</Components.HelpListItem>
					</Components.HelpListMarked>
				</Components.HelpGroup>
				<Components.HelpHeader3>
					Pages
				</Components.HelpHeader3>
				<Components.HelpGroup>
					<Components.HelpImageBlockCapture>
						<Override slot="helpImageBlock" src="https://test-upl.quarkly.io/607d3473b99fb9001fcbcc16/images/docs-new-pages-layers-panel-page-menu.png?v=2021-05-16T13:23:40.217Z" />
						<Override slot="text">
							Контекстное меню страницы
						</Override>
					</Components.HelpImageBlockCapture>
					<Components.HelpParagraph>
						You can open the{" "}
						<Link href="context-menu">
							context menu
						</Link>
						{" "}for a page. The menu contains a list of actions you can perform. To open it, mouse over the page or layer and right-click on it.
					</Components.HelpParagraph>
					<Components.HelpParagraph>
						Действия в контекстном меню для страниц:
					</Components.HelpParagraph>
					<Components.HelpListMarked>
						<Components.HelpListItem>
							Edit code
						</Components.HelpListItem>
						<Components.HelpListItem>
							Open Settings
						</Components.HelpListItem>
						<Components.HelpListItem>
							Add new page
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
				<Components.HelpHeader3>
					Layers
				</Components.HelpHeader3>
				<Components.HelpGroup>
					<Components.HelpImageBlockCapture>
						<Override slot="helpImageBlock" src="https://test-upl.quarkly.io/607d3473b99fb9001fcbcc16/images/docs-new-pages-layers-panel-layer-menu.png?v=2021-05-16T13:23:40.223Z" />
						<Override slot="text">
							Контекстное меню слоя
						</Override>
					</Components.HelpImageBlockCapture>
					<Components.HelpParagraph>
						You can open the{" "}
						<Link href="context-menu">
							context menu
						</Link>
						{" "}for a layer. The menu contains a list of actions you can perform. To open it, mouse over the page or layer and right-click on it.
					</Components.HelpParagraph>
					<Components.HelpParagraph>
						Действия в контекстном меню для слоев элементов:
					</Components.HelpParagraph>
					<Components.HelpListMarked>
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
					</Components.HelpListMarked>
					<Components.HelpParagraph>
						Действия в контекстном меню для слоев компонентов:
					</Components.HelpParagraph>
					<Components.HelpListMarked>
						<Components.HelpListItem>
							Edit code
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
					<Components.HelpHeader4>
						Choosing multiple elements
					</Components.HelpHeader4>
					<Components.HelpParagraph>
						If you need to choose several elements on the layers panel, click on them white-holding down the{" "}
						<Components.HelpKey display="inline-block">
							Cmd (Ctrl)
						</Components.HelpKey>
						{" "}key. To select a range of elements, click on the first on the list and then click on the last one while holding down the{" "}
						<Components.HelpKey display="inline-block">
							Shift
						</Components.HelpKey>
						{" "}key. The range will be marked as selected from the first to the last item. To exclude an element from the selected range, click on it while holding down the{" "}
						<Components.HelpKey display="inline-block">
							Cmd (Ctrl)
						</Components.HelpKey>
						{" "}key.
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