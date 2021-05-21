import React from "react";
import theme from "theme";
import { Theme, Link, Strong, Em, Section, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index/interface/component"} />
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
				<Override slot="Sub Head Text-code-editor" />
				<Override slot="Sub Head Text-custom-code" />
				<Override slot="Sub Head Text-project-settings" />
				<Override slot="Sub Head Text-theme" />
				<Override slot="Sub Head Text-view-bar" />
			</Components.SidebarMenu>
			<Section background="--color-white" padding="24px 0 64px 0">
				<Override slot="SectionContent" max-width="760px" />
				<Components.HelpHeader2>
					Components
				</Components.HelpHeader2>
				<Components.HelpImageBlock src="https://test-upl.quarkly.io/5e60efa12db4d10024432a9f/images/docs-pages-and-layers-components.png?v=2020-11-06T17:29:03.086Z" />
				<Components.HelpParagraph>
					This is where you'll find all the available components. They make it easier and faster to create a website design as they contain ready-to-use styles, content, and logic. In addition, components can be nested within other components.
				</Components.HelpParagraph>
				<Components.HelpHeader3>
					How to Add a Component
				</Components.HelpHeader3>
				<Components.HelpImageBlock src="https://test-upl.quarkly.io/5e60efa12db4d10024432a9f/images/docs-interface-page-elements-add-new.png?v=2020-11-06T18:13:08.784Z" />
				<Components.HelpParagraph>
					There are several ways to add the component you need to your page. You may want to grab it from the panel with the mouse and drop it in the desired place. If you left-click a component, it is added to the bottom of the page. Also, you can click on the  “+” button on the block to add a component.
				</Components.HelpParagraph>
				<Components.HelpHeader3>
					About props
				</Components.HelpHeader3>
				<Components.HelpParagraph>
					To ensure flexibility, components come with props (properties) — through them, you can manage and configure settings. For example, the GoogleMap component contains the “query” property where you can enter the address of the marker that you’d like to appear on the map. A component may have various props, and they’re all very easy to use.
				</Components.HelpParagraph>
				<Components.HelpHeader3>
					Component copies synchronization
				</Components.HelpHeader3>
				<Components.HelpParagraph>
					Another important feature is that all copies of the component are synchronized on the page, so if you change something in the original code of a component, all of its copies will change too. This is useful when a component is repeated on all pages, for example, a header or a footer.
				</Components.HelpParagraph>
				<Components.HelpHeader3>
					System components
				</Components.HelpHeader3>
				<Components.HelpParagraph>
					There are 2 types of components:{" "}
					<Strong font="600 18px/27px &quot;Source Sans Pro&quot;, sans-serif">
						system
					</Strong>
					{" "}and{" "}
					<Strong font="600 18px/27px &quot;Source Sans Pro&quot;, sans-serif">
						custom
					</Strong>
					.
				</Components.HelpParagraph>
				<Components.HelpImageBlock src="https://test-upl.quarkly.io/5e60efa12db4d10024432a9f/images/docs-components-library.png?v=2020-11-06T18:23:44.504Z" />
				<Components.HelpParagraph>
					The system ones consist of:
				</Components.HelpParagraph>
				<Components.HelpListMarked>
					<Components.HelpListItem>
						Primitives
					</Components.HelpListItem>
					<Components.HelpListItem>
						Quarkly UI component library
					</Components.HelpListItem>
				</Components.HelpListMarked>
				<Components.HelpParagraph>
					Primitives are the simplest, most basic components for a wide variety of tasks. Quarkly UI components are the more complex, composite components designed for specific tasks.
				</Components.HelpParagraph>
				<Components.HelpHeader3>
					Custom components (created by users)
				</Components.HelpHeader3>
				<Components.HelpImageBlock src="https://test-upl.quarkly.io/5e60efa12db4d10024432a9f/images/docs-components-custom.png?v=2020-11-06T18:23:19.976Z" />
				<Components.HelpHeader4>
					About custom components
				</Components.HelpHeader4>
				<Components.HelpParagraph>
					Custom components are needed when you would like to create your own component from elements on the page or configure it in the code. Components created from page elements come with an interesting option — if you change one copy of this component, you can also change other copies accordingly using the “Push to Master” command. Custom components, just like the other, have the props panel with style and functional properties. Inner properties of custom components can be transferred to the props panel and, will appear under the “Props” section. In custom components, it’s also possible to import other components and modules from{" "}
					<Link href="https://beta.quarkly.io/preview#/docs/getting-started11/interface#interface-context-menu" color="--link" hover-border-color="--color-linkHover">
						NPM
					</Link>
					.
				</Components.HelpParagraph>
				<Components.HelpHeader4>
					Context menu for a component
				</Components.HelpHeader4>
				<Components.HelpImageBlock src="https://uploads.quarkly.io/landing/docs-components-context-menu.png" />
				<Components.HelpParagraph>
					You can open the{" "}
					<Link href="https://beta.quarkly.io/preview#/docs/getting-started11/interface#interface-context-menu" color="--link" hover-border-color="--color-linkHover">
						context menu
					</Link>
					{" "}for a component. The menu contains a list of actions you can do to the component. To open it, mouse over the component and right-click on it.
				</Components.HelpParagraph>
				<Components.HelpHeader4>
					Creating a Component on a Page
				</Components.HelpHeader4>
				<Components.HelpImageBlock src="https://test-upl.quarkly.io/5e60efa12db4d10024432a9f/images/docs-components-custom-design-create.png?v=2020-11-06T18:49:56.326Z" />
				<Components.HelpParagraph>
					Choose any element (just one, but it can contain others) on a page, click “...” on the props panel and choose “Convert to Component”. In addition, a component can be created with a combination of keys: cmd(ctrl) + alt + k. After that, a window for entering a component name will appear. Type in a unique name and click “Save”.
				</Components.HelpParagraph>
				<Components.HelpHeader4>
					Detaching a component (transforming back into an element)
				</Components.HelpHeader4>
				<Components.HelpImageBlock src="https://test-upl.quarkly.io/5e60efa12db4d10024432a9f/images/docs-components-custom-design-detach.png?v=2020-11-06T18:49:19.036Z" />
				<Components.HelpParagraph>
					A custom component can be transformed back into the element or group of elements it was created from. To do this, you need to choose only one component, click “...” on the props panel and choose “Detach”. This action can also be performed by pressing the combination of keys: cmd(ctrl) + alt + b.
				</Components.HelpParagraph>
				<Components.HelpHeader4>
					Overrides
				</Components.HelpHeader4>
				<Components.HelpParagraph>
					You can change the styles and content of a parent element as well as all children elements of a custom component. These changes are called overrides.
				</Components.HelpParagraph>
				<Components.HelpHeader4>
					Reset Overrides and Reset All Overrides
				</Components.HelpHeader4>
				<Components.HelpImageBlock src="https://test-upl.quarkly.io/5e60efa12db4d10024432a9f/images/docs-components-custom-design-reset-overrides.png?v=2020-11-06T18:48:57.081Z" />
				<Components.HelpParagraph>
					If you changed a custom component and then decide to go back to its original version (Master), use the reset option. Choose only one component, click on the “...” button and select “Reset Overrides”. If you want to reset the changes for all elements, both parent and children, click “Reset All Overrides”.
				</Components.HelpParagraph>
				<Components.HelpHeader4>
					Push to Master and Push All to Master
				</Components.HelpHeader4>
				<Components.HelpImageBlock src="https://test-upl.quarkly.io/5e60efa12db4d10024432a9f/images/docs-components-custom-design-push-to-master.png?v=2020-11-06T18:48:16.914Z" />
				<Components.HelpParagraph>
					If you changed a custom component and would like to apply the change to all copies of this component, use the command for sending changes to Master. To do this, choose only one component, click on the “...” on the props panel and choose “Push to Master”. If you want to send the changes of a parent element and all children elements to Master, click “Push All to Master”.
				</Components.HelpParagraph>
				<Components.HelpParagraph>
					<Em>
						Important!
					</Em>
					{" "}When you use “Push to Master” and “Push All to Master”, all changed styles in the copies will be preserved (those that contain overrides). The styles will be changed only in those copies that you didn’t edit.
				</Components.HelpParagraph>
				<Components.HelpHeader4>
					Save as New Component
				</Components.HelpHeader4>
				<Components.HelpImageBlock src="https://test-upl.quarkly.io/5e60efa12db4d10024432a9f/images/docs-components-custom-design-save-as-new.png?v=2020-11-06T18:47:58.247Z" />
				<Components.HelpParagraph>
					You can create a new custom component using the existing custom component. To do this, you need to choose only one component, click “...” on the props panel and select “Save as New Component”.
				</Components.HelpParagraph>
				<Components.HelpHeader4>
					Creating a Component in the Code Editor
				</Components.HelpHeader4>
				<Components.HelpImageBlock src="https://test-upl.quarkly.io/5e60efa12db4d10024432a9f/images/docs-components-custom-code-create.png?v=2020-11-06T18:47:39.681Z" />
				<Components.HelpParagraph>
					To create a code component, click on the “+” button. You should be familiar with JavaScript and React.js. Once you’ve chosen the component name, the code editor will open, and you’ll see a default component. Code components allow:
				</Components.HelpParagraph>
				<Components.HelpListMarked>
					<Components.HelpListItem>
						Setting up any kind of content.
					</Components.HelpListItem>
					<Components.HelpListItem>
						Styling content however you like.
					</Components.HelpListItem>
					<Components.HelpListItem>
						Configuring any logic.
					</Components.HelpListItem>
					<Components.HelpListItem>
						Connecting{" "}
						<Link href="https://beta.quarkly.io/preview#/docs/getting-started11/https://www.npmjs.com/">
							NPM
						</Link>
						{" "}dependencies.
					</Components.HelpListItem>
					<Components.HelpListItem>
						Connecting primitives and Quarkly UI components.
					</Components.HelpListItem>
					<Components.HelpListItem>
						Defining props (properties) for a component.
					</Components.HelpListItem>
					<Components.HelpListItem>
						Connecting to any external databases or API.
					</Components.HelpListItem>
				</Components.HelpListMarked>
				<Components.HelpParagraph>
					To edit a component in the code editor, click on the “&lt;&gt;” button.
				</Components.HelpParagraph>
				<Components.HelpHeader4>
					How to connect an NPM module in components
				</Components.HelpHeader4>
				<Components.HelpImageBlock src="https://uploads.quarkly.io/landing/docs-components-custom-code-npm-module.png" />
				<Components.HelpParagraph>
					To connect a module, just import it into the component, as if it had been already installed.
				</Components.HelpParagraph>
				<Components.HelpParagraph>
					Example code:
				</Components.HelpParagraph>
				<Components.HelpCodeBlock code="import Particles from &quot;react-particles-js&quot;;" />
				<Components.HelpHeader4>
					Importing atomize
				</Components.HelpHeader4>
				<Components.HelpParagraph>
					Atomize is a library for creating Quarkly components.
					<br />
					To make your React component work, you need to wrap it and define the object with the following configuration:
				</Components.HelpParagraph>
				<Components.HelpCodeBlock code="const Dasdas = props => <div {...props}>Say hello Dasdas</div>\n\nexport default atomize(Dasdas)({\n name: &quot;Dasdas&quot;,\n effects: {\n   hover: &quot;:hover&quot;\n },\n normalize: true,\n mixins: true,\n description: {\n   // paste here the description for your component\n   en:\n     &quot;Dasdas — my awesome component&quot;,\n },\n\n propInfo: {\n   // paste here the props description for your component\n   yourCustomProps: {\n     description: {en: 'test'},\n     control: &quot;input&quot;\n   }\n }\n});" />
				<Components.HelpParagraph>
					Component configuration fields:
				</Components.HelpParagraph>
				<Components.HelpListMarked>
					<Components.HelpListItem>
						Effects. Defines browser pseudo-classes (hover, focus, etc).
					</Components.HelpListItem>
					<Components.HelpListItem>
						Description. Defines the component description that shows up when hovering the mouse cursor over its name.
					</Components.HelpListItem>
					<Components.HelpListItem>
						PropInfo. Configures controls that will be displayed on the right panel (props tab).
					</Components.HelpListItem>
				</Components.HelpListMarked>
				<Components.HelpHeader4>
					How to display required properties on the props panel
				</Components.HelpHeader4>
				<Components.HelpParagraph>
					Here’s how to define properties that will be displayed on the right panel (props tab):
				</Components.HelpParagraph>
				<Components.HelpCodeBlock code="propInfo: {\n   yourCustomProps: { // property name\n       description: { en: &quot;test&quot; }, // locale-specific description\n       control: &quot;input&quot; // control type\n   }\n}" />
				<Components.HelpParagraph>
					Possible control types:
				</Components.HelpParagraph>
				<Components.HelpListMarked>
					<Components.HelpListItem>
						input
					</Components.HelpListItem>
					<Components.HelpListItem>
						text-area
					</Components.HelpListItem>
					<Components.HelpListItem>
						select
					</Components.HelpListItem>
					<Components.HelpListItem>
						color
					</Components.HelpListItem>
					<Components.HelpListItem>
						image
					</Components.HelpListItem>
					<Components.HelpListItem>
						font
					</Components.HelpListItem>
					<Components.HelpListItem>
						shadow
					</Components.HelpListItem>
					<Components.HelpListItem>
						transition
					</Components.HelpListItem>
					<Components.HelpListItem>
						transform
					</Components.HelpListItem>
					<Components.HelpListItem>
						filter
					</Components.HelpListItem>
					<Components.HelpListItem>
						background
					</Components.HelpListItem>
					<Components.HelpListItem>
						checkbox-icon
					</Components.HelpListItem>
					<Components.HelpListItem>
						radio-icon
					</Components.HelpListItem>
					<Components.HelpListItem>
						radio-group
					</Components.HelpListItem>
					<Components.HelpListItem>
						checkbox
					</Components.HelpListItem>
				</Components.HelpListMarked>
				<Components.HelpHeader4>
					How to import primitives into your custom component
				</Components.HelpHeader4>
				<Components.HelpCodeBlock code="import { PrimitiveComponentName } from &quot;@quarkly/widgets&quot;;" />
				<Components.HelpHeader4>
					How to import components from Quarkly UI into your custom component
				</Components.HelpHeader4>
				<Components.HelpCodeBlock code="import { QuarklyUIComponentName } from &quot;@quarkly/components&quot;;" />
				<Components.HelpHeader4>
					How to import your components into other custom components you have
				</Components.HelpHeader4>
				<Components.HelpCodeBlock code="import MyComponent from &quot;./MyComponent&quot;;" />
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