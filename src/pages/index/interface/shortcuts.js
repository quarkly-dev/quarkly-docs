import React from "react";
import theme from "theme";
import { Theme, Link, Strong, Span, Section, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index/interface/shortcuts"} />
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
		<Box display="flex" quarkly-title="Content" position="relative">
			<Components.SidebarMenu position="sticky" top="30px" left={0} />
			<Section background="--color-white" padding="24px 0 64px 0">
				<Override slot="SectionContent" max-width="760px" />
				<Components.HelpHeader2>
					Shortcuts
				</Components.HelpHeader2>
				<Components.HelpHeader3>
					Text
				</Components.HelpHeader3>
				<Components.HelpHeader4>
					Edit Mode
				</Components.HelpHeader4>
				<Components.HelpTable
					cols="3"
					rows="2"
					width="100%"
					showHeader
					font="--baseSm"
					color="--darkL2"
					margin="12px 0px 0px 0px"
				>
					<Override slot="Text THead Col-0">
						<Strong>
							Action
						</Strong>
					</Override>
					<Override slot="Text THead Col-1">
						<Strong>
							Windows and Linux
						</Strong>
					</Override>
					<Override slot="Text THead Col-2">
						<Strong>
							MacOS
						</Strong>
					</Override>
					<Override slot="Text 0-0">
						Enter
					</Override>
					<Override slot="Text 0-1">
						Enter
					</Override>
					<Override slot="Text 1-0">
						Exit
					</Override>
					<Override slot="Text 1-1">
						Esc
						<br />
						<Span color="--green">
							Ctrl
						</Span>
						{" "}+ Enter
					</Override>
					<Override slot="Text 1-2">
						Esc
						<br />
						<Span color="--orange">
							Ctrl
						</Span>
						{"\n\t\t\t"}+
				Enter{"\t\t\t\t "}
					</Override>
					<Override slot="Text 0-2">
						Enter
					</Override>
					<Override slot="Cell" padding="0 1rem 0 1rem" width="33.33%" />
				</Components.HelpTable>
				<Components.HelpHeader4>
					After selecting text
				</Components.HelpHeader4>
				<Components.HelpTable
					cols="3"
					rows="2"
					width="100%"
					showHeader
					font="--baseSm"
					color="--darkL2"
					margin="12px 0px 0px 0px"
				>
					<Override slot="Text THead Col-0">
						<Strong>
							Action
						</Strong>
					</Override>
					<Override slot="Text THead Col-1">
						<Strong>
							Windows and Linux
						</Strong>
					</Override>
					<Override slot="Text THead Col-2">
						<Strong>
							MacOS
						</Strong>
					</Override>
					<Override slot="Text 0-0">
						Bold
					</Override>
					<Override slot="Text 0-1">
						<Span color="--green">
							Ctrl
						</Span>
						{" "}+ b
					</Override>
					<Override slot="Text 1-0">
						Italic
					</Override>
					<Override slot="Text 1-1">
						<Span color="--green">
							Ctrl
						</Span>
						{" "}+ i
					</Override>
					<Override slot="Text 1-2">
						<Span
							color="--green"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							⌘ (Cmd)
						</Span>
						{" "}+ i
						<Span
							color="--green"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							⌘ (Cmd)
						</Span>
						{" "}+ i
					</Override>
					<Override slot="Text 0-2">
						<Span color="--green">
							⌘ (Cmd)
						</Span>
						{" "}+ b
					</Override>
					<Override slot="Cell" padding="0 1rem 0 1rem" width="33.33%" />
				</Components.HelpTable>
				<Components.HelpHeader3>
					Selection
				</Components.HelpHeader3>
				<Components.HelpTable
					cols="3"
					rows="3"
					width="100%"
					showHeader
					font="--baseSm"
					color="--darkL2"
					margin="12px 0px 0px 0px"
				>
					<Override slot="Text THead Col-0">
						<Strong>
							Action
						</Strong>
					</Override>
					<Override slot="Text THead Col-1">
						<Strong>
							Windows and Linux
						</Strong>
					</Override>
					<Override slot="Text THead Col-2">
						<Strong>
							MacOS
						</Strong>
					</Override>
					<Override slot="Text 0-0">
						Reset Selection
					</Override>
					<Override slot="Text 0-1">
						Esc{" "}
					</Override>
					<Override slot="Text 1-0">
						Select a Parent element
					</Override>
					<Override slot="Text 1-1">
						<Span
							color="--primary"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Shift
						</Span>
						{" "}+ ↑
						<br />
						<Span color="--primary">
							Shift
						</Span>
						{" "}+ Enter
					</Override>
					<Override slot="Text 1-2">
						<Span
							color="--primary"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							⇧ (Shift)
						</Span>
						{" "}+ ↑
						<br />
						<Span color="--primary">
							⇧ (Shift){" "}
						</Span>
						+ Enter
					</Override>
					<Override slot="Text 0-2">
						Esc
					</Override>
					<Override slot="Cell" padding="0 1rem 0 1rem" width="33.33%" />
					<Override slot="Text 2-0">
						Select All Children elements
					</Override>
					<Override slot="Text 2-1">
						Enter
					</Override>
					<Override slot="Text 2-2">
						Enter
					</Override>
				</Components.HelpTable>
				<Components.HelpHeader3>
					Edit
				</Components.HelpHeader3>
				<Components.HelpTable
					cols="3"
					rows="6"
					width="100%"
					showHeader
					font="--baseSm"
					color="--darkL2"
					margin="12px 0px 0px 0px"
				>
					<Override slot="Text THead Col-0">
						<Strong>
							Action
						</Strong>
					</Override>
					<Override slot="Text THead Col-1">
						<Strong>
							Windows and Linux
						</Strong>
					</Override>
					<Override slot="Text THead Col-2">
						<Strong>
							MacOS
						</Strong>
					</Override>
					<Override slot="Text 0-0">
						Duplicate
					</Override>
					<Override slot="Text 0-1">
						<Span color="--primary">
							Shift
						</Span>
						{" "}+ d
					</Override>
					<Override slot="Text 1-0">
						Delete
					</Override>
					<Override slot="Text 1-1">
						Delete
					</Override>
					<Override slot="Text 1-2">
						⌫{" "}
					</Override>
					<Override slot="Text 0-2">
						<Span color="--primary">
							⇧ (Shift)
						</Span>
						{" "}+ d
					</Override>
					<Override slot="Cell" padding="0 1rem 0 1rem" width="33.33%" />
					<Override slot="Text 2-0">
						Copy element props
					</Override>
					<Override slot="Text 3-0">
						Paste element props
					</Override>
					<Override slot="Text 4-0">
						Undo
					</Override>
					<Override slot="Text 5-0">
						Redo
					</Override>
					<Override slot="Text 2-1">
						<Span
							color="--indigo"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Alt
						</Span>
						{" "}+{" "}
						<Span color="--green">
							Ctrl
						</Span>
						{" "}+ c
					</Override>
					<Override slot="Text 2-2">
						<Span
							color="--indigo"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							⌥ (Option)
						</Span>
						{" "}+{" "}
						<Span color="--green">
							⌘ (Cmd)
						</Span>
						{" "}+ c
					</Override>
					<Override slot="Text 3-2">
						<Span
							color="--indigo"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							⌥ (Option)
						</Span>
						{" "}+{" "}
						<Span color="--green">
							⌘ (Cmd)
						</Span>
						{" "}+ v
					</Override>
					<Override slot="Text 3-1">
						<Span
							color="--indigo"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Alt
						</Span>
						{" "}+{" "}
						<Span color="--green">
							Ctrl
						</Span>
						{" "}+ v
					</Override>
					<Override slot="Text 4-1">
						<Span color="--green">
							Ctrl
						</Span>
						{" "}+ z
					</Override>
					<Override slot="Text 4-2">
						<Span color="--green">
							⌘ (Cmd)
						</Span>
						{" "}+ z
					</Override>
					<Override slot="Text 5-1">
						<Span
							color="--primary"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Shift
						</Span>
						{" "}+{" "}
						<Span color="--green">
							Ctrl
						</Span>
						{" "}+ z
					</Override>
					<Override slot="Text 5-2">
						<Span
							color="--primary"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							⇧ (Shift)
						</Span>
						{" "}+{" "}
						<Span color="--green">
							⌘ (Cmd)
						</Span>
						{" "}+ z
					</Override>
				</Components.HelpTable>
				<Components.HelpHeader3>
					Input
				</Components.HelpHeader3>
				<Components.HelpHeader4>
					With digital values
				</Components.HelpHeader4>
				<Components.HelpTable
					cols="3"
					rows="8"
					width="100%"
					showHeader
					font="--baseSm"
					color="--darkL2"
					margin="12px 0px 0px 0px"
				>
					<Override slot="Text THead Col-0">
						<Strong>
							Action
						</Strong>
					</Override>
					<Override slot="Text THead Col-1">
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Windows and Linux
						</Strong>
					</Override>
					<Override slot="Text THead Col-2">
						<Strong>
							MacOS
						</Strong>
					</Override>
					<Override slot="Text 0-0">
						Increase by 1
					</Override>
					<Override slot="Text 0-1">
						↑
					</Override>
					<Override slot="Text 1-0">
						Decrease by 1
					</Override>
					<Override slot="Text 1-1">
						↓
					</Override>
					<Override slot="Text 1-2">
						↓
					</Override>
					<Override slot="Text 0-2">
						↑
					</Override>
					<Override slot="Cell" padding="0 1rem 0 1rem" width="33.33%" />
					<Override slot="Text 2-0">
						Increase by 10
					</Override>
					<Override slot="Text 3-0">
						Decrease by 10
					</Override>
					<Override slot="Text 4-0">
						Increase by 0.1
					</Override>
					<Override slot="Text 5-0">
						Decrease by 0.1
					</Override>
					<Override slot="Text 2-1">
						<Span color="--primary">
							Shift
						</Span>
						{" "}+ ↑
					</Override>
					<Override slot="Text 2-2">
						<Span color="--primary">
							⇧ (Shift)
						</Span>
						{" "}+ ↑
					</Override>
					<Override slot="Text 3-2">
						<Span color="--primary">
							⇧ (Shift)
						</Span>
						{" "}+ ↓
					</Override>
					<Override slot="Text 3-1">
						<Span color="--primary">
							Shift
						</Span>
						{" "}+ ↓
					</Override>
					<Override slot="Text 4-1">
						<Span color="--indigo">
							Alt
						</Span>
						{" "}+ ↑
					</Override>
					<Override slot="Text 4-2">
						<Span color="--indigo">
							⌥ (Option)
						</Span>
						{" "}+ ↑
					</Override>
					<Override slot="Text 5-1">
						<Span color="--indigo">
							Alt
						</Span>
						{" "}+ ↓
					</Override>
					<Override slot="Text 5-2">
						<Span color="--indigo">
							⌥ (Option)
						</Span>
						{" "}+ ↓
					</Override>
					<Override slot="Text 6-0">
						Increase by 100
					</Override>
					<Override slot="Text 7-0">
						Decrease by 100
					</Override>
					<Override slot="Text 6-2">
						<Span color="--green">
							⌘ (Cmd)
						</Span>
						{" "}+ ↑
					</Override>
					<Override slot="Text 7-2">
						<Span color="--green">
							⌘ (Cmd)
						</Span>
						{" "}+ ↓
					</Override>
					<Override slot="Text 7-1">
						<Span color="--green">
							Ctrl
						</Span>
						{" "}+ ↓
					</Override>
					<Override slot="Text 6-1">
						<Span color="--green">
							Ctrl
						</Span>
						{" "}+ ↑
					</Override>
				</Components.HelpTable>
				<Components.HelpHeader3>
					View
				</Components.HelpHeader3>
				<Components.HelpTable
					cols="3"
					rows="1"
					showHeader
					color="--darkL2"
					font="--baseSm"
				>
					<Override slot="Text THead Col-0">
						<Strong>
							Action
						</Strong>
					</Override>
					<Override slot="Text THead Col-1">
						<Strong>
							Windows and Linux
						</Strong>
					</Override>
					<Override slot="Text THead Col-2">
						<Strong>
							MacOS
						</Strong>
					</Override>
					<Override slot="Text 0-1">
						<Span color="--green">
							Ctrl
						</Span>
						{" "}+ p
					</Override>
					<Override slot="Text 0-0">
						Preview
					</Override>
					<Override slot="Text 0-2">
						<Span color="--green">
							⌘ (Cmd)
						</Span>
						{" "}+ p
					</Override>
					<Override slot="Cell" padding="0 1rem 0 1rem" width="33.33%" />
				</Components.HelpTable>
				<Components.HelpHeader4>
					Canvas
				</Components.HelpHeader4>
				<Components.HelpTable
					cols="3"
					rows="4"
					showHeader
					color="--darkL2"
					font="--baseSm"
				>
					<Override slot="Text THead Col-0">
						<Strong>
							Action
						</Strong>
					</Override>
					<Override slot="Text THead Col-1">
						<Strong>
							Windows and Linux
						</Strong>
					</Override>
					<Override slot="Text THead Col-2">
						<Strong>
							MacOS
						</Strong>
					</Override>
					<Override slot="Text 0-1">
						<Span color="--green">
							Ctrl
						</Span>
						{" "}+
					</Override>
					<Override slot="Text 0-0">
						Zoom In
					</Override>
					<Override slot="Text 0-2">
						<Span color="--green">
							⌘ (Cmd)
						</Span>
						{" "}+
					</Override>
					<Override slot="Text 1-0">
						Zoom Out
					</Override>
					<Override slot="Text 2-0">
						Actual Size
					</Override>
					<Override slot="Text 3-0">
						Pan
					</Override>
					<Override slot="Text 3-1">
						Space + Drag
					</Override>
					<Override slot="Text 2-1">
						<Span color="--green">
							Ctrl
						</Span>
						{" "}+ 0
					</Override>
					<Override slot="Text 1-1">
						<Span color="--green">
							Ctrl
						</Span>
						{" "}-
					</Override>
					<Override slot="Text 1-2">
						<Span color="--green">
							⌘ (Cmd)
						</Span>
						{" "}-
					</Override>
					<Override slot="Text 2-2">
						<Span color="--green">
							⌘ (Cmd)
						</Span>
						{" "}+ 0
					</Override>
					<Override slot="Text 3-2">
						Space + Drag
					</Override>
					<Override slot="Cell" padding="0 1rem 0 1rem" width="33.33%" />
				</Components.HelpTable>
				<Components.HelpHeader4>
					Panels
				</Components.HelpHeader4>
				<Components.HelpTable
					cols="3"
					rows="4"
					showHeader
					color="--darkL2"
					font="--baseSm"
				>
					<Override slot="Text THead Col-0">
						<Strong>
							Action
						</Strong>
					</Override>
					<Override slot="Text THead Col-1">
						<Strong>
							Windows and Linux
						</Strong>
					</Override>
					<Override slot="Text THead Col-2">
						<Strong>
							MacOS
						</Strong>
					</Override>
					<Override slot="Text 0-1">
						<Span color="--green">
							Ctrl
						</Span>
						{" "}+ \
					</Override>
					<Override slot="Text 0-0">
						Show / Hide All Panels
					</Override>
					<Override slot="Text 0-2">
						<Span color="--green">
							⌘ (Cmd)
						</Span>
						{" "}+ \
					</Override>
					<Override slot="Text 1-0">
						Show / Hide Properties Panel
					</Override>
					<Override slot="Text 2-0">
						Show / Hide Pages & Layers Panel
					</Override>
					<Override slot="Text 3-0">
						Show / Hide Code Editor
					</Override>
					<Override slot="Text 3-1">
						<Span color="--green">
							Ctrl
						</Span>
						{" "}+ 2
					</Override>
					<Override slot="Text 2-1">
						<Span
							color="--green"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Ctrl
						</Span>
						{" "}+ 1
						<br />
						<Span
							color="--primary"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Shift
						</Span>
						{" "}+{" "}
						<Span color="--green">
							Ctrl
						</Span>
						{" "}+ \
					</Override>
					<Override slot="Text 1-1">
						<Span
							color="--primary"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Shift
						</Span>
						{" "}+{" "}
						<Span color="--green">
							Ctrl
						</Span>
						{" "}+ \
					</Override>
					<Override slot="Text 1-2">
						<Span
							color="--primary"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							⇧ (Shift)
						</Span>
						{" "}+{" "}
						<Span color="--green">
							⌘ (Cmd)
						</Span>
						{" "}+ \
					</Override>
					<Override slot="Text 2-2">
						<Span
							color="--green"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							⌘ (Cmd)
						</Span>
						{" "}+ 1
						<br />
						<Span
							color="--primary"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							⇧ (Shift)
						</Span>
						{" "}+{" "}
						<Span color="--green">
							⌘ (Cmd)
						</Span>
						{" "}+ \
					</Override>
					<Override slot="Text 3-2">
						<Span color="--green">
							⌘ (Cmd)
						</Span>
						{" "}+ 1
					</Override>
					<Override slot="Cell" padding="0 1rem 0 1rem" width="33.33%" />
				</Components.HelpTable>
				<Components.HelpHeader3>
					Component
				</Components.HelpHeader3>
				<Components.HelpTable
					cols="3"
					rows="3"
					showHeader
					color="--darkL2"
					font="--baseSm"
				>
					<Override slot="Text THead Col-0">
						<Strong>
							Action
						</Strong>
					</Override>
					<Override slot="Text THead Col-1">
						<Strong>
							Windows and Linux
						</Strong>
					</Override>
					<Override slot="Text THead Col-2">
						<Strong>
							MacOS
						</Strong>
					</Override>
					<Override slot="Text 0-1">
						<Span
							color="--indigo"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Alt
						</Span>
						{" "}+{" "}
						<Span color="--green">
							Ctrl
						</Span>
						{" "}+ k
					</Override>
					<Override slot="Text 0-0">
						Create
					</Override>
					<Override slot="Text 0-2">
						<Span
							color="--indigo"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							⌥ (Option)
						</Span>
						{" "}+{" "}
						<Span color="--green">
							⌘ (Cmd)
						</Span>
						{" "}+ k
					</Override>
					<Override slot="Text 1-0">
						Detach
					</Override>
					<Override slot="Text 2-0">
						Push to Master
					</Override>
					<Override slot="Text 1-2">
						<Span
							color="--indigo"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							⌥ (Option)
						</Span>
						{" "}+{" "}
						<Span color="--green">
							⌘ (Cmd)
						</Span>
						{" "}+ b
					</Override>
					<Override slot="Text 2-2">
						<Span
							color="--indigo"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							⌥ (Option)
						</Span>
						{" "}+{" "}
						<Span color="--green">
							⌘ (Cmd)
						</Span>
						{" "}+ a
					</Override>
					<Override slot="Text 2-1">
						<Span
							color="--indigo"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Alt
						</Span>
						{" "}+{" "}
						<Span color="--green">
							Ctrl
						</Span>
						{" "}+ a
					</Override>
					<Override slot="Text 1-1">
						<Span
							color="--indigo"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Alt
						</Span>
						{" "}+{" "}
						<Span color="--green">
							Ctrl
						</Span>
						{" "}+ b
					</Override>
					<Override slot="Cell" padding="0 1rem 0 1rem" width="33.33%" />
				</Components.HelpTable>
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