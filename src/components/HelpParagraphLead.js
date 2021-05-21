import React from "react";
import { useOverrides } from "@quarkly/components";
import { Text } from "@quarkly/widgets";
const defaultProps = {
	"font": "normal 500 21px/1.5 --fontFamily-googleSourceSansPro",
	"color": "--dark",
	"sm-font": "--h3Sm",
	"margin": "16px 0px 8px 0px",
	"children": "Some text..."
};
const overrides = {};

const HelpParagraphLead = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Text {...rest}>
		{children}
	</Text>;
};

Object.assign(HelpParagraphLead, { ...Text,
	defaultProps,
	overrides
});
export default HelpParagraphLead;