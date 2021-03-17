/*
 Copyright 2017 Ziadin Givan
 
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at
 
 http://www.apache.org/licenses/LICENSE-2.0
 
 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 
 https://github.com/givanz/Vvvebjs
 */

bgcolorClasses = ["bg-primary", "bg-secondary", "bg-success", "bg-danger", "bg-warning", "bg-info", "bg-light", "bg-dark", "bg-white"]

bgcolorSelectOptions =
    [{
        value: "Default",
        text: ""
    },
    {
        value: "bg-primary",
        text: "Primary"
    }, {
        value: "bg-secondary",
        text: "Secondary"
    }, {
        value: "bg-success",
        text: "Success"
    }, {
        value: "bg-danger",
        text: "Danger"
    }, {
        value: "bg-warning",
        text: "Warning"
    }, {
        value: "bg-info",
        text: "Info"
    }, {
        value: "bg-light",
        text: "Light"
    }, {
        value: "bg-dark",
        text: "Dark"
    }, {
        value: "bg-white",
        text: "White"
    }];

function changeNodeName(node, newNodeName) {
    var newNode;
    newNode = document.createElement(newNodeName);
    attributes = node.get(0).attributes;

    for (i = 0, len = attributes.length; i < len; i++) {
        newNode.setAttribute(attributes[i].nodeName, attributes[i].nodeValue);
    }

    $(newNode).append($(node).contents());
    $(node).replaceWith(newNode);

    return newNode;
}

Vvveb.ComponentsGroup['Edus Component'] =
    ["html/container", "html/gridrow", "html/button", "html/followus", "html/importantlink", "html/footertop", "html/messagefromprincipal", "html/featuredbox", "html/noticeboard", "html/buttongroup", "html/buttontoolbar", "html/heading", "html/image", "html/jumbotron", "html/alert", "html/card", "html/listgroup", "html/hr", "html/taglabel", "html/badge", "html/progress", "html/navbar", "html/breadcrumbs", "html/pagination", "html/form", "html/textinput", "html/textareainput", "html/selectinput", "html/fileinput", "html/checkbox", "html/radiobutton", "html/table", "html/paragraph", "html/link", "html/video", "html/button"];


var base_sort = 100;//start sorting for base component from 100 to allow extended properties to be first
var style_section = 'style';

Vvveb.Components.add("_base", {
    name: "Element",
    properties: [{
        key: "element_header",
        inputtype: SectionInput,
        name: false,
        sort: base_sort++,
        data: { header: "General" },
    }, {
        name: "Id",
        key: "id",
        htmlAttr: "id",
        sort: base_sort++,
        inline: true,
        col: 6,
        inputtype: TextInput,
        exclude_ids: ["__core_content_builder"]
    }, {
        name: "Class",
        key: "class",
        htmlAttr: "class",
        sort: base_sort++,
        inline: true,
        col: 6,
        inputtype: TextInput
    }
    ]
});

//display
Vvveb.Components.extend("_base", "_base", {
    properties: [
        {
            key: "display_header",
            inputtype: SectionInput,
            name: false,
            sort: base_sort++,
            section: style_section,
            data: { header: "Display" },
        }, {
            name: "Display",
            key: "display",
            htmlAttr: "style",
            sort: base_sort++,
            section: style_section,
            col: 6,
            inline: true,
            inputtype: SelectInput,
            validValues: ["block", "inline", "inline-block", "none"],
            data: {
                options: [{
                    value: "block",
                    text: "Block"
                }, {
                    value: "inline",
                    text: "Inline"
                }, {
                    value: "inline-block",
                    text: "Inline Block"
                }, {
                    value: "none",
                    text: "none"
                }]
            }
        }, {
            name: "Position",
            key: "position",
            htmlAttr: "style",
            sort: base_sort++,
            section: style_section,
            col: 6,
            inline: true,
            inputtype: SelectInput,
            validValues: ["static", "fixed", "relative", "absolute"],
            data: {
                options: [{
                    value: "static",
                    text: "Static"
                }, {
                    value: "fixed",
                    text: "Fixed"
                }, {
                    value: "relative",
                    text: "Relative"
                }, {
                    value: "absolute",
                    text: "Absolute"
                }]
            }
        }, {
            name: "Top",
            key: "top",
            htmlAttr: "style",
            sort: base_sort++,
            section: style_section,
            col: 6,
            inline: true,
            parent: "",
            inputtype: CssUnitInput
        }, {
            name: "Left",
            key: "left",
            htmlAttr: "style",
            sort: base_sort++,
            section: style_section,
            col: 6,
            inline: true,
            parent: "",
            inputtype: CssUnitInput
        }, {
            name: "Bottom",
            key: "bottom",
            htmlAttr: "style",
            sort: base_sort++,
            section: style_section,
            col: 6,
            inline: true,
            parent: "",
            inputtype: CssUnitInput
        }, {
            name: "Right",
            key: "right",
            htmlAttr: "style",
            sort: base_sort++,
            section: style_section,
            col: 6,
            inline: true,
            parent: "",
            inputtype: CssUnitInput
        }, {
            name: "Float",
            key: "float",
            htmlAttr: "style",
            sort: base_sort++,
            section: style_section,
            col: 12,
            inline: true,
            inputtype: RadioButtonInput,
            data: {
                extraclass: "btn-group-sm btn-group-fullwidth",
                options: [{
                    value: "none",
                    icon: "la la-close",
                    //text: "None",
                    title: "None",
                    checked: true,
                }, {
                    value: "left",
                    //text: "Left",
                    title: "Left",
                    icon: "la la-align-left",
                    checked: false,
                }, {
                    value: "right",
                    //text: "Right",
                    title: "Right",
                    icon: "la la-align-right",
                    checked: false,
                }],
            }
        }, {
            name: "Opacity",
            key: "opacity",
            htmlAttr: "style",
            sort: base_sort++,
            section: style_section,
            col: 12,
            inline: true,
            parent: "",
            inputtype: RangeInput,
            data: {
                max: 1, //max zoom level
                min: 0,
                step: 0.1
            },
        }, {
            name: "Background Color",
            key: "background-color",
            sort: base_sort++,
            section: style_section,
            col: 6,
            inline: true,
            htmlAttr: "style",
            inputtype: ColorInput,
        }, {
            name: "Text Color",
            key: "color",
            sort: base_sort++,
            section: style_section,
            col: 6,
            inline: true,
            htmlAttr: "style",
            inputtype: ColorInput,
        }]
});

//Typography
Vvveb.Components.extend("_base", "_base", {
    properties: [
        {
            key: "typography_header",
            inputtype: SectionInput,
            name: false,
            sort: base_sort++,
            section: style_section,
            data: { header: "Typography" },
        }, {
            name: "Font family",
            key: "font-family",
            htmlAttr: "style",
            sort: base_sort++,
            section: style_section,
            col: 6,
            inline: true,
            inputtype: SelectInput,
            data: {
                options: [{
                    value: "",
                    text: "Default"
                }, {
                    value: "Arial, Helvetica, sans-serif",
                    text: "Arial"
                }, {
                    value: 'Lucida Sans Unicode", "Lucida Grande", sans-serif',
                    text: 'Lucida Grande'
                }, {
                    value: 'Palatino Linotype", "Book Antiqua", Palatino, serif',
                    text: 'Palatino Linotype'
                }, {
                    value: '"Times New Roman", Times, serif',
                    text: 'Times New Roman'
                }, {
                    value: "Georgia, serif",
                    text: "Georgia, serif"
                }, {
                    value: "Tahoma, Geneva, sans-serif",
                    text: "Tahoma"
                }, {
                    value: 'Comic Sans MS, cursive, sans-serif',
                    text: 'Comic Sans'
                }, {
                    value: 'Verdana, Geneva, sans-serif',
                    text: 'Verdana'
                }, {
                    value: 'Impact, Charcoal, sans-serif',
                    text: 'Impact'
                }, {
                    value: 'Arial Black, Gadget, sans-serif',
                    text: 'Arial Black'
                }, {
                    value: 'Trebuchet MS, Helvetica, sans-serif',
                    text: 'Trebuchet'
                }, {
                    value: 'Courier New", Courier, monospace',
                    text: 'Courier New", Courier, monospace'
                }, {
                    value: 'Brush Script MT, sans-serif',
                    text: 'Brush Script'
                }]
            }
        }, {
            name: "Font weight",
            key: "font-weight",
            htmlAttr: "style",
            sort: base_sort++,
            section: style_section,
            col: 6,
            inline: true,
            inputtype: SelectInput,
            data: {
                options: [{
                    value: "",
                    text: "Default"
                }, {
                    value: "100",
                    text: "Thin"
                }, {
                    value: "200",
                    text: "Extra-Light"
                }, {
                    value: "300",
                    text: "Light"
                }, {
                    value: "400",
                    text: "Normal"
                }, {
                    value: "500",
                    text: "Medium"
                }, {
                    value: "600",
                    text: "Semi-Bold"
                }, {
                    value: "700",
                    text: "Bold"
                }, {
                    value: "800",
                    text: "Extra-Bold"
                }, {
                    value: "900",
                    text: "Ultra-Bold"
                }],
            }
        }, {
            name: "Text align",
            key: "text-align",
            htmlAttr: "style",
            sort: base_sort++,
            section: style_section,
            col: 12,
            inline: true,
            inputtype: RadioButtonInput,
            data: {
                extraclass: "btn-group-sm btn-group-fullwidth",
                options: [{
                    value: "none",
                    icon: "la la-close",
                    //text: "None",
                    title: "None",
                    checked: true,
                }, {
                    value: "left",
                    //text: "Left",
                    title: "Left",
                    icon: "la la-align-left",
                    checked: false,
                }, {
                    value: "center",
                    //text: "Center",
                    title: "Center",
                    icon: "la la-align-center",
                    checked: false,
                }, {
                    value: "right",
                    //text: "Right",
                    title: "Right",
                    icon: "la la-align-right",
                    checked: false,
                }, {
                    value: "justify",
                    //text: "justify",
                    title: "Justify",
                    icon: "la la-align-justify",
                    checked: false,
                }],
            },
        }, {
            name: "Line height",
            key: "line-height",
            htmlAttr: "style",
            sort: base_sort++,
            section: style_section,
            col: 6,
            inline: true,
            inputtype: CssUnitInput
        }, {
            name: "Letter spacing",
            key: "letter-spacing",
            htmlAttr: "style",
            sort: base_sort++,
            section: style_section,
            col: 6,
            inline: true,
            inputtype: CssUnitInput
        }, {
            name: "Text decoration",
            key: "text-decoration-line",
            htmlAttr: "style",
            sort: base_sort++,
            section: style_section,
            col: 12,
            inline: true,
            inputtype: RadioButtonInput,
            data: {
                extraclass: "btn-group-sm btn-group-fullwidth",
                options: [{
                    value: "none",
                    icon: "la la-close",
                    //text: "None",
                    title: "None",
                    checked: true,
                }, {
                    value: "underline",
                    //text: "Left",
                    title: "underline",
                    icon: "la la-long-arrow-down",
                    checked: false,
                }, {
                    value: "overline",
                    //text: "Right",
                    title: "overline",
                    icon: "la la-long-arrow-up",
                    checked: false,
                }, {
                    value: "line-through",
                    //text: "Right",
                    title: "Line Through",
                    icon: "la la-strikethrough",
                    checked: false,
                }, {
                    value: "underline overline",
                    //text: "justify",
                    title: "Underline Overline",
                    icon: "la la-arrows-v",
                    checked: false,
                }],
            },
        }, {
            name: "Decoration Color",
            key: "text-decoration-color",
            sort: base_sort++,
            section: style_section,
            col: 6,
            inline: true,
            htmlAttr: "style",
            inputtype: ColorInput,
        }, {
            name: "Decoration style",
            key: "text-decoration-style",
            htmlAttr: "style",
            sort: base_sort++,
            section: style_section,
            col: 6,
            inline: true,
            inputtype: SelectInput,
            data: {
                options: [{
                    value: "",
                    text: "Default"
                }, {
                    value: "solid",
                    text: "Solid"
                }, {
                    value: "wavy",
                    text: "Wavy"
                }, {
                    value: "dotted",
                    text: "Dotted"
                }, {
                    value: "dashed",
                    text: "Dashed"
                }, {
                    value: "double",
                    text: "Double"
                }],
            }
        }]
})

//Size
Vvveb.Components.extend("_base", "_base", {
    properties: [{
        key: "size_header",
        inputtype: SectionInput,
        name: false,
        sort: base_sort++,
        section: style_section,
        data: { header: "Size", expanded: false },
    }, {
        name: "Width",
        key: "width",
        htmlAttr: "style",
        sort: base_sort++,
        section: style_section,
        col: 6,
        inline: true,
        inputtype: CssUnitInput
    }, {
        name: "Height",
        key: "height",
        htmlAttr: "style",
        sort: base_sort++,
        section: style_section,
        col: 6,
        inline: true,
        inputtype: CssUnitInput
    }, {
        name: "Min Width",
        key: "min-width",
        htmlAttr: "style",
        sort: base_sort++,
        section: style_section,
        col: 6,
        inline: true,
        inputtype: CssUnitInput
    }, {
        name: "Min Height",
        key: "min-height",
        htmlAttr: "style",
        sort: base_sort++,
        section: style_section,
        col: 6,
        inline: true,
        inputtype: CssUnitInput
    }, {
        name: "Max Width",
        key: "max-width",
        htmlAttr: "style",
        sort: base_sort++,
        section: style_section,
        col: 6,
        inline: true,
        inputtype: CssUnitInput
    }, {
        name: "Max Height",
        key: "max-height",
        htmlAttr: "style",
        sort: base_sort++,
        section: style_section,
        col: 6,
        inline: true,
        inputtype: CssUnitInput
    }]
});

//Margin
Vvveb.Components.extend("_base", "_base", {
    properties: [{
        key: "margins_header",
        inputtype: SectionInput,
        name: false,
        sort: base_sort++,
        section: style_section,
        data: { header: "Margin", expanded: false },
    }, {
        name: "Top",
        key: "margin-top",
        htmlAttr: "style",
        sort: base_sort++,
        section: style_section,
        col: 6,
        inline: true,
        inputtype: CssUnitInput
    }, {
        name: "Right",
        key: "margin-right",
        htmlAttr: "style",
        sort: base_sort++,
        section: style_section,
        col: 6,
        inline: true,
        inputtype: CssUnitInput
    }, {
        name: "Bottom",
        key: "margin-bottom",
        htmlAttr: "style",
        sort: base_sort++,
        section: style_section,
        col: 6,
        inline: true,
        inputtype: CssUnitInput
    }, {
        name: "Left",
        key: "margin-left",
        htmlAttr: "style",
        sort: base_sort++,
        section: style_section,
        col: 6,
        inline: true,
        inputtype: CssUnitInput
    }]
});

//Padding
Vvveb.Components.extend("_base", "_base", {
    properties: [{
        key: "paddings_header",
        inputtype: SectionInput,
        name: false,
        sort: base_sort++,
        section: style_section,
        data: { header: "Padding", expanded: false },
    }, {
        name: "Top",
        key: "padding-top",
        htmlAttr: "style",
        sort: base_sort++,
        section: style_section,
        col: 6,
        inline: true,
        inputtype: CssUnitInput
    }, {
        name: "Right",
        key: "padding-right",
        htmlAttr: "style",
        sort: base_sort++,
        section: style_section,
        col: 6,
        inline: true,
        inputtype: CssUnitInput
    }, {
        name: "Bottom",
        key: "padding-bottom",
        htmlAttr: "style",
        sort: base_sort++,
        section: style_section,
        col: 6,
        inline: true,
        inputtype: CssUnitInput
    }, {
        name: "Left",
        key: "padding-left",
        htmlAttr: "style",
        sort: base_sort++,
        section: style_section,
        col: 6,
        inline: true,
        inputtype: CssUnitInput
    }]
});


//Border
Vvveb.Components.extend("_base", "_base", {
    properties: [{
        key: "border_header",
        inputtype: SectionInput,
        name: false,
        sort: base_sort++,
        section: style_section,
        data: { header: "Border", expanded: false },
    }, {
        name: "Style",
        key: "border-style",
        htmlAttr: "style",
        sort: base_sort++,
        section: style_section,
        col: 12,
        inline: true,
        inputtype: SelectInput,
        data: {
            options: [{
                value: "",
                text: "Default"
            }, {
                value: "solid",
                text: "Solid"
            }, {
                value: "dotted",
                text: "Dotted"
            }, {
                value: "dashed",
                text: "Dashed"
            }],
        }
    }, {
        name: "Width",
        key: "border-width",
        htmlAttr: "style",
        sort: base_sort++,
        section: style_section,
        col: 6,
        inline: true,
        inputtype: CssUnitInput
    }, {
        name: "Color",
        key: "border-color",
        sort: base_sort++,
        section: style_section,
        col: 6,
        inline: true,
        htmlAttr: "style",
        inputtype: ColorInput,
    }]
});

