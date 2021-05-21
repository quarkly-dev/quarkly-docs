import React from "react";
import { useOverrides } from "@quarkly/components";
import { Image } from "@quarkly/widgets";
const defaultProps = {
	"width": "32px",
	"height": "32px",
	"src": "https://uploads.quarkly.io/landing/docs-theme-variables-icon.svg?v=1",
	"margin": "-10px 0px 0px 0px",
	"position": "relative",
	"top": "8px"
};
const overrides = {};

const HelpImageInline = props => {
	const {
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Image {...rest} />;
};

Object.assign(HelpImageInline, { ...Image,
	defaultProps,
	overrides
});
export default HelpImageInline;