import React from "react";
import theme from "theme";
import { Theme, Link, Section, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index/interface/work-area/adding/primitives"} />
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
				<Override slot="Sub Head Text-primitives" />
			</Components.SidebarMenu>
			<Section background="--color-white" padding="24px 0 64px 0">
				<Override slot="SectionContent" max-width="760px" />
				<Components.HelpHeader2>
					Примитивы
				</Components.HelpHeader2>
				<Components.HelpGroup>
					<Components.HelpImageBlock src="https://uploads.quarkly.io/landing/docs-interface-context-menu.png" />
					<Components.HelpParagraph>
						В этом разделе находятся простые элементы, которые используются чаще всего.
					</Components.HelpParagraph>
					<Components.HelpListMarked>
						<Components.HelpLink href="box">
							Box
						</Components.HelpLink>
						<Components.HelpLink href="button">
							Button
						</Components.HelpLink>
						<Components.HelpLink href="hr">
							Hr
						</Components.HelpLink>
						<Components.HelpLink href="icon">
							Icon
						</Components.HelpLink>
						<Components.HelpLink href="image">
							Image
						</Components.HelpLink>
						<Components.HelpLink href="input">
							Input
						</Components.HelpLink>
						<Components.HelpLink href="link-primitive">
							Link
						</Components.HelpLink>
						<Components.HelpLink href="list">
							List
						</Components.HelpLink>
						<Components.HelpLink href="section">
							Section
						</Components.HelpLink>
						<Components.HelpLink href="text">
							Text
						</Components.HelpLink>
					</Components.HelpListMarked>
				</Components.HelpGroup>
				<Components.HelpParagraph>
					Чтобы добавить элемент на страницу, просто перетащите его и бросьте в нужное место. Еще вы можете кликнуть на него, и элемент добавится вниз страницы.
				</Components.HelpParagraph>
				<Components.HelpParagraph>
					Примитивам можно задавать стилевые и функциональные свойства (props). У каждого свой уникальный набор.
				</Components.HelpParagraph>
				<Components.HelpGroup />
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