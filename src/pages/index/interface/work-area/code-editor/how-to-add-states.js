import React from "react";
import theme from "theme";
import { Theme, Link, Section, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index/interface/work-area/code-editor/how-to-add-states"} />
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
					Как добавить состояния
				</Components.HelpHeader2>
				<Components.HelpParagraph>
					Для некоторых компонентов доступны различные состояния, вот несколько из них:
				</Components.HelpParagraph>
				<Components.HelpListMarked>
					<Components.HelpListItem>
						hover — состояние при наведении курсора
					</Components.HelpListItem>
					<Components.HelpListItem>
						focus — состояние когда компонент в фокусе
					</Components.HelpListItem>
					<Components.HelpListItem>
						active, for a &lt;Button/&gt; and an &lt;Input/&gt;  — состояние когда элемент активен{" "}
					</Components.HelpListItem>
					<Components.HelpListItem>
						disabled, for a &lt;Button/&gt; — состояние когда кнопка не активна
					</Components.HelpListItem>
					<Components.HelpListItem>
						link, for a &lt;Link/&gt; — состояние для непосещенной ссылки
					</Components.HelpListItem>
					<Components.HelpListItem>
						visited, for a &lt;Link/&gt; — состояние для посещенной ссылки
					</Components.HelpListItem>
					<Components.HelpListItem>
						и другие.{" "}
					</Components.HelpListItem>
				</Components.HelpListMarked>
				<Components.HelpParagraph>
					Свойства и значения для таких состояний вы можете указывать и в коде, используя такой синтаксис: state-props="value". Например,
				</Components.HelpParagraph>
				<Components.HelpCodeBlock code="<Text hover-color=&quot;orange&quot;> Оранжевый текст </Text>" />
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