//Background image
Vvveb.Components.extend("_base", "_base", {
    properties: [{
        key: "background_image_header",
        inputtype: SectionInput,
        name: false,
        sort: base_sort++,
        section: style_section,
        data: { header: "Background Image", expanded: false },
    }, {
        name: "Image",
        key: "Image",
        sort: base_sort++,
        section: style_section,
        //htmlAttr: "style",
        inputtype: ImageInput,

        init: function (node) {
            var image = $(node).css("background-image").replace(/^url\(['"]?(.+)['"]?\)/, '$1');
            return image;
        },

        onChange: function (node, value) {

            $(node).css('background-image', 'url(' + value + ')');

            return node;
        }

    }, {
        name: "Repeat",
        key: "background-repeat",
        sort: base_sort++,
        section: style_section,
        htmlAttr: "style",
        inputtype: SelectInput,
        data: {
            options: [{
                value: "",
                text: "Default"
            }, {
                value: "repeat-x",
                text: "repeat-x"
            }, {
                value: "repeat-y",
                text: "repeat-y"
            }, {
                value: "no-repeat",
                text: "no-repeat"
            }],
        }
    }, {
        name: "Size",
        key: "background-size",
        sort: base_sort++,
        section: style_section,
        htmlAttr: "style",
        inputtype: SelectInput,
        data: {
            options: [{
                value: "",
                text: "Default"
            }, {
                value: "contain",
                text: "contain"
            }, {
                value: "cover",
                text: "cover"
            }],
        }
    }, {
        name: "Position x",
        key: "background-position-x",
        sort: base_sort++,
        section: style_section,
        htmlAttr: "style",
        col: 6,
        inline: true,
        inputtype: SelectInput,
        data: {
            options: [{
                value: "",
                text: "Default"
            }, {
                value: "center",
                text: "center"
            }, {
                value: "right",
                text: "right"
            }, {
                value: "left",
                text: "left"
            }],
        }
    }, {
        name: "Position y",
        key: "background-position-y",
        sort: base_sort++,
        section: style_section,
        htmlAttr: "style",
        col: 6,
        inline: true,
        inputtype: SelectInput,
        data: {
            options: [{
                value: "",
                text: "Default"
            }, {
                value: "center",
                text: "center"
            }, {
                value: "top",
                text: "top"
            }, {
                value: "bottom",
                text: "bottom"
            }],
        }
    }]
});

Vvveb.Components.extend("_base", "html/container", {
    classes: ["container", "container-fluid"],
    image: "icons/container.svg",
    html: '<div class="container" style="min-height:90px;" brpb-element="Container"></div>',
    name: "Container",
    properties: [
        {
            name: "Type",
            key: "type",
            htmlAttr: "class",
            inputtype: SelectInput,
            validValues: ["container", "container-fluid"],
            data: {
                options: [{
                    value: "container",
                    text: "Default"
                }, {
                    value: "container-fluid",
                    text: "Fluid"
                }]
            }
        },
        {
            name: "Background",
            key: "background",
            htmlAttr: "class",
            validValues: bgcolorClasses,
            inputtype: SelectInput,
            data: {
                options: bgcolorSelectOptions
            }
        },
        {
            name: "Background Color",
            key: "background-color",
            htmlAttr: "style",
            inputtype: ColorInput,
        },
        {
            name: "Text Color",
            key: "color",
            htmlAttr: "style",
            inputtype: ColorInput,
        }],
});

Vvveb.Components.extend("_base", "html/heading", {
    image: "icons/heading.svg",
    name: "Heading",
    nodes: ["h1", "h2", "h3", "h4", "h5", "h6"],
    html: "<h1 brpb-element='Heading'>Heading</h1>",

    properties: [
        {
            name: "Size",
            key: "size",
            inputtype: SelectInput,

            onChange: function (node, value) {

                return changeNodeName(node, "h" + value);
            },

            init: function (node) {
                var regex;
                regex = /H(\d)/.exec(node.nodeName);
                if (regex && regex[1]) {
                    return regex[1]
                }
                return 1
            },

            data: {
                options: [{
                    value: "1",
                    text: "1"
                }, {
                    value: "2",
                    text: "2"
                }, {
                    value: "3",
                    text: "3"
                }, {
                    value: "4",
                    text: "4"
                }, {
                    value: "5",
                    text: "5"
                }, {
                    value: "6",
                    text: "6"
                }]
            },
        }]
});
Vvveb.Components.extend("_base", "html/link", {
    nodes: ["a"],
    name: "Link",
    html: '<a href="#" class="d-inline-block" brpb-element="Link"><span>Link</span></a>',
    image: "icons/link.svg",
    properties: [{
        name: "Url",
        key: "href",
        htmlAttr: "href",
        inputtype: LinkInput
    }, {
        name: "Target",
        key: "target",
        htmlAttr: "target",
        inputtype: TextInput
    }]
});


Vvveb.Components.extend("_base", "html/image", {
    nodes: ["img"],
    name: "Image",
    html: '<img src="' + Vvveb.baseUrl + 'icons/image.svg" height="128" width="128" class="my_custom_img_class" brpb-element="Image">',
    /*
     afterDrop: function (node)
     {
     node.attr("src", '');
     return node;
     },*/
    image: "icons/image.svg",
    properties: [{
        name: "Image",
        key: "src",
        htmlAttr: "src",
        inputtype: ImageInput
    }, {
        name: "Width",
        key: "width",
        htmlAttr: "width",
        inputtype: TextInput
    }, {
        name: "Height",
        key: "height",
        htmlAttr: "height",
        inputtype: TextInput
    }, {
        name: "Alt",
        key: "alt",
        htmlAttr: "alt",
        inputtype: TextInput
    }]
});
Vvveb.Components.add("html/hr", {
    image: "icons/hr.svg",
    nodes: ["hr"],
    name: "Horizontal Rule",
    html: "<hr brpb-element='hr'>"
});
Vvveb.Components.extend("_base", "html/label", {
    name: "Label",
    nodes: ["label"],
    html: '<label for="" brpb-element="Label">Label</label>',
    properties: [{
        name: "For id",
        htmlAttr: "for",
        key: "for",
        inputtype: TextInput
    }]
});
Vvveb.Components.extend("_base", "html/button", {
    classes: ["btn", "btn-link"],
    name: "Button",
    image: "icons/button.svg",
    html: '<button type="button" class="btn btn-primary" brpb-element="Button">Primary</button>',
    properties: [{
        name: "Link To",
        key: "href",
        htmlAttr: "href",
        inputtype: LinkInput
    }, {
        name: "Type",
        key: "type",
        htmlAttr: "class",
        inputtype: SelectInput,
        validValues: ["btn-default", "btn-primary", "btn-info", "btn-success", "btn-warning", "btn-info", "btn-light", "btn-dark", "btn-outline-primary", "btn-outline-info", "btn-outline-success", "btn-outline-warning", "btn-outline-info", "btn-outline-light", "btn-outline-dark", "btn-link"],
        data: {
            options: [{
                value: "btn-default",
                text: "Default"
            }, {
                value: "btn-primary",
                text: "Primary"
            }, {
                value: "btn btn-info",
                text: "Info"
            }, {
                value: "btn-success",
                text: "Success"
            }, {
                value: "btn-warning",
                text: "Warning"
            }, {
                value: "btn-info",
                text: "Info"
            }, {
                value: "btn-light",
                text: "Light"
            }, {
                value: "btn-dark",
                text: "Dark"
            }, {
                value: "btn-outline-primary",
                text: "Primary outline"
            }, {
                value: "btn btn-outline-info",
                text: "Info outline"
            }, {
                value: "btn-outline-success",
                text: "Success outline"
            }, {
                value: "btn-outline-warning",
                text: "Warning outline"
            }, {
                value: "btn-outline-info",
                text: "Info outline"
            }, {
                value: "btn-outline-light",
                text: "Light outline"
            }, {
                value: "btn-outline-dark",
                text: "Dark outline"
            }, {
                value: "btn-link",
                text: "Link"
            }]
        }
    }, {
        name: "Size",
        key: "size",
        htmlAttr: "class",
        inputtype: SelectInput,
        validValues: ["btn-lg", "btn-sm"],
        data: {
            options: [{
                value: "",
                text: "Default"
            }, {
                value: "btn-lg",
                text: "Large"
            }, {
                value: "btn-sm",
                text: "Small"
            }]
        }
    }, {
        name: "Target",
        key: "target",
        htmlAttr: "target",
        inputtype: TextInput
    }, {
        name: "Disabled",
        key: "disabled",
        htmlAttr: "class",
        inputtype: ToggleInput,
        validValues: ["disabled"],
        data: {
            on: "disabled",
            off: ""
        }
    }]
});
Vvveb.Components.extend("_base", "html/buttongroup", {
    classes: ["btn-group"],
    name: "Button Group",
    image: "icons/button_group.svg",
    html: '<div class="btn-group" role="group" aria-label="Basic example" brpb-element="Buttongroup"><button type="button" class="btn btn-secondary">Left</button><button type="button" class="btn btn-secondary">Middle</button> <button type="button" class="btn btn-secondary">Right</button></div>',
    properties: [{
        name: "Size",
        key: "size",
        htmlAttr: "class",
        inputtype: SelectInput,
        validValues: ["btn-group-lg", "btn-group-sm"],
        data: {
            options: [{
                value: "",
                text: "Default"
            }, {
                value: "btn-group-lg",
                text: "Large"
            }, {
                value: "btn-group-sm",
                text: "Small"
            }]
        }
    }, {
        name: "Alignment",
        key: "alignment",
        htmlAttr: "class",
        inputtype: SelectInput,
        validValues: ["btn-group", "btn-group-vertical"],
        data: {
            options: [{
                value: "",
                text: "Default"
            }, {
                value: "btn-group",
                text: "Horizontal"
            }, {
                value: "btn-group-vertical",
                text: "Vertical"
            }]
        }
    }]
});
Vvveb.Components.extend("_base", "html/buttontoolbar", {
    classes: ["btn-toolbar"],
    name: "Button Toolbar",
    image: "icons/button_toolbar.svg",
    html: '<div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups" brpb-element="Buttontoolbar">\
		  <div class="btn-group mr-2" role="group" aria-label="First group">\
			<button type="button" class="btn btn-secondary">1</button>\
			<button type="button" class="btn btn-secondary">2</button>\
			<button type="button" class="btn btn-secondary">3</button>\
			<button type="button" class="btn btn-secondary">4</button>\
		  </div>\
		  <div class="btn-group mr-2" role="group" aria-label="Second group">\
			<button type="button" class="btn btn-secondary">5</button>\
			<button type="button" class="btn btn-secondary">6</button>\
			<button type="button" class="btn btn-secondary">7</button>\
		  </div>\
		  <div class="btn-group" role="group" aria-label="Third group">\
			<button type="button" class="btn btn-secondary">8</button>\
		  </div>\
		</div>'
});
Vvveb.Components.extend("_base", "html/alert", {
    classes: ["alert"],
    name: "Alert",
    image: "icons/alert.svg",
    html: '<div class="alert alert-warning alert-dismissible fade show" role="alert" brpb-element="Alert">\
		  <button type="button" class="close" data-dismiss="alert" aria-label="Close">\
			<span aria-hidden="true">&times;</span>\
		  </button>\
		  <strong>Holy guacamole!</strong> You should check in on some of those fields below.\
		</div>',
    properties: [{
        name: "Type",
        key: "type",
        htmlAttr: "class",
        validValues: ["alert-primary", "alert-secondary", "alert-success", "alert-danger", "alert-warning", "alert-info", "alert-light", "alert-dark"],
        inputtype: SelectInput,
        data: {
            options: [{
                value: "alert-primary",
                text: "Default"
            }, {
                value: "alert-secondary",
                text: "Secondary"
            }, {
                value: "alert-success",
                text: "Success"
            }, {
                value: "alert-danger",
                text: "Danger"
            }, {
                value: "alert-warning",
                text: "Warning"
            }, {
                value: "alert-info",
                text: "Info"
            }, {
                value: "alert-light",
                text: "Light"
            }, {
                value: "alert-dark",
                text: "Dark"
            }]
        }
    }]
});
Vvveb.Components.extend("_base", "html/badge", {
    classes: ["badge"],
    image: "icons/badge.svg",
    name: "Badge",
    html: '<span class="badge badge-primary" brpb-element="Badge">Primary badge</span>',
    properties: [{
        name: "Color",
        key: "color",
        htmlAttr: "class",
        validValues: ["badge-primary", "badge-secondary", "badge-success", "badge-danger", "badge-warning", "badge-info", "badge-light", "badge-dark"],
        inputtype: SelectInput,
        data: {
            options: [{
                value: "",
                text: "Default"
            }, {
                value: "badge-primary",
                text: "Primary"
            }, {
                value: "badge-secondary",
                text: "Secondary"
            }, {
                value: "badge-success",
                text: "Success"
            }, {
                value: "badge-warning",
                text: "Warning"
            }, {
                value: "badge-danger",
                text: "Danger"
            }, {
                value: "badge-info",
                text: "Info"
            }, {
                value: "badge-light",
                text: "Light"
            }, {
                value: "badge-dark",
                text: "Dark"
            }]
        }
    }]
});
Vvveb.Components.extend("_base", "html/card", {
    classes: ["card"],
    image: "icons/panel.svg",
    name: "Card",
    html: '<div class="card" brpb-element="Card">\
		  <img class="card-img-top" brpb-element="Cardimage" src="../libs/builder/icons/image.svg" alt="Card image cap" width="128" height="128">\
		  <div class="card-body">\
			<h4 class="card-title" brpb-element="Cardtitle">Card title</h4>\
			<p class="card-text" brpb-element="Cardtext">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>\
			<a href="#" brpb-element="Cardlink" class="btn btn-primary">Go somewhere</a>\
		  </div>\
		</div>'
});
Vvveb.Components.extend("_base", "html/importantlink", {
    //classes: ["card"],
    image: "icons/panel.svg",
    name: "Important Link",
    classes: ["important-link-area"],
    html: '<div class="widget-link-content widget-link-area important-link-area scrollbox" data-cursorcolor="#b2b2b2" brpb-element="Important Links">\
                <p class="link-text" brpb-element="Important Links paragraph">Important Links</p>\
                <hr class="important-link-line-break">\
                <ul class="" brpb-element="Important Links ul">\
                        <li class="tg-noticedetails" brpb-element="Important Links li">\
                            <div class="tg-noticedetails-contents">\
                                <a class="textTransformNone" href="#" brpb-element="Important Links a">JSC/SSC/HSC AND EQUIVALENT EXAMINATION</a>\
                            </div>\
                        </li>\
                        <li class="tg-noticedetails" brpb-element="Important Links li">\
                            <div class="tg-noticedetails-contents">\
                                <a class="textTransformNone" href="#" brpb-element="Important Links a">Board of Intermediate and Secondary Examination</a>\
                            </div>\
                        </li>\
                        <li class="tg-noticedetails" brpb-element="Important Links li">\
                            <div class="tg-noticedetails-contents">\
                                <a class="textTransformNone" href="#" brpb-element="Important Links a">Dhaka Board</a>\
                            </div>\
                        </li>\
                        <li class="tg-noticedetails" brpb-element="Important Links li">\
                            <div class="tg-noticedetails-contents">\
                                <a class="textTransformNone" href="#" brpb-element="Important Links a">Chittagong Board</a>\
                            </div>\
                        </li>\
                    </ul>\
                </div>\
                ',
    properties: [{
        name: "Link",
        key: "add_child",
        inputtype: ButtonInput,
        data: { text: "Add Link", icon: "la la-plus" },
        onChange: function (node) {
            $(node[0]['lastElementChild']).append('<li class="tg-noticedetails" brpb-element="Important Links li"><div class="tg-noticedetails-contents"><a class="textTransformNone" href="#" brpb-element="Important Links a">Chittagong Board</a></div></li>');
            //$(node).append('<div class="col-3">Col-3</div>');

            //render component properties again to include the new column inputs
            Vvveb.Components.render("html/importantlink");

            return node;
        }
    }]
});

Vvveb.Components.extend("_base", "html/followus", {
    image: "icons/panel.svg",
    name: "Follow Us",
    classes: ["follow-us-div"],
    html: '<div class="follow-us-div">\
                <p brpb-element="Follow us paragraph">Follow Us On</p>\
                <div class="flex-m p-t-30">\
                    <a href="#" class="btn btn-square custom-social-media-btn"><i class="fa fa-facebook custom-follow-us" style="color: #ffff"></i></a>\
                    <a href="#" class="btn btn-square custom-social-media-btn"><i class="fa fa-instagram custom-follow-us" style="color: #ffff"></i></a>\
                    <a href="#" class="btn btn-square custom-social-media-btn"><i class="fa fa-twitter custom-follow-us" style="color: #ffff"></i></a>\
                    <a href="#" class="btn btn-square custom-social-media-btn"><i class="fa fa-youtube-play custom-follow-us" style="color: #ffff"></i></a>\
                </div>\
            </div>',
    properties: [{
        name: "Font Awesome",
        key: "add_child",
        inputtype: SelectInput,
        data: {
            options: [{
                value: "glass",
                text: "glass"
            },
            {
                value: "music",
                text: "music"
            },
            {
                value: "search",
                text: "search"
            },
            {
                value: "envelope-o",
                text: "envelope-o"
            },
            {
                value: "heart",
                text: "heart"
            },
            {
                value: "star",
                text: "star"
            },
            {
                value: "star-o",
                text: "star-o"
            },
            {
                value: "user",
                text: "user"
            },
            {
                value: "film",
                text: "film"
            },
            {
                value: "th-large",
                text: "th-large"
            },
            {
                value: "th",
                text: "th"
            },
            {
                value: "th-list",
                text: "th-list"
            },
            {
                value: "check",
                text: "check"
            },
            {
                value: "remove",
                text: "remove"
            },
            {
                value: "close",
                text: "close"
            },
            {
                value: "times",
                text: "times"
            },
            {
                value: "search-plus",
                text: "search-plus"
            },
            {
                value: "search-minus",
                text: "search-minus"
            },
            {
                value: "power-off",
                text: "power-off"
            },
            {
                value: "signal",
                text: "signal"
            },
            {
                value: "gear",
                text: "gear"
            },
            {
                value: "cog",
                text: "cog"
            },
            {
                value: "trash-o",
                text: "trash-o"
            },
            {
                value: "home",
                text: "home"
            },
            {
                value: "file-o",
                text: "file-o"
            },
            {
                value: "clock-o",
                text: "clock-o"
            },
            {
                value: "road",
                text: "road"
            },
            {
                value: "download",
                text: "download"
            },
            {
                value: "arrow-circle-o-down",
                text: "arrow-circle-o-down"
            },
            {
                value: "arrow-circle-o-up",
                text: "arrow-circle-o-up"
            },
            {
                value: "inbox",
                text: "inbox"
            },
            {
                value: "play-circle-o",
                text: "play-circle-o"
            },
            {
                value: "rotate-right",
                text: "rotate-right"
            },
            {
                value: "repeat",
                text: "repeat"
            },
            {
                value: "refresh",
                text: "refresh"
            },
            {
                value: "list-alt",
                text: "list-alt"
            },
            {
                value: "lock",
                text: "lock"
            },
            {
                value: "flag",
                text: "flag"
            },
            {
                value: "headphones",
                text: "headphones"
            },
            {
                value: "volume-off",
                text: "volume-off"
            },
            {
                value: "volume-down",
                text: "volume-down"
            },
            {
                value: "volume-up",
                text: "volume-up"
            },
            {
                value: "qrcode",
                text: "qrcode"
            },
            {
                value: "barcode",
                text: "barcode"
            },
            {
                value: "tag",
                text: "tag"
            },
            {
                value: "tags",
                text: "tags"
            },
            {
                value: "book",
                text: "book"
            },
            {
                value: "bookmark",
                text: "bookmark"
            },
            {
                value: "print",
                text: "print"
            },
            {
                value: "camera",
                text: "camera"
            },
            {
                value: "font",
                text: "font"
            },
            {
                value: "bold",
                text: "bold"
            },
            {
                value: "italic",
                text: "italic"
            },
            {
                value: "text-height",
                text: "text-height"
            },
            {
                value: "text-width",
                text: "text-width"
            },
            {
                value: "align-left",
                text: "align-left"
            },
            {
                value: "align-center",
                text: "align-center"
            },
            {
                value: "align-right",
                text: "align-right"
            },
            {
                value: "align-justify",
                text: "align-justify"
            },
            {
                value: "list",
                text: "list"
            },
            {
                value: "dedent",
                text: "dedent"
            },
            {
                value: "outdent",
                text: "outdent"
            },
            {
                value: "indent",
                text: "indent"
            },
            {
                value: "video-camera",
                text: "video-camera"
            },
            {
                value: "photo",
                text: "photo"
            },
            {
                value: "image",
                text: "image"
            },
            {
                value: "picture-o",
                text: "picture-o"
            },
            {
                value: "pencil",
                text: "pencil"
            },
            {
                value: "map-marker",
                text: "map-marker"
            },
            {
                value: "adjust",
                text: "adjust"
            },
            {
                value: "tint",
                text: "tint"
            },
            {
                value: "edit",
                text: "edit"
            },
            {
                value: "pencil-square-o",
                text: "pencil-square-o"
            },
            {
                value: "share-square-o",
                text: "share-square-o"
            },
            {
                value: "check-square-o",
                text: "check-square-o"
            },
            {
                value: "arrows",
                text: "arrows"
            },
            {
                value: "step-backward",
                text: "step-backward"
            },
            {
                value: "fast-backward",
                text: "fast-backward"
            },
            {
                value: "backward",
                text: "backward"
            },
            {
                value: "play",
                text: "play"
            },
            {
                value: "pause",
                text: "pause"
            },
            {
                value: "stop",
                text: "stop"
            },
            {
                value: "forward",
                text: "forward"
            },
            {
                value: "fast-forward",
                text: "fast-forward"
            },
            {
                value: "step-forward",
                text: "step-forward"
            },
            {
                value: "eject",
                text: "eject"
            },
            {
                value: "chevron-left",
                text: "chevron-left"
            },
            {
                value: "chevron-right",
                text: "chevron-right"
            },
            {
                value: "plus-circle",
                text: "plus-circle"
            },
            {
                value: "minus-circle",
                text: "minus-circle"
            },
            {
                value: "times-circle",
                text: "times-circle"
            },
            {
                value: "check-circle",
                text: "check-circle"
            },
            {
                value: "question-circle",
                text: "question-circle"
            },
            {
                value: "info-circle",
                text: "info-circle"
            },
            {
                value: "crosshairs",
                text: "crosshairs"
            },
            {
                value: "times-circle-o",
                text: "times-circle-o"
            },
            {
                value: "check-circle-o",
                text: "check-circle-o"
            },
            {
                value: "ban",
                text: "ban"
            },
            {
                value: "arrow-left",
                text: "arrow-left"
            },
            {
                value: "arrow-right",
                text: "arrow-right"
            },
            {
                value: "arrow-up",
                text: "arrow-up"
            },
            {
                value: "arrow-down",
                text: "arrow-down"
            },
            {
                value: "mail-forward",
                text: "mail-forward"
            },
            {
                value: "share",
                text: "share"
            },
            {
                value: "expand",
                text: "expand"
            },
            {
                value: "compress",
                text: "compress"
            },
            {
                value: "plus",
                text: "plus"
            },
            {
                value: "minus",
                text: "minus"
            },
            {
                value: "asterisk",
                text: "asterisk"
            },
            {
                value: "exclamation-circle",
                text: "exclamation-circle"
            },
            {
                value: "gift",
                text: "gift"
            },
            {
                value: "leaf",
                text: "leaf"
            },
            {
                value: "fire",
                text: "fire"
            },
            {
                value: "eye",
                text: "eye"
            },
            {
                value: "eye-slash",
                text: "eye-slash"
            },
            {
                value: "warning",
                text: "warning"
            },
            {
                value: "exclamation-triangle",
                text: "exclamation-triangle"
            },
            {
                value: "plane",
                text: "plane"
            },
            {
                value: "calendar",
                text: "calendar"
            },
            {
                value: "random",
                text: "random"
            },
            {
                value: "comment",
                text: "comment"
            },
            {
                value: "magnet",
                text: "magnet"
            },
            {
                value: "chevron-up",
                text: "chevron-up"
            },
            {
                value: "chevron-down",
                text: "chevron-down"
            },
            {
                value: "retweet",
                text: "retweet"
            },
            {
                value: "shopping-cart",
                text: "shopping-cart"
            },
            {
                value: "folder",
                text: "folder"
            },
            {
                value: "folder-open",
                text: "folder-open"
            },
            {
                value: "arrows-v",
                text: "arrows-v"
            },
            {
                value: "arrows-h",
                text: "arrows-h"
            },
            {
                value: "bar-chart-o",
                text: "bar-chart-o"
            },
            {
                value: "bar-chart",
                text: "bar-chart"
            },
            {
                value: "twitter-square",
                text: "twitter-square"
            },
            {
                value: "facebook-square",
                text: "facebook-square"
            },
            {
                value: "camera-retro",
                text: "camera-retro"
            },
            {
                value: "key",
                text: "key"
            },
            {
                value: "gears",
                text: "gears"
            },
            {
                value: "cogs",
                text: "cogs"
            },
            {
                value: "comments",
                text: "comments"
            },
            {
                value: "thumbs-o-up",
                text: "thumbs-o-up"
            },
            {
                value: "thumbs-o-down",
                text: "thumbs-o-down"
            },
            {
                value: "star-half",
                text: "star-half"
            },
            {
                value: "heart-o",
                text: "heart-o"
            },
            {
                value: "sign-out",
                text: "sign-out"
            },
            {
                value: "linkedin-square",
                text: "linkedin-square"
            },
            {
                value: "thumb-tack",
                text: "thumb-tack"
            },
            {
                value: "external-link",
                text: "external-link"
            },
            {
                value: "sign-in",
                text: "sign-in"
            },
            {
                value: "trophy",
                text: "trophy"
            },
            {
                value: "github-square",
                text: "github-square"
            },
            {
                value: "upload",
                text: "upload"
            },
            {
                value: "lemon-o",
                text: "lemon-o"
            },
            {
                value: "phone",
                text: "phone"
            },
            {
                value: "square-o",
                text: "square-o"
            },
            {
                value: "bookmark-o",
                text: "bookmark-o"
            },
            {
                value: "phone-square",
                text: "phone-square"
            },
            {
                value: "twitter",
                text: "twitter"
            },
            {
                value: "facebook-f",
                text: "facebook-f"
            },
            {
                value: "facebook",
                text: "facebook"
            },
            {
                value: "github",
                text: "github"
            },
            {
                value: "unlock",
                text: "unlock"
            },
            {
                value: "credit-card",
                text: "credit-card"
            },
            {
                value: "feed",
                text: "feed"
            },
            {
                value: "rss",
                text: "rss"
            },
            {
                value: "hdd-o",
                text: "hdd-o"
            },
            {
                value: "bullhorn",
                text: "bullhorn"
            },
            {
                value: "bell",
                text: "bell"
            },
            {
                value: "certificate",
                text: "certificate"
            },
            {
                value: "hand-o-right",
                text: "hand-o-right"
            },
            {
                value: "hand-o-left",
                text: "hand-o-left"
            },
            {
                value: "hand-o-up",
                text: "hand-o-up"
            },
            {
                value: "hand-o-down",
                text: "hand-o-down"
            },
            {
                value: "arrow-circle-left",
                text: "arrow-circle-left"
            },
            {
                value: "arrow-circle-right",
                text: "arrow-circle-right"
            },
            {
                value: "arrow-circle-up",
                text: "arrow-circle-up"
            },
            {
                value: "arrow-circle-down",
                text: "arrow-circle-down"
            },
            {
                value: "globe",
                text: "globe"
            },
            {
                value: "wrench",
                text: "wrench"
            },
            {
                value: "tasks",
                text: "tasks"
            },
            {
                value: "filter",
                text: "filter"
            },
            {
                value: "briefcase",
                text: "briefcase"
            },
            {
                value: "arrows-alt",
                text: "arrows-alt"
            },
            {
                value: "group",
                text: "group"
            },
            {
                value: "users",
                text: "users"
            },
            {
                value: "chain",
                text: "chain"
            },
            {
                value: "link",
                text: "link"
            },
            {
                value: "cloud",
                text: "cloud"
            },
            {
                value: "flask",
                text: "flask"
            },
            {
                value: "cut",
                text: "cut"
            },
            {
                value: "scissors",
                text: "scissors"
            },
            {
                value: "copy",
                text: "copy"
            },
            {
                value: "files-o",
                text: "files-o"
            },
            {
                value: "paperclip",
                text: "paperclip"
            },
            {
                value: "save",
                text: "save"
            },
            {
                value: "floppy-o",
                text: "floppy-o"
            },
            {
                value: "square",
                text: "square"
            },
            {
                value: "navicon",
                text: "navicon"
            },
            {
                value: "reorder",
                text: "reorder"
            },
            {
                value: "bars",
                text: "bars"
            },
            {
                value: "list-ul",
                text: "list-ul"
            },
            {
                value: "list-ol",
                text: "list-ol"
            },
            {
                value: "strikethrough",
                text: "strikethrough"
            },
            {
                value: "underline",
                text: "underline"
            },
            {
                value: "table",
                text: "table"
            },
            {
                value: "magic",
                text: "magic"
            },
            {
                value: "truck",
                text: "truck"
            },
            {
                value: "pinterest",
                text: "pinterest"
            },
            {
                value: "pinterest-square",
                text: "pinterest-square"
            },
            {
                value: "google-plus-square",
                text: "google-plus-square"
            },
            {
                value: "google-plus",
                text: "google-plus"
            },
            {
                value: "money",
                text: "money"
            },
            {
                value: "caret-down",
                text: "caret-down"
            },
            {
                value: "caret-up",
                text: "caret-up"
            },
            {
                value: "caret-left",
                text: "caret-left"
            },
            {
                value: "caret-right",
                text: "caret-right"
            },
            {
                value: "columns",
                text: "columns"
            },
            {
                value: "unsorted",
                text: "unsorted"
            },
            {
                value: "sort",
                text: "sort"
            },
            {
                value: "sort-down",
                text: "sort-down"
            },
            {
                value: "sort-desc",
                text: "sort-desc"
            },
            {
                value: "sort-up",
                text: "sort-up"
            },
            {
                value: "sort-asc",
                text: "sort-asc"
            },
            {
                value: "envelope",
                text: "envelope"
            },
            {
                value: "linkedin",
                text: "linkedin"
            },
            {
                value: "rotate-left",
                text: "rotate-left"
            },
            {
                value: "undo",
                text: "undo"
            },
            {
                value: "legal",
                text: "legal"
            },
            {
                value: "gavel",
                text: "gavel"
            },
            {
                value: "dashboard",
                text: "dashboard"
            },
            {
                value: "tachometer",
                text: "tachometer"
            },
            {
                value: "comment-o",
                text: "comment-o"
            },
            {
                value: "comments-o",
                text: "comments-o"
            },
            {
                value: "flash",
                text: "flash"
            },
            {
                value: "bolt",
                text: "bolt"
            },
            {
                value: "sitemap",
                text: "sitemap"
            },
            {
                value: "umbrella",
                text: "umbrella"
            },
            {
                value: "paste",
                text: "paste"
            },
            {
                value: "clipboard",
                text: "clipboard"
            },
            {
                value: "lightbulb-o",
                text: "lightbulb-o"
            },
            {
                value: "exchange",
                text: "exchange"
            },
            {
                value: "cloud-download",
                text: "cloud-download"
            },
            {
                value: "cloud-upload",
                text: "cloud-upload"
            },
            {
                value: "user-md",
                text: "user-md"
            },
            {
                value: "stethoscope",
                text: "stethoscope"
            },
            {
                value: "suitcase",
                text: "suitcase"
            },
            {
                value: "bell-o",
                text: "bell-o"
            },
            {
                value: "coffee",
                text: "coffee"
            },
            {
                value: "cutlery",
                text: "cutlery"
            },
            {
                value: "file-text-o",
                text: "file-text-o"
            },
            {
                value: "building-o",
                text: "building-o"
            },
            {
                value: "hospital-o",
                text: "hospital-o"
            },
            {
                value: "ambulance",
                text: "ambulance"
            },
            {
                value: "medkit",
                text: "medkit"
            },
            {
                value: "fighter-jet",
                text: "fighter-jet"
            },
            {
                value: "beer",
                text: "beer"
            },
            {
                value: "h-square",
                text: "h-square"
            },
            {
                value: "plus-square",
                text: "plus-square"
            },
            {
                value: "angle-double-left",
                text: "angle-double-left"
            },
            {
                value: "angle-double-right",
                text: "angle-double-right"
            },
            {
                value: "angle-double-up",
                text: "angle-double-up"
            },
            {
                value: "angle-double-down",
                text: "angle-double-down"
            },
            {
                value: "angle-left",
                text: "angle-left"
            },
            {
                value: "angle-right",
                text: "angle-right"
            },
            {
                value: "angle-up",
                text: "angle-up"
            },
            {
                value: "angle-down",
                text: "angle-down"
            },
            {
                value: "desktop",
                text: "desktop"
            },
            {
                value: "laptop",
                text: "laptop"
            },
            {
                value: "tablet",
                text: "tablet"
            },
            {
                value: "mobile-phone",
                text: "mobile-phone"
            },
            {
                value: "mobile",
                text: "mobile"
            },
            {
                value: "circle-o",
                text: "circle-o"
            },
            {
                value: "quote-left",
                text: "quote-left"
            },
            {
                value: "quote-right",
                text: "quote-right"
            },
            {
                value: "spinner",
                text: "spinner"
            },
            {
                value: "circle",
                text: "circle"
            },
            {
                value: "mail-reply",
                text: "mail-reply"
            },
            {
                value: "reply",
                text: "reply"
            },
            {
                value: "github-alt",
                text: "github-alt"
            },
            {
                value: "folder-o",
                text: "folder-o"
            },
            {
                value: "folder-open-o",
                text: "folder-open-o"
            },
            {
                value: "smile-o",
                text: "smile-o"
            },
            {
                value: "frown-o",
                text: "frown-o"
            },
            {
                value: "meh-o",
                text: "meh-o"
            },
            {
                value: "gamepad",
                text: "gamepad"
            },
            {
                value: "keyboard-o",
                text: "keyboard-o"
            },
            {
                value: "flag-o",
                text: "flag-o"
            },
            {
                value: "flag-checkered",
                text: "flag-checkered"
            },
            {
                value: "terminal",
                text: "terminal"
            },
            {
                value: "code",
                text: "code"
            },
            {
                value: "mail-reply-all",
                text: "mail-reply-all"
            },
            {
                value: "reply-all",
                text: "reply-all"
            },
            {
                value: "star-half-empty",
                text: "star-half-empty"
            },
            {
                value: "star-half-full",
                text: "star-half-full"
            },
            {
                value: "star-half-o",
                text: "star-half-o"
            },
            {
                value: "location-arrow",
                text: "location-arrow"
            },
            {
                value: "crop",
                text: "crop"
            },
            {
                value: "code-fork",
                text: "code-fork"
            },
            {
                value: "unlink",
                text: "unlink"
            },
            {
                value: "chain-broken",
                text: "chain-broken"
            },
            {
                value: "question",
                text: "question"
            },
            {
                value: "info",
                text: "info"
            },
            {
                value: "exclamation",
                text: "exclamation"
            },
            {
                value: "superscript",
                text: "superscript"
            },
            {
                value: "subscript",
                text: "subscript"
            },
            {
                value: "eraser",
                text: "eraser"
            },
            {
                value: "puzzle-piece",
                text: "puzzle-piece"
            },
            {
                value: "microphone",
                text: "microphone"
            },
            {
                value: "microphone-slash",
                text: "microphone-slash"
            },
            {
                value: "shield",
                text: "shield"
            },
            {
                value: "calendar-o",
                text: "calendar-o"
            },
            {
                value: "fire-extinguisher",
                text: "fire-extinguisher"
            },
            {
                value: "rocket",
                text: "rocket"
            },
            {
                value: "maxcdn",
                text: "maxcdn"
            },
            {
                value: "chevron-circle-left",
                text: "chevron-circle-left"
            },
            {
                value: "chevron-circle-right",
                text: "chevron-circle-right"
            },
            {
                value: "chevron-circle-up",
                text: "chevron-circle-up"
            },
            {
                value: "chevron-circle-down",
                text: "chevron-circle-down"
            },
            {
                value: "html5",
                text: "html5"
            },
            {
                value: "css3",
                text: "css3"
            },
            {
                value: "anchor",
                text: "anchor"
            },
            {
                value: "unlock-alt",
                text: "unlock-alt"
            },
            {
                value: "bullseye",
                text: "bullseye"
            },
            {
                value: "ellipsis-h",
                text: "ellipsis-h"
            },
            {
                value: "ellipsis-v",
                text: "ellipsis-v"
            },
            {
                value: "rss-square",
                text: "rss-square"
            },
            {
                value: "play-circle",
                text: "play-circle"
            },
            {
                value: "ticket",
                text: "ticket"
            },
            {
                value: "minus-square",
                text: "minus-square"
            },
            {
                value: "minus-square-o",
                text: "minus-square-o"
            },
            {
                value: "level-up",
                text: "level-up"
            },
            {
                value: "level-down",
                text: "level-down"
            },
            {
                value: "check-square",
                text: "check-square"
            },
            {
                value: "pencil-square",
                text: "pencil-square"
            },
            {
                value: "external-link-square",
                text: "external-link-square"
            },
            {
                value: "share-square",
                text: "share-square"
            },
            {
                value: "compass",
                text: "compass"
            },
            {
                value: "toggle-down",
                text: "toggle-down"
            },
            {
                value: "caret-square-o-down",
                text: "caret-square-o-down"
            },
            {
                value: "toggle-up",
                text: "toggle-up"
            },
            {
                value: "caret-square-o-up",
                text: "caret-square-o-up"
            },
            {
                value: "toggle-right",
                text: "toggle-right"
            },
            {
                value: "caret-square-o-right",
                text: "caret-square-o-right"
            },
            {
                value: "euro",
                text: "euro"
            },
            {
                value: "eur",
                text: "eur"
            },
            {
                value: "gbp",
                text: "gbp"
            },
            {
                value: "dollar",
                text: "dollar"
            },
            {
                value: "usd",
                text: "usd"
            },
            {
                value: "rupee",
                text: "rupee"
            },
            {
                value: "inr",
                text: "inr"
            },
            {
                value: "cny",
                text: "cny"
            },
            {
                value: "rmb",
                text: "rmb"
            },
            {
                value: "yen",
                text: "yen"
            },
            {
                value: "jpy",
                text: "jpy"
            },
            {
                value: "ruble",
                text: "ruble"
            },
            {
                value: "rouble",
                text: "rouble"
            },
            {
                value: "rub",
                text: "rub"
            },
            {
                value: "won",
                text: "won"
            },
            {
                value: "krw",
                text: "krw"
            },
            {
                value: "bitcoin",
                text: "bitcoin"
            },
            {
                value: "btc",
                text: "btc"
            },
            {
                value: "file",
                text: "file"
            },
            {
                value: "file-text",
                text: "file-text"
            },
            {
                value: "sort-alpha-asc",
                text: "sort-alpha-asc"
            },
            {
                value: "sort-alpha-desc",
                text: "sort-alpha-desc"
            },
            {
                value: "sort-amount-asc",
                text: "sort-amount-asc"
            },
            {
                value: "sort-amount-desc",
                text: "sort-amount-desc"
            },
            {
                value: "sort-numeric-asc",
                text: "sort-numeric-asc"
            },
            {
                value: "sort-numeric-desc",
                text: "sort-numeric-desc"
            },
            {
                value: "thumbs-up",
                text: "thumbs-up"
            },
            {
                value: "thumbs-down",
                text: "thumbs-down"
            },
            {
                value: "youtube-square",
                text: "youtube-square"
            },
            {
                value: "youtube",
                text: "youtube"
            },
            {
                value: "xing",
                text: "xing"
            },
            {
                value: "xing-square",
                text: "xing-square"
            },
            {
                value: "youtube-play",
                text: "youtube-play"
            },
            {
                value: "dropbox",
                text: "dropbox"
            },
            {
                value: "stack-overflow",
                text: "stack-overflow"
            },
            {
                value: "instagram",
                text: "instagram"
            },
            {
                value: "flickr",
                text: "flickr"
            },
            {
                value: "adn",
                text: "adn"
            },
            {
                value: "bitbucket",
                text: "bitbucket"
            },
            {
                value: "bitbucket-square",
                text: "bitbucket-square"
            },
            {
                value: "tumblr",
                text: "tumblr"
            },
            {
                value: "tumblr-square",
                text: "tumblr-square"
            },
            {
                value: "long-arrow-down",
                text: "long-arrow-down"
            },
            {
                value: "long-arrow-up",
                text: "long-arrow-up"
            },
            {
                value: "long-arrow-left",
                text: "long-arrow-left"
            },
            {
                value: "long-arrow-right",
                text: "long-arrow-right"
            },
            {
                value: "apple",
                text: "apple"
            },
            {
                value: "windows",
                text: "windows"
            },
            {
                value: "android",
                text: "android"
            },
            {
                value: "linux",
                text: "linux"
            },
            {
                value: "dribbble",
                text: "dribbble"
            },
            {
                value: "skype",
                text: "skype"
            },
            {
                value: "foursquare",
                text: "foursquare"
            },
            {
                value: "trello",
                text: "trello"
            },
            {
                value: "female",
                text: "female"
            },
            {
                value: "male",
                text: "male"
            },
            {
                value: "gittip",
                text: "gittip"
            },
            {
                value: "gratipay",
                text: "gratipay"
            },
            {
                value: "sun-o",
                text: "sun-o"
            },
            {
                value: "moon-o",
                text: "moon-o"
            },
            {
                value: "archive",
                text: "archive"
            },
            {
                value: "bug",
                text: "bug"
            },
            {
                value: "vk",
                text: "vk"
            },
            {
                value: "weibo",
                text: "weibo"
            },
            {
                value: "renren",
                text: "renren"
            },
            {
                value: "pagelines",
                text: "pagelines"
            },
            {
                value: "stack-exchange",
                text: "stack-exchange"
            },
            {
                value: "arrow-circle-o-right",
                text: "arrow-circle-o-right"
            },
            {
                value: "arrow-circle-o-left",
                text: "arrow-circle-o-left"
            },
            {
                value: "toggle-left",
                text: "toggle-left"
            },
            {
                value: "caret-square-o-left",
                text: "caret-square-o-left"
            },
            {
                value: "dot-circle-o",
                text: "dot-circle-o"
            },
            {
                value: "wheelchair",
                text: "wheelchair"
            },
            {
                value: "vimeo-square",
                text: "vimeo-square"
            },
            {
                value: "turkish-lira",
                text: "turkish-lira"
            },
            {
                value: "try",
                text: "try"
            },
            {
                value: "plus-square-o",
                text: "plus-square-o"
            },
            {
                value: "space-shuttle",
                text: "space-shuttle"
            },
            {
                value: "slack",
                text: "slack"
            },
            {
                value: "envelope-square",
                text: "envelope-square"
            },
            {
                value: "wordpress",
                text: "wordpress"
            },
            {
                value: "openid",
                text: "openid"
            },
            {
                value: "institution",
                text: "institution"
            },
            {
                value: "bank",
                text: "bank"
            },
            {
                value: "university",
                text: "university"
            },
            {
                value: "mortar-board",
                text: "mortar-board"
            },
            {
                value: "graduation-cap",
                text: "graduation-cap"
            },
            {
                value: "yahoo",
                text: "yahoo"
            },
            {
                value: "google",
                text: "google"
            },
            {
                value: "reddit",
                text: "reddit"
            },
            {
                value: "reddit-square",
                text: "reddit-square"
            },
            {
                value: "stumbleupon-circle",
                text: "stumbleupon-circle"
            },
            {
                value: "stumbleupon",
                text: "stumbleupon"
            },
            {
                value: "delicious",
                text: "delicious"
            },
            {
                value: "digg",
                text: "digg"
            },
            {
                value: "pied-piper",
                text: "pied-piper"
            },
            {
                value: "pied-piper-alt",
                text: "pied-piper-alt"
            },
            {
                value: "drupal",
                text: "drupal"
            },
            {
                value: "joomla",
                text: "joomla"
            },
            {
                value: "language",
                text: "language"
            },
            {
                value: "fax",
                text: "fax"
            },
            {
                value: "building",
                text: "building"
            },
            {
                value: "child",
                text: "child"
            },
            {
                value: "paw",
                text: "paw"
            },
            {
                value: "spoon",
                text: "spoon"
            },
            {
                value: "cube",
                text: "cube"
            },
            {
                value: "cubes",
                text: "cubes"
            },
            {
                value: "behance",
                text: "behance"
            },
            {
                value: "behance-square",
                text: "behance-square"
            },
            {
                value: "steam",
                text: "steam"
            },
            {
                value: "steam-square",
                text: "steam-square"
            },
            {
                value: "recycle",
                text: "recycle"
            },
            {
                value: "automobile",
                text: "automobile"
            },
            {
                value: "car",
                text: "car"
            },
            {
                value: "cab",
                text: "cab"
            },
            {
                value: "taxi",
                text: "taxi"
            },
            {
                value: "tree",
                text: "tree"
            },
            {
                value: "spotify",
                text: "spotify"
            },
            {
                value: "deviantart",
                text: "deviantart"
            },
            {
                value: "soundcloud",
                text: "soundcloud"
            },
            {
                value: "database",
                text: "database"
            },
            {
                value: "file-pdf-o",
                text: "file-pdf-o"
            },
            {
                value: "file-word-o",
                text: "file-word-o"
            },
            {
                value: "file-excel-o",
                text: "file-excel-o"
            },
            {
                value: "file-powerpoint-o",
                text: "file-powerpoint-o"
            },
            {
                value: "file-photo-o",
                text: "file-photo-o"
            },
            {
                value: "file-picture-o",
                text: "file-picture-o"
            },
            {
                value: "file-image-o",
                text: "file-image-o"
            },
            {
                value: "file-zip-o",
                text: "file-zip-o"
            },
            {
                value: "file-archive-o",
                text: "file-archive-o"
            },
            {
                value: "file-sound-o",
                text: "file-sound-o"
            },
            {
                value: "file-audio-o",
                text: "file-audio-o"
            },
            {
                value: "file-movie-o",
                text: "file-movie-o"
            },
            {
                value: "file-video-o",
                text: "file-video-o"
            },
            {
                value: "file-code-o",
                text: "file-code-o"
            },
            {
                value: "vine",
                text: "vine"
            },
            {
                value: "codepen",
                text: "codepen"
            },
            {
                value: "jsfiddle",
                text: "jsfiddle"
            },
            {
                value: "life-bouy",
                text: "life-bouy"
            },
            {
                value: "life-buoy",
                text: "life-buoy"
            },
            {
                value: "life-saver",
                text: "life-saver"
            },
            {
                value: "support",
                text: "support"
            },
            {
                value: "life-ring",
                text: "life-ring"
            },
            {
                value: "circle-o-notch",
                text: "circle-o-notch"
            },
            {
                value: "ra",
                text: "ra"
            },
            {
                value: "rebel",
                text: "rebel"
            },
            {
                value: "ge",
                text: "ge"
            },
            {
                value: "empire",
                text: "empire"
            },
            {
                value: "git-square",
                text: "git-square"
            },
            {
                value: "git",
                text: "git"
            },
            {
                value: "y-combinator-square",
                text: "y-combinator-square"
            },
            {
                value: "yc-square",
                text: "yc-square"
            },
            {
                value: "hacker-news",
                text: "hacker-news"
            },
            {
                value: "tencent-weibo",
                text: "tencent-weibo"
            },
            {
                value: "qq",
                text: "qq"
            },
            {
                value: "wechat",
                text: "wechat"
            },
            {
                value: "weixin",
                text: "weixin"
            },
            {
                value: "send",
                text: "send"
            },
            {
                value: "paper-plane",
                text: "paper-plane"
            },
            {
                value: "send-o",
                text: "send-o"
            },
            {
                value: "paper-plane-o",
                text: "paper-plane-o"
            },
            {
                value: "history",
                text: "history"
            },
            {
                value: "circle-thin",
                text: "circle-thin"
            },
            {
                value: "header",
                text: "header"
            },
            {
                value: "paragraph",
                text: "paragraph"
            },
            {
                value: "sliders",
                text: "sliders"
            },
            {
                value: "share-alt",
                text: "share-alt"
            },
            {
                value: "share-alt-square",
                text: "share-alt-square"
            },
            {
                value: "bomb",
                text: "bomb"
            },
            {
                value: "soccer-ball-o",
                text: "soccer-ball-o"
            },
            {
                value: "futbol-o",
                text: "futbol-o"
            },
            {
                value: "tty",
                text: "tty"
            },
            {
                value: "binoculars",
                text: "binoculars"
            },
            {
                value: "plug",
                text: "plug"
            },
            {
                value: "slideshare",
                text: "slideshare"
            },
            {
                value: "twitch",
                text: "twitch"
            },
            {
                value: "yelp",
                text: "yelp"
            },
            {
                value: "newspaper-o",
                text: "newspaper-o"
            },
            {
                value: "wifi",
                text: "wifi"
            },
            {
                value: "calculator",
                text: "calculator"
            },
            {
                value: "paypal",
                text: "paypal"
            },
            {
                value: "google-wallet",
                text: "google-wallet"
            },
            {
                value: "cc-visa",
                text: "cc-visa"
            },
            {
                value: "cc-mastercard",
                text: "cc-mastercard"
            },
            {
                value: "cc-discover",
                text: "cc-discover"
            },
            {
                value: "cc-amex",
                text: "cc-amex"
            },
            {
                value: "cc-paypal",
                text: "cc-paypal"
            },
            {
                value: "cc-stripe",
                text: "cc-stripe"
            },
            {
                value: "bell-slash",
                text: "bell-slash"
            },
            {
                value: "bell-slash-o",
                text: "bell-slash-o"
            },
            {
                value: "trash",
                text: "trash"
            },
            {
                value: "copyright",
                text: "copyright"
            },
            {
                value: "at",
                text: "at"
            },
            {
                value: "eyedropper",
                text: "eyedropper"
            },
            {
                value: "paint-brush",
                text: "paint-brush"
            },
            {
                value: "birthday-cake",
                text: "birthday-cake"
            },
            {
                value: "area-chart",
                text: "area-chart"
            },
            {
                value: "pie-chart",
                text: "pie-chart"
            },
            {
                value: "line-chart",
                text: "line-chart"
            },
            {
                value: "lastfm",
                text: "lastfm"
            },
            {
                value: "lastfm-square",
                text: "lastfm-square"
            },
            {
                value: "toggle-off",
                text: "toggle-off"
            },
            {
                value: "toggle-on",
                text: "toggle-on"
            },
            {
                value: "bicycle",
                text: "bicycle"
            },
            {
                value: "bus",
                text: "bus"
            },
            {
                value: "ioxhost",
                text: "ioxhost"
            },
            {
                value: "angellist",
                text: "angellist"
            },
            {
                value: "cc",
                text: "cc"
            },
            {
                value: "shekel",
                text: "shekel"
            },
            {
                value: "sheqel",
                text: "sheqel"
            },
            {
                value: "ils",
                text: "ils"
            },
            {
                value: "meanpath",
                text: "meanpath"
            },
            {
                value: "buysellads",
                text: "buysellads"
            },
            {
                value: "connectdevelop",
                text: "connectdevelop"
            },
            {
                value: "dashcube",
                text: "dashcube"
            },
            {
                value: "forumbee",
                text: "forumbee"
            },
            {
                value: "leanpub",
                text: "leanpub"
            },
            {
                value: "sellsy",
                text: "sellsy"
            },
            {
                value: "shirtsinbulk",
                text: "shirtsinbulk"
            },
            {
                value: "simplybuilt",
                text: "simplybuilt"
            },
            {
                value: "skyatlas",
                text: "skyatlas"
            },
            {
                value: "cart-plus",
                text: "cart-plus"
            },
            {
                value: "cart-arrow-down",
                text: "cart-arrow-down"
            },
            {
                value: "diamond",
                text: "diamond"
            },
            {
                value: "ship",
                text: "ship"
            },
            {
                value: "user-secret",
                text: "user-secret"
            },
            {
                value: "motorcycle",
                text: "motorcycle"
            },
            {
                value: "street-view",
                text: "street-view"
            },
            {
                value: "heartbeat",
                text: "heartbeat"
            },
            {
                value: "venus",
                text: "venus"
            },
            {
                value: "mars",
                text: "mars"
            },
            {
                value: "mercury",
                text: "mercury"
            },
            {
                value: "intersex",
                text: "intersex"
            },
            {
                value: "transgender",
                text: "transgender"
            },
            {
                value: "transgender-alt",
                text: "transgender-alt"
            },
            {
                value: "venus-double",
                text: "venus-double"
            },
            {
                value: "mars-double",
                text: "mars-double"
            },
            {
                value: "venus-mars",
                text: "venus-mars"
            },
            {
                value: "mars-stroke",
                text: "mars-stroke"
            },
            {
                value: "mars-stroke-v",
                text: "mars-stroke-v"
            },
            {
                value: "mars-stroke-h",
                text: "mars-stroke-h"
            },
            {
                value: "neuter",
                text: "neuter"
            },
            {
                value: "genderless",
                text: "genderless"
            },
            {
                value: "facebook-official",
                text: "facebook-official"
            },
            {
                value: "pinterest-p",
                text: "pinterest-p"
            },
            {
                value: "whatsapp",
                text: "whatsapp"
            },
            {
                value: "server",
                text: "server"
            },
            {
                value: "user-plus",
                text: "user-plus"
            },
            {
                value: "user-times",
                text: "user-times"
            },
            {
                value: "hotel",
                text: "hotel"
            },
            {
                value: "bed",
                text: "bed"
            },
            {
                value: "viacoin",
                text: "viacoin"
            },
            {
                value: "train",
                text: "train"
            },
            {
                value: "subway",
                text: "subway"
            },
            {
                value: "medium",
                text: "medium"
            },
            {
                value: "yc",
                text: "yc"
            },
            {
                value: "y-combinator",
                text: "y-combinator"
            },
            {
                value: "optin-monster",
                text: "optin-monster"
            },
            {
                value: "opencart",
                text: "opencart"
            },
            {
                value: "expeditedssl",
                text: "expeditedssl"
            },
            {
                value: "battery-4",
                text: "battery-4"
            },
            {
                value: "battery-full",
                text: "battery-full"
            },
            {
                value: "battery-3",
                text: "battery-3"
            },
            {
                value: "battery-three-quarters",
                text: "battery-three-quarters"
            },
            {
                value: "battery-2",
                text: "battery-2"
            },
            {
                value: "battery-half",
                text: "battery-half"
            },
            {
                value: "battery-1",
                text: "battery-1"
            },
            {
                value: "battery-quarter",
                text: "battery-quarter"
            },
            {
                value: "battery-0",
                text: "battery-0"
            },
            {
                value: "battery-empty",
                text: "battery-empty"
            },
            {
                value: "mouse-pointer",
                text: "mouse-pointer"
            },
            {
                value: "i-cursor",
                text: "i-cursor"
            },
            {
                value: "object-group",
                text: "object-group"
            },
            {
                value: "object-ungroup",
                text: "object-ungroup"
            },
            {
                value: "sticky-note",
                text: "sticky-note"
            },
            {
                value: "sticky-note-o",
                text: "sticky-note-o"
            },
            {
                value: "cc-jcb",
                text: "cc-jcb"
            },
            {
                value: "cc-diners-club",
                text: "cc-diners-club"
            },
            {
                value: "clone",
                text: "clone"
            },
            {
                value: "balance-scale",
                text: "balance-scale"
            },
            {
                value: "hourglass-o",
                text: "hourglass-o"
            },
            {
                value: "hourglass-1",
                text: "hourglass-1"
            },
            {
                value: "hourglass-start",
                text: "hourglass-start"
            },
            {
                value: "hourglass-2",
                text: "hourglass-2"
            },
            {
                value: "hourglass-half",
                text: "hourglass-half"
            },
            {
                value: "hourglass-3",
                text: "hourglass-3"
            },
            {
                value: "hourglass-end",
                text: "hourglass-end"
            },
            {
                value: "hourglass",
                text: "hourglass"
            },
            {
                value: "hand-grab-o",
                text: "hand-grab-o"
            },
            {
                value: "hand-rock-o",
                text: "hand-rock-o"
            },
            {
                value: "hand-stop-o",
                text: "hand-stop-o"
            },
            {
                value: "hand-paper-o",
                text: "hand-paper-o"
            },
            {
                value: "hand-scissors-o",
                text: "hand-scissors-o"
            },
            {
                value: "hand-lizard-o",
                text: "hand-lizard-o"
            },
            {
                value: "hand-spock-o",
                text: "hand-spock-o"
            },
            {
                value: "hand-pointer-o",
                text: "hand-pointer-o"
            },
            {
                value: "hand-peace-o",
                text: "hand-peace-o"
            },
            {
                value: "trademark",
                text: "trademark"
            },
            {
                value: "registered",
                text: "registered"
            },
            {
                value: "creative-commons",
                text: "creative-commons"
            },
            {
                value: "gg",
                text: "gg"
            },
            {
                value: "gg-circle",
                text: "gg-circle"
            },
            {
                value: "tripadvisor",
                text: "tripadvisor"
            },
            {
                value: "odnoklassniki",
                text: "odnoklassniki"
            },
            {
                value: "odnoklassniki-square",
                text: "odnoklassniki-square"
            },
            {
                value: "get-pocket",
                text: "get-pocket"
            },
            {
                value: "wikipedia-w",
                text: "wikipedia-w"
            },
            {
                value: "safari",
                text: "safari"
            },
            {
                value: "chrome",
                text: "chrome"
            },
            {
                value: "firefox",
                text: "firefox"
            },
            {
                value: "opera",
                text: "opera"
            },
            {
                value: "internet-explorer",
                text: "internet-explorer"
            },
            {
                value: "tv",
                text: "tv"
            },
            {
                value: "television",
                text: "television"
            },
            {
                value: "contao",
                text: "contao"
            },
            {
                value: "500px",
                text: "500px"
            },
            {
                value: "amazon",
                text: "amazon"
            },
            {
                value: "calendar-plus-o",
                text: "calendar-plus-o"
            },
            {
                value: "calendar-minus-o",
                text: "calendar-minus-o"
            },
            {
                value: "calendar-times-o",
                text: "calendar-times-o"
            },
            {
                value: "calendar-check-o",
                text: "calendar-check-o"
            },
            {
                value: "industry",
                text: "industry"
            },
            {
                value: "map-pin",
                text: "map-pin"
            },
            {
                value: "map-signs",
                text: "map-signs"
            },
            {
                value: "map-o",
                text: "map-o"
            },
            {
                value: "map",
                text: "map"
            },
            {
                value: "commenting",
                text: "commenting"
            },
            {
                value: "commenting-o",
                text: "commenting-o"
            },
            {
                value: "houzz",
                text: "houzz"
            },
            {
                value: "vimeo",
                text: "vimeo"
            },
            {
                value: "black-tie",
                text: "black-tie"
            },
            {
                value: "fonticons",
                text: "fonticons"
            }]
        },
        onChange: function (node, value, input) {
            // console.log(node);
            // console.log(node[0]['lastChild']['firstElementChild']);
            $(node).find(".custom-follow-us").attr("class", "fa custom-follow-us fa-"+ value);
            Vvveb.Components.render("html/followus");
            return node;
        }
    }]
});

Vvveb.Components.extend("_base", "html/messagefromprincipal", {
    image: "icons/panel.svg",
    name: "Message From Principal",
    classes: ["principal-div"],
    html: '<div class="principal-div" brpb-element="Message from div">\
                <div class="media">\
                    <div class="media-body">\
                        <h5 class="principal-message-text"><span class="sep-border" brpb-element="Message from header text">Message From Principal</span></h5>\
                        <div class="principal-text">\
                            <p  brpb-element="Message from paragraph">\
                                I’m not a philologist. So philological, phonetic\
                                accuracy,\
                                meter-tempo – I know\
                                ’em very little. So, searching for those in this writing would be\
                                meaningless. I\
                                tried to put large word in Bengali, I’m not demanding that the largest. I\
                                tried\
                                to put some numbers (numerals) so that font rendering can be understood.\
                                Tried\
                                to put juktakkhôr/juktôbôrnô (consonant conjunct), punctuation marks; …\
                                tried to\
                                put half matra alphabets, full matra alphabets, matra-less alphabets, vowel\
                                marks here and there.I’m not a philologist. So philological, phonetic\
                                accuracy,\
                                meter-tempo – I know\
                                ’em very little. So, searching for those in this writing would be\
                                meaningless. I\
                                tried to put large word in Bengali, I’m not demanding that the largest. I\
                                tried\
                                to put some numbers (numerals) so that font rendering can be understood.\
                                Tried\
                                to put juktakkhôr/juktôbôrnô (consonant conjunct), punctuation marks; …\
                                tried to\
                                put half matra alphabets, full matra alphabets, matra-less alphabets, vowel\
                                marks here and there.\
                            </p>\
                            <button type="button" class="btn custom-view-more">\
                                <span>View More</span>\
                                <i class="fa fa-caret-right"></i>\
                            </button>\
                        </div>\
                    </div>\
                    <div class="pos-relative">\
                        <img class="img img-responsive img-fluid ml-3"  brpb-element="Message from img" src="'+ base_url + 'frontendassets/images/principle.png"\
                            alt="Image">\
                        <span class="prof-name d-block">Prof. Md. Shahjahan Khan</span>\
                    </div>\
                </div>\
                <hr class="principal-end-line-break">\
            </div>',
    properties: []
});

Vvveb.Components.extend("_base", "html/featuredbox", {
    image: "icons/panel.svg",
    name: "Featured Image",
    classes: ["featured-image"],
    html: '<div class="featured-image">\
                <div class="text-center custom-featured-image"><img class="img img-responsive img-fluid my-img" brpb-element="Featured image" src="'+ base_url + 'frontendassets/images/1.png"\
                        alt="Image"></div>\
                <div>\
                    <p class="text-center margin-all" brpb-element="Featured text 1">Outstanding</p>\
                    <p class="text-center margin-all" brpb-element="Featured text 2">Academic Success</p>\
                </div>\
            </div>',
    properties: []
});

Vvveb.Components.extend("_base", "html/footertop", {
    image: "icons/panel.svg",
    name: "Site Info Content",
    classes: ["custom-phone-div"],
    html: '<div class="custom-phone-div" brpb-element="Site Info">\
                <i class="fa fa-mobile fa-3x custom-font-awesome-class"></i>\
                <div style="margin-left: 16px;">\
                    <p class="phone-text" brpb-element="Site Info Text">Student Absentee</p>\
                    <h4 brpb-element="Site Info Mobile">03 9877 6000</h4>\
                </div>\
            </div>',
    properties: [{
        name: "Font Awesome",
        key: "add_child",
        inputtype: SelectInput,
        data: {
            options: [{
                value: "glass",
                text: "glass"
            },
            {
                value: "music",
                text: "music"
            },
            {
                value: "search",
                text: "search"
            },
            {
                value: "envelope-o",
                text: "envelope-o"
            },
            {
                value: "heart",
                text: "heart"
            },
            {
                value: "star",
                text: "star"
            },
            {
                value: "star-o",
                text: "star-o"
            },
            {
                value: "user",
                text: "user"
            },
            {
                value: "film",
                text: "film"
            },
            {
                value: "th-large",
                text: "th-large"
            },
            {
                value: "th",
                text: "th"
            },
            {
                value: "th-list",
                text: "th-list"
            },
            {
                value: "check",
                text: "check"
            },
            {
                value: "remove",
                text: "remove"
            },
            {
                value: "close",
                text: "close"
            },
            {
                value: "times",
                text: "times"
            },
            {
                value: "search-plus",
                text: "search-plus"
            },
            {
                value: "search-minus",
                text: "search-minus"
            },
            {
                value: "power-off",
                text: "power-off"
            },
            {
                value: "signal",
                text: "signal"
            },
            {
                value: "gear",
                text: "gear"
            },
            {
                value: "cog",
                text: "cog"
            },
            {
                value: "trash-o",
                text: "trash-o"
            },
            {
                value: "home",
                text: "home"
            },
            {
                value: "file-o",
                text: "file-o"
            },
            {
                value: "clock-o",
                text: "clock-o"
            },
            {
                value: "road",
                text: "road"
            },
            {
                value: "download",
                text: "download"
            },
            {
                value: "arrow-circle-o-down",
                text: "arrow-circle-o-down"
            },
            {
                value: "arrow-circle-o-up",
                text: "arrow-circle-o-up"
            },
            {
                value: "inbox",
                text: "inbox"
            },
            {
                value: "play-circle-o",
                text: "play-circle-o"
            },
            {
                value: "rotate-right",
                text: "rotate-right"
            },
            {
                value: "repeat",
                text: "repeat"
            },
            {
                value: "refresh",
                text: "refresh"
            },
            {
                value: "list-alt",
                text: "list-alt"
            },
            {
                value: "lock",
                text: "lock"
            },
            {
                value: "flag",
                text: "flag"
            },
            {
                value: "headphones",
                text: "headphones"
            },
            {
                value: "volume-off",
                text: "volume-off"
            },
            {
                value: "volume-down",
                text: "volume-down"
            },
            {
                value: "volume-up",
                text: "volume-up"
            },
            {
                value: "qrcode",
                text: "qrcode"
            },
            {
                value: "barcode",
                text: "barcode"
            },
            {
                value: "tag",
                text: "tag"
            },
            {
                value: "tags",
                text: "tags"
            },
            {
                value: "book",
                text: "book"
            },
            {
                value: "bookmark",
                text: "bookmark"
            },
            {
                value: "print",
                text: "print"
            },
            {
                value: "camera",
                text: "camera"
            },
            {
                value: "font",
                text: "font"
            },
            {
                value: "bold",
                text: "bold"
            },
            {
                value: "italic",
                text: "italic"
            },
            {
                value: "text-height",
                text: "text-height"
            },
            {
                value: "text-width",
                text: "text-width"
            },
            {
                value: "align-left",
                text: "align-left"
            },
            {
                value: "align-center",
                text: "align-center"
            },
            {
                value: "align-right",
                text: "align-right"
            },
            {
                value: "align-justify",
                text: "align-justify"
            },
            {
                value: "list",
                text: "list"
            },
            {
                value: "dedent",
                text: "dedent"
            },
            {
                value: "outdent",
                text: "outdent"
            },
            {
                value: "indent",
                text: "indent"
            },
            {
                value: "video-camera",
                text: "video-camera"
            },
            {
                value: "photo",
                text: "photo"
            },
            {
                value: "image",
                text: "image"
            },
            {
                value: "picture-o",
                text: "picture-o"
            },
            {
                value: "pencil",
                text: "pencil"
            },
            {
                value: "map-marker",
                text: "map-marker"
            },
            {
                value: "adjust",
                text: "adjust"
            },
            {
                value: "tint",
                text: "tint"
            },
            {
                value: "edit",
                text: "edit"
            },
            {
                value: "pencil-square-o",
                text: "pencil-square-o"
            },
            {
                value: "share-square-o",
                text: "share-square-o"
            },
            {
                value: "check-square-o",
                text: "check-square-o"
            },
            {
                value: "arrows",
                text: "arrows"
            },
            {
                value: "step-backward",
                text: "step-backward"
            },
            {
                value: "fast-backward",
                text: "fast-backward"
            },
            {
                value: "backward",
                text: "backward"
            },
            {
                value: "play",
                text: "play"
            },
            {
                value: "pause",
                text: "pause"
            },
            {
                value: "stop",
                text: "stop"
            },
            {
                value: "forward",
                text: "forward"
            },
            {
                value: "fast-forward",
                text: "fast-forward"
            },
            {
                value: "step-forward",
                text: "step-forward"
            },
            {
                value: "eject",
                text: "eject"
            },
            {
                value: "chevron-left",
                text: "chevron-left"
            },
            {
                value: "chevron-right",
                text: "chevron-right"
            },
            {
                value: "plus-circle",
                text: "plus-circle"
            },
            {
                value: "minus-circle",
                text: "minus-circle"
            },
            {
                value: "times-circle",
                text: "times-circle"
            },
            {
                value: "check-circle",
                text: "check-circle"
            },
            {
                value: "question-circle",
                text: "question-circle"
            },
            {
                value: "info-circle",
                text: "info-circle"
            },
            {
                value: "crosshairs",
                text: "crosshairs"
            },
            {
                value: "times-circle-o",
                text: "times-circle-o"
            },
            {
                value: "check-circle-o",
                text: "check-circle-o"
            },
            {
                value: "ban",
                text: "ban"
            },
            {
                value: "arrow-left",
                text: "arrow-left"
            },
            {
                value: "arrow-right",
                text: "arrow-right"
            },
            {
                value: "arrow-up",
                text: "arrow-up"
            },
            {
                value: "arrow-down",
                text: "arrow-down"
            },
            {
                value: "mail-forward",
                text: "mail-forward"
            },
            {
                value: "share",
                text: "share"
            },
            {
                value: "expand",
                text: "expand"
            },
            {
                value: "compress",
                text: "compress"
            },
            {
                value: "plus",
                text: "plus"
            },
            {
                value: "minus",
                text: "minus"
            },
            {
                value: "asterisk",
                text: "asterisk"
            },
            {
                value: "exclamation-circle",
                text: "exclamation-circle"
            },
            {
                value: "gift",
                text: "gift"
            },
            {
                value: "leaf",
                text: "leaf"
            },
            {
                value: "fire",
                text: "fire"
            },
            {
                value: "eye",
                text: "eye"
            },
            {
                value: "eye-slash",
                text: "eye-slash"
            },
            {
                value: "warning",
                text: "warning"
            },
            {
                value: "exclamation-triangle",
                text: "exclamation-triangle"
            },
            {
                value: "plane",
                text: "plane"
            },
            {
                value: "calendar",
                text: "calendar"
            },
            {
                value: "random",
                text: "random"
            },
            {
                value: "comment",
                text: "comment"
            },
            {
                value: "magnet",
                text: "magnet"
            },
            {
                value: "chevron-up",
                text: "chevron-up"
            },
            {
                value: "chevron-down",
                text: "chevron-down"
            },
            {
                value: "retweet",
                text: "retweet"
            },
            {
                value: "shopping-cart",
                text: "shopping-cart"
            },
            {
                value: "folder",
                text: "folder"
            },
            {
                value: "folder-open",
                text: "folder-open"
            },
            {
                value: "arrows-v",
                text: "arrows-v"
            },
            {
                value: "arrows-h",
                text: "arrows-h"
            },
            {
                value: "bar-chart-o",
                text: "bar-chart-o"
            },
            {
                value: "bar-chart",
                text: "bar-chart"
            },
            {
                value: "twitter-square",
                text: "twitter-square"
            },
            {
                value: "facebook-square",
                text: "facebook-square"
            },
            {
                value: "camera-retro",
                text: "camera-retro"
            },
            {
                value: "key",
                text: "key"
            },
            {
                value: "gears",
                text: "gears"
            },
            {
                value: "cogs",
                text: "cogs"
            },
            {
                value: "comments",
                text: "comments"
            },
            {
                value: "thumbs-o-up",
                text: "thumbs-o-up"
            },
            {
                value: "thumbs-o-down",
                text: "thumbs-o-down"
            },
            {
                value: "star-half",
                text: "star-half"
            },
            {
                value: "heart-o",
                text: "heart-o"
            },
            {
                value: "sign-out",
                text: "sign-out"
            },
            {
                value: "linkedin-square",
                text: "linkedin-square"
            },
            {
                value: "thumb-tack",
                text: "thumb-tack"
            },
            {
                value: "external-link",
                text: "external-link"
            },
            {
                value: "sign-in",
                text: "sign-in"
            },
            {
                value: "trophy",
                text: "trophy"
            },
            {
                value: "github-square",
                text: "github-square"
            },
            {
                value: "upload",
                text: "upload"
            },
            {
                value: "lemon-o",
                text: "lemon-o"
            },
            {
                value: "phone",
                text: "phone"
            },
            {
                value: "square-o",
                text: "square-o"
            },
            {
                value: "bookmark-o",
                text: "bookmark-o"
            },
            {
                value: "phone-square",
                text: "phone-square"
            },
            {
                value: "twitter",
                text: "twitter"
            },
            {
                value: "facebook-f",
                text: "facebook-f"
            },
            {
                value: "facebook",
                text: "facebook"
            },
            {
                value: "github",
                text: "github"
            },
            {
                value: "unlock",
                text: "unlock"
            },
            {
                value: "credit-card",
                text: "credit-card"
            },
            {
                value: "feed",
                text: "feed"
            },
            {
                value: "rss",
                text: "rss"
            },
            {
                value: "hdd-o",
                text: "hdd-o"
            },
            {
                value: "bullhorn",
                text: "bullhorn"
            },
            {
                value: "bell",
                text: "bell"
            },
            {
                value: "certificate",
                text: "certificate"
            },
            {
                value: "hand-o-right",
                text: "hand-o-right"
            },
            {
                value: "hand-o-left",
                text: "hand-o-left"
            },
            {
                value: "hand-o-up",
                text: "hand-o-up"
            },
            {
                value: "hand-o-down",
                text: "hand-o-down"
            },
            {
                value: "arrow-circle-left",
                text: "arrow-circle-left"
            },
            {
                value: "arrow-circle-right",
                text: "arrow-circle-right"
            },
            {
                value: "arrow-circle-up",
                text: "arrow-circle-up"
            },
            {
                value: "arrow-circle-down",
                text: "arrow-circle-down"
            },
            {
                value: "globe",
                text: "globe"
            },
            {
                value: "wrench",
                text: "wrench"
            },
            {
                value: "tasks",
                text: "tasks"
            },
            {
                value: "filter",
                text: "filter"
            },
            {
                value: "briefcase",
                text: "briefcase"
            },
            {
                value: "arrows-alt",
                text: "arrows-alt"
            },
            {
                value: "group",
                text: "group"
            },
            {
                value: "users",
                text: "users"
            },
            {
                value: "chain",
                text: "chain"
            },
            {
                value: "link",
                text: "link"
            },
            {
                value: "cloud",
                text: "cloud"
            },
            {
                value: "flask",
                text: "flask"
            },
            {
                value: "cut",
                text: "cut"
            },
            {
                value: "scissors",
                text: "scissors"
            },
            {
                value: "copy",
                text: "copy"
            },
            {
                value: "files-o",
                text: "files-o"
            },
            {
                value: "paperclip",
                text: "paperclip"
            },
            {
                value: "save",
                text: "save"
            },
            {
                value: "floppy-o",
                text: "floppy-o"
            },
            {
                value: "square",
                text: "square"
            },
            {
                value: "navicon",
                text: "navicon"
            },
            {
                value: "reorder",
                text: "reorder"
            },
            {
                value: "bars",
                text: "bars"
            },
            {
                value: "list-ul",
                text: "list-ul"
            },
            {
                value: "list-ol",
                text: "list-ol"
            },
            {
                value: "strikethrough",
                text: "strikethrough"
            },
            {
                value: "underline",
                text: "underline"
            },
            {
                value: "table",
                text: "table"
            },
            {
                value: "magic",
                text: "magic"
            },
            {
                value: "truck",
                text: "truck"
            },
            {
                value: "pinterest",
                text: "pinterest"
            },
            {
                value: "pinterest-square",
                text: "pinterest-square"
            },
            {
                value: "google-plus-square",
                text: "google-plus-square"
            },
            {
                value: "google-plus",
                text: "google-plus"
            },
            {
                value: "money",
                text: "money"
            },
            {
                value: "caret-down",
                text: "caret-down"
            },
            {
                value: "caret-up",
                text: "caret-up"
            },
            {
                value: "caret-left",
                text: "caret-left"
            },
            {
                value: "caret-right",
                text: "caret-right"
            },
            {
                value: "columns",
                text: "columns"
            },
            {
                value: "unsorted",
                text: "unsorted"
            },
            {
                value: "sort",
                text: "sort"
            },
            {
                value: "sort-down",
                text: "sort-down"
            },
            {
                value: "sort-desc",
                text: "sort-desc"
            },
            {
                value: "sort-up",
                text: "sort-up"
            },
            {
                value: "sort-asc",
                text: "sort-asc"
            },
            {
                value: "envelope",
                text: "envelope"
            },
            {
                value: "linkedin",
                text: "linkedin"
            },
            {
                value: "rotate-left",
                text: "rotate-left"
            },
            {
                value: "undo",
                text: "undo"
            },
            {
                value: "legal",
                text: "legal"
            },
            {
                value: "gavel",
                text: "gavel"
            },
            {
                value: "dashboard",
                text: "dashboard"
            },
            {
                value: "tachometer",
                text: "tachometer"
            },
            {
                value: "comment-o",
                text: "comment-o"
            },
            {
                value: "comments-o",
                text: "comments-o"
            },
            {
                value: "flash",
                text: "flash"
            },
            {
                value: "bolt",
                text: "bolt"
            },
            {
                value: "sitemap",
                text: "sitemap"
            },
            {
                value: "umbrella",
                text: "umbrella"
            },
            {
                value: "paste",
                text: "paste"
            },
            {
                value: "clipboard",
                text: "clipboard"
            },
            {
                value: "lightbulb-o",
                text: "lightbulb-o"
            },
            {
                value: "exchange",
                text: "exchange"
            },
            {
                value: "cloud-download",
                text: "cloud-download"
            },
            {
                value: "cloud-upload",
                text: "cloud-upload"
            },
            {
                value: "user-md",
                text: "user-md"
            },
            {
                value: "stethoscope",
                text: "stethoscope"
            },
            {
                value: "suitcase",
                text: "suitcase"
            },
            {
                value: "bell-o",
                text: "bell-o"
            },
            {
                value: "coffee",
                text: "coffee"
            },
            {
                value: "cutlery",
                text: "cutlery"
            },
            {
                value: "file-text-o",
                text: "file-text-o"
            },
            {
                value: "building-o",
                text: "building-o"
            },
            {
                value: "hospital-o",
                text: "hospital-o"
            },
            {
                value: "ambulance",
                text: "ambulance"
            },
            {
                value: "medkit",
                text: "medkit"
            },
            {
                value: "fighter-jet",
                text: "fighter-jet"
            },
            {
                value: "beer",
                text: "beer"
            },
            {
                value: "h-square",
                text: "h-square"
            },
            {
                value: "plus-square",
                text: "plus-square"
            },
            {
                value: "angle-double-left",
                text: "angle-double-left"
            },
            {
                value: "angle-double-right",
                text: "angle-double-right"
            },
            {
                value: "angle-double-up",
                text: "angle-double-up"
            },
            {
                value: "angle-double-down",
                text: "angle-double-down"
            },
            {
                value: "angle-left",
                text: "angle-left"
            },
            {
                value: "angle-right",
                text: "angle-right"
            },
            {
                value: "angle-up",
                text: "angle-up"
            },
            {
                value: "angle-down",
                text: "angle-down"
            },
            {
                value: "desktop",
                text: "desktop"
            },
            {
                value: "laptop",
                text: "laptop"
            },
            {
                value: "tablet",
                text: "tablet"
            },
            {
                value: "mobile-phone",
                text: "mobile-phone"
            },
            {
                value: "mobile",
                text: "mobile"
            },
            {
                value: "circle-o",
                text: "circle-o"
            },
            {
                value: "quote-left",
                text: "quote-left"
            },
            {
                value: "quote-right",
                text: "quote-right"
            },
            {
                value: "spinner",
                text: "spinner"
            },
            {
                value: "circle",
                text: "circle"
            },
            {
                value: "mail-reply",
                text: "mail-reply"
            },
            {
                value: "reply",
                text: "reply"
            },
            {
                value: "github-alt",
                text: "github-alt"
            },
            {
                value: "folder-o",
                text: "folder-o"
            },
            {
                value: "folder-open-o",
                text: "folder-open-o"
            },
            {
                value: "smile-o",
                text: "smile-o"
            },
            {
                value: "frown-o",
                text: "frown-o"
            },
            {
                value: "meh-o",
                text: "meh-o"
            },
            {
                value: "gamepad",
                text: "gamepad"
            },
            {
                value: "keyboard-o",
                text: "keyboard-o"
            },
            {
                value: "flag-o",
                text: "flag-o"
            },
            {
                value: "flag-checkered",
                text: "flag-checkered"
            },
            {
                value: "terminal",
                text: "terminal"
            },
            {
                value: "code",
                text: "code"
            },
            {
                value: "mail-reply-all",
                text: "mail-reply-all"
            },
            {
                value: "reply-all",
                text: "reply-all"
            },
            {
                value: "star-half-empty",
                text: "star-half-empty"
            },
            {
                value: "star-half-full",
                text: "star-half-full"
            },
            {
                value: "star-half-o",
                text: "star-half-o"
            },
            {
                value: "location-arrow",
                text: "location-arrow"
            },
            {
                value: "crop",
                text: "crop"
            },
            {
                value: "code-fork",
                text: "code-fork"
            },
            {
                value: "unlink",
                text: "unlink"
            },
            {
                value: "chain-broken",
                text: "chain-broken"
            },
            {
                value: "question",
                text: "question"
            },
            {
                value: "info",
                text: "info"
            },
            {
                value: "exclamation",
                text: "exclamation"
            },
            {
                value: "superscript",
                text: "superscript"
            },
            {
                value: "subscript",
                text: "subscript"
            },
            {
                value: "eraser",
                text: "eraser"
            },
            {
                value: "puzzle-piece",
                text: "puzzle-piece"
            },
            {
                value: "microphone",
                text: "microphone"
            },
            {
                value: "microphone-slash",
                text: "microphone-slash"
            },
            {
                value: "shield",
                text: "shield"
            },
            {
                value: "calendar-o",
                text: "calendar-o"
            },
            {
                value: "fire-extinguisher",
                text: "fire-extinguisher"
            },
            {
                value: "rocket",
                text: "rocket"
            },
            {
                value: "maxcdn",
                text: "maxcdn"
            },
            {
                value: "chevron-circle-left",
                text: "chevron-circle-left"
            },
            {
                value: "chevron-circle-right",
                text: "chevron-circle-right"
            },
            {
                value: "chevron-circle-up",
                text: "chevron-circle-up"
            },
            {
                value: "chevron-circle-down",
                text: "chevron-circle-down"
            },
            {
                value: "html5",
                text: "html5"
            },
            {
                value: "css3",
                text: "css3"
            },
            {
                value: "anchor",
                text: "anchor"
            },
            {
                value: "unlock-alt",
                text: "unlock-alt"
            },
            {
                value: "bullseye",
                text: "bullseye"
            },
            {
                value: "ellipsis-h",
                text: "ellipsis-h"
            },
            {
                value: "ellipsis-v",
                text: "ellipsis-v"
            },
            {
                value: "rss-square",
                text: "rss-square"
            },
            {
                value: "play-circle",
                text: "play-circle"
            },
            {
                value: "ticket",
                text: "ticket"
            },
            {
                value: "minus-square",
                text: "minus-square"
            },
            {
                value: "minus-square-o",
                text: "minus-square-o"
            },
            {
                value: "level-up",
                text: "level-up"
            },
            {
                value: "level-down",
                text: "level-down"
            },
            {
                value: "check-square",
                text: "check-square"
            },
            {
                value: "pencil-square",
                text: "pencil-square"
            },
            {
                value: "external-link-square",
                text: "external-link-square"
            },
            {
                value: "share-square",
                text: "share-square"
            },
            {
                value: "compass",
                text: "compass"
            },
            {
                value: "toggle-down",
                text: "toggle-down"
            },
            {
                value: "caret-square-o-down",
                text: "caret-square-o-down"
            },
            {
                value: "toggle-up",
                text: "toggle-up"
            },
            {
                value: "caret-square-o-up",
                text: "caret-square-o-up"
            },
            {
                value: "toggle-right",
                text: "toggle-right"
            },
            {
                value: "caret-square-o-right",
                text: "caret-square-o-right"
            },
            {
                value: "euro",
                text: "euro"
            },
            {
                value: "eur",
                text: "eur"
            },
            {
                value: "gbp",
                text: "gbp"
            },
            {
                value: "dollar",
                text: "dollar"
            },
            {
                value: "usd",
                text: "usd"
            },
            {
                value: "rupee",
                text: "rupee"
            },
            {
                value: "inr",
                text: "inr"
            },
            {
                value: "cny",
                text: "cny"
            },
            {
                value: "rmb",
                text: "rmb"
            },
            {
                value: "yen",
                text: "yen"
            },
            {
                value: "jpy",
                text: "jpy"
            },
            {
                value: "ruble",
                text: "ruble"
            },
            {
                value: "rouble",
                text: "rouble"
            },
            {
                value: "rub",
                text: "rub"
            },
            {
                value: "won",
                text: "won"
            },
            {
                value: "krw",
                text: "krw"
            },
            {
                value: "bitcoin",
                text: "bitcoin"
            },
            {
                value: "btc",
                text: "btc"
            },
            {
                value: "file",
                text: "file"
            },
            {
                value: "file-text",
                text: "file-text"
            },
            {
                value: "sort-alpha-asc",
                text: "sort-alpha-asc"
            },
            {
                value: "sort-alpha-desc",
                text: "sort-alpha-desc"
            },
            {
                value: "sort-amount-asc",
                text: "sort-amount-asc"
            },
            {
                value: "sort-amount-desc",
                text: "sort-amount-desc"
            },
            {
                value: "sort-numeric-asc",
                text: "sort-numeric-asc"
            },
            {
                value: "sort-numeric-desc",
                text: "sort-numeric-desc"
            },
            {
                value: "thumbs-up",
                text: "thumbs-up"
            },
            {
                value: "thumbs-down",
                text: "thumbs-down"
            },
            {
                value: "youtube-square",
                text: "youtube-square"
            },
            {
                value: "youtube",
                text: "youtube"
            },
            {
                value: "xing",
                text: "xing"
            },
            {
                value: "xing-square",
                text: "xing-square"
            },
            {
                value: "youtube-play",
                text: "youtube-play"
            },
            {
                value: "dropbox",
                text: "dropbox"
            },
            {
                value: "stack-overflow",
                text: "stack-overflow"
            },
            {
                value: "instagram",
                text: "instagram"
            },
            {
                value: "flickr",
                text: "flickr"
            },
            {
                value: "adn",
                text: "adn"
            },
            {
                value: "bitbucket",
                text: "bitbucket"
            },
            {
                value: "bitbucket-square",
                text: "bitbucket-square"
            },
            {
                value: "tumblr",
                text: "tumblr"
            },
            {
                value: "tumblr-square",
                text: "tumblr-square"
            },
            {
                value: "long-arrow-down",
                text: "long-arrow-down"
            },
            {
                value: "long-arrow-up",
                text: "long-arrow-up"
            },
            {
                value: "long-arrow-left",
                text: "long-arrow-left"
            },
            {
                value: "long-arrow-right",
                text: "long-arrow-right"
            },
            {
                value: "apple",
                text: "apple"
            },
            {
                value: "windows",
                text: "windows"
            },
            {
                value: "android",
                text: "android"
            },
            {
                value: "linux",
                text: "linux"
            },
            {
                value: "dribbble",
                text: "dribbble"
            },
            {
                value: "skype",
                text: "skype"
            },
            {
                value: "foursquare",
                text: "foursquare"
            },
            {
                value: "trello",
                text: "trello"
            },
            {
                value: "female",
                text: "female"
            },
            {
                value: "male",
                text: "male"
            },
            {
                value: "gittip",
                text: "gittip"
            },
            {
                value: "gratipay",
                text: "gratipay"
            },
            {
                value: "sun-o",
                text: "sun-o"
            },
            {
                value: "moon-o",
                text: "moon-o"
            },
            {
                value: "archive",
                text: "archive"
            },
            {
                value: "bug",
                text: "bug"
            },
            {
                value: "vk",
                text: "vk"
            },
            {
                value: "weibo",
                text: "weibo"
            },
            {
                value: "renren",
                text: "renren"
            },
            {
                value: "pagelines",
                text: "pagelines"
            },
            {
                value: "stack-exchange",
                text: "stack-exchange"
            },
            {
                value: "arrow-circle-o-right",
                text: "arrow-circle-o-right"
            },
            {
                value: "arrow-circle-o-left",
                text: "arrow-circle-o-left"
            },
            {
                value: "toggle-left",
                text: "toggle-left"
            },
            {
                value: "caret-square-o-left",
                text: "caret-square-o-left"
            },
            {
                value: "dot-circle-o",
                text: "dot-circle-o"
            },
            {
                value: "wheelchair",
                text: "wheelchair"
            },
            {
                value: "vimeo-square",
                text: "vimeo-square"
            },
            {
                value: "turkish-lira",
                text: "turkish-lira"
            },
            {
                value: "try",
                text: "try"
            },
            {
                value: "plus-square-o",
                text: "plus-square-o"
            },
            {
                value: "space-shuttle",
                text: "space-shuttle"
            },
            {
                value: "slack",
                text: "slack"
            },
            {
                value: "envelope-square",
                text: "envelope-square"
            },
            {
                value: "wordpress",
                text: "wordpress"
            },
            {
                value: "openid",
                text: "openid"
            },
            {
                value: "institution",
                text: "institution"
            },
            {
                value: "bank",
                text: "bank"
            },
            {
                value: "university",
                text: "university"
            },
            {
                value: "mortar-board",
                text: "mortar-board"
            },
            {
                value: "graduation-cap",
                text: "graduation-cap"
            },
            {
                value: "yahoo",
                text: "yahoo"
            },
            {
                value: "google",
                text: "google"
            },
            {
                value: "reddit",
                text: "reddit"
            },
            {
                value: "reddit-square",
                text: "reddit-square"
            },
            {
                value: "stumbleupon-circle",
                text: "stumbleupon-circle"
            },
            {
                value: "stumbleupon",
                text: "stumbleupon"
            },
            {
                value: "delicious",
                text: "delicious"
            },
            {
                value: "digg",
                text: "digg"
            },
            {
                value: "pied-piper",
                text: "pied-piper"
            },
            {
                value: "pied-piper-alt",
                text: "pied-piper-alt"
            },
            {
                value: "drupal",
                text: "drupal"
            },
            {
                value: "joomla",
                text: "joomla"
            },
            {
                value: "language",
                text: "language"
            },
            {
                value: "fax",
                text: "fax"
            },
            {
                value: "building",
                text: "building"
            },
            {
                value: "child",
                text: "child"
            },
            {
                value: "paw",
                text: "paw"
            },
            {
                value: "spoon",
                text: "spoon"
            },
            {
                value: "cube",
                text: "cube"
            },
            {
                value: "cubes",
                text: "cubes"
            },
            {
                value: "behance",
                text: "behance"
            },
            {
                value: "behance-square",
                text: "behance-square"
            },
            {
                value: "steam",
                text: "steam"
            },
            {
                value: "steam-square",
                text: "steam-square"
            },
            {
                value: "recycle",
                text: "recycle"
            },
            {
                value: "automobile",
                text: "automobile"
            },
            {
                value: "car",
                text: "car"
            },
            {
                value: "cab",
                text: "cab"
            },
            {
                value: "taxi",
                text: "taxi"
            },
            {
                value: "tree",
                text: "tree"
            },
            {
                value: "spotify",
                text: "spotify"
            },
            {
                value: "deviantart",
                text: "deviantart"
            },
            {
                value: "soundcloud",
                text: "soundcloud"
            },
            {
                value: "database",
                text: "database"
            },
            {
                value: "file-pdf-o",
                text: "file-pdf-o"
            },
            {
                value: "file-word-o",
                text: "file-word-o"
            },
            {
                value: "file-excel-o",
                text: "file-excel-o"
            },
            {
                value: "file-powerpoint-o",
                text: "file-powerpoint-o"
            },
            {
                value: "file-photo-o",
                text: "file-photo-o"
            },
            {
                value: "file-picture-o",
                text: "file-picture-o"
            },
            {
                value: "file-image-o",
                text: "file-image-o"
            },
            {
                value: "file-zip-o",
                text: "file-zip-o"
            },
            {
                value: "file-archive-o",
                text: "file-archive-o"
            },
            {
                value: "file-sound-o",
                text: "file-sound-o"
            },
            {
                value: "file-audio-o",
                text: "file-audio-o"
            },
            {
                value: "file-movie-o",
                text: "file-movie-o"
            },
            {
                value: "file-video-o",
                text: "file-video-o"
            },
            {
                value: "file-code-o",
                text: "file-code-o"
            },
            {
                value: "vine",
                text: "vine"
            },
            {
                value: "codepen",
                text: "codepen"
            },
            {
                value: "jsfiddle",
                text: "jsfiddle"
            },
            {
                value: "life-bouy",
                text: "life-bouy"
            },
            {
                value: "life-buoy",
                text: "life-buoy"
            },
            {
                value: "life-saver",
                text: "life-saver"
            },
            {
                value: "support",
                text: "support"
            },
            {
                value: "life-ring",
                text: "life-ring"
            },
            {
                value: "circle-o-notch",
                text: "circle-o-notch"
            },
            {
                value: "ra",
                text: "ra"
            },
            {
                value: "rebel",
                text: "rebel"
            },
            {
                value: "ge",
                text: "ge"
            },
            {
                value: "empire",
                text: "empire"
            },
            {
                value: "git-square",
                text: "git-square"
            },
            {
                value: "git",
                text: "git"
            },
            {
                value: "y-combinator-square",
                text: "y-combinator-square"
            },
            {
                value: "yc-square",
                text: "yc-square"
            },
            {
                value: "hacker-news",
                text: "hacker-news"
            },
            {
                value: "tencent-weibo",
                text: "tencent-weibo"
            },
            {
                value: "qq",
                text: "qq"
            },
            {
                value: "wechat",
                text: "wechat"
            },
            {
                value: "weixin",
                text: "weixin"
            },
            {
                value: "send",
                text: "send"
            },
            {
                value: "paper-plane",
                text: "paper-plane"
            },
            {
                value: "send-o",
                text: "send-o"
            },
            {
                value: "paper-plane-o",
                text: "paper-plane-o"
            },
            {
                value: "history",
                text: "history"
            },
            {
                value: "circle-thin",
                text: "circle-thin"
            },
            {
                value: "header",
                text: "header"
            },
            {
                value: "paragraph",
                text: "paragraph"
            },
            {
                value: "sliders",
                text: "sliders"
            },
            {
                value: "share-alt",
                text: "share-alt"
            },
            {
                value: "share-alt-square",
                text: "share-alt-square"
            },
            {
                value: "bomb",
                text: "bomb"
            },
            {
                value: "soccer-ball-o",
                text: "soccer-ball-o"
            },
            {
                value: "futbol-o",
                text: "futbol-o"
            },
            {
                value: "tty",
                text: "tty"
            },
            {
                value: "binoculars",
                text: "binoculars"
            },
            {
                value: "plug",
                text: "plug"
            },
            {
                value: "slideshare",
                text: "slideshare"
            },
            {
                value: "twitch",
                text: "twitch"
            },
            {
                value: "yelp",
                text: "yelp"
            },
            {
                value: "newspaper-o",
                text: "newspaper-o"
            },
            {
                value: "wifi",
                text: "wifi"
            },
            {
                value: "calculator",
                text: "calculator"
            },
            {
                value: "paypal",
                text: "paypal"
            },
            {
                value: "google-wallet",
                text: "google-wallet"
            },
            {
                value: "cc-visa",
                text: "cc-visa"
            },
            {
                value: "cc-mastercard",
                text: "cc-mastercard"
            },
            {
                value: "cc-discover",
                text: "cc-discover"
            },
            {
                value: "cc-amex",
                text: "cc-amex"
            },
            {
                value: "cc-paypal",
                text: "cc-paypal"
            },
            {
                value: "cc-stripe",
                text: "cc-stripe"
            },
            {
                value: "bell-slash",
                text: "bell-slash"
            },
            {
                value: "bell-slash-o",
                text: "bell-slash-o"
            },
            {
                value: "trash",
                text: "trash"
            },
            {
                value: "copyright",
                text: "copyright"
            },
            {
                value: "at",
                text: "at"
            },
            {
                value: "eyedropper",
                text: "eyedropper"
            },
            {
                value: "paint-brush",
                text: "paint-brush"
            },
            {
                value: "birthday-cake",
                text: "birthday-cake"
            },
            {
                value: "area-chart",
                text: "area-chart"
            },
            {
                value: "pie-chart",
                text: "pie-chart"
            },
            {
                value: "line-chart",
                text: "line-chart"
            },
            {
                value: "lastfm",
                text: "lastfm"
            },
            {
                value: "lastfm-square",
                text: "lastfm-square"
            },
            {
                value: "toggle-off",
                text: "toggle-off"
            },
            {
                value: "toggle-on",
                text: "toggle-on"
            },
            {
                value: "bicycle",
                text: "bicycle"
            },
            {
                value: "bus",
                text: "bus"
            },
            {
                value: "ioxhost",
                text: "ioxhost"
            },
            {
                value: "angellist",
                text: "angellist"
            },
            {
                value: "cc",
                text: "cc"
            },
            {
                value: "shekel",
                text: "shekel"
            },
            {
                value: "sheqel",
                text: "sheqel"
            },
            {
                value: "ils",
                text: "ils"
            },
            {
                value: "meanpath",
                text: "meanpath"
            },
            {
                value: "buysellads",
                text: "buysellads"
            },
            {
                value: "connectdevelop",
                text: "connectdevelop"
            },
            {
                value: "dashcube",
                text: "dashcube"
            },
            {
                value: "forumbee",
                text: "forumbee"
            },
            {
                value: "leanpub",
                text: "leanpub"
            },
            {
                value: "sellsy",
                text: "sellsy"
            },
            {
                value: "shirtsinbulk",
                text: "shirtsinbulk"
            },
            {
                value: "simplybuilt",
                text: "simplybuilt"
            },
            {
                value: "skyatlas",
                text: "skyatlas"
            },
            {
                value: "cart-plus",
                text: "cart-plus"
            },
            {
                value: "cart-arrow-down",
                text: "cart-arrow-down"
            },
            {
                value: "diamond",
                text: "diamond"
            },
            {
                value: "ship",
                text: "ship"
            },
            {
                value: "user-secret",
                text: "user-secret"
            },
            {
                value: "motorcycle",
                text: "motorcycle"
            },
            {
                value: "street-view",
                text: "street-view"
            },
            {
                value: "heartbeat",
                text: "heartbeat"
            },
            {
                value: "venus",
                text: "venus"
            },
            {
                value: "mars",
                text: "mars"
            },
            {
                value: "mercury",
                text: "mercury"
            },
            {
                value: "intersex",
                text: "intersex"
            },
            {
                value: "transgender",
                text: "transgender"
            },
            {
                value: "transgender-alt",
                text: "transgender-alt"
            },
            {
                value: "venus-double",
                text: "venus-double"
            },
            {
                value: "mars-double",
                text: "mars-double"
            },
            {
                value: "venus-mars",
                text: "venus-mars"
            },
            {
                value: "mars-stroke",
                text: "mars-stroke"
            },
            {
                value: "mars-stroke-v",
                text: "mars-stroke-v"
            },
            {
                value: "mars-stroke-h",
                text: "mars-stroke-h"
            },
            {
                value: "neuter",
                text: "neuter"
            },
            {
                value: "genderless",
                text: "genderless"
            },
            {
                value: "facebook-official",
                text: "facebook-official"
            },
            {
                value: "pinterest-p",
                text: "pinterest-p"
            },
            {
                value: "whatsapp",
                text: "whatsapp"
            },
            {
                value: "server",
                text: "server"
            },
            {
                value: "user-plus",
                text: "user-plus"
            },
            {
                value: "user-times",
                text: "user-times"
            },
            {
                value: "hotel",
                text: "hotel"
            },
            {
                value: "bed",
                text: "bed"
            },
            {
                value: "viacoin",
                text: "viacoin"
            },
            {
                value: "train",
                text: "train"
            },
            {
                value: "subway",
                text: "subway"
            },
            {
                value: "medium",
                text: "medium"
            },
            {
                value: "yc",
                text: "yc"
            },
            {
                value: "y-combinator",
                text: "y-combinator"
            },
            {
                value: "optin-monster",
                text: "optin-monster"
            },
            {
                value: "opencart",
                text: "opencart"
            },
            {
                value: "expeditedssl",
                text: "expeditedssl"
            },
            {
                value: "battery-4",
                text: "battery-4"
            },
            {
                value: "battery-full",
                text: "battery-full"
            },
            {
                value: "battery-3",
                text: "battery-3"
            },
            {
                value: "battery-three-quarters",
                text: "battery-three-quarters"
            },
            {
                value: "battery-2",
                text: "battery-2"
            },
            {
                value: "battery-half",
                text: "battery-half"
            },
            {
                value: "battery-1",
                text: "battery-1"
            },
            {
                value: "battery-quarter",
                text: "battery-quarter"
            },
            {
                value: "battery-0",
                text: "battery-0"
            },
            {
                value: "battery-empty",
                text: "battery-empty"
            },
            {
                value: "mouse-pointer",
                text: "mouse-pointer"
            },
            {
                value: "i-cursor",
                text: "i-cursor"
            },
            {
                value: "object-group",
                text: "object-group"
            },
            {
                value: "object-ungroup",
                text: "object-ungroup"
            },
            {
                value: "sticky-note",
                text: "sticky-note"
            },
            {
                value: "sticky-note-o",
                text: "sticky-note-o"
            },
            {
                value: "cc-jcb",
                text: "cc-jcb"
            },
            {
                value: "cc-diners-club",
                text: "cc-diners-club"
            },
            {
                value: "clone",
                text: "clone"
            },
            {
                value: "balance-scale",
                text: "balance-scale"
            },
            {
                value: "hourglass-o",
                text: "hourglass-o"
            },
            {
                value: "hourglass-1",
                text: "hourglass-1"
            },
            {
                value: "hourglass-start",
                text: "hourglass-start"
            },
            {
                value: "hourglass-2",
                text: "hourglass-2"
            },
            {
                value: "hourglass-half",
                text: "hourglass-half"
            },
            {
                value: "hourglass-3",
                text: "hourglass-3"
            },
            {
                value: "hourglass-end",
                text: "hourglass-end"
            },
            {
                value: "hourglass",
                text: "hourglass"
            },
            {
                value: "hand-grab-o",
                text: "hand-grab-o"
            },
            {
                value: "hand-rock-o",
                text: "hand-rock-o"
            },
            {
                value: "hand-stop-o",
                text: "hand-stop-o"
            },
            {
                value: "hand-paper-o",
                text: "hand-paper-o"
            },
            {
                value: "hand-scissors-o",
                text: "hand-scissors-o"
            },
            {
                value: "hand-lizard-o",
                text: "hand-lizard-o"
            },
            {
                value: "hand-spock-o",
                text: "hand-spock-o"
            },
            {
                value: "hand-pointer-o",
                text: "hand-pointer-o"
            },
            {
                value: "hand-peace-o",
                text: "hand-peace-o"
            },
            {
                value: "trademark",
                text: "trademark"
            },
            {
                value: "registered",
                text: "registered"
            },
            {
                value: "creative-commons",
                text: "creative-commons"
            },
            {
                value: "gg",
                text: "gg"
            },
            {
                value: "gg-circle",
                text: "gg-circle"
            },
            {
                value: "tripadvisor",
                text: "tripadvisor"
            },
            {
                value: "odnoklassniki",
                text: "odnoklassniki"
            },
            {
                value: "odnoklassniki-square",
                text: "odnoklassniki-square"
            },
            {
                value: "get-pocket",
                text: "get-pocket"
            },
            {
                value: "wikipedia-w",
                text: "wikipedia-w"
            },
            {
                value: "safari",
                text: "safari"
            },
            {
                value: "chrome",
                text: "chrome"
            },
            {
                value: "firefox",
                text: "firefox"
            },
            {
                value: "opera",
                text: "opera"
            },
            {
                value: "internet-explorer",
                text: "internet-explorer"
            },
            {
                value: "tv",
                text: "tv"
            },
            {
                value: "television",
                text: "television"
            },
            {
                value: "contao",
                text: "contao"
            },
            {
                value: "500px",
                text: "500px"
            },
            {
                value: "amazon",
                text: "amazon"
            },
            {
                value: "calendar-plus-o",
                text: "calendar-plus-o"
            },
            {
                value: "calendar-minus-o",
                text: "calendar-minus-o"
            },
            {
                value: "calendar-times-o",
                text: "calendar-times-o"
            },
            {
                value: "calendar-check-o",
                text: "calendar-check-o"
            },
            {
                value: "industry",
                text: "industry"
            },
            {
                value: "map-pin",
                text: "map-pin"
            },
            {
                value: "map-signs",
                text: "map-signs"
            },
            {
                value: "map-o",
                text: "map-o"
            },
            {
                value: "map",
                text: "map"
            },
            {
                value: "commenting",
                text: "commenting"
            },
            {
                value: "commenting-o",
                text: "commenting-o"
            },
            {
                value: "houzz",
                text: "houzz"
            },
            {
                value: "vimeo",
                text: "vimeo"
            },
            {
                value: "black-tie",
                text: "black-tie"
            },
            {
                value: "fonticons",
                text: "fonticons"
            }]
        },
        onChange: function (node, value, input) {
            // console.log(node);
            // console.log(node[0]['lastChild']['firstElementChild']);
            $(node).find(".custom-font-awesome-class").attr("class", "fa fa-3x custom-font-awesome-class fa-"+ value);
            Vvveb.Components.render("html/footertop");
            return node;
        }
    }]
});

Vvveb.Components.extend("_base", "html/noticeboard", {
    image: "icons/panel.svg",
    name: "Notice Board",
    classes: ["brpb-scode-notice"],
    html: '<div class="brpb-scode-el brpb-scode-notice" brpb-element="Notice" brpb-scode="notices" data-limit="5" data-isLatest="1">\n\
            <div class="brpb-scode-server">[ai:notices limit=5|isLatest=1]</div>\
            <div class="brpb-scode-html"></div>\
        </div>',
    afterInsert: function (node) {
        this.renderAjax(node);
    },
    renderAjax: function (node) {
        if ($(node).find(".brpb-scode-server").length == 0) {
            var code = $(node).html();
            $(node).html(
                '<div class="brpb-scode-server">' + code + '</div>\
                <div class="brpb-scode-html"></div>'
            );
        }
        var scode = $(node).find(".brpb-scode-server").html();

        var data = {};
        data["pageID"] = Vvveb.FileManager.getCurrentPageId();
        data["html"] = scode;

        $.ajax({
            type: "POST",
            url: base_url + 'pages/get_scode_content/' + data["pageID"], //set your server side save script url
            data: data,
            cache: false,
            success: function (data) {
                $(node).find(".brpb-scode-html").html(data);
            },
            error: function (data) {
                $('#message-modal').modal().find(".modal-body").html("Problem to save page");
            }
        });
    },
    properties: [
        {
            name: "Limit",
            key: "limit",
            htmlAttr: "data-limit",
            useType: "scode",
            inputtype: NumberInput,
            onChange: function (node, value, input) {
                $(node).attr("data-limit", value);
                var component = Vvveb.Components.get("html/noticeboard");
                var scodegen = Vvveb.Helper.generateShCode(node, component, ["limit", "isLatest"]);
                $(node).find(".brpb-scode-server").html(scodegen);
                component.renderAjax(node);
                return node;
            }
        },
        {
            name: "Order By",
            key: "isLatest",
            htmlAttr: "data-isLatest",
            useType: "scode",
            inputtype: SelectInput,
            onChange: function (node, value, input) {
                $(node).attr("data-isLatest", value);
                var component = Vvveb.Components.get("html/noticeboard");
                var scodegen = Vvveb.Helper.generateShCode(node, component, ["limit", "isLatest"]);
                $(node).find(".brpb-scode-server").html(scodegen);
                component.renderAjax(node);
                return node;
            },
            data: {
                options: [
                    {
                        value: "1",
                        text: "Latest"
                    },
                    {
                        value: "0",
                        text: "Oldest"
                    }
                ]
            }
        }

    ]
});

Vvveb.Models.add("notices", {
    componentType: "html/noticeboard"
});

Vvveb.Components.extend("_base", "html/listgroup", {
    name: "List Group",
    image: "icons/list_group.svg",
    classes: ["list-group"],
    html: '<ul class="list-group" brpb-element="Listgroup">\n  <li class="list-group-item">\n    <span class="badge">14</span>\n    Cras justo odio\n  </li>\n  <li class="list-group-item">\n    <span class="badge">2</span>\n    Dapibus ac facilisis in\n  </li>\n  <li class="list-group-item">\n    <span class="badge">1</span>\n    Morbi leo risus\n  </li>\n</ul>'
});
Vvveb.Components.extend("_base", "html/listitem", {
    name: "List Item",
    classes: ["list-group-item"],
    html: '<li class="list-group-item" brpb-element="Listitem"><span class="badge">14</span> Cras justo odio</li>'
});
Vvveb.Components.extend("_base", "html/breadcrumbs", {
    classes: ["breadcrumb"],
    name: "Breadcrumbs",
    image: "icons/breadcrumbs.svg",
    html: '<ol class="breadcrumb" brpb-element="Breadcrumbs">\
		  <li class="breadcrumb-item active"><a href="#">Home</a></li>\
		  <li class="breadcrumb-item active"><a href="#">Library</a></li>\
		  <li class="breadcrumb-item active">Data 3</li>\
		</ol>'
});
Vvveb.Components.extend("_base", "html/breadcrumbitem", {
    classes: ["breadcrumb-item"],
    name: "Breadcrumb Item",
    html: '<li class="breadcrumb-item" brpb-element="Breadcrumbitem"><a href="#">Library</a></li>',
    properties: [{
        name: "Active",
        key: "active",
        htmlAttr: "class",
        validValues: ["", "active"],
        inputtype: ToggleInput,
        data: {
            on: "active",
            off: ""
        }
    }]
});
Vvveb.Components.extend("_base", "html/pagination", {
    classes: ["pagination"],
    name: "Pagination",
    image: "icons/pagination.svg",
    html: '<nav aria-label="Page navigation example" brpb-element="Pagination">\
	  <ul class="pagination">\
		<li class="page-item"><a class="page-link" href="#">Previous</a></li>\
		<li class="page-item"><a class="page-link" href="#">1</a></li>\
		<li class="page-item"><a class="page-link" href="#">2</a></li>\
		<li class="page-item"><a class="page-link" href="#">3</a></li>\
		<li class="page-item"><a class="page-link" href="#">Next</a></li>\
	  </ul>\
	</nav>',

    properties: [{
        name: "Size",
        key: "size",
        htmlAttr: "class",
        inputtype: SelectInput,
        validValues: ["btn-lg", "btn-sm"],
        data: {
            options: [{
                value: "",
                text: "Default"
            }, {
                value: "btn-lg",
                text: "Large"
            }, {
                value: "btn-sm",
                text: "Small"
            }]
        }
    }, {
        name: "Alignment",
        key: "alignment",
        htmlAttr: "class",
        inputtype: SelectInput,
        validValues: ["justify-content-center", "justify-content-end"],
        data: {
            options: [{
                value: "",
                text: "Default"
            }, {
                value: "justify-content-center",
                text: "Center"
            }, {
                value: "justify-content-end",
                text: "Right"
            }]
        }
    }]
});
Vvveb.Components.extend("_base", "html/pageitem", {
    classes: ["page-item"],
    html: '<li class="page-item" brpb-element="Pageitem"><a class="page-link" href="#">1</a></li>',
    name: "Pagination Item",
    properties: [{
        name: "Link To",
        key: "href",
        htmlAttr: "href",
        child: ".page-link",
        inputtype: TextInput
    }, {
        name: "Disabled",
        key: "disabled",
        htmlAttr: "class",
        validValues: ["disabled"],
        inputtype: ToggleInput,
        data: {
            on: "disabled",
            off: ""
        }
    }]
});
Vvveb.Components.extend("_base", "html/progress", {
    classes: ["progress"],
    name: "Progress Bar",
    image: "icons/progressbar.svg",
    html: '<div class="progress" brpb-element="Progress"><div class="progress-bar w-25"></div></div>',
    properties: [{
        name: "Background",
        key: "background",
        htmlAttr: "class",
        validValues: bgcolorClasses,
        inputtype: SelectInput,
        data: {
            options: bgcolorSelectOptions
        }
    },
    {
        name: "Progress",
        key: "background",
        child: ".progress-bar",
        htmlAttr: "class",
        validValues: ["", "w-25", "w-50", "w-75", "w-100"],
        inputtype: SelectInput,
        data: {
            options: [{
                value: "",
                text: "None"
            }, {
                value: "w-25",
                text: "25%"
            }, {
                value: "w-50",
                text: "50%"
            }, {
                value: "w-75",
                text: "75%"
            }, {
                value: "w-100",
                text: "100%"
            }]
        }
    },
    {
        name: "Progress background",
        key: "background",
        child: ".progress-bar",
        htmlAttr: "class",
        validValues: bgcolorClasses,
        inputtype: SelectInput,
        data: {
            options: bgcolorSelectOptions
        }
    }, {
        name: "Striped",
        key: "striped",
        child: ".progress-bar",
        htmlAttr: "class",
        validValues: ["", "progress-bar-striped"],
        inputtype: ToggleInput,
        data: {
            on: "progress-bar-striped",
            off: "",
        }
    }, {
        name: "Animated",
        key: "animated",
        child: ".progress-bar",
        htmlAttr: "class",
        validValues: ["", "progress-bar-animated"],
        inputtype: ToggleInput,
        data: {
            on: "progress-bar-animated",
            off: "",
        }
    }]
});
Vvveb.Components.extend("_base", "html/jumbotron", {
    classes: ["jumbotron"],
    image: "icons/jumbotron.svg",
    name: "Jumbotron",
    html: '<div class="jumbotron" brpb-element="Jumbotron">\
		  <h1 class="display-3">Hello, world!</h1>\
		  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>\
		  <hr class="my-4">\
		  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>\
		  <p class="lead">\
			<a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>\
		  </p>\
		</div>'
});
Vvveb.Components.extend("_base", "html/navbar", {
    classes: ["navbar"],
    image: "icons/navbar.svg",
    name: "Nav Bar",
    html: '<nav class="navbar navbar-expand-lg navbar-light bg-light" brpb-element="Navbar">\
		  <a class="navbar-brand" href="#">Navbar</a>\
		  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">\
			<span class="navbar-toggler-icon"></span>\
		  </button>\
		\
		  <div class="collapse navbar-collapse" id="navbarSupportedContent">\
			<ul class="navbar-nav mr-auto">\
			  <li class="nav-item active">\
				<a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>\
			  </li>\
			  <li class="nav-item">\
				<a class="nav-link" href="#">Link</a>\
			  </li>\
			  <li class="nav-item">\
				<a class="nav-link disabled" href="#">Disabled</a>\
			  </li>\
			</ul>\
			<form class="form-inline my-2 my-lg-0">\
			  <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">\
			  <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>\
			</form>\
		  </div>\
		</nav>',

    properties: [{
        name: "Color theme",
        key: "color",
        htmlAttr: "class",
        validValues: ["navbar-light", "navbar-dark"],
        inputtype: SelectInput,
        data: {
            options: [{
                value: "",
                text: "Default"
            }, {
                value: "navbar-light",
                text: "Light"
            }, {
                value: "navbar-dark",
                text: "Dark"
            }]
        }
    }, {
        name: "Background color",
        key: "background",
        htmlAttr: "class",
        validValues: bgcolorClasses,
        inputtype: SelectInput,
        data: {
            options: bgcolorSelectOptions
        }
    }, {
        name: "Placement",
        key: "placement",
        htmlAttr: "class",
        validValues: ["fixed-top", "fixed-bottom", "sticky-top"],
        inputtype: SelectInput,
        data: {
            options: [{
                value: "",
                text: "Default"
            }, {
                value: "fixed-top",
                text: "Fixed Top"
            }, {
                value: "fixed-bottom",
                text: "Fixed Bottom"
            }, {
                value: "sticky-top",
                text: "Sticky top"
            }]
        }
    }]
});

Vvveb.Components.extend("_base", "html/form", {
    nodes: ["form"],
    image: "icons/form.svg",
    name: "Form",
    html: '<form brpb-element="Form"><div class="form-group"><label>Text</label><input type="text" class="form-control"></div></div></form>',
    properties: [{
        name: "Style",
        key: "style",
        htmlAttr: "class",
        validValues: ["", "form-search", "form-inline", "form-horizontal"],
        inputtype: SelectInput,
        data: {
            options: [{
                value: "",
                text: "Default"
            }, {
                value: "form-search",
                text: "Search"
            }, {
                value: "form-inline",
                text: "Inline"
            }, {
                value: "form-horizontal",
                text: "Horizontal"
            }]
        }
    }, {
        name: "Action",
        key: "action",
        htmlAttr: "action",
        inputtype: TextInput
    }, {
        name: "Method",
        key: "method",
        htmlAttr: "method",
        inputtype: TextInput
    }]
});

Vvveb.Components.extend("_base", "html/textinput", {
    name: "Text Input",
    attributes: { "type": "text" },
    image: "icons/text_input.svg",
    html: '<div class="form-group" brpb-element="Textinput"><label>Text</label><input type="text" class="form-control"></div></div>',
    properties: [{
        name: "Value",
        key: "value",
        htmlAttr: "value",
        inputtype: TextInput
    }, {
        name: "Placeholder",
        key: "placeholder",
        htmlAttr: "placeholder",
        inputtype: TextInput
    }]
});

Vvveb.Components.extend("_base", "html/selectinput", {
    nodes: ["select"],
    name: "Select Input",
    image: "icons/select_input.svg",
    html: '<div class="form-group" brpb-element="Selectinput"><label>Choose an option </label><select class="form-control"><option value="value1">Text 1</option><option value="value2">Text 2</option><option value="value3">Text 3</option></select></div>',

    beforeInit: function (node) {
        properties = [];
        var i = 0;

        $(node).find('option').each(function () {

            data = { "value": this.value, "text": this.text };

            i++;
            properties.push({
                name: "Option " + i,
                key: "option" + i,
                //index: i - 1,
                optionNode: this,
                inputtype: TextValueInput,
                data: data,
                onChange: function (node, value, input) {

                    option = $(this.optionNode);

                    //if remove button is clicked remove option and render row properties
                    if (input.nodeName == 'BUTTON') {
                        option.remove();
                        Vvveb.Components.render("html/selectinput");
                        return node;
                    }

                    if (input.name == "value")
                        option.attr("value", value);
                    else if (input.name == "text")
                        option.text(value);

                    return node;
                },
            });
        });

        //remove all option properties
        this.properties = this.properties.filter(function (item) {
            return item.key.indexOf("option") === -1;
        });

        //add remaining properties to generated column properties
        properties.push(this.properties[0]);

        this.properties = properties;
        return node;
    },

    properties: [{
        name: "Option",
        key: "option1",
        inputtype: TextValueInput
    }, {
        name: "Option",
        key: "option2",
        inputtype: TextValueInput
    }, {
        name: "",
        key: "addChild",
        inputtype: ButtonInput,
        data: { text: "Add option", icon: "la-plus" },
        onChange: function (node) {
            $(node).append('<option value="value">Text</option>');

            //render component properties again to include the new column inputs
            Vvveb.Components.render("html/selectinput");

            return node;
        }
    }]
});
Vvveb.Components.extend("_base", "html/textareainput", {
    name: "Text Area",
    image: "icons/text_area.svg",
    html: '<div class="form-group" brpb-element="Textareainput"><label>Your response:</label><textarea class="form-control"></textarea></div>'
});
Vvveb.Components.extend("_base", "html/radiobutton", {
    name: "Radio Button",
    attributes: { "type": "radio" },
    image: "icons/radio.svg",
    html: '<label class="radio" brpb-element="Radiobutton"><input type="radio"> Radio</label>',
    properties: [{
        name: "Name",
        key: "name",
        htmlAttr: "name",
        inputtype: TextInput
    }]
});
Vvveb.Components.extend("_base", "html/checkbox", {
    name: "Checkbox",
    attributes: { "type": "checkbox" },
    image: "icons/checkbox.svg",
    html: '<label class="checkbox" brpb-element="Checkbox"><input type="checkbox"> Checkbox</label>',
    properties: [{
        name: "Name",
        key: "name",
        htmlAttr: "name",
        inputtype: TextInput
    }]
});
Vvveb.Components.extend("_base", "html/fileinput", {
    name: "Input group",
    attributes: { "type": "file" },
    image: "icons/text_input.svg",
    html: '<div class="form-group" brpb-element="Fileinput">\
			  <input type="file" class="form-control">\
			</div>'
});
Vvveb.Components.extend("_base", "html/table", {
    nodes: ["table"],
    classes: ["table"],
    image: "icons/table.svg",
    name: "Table",
    html: '<table class="table">\
		  <thead>\
			<tr>\
			  <th>#</th>\
			  <th>First Name</th>\
			  <th>Last Name</th>\
			  <th>Username</th>\
			</tr>\
		  </thead>\
		  <tbody>\
			<tr>\
			  <th scope="row">1</th>\
			  <td>Mark</td>\
			  <td>Otto</td>\
			  <td>@mdo</td>\
			</tr>\
			<tr>\
			  <th scope="row">2</th>\
			  <td>Jacob</td>\
			  <td>Thornton</td>\
			  <td>@fat</td>\
			</tr>\
			<tr>\
			  <th scope="row">3</th>\
			  <td>Larry</td>\
			  <td>the Bird</td>\
			  <td>@twitter</td>\
			</tr>\
		  </tbody>\
		</table>',
    properties: [
        {
            name: "Type",
            key: "type",
            htmlAttr: "class",
            validValues: ["table-primary", "table-secondary", "table-success", "table-danger", "table-warning", "table-info", "table-light", "table-dark", "table-white"],
            inputtype: SelectInput,
            data: {
                options: [{
                    value: "Default",
                    text: ""
                }, {
                    value: "table-primary",
                    text: "Primary"
                }, {
                    value: "table-secondary",
                    text: "Secondary"
                }, {
                    value: "table-success",
                    text: "Success"
                }, {
                    value: "table-danger",
                    text: "Danger"
                }, {
                    value: "table-warning",
                    text: "Warning"
                }, {
                    value: "table-info",
                    text: "Info"
                }, {
                    value: "table-light",
                    text: "Light"
                }, {
                    value: "table-dark",
                    text: "Dark"
                }, {
                    value: "table-white",
                    text: "White"
                }]
            }
        },
        {
            name: "Responsive",
            key: "responsive",
            htmlAttr: "class",
            validValues: ["table-responsive"],
            inputtype: ToggleInput,
            data: {
                on: "table-responsive",
                off: ""
            }
        },
        {
            name: "Small",
            key: "small",
            htmlAttr: "class",
            validValues: ["table-sm"],
            inputtype: ToggleInput,
            data: {
                on: "table-sm",
                off: ""
            }
        },
        {
            name: "Hover",
            key: "hover",
            htmlAttr: "class",
            validValues: ["table-hover"],
            inputtype: ToggleInput,
            data: {
                on: "table-hover",
                off: ""
            }
        },
        {
            name: "Bordered",
            key: "bordered",
            htmlAttr: "class",
            validValues: ["table-bordered"],
            inputtype: ToggleInput,
            data: {
                on: "table-bordered",
                off: ""
            }
        },
        {
            name: "Striped",
            key: "striped",
            htmlAttr: "class",
            validValues: ["table-striped"],
            inputtype: ToggleInput,
            data: {
                on: "table-striped",
                off: ""
            }
        },
        {
            name: "Inverse",
            key: "inverse",
            htmlAttr: "class",
            validValues: ["table-inverse"],
            inputtype: ToggleInput,
            data: {
                on: "table-inverse",
                off: ""
            }
        },
        {
            name: "Head options",
            key: "head",
            htmlAttr: "class",
            child: "thead",
            inputtype: SelectInput,
            validValues: ["", "thead-inverse", "thead-default"],
            data: {
                options: [{
                    value: "",
                    text: "None"
                }, {
                    value: "thead-default",
                    text: "Default"
                }, {
                    value: "thead-inverse",
                    text: "Inverse"
                }]
            }
        }]
});
Vvveb.Components.extend("_base", "html/tablerow", {
    nodes: ["tr"],
    name: "Table Row",
    html: "<tr brpb-element='Tablerow'><td>Cell 1</td><td>Cell 2</td><td>Cell 3</td></tr>",
    properties: [{
        name: "Type",
        key: "type",
        htmlAttr: "class",
        inputtype: SelectInput,
        validValues: ["", "success", "danger", "warning", "active"],
        data: {
            options: [{
                value: "",
                text: "Default"
            }, {
                value: "success",
                text: "Success"
            }, {
                value: "error",
                text: "Error"
            }, {
                value: "warning",
                text: "Warning"
            }, {
                value: "active",
                text: "Active"
            }]
        }
    }]
});
Vvveb.Components.extend("_base", "html/tablecell", {
    nodes: ["td"],
    name: "Table Cell",
    html: "<td brpb-element='Tablecell'>Cell</td>"
});
Vvveb.Components.extend("_base", "html/tableheadercell", {
    nodes: ["th"],
    name: "Table Header Cell",
    html: "<th brpb-element='Tableheadercell'>Head</th>"
});
Vvveb.Components.extend("_base", "html/tablehead", {
    nodes: ["thead"],
    name: "Table Head",
    html: "<thead brpb-element='Tablehead'><tr><th>Head 1</th><th>Head 2</th><th>Head 3</th></tr></thead>",
    properties: [{
        name: "Type",
        key: "type",
        htmlAttr: "class",
        inputtype: SelectInput,
        validValues: ["", "success", "danger", "warning", "info"],
        data: {
            options: [{
                value: "",
                text: "Default"
            }, {
                value: "success",
                text: "Success"
            }, {
                value: "anger",
                text: "Error"
            }, {
                value: "warning",
                text: "Warning"
            }, {
                value: "info",
                text: "Info"
            }]
        }
    }]
});
Vvveb.Components.extend("_base", "html/tablebody", {
    nodes: ["tbody"],
    name: "Table Body",
    html: "<tbody brpb-element='Tablebody'><tr><td>Cell 1</td><td>Cell 2</td><td>Cell 3</td></tr></tbody>"
});

Vvveb.Components.add("html/gridcolumn", {
    name: "Grid Column",
    image: "icons/grid_row.svg",
    classesRegex: ["col-"],
    html: '<div class="col-sm-4" brpb-element="Column"></div>',
    properties: [{
        name: "Column",
        key: "column",
        inputtype: GridInput,
        data: { hide_remove: true },

        beforeInit: function (node) {
            _class = $(node).attr("class");

            var reg = /col-([^-\$ ]*)?-?(\d+)/g;
            var match;

            while ((match = reg.exec(_class)) != null) {
                this.data["col" + ((match[1] != undefined) ? "_" + match[1] : "")] = match[2];
            }
        },

        onChange: function (node, value, input) {
            var _class = node.attr("class");

            //remove previous breakpoint column size
            _class = _class.replace(new RegExp(input.name + '-\\d+?'), '');
            //add new column size
            if (value)
                _class += ' ' + input.name + '-' + value;
            node.attr("class", _class);

            return node;
        },
    }]
});
Vvveb.Components.add("html/gridrow", {
    name: "Grid Row",
    image: "icons/grid_row.svg",
    classes: ["row"],
    html: '<div class="row" brpb-element="Row"><div class="col-sm-4" brpb-element="Column"></div><div class="col-sm-4 col-5" brpb-element="Column"></div><div class="col-sm-4" brpb-element="Column"></div></div>',

    beforeInit: function (node) {
        properties = [];
        var i = 0;
        var j = 0;

        $(node).find('[class*="col-"]').each(function () {
            _class = $(this).attr("class");

            var reg = /col-([^-\$ ]*)?-?(\d+)/g;
            var match;
            var data = {};

            while ((match = reg.exec(_class)) != null) {
                data["col" + ((match[1] != undefined) ? "_" + match[1] : "")] = match[2];
            }

            i++;
            properties.push({
                name: "Column " + i,
                key: "column" + i,
                //index: i - 1,
                columnNode: this,
                col: 12,
                inline: true,
                inputtype: GridInput,
                data: data,
                onChange: function (node, value, input) {

                    //column = $('[class*="col-"]:eq(' + this.index + ')', node);
                    var column = $(this.columnNode);

                    //if remove button is clicked remove column and render row properties
                    if (input.nodeName == 'BUTTON') {
                        column.remove();
                        Vvveb.Components.render("html/gridrow");
                        return node;
                    }

                    //if select input then change column class
                    _class = column.attr("class");

                    //remove previous breakpoint column size
                    _class = _class.replace(new RegExp(input.name + '-\\d+?'), '');
                    //add new column size
                    if (value)
                        _class += ' ' + input.name + '-' + value;
                    column.attr("class", _class);

                    //console.log(this, node, value, input, input.name);

                    return node;
                },
            });
        });

        //remove all column properties
        this.properties = this.properties.filter(function (item) {
            return item.key.indexOf("column") === -1;
        });

        //add remaining properties to generated column properties
        properties.push(this.properties[0]);

        this.properties = properties;
        return node;
    },

    properties: [{
        name: "Column",
        key: "column1",
        inputtype: GridInput
    }, {
        name: "Column",
        key: "column1",
        inline: true,
        col: 12,
        inputtype: GridInput
    }, {
        name: "",
        key: "addChild",
        inputtype: ButtonInput,
        data: { text: "Add column", icon: "la la-plus" },
        onChange: function (node) {
            $(node).append('<div class="col-3" brpb-element="Column"></div>');

            //render component properties again to include the new column inputs
            Vvveb.Components.render("html/gridrow");

            return node;
        }
    }]
});


Vvveb.Components.extend("_base", "html/paragraph", {
    nodes: ["p"],
    name: "Paragraph",
    image: "icons/paragraph.svg",
    html: '<p brpb-element="Paragraph">Lorem ipsum</p>',
    properties: [{
        name: "Text align",
        key: "text-align",
        htmlAttr: "class",
        inputtype: SelectInput,
        validValues: ["", "text-left", "text-center", "text-right"],
        inputtype: RadioButtonInput,
        data: {
            extraclass: "btn-group-sm btn-group-fullwidth",
            options: [{
                value: "",
                icon: "la la-close",
                //text: "None",
                title: "None",
                checked: true,
            }, {
                value: "left",
                //text: "Left",
                title: "text-left",
                icon: "la la-align-left",
                checked: false,
            }, {
                value: "text-center",
                //text: "Center",
                title: "Center",
                icon: "la la-align-center",
                checked: false,
            }, {
                value: "text-right",
                //text: "Right",
                title: "Right",
                icon: "la la-align-right",
                checked: false,
            }],
        },
    }]
});

Vvveb.Components.extend("_base", "html/video", {
    nodes: ["video"],
    name: "Video",
    html: '<video width="320" height="240" brpb-element="Video" playsinline loop autoplay><source src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4"><video>',
    dragHtml: '<img  width="320" height="240" src="' + Vvveb.baseUrl + 'icons/video.svg">',
    image: "icons/video.svg",
    properties: [{
        name: "Src",
        child: "source",
        key: "src",
        htmlAttr: "src",
        inputtype: LinkInput
    }, {
        name: "Width",
        key: "width",
        htmlAttr: "width",
        inputtype: TextInput
    }, {
        name: "Height",
        key: "height",
        htmlAttr: "height",
        inputtype: TextInput
    }, {
        name: "Muted",
        key: "muted",
        htmlAttr: "muted",
        inputtype: CheckboxInput
    }, {
        name: "Loop",
        key: "loop",
        htmlAttr: "loop",
        inputtype: CheckboxInput
    }, {
        name: "Autoplay",
        key: "autoplay",
        htmlAttr: "autoplay",
        inputtype: CheckboxInput
    }, {
        name: "Plays inline",
        key: "playsinline",
        htmlAttr: "playsinline",
        inputtype: CheckboxInput
    }, {
        name: "Controls",
        key: "controls",
        htmlAttr: "controls",
        inputtype: CheckboxInput
    }]
});


Vvveb.Components.extend("_base", "html/button", {
    nodes: ["button"],
    name: "Html Button",
    image: "icons/button.svg",
    html: '<button brpb-element="Button">Button</button>',
    properties: [{
        name: "Text",
        key: "text",
        htmlAttr: "innerHTML",
        inputtype: TextInput
    }, {
        name: "Name",
        key: "name",
        htmlAttr: "name",
        inputtype: TextInput
    }, {
        name: "Type",
        key: "type",
        htmlAttr: "type",
        inputtype: SelectInput,
        data: {
            options: [{
                value: "button",
                text: "button"
            }, {
                value: "reset",
                text: "reset"
            }, {
                value: "submit",
                text: "submit"
            }],
        }
    }, {
        name: "Autofocus",
        key: "autofocus",
        htmlAttr: "autofocus",
        inputtype: CheckboxInput
    }, {
        name: "Disabled",
        key: "disabled",
        htmlAttr: "disabled",
        inputtype: CheckboxInput
    }]
});
