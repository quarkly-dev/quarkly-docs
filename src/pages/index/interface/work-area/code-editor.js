import React from "react";
import theme from "theme";
import { Theme, Link, Section, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index/interface/work-area/code-editor"} />
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
					Code editor
				</Components.HelpHeader2>
				<Components.HelpImageBlock src="https://uploads.quarkly.io/landing/docs-theme-panel-breakpoints-create.png" />
				<Components.HelpParagraph>
					The second most important work area in Quarkly is the code editor. It displays all the components and their props that you can see on the screen. You can also work with the components, their props, and values much faster than on the page. You need to be able to follow JSX syntax, know the set of available components, CSS props and values.
				</Components.HelpParagraph>
				<Components.HelpHeader3>
					Команды редактора кода
				</Components.HelpHeader3>
				<Components.HelpImageBlock src="https://uploads.quarkly.io/landing/docs-theme-panel-breakpoints-create.png" />
				<Components.HelpParagraph>
					У редактора кода много полезных команд, например дублировать строку вниз, увеличить шрифт, найти и заменить. Чтобы посмотреть все команды редактора нажмите клавишу{" "}
					<Components.HelpKey>
						F1
					</Components.HelpKey>
					.
				</Components.HelpParagraph>
				<Components.HelpHeader3>
					Статус состояние кода (Save/not Save)
				</Components.HelpHeader3>
				<Components.HelpImageBlock src="https://uploads.quarkly.io/landing/docs-theme-panel-breakpoints-create.png" />
				<Components.HelpParagraph>
					В правом верхнему углу окна редактора кода находится статус сохранения. Если вы не сохранили изменения, то они не покажутся на странице. Чтобы применить изменения в коде, нажмите комбинацию клавиш{" "}
					<Components.HelpKey>
						Ctrl
					</Components.HelpKey>
					{" "}+{" \n\t\t\t "}
					<Components.HelpKey>
						S
					</Components.HelpKey>
					{" "}или{" "}
					<Components.HelpKey>
						⌘(Cmd)
					</Components.HelpKey>
					{" "}+{" "}
					<Components.HelpKey>
						S
					</Components.HelpKey>
					{"  "}для MacOS.{" "}
				</Components.HelpParagraph>
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