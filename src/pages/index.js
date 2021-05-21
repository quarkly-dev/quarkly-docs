import React from "react";
import theme from "theme";
import { Theme, Link, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, StackItem, Stack } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly – Design tool for creating websites and web apps.
			</title>
			<meta name={"description"} content={"A unique tool for webmasters, designers and developers. Here you can create websites as quickly as in website builders and as beautifully as in graphic editors."} />
			<meta property={"og:title"} content={"Quarkly – Design tool for creating websites and web apps."} />
			<meta property={"og:description"} content={"A unique tool for webmasters, designers and developers. Here you can create websites as quickly as in website builders and as beautifully as in graphic editors."} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/landing/q-og-1200.png"} />
			<link rel={"shortcut icon"} href={"https://test-upl.quarkly.io/5e60efa12db4d10024432a9f/images/favicon.png?v=2020-09-25T11:53:45.486Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://test-upl.quarkly.io/5e60efa12db4d10024432a9f/images/favicon-152w.png?v=2020-09-25T11:53:45.538Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://test-upl.quarkly.io/5e60efa12db4d10024432a9f/images/favicon-152w.png?v=2020-09-25T11:53:45.538Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://test-upl.quarkly.io/5e60efa12db4d10024432a9f/images/favicon-152w.png?v=2020-09-25T11:53:45.538Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://test-upl.quarkly.io/5e60efa12db4d10024432a9f/images/favicon-152w.png?v=2020-09-25T11:53:45.538Z"} />
			<meta name={"msapplication-TileImage"} content={"https://test-upl.quarkly.io/5e60efa12db4d10024432a9f/images/favicon-270w.png?v=2020-09-25T11:53:45.477Z"} />
			<meta name={"msapplication-TileColor"} content={"#F8FAFF"} />
		</Helmet>
		<Components.MobileMenu />
		<Components.Header />
		<Section background="--color-white" padding="24px 0 64px 0" quarkly-title="Content">
			<Override slot="SectionContent" max-width="760px" />
			<Components.HelpHeader2>
				Documentation
			</Components.HelpHeader2>
			<Components.HelpParagraph>
				ПРИМЕР ТЕКСТА: Добро пожаловать в Quarkly, инструмент для создания сайтов и веб-приложений. Quarkly помогает веб-дизайнерам создавать свои проекты используя различные готовые компоненты и работая совместно с разработчиками в режиме реального времени. Помимо готовых react-компонентов, вы можете создавать свои уникальные компоненты.  Это руководство поможет вам разобраться как это делать.
			</Components.HelpParagraph>
			<Stack
				width="100%"
				gap="12px"
				sm-margin="-6px auto -6px auto"
				flex="1 1 auto"
				height="auto"
				margin="18px -6px -6px -6px"
			>
				<StackItem width="100%">
					<Override
						slot="StackItemContent"
						as="a"
						href="index/welcome-to-quarkly"
						flex-direction="row"
						border-radius="12px"
						hover-background="--color-light"
						border-width="2px"
						border-style="solid"
						border-color="--color-lightD1"
						hover-transition="background-color 0.1s --transitionTimingFunction-easeInOut 0s"
						padding="36px 36px 36px 36px"
						text-decoration-line="initial"
						md-padding="18px 24px 18px 24px"
						sm-flex-direction="column"
					/>
					<Components.HelpGroup>
						<Components.HelpHeader3 margin="0px 0px 0px 0px">
							🖐
Welcome
						</Components.HelpHeader3>
					</Components.HelpGroup>
				</StackItem>
				<StackItem width="100%">
					<Override
						slot="StackItemContent"
						as="a"
						href="index/getting-started"
						target="_blank"
						flex-direction="row"
						border-radius="12px"
						hover-background="--color-light"
						border-width="2px"
						border-style="solid"
						border-color="--color-lightD1"
						hover-transition="background-color 0.1s --transitionTimingFunction-easeInOut 0s"
						padding="36px 36px 36px 36px"
						text-decoration-line="initial"
						md-padding="18px 24px 18px 24px"
						sm-flex-direction="column"
					/>
					<Components.HelpGroup>
						<Components.HelpHeader3 margin="0px 0px 0px 0px">
							🏃‍♀️
