import React from "react";
import theme from "theme";
import { Theme, Link, Section, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index/interface/work-area/code-editor/how-to-add-components"} />
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
					Как добавить компоненты
				</Components.HelpHeader2>
				<Components.HelpParagraph>
					Чтобы добавить компонент введите его имя как HTML тег, например:
				</Components.HelpParagraph>
				<Components.HelpCodeBlock code="<Text> Простой текст </Text>" />
				<Components.HelpHeader3>
					Примитив
				</Components.HelpHeader3>
				<Components.HelpParagraph>
					Так вы можете добавлять любой примитив:
				</Components.HelpParagraph>
				<Components.HelpListMarked>
					<Components.HelpListItem>
						&lt;Box/&gt;
					</Components.HelpListItem>
					<Components.HelpListItem>
						&lt;Button/&gt;
					</Components.HelpListItem>
					<Components.HelpListItem>
						&lt;Hr/&gt;
					</Components.HelpListItem>
					<Components.HelpListItem>
						&lt;Image/&gt;
					</Components.HelpListItem>
					<Components.HelpListItem>
						&lt;Input/&gt;
					</Components.HelpListItem>
					<Components.HelpListItem>
						&lt;Link/&gt;
					</Components.HelpListItem>
					<Components.HelpListItem>
						&lt;List/&gt;
					</Components.HelpListItem>
					<Components.HelpListItem>
						&lt;Text/&gt;
					</Components.HelpListItem>
				</Components.HelpListMarked>
				<Components.HelpHeader3>
					Свой компонент
				</Components.HelpHeader3>
				<Components.HelpParagraph>
					Свой созданный или добавленный компонент, указав его название. Например, чтобы добавить на страницу свой компонент с названием MyComponent вам нужно написать:
				</Components.HelpParagraph>
				<Components.HelpCodeBlock code="<MyComponent/> " />
				<Components.HelpHeader3>
					Вложенный компонент
				</Components.HelpHeader3>
				<Components.HelpParagraph>
					Если хотите поместить один компонент в другой, вам нужно написать:
				</Components.HelpParagraph>
				<Components.HelpCodeBlock code="<MyComponent>\\n    <Text> Простой текст </Text>\\n</MyComponent>" />
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