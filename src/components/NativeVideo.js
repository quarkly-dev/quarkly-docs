import React, { useRef, useCallback } from "react";
import atomize from "@quarkly/atomize";

const Wrapper = ({
	src,
	poster,
	width,
	height,
	...props
}) => {
	const ref = useRef(null);
	const handleEnter = useCallback(() => ref.current.play(), []);
	const handleLeave = useCallback(() => ref.current.pause(), []);
	return <div {...props} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
		      
		<video
			width={width}
			height={height}
			ref={ref}
			src={src}
			poster={poster}
		/>
		    
	</div>;
};

const Video = atomize(Wrapper)({
	name: "Video",
	normalize: true,
	mixins: true,
	propInfo: {
		src: {
			category: "Main",
			weight: 1,
			control: "input"
		},
		poster: {
			category: "Main",
			weight: 1,
			control: "input"
		}
	}
});
Video.defaultProps = {
	maxWidth: "600px",
	width: "100%",
	maxHeight: "400px"
};
export default Video;