Getting Started
						</Components.HelpHeader3>
					</Components.HelpGroup>
				</StackItem>
				<StackItem width="100%">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						border-radius="12px"
						border-width="2px"
						border-style="solid"
						border-color="--color-lightD1"
						padding="36px 36px 36px 36px"
						text-decoration-line="initial"
						md-padding="18px 24px 18px 24px"
						sm-flex-direction="column"
					/>
					<Components.HelpLink text-decoration-line="initial">
						<Components.HelpHeader3 margin="0px 0px 0px 0px" as="a" href="index/interface" text-decoration-line="initial">
							💠 Interface
						</Components.HelpHeader3>
					</Components.HelpLink>
					<Components.HelpListMarked margin="12px 0px 0px 0px" list-style-type="none" display="flex">
						<Components.HelpLink text-decoration-line="initial" margin="8px 12px 12px 0px">
							Dashboard
						</Components.HelpLink>
						<Components.HelpLink text-decoration-line="initial" margin="8px 12px 12px 0px">
							Topbar
						</Components.HelpLink>
						<Components.HelpLink text-decoration-line="initial" margin="8px 12px 12px 0px">
							Work Area
						</Components.HelpLink>
						<Components.HelpLink text-decoration-line="initial" margin="8px 12px 12px 0px">
							Help Button
						</Components.HelpLink>
						<Components.HelpLink text-decoration-line="initial" margin="8px 12px 12px 0px">
							Components
						</Components.HelpLink>
						<Components.HelpLink text-decoration-line="initial" margin="8px 12px 12px 0px">
							Shortcuts
						</Components.HelpLink>
					</Components.HelpListMarked>
				</StackItem>
				<StackItem width="100%">
					<Override
						slot="StackItemContent"
						as="a"
						href="index/tutorials"
						flex-direction="row"
						border-radius="12px"
						hover-background="--color-light"
						border-width="2px"
						border-style="solid"
						border-color="--color-lightD1"
						hover-transition="background-color 0.1s --transitionTimingFunction-easeInOut 0s"
						padding="36px 36px 36px 36px"
						text-decoration-line="initial"
						md-padding="18px 24px 18px 24px"
						sm-flex-direction="column"
					/>
					<Components.HelpGroup>
						<Components.HelpHeader3 margin="0px 0px 0px 0px">
							🎓 Tutorials
						</Components.HelpHeader3>
					</Components.HelpGroup>
				</StackItem>
				<StackItem width="100%">
					<Override
						slot="StackItemContent"
						as="a"
						href="index/how-tos"
						flex-direction="row"
						border-radius="12px"
						hover-background="--color-light"
						border-width="2px"
						border-style="solid"
						border-color="--color-lightD1"
						hover-transition="background-color 0.1s --transitionTimingFunction-easeInOut 0s"
						padding="36px 36px 36px 36px"
						text-decoration-line="initial"
						md-padding="18px 24px 18px 24px"
						sm-flex-direction="column"
					/>
					<Components.HelpGroup>
						<Components.HelpHeader3 margin="0px 0px 0px 0px">
							📋 How-to's
						</Components.HelpHeader3>
					</Components.HelpGroup>
				</StackItem>
				<StackItem width="100%">
					<Override
						slot="StackItemContent"
						as="a"
						href="index/faqs"
						flex-direction="row"
						border-radius="12px"
						hover-background="--color-light"
						border-width="2px"
						border-style="solid"
						border-color="--color-lightD1"
						hover-transition="background-color 0.1s --transitionTimingFunction-easeInOut 0s"
						padding="36px 36px 36px 36px"
						text-decoration-line="initial"
						md-padding="18px 24px 18px 24px"
						sm-flex-direction="column"
					/>
					<Components.HelpGroup>
						<Components.HelpHeader3 margin="0px 0px 0px 0px">
							❓ FAQ's
						</Components.HelpHeader3>
					</Components.HelpGroup>
				</StackItem>
				<StackItem width="100%">
					<Override
						slot="StackItemContent"
						as="a"
						href="index/resources"
						flex-direction="row"
						border-radius="12px"
						hover-background="--color-light"
						border-width="2px"
						border-style="solid"
						border-color="--color-lightD1"
						hover-transition="background-color 0.1s --transitionTimingFunction-easeInOut 0s"
						padding="36px 36px 36px 36px"
						text-decoration-line="initial"
						md-padding="18px 24px 18px 24px"
						sm-flex-direction="column"
					/>
					<Components.HelpGroup>
						<Components.HelpHeader3 margin="0px 0px 0px 0px">
							🧩 Resources
						</Components.HelpHeader3>
					</Components.HelpGroup>
				</StackItem>
			</Stack>
		</Section>
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