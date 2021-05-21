import React from "react";
import { useOverrides } from "@quarkly/components";
import { Span } from "@quarkly/widgets";
const defaultProps = {
	"background": "--color-lightD1",
	"padding": "2px 6px 3px 6px",
	"font": "--baseSm",
	"border-radius": "4px",
	"data-q-widget-type": "PRIMITIVE",
	"overflow-wrap": "normal",
	"word-break": "normal",
	"white-space": "normal",
	"text-indent": "0",
	"text-overflow": "clip",
	"hyphens": "manual",
	"children": "Key"
};
const overrides = {};

const HelpKey = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Span {...rest}>
		{children}
	</Span>;
};

Object.assign(HelpKey, { ...Span,
	defaultProps,
	overrides
});
export default HelpKey;