import React from "react";
import theme from "theme";
import { Theme, Link, Text, Section, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index/getting-started"} />
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
				<Override slot="Link :open" />
				<Override slot="Link :active" />
				<Override slot="Link" />
				<Override slot="Sub Head" />
				<Override slot="Sub Head Icon" />
				<Override slot="Sub Body" />
				<Override slot="Sub Head Text" />
				<Override slot="Sub Head Text :open" />
				<Override slot="Sub Head Text-code-editor1" />
				<Override slot="Sub Head Text-code-editor12" />
				<Override slot="Sub Head Text-code-editor122111" />
				<Override slot="Sub Head Text-code-editor1221121" />
				<Override slot="Sub Head Text-code-editor12211212" />
				<Override slot="Wrapper" />
			</Components.SidebarMenu>
			<Section background="--color-white" padding="24px 0 64px 0">
				<Override slot="SectionContent" max-width="760px" />
				<Text font="--h2" color="--darkL2" sm-font="--h2Sm" margin="32px 0px 16px 0px">
					Getting Started
				</Text>
				<Components.HelpListNumbered>
					<Components.HelpListGroup>
						<Components.HelpParagraph>
							После авторизации вы попадаете в Dashboard. Для вас автоматически создаются 2 проекта: Onboarding Tutorial — который научит основам работы в Quarkly, и Website Example — пример готового сайта.
						</Components.HelpParagraph>
						<Components.HelpImageBlock src="https://test-upl.quarkly.io/5e60efa12db4d10024432a9f/images/quarkly-getting-started-dashboard-default.png?v=2021-03-17T10:41:49.590Z" />
					</Components.HelpListGroup>
					<Components.HelpListGroup>
						<Components.HelpParagraph>
							Создайте новый Quarkly проект, для этого нажмите на карточку с кнопкой “+” и введите имя проекта.
						</Components.HelpParagraph>
						<Components.HelpImageBlock src="https://test-upl.quarkly.io/5e60efa12db4d10024432a9f/images/quarkly-getting-started-dashboard-create-new-one.png?v=2021-03-17T10:46:09.156Z" />
					</Components.HelpListGroup>
					<Components.HelpListGroup>
						<Components.HelpParagraph>
							Теперь перейдите в проект, для этого кликните по нему или вызовите контекстное меню и выберите пункт "Open"
						</Components.HelpParagraph>
						<Components.HelpImageBlock src="https://test-upl.quarkly.io/5e60efa12db4d10024432a9f/images/quarkly-getting-started-dashboard-opening.png?v=2021-03-17T10:48:22.554Z" />
					</Components.HelpListGroup>
					<Components.HelpListGroup>
						<Components.HelpParagraph>
							Вы находитесь в интерфейсе визуального редактора.  Чтобы переименовать проект или дать доступ к нему другим участникам, откройте меню настроек проекта.
						</Components.HelpParagraph>
						<Components.HelpImageBlock src="https://test-upl.quarkly.io/5e60efa12db4d10024432a9f/images/quarkly-getting-started-interface-project-actions.png?v=2021-03-17T10:49:22.532Z" />
					</Components.HelpListGroup>
					<Components.HelpListGroup>
						<Components.HelpParagraph>
							Добавьте готовый блок в макет, нажав кнопку “+” в центре страницы
						</Components.HelpParagraph>
						<Components.HelpImageBlock src="https://test-upl.quarkly.io/5e60efa12db4d10024432a9f/images/quarkly-getting-started-interface-add-block.png?v=2021-03-17T10:50:30.525Z" />
					</Components.HelpListGroup>
					<Components.HelpListGroup>
						<Components.HelpParagraph>
							Выберите понравившийся блок и кликните на него
						</Components.HelpParagraph>
						<Components.HelpImageBlock src="https://test-upl.quarkly.io/5e60efa12db4d10024432a9f/images/quarkly-getting-started-interface-choose-block.png?v=2021-03-17T10:51:01.337Z" />
					</Components.HelpListGroup>
					<Components.HelpListGroup>
						<Components.HelpParagraph>
							Теперь выберем текстовый элемент на странице. Кликните по нему зажав Ctrl, или ⌘ (Cmd) на MacOS. Такой выбор позволяет выбирать элементы минуя все родительские. Еще можно выбирать дочерние элементы двойным кликом.
						</Components.HelpParagraph>
						<Components.HelpImageBlock src="https://test-upl.quarkly.io/5e60efa12db4d10024432a9f/images/quarkly-getting-started-interface-select-element.png?v=2021-03-17T10:52:49.421Z" />
					</Components.HelpListGroup>
					<Components.HelpListGroup>
						<Components.HelpParagraph>
							Измените цвет текста в правой панели свойств
						</Components.HelpParagraph>
						<Components.HelpImageBlock src="https://test-upl.quarkly.io/5e60efa12db4d10024432a9f/images/quarkly-getting-started-interface-edit-font-color.png?v=2021-03-17T10:58:09.438Z" />
					</Components.HelpListGroup>
					<Components.HelpListGroup>
						<Components.HelpParagraph>
							Отредактируйте текст. Для этого кликните два раза по тексту в выбранном элементе
						</Components.HelpParagraph>
						<Components.HelpImageBlock src="https://test-upl.quarkly.io/5e60efa12db4d10024432a9f/images/quarkly-getting-started-interface-edit-text.png?v=2021-03-17T11:01:09.820Z" />
					</Components.HelpListGroup>
					<Components.HelpListGroup>
						<Components.HelpParagraph>
							В Quarkly вы можете создавать страницы, для этого откройте панель Pages and Layers
						</Components.HelpParagraph>
						<Components.HelpImageBlock src="https://test-upl.quarkly.io/5e60efa12db4d10024432a9f/images/quarkly-getting-started-interface-pages-and-layers.png?v=2021-03-17T11:02:36.412Z" />
					</Components.HelpListGroup>
					<Components.HelpListGroup>
						<Components.HelpParagraph>
							Чтобы добавить элемент, перейдите во вкладку Components. Здесь есть как примитивные компоненты так и сложные. Ещё здесь можно создавать свои компоненты.
						</Components.HelpParagraph>
						<Components.HelpImageBlock src="https://test-upl.quarkly.io/5e60efa12db4d10024432a9f/images/quarkly-getting-started-interface-components.png?v=2021-03-17T11:05:01.092Z" />
					</Components.HelpListGroup>
					<Components.HelpListGroup>
						<Components.HelpParagraph>
							Просто перетяните в нужное место компонент, и он станет частью страницы
						</Components.HelpParagraph>
						<Components.HelpImageBlock src="https://test-upl.quarkly.io/5e60efa12db4d10024432a9f/images/quarkly-getting-started-interface-add-new-element.png?v=2021-03-17T11:07:26.198Z" />
					</Components.HelpListGroup>
					<Components.HelpListGroup>
						<Components.HelpParagraph>
							Опубликуем проект. Чтобы начать публикацию, нажмите кнопку “Publish”
						</Components.HelpParagraph>
						<Components.HelpImageBlock src="https://test-upl.quarkly.io/5e60efa12db4d10024432a9f/images/quarkly-getting-started-interface-publish-button.png?v=2021-03-17T11:09:02.324Z" />
					</Components.HelpListGroup>
					<Components.HelpListGroup>
						<Components.HelpParagraph>
							Подключите GitHub-аккаунт для экспорта проекта в репозиторий
						</Components.HelpParagraph>
						<Components.HelpImageBlock src="https://test-upl.quarkly.io/5e60efa12db4d10024432a9f/images/quarkly-getting-started-interface-publication-window.png?v=2021-03-17T11:10:30.934Z" />
					</Components.HelpListGroup>
					<Components.HelpListGroup>
						<Components.HelpParagraph>
							Выберите опцию "New repository", введите название и нажмите кнопку "Create repository"
						</Components.HelpParagraph>
						<Components.HelpImageBlock src="https://test-upl.quarkly.io/5e60efa12db4d10024432a9f/images/quarkly-getting-started-interface-destination-new-repository.png?v=2021-03-17T11:11:31.673Z" />
					</Components.HelpListGroup>
					<Components.HelpListGroup>
						<Components.HelpParagraph>
							После подключения репозитория, подключите Netlify-аккаунт
						</Components.HelpParagraph>
						<Components.HelpImageBlock src="https://test-upl.quarkly.io/5e60efa12db4d10024432a9f/images/quarkly-getting-started-interface-publication-netlify.png?v=2021-03-17T11:12:38.374Z" />
					</Components.HelpListGroup>
					<Components.HelpListGroup>
						<Components.HelpParagraph>
							Выберите опцию "New website" и нажмите кнопку "Create website"
						</Components.HelpParagraph>
						<Components.HelpImageBlock src="https://test-upl.quarkly.io/5e60efa12db4d10024432a9f/images/quarkly-getting-started-interface-publication-netlify-new-site.png?v=2021-03-17T11:13:35.930Z" />
					</Components.HelpListGroup>
					<Components.HelpListGroup>
						<Components.HelpParagraph>
							Нажмите кнопку Deploy to Netlify чтобы начать сборку
						</Components.HelpParagraph>
						<Components.HelpImageBlock />
					</Components.HelpListGroup>
					<Components.HelpListGroup>
						<Components.HelpParagraph>
							Процесс сборки проекта занимает несколько минут. Как только бейдж станет Success, это будет означать что проект опубликован и доступен по ссылке.
						</Components.HelpParagraph>
						<Components.HelpImageBlock />
					</Components.HelpListGroup>
					<Components.HelpListGroup>
						<Components.HelpParagraph>
							Кликните на ссылку чтобы открыть опубликованный проект.
						</Components.HelpParagraph>
						<Components.HelpImageBlock />
					</Components.HelpListGroup>
				</Components.HelpListNumbered>
				<Components.HelpParagraph>
					Поздравляем вы сделали и опубликовали свой первый проекта на Quarkly.
				</Components.HelpParagraph>
				<Components.HelpPrevNextButton>
					<Override slot="Button Icon" />
					<Override slot="Button" />
					<Override slot="Button :next" />
					<Override slot="Button Name" />
					<Override slot="Button Link" />
					<Override slot="Button :prev" />
				</Components.HelpPrevNextButton>
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