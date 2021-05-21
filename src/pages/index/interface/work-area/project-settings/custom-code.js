import React from "react";
import theme from "theme";
import { Theme, Link, Section, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index/interface/work-area/project-settings/custom-code"} />
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
				<Override slot="Sub Head Text" />
				<Override slot="Sub Head Text-overview1221111112111" />
			</Components.SidebarMenu>
			<Section background="--color-white" padding="24px 0 64px 0">
				<Override slot="SectionContent" max-width="760px" />
				<Components.HelpHeader2>
					Custom code
				</Components.HelpHeader2>
				<Components.HelpImageBlock src="https://uploads.quarkly.io/landing/docs-theme-panel-breakpoints-create.png" />
				<Components.HelpParagraph>
					Вкладка Custom Code, отвечает за добавление тегов внутрь head и в конец body.
				</Components.HelpParagraph>
				<Components.HelpParagraph>
					{" "}Теги которые можно добавлять внутрь head:
				</Components.HelpParagraph>
				<Components.HelpListMarked>
					<Components.HelpListItem>
						&lt;Script&gt;
					</Components.HelpListItem>
					<Components.HelpListItem>
						&lt;Link&gt;
					</Components.HelpListItem>
					<Components.HelpListItem>
						&lt;Meta&gt;
					</Components.HelpListItem>
					<Components.HelpListItem>
						&lt;Style&gt;
					</Components.HelpListItem>
				</Components.HelpListMarked>
				<Components.HelpParagraph>
					Теги которые можно добавлять в конец body:
				</Components.HelpParagraph>
				<Components.HelpListMarked>
					<Components.HelpListItem>
						&lt;Script&gt;
					</Components.HelpListItem>
					<Components.HelpListItem>
						&lt;Link&gt;
					</Components.HelpListItem>
					<Components.HelpListItem>
						&lt;Style&gt;
					</Components.HelpListItem>
				</Components.HelpListMarked>
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