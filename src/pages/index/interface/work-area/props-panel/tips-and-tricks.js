import React from "react";
import theme from "theme";
import { Theme, Link, Strong, Box, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index/interface/work-area/props-panel/tips-and-tricks"} />
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
				<Override slot="Sub Head Text-styles-basic" />
				<Override slot="Sub Head Text-props-panel" />
			</Components.SidebarMenu>
			<Section background="--color-white" padding="24px 0 64px 0">
				<Override slot="SectionContent" max-width="760px" />
				<Box margin="48px 0px 0px 0px" id="interface-context-menu">
					<Components.HelpHeader2>
						Tips&Tricks
					</Components.HelpHeader2>
					<Components.HelpParagraph>
						All units of measurement available in CSS can be used.
					</Components.HelpParagraph>
					<Components.HelpHeader3>
						Math
					</Components.HelpHeader3>
					<Components.HelpParagraph>
						You can use the following mathematical operations in the input field:{" "}
						<Components.HelpKey display="inline-block">
							+
						</Components.HelpKey>
						,{" "}
						<Components.HelpKey display="inline-block">
							-
						</Components.HelpKey>
						,{" "}
						<Components.HelpKey display="inline-block">
							*
						</Components.HelpKey>
						,{" "}
						<Components.HelpKey display="inline-block">
							/
						</Components.HelpKey>
						.
					</Components.HelpParagraph>
					<Components.HelpExample>
						For example, enter the{" "}
						<Strong>
							720px/2
						</Strong>
						{" "}value, click on Enter and get the{" "}
						<Strong>
							360px
						</Strong>
						{" "}value.
					</Components.HelpExample>
					<Components.HelpHeader3>
						Calc()
					</Components.HelpHeader3>
					<Components.HelpParagraph>
						If you enter an expression containing different units, the input field will reformat it into a calc value.{" "}
					</Components.HelpParagraph>
					<Components.HelpExample>
						For example,{" "}
						<Strong>
							100vh-60px
						</Strong>
						{" "}will be converted to{" "}
						<Strong>
							calc(100vh-60px)
						</Strong>
						.
					</Components.HelpExample>
					<Components.HelpHeader3>
						Input shortcuts
					</Components.HelpHeader3>
					<Components.HelpTable
						cols="3"
						rows="8"
						width="100%"
						showHeader
						font="--baseSm"
						color="--darkL2"
						margin="12px 0px 0px 0px"
					>
						<Override slot="Text 0-0">
							Увеличение числового значения на 1
						</Override>
						<Override slot="Text 0-1" background="--color-lightD1" display="inline-block" padding="2px 8px 4px 8px">
							<Components.HelpKey display="inline-block">
								↑
							</Components.HelpKey>
						</Override>
						<Override slot="Text 1-0">
							Уменьшение числового значения на 1
						</Override>
						<Override slot="Text 2-0">
							Увеличение числового значения на 10
						</Override>
						<Override slot="Text 3-0">
							Уменьшение числового значения на 10
						</Override>
						<Override slot="Text 4-0">
							Увеличение числового значения на 100
						</Override>
						<Override slot="Text 5-0">
							Уменьшение числового значения на 100
						</Override>
						<Override slot="Text 6-0">
							Увеличение числового значения на 0.1
						</Override>
						<Override slot="Text 7-0">
							Уменьшение числового значения на 0.1
						</Override>
						<Override slot="Text 8-0">
							Уменьшение числового значения на 0.1
						</Override>
						<Override slot="Cell" padding="0rem 1rem 0rem 1rem" />
						<Override slot="Text" margin="12px 0px 12px 0px" border-radius="4px" />
						<Override slot="Text THead Col-0" font="700 18px/27px &quot;Source Sans Pro&quot;, sans-serif">
							Action
						</Override>
						<Override slot="Text THead Col-2" font="700 18px/27px &quot;Source Sans Pro&quot;, sans-serif">
							MacOS
						</Override>
						<Override slot="Text THead Col-1" font="700 18px/27px &quot;Source Sans Pro&quot;, sans-serif">
							Windows and Linux
						</Override>
						<Override slot="Text 1-1" background="--color-lightD1" display="inline-block" padding="2px 8px 4px 8px">
							<Components.HelpKey display="inline-block">
								↓
							</Components.HelpKey>
						</Override>
						<Override slot="Text 1-2" background="--color-lightD1" display="inline-block" padding="2px 8px 4px 8px">
							<Components.HelpKey display="inline-block">
								↓
							</Components.HelpKey>
						</Override>
						<Override slot="Text 2-1">
							<Components.HelpKey display="inline-block">
								Shift
							</Components.HelpKey>
							{" "}+{" "}
							<Components.HelpKey display="inline-block">
								↑
							</Components.HelpKey>
						</Override>
						<Override slot="Text 2-2">
							<Components.HelpKey display="inline-block">
								⇧(Shift)
							</Components.HelpKey>
							{" "}+{" \t\t\t\t\t "}
							<Components.HelpKey display="inline-block">
								↓
							</Components.HelpKey>
						</Override>
						<Override slot="Text 3-1">
							<Components.HelpKey display="inline-block">
								Shift
							</Components.HelpKey>
							{" "}+{" "}
							<Components.HelpKey display="inline-block">
								↓
							</Components.HelpKey>
						</Override>
						<Override slot="Text 4-1">
							<Components.HelpKey display="inline-block">
								Ctrl
							</Components.HelpKey>
							{" "}+{" "}
							<Components.HelpKey display="inline-block">
								↑
							</Components.HelpKey>
						</Override>
						<Override slot="Text 5-1">
							<Components.HelpKey display="inline-block">
								Ctrl
							</Components.HelpKey>
							{" "}+{" "}
							<Components.HelpKey display="inline-block">
								↓
							</Components.HelpKey>
						</Override>
						<Override slot="Text 6-1">
							<Components.HelpKey display="inline-block">
								Alt
							</Components.HelpKey>
							{" "}+{" "}
							<Components.HelpKey display="inline-block">
								↑
							</Components.HelpKey>
						</Override>
						<Override slot="Text 7-1">
							<Components.HelpKey display="inline-block">
								Alt
							</Components.HelpKey>
							{" "}+{" "}
							<Components.HelpKey display="inline-block">
								↓
							</Components.HelpKey>
						</Override>
						<Override slot="Text 3-2">
							<Components.HelpKey display="inline-block">
								⇧(Shift)
							</Components.HelpKey>
							{" "}+{" "}
							<Components.HelpKey display="inline-block">
								↓
							</Components.HelpKey>
						</Override>
						<Override slot="Text 4-2">
							<Components.HelpKey display="inline-block">
								⌘(Cmd)
							</Components.HelpKey>
							{" "}+{" "}
							<Components.HelpKey display="inline-block">
								↑
							</Components.HelpKey>
						</Override>
						<Override slot="Text 5-2">
							<Components.HelpKey display="inline-block">
								⌘(Cmd)
							</Components.HelpKey>
							{" "}+{" "}
							<Components.HelpKey display="inline-block">
								↓
							</Components.HelpKey>
						</Override>
						<Override slot="Text 6-2">
							<Components.HelpKey display="inline-block">
								⌥(Option)
							</Components.HelpKey>
							{" "}+{" \t\t\t\t\t "}
							<Components.HelpKey display="inline-block">
								↑
							</Components.HelpKey>
						</Override>
						<Override slot="Text 7-2">
							<Components.HelpKey display="inline-block">
								⌥(Option)
							</Components.HelpKey>
							{" "}+{" "}
							<Components.HelpKey display="inline-block">
								↓
							</Components.HelpKey>
						</Override>
						<Override slot="Text 0-2" background="--color-lightD1" display="inline-block" padding="2px 8px 4px 8px">
							<Components.HelpKey display="inline-block">
								↑
							</Components.HelpKey>
						</Override>
					</Components.HelpTable>
				</Box>
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