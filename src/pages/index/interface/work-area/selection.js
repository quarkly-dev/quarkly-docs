import React from "react";
import theme from "theme";
import { Theme, Link, Section, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index/interface/work-area/selection"} />
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
					Selection
				</Components.HelpHeader2>
				<Components.HelpGroup>
					<Components.HelpImageBlockCapture>
						<Override slot="helpImageBlock" src="https://test-upl.quarkly.io/60a657b1e3623a001f692958/images/docs-new-workarea-selection-simple.png?v=2021-05-20T13:43:10.433Z" />
						<Override slot="text">
							Выделение элемента на странице
						</Override>
					</Components.HelpImageBlockCapture>
					<Components.HelpParagraph>
						Чтобы выбрать элемент на самом верхнем или текущем уровне вложенности, просто кликните на него. Если вам нужно выбрать вложенный элемент на уровень ниже от текущего, то есть два способа:
					</Components.HelpParagraph>
					<Components.HelpListMarked>
						<Components.HelpListItem>
							Используйте двойной клик, чтобы спуститься на один уровень вложенности
						</Components.HelpListItem>
						<Components.HelpListItem>
							Кликните по элементу с зажатой клавишей{" "}
							<Components.HelpKey>
								Ctrl
							</Components.HelpKey>
							{" "}или{" "}
							<Components.HelpKey>
								⌘(Cmd)
							</Components.HelpKey>
							{" "}для MacOS. В этом случае иерархия элементов игнорируется.
						</Components.HelpListItem>
					</Components.HelpListMarked>
					<Components.HelpParagraph>
						Чтобы сбросить выделение нажмите клавишу{" "}
						<Components.HelpKey>
							Esc
						</Components.HelpKey>
						.
					</Components.HelpParagraph>
				</Components.HelpGroup>
				<Components.HelpGroup>
					<Components.HelpHeader3>
						Групповой выбор элементов
					</Components.HelpHeader3>
					<Components.HelpImageBlockCapture>
						<Override slot="helpImageBlock" src="https://test-upl.quarkly.io/60a657b1e3623a001f692958/images/docs-new-workarea-selection-multiple.png?v=2021-05-20T13:43:34.163Z" />
						<Override slot="text">
							Выделение нескольких элементов на странице
						</Override>
					</Components.HelpImageBlockCapture>
					<Components.HelpParagraph>
						Чтобы выбрать несколько элементов, есть два способа:
					</Components.HelpParagraph>
					<Components.HelpListMarked>
						<Components.HelpListItem>
							Клик с зажатой клавишей{" "}
							<Components.HelpKey>
								Shift
							</Components.HelpKey>
							{" "}по нужным элементом на одном уровне
						</Components.HelpListItem>
						<Components.HelpListItem>
							Клик с зажатыми клавишами{" "}
							<Components.HelpKey>
								Shift
							</Components.HelpKey>
							{" "}и{" "}
							<Components.HelpKey>
								Ctrl
							</Components.HelpKey>
							{" "}или{" "}
							<Components.HelpKey>
								⇧(Shift)
							</Components.HelpKey>
							{" "}и{" "}
							<Components.HelpKey>
								⌘(Cmd)
							</Components.HelpKey>
							{" "}для MacOS по нужным элементам на любом уровне
						</Components.HelpListItem>
					</Components.HelpListMarked>
					<Components.HelpParagraph>
						Чтобы снять выбор кликните по элементу ещё раз с зажатыми клавишами.
					</Components.HelpParagraph>
				</Components.HelpGroup>
				<Components.HelpGroup>
					<Components.HelpHeader3>
						Отображение дистанции{" "}
					</Components.HelpHeader3>
					<Components.HelpImageBlockCapture>
						<Override slot="helpImageBlock" src="https://test-upl.quarkly.io/60a657b1e3623a001f692958/images/docs-new-workarea-selection-show-distance.png?v=2021-05-20T13:43:45.153Z" />
						<Override slot="text">
							Отображение дистанции между элементами
						</Override>
					</Components.HelpImageBlockCapture>
					<Components.HelpParagraph>
						Чтобы посмотреть дистанцию между элементами, выберите первый элемент, зажмите клавишу{" "}
						<Components.HelpKey>
							Alt
						</Components.HelpKey>
						{" "}или{" "}
						<Components.HelpKey>
							⌥(Option)
						</Components.HelpKey>
						{" "}для MacOS и наведите на второй элемент. Если вы хотите посмотреть расстояние до вложенного элемента, зажимать нужно{" "}
						<Components.HelpKey>
							Alt
						</Components.HelpKey>
						{" "}и{" "}
						<Components.HelpKey>
							Ctrl
						</Components.HelpKey>
						{" "}или{" "}
						<Components.HelpKey>
							⌥(Option)
						</Components.HelpKey>
						{" "}и{" "}
						<Components.HelpKey>
							⌘(Cmd)
						</Components.HelpKey>
						{" "}для MacOS.
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