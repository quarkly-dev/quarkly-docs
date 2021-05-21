import React from "react";
import theme from "theme";
import { Theme, Link, Section, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index/interface/work-area/adding/primitives/image"} />
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
				<Override slot="Sub Head Text-primitives">
					Primitives
				</Override>
			</Components.SidebarMenu>
			<Section background="--color-white" padding="24px 0 64px 0">
				<Override slot="SectionContent" max-width="760px" />
				<Components.HelpHeader2>
					Image
				</Components.HelpHeader2>
				<Components.HelpGroup>
					<Components.HelpImageBlockCapture>
						<Override slot="helpImageBlock" src="https://test-upl.quarkly.io/607d3473b99fb9001fcbcc16/images/docs-new-workarea-components-primitives-image.png?v=2021-05-16T08:08:44.744Z" />
						<Override slot="text">
							Примитив Image на странице
						</Override>
					</Components.HelpImageBlockCapture>
					<Components.HelpGroup margin="0px 0px 24px 0px">
						<Components.HelpParagraphLead>
							Примитив Image представляет собой изображение.
						</Components.HelpParagraphLead>
						<Components.HelpParagraph>
							В свойствах Image указывается источник изображения, способ кадрирования и выравнивания при кадрировании. Также можно настроить источники для устройств с высокой плотностью пикселей и для различных макетов. Свойство Loading поможет в ускорении загрузки страницы.
						</Components.HelpParagraph>
					</Components.HelpGroup>
					<Components.HelpHeader4>
						Доступные свойства
					</Components.HelpHeader4>
					<Components.HelpTable cols="2" rows="8">
						<Override slot="Text 0-0">
							<Components.HelpParagraph>
								object fit
							</Components.HelpParagraph>
						</Override>
						<Override slot="Text 0-1">
							<Components.HelpParagraph>
								Определяет, как содержимое должно заполнять контейнер относительно его высоты и ширины
							</Components.HelpParagraph>
						</Override>
						<Override slot="Text 1-0">
							<Components.HelpParagraph>
								object position
							</Components.HelpParagraph>
						</Override>
						<Override slot="Text 1-1">
							<Components.HelpParagraph>
								Используется в сочетании с object fit и задаёт положение содержимого внутри контейнера
							</Components.HelpParagraph>
						</Override>
						<Override slot="Text 2-0">
							<Components.HelpParagraph>
								src
							</Components.HelpParagraph>
						</Override>
						<Override slot="Text 2-1">
							<Components.HelpParagraph>
								Ссылка на изображение
							</Components.HelpParagraph>
						</Override>
						<Override slot="Text 3-0">
							<Components.HelpParagraph>
								srcset
							</Components.HelpParagraph>
						</Override>
						<Override slot="Text 3-1">
							<Components.HelpParagraph>
								Список из одной или нескольких строк, разделенных запятыми, определяющий набор возможных изображений для отображения в браузере. Каждая строка списка должна содержать дескриптор ширины или плотности пикселей
							</Components.HelpParagraph>
						</Override>
						<Override slot="Text 4-0">
							<Components.HelpParagraph>
								sizes
							</Components.HelpParagraph>
						</Override>
						<Override slot="Text 4-1">
							<Components.HelpParagraph>
								Список размеров изображений для разных размеров страниц. Он состоит из разделенных запятыми медиа-запросов со значениями ширины изображения
							</Components.HelpParagraph>
						</Override>
						<Override slot="Text 5-0">
							<Components.HelpParagraph>
								alt
							</Components.HelpParagraph>
						</Override>
						<Override slot="Text 5-1">
							<Components.HelpParagraph>
								Альтернативное текстовое описание изображения, будет показано в браузере если изображение не получилось загрузить
							</Components.HelpParagraph>
						</Override>
						<Override slot="Text 6-0">
							<Components.HelpParagraph>
								title
							</Components.HelpParagraph>
						</Override>
						<Override slot="Text 6-1">
							<Components.HelpParagraph>
								Заголовок изображения, будет показан в виде всплывающей подсказки при наведении курсора
							</Components.HelpParagraph>
						</Override>
						<Override slot="Text 7-0">
							<Components.HelpParagraph>
								loading
							</Components.HelpParagraph>
						</Override>
						<Override slot="Text 7-1">
							<Components.HelpParagraph>
								Отложить загрузку изображения за пределами экрана
							</Components.HelpParagraph>
						</Override>
						<Override slot="Column 0" width="120px" />
					</Components.HelpTable>
				</Components.HelpGroup>
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