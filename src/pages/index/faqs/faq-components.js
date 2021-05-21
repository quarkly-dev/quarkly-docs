import React from "react";
import theme from "theme";
import { Theme, Link, Strong, Section, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index/faqs/faq-components"} />
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
				<Components.HelpSubheader>
					FAQ
				</Components.HelpSubheader>
				<Components.HelpHeader2 margin="12px 0px 28px 0px">
					Компоненты
				</Components.HelpHeader2>
				<Components.HelpHeader3>
					Компоненты
				</Components.HelpHeader3>
				<Components.HelpGroup
					margin="0px 0px 18px 0px"
					padding="0px 18px 24px 18px"
					border-radius="8px"
					border-width="2px"
					border-style="solid"
					border-color="--color-lightD1"
				>
					<Components.HelpHeader4>
						Что такое «компоненты» и зачем они мне?
					</Components.HelpHeader4>
					<Components.HelpParagraph>
						Своими компонентами могут быть отдельные элементы или их группы с определенными значениями пропсов и содержимым (например, блок из изображения, текста и кнопки). Они ускоряют и упрощают дизайн, позволяют сделать его целостным.
					</Components.HelpParagraph>
				</Components.HelpGroup>
				<Components.HelpGroup
					margin="0px 0px 18px 0px"
					padding="0px 18px 24px 18px"
					border-radius="8px"
					border-width="2px"
					border-style="solid"
					border-color="--color-lightD1"
				>
					<Components.HelpHeader4>
						Как можно создать свой компонент?
					</Components.HelpHeader4>
					<Components.HelpParagraph>
						Чтобы создать новый компонент:
					</Components.HelpParagraph>
					<Components.HelpListMarked margin="4px 0px 12px 0px">
						<Components.HelpParagraph>
							<Strong>
								Способ 1:
							</Strong>
							{" "}Нажмите «+» на панели добавления в разделе «Components»
						</Components.HelpParagraph>
						<Components.HelpParagraph>
							<Strong>
								Способ 2:
							</Strong>
							{" "}Откройте модальное окно добавления компонента, перейдите в раздел «Components» и нажмите кнопку «Create for Project»
						</Components.HelpParagraph>
					</Components.HelpListMarked>
					<Components.HelpParagraph>
						Чтобы создать новый компонент из существующего на странице элемента:
					</Components.HelpParagraph>
					<Components.HelpListMarked>
						<Components.HelpParagraph>
							<Strong
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								Способ 1:
							</Strong>
							{" "}Выберите элемент на странице, вызовите контекстное меню и там пункт «Create New Component»
						</Components.HelpParagraph>
						<Components.HelpParagraph>
							<Strong
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								Способ 2:
							</Strong>
							{" "}Выберите элемент на панели слоев, вызовите контекстное меню и там пункт «Create New Component»
						</Components.HelpParagraph>
					</Components.HelpListMarked>
				</Components.HelpGroup>
				<Components.HelpGroup
					margin="0px 0px 18px 0px"
					padding="0px 18px 24px 18px"
					border-radius="8px"
					border-width="2px"
					border-style="solid"
					border-color="--color-lightD1"
				>
					<Components.HelpHeader4>
						Я добавил несколько копий своего компонента на холст, как мне изменить их все сразу?
					</Components.HelpHeader4>
					<Components.HelpParagraph>
						Есть несколько способов. Первый способ это изменить любую копию компонента и нажать кнопку Push to Master. Это действие отправит изменения в “мастер-компонент” и изменит все копии компонента (если они сами не были изменены). Второй способ это переключить копию компонента в режим “мастер-компонента” и произвести нужные изменения. Третий способ это открыть компонент в коде и изменить нужные значения там.{" "}
					</Components.HelpParagraph>
				</Components.HelpGroup>
				<Components.HelpGroup
					margin="0px 0px 18px 0px"
					padding="0px 18px 24px 18px"
					border-radius="8px"
					border-width="2px"
					border-style="solid"
					border-color="--color-lightD1"
				>
					<Components.HelpHeader4>
						Может ли мой компонент содержать другие мои компоненты?
					</Components.HelpHeader4>
					<Components.HelpParagraph>
						Да может, и он будет автообновляемым. То есть если дочерние компоненты будут изменятся, в родительском тоже будут показываться изменения.
					</Components.HelpParagraph>
				</Components.HelpGroup>
				<Components.HelpGroup
					margin="0px 0px 18px 0px"
					padding="0px 18px 24px 18px"
					border-radius="8px"
					border-width="2px"
					border-style="solid"
					border-color="--color-lightD1"
				>
					<Components.HelpHeader4>
						Могу ли я превратить копию своего компонента в обычные системные элементы?
					</Components.HelpHeader4>
					<Components.HelpParagraph>
						Да, для этого есть команда Detach. Однако это работает только с компонентами сделанными из элементов на странице.
					</Components.HelpParagraph>
				</Components.HelpGroup>
				<Components.HelpGroup
					margin="0px 0px 18px 0px"
					padding="0px 18px 24px 18px"
					border-radius="8px"
					border-width="2px"
					border-style="solid"
					border-color="--color-lightD1"
				>
					<Components.HelpHeader4>
						Если я изменил внешний вид копии своего компонента, могу ли я сбросить изменения, и вернуть версию мастер-компонента?
					</Components.HelpHeader4>
					<Components.HelpParagraph>
						Да, для этого есть команда Reset Overrides и команда Reset All Overrides. Отличие в том, что Reset Overrides сбрасывает изменения только компонента-родителя, а Reset All Overrides сбрасывает изменения ещё и вложенных компонентов.
					</Components.HelpParagraph>
				</Components.HelpGroup>
				<Components.HelpGroup
					margin="0px 0px 18px 0px"
					padding="0px 18px 24px 18px"
					border-radius="8px"
					border-width="2px"
					border-style="solid"
					border-color="--color-lightD1"
				>
					<Components.HelpHeader4>
						Я хотел бы иметь возможность делать из измененного своего компонента другой свой компонент? Возможно ли такое?
					</Components.HelpHeader4>
					<Components.HelpParagraph>
						Да, вы можете изменить компонент и сделать на его основе другой свой компонент командой Create New Component.
					</Components.HelpParagraph>
				</Components.HelpGroup>
				<Components.HelpGroup
					margin="0px 0px 18px 0px"
					padding="0px 18px 24px 18px"
					border-radius="8px"
					border-width="2px"
					border-style="solid"
					border-color="--color-lightD1"
				>
					<Components.HelpHeader4>
						Могу ли я изменить вложенный элемент внутри копии своего компонента, и отправить в мастер-компонент эти и только эти изменения?
					</Components.HelpHeader4>
					<Components.HelpParagraph>
						Да, выберите измененный вложенный элемент, и нажмите команду Push to Master у этого элемента. Если же вы хотите обновить мастер-компонент и все его вложенные компоненты, то выберите у родителя копии Push All to Master.
					</Components.HelpParagraph>
				</Components.HelpGroup>
				<Components.HelpGroup
					margin="0px 0px 18px 0px"
					padding="0px 18px 24px 18px"
					border-radius="8px"
					border-width="2px"
					border-style="solid"
					border-color="--color-lightD1"
				>
					<Components.HelpHeader4>
						Могу ли я вкладывать в копию своего компонента другие компоненты? При этом в мастер-компонент я не хочу их отправлять. Например, в одной форме мне нужно добавить два дополнительных поля.{" "}
					</Components.HelpHeader4>
					<Components.HelpParagraph>
						<br />
						<br />
						Да, вы можете добавлять в копию своего компонента другие элементы/компоненты, но только после всех элементов или перед ними.
					</Components.HelpParagraph>
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