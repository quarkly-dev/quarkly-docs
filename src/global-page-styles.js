import React from "react";
import { transformVar } from "@quarkly/atomize";
import { createGlobalStyle } from "styled-components";

const pageStyles = {
    "404": {
        "background": "--color-darkL1"
    },
    "index": {
        "background": "--color-darkL1"
    },
    "index/welcome-to-quarkly": {
        "background": "--color-darkL1"
    },
    "index/getting-started": {},
    "index/interface": {
        "background": "--color-darkL1"
    },
    "index/interface/dashboard": {},
    "index/interface/dashboard/new-project": {},
    "index/interface/dashboard/open-project": {},
    "index/interface/dashboard/remove-project": {},
    "index/interface/dashboard/restore-project": {},
    "index/interface/dashboard/delete-project": {},
    "index/interface/topbar": {},
    "index/interface/topbar/share-project": {},
    "index/interface/topbar/preview": {},
    "index/interface/topbar/publish": {},
    "index/interface/topbar/publish/structure": {},
    "index/interface/topbar/publish/destination": {},
    "index/interface/topbar/publish/publishing-to-netlify": {},
    "index/interface/topbar/publish/domain-name": {},
    "index/interface/topbar/account-settings": {},
    "index/interface/work-area": {},
    "index/interface/work-area/view-bar": {},
    "index/interface/work-area/view-bar/zoom": {},
    "index/interface/work-area/view-bar/page-resolution": {},
    "index/interface/work-area/view-bar/breakpoints": {},
    "index/interface/work-area/adding": {},
    "index/interface/work-area/adding/primitives": {},
    "index/interface/work-area/adding/primitives/box": {},
    "index/interface/work-area/adding/primitives/button": {},
    "index/interface/work-area/adding/primitives/hr": {},
    "index/interface/work-area/adding/primitives/icon": {},
    "index/interface/work-area/adding/primitives/image": {},
    "index/interface/work-area/adding/primitives/input": {},
    "index/interface/work-area/adding/primitives/link-primitive": {},
    "index/interface/work-area/adding/primitives/list": {},
    "index/interface/work-area/adding/primitives/section": {},
    "index/interface/work-area/adding/primitives/text": {},
    "index/interface/work-area/adding/components": {},
    "index/interface/work-area/adding/catalog": {},
    "index/interface/work-area/pages-and-layers": {},
    "index/interface/work-area/page": {},
    "index/interface/work-area/selection": {},
    "index/interface/work-area/edit": {},
    "index/interface/work-area/props-panel": {},
    "index/interface/work-area/props-panel/styles-basic": {},
    "index/interface/work-area/props-panel/styles-basic/styles-states": {},
    "index/interface/work-area/props-panel/styles-basic/styles-layout": {},
    "index/interface/work-area/props-panel/styles-basic/styles-typography": {},
    "index/interface/work-area/props-panel/styles-basic/styles-indents": {},
    "index/interface/work-area/props-panel/styles-basic/styles-border": {},
    "index/interface/work-area/props-panel/styles-basic/styles-position": {},
    "index/interface/work-area/props-panel/styles-basic/styles-effects": {},
    "index/interface/work-area/props-panel/props-basic": {},
    "index/interface/work-area/props-panel/tips-and-tricks": {},
    "index/interface/work-area/context-menu": {},
    "index/interface/work-area/theme": {},
    "index/interface/work-area/theme/text-styles": {},
    "index/interface/work-area/theme/color-styles": {},
    "index/interface/work-area/theme/bg-styles": {},
    "index/interface/work-area/theme/shadows": {},
    "index/interface/work-area/theme/transitions": {},
    "index/interface/work-area/theme/transforms": {},
    "index/interface/work-area/theme/filters": {},
    "index/interface/work-area/theme/breakpoint": {},
    "index/interface/work-area/project-settings": {},
    "index/interface/work-area/project-settings/general": {},
    "index/interface/work-area/project-settings/seo": {},
    "index/interface/work-area/project-settings/styles": {},
    "index/interface/work-area/project-settings/custom-code": {},
    "index/interface/work-area/project-settings/custom-code/script": {},
    "index/interface/work-area/project-settings/custom-code/meta": {},
    "index/interface/work-area/project-settings/custom-code/style": {},
    "index/interface/work-area/project-settings/custom-code/link": {},
    "index/interface/work-area/code-editor": {},
    "index/interface/work-area/code-editor/how-to-add-components": {},
    "index/interface/work-area/code-editor/how-to-add-props": {},
    "index/interface/work-area/code-editor/how-to-add-states": {},
    "index/interface/work-area/code-editor/how-to-add-breakpoints-styles": {},
    "index/interface/component": {},
    "index/interface/shortcuts": {},
    "index/tutorials": {},
    "index/how-tos": {},
    "index/faqs": {},
    "index/faqs/faq-components": {},
    "index/faqs/faq-other": {},
    "index/resources": {}
};

const PageStyles = createGlobalStyle`
    body {
        ${({ styles }) =>
            Object.entries(styles || {}).map(
                ([prop, value]) => `${prop}: ${transformVar(prop, value)};`
            )}
    }
`;
export const GlobalQuarklyPageStyles = ({ pageUrl }) => <PageStyles styles={pageStyles[pageUrl]} />
