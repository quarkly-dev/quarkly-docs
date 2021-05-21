import React from "react";
import theme from "theme";
import { Theme, Link, Section, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index/interface/work-area/page"} />
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
					Page
				</Components.HelpHeader2>
				<Components.HelpGroup>
					<Components.HelpImageBlockCapture>
						<Override slot="helpImageBlock" src="https://test-upl.quarkly.io/607d3473b99fb9001fcbcc16/images/docs-new-page-interface.png?v=2021-05-16T13:46:40.507Z" />
						<Override slot="text">
							Страница в интерфейсе
						</Override>
					</Components.HelpImageBlockCapture>
					<Components.HelpParagraph>
						On the page, you can see the page version that is close to how it is going to appear for your visitors.
					</Components.HelpParagraph>
				</Components.HelpGroup>
				<Components.HelpHeader3>
					Элементы на странице
				</Components.HelpHeader3>
				<Components.HelpGroup>
					<Components.HelpImageBlockCapture>
						<Override slot="helpImageBlock" src="https://test-upl.quarkly.io/607d3473b99fb9001fcbcc16/images/docs-new-page-elements-multi-select.png?v=2021-05-16T13:50:21.663Z" />
						<Override slot="text">
							Выбор элементов на странице
						</Override>
					</Components.HelpImageBlockCapture>
					<Components.HelpParagraph>
						Elements are components the page contains. To select an element, click on it. To select several elements at a time, click on the desired elements while holding the{" "}
						<Components.HelpKey display="inline-block">
							Shift
						</Components.HelpKey>
						{" "}key.
					</Components.HelpParagraph>
					<Components.HelpImageBlockCapture>
						<Override slot="helpImageBlock" src="https://test-upl.quarkly.io/607d3473b99fb9001fcbcc16/images/docs-new-page-elements-panels.png?v=2021-05-16T13:55:18.955Z" />
						<Override slot="text">
							Button bar и Props panel элемента, когда он выбран
						</Override>
					</Components.HelpImageBlockCapture>
					<Components.HelpParagraph>
						Once an element is selected, the Props panel (on the right) and Button bar (on the page) will appear.
In addition, you can manage elements in the Pages and Layers tab. You can perform the following actions to the elements on the page and layers panel:
					</Components.HelpParagraph>
					<Components.HelpListMarked>
						<Components.HelpListItem>
							Select one or several elements
						</Components.HelpListItem>
						<Components.HelpListItem>
							Move an element to another place
						</Components.HelpListItem>
						<Components.HelpListItem>
							Clone an element (
							<Components.HelpKey display="inline-block">
								Shift
							</Components.HelpKey>
							+
							<Components.HelpKey display="inline-block">
								d
							</Components.HelpKey>
							{" "}or drag it while holding down the{" \n\t\t\t\t\t "}
							<Components.HelpKey display="inline-block">
								Alt
							</Components.HelpKey>
							{"  "}key)
						</Components.HelpListItem>
						<Components.HelpListItem>
							Remove an element (
							<Components.HelpKey display="inline-block">
								del
							</Components.HelpKey>
							{" "}or{" \n\t\t\t\t\t\t "}
							<Components.HelpKey display="inline-block">
								backspace
							</Components.HelpKey>
							)
						</Components.HelpListItem>
						<Components.HelpListItem>
							Вкладывать элементы друг в друга (если такая возможность есть у элемента)
						</Components.HelpListItem>
					</Components.HelpListMarked>
					<Components.HelpParagraph>
						You can open the{" "}
						<Link
							href="context-menu"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							context menu
						</Link>
						{" "}for an element. The menu contains a list of actions you can perform on the element. To open it, mouse over the element and{" "}
						<Components.HelpKey display="inline-block">
							right-click
						</Components.HelpKey>
						{" "}on it.
					</Components.HelpParagraph>
					<Components.HelpParagraph>
						Список действий над элементом:
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
					<Components.HelpParagraph>
						Список действий над компонентом:
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
					<Components.HelpHeader4>
						How to add an element
					</Components.HelpHeader4>
					<Components.HelpParagraph>
						Есть два способа добавить элемент на страницу. Первый — перетащить или кликнуть на примитив или компонент из панели добавления.
					</Components.HelpParagraph>
					<Components.HelpImageBlockCapture>
						<Override slot="helpImageBlock" src="https://test-upl.quarkly.io/607d3473b99fb9001fcbcc16/images/docs-new-page-elements-adding-from-panel.png?v=2021-05-16T14:03:39.908Z" />
						<Override slot="text">
							Добавление элемента из панели добавления
						</Override>
					</Components.HelpImageBlockCapture>
					<Components.HelpParagraph>
						Второй способ это нажать на кнопку{" "}
						<Components.HelpKey display="inline-block">
							+
						</Components.HelpKey>
						, открыть модальное окно Add и добавить блок или нужный компонент.
					</Components.HelpParagraph>
					<Components.HelpImageBlockCapture>
						<Override slot="helpImageBlock" src="https://test-upl.quarkly.io/607d3473b99fb9001fcbcc16/images/docs-new-page-elements-adding-from-modal-view.png?v=2021-05-16T14:03:39.902Z" />
						<Override slot="text">
							Добавление элемента из модального окна
						</Override>
					</Components.HelpImageBlockCapture>
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