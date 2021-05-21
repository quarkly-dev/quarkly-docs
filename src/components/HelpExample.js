import React from "react";
import { useOverrides } from "@quarkly/components";
import { Text } from "@quarkly/widgets";
const defaultProps = {
	"background": "--color-lightD1",
	"padding": "12px 24px 16px 24px",
	"border-radius": "8px",
	"margin": "12px 0px 16px 0px",
	"font": "--baseSm",
	"color": "--darkL2",
	"children": "Some text..."
};
const overrides = {};

const HelpExample = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Text {...rest}>
		{children}
	</Text>;
};

Object.assign(HelpExample, { ...Text,
	defaultProps,
	overrides
});
export default HelpExample;