import { JSONSchema7 } from 'json-schema'
import {
  DecoratorsMap,
  ObjectFieldTemplateFactory,
} from '@codelab/tools/generators/json-schema'

export const ButtonPropsSchema: JSONSchema7 = {
  description: 'From T, pick a set of properties whose keys are in the union K',
  type: 'object',
  properties: {
    loading: {
      anyOf: [
        {
          type: 'object',
          properties: {
            delay: {
              type: 'number',
            },
          },
        },
        {
          type: 'boolean',
        },
      ],
    },
    disabled: {
      type: 'boolean',
    },
    size: {
      enum: ['large', 'middle', 'small'],
      type: 'string',
    },
    block: {
      type: 'boolean',
    },
    icon: {
      $ref: '#/definitions/React.ReactNode',
    },
    ghost: {
      type: 'boolean',
    },
    danger: {
      type: 'boolean',
    },
    type: {
      enum: ['dashed', 'default', 'ghost', 'link', 'primary', 'text'],
      type: 'string',
    },
    onClick: {
      type: 'object',
    },
    href: {
      type: 'string',
    },
    target: {
      type: 'string',
    },
    shape: {
      enum: ['circle', 'round'],
      type: 'string',
    },
    htmlType: {
      enum: ['button', 'reset', 'submit'],
      type: 'string',
    },
  },
  $schema: 'http://json-schema.org/draft-07/schema#',
}

export const DemoInputSchema: JSONSchema7 = {
  type: 'object',
  properties: {
    email: {
      type: 'string',
      default: '',
    },
    password: {
      type: 'string',
      default: '',
    },
    firstname: {
      type: 'string',
      default: '',
    },
    lastname: {
      type: 'string',
      default: '',
    },
    notGroupedField: {
      type: 'string',
      default: '',
    },
  },
  $schema: 'http://json-schema.org/draft-07/schema#',
}

const DemoInputDecorators: DecoratorsMap = {
  email: {
    __grid: {
      order: 3,
      span: 24,
    },
  },
  password: {
    __grid: {
      order: 2,
      span: 24,
    },
  },
  firstname: {
    __grid: {
      order: 0,
      span: 12,
    },
  },
  lastname: {
    __grid: {
      order: 1,
      span: 12,
    },
  },
}

export const DemoInputFormProps = {
  ObjectFieldTemplate: ObjectFieldTemplateFactory(DemoInputDecorators),
}

export const PropsSchema: JSONSchema7 = {
  oneOf: [
    {
      allOf: [
        {
          type: 'object',
          properties: {
            'data-grid': {
              description:
                'From T, pick a set of properties whose keys are in the union K',
              type: 'object',
              properties: {
                x: {
                  description: 'X position in grid units.',
                  type: 'number',
                },
                y: {
                  description: 'Y position in grid units.',
                  type: 'number',
                },
                h: {
                  description: 'Height in grid units.',
                  type: 'number',
                },
                w: {
                  description: 'Width in grid units.',
                  type: 'number',
                },
              },
            },
          },
        },
        {
          type: 'object',
          properties: {
            key: {
              type: 'string',
            },
          },
        },
      ],
      $schema: 'http://json-schema.org/draft-07/schema#',
    },
    {
      description: 'Make all properties in T optional',
      type: 'object',
      properties: {
        href: {
          type: 'string',
        },
        target: {
          type: 'string',
        },
        onClick: {
          type: 'object',
        },
        type: {
          enum: ['dashed', 'default', 'ghost', 'link', 'primary', 'text'],
          type: 'string',
        },
        icon: {
          $ref: '#/definitions/React.ReactNode',
        },
        shape: {
          enum: ['circle', 'round'],
          type: 'string',
        },
        size: {
          enum: ['large', 'middle', 'small'],
          type: 'string',
        },
        loading: {
          anyOf: [
            {
              type: 'object',
              properties: {
                delay: {
                  type: 'number',
                },
              },
            },
            {
              type: 'boolean',
            },
          ],
        },
        prefixCls: {
          type: 'string',
        },
        className: {
          type: 'string',
        },
        ghost: {
          type: 'boolean',
        },
        danger: {
          type: 'boolean',
        },
        block: {
          type: 'boolean',
        },
        children: {
          $ref: '#/definitions/React.ReactNode',
        },
        style: {
          type: 'object',
          properties: {
            alignContent: {
              description:
                'The CSS **`align-content`** property sets how the browser distributes space between and around content items along the cross-axis of a flexbox container, and the main-axis of a grid container.\n\n**Syntax**: `normal | <baseline-position> | <content-distribution> | <overflow-position>? <content-position>`\n\n**Initial value**: `normal`\n\n---\n\n_Supported in Flex Layout_\n\n|  Chrome  | Firefox |  Safari   |  Edge  |   IE   |\n| :------: | :-----: | :-------: | :----: | :----: |\n|  **29**  | **28**  |   **9**   | **12** | **11** |\n| 21 _-x-_ |         | 6.1 _-x-_ |        |        |\n\n---\n\n_Supported in Grid Layout_\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **57** | **52**  | **10.1** | **16** | No  |\n\n---',
              type: 'string',
            },
            alignItems: {
              description:
                'The CSS **`align-items`** property sets the `align-self` value on all direct children as a group. The align-self property sets the alignment of an item within its containing block. In Flexbox it controls the alignment of items on the Cross Axis, in Grid Layout it controls the alignment of items on the Block Axis within their grid area.\n\n**Syntax**: `normal | stretch | <baseline-position> | [ <overflow-position>? <self-position> ]`\n\n**Initial value**: `normal`\n\n---\n\n_Supported in Flex Layout_\n\n|  Chrome  | Firefox | Safari  |  Edge  |   IE   |\n| :------: | :-----: | :-----: | :----: | :----: |\n|  **52**  | **20**  |  **9**  | **12** | **11** |\n| 21 _-x-_ |         | 7 _-x-_ |        |        |\n\n---\n\n_Supported in Grid Layout_\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **57** | **52**  | **10.1** | **16** | No  |\n\n---',
              type: 'string',
            },
            alignSelf: {
              description:
                "The **`align-self`** CSS property aligns flex items of the current flex line overriding the `align-items` value. If any of the item's cross-axis margin is set to `auto`, then `align-self` is ignored. In Grid layout `align-self` aligns the item inside the grid area.\n\n**Syntax**: `auto | normal | stretch | <baseline-position> | <overflow-position>? <self-position>`\n\n**Initial value**: `auto`\n\n---\n\n_Supported in Flex Layout_\n\n|  Chrome  | Firefox |  Safari   |  Edge  |   IE   |\n| :------: | :-----: | :-------: | :----: | :----: |\n|  **36**  | **20**  |   **9**   | **12** | **11** |\n| 21 _-x-_ |         | 6.1 _-x-_ |        |        |\n\n---\n\n_Supported in Grid Layout_\n\n| Chrome | Firefox |  Safari  |  Edge  |      IE      |\n| :----: | :-----: | :------: | :----: | :----------: |\n| **57** | **52**  | **10.1** | **16** | **10** _-x-_ |\n\n---",
              type: 'string',
            },
            alignTracks: {
              description:
                'The **`align-tracks`** CSS property sets the alignment in the masonry axis for grid containers that have masonry in their block axis.\n\n**Syntax**: `[ normal | <baseline-position> | <content-distribution> | <overflow-position>? <content-position> ]#`\n\n**Initial value**: `normal`',
              type: 'string',
            },
            animationDelay: {
              description:
                'The **`animation-delay`** CSS property sets when an animation starts. The animation can start later, immediately from its beginning, or immediately and partway through the animation.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`\n\n| Chrome  | Firefox | Safari  |  Edge  |   IE   |\n| :-----: | :-----: | :-----: | :----: | :----: |\n| **43**  | **16**  |  **9**  | **12** | **10** |\n| 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |',
              type: 'string',
            },
            animationDirection: {
              description:
                'The **`animation-direction`** CSS property sets whether an animation should play forwards, backwards, or alternating back and forth.\n\n**Syntax**: `<single-animation-direction>#`\n\n**Initial value**: `normal`\n\n| Chrome  | Firefox | Safari  |  Edge  |   IE   |\n| :-----: | :-----: | :-----: | :----: | :----: |\n| **43**  | **16**  |  **9**  | **12** | **10** |\n| 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |',
              type: 'string',
            },
            animationDuration: {
              description:
                'The **`animation-duration`** CSS property sets the length of time that an animation takes to complete one cycle.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`\n\n| Chrome  | Firefox | Safari  |  Edge  |   IE   |\n| :-----: | :-----: | :-----: | :----: | :----: |\n| **43**  | **16**  |  **9**  | **12** | **10** |\n| 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |',
              type: 'string',
            },
            animationFillMode: {
              description:
                'The **`animation-fill-mode`** CSS property sets how a CSS animation applies styles to its target before and after its execution.\n\n**Syntax**: `<single-animation-fill-mode>#`\n\n**Initial value**: `none`\n\n| Chrome  | Firefox | Safari  |  Edge  |   IE   |\n| :-----: | :-----: | :-----: | :----: | :----: |\n| **43**  | **16**  |  **9**  | **12** | **10** |\n| 3 _-x-_ | 5 _-x-_ | 5 _-x-_ |        |        |',
              type: 'string',
            },
            animationIterationCount: {
              description:
                'The **`animation-iteration-count`** CSS property sets the number of times an animation cycle should be played before stopping.\n\n**Syntax**: `<single-animation-iteration-count>#`\n\n**Initial value**: `1`\n\n| Chrome  | Firefox | Safari  |  Edge  |   IE   |\n| :-----: | :-----: | :-----: | :----: | :----: |\n| **43**  | **16**  |  **9**  | **12** | **10** |\n| 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |',
              type: ['string', 'number'],
            },
            animationName: {
              description:
                'The **`animation-name`** CSS property sets one or more animations to apply to an element. Each name is an `@keyframes` at-rule that sets the property values for the animation sequence.\n\n**Syntax**: `[ none | <keyframes-name> ]#`\n\n**Initial value**: `none`\n\n| Chrome  | Firefox | Safari  |  Edge  |   IE   |\n| :-----: | :-----: | :-----: | :----: | :----: |\n| **43**  | **16**  |  **9**  | **12** | **10** |\n| 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |',
              type: 'string',
            },
            animationPlayState: {
              description:
                'The **`animation-play-state`** CSS property sets whether an animation is running or paused.\n\n**Syntax**: `<single-animation-play-state>#`\n\n**Initial value**: `running`\n\n| Chrome  | Firefox | Safari  |  Edge  |   IE   |\n| :-----: | :-----: | :-----: | :----: | :----: |\n| **43**  | **16**  |  **9**  | **12** | **10** |\n| 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |',
              type: 'string',
            },
            animationTimingFunction: {
              description:
                'The `**animation-timing-function**` CSS property sets how an animation progresses through the duration of each cycle.\n\n**Syntax**: `<timing-function>#`\n\n**Initial value**: `ease`\n\n| Chrome  | Firefox | Safari  |  Edge  |   IE   |\n| :-----: | :-----: | :-----: | :----: | :----: |\n| **43**  | **16**  |  **9**  | **12** | **10** |\n| 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |',
              type: 'string',
            },
            appearance: {
              description:
                "The **`-moz-appearance`** CSS property is used in Gecko (Firefox) to display an element using platform-native styling based on the operating system's theme.\n\n**Syntax**: `none | auto | textfield | menulist-button | <compat-auto>`\n\n**Initial value**: `auto`\n\n| Chrome  | Firefox |   Safari    |   Edge   | IE  |\n| :-----: | :-----: | :---------: | :------: | :-: |\n| **84**  | **80**  | **3** _-x-_ |  **84**  | No  |\n| 1 _-x-_ | 1 _-x-_ |             | 12 _-x-_ |     |",
              enum: [
                '-moz-initial',
                'auto',
                'button',
                'checkbox',
                'inherit',
                'initial',
                'listbox',
                'menulist',
                'menulist-button',
                'meter',
                'none',
                'progress-bar',
                'push-button',
                'radio',
                'revert',
                'searchfield',
                'slider-horizontal',
                'square-button',
                'textarea',
                'textfield',
                'unset',
              ],
              type: 'string',
            },
            aspectRatio: {
              description:
                'The **`aspect-ratio`**    CSS property sets a _**preferred aspect ratio**_ for the box, which will be used in the calculation of auto sizes and some other layout functions.\n\n**Syntax**: `auto | <ratio>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n|  n/a   |   n/a   |   No   |  No  | No  |',
              type: 'string',
            },
            backdropFilter: {
              description:
                'The **`backdrop-filter`** CSS property lets you apply graphical effects such as blurring or color shifting to the area behind an element. Because it applies to everything _behind_ the element, to see the effect you must make the element or its background at least partially transparent.\n\n**Syntax**: `none | <filter-function-list>`\n\n**Initial value**: `none`\n\n| Chrome | Firefox |   Safari    |  Edge  | IE  |\n| :----: | :-----: | :---------: | :----: | :-: |\n| **76** |   n/a   | **9** _-x-_ | **17** | No  |',
              type: 'string',
            },
            backfaceVisibility: {
              description:
                'The **`backface-visibility`** CSS property sets whether the back face of an element is visible when turned towards the user.\n\n**Syntax**: `visible | hidden`\n\n**Initial value**: `visible`\n\n|  Chrome  | Firefox  |    Safari     |  Edge  |   IE   |\n| :------: | :------: | :-----------: | :----: | :----: |\n|  **36**  |  **16**  | **5.1** _-x-_ | **12** | **10** |\n| 12 _-x-_ | 10 _-x-_ |               |        |        |',
              enum: [
                '-moz-initial',
                'hidden',
                'inherit',
                'initial',
                'revert',
                'unset',
                'visible',
              ],
              type: 'string',
            },
            backgroundAttachment: {
              description:
                "The **`background-attachment`** CSS property sets whether a background image's position is fixed within the viewport, or scrolls with its containing block.\n\n**Syntax**: `<attachment>#`\n\n**Initial value**: `scroll`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |",
              type: 'string',
            },
            backgroundBlendMode: {
              description:
                "The **`background-blend-mode`** CSS property sets how an element's background images should blend with each other and with the element's background color.\n\n**Syntax**: `<blend-mode>#`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **35** | **30**  | **8**  | **79** | No  |",
              type: 'string',
            },
            backgroundClip: {
              description:
                "The **`background-clip`** CSS property sets whether an element's background `<color>` or `<image>` extends underneath its border.\n\n**Syntax**: `<box>#`\n\n**Initial value**: `border-box`\n\n| Chrome | Firefox |   Safari    |  Edge  |  IE   |\n| :----: | :-----: | :---------: | :----: | :---: |\n| **1**  |  **4**  | **3** _-x-_ | **12** | **9** |",
              type: 'string',
            },
            backgroundColor: {
              description:
                'The **`background-color`** CSS property sets the background color of an element.\n\n**Syntax**: `<color>`\n\n**Initial value**: `transparent`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |',
              type: 'string',
            },
            backgroundImage: {
              description:
                'The **`background-image`** CSS property sets one or more background images on an element.\n\n**Syntax**: `<bg-image>#`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |',
              type: 'string',
            },
            backgroundOrigin: {
              description:
                'The **`background-origin`** CSS property sets the _background positioning area_. In other words, it sets the origin position of an image set with the `background-image` property.\n\n**Syntax**: `<box>#`\n\n**Initial value**: `padding-box`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **4**  | **3**  | **12** | **9** |',
              type: 'string',
            },
            backgroundPosition: {
              description:
                'The **`background-position`** CSS property sets the initial position for each background image. The position is relative to the position layer set by `background-origin`.\n\n**Syntax**: `<bg-position>#`\n\n**Initial value**: `0% 0%`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |',
              type: ['string', 'number'],
            },
            backgroundPositionX: {
              description:
                'The **`background-position-x`** CSS property sets the initial horizontal position for each background image. The position is relative to the position layer set by `background-origin`.\n\n**Syntax**: `[ center | [ [ left | right | x-start | x-end ]? <length-percentage>? ]! ]#`\n\n**Initial value**: `left`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  | **49**  | **1**  | **12** | **6** |',
              type: ['string', 'number'],
            },
            backgroundPositionY: {
              description:
                'The **`background-position-y`** CSS property sets the initial vertical position, relative to the background position layer defined by `background-origin`, for each defined background image.\n\n**Syntax**: `[ center | [ [ top | bottom | y-start | y-end ]? <length-percentage>? ]! ]#`\n\n**Initial value**: `top`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  | **49**  | **1**  | **12** | **6** |',
              type: ['string', 'number'],
            },
            backgroundRepeat: {
              description:
                'The **`background-repeat`** CSS property sets how background images are repeated. A background image can be repeated along the horizontal and vertical axes, or not repeated at all.\n\n**Syntax**: `<repeat-style>#`\n\n**Initial value**: `repeat`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |',
              type: 'string',
            },
            backgroundSize: {
              description:
                "The **`background-size`** CSS property sets the size of the element's background image. The image can be left to its natural size, stretched, or constrained to fit the available space.\n\n**Syntax**: `<bg-size>#`\n\n**Initial value**: `auto auto`\n\n| Chrome  | Firefox | Safari  |  Edge  |  IE   |\n| :-----: | :-----: | :-----: | :----: | :---: |\n|  **3**  |  **4**  |  **5**  | **12** | **9** |\n| 1 _-x-_ |         | 3 _-x-_ |        |       |",
              type: ['string', 'number'],
            },
            blockOverflow: {
              description:
                '**Syntax**: `clip | ellipsis | <string>`\n\n**Initial value**: `clip`',
              type: 'string',
            },
            blockSize: {
              description:
                "The **`block-size`** CSS property defines the horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the `width` or the `height` property, depending on the value of `writing-mode`.\n\n**Syntax**: `<'width'>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **57** | **41**  | **12.1** | **79** | No  |",
              type: ['string', 'number'],
            },
            borderBlockColor: {
              description:
                "The **`border-block-color`** CSS property defines the color of the logical block borders of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color` and `border-bottom-color`, or `border-right-color` and `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-color'>{1,2}`\n\n**Initial value**: `currentcolor`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n|  n/a   | **66**  |   No   | n/a  | No  |",
              type: 'string',
            },
            borderBlockEndColor: {
              description:
                "The **`border-block-end-color`** CSS property defines the color of the logical block-end border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-color'>`\n\n**Initial value**: `currentcolor`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **69** | **41**  | **12.1** | **79** | No  |",
              type: 'string',
            },
            borderBlockEndStyle: {
              description:
                "The **`border-block-end-style`** CSS property defines the style of the logical block end border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-style'>`\n\n**Initial value**: `none`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **69** | **41**  | **12.1** | **79** | No  |",
              enum: [
                '-moz-initial',
                'dashed',
                'dotted',
                'double',
                'groove',
                'hidden',
                'inherit',
                'initial',
                'inset',
                'none',
                'outset',
                'revert',
                'ridge',
                'solid',
                'unset',
              ],
              type: 'string',
            },
            borderBlockEndWidth: {
              description:
                "The **`border-block-end-width`** CSS property defines the width of the logical block-end border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-width'>`\n\n**Initial value**: `medium`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **69** | **41**  | **12.1** | **79** | No  |",
              type: ['string', 'number'],
            },
            borderBlockStartColor: {
              description:
                "The **`border-block-start-color`** CSS property defines the color of the logical block-start border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-color'>`\n\n**Initial value**: `currentcolor`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **69** | **41**  | **12.1** | **79** | No  |",
              type: 'string',
            },
            borderBlockStartStyle: {
              description:
                "The **`border-block-start-style`** CSS property defines the style of the logical block start border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-style'>`\n\n**Initial value**: `none`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **69** | **41**  | **12.1** | **79** | No  |",
              enum: [
                '-moz-initial',
                'dashed',
                'dotted',
                'double',
                'groove',
                'hidden',
                'inherit',
                'initial',
                'inset',
                'none',
                'outset',
                'revert',
                'ridge',
                'solid',
                'unset',
              ],
              type: 'string',
            },
            borderBlockStartWidth: {
              description:
                "The **`border-block-start-width`** CSS property defines the width of the logical block-start border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-width'>`\n\n**Initial value**: `medium`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **69** | **41**  | **12.1** | **79** | No  |",
              type: ['string', 'number'],
            },
            borderBlockStyle: {
              description:
                "The **`border-block-style`** CSS property defines the style of the logical block borders of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style` and `border-bottom-style`, or `border-left-style` and `border-right-style` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-style'>`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **69** | **66**  |   No   | **79** | No  |",
              enum: [
                '-moz-initial',
                'dashed',
                'dotted',
                'double',
                'groove',
                'hidden',
                'inherit',
                'initial',
                'inset',
                'none',
                'outset',
                'revert',
                'ridge',
                'solid',
                'unset',
              ],
              type: 'string',
            },
            borderBlockWidth: {
              description:
                "The **`border-block-width`** CSS property defines the width of the logical block borders of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width` and `border-bottom-width`, or `border-left-width`, and `border-right-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-width'>`\n\n**Initial value**: `medium`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **69** | **66**  |   No   | **79** | No  |",
              type: ['string', 'number'],
            },
            borderBottomColor: {
              description:
                "The **`border-bottom-color`** CSS property sets the color of an element's bottom border. It can also be set with the shorthand CSS properties `border-color` or `border-bottom`.\n\n**Syntax**: `<'border-top-color'>`\n\n**Initial value**: `currentcolor`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |",
              type: 'string',
            },
            borderBottomLeftRadius: {
              description:
                'The **`border-bottom-left-radius`** CSS property rounds the bottom-left corner of an element.\n\n**Syntax**: `<length-percentage>{1,2}`\n\n**Initial value**: `0`\n\n| Chrome  | Firefox | Safari  |  Edge  |  IE   |\n| :-----: | :-----: | :-----: | :----: | :---: |\n|  **4**  |  **4**  |  **5**  | **12** | **9** |\n| 1 _-x-_ |         | 3 _-x-_ |        |       |',
              type: ['string', 'number'],
            },
            borderBottomRightRadius: {
              description:
                'The **`border-bottom-right-radius`** CSS property rounds the bottom-right corner of an element.\n\n**Syntax**: `<length-percentage>{1,2}`\n\n**Initial value**: `0`\n\n| Chrome  | Firefox | Safari  |  Edge  |  IE   |\n| :-----: | :-----: | :-----: | :----: | :---: |\n|  **4**  |  **4**  |  **5**  | **12** | **9** |\n| 1 _-x-_ |         | 3 _-x-_ |        |       |',
              type: ['string', 'number'],
            },
            borderBottomStyle: {
              description:
                "The **`border-bottom-style`** CSS property sets the line style of an element's bottom `border`.\n\n**Syntax**: `<line-style>`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari |  Edge  |   IE    |\n| :----: | :-----: | :----: | :----: | :-----: |\n| **1**  |  **1**  | **1**  | **12** | **5.5** |",
              enum: [
                '-moz-initial',
                'dashed',
                'dotted',
                'double',
                'groove',
                'hidden',
                'inherit',
                'initial',
                'inset',
                'none',
                'outset',
                'revert',
                'ridge',
                'solid',
                'unset',
              ],
              type: 'string',
            },
            borderBottomWidth: {
              description:
                'The **`border-bottom-width`** CSS property sets the width of the bottom border of a box.\n\n**Syntax**: `<line-width>`\n\n**Initial value**: `medium`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |',
              type: ['string', 'number'],
            },
            borderCollapse: {
              description:
                'The **`border-collapse`** CSS property sets whether cells inside a `<table>` have shared or separate borders.\n\n**Syntax**: `collapse | separate`\n\n**Initial value**: `separate`\n\n| Chrome | Firefox | Safari  |  Edge  |  IE   |\n| :----: | :-----: | :-----: | :----: | :---: |\n| **1**  |  **1**  | **1.2** | **12** | **5** |',
              enum: [
                '-moz-initial',
                'collapse',
                'inherit',
                'initial',
                'revert',
                'separate',
                'unset',
              ],
              type: 'string',
            },
            borderEndEndRadius: {
              description:
                "The **`border-end-end-radius`** CSS property defines a logical border radius on an element, which maps to a physical border radius that depends on on the element's `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<length-percentage>{1,2}`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n|   No   | **66**  |   No   |  No  | No  |",
              type: ['string', 'number'],
            },
            borderEndStartRadius: {
              description:
                "The **`border-end-start-radius`** CSS property defines a logical border radius on an element, which maps to a physical border radius depending on the element's `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<length-percentage>{1,2}`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n|   No   | **66**  |   No   |  No  | No  |",
              type: ['string', 'number'],
            },
            borderImageOutset: {
              description:
                "The **`border-image-outset`** CSS property sets the distance by which an element's border image is set out from its border box.\n\n**Syntax**: `[ <length> | <number> ]{1,4}`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari |  Edge  |   IE   |\n| :----: | :-----: | :----: | :----: | :----: |\n| **15** | **15**  | **6**  | **12** | **11** |",
              type: ['string', 'number'],
            },
            borderImageRepeat: {
              description:
                "The **`border-image-repeat`** CSS property defines how the edge regions of a source image are adjusted to fit the dimensions of an element's border image.\n\n**Syntax**: `[ stretch | repeat | round | space ]{1,2}`\n\n**Initial value**: `stretch`\n\n| Chrome | Firefox | Safari |  Edge  |   IE   |\n| :----: | :-----: | :----: | :----: | :----: |\n| **15** | **15**  | **6**  | **12** | **11** |",
              type: 'string',
            },
            borderImageSlice: {
              description:
                "The **`border-image-slice`** CSS property divides the image specified by `border-image-source` into regions. These regions form the components of an element's border image.\n\n**Syntax**: `<number-percentage>{1,4} && fill?`\n\n**Initial value**: `100%`\n\n| Chrome | Firefox | Safari |  Edge  |   IE   |\n| :----: | :-----: | :----: | :----: | :----: |\n| **15** | **15**  | **6**  | **12** | **11** |",
              type: ['string', 'number'],
            },
            borderImageSource: {
              description:
                "The **`border-image-source`** CSS property sets the source image used to create an element's border image.\n\n**Syntax**: `none | <image>`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari |  Edge  |   IE   |\n| :----: | :-----: | :----: | :----: | :----: |\n| **15** | **15**  | **6**  | **12** | **11** |",
              type: 'string',
            },
            borderImageWidth: {
              description:
                "The **`border-image-width`** CSS property sets the width of an element's border image.\n\n**Syntax**: `[ <length-percentage> | <number> | auto ]{1,4}`\n\n**Initial value**: `1`\n\n| Chrome | Firefox | Safari |  Edge  |   IE   |\n| :----: | :-----: | :----: | :----: | :----: |\n| **15** | **13**  | **6**  | **12** | **11** |",
              type: ['string', 'number'],
            },
            borderInlineColor: {
              description:
                "The **`border-inline-color`** CSS property defines the color of the logical inline borders of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color` and `border-bottom-color`, or `border-right-color` and `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-color'>{1,2}`\n\n**Initial value**: `currentcolor`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **69** | **66**  |   No   | **79** | No  |",
              type: 'string',
            },
            borderInlineEndColor: {
              description:
                "The **`border-inline-end-color`** CSS property defines the color of the logical inline-end border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-color'>`\n\n**Initial value**: `currentcolor`\n\n| Chrome |           Firefox           |  Safari  |  Edge  | IE  |\n| :----: | :-------------------------: | :------: | :----: | :-: |\n| **69** |           **41**            | **12.1** | **79** | No  |\n|        | 3 _(-moz-border-end-color)_ |          |        |     |",
              type: 'string',
            },
            borderInlineEndStyle: {
              description:
                "The **`border-inline-end-style`** CSS property defines the style of the logical inline end border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-style'>`\n\n**Initial value**: `none`\n\n| Chrome |           Firefox           |  Safari  |  Edge  | IE  |\n| :----: | :-------------------------: | :------: | :----: | :-: |\n| **69** |           **41**            | **12.1** | **79** | No  |\n|        | 3 _(-moz-border-end-style)_ |          |        |     |",
              enum: [
                '-moz-initial',
                'dashed',
                'dotted',
                'double',
                'groove',
                'hidden',
                'inherit',
                'initial',
                'inset',
                'none',
                'outset',
                'revert',
                'ridge',
                'solid',
                'unset',
              ],
              type: 'string',
            },
            borderInlineEndWidth: {
              description:
                "The **`border-inline-end-width`** CSS property defines the width of the logical inline-end border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-width'>`\n\n**Initial value**: `medium`\n\n| Chrome |           Firefox           |  Safari  |  Edge  | IE  |\n| :----: | :-------------------------: | :------: | :----: | :-: |\n| **69** |           **41**            | **12.1** | **79** | No  |\n|        | 3 _(-moz-border-end-width)_ |          |        |     |",
              type: ['string', 'number'],
            },
            borderInlineStartColor: {
              description:
                "The **`border-inline-start-color`** CSS property defines the color of the logical inline start border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-color'>`\n\n**Initial value**: `currentcolor`\n\n| Chrome |            Firefox            |  Safari  |  Edge  | IE  |\n| :----: | :---------------------------: | :------: | :----: | :-: |\n| **69** |            **41**             | **12.1** | **79** | No  |\n|        | 3 _(-moz-border-start-color)_ |          |        |     |",
              type: 'string',
            },
            borderInlineStartStyle: {
              description:
                "The **`border-inline-start-style`** CSS property defines the style of the logical inline start border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-style'>`\n\n**Initial value**: `none`\n\n| Chrome |            Firefox            |  Safari  |  Edge  | IE  |\n| :----: | :---------------------------: | :------: | :----: | :-: |\n| **69** |            **41**             | **12.1** | **79** | No  |\n|        | 3 _(-moz-border-start-style)_ |          |        |     |",
              enum: [
                '-moz-initial',
                'dashed',
                'dotted',
                'double',
                'groove',
                'hidden',
                'inherit',
                'initial',
                'inset',
                'none',
                'outset',
                'revert',
                'ridge',
                'solid',
                'unset',
              ],
              type: 'string',
            },
            borderInlineStartWidth: {
              description:
                "The **`border-inline-start-width`** CSS property defines the width of the logical inline-start border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-width'>`\n\n**Initial value**: `medium`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **69** | **41**  | **12.1** | **79** | No  |",
              type: ['string', 'number'],
            },
            borderInlineStyle: {
              description:
                "The **`border-inline-style`** CSS property defines the style of the logical inline borders of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style` and `border-bottom-style`, or `border-left-style` and `border-right-style` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-style'>`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **69** | **66**  |   No   | **79** | No  |",
              enum: [
                '-moz-initial',
                'dashed',
                'dotted',
                'double',
                'groove',
                'hidden',
                'inherit',
                'initial',
                'inset',
                'none',
                'outset',
                'revert',
                'ridge',
                'solid',
                'unset',
              ],
              type: 'string',
            },
            borderInlineWidth: {
              description:
                "The **`border-inline-width`** CSS property defines the width of the logical inline borders of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width` and `border-bottom-width`, or `border-left-width`, and `border-right-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-width'>`\n\n**Initial value**: `medium`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **69** | **66**  |   No   | **79** | No  |",
              type: ['string', 'number'],
            },
            borderLeftColor: {
              description:
                "The **`border-left-color`** CSS property sets the color of an element's left border. It can also be set with the shorthand CSS properties `border-color` or `border-left`.\n\n**Syntax**: `<color>`\n\n**Initial value**: `currentcolor`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |",
              type: 'string',
            },
            borderLeftStyle: {
              description:
                "The **`border-left-style`** CSS property sets the line style of an element's left `border`.\n\n**Syntax**: `<line-style>`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari |  Edge  |   IE    |\n| :----: | :-----: | :----: | :----: | :-----: |\n| **1**  |  **1**  | **1**  | **12** | **5.5** |",
              enum: [
                '-moz-initial',
                'dashed',
                'dotted',
                'double',
                'groove',
                'hidden',
                'inherit',
                'initial',
                'inset',
                'none',
                'outset',
                'revert',
                'ridge',
                'solid',
                'unset',
              ],
              type: 'string',
            },
            borderLeftWidth: {
              description:
                'The **`border-left-width`** CSS property sets the width of the left border of an element.\n\n**Syntax**: `<line-width>`\n\n**Initial value**: `medium`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |',
              type: ['string', 'number'],
            },
            borderRightColor: {
              description:
                "The **`border-right-color`** CSS property sets the color of an element's right border. It can also be set with the shorthand CSS properties `border-color` or `border-right`.\n\n**Syntax**: `<color>`\n\n**Initial value**: `currentcolor`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |",
              type: 'string',
            },
            borderRightStyle: {
              description:
                "The **`border-right-style`** CSS property sets the line style of an element's right `border`.\n\n**Syntax**: `<line-style>`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari |  Edge  |   IE    |\n| :----: | :-----: | :----: | :----: | :-----: |\n| **1**  |  **1**  | **1**  | **12** | **5.5** |",
              enum: [
                '-moz-initial',
                'dashed',
                'dotted',
                'double',
                'groove',
                'hidden',
                'inherit',
                'initial',
                'inset',
                'none',
                'outset',
                'revert',
                'ridge',
                'solid',
                'unset',
              ],
              type: 'string',
            },
            borderRightWidth: {
              description:
                'The **`border-right-width`** CSS property sets the width of the right border of an element.\n\n**Syntax**: `<line-width>`\n\n**Initial value**: `medium`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |',
              type: ['string', 'number'],
            },
            borderSpacing: {
              description:
                'The **`border-spacing`** CSS property sets the distance between the borders of adjacent `<table>` cells. This property applies only when `border-collapse` is `separate`.\n\n**Syntax**: `<length> <length>?`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **8** |',
              type: ['string', 'number'],
            },
            borderStartEndRadius: {
              description:
                "The **`border-start-end-radius`** CSS property defines a logical border radius on an element, which maps to a physical border radius depending on the element's `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<length-percentage>{1,2}`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n|   No   | **66**  |   No   |  No  | No  |",
              type: ['string', 'number'],
            },
            borderStartStartRadius: {
              description:
                "The **`border-start-start-radius`** CSS property defines a logical border radius on an element, which maps to a physical border radius that depends on the element's `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<length-percentage>{1,2}`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n|   No   | **66**  |   No   |  No  | No  |",
              type: ['string', 'number'],
            },
            borderTopColor: {
              description:
                "The **`border-top-color`** CSS property sets the color of an element's top border. It can also be set with the shorthand CSS properties `border-color` or `border-top`.\n\n**Syntax**: `<color>`\n\n**Initial value**: `currentcolor`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |",
              type: 'string',
            },
            borderTopLeftRadius: {
              description:
                'The **`border-top-left-radius`** CSS property rounds the top-left corner of an element.\n\n**Syntax**: `<length-percentage>{1,2}`\n\n**Initial value**: `0`\n\n| Chrome  | Firefox | Safari  |  Edge  |  IE   |\n| :-----: | :-----: | :-----: | :----: | :---: |\n|  **4**  |  **4**  |  **5**  | **12** | **9** |\n| 1 _-x-_ |         | 3 _-x-_ |        |       |',
              type: ['string', 'number'],
            },
            borderTopRightRadius: {
              description:
                'The **`border-top-right-radius`** CSS property rounds the top-right corner of an element.\n\n**Syntax**: `<length-percentage>{1,2}`\n\n**Initial value**: `0`\n\n| Chrome  | Firefox | Safari  |  Edge  |  IE   |\n| :-----: | :-----: | :-----: | :----: | :---: |\n|  **4**  |  **4**  |  **5**  | **12** | **9** |\n| 1 _-x-_ |         | 3 _-x-_ |        |       |',
              type: ['string', 'number'],
            },
            borderTopStyle: {
              description:
                "The **`border-top-style`** CSS property sets the line style of an element's top `border`.\n\n**Syntax**: `<line-style>`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari |  Edge  |   IE    |\n| :----: | :-----: | :----: | :----: | :-----: |\n| **1**  |  **1**  | **1**  | **12** | **5.5** |",
              enum: [
                '-moz-initial',
                'dashed',
                'dotted',
                'double',
                'groove',
                'hidden',
                'inherit',
                'initial',
                'inset',
                'none',
                'outset',
                'revert',
                'ridge',
                'solid',
                'unset',
              ],
              type: 'string',
            },
            borderTopWidth: {
              description:
                'The **`border-top-width`** CSS property sets the width of the top border of an element.\n\n**Syntax**: `<line-width>`\n\n**Initial value**: `medium`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |',
              type: ['string', 'number'],
            },
            bottom: {
              description:
                'The **`bottom`** CSS property participates in specifying the vertical position of a _positioned element_. It has no effect on non-positioned elements.\n\n**Syntax**: `<length> | <percentage> | auto`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **5** |',
              type: ['string', 'number'],
            },
            boxDecorationBreak: {
              description:
                "The **`box-decoration-break`** CSS property specifies how an element's fragments should be rendered when broken across multiple lines, columns, or pages.\n\n**Syntax**: `slice | clone`\n\n**Initial value**: `slice`\n\n|    Chrome    | Firefox |    Safari     |     Edge     | IE  |\n| :----------: | :-----: | :-----------: | :----------: | :-: |\n| **22** _-x-_ | **32**  | **6.1** _-x-_ | **79** _-x-_ | No  |",
              enum: [
                '-moz-initial',
                'clone',
                'inherit',
                'initial',
                'revert',
                'slice',
                'unset',
              ],
              type: 'string',
            },
            boxShadow: {
              description:
                "The **`box-shadow`** CSS property adds shadow effects around an element's frame. You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radii, and color.\n\n**Syntax**: `none | <shadow>#`\n\n**Initial value**: `none`\n\n| Chrome  | Firefox | Safari  |  Edge  |  IE   |\n| :-----: | :-----: | :-----: | :----: | :---: |\n| **10**  |  **4**  | **5.1** | **12** | **9** |\n| 1 _-x-_ |         | 3 _-x-_ |        |       |",
              type: 'string',
            },
            boxSizing: {
              description:
                'The **`box-sizing`** CSS property defines how the user agent should calculate the total width and height of an element.\n\n**Syntax**: `content-box | border-box`\n\n**Initial value**: `content-box`\n\n| Chrome  | Firefox | Safari  |  Edge  |  IE   |\n| :-----: | :-----: | :-----: | :----: | :---: |\n| **10**  | **29**  | **5.1** | **12** | **8** |\n| 1 _-x-_ | 1 _-x-_ | 3 _-x-_ |        |       |',
              enum: [
                '-moz-initial',
                'border-box',
                'content-box',
                'inherit',
                'initial',
                'revert',
                'unset',
              ],
              type: 'string',
            },
            breakAfter: {
              description:
                'The **`break-after`** CSS property defines how page, column, or region breaks should behave after a generated box. If there is no generated box, the property is ignored.\n\n**Syntax**: `auto | avoid | always | all | avoid-page | page | left | right | recto | verso | avoid-column | column | avoid-region | region`\n\n**Initial value**: `auto`\n\n---\n\n_Supported in Multi-column Layout_\n\n| Chrome | Firefox | Safari |  Edge  |   IE   |\n| :----: | :-----: | :----: | :----: | :----: |\n| **50** | **65**  |   No   | **12** | **10** |\n\n---\n\n_Supported in Paged Media_\n\n| Chrome | Firefox | Safari |  Edge  |   IE   |\n| :----: | :-----: | :----: | :----: | :----: |\n| **50** | **65**  | **10** | **12** | **10** |\n\n---',
              enum: [
                '-moz-initial',
                'all',
                'always',
                'auto',
                'avoid',
                'avoid-column',
                'avoid-page',
                'avoid-region',
                'column',
                'inherit',
                'initial',
                'left',
                'page',
                'recto',
                'region',
                'revert',
                'right',
                'unset',
                'verso',
              ],
              type: 'string',
            },
            breakBefore: {
              description:
                'The **`break-before`** CSS property sets how page, column, or region breaks should behave before a generated box. If there is no generated box, the property is ignored.\n\n**Syntax**: `auto | avoid | always | all | avoid-page | page | left | right | recto | verso | avoid-column | column | avoid-region | region`\n\n**Initial value**: `auto`\n\n---\n\n_Supported in Multi-column Layout_\n\n| Chrome | Firefox | Safari |  Edge  |   IE   |\n| :----: | :-----: | :----: | :----: | :----: |\n| **50** | **65**  |   No   | **12** | **10** |\n\n---\n\n_Supported in Paged Media_\n\n| Chrome | Firefox | Safari |  Edge  |   IE   |\n| :----: | :-----: | :----: | :----: | :----: |\n| **50** | **65**  | **10** | **12** | **10** |\n\n---',
              enum: [
                '-moz-initial',
                'all',
                'always',
                'auto',
                'avoid',
                'avoid-column',
                'avoid-page',
                'avoid-region',
                'column',
                'inherit',
                'initial',
                'left',
                'page',
                'recto',
                'region',
                'revert',
                'right',
                'unset',
                'verso',
              ],
              type: 'string',
            },
            breakInside: {
              description:
                'The **`break-inside`** CSS property defines how page, column, or region breaks should behave inside a generated box. If there is no generated box, the property is ignored.\n\n**Syntax**: `auto | avoid | avoid-page | avoid-column | avoid-region`\n\n**Initial value**: `auto`\n\n---\n\n_Supported in Multi-column Layout_\n\n| Chrome | Firefox | Safari |  Edge  |   IE   |\n| :----: | :-----: | :----: | :----: | :----: |\n| **50** | **65**  | **10** | **12** | **10** |\n\n---\n\n_Supported in Paged Media_\n\n| Chrome | Firefox | Safari |  Edge  |   IE   |\n| :----: | :-----: | :----: | :----: | :----: |\n| **50** | **65**  | **10** | **12** | **10** |\n\n---',
              enum: [
                '-moz-initial',
                'auto',
                'avoid',
                'avoid-column',
                'avoid-page',
                'avoid-region',
                'inherit',
                'initial',
                'revert',
                'unset',
              ],
              type: 'string',
            },
            captionSide: {
              description:
                "The **`caption-side`** CSS property puts the content of a table's `<caption>` on the specified side. The values are relative to the `writing-mode` of the table.\n\n**Syntax**: `top | bottom | block-start | block-end | inline-start | inline-end`\n\n**Initial value**: `top`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **8** |",
              enum: [
                '-moz-initial',
                'block-end',
                'block-start',
                'bottom',
                'inherit',
                'initial',
                'inline-end',
                'inline-start',
                'revert',
                'top',
                'unset',
              ],
              type: 'string',
            },
            caretColor: {
              description:
                'The **`caret-color`** CSS property sets the color of the insertion caret, the visible marker where the next character typed will be inserted. The caret appears in elements such as `<input>` or those with the `contenteditable` attribute. The caret is typically a thin vertical line that flashes to help make it more noticeable. By default, it is black, but its color can be altered with this property.\n\n**Syntax**: `auto | <color>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **57** | **53**  | **11.1** | **79** | No  |',
              type: 'string',
            },
            clear: {
              description:
                'The **`clear`** CSS property sets whether an element must be moved below (cleared) floating elements that precede it. The `clear` property applies to floating and non-floating elements.\n\n**Syntax**: `none | left | right | both | inline-start | inline-end`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |',
              enum: [
                '-moz-initial',
                'both',
                'inherit',
                'initial',
                'inline-end',
                'inline-start',
                'left',
                'none',
                'revert',
                'right',
                'unset',
              ],
              type: 'string',
            },
            clipPath: {
              description:
                'The `**clip-path**` CSS property creates a clipping region that sets what part of an element should be shown. Parts that are inside the region are shown, while those outside are hidden.\n\n**Syntax**: `<clip-source> | [ <basic-shape> || <geometry-box> ] | none`\n\n**Initial value**: `none`\n\n|  Chrome  | Firefox |  Safari   |  Edge  |   IE   |\n| :------: | :-----: | :-------: | :----: | :----: |\n|  **55**  | **3.5** |  **9.1**  | **12** | **10** |\n| 23 _-x-_ |         | 6.1 _-x-_ |        |        |',
              type: 'string',
            },
            color: {
              description:
                "The **`color`** CSS property sets the foreground color value of an element's text and text decorations, and sets the `currentcolor` value. `currentcolor` may be used as an indirect value on _other_ properties and is the default for other color properties, such as `border-color`.\n\n**Syntax**: `<color>`\n\n**Initial value**: Varies from one browser to another\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **3** |",
              type: 'string',
            },
            colorAdjust: {
              description:
                "The **`color-adjust`** CSS property sets what, if anything, the user agent may do to optimize the appearance of the element on the output device. By default, the browser is allowed to make any adjustments to the element's appearance it determines to be necessary and prudent given the type and capabilities of the output device.\n\n**Syntax**: `economy | exact`\n\n**Initial value**: `economy`\n\n|                Chrome                 | Firefox |                Safari                |                 Edge                  | IE  |\n| :-----------------------------------: | :-----: | :----------------------------------: | :-----------------------------------: | :-: |\n| **49** _(-webkit-print-color-adjust)_ | **48**  | **6** _(-webkit-print-color-adjust)_ | **79** _(-webkit-print-color-adjust)_ | No  |",
              enum: [
                '-moz-initial',
                'economy',
                'exact',
                'inherit',
                'initial',
                'revert',
                'unset',
              ],
              type: 'string',
            },
            columnCount: {
              description:
                "The **`column-count`** CSS property breaks an element's content into the specified number of columns.\n\n**Syntax**: `<integer> | auto`\n\n**Initial value**: `auto`\n\n| Chrome  | Firefox | Safari  |  Edge  |   IE   |\n| :-----: | :-----: | :-----: | :----: | :----: |\n| **50**  | **52**  |  **9**  | **12** | **10** |\n| 1 _-x-_ |         | 3 _-x-_ |        |        |",
              anyOf: [
                {
                  enum: [
                    '-moz-initial',
                    'auto',
                    'inherit',
                    'initial',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                {
                  type: 'number',
                },
              ],
            },
            columnFill: {
              description:
                "The **`column-fill`** CSS property controls how an element's contents are balanced when broken into columns.\n\n**Syntax**: `auto | balance | balance-all`\n\n**Initial value**: `balance`\n\n| Chrome | Firefox | Safari  |  Edge  |   IE   |\n| :----: | :-----: | :-----: | :----: | :----: |\n| **50** | **52**  |  **9**  | **12** | **10** |\n|        |         | 8 _-x-_ |        |        |",
              enum: [
                '-moz-initial',
                'auto',
                'balance',
                'inherit',
                'initial',
                'revert',
                'unset',
              ],
              type: 'string',
            },
            columnGap: {
              description:
                "The **`column-gap`** CSS property sets the size of the gap (gutter) between an element's columns.\n\n**Syntax**: `normal | <length-percentage>`\n\n**Initial value**: `normal`\n\n---\n\n_Supported in Flex Layout_\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **84** | **63**  |   No   | **84** | No  |\n\n---\n\n_Supported in Grid Layout_\n\n|         Chrome         |        Firefox         |          Safari          |  Edge  | IE  |\n| :--------------------: | :--------------------: | :----------------------: | :----: | :-: |\n|         **66**         |         **61**         |         **12.1**         | **16** | No  |\n| 57 _(grid-column-gap)_ | 52 _(grid-column-gap)_ | 10.1 _(grid-column-gap)_ |        |     |\n\n---\n\n_Supported in Multi-column Layout_\n\n| Chrome  | Firefox | Safari  |  Edge  |   IE   |\n| :-----: | :-----: | :-----: | :----: | :----: |\n| **50**  | **52**  | **10**  | **12** | **10** |\n| 1 _-x-_ |         | 3 _-x-_ |        |        |\n\n---",
              type: ['string', 'number'],
            },
            columnRuleColor: {
              description:
                'The **`column-rule-color`** CSS property sets the color of the rule (line) drawn between columns in a multi-column layout.\n\n**Syntax**: `<color>`\n\n**Initial value**: `currentcolor`\n\n| Chrome  | Firefox | Safari  |  Edge  |   IE   |\n| :-----: | :-----: | :-----: | :----: | :----: |\n| **50**  | **52**  |  **9**  | **12** | **10** |\n| 1 _-x-_ |         | 3 _-x-_ |        |        |',
              type: 'string',
            },
            columnRuleStyle: {
              description:
                "The **`column-rule-style`** CSS property sets the style of the line drawn between columns in a multi-column layout.\n\n**Syntax**: `<'border-style'>`\n\n**Initial value**: `none`\n\n| Chrome  | Firefox | Safari  |  Edge  |   IE   |\n| :-----: | :-----: | :-----: | :----: | :----: |\n| **50**  | **52**  |  **9**  | **12** | **10** |\n| 1 _-x-_ |         | 3 _-x-_ |        |        |",
              type: 'string',
            },
            columnRuleWidth: {
              description:
                "The **`column-rule-width`** CSS property sets the width of the rule (line) drawn between columns in a multi-column layout.\n\n**Syntax**: `<'border-width'>`\n\n**Initial value**: `medium`\n\n| Chrome  | Firefox | Safari  |  Edge  |   IE   |\n| :-----: | :-----: | :-----: | :----: | :----: |\n| **50**  | **52**  |  **9**  | **12** | **10** |\n| 1 _-x-_ |         | 3 _-x-_ |        |        |",
              type: ['string', 'number'],
            },
            columnSpan: {
              description:
                'The **`column-span`** CSS property makes it possible for an element to span across all columns when its value is set to `all`.\n\n**Syntax**: `none | all`\n\n**Initial value**: `none`\n\n| Chrome  | Firefox |  Safari   |  Edge  |   IE   |\n| :-----: | :-----: | :-------: | :----: | :----: |\n| **50**  | **71**  |   **9**   | **12** | **10** |\n| 6 _-x-_ |         | 5.1 _-x-_ |        |        |',
              enum: [
                '-moz-initial',
                'all',
                'inherit',
                'initial',
                'none',
                'revert',
                'unset',
              ],
              type: 'string',
            },
            columnWidth: {
              description:
                "The **`column-width`** CSS property specifies the ideal column width in a multi-column layout. The container will have as many columns as can fit without any of them having a width less than the `column-width` value. If the width of the container is narrower than the specified value, the single column's width will be smaller than the declared column width.\n\n**Syntax**: `<length> | auto`\n\n**Initial value**: `auto`\n\n| Chrome  | Firefox | Safari  |  Edge  |   IE   |\n| :-----: | :-----: | :-----: | :----: | :----: |\n| **50**  | **50**  |  **9**  | **12** | **10** |\n| 1 _-x-_ |         | 3 _-x-_ |        |        |",
              type: ['string', 'number'],
            },
            contain: {
              description:
                'The **`contain`** CSS property allows an author to indicate that an element and its contents are, as much as possible, _independent_ of the rest of the document tree. This allows the browser to recalculate layout, style, paint, size, or any combination of them for a limited area of the DOM and not the entire page.\n\n**Syntax**: `none | strict | content | [ size || layout || style || paint ]`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **52** | **69**  |   No   | **79** | No  |',
              type: 'string',
            },
            content: {
              description:
                'The **`content`** CSS property replaces an element with a generated value. Objects inserted using the `content` property are _anonymous replaced elements._\n\n**Syntax**: `normal | none | [ <content-replacement> | <content-list> ] [/ <string> ]?`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **8** |',
              type: 'string',
            },
            counterIncrement: {
              description:
                'The **`counter-increment`** CSS property increases or decreases the value of a CSS counter by a given value.\n\n**Syntax**: `[ <custom-ident> <integer>? ]+ | none`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **2**  |  **1**  | **3**  | **12** | **8** |',
              type: 'string',
            },
            counterReset: {
              description:
                'The **`counter-reset`** CSS property resets a CSS counter to a given value.\n\n**Syntax**: `[ <custom-ident> <integer>? ]+ | none`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **2**  |  **1**  | **3**  | **12** | **8** |',
              type: 'string',
            },
            counterSet: {
              description:
                "The **`counter-set`** CSS property sets a CSS counter to a given value. It manipulates the value of existing counters, and will only create new counters if there isn't already a counter of the given name on the element.\n\n**Syntax**: `[ <custom-ident> <integer>? ]+ | none`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **85** | **68**  |   No   | **85** | No  |",
              type: 'string',
            },
            cursor: {
              description:
                'The **`cursor`** CSS property sets mouse cursor to display when the mouse pointer is over an element.\n\n**Syntax**: `[ [ <url> [ <x> <y> ]? , ]* [ auto | default | none | context-menu | help | pointer | progress | wait | cell | crosshair | text | vertical-text | alias | copy | move | no-drop | not-allowed | e-resize | n-resize | ne-resize | nw-resize | s-resize | se-resize | sw-resize | w-resize | ew-resize | ns-resize | nesw-resize | nwse-resize | col-resize | row-resize | all-scroll | zoom-in | zoom-out | grab | grabbing ] ]`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari  |  Edge  |  IE   |\n| :----: | :-----: | :-----: | :----: | :---: |\n| **1**  |  **1**  | **1.2** | **12** | **4** |',
              type: 'string',
            },
            direction: {
              description:
                'The **`direction`** CSS property sets the direction of text, table columns, and horizontal overflow. Use `rtl` for languages written from right to left (like Hebrew or Arabic), and `ltr` for those written from left to right (like English and most other languages).\n\n**Syntax**: `ltr | rtl`\n\n**Initial value**: `ltr`\n\n| Chrome | Firefox | Safari |  Edge  |   IE    |\n| :----: | :-----: | :----: | :----: | :-----: |\n| **2**  |  **1**  | **1**  | **12** | **5.5** |',
              enum: [
                '-moz-initial',
                'inherit',
                'initial',
                'ltr',
                'revert',
                'rtl',
                'unset',
              ],
              type: 'string',
            },
            display: {
              description:
                'The **`display`** CSS property defines the _display type_ of an element, which consists of the two basic qualities of how an element generates boxes — the **outer display type** defining how the box participates in flow layout, and the **inner display type** defining how the children of the box are laid out.\n\n**Syntax**: `[ <display-outside> || <display-inside> ] | <display-listitem> | <display-internal> | <display-box> | <display-legacy>`\n\n**Initial value**: `inline`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |',
              type: 'string',
            },
            emptyCells: {
              description:
                'The **`empty-cells`** CSS property sets whether borders and backgrounds appear around `<table>` cells that have no visible content.\n\n**Syntax**: `show | hide`\n\n**Initial value**: `show`\n\n| Chrome | Firefox | Safari  |  Edge  |  IE   |\n| :----: | :-----: | :-----: | :----: | :---: |\n| **1**  |  **1**  | **1.2** | **12** | **8** |',
              enum: [
                '-moz-initial',
                'hide',
                'inherit',
                'initial',
                'revert',
                'show',
                'unset',
              ],
              type: 'string',
            },
            filter: {
              description:
                'The **`filter`** CSS property applies graphical effects like blur or color shift to an element. Filters are commonly used to adjust the rendering of images, backgrounds, and borders.\n\n**Syntax**: `none | <filter-function-list>`\n\n**Initial value**: `none`\n\n|  Chrome  | Firefox | Safari  |  Edge  | IE  |\n| :------: | :-----: | :-----: | :----: | :-: |\n|  **53**  | **35**  | **9.1** | **12** | No  |\n| 18 _-x-_ |         | 6 _-x-_ |        |     |',
              type: 'string',
            },
            flexBasis: {
              description:
                "The **`flex-basis`** CSS property sets the initial main size of a flex item. It sets the size of the content box unless otherwise set with `box-sizing`.\n\n**Syntax**: `content | <'width'>`\n\n**Initial value**: `auto`\n\n|  Chrome  | Firefox | Safari  |  Edge  |   IE   |\n| :------: | :-----: | :-----: | :----: | :----: |\n|  **29**  | **22**  |  **9**  | **12** | **11** |\n| 22 _-x-_ |         | 7 _-x-_ |        |        |",
              type: ['string', 'number'],
            },
            flexDirection: {
              description:
                'The **`flex-direction`** CSS property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).\n\n**Syntax**: `row | row-reverse | column | column-reverse`\n\n**Initial value**: `row`\n\n|  Chrome  | Firefox | Safari  |  Edge  |    IE    |\n| :------: | :-----: | :-----: | :----: | :------: |\n|  **29**  | **20**  |  **9**  | **12** |  **11**  |\n| 21 _-x-_ |         | 7 _-x-_ |        | 10 _-x-_ |',
              enum: [
                '-moz-initial',
                'column',
                'column-reverse',
                'inherit',
                'initial',
                'revert',
                'row',
                'row-reverse',
                'unset',
              ],
              type: 'string',
            },
            flexGrow: {
              description:
                'The **`flex-grow`** CSS property sets how much of the available space in the flex container should be assigned to that item (the flex grow factor). If all sibling items have the same flex grow factor, then all items will receive the same share of available space, otherwise it is distributed according to the ratio defined by the different flex grow factors.\n\n**Syntax**: `<number>`\n\n**Initial value**: `0`\n\n|  Chrome  | Firefox |  Safari   |  Edge  |            IE            |\n| :------: | :-----: | :-------: | :----: | :----------------------: |\n|  **29**  | **20**  |   **9**   | **12** |          **11**          |\n| 22 _-x-_ |         | 6.1 _-x-_ |        | 10 _(-ms-flex-positive)_ |',
              anyOf: [
                {
                  enum: [
                    '-moz-initial',
                    'inherit',
                    'initial',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                {
                  type: 'number',
                },
              ],
            },
            flexShrink: {
              description:
                'The **`flex-shrink`** CSS property sets the flex shrink factor of a flex item. If the size of flex items is larger than the flex container, items shrink to fit according to `flex-shrink`.\n\n**Syntax**: `<number>`\n\n**Initial value**: `1`\n\n|  Chrome  | Firefox | Safari  |  Edge  |   IE   |\n| :------: | :-----: | :-----: | :----: | :----: |\n|  **29**  | **20**  |  **9**  | **12** | **10** |\n| 22 _-x-_ |         | 8 _-x-_ |        |        |',
              anyOf: [
                {
                  enum: [
                    '-moz-initial',
                    'inherit',
                    'initial',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                {
                  type: 'number',
                },
              ],
            },
            flexWrap: {
              description:
                'The **`flex-wrap`** CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked.\n\n**Syntax**: `nowrap | wrap | wrap-reverse`\n\n**Initial value**: `nowrap`\n\n|  Chrome  | Firefox |  Safari   |  Edge  |   IE   |\n| :------: | :-----: | :-------: | :----: | :----: |\n|  **29**  | **28**  |   **9**   | **12** | **11** |\n| 21 _-x-_ |         | 6.1 _-x-_ |        |        |',
              enum: [
                '-moz-initial',
                'inherit',
                'initial',
                'nowrap',
                'revert',
                'unset',
                'wrap',
                'wrap-reverse',
              ],
              type: 'string',
            },
            float: {
              description:
                'The **`float`** CSS property places an element on the left or right side of its container, allowing text and inline elements to wrap around it. The element is removed from the normal flow of the page, though still remaining a part of the flow (in contrast to absolute positioning).\n\n**Syntax**: `left | right | none | inline-start | inline-end`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |',
              enum: [
                '-moz-initial',
                'inherit',
                'initial',
                'inline-end',
                'inline-start',
                'left',
                'none',
                'revert',
                'right',
                'unset',
              ],
              type: 'string',
            },
            fontFamily: {
              description:
                'The **`font-family`** CSS property specifies a prioritized list of one or more font family names and/or generic family names for the selected element.\n\n**Syntax**: `[ <family-name> | <generic-family> ]#`\n\n**Initial value**: depends on user agent\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **3** |',
              type: 'string',
            },
            fontFeatureSettings: {
              description:
                'The **`font-feature-settings`** CSS property controls advanced typographic features in OpenType fonts.\n\n**Syntax**: `normal | <feature-tag-value>#`\n\n**Initial value**: `normal`\n\n|  Chrome  | Firefox  | Safari  |  Edge  |   IE   |\n| :------: | :------: | :-----: | :----: | :----: |\n|  **48**  |  **34**  | **9.1** | **15** | **10** |\n| 16 _-x-_ | 15 _-x-_ |         |        |        |',
              type: 'string',
            },
            fontKerning: {
              description:
                'The **`font-kerning`** CSS property sets the use of the kerning information stored in a font.\n\n**Syntax**: `auto | normal | none`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari  |  Edge  | IE  |\n| :----: | :-----: | :-----: | :----: | :-: |\n| **33** | **32**  |  **9**  | **79** | No  |\n|        |         | 6 _-x-_ |        |     |',
              enum: [
                '-moz-initial',
                'auto',
                'inherit',
                'initial',
                'none',
                'normal',
                'revert',
                'unset',
              ],
              type: 'string',
            },
            fontLanguageOverride: {
              description:
                'The **`font-language-override`** CSS property controls the use of language-specific glyphs in a typeface.\n\n**Syntax**: `normal | <string>`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n|   No   | **34**  |   No   |  No  | No  |\n|        | 4 _-x-_ |        |      |     |',
              type: 'string',
            },
            fontOpticalSizing: {
              description:
                'The **`font-optical-sizing`** CSS property sets whether text rendering is optimized for viewing at different sizes. This only works for fonts that have an optical size variation axis.\n\n**Syntax**: `auto | none`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **79** | **62**  | **11** | **17** | No  |',
              enum: [
                '-moz-initial',
                'auto',
                'inherit',
                'initial',
                'none',
                'revert',
                'unset',
              ],
              type: 'string',
            },
            fontSize: {
              description:
                'The **`font-size`** CSS property sets the size of the font. This property is also used to compute the size of `em`, `ex`, and other relative `<length>` units.\n\n**Syntax**: `<absolute-size> | <relative-size> | <length-percentage>`\n\n**Initial value**: `medium`\n\n| Chrome | Firefox | Safari |  Edge  |   IE    |\n| :----: | :-----: | :----: | :----: | :-----: |\n| **1**  |  **1**  | **1**  | **12** | **5.5** |',
              type: ['string', 'number'],
            },
            fontSizeAdjust: {
              description:
                'The **`font-size-adjust`** CSS property sets how the font size should be chosen based on the height of lowercase rather than capital letters.\n\n**Syntax**: `none | <number>`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n|  n/a   |  **1**  |   No   | n/a  | No  |',
              anyOf: [
                {
                  enum: [
                    '-moz-initial',
                    'inherit',
                    'initial',
                    'none',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                {
                  type: 'number',
                },
              ],
            },
            fontSmooth: {
              description:
                'The **`font-smooth`** CSS property controls the application of anti-aliasing when fonts are rendered.\n\n**Syntax**: `auto | never | always | <absolute-size> | <length>`\n\n**Initial value**: `auto`\n\n|              Chrome              |              Firefox               |              Safari              |               Edge                | IE  |\n| :------------------------------: | :--------------------------------: | :------------------------------: | :-------------------------------: | :-: |\n| **5** _(-webkit-font-smoothing)_ | **25** _(-moz-osx-font-smoothing)_ | **4** _(-webkit-font-smoothing)_ | **79** _(-webkit-font-smoothing)_ | No  |',
              type: ['string', 'number'],
            },
            fontStretch: {
              description:
                'The **`font-stretch`** CSS property selects a normal, condensed, or expanded face from a font.\n\n**Syntax**: `<font-stretch-absolute>`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **60** |  **9**  | **11** | **12** | **9** |',
              type: 'string',
            },
            fontStyle: {
              description:
                'The **`font-style`** CSS property sets whether a font should be styled with a normal, italic, or oblique face from its `font-family`.\n\n**Syntax**: `normal | italic | oblique <angle>?`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |',
              type: 'string',
            },
            fontSynthesis: {
              description:
                'The **`font-synthesis`** CSS property controls which missing typefaces, bold or italic, may be synthesized by the browser.\n\n**Syntax**: `none | [ weight || style ]`\n\n**Initial value**: `weight style`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n|   No   | **34**  | **9**  |  No  | No  |',
              type: 'string',
            },
            fontVariant: {
              description:
                'The **font-variant** CSS property is a shorthand for the longhand properties `font-variant-caps`, `font-variant-numeric`, `font-variant-alternates`, `font-variant-ligatures`, and `font-variant-east-asian`. You can also set the CSS Level 2 (Revision 1) values of `font-variant`, (that is, `normal` or `small-caps`), by using the `font` shorthand.\n\n**Syntax**: `normal | none | [ <common-lig-values> || <discretionary-lig-values> || <historical-lig-values> || <contextual-alt-values> || stylistic( <feature-value-name> ) || historical-forms || styleset( <feature-value-name># ) || character-variant( <feature-value-name># ) || swash( <feature-value-name> ) || ornaments( <feature-value-name> ) || annotation( <feature-value-name> ) || [ small-caps | all-small-caps | petite-caps | all-petite-caps | unicase | titling-caps ] || <numeric-figure-values> || <numeric-spacing-values> || <numeric-fraction-values> || ordinal || slashed-zero || <east-asian-variant-values> || <east-asian-width-values> || ruby ]`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |',
              type: 'string',
            },
            fontVariantCaps: {
              description:
                'The **`font-variant-caps`** CSS property controls the use of alternate glyphs for capital letters.\n\n**Syntax**: `normal | small-caps | all-small-caps | petite-caps | all-petite-caps | unicase | titling-caps`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **52** | **34**  |   No   | **79** | No  |',
              enum: [
                '-moz-initial',
                'all-petite-caps',
                'all-small-caps',
                'inherit',
                'initial',
                'normal',
                'petite-caps',
                'revert',
                'small-caps',
                'titling-caps',
                'unicase',
                'unset',
              ],
              type: 'string',
            },
            fontVariantEastAsian: {
              description:
                'The **`font-variant-east-asian`** CSS property controls the use of alternate glyphs for East Asian scripts, like Japanese and Chinese.\n\n**Syntax**: `normal | [ <east-asian-variant-values> || <east-asian-width-values> || ruby ]`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **63** | **34**  |   No   | **79** | No  |',
              type: 'string',
            },
            fontVariantLigatures: {
              description:
                'The **`font-variant-ligatures`** CSS property controls which ligatures and contextual forms are used in textual content of the elements it applies to. This leads to more harmonized forms in the resulting text.\n\n**Syntax**: `normal | none | [ <common-lig-values> || <discretionary-lig-values> || <historical-lig-values> || <contextual-alt-values> ]`\n\n**Initial value**: `normal`\n\n|  Chrome  | Firefox | Safari  |  Edge  | IE  |\n| :------: | :-----: | :-----: | :----: | :-: |\n|  **34**  | **34**  | **9.1** | **79** | No  |\n| 31 _-x-_ |         | 7 _-x-_ |        |     |',
              type: 'string',
            },
            fontVariantNumeric: {
              description:
                'The **`font-variant-numeric`** CSS property controls the usage of alternate glyphs for numbers, fractions, and ordinal markers.\n\n**Syntax**: `normal | [ <numeric-figure-values> || <numeric-spacing-values> || <numeric-fraction-values> || ordinal || slashed-zero ]`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari  |  Edge  | IE  |\n| :----: | :-----: | :-----: | :----: | :-: |\n| **52** | **34**  | **9.1** | **79** | No  |',
              type: 'string',
            },
            fontVariantPosition: {
              description:
                'The **`font-variant-position`** CSS property controls the use of alternate, smaller glyphs that are positioned as superscript or subscript.\n\n**Syntax**: `normal | sub | super`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n|   No   | **34**  |   No   |  No  | No  |',
              enum: [
                '-moz-initial',
                'inherit',
                'initial',
                'normal',
                'revert',
                'sub',
                'super',
                'unset',
              ],
              type: 'string',
            },
            fontVariationSettings: {
              description:
                'The **`font-variation-settings`** CSS property provides low-level control over variable font characteristics, by specifying the four letter axis names of the characteristics you want to vary, along with their values.\n\n**Syntax**: `normal | [ <string> <number> ]#`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **62** | **62**  | **11** | **17** | No  |',
              type: 'string',
            },
            fontWeight: {
              description:
                'The **`font-weight`** CSS property specifies the weight (or boldness) of the font. The font weights available to you will depend on the `font-family` you are using. Some fonts are only available in `normal` and `bold`.\n\n**Syntax**: `<font-weight-absolute> | bolder | lighter`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **2**  |  **1**  | **1**  | **12** | **3** |',
              anyOf: [
                {
                  enum: [
                    '-moz-initial',
                    'bold',
                    'bolder',
                    'inherit',
                    'initial',
                    'lighter',
                    'normal',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                {
                  type: 'number',
                },
              ],
            },
            gridAutoColumns: {
              description:
                'The **`grid-auto-columns`** CSS property specifies the size of an implicitly-created grid column track.\n\n**Syntax**: `<track-size>+`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox |  Safari  |          Edge           |             IE              |\n| :----: | :-----: | :------: | :---------------------: | :-------------------------: |\n| **57** | **70**  | **10.1** |         **16**          | **10** _(-ms-grid-columns)_ |\n|        |         |          | 12 _(-ms-grid-columns)_ |                             |',
              type: ['string', 'number'],
            },
            gridAutoFlow: {
              description:
                'The **`grid-auto-flow`** CSS property controls how the auto-placement algorithm works, specifying exactly how auto-placed items get flowed into the grid.\n\n**Syntax**: `[ row | column ] || dense`\n\n**Initial value**: `row`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **57** | **52**  | **10.1** | **16** | No  |',
              type: 'string',
            },
            gridAutoRows: {
              description:
                'The **`grid-auto-rows`** CSS property specifies the size of an implicitly-created grid row track.\n\n**Syntax**: `<track-size>+`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox |  Safari  |         Edge         |            IE            |\n| :----: | :-----: | :------: | :------------------: | :----------------------: |\n| **57** | **70**  | **10.1** |        **16**        | **10** _(-ms-grid-rows)_ |\n|        |         |          | 12 _(-ms-grid-rows)_ |                          |',
              type: ['string', 'number'],
            },
            gridColumnEnd: {
              description:
                'The **`grid-column-end`** CSS property specifies a grid item’s end position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the block-end edge of its grid area.\n\n**Syntax**: `<grid-line>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **57** | **52**  | **10.1** | **16** | No  |',
              type: ['string', 'number'],
            },
            gridColumnStart: {
              description:
                'The **`grid-column-start`** CSS property specifies a grid item’s start position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement. This start position defines the block-start edge of the grid area.\n\n**Syntax**: `<grid-line>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **57** | **52**  | **10.1** | **16** | No  |',
              type: ['string', 'number'],
            },
            gridRowEnd: {
              description:
                'The **`grid-row-end`** CSS property specifies a grid item’s end position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-end edge of its grid area.\n\n**Syntax**: `<grid-line>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **57** | **52**  | **10.1** | **16** | No  |',
              type: ['string', 'number'],
            },
            gridRowStart: {
              description:
                'The **`grid-row-start`** CSS property specifies a grid item’s start position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start edge of its grid area.\n\n**Syntax**: `<grid-line>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **57** | **52**  | **10.1** | **16** | No  |',
              type: ['string', 'number'],
            },
            gridTemplateAreas: {
              description:
                'The **`grid-template-areas`** CSS property specifies named grid areas.\n\n**Syntax**: `none | <string>+`\n\n**Initial value**: `none`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **57** | **52**  | **10.1** | **16** | No  |',
              type: 'string',
            },
            gridTemplateColumns: {
              description:
                'The **`grid-template-columns`** CSS property defines the line names and track sizing functions of the grid columns.\n\n**Syntax**: `none | <track-list> | <auto-track-list> | subgrid <line-name-list>?`\n\n**Initial value**: `none`\n\n| Chrome | Firefox |  Safari  |  Edge  |             IE              |\n| :----: | :-----: | :------: | :----: | :-------------------------: |\n| **57** | **52**  | **10.1** | **16** | **10** _(-ms-grid-columns)_ |',
              type: ['string', 'number'],
            },
            gridTemplateRows: {
              description:
                'The **`grid-template-rows`** CSS property defines the line names and track sizing functions of the grid rows.\n\n**Syntax**: `none | <track-list> | <auto-track-list> | subgrid <line-name-list>?`\n\n**Initial value**: `none`\n\n| Chrome | Firefox |  Safari  |  Edge  |            IE            |\n| :----: | :-----: | :------: | :----: | :----------------------: |\n| **57** | **52**  | **10.1** | **16** | **10** _(-ms-grid-rows)_ |',
              type: ['string', 'number'],
            },
            hangingPunctuation: {
              description:
                'The **`hanging-punctuation`** CSS property specifies whether a punctuation mark should hang at the start or end of a line of text. Hanging punctuation may be placed outside the line box.\n\n**Syntax**: `none | [ first || [ force-end | allow-end ] || last ]`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n|   No   |   No    | **10** |  No  | No  |',
              type: 'string',
            },
            height: {
              description:
                'The **`height`** CSS property specifies the height of an element. By default, the property defines the height of the content area. If `box-sizing` is set to `border-box`, however, it instead determines the height of the border area.\n\n**Syntax**: `auto | <length> | <percentage> | min-content | max-content | fit-content(<length-percentage>)`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |',
              type: ['string', 'number'],
            },
            hyphens: {
              description:
                'The **`hyphens`** CSS property specifies how words should be hyphenated when text wraps across multiple lines. You can prevent hyphenation entirely, use hyphenation in manually-specified points within the text, or let the browser automatically insert hyphens where appropriate.\n\n**Syntax**: `none | manual | auto`\n\n**Initial value**: `manual`\n\n|  Chrome  | Firefox |    Safari     |     Edge     |      IE      |\n| :------: | :-----: | :-----------: | :----------: | :----------: |\n|  **55**  | **43**  | **5.1** _-x-_ | **12** _-x-_ | **10** _-x-_ |\n| 13 _-x-_ | 6 _-x-_ |               |              |              |',
              enum: [
                '-moz-initial',
                'auto',
                'inherit',
                'initial',
                'manual',
                'none',
                'revert',
                'unset',
              ],
              type: 'string',
            },
            imageOrientation: {
              description:
                'The **`image-orientation`** CSS property specifies a layout-independent correction to the orientation of an image. It should _not_ be used for any other orientation adjustments; instead, the `transform` property should be used with the `rotate` `<transform-function>`.\n\n**Syntax**: `from-image | <angle> | [ <angle>? flip ]`\n\n**Initial value**: `from-image`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **81** | **26**  | **13.1** | **81** | No  |',
              type: 'string',
            },
            imageRendering: {
              description:
                'The **`image-rendering`** CSS property sets an image scaling algorithm. The property applies to an element itself, to any images set in its other properties, and to its descendants.\n\n**Syntax**: `auto | crisp-edges | pixelated`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **13** | **3.6** | **6**  | **79** | No  |',
              enum: [
                '-moz-crisp-edges',
                '-moz-initial',
                '-webkit-optimize-contrast',
                'auto',
                'crisp-edges',
                'inherit',
                'initial',
                'pixelated',
                'revert',
                'unset',
              ],
              type: 'string',
            },
            imageResolution: {
              description:
                '**Syntax**: `[ from-image || <resolution> ] && snap?`\n\n**Initial value**: `1dppx`',
              type: 'string',
            },
            initialLetter: {
              description:
                'The `initial-letter` CSS property sets styling for dropped, raised, and sunken initial letters.\n\n**Syntax**: `normal | [ <number> <integer>? ]`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n|   No   |   No    | **9**  |  No  | No  |',
              type: ['string', 'number'],
            },
            inlineSize: {
              description:
                "The **`inline-size`** CSS property defines the horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the `width` or the `height` property, depending on the value of `writing-mode`.\n\n**Syntax**: `<'width'>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **57** | **41**  | **12.1** | **79** | No  |",
              type: ['string', 'number'],
            },
            inset: {
              description:
                "The **`inset`** CSS property defines the logical block and inline start and end offsets of an element, which map to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top` and `bottom`, or `right` and `left` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'top'>{1,4}`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n|   No   | **66**  |   No   |  No  | No  |",
              type: ['string', 'number'],
            },
            insetBlock: {
              description:
                "The **`inset-block`** CSS property defines the logical block start and end offsets of an element, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top` and `bottom`, or `right` and `left` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'top'>{1,2}`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n|  n/a   | **63**  |   No   | n/a  | No  |",
              type: ['string', 'number'],
            },
            insetBlockEnd: {
              description:
                "The **`inset-block-end`** CSS property defines the logical block end offset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'top'>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n|  n/a   | **63**  |   No   | n/a  | No  |",
              type: ['string', 'number'],
            },
            insetBlockStart: {
              description:
                "The **`inset-block-start`** CSS property defines the logical block start offset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'top'>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n|  n/a   | **63**  |   No   | n/a  | No  |",
              type: ['string', 'number'],
            },
            insetInline: {
              description:
                "The **`inset-inline`** CSS property defines the logical block start and end offsets of an element, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top` and `bottom`, or `right` and `left` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'top'>{1,2}`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n|  n/a   | **63**  |   No   | n/a  | No  |",
              type: ['string', 'number'],
            },
            insetInlineEnd: {
              description:
                "The **`inset-inline-end`** CSS property defines the logical inline end inset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'top'>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n|  n/a   | **63**  |   No   | n/a  | No  |",
              type: ['string', 'number'],
            },
            insetInlineStart: {
              description:
                "The **`inset-inline-start`** CSS property defines the logical inline start inset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'top'>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n|  n/a   | **63**  |   No   | n/a  | No  |",
              type: ['string', 'number'],
            },
            isolation: {
              description:
                'The **`isolation`** CSS property determines whether an element must create a new stacking context.\n\n**Syntax**: `auto | isolate`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **41** | **36**  | **8**  | **79** | No  |',
              enum: [
                '-moz-initial',
                'auto',
                'inherit',
                'initial',
                'isolate',
                'revert',
                'unset',
              ],
              type: 'string',
            },
            justifyContent: {
              description:
                'The CSS **`justify-content`** property defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container.\n\n**Syntax**: `normal | <content-distribution> | <overflow-position>? [ <content-position> | left | right ]`\n\n**Initial value**: `normal`\n\n---\n\n_Supported in Flex Layout_\n\n|  Chrome  | Firefox |  Safari   |  Edge  |   IE   |\n| :------: | :-----: | :-------: | :----: | :----: |\n|  **52**  | **20**  |   **9**   | **12** | **11** |\n| 21 _-x-_ |         | 6.1 _-x-_ |        |        |\n\n---\n\n_Supported in Grid Layout_\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **57** | **52**  | **10.1** | **16** | No  |\n\n---',
              type: 'string',
            },
            justifyItems: {
              description:
                'The CSS **`justify-items`** property defines the default `justify-self` for all items of the box, giving them all a default way of justifying each box along the appropriate axis.\n\n**Syntax**: `normal | stretch | <baseline-position> | <overflow-position>? [ <self-position> | left | right ] | legacy | legacy && [ left | right | center ]`\n\n**Initial value**: `legacy`\n\n---\n\n_Supported in Flex Layout_\n\n| Chrome | Firefox | Safari |  Edge  |   IE   |\n| :----: | :-----: | :----: | :----: | :----: |\n| **52** | **20**  | **9**  | **12** | **11** |\n\n---\n\n_Supported in Grid Layout_\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **57** | **45**  | **10.1** | **16** | No  |\n\n---',
              type: 'string',
            },
            justifySelf: {
              description:
                'The CSS **`justify-self`** property set the way a box is justified inside its alignment container along the appropriate axis.\n\n**Syntax**: `auto | normal | stretch | <baseline-position> | <overflow-position>? [ <self-position> | left | right ]`\n\n**Initial value**: `auto`\n\n---\n\n_Supported in Flex Layout_\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **57** | **45**  | **10.1** | **16** | No  |\n\n---\n\n_Supported in Grid Layout_\n\n| Chrome | Firefox |  Safari  |  Edge  |      IE      |\n| :----: | :-----: | :------: | :----: | :----------: |\n| **57** | **45**  | **10.1** | **16** | **10** _-x-_ |\n\n---',
              type: 'string',
            },
            justifyTracks: {
              description:
                'The **`justify-tracks`** CSS property sets the alignment in the masonry axis for grid containers that have masonry in their inline axis.\n\n**Syntax**: `[ normal | <content-distribution> | <overflow-position>? [ <content-position> | left | right ] ]#`\n\n**Initial value**: `normal`',
              type: 'string',
            },
            left: {
              description:
                'The **`left`** CSS property participates in specifying the horizontal position of a _positioned element_. It has no effect on non-positioned elements.\n\n**Syntax**: `<length> | <percentage> | auto`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  |   IE    |\n| :----: | :-----: | :----: | :----: | :-----: |\n| **1**  |  **1**  | **1**  | **12** | **5.5** |',
              type: ['string', 'number'],
            },
            letterSpacing: {
              description:
                'The **`letter-spacing`** CSS property sets the spacing behavior between text characters.\n\n**Syntax**: `normal | <length>`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |',
              type: ['string', 'number'],
            },
            lineBreak: {
              description:
                'The **`line-break`** CSS property sets how to break lines of Chinese, Japanese, or Korean (CJK) text when working with punctuation and symbols.\n\n**Syntax**: `auto | loose | normal | strict | anywhere`\n\n**Initial value**: `auto`\n\n| Chrome  | Firefox | Safari  |  Edge  |   IE    |\n| :-----: | :-----: | :-----: | :----: | :-----: |\n| **58**  | **69**  | **11**  | **14** | **5.5** |\n| 1 _-x-_ |         | 3 _-x-_ |        |         |',
              enum: [
                '-moz-initial',
                'anywhere',
                'auto',
                'inherit',
                'initial',
                'loose',
                'normal',
                'revert',
                'strict',
                'unset',
              ],
              type: 'string',
            },
            lineHeight: {
              description:
                'The **`line-height`** CSS property sets the amount of space used for lines, such as in text. On block-level elements, it specifies the minimum height of line boxes within the element. On non-replaced inline elements, it specifies the height that is used to calculate line box height.\n\n**Syntax**: `normal | <number> | <length> | <percentage>`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |',
              type: ['string', 'number'],
            },
            lineHeightStep: {
              description:
                'The **`line-height-step`** CSS property sets the step unit for line box heights. When the property is set, line box heights are rounded up to the closest multiple of the unit.\n\n**Syntax**: `<length>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n|  n/a   |   No    |   No   | n/a  | No  |',
              type: ['string', 'number'],
            },
            listStyleImage: {
              description:
                'The **`list-style-image`** CSS property sets an image to be used as the list item marker.\n\n**Syntax**: `<url> | none`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |',
              type: 'string',
            },
            listStylePosition: {
              description:
                'The **`list-style-position`** CSS property sets the position of the `::marker` relative to a list item.\n\n**Syntax**: `inside | outside`\n\n**Initial value**: `outside`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |',
              enum: [
                '-moz-initial',
                'inherit',
                'initial',
                'inside',
                'outside',
                'revert',
                'unset',
              ],
              type: 'string',
            },
            listStyleType: {
              description:
                'The **`list-style-type`** CSS property sets the marker (such as a disc, character, or custom counter style) of a list item element.\n\n**Syntax**: `<counter-style> | <string> | none`\n\n**Initial value**: `disc`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |',
              type: 'string',
            },
            marginBlock: {
              description:
                "The **`margin-block`** CSS property defines the logical block start and end margins of an element, which maps to physical margins depending on the element's writing mode, directionality, and text orientation.\n\n**Syntax**: `<'margin-left'>{1,2}`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n|  n/a   | **66**  |   No   | n/a  | No  |",
              type: ['string', 'number'],
            },
            marginBlockEnd: {
              description:
                "The **`margin-block-end`** CSS property defines the logical block end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation.\n\n**Syntax**: `<'margin-left'>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **69** | **41**  | **12.1** | **79** | No  |",
              type: ['string', 'number'],
            },
            marginBlockStart: {
              description:
                "The **`margin-block-start`** CSS property defines the logical block start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation.\n\n**Syntax**: `<'margin-left'>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **69** | **41**  | **12.1** | **79** | No  |",
              type: ['string', 'number'],
            },
            marginBottom: {
              description:
                'The **`margin-bottom`** CSS property sets the margin area on the bottom of an element. A positive value places it farther from its neighbors, while a negative value places it closer.\n\n**Syntax**: `<length> | <percentage> | auto`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **3** |',
              type: ['string', 'number'],
            },
            marginInline: {
              description:
                "The **`margin-inline`** CSS property defines the logical inline start and end margins of an element, which maps to physical margins depending on the element's writing mode, directionality, and text orientation.\n\n**Syntax**: `<'margin-left'>{1,2}`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n|  n/a   | **66**  |   No   | n/a  | No  |",
              type: ['string', 'number'],
            },
            marginInlineEnd: {
              description:
                "The **`margin-inline-end`** CSS property defines the logical inline end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. In other words, it corresponds to the `margin-top`, `margin-right`, `margin-bottom` or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'margin-left'>`\n\n**Initial value**: `0`\n\n|          Chrome          |        Firefox        |          Safari          |  Edge  | IE  |\n| :----------------------: | :-------------------: | :----------------------: | :----: | :-: |\n|          **69**          |        **41**         |         **12.1**         | **79** | No  |\n| 2 _(-webkit-margin-end)_ | 3 _(-moz-margin-end)_ | 3 _(-webkit-margin-end)_ |        |     |",
              type: ['string', 'number'],
            },
            marginInlineStart: {
              description:
                "The **`margin-inline-start`** CSS property defines the logical inline start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. It corresponds to the `margin-top`, `margin-right`, `margin-bottom`, or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'margin-left'>`\n\n**Initial value**: `0`\n\n|           Chrome           |         Firefox         |           Safari           |  Edge  | IE  |\n| :------------------------: | :---------------------: | :------------------------: | :----: | :-: |\n|           **69**           |         **41**          |          **12.1**          | **79** | No  |\n| 2 _(-webkit-margin-start)_ | 3 _(-moz-margin-start)_ | 3 _(-webkit-margin-start)_ |        |     |",
              type: ['string', 'number'],
            },
            marginLeft: {
              description:
                'The **`margin-left`** CSS property sets the margin area on the left side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.\n\n**Syntax**: `<length> | <percentage> | auto`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **3** |',
              type: ['string', 'number'],
            },
            marginRight: {
              description:
                'The **`margin-right`** CSS property sets the margin area on the right side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.\n\n**Syntax**: `<length> | <percentage> | auto`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **3** |',
              type: ['string', 'number'],
            },
            marginTop: {
              description:
                'The **`margin-top`** CSS property sets the margin area on the top of an element. A positive value places it farther from its neighbors, while a negative value places it closer.\n\n**Syntax**: `<length> | <percentage> | auto`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **3** |',
              type: ['string', 'number'],
            },
            maskBorderMode: {
              description:
                'The **`mask-border-mode`** CSS property specifies the blending mode used in a mask border.\n\n**Syntax**: `luminance | alpha`\n\n**Initial value**: `alpha`',
              enum: [
                '-moz-initial',
                'alpha',
                'inherit',
                'initial',
                'luminance',
                'revert',
                'unset',
              ],
              type: 'string',
            },
            maskBorderOutset: {
              description:
                "The **`mask-border-outset`** CSS property specifies the distance by which an element's mask border is set out from its border box.\n\n**Syntax**: `[ <length> | <number> ]{1,4}`\n\n**Initial value**: `0`",
              type: ['string', 'number'],
            },
            maskBorderRepeat: {
              description:
                "The **`mask-border-repeat`** CSS property sets how the edge regions of a source image are adjusted to fit the dimensions of an element's mask border.\n\n**Syntax**: `[ stretch | repeat | round | space ]{1,2}`\n\n**Initial value**: `stretch`",
              type: 'string',
            },
            maskBorderSlice: {
              description:
                "The **`mask-border-slice`** CSS property divides the image set by `mask-border-source` into regions. These regions are used to form the components of an element's mask border.\n\n**Syntax**: `<number-percentage>{1,4} fill?`\n\n**Initial value**: `0`",
              type: ['string', 'number'],
            },
            maskBorderSource: {
              description:
                "The **`mask-border-source`** CSS property sets the source image used to create an element's mask border.\n\n**Syntax**: `none | <image>`\n\n**Initial value**: `none`",
              type: 'string',
            },
            maskBorderWidth: {
              description:
                "The **`mask-border-width`** CSS property sets the width of an element's mask border.\n\n**Syntax**: `[ <length-percentage> | <number> | auto ]{1,4}`\n\n**Initial value**: `auto`",
              type: ['string', 'number'],
            },
            maskClip: {
              description:
                'The **`mask-clip`** CSS property determines the area, which is affected by a mask. The painted content of an element must be restricted to this area.\n\n**Syntax**: `[ <geometry-box> | no-clip ]#`\n\n**Initial value**: `border-box`\n\n|   Chrome    | Firefox |   Safari    |     Edge     | IE  |\n| :---------: | :-----: | :---------: | :----------: | :-: |\n| **1** _-x-_ | **53**  | **4** _-x-_ | **79** _-x-_ | No  |',
              type: 'string',
            },
            maskComposite: {
              description:
                'The **`mask-composite`** CSS property represents a compositing operation used on the current mask layer with the mask layers below it.\n\n**Syntax**: `<compositing-operator>#`\n\n**Initial value**: `add`\n\n| Chrome | Firefox | Safari | Edge  | IE  |\n| :----: | :-----: | :----: | :---: | :-: |\n|   No   | **53**  |   No   | 18-79 | No  |',
              type: 'string',
            },
            maskImage: {
              description:
                'The **`mask-image`** CSS property sets the image that is used as mask layer for an element.\n\n**Syntax**: `<mask-reference>#`\n\n**Initial value**: `none`\n\n|   Chrome    | Firefox |   Safari    |  Edge  | IE  |\n| :---------: | :-----: | :---------: | :----: | :-: |\n| **1** _-x-_ | **53**  | **4** _-x-_ | **16** | No  |',
              type: 'string',
            },
            maskMode: {
              description:
                'The **`mask-mode`** CSS property sets whether the mask reference defined by `mask-image` is treated as a luminance or alpha mask.\n\n**Syntax**: `<masking-mode>#`\n\n**Initial value**: `match-source`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n|   No   | **53**  |   No   |  No  | No  |',
              type: 'string',
            },
            maskOrigin: {
              description:
                'The **`mask-origin`** CSS property sets the origin of a mask.\n\n**Syntax**: `<geometry-box>#`\n\n**Initial value**: `border-box`\n\n|   Chrome    | Firefox |   Safari    |     Edge     | IE  |\n| :---------: | :-----: | :---------: | :----------: | :-: |\n| **1** _-x-_ | **53**  | **4** _-x-_ | **79** _-x-_ | No  |',
              type: 'string',
            },
            maskPosition: {
              description:
                'The **`mask-position`** CSS property sets the initial position, relative to the mask position layer set by `mask-origin`, for each defined mask image.\n\n**Syntax**: `<position>#`\n\n**Initial value**: `center`\n\n|   Chrome    | Firefox |    Safari     |  Edge  | IE  |\n| :---------: | :-----: | :-----------: | :----: | :-: |\n| **1** _-x-_ | **53**  | **3.2** _-x-_ | **18** | No  |',
              type: ['string', 'number'],
            },
            maskRepeat: {
              description:
                'The **`mask-repeat`** CSS property sets how mask images are repeated. A mask image can be repeated along the horizontal axis, the vertical axis, both axes, or not repeated at all.\n\n**Syntax**: `<repeat-style>#`\n\n**Initial value**: `no-repeat`\n\n|   Chrome    | Firefox |    Safari     |  Edge  | IE  |\n| :---------: | :-----: | :-----------: | :----: | :-: |\n| **1** _-x-_ | **53**  | **3.2** _-x-_ | **18** | No  |',
              type: 'string',
            },
            maskSize: {
              description:
                'The **`mask-size`** CSS property specifies the sizes of the mask images. The size of the image can be fully or partially constrained in order to preserve its intrinsic ratio.\n\n**Syntax**: `<bg-size>#`\n\n**Initial value**: `auto`\n\n|   Chrome    | Firefox |   Safari    |  Edge  | IE  |\n| :---------: | :-----: | :---------: | :----: | :-: |\n| **4** _-x-_ | **53**  | **4** _-x-_ | **18** | No  |',
              type: ['string', 'number'],
            },
            maskType: {
              description:
                'The **`mask-type`** CSS property sets whether an SVG `<mask>` element is used as a _luminance_ or an _alpha_ mask. It applies to the `<mask>` element itself.\n\n**Syntax**: `luminance | alpha`\n\n**Initial value**: `luminance`\n\n| Chrome | Firefox | Safari  |  Edge  | IE  |\n| :----: | :-----: | :-----: | :----: | :-: |\n| **24** | **35**  | **6.1** | **79** | No  |',
              enum: [
                '-moz-initial',
                'alpha',
                'inherit',
                'initial',
                'luminance',
                'revert',
                'unset',
              ],
              type: 'string',
            },
            masonryAutoFlow: {
              description:
                'The **`masonry-auto-flow`** CSS property modifies how items are placed when using masonry in CSS Grid Layout.\n\n**Syntax**: `[ pack | next ] || [ definite-first | ordered ]`\n\n**Initial value**: `pack`',
              type: 'string',
            },
            mathStyle: {
              description:
                'The `math-style` property indicates whether MathML equations should render with normal or compact height.\n\n**Syntax**: `normal | compact`\n\n**Initial value**: `normal`',
              enum: [
                '-moz-initial',
                'compact',
                'inherit',
                'initial',
                'normal',
                'revert',
                'unset',
              ],
              type: 'string',
            },
            maxBlockSize: {
              description:
                "The `**max-block-size**` CSS property specifies the maximum size of an element in the direction opposite that of the writing direction as specified by `writing-mode`. That is, if the writing direction is horizontal, then `max-block-size` is equivalent to `max-height`; if the writing direction is vertical, `max-block-size` is the same as `max-width`.\n\n**Syntax**: `<'max-width'>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **57** | **41**  | **12.1** | **79** | No  |",
              type: ['string', 'number'],
            },
            maxHeight: {
              description:
                'The **`max-height`** CSS property sets the maximum height of an element. It prevents the used value of the `height` property from becoming larger than the value specified for `max-height`.\n\n**Syntax**: `none | <length-percentage> | min-content | max-content | fit-content(<length-percentage>)`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari  |  Edge  |  IE   |\n| :----: | :-----: | :-----: | :----: | :---: |\n| **18** |  **1**  | **1.3** | **12** | **7** |',
              type: ['string', 'number'],
            },
            maxInlineSize: {
              description:
                "The **`max-inline-size`** CSS property defines the horizontal or vertical maximum size of an element's block depending on its writing mode. It corresponds to the `max-width` or the `max-height` property depending on the value defined for `writing-mode`. If the writing mode is vertically oriented, the value of `max-inline-size` relates to the maximal height of the element, otherwise it relates to the maximal width of the element. It relates to `max-block-size`, which defines the other dimension of the element.\n\n**Syntax**: `<'max-width'>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox |   Safari   |  Edge  | IE  |\n| :----: | :-----: | :--------: | :----: | :-: |\n| **57** | **41**  |  **12.1**  | **79** | No  |\n|        |         | 10.1 _-x-_ |        |     |",
              type: ['string', 'number'],
            },
            maxLines: {
              description:
                '**Syntax**: `none | <integer>`\n\n**Initial value**: `none`',
              anyOf: [
                {
                  enum: [
                    '-moz-initial',
                    'inherit',
                    'initial',
                    'none',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                {
                  type: 'number',
                },
              ],
            },
            maxWidth: {
              description:
                'The **`max-width`** CSS property sets the maximum width of an element. It prevents the used value of the `width` property from becoming larger than the value specified by `max-width`.\n\n**Syntax**: `none | <length-percentage> | min-content | max-content | fit-content(<length-percentage>)`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **7** |',
              type: ['string', 'number'],
            },
            minBlockSize: {
              description:
                "The **`min-block-size`** CSS property defines the minimum horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the `min-width` or the `min-height` property, depending on the value of `writing-mode`.\n\n**Syntax**: `<'min-width'>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **57** | **41**  | **12.1** | **79** | No  |",
              type: ['string', 'number'],
            },
            minHeight: {
              description:
                'The **`min-height`** CSS property sets the minimum height of an element. It prevents the used value of the `height` property from becoming smaller than the value specified for `min-height`.\n\n**Syntax**: `auto | <length> | <percentage> | min-content | max-content | fit-content(<length-percentage>)`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari  |  Edge  |  IE   |\n| :----: | :-----: | :-----: | :----: | :---: |\n| **1**  |  **3**  | **1.3** | **12** | **7** |',
              type: ['string', 'number'],
            },
            minInlineSize: {
              description:
                "The **`min-inline-size`** CSS property defines the horizontal or vertical minimal size of an element's block, depending on its writing mode. It corresponds to either the `min-width` or the `min-height` property, depending on the value of `writing-mode`.\n\n**Syntax**: `<'min-width'>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **57** | **41**  | **12.1** | **79** | No  |",
              type: ['string', 'number'],
            },
            minWidth: {
              description:
                'The **`min-width`** CSS property sets the minimum width of an element. It prevents the used value of the `width` property from becoming smaller than the value specified for `min-width`.\n\n**Syntax**: `auto | <length> | <percentage> | min-content | max-content | fit-content(<length-percentage>)`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **7** |',
              type: ['string', 'number'],
            },
            mixBlendMode: {
              description:
                "The **`mix-blend-mode`** CSS property sets how an element's content should blend with the content of the element's parent and the element's background.\n\n**Syntax**: `<blend-mode>`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **41** | **32**  | **8**  | **79** | No  |",
              enum: [
                '-moz-initial',
                'color',
                'color-burn',
                'color-dodge',
                'darken',
                'difference',
                'exclusion',
                'hard-light',
                'hue',
                'inherit',
                'initial',
                'lighten',
                'luminosity',
                'multiply',
                'normal',
                'overlay',
                'revert',
                'saturation',
                'screen',
                'soft-light',
                'unset',
              ],
              type: 'string',
            },
            motionDistance: {
              description:
                'The **`offset-distance`** CSS property specifies a position along an `offset-path`.\n\n**Syntax**: `<length-percentage>`\n\n**Initial value**: `0`\n\n|         Chrome         | Firefox | Safari |  Edge  | IE  |\n| :--------------------: | :-----: | :----: | :----: | :-: |\n|         **55**         | **72**  |   No   | **79** | No  |\n| 46 _(motion-distance)_ |         |        |        |     |',
              type: ['string', 'number'],
            },
            motionPath: {
              description:
                "The **`offset-path`** CSS property specifies a motion path for an element to follow and defines the element's positioning within the parent container or SVG coordinate system.\n\n**Syntax**: `none | ray( [ <angle> && <size> && contain? ] ) | <path()> | <url> | [ <basic-shape> || <geometry-box> ]`\n\n**Initial value**: `none`\n\n|       Chrome       | Firefox | Safari |  Edge  | IE  |\n| :----------------: | :-----: | :----: | :----: | :-: |\n|       **55**       | **72**  |   No   | **79** | No  |\n| 46 _(motion-path)_ |         |        |        |     |",
              type: 'string',
            },
            motionRotation: {
              description:
                'The **`offset-rotate`** CSS property defines the direction of the element while positioning along the offset path.\n\n**Syntax**: `[ auto | reverse ] || <angle>`\n\n**Initial value**: `auto`\n\n|         Chrome         | Firefox | Safari |  Edge  | IE  |\n| :--------------------: | :-----: | :----: | :----: | :-: |\n|         **56**         | **72**  |   No   | **79** | No  |\n| 46 _(motion-rotation)_ |         |        |        |     |',
              type: 'string',
            },
            objectFit: {
              description:
                'The **`object-fit`** CSS property sets how the content of a replaced element, such as an `<img>` or `<video>`, should be resized to fit its container.\n\n**Syntax**: `fill | contain | cover | none | scale-down`\n\n**Initial value**: `fill`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **31** | **36**  | **10** | **16** | No  |',
              enum: [
                '-moz-initial',
                'contain',
                'cover',
                'fill',
                'inherit',
                'initial',
                'none',
                'revert',
                'scale-down',
                'unset',
              ],
              type: 'string',
            },
            objectPosition: {
              description:
                "The **`object-position`** CSS property specifies the alignment of the selected replaced element's contents within the element's box. Areas of the box which aren't covered by the replaced element's object will show the element's background.\n\n**Syntax**: `<position>`\n\n**Initial value**: `50% 50%`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **31** | **36**  | **10** | **16** | No  |",
              type: ['string', 'number'],
            },
            offsetAnchor: {
              description:
                '**Syntax**: `auto | <position>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **79** | **72**  |   No   | **79** | No  |',
              type: ['string', 'number'],
            },
            offsetDistance: {
              description:
                'The **`offset-distance`** CSS property specifies a position along an `offset-path`.\n\n**Syntax**: `<length-percentage>`\n\n**Initial value**: `0`\n\n|         Chrome         | Firefox | Safari |  Edge  | IE  |\n| :--------------------: | :-----: | :----: | :----: | :-: |\n|         **55**         | **72**  |   No   | **79** | No  |\n| 46 _(motion-distance)_ |         |        |        |     |',
              type: ['string', 'number'],
            },
            offsetPath: {
              description:
                "The **`offset-path`** CSS property specifies a motion path for an element to follow and defines the element's positioning within the parent container or SVG coordinate system.\n\n**Syntax**: `none | ray( [ <angle> && <size> && contain? ] ) | <path()> | <url> | [ <basic-shape> || <geometry-box> ]`\n\n**Initial value**: `none`\n\n|       Chrome       | Firefox | Safari |  Edge  | IE  |\n| :----------------: | :-----: | :----: | :----: | :-: |\n|       **55**       | **72**  |   No   | **79** | No  |\n| 46 _(motion-path)_ |         |        |        |     |",
              type: 'string',
            },
            offsetRotate: {
              description:
                'The **`offset-rotate`** CSS property defines the direction of the element while positioning along the offset path.\n\n**Syntax**: `[ auto | reverse ] || <angle>`\n\n**Initial value**: `auto`\n\n|         Chrome         | Firefox | Safari |  Edge  | IE  |\n| :--------------------: | :-----: | :----: | :----: | :-: |\n|         **56**         | **72**  |   No   | **79** | No  |\n| 46 _(motion-rotation)_ |         |        |        |     |',
              type: 'string',
            },
            offsetRotation: {
              description:
                'The **`offset-rotate`** CSS property defines the direction of the element while positioning along the offset path.\n\n**Syntax**: `[ auto | reverse ] || <angle>`\n\n**Initial value**: `auto`\n\n|         Chrome         | Firefox | Safari |  Edge  | IE  |\n| :--------------------: | :-----: | :----: | :----: | :-: |\n|         **56**         | **72**  |   No   | **79** | No  |\n| 46 _(motion-rotation)_ |         |        |        |     |',
              type: 'string',
            },
            opacity: {
              description:
                'The **`opacity`** CSS property sets the transparency of an element or the degree to which content behind an element is visible.\n\n**Syntax**: `<alpha-value>`\n\n**Initial value**: `1.0`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **2**  | **12** | **9** |',
              type: ['string', 'number'],
            },
            order: {
              description:
                'The **`order`** CSS property sets the order to lay out an item in a flex or grid container. Items in a container are sorted by ascending `order` value and then by their source code order.\n\n**Syntax**: `<integer>`\n\n**Initial value**: `0`\n\n|  Chrome  | Firefox | Safari  |  Edge  |    IE    |\n| :------: | :-----: | :-----: | :----: | :------: |\n|  **29**  | **20**  |  **9**  | **12** |  **11**  |\n| 21 _-x-_ |         | 7 _-x-_ |        | 10 _-x-_ |',
              anyOf: [
                {
                  enum: [
                    '-moz-initial',
                    'inherit',
                    'initial',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                {
                  type: 'number',
                },
              ],
            },
            orphans: {
              description:
                'The **`orphans`** CSS property sets the minimum number of lines in a block container that must be shown at the _bottom_ of a page, region, or column.\n\n**Syntax**: `<integer>`\n\n**Initial value**: `2`\n\n| Chrome | Firefox | Safari  |  Edge  |  IE   |\n| :----: | :-----: | :-----: | :----: | :---: |\n| **25** |   No    | **1.3** | **12** | **8** |',
              anyOf: [
                {
                  enum: [
                    '-moz-initial',
                    'inherit',
                    'initial',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                {
                  type: 'number',
                },
              ],
            },
            outlineColor: {
              description:
                "The **`outline-color`** CSS property sets the color of an element's outline.\n\n**Syntax**: `<color> | invert`\n\n**Initial value**: `invert`, for browsers supporting it, `currentColor` for the other\n\n| Chrome | Firefox | Safari  |  Edge  |  IE   |\n| :----: | :-----: | :-----: | :----: | :---: |\n| **1**  | **1.5** | **1.2** | **12** | **8** |",
              type: 'string',
            },
            outlineOffset: {
              description:
                'The **`outline-offset`** CSS property sets the amount of space between an outline and the edge or border of an element.\n\n**Syntax**: `<length>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari  |  Edge  | IE  |\n| :----: | :-----: | :-----: | :----: | :-: |\n| **1**  | **1.5** | **1.2** | **15** | No  |',
              type: ['string', 'number'],
            },
            outlineStyle: {
              description:
                "The **`outline-style`** CSS property sets the style of an element's outline. An outline is a line that is drawn around an element, outside the `border`.\n\n**Syntax**: `auto | <'border-style'>`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari  |  Edge  |  IE   |\n| :----: | :-----: | :-----: | :----: | :---: |\n| **1**  | **1.5** | **1.2** | **12** | **8** |",
              type: 'string',
            },
            outlineWidth: {
              description:
                "The **`outline-width`** CSS property sets the thickness of an element's outline. An outline is a line that is drawn around an element, outside the `border`.\n\n**Syntax**: `<line-width>`\n\n**Initial value**: `medium`\n\n| Chrome | Firefox | Safari  |  Edge  |  IE   |\n| :----: | :-----: | :-----: | :----: | :---: |\n| **1**  | **1.5** | **1.2** | **12** | **8** |",
              type: ['string', 'number'],
            },
            overflowAnchor: {
              description:
                '**Syntax**: `auto | none`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **56** | **66**  |   No   | **79** | No  |',
              enum: [
                '-moz-initial',
                'auto',
                'inherit',
                'initial',
                'none',
                'revert',
                'unset',
              ],
              type: 'string',
            },
            overflowBlock: {
              description:
                '**Syntax**: `visible | hidden | clip | scroll | auto`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n|   No   | **69**  |   No   |  No  | No  |',
              enum: [
                '-moz-initial',
                'auto',
                'clip',
                'hidden',
                'inherit',
                'initial',
                'revert',
                'scroll',
                'unset',
                'visible',
              ],
              type: 'string',
            },
            overflowClipBox: {
              description:
                'The **`overflow-clip-box`** CSS property specifies relative to which box the clipping happens when there is an overflow. It is short hand for the `overflow-clip-box-inline` and `overflow-clip-box-block` properties.\n\n**Syntax**: `padding-box | content-box`\n\n**Initial value**: `padding-box`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n|   No   | **29**  |   No   |  No  | No  |',
              enum: [
                '-moz-initial',
                'content-box',
                'inherit',
                'initial',
                'padding-box',
                'revert',
                'unset',
              ],
              type: 'string',
            },
            overflowInline: {
              description:
                '**Syntax**: `visible | hidden | clip | scroll | auto`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n|   No   | **69**  |   No   |  No  | No  |',
              enum: [
                '-moz-initial',
                'auto',
                'clip',
                'hidden',
                'inherit',
                'initial',
                'revert',
                'scroll',
                'unset',
                'visible',
              ],
              type: 'string',
            },
            overflowWrap: {
              description:
                'The `**overflow-wrap**` CSS property sets whether the browser should insert line breaks within words to prevent text from overflowing its content box.\n\n**Syntax**: `normal | break-word | anywhere`\n\n**Initial value**: `normal`\n\n|     Chrome      |      Firefox      |     Safari      |       Edge       |          IE           |\n| :-------------: | :---------------: | :-------------: | :--------------: | :-------------------: |\n|     **23**      |      **49**       |     **6.1**     |      **18**      | **5.5** _(word-wrap)_ |\n| 1 _(word-wrap)_ | 3.5 _(word-wrap)_ | 1 _(word-wrap)_ | 12 _(word-wrap)_ |                       |',
              enum: [
                '-moz-initial',
                'anywhere',
                'break-word',
                'inherit',
                'initial',
                'normal',
                'revert',
                'unset',
              ],
              type: 'string',
            },
            overflowX: {
              description:
                "The **`overflow-x`** CSS property sets what shows when content overflows a block-level element's left and right edges. This may be nothing, a scroll bar, or the overflow content.\n\n**Syntax**: `visible | hidden | clip | scroll | auto`\n\n**Initial value**: `visible`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  | **3.5** | **3**  | **12** | **5** |",
              enum: [
                '-moz-hidden-unscrollable',
                '-moz-initial',
                'auto',
                'clip',
                'hidden',
                'inherit',
                'initial',
                'revert',
                'scroll',
                'unset',
                'visible',
              ],
              type: 'string',
            },
            overflowY: {
              description:
                "The **`overflow-y`** CSS property sets what shows when content overflows a block-level element's top and bottom edges. This may be nothing, a scroll bar, or the overflow content.\n\n**Syntax**: `visible | hidden | clip | scroll | auto`\n\n**Initial value**: `visible`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  | **3.5** | **3**  | **12** | **5** |",
              enum: [
                '-moz-hidden-unscrollable',
                '-moz-initial',
                'auto',
                'clip',
                'hidden',
                'inherit',
                'initial',
                'revert',
                'scroll',
                'unset',
                'visible',
              ],
              type: 'string',
            },
            overscrollBehavior: {
              description:
                "The **`overscroll-behavior`** CSS property sets what a browser does when reaching the boundary of a scrolling area. It's a shorthand for `overscroll-behavior-x` and `overscroll-behavior-y`.\n\n**Syntax**: `[ contain | none | auto ]{1,2}`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **63** | **59**  |   No   | **18** | No  |",
              type: 'string',
            },
            overscrollBehaviorBlock: {
              description:
                "The **`overscroll-behavior-block`** CSS property sets the browser's behavior when the block direction boundary of a scrolling area is reached.\n\n**Syntax**: `contain | none | auto`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **77** | **73**  |   No   | **79** | No  |",
              enum: [
                '-moz-initial',
                'auto',
                'contain',
                'inherit',
                'initial',
                'none',
                'revert',
                'unset',
              ],
              type: 'string',
            },
            overscrollBehaviorInline: {
              description:
                "The **`overscroll-behavior-inline`** CSS property sets the browser's behavior when the inline direction boundary of a scrolling area is reached.\n\n**Syntax**: `contain | none | auto`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **77** | **73**  |   No   | **79** | No  |",
              enum: [
                '-moz-initial',
                'auto',
                'contain',
                'inherit',
                'initial',
                'none',
                'revert',
                'unset',
              ],
              type: 'string',
            },
            overscrollBehaviorX: {
              description:
                "The **`overscroll-behavior-x`** CSS property sets the browser's behavior when the horizontal boundary of a scrolling area is reached.\n\n**Syntax**: `contain | none | auto`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **63** | **59**  |   No   | **18** | No  |",
              enum: [
                '-moz-initial',
                'auto',
                'contain',
                'inherit',
                'initial',
                'none',
                'revert',
                'unset',
              ],
              type: 'string',
            },
            overscrollBehaviorY: {
              description:
                "The **`overscroll-behavior-y`** CSS property sets the browser's behavior when the vertical boundary of a scrolling area is reached.\n\n**Syntax**: `contain | none | auto`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **63** | **59**  |   No   | **18** | No  |",
              enum: [
                '-moz-initial',
                'auto',
                'contain',
                'inherit',
                'initial',
                'none',
                'revert',
                'unset',
              ],
              type: 'string',
            },
            paddingBlock: {
              description:
                "The **`padding-block`** CSS property defines the logical block start and end padding of an element, which maps to physical padding properties depending on the element's writing mode, directionality, and text orientation.\n\n**Syntax**: `<'padding-left'>{1,2}`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n|  n/a   | **66**  |   No   | n/a  | No  |",
              type: ['string', 'number'],
            },
            paddingBlockEnd: {
              description:
                "The **`padding-block-end`** CSS property defines the logical block end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation. It corresponds to the `padding-top`, `padding-right`, `padding-bottom`, or `padding-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'padding-left'>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **69** | **41**  | **12.1** | **79** | No  |",
              type: ['string', 'number'],
            },
            paddingBlockStart: {
              description:
                "The **`padding-block-start`** CSS property defines the logical block start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation. It corresponds to the `padding-top`, `padding-right`, `padding-bottom`, or `padding-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'padding-left'>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **69** | **41**  | **12.1** | **79** | No  |",
              type: ['string', 'number'],
            },
            paddingBottom: {
              description:
                'The **`padding-bottom`** CSS property sets the height of the padding area on the bottom of an element.\n\n**Syntax**: `<length> | <percentage>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |',
              type: ['string', 'number'],
            },
            paddingInline: {
              description:
                "The **`padding-inline`** CSS property defines the logical inline start and end padding of an element, which maps to physical padding properties depending on the element's writing mode, directionality, and text orientation.\n\n**Syntax**: `<'padding-left'>{1,2}`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n|  n/a   | **66**  |   No   | n/a  | No  |",
              type: ['string', 'number'],
            },
            paddingInlineEnd: {
              description:
                "The **`padding-inline-end`** CSS property defines the logical inline end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation. It corresponds to the `padding-top`, `padding-right`, `padding-bottom`, or `padding-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'padding-left'>`\n\n**Initial value**: `0`\n\n|          Chrome           |        Firefox         |          Safari           |  Edge  | IE  |\n| :-----------------------: | :--------------------: | :-----------------------: | :----: | :-: |\n|          **69**           |         **41**         |         **12.1**          | **79** | No  |\n| 2 _(-webkit-padding-end)_ | 3 _(-moz-padding-end)_ | 3 _(-webkit-padding-end)_ |        |     |",
              type: ['string', 'number'],
            },
            paddingInlineStart: {
              description:
                "The **`padding-inline-start`** CSS property defines the logical inline start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation. It corresponds to the `padding-top`, `padding-right`, `padding-bottom`, or `padding-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'padding-left'>`\n\n**Initial value**: `0`\n\n|           Chrome            |         Firefox          |           Safari            |  Edge  | IE  |\n| :-------------------------: | :----------------------: | :-------------------------: | :----: | :-: |\n|           **69**            |          **41**          |          **12.1**           | **79** | No  |\n| 2 _(-webkit-padding-start)_ | 3 _(-moz-padding-start)_ | 3 _(-webkit-padding-start)_ |        |     |",
              type: ['string', 'number'],
            },
            paddingLeft: {
              description:
                'The **`padding-left`** CSS property sets the width of the padding area on the left side of an element.\n\n**Syntax**: `<length> | <percentage>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |',
              type: ['string', 'number'],
            },
            paddingRight: {
              description:
                'The **`padding-right`** CSS property sets the width of the padding area on the right side of an element.\n\n**Syntax**: `<length> | <percentage>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |',
              type: ['string', 'number'],
            },
            paddingTop: {
              description:
                'The **`padding-top`** padding area on the top of an element.\n\n**Syntax**: `<length> | <percentage>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |',
              type: ['string', 'number'],
            },
            pageBreakAfter: {
              description:
                'The **`page-break-after`** CSS property adjusts page breaks _after_ the current element.\n\n**Syntax**: `auto | always | avoid | left | right | recto | verso`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari  |  Edge  |  IE   |\n| :----: | :-----: | :-----: | :----: | :---: |\n| **1**  |  **1**  | **1.2** | **12** | **4** |',
              enum: [
                '-moz-initial',
                'always',
                'auto',
                'avoid',
                'inherit',
                'initial',
                'left',
                'recto',
                'revert',
                'right',
                'unset',
                'verso',
              ],
              type: 'string',
            },
            pageBreakBefore: {
              description:
                'The **`page-break-before`** CSS property adjusts page breaks _before_ the current element.\n\n**Syntax**: `auto | always | avoid | left | right | recto | verso`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari  |  Edge  |  IE   |\n| :----: | :-----: | :-----: | :----: | :---: |\n| **1**  |  **1**  | **1.2** | **12** | **4** |',
              enum: [
                '-moz-initial',
                'always',
                'auto',
                'avoid',
                'inherit',
                'initial',
                'left',
                'recto',
                'revert',
                'right',
                'unset',
                'verso',
              ],
              type: 'string',
            },
            pageBreakInside: {
              description:
                'The **`page-break-inside`** CSS property adjusts page breaks _inside_ the current element.\n\n**Syntax**: `auto | avoid`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari  |  Edge  |  IE   |\n| :----: | :-----: | :-----: | :----: | :---: |\n| **1**  | **19**  | **1.3** | **12** | **8** |',
              enum: [
                '-moz-initial',
                'auto',
                'avoid',
                'inherit',
                'initial',
                'revert',
                'unset',
              ],
              type: 'string',
            },
            paintOrder: {
              description:
                'The **`paint-order`** CSS property lets you control the order in which the fill and stroke (and painting markers) of text content and shapes are drawn.\n\n**Syntax**: `normal | [ fill || stroke || markers ]`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **35** | **60**  | **8**  | **17** | No  |',
              type: 'string',
            },
            perspective: {
              description:
                'The **`perspective`** CSS property determines the distance between the z=0 plane and the user in order to give a 3D-positioned element some perspective. Each 3D element with z>0 becomes larger; each 3D-element with z<0 becomes smaller. The strength of the effect is determined by the value of this property.\n\n**Syntax**: `none | <length>`\n\n**Initial value**: `none`\n\n|  Chrome  | Firefox  | Safari  |  Edge  |   IE   |\n| :------: | :------: | :-----: | :----: | :----: |\n|  **36**  |  **16**  |  **9**  | **12** | **10** |\n| 12 _-x-_ | 10 _-x-_ | 4 _-x-_ |        |        |',
              type: ['string', 'number'],
            },
            perspectiveOrigin: {
              description:
                'The **`perspective-origin`** CSS property determines the position at which the viewer is looking. It is used as the _vanishing point_ by the `perspective` property.\n\n**Syntax**: `<position>`\n\n**Initial value**: `50% 50%`\n\n|  Chrome  | Firefox  | Safari  |  Edge  |   IE   |\n| :------: | :------: | :-----: | :----: | :----: |\n|  **36**  |  **16**  |  **9**  | **12** | **10** |\n| 12 _-x-_ | 10 _-x-_ | 4 _-x-_ |        |        |',
              type: ['string', 'number'],
            },
            placeContent: {
              description:
                "The `**place-content**` CSS property is a shorthand for `align-content` and `justify-content`. It can be used in any layout method which utilizes both of these alignment values.\n\n**Syntax**: `<'align-content'> <'justify-content'>?`\n\n**Initial value**: `normal`\n\n---\n\n_Supported in Flex Layout_\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **59** | **45**  | **9**  | **79** | No  |\n\n---\n\n_Supported in Grid Layout_\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **59** | **53**  | **11** | **79** | No  |\n\n---",
              type: 'string',
            },
            pointerEvents: {
              description:
                'The **`pointer-events`** CSS property sets under what circumstances (if any) a particular graphic element can become the target of mouse events.\n\n**Syntax**: `auto | none | visiblePainted | visibleFill | visibleStroke | visible | painted | fill | stroke | all | inherit`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  |   IE   |\n| :----: | :-----: | :----: | :----: | :----: |\n| **1**  | **1.5** | **4**  | **12** | **11** |',
              enum: [
                '-moz-initial',
                'all',
                'auto',
                'fill',
                'inherit',
                'initial',
                'none',
                'painted',
                'revert',
                'stroke',
                'unset',
                'visible',
                'visibleFill',
                'visiblePainted',
                'visibleStroke',
              ],
              type: 'string',
            },
            position: {
              description:
                'The **`position`** CSS property sets how an element is positioned in a document. The `top`, `right`, `bottom`, and `left` properties determine the final location of positioned elements.\n\n**Syntax**: `static | relative | absolute | sticky | fixed`\n\n**Initial value**: `static`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |',
              enum: [
                '-moz-initial',
                '-webkit-sticky',
                'absolute',
                'fixed',
                'inherit',
                'initial',
                'relative',
                'revert',
                'static',
                'sticky',
                'unset',
              ],
              type: 'string',
            },
            quotes: {
              description:
                'The **`quotes`** CSS property sets how quotation marks appear.\n\n**Syntax**: `none | auto | [ <string> <string> ]+`\n\n**Initial value**: depends on user agent\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **11** | **1.5** | **9**  | **12** | **8** |',
              type: 'string',
            },
            resize: {
              description:
                'The **`resize`** CSS property sets whether an element is resizable, and if so, in which directions.\n\n**Syntax**: `none | both | horizontal | vertical | block | inline`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **1**  |  **4**  | **3**  | **79** | No  |',
              enum: [
                '-moz-initial',
                'block',
                'both',
                'horizontal',
                'inherit',
                'initial',
                'inline',
                'none',
                'revert',
                'unset',
                'vertical',
              ],
              type: 'string',
            },
            right: {
              description:
                'The **`right`** CSS property participates in specifying the horizontal position of a _positioned element_. It has no effect on non-positioned elements.\n\n**Syntax**: `<length> | <percentage> | auto`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  |   IE    |\n| :----: | :-----: | :----: | :----: | :-----: |\n| **1**  |  **1**  | **1**  | **12** | **5.5** |',
              type: ['string', 'number'],
            },
            rotate: {
              description:
                'The **`rotate`** CSS property allows you to specify rotation transforms individually and independantly of the `transform` property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the `transform` value.\n\n**Syntax**: `none | <angle> | [ x | y | z | <number>{3} ] && <angle>`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n|   No   | **72**  |   No   |  No  | No  |',
              type: 'string',
            },
            rowGap: {
              description:
                "The **`row-gap`** CSS property sets the size of the gap (gutter) between an element's grid rows.\n\n**Syntax**: `normal | <length-percentage>`\n\n**Initial value**: `normal`\n\n---\n\n_Supported in Flex Layout_\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **84** | **63**  |   No   | **84** | No  |\n\n---\n\n_Supported in Grid Layout_\n\n|       Chrome        |       Firefox       |        Safari         |  Edge  | IE  |\n| :-----------------: | :-----------------: | :-------------------: | :----: | :-: |\n|       **66**        |       **61**        |       **12.1**        | **16** | No  |\n| 57 _(grid-row-gap)_ | 52 _(grid-row-gap)_ | 10.1 _(grid-row-gap)_ |        |     |\n\n---",
              type: ['string', 'number'],
            },
            rubyAlign: {
              description:
                'The `**ruby-align**` CSS property defines the distribution of the different ruby elements over the base.\n\n**Syntax**: `start | center | space-between | space-around`\n\n**Initial value**: `space-around`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n|   No   | **38**  |   No   |  No  | No  |',
              enum: [
                '-moz-initial',
                'center',
                'inherit',
                'initial',
                'revert',
                'space-around',
                'space-between',
                'start',
                'unset',
              ],
              type: 'string',
            },
            rubyMerge: {
              description:
                '**Syntax**: `separate | collapse | auto`\n\n**Initial value**: `separate`',
              enum: [
                '-moz-initial',
                'auto',
                'collapse',
                'inherit',
                'initial',
                'revert',
                'separate',
                'unset',
              ],
              type: 'string',
            },
            rubyPosition: {
              description:
                'The `**ruby-position**` CSS property defines the position of a ruby element relatives to its base element. It can be position over the element (`over`), under it (`under`), or between the characters, on their right side (`inter-character`).\n\n**Syntax**: `over | under | inter-character`\n\n**Initial value**: `over`\n\n| Chrome  | Firefox |    Safari     | Edge  | IE  |\n| :-----: | :-----: | :-----------: | :---: | :-: |\n| **84**  | **38**  | **6.1** _-x-_ | 12-79 | No  |\n| 1 _-x-_ |         |               |       |     |',
              enum: [
                '-moz-initial',
                'inherit',
                'initial',
                'over',
                'revert',
                'under',
                'unset',
              ],
              type: 'string',
            },
            scale: {
              description:
                'The **`scale`** CSS property allows you to specify scale transforms individually and independantly of the `transform` property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the `transform` value.\n\n**Syntax**: `none | <number>{1,3}`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n|   No   | **72**  |   No   |  No  | No  |',
              type: ['string', 'number'],
            },
            scrollBehavior: {
              description:
                'The **`scroll-behavior`** CSS property sets the behavior for a scrolling box when scrolling is triggered by the navigation or CSSOM scrolling APIs.\n\n**Syntax**: `auto | smooth`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **61** | **36**  | **14** | **79** | No  |',
              enum: [
                '-moz-initial',
                'auto',
                'inherit',
                'initial',
                'revert',
                'smooth',
                'unset',
              ],
              type: 'string',
            },
            scrollMargin: {
              description:
                'The **`scroll-margin`** property is a shorthand property which sets all of the `scroll-margin` longhands, assigning values much like the `margin` property does for the `margin-*` longhands.\n\n**Syntax**: `<length>{1,4}`\n\n**Initial value**: `0`\n\n| Chrome | Firefox |            Safari             |  Edge  | IE  |\n| :----: | :-----: | :---------------------------: | :----: | :-: |\n| **69** | **68**  | **11** _(scroll-snap-margin)_ | **79** | No  |',
              type: ['string', 'number'],
            },
            scrollMarginBlock: {
              description:
                'The `scroll-margin-block` property is a shorthand property which sets the scroll-margin longhands in the block dimension.\n\n**Syntax**: `<length>{1,2}`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **69** | **68**  |   No   | **79** | No  |',
              type: ['string', 'number'],
            },
            scrollMarginBlockEnd: {
              description:
                'The `scroll-margin-block-end` property defines the margin of the scroll snap area at the end of the block dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.\n\n**Syntax**: `<length>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **69** | **68**  |   No   | **79** | No  |',
              type: ['string', 'number'],
            },
            scrollMarginBlockStart: {
              description:
                'The `scroll-margin-block-start` property defines the margin of the scroll snap area at the start of the block dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.\n\n**Syntax**: `<length>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **69** | **68**  |   No   | **79** | No  |',
              type: ['string', 'number'],
            },
            scrollMarginBottom: {
              description:
                'The `scroll-margin-bottom` property defines the bottom margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.\n\n**Syntax**: `<length>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox |                Safari                |  Edge  | IE  |\n| :----: | :-----: | :----------------------------------: | :----: | :-: |\n| **69** | **68**  | **11** _(scroll-snap-margin-bottom)_ | **79** | No  |',
              type: ['string', 'number'],
            },
            scrollMarginInline: {
              description:
                'The `scroll-margin-inline` property is a shorthand property which sets the scroll-margin longhands in the inline dimension.\n\n**Syntax**: `<length>{1,2}`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n|   No   | **68**  |   No   |  No  | No  |',
              type: ['string', 'number'],
            },
            scrollMarginInlineEnd: {
              description:
                'The `scroll-margin-inline-end` property defines the margin of the scroll snap area at the end of the inline dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.\n\n**Syntax**: `<length>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **69** | **68**  |   No   | **79** | No  |',
              type: ['string', 'number'],
            },
            scrollMarginInlineStart: {
              description:
                'The `scroll-margin-inline-start` property defines the margin of the scroll snap area at the start of the inline dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.\n\n**Syntax**: `<length>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **69** | **68**  |   No   | **79** | No  |',
              type: ['string', 'number'],
            },
            scrollMarginLeft: {
              description:
                'The `scroll-margin-left` property defines the left margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.\n\n**Syntax**: `<length>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox |               Safari               |  Edge  | IE  |\n| :----: | :-----: | :--------------------------------: | :----: | :-: |\n| **69** | **68**  | **11** _(scroll-snap-margin-left)_ | **79** | No  |',
              type: ['string', 'number'],
            },
            scrollMarginRight: {
              description:
                'The `scroll-margin-right` property defines the right margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.\n\n**Syntax**: `<length>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox |               Safari                |  Edge  | IE  |\n| :----: | :-----: | :---------------------------------: | :----: | :-: |\n| **69** | **68**  | **11** _(scroll-snap-margin-right)_ | **79** | No  |',
              type: ['string', 'number'],
            },
            scrollMarginTop: {
              description:
                'The `scroll-margin-top` property defines the top margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.\n\n**Syntax**: `<length>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox |              Safari               |  Edge  | IE  |\n| :----: | :-----: | :-------------------------------: | :----: | :-: |\n| **69** | **68**  | **11** _(scroll-snap-margin-top)_ | **79** | No  |',
              type: ['string', 'number'],
            },
            scrollPadding: {
              description:
                'The scroll-padding property is a shorthand property which sets all of the scroll-padding longhands, assigning values much like the padding property does for the padding-\\* longhands.  \n\nThe scroll-padding properties define offsets for the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.\n\n**Syntax**: `[ auto | <length-percentage> ]{1,4}`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **69** | **68**  | **11** | **79** | No  |',
              type: ['string', 'number'],
            },
            scrollPaddingBlock: {
              description:
                'The `scroll-padding-block` property is a shorthand property which sets the scroll-padding longhands for the block dimension.  \n\nThe scroll-padding properties define offsets for the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.\n\n**Syntax**: `[ auto | <length-percentage> ]{1,2}`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **69** | **68**  |   No   | **79** | No  |',
              type: ['string', 'number'],
            },
            scrollPaddingBlockEnd: {
              description:
                'The `scroll-padding-block-end` property defines offsets for the end edge in the block dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.\n\n**Syntax**: `auto | <length-percentage>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **69** | **68**  |   No   | **79** | No  |',
              type: ['string', 'number'],
            },
            scrollPaddingBlockStart: {
              description:
                'The `scroll-padding-block-start` property defines offsets for the start edge in the block dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.\n\n**Syntax**: `auto | <length-percentage>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **69** | **68**  |   No   | **79** | No  |',
              type: ['string', 'number'],
            },
            scrollPaddingBottom: {
              description:
                'The `scroll-padding-bottom` property defines offsets for the bottom of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.\n\n**Syntax**: `auto | <length-percentage>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **69** | **68**  | **11** | **79** | No  |',
              type: ['string', 'number'],
            },
            scrollPaddingInline: {
              description:
                'The `scroll-padding-inline` property is a shorthand property which sets the scroll-padding longhands for the inline dimension.  \n\nThe scroll-padding properties define offsets for the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.\n\n**Syntax**: `[ auto | <length-percentage> ]{1,2}`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **69** | **68**  |   No   | **79** | No  |',
              type: ['string', 'number'],
            },
            scrollPaddingInlineEnd: {
              description:
                'The `scroll-padding-inline-end` property defines offsets for the end edge in the inline dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.\n\n**Syntax**: `auto | <length-percentage>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **69** | **68**  |   No   | **79** | No  |',
              type: ['string', 'number'],
            },
            scrollPaddingInlineStart: {
              description:
                'The `scroll-padding-inline-start` property defines offsets for the start edge in the inline dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.\n\n**Syntax**: `auto | <length-percentage>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **69** | **68**  |   No   | **79** | No  |',
              type: ['string', 'number'],
            },
            scrollPaddingLeft: {
              description:
                'The `scroll-padding-left` property defines offsets for the left of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.\n\n**Syntax**: `auto | <length-percentage>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **69** | **68**  | **11** | **79** | No  |',
              type: ['string', 'number'],
            },
            scrollPaddingRight: {
              description:
                'The `scroll-padding-right` property defines offsets for the right of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.\n\n**Syntax**: `auto | <length-percentage>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **69** | **68**  | **11** | **79** | No  |',
              type: ['string', 'number'],
            },
            scrollPaddingTop: {
              description:
                'The `scroll-padding-top` property defines offsets for the top of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.\n\n**Syntax**: `auto | <length-percentage>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **69** | **68**  | **11** | **79** | No  |',
              type: ['string', 'number'],
            },
            scrollSnapAlign: {
              description:
                'The `scroll-snap-align` property specifies the box’s snap position as an alignment of its snap area (as the alignment subject) within its snap container’s snapport (as the alignment container). The two values specify the snapping alignment in the block axis and inline axis, respectively. If only one value is specified, the second value defaults to the same value.\n\n**Syntax**: `[ none | start | end | center ]{1,2}`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **69** | **68**  | **11** | **79** | No  |',
              type: 'string',
            },
            scrollSnapMargin: {
              description:
                'The **`scroll-margin`** property is a shorthand property which sets all of the `scroll-margin` longhands, assigning values much like the `margin` property does for the `margin-*` longhands.\n\n**Syntax**: `<length>{1,4}`\n\n**Initial value**: `0`\n\n| Chrome | Firefox |            Safari             |  Edge  | IE  |\n| :----: | :-----: | :---------------------------: | :----: | :-: |\n| **69** | **68**  | **11** _(scroll-snap-margin)_ | **79** | No  |',
              type: ['string', 'number'],
            },
            scrollSnapMarginBottom: {
              description:
                'The `scroll-margin-bottom` property defines the bottom margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.\n\n**Syntax**: `<length>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox |                Safari                |  Edge  | IE  |\n| :----: | :-----: | :----------------------------------: | :----: | :-: |\n| **69** | **68**  | **11** _(scroll-snap-margin-bottom)_ | **79** | No  |',
              type: ['string', 'number'],
            },
            scrollSnapMarginLeft: {
              description:
                'The `scroll-margin-left` property defines the left margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.\n\n**Syntax**: `<length>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox |               Safari               |  Edge  | IE  |\n| :----: | :-----: | :--------------------------------: | :----: | :-: |\n| **69** | **68**  | **11** _(scroll-snap-margin-left)_ | **79** | No  |',
              type: ['string', 'number'],
            },
            scrollSnapMarginRight: {
              description:
                'The `scroll-margin-right` property defines the right margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.\n\n**Syntax**: `<length>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox |               Safari                |  Edge  | IE  |\n| :----: | :-----: | :---------------------------------: | :----: | :-: |\n| **69** | **68**  | **11** _(scroll-snap-margin-right)_ | **79** | No  |',
              type: ['string', 'number'],
            },
            scrollSnapMarginTop: {
              description:
                'The `scroll-margin-top` property defines the top margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.\n\n**Syntax**: `<length>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox |              Safari               |  Edge  | IE  |\n| :----: | :-----: | :-------------------------------: | :----: | :-: |\n| **69** | **68**  | **11** _(scroll-snap-margin-top)_ | **79** | No  |',
              type: ['string', 'number'],
            },
            scrollSnapStop: {
              description:
                'The **`scroll-snap-stop`** CSS property defines whether the scroll container is allowed to "pass over" possible snap positions.\n\n**Syntax**: `normal | always`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **75** |   No    |   No   | **79** | No  |',
              enum: [
                '-moz-initial',
                'always',
                'inherit',
                'initial',
                'normal',
                'revert',
                'unset',
              ],
              type: 'string',
            },
            scrollSnapType: {
              description:
                'The **`scroll-snap-type`** CSS property sets how strictly snap points are enforced on the scroll container in case there is one.\n\n**Syntax**: `none | [ x | y | block | inline | both ] [ mandatory | proximity ]?`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari  |     Edge     |      IE      |\n| :----: | :-----: | :-----: | :----------: | :----------: |\n| **69** |  39-68  | **11**  | **12** _-x-_ | **10** _-x-_ |\n|        |         | 9 _-x-_ |              |              |',
              type: 'string',
            },
            scrollbarColor: {
              description:
                'The **`scrollbar-color`** CSS property sets the color of the scrollbar track and thumb.\n\n**Syntax**: `auto | dark | light | <color>{2}`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n|   No   | **64**  |   No   |  No  | No  |',
              type: 'string',
            },
            scrollbarGutter: {
              description:
                "The **`scrollbar-gutter`** CSS property allows authors to reserve space for the scrollbar, preventing unwanted layout changes as the content grows while also avoiding unnecessary visuals when scrolling isn't needed.\n\n**Syntax**: `auto | [ stable | always ] && both? && force?`\n\n**Initial value**: `auto`",
              type: 'string',
            },
            scrollbarWidth: {
              description:
                'The `scrollbar-width` property allows the author to set the maximum thickness of an element’s scrollbars when they are shown.\n\n**Syntax**: `auto | thin | none`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n|   No   | **64**  |   No   |  No  | No  |',
              enum: [
                '-moz-initial',
                'auto',
                'inherit',
                'initial',
                'none',
                'revert',
                'thin',
                'unset',
              ],
              type: 'string',
            },
            shapeImageThreshold: {
              description:
                'The **`shape-image-threshold`** CSS property sets the alpha channel threshold used to extract the shape using an image as the value for `shape-outside`.\n\n**Syntax**: `<alpha-value>`\n\n**Initial value**: `0.0`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **37** | **62**  | **10.1** | **79** | No  |',
              type: ['string', 'number'],
            },
            shapeMargin: {
              description:
                'The **`shape-margin`** CSS property sets a margin for a CSS shape created using `shape-outside`.\n\n**Syntax**: `<length-percentage>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **37** | **62**  | **10.1** | **79** | No  |',
              type: ['string', 'number'],
            },
            shapeOutside: {
              description:
                'The **`shape-outside`** CSS property defines a shape—which may be non-rectangular—around which adjacent inline content should wrap. By default, inline content wraps around its margin box; `shape-outside` provides a way to customize this wrapping, making it possible to wrap text around complex objects rather than simple boxes.\n\n**Syntax**: `none | <shape-box> || <basic-shape> | <image>`\n\n**Initial value**: `none`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **37** | **62**  | **10.1** | **79** | No  |',
              type: 'string',
            },
            tabSize: {
              description:
                'The **`tab-size`** CSS property is used to customize the width of a tab (`U+0009`) character.\n\n**Syntax**: `<integer> | <length>`\n\n**Initial value**: `8`\n\n| Chrome |   Firefox   | Safari  |  Edge  | IE  |\n| :----: | :---------: | :-----: | :----: | :-: |\n| **21** | **4** _-x-_ | **6.1** | **79** | No  |',
              type: ['string', 'number'],
            },
            tableLayout: {
              description:
                'The **`table-layout`** CSS property sets the algorithm used to lay out `<table>` cells, rows, and columns.\n\n**Syntax**: `auto | fixed`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **14** |  **1**  | **1**  | **12** | **5** |',
              enum: [
                '-moz-initial',
                'auto',
                'fixed',
                'inherit',
                'initial',
                'revert',
                'unset',
              ],
              type: 'string',
            },
            textAlign: {
              description:
                'The **`text-align`** CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like `vertical-align` but in the horizontal direction.\n\n**Syntax**: `start | end | left | right | center | justify | match-parent`\n\n**Initial value**: `start`, or a nameless value that acts as `left` if _direction_ is `ltr`, `right` if _direction_ is `rtl` if `start` is not supported by the browser.\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **3** |',
              enum: [
                '-moz-initial',
                'center',
                'end',
                'inherit',
                'initial',
                'justify',
                'left',
                'match-parent',
                'revert',
                'right',
                'start',
                'unset',
              ],
              type: 'string',
            },
            textAlignLast: {
              description:
                'The **`text-align-last`** CSS property sets how the last line of a block or a line, right before a forced line break, is aligned.\n\n**Syntax**: `auto | start | end | left | right | center | justify`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  |   IE    |\n| :----: | :-----: | :----: | :----: | :-----: |\n| **47** | **49**  |   No   | **12** | **5.5** |',
              enum: [
                '-moz-initial',
                'auto',
                'center',
                'end',
                'inherit',
                'initial',
                'justify',
                'left',
                'revert',
                'right',
                'start',
                'unset',
              ],
              type: 'string',
            },
            textCombineUpright: {
              description:
                'The **`text-combine-upright`** CSS property sets the combination of characters into the space of a single character. If the combined text is wider than 1em, the user agent must fit the contents within 1em. The resulting composition is treated as a single upright glyph for layout and decoration. This property only has an effect in vertical writing modes.\n\n**Syntax**: `none | all | [ digits <integer>? ]`\n\n**Initial value**: `none`\n\n|           Chrome           | Firefox |              Safari              |                  Edge                  |                   IE                   |\n| :------------------------: | :-----: | :------------------------------: | :------------------------------------: | :------------------------------------: |\n|           **48**           | **48**  | **5.1** _(-webkit-text-combine)_ | **12** _(-ms-text-combine-horizontal)_ | **11** _(-ms-text-combine-horizontal)_ |\n| 9 _(-webkit-text-combine)_ |         |                                  |                                        |                                        |',
              type: 'string',
            },
            textDecorationColor: {
              description:
                'The **`text-decoration-color`** CSS property sets the color of decorations added to text by `text-decoration-line`.\n\n**Syntax**: `<color>`\n\n**Initial value**: `currentcolor`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **57** | **36**  | **12.1** | **79** | No  |\n|        |         | 8 _-x-_  |        |     |',
              type: 'string',
            },
            textDecorationLine: {
              description:
                'The **`text-decoration-line`** CSS property sets the kind of decoration that is used on text in an element, such as an underline or overline.\n\n**Syntax**: `none | [ underline || overline || line-through || blink ] | spelling-error | grammar-error`\n\n**Initial value**: `none`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **57** | **36**  | **12.1** | **79** | No  |\n|        |         | 8 _-x-_  |        |     |',
              type: 'string',
            },
            textDecorationSkip: {
              description:
                'The **`text-decoration-skip`** CSS property sets what parts of an element’s content any text decoration affecting the element must skip over. It controls all text decoration lines drawn by the element and also any text decoration lines drawn by its ancestors.\n\n**Syntax**: `none | [ objects || [ spaces | [ leading-spaces || trailing-spaces ] ] || edges || box-decoration ]`\n\n**Initial value**: `objects`\n\n| Chrome | Firefox |  Safari  | Edge | IE  |\n| :----: | :-----: | :------: | :--: | :-: |\n| 57-64  |   No    | **12.1** |  No  | No  |\n|        |         | 8 _-x-_  |      |     |',
              type: 'string',
            },
            textDecorationSkipInk: {
              description:
                'The **`text-decoration-skip-ink`** CSS property specifies how overlines and underlines are drawn when they pass over glyph ascenders and descenders.\n\n**Syntax**: `auto | all | none`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **64** | **70**  |   No   | **79** | No  |',
              enum: [
                '-moz-initial',
                'all',
                'auto',
                'inherit',
                'initial',
                'none',
                'revert',
                'unset',
              ],
              type: 'string',
            },
            textDecorationStyle: {
              description:
                'The **`text-decoration-style`** CSS property sets the style of the lines specified by `text-decoration-line`. The style applies to all lines that are set with `text-decoration-line`.\n\n**Syntax**: `solid | double | dotted | dashed | wavy`\n\n**Initial value**: `solid`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **57** | **36**  | **12.1** | **79** | No  |\n|        |         | 8 _-x-_  |        |     |',
              enum: [
                '-moz-initial',
                'dashed',
                'dotted',
                'double',
                'inherit',
                'initial',
                'revert',
                'solid',
                'unset',
                'wavy',
              ],
              type: 'string',
            },
            textDecorationThickness: {
              description:
                'The **`text-decoration-thickness`** CSS property sets the thickness, or width, of the decoration line that is used on text in an element, such as a line-through, underline, or overline.\n\n**Syntax**: `auto | from-font | <length> | <percentage> `\n\n**Initial value**: `auto`\n\n| Chrome | Firefox |  Safari  | Edge | IE  |\n| :----: | :-----: | :------: | :--: | :-: |\n|   No   | **70**  | **12.1** |  No  | No  |',
              type: ['string', 'number'],
            },
            textDecorationWidth: {
              description:
                'The **`text-decoration-thickness`** CSS property sets the thickness, or width, of the decoration line that is used on text in an element, such as a line-through, underline, or overline.\n\n**Syntax**: `auto | from-font | <length> | <percentage> `\n\n**Initial value**: `auto`\n\n| Chrome | Firefox |  Safari  | Edge | IE  |\n| :----: | :-----: | :------: | :--: | :-: |\n|   No   | **70**  | **12.1** |  No  | No  |',
              type: ['string', 'number'],
            },
            textEmphasisColor: {
              description:
                'The **`text-emphasis-color`** CSS property sets the color of emphasis marks. This value can also be set using the `text-emphasis` shorthand.\n\n**Syntax**: `<color>`\n\n**Initial value**: `currentcolor`\n\n|    Chrome    | Firefox | Safari  |     Edge     | IE  |\n| :----------: | :-----: | :-----: | :----------: | :-: |\n| **25** _-x-_ | **46**  | **6.1** | **79** _-x-_ | No  |',
              type: 'string',
            },
            textEmphasisPosition: {
              description:
                "The **`text-emphasis-position`** CSS property sets where emphasis marks are drawn. Like ruby text, if there isn't enough room for emphasis marks, the line height is increased.\n\n**Syntax**: `[ over | under ] && [ right | left ]`\n\n**Initial value**: `over right`\n\n|    Chrome    | Firefox | Safari  |     Edge     | IE  |\n| :----------: | :-----: | :-----: | :----------: | :-: |\n| **25** _-x-_ | **46**  | **6.1** | **79** _-x-_ | No  |",
              type: 'string',
            },
            textEmphasisStyle: {
              description:
                'The **`text-emphasis-style`** CSS property sets the appearance of emphasis marks. It can also be set, and reset, using the `text-emphasis` shorthand.\n\n**Syntax**: `none | [ [ filled | open ] || [ dot | circle | double-circle | triangle | sesame ] ] | <string>`\n\n**Initial value**: `none`\n\n|    Chrome    | Firefox | Safari  |     Edge     | IE  |\n| :----------: | :-----: | :-----: | :----------: | :-: |\n| **25** _-x-_ | **46**  | **6.1** | **79** _-x-_ | No  |',
              type: 'string',
            },
            textIndent: {
              description:
                'The **`text-indent`** CSS property sets the length of empty space (indentation) that is put before lines of text in a block.\n\n**Syntax**: `<length-percentage> && hanging? && each-line?`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **3** |',
              type: ['string', 'number'],
            },
            textJustify: {
              description:
                'The **`text-justify`** CSS property sets what type of justification should be applied to text when `text-align``: justify;` is set on an element.\n\n**Syntax**: `auto | inter-character | inter-word | none`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  |   IE   |\n| :----: | :-----: | :----: | :----: | :----: |\n|  n/a   | **55**  |   No   | **12** | **11** |',
              enum: [
                '-moz-initial',
                'auto',
                'inherit',
                'initial',
                'inter-character',
                'inter-word',
                'none',
                'revert',
                'unset',
              ],
              type: 'string',
            },
            textOrientation: {
              description:
                'The **`text-orientation`** CSS property sets the orientation of the text characters in a line. It only affects text in vertical mode (when `writing-mode` is not `horizontal-tb`). It is useful for controlling the display of languages that use vertical script, and also for making vertical table headers.\n\n**Syntax**: `mixed | upright | sideways`\n\n**Initial value**: `mixed`\n\n|  Chrome  | Firefox |  Safari   |  Edge  | IE  |\n| :------: | :-----: | :-------: | :----: | :-: |\n|  **48**  | **41**  |  **14**   | **79** | No  |\n| 11 _-x-_ |         | 5.1 _-x-_ |        |     |',
              enum: [
                '-moz-initial',
                'inherit',
                'initial',
                'mixed',
                'revert',
                'sideways',
                'unset',
                'upright',
              ],
              type: 'string',
            },
            textOverflow: {
              description:
                "The **`text-overflow`** CSS property sets how hidden overflow content is signaled to users. It can be clipped, display an ellipsis ('`…`'), or display a custom string.\n\n**Syntax**: `[ clip | ellipsis | <string> ]{1,2}`\n\n**Initial value**: `clip`\n\n| Chrome | Firefox | Safari  |  Edge  |  IE   |\n| :----: | :-----: | :-----: | :----: | :---: |\n| **1**  |  **7**  | **1.3** | **12** | **6** |",
              type: 'string',
            },
            textRendering: {
              description:
                'The **`text-rendering`** CSS property provides information to the rendering engine about what to optimize for when rendering text.\n\n**Syntax**: `auto | optimizeSpeed | optimizeLegibility | geometricPrecision`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **4**  |  **1**  | **5**  | **79** | No  |',
              enum: [
                '-moz-initial',
                'auto',
                'geometricPrecision',
                'inherit',
                'initial',
                'optimizeLegibility',
                'optimizeSpeed',
                'revert',
                'unset',
              ],
              type: 'string',
            },
            textShadow: {
              description:
                'The **`text-shadow`** CSS property adds shadows to text. It accepts a comma-separated list of shadows to be applied to the text and any of its `decorations`. Each shadow is described by some combination of X and Y offsets from the element, blur radius, and color.\n\n**Syntax**: `none | <shadow-t>#`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari  |  Edge  |   IE   |\n| :----: | :-----: | :-----: | :----: | :----: |\n| **2**  | **3.5** | **1.1** | **12** | **10** |',
              type: 'string',
            },
            textSizeAdjust: {
              description:
                'The **`text-size-adjust`** CSS property controls the text inflation algorithm used on some smartphones and tablets. Other browsers will ignore this property.\n\n**Syntax**: `none | auto | <percentage>`\n\n**Initial value**: `auto` for smartphone browsers supporting inflation, `none` in other cases (and then not modifiable).\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **54** |   No    |   No   | **79** | No  |',
              type: 'string',
            },
            textTransform: {
              description:
                "The **`text-transform`** CSS property specifies how to capitalize an element's text. It can be used to make text appear in all-uppercase or all-lowercase, or with each word capitalized. It also can help improve legibility for ruby\n\n**Syntax**: `none | capitalize | uppercase | lowercase | full-width | full-size-kana`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |",
              enum: [
                '-moz-initial',
                'capitalize',
                'full-size-kana',
                'full-width',
                'inherit',
                'initial',
                'lowercase',
                'none',
                'revert',
                'unset',
                'uppercase',
              ],
              type: 'string',
            },
            textUnderlineOffset: {
              description:
                'The **`text-underline-offset`** CSS property sets the offset distance of an underline text decoration line (applied using `text-decoration`) from its original position.\n\n**Syntax**: `auto | <length> | <percentage> `\n\n**Initial value**: `auto`\n\n| Chrome | Firefox |  Safari  | Edge | IE  |\n| :----: | :-----: | :------: | :--: | :-: |\n|   No   | **70**  | **12.1** |  No  | No  |',
              type: ['string', 'number'],
            },
            textUnderlinePosition: {
              description:
                "The **`text-underline-position`** CSS property specifies the position of the underline which is set using the `text-decoration` property's `underline` value.\n\n**Syntax**: `auto | from-font | [ under || [ left | right ] ]`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox |  Safari  |  Edge  |  IE   |\n| :----: | :-----: | :------: | :----: | :---: |\n| **33** | **74**  | **12.1** | **12** | **6** |\n|        |         | 9 _-x-_  |        |       |",
              type: 'string',
            },
            top: {
              description:
                'The **`top`** CSS property participates in specifying the vertical position of a _positioned element_. It has no effect on non-positioned elements.\n\n**Syntax**: `<length> | <percentage> | auto`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **5** |',
              type: ['string', 'number'],
            },
            touchAction: {
              description:
                'The **`touch-action`** CSS property sets how a region can be manipulated by a touchscreen user (for example, by zooming features built into the browser).\n\n**Syntax**: `auto | none | [ [ pan-x | pan-left | pan-right ] || [ pan-y | pan-up | pan-down ] || pinch-zoom ] | manipulation`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  |    IE    |\n| :----: | :-----: | :----: | :----: | :------: |\n| **36** | **52**  | **13** | **12** |  **11**  |\n|        |         |        |        | 10 _-x-_ |',
              type: 'string',
            },
            transform: {
              description:
                'The **`transform`** CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.\n\n**Syntax**: `none | <transform-list>`\n\n**Initial value**: `none`\n\n| Chrome  | Firefox |  Safari   |  Edge  |   IE    |\n| :-----: | :-----: | :-------: | :----: | :-----: |\n| **36**  | **16**  |   **9**   | **12** | **10**  |\n| 1 _-x-_ |         | 3.1 _-x-_ |        | 9 _-x-_ |',
              type: 'string',
            },
            transformBox: {
              description:
                'The **`transform-box`** CSS property defines the layout box to which the `transform` and `transform-origin` properties relate.\n\n**Syntax**: `content-box | border-box | fill-box | stroke-box | view-box`\n\n**Initial value**: `view-box`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **64** | **55**  | **11** | **79** | No  |',
              enum: [
                '-moz-initial',
                'border-box',
                'content-box',
                'fill-box',
                'inherit',
                'initial',
                'revert',
                'stroke-box',
                'unset',
                'view-box',
              ],
              type: 'string',
            },
            transformOrigin: {
              description:
                "The **`transform-origin`** CSS property sets the origin for an element's transformations.\n\n**Syntax**: `[ <length-percentage> | left | center | right | top | bottom ] | [ [ <length-percentage> | left | center | right ] && [ <length-percentage> | top | center | bottom ] ] <length>?`\n\n**Initial value**: `50% 50% 0`\n\n| Chrome  |  Firefox  | Safari  |  Edge  |   IE    |\n| :-----: | :-------: | :-----: | :----: | :-----: |\n| **36**  |  **16**   |  **9**  | **12** | **10**  |\n| 1 _-x-_ | 3.5 _-x-_ | 2 _-x-_ |        | 9 _-x-_ |",
              type: ['string', 'number'],
            },
            transformStyle: {
              description:
                'The **`transform-style`** CSS property sets whether children of an element are positioned in the 3D space or are flattened in the plane of the element.\n\n**Syntax**: `flat | preserve-3d`\n\n**Initial value**: `flat`\n\n|  Chrome  | Firefox  | Safari  |  Edge  | IE  |\n| :------: | :------: | :-----: | :----: | :-: |\n|  **36**  |  **16**  |  **9**  | **12** | No  |\n| 12 _-x-_ | 10 _-x-_ | 4 _-x-_ |        |     |',
              enum: [
                '-moz-initial',
                'flat',
                'inherit',
                'initial',
                'preserve-3d',
                'revert',
                'unset',
              ],
              type: 'string',
            },
            transitionDelay: {
              description:
                "The **`transition-delay`** CSS property specifies the duration to wait before starting a property's transition effect when its value changes.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`\n\n| Chrome  | Firefox | Safari  |  Edge  |   IE   |\n| :-----: | :-----: | :-----: | :----: | :----: |\n| **26**  | **16**  |  **9**  | **12** | **10** |\n| 1 _-x-_ | 4 _-x-_ | 4 _-x-_ |        |        |",
              type: 'string',
            },
            transitionDuration: {
              description:
                'The **`transition-duration`** CSS property sets the length of time a transition animation should take to complete. By default, the value is `0s`, meaning that no animation will occur.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`\n\n| Chrome  | Firefox |  Safari   |  Edge  |   IE   |\n| :-----: | :-----: | :-------: | :----: | :----: |\n| **26**  | **16**  |   **9**   | **12** | **10** |\n| 1 _-x-_ | 4 _-x-_ | 3.1 _-x-_ |        |        |',
              type: 'string',
            },
            transitionProperty: {
              description:
                'The **`transition-property`** CSS property sets the CSS properties to which a transition effect should be applied.\n\n**Syntax**: `none | <single-transition-property>#`\n\n**Initial value**: all\n\n| Chrome  | Firefox |  Safari   |  Edge  |   IE   |\n| :-----: | :-----: | :-------: | :----: | :----: |\n| **26**  | **16**  |   **9**   | **12** | **10** |\n| 1 _-x-_ | 4 _-x-_ | 3.1 _-x-_ |        |        |',
              type: 'string',
            },
            transitionTimingFunction: {
              description:
                'The **`transition-timing-function`** CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect.\n\n**Syntax**: `<timing-function>#`\n\n**Initial value**: `ease`\n\n| Chrome  | Firefox |  Safari   |  Edge  |   IE   |\n| :-----: | :-----: | :-------: | :----: | :----: |\n| **26**  | **16**  |   **9**   | **12** | **10** |\n| 1 _-x-_ | 4 _-x-_ | 3.1 _-x-_ |        |        |',
              type: 'string',
            },
            translate: {
              description:
                'The **`translate`** CSS property allows you to specify translation transforms individually and independantly of the `transform` property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the `transform` value.\n\n**Syntax**: `none | <length-percentage> [ <length-percentage> <length>? ]?`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n|   No   | **72**  |   No   |  No  | No  |',
              type: ['string', 'number'],
            },
            unicodeBidi: {
              description:
                'The **`unicode-bidi`** CSS property, together with the `direction` property, determines how bidirectional text in a document is handled. For example, if a block of content contains both left-to-right and right-to-left text, the user-agent uses a complex Unicode algorithm to decide how to display the text. The `unicode-bidi` property overrides this algorithm and allows the developer to control the text embedding.\n\n**Syntax**: `normal | embed | isolate | bidi-override | isolate-override | plaintext`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari  |  Edge  |   IE    |\n| :----: | :-----: | :-----: | :----: | :-----: |\n| **2**  |  **1**  | **1.3** | **12** | **5.5** |',
              enum: [
                '-moz-initial',
                '-moz-isolate',
                '-moz-isolate-override',
                '-moz-plaintext',
                '-webkit-isolate',
                'bidi-override',
                'embed',
                'inherit',
                'initial',
                'isolate',
                'isolate-override',
                'normal',
                'plaintext',
                'revert',
                'unset',
              ],
              type: 'string',
            },
            userSelect: {
              description:
                "The `**user-select**` CSS property controls whether the user can select text. This doesn't have any effect on content loaded as chrome, except in textboxes.\n\n**Syntax**: `auto | text | none | contain | all`\n\n**Initial value**: `auto`\n\n| Chrome  | Firefox |   Safari    |     Edge     |      IE      |\n| :-----: | :-----: | :---------: | :----------: | :----------: |\n| **54**  | **69**  | **3** _-x-_ | **12** _-x-_ | **10** _-x-_ |\n| 1 _-x-_ | 1 _-x-_ |             |              |              |",
              enum: [
                '-moz-initial',
                '-moz-none',
                'all',
                'auto',
                'contain',
                'element',
                'inherit',
                'initial',
                'none',
                'revert',
                'text',
                'unset',
              ],
              type: 'string',
            },
            verticalAlign: {
              description:
                'The **`vertical-align`** CSS property sets vertical alignment of an inline or table-cell box.\n\n**Syntax**: `baseline | sub | super | text-top | text-bottom | middle | top | bottom | <percentage> | <length>`\n\n**Initial value**: `baseline`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |',
              type: ['string', 'number'],
            },
            visibility: {
              description:
                'The **`visibility`** CSS property shows or hides an element without changing the layout of a document. The property can also hide rows or columns in a `<table>`.\n\n**Syntax**: `visible | hidden | collapse`\n\n**Initial value**: `visible`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |',
              enum: [
                '-moz-initial',
                'collapse',
                'hidden',
                'inherit',
                'initial',
                'revert',
                'unset',
                'visible',
              ],
              type: 'string',
            },
            whiteSpace: {
              description:
                'The **`white-space`** CSS property sets how white space inside an element is handled.\n\n**Syntax**: `normal | pre | nowrap | pre-wrap | pre-line | break-spaces`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari |  Edge  |   IE    |\n| :----: | :-----: | :----: | :----: | :-----: |\n| **1**  |  **1**  | **1**  | **12** | **5.5** |',
              enum: [
                '-moz-initial',
                '-moz-pre-wrap',
                'break-spaces',
                'inherit',
                'initial',
                'normal',
                'nowrap',
                'pre',
                'pre-line',
                'pre-wrap',
                'revert',
                'unset',
              ],
              type: 'string',
            },
            widows: {
              description:
                'The **`widows`** CSS property sets the minimum number of lines in a block container that must be shown at the _top_ of a page, region, or column.\n\n**Syntax**: `<integer>`\n\n**Initial value**: `2`\n\n| Chrome | Firefox | Safari  |  Edge  |  IE   |\n| :----: | :-----: | :-----: | :----: | :---: |\n| **25** |   No    | **1.3** | **12** | **8** |',
              anyOf: [
                {
                  enum: [
                    '-moz-initial',
                    'inherit',
                    'initial',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                {
                  type: 'number',
                },
              ],
            },
            width: {
              description:
                "The **`width`** CSS property sets an element's width. By default it sets the width of the content area, but if `box-sizing` is set to `border-box`, it sets the width of the border area.\n\n**Syntax**: `auto | <length> | <percentage> | min-content | max-content | fit-content(<length-percentage>)`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |",
              type: ['string', 'number'],
            },
            willChange: {
              description:
                'The **`will-change`** CSS property hints to browsers how an element is expected to change. Browsers may set up optimizations before an element is actually changed. These kinds of optimizations can increase the responsiveness of a page by doing potentially expensive work before they are actually required.\n\n**Syntax**: `auto | <animateable-feature>#`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari  |  Edge  | IE  |\n| :----: | :-----: | :-----: | :----: | :-: |\n| **36** | **36**  | **9.1** | **79** | No  |',
              type: 'string',
            },
            wordBreak: {
              description:
                'The **`word-break`** CSS property sets whether line breaks appear wherever the text would otherwise overflow its content box.\n\n**Syntax**: `normal | break-all | keep-all | break-word`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari |  Edge  |   IE    |\n| :----: | :-----: | :----: | :----: | :-----: |\n| **1**  | **15**  | **3**  | **12** | **5.5** |',
              enum: [
                '-moz-initial',
                'break-all',
                'break-word',
                'inherit',
                'initial',
                'keep-all',
                'normal',
                'revert',
                'unset',
              ],
              type: 'string',
            },
            wordSpacing: {
              description:
                'The **`word-spacing`** CSS property sets the length of space between words and between tags.\n\n**Syntax**: `normal | <length-percentage>`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **6** |',
              type: ['string', 'number'],
            },
            wordWrap: {
              description:
                'The `**overflow-wrap**` CSS property sets whether the browser should insert line breaks within words to prevent text from overflowing its content box.\n\n**Syntax**: `normal | break-word`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari |  Edge  |   IE    |\n| :----: | :-----: | :----: | :----: | :-----: |\n| **1**  | **3.5** | **2**  | **12** | **5.5** |',
              enum: [
                '-moz-initial',
                'break-word',
                'inherit',
                'initial',
                'normal',
                'revert',
                'unset',
              ],
              type: 'string',
            },
            writingMode: {
              description:
                'The **`writing-mode`** CSS property sets whether lines of text are laid out horizontally or vertically, as well as the direction in which blocks progress.\n\n**Syntax**: `horizontal-tb | vertical-rl | vertical-lr | sideways-rl | sideways-lr`\n\n**Initial value**: `horizontal-tb`\n\n| Chrome  | Firefox |  Safari   |  Edge  |  IE   |\n| :-----: | :-----: | :-------: | :----: | :---: |\n| **48**  | **41**  | **10.1**  | **12** | **9** |\n| 8 _-x-_ |         | 5.1 _-x-_ |        |       |',
              enum: [
                '-moz-initial',
                'horizontal-tb',
                'inherit',
                'initial',
                'revert',
                'sideways-lr',
                'sideways-rl',
                'unset',
                'vertical-lr',
                'vertical-rl',
              ],
              type: 'string',
            },
            zIndex: {
              description:
                'The **`z-index`** CSS property sets the z-order of a positioned element and its descendants or flex items. Overlapping elements with a larger z-index cover those with a smaller one.\n\n**Syntax**: `auto | <integer>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |',
              anyOf: [
                {
                  enum: [
                    '-moz-initial',
                    'auto',
                    'inherit',
                    'initial',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                {
                  type: 'number',
                },
              ],
            },
            zoom: {
              description:
                'The non-standard **`zoom`** CSS property can be used to control the magnification level of an element. `transform: scale()` should be used instead of this property, if possible. However, unlike CSS Transforms, `zoom` affects the layout size of the element.\n\n**Syntax**: `normal | reset | <number> | <percentage>`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari  |  Edge  |   IE    |\n| :----: | :-----: | :-----: | :----: | :-----: |\n| **1**  |   No    | **3.1** | **12** | **5.5** |',
              type: ['string', 'number'],
            },
            all: {
              description:
                "The `**all**` CSS shorthand property sets all of an element's properties (other than `unicode-bidi` and `direction`) to their initial or inherited values, or to the values specified in another stylesheet origin.\n\n**Syntax**: `initial | inherit | unset | revert`\n\n**Initial value**: There is no practical initial value for it.\n\n| Chrome | Firefox | Safari  |  Edge  | IE  |\n| :----: | :-----: | :-----: | :----: | :-: |\n| **37** | **27**  | **9.1** | **79** | No  |",
              enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
              type: 'string',
            },
            animation: {
              description:
                'The **`animation`** shorthand CSS property sets an animated transition between styles. It is a shorthand for `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, and `animation-play-state`.\n\n**Syntax**: `<single-animation>#`\n\n| Chrome  | Firefox | Safari  |  Edge  |   IE   |\n| :-----: | :-----: | :-----: | :----: | :----: |\n| **43**  | **16**  |  **9**  | **12** | **10** |\n| 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |',
              type: ['string', 'number'],
            },
            background: {
              description:
                'The **`background`** shorthand CSS property sets all background style properties at once, such as color, image, origin and size, or repeat method.\n\n**Syntax**: `[ <bg-layer> , ]* <final-bg-layer>`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |',
              type: ['string', 'number'],
            },
            border: {
              description:
                "The **`border`** CSS property sets an element's border. It's a shorthand for `border-width`, `border-style`, and `border-color`.\n\n**Syntax**: `<line-width> || <line-style> || <color>`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |",
              type: ['string', 'number'],
            },
            borderBlock: {
              description:
                "The **`border-block`** CSS property is a shorthand property for setting the individual logical block border property values in a single place in the style sheet.\n\n**Syntax**: `<'border-top-width'> || <'border-top-style'> || <'color'>`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **69** | **66**  |   No   | **79** | No  |",
              type: ['string', 'number'],
            },
            borderBlockEnd: {
              description:
                "The **`border-block-end`** CSS property is a shorthand property for setting the individual logical block-end border property values in a single place in the style sheet.\n\n**Syntax**: `<'border-top-width'> || <'border-top-style'> || <'color'>`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **69** | **41**  | **12.1** | **79** | No  |",
              type: ['string', 'number'],
            },
            borderBlockStart: {
              description:
                "The **`border-block-start`** CSS property is a shorthand property for setting the individual logical block-start border property values in a single place in the style sheet.\n\n**Syntax**: `<'border-top-width'> || <'border-top-style'> || <'color'>`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **69** | **41**  | **12.1** | **79** | No  |",
              type: ['string', 'number'],
            },
            borderBottom: {
              description:
                "The **`border-bottom`** CSS property is a shorthand that sets the values of `border-bottom-width`, `border-bottom-style` and `border-bottom-color`. These properties set an element's bottom border.\n\n**Syntax**: `<line-width> || <line-style> || <color>`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |",
              type: ['string', 'number'],
            },
            borderColor: {
              description:
                "The **`border-color`** shorthand CSS property sets the color of all sides of an element's border.\n\n**Syntax**: `<color>{1,4}`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |",
              type: 'string',
            },
            borderImage: {
              description:
                "The **`border-image`** CSS property draws an image in place of an element's `border-style`.\n\n**Syntax**: `<'border-image-source'> || <'border-image-slice'> [ / <'border-image-width'> | / <'border-image-width'>? / <'border-image-outset'> ]? || <'border-image-repeat'>`\n\n| Chrome  |  Firefox  | Safari  |  Edge  |   IE   |\n| :-----: | :-------: | :-----: | :----: | :----: |\n| **16**  |  **15**   |  **6**  | **12** | **11** |\n| 7 _-x-_ | 3.5 _-x-_ | 3 _-x-_ |        |        |",
              type: ['string', 'number'],
            },
            borderInline: {
              description:
                "The **`border-inline`** CSS property is a shorthand property for setting the individual logical inline border property values in a single place in the style sheet.\n\n**Syntax**: `<'border-top-width'> || <'border-top-style'> || <'color'>`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **69** | **66**  |   No   | **79** | No  |",
              type: ['string', 'number'],
            },
            borderInlineEnd: {
              description:
                "The **`border-inline-end`** CSS property is a shorthand property for setting the individual logical inline-end border property values in a single place in the style sheet.\n\n**Syntax**: `<'border-top-width'> || <'border-top-style'> || <'color'>`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **69** | **41**  | **12.1** | **79** | No  |",
              type: ['string', 'number'],
            },
            borderInlineStart: {
              description:
                "The **`border-inline-start`** CSS property is a shorthand property for setting the individual logical inline-start border property values in a single place in the style sheet.\n\n**Syntax**: `<'border-top-width'> || <'border-top-style'> || <'color'>`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **69** | **41**  | **12.1** | **79** | No  |",
              type: ['string', 'number'],
            },
            borderLeft: {
              description:
                "The **`border-left`** CSS property is a shorthand that sets the values of `border-left-width`, `border-left-style` and `border-left-color`. These properties set an element's left border.\n\n**Syntax**: `<line-width> || <line-style> || <color>`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |",
              type: ['string', 'number'],
            },
            borderRadius: {
              description:
                "The **`border-radius`** CSS property rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners.\n\n**Syntax**: `<length-percentage>{1,4} [ / <length-percentage>{1,4} ]?`\n\n| Chrome  | Firefox | Safari  |  Edge  |  IE   |\n| :-----: | :-----: | :-----: | :----: | :---: |\n|  **4**  |  **4**  |  **5**  | **12** | **9** |\n| 1 _-x-_ |         | 3 _-x-_ |        |       |",
              type: ['string', 'number'],
            },
            borderRight: {
              description:
                "The **`border-right`** CSS property is a shorthand that sets the values of `border-right-width`, `border-right-style` and `border-right-color`. These properties set an element's right border.\n\n**Syntax**: `<line-width> || <line-style> || <color>`\n\n| Chrome | Firefox | Safari |  Edge  |   IE    |\n| :----: | :-----: | :----: | :----: | :-----: |\n| **1**  |  **1**  | **1**  | **12** | **5.5** |",
              type: ['string', 'number'],
            },
            borderStyle: {
              description:
                "The **`border-style`** CSS property is a shorthand property that sets the line style for all four sides of an element's border.\n\n**Syntax**: `<line-style>{1,4}`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |",
              type: 'string',
            },
            borderTop: {
              description:
                "The **`border-top`** CSS property is a shorthand that sets the values of `border-top-width`, `border-top-style` and `border-top-color`. These properties set an element's top border.\n\n**Syntax**: `<line-width> || <line-style> || <color>`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |",
              type: ['string', 'number'],
            },
            borderWidth: {
              description:
                "The **`border-width`** shorthand CSS property sets the widths of all four sides of an element's border.\n\n**Syntax**: `<line-width>{1,4}`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |",
              type: ['string', 'number'],
            },
            columnRule: {
              description:
                "The **`column-rule`** CSS property sets the width, style, and color of the rule (line) drawn between columns in a multi-column layout.\n\n**Syntax**: `<'column-rule-width'> || <'column-rule-style'> || <'column-rule-color'>`\n\n| Chrome  | Firefox | Safari  |  Edge  |   IE   |\n| :-----: | :-----: | :-----: | :----: | :----: |\n| **50**  | **52**  |  **9**  | **12** | **10** |\n| 1 _-x-_ |         | 3 _-x-_ |        |        |",
              type: ['string', 'number'],
            },
            columns: {
              description:
                "The **`columns`** CSS property sets the column width and column count of an element.\n\n**Syntax**: `<'column-width'> || <'column-count'>`\n\n| Chrome | Firefox | Safari  |  Edge  |   IE   |\n| :----: | :-----: | :-----: | :----: | :----: |\n| **50** | **52**  |  **9**  | **12** | **10** |\n|        |         | 3 _-x-_ |        |        |",
              type: ['string', 'number'],
            },
            flex: {
              description:
                "The **`flex`** CSS property sets how a flex item will grow or shrink to fit the space available in its flex container. It is a shorthand for `flex-grow`, `flex-shrink`, and `flex-basis`.\n\n**Syntax**: `none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]`\n\n|  Chrome  | Firefox |  Safari   |  Edge  |    IE    |\n| :------: | :-----: | :-------: | :----: | :------: |\n|  **29**  | **20**  |   **9**   | **12** |  **11**  |\n| 21 _-x-_ |         | 6.1 _-x-_ |        | 10 _-x-_ |",
              type: ['string', 'number'],
            },
            flexFlow: {
              description:
                "The **`flex-flow`** CSS property is a shorthand property for `flex-direction` and `flex-wrap` properties.\n\n**Syntax**: `<'flex-direction'> || <'flex-wrap'>`\n\n|  Chrome  | Firefox |  Safari   |  Edge  |   IE   |\n| :------: | :-----: | :-------: | :----: | :----: |\n|  **29**  | **28**  |   **9**   | **12** | **11** |\n| 21 _-x-_ |         | 6.1 _-x-_ |        |        |",
              type: 'string',
            },
            font: {
              description:
                "The **`font`** CSS property is a shorthand for `font-style`, `font-variant`, `font-weight`, `font-size`, `line-height`, and `font-family`. Alternatively, it sets an element's font to a system font.\n\n**Syntax**: `[ [ <'font-style'> || <font-variant-css21> || <'font-weight'> || <'font-stretch'> ]? <'font-size'> [ / <'line-height'> ]? <'font-family'> ] | caption | icon | menu | message-box | small-caption | status-bar`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **3** |",
              type: 'string',
            },
            gap: {
              description:
                "The **`gap`** CSS property sets the gaps (gutters) between rows and columns. It is a shorthand for `row-gap` and `column-gap`.\n\n**Syntax**: `<'row-gap'> <'column-gap'>?`\n\n---\n\n_Supported in Flex Layout_\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **84** | **63**  |   No   | **84** | No  |\n\n---\n\n_Supported in Grid Layout_\n\n|     Chrome      |     Firefox     |      Safari       |  Edge  | IE  |\n| :-------------: | :-------------: | :---------------: | :----: | :-: |\n|     **66**      |     **61**      |      **12**       | **16** | No  |\n| 57 _(grid-gap)_ | 52 _(grid-gap)_ | 10.1 _(grid-gap)_ |        |     |\n\n---\n\n_Supported in Multi-column Layout_\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **66** | **61**  |   No   | **16** | No  |\n\n---",
              type: ['string', 'number'],
            },
            grid: {
              description:
                "The **`grid`** CSS property is a shorthand property that sets all of the explicit grid properties (`grid-template-rows`, `grid-template-columns`, and `grid-template-areas`), and all the implicit grid properties (`grid-auto-rows`, `grid-auto-columns`, and `grid-auto-flow`), in a single declaration.\n\n**Syntax**: `<'grid-template'> | <'grid-template-rows'> / [ auto-flow && dense? ] <'grid-auto-columns'>? | [ auto-flow && dense? ] <'grid-auto-rows'>? / <'grid-template-columns'>`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **57** | **52**  | **10.1** | **16** | No  |",
              type: 'string',
            },
            gridArea: {
              description:
                'The **`grid-area`** CSS property is a shorthand property for `grid-row-start`, `grid-column-start`, `grid-row-end` and `grid-column-end`, specifying a grid item’s size and location within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the edges of its grid area.\n\n**Syntax**: `<grid-line> [ / <grid-line> ]{0,3}`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **57** | **52**  | **10.1** | **16** | No  |',
              type: ['string', 'number'],
            },
            gridColumn: {
              description:
                "The **`grid-column`** CSS property is a shorthand property for `grid-column-start` and `grid-column-end` specifying a grid item's size and location within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area.\n\n**Syntax**: `<grid-line> [ / <grid-line> ]?`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **57** | **52**  | **10.1** | **16** | No  |",
              type: ['string', 'number'],
            },
            gridRow: {
              description:
                'The **`grid-row`** CSS property is a shorthand property for `grid-row-start` and `grid-row-end` specifying a grid item’s size and location within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area.\n\n**Syntax**: `<grid-line> [ / <grid-line> ]?`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **57** | **52**  | **10.1** | **16** | No  |',
              type: ['string', 'number'],
            },
            gridTemplate: {
              description:
                "The **`grid-template`** CSS property is a shorthand property for defining grid columns, rows, and areas.\n\n**Syntax**: `none | [ <'grid-template-rows'> / <'grid-template-columns'> ] | [ <line-names>? <string> <track-size>? <line-names>? ]+ [ / <explicit-track-list> ]?`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **57** | **52**  | **10.1** | **16** | No  |",
              type: 'string',
            },
            lineClamp: {
              description:
                '**Syntax**: `none | <integer>`\n\n**Initial value**: `none`',
              anyOf: [
                {
                  enum: [
                    '-moz-initial',
                    'inherit',
                    'initial',
                    'none',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                {
                  type: 'number',
                },
              ],
            },
            listStyle: {
              description:
                "The **`list-style`** CSS property is a shorthand to set list style properties `list-style-type`, `list-style-image`, and `list-style-position`.\n\n**Syntax**: `<'list-style-type'> || <'list-style-position'> || <'list-style-image'>`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |",
              type: 'string',
            },
            margin: {
              description:
                'The **`margin`** CSS property sets the margin area on all four sides of an element. It is a shorthand for `margin-top`, `margin-right`, `margin-bottom`, and `margin-left`.\n\n**Syntax**: `[ <length> | <percentage> | auto ]{1,4}`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **3** |',
              type: ['string', 'number'],
            },
            mask: {
              description:
                'The **`mask`** CSS property hides an element (partially or fully) by masking or clipping the image at specific points.\n\n**Syntax**: `<mask-layer>#`\n\n| Chrome | Firefox | Safari  |  Edge  | IE  |\n| :----: | :-----: | :-----: | :----: | :-: |\n| **1**  |  **2**  | **3.2** | **12** | No  |',
              type: ['string', 'number'],
            },
            maskBorder: {
              description:
                "The **`mask-border`** CSS property lets you create a mask along the edge of an element's border.\n\n**Syntax**: `<'mask-border-source'> || <'mask-border-slice'> [ / <'mask-border-width'>? [ / <'mask-border-outset'> ]? ]? || <'mask-border-repeat'> || <'mask-border-mode'>`",
              type: ['string', 'number'],
            },
            motion: {
              description:
                "The **`offset`** CSS property is a shorthand property for animating an element along a defined path.\n\n**Syntax**: `[ <'offset-position'>? [ <'offset-path'> [ <'offset-distance'> || <'offset-rotate'> ]? ]? ]! [ / <'offset-anchor'> ]?`\n\n|    Chrome     | Firefox | Safari |  Edge  | IE  |\n| :-----------: | :-----: | :----: | :----: | :-: |\n|    **55**     | **72**  |   No   | **79** | No  |\n| 46 _(motion)_ |         |        |        |     |",
              type: ['string', 'number'],
            },
            offset: {
              description:
                "The **`offset`** CSS property is a shorthand property for animating an element along a defined path.\n\n**Syntax**: `[ <'offset-position'>? [ <'offset-path'> [ <'offset-distance'> || <'offset-rotate'> ]? ]? ]! [ / <'offset-anchor'> ]?`\n\n|    Chrome     | Firefox | Safari |  Edge  | IE  |\n| :-----------: | :-----: | :----: | :----: | :-: |\n|    **55**     | **72**  |   No   | **79** | No  |\n| 46 _(motion)_ |         |        |        |     |",
              type: ['string', 'number'],
            },
            outline: {
              description:
                "The **`outline`** CSS property is a shorthand to set various outline properties in a single declaration: `outline-style`, `outline-width`, and `outline-color`.\n\n**Syntax**: `[ <'outline-color'> || <'outline-style'> || <'outline-width'> ]`\n\n| Chrome | Firefox | Safari  |  Edge  |  IE   |\n| :----: | :-----: | :-----: | :----: | :---: |\n| **1**  | **1.5** | **1.2** | **12** | **8** |",
              type: ['string', 'number'],
            },
            overflow: {
              description:
                "The **`overflow`** CSS property sets what to do when an element's content is too big to fit in its block formatting context. It is a shorthand for `overflow-x` and `overflow-y`.\n\n**Syntax**: `[ visible | hidden | clip | scroll | auto ]{1,2}`\n\n**Initial value**: `visible`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |",
              type: 'string',
            },
            padding: {
              description:
                'The **`padding`** CSS property sets the padding area on all four sides of an element. It is a shorthand for `padding-top`, `padding-right`, `padding-bottom`, and `padding-left`.\n\n**Syntax**: `[ <length> | <percentage> ]{1,4}`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |',
              type: ['string', 'number'],
            },
            placeItems: {
              description:
                "The CSS **`place-items`** shorthand property sets the `align-items` and `justify-items` properties, respectively. If the second value is not set, the first value is also used for it.\n\n**Syntax**: `<'align-items'> <'justify-items'>?`\n\n---\n\n_Supported in Flex Layout_\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **59** | **45**  | **11** | **79** | No  |\n\n---\n\n_Supported in Grid Layout_\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **59** | **45**  | **11** | **79** | No  |\n\n---",
              type: 'string',
            },
            placeSelf: {
              description:
                "The **`place-self`** CSS property is a shorthand property sets both the `align-self` and `justify-self` properties. The first value is the `align-self` property value, the second the `justify-self` one. If the second value is not present, the first value is also used for it.\n\n**Syntax**: `<'align-self'> <'justify-self'>?`\n\n---\n\n_Supported in Flex Layout_\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **59** | **45**  | **11** | **79** | No  |\n\n---\n\n_Supported in Grid Layout_\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **59** | **45**  | **11** | **79** | No  |\n\n---",
              type: 'string',
            },
            textDecoration: {
              description:
                "The **`text-decoration`** CSS property sets the appearance of decorative lines on text. It is a shorthand for `text-decoration-line`, `text-decoration-color`, and `text-decoration-style`.\n\n**Syntax**: `<'text-decoration-line'> || <'text-decoration-style'> || <'text-decoration-color'> || <'text-decoration-thickness'>`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **3** |",
              type: ['string', 'number'],
            },
            textEmphasis: {
              description:
                "The **`text-emphasis`** CSS property applies emphasis marks to text (except spaces and control characters). It is a shorthand for `text-emphasis-style` and `text-emphasis-color`.\n\n**Syntax**: `<'text-emphasis-style'> || <'text-emphasis-color'>`\n\n|    Chrome    | Firefox | Safari  |     Edge     | IE  |\n| :----------: | :-----: | :-----: | :----------: | :-: |\n| **25** _-x-_ | **46**  | **6.1** | **79** _-x-_ | No  |",
              type: 'string',
            },
            transition: {
              description:
                'The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.\n\n**Syntax**: `<single-transition>#`\n\n| Chrome  | Firefox |  Safari   |  Edge  |   IE   |\n| :-----: | :-----: | :-------: | :----: | :----: |\n| **26**  | **16**  |   **9**   | **12** | **10** |\n| 1 _-x-_ | 4 _-x-_ | 3.1 _-x-_ |        |        |',
              type: 'string',
            },
            MozAnimationDelay: {
              description:
                'The **`animation-delay`** CSS property sets when an animation starts. The animation can start later, immediately from its beginning, or immediately and partway through the animation.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`',
              type: 'string',
            },
            MozAnimationDirection: {
              description:
                'The **`animation-direction`** CSS property sets whether an animation should play forwards, backwards, or alternating back and forth.\n\n**Syntax**: `<single-animation-direction>#`\n\n**Initial value**: `normal`',
              type: 'string',
            },
            MozAnimationDuration: {
              description:
                'The **`animation-duration`** CSS property sets the length of time that an animation takes to complete one cycle.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`',
              type: 'string',
            },
            MozAnimationFillMode: {
              description:
                'The **`animation-fill-mode`** CSS property sets how a CSS animation applies styles to its target before and after its execution.\n\n**Syntax**: `<single-animation-fill-mode>#`\n\n**Initial value**: `none`',
              type: 'string',
            },
            MozAnimationIterationCount: {
              description:
                'The **`animation-iteration-count`** CSS property sets the number of times an animation cycle should be played before stopping.\n\n**Syntax**: `<single-animation-iteration-count>#`\n\n**Initial value**: `1`',
              type: ['string', 'number'],
            },
            MozAnimationName: {
              description:
                'The **`animation-name`** CSS property sets one or more animations to apply to an element. Each name is an `@keyframes` at-rule that sets the property values for the animation sequence.\n\n**Syntax**: `[ none | <keyframes-name> ]#`\n\n**Initial value**: `none`',
              type: 'string',
            },
            MozAnimationPlayState: {
              description:
                'The **`animation-play-state`** CSS property sets whether an animation is running or paused.\n\n**Syntax**: `<single-animation-play-state>#`\n\n**Initial value**: `running`',
              type: 'string',
            },
            MozAnimationTimingFunction: {
              description:
                'The `**animation-timing-function**` CSS property sets how an animation progresses through the duration of each cycle.\n\n**Syntax**: `<timing-function>#`\n\n**Initial value**: `ease`',
              type: 'string',
            },
            MozAppearance: {
              description:
                "The **`-moz-appearance`** CSS property is used in Gecko (Firefox) to display an element using platform-native styling based on the operating system's theme.\n\n**Syntax**: `none | button | button-arrow-down | button-arrow-next | button-arrow-previous | button-arrow-up | button-bevel | button-focus | caret | checkbox | checkbox-container | checkbox-label | checkmenuitem | dualbutton | groupbox | listbox | listitem | menuarrow | menubar | menucheckbox | menuimage | menuitem | menuitemtext | menulist | menulist-button | menulist-text | menulist-textfield | menupopup | menuradio | menuseparator | meterbar | meterchunk | progressbar | progressbar-vertical | progresschunk | progresschunk-vertical | radio | radio-container | radio-label | radiomenuitem | range | range-thumb | resizer | resizerpanel | scale-horizontal | scalethumbend | scalethumb-horizontal | scalethumbstart | scalethumbtick | scalethumb-vertical | scale-vertical | scrollbarbutton-down | scrollbarbutton-left | scrollbarbutton-right | scrollbarbutton-up | scrollbarthumb-horizontal | scrollbarthumb-vertical | scrollbartrack-horizontal | scrollbartrack-vertical | searchfield | separator | sheet | spinner | spinner-downbutton | spinner-textfield | spinner-upbutton | splitter | statusbar | statusbarpanel | tab | tabpanel | tabpanels | tab-scroll-arrow-back | tab-scroll-arrow-forward | textfield | textfield-multiline | toolbar | toolbarbutton | toolbarbutton-dropdown | toolbargripper | toolbox | tooltip | treeheader | treeheadercell | treeheadersortarrow | treeitem | treeline | treetwisty | treetwistyopen | treeview | -moz-mac-unified-toolbar | -moz-win-borderless-glass | -moz-win-browsertabbar-toolbox | -moz-win-communicationstext | -moz-win-communications-toolbox | -moz-win-exclude-glass | -moz-win-glass | -moz-win-mediatext | -moz-win-media-toolbox | -moz-window-button-box | -moz-window-button-box-maximized | -moz-window-button-close | -moz-window-button-maximize | -moz-window-button-minimize | -moz-window-button-restore | -moz-window-frame-bottom | -moz-window-frame-left | -moz-window-frame-right | -moz-window-titlebar | -moz-window-titlebar-maximized`\n\n**Initial value**: `none` (but this value is overridden in the user agent CSS)",
              enum: [
                '-moz-initial',
                '-moz-mac-unified-toolbar',
                '-moz-win-borderless-glass',
                '-moz-win-browsertabbar-toolbox',
                '-moz-win-communications-toolbox',
                '-moz-win-communicationstext',
                '-moz-win-exclude-glass',
                '-moz-win-glass',
                '-moz-win-media-toolbox',
                '-moz-win-mediatext',
                '-moz-window-button-box',
                '-moz-window-button-box-maximized',
                '-moz-window-button-close',
                '-moz-window-button-maximize',
                '-moz-window-button-minimize',
                '-moz-window-button-restore',
                '-moz-window-frame-bottom',
                '-moz-window-frame-left',
                '-moz-window-frame-right',
                '-moz-window-titlebar',
                '-moz-window-titlebar-maximized',
                'button',
                'button-arrow-down',
                'button-arrow-next',
                'button-arrow-previous',
                'button-arrow-up',
                'button-bevel',
                'button-focus',
                'caret',
                'checkbox',
                'checkbox-container',
                'checkbox-label',
                'checkmenuitem',
                'dualbutton',
                'groupbox',
                'inherit',
                'initial',
                'listbox',
                'listitem',
                'menuarrow',
                'menubar',
                'menucheckbox',
                'menuimage',
                'menuitem',
                'menuitemtext',
                'menulist',
                'menulist-button',
                'menulist-text',
                'menulist-textfield',
                'menupopup',
                'menuradio',
                'menuseparator',
                'meterbar',
                'meterchunk',
                'none',
                'progressbar',
                'progressbar-vertical',
                'progresschunk',
                'progresschunk-vertical',
                'radio',
                'radio-container',
                'radio-label',
                'radiomenuitem',
                'range',
                'range-thumb',
                'resizer',
                'resizerpanel',
                'revert',
                'scale-horizontal',
                'scale-vertical',
                'scalethumb-horizontal',
                'scalethumb-vertical',
                'scalethumbend',
                'scalethumbstart',
                'scalethumbtick',
                'scrollbarbutton-down',
                'scrollbarbutton-left',
                'scrollbarbutton-right',
                'scrollbarbutton-up',
                'scrollbarthumb-horizontal',
                'scrollbarthumb-vertical',
                'scrollbartrack-horizontal',
                'scrollbartrack-vertical',
                'searchfield',
                'separator',
                'sheet',
                'spinner',
                'spinner-downbutton',
                'spinner-textfield',
                'spinner-upbutton',
                'splitter',
                'statusbar',
                'statusbarpanel',
                'tab',
                'tab-scroll-arrow-back',
                'tab-scroll-arrow-forward',
                'tabpanel',
                'tabpanels',
                'textfield',
                'textfield-multiline',
                'toolbar',
                'toolbarbutton',
                'toolbarbutton-dropdown',
                'toolbargripper',
                'toolbox',
                'tooltip',
                'treeheader',
                'treeheadercell',
                'treeheadersortarrow',
                'treeitem',
                'treeline',
                'treetwisty',
                'treetwistyopen',
                'treeview',
                'unset',
              ],
              type: 'string',
            },
            MozBackfaceVisibility: {
              description:
                'The **`backface-visibility`** CSS property sets whether the back face of an element is visible when turned towards the user.\n\n**Syntax**: `visible | hidden`\n\n**Initial value**: `visible`',
              enum: [
                '-moz-initial',
                'hidden',
                'inherit',
                'initial',
                'revert',
                'unset',
                'visible',
              ],
              type: 'string',
            },
            MozBorderBottomColors: {
              description:
                'In Mozilla applications like Firefox, the **`-moz-border-bottom-colors`** CSS property sets a list of colors for the bottom border.\n\n**Syntax**: `<color>+ | none`\n\n**Initial value**: `none`',
              type: 'string',
            },
            MozBorderEndColor: {
              description:
                "The **`border-inline-end-color`** CSS property defines the color of the logical inline-end border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-color'>`\n\n**Initial value**: `currentcolor`",
              type: 'string',
            },
            MozBorderEndStyle: {
              description:
                "The **`border-inline-end-style`** CSS property defines the style of the logical inline end border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-style'>`\n\n**Initial value**: `none`",
              enum: [
                '-moz-initial',
                'dashed',
                'dotted',
                'double',
                'groove',
                'hidden',
                'inherit',
                'initial',
                'inset',
                'none',
                'outset',
                'revert',
                'ridge',
                'solid',
                'unset',
              ],
              type: 'string',
            },
            MozBorderEndWidth: {
              description:
                "The **`border-inline-end-width`** CSS property defines the width of the logical inline-end border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-width'>`\n\n**Initial value**: `medium`",
              type: ['string', 'number'],
            },
            MozBorderLeftColors: {
              description:
                'In Mozilla applications like Firefox, the **`-moz-border-left-colors`** CSS property sets a list of colors for the left border.\n\n**Syntax**: `<color>+ | none`\n\n**Initial value**: `none`',
              type: 'string',
            },
            MozBorderRightColors: {
              description:
                'In Mozilla applications like Firefox, the **`-moz-border-right-colors`** CSS property sets a list of colors for the right border.\n\n**Syntax**: `<color>+ | none`\n\n**Initial value**: `none`',
              type: 'string',
            },
            MozBorderStartColor: {
              description:
                "The **`border-inline-start-color`** CSS property defines the color of the logical inline start border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-color'>`\n\n**Initial value**: `currentcolor`",
              type: 'string',
            },
            MozBorderStartStyle: {
              description:
                "The **`border-inline-start-style`** CSS property defines the style of the logical inline start border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-style'>`\n\n**Initial value**: `none`",
              enum: [
                '-moz-initial',
                'dashed',
                'dotted',
                'double',
                'groove',
                'hidden',
                'inherit',
                'initial',
                'inset',
                'none',
                'outset',
                'revert',
                'ridge',
                'solid',
                'unset',
              ],
              type: 'string',
            },
            MozBorderTopColors: {
              description:
                'In Mozilla applications like Firefox, the **`-moz-border-top-colors`** CSS property sets a list of colors for the top border.\n\n**Syntax**: `<color>+ | none`\n\n**Initial value**: `none`',
              type: 'string',
            },
            MozBoxSizing: {
              description:
                'The **`box-sizing`** CSS property defines how the user agent should calculate the total width and height of an element.\n\n**Syntax**: `content-box | border-box`\n\n**Initial value**: `content-box`',
              enum: [
                '-moz-initial',
                'border-box',
                'content-box',
                'inherit',
                'initial',
                'revert',
                'unset',
              ],
              type: 'string',
            },
            MozColumnCount: {
              description:
                "The **`column-count`** CSS property breaks an element's content into the specified number of columns.\n\n**Syntax**: `<integer> | auto`\n\n**Initial value**: `auto`",
              anyOf: [
                {
                  enum: [
                    '-moz-initial',
                    'auto',
                    'inherit',
                    'initial',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                {
                  type: 'number',
                },
              ],
            },
            MozColumnFill: {
              description:
                "The **`column-fill`** CSS property controls how an element's contents are balanced when broken into columns.\n\n**Syntax**: `auto | balance | balance-all`\n\n**Initial value**: `balance`",
              enum: [
                '-moz-initial',
                'auto',
                'balance',
                'inherit',
                'initial',
                'revert',
                'unset',
              ],
              type: 'string',
            },
            MozColumnGap: {
              description:
                "The **`column-gap`** CSS property sets the size of the gap (gutter) between an element's columns.\n\n**Syntax**: `normal | <length-percentage>`\n\n**Initial value**: `normal`",
              type: ['string', 'number'],
            },
            MozColumnRuleColor: {
              description:
                'The **`column-rule-color`** CSS property sets the color of the rule (line) drawn between columns in a multi-column layout.\n\n**Syntax**: `<color>`\n\n**Initial value**: `currentcolor`',
              type: 'string',
            },
            MozColumnRuleStyle: {
              description:
                "The **`column-rule-style`** CSS property sets the style of the line drawn between columns in a multi-column layout.\n\n**Syntax**: `<'border-style'>`\n\n**Initial value**: `none`",
              type: 'string',
            },
            MozColumnRuleWidth: {
              description:
                "The **`column-rule-width`** CSS property sets the width of the rule (line) drawn between columns in a multi-column layout.\n\n**Syntax**: `<'border-width'>`\n\n**Initial value**: `medium`",
              type: ['string', 'number'],
            },
            MozColumnWidth: {
              description:
                "The **`column-width`** CSS property specifies the ideal column width in a multi-column layout. The container will have as many columns as can fit without any of them having a width less than the `column-width` value. If the width of the container is narrower than the specified value, the single column's width will be smaller than the declared column width.\n\n**Syntax**: `<length> | auto`\n\n**Initial value**: `auto`",
              type: ['string', 'number'],
            },
            MozContextProperties: {
              description:
                'If you reference an SVG image in a webpage (such as with the `<img>` element or as a background image), the SVG image can coordinate with the embedding element (its context) to have the image adopt property values set on the embedding element. To do this the embedding element needs to list the properties that are to be made available to the image by listing them as values of the **`-moz-context-properties`** property, and the image needs to opt in to using those properties by using values such as the `context-fill` value.\n\n**Syntax**: `none | [ fill | fill-opacity | stroke | stroke-opacity ]#`\n\n**Initial value**: `none`',
              type: 'string',
            },
            MozFontFeatureSettings: {
              description:
                'The **`font-feature-settings`** CSS property controls advanced typographic features in OpenType fonts.\n\n**Syntax**: `normal | <feature-tag-value>#`\n\n**Initial value**: `normal`',
              type: 'string',
            },
            MozFontLanguageOverride: {
              description:
                'The **`font-language-override`** CSS property controls the use of language-specific glyphs in a typeface.\n\n**Syntax**: `normal | <string>`\n\n**Initial value**: `normal`',
              type: 'string',
            },
            MozHyphens: {
              description:
                'The **`hyphens`** CSS property specifies how words should be hyphenated when text wraps across multiple lines. You can prevent hyphenation entirely, use hyphenation in manually-specified points within the text, or let the browser automatically insert hyphens where appropriate.\n\n**Syntax**: `none | manual | auto`\n\n**Initial value**: `manual`',
              enum: [
                '-moz-initial',
                'auto',
                'inherit',
                'initial',
                'manual',
                'none',
                'revert',
                'unset',
              ],
              type: 'string',
            },
            MozImageRegion: {
              description:
                'For certain XUL elements and pseudo-elements that use an image from the `list-style-image` property, this property specifies a region of the image that is used in place of the whole image. This allows elements to use different pieces of the same image to improve performance.\n\n**Syntax**: `<shape> | auto`\n\n**Initial value**: `auto`',
              type: 'string',
            },
            MozMarginEnd: {
              description:
                "The **`margin-inline-end`** CSS property defines the logical inline end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. In other words, it corresponds to the `margin-top`, `margin-right`, `margin-bottom` or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'margin-left'>`\n\n**Initial value**: `0`",
              type: ['string', 'number'],
            },
            MozMarginStart: {
              description:
                "The **`margin-inline-start`** CSS property defines the logical inline start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. It corresponds to the `margin-top`, `margin-right`, `margin-bottom`, or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'margin-left'>`\n\n**Initial value**: `0`",
              type: ['string', 'number'],
            },
            MozOrient: {
              description:
                "The **`-moz-orient`** CSS property specifies the orientation of the element to which it's applied.\n\n**Syntax**: `inline | block | horizontal | vertical`\n\n**Initial value**: `inline`",
              enum: [
                '-moz-initial',
                'block',
                'horizontal',
                'inherit',
                'initial',
                'inline',
                'revert',
                'unset',
                'vertical',
              ],
              type: 'string',
            },
            MozOsxFontSmoothing: {
              description:
                'The **`font-smooth`** CSS property controls the application of anti-aliasing when fonts are rendered.\n\n**Syntax**: `auto | never | always | <absolute-size> | <length>`\n\n**Initial value**: `auto`',
              type: ['string', 'number'],
            },
            MozPaddingEnd: {
              description:
                "The **`padding-inline-end`** CSS property defines the logical inline end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation. It corresponds to the `padding-top`, `padding-right`, `padding-bottom`, or `padding-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'padding-left'>`\n\n**Initial value**: `0`",
              type: ['string', 'number'],
            },
            MozPaddingStart: {
              description:
                "The **`padding-inline-start`** CSS property defines the logical inline start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation. It corresponds to the `padding-top`, `padding-right`, `padding-bottom`, or `padding-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'padding-left'>`\n\n**Initial value**: `0`",
              type: ['string', 'number'],
            },
            MozPerspective: {
              description:
                'The **`perspective`** CSS property determines the distance between the z=0 plane and the user in order to give a 3D-positioned element some perspective. Each 3D element with z>0 becomes larger; each 3D-element with z<0 becomes smaller. The strength of the effect is determined by the value of this property.\n\n**Syntax**: `none | <length>`\n\n**Initial value**: `none`',
              type: ['string', 'number'],
            },
            MozPerspectiveOrigin: {
              description:
                'The **`perspective-origin`** CSS property determines the position at which the viewer is looking. It is used as the _vanishing point_ by the `perspective` property.\n\n**Syntax**: `<position>`\n\n**Initial value**: `50% 50%`',
              type: ['string', 'number'],
            },
            MozStackSizing: {
              description:
                '**`-moz-stack-sizing`** is an extended CSS property. Normally, a `stack` will change its size so that all of its child elements are completely visible. For example, moving a child of the stack far to the right will widen the stack so the child remains visible.\n\n**Syntax**: `ignore | stretch-to-fit`\n\n**Initial value**: `stretch-to-fit`',
              enum: [
                '-moz-initial',
                'ignore',
                'inherit',
                'initial',
                'revert',
                'stretch-to-fit',
                'unset',
              ],
              type: 'string',
            },
            MozTabSize: {
              description:
                'The **`tab-size`** CSS property is used to customize the width of a tab (`U+0009`) character.\n\n**Syntax**: `<integer> | <length>`\n\n**Initial value**: `8`',
              type: ['string', 'number'],
            },
            MozTextBlink: {
              description:
                'The **`-moz-text-blink`** non-standard Mozilla CSS extension specifies the blink mode.\n\n**Syntax**: `none | blink`\n\n**Initial value**: `none`',
              enum: [
                '-moz-initial',
                'blink',
                'inherit',
                'initial',
                'none',
                'revert',
                'unset',
              ],
              type: 'string',
            },
            MozTextSizeAdjust: {
              description:
                'The **`text-size-adjust`** CSS property controls the text inflation algorithm used on some smartphones and tablets. Other browsers will ignore this property.\n\n**Syntax**: `none | auto | <percentage>`\n\n**Initial value**: `auto` for smartphone browsers supporting inflation, `none` in other cases (and then not modifiable).',
              type: 'string',
            },
            MozTransformOrigin: {
              description:
                "The **`transform-origin`** CSS property sets the origin for an element's transformations.\n\n**Syntax**: `[ <length-percentage> | left | center | right | top | bottom ] | [ [ <length-percentage> | left | center | right ] && [ <length-percentage> | top | center | bottom ] ] <length>?`\n\n**Initial value**: `50% 50% 0`",
              type: ['string', 'number'],
            },
            MozTransformStyle: {
              description:
                'The **`transform-style`** CSS property sets whether children of an element are positioned in the 3D space or are flattened in the plane of the element.\n\n**Syntax**: `flat | preserve-3d`\n\n**Initial value**: `flat`',
              enum: [
                '-moz-initial',
                'flat',
                'inherit',
                'initial',
                'preserve-3d',
                'revert',
                'unset',
              ],
              type: 'string',
            },
            MozTransitionDelay: {
              description:
                "The **`transition-delay`** CSS property specifies the duration to wait before starting a property's transition effect when its value changes.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`",
              type: 'string',
            },
            MozTransitionDuration: {
              description:
                'The **`transition-duration`** CSS property sets the length of time a transition animation should take to complete. By default, the value is `0s`, meaning that no animation will occur.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`',
              type: 'string',
            },
            MozTransitionProperty: {
              description:
                'The **`transition-property`** CSS property sets the CSS properties to which a transition effect should be applied.\n\n**Syntax**: `none | <single-transition-property>#`\n\n**Initial value**: all',
              type: 'string',
            },
            MozTransitionTimingFunction: {
              description:
                'The **`transition-timing-function`** CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect.\n\n**Syntax**: `<timing-function>#`\n\n**Initial value**: `ease`',
              type: 'string',
            },
            MozUserFocus: {
              description:
                'The **`-moz-user-focus`** CSS property is used to indicate whether an element can have the focus.\n\n**Syntax**: `ignore | normal | select-after | select-before | select-menu | select-same | select-all | none`\n\n**Initial value**: `none`',
              enum: [
                '-moz-initial',
                'ignore',
                'inherit',
                'initial',
                'none',
                'normal',
                'revert',
                'select-after',
                'select-all',
                'select-before',
                'select-menu',
                'select-same',
                'unset',
              ],
              type: 'string',
            },
            MozUserModify: {
              description:
                'The **`user-modify`** property has no effect in Firefox. It was originally planned to determine whether or not the content of an element can be edited by a user.\n\n**Syntax**: `read-only | read-write | write-only`\n\n**Initial value**: `read-only`',
              enum: [
                '-moz-initial',
                'inherit',
                'initial',
                'read-only',
                'read-write',
                'revert',
                'unset',
                'write-only',
              ],
              type: 'string',
            },
            MozUserSelect: {
              description:
                "The `**user-select**` CSS property controls whether the user can select text. This doesn't have any effect on content loaded as chrome, except in textboxes.\n\n**Syntax**: `auto | text | none | contain | all`\n\n**Initial value**: `auto`",
              enum: [
                '-moz-initial',
                '-moz-none',
                'all',
                'auto',
                'contain',
                'element',
                'inherit',
                'initial',
                'none',
                'revert',
                'text',
                'unset',
              ],
              type: 'string',
            },
            MozWindowDragging: {
              description:
                'The **`-moz-window-dragging`** CSS property specifies whether a window is draggable or not. It only works in Chrome code, and only on Mac OS X.\n\n**Syntax**: `drag | no-drag`\n\n**Initial value**: `drag`',
              enum: [
                '-moz-initial',
                'drag',
                'inherit',
                'initial',
                'no-drag',
                'revert',
                'unset',
              ],
              type: 'string',
            },
            MozWindowShadow: {
              description:
                'The **`-moz-window-shadow`** CSS property specifies whether a window will have a shadow. It only works on Mac OS X.\n\n**Syntax**: `default | menu | tooltip | sheet | none`\n\n**Initial value**: `default`',
              enum: [
                '-moz-initial',
                'default',
                'inherit',
                'initial',
                'menu',
                'none',
                'revert',
                'sheet',
                'tooltip',
                'unset',
              ],
              type: 'string',
            },
            msAccelerator: {
              description:
                'The **`-ms-accelerator`** CSS property is a Microsoft extension that sets or retrieves a string indicating whether the object represents a keyboard shortcut.\n\n**Syntax**: `false | true`\n\n**Initial value**: `false`',
              enum: [
                '-moz-initial',
                'false',
                'inherit',
                'initial',
                'revert',
                'true',
                'unset',
              ],
              type: 'string',
            },
            msAlignSelf: {
              description:
                "The **`align-self`** CSS property aligns flex items of the current flex line overriding the `align-items` value. If any of the item's cross-axis margin is set to `auto`, then `align-self` is ignored. In Grid layout `align-self` aligns the item inside the grid area.\n\n**Syntax**: `auto | normal | stretch | <baseline-position> | <overflow-position>? <self-position>`\n\n**Initial value**: `auto`",
              type: 'string',
            },
            msBlockProgression: {
              description:
                'The **`-ms-block-progression`** CSS property is a Microsoft extension that specifies the block progression and layout orientation.\n\n**Syntax**: `tb | rl | bt | lr`\n\n**Initial value**: `tb`',
              enum: [
                '-moz-initial',
                'bt',
                'inherit',
                'initial',
                'lr',
                'revert',
                'rl',
                'tb',
                'unset',
              ],
              type: 'string',
            },
            msContentZoomChaining: {
              description:
                'The **`-ms-content-zoom-chaining`** CSS property is a Microsoft extension specifying the zoom behavior that occurs when a user hits the zoom limit during page manipulation.\n\n**Syntax**: `none | chained`\n\n**Initial value**: `none`',
              enum: [
                '-moz-initial',
                'chained',
                'inherit',
                'initial',
                'none',
                'revert',
                'unset',
              ],
              type: 'string',
            },
            msContentZoomLimitMax: {
              description:
                "The **`-ms-content-zoom-limit-max`** CSS property is a Microsoft extension that specifies the selected elements' maximum zoom factor.\n\n**Syntax**: `<percentage>`\n\n**Initial value**: `400%`",
              type: 'string',
            },
            msContentZoomLimitMin: {
              description:
                'The **`-ms-content-zoom-limit-min`** CSS property is a Microsoft extension that specifies the minimum zoom factor.\n\n**Syntax**: `<percentage>`\n\n**Initial value**: `100%`',
              type: 'string',
            },
            msContentZoomSnapPoints: {
              description:
                'The **`-ms-content-zoom-snap-points`** CSS property is a Microsoft extension that specifies where zoom snap-points are located.\n\n**Syntax**: `snapInterval( <percentage>, <percentage> ) | snapList( <percentage># )`\n\n**Initial value**: `snapInterval(0%, 100%)`',
              type: 'string',
            },
            msContentZoomSnapType: {
              description:
                'The **`-ms-content-zoom-snap-type`** CSS property is a Microsoft extension that specifies how zooming is affected by defined snap-points.\n\n**Syntax**: `none | proximity | mandatory`\n\n**Initial value**: `none`',
              enum: [
                '-moz-initial',
                'inherit',
                'initial',
                'mandatory',
                'none',
                'proximity',
                'revert',
                'unset',
              ],
              type: 'string',
            },
            msContentZooming: {
              description:
                'The **`-ms-content-zooming`** CSS property is a Microsoft extension that specifies whether zooming is enabled.\n\n**Syntax**: `none | zoom`\n\n**Initial value**: zoom for the top level element, none for all other elements',
              enum: [
                '-moz-initial',
                'inherit',
                'initial',
                'none',
                'revert',
                'unset',
                'zoom',
              ],
              type: 'string',
            },
            msFilter: {
              description:
                'The `-ms-filter` CSS property is a Microsoft extension that sets or retrieves the filter or collection of filters applied to an object.\n\n**Syntax**: `<string>`\n\n**Initial value**: "" (the empty string)',
              type: 'string',
            },
            msFlexDirection: {
              description:
                'The **`flex-direction`** CSS property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).\n\n**Syntax**: `row | row-reverse | column | column-reverse`\n\n**Initial value**: `row`',
              enum: [
                '-moz-initial',
                'column',
                'column-reverse',
                'inherit',
                'initial',
                'revert',
                'row',
                'row-reverse',
                'unset',
              ],
              type: 'string',
            },
            msFlexPositive: {
              description:
                'The **`flex-grow`** CSS property sets how much of the available space in the flex container should be assigned to that item (the flex grow factor). If all sibling items have the same flex grow factor, then all items will receive the same share of available space, otherwise it is distributed according to the ratio defined by the different flex grow factors.\n\n**Syntax**: `<number>`\n\n**Initial value**: `0`',
              anyOf: [
                {
                  enum: [
                    '-moz-initial',
                    'inherit',
                    'initial',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                {
                  type: 'number',
                },
              ],
            },
            msFlowFrom: {
              description:
                'The **`-ms-flow-from`** CSS property is a Microsoft extension that gets or sets a value identifying a region container in the document that accepts the content flow from the data source.\n\n**Syntax**: `[ none | <custom-ident> ]#`\n\n**Initial value**: `none`',
              type: 'string',
            },
            msFlowInto: {
              description:
                "The **`-ms-flow-into`** CSS property is a Microsoft extension that gets or sets a value identifying an iframe container in the document that serves as the region's data source.\n\n**Syntax**: `[ none | <custom-ident> ]#`\n\n**Initial value**: `none`",
              type: 'string',
            },
            msGridColumns: {
              description:
                'The **`grid-template-columns`** CSS property defines the line names and track sizing functions of the grid columns.\n\n**Syntax**: `none | <track-list> | <auto-track-list>`\n\n**Initial value**: `none`',
              type: ['string', 'number'],
            },
            msGridRows: {
              description:
                'The **`grid-template-rows`** CSS property defines the line names and track sizing functions of the grid rows.\n\n**Syntax**: `none | <track-list> | <auto-track-list>`\n\n**Initial value**: `none`',
              type: ['string', 'number'],
            },
            msHighContrastAdjust: {
              description:
                'The **`-ms-high-contrast-adjust`** CSS property is a Microsoft extension that gets or sets a value indicating whether to override any CSS properties that would have been set in high contrast mode.\n\n**Syntax**: `auto | none`\n\n**Initial value**: `auto`',
              enum: [
                '-moz-initial',
                'auto',
                'inherit',
                'initial',
                'none',
                'revert',
                'unset',
              ],
              type: 'string',
            },
            msHyphenateLimitChars: {
              description:
                'The **`-ms-hyphenate-limit-chars`** CSS property is a Microsoft extension that specifies one to three values indicating the minimum number of characters in a hyphenated word. If the word does not meet the required minimum number of characters in the word, before the hyphen, or after the hyphen, then the word is not hyphenated.\n\n**Syntax**: `auto | <integer>{1,3}`\n\n**Initial value**: `auto`',
              type: ['string', 'number'],
            },
            msHyphenateLimitLines: {
              description:
                'The **`-ms-hyphenate-limit-lines`** CSS property is a Microsoft extension specifying the maximum number of consecutive lines in an element that may be ended with a hyphenated word.\n\n**Syntax**: `no-limit | <integer>`\n\n**Initial value**: `no-limit`',
              anyOf: [
                {
                  enum: [
                    '-moz-initial',
                    'inherit',
                    'initial',
                    'no-limit',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                {
                  type: 'number',
                },
              ],
            },
            msHyphenateLimitZone: {
              description:
                'The `**-ms-hyphenate-limit-zone**` CSS property is a Microsoft extension specifying the width of the hyphenation zone.\n\n**Syntax**: `<percentage> | <length>`\n\n**Initial value**: `0`',
              type: ['string', 'number'],
            },
            msHyphens: {
              description:
                'The **`hyphens`** CSS property specifies how words should be hyphenated when text wraps across multiple lines. You can prevent hyphenation entirely, use hyphenation in manually-specified points within the text, or let the browser automatically insert hyphens where appropriate.\n\n**Syntax**: `none | manual | auto`\n\n**Initial value**: `manual`',
              enum: [
                '-moz-initial',
                'auto',
                'inherit',
                'initial',
                'manual',
                'none',
                'revert',
                'unset',
              ],
              type: 'string',
            },
            msImeAlign: {
              description:
                'The **`-ms-ime-align`** CSS property is a Microsoft extension aligning the Input Method Editor (IME) candidate window box relative to the element on which the IME composition is active. The extension is implemented in Microsoft Edge and Internet Explorer 11.\n\n**Syntax**: `auto | after`\n\n**Initial value**: `auto`',
              enum: [
                '-moz-initial',
                'after',
                'auto',
                'inherit',
                'initial',
                'revert',
                'unset',
              ],
              type: 'string',
            },
            msJustifySelf: {
              description:
                'The CSS **`justify-self`** property set the way a box is justified inside its alignment container along the appropriate axis.\n\n**Syntax**: `auto | normal | stretch | <baseline-position> | <overflow-position>? [ <self-position> | left | right ]`\n\n**Initial value**: `auto`',
              type: 'string',
            },
            msLineBreak: {
              description:
                'The **`line-break`** CSS property sets how to break lines of Chinese, Japanese, or Korean (CJK) text when working with punctuation and symbols.\n\n**Syntax**: `auto | loose | normal | strict | anywhere`\n\n**Initial value**: `auto`',
              enum: [
                '-moz-initial',
                'anywhere',
                'auto',
                'inherit',
                'initial',
                'loose',
                'normal',
                'revert',
                'strict',
                'unset',
              ],
              type: 'string',
            },
            msOrder: {
              description:
                'The **`order`** CSS property sets the order to lay out an item in a flex or grid container. Items in a container are sorted by ascending `order` value and then by their source code order.\n\n**Syntax**: `<integer>`\n\n**Initial value**: `0`',
              anyOf: [
                {
                  enum: [
                    '-moz-initial',
                    'inherit',
                    'initial',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                {
                  type: 'number',
                },
              ],
            },
            msOverflowStyle: {
              description:
                'The **`-ms-overflow-style`** CSS property is a Microsoft extension controlling the behavior of scrollbars when the content of an element overflows.\n\n**Syntax**: `auto | none | scrollbar | -ms-autohiding-scrollbar`\n\n**Initial value**: `auto`',
              enum: [
                '-moz-initial',
                '-ms-autohiding-scrollbar',
                'auto',
                'inherit',
                'initial',
                'none',
                'revert',
                'scrollbar',
                'unset',
              ],
              type: 'string',
            },
            msOverflowX: {
              description:
                "The **`overflow-x`** CSS property sets what shows when content overflows a block-level element's left and right edges. This may be nothing, a scroll bar, or the overflow content.\n\n**Syntax**: `visible | hidden | clip | scroll | auto`\n\n**Initial value**: `visible`",
              enum: [
                '-moz-hidden-unscrollable',
                '-moz-initial',
                'auto',
                'clip',
                'hidden',
                'inherit',
                'initial',
                'revert',
                'scroll',
                'unset',
                'visible',
              ],
              type: 'string',
            },
            msOverflowY: {
              description:
                "The **`overflow-y`** CSS property sets what shows when content overflows a block-level element's top and bottom edges. This may be nothing, a scroll bar, or the overflow content.\n\n**Syntax**: `visible | hidden | clip | scroll | auto`\n\n**Initial value**: `visible`",
              enum: [
                '-moz-hidden-unscrollable',
                '-moz-initial',
                'auto',
                'clip',
                'hidden',
                'inherit',
                'initial',
                'revert',
                'scroll',
                'unset',
                'visible',
              ],
              type: 'string',
            },
            msScrollChaining: {
              description:
                'The `**-ms-scroll-chaining**` CSS property is a Microsoft extension that specifies the scrolling behavior that occurs when a user hits the scroll limit during a manipulation.\n\n**Syntax**: `chained | none`\n\n**Initial value**: `chained`',
              enum: [
                '-moz-initial',
                'chained',
                'inherit',
                'initial',
                'none',
                'revert',
                'unset',
              ],
              type: 'string',
            },
            msScrollLimitXMax: {
              description:
                'The `**-ms-scroll-limit-x-max**` CSS property is a Microsoft extension that specifies the maximum value for the `Element.scrollLeft` property.\n\n**Syntax**: `auto | <length>`\n\n**Initial value**: `auto`',
              type: ['string', 'number'],
            },
            msScrollLimitXMin: {
              description:
                'The **`-ms-scroll-limit-x-min`** CSS property is a Microsoft extension that specifies the minimum value for the `Element.scrollLeft` property.\n\n**Syntax**: `<length>`\n\n**Initial value**: `0`',
              type: ['string', 'number'],
            },
            msScrollLimitYMax: {
              description:
                'The **`-ms-scroll-limit-y-max`** CSS property is a Microsoft extension that specifies the maximum value for the `Element.scrollTop` property.\n\n**Syntax**: `auto | <length>`\n\n**Initial value**: `auto`',
              type: ['string', 'number'],
            },
            msScrollLimitYMin: {
              description:
                'The **`-ms-scroll-limit-y-min`** CSS property is a Microsoft extension that specifies the minimum value for the `Element.scrollTop` property.\n\n**Syntax**: `<length>`\n\n**Initial value**: `0`',
              type: ['string', 'number'],
            },
            msScrollRails: {
              description:
                'The **`-ms-scroll-rails`** CSS property is a Microsoft extension that specifies whether scrolling locks to the primary axis of motion.\n\n**Syntax**: `none | railed`\n\n**Initial value**: `railed`',
              enum: [
                '-moz-initial',
                'inherit',
                'initial',
                'none',
                'railed',
                'revert',
                'unset',
              ],
              type: 'string',
            },
            msScrollSnapPointsX: {
              description:
                'The **`-ms-scroll-snap-points-x`** CSS property is a Microsoft extension that specifies where snap-points will be located along the x-axis.\n\n**Syntax**: `snapInterval( <length-percentage>, <length-percentage> ) | snapList( <length-percentage># )`\n\n**Initial value**: `snapInterval(0px, 100%)`',
              type: 'string',
            },
            msScrollSnapPointsY: {
              description:
                'The **`-ms-scroll-snap-points-y`** CSS property is a Microsoft extension that specifies where snap-points will be located along the y-axis.\n\n**Syntax**: `snapInterval( <length-percentage>, <length-percentage> ) | snapList( <length-percentage># )`\n\n**Initial value**: `snapInterval(0px, 100%)`',
              type: 'string',
            },
            msScrollSnapType: {
              description:
                'The **`scroll-snap-type`** CSS property sets how strictly snap points are enforced on the scroll container in case there is one.\n\n**Syntax**: `none | proximity | mandatory`\n\n**Initial value**: `none`',
              enum: [
                '-moz-initial',
                'inherit',
                'initial',
                'mandatory',
                'none',
                'proximity',
                'revert',
                'unset',
              ],
              type: 'string',
            },
            msScrollTranslation: {
              description:
                'The **`-ms-scroll-translation`** CSS property is a Microsoft extension that specifies whether vertical-to-horizontal scroll wheel translation occurs on the specified element.\n\n**Syntax**: `none | vertical-to-horizontal`\n\n**Initial value**: `none`',
              enum: [
                '-moz-initial',
                'inherit',
                'initial',
                'none',
                'revert',
                'unset',
                'vertical-to-horizontal',
              ],
              type: 'string',
            },
            msScrollbar3dlightColor: {
              description:
                'The **`-ms-scrollbar-3dlight-color`** CSS property is a Microsoft extension specifying the color of the top and left edges of the scroll box and scroll arrows of a scroll bar.\n\n**Syntax**: `<color>`\n\n**Initial value**: depends on user agent',
              type: 'string',
            },
            msScrollbarArrowColor: {
              description:
                'The **`-ms-scrollbar-arrow-color`** CSS property is a Microsoft extension that specifies the color of the arrow elements of a scroll arrow.\n\n**Syntax**: `<color>`\n\n**Initial value**: `ButtonText`',
              type: 'string',
            },
            msScrollbarBaseColor: {
              description:
                'The `**-ms-scrollbar-base-color**` CSS property is a Microsoft extension that specifies the base color of the main elements of a scroll bar.\n\n**Syntax**: `<color>`\n\n**Initial value**: depends on user agent',
              type: 'string',
            },
            msScrollbarDarkshadowColor: {
              description:
                "The **`-ms-scrollbar-darkshadow-color`** CSS property is a Microsoft extension that specifies the color of a scroll bar's gutter.\n\n**Syntax**: `<color>`\n\n**Initial value**: `ThreeDDarkShadow`",
              type: 'string',
            },
            msScrollbarFaceColor: {
              description:
                'The `**-ms-scrollbar-face-color**` CSS property is a Microsoft extension that specifies the color of the scroll box and scroll arrows of a scroll bar.\n\n**Syntax**: `<color>`\n\n**Initial value**: `ThreeDFace`',
              type: 'string',
            },
            msScrollbarHighlightColor: {
              description:
                'The `**-ms-scrollbar-highlight-color**` CSS property is a Microsoft extension that specifies the color of the slider tray, the top and left edges of the scroll box, and the scroll arrows of a scroll bar.\n\n**Syntax**: `<color>`\n\n**Initial value**: `ThreeDHighlight`',
              type: 'string',
            },
            msScrollbarShadowColor: {
              description:
                'The **`-ms-scrollbar-shadow-color`** CSS property is a Microsoft extension that specifies the color of the bottom and right edges of the scroll box and scroll arrows of a scroll bar.\n\n**Syntax**: `<color>`\n\n**Initial value**: `ThreeDDarkShadow`',
              type: 'string',
            },
            msTextAutospace: {
              description:
                'The **`-ms-text-autospace`** CSS property is a Microsoft extension that specifies the autospacing and narrow space width adjustment of text.\n\n**Syntax**: `none | ideograph-alpha | ideograph-numeric | ideograph-parenthesis | ideograph-space`\n\n**Initial value**: `none`',
              enum: [
                '-moz-initial',
                'ideograph-alpha',
                'ideograph-numeric',
                'ideograph-parenthesis',
                'ideograph-space',
                'inherit',
                'initial',
                'none',
                'revert',
                'unset',
              ],
              type: 'string',
            },
            msTextCombineHorizontal: {
              description:
                'The **`text-combine-upright`** CSS property sets the combination of characters into the space of a single character. If the combined text is wider than 1em, the user agent must fit the contents within 1em. The resulting composition is treated as a single upright glyph for layout and decoration. This property only has an effect in vertical writing modes.\n\n**Syntax**: `none | all | [ digits <integer>? ]`\n\n**Initial value**: `none`',
              type: 'string',
            },
            msTextOverflow: {
              description:
                "The **`text-overflow`** CSS property sets how hidden overflow content is signaled to users. It can be clipped, display an ellipsis ('`…`'), or display a custom string.\n\n**Syntax**: `[ clip | ellipsis | <string> ]{1,2}`\n\n**Initial value**: `clip`",
              type: 'string',
            },
            msTouchAction: {
              description:
                'The **`touch-action`** CSS property sets how a region can be manipulated by a touchscreen user (for example, by zooming features built into the browser).\n\n**Syntax**: `auto | none | [ [ pan-x | pan-left | pan-right ] || [ pan-y | pan-up | pan-down ] || pinch-zoom ] | manipulation`\n\n**Initial value**: `auto`',
              type: 'string',
            },
            msTouchSelect: {
              description:
                'The **`-ms-touch-select`** CSS property is a Microsoft extension that toggles the gripper visual elements that enable touch text selection.\n\n**Syntax**: `grippers | none`\n\n**Initial value**: `grippers`',
              enum: [
                '-moz-initial',
                'grippers',
                'inherit',
                'initial',
                'none',
                'revert',
                'unset',
              ],
              type: 'string',
            },
            msTransform: {
              description:
                'The **`transform`** CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.\n\n**Syntax**: `none | <transform-list>`\n\n**Initial value**: `none`',
              type: 'string',
            },
            msTransformOrigin: {
              description:
                "The **`transform-origin`** CSS property sets the origin for an element's transformations.\n\n**Syntax**: `[ <length-percentage> | left | center | right | top | bottom ] | [ [ <length-percentage> | left | center | right ] && [ <length-percentage> | top | center | bottom ] ] <length>?`\n\n**Initial value**: `50% 50% 0`",
              type: ['string', 'number'],
            },
            msTransitionDelay: {
              description:
                "The **`transition-delay`** CSS property specifies the duration to wait before starting a property's transition effect when its value changes.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`",
              type: 'string',
            },
            msTransitionDuration: {
              description:
                'The **`transition-duration`** CSS property sets the length of time a transition animation should take to complete. By default, the value is `0s`, meaning that no animation will occur.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`',
              type: 'string',
            },
            msTransitionProperty: {
              description:
                'The **`transition-property`** CSS property sets the CSS properties to which a transition effect should be applied.\n\n**Syntax**: `none | <single-transition-property>#`\n\n**Initial value**: all',
              type: 'string',
            },
            msTransitionTimingFunction: {
              description:
                'The **`transition-timing-function`** CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect.\n\n**Syntax**: `<timing-function>#`\n\n**Initial value**: `ease`',
              type: 'string',
            },
            msUserSelect: {
              description:
                "The `**user-select**` CSS property controls whether the user can select text. This doesn't have any effect on content loaded as chrome, except in textboxes.\n\n**Syntax**: `none | element | text`\n\n**Initial value**: `text`",
              enum: [
                '-moz-initial',
                'element',
                'inherit',
                'initial',
                'none',
                'revert',
                'text',
                'unset',
              ],
              type: 'string',
            },
            msWordBreak: {
              description:
                'The **`word-break`** CSS property sets whether line breaks appear wherever the text would otherwise overflow its content box.\n\n**Syntax**: `normal | break-all | keep-all | break-word`\n\n**Initial value**: `normal`',
              enum: [
                '-moz-initial',
                'break-all',
                'break-word',
                'inherit',
                'initial',
                'keep-all',
                'normal',
                'revert',
                'unset',
              ],
              type: 'string',
            },
            msWrapFlow: {
              description:
                'The **`-ms-wrap-flow`** CSS property is a Microsoft extension that specifies how exclusions impact inline content within block-level elements.\n\n**Syntax**: `auto | both | start | end | maximum | clear`\n\n**Initial value**: `auto`',
              enum: [
                '-moz-initial',
                'auto',
                'both',
                'clear',
                'end',
                'inherit',
                'initial',
                'maximum',
                'revert',
                'start',
                'unset',
              ],
              type: 'string',
            },
            msWrapMargin: {
              description:
                'The **`-ms-wrap-margin`** CSS property is a Microsoft extension that specifies a margin that offsets the inner wrap shape from other shapes.\n\n**Syntax**: `<length>`\n\n**Initial value**: `0`',
              type: ['string', 'number'],
            },
            msWrapThrough: {
              description:
                'The **`-ms-wrap-through`** CSS property is a Microsoft extension that specifies how content should wrap around an exclusion element.\n\n**Syntax**: `wrap | none`\n\n**Initial value**: `wrap`',
              enum: [
                '-moz-initial',
                'inherit',
                'initial',
                'none',
                'revert',
                'unset',
                'wrap',
              ],
              type: 'string',
            },
            msWritingMode: {
              description:
                'The **`writing-mode`** CSS property sets whether lines of text are laid out horizontally or vertically, as well as the direction in which blocks progress.\n\n**Syntax**: `horizontal-tb | vertical-rl | vertical-lr | sideways-rl | sideways-lr`\n\n**Initial value**: `horizontal-tb`',
              enum: [
                '-moz-initial',
                'horizontal-tb',
                'inherit',
                'initial',
                'revert',
                'sideways-lr',
                'sideways-rl',
                'unset',
                'vertical-lr',
                'vertical-rl',
              ],
              type: 'string',
            },
            OObjectFit: {
              description:
                'The **`object-fit`** CSS property sets how the content of a replaced element, such as an `<img>` or `<video>`, should be resized to fit its container.\n\n**Syntax**: `fill | contain | cover | none | scale-down`\n\n**Initial value**: `fill`',
              enum: [
                '-moz-initial',
                'contain',
                'cover',
                'fill',
                'inherit',
                'initial',
                'none',
                'revert',
                'scale-down',
                'unset',
              ],
              type: 'string',
            },
            OObjectPosition: {
              description:
                "The **`object-position`** CSS property specifies the alignment of the selected replaced element's contents within the element's box. Areas of the box which aren't covered by the replaced element's object will show the element's background.\n\n**Syntax**: `<position>`\n\n**Initial value**: `50% 50%`",
              type: ['string', 'number'],
            },
            OTabSize: {
              description:
                'The **`tab-size`** CSS property is used to customize the width of a tab (`U+0009`) character.\n\n**Syntax**: `<integer> | <length>`\n\n**Initial value**: `8`',
              type: ['string', 'number'],
            },
            OTextOverflow: {
              description:
                "The **`text-overflow`** CSS property sets how hidden overflow content is signaled to users. It can be clipped, display an ellipsis ('`…`'), or display a custom string.\n\n**Syntax**: `[ clip | ellipsis | <string> ]{1,2}`\n\n**Initial value**: `clip`",
              type: 'string',
            },
            OTransformOrigin: {
              description:
                "The **`transform-origin`** CSS property sets the origin for an element's transformations.\n\n**Syntax**: `[ <length-percentage> | left | center | right | top | bottom ] | [ [ <length-percentage> | left | center | right ] && [ <length-percentage> | top | center | bottom ] ] <length>?`\n\n**Initial value**: `50% 50% 0`",
              type: ['string', 'number'],
            },
            WebkitAlignContent: {
              description:
                'The CSS **`align-content`** property sets how the browser distributes space between and around content items along the cross-axis of a flexbox container, and the main-axis of a grid container.\n\n**Syntax**: `normal | <baseline-position> | <content-distribution> | <overflow-position>? <content-position>`\n\n**Initial value**: `normal`',
              type: 'string',
            },
            WebkitAlignItems: {
              description:
                'The CSS **`align-items`** property sets the `align-self` value on all direct children as a group. The align-self property sets the alignment of an item within its containing block. In Flexbox it controls the alignment of items on the Cross Axis, in Grid Layout it controls the alignment of items on the Block Axis within their grid area.\n\n**Syntax**: `normal | stretch | <baseline-position> | [ <overflow-position>? <self-position> ]`\n\n**Initial value**: `normal`',
              type: 'string',
            },
            WebkitAlignSelf: {
              description:
                "The **`align-self`** CSS property aligns flex items of the current flex line overriding the `align-items` value. If any of the item's cross-axis margin is set to `auto`, then `align-self` is ignored. In Grid layout `align-self` aligns the item inside the grid area.\n\n**Syntax**: `auto | normal | stretch | <baseline-position> | <overflow-position>? <self-position>`\n\n**Initial value**: `auto`",
              type: 'string',
            },
            WebkitAnimationDelay: {
              description:
                'The **`animation-delay`** CSS property sets when an animation starts. The animation can start later, immediately from its beginning, or immediately and partway through the animation.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`',
              type: 'string',
            },
            WebkitAnimationDirection: {
              description:
                'The **`animation-direction`** CSS property sets whether an animation should play forwards, backwards, or alternating back and forth.\n\n**Syntax**: `<single-animation-direction>#`\n\n**Initial value**: `normal`',
              type: 'string',
            },
            WebkitAnimationDuration: {
              description:
                'The **`animation-duration`** CSS property sets the length of time that an animation takes to complete one cycle.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`',
              type: 'string',
            },
            WebkitAnimationFillMode: {
              description:
                'The **`animation-fill-mode`** CSS property sets how a CSS animation applies styles to its target before and after its execution.\n\n**Syntax**: `<single-animation-fill-mode>#`\n\n**Initial value**: `none`',
              type: 'string',
            },
            WebkitAnimationIterationCount: {
              description:
                'The **`animation-iteration-count`** CSS property sets the number of times an animation cycle should be played before stopping.\n\n**Syntax**: `<single-animation-iteration-count>#`\n\n**Initial value**: `1`',
              type: ['string', 'number'],
            },
            WebkitAnimationName: {
              description:
                'The **`animation-name`** CSS property sets one or more animations to apply to an element. Each name is an `@keyframes` at-rule that sets the property values for the animation sequence.\n\n**Syntax**: `[ none | <keyframes-name> ]#`\n\n**Initial value**: `none`',
              type: 'string',
            },
            WebkitAnimationPlayState: {
              description:
                'The **`animation-play-state`** CSS property sets whether an animation is running or paused.\n\n**Syntax**: `<single-animation-play-state>#`\n\n**Initial value**: `running`',
              type: 'string',
            },
            WebkitAnimationTimingFunction: {
              description:
                'The `**animation-timing-function**` CSS property sets how an animation progresses through the duration of each cycle.\n\n**Syntax**: `<timing-function>#`\n\n**Initial value**: `ease`',
              type: 'string',
            },
            WebkitAppearance: {
              description:
                "The **`-moz-appearance`** CSS property is used in Gecko (Firefox) to display an element using platform-native styling based on the operating system's theme.\n\n**Syntax**: `none | button | button-bevel | caret | checkbox | default-button | inner-spin-button | listbox | listitem | media-controls-background | media-controls-fullscreen-background | media-current-time-display | media-enter-fullscreen-button | media-exit-fullscreen-button | media-fullscreen-button | media-mute-button | media-overlay-play-button | media-play-button | media-seek-back-button | media-seek-forward-button | media-slider | media-sliderthumb | media-time-remaining-display | media-toggle-closed-captions-button | media-volume-slider | media-volume-slider-container | media-volume-sliderthumb | menulist | menulist-button | menulist-text | menulist-textfield | meter | progress-bar | progress-bar-value | push-button | radio | searchfield | searchfield-cancel-button | searchfield-decoration | searchfield-results-button | searchfield-results-decoration | slider-horizontal | slider-vertical | sliderthumb-horizontal | sliderthumb-vertical | square-button | textarea | textfield | -apple-pay-button`\n\n**Initial value**: `none` (but this value is overridden in the user agent CSS)",
              enum: [
                '-apple-pay-button',
                '-moz-initial',
                'button',
                'button-bevel',
                'caret',
                'checkbox',
                'default-button',
                'inherit',
                'initial',
                'inner-spin-button',
                'listbox',
                'listitem',
                'media-controls-background',
                'media-controls-fullscreen-background',
                'media-current-time-display',
                'media-enter-fullscreen-button',
                'media-exit-fullscreen-button',
                'media-fullscreen-button',
                'media-mute-button',
                'media-overlay-play-button',
                'media-play-button',
                'media-seek-back-button',
                'media-seek-forward-button',
                'media-slider',
                'media-sliderthumb',
                'media-time-remaining-display',
                'media-toggle-closed-captions-button',
                'media-volume-slider',
                'media-volume-slider-container',
                'media-volume-sliderthumb',
                'menulist',
                'menulist-button',
                'menulist-text',
                'menulist-textfield',
                'meter',
                'none',
                'progress-bar',
                'progress-bar-value',
                'push-button',
                'radio',
                'revert',
                'searchfield',
                'searchfield-cancel-button',
                'searchfield-decoration',
                'searchfield-results-button',
                'searchfield-results-decoration',
                'slider-horizontal',
                'slider-vertical',
                'sliderthumb-horizontal',
                'sliderthumb-vertical',
                'square-button',
                'textarea',
                'textfield',
                'unset',
              ],
              type: 'string',
            },
            WebkitBackdropFilter: {
              description:
                'The **`backdrop-filter`** CSS property lets you apply graphical effects such as blurring or color shifting to the area behind an element. Because it applies to everything _behind_ the element, to see the effect you must make the element or its background at least partially transparent.\n\n**Syntax**: `none | <filter-function-list>`\n\n**Initial value**: `none`',
              type: 'string',
            },
            WebkitBackfaceVisibility: {
              description:
                'The **`backface-visibility`** CSS property sets whether the back face of an element is visible when turned towards the user.\n\n**Syntax**: `visible | hidden`\n\n**Initial value**: `visible`',
              enum: [
                '-moz-initial',
                'hidden',
                'inherit',
                'initial',
                'revert',
                'unset',
                'visible',
              ],
              type: 'string',
            },
            WebkitBackgroundClip: {
              description:
                "The **`background-clip`** CSS property sets whether an element's background `<color>` or `<image>` extends underneath its border.\n\n**Syntax**: `<box>#`\n\n**Initial value**: `border-box`",
              type: 'string',
            },
            WebkitBackgroundOrigin: {
              description:
                'The **`background-origin`** CSS property sets the _background positioning area_. In other words, it sets the origin position of an image set with the `background-image` property.\n\n**Syntax**: `<box>#`\n\n**Initial value**: `padding-box`',
              type: 'string',
            },
            WebkitBackgroundSize: {
              description:
                "The **`background-size`** CSS property sets the size of the element's background image. The image can be left to its natural size, stretched, or constrained to fit the available space.\n\n**Syntax**: `<bg-size>#`\n\n**Initial value**: `auto auto`",
              type: ['string', 'number'],
            },
            WebkitBorderBeforeColor: {
              description:
                "**Syntax**: `<'color'>`\n\n**Initial value**: `currentcolor`",
              type: 'string',
            },
            WebkitBorderBeforeStyle: {
              description:
                "**Syntax**: `<'border-style'>`\n\n**Initial value**: `none`",
              type: 'string',
            },
            WebkitBorderBeforeWidth: {
              description:
                "**Syntax**: `<'border-width'>`\n\n**Initial value**: `medium`",
              type: ['string', 'number'],
            },
            WebkitBorderBottomLeftRadius: {
              description:
                'The **`border-bottom-left-radius`** CSS property rounds the bottom-left corner of an element.\n\n**Syntax**: `<length-percentage>{1,2}`\n\n**Initial value**: `0`',
              type: ['string', 'number'],
            },
            WebkitBorderBottomRightRadius: {
              description:
                'The **`border-bottom-right-radius`** CSS property rounds the bottom-right corner of an element.\n\n**Syntax**: `<length-percentage>{1,2}`\n\n**Initial value**: `0`',
              type: ['string', 'number'],
            },
            WebkitBorderImageSlice: {
              description:
                "The **`border-image-slice`** CSS property divides the image specified by `border-image-source` into regions. These regions form the components of an element's border image.\n\n**Syntax**: `<number-percentage>{1,4} && fill?`\n\n**Initial value**: `100%`",
              type: ['string', 'number'],
            },
            WebkitBorderTopLeftRadius: {
              description:
                'The **`border-top-left-radius`** CSS property rounds the top-left corner of an element.\n\n**Syntax**: `<length-percentage>{1,2}`\n\n**Initial value**: `0`',
              type: ['string', 'number'],
            },
            WebkitBorderTopRightRadius: {
              description:
                'The **`border-top-right-radius`** CSS property rounds the top-right corner of an element.\n\n**Syntax**: `<length-percentage>{1,2}`\n\n**Initial value**: `0`',
              type: ['string', 'number'],
            },
            WebkitBoxDecorationBreak: {
              description:
                "The **`box-decoration-break`** CSS property specifies how an element's fragments should be rendered when broken across multiple lines, columns, or pages.\n\n**Syntax**: `slice | clone`\n\n**Initial value**: `slice`",
              enum: [
                '-moz-initial',
                'clone',
                'inherit',
                'initial',
                'revert',
                'slice',
                'unset',
              ],
              type: 'string',
            },
            WebkitBoxReflect: {
              description:
                'The **`-webkit-box-reflect`** CSS property lets you reflect the content of an element in one specific direction.\n\n**Syntax**: `[ above | below | right | left ]? <length>? <image>?`\n\n**Initial value**: `none`',
              type: ['string', 'number'],
            },
            WebkitBoxShadow: {
              description:
                "The **`box-shadow`** CSS property adds shadow effects around an element's frame. You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radii, and color.\n\n**Syntax**: `none | <shadow>#`\n\n**Initial value**: `none`",
              type: 'string',
            },
            WebkitBoxSizing: {
              description:
                'The **`box-sizing`** CSS property defines how the user agent should calculate the total width and height of an element.\n\n**Syntax**: `content-box | border-box`\n\n**Initial value**: `content-box`',
              enum: [
                '-moz-initial',
                'border-box',
                'content-box',
                'inherit',
                'initial',
                'revert',
                'unset',
              ],
              type: 'string',
            },
            WebkitClipPath: {
              description:
                'The `**clip-path**` CSS property creates a clipping region that sets what part of an element should be shown. Parts that are inside the region are shown, while those outside are hidden.\n\n**Syntax**: `<clip-source> | [ <basic-shape> || <geometry-box> ] | none`\n\n**Initial value**: `none`',
              type: 'string',
            },
            WebkitColumnCount: {
              description:
                "The **`column-count`** CSS property breaks an element's content into the specified number of columns.\n\n**Syntax**: `<integer> | auto`\n\n**Initial value**: `auto`",
              anyOf: [
                {
                  enum: [
                    '-moz-initial',
                    'auto',
                    'inherit',
                    'initial',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                {
                  type: 'number',
                },
              ],
            },
            WebkitColumnFill: {
              description:
                "The **`column-fill`** CSS property controls how an element's contents are balanced when broken into columns.\n\n**Syntax**: `auto | balance | balance-all`\n\n**Initial value**: `balance`",
              enum: [
                '-moz-initial',
                'auto',
                'balance',
                'inherit',
                'initial',
                'revert',
                'unset',
              ],
              type: 'string',
            },
            WebkitColumnGap: {
              description:
                "The **`column-gap`** CSS property sets the size of the gap (gutter) between an element's columns.\n\n**Syntax**: `normal | <length-percentage>`\n\n**Initial value**: `normal`",
              type: ['string', 'number'],
            },
            WebkitColumnRuleColor: {
              description:
                'The **`column-rule-color`** CSS property sets the color of the rule (line) drawn between columns in a multi-column layout.\n\n**Syntax**: `<color>`\n\n**Initial value**: `currentcolor`',
              type: 'string',
            },
            WebkitColumnRuleStyle: {
              description:
                "The **`column-rule-style`** CSS property sets the style of the line drawn between columns in a multi-column layout.\n\n**Syntax**: `<'border-style'>`\n\n**Initial value**: `none`",
              type: 'string',
            },
            WebkitColumnRuleWidth: {
              description:
                "The **`column-rule-width`** CSS property sets the width of the rule (line) drawn between columns in a multi-column layout.\n\n**Syntax**: `<'border-width'>`\n\n**Initial value**: `medium`",
              type: ['string', 'number'],
            },
            WebkitColumnSpan: {
              description:
                'The **`column-span`** CSS property makes it possible for an element to span across all columns when its value is set to `all`.\n\n**Syntax**: `none | all`\n\n**Initial value**: `none`',
              enum: [
                '-moz-initial',
                'all',
                'inherit',
                'initial',
                'none',
                'revert',
                'unset',
              ],
              type: 'string',
            },
            WebkitColumnWidth: {
              description:
                "The **`column-width`** CSS property specifies the ideal column width in a multi-column layout. The container will have as many columns as can fit without any of them having a width less than the `column-width` value. If the width of the container is narrower than the specified value, the single column's width will be smaller than the declared column width.\n\n**Syntax**: `<length> | auto`\n\n**Initial value**: `auto`",
              type: ['string', 'number'],
            },
            WebkitFilter: {
              description:
                'The **`filter`** CSS property applies graphical effects like blur or color shift to an element. Filters are commonly used to adjust the rendering of images, backgrounds, and borders.\n\n**Syntax**: `none | <filter-function-list>`\n\n**Initial value**: `none`',
              type: 'string',
            },
            WebkitFlexBasis: {
              description:
                "The **`flex-basis`** CSS property sets the initial main size of a flex item. It sets the size of the content box unless otherwise set with `box-sizing`.\n\n**Syntax**: `content | <'width'>`\n\n**Initial value**: `auto`",
              type: ['string', 'number'],
            },
            WebkitFlexDirection: {
              description:
                'The **`flex-direction`** CSS property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).\n\n**Syntax**: `row | row-reverse | column | column-reverse`\n\n**Initial value**: `row`',
              enum: [
                '-moz-initial',
                'column',
                'column-reverse',
                'inherit',
                'initial',
                'revert',
                'row',
                'row-reverse',
                'unset',
              ],
              type: 'string',
            },
            WebkitFlexGrow: {
              description:
                'The **`flex-grow`** CSS property sets how much of the available space in the flex container should be assigned to that item (the flex grow factor). If all sibling items have the same flex grow factor, then all items will receive the same share of available space, otherwise it is distributed according to the ratio defined by the different flex grow factors.\n\n**Syntax**: `<number>`\n\n**Initial value**: `0`',
              anyOf: [
                {
                  enum: [
                    '-moz-initial',
                    'inherit',
                    'initial',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                {
                  type: 'number',
                },
              ],
            },
            WebkitFlexShrink: {
              description:
                'The **`flex-shrink`** CSS property sets the flex shrink factor of a flex item. If the size of flex items is larger than the flex container, items shrink to fit according to `flex-shrink`.\n\n**Syntax**: `<number>`\n\n**Initial value**: `1`',
              anyOf: [
                {
                  enum: [
                    '-moz-initial',
                    'inherit',
                    'initial',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                {
                  type: 'number',
                },
              ],
            },
            WebkitFlexWrap: {
              description:
                'The **`flex-wrap`** CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked.\n\n**Syntax**: `nowrap | wrap | wrap-reverse`\n\n**Initial value**: `nowrap`',
              enum: [
                '-moz-initial',
                'inherit',
                'initial',
                'nowrap',
                'revert',
                'unset',
                'wrap',
                'wrap-reverse',
              ],
              type: 'string',
            },
            WebkitFontFeatureSettings: {
              description:
                'The **`font-feature-settings`** CSS property controls advanced typographic features in OpenType fonts.\n\n**Syntax**: `normal | <feature-tag-value>#`\n\n**Initial value**: `normal`',
              type: 'string',
            },
            WebkitFontKerning: {
              description:
                'The **`font-kerning`** CSS property sets the use of the kerning information stored in a font.\n\n**Syntax**: `auto | normal | none`\n\n**Initial value**: `auto`',
              enum: [
                '-moz-initial',
                'auto',
                'inherit',
                'initial',
                'none',
                'normal',
                'revert',
                'unset',
              ],
              type: 'string',
            },
            WebkitFontSmoothing: {
              description:
                'The **`font-smooth`** CSS property controls the application of anti-aliasing when fonts are rendered.\n\n**Syntax**: `auto | never | always | <absolute-size> | <length>`\n\n**Initial value**: `auto`',
              type: ['string', 'number'],
            },
            WebkitFontVariantLigatures: {
              description:
                'The **`font-variant-ligatures`** CSS property controls which ligatures and contextual forms are used in textual content of the elements it applies to. This leads to more harmonized forms in the resulting text.\n\n**Syntax**: `normal | none | [ <common-lig-values> || <discretionary-lig-values> || <historical-lig-values> || <contextual-alt-values> ]`\n\n**Initial value**: `normal`',
              type: 'string',
            },
            WebkitHyphens: {
              description:
                'The **`hyphens`** CSS property specifies how words should be hyphenated when text wraps across multiple lines. You can prevent hyphenation entirely, use hyphenation in manually-specified points within the text, or let the browser automatically insert hyphens where appropriate.\n\n**Syntax**: `none | manual | auto`\n\n**Initial value**: `manual`',
              enum: [
                '-moz-initial',
                'auto',
                'inherit',
                'initial',
                'manual',
                'none',
                'revert',
                'unset',
              ],
              type: 'string',
            },
            WebkitJustifyContent: {
              description:
                'The CSS **`justify-content`** property defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container.\n\n**Syntax**: `normal | <content-distribution> | <overflow-position>? [ <content-position> | left | right ]`\n\n**Initial value**: `normal`',
              type: 'string',
            },
            WebkitLineBreak: {
              description:
                'The **`line-break`** CSS property sets how to break lines of Chinese, Japanese, or Korean (CJK) text when working with punctuation and symbols.\n\n**Syntax**: `auto | loose | normal | strict | anywhere`\n\n**Initial value**: `auto`',
              enum: [
                '-moz-initial',
                'anywhere',
                'auto',
                'inherit',
                'initial',
                'loose',
                'normal',
                'revert',
                'strict',
                'unset',
              ],
              type: 'string',
            },
            WebkitLineClamp: {
              description:
                'The **`-webkit-line-clamp`** CSS property allows limiting of the contents of a block container to the specified number of lines.\n\n**Syntax**: `none | <integer>`\n\n**Initial value**: `none`',
              anyOf: [
                {
                  enum: [
                    '-moz-initial',
                    'inherit',
                    'initial',
                    'none',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                {
                  type: 'number',
                },
              ],
            },
            WebkitMarginEnd: {
              description:
                "The **`margin-inline-end`** CSS property defines the logical inline end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. In other words, it corresponds to the `margin-top`, `margin-right`, `margin-bottom` or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'margin-left'>`\n\n**Initial value**: `0`",
              type: ['string', 'number'],
            },
            WebkitMarginStart: {
              description:
                "The **`margin-inline-start`** CSS property defines the logical inline start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. It corresponds to the `margin-top`, `margin-right`, `margin-bottom`, or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'margin-left'>`\n\n**Initial value**: `0`",
              type: ['string', 'number'],
            },
            WebkitMaskAttachment: {
              description:
                "If a `-webkit-mask-image` is specified, `-webkit-mask-attachment` determines whether the mask image's position is fixed within the viewport, or scrolls along with its containing block.\n\n**Syntax**: `<attachment>#`\n\n**Initial value**: `scroll`",
              type: 'string',
            },
            WebkitMaskClip: {
              description:
                'The **`mask-clip`** CSS property determines the area, which is affected by a mask. The painted content of an element must be restricted to this area.\n\n**Syntax**: `[ <box> | border | padding | content | text ]#`\n\n**Initial value**: `border`',
              type: 'string',
            },
            WebkitMaskComposite: {
              description:
                'The **`-webkit-mask-composite`** property specifies the manner in which multiple mask images applied to the same element are composited with one another. Mask images are composited in the opposite order that they are declared with the `-webkit-mask-image` property.\n\n**Syntax**: `<composite-style>#`\n\n**Initial value**: `source-over`',
              type: 'string',
            },
            WebkitMaskImage: {
              description:
                'The **`mask-image`** CSS property sets the image that is used as mask layer for an element.\n\n**Syntax**: `<mask-reference>#`\n\n**Initial value**: `none`',
              type: 'string',
            },
            WebkitMaskOrigin: {
              description:
                'The **`mask-origin`** CSS property sets the origin of a mask.\n\n**Syntax**: `[ <box> | border | padding | content ]#`\n\n**Initial value**: `padding`',
              type: 'string',
            },
            WebkitMaskPosition: {
              description:
                'The **`mask-position`** CSS property sets the initial position, relative to the mask position layer set by `mask-origin`, for each defined mask image.\n\n**Syntax**: `<position>#`\n\n**Initial value**: `0% 0%`',
              type: ['string', 'number'],
            },
            WebkitMaskPositionX: {
              description:
                'The `-webkit-mask-position-x` CSS property sets the initial horizontal position of a mask image.\n\n**Syntax**: `[ <length-percentage> | left | center | right ]#`\n\n**Initial value**: `0%`',
              type: ['string', 'number'],
            },
            WebkitMaskPositionY: {
              description:
                'The `-webkit-mask-position-y` CSS property sets the initial vertical position of a mask image.\n\n**Syntax**: `[ <length-percentage> | top | center | bottom ]#`\n\n**Initial value**: `0%`',
              type: ['string', 'number'],
            },
            WebkitMaskRepeat: {
              description:
                'The **`mask-repeat`** CSS property sets how mask images are repeated. A mask image can be repeated along the horizontal axis, the vertical axis, both axes, or not repeated at all.\n\n**Syntax**: `<repeat-style>#`\n\n**Initial value**: `repeat`',
              type: 'string',
            },
            WebkitMaskRepeatX: {
              description:
                'The `-webkit-mask-repeat-x` property specifies whether and how a mask image is repeated (tiled) horizontally.\n\n**Syntax**: `repeat | no-repeat | space | round`\n\n**Initial value**: `repeat`',
              enum: [
                '-moz-initial',
                'inherit',
                'initial',
                'no-repeat',
                'repeat',
                'revert',
                'round',
                'space',
                'unset',
              ],
              type: 'string',
            },
            WebkitMaskRepeatY: {
              description:
                'The `-webkit-mask-repeat-y` property sets whether and how a mask image is repeated (tiled) vertically.\n\n**Syntax**: `repeat | no-repeat | space | round`\n\n**Initial value**: `repeat`',
              enum: [
                '-moz-initial',
                'inherit',
                'initial',
                'no-repeat',
                'repeat',
                'revert',
                'round',
                'space',
                'unset',
              ],
              type: 'string',
            },
            WebkitMaskSize: {
              description:
                'The **`mask-size`** CSS property specifies the sizes of the mask images. The size of the image can be fully or partially constrained in order to preserve its intrinsic ratio.\n\n**Syntax**: `<bg-size>#`\n\n**Initial value**: `auto auto`',
              type: ['string', 'number'],
            },
            WebkitMaxInlineSize: {
              description:
                "The **`max-inline-size`** CSS property defines the horizontal or vertical maximum size of an element's block depending on its writing mode. It corresponds to the `max-width` or the `max-height` property depending on the value defined for `writing-mode`. If the writing mode is vertically oriented, the value of `max-inline-size` relates to the maximal height of the element, otherwise it relates to the maximal width of the element. It relates to `max-block-size`, which defines the other dimension of the element.\n\n**Syntax**: `<'max-width'>`\n\n**Initial value**: `0`",
              type: ['string', 'number'],
            },
            WebkitOrder: {
              description:
                'The **`order`** CSS property sets the order to lay out an item in a flex or grid container. Items in a container are sorted by ascending `order` value and then by their source code order.\n\n**Syntax**: `<integer>`\n\n**Initial value**: `0`',
              anyOf: [
                {
                  enum: [
                    '-moz-initial',
                    'inherit',
                    'initial',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                {
                  type: 'number',
                },
              ],
            },
            WebkitOverflowScrolling: {
              description:
                'The `-webkit-overflow-scrolling` CSS property controls whether or not touch devices use momentum-based scrolling for a given element.\n\n**Syntax**: `auto | touch`\n\n**Initial value**: `auto`',
              enum: [
                '-moz-initial',
                'auto',
                'inherit',
                'initial',
                'revert',
                'touch',
                'unset',
              ],
              type: 'string',
            },
            WebkitPaddingEnd: {
              description:
                "The **`padding-inline-end`** CSS property defines the logical inline end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation. It corresponds to the `padding-top`, `padding-right`, `padding-bottom`, or `padding-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'padding-left'>`\n\n**Initial value**: `0`",
              type: ['string', 'number'],
            },
            WebkitPaddingStart: {
              description:
                "The **`padding-inline-start`** CSS property defines the logical inline start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation. It corresponds to the `padding-top`, `padding-right`, `padding-bottom`, or `padding-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'padding-left'>`\n\n**Initial value**: `0`",
              type: ['string', 'number'],
            },
            WebkitPerspective: {
              description:
                'The **`perspective`** CSS property determines the distance between the z=0 plane and the user in order to give a 3D-positioned element some perspective. Each 3D element with z>0 becomes larger; each 3D-element with z<0 becomes smaller. The strength of the effect is determined by the value of this property.\n\n**Syntax**: `none | <length>`\n\n**Initial value**: `none`',
              type: ['string', 'number'],
            },
            WebkitPerspectiveOrigin: {
              description:
                'The **`perspective-origin`** CSS property determines the position at which the viewer is looking. It is used as the _vanishing point_ by the `perspective` property.\n\n**Syntax**: `<position>`\n\n**Initial value**: `50% 50%`',
              type: ['string', 'number'],
            },
            WebkitPrintColorAdjust: {
              description:
                "The **`color-adjust`** CSS property sets what, if anything, the user agent may do to optimize the appearance of the element on the output device. By default, the browser is allowed to make any adjustments to the element's appearance it determines to be necessary and prudent given the type and capabilities of the output device.\n\n**Syntax**: `economy | exact`\n\n**Initial value**: `economy`",
              enum: [
                '-moz-initial',
                'economy',
                'exact',
                'inherit',
                'initial',
                'revert',
                'unset',
              ],
              type: 'string',
            },
            WebkitRubyPosition: {
              description:
                'The `**ruby-position**` CSS property defines the position of a ruby element relatives to its base element. It can be position over the element (`over`), under it (`under`), or between the characters, on their right side (`inter-character`).\n\n**Syntax**: `over | under | inter-character`\n\n**Initial value**: `over`',
              enum: [
                '-moz-initial',
                'inherit',
                'initial',
                'over',
                'revert',
                'under',
                'unset',
              ],
              type: 'string',
            },
            WebkitScrollSnapType: {
              description:
                'The **`scroll-snap-type`** CSS property sets how strictly snap points are enforced on the scroll container in case there is one.\n\n**Syntax**: `none | [ x | y | block | inline | both ] [ mandatory | proximity ]?`\n\n**Initial value**: `none`',
              type: 'string',
            },
            WebkitShapeMargin: {
              description:
                'The **`shape-margin`** CSS property sets a margin for a CSS shape created using `shape-outside`.\n\n**Syntax**: `<length-percentage>`\n\n**Initial value**: `0`',
              type: ['string', 'number'],
            },
            WebkitTapHighlightColor: {
              description:
                "**`-webkit-tap-highlight-color`** is a non-standard CSS property that sets the color of the highlight that appears over a link while it's being tapped. The highlighting indicates to the user that their tap is being successfully recognized, and indicates which element they're tapping on.\n\n**Syntax**: `<color>`\n\n**Initial value**: `black`",
              type: 'string',
            },
            WebkitTextCombine: {
              description:
                'The **`text-combine-upright`** CSS property sets the combination of characters into the space of a single character. If the combined text is wider than 1em, the user agent must fit the contents within 1em. The resulting composition is treated as a single upright glyph for layout and decoration. This property only has an effect in vertical writing modes.\n\n**Syntax**: `none | all | [ digits <integer>? ]`\n\n**Initial value**: `none`',
              type: 'string',
            },
            WebkitTextDecorationColor: {
              description:
                'The **`text-decoration-color`** CSS property sets the color of decorations added to text by `text-decoration-line`.\n\n**Syntax**: `<color>`\n\n**Initial value**: `currentcolor`',
              type: 'string',
            },
            WebkitTextDecorationLine: {
              description:
                'The **`text-decoration-line`** CSS property sets the kind of decoration that is used on text in an element, such as an underline or overline.\n\n**Syntax**: `none | [ underline || overline || line-through || blink ] | spelling-error | grammar-error`\n\n**Initial value**: `none`',
              type: 'string',
            },
            WebkitTextDecorationSkip: {
              description:
                'The **`text-decoration-skip`** CSS property sets what parts of an element’s content any text decoration affecting the element must skip over. It controls all text decoration lines drawn by the element and also any text decoration lines drawn by its ancestors.\n\n**Syntax**: `none | [ objects || [ spaces | [ leading-spaces || trailing-spaces ] ] || edges || box-decoration ]`\n\n**Initial value**: `objects`',
              type: 'string',
            },
            WebkitTextDecorationStyle: {
              description:
                'The **`text-decoration-style`** CSS property sets the style of the lines specified by `text-decoration-line`. The style applies to all lines that are set with `text-decoration-line`.\n\n**Syntax**: `solid | double | dotted | dashed | wavy`\n\n**Initial value**: `solid`',
              enum: [
                '-moz-initial',
                'dashed',
                'dotted',
                'double',
                'inherit',
                'initial',
                'revert',
                'solid',
                'unset',
                'wavy',
              ],
              type: 'string',
            },
            WebkitTextEmphasisColor: {
              description:
                'The **`text-emphasis-color`** CSS property sets the color of emphasis marks. This value can also be set using the `text-emphasis` shorthand.\n\n**Syntax**: `<color>`\n\n**Initial value**: `currentcolor`',
              type: 'string',
            },
            WebkitTextEmphasisPosition: {
              description:
                "The **`text-emphasis-position`** CSS property sets where emphasis marks are drawn. Like ruby text, if there isn't enough room for emphasis marks, the line height is increased.\n\n**Syntax**: `[ over | under ] && [ right | left ]`\n\n**Initial value**: `over right`",
              type: 'string',
            },
            WebkitTextEmphasisStyle: {
              description:
                'The **`text-emphasis-style`** CSS property sets the appearance of emphasis marks. It can also be set, and reset, using the `text-emphasis` shorthand.\n\n**Syntax**: `none | [ [ filled | open ] || [ dot | circle | double-circle | triangle | sesame ] ] | <string>`\n\n**Initial value**: `none`',
              type: 'string',
            },
            WebkitTextFillColor: {
              description:
                'The **`-webkit-text-fill-color`** CSS property specifies the fill color of characters of text. If this property is not set, the value of the `color` property is used.\n\n**Syntax**: `<color>`\n\n**Initial value**: `currentcolor`',
              type: 'string',
            },
            WebkitTextOrientation: {
              description:
                'The **`text-orientation`** CSS property sets the orientation of the text characters in a line. It only affects text in vertical mode (when `writing-mode` is not `horizontal-tb`). It is useful for controlling the display of languages that use vertical script, and also for making vertical table headers.\n\n**Syntax**: `mixed | upright | sideways`\n\n**Initial value**: `mixed`',
              enum: [
                '-moz-initial',
                'inherit',
                'initial',
                'mixed',
                'revert',
                'sideways',
                'unset',
                'upright',
              ],
              type: 'string',
            },
            WebkitTextSizeAdjust: {
              description:
                'The **`text-size-adjust`** CSS property controls the text inflation algorithm used on some smartphones and tablets. Other browsers will ignore this property.\n\n**Syntax**: `none | auto | <percentage>`\n\n**Initial value**: `auto` for smartphone browsers supporting inflation, `none` in other cases (and then not modifiable).',
              type: 'string',
            },
            WebkitTextStrokeColor: {
              description:
                'The **`-webkit-text-stroke-color`** CSS property specifies the stroke color of characters of text. If this property is not set, the value of the `color` property is used.\n\n**Syntax**: `<color>`\n\n**Initial value**: `currentcolor`',
              type: 'string',
            },
            WebkitTextStrokeWidth: {
              description:
                'The **`-webkit-text-stroke-width`** CSS property specifies the width of the stroke for text.\n\n**Syntax**: `<length>`\n\n**Initial value**: `0`',
              type: ['string', 'number'],
            },
            WebkitTextUnderlinePosition: {
              description:
                "The **`text-underline-position`** CSS property specifies the position of the underline which is set using the `text-decoration` property's `underline` value.\n\n**Syntax**: `auto | from-font | [ under || [ left | right ] ]`\n\n**Initial value**: `auto`",
              type: 'string',
            },
            WebkitTouchCallout: {
              description:
                'The `-webkit-touch-callout` CSS property controls the display of the default callout shown when you touch and hold a touch target.\n\n**Syntax**: `default | none`\n\n**Initial value**: `default`',
              enum: [
                '-moz-initial',
                'default',
                'inherit',
                'initial',
                'none',
                'revert',
                'unset',
              ],
              type: 'string',
            },
            WebkitTransform: {
              description:
                'The **`transform`** CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.\n\n**Syntax**: `none | <transform-list>`\n\n**Initial value**: `none`',
              type: 'string',
            },
            WebkitTransformOrigin: {
              description:
                "The **`transform-origin`** CSS property sets the origin for an element's transformations.\n\n**Syntax**: `[ <length-percentage> | left | center | right | top | bottom ] | [ [ <length-percentage> | left | center | right ] && [ <length-percentage> | top | center | bottom ] ] <length>?`\n\n**Initial value**: `50% 50% 0`",
              type: ['string', 'number'],
            },
            WebkitTransformStyle: {
              description:
                'The **`transform-style`** CSS property sets whether children of an element are positioned in the 3D space or are flattened in the plane of the element.\n\n**Syntax**: `flat | preserve-3d`\n\n**Initial value**: `flat`',
              enum: [
                '-moz-initial',
                'flat',
                'inherit',
                'initial',
                'preserve-3d',
                'revert',
                'unset',
              ],
              type: 'string',
            },
            WebkitTransitionDelay: {
              description:
                "The **`transition-delay`** CSS property specifies the duration to wait before starting a property's transition effect when its value changes.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`",
              type: 'string',
            },
            WebkitTransitionDuration: {
              description:
                'The **`transition-duration`** CSS property sets the length of time a transition animation should take to complete. By default, the value is `0s`, meaning that no animation will occur.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`',
              type: 'string',
            },
            WebkitTransitionProperty: {
              description:
                'The **`transition-property`** CSS property sets the CSS properties to which a transition effect should be applied.\n\n**Syntax**: `none | <single-transition-property>#`\n\n**Initial value**: all',
              type: 'string',
            },
            WebkitTransitionTimingFunction: {
              description:
                'The **`transition-timing-function`** CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect.\n\n**Syntax**: `<timing-function>#`\n\n**Initial value**: `ease`',
              type: 'string',
            },
            WebkitUserModify: {
              description:
                '**Syntax**: `read-only | read-write | read-write-plaintext-only`\n\n**Initial value**: `read-only`',
              enum: [
                '-moz-initial',
                'inherit',
                'initial',
                'read-only',
                'read-write',
                'read-write-plaintext-only',
                'revert',
                'unset',
              ],
              type: 'string',
            },
            WebkitUserSelect: {
              description:
                "The `**user-select**` CSS property controls whether the user can select text. This doesn't have any effect on content loaded as chrome, except in textboxes.\n\n**Syntax**: `auto | text | none | contain | all`\n\n**Initial value**: `auto`",
              enum: [
                '-moz-initial',
                '-moz-none',
                'all',
                'auto',
                'contain',
                'element',
                'inherit',
                'initial',
                'none',
                'revert',
                'text',
                'unset',
              ],
              type: 'string',
            },
            WebkitWritingMode: {
              description:
                'The **`writing-mode`** CSS property sets whether lines of text are laid out horizontally or vertically, as well as the direction in which blocks progress.\n\n**Syntax**: `horizontal-tb | vertical-rl | vertical-lr | sideways-rl | sideways-lr`\n\n**Initial value**: `horizontal-tb`',
              enum: [
                '-moz-initial',
                'horizontal-tb',
                'inherit',
                'initial',
                'revert',
                'sideways-lr',
                'sideways-rl',
                'unset',
                'vertical-lr',
                'vertical-rl',
              ],
              type: 'string',
            },
            MozAnimation: {
              description:
                'The **`animation`** shorthand CSS property sets an animated transition between styles. It is a shorthand for `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, and `animation-play-state`.\n\n**Syntax**: `<single-animation>#`',
              type: ['string', 'number'],
            },
            MozBorderImage: {
              description:
                "The **`border-image`** CSS property draws an image in place of an element's `border-style`.\n\n**Syntax**: `<'border-image-source'> || <'border-image-slice'> [ / <'border-image-width'> | / <'border-image-width'>? / <'border-image-outset'> ]? || <'border-image-repeat'>`",
              type: ['string', 'number'],
            },
            MozColumnRule: {
              description:
                "The **`column-rule`** CSS property sets the width, style, and color of the rule (line) drawn between columns in a multi-column layout.\n\n**Syntax**: `<'column-rule-width'> || <'column-rule-style'> || <'column-rule-color'>`",
              type: ['string', 'number'],
            },
            MozColumns: {
              description:
                "The **`columns`** CSS property sets the column width and column count of an element.\n\n**Syntax**: `<'column-width'> || <'column-count'>`",
              type: ['string', 'number'],
            },
            MozTransition: {
              description:
                'The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.\n\n**Syntax**: `<single-transition>#`',
              type: 'string',
            },
            msContentZoomLimit: {
              description:
                "The **`-ms-content-zoom-limit`** CSS shorthand property is a Microsoft extension that specifies values for the `-ms-content-zoom-limit-min` and `-ms-content-zoom-limit-max` properties.\n\n**Syntax**: `<'-ms-content-zoom-limit-min'> <'-ms-content-zoom-limit-max'>`",
              type: 'string',
            },
            msContentZoomSnap: {
              description:
                "The **`-ms-content-zoom-snap`** CSS shorthand property is a Microsoft extension that specifies values for the `-ms-content-zoom-snap-type` and `-ms-content-zoom-snap-points` properties.\n\n**Syntax**: `<'-ms-content-zoom-snap-type'> || <'-ms-content-zoom-snap-points'>`",
              type: 'string',
            },
            msFlex: {
              description:
                "The **`flex`** CSS property sets how a flex item will grow or shrink to fit the space available in its flex container. It is a shorthand for `flex-grow`, `flex-shrink`, and `flex-basis`.\n\n**Syntax**: `none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]`",
              type: ['string', 'number'],
            },
            msScrollLimit: {
              description:
                "The **\\-ms-scroll-limit** CSS property is a Microsoft extension that specifies values for the `-ms-scroll-limit-x-min`, `-ms-scroll-limit-y-min`, `-ms-scroll-limit-x-max`, and `-ms-scroll-limit-y-max` properties.\n\n**Syntax**: `<'-ms-scroll-limit-x-min'> <'-ms-scroll-limit-y-min'> <'-ms-scroll-limit-x-max'> <'-ms-scroll-limit-y-max'>`",
              type: 'string',
            },
            msScrollSnapX: {
              description:
                "The **`-ms-scroll-snap-x`** CSS shorthand property is a Microsoft extension that specifies values for the `-ms-scroll-snap-type` and `-ms-scroll-snap-points-x` properties.\n\n**Syntax**: `<'-ms-scroll-snap-type'> <'-ms-scroll-snap-points-x'>`",
              type: 'string',
            },
            msScrollSnapY: {
              description:
                "The **`-ms-scroll-snap-x`** CSS shorthand property is a Microsoft extension that specifies values for the `-ms-scroll-snap-type` and `-ms-scroll-snap-points-y` properties.\n\n**Syntax**: `<'-ms-scroll-snap-type'> <'-ms-scroll-snap-points-y'>`",
              type: 'string',
            },
            msTransition: {
              description:
                'The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.\n\n**Syntax**: `<single-transition>#`',
              type: 'string',
            },
            WebkitAnimation: {
              description:
                'The **`animation`** shorthand CSS property sets an animated transition between styles. It is a shorthand for `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, and `animation-play-state`.\n\n**Syntax**: `<single-animation>#`',
              type: ['string', 'number'],
            },
            WebkitBorderBefore: {
              description:
                "The **`-webkit-border-before`** CSS property is a shorthand property for setting the individual logical block start border property values in a single place in the style sheet.\n\n**Syntax**: `<'border-width'> || <'border-style'> || <'color'>`",
              type: ['string', 'number'],
            },
            WebkitBorderImage: {
              description:
                "The **`border-image`** CSS property draws an image in place of an element's `border-style`.\n\n**Syntax**: `<'border-image-source'> || <'border-image-slice'> [ / <'border-image-width'> | / <'border-image-width'>? / <'border-image-outset'> ]? || <'border-image-repeat'>`",
              type: ['string', 'number'],
            },
            WebkitBorderRadius: {
              description:
                "The **`border-radius`** CSS property rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners.\n\n**Syntax**: `<length-percentage>{1,4} [ / <length-percentage>{1,4} ]?`",
              type: ['string', 'number'],
            },
            WebkitColumnRule: {
              description:
                "The **`column-rule`** CSS property sets the width, style, and color of the rule (line) drawn between columns in a multi-column layout.\n\n**Syntax**: `<'column-rule-width'> || <'column-rule-style'> || <'column-rule-color'>`",
              type: ['string', 'number'],
            },
            WebkitColumns: {
              description:
                "The **`columns`** CSS property sets the column width and column count of an element.\n\n**Syntax**: `<'column-width'> || <'column-count'>`",
              type: ['string', 'number'],
            },
            WebkitFlex: {
              description:
                "The **`flex`** CSS property sets how a flex item will grow or shrink to fit the space available in its flex container. It is a shorthand for `flex-grow`, `flex-shrink`, and `flex-basis`.\n\n**Syntax**: `none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]`",
              type: ['string', 'number'],
            },
            WebkitFlexFlow: {
              description:
                "The **`flex-flow`** CSS property is a shorthand property for `flex-direction` and `flex-wrap` properties.\n\n**Syntax**: `<'flex-direction'> || <'flex-wrap'>`",
              type: 'string',
            },
            WebkitMask: {
              description:
                'The **`mask`** CSS property hides an element (partially or fully) by masking or clipping the image at specific points.\n\n**Syntax**: `[ <mask-reference> || <position> [ / <bg-size> ]? || <repeat-style> || [ <box> | border | padding | content | text ] || [ <box> | border | padding | content ] ]#`',
              type: ['string', 'number'],
            },
            WebkitTextEmphasis: {
              description:
                "The **`text-emphasis`** CSS property applies emphasis marks to text (except spaces and control characters). It is a shorthand for `text-emphasis-style` and `text-emphasis-color`.\n\n**Syntax**: `<'text-emphasis-style'> || <'text-emphasis-color'>`",
              type: 'string',
            },
            WebkitTextStroke: {
              description:
                'The **`-webkit-text-stroke`** CSS property specifies the width and color of strokes for text characters. This is a shorthand property for the longhand properties `-webkit-text-stroke-width` and `-webkit-text-stroke-color`.\n\n**Syntax**: `<length> || <color>`',
              type: ['string', 'number'],
            },
            WebkitTransition: {
              description:
                'The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.\n\n**Syntax**: `<single-transition>#`',
              type: 'string',
            },
            azimuth: {
              description:
                'In combination with `elevation`, the **`azimuth`** CSS property enables different audio sources to be positioned spatially for aural presentation. This is important in that it provides a natural way to tell several voices apart, as each can be positioned to originate at a different location on the sound stage. Stereo output produce a lateral sound stage, while binaural headphones and multi-speaker setups allow for a fully three-dimensional stage.\n\n**Syntax**: `<angle> | [ [ left-side | far-left | left | center-left | center | center-right | right | far-right | right-side ] || behind ] | leftwards | rightwards`\n\n**Initial value**: `center`',
              type: 'string',
            },
            boxAlign: {
              description:
                'The **`box-align`** CSS property specifies how an element aligns its contents across its layout in a perpendicular direction. The effect of the property is only visible if there is extra space in the box.\n\n**Syntax**: `start | center | end | baseline | stretch`\n\n**Initial value**: `stretch`',
              enum: [
                '-moz-initial',
                'baseline',
                'center',
                'end',
                'inherit',
                'initial',
                'revert',
                'start',
                'stretch',
                'unset',
              ],
              type: 'string',
            },
            boxDirection: {
              description:
                'The **`box-direction`** CSS property specifies whether a box lays out its contents normally (from the top or left edge), or in reverse (from the bottom or right edge).\n\n**Syntax**: `normal | reverse | inherit`\n\n**Initial value**: `normal`',
              enum: [
                '-moz-initial',
                'inherit',
                'initial',
                'normal',
                'reverse',
                'revert',
                'unset',
              ],
              type: 'string',
            },
            boxFlex: {
              description:
                "The **`-moz-box-flex`** and **`-webkit-box-flex`** CSS properties specify how a `-moz-box` or `-webkit-box` grows to fill the box that contains it, in the direction of the containing box's layout.\n\n**Syntax**: `<number>`\n\n**Initial value**: `0`",
              anyOf: [
                {
                  enum: [
                    '-moz-initial',
                    'inherit',
                    'initial',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                {
                  type: 'number',
                },
              ],
            },
            boxFlexGroup: {
              description:
                "The **`box-flex-group`** CSS property assigns the flexbox's child elements to a flex group.\n\n**Syntax**: `<integer>`\n\n**Initial value**: `1`",
              anyOf: [
                {
                  enum: [
                    '-moz-initial',
                    'inherit',
                    'initial',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                {
                  type: 'number',
                },
              ],
            },
            boxLines: {
              description:
                'The **`box-lines`** CSS property determines whether the box may have a single or multiple lines (rows for horizontally oriented boxes, columns for vertically oriented boxes).\n\n**Syntax**: `single | multiple`\n\n**Initial value**: `single`',
              enum: [
                '-moz-initial',
                'inherit',
                'initial',
                'multiple',
                'revert',
                'single',
                'unset',
              ],
              type: 'string',
            },
            boxOrdinalGroup: {
              description:
                "The **`box-ordinal-group`** CSS property assigns the flexbox's child elements to an ordinal group.\n\n**Syntax**: `<integer>`\n\n**Initial value**: `1`",
              anyOf: [
                {
                  enum: [
                    '-moz-initial',
                    'inherit',
                    'initial',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                {
                  type: 'number',
                },
              ],
            },
            boxOrient: {
              description:
                'The **`box-orient`** CSS property specifies whether an element lays out its contents horizontally or vertically.\n\n**Syntax**: `horizontal | vertical | inline-axis | block-axis | inherit`\n\n**Initial value**: `inline-axis` (`horizontal` in XUL)',
              enum: [
                '-moz-initial',
                'block-axis',
                'horizontal',
                'inherit',
                'initial',
                'inline-axis',
                'revert',
                'unset',
                'vertical',
              ],
              type: 'string',
            },
            boxPack: {
              description:
                'The **`-moz-box-pack`** and **`-webkit-box-pack`** CSS properties specify how a `-moz-box` or `-webkit-box` packs its contents in the direction of its layout. The effect of this is only visible if there is extra space in the box.\n\n**Syntax**: `start | center | end | justify`\n\n**Initial value**: `start`',
              enum: [
                '-moz-initial',
                'center',
                'end',
                'inherit',
                'initial',
                'justify',
                'revert',
                'start',
                'unset',
              ],
              type: 'string',
            },
            clip: {
              description:
                'The **`clip`** CSS property defines what portion of an element is visible. The `clip` property applies only to absolutely positioned elements, that is elements with `position:absolute` or `position:fixed`.\n\n**Syntax**: `<shape> | auto`\n\n**Initial value**: `auto`',
              type: 'string',
            },
            fontVariantAlternates: {
              description:
                'The **`font-variant-alternates`** CSS property controls the usage of alternate glyphs. These alternate glyphs may be referenced by alternative names defined in `@font-feature-values`.\n\n**Syntax**: `normal | [ stylistic( <feature-value-name> ) || historical-forms || styleset( <feature-value-name># ) || character-variant( <feature-value-name># ) || swash( <feature-value-name> ) || ornaments( <feature-value-name> ) || annotation( <feature-value-name> ) ]`\n\n**Initial value**: `normal`',
              type: 'string',
            },
            gridColumnGap: {
              description:
                "The **`column-gap`** CSS property sets the size of the gap (gutter) between an element's columns.\n\n**Syntax**: `<length-percentage>`\n\n**Initial value**: `0`",
              type: ['string', 'number'],
            },
            gridGap: {
              description:
                "The **`gap`** CSS property sets the gaps (gutters) between rows and columns. It is a shorthand for `row-gap` and `column-gap`.\n\n**Syntax**: `<'grid-row-gap'> <'grid-column-gap'>?`",
              type: ['string', 'number'],
            },
            gridRowGap: {
              description:
                "The **`row-gap`** CSS property sets the size of the gap (gutter) between an element's grid rows.\n\n**Syntax**: `<length-percentage>`\n\n**Initial value**: `0`",
              type: ['string', 'number'],
            },
            imeMode: {
              description:
                'The **`ime-mode`** CSS property controls the state of the input method editor (IME) for text fields. This property is obsolete.\n\n**Syntax**: `auto | normal | active | inactive | disabled`\n\n**Initial value**: `auto`',
              enum: [
                '-moz-initial',
                'active',
                'auto',
                'disabled',
                'inactive',
                'inherit',
                'initial',
                'normal',
                'revert',
                'unset',
              ],
              type: 'string',
            },
            offsetBlock: {
              description:
                "The **`inset-block`** CSS property defines the logical block start and end offsets of an element, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top` and `bottom`, or `right` and `left` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'top'>{1,2}`\n\n**Initial value**: `auto`",
              type: ['string', 'number'],
            },
            offsetBlockEnd: {
              description:
                "The **`inset-block-end`** CSS property defines the logical block end offset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'top'>`\n\n**Initial value**: `auto`",
              type: ['string', 'number'],
            },
            offsetBlockStart: {
              description:
                "The **`inset-block-start`** CSS property defines the logical block start offset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'top'>`\n\n**Initial value**: `auto`",
              type: ['string', 'number'],
            },
            offsetInline: {
              description:
                "The **`inset-inline`** CSS property defines the logical block start and end offsets of an element, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top` and `bottom`, or `right` and `left` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'top'>{1,2}`\n\n**Initial value**: `auto`",
              type: ['string', 'number'],
            },
            offsetInlineEnd: {
              description:
                "The **`inset-inline-end`** CSS property defines the logical inline end inset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'top'>`\n\n**Initial value**: `auto`",
              type: ['string', 'number'],
            },
            offsetInlineStart: {
              description:
                "The **`inset-inline-start`** CSS property defines the logical inline start inset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'top'>`\n\n**Initial value**: `auto`",
              type: ['string', 'number'],
            },
            scrollSnapCoordinate: {
              description:
                "The **`scroll-snap-coordinate`** CSS property defines the x and y coordinate positions within an element that will align with its nearest ancestor scroll container's `scroll-snap-destination` for each respective axis.\n\n**Syntax**: `none | <position>#`\n\n**Initial value**: `none`",
              type: ['string', 'number'],
            },
            scrollSnapDestination: {
              description:
                "The **`scroll-snap-destination`** CSS property defines the position in x and y coordinates within the scroll container's visual viewport which element snap points align with.\n\n**Syntax**: `<position>`\n\n**Initial value**: `0px 0px`",
              type: ['string', 'number'],
            },
            scrollSnapPointsX: {
              description:
                'The **`scroll-snap-points-x`** CSS property defines the horizontal positioning of snap points within the content of the scroll container they are applied to.\n\n**Syntax**: `none | repeat( <length-percentage> )`\n\n**Initial value**: `none`',
              type: 'string',
            },
            scrollSnapPointsY: {
              description:
                'The **`scroll-snap-points-y`** CSS property defines the vertical positioning of snap points within the content of the scroll container they are applied to.\n\n**Syntax**: `none | repeat( <length-percentage> )`\n\n**Initial value**: `none`',
              type: 'string',
            },
            scrollSnapTypeX: {
              description:
                'The **`scroll-snap-type-x`** CSS property defines how strictly snap points are enforced on the horizontal axis of the scroll container in case there is one.\n\n**Syntax**: `none | mandatory | proximity`\n\n**Initial value**: `none`',
              enum: [
                '-moz-initial',
                'inherit',
                'initial',
                'mandatory',
                'none',
                'proximity',
                'revert',
                'unset',
              ],
              type: 'string',
            },
            scrollSnapTypeY: {
              description:
                'The **`scroll-snap-type-y`** CSS property defines how strictly snap points are enforced on the vertical axis of the scroll container in case there is one.\n\n**Syntax**: `none | mandatory | proximity`\n\n**Initial value**: `none`',
              enum: [
                '-moz-initial',
                'inherit',
                'initial',
                'mandatory',
                'none',
                'proximity',
                'revert',
                'unset',
              ],
              type: 'string',
            },
            scrollbarTrackColor: {
              description:
                'The **`-ms-scrollbar-track-color`** CSS property is a Microsoft extension that specifies the color of the track element of a scrollbar.\n\n**Syntax**: `<color>`\n\n**Initial value**: `Scrollbar`',
              type: 'string',
            },
            textCombineHorizontal: {
              description:
                'The **`text-combine-upright`** CSS property sets the combination of characters into the space of a single character. If the combined text is wider than 1em, the user agent must fit the contents within 1em. The resulting composition is treated as a single upright glyph for layout and decoration. This property only has an effect in vertical writing modes.\n\n**Syntax**: `none | all | [ digits <integer>? ]`\n\n**Initial value**: `none`',
              type: 'string',
            },
            KhtmlBoxAlign: {
              description:
                'The **`box-align`** CSS property specifies how an element aligns its contents across its layout in a perpendicular direction. The effect of the property is only visible if there is extra space in the box.\n\n**Syntax**: `start | center | end | baseline | stretch`\n\n**Initial value**: `stretch`',
              enum: [
                '-moz-initial',
                'baseline',
                'center',
                'end',
                'inherit',
                'initial',
                'revert',
                'start',
                'stretch',
                'unset',
              ],
              type: 'string',
            },
            KhtmlBoxDirection: {
              description:
                'The **`box-direction`** CSS property specifies whether a box lays out its contents normally (from the top or left edge), or in reverse (from the bottom or right edge).\n\n**Syntax**: `normal | reverse | inherit`\n\n**Initial value**: `normal`',
              enum: [
                '-moz-initial',
                'inherit',
                'initial',
                'normal',
                'reverse',
                'revert',
                'unset',
              ],
              type: 'string',
            },
            KhtmlBoxFlex: {
              description:
                "The **`-moz-box-flex`** and **`-webkit-box-flex`** CSS properties specify how a `-moz-box` or `-webkit-box` grows to fill the box that contains it, in the direction of the containing box's layout.\n\n**Syntax**: `<number>`\n\n**Initial value**: `0`",
              anyOf: [
                {
                  enum: [
                    '-moz-initial',
                    'inherit',
                    'initial',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                {
                  type: 'number',
                },
              ],
            },
            KhtmlBoxFlexGroup: {
              description:
                "The **`box-flex-group`** CSS property assigns the flexbox's child elements to a flex group.\n\n**Syntax**: `<integer>`\n\n**Initial value**: `1`",
              anyOf: [
                {
                  enum: [
                    '-moz-initial',
                    'inherit',
                    'initial',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                {
                  type: 'number',
                },
              ],
            },
            KhtmlBoxLines: {
              description:
                'The **`box-lines`** CSS property determines whether the box may have a single or multiple lines (rows for horizontally oriented boxes, columns for vertically oriented boxes).\n\n**Syntax**: `single | multiple`\n\n**Initial value**: `single`',
              enum: [
                '-moz-initial',
                'inherit',
                'initial',
                'multiple',
                'revert',
                'single',
                'unset',
              ],
              type: 'string',
            },
            KhtmlBoxOrdinalGroup: {
              description:
                "The **`box-ordinal-group`** CSS property assigns the flexbox's child elements to an ordinal group.\n\n**Syntax**: `<integer>`\n\n**Initial value**: `1`",
              anyOf: [
                {
                  enum: [
                    '-moz-initial',
                    'inherit',
                    'initial',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                {
                  type: 'number',
                },
              ],
            },
            KhtmlBoxOrient: {
              description:
                'The **`box-orient`** CSS property specifies whether an element lays out its contents horizontally or vertically.\n\n**Syntax**: `horizontal | vertical | inline-axis | block-axis | inherit`\n\n**Initial value**: `inline-axis` (`horizontal` in XUL)',
              enum: [
                '-moz-initial',
                'block-axis',
                'horizontal',
                'inherit',
                'initial',
                'inline-axis',
                'revert',
                'unset',
                'vertical',
              ],
              type: 'string',
            },
            KhtmlBoxPack: {
              description:
                'The **`-moz-box-pack`** and **`-webkit-box-pack`** CSS properties specify how a `-moz-box` or `-webkit-box` packs its contents in the direction of its layout. The effect of this is only visible if there is extra space in the box.\n\n**Syntax**: `start | center | end | justify`\n\n**Initial value**: `start`',
              enum: [
                '-moz-initial',
                'center',
                'end',
                'inherit',
                'initial',
                'justify',
                'revert',
                'start',
                'unset',
              ],
              type: 'string',
            },
            KhtmlLineBreak: {
              description:
                'The **`line-break`** CSS property sets how to break lines of Chinese, Japanese, or Korean (CJK) text when working with punctuation and symbols.\n\n**Syntax**: `auto | loose | normal | strict | anywhere`\n\n**Initial value**: `auto`',
              enum: [
                '-moz-initial',
                'anywhere',
                'auto',
                'inherit',
                'initial',
                'loose',
                'normal',
                'revert',
                'strict',
                'unset',
              ],
              type: 'string',
            },
            KhtmlOpacity: {
              description:
                'The **`opacity`** CSS property sets the transparency of an element or the degree to which content behind an element is visible.\n\n**Syntax**: `<alpha-value>`\n\n**Initial value**: `1.0`',
              type: ['string', 'number'],
            },
            KhtmlUserSelect: {
              description:
                "The `**user-select**` CSS property controls whether the user can select text. This doesn't have any effect on content loaded as chrome, except in textboxes.\n\n**Syntax**: `auto | text | none | contain | all`\n\n**Initial value**: `auto`",
              enum: [
                '-moz-initial',
                '-moz-none',
                'all',
                'auto',
                'contain',
                'element',
                'inherit',
                'initial',
                'none',
                'revert',
                'text',
                'unset',
              ],
              type: 'string',
            },
            MozBackgroundClip: {
              description:
                "The **`background-clip`** CSS property sets whether an element's background `<color>` or `<image>` extends underneath its border.\n\n**Syntax**: `<box>#`\n\n**Initial value**: `border-box`",
              type: 'string',
            },
            MozBackgroundInlinePolicy: {
              description:
                "The **`box-decoration-break`** CSS property specifies how an element's fragments should be rendered when broken across multiple lines, columns, or pages.\n\n**Syntax**: `slice | clone`\n\n**Initial value**: `slice`",
              enum: [
                '-moz-initial',
                'clone',
                'inherit',
                'initial',
                'revert',
                'slice',
                'unset',
              ],
              type: 'string',
            },
            MozBackgroundOrigin: {
              description:
                'The **`background-origin`** CSS property sets the _background positioning area_. In other words, it sets the origin position of an image set with the `background-image` property.\n\n**Syntax**: `<box>#`\n\n**Initial value**: `padding-box`',
              type: 'string',
            },
            MozBackgroundSize: {
              description:
                "The **`background-size`** CSS property sets the size of the element's background image. The image can be left to its natural size, stretched, or constrained to fit the available space.\n\n**Syntax**: `<bg-size>#`\n\n**Initial value**: `auto auto`",
              type: ['string', 'number'],
            },
            MozBinding: {
              description:
                'The **`-moz-binding`** CSS property is used by Mozilla-based applications to attach an XBL binding to a DOM element.\n\n**Syntax**: `<url> | none`\n\n**Initial value**: `none`',
              type: 'string',
            },
            MozBorderRadius: {
              description:
                "The **`border-radius`** CSS property rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners.\n\n**Syntax**: `<length-percentage>{1,4} [ / <length-percentage>{1,4} ]?`",
              type: ['string', 'number'],
            },
            MozBorderRadiusBottomleft: {
              description:
                'The **`border-bottom-left-radius`** CSS property rounds the bottom-left corner of an element.\n\n**Syntax**: `<length-percentage>{1,2}`\n\n**Initial value**: `0`',
              type: ['string', 'number'],
            },
            MozBorderRadiusBottomright: {
              description:
                'The **`border-bottom-right-radius`** CSS property rounds the bottom-right corner of an element.\n\n**Syntax**: `<length-percentage>{1,2}`\n\n**Initial value**: `0`',
              type: ['string', 'number'],
            },
            MozBorderRadiusTopleft: {
              description:
                'The **`border-top-left-radius`** CSS property rounds the top-left corner of an element.\n\n**Syntax**: `<length-percentage>{1,2}`\n\n**Initial value**: `0`',
              type: ['string', 'number'],
            },
            MozBorderRadiusTopright: {
              description:
                'The **`border-top-right-radius`** CSS property rounds the top-right corner of an element.\n\n**Syntax**: `<length-percentage>{1,2}`\n\n**Initial value**: `0`',
              type: ['string', 'number'],
            },
            MozBoxAlign: {
              description:
                'The **`box-align`** CSS property specifies how an element aligns its contents across its layout in a perpendicular direction. The effect of the property is only visible if there is extra space in the box.\n\n**Syntax**: `start | center | end | baseline | stretch`\n\n**Initial value**: `stretch`',
              enum: [
                '-moz-initial',
                'baseline',
                'center',
                'end',
                'inherit',
                'initial',
                'revert',
                'start',
                'stretch',
                'unset',
              ],
              type: 'string',
            },
            MozBoxDirection: {
              description:
                'The **`box-direction`** CSS property specifies whether a box lays out its contents normally (from the top or left edge), or in reverse (from the bottom or right edge).\n\n**Syntax**: `normal | reverse | inherit`\n\n**Initial value**: `normal`',
              enum: [
                '-moz-initial',
                'inherit',
                'initial',
                'normal',
                'reverse',
                'revert',
                'unset',
              ],
              type: 'string',
            },
            MozBoxFlex: {
              description:
                "The **`-moz-box-flex`** and **`-webkit-box-flex`** CSS properties specify how a `-moz-box` or `-webkit-box` grows to fill the box that contains it, in the direction of the containing box's layout.\n\n**Syntax**: `<number>`\n\n**Initial value**: `0`",
              anyOf: [
                {
                  enum: [
                    '-moz-initial',
                    'inherit',
                    'initial',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                {
                  type: 'number',
                },
              ],
            },
            MozBoxOrdinalGroup: {
              description:
                "The **`box-ordinal-group`** CSS property assigns the flexbox's child elements to an ordinal group.\n\n**Syntax**: `<integer>`\n\n**Initial value**: `1`",
              anyOf: [
                {
                  enum: [
                    '-moz-initial',
                    'inherit',
                    'initial',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                {
                  type: 'number',
                },
              ],
            },
            MozBoxOrient: {
              description:
                'The **`box-orient`** CSS property specifies whether an element lays out its contents horizontally or vertically.\n\n**Syntax**: `horizontal | vertical | inline-axis | block-axis | inherit`\n\n**Initial value**: `inline-axis` (`horizontal` in XUL)',
              enum: [
                '-moz-initial',
                'block-axis',
                'horizontal',
                'inherit',
                'initial',
                'inline-axis',
                'revert',
                'unset',
                'vertical',
              ],
              type: 'string',
            },
            MozBoxPack: {
              description:
                'The **`-moz-box-pack`** and **`-webkit-box-pack`** CSS properties specify how a `-moz-box` or `-webkit-box` packs its contents in the direction of its layout. The effect of this is only visible if there is extra space in the box.\n\n**Syntax**: `start | center | end | justify`\n\n**Initial value**: `start`',
              enum: [
                '-moz-initial',
                'center',
                'end',
                'inherit',
                'initial',
                'justify',
                'revert',
                'start',
                'unset',
              ],
              type: 'string',
            },
            MozBoxShadow: {
              description:
                "The **`box-shadow`** CSS property adds shadow effects around an element's frame. You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radii, and color.\n\n**Syntax**: `none | <shadow>#`\n\n**Initial value**: `none`",
              type: 'string',
            },
            MozFloatEdge: {
              description:
                'The non-standard **`-moz-float-edge`** CSS property specifies whether the height and width properties of the element include the margin, border, or padding thickness.\n\n**Syntax**: `border-box | content-box | margin-box | padding-box`\n\n**Initial value**: `content-box`',
              enum: [
                '-moz-initial',
                'border-box',
                'content-box',
                'inherit',
                'initial',
                'margin-box',
                'padding-box',
                'revert',
                'unset',
              ],
              type: 'string',
            },
            MozForceBrokenImageIcon: {
              description:
                'The **`-moz-force-broken-image-icon`** extended CSS property can be used to force the broken image icon to be shown even when a broken image has an `alt` attribute.\n\n**Syntax**: `<integer [0,1]>`\n\n**Initial value**: `0`',
              anyOf: [
                {
                  enum: [
                    '-moz-initial',
                    'inherit',
                    'initial',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                {
                  type: 'number',
                },
              ],
            },
            MozOpacity: {
              description:
                'The **`opacity`** CSS property sets the transparency of an element or the degree to which content behind an element is visible.\n\n**Syntax**: `<alpha-value>`\n\n**Initial value**: `1.0`',
              type: ['string', 'number'],
            },
            MozOutline: {
              description:
                "The **`outline`** CSS property is a shorthand to set various outline properties in a single declaration: `outline-style`, `outline-width`, and `outline-color`.\n\n**Syntax**: `[ <'outline-color'> || <'outline-style'> || <'outline-width'> ]`",
              type: ['string', 'number'],
            },
            MozOutlineColor: {
              description:
                "The **`outline-color`** CSS property sets the color of an element's outline.\n\n**Syntax**: `<color> | invert`\n\n**Initial value**: `invert`, for browsers supporting it, `currentColor` for the other",
              type: 'string',
            },
            MozOutlineRadius: {
              description:
                "In Mozilla applications like Firefox, the **`-moz-outline-radius`** CSS property can be used to give an element's `outline` rounded corners.\n\n**Syntax**: `<outline-radius>{1,4} [ / <outline-radius>{1,4} ]?`",
              type: ['string', 'number'],
            },
            MozOutlineRadiusBottomleft: {
              description:
                "In Mozilla applications, the **`-moz-outline-radius-bottomleft`** CSS property can be used to round the bottom-left corner of an element's `outline`.\n\n**Syntax**: `<outline-radius>`\n\n**Initial value**: `0`",
              type: ['string', 'number'],
            },
            MozOutlineRadiusBottomright: {
              description:
                "In Mozilla applications, the **`-moz-outline-radius-bottomright`** CSS property can be used to round the bottom-right corner of an element's `outline`.\n\n**Syntax**: `<outline-radius>`\n\n**Initial value**: `0`",
              type: ['string', 'number'],
            },
            MozOutlineRadiusTopleft: {
              description:
                "In Mozilla applications, the **`-moz-outline-radius-topleft`** CSS property can be used to round the top-left corner of an element's `outline`.\n\n**Syntax**: `<outline-radius>`\n\n**Initial value**: `0`",
              type: ['string', 'number'],
            },
            MozOutlineRadiusTopright: {
              description:
                "In Mozilla applications, the **`-moz-outline-radius-topright`** CSS property can be used to round the top-right corner of an element's `outline`.\n\n**Syntax**: `<outline-radius>`\n\n**Initial value**: `0`",
              type: ['string', 'number'],
            },
            MozOutlineStyle: {
              description:
                "The **`outline-style`** CSS property sets the style of an element's outline. An outline is a line that is drawn around an element, outside the `border`.\n\n**Syntax**: `auto | <'border-style'>`\n\n**Initial value**: `none`",
              type: 'string',
            },
            MozOutlineWidth: {
              description:
                "The **`outline-width`** CSS property sets the thickness of an element's outline. An outline is a line that is drawn around an element, outside the `border`.\n\n**Syntax**: `<line-width>`\n\n**Initial value**: `medium`",
              type: ['string', 'number'],
            },
            MozTextAlignLast: {
              description:
                'The **`text-align-last`** CSS property sets how the last line of a block or a line, right before a forced line break, is aligned.\n\n**Syntax**: `auto | start | end | left | right | center | justify`\n\n**Initial value**: `auto`',
              enum: [
                '-moz-initial',
                'auto',
                'center',
                'end',
                'inherit',
                'initial',
                'justify',
                'left',
                'revert',
                'right',
                'start',
                'unset',
              ],
              type: 'string',
            },
            MozTextDecorationColor: {
              description:
                'The **`text-decoration-color`** CSS property sets the color of decorations added to text by `text-decoration-line`.\n\n**Syntax**: `<color>`\n\n**Initial value**: `currentcolor`',
              type: 'string',
            },
            MozTextDecorationLine: {
              description:
                'The **`text-decoration-line`** CSS property sets the kind of decoration that is used on text in an element, such as an underline or overline.\n\n**Syntax**: `none | [ underline || overline || line-through || blink ] | spelling-error | grammar-error`\n\n**Initial value**: `none`',
              type: 'string',
            },
            MozTextDecorationStyle: {
              description:
                'The **`text-decoration-style`** CSS property sets the style of the lines specified by `text-decoration-line`. The style applies to all lines that are set with `text-decoration-line`.\n\n**Syntax**: `solid | double | dotted | dashed | wavy`\n\n**Initial value**: `solid`',
              enum: [
                '-moz-initial',
                'dashed',
                'dotted',
                'double',
                'inherit',
                'initial',
                'revert',
                'solid',
                'unset',
                'wavy',
              ],
              type: 'string',
            },
            MozUserInput: {
              description:
                'In Mozilla applications, **`-moz-user-input`** determines if an element will accept user input.\n\n**Syntax**: `auto | none | enabled | disabled`\n\n**Initial value**: `auto`',
              enum: [
                '-moz-initial',
                'auto',
                'disabled',
                'enabled',
                'inherit',
                'initial',
                'none',
                'revert',
                'unset',
              ],
              type: 'string',
            },
            msImeMode: {
              description:
                'The **`ime-mode`** CSS property controls the state of the input method editor (IME) for text fields. This property is obsolete.\n\n**Syntax**: `auto | normal | active | inactive | disabled`\n\n**Initial value**: `auto`',
              enum: [
                '-moz-initial',
                'active',
                'auto',
                'disabled',
                'inactive',
                'inherit',
                'initial',
                'normal',
                'revert',
                'unset',
              ],
              type: 'string',
            },
            msScrollbarTrackColor: {
              description:
                'The **`-ms-scrollbar-track-color`** CSS property is a Microsoft extension that specifies the color of the track element of a scrollbar.\n\n**Syntax**: `<color>`\n\n**Initial value**: `Scrollbar`',
              type: 'string',
            },
            OAnimation: {
              description:
                'The **`animation`** shorthand CSS property sets an animated transition between styles. It is a shorthand for `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, and `animation-play-state`.\n\n**Syntax**: `<single-animation>#`',
              type: ['string', 'number'],
            },
            OAnimationDelay: {
              description:
                'The **`animation-delay`** CSS property sets when an animation starts. The animation can start later, immediately from its beginning, or immediately and partway through the animation.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`',
              type: 'string',
            },
            OAnimationDirection: {
              description:
                'The **`animation-direction`** CSS property sets whether an animation should play forwards, backwards, or alternating back and forth.\n\n**Syntax**: `<single-animation-direction>#`\n\n**Initial value**: `normal`',
              type: 'string',
            },
            OAnimationDuration: {
              description:
                'The **`animation-duration`** CSS property sets the length of time that an animation takes to complete one cycle.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`',
              type: 'string',
            },
            OAnimationFillMode: {
              description:
                'The **`animation-fill-mode`** CSS property sets how a CSS animation applies styles to its target before and after its execution.\n\n**Syntax**: `<single-animation-fill-mode>#`\n\n**Initial value**: `none`',
              type: 'string',
            },
            OAnimationIterationCount: {
              description:
                'The **`animation-iteration-count`** CSS property sets the number of times an animation cycle should be played before stopping.\n\n**Syntax**: `<single-animation-iteration-count>#`\n\n**Initial value**: `1`',
              type: ['string', 'number'],
            },
            OAnimationName: {
              description:
                'The **`animation-name`** CSS property sets one or more animations to apply to an element. Each name is an `@keyframes` at-rule that sets the property values for the animation sequence.\n\n**Syntax**: `[ none | <keyframes-name> ]#`\n\n**Initial value**: `none`',
              type: 'string',
            },
            OAnimationPlayState: {
              description:
                'The **`animation-play-state`** CSS property sets whether an animation is running or paused.\n\n**Syntax**: `<single-animation-play-state>#`\n\n**Initial value**: `running`',
              type: 'string',
            },
            OAnimationTimingFunction: {
              description:
                'The `**animation-timing-function**` CSS property sets how an animation progresses through the duration of each cycle.\n\n**Syntax**: `<timing-function>#`\n\n**Initial value**: `ease`',
              type: 'string',
            },
            OBackgroundSize: {
              description:
                "The **`background-size`** CSS property sets the size of the element's background image. The image can be left to its natural size, stretched, or constrained to fit the available space.\n\n**Syntax**: `<bg-size>#`\n\n**Initial value**: `auto auto`",
              type: ['string', 'number'],
            },
            OBorderImage: {
              description:
                "The **`border-image`** CSS property draws an image in place of an element's `border-style`.\n\n**Syntax**: `<'border-image-source'> || <'border-image-slice'> [ / <'border-image-width'> | / <'border-image-width'>? / <'border-image-outset'> ]? || <'border-image-repeat'>`",
              type: ['string', 'number'],
            },
            OTransform: {
              description:
                'The **`transform`** CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.\n\n**Syntax**: `none | <transform-list>`\n\n**Initial value**: `none`',
              type: 'string',
            },
            OTransition: {
              description:
                'The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.\n\n**Syntax**: `<single-transition>#`',
              type: 'string',
            },
            OTransitionDelay: {
              description:
                "The **`transition-delay`** CSS property specifies the duration to wait before starting a property's transition effect when its value changes.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`",
              type: 'string',
            },
            OTransitionDuration: {
              description:
                'The **`transition-duration`** CSS property sets the length of time a transition animation should take to complete. By default, the value is `0s`, meaning that no animation will occur.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`',
              type: 'string',
            },
            OTransitionProperty: {
              description:
                'The **`transition-property`** CSS property sets the CSS properties to which a transition effect should be applied.\n\n**Syntax**: `none | <single-transition-property>#`\n\n**Initial value**: all',
              type: 'string',
            },
            OTransitionTimingFunction: {
              description:
                'The **`transition-timing-function`** CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect.\n\n**Syntax**: `<timing-function>#`\n\n**Initial value**: `ease`',
              type: 'string',
            },
            WebkitBoxAlign: {
              description:
                'The **`box-align`** CSS property specifies how an element aligns its contents across its layout in a perpendicular direction. The effect of the property is only visible if there is extra space in the box.\n\n**Syntax**: `start | center | end | baseline | stretch`\n\n**Initial value**: `stretch`',
              enum: [
                '-moz-initial',
                'baseline',
                'center',
                'end',
                'inherit',
                'initial',
                'revert',
                'start',
                'stretch',
                'unset',
              ],
              type: 'string',
            },
            WebkitBoxDirection: {
              description:
                'The **`box-direction`** CSS property specifies whether a box lays out its contents normally (from the top or left edge), or in reverse (from the bottom or right edge).\n\n**Syntax**: `normal | reverse | inherit`\n\n**Initial value**: `normal`',
              enum: [
                '-moz-initial',
                'inherit',
                'initial',
                'normal',
                'reverse',
                'revert',
                'unset',
              ],
              type: 'string',
            },
            WebkitBoxFlex: {
              description:
                "The **`-moz-box-flex`** and **`-webkit-box-flex`** CSS properties specify how a `-moz-box` or `-webkit-box` grows to fill the box that contains it, in the direction of the containing box's layout.\n\n**Syntax**: `<number>`\n\n**Initial value**: `0`",
              anyOf: [
                {
                  enum: [
                    '-moz-initial',
                    'inherit',
                    'initial',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                {
                  type: 'number',
                },
              ],
            },
            WebkitBoxFlexGroup: {
              description:
                "The **`box-flex-group`** CSS property assigns the flexbox's child elements to a flex group.\n\n**Syntax**: `<integer>`\n\n**Initial value**: `1`",
              anyOf: [
                {
                  enum: [
                    '-moz-initial',
                    'inherit',
                    'initial',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                {
                  type: 'number',
                },
              ],
            },
            WebkitBoxLines: {
              description:
                'The **`box-lines`** CSS property determines whether the box may have a single or multiple lines (rows for horizontally oriented boxes, columns for vertically oriented boxes).\n\n**Syntax**: `single | multiple`\n\n**Initial value**: `single`',
              enum: [
                '-moz-initial',
                'inherit',
                'initial',
                'multiple',
                'revert',
                'single',
                'unset',
              ],
              type: 'string',
            },
            WebkitBoxOrdinalGroup: {
              description:
                "The **`box-ordinal-group`** CSS property assigns the flexbox's child elements to an ordinal group.\n\n**Syntax**: `<integer>`\n\n**Initial value**: `1`",
              anyOf: [
                {
                  enum: [
                    '-moz-initial',
                    'inherit',
                    'initial',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                {
                  type: 'number',
                },
              ],
            },
            WebkitBoxOrient: {
              description:
                'The **`box-orient`** CSS property specifies whether an element lays out its contents horizontally or vertically.\n\n**Syntax**: `horizontal | vertical | inline-axis | block-axis | inherit`\n\n**Initial value**: `inline-axis` (`horizontal` in XUL)',
              enum: [
                '-moz-initial',
                'block-axis',
                'horizontal',
                'inherit',
                'initial',
                'inline-axis',
                'revert',
                'unset',
                'vertical',
              ],
              type: 'string',
            },
            WebkitBoxPack: {
              description:
                'The **`-moz-box-pack`** and **`-webkit-box-pack`** CSS properties specify how a `-moz-box` or `-webkit-box` packs its contents in the direction of its layout. The effect of this is only visible if there is extra space in the box.\n\n**Syntax**: `start | center | end | justify`\n\n**Initial value**: `start`',
              enum: [
                '-moz-initial',
                'center',
                'end',
                'inherit',
                'initial',
                'justify',
                'revert',
                'start',
                'unset',
              ],
              type: 'string',
            },
            WebkitScrollSnapPointsX: {
              description:
                'The **`scroll-snap-points-x`** CSS property defines the horizontal positioning of snap points within the content of the scroll container they are applied to.\n\n**Syntax**: `none | repeat( <length-percentage> )`\n\n**Initial value**: `none`',
              type: 'string',
            },
            WebkitScrollSnapPointsY: {
              description:
                'The **`scroll-snap-points-y`** CSS property defines the vertical positioning of snap points within the content of the scroll container they are applied to.\n\n**Syntax**: `none | repeat( <length-percentage> )`\n\n**Initial value**: `none`',
              type: 'string',
            },
            alignmentBaseline: {
              enum: [
                '-moz-initial',
                'after-edge',
                'alphabetic',
                'auto',
                'baseline',
                'before-edge',
                'central',
                'hanging',
                'ideographic',
                'inherit',
                'initial',
                'mathematical',
                'middle',
                'revert',
                'text-after-edge',
                'text-before-edge',
                'unset',
              ],
              type: 'string',
            },
            baselineShift: {
              type: ['string', 'number'],
            },
            clipRule: {
              enum: [
                '-moz-initial',
                'evenodd',
                'inherit',
                'initial',
                'nonzero',
                'revert',
                'unset',
              ],
              type: 'string',
            },
            colorInterpolation: {
              enum: [
                '-moz-initial',
                'auto',
                'inherit',
                'initial',
                'linearRGB',
                'revert',
                'sRGB',
                'unset',
              ],
              type: 'string',
            },
            colorRendering: {
              enum: [
                '-moz-initial',
                'auto',
                'inherit',
                'initial',
                'optimizeQuality',
                'optimizeSpeed',
                'revert',
                'unset',
              ],
              type: 'string',
            },
            dominantBaseline: {
              enum: [
                '-moz-initial',
                'alphabetic',
                'auto',
                'central',
                'hanging',
                'ideographic',
                'inherit',
                'initial',
                'mathematical',
                'middle',
                'no-change',
                'reset-size',
                'revert',
                'text-after-edge',
                'text-before-edge',
                'unset',
                'use-script',
              ],
              type: 'string',
            },
            fill: {
              type: 'string',
            },
            fillOpacity: {
              anyOf: [
                {
                  enum: [
                    '-moz-initial',
                    'inherit',
                    'initial',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                {
                  type: 'number',
                },
              ],
            },
            fillRule: {
              enum: [
                '-moz-initial',
                'evenodd',
                'inherit',
                'initial',
                'nonzero',
                'revert',
                'unset',
              ],
              type: 'string',
            },
            floodColor: {
              type: 'string',
            },
            floodOpacity: {
              anyOf: [
                {
                  enum: [
                    '-moz-initial',
                    'inherit',
                    'initial',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                {
                  type: 'number',
                },
              ],
            },
            glyphOrientationVertical: {
              type: ['string', 'number'],
            },
            lightingColor: {
              type: 'string',
            },
            marker: {
              type: 'string',
            },
            markerEnd: {
              type: 'string',
            },
            markerMid: {
              type: 'string',
            },
            markerStart: {
              type: 'string',
            },
            shapeRendering: {
              enum: [
                '-moz-initial',
                'auto',
                'crispEdges',
                'geometricPrecision',
                'inherit',
                'initial',
                'optimizeSpeed',
                'revert',
                'unset',
              ],
              type: 'string',
            },
            stopColor: {
              type: 'string',
            },
            stopOpacity: {
              anyOf: [
                {
                  enum: [
                    '-moz-initial',
                    'inherit',
                    'initial',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                {
                  type: 'number',
                },
              ],
            },
            stroke: {
              type: 'string',
            },
            strokeDasharray: {
              type: ['string', 'number'],
            },
            strokeDashoffset: {
              type: ['string', 'number'],
            },
            strokeLinecap: {
              enum: [
                '-moz-initial',
                'butt',
                'inherit',
                'initial',
                'revert',
                'round',
                'square',
                'unset',
              ],
              type: 'string',
            },
            strokeLinejoin: {
              enum: [
                '-moz-initial',
                'bevel',
                'inherit',
                'initial',
                'miter',
                'revert',
                'round',
                'unset',
              ],
              type: 'string',
            },
            strokeMiterlimit: {
              anyOf: [
                {
                  enum: [
                    '-moz-initial',
                    'inherit',
                    'initial',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                {
                  type: 'number',
                },
              ],
            },
            strokeOpacity: {
              anyOf: [
                {
                  enum: [
                    '-moz-initial',
                    'inherit',
                    'initial',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                {
                  type: 'number',
                },
              ],
            },
            strokeWidth: {
              type: ['string', 'number'],
            },
            textAnchor: {
              enum: [
                '-moz-initial',
                'end',
                'inherit',
                'initial',
                'middle',
                'revert',
                'start',
                'unset',
              ],
              type: 'string',
            },
            vectorEffect: {
              enum: [
                '-moz-initial',
                'inherit',
                'initial',
                'non-scaling-stroke',
                'none',
                'revert',
                'unset',
              ],
              type: 'string',
            },
          },
        },
        title: {
          type: 'string',
        },
        dir: {
          type: 'string',
        },
        slot: {
          type: 'string',
        },
        media: {
          type: 'string',
        },
        hidden: {
          type: 'boolean',
        },
        color: {
          type: 'string',
        },
        download: {},
        hrefLang: {
          type: 'string',
        },
        ping: {
          type: 'string',
        },
        rel: {
          type: 'string',
        },
        referrerPolicy: {
          type: 'string',
        },
        defaultChecked: {
          type: 'boolean',
        },
        defaultValue: {
          anyOf: [
            {
              type: 'array',
              items: {
                type: 'string',
              },
            },
            {
              type: ['string', 'number'],
            },
          ],
        },
        suppressContentEditableWarning: {
          type: 'boolean',
        },
        suppressHydrationWarning: {
          type: 'boolean',
        },
        accessKey: {
          type: 'string',
        },
        contentEditable: {
          type: 'boolean',
        },
        contextMenu: {
          type: 'string',
        },
        draggable: {
          type: 'boolean',
        },
        id: {
          type: 'string',
        },
        lang: {
          type: 'string',
        },
        placeholder: {
          type: 'string',
        },
        spellCheck: {
          type: 'boolean',
        },
        tabIndex: {
          type: 'number',
        },
        radioGroup: {
          type: 'string',
        },
        role: {
          type: 'string',
        },
        about: {
          type: 'string',
        },
        datatype: {
          type: 'string',
        },
        inlist: {},
        prefix: {
          type: 'string',
        },
        property: {
          type: 'string',
        },
        resource: {
          type: 'string',
        },
        typeof: {
          type: 'string',
        },
        vocab: {
          type: 'string',
        },
        autoCapitalize: {
          type: 'string',
        },
        autoCorrect: {
          type: 'string',
        },
        autoSave: {
          type: 'string',
        },
        itemProp: {
          type: 'string',
        },
        itemScope: {
          type: 'boolean',
        },
        itemType: {
          type: 'string',
        },
        itemID: {
          type: 'string',
        },
        itemRef: {
          type: 'string',
        },
        results: {
          type: 'number',
        },
        security: {
          type: 'string',
        },
        unselectable: {
          enum: ['off', 'on'],
          type: 'string',
        },
        inputMode: {
          description:
            'Hints at the type of data that might be entered by the user while editing the element or its contents',
          enum: [
            'decimal',
            'email',
            'none',
            'numeric',
            'search',
            'tel',
            'text',
            'url',
          ],
          type: 'string',
        },
        is: {
          description:
            'Specify that a standard HTML element should behave like a defined custom built-in element',
          type: 'string',
        },
        'aria-activedescendant': {
          description:
            'Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.',
          type: 'string',
        },
        'aria-atomic': {
          description:
            'Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.',
          enum: [false, 'false', true, 'true'],
        },
        'aria-autocomplete': {
          description:
            "Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be\npresented if they are made.",
          enum: ['both', 'inline', 'list', 'none'],
          type: 'string',
        },
        'aria-busy': {
          description:
            'Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.',
          enum: [false, 'false', true, 'true'],
        },
        'aria-checked': {
          description:
            'Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.',
          enum: [false, 'false', 'mixed', true, 'true'],
        },
        'aria-colcount': {
          description:
            'Defines the total number of columns in a table, grid, or treegrid.',
          type: 'number',
        },
        'aria-colindex': {
          description:
            "Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.",
          type: 'number',
        },
        'aria-colspan': {
          description:
            'Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.',
          type: 'number',
        },
        'aria-controls': {
          description:
            'Identifies the element (or elements) whose contents or presence are controlled by the current element.',
          type: 'string',
        },
        'aria-current': {
          description:
            'Indicates the element that represents the current item within a container or set of related elements.',
          enum: [
            'date',
            false,
            'false',
            'location',
            'page',
            'step',
            'time',
            true,
            'true',
          ],
        },
        'aria-describedby': {
          description:
            'Identifies the element (or elements) that describes the object.',
          type: 'string',
        },
        'aria-details': {
          description:
            'Identifies the element that provides a detailed, extended description for the object.',
          type: 'string',
        },
        'aria-disabled': {
          description:
            'Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.',
          enum: [false, 'false', true, 'true'],
        },
        'aria-dropeffect': {
          description:
            'Indicates what functions can be performed when a dragged object is released on the drop target.',
          enum: ['copy', 'execute', 'link', 'move', 'none', 'popup'],
          type: 'string',
        },
        'aria-errormessage': {
          description:
            'Identifies the element that provides an error message for the object.',
          type: 'string',
        },
        'aria-expanded': {
          description:
            'Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.',
          enum: [false, 'false', true, 'true'],
        },
        'aria-flowto': {
          description:
            "Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,\nallows assistive technology to override the general default of reading in document source order.",
          type: 'string',
        },
        'aria-grabbed': {
          description:
            'Indicates an element\'s "grabbed" state in a drag-and-drop operation.',
          enum: [false, 'false', true, 'true'],
        },
        'aria-haspopup': {
          description:
            'Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.',
          enum: [
            'dialog',
            false,
            'false',
            'grid',
            'listbox',
            'menu',
            'tree',
            true,
            'true',
          ],
        },
        'aria-hidden': {
          description:
            'Indicates whether the element is exposed to an accessibility API.',
          enum: [false, 'false', true, 'true'],
        },
        'aria-invalid': {
          description:
            'Indicates the entered value does not conform to the format expected by the application.',
          enum: [false, 'false', 'grammar', 'spelling', true, 'true'],
        },
        'aria-keyshortcuts': {
          description:
            'Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.',
          type: 'string',
        },
        'aria-label': {
          description:
            'Defines a string value that labels the current element.',
          type: 'string',
        },
        'aria-labelledby': {
          description:
            'Identifies the element (or elements) that labels the current element.',
          type: 'string',
        },
        'aria-level': {
          description:
            'Defines the hierarchical level of an element within a structure.',
          type: 'number',
        },
        'aria-live': {
          description:
            'Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.',
          enum: ['assertive', 'off', 'polite'],
          type: 'string',
        },
        'aria-modal': {
          description: 'Indicates whether an element is modal when displayed.',
          enum: [false, 'false', true, 'true'],
        },
        'aria-multiline': {
          description:
            'Indicates whether a text box accepts multiple lines of input or only a single line.',
          enum: [false, 'false', true, 'true'],
        },
        'aria-multiselectable': {
          description:
            'Indicates that the user may select more than one item from the current selectable descendants.',
          enum: [false, 'false', true, 'true'],
        },
        'aria-orientation': {
          description:
            "Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.",
          enum: ['horizontal', 'vertical'],
          type: 'string',
        },
        'aria-owns': {
          description:
            'Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship\nbetween DOM elements where the DOM hierarchy cannot be used to represent the relationship.',
          type: 'string',
        },
        'aria-placeholder': {
          description:
            'Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.\nA hint could be a sample value or a brief description of the expected format.',
          type: 'string',
        },
        'aria-posinset': {
          description:
            "Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.",
          type: 'number',
        },
        'aria-pressed': {
          description:
            'Indicates the current "pressed" state of toggle buttons.',
          enum: [false, 'false', 'mixed', true, 'true'],
        },
        'aria-readonly': {
          description:
            'Indicates that the element is not editable, but is otherwise operable.',
          enum: [false, 'false', true, 'true'],
        },
        'aria-relevant': {
          description:
            'Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.',
          enum: ['additions', 'additions text', 'all', 'removals', 'text'],
          type: 'string',
        },
        'aria-required': {
          description:
            'Indicates that user input is required on the element before a form may be submitted.',
          enum: [false, 'false', true, 'true'],
        },
        'aria-roledescription': {
          description:
            'Defines a human-readable, author-localized description for the role of an element.',
          type: 'string',
        },
        'aria-rowcount': {
          description:
            'Defines the total number of rows in a table, grid, or treegrid.',
          type: 'number',
        },
        'aria-rowindex': {
          description:
            "Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.",
          type: 'number',
        },
        'aria-rowspan': {
          description:
            'Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.',
          type: 'number',
        },
        'aria-selected': {
          description:
            'Indicates the current "selected" state of various widgets.',
          enum: [false, 'false', true, 'true'],
        },
        'aria-setsize': {
          description:
            'Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.',
          type: 'number',
        },
        'aria-sort': {
          description:
            'Indicates if items in a table or grid are sorted in ascending or descending order.',
          enum: ['ascending', 'descending', 'none', 'other'],
          type: 'string',
        },
        'aria-valuemax': {
          description: 'Defines the maximum allowed value for a range widget.',
          type: 'number',
        },
        'aria-valuemin': {
          description: 'Defines the minimum allowed value for a range widget.',
          type: 'number',
        },
        'aria-valuenow': {
          description: 'Defines the current value for a range widget.',
          type: 'number',
        },
        'aria-valuetext': {
          description:
            'Defines the human readable text alternative of aria-valuenow for a range widget.',
          type: 'string',
        },
        dangerouslySetInnerHTML: {
          type: 'object',
          properties: {
            __html: {
              type: 'string',
            },
          },
        },
        onCopy: {
          type: 'object',
        },
        onCopyCapture: {
          type: 'object',
        },
        onCut: {
          type: 'object',
        },
        onCutCapture: {
          type: 'object',
        },
        onPaste: {
          type: 'object',
        },
        onPasteCapture: {
          type: 'object',
        },
        onCompositionEnd: {
          type: 'object',
        },
        onCompositionEndCapture: {
          type: 'object',
        },
        onCompositionStart: {
          type: 'object',
        },
        onCompositionStartCapture: {
          type: 'object',
        },
        onCompositionUpdate: {
          type: 'object',
        },
        onCompositionUpdateCapture: {
          type: 'object',
        },
        onFocus: {
          type: 'object',
        },
        onFocusCapture: {
          type: 'object',
        },
        onBlur: {
          type: 'object',
        },
        onBlurCapture: {
          type: 'object',
        },
        onChange: {
          type: 'object',
        },
        onChangeCapture: {
          type: 'object',
        },
        onBeforeInput: {
          type: 'object',
        },
        onBeforeInputCapture: {
          type: 'object',
        },
        onInput: {
          type: 'object',
        },
        onInputCapture: {
          type: 'object',
        },
        onReset: {
          type: 'object',
        },
        onResetCapture: {
          type: 'object',
        },
        onSubmit: {
          type: 'object',
        },
        onSubmitCapture: {
          type: 'object',
        },
        onInvalid: {
          type: 'object',
        },
        onInvalidCapture: {
          type: 'object',
        },
        onLoad: {
          type: 'object',
        },
        onLoadCapture: {
          type: 'object',
        },
        onError: {
          type: 'object',
        },
        onErrorCapture: {
          type: 'object',
        },
        onKeyDown: {
          type: 'object',
        },
        onKeyDownCapture: {
          type: 'object',
        },
        onKeyPress: {
          type: 'object',
        },
        onKeyPressCapture: {
          type: 'object',
        },
        onKeyUp: {
          type: 'object',
        },
        onKeyUpCapture: {
          type: 'object',
        },
        onAbort: {
          type: 'object',
        },
        onAbortCapture: {
          type: 'object',
        },
        onCanPlay: {
          type: 'object',
        },
        onCanPlayCapture: {
          type: 'object',
        },
        onCanPlayThrough: {
          type: 'object',
        },
        onCanPlayThroughCapture: {
          type: 'object',
        },
        onDurationChange: {
          type: 'object',
        },
        onDurationChangeCapture: {
          type: 'object',
        },
        onEmptied: {
          type: 'object',
        },
        onEmptiedCapture: {
          type: 'object',
        },
        onEncrypted: {
          type: 'object',
        },
        onEncryptedCapture: {
          type: 'object',
        },
        onEnded: {
          type: 'object',
        },
        onEndedCapture: {
          type: 'object',
        },
        onLoadedData: {
          type: 'object',
        },
        onLoadedDataCapture: {
          type: 'object',
        },
        onLoadedMetadata: {
          type: 'object',
        },
        onLoadedMetadataCapture: {
          type: 'object',
        },
        onLoadStart: {
          type: 'object',
        },
        onLoadStartCapture: {
          type: 'object',
        },
        onPause: {
          type: 'object',
        },
        onPauseCapture: {
          type: 'object',
        },
        onPlay: {
          type: 'object',
        },
        onPlayCapture: {
          type: 'object',
        },
        onPlaying: {
          type: 'object',
        },
        onPlayingCapture: {
          type: 'object',
        },
        onProgress: {
          type: 'object',
        },
        onProgressCapture: {
          type: 'object',
        },
        onRateChange: {
          type: 'object',
        },
        onRateChangeCapture: {
          type: 'object',
        },
        onSeeked: {
          type: 'object',
        },
        onSeekedCapture: {
          type: 'object',
        },
        onSeeking: {
          type: 'object',
        },
        onSeekingCapture: {
          type: 'object',
        },
        onStalled: {
          type: 'object',
        },
        onStalledCapture: {
          type: 'object',
        },
        onSuspend: {
          type: 'object',
        },
        onSuspendCapture: {
          type: 'object',
        },
        onTimeUpdate: {
          type: 'object',
        },
        onTimeUpdateCapture: {
          type: 'object',
        },
        onVolumeChange: {
          type: 'object',
        },
        onVolumeChangeCapture: {
          type: 'object',
        },
        onWaiting: {
          type: 'object',
        },
        onWaitingCapture: {
          type: 'object',
        },
        onAuxClick: {
          type: 'object',
        },
        onAuxClickCapture: {
          type: 'object',
        },
        onClickCapture: {
          type: 'object',
        },
        onContextMenu: {
          type: 'object',
        },
        onContextMenuCapture: {
          type: 'object',
        },
        onDoubleClick: {
          type: 'object',
        },
        onDoubleClickCapture: {
          type: 'object',
        },
        onDrag: {
          type: 'object',
        },
        onDragCapture: {
          type: 'object',
        },
        onDragEnd: {
          type: 'object',
        },
        onDragEndCapture: {
          type: 'object',
        },
        onDragEnter: {
          type: 'object',
        },
        onDragEnterCapture: {
          type: 'object',
        },
        onDragExit: {
          type: 'object',
        },
        onDragExitCapture: {
          type: 'object',
        },
        onDragLeave: {
          type: 'object',
        },
        onDragLeaveCapture: {
          type: 'object',
        },
        onDragOver: {
          type: 'object',
        },
        onDragOverCapture: {
          type: 'object',
        },
        onDragStart: {
          type: 'object',
        },
        onDragStartCapture: {
          type: 'object',
        },
        onDrop: {
          type: 'object',
        },
        onDropCapture: {
          type: 'object',
        },
        onMouseDown: {
          type: 'object',
        },
        onMouseDownCapture: {
          type: 'object',
        },
        onMouseEnter: {
          type: 'object',
        },
        onMouseLeave: {
          type: 'object',
        },
        onMouseMove: {
          type: 'object',
        },
        onMouseMoveCapture: {
          type: 'object',
        },
        onMouseOut: {
          type: 'object',
        },
        onMouseOutCapture: {
          type: 'object',
        },
        onMouseOver: {
          type: 'object',
        },
        onMouseOverCapture: {
          type: 'object',
        },
        onMouseUp: {
          type: 'object',
        },
        onMouseUpCapture: {
          type: 'object',
        },
        onSelect: {
          type: 'object',
        },
        onSelectCapture: {
          type: 'object',
        },
        onTouchCancel: {
          type: 'object',
        },
        onTouchCancelCapture: {
          type: 'object',
        },
        onTouchEnd: {
          type: 'object',
        },
        onTouchEndCapture: {
          type: 'object',
        },
        onTouchMove: {
          type: 'object',
        },
        onTouchMoveCapture: {
          type: 'object',
        },
        onTouchStart: {
          type: 'object',
        },
        onTouchStartCapture: {
          type: 'object',
        },
        onPointerDown: {
          type: 'object',
        },
        onPointerDownCapture: {
          type: 'object',
        },
        onPointerMove: {
          type: 'object',
        },
        onPointerMoveCapture: {
          type: 'object',
        },
        onPointerUp: {
          type: 'object',
        },
        onPointerUpCapture: {
          type: 'object',
        },
        onPointerCancel: {
          type: 'object',
        },
        onPointerCancelCapture: {
          type: 'object',
        },
        onPointerEnter: {
          type: 'object',
        },
        onPointerEnterCapture: {
          type: 'object',
        },
        onPointerLeave: {
          type: 'object',
        },
        onPointerLeaveCapture: {
          type: 'object',
        },
        onPointerOver: {
          type: 'object',
        },
        onPointerOverCapture: {
          type: 'object',
        },
        onPointerOut: {
          type: 'object',
        },
        onPointerOutCapture: {
          type: 'object',
        },
        onGotPointerCapture: {
          type: 'object',
        },
        onGotPointerCaptureCapture: {
          type: 'object',
        },
        onLostPointerCapture: {
          type: 'object',
        },
        onLostPointerCaptureCapture: {
          type: 'object',
        },
        onScroll: {
          type: 'object',
        },
        onScrollCapture: {
          type: 'object',
        },
        onWheel: {
          type: 'object',
        },
        onWheelCapture: {
          type: 'object',
        },
        onAnimationStart: {
          type: 'object',
        },
        onAnimationStartCapture: {
          type: 'object',
        },
        onAnimationEnd: {
          type: 'object',
        },
        onAnimationEndCapture: {
          type: 'object',
        },
        onAnimationIteration: {
          type: 'object',
        },
        onAnimationIterationCapture: {
          type: 'object',
        },
        onTransitionEnd: {
          type: 'object',
        },
        onTransitionEndCapture: {
          type: 'object',
        },
        htmlType: {
          enum: ['button', 'reset', 'submit'],
          type: 'string',
        },
        form: {
          type: 'string',
        },
        disabled: {
          type: 'boolean',
        },
        autoFocus: {
          type: 'boolean',
        },
        formAction: {
          type: 'string',
        },
        formEncType: {
          type: 'string',
        },
        formMethod: {
          type: 'string',
        },
        formNoValidate: {
          type: 'boolean',
        },
        formTarget: {
          type: 'string',
        },
        name: {
          type: 'string',
        },
        value: {
          anyOf: [
            {
              type: 'array',
              items: {
                type: 'string',
              },
            },
            {
              type: ['string', 'number'],
            },
          ],
        },
      },
      $schema: 'http://json-schema.org/draft-07/schema#',
    },
  ],
}

export const CreateAppInputSchema: JSONSchema7 = {
  type: 'object',
  properties: {
    title: {
      type: 'string',
    },
  },
  $schema: 'http://json-schema.org/draft-07/schema#',
}

export const DeleteAppInputSchema: JSONSchema7 = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
    },
  },
  $schema: 'http://json-schema.org/draft-07/schema#',
}

export const DemoGridFormInputSchema: JSONSchema7 = {
  type: 'object',
  properties: {
    email1: {
      type: 'string',
      default: '',
    },
    password0: {
      type: 'string',
      default: '',
    },
    name2: {
      type: 'string',
      default: '',
    },
    nestedFields: {
      type: 'object',
      properties: {
        secondNested: {
          type: 'string',
          default: '',
        },
        firstNested: {
          type: 'string',
          default: '',
        },
      },
    },
    notGroupedField: {
      type: 'string',
      default: '',
    },
  },
  $schema: 'http://json-schema.org/draft-07/schema#',
}

const DemoGridFormInputDecorators: DecoratorsMap = {
  email1: {
    __grid: {
      order: 1,
      span: 12,
    },
  },
  password0: {
    __grid: {
      order: 1,
      span: 16,
    },
  },
  name2: {
    __grid: {
      order: 2,
      span: 8,
    },
  },
  nestedFields: {
    __grid: {
      order: 0,
      span: 12,
    },
    firstNested: {
      __grid: {
        order: 0,
        span: 12,
      },
    },
    secondNested: {
      __grid: {
        order: 1,
        span: 12,
      },
    },
  },
}

export const DemoGridFormInputFormProps = {
  ObjectFieldTemplate: ObjectFieldTemplateFactory(DemoGridFormInputDecorators),
}

export const GetAppInputSchema: JSONSchema7 = {
  type: 'object',
  properties: {
    appId: {
      type: 'string',
    },
  },
  $schema: 'http://json-schema.org/draft-07/schema#',
}

export const GetAppsInputSchema: JSONSchema7 = {
  type: 'object',
  $schema: 'http://json-schema.org/draft-07/schema#',
}

export const UpdateAppInputSchema: JSONSchema7 = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
    },
    title: {
      type: 'string',
    },
  },
  $schema: 'http://json-schema.org/draft-07/schema#',
}

export const AddChildVertexInputSchema: JSONSchema7 = {
  type: 'object',
  properties: {
    parentVertexId: {
      type: 'string',
    },
    vertex: {
      type: 'object',
      properties: {
        type: {
          enum: [
            'React_Affix',
            'React_Alert',
            'React_Anchor',
            'React_Anchor_Link',
            'React_AutoComplete',
            'React_Avatar',
            'React_BackTop',
            'React_Badge',
            'React_Breadcrumb',
            'React_Breadcrumb_Item',
            'React_Button',
            'React_Calendar',
            'React_Card',
            'React_Card_Grid',
            'React_Card_Meta',
            'React_Carousel',
            'React_Cascader',
            'React_Checkbox',
            'React_Collapse',
            'React_Collapse_Panel',
            'React_Comment',
            'React_ConfigProvider',
            'React_DatePicker',
            'React_Descriptions',
            'React_Descriptions_Item',
            'React_Divider',
            'React_Drawer',
            'React_Dropdown',
            'React_Empty',
            'React_Form',
            'React_Form_Item',
            'React_Form_ItemHook',
            'React_Form_List',
            'React_Fragment',
            'React_Html_A',
            'React_Html_Div',
            'React_Html_P',
            'React_Html_Span',
            'React_Icon',
            'React_Input',
            'React_InputNumber',
            'React_Layout',
            'React_Layout_Content',
            'React_Layout_Footer',
            'React_Layout_Header',
            'React_Layout_Sider',
            'React_List',
            'React_List_Item',
            'React_List_Item_Meta',
            'React_Mapper',
            'React_Mentions',
            'React_Mentions_Option',
            'React_Menu',
            'React_Menu_Item',
            'React_Menu_ItemGroup',
            'React_Menu_SubMenu',
            'React_Modal',
            'React_PageHeader',
            'React_Pagination',
            'React_Popconfirm',
            'React_Popover',
            'React_Progress',
            'React_Provider',
            'React_RGL_Container',
            'React_RGL_Item',
            'React_RGL_ResponsiveContainer',
            'React_Radio',
            'React_Radio_Group',
            'React_Rate',
            'React_RenderComponent',
            'React_RenderContainer',
            'React_Result',
            'React_Select',
            'React_Select_Option',
            'React_Skeleton',
            'React_Slider',
            'React_Space',
            'React_Spin',
            'React_Statistic',
            'React_Steps',
            'React_Steps_Step',
            'React_Switch',
            'React_Table',
            'React_Tabs',
            'React_Tabs_TabPane',
            'React_Tag',
            'React_Text',
            'React_TimePicker',
            'React_Timeline',
            'React_Timeline_Item',
            'React_Tooltip',
            'React_Transfer',
            'React_Tree',
            'React_TreeNode',
            'React_TreeSelect',
            'React_Typography',
            'React_Typography_Paragraph',
            'React_Typography_Text',
            'React_Typography_Title',
            'React_Upload',
          ],
          type: 'string',
        },
        props: {
          type: 'object',
          properties: {},
          additionalProperties: true,
        },
      },
    },
    order: {
      type: 'number',
    },
  },
  $schema: 'http://json-schema.org/draft-07/schema#',
}

export const CreateGraphInputSchema: JSONSchema7 = {
  type: 'object',
  properties: {
    label: {
      type: 'string',
    },
  },
  $schema: 'http://json-schema.org/draft-07/schema#',
}

export const DeleteVertexInputSchema: JSONSchema7 = {
  type: 'object',
  properties: {
    vertexId: {
      type: 'string',
    },
  },
  $schema: 'http://json-schema.org/draft-07/schema#',
}

export const GetGraphInputSchema: JSONSchema7 = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
    },
  },
  $schema: 'http://json-schema.org/draft-07/schema#',
}

export const GetTreeInputSchema: JSONSchema7 = {
  type: 'object',
  properties: {
    graphId: {
      type: 'string',
    },
  },
  $schema: 'http://json-schema.org/draft-07/schema#',
}

export const GetVertexInputSchema: JSONSchema7 = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
    },
  },
  $schema: 'http://json-schema.org/draft-07/schema#',
}

export const MoveVertexInputSchema: JSONSchema7 = {
  type: 'object',
  properties: {
    currentVertexId: {
      type: 'string',
    },
    parentVertexId: {
      type: 'string',
    },
  },
  $schema: 'http://json-schema.org/draft-07/schema#',
}

export const UpdateEdgeInputSchema: JSONSchema7 = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
    },
    order: {
      type: 'number',
    },
    type: {
      enum: ['Graph', 'Vertex'],
      type: 'string',
    },
    source: {
      type: 'string',
    },
    target: {
      type: 'string',
    },
  },
  $schema: 'http://json-schema.org/draft-07/schema#',
}

export const UpdateVertexInputSchema: JSONSchema7 = {
  type: 'object',
  properties: {
    vertexId: {
      type: 'string',
      minLength: 3,
    },
    props: {
      oneOf: [
        {
          allOf: [
            {
              type: 'object',
              properties: {
                'data-grid': {
                  description:
                    'From T, pick a set of properties whose keys are in the union K',
                  type: 'object',
                  properties: {
                    x: {
                      description: 'X position in grid units.',
                      type: 'number',
                    },
                    y: {
                      description: 'Y position in grid units.',
                      type: 'number',
                    },
                    h: {
                      description: 'Height in grid units.',
                      type: 'number',
                    },
                    w: {
                      description: 'Width in grid units.',
                      type: 'number',
                    },
                  },
                },
              },
            },
            {
              type: 'object',
              properties: {
                key: {
                  type: 'string',
                },
              },
            },
          ],
          $schema: 'http://json-schema.org/draft-07/schema#',
        },
        {
          description: 'Make all properties in T optional',
          type: 'object',
          properties: {
            href: {
              type: 'string',
            },
            target: {
              type: 'string',
            },
            onClick: {
              type: 'object',
            },
            type: {
              enum: ['dashed', 'default', 'ghost', 'link', 'primary', 'text'],
              type: 'string',
            },
            icon: {
              $ref: '#/definitions/React.ReactNode',
            },
            shape: {
              enum: ['circle', 'round'],
              type: 'string',
            },
            size: {
              enum: ['large', 'middle', 'small'],
              type: 'string',
            },
            loading: {
              anyOf: [
                {
                  type: 'object',
                  properties: {
                    delay: {
                      type: 'number',
                    },
                  },
                },
                {
                  type: 'boolean',
                },
              ],
            },
            prefixCls: {
              type: 'string',
            },
            className: {
              type: 'string',
            },
            ghost: {
              type: 'boolean',
            },
            danger: {
              type: 'boolean',
            },
            block: {
              type: 'boolean',
            },
            children: {
              $ref: '#/definitions/React.ReactNode',
            },
            style: {
              type: 'object',
              properties: {
                alignContent: {
                  description:
                    'The CSS **`align-content`** property sets how the browser distributes space between and around content items along the cross-axis of a flexbox container, and the main-axis of a grid container.\n\n**Syntax**: `normal | <baseline-position> | <content-distribution> | <overflow-position>? <content-position>`\n\n**Initial value**: `normal`\n\n---\n\n_Supported in Flex Layout_\n\n|  Chrome  | Firefox |  Safari   |  Edge  |   IE   |\n| :------: | :-----: | :-------: | :----: | :----: |\n|  **29**  | **28**  |   **9**   | **12** | **11** |\n| 21 _-x-_ |         | 6.1 _-x-_ |        |        |\n\n---\n\n_Supported in Grid Layout_\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **57** | **52**  | **10.1** | **16** | No  |\n\n---',
                  type: 'string',
                },
                alignItems: {
                  description:
                    'The CSS **`align-items`** property sets the `align-self` value on all direct children as a group. The align-self property sets the alignment of an item within its containing block. In Flexbox it controls the alignment of items on the Cross Axis, in Grid Layout it controls the alignment of items on the Block Axis within their grid area.\n\n**Syntax**: `normal | stretch | <baseline-position> | [ <overflow-position>? <self-position> ]`\n\n**Initial value**: `normal`\n\n---\n\n_Supported in Flex Layout_\n\n|  Chrome  | Firefox | Safari  |  Edge  |   IE   |\n| :------: | :-----: | :-----: | :----: | :----: |\n|  **52**  | **20**  |  **9**  | **12** | **11** |\n| 21 _-x-_ |         | 7 _-x-_ |        |        |\n\n---\n\n_Supported in Grid Layout_\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **57** | **52**  | **10.1** | **16** | No  |\n\n---',
                  type: 'string',
                },
                alignSelf: {
                  description:
                    "The **`align-self`** CSS property aligns flex items of the current flex line overriding the `align-items` value. If any of the item's cross-axis margin is set to `auto`, then `align-self` is ignored. In Grid layout `align-self` aligns the item inside the grid area.\n\n**Syntax**: `auto | normal | stretch | <baseline-position> | <overflow-position>? <self-position>`\n\n**Initial value**: `auto`\n\n---\n\n_Supported in Flex Layout_\n\n|  Chrome  | Firefox |  Safari   |  Edge  |   IE   |\n| :------: | :-----: | :-------: | :----: | :----: |\n|  **36**  | **20**  |   **9**   | **12** | **11** |\n| 21 _-x-_ |         | 6.1 _-x-_ |        |        |\n\n---\n\n_Supported in Grid Layout_\n\n| Chrome | Firefox |  Safari  |  Edge  |      IE      |\n| :----: | :-----: | :------: | :----: | :----------: |\n| **57** | **52**  | **10.1** | **16** | **10** _-x-_ |\n\n---",
                  type: 'string',
                },
                alignTracks: {
                  description:
                    'The **`align-tracks`** CSS property sets the alignment in the masonry axis for grid containers that have masonry in their block axis.\n\n**Syntax**: `[ normal | <baseline-position> | <content-distribution> | <overflow-position>? <content-position> ]#`\n\n**Initial value**: `normal`',
                  type: 'string',
                },
                animationDelay: {
                  description:
                    'The **`animation-delay`** CSS property sets when an animation starts. The animation can start later, immediately from its beginning, or immediately and partway through the animation.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`\n\n| Chrome  | Firefox | Safari  |  Edge  |   IE   |\n| :-----: | :-----: | :-----: | :----: | :----: |\n| **43**  | **16**  |  **9**  | **12** | **10** |\n| 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |',
                  type: 'string',
                },
                animationDirection: {
                  description:
                    'The **`animation-direction`** CSS property sets whether an animation should play forwards, backwards, or alternating back and forth.\n\n**Syntax**: `<single-animation-direction>#`\n\n**Initial value**: `normal`\n\n| Chrome  | Firefox | Safari  |  Edge  |   IE   |\n| :-----: | :-----: | :-----: | :----: | :----: |\n| **43**  | **16**  |  **9**  | **12** | **10** |\n| 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |',
                  type: 'string',
                },
                animationDuration: {
                  description:
                    'The **`animation-duration`** CSS property sets the length of time that an animation takes to complete one cycle.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`\n\n| Chrome  | Firefox | Safari  |  Edge  |   IE   |\n| :-----: | :-----: | :-----: | :----: | :----: |\n| **43**  | **16**  |  **9**  | **12** | **10** |\n| 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |',
                  type: 'string',
                },
                animationFillMode: {
                  description:
                    'The **`animation-fill-mode`** CSS property sets how a CSS animation applies styles to its target before and after its execution.\n\n**Syntax**: `<single-animation-fill-mode>#`\n\n**Initial value**: `none`\n\n| Chrome  | Firefox | Safari  |  Edge  |   IE   |\n| :-----: | :-----: | :-----: | :----: | :----: |\n| **43**  | **16**  |  **9**  | **12** | **10** |\n| 3 _-x-_ | 5 _-x-_ | 5 _-x-_ |        |        |',
                  type: 'string',
                },
                animationIterationCount: {
                  description:
                    'The **`animation-iteration-count`** CSS property sets the number of times an animation cycle should be played before stopping.\n\n**Syntax**: `<single-animation-iteration-count>#`\n\n**Initial value**: `1`\n\n| Chrome  | Firefox | Safari  |  Edge  |   IE   |\n| :-----: | :-----: | :-----: | :----: | :----: |\n| **43**  | **16**  |  **9**  | **12** | **10** |\n| 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |',
                  type: ['string', 'number'],
                },
                animationName: {
                  description:
                    'The **`animation-name`** CSS property sets one or more animations to apply to an element. Each name is an `@keyframes` at-rule that sets the property values for the animation sequence.\n\n**Syntax**: `[ none | <keyframes-name> ]#`\n\n**Initial value**: `none`\n\n| Chrome  | Firefox | Safari  |  Edge  |   IE   |\n| :-----: | :-----: | :-----: | :----: | :----: |\n| **43**  | **16**  |  **9**  | **12** | **10** |\n| 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |',
                  type: 'string',
                },
                animationPlayState: {
                  description:
                    'The **`animation-play-state`** CSS property sets whether an animation is running or paused.\n\n**Syntax**: `<single-animation-play-state>#`\n\n**Initial value**: `running`\n\n| Chrome  | Firefox | Safari  |  Edge  |   IE   |\n| :-----: | :-----: | :-----: | :----: | :----: |\n| **43**  | **16**  |  **9**  | **12** | **10** |\n| 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |',
                  type: 'string',
                },
                animationTimingFunction: {
                  description:
                    'The `**animation-timing-function**` CSS property sets how an animation progresses through the duration of each cycle.\n\n**Syntax**: `<timing-function>#`\n\n**Initial value**: `ease`\n\n| Chrome  | Firefox | Safari  |  Edge  |   IE   |\n| :-----: | :-----: | :-----: | :----: | :----: |\n| **43**  | **16**  |  **9**  | **12** | **10** |\n| 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |',
                  type: 'string',
                },
                appearance: {
                  description:
                    "The **`-moz-appearance`** CSS property is used in Gecko (Firefox) to display an element using platform-native styling based on the operating system's theme.\n\n**Syntax**: `none | auto | textfield | menulist-button | <compat-auto>`\n\n**Initial value**: `auto`\n\n| Chrome  | Firefox |   Safari    |   Edge   | IE  |\n| :-----: | :-----: | :---------: | :------: | :-: |\n| **84**  | **80**  | **3** _-x-_ |  **84**  | No  |\n| 1 _-x-_ | 1 _-x-_ |             | 12 _-x-_ |     |",
                  enum: [
                    '-moz-initial',
                    'auto',
                    'button',
                    'checkbox',
                    'inherit',
                    'initial',
                    'listbox',
                    'menulist',
                    'menulist-button',
                    'meter',
                    'none',
                    'progress-bar',
                    'push-button',
                    'radio',
                    'revert',
                    'searchfield',
                    'slider-horizontal',
                    'square-button',
                    'textarea',
                    'textfield',
                    'unset',
                  ],
                  type: 'string',
                },
                aspectRatio: {
                  description:
                    'The **`aspect-ratio`**    CSS property sets a _**preferred aspect ratio**_ for the box, which will be used in the calculation of auto sizes and some other layout functions.\n\n**Syntax**: `auto | <ratio>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n|  n/a   |   n/a   |   No   |  No  | No  |',
                  type: 'string',
                },
                backdropFilter: {
                  description:
                    'The **`backdrop-filter`** CSS property lets you apply graphical effects such as blurring or color shifting to the area behind an element. Because it applies to everything _behind_ the element, to see the effect you must make the element or its background at least partially transparent.\n\n**Syntax**: `none | <filter-function-list>`\n\n**Initial value**: `none`\n\n| Chrome | Firefox |   Safari    |  Edge  | IE  |\n| :----: | :-----: | :---------: | :----: | :-: |\n| **76** |   n/a   | **9** _-x-_ | **17** | No  |',
                  type: 'string',
                },
                backfaceVisibility: {
                  description:
                    'The **`backface-visibility`** CSS property sets whether the back face of an element is visible when turned towards the user.\n\n**Syntax**: `visible | hidden`\n\n**Initial value**: `visible`\n\n|  Chrome  | Firefox  |    Safari     |  Edge  |   IE   |\n| :------: | :------: | :-----------: | :----: | :----: |\n|  **36**  |  **16**  | **5.1** _-x-_ | **12** | **10** |\n| 12 _-x-_ | 10 _-x-_ |               |        |        |',
                  enum: [
                    '-moz-initial',
                    'hidden',
                    'inherit',
                    'initial',
                    'revert',
                    'unset',
                    'visible',
                  ],
                  type: 'string',
                },
                backgroundAttachment: {
                  description:
                    "The **`background-attachment`** CSS property sets whether a background image's position is fixed within the viewport, or scrolls with its containing block.\n\n**Syntax**: `<attachment>#`\n\n**Initial value**: `scroll`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |",
                  type: 'string',
                },
                backgroundBlendMode: {
                  description:
                    "The **`background-blend-mode`** CSS property sets how an element's background images should blend with each other and with the element's background color.\n\n**Syntax**: `<blend-mode>#`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **35** | **30**  | **8**  | **79** | No  |",
                  type: 'string',
                },
                backgroundClip: {
                  description:
                    "The **`background-clip`** CSS property sets whether an element's background `<color>` or `<image>` extends underneath its border.\n\n**Syntax**: `<box>#`\n\n**Initial value**: `border-box`\n\n| Chrome | Firefox |   Safari    |  Edge  |  IE   |\n| :----: | :-----: | :---------: | :----: | :---: |\n| **1**  |  **4**  | **3** _-x-_ | **12** | **9** |",
                  type: 'string',
                },
                backgroundColor: {
                  description:
                    'The **`background-color`** CSS property sets the background color of an element.\n\n**Syntax**: `<color>`\n\n**Initial value**: `transparent`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |',
                  type: 'string',
                },
                backgroundImage: {
                  description:
                    'The **`background-image`** CSS property sets one or more background images on an element.\n\n**Syntax**: `<bg-image>#`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |',
                  type: 'string',
                },
                backgroundOrigin: {
                  description:
                    'The **`background-origin`** CSS property sets the _background positioning area_. In other words, it sets the origin position of an image set with the `background-image` property.\n\n**Syntax**: `<box>#`\n\n**Initial value**: `padding-box`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **4**  | **3**  | **12** | **9** |',
                  type: 'string',
                },
                backgroundPosition: {
                  description:
                    'The **`background-position`** CSS property sets the initial position for each background image. The position is relative to the position layer set by `background-origin`.\n\n**Syntax**: `<bg-position>#`\n\n**Initial value**: `0% 0%`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |',
                  type: ['string', 'number'],
                },
                backgroundPositionX: {
                  description:
                    'The **`background-position-x`** CSS property sets the initial horizontal position for each background image. The position is relative to the position layer set by `background-origin`.\n\n**Syntax**: `[ center | [ [ left | right | x-start | x-end ]? <length-percentage>? ]! ]#`\n\n**Initial value**: `left`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  | **49**  | **1**  | **12** | **6** |',
                  type: ['string', 'number'],
                },
                backgroundPositionY: {
                  description:
                    'The **`background-position-y`** CSS property sets the initial vertical position, relative to the background position layer defined by `background-origin`, for each defined background image.\n\n**Syntax**: `[ center | [ [ top | bottom | y-start | y-end ]? <length-percentage>? ]! ]#`\n\n**Initial value**: `top`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  | **49**  | **1**  | **12** | **6** |',
                  type: ['string', 'number'],
                },
                backgroundRepeat: {
                  description:
                    'The **`background-repeat`** CSS property sets how background images are repeated. A background image can be repeated along the horizontal and vertical axes, or not repeated at all.\n\n**Syntax**: `<repeat-style>#`\n\n**Initial value**: `repeat`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |',
                  type: 'string',
                },
                backgroundSize: {
                  description:
                    "The **`background-size`** CSS property sets the size of the element's background image. The image can be left to its natural size, stretched, or constrained to fit the available space.\n\n**Syntax**: `<bg-size>#`\n\n**Initial value**: `auto auto`\n\n| Chrome  | Firefox | Safari  |  Edge  |  IE   |\n| :-----: | :-----: | :-----: | :----: | :---: |\n|  **3**  |  **4**  |  **5**  | **12** | **9** |\n| 1 _-x-_ |         | 3 _-x-_ |        |       |",
                  type: ['string', 'number'],
                },
                blockOverflow: {
                  description:
                    '**Syntax**: `clip | ellipsis | <string>`\n\n**Initial value**: `clip`',
                  type: 'string',
                },
                blockSize: {
                  description:
                    "The **`block-size`** CSS property defines the horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the `width` or the `height` property, depending on the value of `writing-mode`.\n\n**Syntax**: `<'width'>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **57** | **41**  | **12.1** | **79** | No  |",
                  type: ['string', 'number'],
                },
                borderBlockColor: {
                  description:
                    "The **`border-block-color`** CSS property defines the color of the logical block borders of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color` and `border-bottom-color`, or `border-right-color` and `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-color'>{1,2}`\n\n**Initial value**: `currentcolor`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n|  n/a   | **66**  |   No   | n/a  | No  |",
                  type: 'string',
                },
                borderBlockEndColor: {
                  description:
                    "The **`border-block-end-color`** CSS property defines the color of the logical block-end border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-color'>`\n\n**Initial value**: `currentcolor`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **69** | **41**  | **12.1** | **79** | No  |",
                  type: 'string',
                },
                borderBlockEndStyle: {
                  description:
                    "The **`border-block-end-style`** CSS property defines the style of the logical block end border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-style'>`\n\n**Initial value**: `none`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **69** | **41**  | **12.1** | **79** | No  |",
                  enum: [
                    '-moz-initial',
                    'dashed',
                    'dotted',
                    'double',
                    'groove',
                    'hidden',
                    'inherit',
                    'initial',
                    'inset',
                    'none',
                    'outset',
                    'revert',
                    'ridge',
                    'solid',
                    'unset',
                  ],
                  type: 'string',
                },
                borderBlockEndWidth: {
                  description:
                    "The **`border-block-end-width`** CSS property defines the width of the logical block-end border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-width'>`\n\n**Initial value**: `medium`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **69** | **41**  | **12.1** | **79** | No  |",
                  type: ['string', 'number'],
                },
                borderBlockStartColor: {
                  description:
                    "The **`border-block-start-color`** CSS property defines the color of the logical block-start border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-color'>`\n\n**Initial value**: `currentcolor`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **69** | **41**  | **12.1** | **79** | No  |",
                  type: 'string',
                },
                borderBlockStartStyle: {
                  description:
                    "The **`border-block-start-style`** CSS property defines the style of the logical block start border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-style'>`\n\n**Initial value**: `none`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **69** | **41**  | **12.1** | **79** | No  |",
                  enum: [
                    '-moz-initial',
                    'dashed',
                    'dotted',
                    'double',
                    'groove',
                    'hidden',
                    'inherit',
                    'initial',
                    'inset',
                    'none',
                    'outset',
                    'revert',
                    'ridge',
                    'solid',
                    'unset',
                  ],
                  type: 'string',
                },
                borderBlockStartWidth: {
                  description:
                    "The **`border-block-start-width`** CSS property defines the width of the logical block-start border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-width'>`\n\n**Initial value**: `medium`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **69** | **41**  | **12.1** | **79** | No  |",
                  type: ['string', 'number'],
                },
                borderBlockStyle: {
                  description:
                    "The **`border-block-style`** CSS property defines the style of the logical block borders of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style` and `border-bottom-style`, or `border-left-style` and `border-right-style` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-style'>`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **69** | **66**  |   No   | **79** | No  |",
                  enum: [
                    '-moz-initial',
                    'dashed',
                    'dotted',
                    'double',
                    'groove',
                    'hidden',
                    'inherit',
                    'initial',
                    'inset',
                    'none',
                    'outset',
                    'revert',
                    'ridge',
                    'solid',
                    'unset',
                  ],
                  type: 'string',
                },
                borderBlockWidth: {
                  description:
                    "The **`border-block-width`** CSS property defines the width of the logical block borders of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width` and `border-bottom-width`, or `border-left-width`, and `border-right-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-width'>`\n\n**Initial value**: `medium`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **69** | **66**  |   No   | **79** | No  |",
                  type: ['string', 'number'],
                },
                borderBottomColor: {
                  description:
                    "The **`border-bottom-color`** CSS property sets the color of an element's bottom border. It can also be set with the shorthand CSS properties `border-color` or `border-bottom`.\n\n**Syntax**: `<'border-top-color'>`\n\n**Initial value**: `currentcolor`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |",
                  type: 'string',
                },
                borderBottomLeftRadius: {
                  description:
                    'The **`border-bottom-left-radius`** CSS property rounds the bottom-left corner of an element.\n\n**Syntax**: `<length-percentage>{1,2}`\n\n**Initial value**: `0`\n\n| Chrome  | Firefox | Safari  |  Edge  |  IE   |\n| :-----: | :-----: | :-----: | :----: | :---: |\n|  **4**  |  **4**  |  **5**  | **12** | **9** |\n| 1 _-x-_ |         | 3 _-x-_ |        |       |',
                  type: ['string', 'number'],
                },
                borderBottomRightRadius: {
                  description:
                    'The **`border-bottom-right-radius`** CSS property rounds the bottom-right corner of an element.\n\n**Syntax**: `<length-percentage>{1,2}`\n\n**Initial value**: `0`\n\n| Chrome  | Firefox | Safari  |  Edge  |  IE   |\n| :-----: | :-----: | :-----: | :----: | :---: |\n|  **4**  |  **4**  |  **5**  | **12** | **9** |\n| 1 _-x-_ |         | 3 _-x-_ |        |       |',
                  type: ['string', 'number'],
                },
                borderBottomStyle: {
                  description:
                    "The **`border-bottom-style`** CSS property sets the line style of an element's bottom `border`.\n\n**Syntax**: `<line-style>`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari |  Edge  |   IE    |\n| :----: | :-----: | :----: | :----: | :-----: |\n| **1**  |  **1**  | **1**  | **12** | **5.5** |",
                  enum: [
                    '-moz-initial',
                    'dashed',
                    'dotted',
                    'double',
                    'groove',
                    'hidden',
                    'inherit',
                    'initial',
                    'inset',
                    'none',
                    'outset',
                    'revert',
                    'ridge',
                    'solid',
                    'unset',
                  ],
                  type: 'string',
                },
                borderBottomWidth: {
                  description:
                    'The **`border-bottom-width`** CSS property sets the width of the bottom border of a box.\n\n**Syntax**: `<line-width>`\n\n**Initial value**: `medium`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |',
                  type: ['string', 'number'],
                },
                borderCollapse: {
                  description:
                    'The **`border-collapse`** CSS property sets whether cells inside a `<table>` have shared or separate borders.\n\n**Syntax**: `collapse | separate`\n\n**Initial value**: `separate`\n\n| Chrome | Firefox | Safari  |  Edge  |  IE   |\n| :----: | :-----: | :-----: | :----: | :---: |\n| **1**  |  **1**  | **1.2** | **12** | **5** |',
                  enum: [
                    '-moz-initial',
                    'collapse',
                    'inherit',
                    'initial',
                    'revert',
                    'separate',
                    'unset',
                  ],
                  type: 'string',
                },
                borderEndEndRadius: {
                  description:
                    "The **`border-end-end-radius`** CSS property defines a logical border radius on an element, which maps to a physical border radius that depends on on the element's `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<length-percentage>{1,2}`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n|   No   | **66**  |   No   |  No  | No  |",
                  type: ['string', 'number'],
                },
                borderEndStartRadius: {
                  description:
                    "The **`border-end-start-radius`** CSS property defines a logical border radius on an element, which maps to a physical border radius depending on the element's `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<length-percentage>{1,2}`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n|   No   | **66**  |   No   |  No  | No  |",
                  type: ['string', 'number'],
                },
                borderImageOutset: {
                  description:
                    "The **`border-image-outset`** CSS property sets the distance by which an element's border image is set out from its border box.\n\n**Syntax**: `[ <length> | <number> ]{1,4}`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari |  Edge  |   IE   |\n| :----: | :-----: | :----: | :----: | :----: |\n| **15** | **15**  | **6**  | **12** | **11** |",
                  type: ['string', 'number'],
                },
                borderImageRepeat: {
                  description:
                    "The **`border-image-repeat`** CSS property defines how the edge regions of a source image are adjusted to fit the dimensions of an element's border image.\n\n**Syntax**: `[ stretch | repeat | round | space ]{1,2}`\n\n**Initial value**: `stretch`\n\n| Chrome | Firefox | Safari |  Edge  |   IE   |\n| :----: | :-----: | :----: | :----: | :----: |\n| **15** | **15**  | **6**  | **12** | **11** |",
                  type: 'string',
                },
                borderImageSlice: {
                  description:
                    "The **`border-image-slice`** CSS property divides the image specified by `border-image-source` into regions. These regions form the components of an element's border image.\n\n**Syntax**: `<number-percentage>{1,4} && fill?`\n\n**Initial value**: `100%`\n\n| Chrome | Firefox | Safari |  Edge  |   IE   |\n| :----: | :-----: | :----: | :----: | :----: |\n| **15** | **15**  | **6**  | **12** | **11** |",
                  type: ['string', 'number'],
                },
                borderImageSource: {
                  description:
                    "The **`border-image-source`** CSS property sets the source image used to create an element's border image.\n\n**Syntax**: `none | <image>`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari |  Edge  |   IE   |\n| :----: | :-----: | :----: | :----: | :----: |\n| **15** | **15**  | **6**  | **12** | **11** |",
                  type: 'string',
                },
                borderImageWidth: {
                  description:
                    "The **`border-image-width`** CSS property sets the width of an element's border image.\n\n**Syntax**: `[ <length-percentage> | <number> | auto ]{1,4}`\n\n**Initial value**: `1`\n\n| Chrome | Firefox | Safari |  Edge  |   IE   |\n| :----: | :-----: | :----: | :----: | :----: |\n| **15** | **13**  | **6**  | **12** | **11** |",
                  type: ['string', 'number'],
                },
                borderInlineColor: {
                  description:
                    "The **`border-inline-color`** CSS property defines the color of the logical inline borders of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color` and `border-bottom-color`, or `border-right-color` and `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-color'>{1,2}`\n\n**Initial value**: `currentcolor`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **69** | **66**  |   No   | **79** | No  |",
                  type: 'string',
                },
                borderInlineEndColor: {
                  description:
                    "The **`border-inline-end-color`** CSS property defines the color of the logical inline-end border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-color'>`\n\n**Initial value**: `currentcolor`\n\n| Chrome |           Firefox           |  Safari  |  Edge  | IE  |\n| :----: | :-------------------------: | :------: | :----: | :-: |\n| **69** |           **41**            | **12.1** | **79** | No  |\n|        | 3 _(-moz-border-end-color)_ |          |        |     |",
                  type: 'string',
                },
                borderInlineEndStyle: {
                  description:
                    "The **`border-inline-end-style`** CSS property defines the style of the logical inline end border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-style'>`\n\n**Initial value**: `none`\n\n| Chrome |           Firefox           |  Safari  |  Edge  | IE  |\n| :----: | :-------------------------: | :------: | :----: | :-: |\n| **69** |           **41**            | **12.1** | **79** | No  |\n|        | 3 _(-moz-border-end-style)_ |          |        |     |",
                  enum: [
                    '-moz-initial',
                    'dashed',
                    'dotted',
                    'double',
                    'groove',
                    'hidden',
                    'inherit',
                    'initial',
                    'inset',
                    'none',
                    'outset',
                    'revert',
                    'ridge',
                    'solid',
                    'unset',
                  ],
                  type: 'string',
                },
                borderInlineEndWidth: {
                  description:
                    "The **`border-inline-end-width`** CSS property defines the width of the logical inline-end border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-width'>`\n\n**Initial value**: `medium`\n\n| Chrome |           Firefox           |  Safari  |  Edge  | IE  |\n| :----: | :-------------------------: | :------: | :----: | :-: |\n| **69** |           **41**            | **12.1** | **79** | No  |\n|        | 3 _(-moz-border-end-width)_ |          |        |     |",
                  type: ['string', 'number'],
                },
                borderInlineStartColor: {
                  description:
                    "The **`border-inline-start-color`** CSS property defines the color of the logical inline start border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-color'>`\n\n**Initial value**: `currentcolor`\n\n| Chrome |            Firefox            |  Safari  |  Edge  | IE  |\n| :----: | :---------------------------: | :------: | :----: | :-: |\n| **69** |            **41**             | **12.1** | **79** | No  |\n|        | 3 _(-moz-border-start-color)_ |          |        |     |",
                  type: 'string',
                },
                borderInlineStartStyle: {
                  description:
                    "The **`border-inline-start-style`** CSS property defines the style of the logical inline start border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-style'>`\n\n**Initial value**: `none`\n\n| Chrome |            Firefox            |  Safari  |  Edge  | IE  |\n| :----: | :---------------------------: | :------: | :----: | :-: |\n| **69** |            **41**             | **12.1** | **79** | No  |\n|        | 3 _(-moz-border-start-style)_ |          |        |     |",
                  enum: [
                    '-moz-initial',
                    'dashed',
                    'dotted',
                    'double',
                    'groove',
                    'hidden',
                    'inherit',
                    'initial',
                    'inset',
                    'none',
                    'outset',
                    'revert',
                    'ridge',
                    'solid',
                    'unset',
                  ],
                  type: 'string',
                },
                borderInlineStartWidth: {
                  description:
                    "The **`border-inline-start-width`** CSS property defines the width of the logical inline-start border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-width'>`\n\n**Initial value**: `medium`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **69** | **41**  | **12.1** | **79** | No  |",
                  type: ['string', 'number'],
                },
                borderInlineStyle: {
                  description:
                    "The **`border-inline-style`** CSS property defines the style of the logical inline borders of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style` and `border-bottom-style`, or `border-left-style` and `border-right-style` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-style'>`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **69** | **66**  |   No   | **79** | No  |",
                  enum: [
                    '-moz-initial',
                    'dashed',
                    'dotted',
                    'double',
                    'groove',
                    'hidden',
                    'inherit',
                    'initial',
                    'inset',
                    'none',
                    'outset',
                    'revert',
                    'ridge',
                    'solid',
                    'unset',
                  ],
                  type: 'string',
                },
                borderInlineWidth: {
                  description:
                    "The **`border-inline-width`** CSS property defines the width of the logical inline borders of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width` and `border-bottom-width`, or `border-left-width`, and `border-right-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-width'>`\n\n**Initial value**: `medium`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **69** | **66**  |   No   | **79** | No  |",
                  type: ['string', 'number'],
                },
                borderLeftColor: {
                  description:
                    "The **`border-left-color`** CSS property sets the color of an element's left border. It can also be set with the shorthand CSS properties `border-color` or `border-left`.\n\n**Syntax**: `<color>`\n\n**Initial value**: `currentcolor`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |",
                  type: 'string',
                },
                borderLeftStyle: {
                  description:
                    "The **`border-left-style`** CSS property sets the line style of an element's left `border`.\n\n**Syntax**: `<line-style>`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari |  Edge  |   IE    |\n| :----: | :-----: | :----: | :----: | :-----: |\n| **1**  |  **1**  | **1**  | **12** | **5.5** |",
                  enum: [
                    '-moz-initial',
                    'dashed',
                    'dotted',
                    'double',
                    'groove',
                    'hidden',
                    'inherit',
                    'initial',
                    'inset',
                    'none',
                    'outset',
                    'revert',
                    'ridge',
                    'solid',
                    'unset',
                  ],
                  type: 'string',
                },
                borderLeftWidth: {
                  description:
                    'The **`border-left-width`** CSS property sets the width of the left border of an element.\n\n**Syntax**: `<line-width>`\n\n**Initial value**: `medium`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |',
                  type: ['string', 'number'],
                },
                borderRightColor: {
                  description:
                    "The **`border-right-color`** CSS property sets the color of an element's right border. It can also be set with the shorthand CSS properties `border-color` or `border-right`.\n\n**Syntax**: `<color>`\n\n**Initial value**: `currentcolor`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |",
                  type: 'string',
                },
                borderRightStyle: {
                  description:
                    "The **`border-right-style`** CSS property sets the line style of an element's right `border`.\n\n**Syntax**: `<line-style>`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari |  Edge  |   IE    |\n| :----: | :-----: | :----: | :----: | :-----: |\n| **1**  |  **1**  | **1**  | **12** | **5.5** |",
                  enum: [
                    '-moz-initial',
                    'dashed',
                    'dotted',
                    'double',
                    'groove',
                    'hidden',
                    'inherit',
                    'initial',
                    'inset',
                    'none',
                    'outset',
                    'revert',
                    'ridge',
                    'solid',
                    'unset',
                  ],
                  type: 'string',
                },
                borderRightWidth: {
                  description:
                    'The **`border-right-width`** CSS property sets the width of the right border of an element.\n\n**Syntax**: `<line-width>`\n\n**Initial value**: `medium`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |',
                  type: ['string', 'number'],
                },
                borderSpacing: {
                  description:
                    'The **`border-spacing`** CSS property sets the distance between the borders of adjacent `<table>` cells. This property applies only when `border-collapse` is `separate`.\n\n**Syntax**: `<length> <length>?`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **8** |',
                  type: ['string', 'number'],
                },
                borderStartEndRadius: {
                  description:
                    "The **`border-start-end-radius`** CSS property defines a logical border radius on an element, which maps to a physical border radius depending on the element's `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<length-percentage>{1,2}`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n|   No   | **66**  |   No   |  No  | No  |",
                  type: ['string', 'number'],
                },
                borderStartStartRadius: {
                  description:
                    "The **`border-start-start-radius`** CSS property defines a logical border radius on an element, which maps to a physical border radius that depends on the element's `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<length-percentage>{1,2}`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n|   No   | **66**  |   No   |  No  | No  |",
                  type: ['string', 'number'],
                },
                borderTopColor: {
                  description:
                    "The **`border-top-color`** CSS property sets the color of an element's top border. It can also be set with the shorthand CSS properties `border-color` or `border-top`.\n\n**Syntax**: `<color>`\n\n**Initial value**: `currentcolor`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |",
                  type: 'string',
                },
                borderTopLeftRadius: {
                  description:
                    'The **`border-top-left-radius`** CSS property rounds the top-left corner of an element.\n\n**Syntax**: `<length-percentage>{1,2}`\n\n**Initial value**: `0`\n\n| Chrome  | Firefox | Safari  |  Edge  |  IE   |\n| :-----: | :-----: | :-----: | :----: | :---: |\n|  **4**  |  **4**  |  **5**  | **12** | **9** |\n| 1 _-x-_ |         | 3 _-x-_ |        |       |',
                  type: ['string', 'number'],
                },
                borderTopRightRadius: {
                  description:
                    'The **`border-top-right-radius`** CSS property rounds the top-right corner of an element.\n\n**Syntax**: `<length-percentage>{1,2}`\n\n**Initial value**: `0`\n\n| Chrome  | Firefox | Safari  |  Edge  |  IE   |\n| :-----: | :-----: | :-----: | :----: | :---: |\n|  **4**  |  **4**  |  **5**  | **12** | **9** |\n| 1 _-x-_ |         | 3 _-x-_ |        |       |',
                  type: ['string', 'number'],
                },
                borderTopStyle: {
                  description:
                    "The **`border-top-style`** CSS property sets the line style of an element's top `border`.\n\n**Syntax**: `<line-style>`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari |  Edge  |   IE    |\n| :----: | :-----: | :----: | :----: | :-----: |\n| **1**  |  **1**  | **1**  | **12** | **5.5** |",
                  enum: [
                    '-moz-initial',
                    'dashed',
                    'dotted',
                    'double',
                    'groove',
                    'hidden',
                    'inherit',
                    'initial',
                    'inset',
                    'none',
                    'outset',
                    'revert',
                    'ridge',
                    'solid',
                    'unset',
                  ],
                  type: 'string',
                },
                borderTopWidth: {
                  description:
                    'The **`border-top-width`** CSS property sets the width of the top border of an element.\n\n**Syntax**: `<line-width>`\n\n**Initial value**: `medium`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |',
                  type: ['string', 'number'],
                },
                bottom: {
                  description:
                    'The **`bottom`** CSS property participates in specifying the vertical position of a _positioned element_. It has no effect on non-positioned elements.\n\n**Syntax**: `<length> | <percentage> | auto`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **5** |',
                  type: ['string', 'number'],
                },
                boxDecorationBreak: {
                  description:
                    "The **`box-decoration-break`** CSS property specifies how an element's fragments should be rendered when broken across multiple lines, columns, or pages.\n\n**Syntax**: `slice | clone`\n\n**Initial value**: `slice`\n\n|    Chrome    | Firefox |    Safari     |     Edge     | IE  |\n| :----------: | :-----: | :-----------: | :----------: | :-: |\n| **22** _-x-_ | **32**  | **6.1** _-x-_ | **79** _-x-_ | No  |",
                  enum: [
                    '-moz-initial',
                    'clone',
                    'inherit',
                    'initial',
                    'revert',
                    'slice',
                    'unset',
                  ],
                  type: 'string',
                },
                boxShadow: {
                  description:
                    "The **`box-shadow`** CSS property adds shadow effects around an element's frame. You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radii, and color.\n\n**Syntax**: `none | <shadow>#`\n\n**Initial value**: `none`\n\n| Chrome  | Firefox | Safari  |  Edge  |  IE   |\n| :-----: | :-----: | :-----: | :----: | :---: |\n| **10**  |  **4**  | **5.1** | **12** | **9** |\n| 1 _-x-_ |         | 3 _-x-_ |        |       |",
                  type: 'string',
                },
                boxSizing: {
                  description:
                    'The **`box-sizing`** CSS property defines how the user agent should calculate the total width and height of an element.\n\n**Syntax**: `content-box | border-box`\n\n**Initial value**: `content-box`\n\n| Chrome  | Firefox | Safari  |  Edge  |  IE   |\n| :-----: | :-----: | :-----: | :----: | :---: |\n| **10**  | **29**  | **5.1** | **12** | **8** |\n| 1 _-x-_ | 1 _-x-_ | 3 _-x-_ |        |       |',
                  enum: [
                    '-moz-initial',
                    'border-box',
                    'content-box',
                    'inherit',
                    'initial',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                breakAfter: {
                  description:
                    'The **`break-after`** CSS property defines how page, column, or region breaks should behave after a generated box. If there is no generated box, the property is ignored.\n\n**Syntax**: `auto | avoid | always | all | avoid-page | page | left | right | recto | verso | avoid-column | column | avoid-region | region`\n\n**Initial value**: `auto`\n\n---\n\n_Supported in Multi-column Layout_\n\n| Chrome | Firefox | Safari |  Edge  |   IE   |\n| :----: | :-----: | :----: | :----: | :----: |\n| **50** | **65**  |   No   | **12** | **10** |\n\n---\n\n_Supported in Paged Media_\n\n| Chrome | Firefox | Safari |  Edge  |   IE   |\n| :----: | :-----: | :----: | :----: | :----: |\n| **50** | **65**  | **10** | **12** | **10** |\n\n---',
                  enum: [
                    '-moz-initial',
                    'all',
                    'always',
                    'auto',
                    'avoid',
                    'avoid-column',
                    'avoid-page',
                    'avoid-region',
                    'column',
                    'inherit',
                    'initial',
                    'left',
                    'page',
                    'recto',
                    'region',
                    'revert',
                    'right',
                    'unset',
                    'verso',
                  ],
                  type: 'string',
                },
                breakBefore: {
                  description:
                    'The **`break-before`** CSS property sets how page, column, or region breaks should behave before a generated box. If there is no generated box, the property is ignored.\n\n**Syntax**: `auto | avoid | always | all | avoid-page | page | left | right | recto | verso | avoid-column | column | avoid-region | region`\n\n**Initial value**: `auto`\n\n---\n\n_Supported in Multi-column Layout_\n\n| Chrome | Firefox | Safari |  Edge  |   IE   |\n| :----: | :-----: | :----: | :----: | :----: |\n| **50** | **65**  |   No   | **12** | **10** |\n\n---\n\n_Supported in Paged Media_\n\n| Chrome | Firefox | Safari |  Edge  |   IE   |\n| :----: | :-----: | :----: | :----: | :----: |\n| **50** | **65**  | **10** | **12** | **10** |\n\n---',
                  enum: [
                    '-moz-initial',
                    'all',
                    'always',
                    'auto',
                    'avoid',
                    'avoid-column',
                    'avoid-page',
                    'avoid-region',
                    'column',
                    'inherit',
                    'initial',
                    'left',
                    'page',
                    'recto',
                    'region',
                    'revert',
                    'right',
                    'unset',
                    'verso',
                  ],
                  type: 'string',
                },
                breakInside: {
                  description:
                    'The **`break-inside`** CSS property defines how page, column, or region breaks should behave inside a generated box. If there is no generated box, the property is ignored.\n\n**Syntax**: `auto | avoid | avoid-page | avoid-column | avoid-region`\n\n**Initial value**: `auto`\n\n---\n\n_Supported in Multi-column Layout_\n\n| Chrome | Firefox | Safari |  Edge  |   IE   |\n| :----: | :-----: | :----: | :----: | :----: |\n| **50** | **65**  | **10** | **12** | **10** |\n\n---\n\n_Supported in Paged Media_\n\n| Chrome | Firefox | Safari |  Edge  |   IE   |\n| :----: | :-----: | :----: | :----: | :----: |\n| **50** | **65**  | **10** | **12** | **10** |\n\n---',
                  enum: [
                    '-moz-initial',
                    'auto',
                    'avoid',
                    'avoid-column',
                    'avoid-page',
                    'avoid-region',
                    'inherit',
                    'initial',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                captionSide: {
                  description:
                    "The **`caption-side`** CSS property puts the content of a table's `<caption>` on the specified side. The values are relative to the `writing-mode` of the table.\n\n**Syntax**: `top | bottom | block-start | block-end | inline-start | inline-end`\n\n**Initial value**: `top`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **8** |",
                  enum: [
                    '-moz-initial',
                    'block-end',
                    'block-start',
                    'bottom',
                    'inherit',
                    'initial',
                    'inline-end',
                    'inline-start',
                    'revert',
                    'top',
                    'unset',
                  ],
                  type: 'string',
                },
                caretColor: {
                  description:
                    'The **`caret-color`** CSS property sets the color of the insertion caret, the visible marker where the next character typed will be inserted. The caret appears in elements such as `<input>` or those with the `contenteditable` attribute. The caret is typically a thin vertical line that flashes to help make it more noticeable. By default, it is black, but its color can be altered with this property.\n\n**Syntax**: `auto | <color>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **57** | **53**  | **11.1** | **79** | No  |',
                  type: 'string',
                },
                clear: {
                  description:
                    'The **`clear`** CSS property sets whether an element must be moved below (cleared) floating elements that precede it. The `clear` property applies to floating and non-floating elements.\n\n**Syntax**: `none | left | right | both | inline-start | inline-end`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |',
                  enum: [
                    '-moz-initial',
                    'both',
                    'inherit',
                    'initial',
                    'inline-end',
                    'inline-start',
                    'left',
                    'none',
                    'revert',
                    'right',
                    'unset',
                  ],
                  type: 'string',
                },
                clipPath: {
                  description:
                    'The `**clip-path**` CSS property creates a clipping region that sets what part of an element should be shown. Parts that are inside the region are shown, while those outside are hidden.\n\n**Syntax**: `<clip-source> | [ <basic-shape> || <geometry-box> ] | none`\n\n**Initial value**: `none`\n\n|  Chrome  | Firefox |  Safari   |  Edge  |   IE   |\n| :------: | :-----: | :-------: | :----: | :----: |\n|  **55**  | **3.5** |  **9.1**  | **12** | **10** |\n| 23 _-x-_ |         | 6.1 _-x-_ |        |        |',
                  type: 'string',
                },
                color: {
                  description:
                    "The **`color`** CSS property sets the foreground color value of an element's text and text decorations, and sets the `currentcolor` value. `currentcolor` may be used as an indirect value on _other_ properties and is the default for other color properties, such as `border-color`.\n\n**Syntax**: `<color>`\n\n**Initial value**: Varies from one browser to another\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **3** |",
                  type: 'string',
                },
                colorAdjust: {
                  description:
                    "The **`color-adjust`** CSS property sets what, if anything, the user agent may do to optimize the appearance of the element on the output device. By default, the browser is allowed to make any adjustments to the element's appearance it determines to be necessary and prudent given the type and capabilities of the output device.\n\n**Syntax**: `economy | exact`\n\n**Initial value**: `economy`\n\n|                Chrome                 | Firefox |                Safari                |                 Edge                  | IE  |\n| :-----------------------------------: | :-----: | :----------------------------------: | :-----------------------------------: | :-: |\n| **49** _(-webkit-print-color-adjust)_ | **48**  | **6** _(-webkit-print-color-adjust)_ | **79** _(-webkit-print-color-adjust)_ | No  |",
                  enum: [
                    '-moz-initial',
                    'economy',
                    'exact',
                    'inherit',
                    'initial',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                columnCount: {
                  description:
                    "The **`column-count`** CSS property breaks an element's content into the specified number of columns.\n\n**Syntax**: `<integer> | auto`\n\n**Initial value**: `auto`\n\n| Chrome  | Firefox | Safari  |  Edge  |   IE   |\n| :-----: | :-----: | :-----: | :----: | :----: |\n| **50**  | **52**  |  **9**  | **12** | **10** |\n| 1 _-x-_ |         | 3 _-x-_ |        |        |",
                  anyOf: [
                    {
                      enum: [
                        '-moz-initial',
                        'auto',
                        'inherit',
                        'initial',
                        'revert',
                        'unset',
                      ],
                      type: 'string',
                    },
                    {
                      type: 'number',
                    },
                  ],
                },
                columnFill: {
                  description:
                    "The **`column-fill`** CSS property controls how an element's contents are balanced when broken into columns.\n\n**Syntax**: `auto | balance | balance-all`\n\n**Initial value**: `balance`\n\n| Chrome | Firefox | Safari  |  Edge  |   IE   |\n| :----: | :-----: | :-----: | :----: | :----: |\n| **50** | **52**  |  **9**  | **12** | **10** |\n|        |         | 8 _-x-_ |        |        |",
                  enum: [
                    '-moz-initial',
                    'auto',
                    'balance',
                    'inherit',
                    'initial',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                columnGap: {
                  description:
                    "The **`column-gap`** CSS property sets the size of the gap (gutter) between an element's columns.\n\n**Syntax**: `normal | <length-percentage>`\n\n**Initial value**: `normal`\n\n---\n\n_Supported in Flex Layout_\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **84** | **63**  |   No   | **84** | No  |\n\n---\n\n_Supported in Grid Layout_\n\n|         Chrome         |        Firefox         |          Safari          |  Edge  | IE  |\n| :--------------------: | :--------------------: | :----------------------: | :----: | :-: |\n|         **66**         |         **61**         |         **12.1**         | **16** | No  |\n| 57 _(grid-column-gap)_ | 52 _(grid-column-gap)_ | 10.1 _(grid-column-gap)_ |        |     |\n\n---\n\n_Supported in Multi-column Layout_\n\n| Chrome  | Firefox | Safari  |  Edge  |   IE   |\n| :-----: | :-----: | :-----: | :----: | :----: |\n| **50**  | **52**  | **10**  | **12** | **10** |\n| 1 _-x-_ |         | 3 _-x-_ |        |        |\n\n---",
                  type: ['string', 'number'],
                },
                columnRuleColor: {
                  description:
                    'The **`column-rule-color`** CSS property sets the color of the rule (line) drawn between columns in a multi-column layout.\n\n**Syntax**: `<color>`\n\n**Initial value**: `currentcolor`\n\n| Chrome  | Firefox | Safari  |  Edge  |   IE   |\n| :-----: | :-----: | :-----: | :----: | :----: |\n| **50**  | **52**  |  **9**  | **12** | **10** |\n| 1 _-x-_ |         | 3 _-x-_ |        |        |',
                  type: 'string',
                },
                columnRuleStyle: {
                  description:
                    "The **`column-rule-style`** CSS property sets the style of the line drawn between columns in a multi-column layout.\n\n**Syntax**: `<'border-style'>`\n\n**Initial value**: `none`\n\n| Chrome  | Firefox | Safari  |  Edge  |   IE   |\n| :-----: | :-----: | :-----: | :----: | :----: |\n| **50**  | **52**  |  **9**  | **12** | **10** |\n| 1 _-x-_ |         | 3 _-x-_ |        |        |",
                  type: 'string',
                },
                columnRuleWidth: {
                  description:
                    "The **`column-rule-width`** CSS property sets the width of the rule (line) drawn between columns in a multi-column layout.\n\n**Syntax**: `<'border-width'>`\n\n**Initial value**: `medium`\n\n| Chrome  | Firefox | Safari  |  Edge  |   IE   |\n| :-----: | :-----: | :-----: | :----: | :----: |\n| **50**  | **52**  |  **9**  | **12** | **10** |\n| 1 _-x-_ |         | 3 _-x-_ |        |        |",
                  type: ['string', 'number'],
                },
                columnSpan: {
                  description:
                    'The **`column-span`** CSS property makes it possible for an element to span across all columns when its value is set to `all`.\n\n**Syntax**: `none | all`\n\n**Initial value**: `none`\n\n| Chrome  | Firefox |  Safari   |  Edge  |   IE   |\n| :-----: | :-----: | :-------: | :----: | :----: |\n| **50**  | **71**  |   **9**   | **12** | **10** |\n| 6 _-x-_ |         | 5.1 _-x-_ |        |        |',
                  enum: [
                    '-moz-initial',
                    'all',
                    'inherit',
                    'initial',
                    'none',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                columnWidth: {
                  description:
                    "The **`column-width`** CSS property specifies the ideal column width in a multi-column layout. The container will have as many columns as can fit without any of them having a width less than the `column-width` value. If the width of the container is narrower than the specified value, the single column's width will be smaller than the declared column width.\n\n**Syntax**: `<length> | auto`\n\n**Initial value**: `auto`\n\n| Chrome  | Firefox | Safari  |  Edge  |   IE   |\n| :-----: | :-----: | :-----: | :----: | :----: |\n| **50**  | **50**  |  **9**  | **12** | **10** |\n| 1 _-x-_ |         | 3 _-x-_ |        |        |",
                  type: ['string', 'number'],
                },
                contain: {
                  description:
                    'The **`contain`** CSS property allows an author to indicate that an element and its contents are, as much as possible, _independent_ of the rest of the document tree. This allows the browser to recalculate layout, style, paint, size, or any combination of them for a limited area of the DOM and not the entire page.\n\n**Syntax**: `none | strict | content | [ size || layout || style || paint ]`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **52** | **69**  |   No   | **79** | No  |',
                  type: 'string',
                },
                content: {
                  description:
                    'The **`content`** CSS property replaces an element with a generated value. Objects inserted using the `content` property are _anonymous replaced elements._\n\n**Syntax**: `normal | none | [ <content-replacement> | <content-list> ] [/ <string> ]?`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **8** |',
                  type: 'string',
                },
                counterIncrement: {
                  description:
                    'The **`counter-increment`** CSS property increases or decreases the value of a CSS counter by a given value.\n\n**Syntax**: `[ <custom-ident> <integer>? ]+ | none`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **2**  |  **1**  | **3**  | **12** | **8** |',
                  type: 'string',
                },
                counterReset: {
                  description:
                    'The **`counter-reset`** CSS property resets a CSS counter to a given value.\n\n**Syntax**: `[ <custom-ident> <integer>? ]+ | none`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **2**  |  **1**  | **3**  | **12** | **8** |',
                  type: 'string',
                },
                counterSet: {
                  description:
                    "The **`counter-set`** CSS property sets a CSS counter to a given value. It manipulates the value of existing counters, and will only create new counters if there isn't already a counter of the given name on the element.\n\n**Syntax**: `[ <custom-ident> <integer>? ]+ | none`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **85** | **68**  |   No   | **85** | No  |",
                  type: 'string',
                },
                cursor: {
                  description:
                    'The **`cursor`** CSS property sets mouse cursor to display when the mouse pointer is over an element.\n\n**Syntax**: `[ [ <url> [ <x> <y> ]? , ]* [ auto | default | none | context-menu | help | pointer | progress | wait | cell | crosshair | text | vertical-text | alias | copy | move | no-drop | not-allowed | e-resize | n-resize | ne-resize | nw-resize | s-resize | se-resize | sw-resize | w-resize | ew-resize | ns-resize | nesw-resize | nwse-resize | col-resize | row-resize | all-scroll | zoom-in | zoom-out | grab | grabbing ] ]`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari  |  Edge  |  IE   |\n| :----: | :-----: | :-----: | :----: | :---: |\n| **1**  |  **1**  | **1.2** | **12** | **4** |',
                  type: 'string',
                },
                direction: {
                  description:
                    'The **`direction`** CSS property sets the direction of text, table columns, and horizontal overflow. Use `rtl` for languages written from right to left (like Hebrew or Arabic), and `ltr` for those written from left to right (like English and most other languages).\n\n**Syntax**: `ltr | rtl`\n\n**Initial value**: `ltr`\n\n| Chrome | Firefox | Safari |  Edge  |   IE    |\n| :----: | :-----: | :----: | :----: | :-----: |\n| **2**  |  **1**  | **1**  | **12** | **5.5** |',
                  enum: [
                    '-moz-initial',
                    'inherit',
                    'initial',
                    'ltr',
                    'revert',
                    'rtl',
                    'unset',
                  ],
                  type: 'string',
                },
                display: {
                  description:
                    'The **`display`** CSS property defines the _display type_ of an element, which consists of the two basic qualities of how an element generates boxes — the **outer display type** defining how the box participates in flow layout, and the **inner display type** defining how the children of the box are laid out.\n\n**Syntax**: `[ <display-outside> || <display-inside> ] | <display-listitem> | <display-internal> | <display-box> | <display-legacy>`\n\n**Initial value**: `inline`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |',
                  type: 'string',
                },
                emptyCells: {
                  description:
                    'The **`empty-cells`** CSS property sets whether borders and backgrounds appear around `<table>` cells that have no visible content.\n\n**Syntax**: `show | hide`\n\n**Initial value**: `show`\n\n| Chrome | Firefox | Safari  |  Edge  |  IE   |\n| :----: | :-----: | :-----: | :----: | :---: |\n| **1**  |  **1**  | **1.2** | **12** | **8** |',
                  enum: [
                    '-moz-initial',
                    'hide',
                    'inherit',
                    'initial',
                    'revert',
                    'show',
                    'unset',
                  ],
                  type: 'string',
                },
                filter: {
                  description:
                    'The **`filter`** CSS property applies graphical effects like blur or color shift to an element. Filters are commonly used to adjust the rendering of images, backgrounds, and borders.\n\n**Syntax**: `none | <filter-function-list>`\n\n**Initial value**: `none`\n\n|  Chrome  | Firefox | Safari  |  Edge  | IE  |\n| :------: | :-----: | :-----: | :----: | :-: |\n|  **53**  | **35**  | **9.1** | **12** | No  |\n| 18 _-x-_ |         | 6 _-x-_ |        |     |',
                  type: 'string',
                },
                flexBasis: {
                  description:
                    "The **`flex-basis`** CSS property sets the initial main size of a flex item. It sets the size of the content box unless otherwise set with `box-sizing`.\n\n**Syntax**: `content | <'width'>`\n\n**Initial value**: `auto`\n\n|  Chrome  | Firefox | Safari  |  Edge  |   IE   |\n| :------: | :-----: | :-----: | :----: | :----: |\n|  **29**  | **22**  |  **9**  | **12** | **11** |\n| 22 _-x-_ |         | 7 _-x-_ |        |        |",
                  type: ['string', 'number'],
                },
                flexDirection: {
                  description:
                    'The **`flex-direction`** CSS property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).\n\n**Syntax**: `row | row-reverse | column | column-reverse`\n\n**Initial value**: `row`\n\n|  Chrome  | Firefox | Safari  |  Edge  |    IE    |\n| :------: | :-----: | :-----: | :----: | :------: |\n|  **29**  | **20**  |  **9**  | **12** |  **11**  |\n| 21 _-x-_ |         | 7 _-x-_ |        | 10 _-x-_ |',
                  enum: [
                    '-moz-initial',
                    'column',
                    'column-reverse',
                    'inherit',
                    'initial',
                    'revert',
                    'row',
                    'row-reverse',
                    'unset',
                  ],
                  type: 'string',
                },
                flexGrow: {
                  description:
                    'The **`flex-grow`** CSS property sets how much of the available space in the flex container should be assigned to that item (the flex grow factor). If all sibling items have the same flex grow factor, then all items will receive the same share of available space, otherwise it is distributed according to the ratio defined by the different flex grow factors.\n\n**Syntax**: `<number>`\n\n**Initial value**: `0`\n\n|  Chrome  | Firefox |  Safari   |  Edge  |            IE            |\n| :------: | :-----: | :-------: | :----: | :----------------------: |\n|  **29**  | **20**  |   **9**   | **12** |          **11**          |\n| 22 _-x-_ |         | 6.1 _-x-_ |        | 10 _(-ms-flex-positive)_ |',
                  anyOf: [
                    {
                      enum: [
                        '-moz-initial',
                        'inherit',
                        'initial',
                        'revert',
                        'unset',
                      ],
                      type: 'string',
                    },
                    {
                      type: 'number',
                    },
                  ],
                },
                flexShrink: {
                  description:
                    'The **`flex-shrink`** CSS property sets the flex shrink factor of a flex item. If the size of flex items is larger than the flex container, items shrink to fit according to `flex-shrink`.\n\n**Syntax**: `<number>`\n\n**Initial value**: `1`\n\n|  Chrome  | Firefox | Safari  |  Edge  |   IE   |\n| :------: | :-----: | :-----: | :----: | :----: |\n|  **29**  | **20**  |  **9**  | **12** | **10** |\n| 22 _-x-_ |         | 8 _-x-_ |        |        |',
                  anyOf: [
                    {
                      enum: [
                        '-moz-initial',
                        'inherit',
                        'initial',
                        'revert',
                        'unset',
                      ],
                      type: 'string',
                    },
                    {
                      type: 'number',
                    },
                  ],
                },
                flexWrap: {
                  description:
                    'The **`flex-wrap`** CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked.\n\n**Syntax**: `nowrap | wrap | wrap-reverse`\n\n**Initial value**: `nowrap`\n\n|  Chrome  | Firefox |  Safari   |  Edge  |   IE   |\n| :------: | :-----: | :-------: | :----: | :----: |\n|  **29**  | **28**  |   **9**   | **12** | **11** |\n| 21 _-x-_ |         | 6.1 _-x-_ |        |        |',
                  enum: [
                    '-moz-initial',
                    'inherit',
                    'initial',
                    'nowrap',
                    'revert',
                    'unset',
                    'wrap',
                    'wrap-reverse',
                  ],
                  type: 'string',
                },
                float: {
                  description:
                    'The **`float`** CSS property places an element on the left or right side of its container, allowing text and inline elements to wrap around it. The element is removed from the normal flow of the page, though still remaining a part of the flow (in contrast to absolute positioning).\n\n**Syntax**: `left | right | none | inline-start | inline-end`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |',
                  enum: [
                    '-moz-initial',
                    'inherit',
                    'initial',
                    'inline-end',
                    'inline-start',
                    'left',
                    'none',
                    'revert',
                    'right',
                    'unset',
                  ],
                  type: 'string',
                },
                fontFamily: {
                  description:
                    'The **`font-family`** CSS property specifies a prioritized list of one or more font family names and/or generic family names for the selected element.\n\n**Syntax**: `[ <family-name> | <generic-family> ]#`\n\n**Initial value**: depends on user agent\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **3** |',
                  type: 'string',
                },
                fontFeatureSettings: {
                  description:
                    'The **`font-feature-settings`** CSS property controls advanced typographic features in OpenType fonts.\n\n**Syntax**: `normal | <feature-tag-value>#`\n\n**Initial value**: `normal`\n\n|  Chrome  | Firefox  | Safari  |  Edge  |   IE   |\n| :------: | :------: | :-----: | :----: | :----: |\n|  **48**  |  **34**  | **9.1** | **15** | **10** |\n| 16 _-x-_ | 15 _-x-_ |         |        |        |',
                  type: 'string',
                },
                fontKerning: {
                  description:
                    'The **`font-kerning`** CSS property sets the use of the kerning information stored in a font.\n\n**Syntax**: `auto | normal | none`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari  |  Edge  | IE  |\n| :----: | :-----: | :-----: | :----: | :-: |\n| **33** | **32**  |  **9**  | **79** | No  |\n|        |         | 6 _-x-_ |        |     |',
                  enum: [
                    '-moz-initial',
                    'auto',
                    'inherit',
                    'initial',
                    'none',
                    'normal',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                fontLanguageOverride: {
                  description:
                    'The **`font-language-override`** CSS property controls the use of language-specific glyphs in a typeface.\n\n**Syntax**: `normal | <string>`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n|   No   | **34**  |   No   |  No  | No  |\n|        | 4 _-x-_ |        |      |     |',
                  type: 'string',
                },
                fontOpticalSizing: {
                  description:
                    'The **`font-optical-sizing`** CSS property sets whether text rendering is optimized for viewing at different sizes. This only works for fonts that have an optical size variation axis.\n\n**Syntax**: `auto | none`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **79** | **62**  | **11** | **17** | No  |',
                  enum: [
                    '-moz-initial',
                    'auto',
                    'inherit',
                    'initial',
                    'none',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                fontSize: {
                  description:
                    'The **`font-size`** CSS property sets the size of the font. This property is also used to compute the size of `em`, `ex`, and other relative `<length>` units.\n\n**Syntax**: `<absolute-size> | <relative-size> | <length-percentage>`\n\n**Initial value**: `medium`\n\n| Chrome | Firefox | Safari |  Edge  |   IE    |\n| :----: | :-----: | :----: | :----: | :-----: |\n| **1**  |  **1**  | **1**  | **12** | **5.5** |',
                  type: ['string', 'number'],
                },
                fontSizeAdjust: {
                  description:
                    'The **`font-size-adjust`** CSS property sets how the font size should be chosen based on the height of lowercase rather than capital letters.\n\n**Syntax**: `none | <number>`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n|  n/a   |  **1**  |   No   | n/a  | No  |',
                  anyOf: [
                    {
                      enum: [
                        '-moz-initial',
                        'inherit',
                        'initial',
                        'none',
                        'revert',
                        'unset',
                      ],
                      type: 'string',
                    },
                    {
                      type: 'number',
                    },
                  ],
                },
                fontSmooth: {
                  description:
                    'The **`font-smooth`** CSS property controls the application of anti-aliasing when fonts are rendered.\n\n**Syntax**: `auto | never | always | <absolute-size> | <length>`\n\n**Initial value**: `auto`\n\n|              Chrome              |              Firefox               |              Safari              |               Edge                | IE  |\n| :------------------------------: | :--------------------------------: | :------------------------------: | :-------------------------------: | :-: |\n| **5** _(-webkit-font-smoothing)_ | **25** _(-moz-osx-font-smoothing)_ | **4** _(-webkit-font-smoothing)_ | **79** _(-webkit-font-smoothing)_ | No  |',
                  type: ['string', 'number'],
                },
                fontStretch: {
                  description:
                    'The **`font-stretch`** CSS property selects a normal, condensed, or expanded face from a font.\n\n**Syntax**: `<font-stretch-absolute>`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **60** |  **9**  | **11** | **12** | **9** |',
                  type: 'string',
                },
                fontStyle: {
                  description:
                    'The **`font-style`** CSS property sets whether a font should be styled with a normal, italic, or oblique face from its `font-family`.\n\n**Syntax**: `normal | italic | oblique <angle>?`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |',
                  type: 'string',
                },
                fontSynthesis: {
                  description:
                    'The **`font-synthesis`** CSS property controls which missing typefaces, bold or italic, may be synthesized by the browser.\n\n**Syntax**: `none | [ weight || style ]`\n\n**Initial value**: `weight style`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n|   No   | **34**  | **9**  |  No  | No  |',
                  type: 'string',
                },
                fontVariant: {
                  description:
                    'The **font-variant** CSS property is a shorthand for the longhand properties `font-variant-caps`, `font-variant-numeric`, `font-variant-alternates`, `font-variant-ligatures`, and `font-variant-east-asian`. You can also set the CSS Level 2 (Revision 1) values of `font-variant`, (that is, `normal` or `small-caps`), by using the `font` shorthand.\n\n**Syntax**: `normal | none | [ <common-lig-values> || <discretionary-lig-values> || <historical-lig-values> || <contextual-alt-values> || stylistic( <feature-value-name> ) || historical-forms || styleset( <feature-value-name># ) || character-variant( <feature-value-name># ) || swash( <feature-value-name> ) || ornaments( <feature-value-name> ) || annotation( <feature-value-name> ) || [ small-caps | all-small-caps | petite-caps | all-petite-caps | unicase | titling-caps ] || <numeric-figure-values> || <numeric-spacing-values> || <numeric-fraction-values> || ordinal || slashed-zero || <east-asian-variant-values> || <east-asian-width-values> || ruby ]`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |',
                  type: 'string',
                },
                fontVariantCaps: {
                  description:
                    'The **`font-variant-caps`** CSS property controls the use of alternate glyphs for capital letters.\n\n**Syntax**: `normal | small-caps | all-small-caps | petite-caps | all-petite-caps | unicase | titling-caps`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **52** | **34**  |   No   | **79** | No  |',
                  enum: [
                    '-moz-initial',
                    'all-petite-caps',
                    'all-small-caps',
                    'inherit',
                    'initial',
                    'normal',
                    'petite-caps',
                    'revert',
                    'small-caps',
                    'titling-caps',
                    'unicase',
                    'unset',
                  ],
                  type: 'string',
                },
                fontVariantEastAsian: {
                  description:
                    'The **`font-variant-east-asian`** CSS property controls the use of alternate glyphs for East Asian scripts, like Japanese and Chinese.\n\n**Syntax**: `normal | [ <east-asian-variant-values> || <east-asian-width-values> || ruby ]`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **63** | **34**  |   No   | **79** | No  |',
                  type: 'string',
                },
                fontVariantLigatures: {
                  description:
                    'The **`font-variant-ligatures`** CSS property controls which ligatures and contextual forms are used in textual content of the elements it applies to. This leads to more harmonized forms in the resulting text.\n\n**Syntax**: `normal | none | [ <common-lig-values> || <discretionary-lig-values> || <historical-lig-values> || <contextual-alt-values> ]`\n\n**Initial value**: `normal`\n\n|  Chrome  | Firefox | Safari  |  Edge  | IE  |\n| :------: | :-----: | :-----: | :----: | :-: |\n|  **34**  | **34**  | **9.1** | **79** | No  |\n| 31 _-x-_ |         | 7 _-x-_ |        |     |',
                  type: 'string',
                },
                fontVariantNumeric: {
                  description:
                    'The **`font-variant-numeric`** CSS property controls the usage of alternate glyphs for numbers, fractions, and ordinal markers.\n\n**Syntax**: `normal | [ <numeric-figure-values> || <numeric-spacing-values> || <numeric-fraction-values> || ordinal || slashed-zero ]`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari  |  Edge  | IE  |\n| :----: | :-----: | :-----: | :----: | :-: |\n| **52** | **34**  | **9.1** | **79** | No  |',
                  type: 'string',
                },
                fontVariantPosition: {
                  description:
                    'The **`font-variant-position`** CSS property controls the use of alternate, smaller glyphs that are positioned as superscript or subscript.\n\n**Syntax**: `normal | sub | super`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n|   No   | **34**  |   No   |  No  | No  |',
                  enum: [
                    '-moz-initial',
                    'inherit',
                    'initial',
                    'normal',
                    'revert',
                    'sub',
                    'super',
                    'unset',
                  ],
                  type: 'string',
                },
                fontVariationSettings: {
                  description:
                    'The **`font-variation-settings`** CSS property provides low-level control over variable font characteristics, by specifying the four letter axis names of the characteristics you want to vary, along with their values.\n\n**Syntax**: `normal | [ <string> <number> ]#`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **62** | **62**  | **11** | **17** | No  |',
                  type: 'string',
                },
                fontWeight: {
                  description:
                    'The **`font-weight`** CSS property specifies the weight (or boldness) of the font. The font weights available to you will depend on the `font-family` you are using. Some fonts are only available in `normal` and `bold`.\n\n**Syntax**: `<font-weight-absolute> | bolder | lighter`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **2**  |  **1**  | **1**  | **12** | **3** |',
                  anyOf: [
                    {
                      enum: [
                        '-moz-initial',
                        'bold',
                        'bolder',
                        'inherit',
                        'initial',
                        'lighter',
                        'normal',
                        'revert',
                        'unset',
                      ],
                      type: 'string',
                    },
                    {
                      type: 'number',
                    },
                  ],
                },
                gridAutoColumns: {
                  description:
                    'The **`grid-auto-columns`** CSS property specifies the size of an implicitly-created grid column track.\n\n**Syntax**: `<track-size>+`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox |  Safari  |          Edge           |             IE              |\n| :----: | :-----: | :------: | :---------------------: | :-------------------------: |\n| **57** | **70**  | **10.1** |         **16**          | **10** _(-ms-grid-columns)_ |\n|        |         |          | 12 _(-ms-grid-columns)_ |                             |',
                  type: ['string', 'number'],
                },
                gridAutoFlow: {
                  description:
                    'The **`grid-auto-flow`** CSS property controls how the auto-placement algorithm works, specifying exactly how auto-placed items get flowed into the grid.\n\n**Syntax**: `[ row | column ] || dense`\n\n**Initial value**: `row`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **57** | **52**  | **10.1** | **16** | No  |',
                  type: 'string',
                },
                gridAutoRows: {
                  description:
                    'The **`grid-auto-rows`** CSS property specifies the size of an implicitly-created grid row track.\n\n**Syntax**: `<track-size>+`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox |  Safari  |         Edge         |            IE            |\n| :----: | :-----: | :------: | :------------------: | :----------------------: |\n| **57** | **70**  | **10.1** |        **16**        | **10** _(-ms-grid-rows)_ |\n|        |         |          | 12 _(-ms-grid-rows)_ |                          |',
                  type: ['string', 'number'],
                },
                gridColumnEnd: {
                  description:
                    'The **`grid-column-end`** CSS property specifies a grid item’s end position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the block-end edge of its grid area.\n\n**Syntax**: `<grid-line>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **57** | **52**  | **10.1** | **16** | No  |',
                  type: ['string', 'number'],
                },
                gridColumnStart: {
                  description:
                    'The **`grid-column-start`** CSS property specifies a grid item’s start position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement. This start position defines the block-start edge of the grid area.\n\n**Syntax**: `<grid-line>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **57** | **52**  | **10.1** | **16** | No  |',
                  type: ['string', 'number'],
                },
                gridRowEnd: {
                  description:
                    'The **`grid-row-end`** CSS property specifies a grid item’s end position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-end edge of its grid area.\n\n**Syntax**: `<grid-line>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **57** | **52**  | **10.1** | **16** | No  |',
                  type: ['string', 'number'],
                },
                gridRowStart: {
                  description:
                    'The **`grid-row-start`** CSS property specifies a grid item’s start position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start edge of its grid area.\n\n**Syntax**: `<grid-line>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **57** | **52**  | **10.1** | **16** | No  |',
                  type: ['string', 'number'],
                },
                gridTemplateAreas: {
                  description:
                    'The **`grid-template-areas`** CSS property specifies named grid areas.\n\n**Syntax**: `none | <string>+`\n\n**Initial value**: `none`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **57** | **52**  | **10.1** | **16** | No  |',
                  type: 'string',
                },
                gridTemplateColumns: {
                  description:
                    'The **`grid-template-columns`** CSS property defines the line names and track sizing functions of the grid columns.\n\n**Syntax**: `none | <track-list> | <auto-track-list> | subgrid <line-name-list>?`\n\n**Initial value**: `none`\n\n| Chrome | Firefox |  Safari  |  Edge  |             IE              |\n| :----: | :-----: | :------: | :----: | :-------------------------: |\n| **57** | **52**  | **10.1** | **16** | **10** _(-ms-grid-columns)_ |',
                  type: ['string', 'number'],
                },
                gridTemplateRows: {
                  description:
                    'The **`grid-template-rows`** CSS property defines the line names and track sizing functions of the grid rows.\n\n**Syntax**: `none | <track-list> | <auto-track-list> | subgrid <line-name-list>?`\n\n**Initial value**: `none`\n\n| Chrome | Firefox |  Safari  |  Edge  |            IE            |\n| :----: | :-----: | :------: | :----: | :----------------------: |\n| **57** | **52**  | **10.1** | **16** | **10** _(-ms-grid-rows)_ |',
                  type: ['string', 'number'],
                },
                hangingPunctuation: {
                  description:
                    'The **`hanging-punctuation`** CSS property specifies whether a punctuation mark should hang at the start or end of a line of text. Hanging punctuation may be placed outside the line box.\n\n**Syntax**: `none | [ first || [ force-end | allow-end ] || last ]`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n|   No   |   No    | **10** |  No  | No  |',
                  type: 'string',
                },
                height: {
                  description:
                    'The **`height`** CSS property specifies the height of an element. By default, the property defines the height of the content area. If `box-sizing` is set to `border-box`, however, it instead determines the height of the border area.\n\n**Syntax**: `auto | <length> | <percentage> | min-content | max-content | fit-content(<length-percentage>)`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |',
                  type: ['string', 'number'],
                },
                hyphens: {
                  description:
                    'The **`hyphens`** CSS property specifies how words should be hyphenated when text wraps across multiple lines. You can prevent hyphenation entirely, use hyphenation in manually-specified points within the text, or let the browser automatically insert hyphens where appropriate.\n\n**Syntax**: `none | manual | auto`\n\n**Initial value**: `manual`\n\n|  Chrome  | Firefox |    Safari     |     Edge     |      IE      |\n| :------: | :-----: | :-----------: | :----------: | :----------: |\n|  **55**  | **43**  | **5.1** _-x-_ | **12** _-x-_ | **10** _-x-_ |\n| 13 _-x-_ | 6 _-x-_ |               |              |              |',
                  enum: [
                    '-moz-initial',
                    'auto',
                    'inherit',
                    'initial',
                    'manual',
                    'none',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                imageOrientation: {
                  description:
                    'The **`image-orientation`** CSS property specifies a layout-independent correction to the orientation of an image. It should _not_ be used for any other orientation adjustments; instead, the `transform` property should be used with the `rotate` `<transform-function>`.\n\n**Syntax**: `from-image | <angle> | [ <angle>? flip ]`\n\n**Initial value**: `from-image`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **81** | **26**  | **13.1** | **81** | No  |',
                  type: 'string',
                },
                imageRendering: {
                  description:
                    'The **`image-rendering`** CSS property sets an image scaling algorithm. The property applies to an element itself, to any images set in its other properties, and to its descendants.\n\n**Syntax**: `auto | crisp-edges | pixelated`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **13** | **3.6** | **6**  | **79** | No  |',
                  enum: [
                    '-moz-crisp-edges',
                    '-moz-initial',
                    '-webkit-optimize-contrast',
                    'auto',
                    'crisp-edges',
                    'inherit',
                    'initial',
                    'pixelated',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                imageResolution: {
                  description:
                    '**Syntax**: `[ from-image || <resolution> ] && snap?`\n\n**Initial value**: `1dppx`',
                  type: 'string',
                },
                initialLetter: {
                  description:
                    'The `initial-letter` CSS property sets styling for dropped, raised, and sunken initial letters.\n\n**Syntax**: `normal | [ <number> <integer>? ]`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n|   No   |   No    | **9**  |  No  | No  |',
                  type: ['string', 'number'],
                },
                inlineSize: {
                  description:
                    "The **`inline-size`** CSS property defines the horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the `width` or the `height` property, depending on the value of `writing-mode`.\n\n**Syntax**: `<'width'>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **57** | **41**  | **12.1** | **79** | No  |",
                  type: ['string', 'number'],
                },
                inset: {
                  description:
                    "The **`inset`** CSS property defines the logical block and inline start and end offsets of an element, which map to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top` and `bottom`, or `right` and `left` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'top'>{1,4}`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n|   No   | **66**  |   No   |  No  | No  |",
                  type: ['string', 'number'],
                },
                insetBlock: {
                  description:
                    "The **`inset-block`** CSS property defines the logical block start and end offsets of an element, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top` and `bottom`, or `right` and `left` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'top'>{1,2}`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n|  n/a   | **63**  |   No   | n/a  | No  |",
                  type: ['string', 'number'],
                },
                insetBlockEnd: {
                  description:
                    "The **`inset-block-end`** CSS property defines the logical block end offset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'top'>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n|  n/a   | **63**  |   No   | n/a  | No  |",
                  type: ['string', 'number'],
                },
                insetBlockStart: {
                  description:
                    "The **`inset-block-start`** CSS property defines the logical block start offset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'top'>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n|  n/a   | **63**  |   No   | n/a  | No  |",
                  type: ['string', 'number'],
                },
                insetInline: {
                  description:
                    "The **`inset-inline`** CSS property defines the logical block start and end offsets of an element, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top` and `bottom`, or `right` and `left` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'top'>{1,2}`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n|  n/a   | **63**  |   No   | n/a  | No  |",
                  type: ['string', 'number'],
                },
                insetInlineEnd: {
                  description:
                    "The **`inset-inline-end`** CSS property defines the logical inline end inset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'top'>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n|  n/a   | **63**  |   No   | n/a  | No  |",
                  type: ['string', 'number'],
                },
                insetInlineStart: {
                  description:
                    "The **`inset-inline-start`** CSS property defines the logical inline start inset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'top'>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n|  n/a   | **63**  |   No   | n/a  | No  |",
                  type: ['string', 'number'],
                },
                isolation: {
                  description:
                    'The **`isolation`** CSS property determines whether an element must create a new stacking context.\n\n**Syntax**: `auto | isolate`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **41** | **36**  | **8**  | **79** | No  |',
                  enum: [
                    '-moz-initial',
                    'auto',
                    'inherit',
                    'initial',
                    'isolate',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                justifyContent: {
                  description:
                    'The CSS **`justify-content`** property defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container.\n\n**Syntax**: `normal | <content-distribution> | <overflow-position>? [ <content-position> | left | right ]`\n\n**Initial value**: `normal`\n\n---\n\n_Supported in Flex Layout_\n\n|  Chrome  | Firefox |  Safari   |  Edge  |   IE   |\n| :------: | :-----: | :-------: | :----: | :----: |\n|  **52**  | **20**  |   **9**   | **12** | **11** |\n| 21 _-x-_ |         | 6.1 _-x-_ |        |        |\n\n---\n\n_Supported in Grid Layout_\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **57** | **52**  | **10.1** | **16** | No  |\n\n---',
                  type: 'string',
                },
                justifyItems: {
                  description:
                    'The CSS **`justify-items`** property defines the default `justify-self` for all items of the box, giving them all a default way of justifying each box along the appropriate axis.\n\n**Syntax**: `normal | stretch | <baseline-position> | <overflow-position>? [ <self-position> | left | right ] | legacy | legacy && [ left | right | center ]`\n\n**Initial value**: `legacy`\n\n---\n\n_Supported in Flex Layout_\n\n| Chrome | Firefox | Safari |  Edge  |   IE   |\n| :----: | :-----: | :----: | :----: | :----: |\n| **52** | **20**  | **9**  | **12** | **11** |\n\n---\n\n_Supported in Grid Layout_\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **57** | **45**  | **10.1** | **16** | No  |\n\n---',
                  type: 'string',
                },
                justifySelf: {
                  description:
                    'The CSS **`justify-self`** property set the way a box is justified inside its alignment container along the appropriate axis.\n\n**Syntax**: `auto | normal | stretch | <baseline-position> | <overflow-position>? [ <self-position> | left | right ]`\n\n**Initial value**: `auto`\n\n---\n\n_Supported in Flex Layout_\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **57** | **45**  | **10.1** | **16** | No  |\n\n---\n\n_Supported in Grid Layout_\n\n| Chrome | Firefox |  Safari  |  Edge  |      IE      |\n| :----: | :-----: | :------: | :----: | :----------: |\n| **57** | **45**  | **10.1** | **16** | **10** _-x-_ |\n\n---',
                  type: 'string',
                },
                justifyTracks: {
                  description:
                    'The **`justify-tracks`** CSS property sets the alignment in the masonry axis for grid containers that have masonry in their inline axis.\n\n**Syntax**: `[ normal | <content-distribution> | <overflow-position>? [ <content-position> | left | right ] ]#`\n\n**Initial value**: `normal`',
                  type: 'string',
                },
                left: {
                  description:
                    'The **`left`** CSS property participates in specifying the horizontal position of a _positioned element_. It has no effect on non-positioned elements.\n\n**Syntax**: `<length> | <percentage> | auto`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  |   IE    |\n| :----: | :-----: | :----: | :----: | :-----: |\n| **1**  |  **1**  | **1**  | **12** | **5.5** |',
                  type: ['string', 'number'],
                },
                letterSpacing: {
                  description:
                    'The **`letter-spacing`** CSS property sets the spacing behavior between text characters.\n\n**Syntax**: `normal | <length>`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |',
                  type: ['string', 'number'],
                },
                lineBreak: {
                  description:
                    'The **`line-break`** CSS property sets how to break lines of Chinese, Japanese, or Korean (CJK) text when working with punctuation and symbols.\n\n**Syntax**: `auto | loose | normal | strict | anywhere`\n\n**Initial value**: `auto`\n\n| Chrome  | Firefox | Safari  |  Edge  |   IE    |\n| :-----: | :-----: | :-----: | :----: | :-----: |\n| **58**  | **69**  | **11**  | **14** | **5.5** |\n| 1 _-x-_ |         | 3 _-x-_ |        |         |',
                  enum: [
                    '-moz-initial',
                    'anywhere',
                    'auto',
                    'inherit',
                    'initial',
                    'loose',
                    'normal',
                    'revert',
                    'strict',
                    'unset',
                  ],
                  type: 'string',
                },
                lineHeight: {
                  description:
                    'The **`line-height`** CSS property sets the amount of space used for lines, such as in text. On block-level elements, it specifies the minimum height of line boxes within the element. On non-replaced inline elements, it specifies the height that is used to calculate line box height.\n\n**Syntax**: `normal | <number> | <length> | <percentage>`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |',
                  type: ['string', 'number'],
                },
                lineHeightStep: {
                  description:
                    'The **`line-height-step`** CSS property sets the step unit for line box heights. When the property is set, line box heights are rounded up to the closest multiple of the unit.\n\n**Syntax**: `<length>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n|  n/a   |   No    |   No   | n/a  | No  |',
                  type: ['string', 'number'],
                },
                listStyleImage: {
                  description:
                    'The **`list-style-image`** CSS property sets an image to be used as the list item marker.\n\n**Syntax**: `<url> | none`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |',
                  type: 'string',
                },
                listStylePosition: {
                  description:
                    'The **`list-style-position`** CSS property sets the position of the `::marker` relative to a list item.\n\n**Syntax**: `inside | outside`\n\n**Initial value**: `outside`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |',
                  enum: [
                    '-moz-initial',
                    'inherit',
                    'initial',
                    'inside',
                    'outside',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                listStyleType: {
                  description:
                    'The **`list-style-type`** CSS property sets the marker (such as a disc, character, or custom counter style) of a list item element.\n\n**Syntax**: `<counter-style> | <string> | none`\n\n**Initial value**: `disc`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |',
                  type: 'string',
                },
                marginBlock: {
                  description:
                    "The **`margin-block`** CSS property defines the logical block start and end margins of an element, which maps to physical margins depending on the element's writing mode, directionality, and text orientation.\n\n**Syntax**: `<'margin-left'>{1,2}`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n|  n/a   | **66**  |   No   | n/a  | No  |",
                  type: ['string', 'number'],
                },
                marginBlockEnd: {
                  description:
                    "The **`margin-block-end`** CSS property defines the logical block end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation.\n\n**Syntax**: `<'margin-left'>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **69** | **41**  | **12.1** | **79** | No  |",
                  type: ['string', 'number'],
                },
                marginBlockStart: {
                  description:
                    "The **`margin-block-start`** CSS property defines the logical block start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation.\n\n**Syntax**: `<'margin-left'>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **69** | **41**  | **12.1** | **79** | No  |",
                  type: ['string', 'number'],
                },
                marginBottom: {
                  description:
                    'The **`margin-bottom`** CSS property sets the margin area on the bottom of an element. A positive value places it farther from its neighbors, while a negative value places it closer.\n\n**Syntax**: `<length> | <percentage> | auto`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **3** |',
                  type: ['string', 'number'],
                },
                marginInline: {
                  description:
                    "The **`margin-inline`** CSS property defines the logical inline start and end margins of an element, which maps to physical margins depending on the element's writing mode, directionality, and text orientation.\n\n**Syntax**: `<'margin-left'>{1,2}`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n|  n/a   | **66**  |   No   | n/a  | No  |",
                  type: ['string', 'number'],
                },
                marginInlineEnd: {
                  description:
                    "The **`margin-inline-end`** CSS property defines the logical inline end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. In other words, it corresponds to the `margin-top`, `margin-right`, `margin-bottom` or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'margin-left'>`\n\n**Initial value**: `0`\n\n|          Chrome          |        Firefox        |          Safari          |  Edge  | IE  |\n| :----------------------: | :-------------------: | :----------------------: | :----: | :-: |\n|          **69**          |        **41**         |         **12.1**         | **79** | No  |\n| 2 _(-webkit-margin-end)_ | 3 _(-moz-margin-end)_ | 3 _(-webkit-margin-end)_ |        |     |",
                  type: ['string', 'number'],
                },
                marginInlineStart: {
                  description:
                    "The **`margin-inline-start`** CSS property defines the logical inline start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. It corresponds to the `margin-top`, `margin-right`, `margin-bottom`, or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'margin-left'>`\n\n**Initial value**: `0`\n\n|           Chrome           |         Firefox         |           Safari           |  Edge  | IE  |\n| :------------------------: | :---------------------: | :------------------------: | :----: | :-: |\n|           **69**           |         **41**          |          **12.1**          | **79** | No  |\n| 2 _(-webkit-margin-start)_ | 3 _(-moz-margin-start)_ | 3 _(-webkit-margin-start)_ |        |     |",
                  type: ['string', 'number'],
                },
                marginLeft: {
                  description:
                    'The **`margin-left`** CSS property sets the margin area on the left side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.\n\n**Syntax**: `<length> | <percentage> | auto`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **3** |',
                  type: ['string', 'number'],
                },
                marginRight: {
                  description:
                    'The **`margin-right`** CSS property sets the margin area on the right side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.\n\n**Syntax**: `<length> | <percentage> | auto`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **3** |',
                  type: ['string', 'number'],
                },
                marginTop: {
                  description:
                    'The **`margin-top`** CSS property sets the margin area on the top of an element. A positive value places it farther from its neighbors, while a negative value places it closer.\n\n**Syntax**: `<length> | <percentage> | auto`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **3** |',
                  type: ['string', 'number'],
                },
                maskBorderMode: {
                  description:
                    'The **`mask-border-mode`** CSS property specifies the blending mode used in a mask border.\n\n**Syntax**: `luminance | alpha`\n\n**Initial value**: `alpha`',
                  enum: [
                    '-moz-initial',
                    'alpha',
                    'inherit',
                    'initial',
                    'luminance',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                maskBorderOutset: {
                  description:
                    "The **`mask-border-outset`** CSS property specifies the distance by which an element's mask border is set out from its border box.\n\n**Syntax**: `[ <length> | <number> ]{1,4}`\n\n**Initial value**: `0`",
                  type: ['string', 'number'],
                },
                maskBorderRepeat: {
                  description:
                    "The **`mask-border-repeat`** CSS property sets how the edge regions of a source image are adjusted to fit the dimensions of an element's mask border.\n\n**Syntax**: `[ stretch | repeat | round | space ]{1,2}`\n\n**Initial value**: `stretch`",
                  type: 'string',
                },
                maskBorderSlice: {
                  description:
                    "The **`mask-border-slice`** CSS property divides the image set by `mask-border-source` into regions. These regions are used to form the components of an element's mask border.\n\n**Syntax**: `<number-percentage>{1,4} fill?`\n\n**Initial value**: `0`",
                  type: ['string', 'number'],
                },
                maskBorderSource: {
                  description:
                    "The **`mask-border-source`** CSS property sets the source image used to create an element's mask border.\n\n**Syntax**: `none | <image>`\n\n**Initial value**: `none`",
                  type: 'string',
                },
                maskBorderWidth: {
                  description:
                    "The **`mask-border-width`** CSS property sets the width of an element's mask border.\n\n**Syntax**: `[ <length-percentage> | <number> | auto ]{1,4}`\n\n**Initial value**: `auto`",
                  type: ['string', 'number'],
                },
                maskClip: {
                  description:
                    'The **`mask-clip`** CSS property determines the area, which is affected by a mask. The painted content of an element must be restricted to this area.\n\n**Syntax**: `[ <geometry-box> | no-clip ]#`\n\n**Initial value**: `border-box`\n\n|   Chrome    | Firefox |   Safari    |     Edge     | IE  |\n| :---------: | :-----: | :---------: | :----------: | :-: |\n| **1** _-x-_ | **53**  | **4** _-x-_ | **79** _-x-_ | No  |',
                  type: 'string',
                },
                maskComposite: {
                  description:
                    'The **`mask-composite`** CSS property represents a compositing operation used on the current mask layer with the mask layers below it.\n\n**Syntax**: `<compositing-operator>#`\n\n**Initial value**: `add`\n\n| Chrome | Firefox | Safari | Edge  | IE  |\n| :----: | :-----: | :----: | :---: | :-: |\n|   No   | **53**  |   No   | 18-79 | No  |',
                  type: 'string',
                },
                maskImage: {
                  description:
                    'The **`mask-image`** CSS property sets the image that is used as mask layer for an element.\n\n**Syntax**: `<mask-reference>#`\n\n**Initial value**: `none`\n\n|   Chrome    | Firefox |   Safari    |  Edge  | IE  |\n| :---------: | :-----: | :---------: | :----: | :-: |\n| **1** _-x-_ | **53**  | **4** _-x-_ | **16** | No  |',
                  type: 'string',
                },
                maskMode: {
                  description:
                    'The **`mask-mode`** CSS property sets whether the mask reference defined by `mask-image` is treated as a luminance or alpha mask.\n\n**Syntax**: `<masking-mode>#`\n\n**Initial value**: `match-source`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n|   No   | **53**  |   No   |  No  | No  |',
                  type: 'string',
                },
                maskOrigin: {
                  description:
                    'The **`mask-origin`** CSS property sets the origin of a mask.\n\n**Syntax**: `<geometry-box>#`\n\n**Initial value**: `border-box`\n\n|   Chrome    | Firefox |   Safari    |     Edge     | IE  |\n| :---------: | :-----: | :---------: | :----------: | :-: |\n| **1** _-x-_ | **53**  | **4** _-x-_ | **79** _-x-_ | No  |',
                  type: 'string',
                },
                maskPosition: {
                  description:
                    'The **`mask-position`** CSS property sets the initial position, relative to the mask position layer set by `mask-origin`, for each defined mask image.\n\n**Syntax**: `<position>#`\n\n**Initial value**: `center`\n\n|   Chrome    | Firefox |    Safari     |  Edge  | IE  |\n| :---------: | :-----: | :-----------: | :----: | :-: |\n| **1** _-x-_ | **53**  | **3.2** _-x-_ | **18** | No  |',
                  type: ['string', 'number'],
                },
                maskRepeat: {
                  description:
                    'The **`mask-repeat`** CSS property sets how mask images are repeated. A mask image can be repeated along the horizontal axis, the vertical axis, both axes, or not repeated at all.\n\n**Syntax**: `<repeat-style>#`\n\n**Initial value**: `no-repeat`\n\n|   Chrome    | Firefox |    Safari     |  Edge  | IE  |\n| :---------: | :-----: | :-----------: | :----: | :-: |\n| **1** _-x-_ | **53**  | **3.2** _-x-_ | **18** | No  |',
                  type: 'string',
                },
                maskSize: {
                  description:
                    'The **`mask-size`** CSS property specifies the sizes of the mask images. The size of the image can be fully or partially constrained in order to preserve its intrinsic ratio.\n\n**Syntax**: `<bg-size>#`\n\n**Initial value**: `auto`\n\n|   Chrome    | Firefox |   Safari    |  Edge  | IE  |\n| :---------: | :-----: | :---------: | :----: | :-: |\n| **4** _-x-_ | **53**  | **4** _-x-_ | **18** | No  |',
                  type: ['string', 'number'],
                },
                maskType: {
                  description:
                    'The **`mask-type`** CSS property sets whether an SVG `<mask>` element is used as a _luminance_ or an _alpha_ mask. It applies to the `<mask>` element itself.\n\n**Syntax**: `luminance | alpha`\n\n**Initial value**: `luminance`\n\n| Chrome | Firefox | Safari  |  Edge  | IE  |\n| :----: | :-----: | :-----: | :----: | :-: |\n| **24** | **35**  | **6.1** | **79** | No  |',
                  enum: [
                    '-moz-initial',
                    'alpha',
                    'inherit',
                    'initial',
                    'luminance',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                masonryAutoFlow: {
                  description:
                    'The **`masonry-auto-flow`** CSS property modifies how items are placed when using masonry in CSS Grid Layout.\n\n**Syntax**: `[ pack | next ] || [ definite-first | ordered ]`\n\n**Initial value**: `pack`',
                  type: 'string',
                },
                mathStyle: {
                  description:
                    'The `math-style` property indicates whether MathML equations should render with normal or compact height.\n\n**Syntax**: `normal | compact`\n\n**Initial value**: `normal`',
                  enum: [
                    '-moz-initial',
                    'compact',
                    'inherit',
                    'initial',
                    'normal',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                maxBlockSize: {
                  description:
                    "The `**max-block-size**` CSS property specifies the maximum size of an element in the direction opposite that of the writing direction as specified by `writing-mode`. That is, if the writing direction is horizontal, then `max-block-size` is equivalent to `max-height`; if the writing direction is vertical, `max-block-size` is the same as `max-width`.\n\n**Syntax**: `<'max-width'>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **57** | **41**  | **12.1** | **79** | No  |",
                  type: ['string', 'number'],
                },
                maxHeight: {
                  description:
                    'The **`max-height`** CSS property sets the maximum height of an element. It prevents the used value of the `height` property from becoming larger than the value specified for `max-height`.\n\n**Syntax**: `none | <length-percentage> | min-content | max-content | fit-content(<length-percentage>)`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari  |  Edge  |  IE   |\n| :----: | :-----: | :-----: | :----: | :---: |\n| **18** |  **1**  | **1.3** | **12** | **7** |',
                  type: ['string', 'number'],
                },
                maxInlineSize: {
                  description:
                    "The **`max-inline-size`** CSS property defines the horizontal or vertical maximum size of an element's block depending on its writing mode. It corresponds to the `max-width` or the `max-height` property depending on the value defined for `writing-mode`. If the writing mode is vertically oriented, the value of `max-inline-size` relates to the maximal height of the element, otherwise it relates to the maximal width of the element. It relates to `max-block-size`, which defines the other dimension of the element.\n\n**Syntax**: `<'max-width'>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox |   Safari   |  Edge  | IE  |\n| :----: | :-----: | :--------: | :----: | :-: |\n| **57** | **41**  |  **12.1**  | **79** | No  |\n|        |         | 10.1 _-x-_ |        |     |",
                  type: ['string', 'number'],
                },
                maxLines: {
                  description:
                    '**Syntax**: `none | <integer>`\n\n**Initial value**: `none`',
                  anyOf: [
                    {
                      enum: [
                        '-moz-initial',
                        'inherit',
                        'initial',
                        'none',
                        'revert',
                        'unset',
                      ],
                      type: 'string',
                    },
                    {
                      type: 'number',
                    },
                  ],
                },
                maxWidth: {
                  description:
                    'The **`max-width`** CSS property sets the maximum width of an element. It prevents the used value of the `width` property from becoming larger than the value specified by `max-width`.\n\n**Syntax**: `none | <length-percentage> | min-content | max-content | fit-content(<length-percentage>)`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **7** |',
                  type: ['string', 'number'],
                },
                minBlockSize: {
                  description:
                    "The **`min-block-size`** CSS property defines the minimum horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the `min-width` or the `min-height` property, depending on the value of `writing-mode`.\n\n**Syntax**: `<'min-width'>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **57** | **41**  | **12.1** | **79** | No  |",
                  type: ['string', 'number'],
                },
                minHeight: {
                  description:
                    'The **`min-height`** CSS property sets the minimum height of an element. It prevents the used value of the `height` property from becoming smaller than the value specified for `min-height`.\n\n**Syntax**: `auto | <length> | <percentage> | min-content | max-content | fit-content(<length-percentage>)`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari  |  Edge  |  IE   |\n| :----: | :-----: | :-----: | :----: | :---: |\n| **1**  |  **3**  | **1.3** | **12** | **7** |',
                  type: ['string', 'number'],
                },
                minInlineSize: {
                  description:
                    "The **`min-inline-size`** CSS property defines the horizontal or vertical minimal size of an element's block, depending on its writing mode. It corresponds to either the `min-width` or the `min-height` property, depending on the value of `writing-mode`.\n\n**Syntax**: `<'min-width'>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **57** | **41**  | **12.1** | **79** | No  |",
                  type: ['string', 'number'],
                },
                minWidth: {
                  description:
                    'The **`min-width`** CSS property sets the minimum width of an element. It prevents the used value of the `width` property from becoming smaller than the value specified for `min-width`.\n\n**Syntax**: `auto | <length> | <percentage> | min-content | max-content | fit-content(<length-percentage>)`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **7** |',
                  type: ['string', 'number'],
                },
                mixBlendMode: {
                  description:
                    "The **`mix-blend-mode`** CSS property sets how an element's content should blend with the content of the element's parent and the element's background.\n\n**Syntax**: `<blend-mode>`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **41** | **32**  | **8**  | **79** | No  |",
                  enum: [
                    '-moz-initial',
                    'color',
                    'color-burn',
                    'color-dodge',
                    'darken',
                    'difference',
                    'exclusion',
                    'hard-light',
                    'hue',
                    'inherit',
                    'initial',
                    'lighten',
                    'luminosity',
                    'multiply',
                    'normal',
                    'overlay',
                    'revert',
                    'saturation',
                    'screen',
                    'soft-light',
                    'unset',
                  ],
                  type: 'string',
                },
                motionDistance: {
                  description:
                    'The **`offset-distance`** CSS property specifies a position along an `offset-path`.\n\n**Syntax**: `<length-percentage>`\n\n**Initial value**: `0`\n\n|         Chrome         | Firefox | Safari |  Edge  | IE  |\n| :--------------------: | :-----: | :----: | :----: | :-: |\n|         **55**         | **72**  |   No   | **79** | No  |\n| 46 _(motion-distance)_ |         |        |        |     |',
                  type: ['string', 'number'],
                },
                motionPath: {
                  description:
                    "The **`offset-path`** CSS property specifies a motion path for an element to follow and defines the element's positioning within the parent container or SVG coordinate system.\n\n**Syntax**: `none | ray( [ <angle> && <size> && contain? ] ) | <path()> | <url> | [ <basic-shape> || <geometry-box> ]`\n\n**Initial value**: `none`\n\n|       Chrome       | Firefox | Safari |  Edge  | IE  |\n| :----------------: | :-----: | :----: | :----: | :-: |\n|       **55**       | **72**  |   No   | **79** | No  |\n| 46 _(motion-path)_ |         |        |        |     |",
                  type: 'string',
                },
                motionRotation: {
                  description:
                    'The **`offset-rotate`** CSS property defines the direction of the element while positioning along the offset path.\n\n**Syntax**: `[ auto | reverse ] || <angle>`\n\n**Initial value**: `auto`\n\n|         Chrome         | Firefox | Safari |  Edge  | IE  |\n| :--------------------: | :-----: | :----: | :----: | :-: |\n|         **56**         | **72**  |   No   | **79** | No  |\n| 46 _(motion-rotation)_ |         |        |        |     |',
                  type: 'string',
                },
                objectFit: {
                  description:
                    'The **`object-fit`** CSS property sets how the content of a replaced element, such as an `<img>` or `<video>`, should be resized to fit its container.\n\n**Syntax**: `fill | contain | cover | none | scale-down`\n\n**Initial value**: `fill`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **31** | **36**  | **10** | **16** | No  |',
                  enum: [
                    '-moz-initial',
                    'contain',
                    'cover',
                    'fill',
                    'inherit',
                    'initial',
                    'none',
                    'revert',
                    'scale-down',
                    'unset',
                  ],
                  type: 'string',
                },
                objectPosition: {
                  description:
                    "The **`object-position`** CSS property specifies the alignment of the selected replaced element's contents within the element's box. Areas of the box which aren't covered by the replaced element's object will show the element's background.\n\n**Syntax**: `<position>`\n\n**Initial value**: `50% 50%`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **31** | **36**  | **10** | **16** | No  |",
                  type: ['string', 'number'],
                },
                offsetAnchor: {
                  description:
                    '**Syntax**: `auto | <position>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **79** | **72**  |   No   | **79** | No  |',
                  type: ['string', 'number'],
                },
                offsetDistance: {
                  description:
                    'The **`offset-distance`** CSS property specifies a position along an `offset-path`.\n\n**Syntax**: `<length-percentage>`\n\n**Initial value**: `0`\n\n|         Chrome         | Firefox | Safari |  Edge  | IE  |\n| :--------------------: | :-----: | :----: | :----: | :-: |\n|         **55**         | **72**  |   No   | **79** | No  |\n| 46 _(motion-distance)_ |         |        |        |     |',
                  type: ['string', 'number'],
                },
                offsetPath: {
                  description:
                    "The **`offset-path`** CSS property specifies a motion path for an element to follow and defines the element's positioning within the parent container or SVG coordinate system.\n\n**Syntax**: `none | ray( [ <angle> && <size> && contain? ] ) | <path()> | <url> | [ <basic-shape> || <geometry-box> ]`\n\n**Initial value**: `none`\n\n|       Chrome       | Firefox | Safari |  Edge  | IE  |\n| :----------------: | :-----: | :----: | :----: | :-: |\n|       **55**       | **72**  |   No   | **79** | No  |\n| 46 _(motion-path)_ |         |        |        |     |",
                  type: 'string',
                },
                offsetRotate: {
                  description:
                    'The **`offset-rotate`** CSS property defines the direction of the element while positioning along the offset path.\n\n**Syntax**: `[ auto | reverse ] || <angle>`\n\n**Initial value**: `auto`\n\n|         Chrome         | Firefox | Safari |  Edge  | IE  |\n| :--------------------: | :-----: | :----: | :----: | :-: |\n|         **56**         | **72**  |   No   | **79** | No  |\n| 46 _(motion-rotation)_ |         |        |        |     |',
                  type: 'string',
                },
                offsetRotation: {
                  description:
                    'The **`offset-rotate`** CSS property defines the direction of the element while positioning along the offset path.\n\n**Syntax**: `[ auto | reverse ] || <angle>`\n\n**Initial value**: `auto`\n\n|         Chrome         | Firefox | Safari |  Edge  | IE  |\n| :--------------------: | :-----: | :----: | :----: | :-: |\n|         **56**         | **72**  |   No   | **79** | No  |\n| 46 _(motion-rotation)_ |         |        |        |     |',
                  type: 'string',
                },
                opacity: {
                  description:
                    'The **`opacity`** CSS property sets the transparency of an element or the degree to which content behind an element is visible.\n\n**Syntax**: `<alpha-value>`\n\n**Initial value**: `1.0`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **2**  | **12** | **9** |',
                  type: ['string', 'number'],
                },
                order: {
                  description:
                    'The **`order`** CSS property sets the order to lay out an item in a flex or grid container. Items in a container are sorted by ascending `order` value and then by their source code order.\n\n**Syntax**: `<integer>`\n\n**Initial value**: `0`\n\n|  Chrome  | Firefox | Safari  |  Edge  |    IE    |\n| :------: | :-----: | :-----: | :----: | :------: |\n|  **29**  | **20**  |  **9**  | **12** |  **11**  |\n| 21 _-x-_ |         | 7 _-x-_ |        | 10 _-x-_ |',
                  anyOf: [
                    {
                      enum: [
                        '-moz-initial',
                        'inherit',
                        'initial',
                        'revert',
                        'unset',
                      ],
                      type: 'string',
                    },
                    {
                      type: 'number',
                    },
                  ],
                },
                orphans: {
                  description:
                    'The **`orphans`** CSS property sets the minimum number of lines in a block container that must be shown at the _bottom_ of a page, region, or column.\n\n**Syntax**: `<integer>`\n\n**Initial value**: `2`\n\n| Chrome | Firefox | Safari  |  Edge  |  IE   |\n| :----: | :-----: | :-----: | :----: | :---: |\n| **25** |   No    | **1.3** | **12** | **8** |',
                  anyOf: [
                    {
                      enum: [
                        '-moz-initial',
                        'inherit',
                        'initial',
                        'revert',
                        'unset',
                      ],
                      type: 'string',
                    },
                    {
                      type: 'number',
                    },
                  ],
                },
                outlineColor: {
                  description:
                    "The **`outline-color`** CSS property sets the color of an element's outline.\n\n**Syntax**: `<color> | invert`\n\n**Initial value**: `invert`, for browsers supporting it, `currentColor` for the other\n\n| Chrome | Firefox | Safari  |  Edge  |  IE   |\n| :----: | :-----: | :-----: | :----: | :---: |\n| **1**  | **1.5** | **1.2** | **12** | **8** |",
                  type: 'string',
                },
                outlineOffset: {
                  description:
                    'The **`outline-offset`** CSS property sets the amount of space between an outline and the edge or border of an element.\n\n**Syntax**: `<length>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari  |  Edge  | IE  |\n| :----: | :-----: | :-----: | :----: | :-: |\n| **1**  | **1.5** | **1.2** | **15** | No  |',
                  type: ['string', 'number'],
                },
                outlineStyle: {
                  description:
                    "The **`outline-style`** CSS property sets the style of an element's outline. An outline is a line that is drawn around an element, outside the `border`.\n\n**Syntax**: `auto | <'border-style'>`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari  |  Edge  |  IE   |\n| :----: | :-----: | :-----: | :----: | :---: |\n| **1**  | **1.5** | **1.2** | **12** | **8** |",
                  type: 'string',
                },
                outlineWidth: {
                  description:
                    "The **`outline-width`** CSS property sets the thickness of an element's outline. An outline is a line that is drawn around an element, outside the `border`.\n\n**Syntax**: `<line-width>`\n\n**Initial value**: `medium`\n\n| Chrome | Firefox | Safari  |  Edge  |  IE   |\n| :----: | :-----: | :-----: | :----: | :---: |\n| **1**  | **1.5** | **1.2** | **12** | **8** |",
                  type: ['string', 'number'],
                },
                overflowAnchor: {
                  description:
                    '**Syntax**: `auto | none`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **56** | **66**  |   No   | **79** | No  |',
                  enum: [
                    '-moz-initial',
                    'auto',
                    'inherit',
                    'initial',
                    'none',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                overflowBlock: {
                  description:
                    '**Syntax**: `visible | hidden | clip | scroll | auto`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n|   No   | **69**  |   No   |  No  | No  |',
                  enum: [
                    '-moz-initial',
                    'auto',
                    'clip',
                    'hidden',
                    'inherit',
                    'initial',
                    'revert',
                    'scroll',
                    'unset',
                    'visible',
                  ],
                  type: 'string',
                },
                overflowClipBox: {
                  description:
                    'The **`overflow-clip-box`** CSS property specifies relative to which box the clipping happens when there is an overflow. It is short hand for the `overflow-clip-box-inline` and `overflow-clip-box-block` properties.\n\n**Syntax**: `padding-box | content-box`\n\n**Initial value**: `padding-box`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n|   No   | **29**  |   No   |  No  | No  |',
                  enum: [
                    '-moz-initial',
                    'content-box',
                    'inherit',
                    'initial',
                    'padding-box',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                overflowInline: {
                  description:
                    '**Syntax**: `visible | hidden | clip | scroll | auto`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n|   No   | **69**  |   No   |  No  | No  |',
                  enum: [
                    '-moz-initial',
                    'auto',
                    'clip',
                    'hidden',
                    'inherit',
                    'initial',
                    'revert',
                    'scroll',
                    'unset',
                    'visible',
                  ],
                  type: 'string',
                },
                overflowWrap: {
                  description:
                    'The `**overflow-wrap**` CSS property sets whether the browser should insert line breaks within words to prevent text from overflowing its content box.\n\n**Syntax**: `normal | break-word | anywhere`\n\n**Initial value**: `normal`\n\n|     Chrome      |      Firefox      |     Safari      |       Edge       |          IE           |\n| :-------------: | :---------------: | :-------------: | :--------------: | :-------------------: |\n|     **23**      |      **49**       |     **6.1**     |      **18**      | **5.5** _(word-wrap)_ |\n| 1 _(word-wrap)_ | 3.5 _(word-wrap)_ | 1 _(word-wrap)_ | 12 _(word-wrap)_ |                       |',
                  enum: [
                    '-moz-initial',
                    'anywhere',
                    'break-word',
                    'inherit',
                    'initial',
                    'normal',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                overflowX: {
                  description:
                    "The **`overflow-x`** CSS property sets what shows when content overflows a block-level element's left and right edges. This may be nothing, a scroll bar, or the overflow content.\n\n**Syntax**: `visible | hidden | clip | scroll | auto`\n\n**Initial value**: `visible`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  | **3.5** | **3**  | **12** | **5** |",
                  enum: [
                    '-moz-hidden-unscrollable',
                    '-moz-initial',
                    'auto',
                    'clip',
                    'hidden',
                    'inherit',
                    'initial',
                    'revert',
                    'scroll',
                    'unset',
                    'visible',
                  ],
                  type: 'string',
                },
                overflowY: {
                  description:
                    "The **`overflow-y`** CSS property sets what shows when content overflows a block-level element's top and bottom edges. This may be nothing, a scroll bar, or the overflow content.\n\n**Syntax**: `visible | hidden | clip | scroll | auto`\n\n**Initial value**: `visible`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  | **3.5** | **3**  | **12** | **5** |",
                  enum: [
                    '-moz-hidden-unscrollable',
                    '-moz-initial',
                    'auto',
                    'clip',
                    'hidden',
                    'inherit',
                    'initial',
                    'revert',
                    'scroll',
                    'unset',
                    'visible',
                  ],
                  type: 'string',
                },
                overscrollBehavior: {
                  description:
                    "The **`overscroll-behavior`** CSS property sets what a browser does when reaching the boundary of a scrolling area. It's a shorthand for `overscroll-behavior-x` and `overscroll-behavior-y`.\n\n**Syntax**: `[ contain | none | auto ]{1,2}`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **63** | **59**  |   No   | **18** | No  |",
                  type: 'string',
                },
                overscrollBehaviorBlock: {
                  description:
                    "The **`overscroll-behavior-block`** CSS property sets the browser's behavior when the block direction boundary of a scrolling area is reached.\n\n**Syntax**: `contain | none | auto`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **77** | **73**  |   No   | **79** | No  |",
                  enum: [
                    '-moz-initial',
                    'auto',
                    'contain',
                    'inherit',
                    'initial',
                    'none',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                overscrollBehaviorInline: {
                  description:
                    "The **`overscroll-behavior-inline`** CSS property sets the browser's behavior when the inline direction boundary of a scrolling area is reached.\n\n**Syntax**: `contain | none | auto`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **77** | **73**  |   No   | **79** | No  |",
                  enum: [
                    '-moz-initial',
                    'auto',
                    'contain',
                    'inherit',
                    'initial',
                    'none',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                overscrollBehaviorX: {
                  description:
                    "The **`overscroll-behavior-x`** CSS property sets the browser's behavior when the horizontal boundary of a scrolling area is reached.\n\n**Syntax**: `contain | none | auto`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **63** | **59**  |   No   | **18** | No  |",
                  enum: [
                    '-moz-initial',
                    'auto',
                    'contain',
                    'inherit',
                    'initial',
                    'none',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                overscrollBehaviorY: {
                  description:
                    "The **`overscroll-behavior-y`** CSS property sets the browser's behavior when the vertical boundary of a scrolling area is reached.\n\n**Syntax**: `contain | none | auto`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **63** | **59**  |   No   | **18** | No  |",
                  enum: [
                    '-moz-initial',
                    'auto',
                    'contain',
                    'inherit',
                    'initial',
                    'none',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                paddingBlock: {
                  description:
                    "The **`padding-block`** CSS property defines the logical block start and end padding of an element, which maps to physical padding properties depending on the element's writing mode, directionality, and text orientation.\n\n**Syntax**: `<'padding-left'>{1,2}`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n|  n/a   | **66**  |   No   | n/a  | No  |",
                  type: ['string', 'number'],
                },
                paddingBlockEnd: {
                  description:
                    "The **`padding-block-end`** CSS property defines the logical block end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation. It corresponds to the `padding-top`, `padding-right`, `padding-bottom`, or `padding-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'padding-left'>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **69** | **41**  | **12.1** | **79** | No  |",
                  type: ['string', 'number'],
                },
                paddingBlockStart: {
                  description:
                    "The **`padding-block-start`** CSS property defines the logical block start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation. It corresponds to the `padding-top`, `padding-right`, `padding-bottom`, or `padding-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'padding-left'>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **69** | **41**  | **12.1** | **79** | No  |",
                  type: ['string', 'number'],
                },
                paddingBottom: {
                  description:
                    'The **`padding-bottom`** CSS property sets the height of the padding area on the bottom of an element.\n\n**Syntax**: `<length> | <percentage>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |',
                  type: ['string', 'number'],
                },
                paddingInline: {
                  description:
                    "The **`padding-inline`** CSS property defines the logical inline start and end padding of an element, which maps to physical padding properties depending on the element's writing mode, directionality, and text orientation.\n\n**Syntax**: `<'padding-left'>{1,2}`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n|  n/a   | **66**  |   No   | n/a  | No  |",
                  type: ['string', 'number'],
                },
                paddingInlineEnd: {
                  description:
                    "The **`padding-inline-end`** CSS property defines the logical inline end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation. It corresponds to the `padding-top`, `padding-right`, `padding-bottom`, or `padding-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'padding-left'>`\n\n**Initial value**: `0`\n\n|          Chrome           |        Firefox         |          Safari           |  Edge  | IE  |\n| :-----------------------: | :--------------------: | :-----------------------: | :----: | :-: |\n|          **69**           |         **41**         |         **12.1**          | **79** | No  |\n| 2 _(-webkit-padding-end)_ | 3 _(-moz-padding-end)_ | 3 _(-webkit-padding-end)_ |        |     |",
                  type: ['string', 'number'],
                },
                paddingInlineStart: {
                  description:
                    "The **`padding-inline-start`** CSS property defines the logical inline start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation. It corresponds to the `padding-top`, `padding-right`, `padding-bottom`, or `padding-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'padding-left'>`\n\n**Initial value**: `0`\n\n|           Chrome            |         Firefox          |           Safari            |  Edge  | IE  |\n| :-------------------------: | :----------------------: | :-------------------------: | :----: | :-: |\n|           **69**            |          **41**          |          **12.1**           | **79** | No  |\n| 2 _(-webkit-padding-start)_ | 3 _(-moz-padding-start)_ | 3 _(-webkit-padding-start)_ |        |     |",
                  type: ['string', 'number'],
                },
                paddingLeft: {
                  description:
                    'The **`padding-left`** CSS property sets the width of the padding area on the left side of an element.\n\n**Syntax**: `<length> | <percentage>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |',
                  type: ['string', 'number'],
                },
                paddingRight: {
                  description:
                    'The **`padding-right`** CSS property sets the width of the padding area on the right side of an element.\n\n**Syntax**: `<length> | <percentage>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |',
                  type: ['string', 'number'],
                },
                paddingTop: {
                  description:
                    'The **`padding-top`** padding area on the top of an element.\n\n**Syntax**: `<length> | <percentage>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |',
                  type: ['string', 'number'],
                },
                pageBreakAfter: {
                  description:
                    'The **`page-break-after`** CSS property adjusts page breaks _after_ the current element.\n\n**Syntax**: `auto | always | avoid | left | right | recto | verso`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari  |  Edge  |  IE   |\n| :----: | :-----: | :-----: | :----: | :---: |\n| **1**  |  **1**  | **1.2** | **12** | **4** |',
                  enum: [
                    '-moz-initial',
                    'always',
                    'auto',
                    'avoid',
                    'inherit',
                    'initial',
                    'left',
                    'recto',
                    'revert',
                    'right',
                    'unset',
                    'verso',
                  ],
                  type: 'string',
                },
                pageBreakBefore: {
                  description:
                    'The **`page-break-before`** CSS property adjusts page breaks _before_ the current element.\n\n**Syntax**: `auto | always | avoid | left | right | recto | verso`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari  |  Edge  |  IE   |\n| :----: | :-----: | :-----: | :----: | :---: |\n| **1**  |  **1**  | **1.2** | **12** | **4** |',
                  enum: [
                    '-moz-initial',
                    'always',
                    'auto',
                    'avoid',
                    'inherit',
                    'initial',
                    'left',
                    'recto',
                    'revert',
                    'right',
                    'unset',
                    'verso',
                  ],
                  type: 'string',
                },
                pageBreakInside: {
                  description:
                    'The **`page-break-inside`** CSS property adjusts page breaks _inside_ the current element.\n\n**Syntax**: `auto | avoid`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari  |  Edge  |  IE   |\n| :----: | :-----: | :-----: | :----: | :---: |\n| **1**  | **19**  | **1.3** | **12** | **8** |',
                  enum: [
                    '-moz-initial',
                    'auto',
                    'avoid',
                    'inherit',
                    'initial',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                paintOrder: {
                  description:
                    'The **`paint-order`** CSS property lets you control the order in which the fill and stroke (and painting markers) of text content and shapes are drawn.\n\n**Syntax**: `normal | [ fill || stroke || markers ]`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **35** | **60**  | **8**  | **17** | No  |',
                  type: 'string',
                },
                perspective: {
                  description:
                    'The **`perspective`** CSS property determines the distance between the z=0 plane and the user in order to give a 3D-positioned element some perspective. Each 3D element with z>0 becomes larger; each 3D-element with z<0 becomes smaller. The strength of the effect is determined by the value of this property.\n\n**Syntax**: `none | <length>`\n\n**Initial value**: `none`\n\n|  Chrome  | Firefox  | Safari  |  Edge  |   IE   |\n| :------: | :------: | :-----: | :----: | :----: |\n|  **36**  |  **16**  |  **9**  | **12** | **10** |\n| 12 _-x-_ | 10 _-x-_ | 4 _-x-_ |        |        |',
                  type: ['string', 'number'],
                },
                perspectiveOrigin: {
                  description:
                    'The **`perspective-origin`** CSS property determines the position at which the viewer is looking. It is used as the _vanishing point_ by the `perspective` property.\n\n**Syntax**: `<position>`\n\n**Initial value**: `50% 50%`\n\n|  Chrome  | Firefox  | Safari  |  Edge  |   IE   |\n| :------: | :------: | :-----: | :----: | :----: |\n|  **36**  |  **16**  |  **9**  | **12** | **10** |\n| 12 _-x-_ | 10 _-x-_ | 4 _-x-_ |        |        |',
                  type: ['string', 'number'],
                },
                placeContent: {
                  description:
                    "The `**place-content**` CSS property is a shorthand for `align-content` and `justify-content`. It can be used in any layout method which utilizes both of these alignment values.\n\n**Syntax**: `<'align-content'> <'justify-content'>?`\n\n**Initial value**: `normal`\n\n---\n\n_Supported in Flex Layout_\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **59** | **45**  | **9**  | **79** | No  |\n\n---\n\n_Supported in Grid Layout_\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **59** | **53**  | **11** | **79** | No  |\n\n---",
                  type: 'string',
                },
                pointerEvents: {
                  description:
                    'The **`pointer-events`** CSS property sets under what circumstances (if any) a particular graphic element can become the target of mouse events.\n\n**Syntax**: `auto | none | visiblePainted | visibleFill | visibleStroke | visible | painted | fill | stroke | all | inherit`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  |   IE   |\n| :----: | :-----: | :----: | :----: | :----: |\n| **1**  | **1.5** | **4**  | **12** | **11** |',
                  enum: [
                    '-moz-initial',
                    'all',
                    'auto',
                    'fill',
                    'inherit',
                    'initial',
                    'none',
                    'painted',
                    'revert',
                    'stroke',
                    'unset',
                    'visible',
                    'visibleFill',
                    'visiblePainted',
                    'visibleStroke',
                  ],
                  type: 'string',
                },
                position: {
                  description:
                    'The **`position`** CSS property sets how an element is positioned in a document. The `top`, `right`, `bottom`, and `left` properties determine the final location of positioned elements.\n\n**Syntax**: `static | relative | absolute | sticky | fixed`\n\n**Initial value**: `static`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |',
                  enum: [
                    '-moz-initial',
                    '-webkit-sticky',
                    'absolute',
                    'fixed',
                    'inherit',
                    'initial',
                    'relative',
                    'revert',
                    'static',
                    'sticky',
                    'unset',
                  ],
                  type: 'string',
                },
                quotes: {
                  description:
                    'The **`quotes`** CSS property sets how quotation marks appear.\n\n**Syntax**: `none | auto | [ <string> <string> ]+`\n\n**Initial value**: depends on user agent\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **11** | **1.5** | **9**  | **12** | **8** |',
                  type: 'string',
                },
                resize: {
                  description:
                    'The **`resize`** CSS property sets whether an element is resizable, and if so, in which directions.\n\n**Syntax**: `none | both | horizontal | vertical | block | inline`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **1**  |  **4**  | **3**  | **79** | No  |',
                  enum: [
                    '-moz-initial',
                    'block',
                    'both',
                    'horizontal',
                    'inherit',
                    'initial',
                    'inline',
                    'none',
                    'revert',
                    'unset',
                    'vertical',
                  ],
                  type: 'string',
                },
                right: {
                  description:
                    'The **`right`** CSS property participates in specifying the horizontal position of a _positioned element_. It has no effect on non-positioned elements.\n\n**Syntax**: `<length> | <percentage> | auto`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  |   IE    |\n| :----: | :-----: | :----: | :----: | :-----: |\n| **1**  |  **1**  | **1**  | **12** | **5.5** |',
                  type: ['string', 'number'],
                },
                rotate: {
                  description:
                    'The **`rotate`** CSS property allows you to specify rotation transforms individually and independantly of the `transform` property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the `transform` value.\n\n**Syntax**: `none | <angle> | [ x | y | z | <number>{3} ] && <angle>`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n|   No   | **72**  |   No   |  No  | No  |',
                  type: 'string',
                },
                rowGap: {
                  description:
                    "The **`row-gap`** CSS property sets the size of the gap (gutter) between an element's grid rows.\n\n**Syntax**: `normal | <length-percentage>`\n\n**Initial value**: `normal`\n\n---\n\n_Supported in Flex Layout_\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **84** | **63**  |   No   | **84** | No  |\n\n---\n\n_Supported in Grid Layout_\n\n|       Chrome        |       Firefox       |        Safari         |  Edge  | IE  |\n| :-----------------: | :-----------------: | :-------------------: | :----: | :-: |\n|       **66**        |       **61**        |       **12.1**        | **16** | No  |\n| 57 _(grid-row-gap)_ | 52 _(grid-row-gap)_ | 10.1 _(grid-row-gap)_ |        |     |\n\n---",
                  type: ['string', 'number'],
                },
                rubyAlign: {
                  description:
                    'The `**ruby-align**` CSS property defines the distribution of the different ruby elements over the base.\n\n**Syntax**: `start | center | space-between | space-around`\n\n**Initial value**: `space-around`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n|   No   | **38**  |   No   |  No  | No  |',
                  enum: [
                    '-moz-initial',
                    'center',
                    'inherit',
                    'initial',
                    'revert',
                    'space-around',
                    'space-between',
                    'start',
                    'unset',
                  ],
                  type: 'string',
                },
                rubyMerge: {
                  description:
                    '**Syntax**: `separate | collapse | auto`\n\n**Initial value**: `separate`',
                  enum: [
                    '-moz-initial',
                    'auto',
                    'collapse',
                    'inherit',
                    'initial',
                    'revert',
                    'separate',
                    'unset',
                  ],
                  type: 'string',
                },
                rubyPosition: {
                  description:
                    'The `**ruby-position**` CSS property defines the position of a ruby element relatives to its base element. It can be position over the element (`over`), under it (`under`), or between the characters, on their right side (`inter-character`).\n\n**Syntax**: `over | under | inter-character`\n\n**Initial value**: `over`\n\n| Chrome  | Firefox |    Safari     | Edge  | IE  |\n| :-----: | :-----: | :-----------: | :---: | :-: |\n| **84**  | **38**  | **6.1** _-x-_ | 12-79 | No  |\n| 1 _-x-_ |         |               |       |     |',
                  enum: [
                    '-moz-initial',
                    'inherit',
                    'initial',
                    'over',
                    'revert',
                    'under',
                    'unset',
                  ],
                  type: 'string',
                },
                scale: {
                  description:
                    'The **`scale`** CSS property allows you to specify scale transforms individually and independantly of the `transform` property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the `transform` value.\n\n**Syntax**: `none | <number>{1,3}`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n|   No   | **72**  |   No   |  No  | No  |',
                  type: ['string', 'number'],
                },
                scrollBehavior: {
                  description:
                    'The **`scroll-behavior`** CSS property sets the behavior for a scrolling box when scrolling is triggered by the navigation or CSSOM scrolling APIs.\n\n**Syntax**: `auto | smooth`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **61** | **36**  | **14** | **79** | No  |',
                  enum: [
                    '-moz-initial',
                    'auto',
                    'inherit',
                    'initial',
                    'revert',
                    'smooth',
                    'unset',
                  ],
                  type: 'string',
                },
                scrollMargin: {
                  description:
                    'The **`scroll-margin`** property is a shorthand property which sets all of the `scroll-margin` longhands, assigning values much like the `margin` property does for the `margin-*` longhands.\n\n**Syntax**: `<length>{1,4}`\n\n**Initial value**: `0`\n\n| Chrome | Firefox |            Safari             |  Edge  | IE  |\n| :----: | :-----: | :---------------------------: | :----: | :-: |\n| **69** | **68**  | **11** _(scroll-snap-margin)_ | **79** | No  |',
                  type: ['string', 'number'],
                },
                scrollMarginBlock: {
                  description:
                    'The `scroll-margin-block` property is a shorthand property which sets the scroll-margin longhands in the block dimension.\n\n**Syntax**: `<length>{1,2}`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **69** | **68**  |   No   | **79** | No  |',
                  type: ['string', 'number'],
                },
                scrollMarginBlockEnd: {
                  description:
                    'The `scroll-margin-block-end` property defines the margin of the scroll snap area at the end of the block dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.\n\n**Syntax**: `<length>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **69** | **68**  |   No   | **79** | No  |',
                  type: ['string', 'number'],
                },
                scrollMarginBlockStart: {
                  description:
                    'The `scroll-margin-block-start` property defines the margin of the scroll snap area at the start of the block dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.\n\n**Syntax**: `<length>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **69** | **68**  |   No   | **79** | No  |',
                  type: ['string', 'number'],
                },
                scrollMarginBottom: {
                  description:
                    'The `scroll-margin-bottom` property defines the bottom margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.\n\n**Syntax**: `<length>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox |                Safari                |  Edge  | IE  |\n| :----: | :-----: | :----------------------------------: | :----: | :-: |\n| **69** | **68**  | **11** _(scroll-snap-margin-bottom)_ | **79** | No  |',
                  type: ['string', 'number'],
                },
                scrollMarginInline: {
                  description:
                    'The `scroll-margin-inline` property is a shorthand property which sets the scroll-margin longhands in the inline dimension.\n\n**Syntax**: `<length>{1,2}`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n|   No   | **68**  |   No   |  No  | No  |',
                  type: ['string', 'number'],
                },
                scrollMarginInlineEnd: {
                  description:
                    'The `scroll-margin-inline-end` property defines the margin of the scroll snap area at the end of the inline dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.\n\n**Syntax**: `<length>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **69** | **68**  |   No   | **79** | No  |',
                  type: ['string', 'number'],
                },
                scrollMarginInlineStart: {
                  description:
                    'The `scroll-margin-inline-start` property defines the margin of the scroll snap area at the start of the inline dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.\n\n**Syntax**: `<length>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **69** | **68**  |   No   | **79** | No  |',
                  type: ['string', 'number'],
                },
                scrollMarginLeft: {
                  description:
                    'The `scroll-margin-left` property defines the left margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.\n\n**Syntax**: `<length>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox |               Safari               |  Edge  | IE  |\n| :----: | :-----: | :--------------------------------: | :----: | :-: |\n| **69** | **68**  | **11** _(scroll-snap-margin-left)_ | **79** | No  |',
                  type: ['string', 'number'],
                },
                scrollMarginRight: {
                  description:
                    'The `scroll-margin-right` property defines the right margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.\n\n**Syntax**: `<length>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox |               Safari                |  Edge  | IE  |\n| :----: | :-----: | :---------------------------------: | :----: | :-: |\n| **69** | **68**  | **11** _(scroll-snap-margin-right)_ | **79** | No  |',
                  type: ['string', 'number'],
                },
                scrollMarginTop: {
                  description:
                    'The `scroll-margin-top` property defines the top margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.\n\n**Syntax**: `<length>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox |              Safari               |  Edge  | IE  |\n| :----: | :-----: | :-------------------------------: | :----: | :-: |\n| **69** | **68**  | **11** _(scroll-snap-margin-top)_ | **79** | No  |',
                  type: ['string', 'number'],
                },
                scrollPadding: {
                  description:
                    'The scroll-padding property is a shorthand property which sets all of the scroll-padding longhands, assigning values much like the padding property does for the padding-\\* longhands.  \n\nThe scroll-padding properties define offsets for the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.\n\n**Syntax**: `[ auto | <length-percentage> ]{1,4}`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **69** | **68**  | **11** | **79** | No  |',
                  type: ['string', 'number'],
                },
                scrollPaddingBlock: {
                  description:
                    'The `scroll-padding-block` property is a shorthand property which sets the scroll-padding longhands for the block dimension.  \n\nThe scroll-padding properties define offsets for the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.\n\n**Syntax**: `[ auto | <length-percentage> ]{1,2}`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **69** | **68**  |   No   | **79** | No  |',
                  type: ['string', 'number'],
                },
                scrollPaddingBlockEnd: {
                  description:
                    'The `scroll-padding-block-end` property defines offsets for the end edge in the block dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.\n\n**Syntax**: `auto | <length-percentage>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **69** | **68**  |   No   | **79** | No  |',
                  type: ['string', 'number'],
                },
                scrollPaddingBlockStart: {
                  description:
                    'The `scroll-padding-block-start` property defines offsets for the start edge in the block dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.\n\n**Syntax**: `auto | <length-percentage>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **69** | **68**  |   No   | **79** | No  |',
                  type: ['string', 'number'],
                },
                scrollPaddingBottom: {
                  description:
                    'The `scroll-padding-bottom` property defines offsets for the bottom of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.\n\n**Syntax**: `auto | <length-percentage>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **69** | **68**  | **11** | **79** | No  |',
                  type: ['string', 'number'],
                },
                scrollPaddingInline: {
                  description:
                    'The `scroll-padding-inline` property is a shorthand property which sets the scroll-padding longhands for the inline dimension.  \n\nThe scroll-padding properties define offsets for the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.\n\n**Syntax**: `[ auto | <length-percentage> ]{1,2}`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **69** | **68**  |   No   | **79** | No  |',
                  type: ['string', 'number'],
                },
                scrollPaddingInlineEnd: {
                  description:
                    'The `scroll-padding-inline-end` property defines offsets for the end edge in the inline dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.\n\n**Syntax**: `auto | <length-percentage>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **69** | **68**  |   No   | **79** | No  |',
                  type: ['string', 'number'],
                },
                scrollPaddingInlineStart: {
                  description:
                    'The `scroll-padding-inline-start` property defines offsets for the start edge in the inline dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.\n\n**Syntax**: `auto | <length-percentage>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **69** | **68**  |   No   | **79** | No  |',
                  type: ['string', 'number'],
                },
                scrollPaddingLeft: {
                  description:
                    'The `scroll-padding-left` property defines offsets for the left of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.\n\n**Syntax**: `auto | <length-percentage>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **69** | **68**  | **11** | **79** | No  |',
                  type: ['string', 'number'],
                },
                scrollPaddingRight: {
                  description:
                    'The `scroll-padding-right` property defines offsets for the right of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.\n\n**Syntax**: `auto | <length-percentage>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **69** | **68**  | **11** | **79** | No  |',
                  type: ['string', 'number'],
                },
                scrollPaddingTop: {
                  description:
                    'The `scroll-padding-top` property defines offsets for the top of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.\n\n**Syntax**: `auto | <length-percentage>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **69** | **68**  | **11** | **79** | No  |',
                  type: ['string', 'number'],
                },
                scrollSnapAlign: {
                  description:
                    'The `scroll-snap-align` property specifies the box’s snap position as an alignment of its snap area (as the alignment subject) within its snap container’s snapport (as the alignment container). The two values specify the snapping alignment in the block axis and inline axis, respectively. If only one value is specified, the second value defaults to the same value.\n\n**Syntax**: `[ none | start | end | center ]{1,2}`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **69** | **68**  | **11** | **79** | No  |',
                  type: 'string',
                },
                scrollSnapMargin: {
                  description:
                    'The **`scroll-margin`** property is a shorthand property which sets all of the `scroll-margin` longhands, assigning values much like the `margin` property does for the `margin-*` longhands.\n\n**Syntax**: `<length>{1,4}`\n\n**Initial value**: `0`\n\n| Chrome | Firefox |            Safari             |  Edge  | IE  |\n| :----: | :-----: | :---------------------------: | :----: | :-: |\n| **69** | **68**  | **11** _(scroll-snap-margin)_ | **79** | No  |',
                  type: ['string', 'number'],
                },
                scrollSnapMarginBottom: {
                  description:
                    'The `scroll-margin-bottom` property defines the bottom margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.\n\n**Syntax**: `<length>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox |                Safari                |  Edge  | IE  |\n| :----: | :-----: | :----------------------------------: | :----: | :-: |\n| **69** | **68**  | **11** _(scroll-snap-margin-bottom)_ | **79** | No  |',
                  type: ['string', 'number'],
                },
                scrollSnapMarginLeft: {
                  description:
                    'The `scroll-margin-left` property defines the left margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.\n\n**Syntax**: `<length>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox |               Safari               |  Edge  | IE  |\n| :----: | :-----: | :--------------------------------: | :----: | :-: |\n| **69** | **68**  | **11** _(scroll-snap-margin-left)_ | **79** | No  |',
                  type: ['string', 'number'],
                },
                scrollSnapMarginRight: {
                  description:
                    'The `scroll-margin-right` property defines the right margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.\n\n**Syntax**: `<length>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox |               Safari                |  Edge  | IE  |\n| :----: | :-----: | :---------------------------------: | :----: | :-: |\n| **69** | **68**  | **11** _(scroll-snap-margin-right)_ | **79** | No  |',
                  type: ['string', 'number'],
                },
                scrollSnapMarginTop: {
                  description:
                    'The `scroll-margin-top` property defines the top margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.\n\n**Syntax**: `<length>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox |              Safari               |  Edge  | IE  |\n| :----: | :-----: | :-------------------------------: | :----: | :-: |\n| **69** | **68**  | **11** _(scroll-snap-margin-top)_ | **79** | No  |',
                  type: ['string', 'number'],
                },
                scrollSnapStop: {
                  description:
                    'The **`scroll-snap-stop`** CSS property defines whether the scroll container is allowed to "pass over" possible snap positions.\n\n**Syntax**: `normal | always`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **75** |   No    |   No   | **79** | No  |',
                  enum: [
                    '-moz-initial',
                    'always',
                    'inherit',
                    'initial',
                    'normal',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                scrollSnapType: {
                  description:
                    'The **`scroll-snap-type`** CSS property sets how strictly snap points are enforced on the scroll container in case there is one.\n\n**Syntax**: `none | [ x | y | block | inline | both ] [ mandatory | proximity ]?`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari  |     Edge     |      IE      |\n| :----: | :-----: | :-----: | :----------: | :----------: |\n| **69** |  39-68  | **11**  | **12** _-x-_ | **10** _-x-_ |\n|        |         | 9 _-x-_ |              |              |',
                  type: 'string',
                },
                scrollbarColor: {
                  description:
                    'The **`scrollbar-color`** CSS property sets the color of the scrollbar track and thumb.\n\n**Syntax**: `auto | dark | light | <color>{2}`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n|   No   | **64**  |   No   |  No  | No  |',
                  type: 'string',
                },
                scrollbarGutter: {
                  description:
                    "The **`scrollbar-gutter`** CSS property allows authors to reserve space for the scrollbar, preventing unwanted layout changes as the content grows while also avoiding unnecessary visuals when scrolling isn't needed.\n\n**Syntax**: `auto | [ stable | always ] && both? && force?`\n\n**Initial value**: `auto`",
                  type: 'string',
                },
                scrollbarWidth: {
                  description:
                    'The `scrollbar-width` property allows the author to set the maximum thickness of an element’s scrollbars when they are shown.\n\n**Syntax**: `auto | thin | none`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n|   No   | **64**  |   No   |  No  | No  |',
                  enum: [
                    '-moz-initial',
                    'auto',
                    'inherit',
                    'initial',
                    'none',
                    'revert',
                    'thin',
                    'unset',
                  ],
                  type: 'string',
                },
                shapeImageThreshold: {
                  description:
                    'The **`shape-image-threshold`** CSS property sets the alpha channel threshold used to extract the shape using an image as the value for `shape-outside`.\n\n**Syntax**: `<alpha-value>`\n\n**Initial value**: `0.0`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **37** | **62**  | **10.1** | **79** | No  |',
                  type: ['string', 'number'],
                },
                shapeMargin: {
                  description:
                    'The **`shape-margin`** CSS property sets a margin for a CSS shape created using `shape-outside`.\n\n**Syntax**: `<length-percentage>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **37** | **62**  | **10.1** | **79** | No  |',
                  type: ['string', 'number'],
                },
                shapeOutside: {
                  description:
                    'The **`shape-outside`** CSS property defines a shape—which may be non-rectangular—around which adjacent inline content should wrap. By default, inline content wraps around its margin box; `shape-outside` provides a way to customize this wrapping, making it possible to wrap text around complex objects rather than simple boxes.\n\n**Syntax**: `none | <shape-box> || <basic-shape> | <image>`\n\n**Initial value**: `none`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **37** | **62**  | **10.1** | **79** | No  |',
                  type: 'string',
                },
                tabSize: {
                  description:
                    'The **`tab-size`** CSS property is used to customize the width of a tab (`U+0009`) character.\n\n**Syntax**: `<integer> | <length>`\n\n**Initial value**: `8`\n\n| Chrome |   Firefox   | Safari  |  Edge  | IE  |\n| :----: | :---------: | :-----: | :----: | :-: |\n| **21** | **4** _-x-_ | **6.1** | **79** | No  |',
                  type: ['string', 'number'],
                },
                tableLayout: {
                  description:
                    'The **`table-layout`** CSS property sets the algorithm used to lay out `<table>` cells, rows, and columns.\n\n**Syntax**: `auto | fixed`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **14** |  **1**  | **1**  | **12** | **5** |',
                  enum: [
                    '-moz-initial',
                    'auto',
                    'fixed',
                    'inherit',
                    'initial',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                textAlign: {
                  description:
                    'The **`text-align`** CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like `vertical-align` but in the horizontal direction.\n\n**Syntax**: `start | end | left | right | center | justify | match-parent`\n\n**Initial value**: `start`, or a nameless value that acts as `left` if _direction_ is `ltr`, `right` if _direction_ is `rtl` if `start` is not supported by the browser.\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **3** |',
                  enum: [
                    '-moz-initial',
                    'center',
                    'end',
                    'inherit',
                    'initial',
                    'justify',
                    'left',
                    'match-parent',
                    'revert',
                    'right',
                    'start',
                    'unset',
                  ],
                  type: 'string',
                },
                textAlignLast: {
                  description:
                    'The **`text-align-last`** CSS property sets how the last line of a block or a line, right before a forced line break, is aligned.\n\n**Syntax**: `auto | start | end | left | right | center | justify`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  |   IE    |\n| :----: | :-----: | :----: | :----: | :-----: |\n| **47** | **49**  |   No   | **12** | **5.5** |',
                  enum: [
                    '-moz-initial',
                    'auto',
                    'center',
                    'end',
                    'inherit',
                    'initial',
                    'justify',
                    'left',
                    'revert',
                    'right',
                    'start',
                    'unset',
                  ],
                  type: 'string',
                },
                textCombineUpright: {
                  description:
                    'The **`text-combine-upright`** CSS property sets the combination of characters into the space of a single character. If the combined text is wider than 1em, the user agent must fit the contents within 1em. The resulting composition is treated as a single upright glyph for layout and decoration. This property only has an effect in vertical writing modes.\n\n**Syntax**: `none | all | [ digits <integer>? ]`\n\n**Initial value**: `none`\n\n|           Chrome           | Firefox |              Safari              |                  Edge                  |                   IE                   |\n| :------------------------: | :-----: | :------------------------------: | :------------------------------------: | :------------------------------------: |\n|           **48**           | **48**  | **5.1** _(-webkit-text-combine)_ | **12** _(-ms-text-combine-horizontal)_ | **11** _(-ms-text-combine-horizontal)_ |\n| 9 _(-webkit-text-combine)_ |         |                                  |                                        |                                        |',
                  type: 'string',
                },
                textDecorationColor: {
                  description:
                    'The **`text-decoration-color`** CSS property sets the color of decorations added to text by `text-decoration-line`.\n\n**Syntax**: `<color>`\n\n**Initial value**: `currentcolor`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **57** | **36**  | **12.1** | **79** | No  |\n|        |         | 8 _-x-_  |        |     |',
                  type: 'string',
                },
                textDecorationLine: {
                  description:
                    'The **`text-decoration-line`** CSS property sets the kind of decoration that is used on text in an element, such as an underline or overline.\n\n**Syntax**: `none | [ underline || overline || line-through || blink ] | spelling-error | grammar-error`\n\n**Initial value**: `none`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **57** | **36**  | **12.1** | **79** | No  |\n|        |         | 8 _-x-_  |        |     |',
                  type: 'string',
                },
                textDecorationSkip: {
                  description:
                    'The **`text-decoration-skip`** CSS property sets what parts of an element’s content any text decoration affecting the element must skip over. It controls all text decoration lines drawn by the element and also any text decoration lines drawn by its ancestors.\n\n**Syntax**: `none | [ objects || [ spaces | [ leading-spaces || trailing-spaces ] ] || edges || box-decoration ]`\n\n**Initial value**: `objects`\n\n| Chrome | Firefox |  Safari  | Edge | IE  |\n| :----: | :-----: | :------: | :--: | :-: |\n| 57-64  |   No    | **12.1** |  No  | No  |\n|        |         | 8 _-x-_  |      |     |',
                  type: 'string',
                },
                textDecorationSkipInk: {
                  description:
                    'The **`text-decoration-skip-ink`** CSS property specifies how overlines and underlines are drawn when they pass over glyph ascenders and descenders.\n\n**Syntax**: `auto | all | none`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **64** | **70**  |   No   | **79** | No  |',
                  enum: [
                    '-moz-initial',
                    'all',
                    'auto',
                    'inherit',
                    'initial',
                    'none',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                textDecorationStyle: {
                  description:
                    'The **`text-decoration-style`** CSS property sets the style of the lines specified by `text-decoration-line`. The style applies to all lines that are set with `text-decoration-line`.\n\n**Syntax**: `solid | double | dotted | dashed | wavy`\n\n**Initial value**: `solid`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **57** | **36**  | **12.1** | **79** | No  |\n|        |         | 8 _-x-_  |        |     |',
                  enum: [
                    '-moz-initial',
                    'dashed',
                    'dotted',
                    'double',
                    'inherit',
                    'initial',
                    'revert',
                    'solid',
                    'unset',
                    'wavy',
                  ],
                  type: 'string',
                },
                textDecorationThickness: {
                  description:
                    'The **`text-decoration-thickness`** CSS property sets the thickness, or width, of the decoration line that is used on text in an element, such as a line-through, underline, or overline.\n\n**Syntax**: `auto | from-font | <length> | <percentage> `\n\n**Initial value**: `auto`\n\n| Chrome | Firefox |  Safari  | Edge | IE  |\n| :----: | :-----: | :------: | :--: | :-: |\n|   No   | **70**  | **12.1** |  No  | No  |',
                  type: ['string', 'number'],
                },
                textDecorationWidth: {
                  description:
                    'The **`text-decoration-thickness`** CSS property sets the thickness, or width, of the decoration line that is used on text in an element, such as a line-through, underline, or overline.\n\n**Syntax**: `auto | from-font | <length> | <percentage> `\n\n**Initial value**: `auto`\n\n| Chrome | Firefox |  Safari  | Edge | IE  |\n| :----: | :-----: | :------: | :--: | :-: |\n|   No   | **70**  | **12.1** |  No  | No  |',
                  type: ['string', 'number'],
                },
                textEmphasisColor: {
                  description:
                    'The **`text-emphasis-color`** CSS property sets the color of emphasis marks. This value can also be set using the `text-emphasis` shorthand.\n\n**Syntax**: `<color>`\n\n**Initial value**: `currentcolor`\n\n|    Chrome    | Firefox | Safari  |     Edge     | IE  |\n| :----------: | :-----: | :-----: | :----------: | :-: |\n| **25** _-x-_ | **46**  | **6.1** | **79** _-x-_ | No  |',
                  type: 'string',
                },
                textEmphasisPosition: {
                  description:
                    "The **`text-emphasis-position`** CSS property sets where emphasis marks are drawn. Like ruby text, if there isn't enough room for emphasis marks, the line height is increased.\n\n**Syntax**: `[ over | under ] && [ right | left ]`\n\n**Initial value**: `over right`\n\n|    Chrome    | Firefox | Safari  |     Edge     | IE  |\n| :----------: | :-----: | :-----: | :----------: | :-: |\n| **25** _-x-_ | **46**  | **6.1** | **79** _-x-_ | No  |",
                  type: 'string',
                },
                textEmphasisStyle: {
                  description:
                    'The **`text-emphasis-style`** CSS property sets the appearance of emphasis marks. It can also be set, and reset, using the `text-emphasis` shorthand.\n\n**Syntax**: `none | [ [ filled | open ] || [ dot | circle | double-circle | triangle | sesame ] ] | <string>`\n\n**Initial value**: `none`\n\n|    Chrome    | Firefox | Safari  |     Edge     | IE  |\n| :----------: | :-----: | :-----: | :----------: | :-: |\n| **25** _-x-_ | **46**  | **6.1** | **79** _-x-_ | No  |',
                  type: 'string',
                },
                textIndent: {
                  description:
                    'The **`text-indent`** CSS property sets the length of empty space (indentation) that is put before lines of text in a block.\n\n**Syntax**: `<length-percentage> && hanging? && each-line?`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **3** |',
                  type: ['string', 'number'],
                },
                textJustify: {
                  description:
                    'The **`text-justify`** CSS property sets what type of justification should be applied to text when `text-align``: justify;` is set on an element.\n\n**Syntax**: `auto | inter-character | inter-word | none`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  |   IE   |\n| :----: | :-----: | :----: | :----: | :----: |\n|  n/a   | **55**  |   No   | **12** | **11** |',
                  enum: [
                    '-moz-initial',
                    'auto',
                    'inherit',
                    'initial',
                    'inter-character',
                    'inter-word',
                    'none',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                textOrientation: {
                  description:
                    'The **`text-orientation`** CSS property sets the orientation of the text characters in a line. It only affects text in vertical mode (when `writing-mode` is not `horizontal-tb`). It is useful for controlling the display of languages that use vertical script, and also for making vertical table headers.\n\n**Syntax**: `mixed | upright | sideways`\n\n**Initial value**: `mixed`\n\n|  Chrome  | Firefox |  Safari   |  Edge  | IE  |\n| :------: | :-----: | :-------: | :----: | :-: |\n|  **48**  | **41**  |  **14**   | **79** | No  |\n| 11 _-x-_ |         | 5.1 _-x-_ |        |     |',
                  enum: [
                    '-moz-initial',
                    'inherit',
                    'initial',
                    'mixed',
                    'revert',
                    'sideways',
                    'unset',
                    'upright',
                  ],
                  type: 'string',
                },
                textOverflow: {
                  description:
                    "The **`text-overflow`** CSS property sets how hidden overflow content is signaled to users. It can be clipped, display an ellipsis ('`…`'), or display a custom string.\n\n**Syntax**: `[ clip | ellipsis | <string> ]{1,2}`\n\n**Initial value**: `clip`\n\n| Chrome | Firefox | Safari  |  Edge  |  IE   |\n| :----: | :-----: | :-----: | :----: | :---: |\n| **1**  |  **7**  | **1.3** | **12** | **6** |",
                  type: 'string',
                },
                textRendering: {
                  description:
                    'The **`text-rendering`** CSS property provides information to the rendering engine about what to optimize for when rendering text.\n\n**Syntax**: `auto | optimizeSpeed | optimizeLegibility | geometricPrecision`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **4**  |  **1**  | **5**  | **79** | No  |',
                  enum: [
                    '-moz-initial',
                    'auto',
                    'geometricPrecision',
                    'inherit',
                    'initial',
                    'optimizeLegibility',
                    'optimizeSpeed',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                textShadow: {
                  description:
                    'The **`text-shadow`** CSS property adds shadows to text. It accepts a comma-separated list of shadows to be applied to the text and any of its `decorations`. Each shadow is described by some combination of X and Y offsets from the element, blur radius, and color.\n\n**Syntax**: `none | <shadow-t>#`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari  |  Edge  |   IE   |\n| :----: | :-----: | :-----: | :----: | :----: |\n| **2**  | **3.5** | **1.1** | **12** | **10** |',
                  type: 'string',
                },
                textSizeAdjust: {
                  description:
                    'The **`text-size-adjust`** CSS property controls the text inflation algorithm used on some smartphones and tablets. Other browsers will ignore this property.\n\n**Syntax**: `none | auto | <percentage>`\n\n**Initial value**: `auto` for smartphone browsers supporting inflation, `none` in other cases (and then not modifiable).\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **54** |   No    |   No   | **79** | No  |',
                  type: 'string',
                },
                textTransform: {
                  description:
                    "The **`text-transform`** CSS property specifies how to capitalize an element's text. It can be used to make text appear in all-uppercase or all-lowercase, or with each word capitalized. It also can help improve legibility for ruby\n\n**Syntax**: `none | capitalize | uppercase | lowercase | full-width | full-size-kana`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |",
                  enum: [
                    '-moz-initial',
                    'capitalize',
                    'full-size-kana',
                    'full-width',
                    'inherit',
                    'initial',
                    'lowercase',
                    'none',
                    'revert',
                    'unset',
                    'uppercase',
                  ],
                  type: 'string',
                },
                textUnderlineOffset: {
                  description:
                    'The **`text-underline-offset`** CSS property sets the offset distance of an underline text decoration line (applied using `text-decoration`) from its original position.\n\n**Syntax**: `auto | <length> | <percentage> `\n\n**Initial value**: `auto`\n\n| Chrome | Firefox |  Safari  | Edge | IE  |\n| :----: | :-----: | :------: | :--: | :-: |\n|   No   | **70**  | **12.1** |  No  | No  |',
                  type: ['string', 'number'],
                },
                textUnderlinePosition: {
                  description:
                    "The **`text-underline-position`** CSS property specifies the position of the underline which is set using the `text-decoration` property's `underline` value.\n\n**Syntax**: `auto | from-font | [ under || [ left | right ] ]`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox |  Safari  |  Edge  |  IE   |\n| :----: | :-----: | :------: | :----: | :---: |\n| **33** | **74**  | **12.1** | **12** | **6** |\n|        |         | 9 _-x-_  |        |       |",
                  type: 'string',
                },
                top: {
                  description:
                    'The **`top`** CSS property participates in specifying the vertical position of a _positioned element_. It has no effect on non-positioned elements.\n\n**Syntax**: `<length> | <percentage> | auto`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **5** |',
                  type: ['string', 'number'],
                },
                touchAction: {
                  description:
                    'The **`touch-action`** CSS property sets how a region can be manipulated by a touchscreen user (for example, by zooming features built into the browser).\n\n**Syntax**: `auto | none | [ [ pan-x | pan-left | pan-right ] || [ pan-y | pan-up | pan-down ] || pinch-zoom ] | manipulation`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  |    IE    |\n| :----: | :-----: | :----: | :----: | :------: |\n| **36** | **52**  | **13** | **12** |  **11**  |\n|        |         |        |        | 10 _-x-_ |',
                  type: 'string',
                },
                transform: {
                  description:
                    'The **`transform`** CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.\n\n**Syntax**: `none | <transform-list>`\n\n**Initial value**: `none`\n\n| Chrome  | Firefox |  Safari   |  Edge  |   IE    |\n| :-----: | :-----: | :-------: | :----: | :-----: |\n| **36**  | **16**  |   **9**   | **12** | **10**  |\n| 1 _-x-_ |         | 3.1 _-x-_ |        | 9 _-x-_ |',
                  type: 'string',
                },
                transformBox: {
                  description:
                    'The **`transform-box`** CSS property defines the layout box to which the `transform` and `transform-origin` properties relate.\n\n**Syntax**: `content-box | border-box | fill-box | stroke-box | view-box`\n\n**Initial value**: `view-box`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **64** | **55**  | **11** | **79** | No  |',
                  enum: [
                    '-moz-initial',
                    'border-box',
                    'content-box',
                    'fill-box',
                    'inherit',
                    'initial',
                    'revert',
                    'stroke-box',
                    'unset',
                    'view-box',
                  ],
                  type: 'string',
                },
                transformOrigin: {
                  description:
                    "The **`transform-origin`** CSS property sets the origin for an element's transformations.\n\n**Syntax**: `[ <length-percentage> | left | center | right | top | bottom ] | [ [ <length-percentage> | left | center | right ] && [ <length-percentage> | top | center | bottom ] ] <length>?`\n\n**Initial value**: `50% 50% 0`\n\n| Chrome  |  Firefox  | Safari  |  Edge  |   IE    |\n| :-----: | :-------: | :-----: | :----: | :-----: |\n| **36**  |  **16**   |  **9**  | **12** | **10**  |\n| 1 _-x-_ | 3.5 _-x-_ | 2 _-x-_ |        | 9 _-x-_ |",
                  type: ['string', 'number'],
                },
                transformStyle: {
                  description:
                    'The **`transform-style`** CSS property sets whether children of an element are positioned in the 3D space or are flattened in the plane of the element.\n\n**Syntax**: `flat | preserve-3d`\n\n**Initial value**: `flat`\n\n|  Chrome  | Firefox  | Safari  |  Edge  | IE  |\n| :------: | :------: | :-----: | :----: | :-: |\n|  **36**  |  **16**  |  **9**  | **12** | No  |\n| 12 _-x-_ | 10 _-x-_ | 4 _-x-_ |        |     |',
                  enum: [
                    '-moz-initial',
                    'flat',
                    'inherit',
                    'initial',
                    'preserve-3d',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                transitionDelay: {
                  description:
                    "The **`transition-delay`** CSS property specifies the duration to wait before starting a property's transition effect when its value changes.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`\n\n| Chrome  | Firefox | Safari  |  Edge  |   IE   |\n| :-----: | :-----: | :-----: | :----: | :----: |\n| **26**  | **16**  |  **9**  | **12** | **10** |\n| 1 _-x-_ | 4 _-x-_ | 4 _-x-_ |        |        |",
                  type: 'string',
                },
                transitionDuration: {
                  description:
                    'The **`transition-duration`** CSS property sets the length of time a transition animation should take to complete. By default, the value is `0s`, meaning that no animation will occur.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`\n\n| Chrome  | Firefox |  Safari   |  Edge  |   IE   |\n| :-----: | :-----: | :-------: | :----: | :----: |\n| **26**  | **16**  |   **9**   | **12** | **10** |\n| 1 _-x-_ | 4 _-x-_ | 3.1 _-x-_ |        |        |',
                  type: 'string',
                },
                transitionProperty: {
                  description:
                    'The **`transition-property`** CSS property sets the CSS properties to which a transition effect should be applied.\n\n**Syntax**: `none | <single-transition-property>#`\n\n**Initial value**: all\n\n| Chrome  | Firefox |  Safari   |  Edge  |   IE   |\n| :-----: | :-----: | :-------: | :----: | :----: |\n| **26**  | **16**  |   **9**   | **12** | **10** |\n| 1 _-x-_ | 4 _-x-_ | 3.1 _-x-_ |        |        |',
                  type: 'string',
                },
                transitionTimingFunction: {
                  description:
                    'The **`transition-timing-function`** CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect.\n\n**Syntax**: `<timing-function>#`\n\n**Initial value**: `ease`\n\n| Chrome  | Firefox |  Safari   |  Edge  |   IE   |\n| :-----: | :-----: | :-------: | :----: | :----: |\n| **26**  | **16**  |   **9**   | **12** | **10** |\n| 1 _-x-_ | 4 _-x-_ | 3.1 _-x-_ |        |        |',
                  type: 'string',
                },
                translate: {
                  description:
                    'The **`translate`** CSS property allows you to specify translation transforms individually and independantly of the `transform` property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the `transform` value.\n\n**Syntax**: `none | <length-percentage> [ <length-percentage> <length>? ]?`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n|   No   | **72**  |   No   |  No  | No  |',
                  type: ['string', 'number'],
                },
                unicodeBidi: {
                  description:
                    'The **`unicode-bidi`** CSS property, together with the `direction` property, determines how bidirectional text in a document is handled. For example, if a block of content contains both left-to-right and right-to-left text, the user-agent uses a complex Unicode algorithm to decide how to display the text. The `unicode-bidi` property overrides this algorithm and allows the developer to control the text embedding.\n\n**Syntax**: `normal | embed | isolate | bidi-override | isolate-override | plaintext`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari  |  Edge  |   IE    |\n| :----: | :-----: | :-----: | :----: | :-----: |\n| **2**  |  **1**  | **1.3** | **12** | **5.5** |',
                  enum: [
                    '-moz-initial',
                    '-moz-isolate',
                    '-moz-isolate-override',
                    '-moz-plaintext',
                    '-webkit-isolate',
                    'bidi-override',
                    'embed',
                    'inherit',
                    'initial',
                    'isolate',
                    'isolate-override',
                    'normal',
                    'plaintext',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                userSelect: {
                  description:
                    "The `**user-select**` CSS property controls whether the user can select text. This doesn't have any effect on content loaded as chrome, except in textboxes.\n\n**Syntax**: `auto | text | none | contain | all`\n\n**Initial value**: `auto`\n\n| Chrome  | Firefox |   Safari    |     Edge     |      IE      |\n| :-----: | :-----: | :---------: | :----------: | :----------: |\n| **54**  | **69**  | **3** _-x-_ | **12** _-x-_ | **10** _-x-_ |\n| 1 _-x-_ | 1 _-x-_ |             |              |              |",
                  enum: [
                    '-moz-initial',
                    '-moz-none',
                    'all',
                    'auto',
                    'contain',
                    'element',
                    'inherit',
                    'initial',
                    'none',
                    'revert',
                    'text',
                    'unset',
                  ],
                  type: 'string',
                },
                verticalAlign: {
                  description:
                    'The **`vertical-align`** CSS property sets vertical alignment of an inline or table-cell box.\n\n**Syntax**: `baseline | sub | super | text-top | text-bottom | middle | top | bottom | <percentage> | <length>`\n\n**Initial value**: `baseline`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |',
                  type: ['string', 'number'],
                },
                visibility: {
                  description:
                    'The **`visibility`** CSS property shows or hides an element without changing the layout of a document. The property can also hide rows or columns in a `<table>`.\n\n**Syntax**: `visible | hidden | collapse`\n\n**Initial value**: `visible`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |',
                  enum: [
                    '-moz-initial',
                    'collapse',
                    'hidden',
                    'inherit',
                    'initial',
                    'revert',
                    'unset',
                    'visible',
                  ],
                  type: 'string',
                },
                whiteSpace: {
                  description:
                    'The **`white-space`** CSS property sets how white space inside an element is handled.\n\n**Syntax**: `normal | pre | nowrap | pre-wrap | pre-line | break-spaces`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari |  Edge  |   IE    |\n| :----: | :-----: | :----: | :----: | :-----: |\n| **1**  |  **1**  | **1**  | **12** | **5.5** |',
                  enum: [
                    '-moz-initial',
                    '-moz-pre-wrap',
                    'break-spaces',
                    'inherit',
                    'initial',
                    'normal',
                    'nowrap',
                    'pre',
                    'pre-line',
                    'pre-wrap',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                widows: {
                  description:
                    'The **`widows`** CSS property sets the minimum number of lines in a block container that must be shown at the _top_ of a page, region, or column.\n\n**Syntax**: `<integer>`\n\n**Initial value**: `2`\n\n| Chrome | Firefox | Safari  |  Edge  |  IE   |\n| :----: | :-----: | :-----: | :----: | :---: |\n| **25** |   No    | **1.3** | **12** | **8** |',
                  anyOf: [
                    {
                      enum: [
                        '-moz-initial',
                        'inherit',
                        'initial',
                        'revert',
                        'unset',
                      ],
                      type: 'string',
                    },
                    {
                      type: 'number',
                    },
                  ],
                },
                width: {
                  description:
                    "The **`width`** CSS property sets an element's width. By default it sets the width of the content area, but if `box-sizing` is set to `border-box`, it sets the width of the border area.\n\n**Syntax**: `auto | <length> | <percentage> | min-content | max-content | fit-content(<length-percentage>)`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |",
                  type: ['string', 'number'],
                },
                willChange: {
                  description:
                    'The **`will-change`** CSS property hints to browsers how an element is expected to change. Browsers may set up optimizations before an element is actually changed. These kinds of optimizations can increase the responsiveness of a page by doing potentially expensive work before they are actually required.\n\n**Syntax**: `auto | <animateable-feature>#`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari  |  Edge  | IE  |\n| :----: | :-----: | :-----: | :----: | :-: |\n| **36** | **36**  | **9.1** | **79** | No  |',
                  type: 'string',
                },
                wordBreak: {
                  description:
                    'The **`word-break`** CSS property sets whether line breaks appear wherever the text would otherwise overflow its content box.\n\n**Syntax**: `normal | break-all | keep-all | break-word`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari |  Edge  |   IE    |\n| :----: | :-----: | :----: | :----: | :-----: |\n| **1**  | **15**  | **3**  | **12** | **5.5** |',
                  enum: [
                    '-moz-initial',
                    'break-all',
                    'break-word',
                    'inherit',
                    'initial',
                    'keep-all',
                    'normal',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                wordSpacing: {
                  description:
                    'The **`word-spacing`** CSS property sets the length of space between words and between tags.\n\n**Syntax**: `normal | <length-percentage>`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **6** |',
                  type: ['string', 'number'],
                },
                wordWrap: {
                  description:
                    'The `**overflow-wrap**` CSS property sets whether the browser should insert line breaks within words to prevent text from overflowing its content box.\n\n**Syntax**: `normal | break-word`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari |  Edge  |   IE    |\n| :----: | :-----: | :----: | :----: | :-----: |\n| **1**  | **3.5** | **2**  | **12** | **5.5** |',
                  enum: [
                    '-moz-initial',
                    'break-word',
                    'inherit',
                    'initial',
                    'normal',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                writingMode: {
                  description:
                    'The **`writing-mode`** CSS property sets whether lines of text are laid out horizontally or vertically, as well as the direction in which blocks progress.\n\n**Syntax**: `horizontal-tb | vertical-rl | vertical-lr | sideways-rl | sideways-lr`\n\n**Initial value**: `horizontal-tb`\n\n| Chrome  | Firefox |  Safari   |  Edge  |  IE   |\n| :-----: | :-----: | :-------: | :----: | :---: |\n| **48**  | **41**  | **10.1**  | **12** | **9** |\n| 8 _-x-_ |         | 5.1 _-x-_ |        |       |',
                  enum: [
                    '-moz-initial',
                    'horizontal-tb',
                    'inherit',
                    'initial',
                    'revert',
                    'sideways-lr',
                    'sideways-rl',
                    'unset',
                    'vertical-lr',
                    'vertical-rl',
                  ],
                  type: 'string',
                },
                zIndex: {
                  description:
                    'The **`z-index`** CSS property sets the z-order of a positioned element and its descendants or flex items. Overlapping elements with a larger z-index cover those with a smaller one.\n\n**Syntax**: `auto | <integer>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |',
                  anyOf: [
                    {
                      enum: [
                        '-moz-initial',
                        'auto',
                        'inherit',
                        'initial',
                        'revert',
                        'unset',
                      ],
                      type: 'string',
                    },
                    {
                      type: 'number',
                    },
                  ],
                },
                zoom: {
                  description:
                    'The non-standard **`zoom`** CSS property can be used to control the magnification level of an element. `transform: scale()` should be used instead of this property, if possible. However, unlike CSS Transforms, `zoom` affects the layout size of the element.\n\n**Syntax**: `normal | reset | <number> | <percentage>`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari  |  Edge  |   IE    |\n| :----: | :-----: | :-----: | :----: | :-----: |\n| **1**  |   No    | **3.1** | **12** | **5.5** |',
                  type: ['string', 'number'],
                },
                all: {
                  description:
                    "The `**all**` CSS shorthand property sets all of an element's properties (other than `unicode-bidi` and `direction`) to their initial or inherited values, or to the values specified in another stylesheet origin.\n\n**Syntax**: `initial | inherit | unset | revert`\n\n**Initial value**: There is no practical initial value for it.\n\n| Chrome | Firefox | Safari  |  Edge  | IE  |\n| :----: | :-----: | :-----: | :----: | :-: |\n| **37** | **27**  | **9.1** | **79** | No  |",
                  enum: [
                    '-moz-initial',
                    'inherit',
                    'initial',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                animation: {
                  description:
                    'The **`animation`** shorthand CSS property sets an animated transition between styles. It is a shorthand for `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, and `animation-play-state`.\n\n**Syntax**: `<single-animation>#`\n\n| Chrome  | Firefox | Safari  |  Edge  |   IE   |\n| :-----: | :-----: | :-----: | :----: | :----: |\n| **43**  | **16**  |  **9**  | **12** | **10** |\n| 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |',
                  type: ['string', 'number'],
                },
                background: {
                  description:
                    'The **`background`** shorthand CSS property sets all background style properties at once, such as color, image, origin and size, or repeat method.\n\n**Syntax**: `[ <bg-layer> , ]* <final-bg-layer>`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |',
                  type: ['string', 'number'],
                },
                border: {
                  description:
                    "The **`border`** CSS property sets an element's border. It's a shorthand for `border-width`, `border-style`, and `border-color`.\n\n**Syntax**: `<line-width> || <line-style> || <color>`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |",
                  type: ['string', 'number'],
                },
                borderBlock: {
                  description:
                    "The **`border-block`** CSS property is a shorthand property for setting the individual logical block border property values in a single place in the style sheet.\n\n**Syntax**: `<'border-top-width'> || <'border-top-style'> || <'color'>`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **69** | **66**  |   No   | **79** | No  |",
                  type: ['string', 'number'],
                },
                borderBlockEnd: {
                  description:
                    "The **`border-block-end`** CSS property is a shorthand property for setting the individual logical block-end border property values in a single place in the style sheet.\n\n**Syntax**: `<'border-top-width'> || <'border-top-style'> || <'color'>`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **69** | **41**  | **12.1** | **79** | No  |",
                  type: ['string', 'number'],
                },
                borderBlockStart: {
                  description:
                    "The **`border-block-start`** CSS property is a shorthand property for setting the individual logical block-start border property values in a single place in the style sheet.\n\n**Syntax**: `<'border-top-width'> || <'border-top-style'> || <'color'>`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **69** | **41**  | **12.1** | **79** | No  |",
                  type: ['string', 'number'],
                },
                borderBottom: {
                  description:
                    "The **`border-bottom`** CSS property is a shorthand that sets the values of `border-bottom-width`, `border-bottom-style` and `border-bottom-color`. These properties set an element's bottom border.\n\n**Syntax**: `<line-width> || <line-style> || <color>`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |",
                  type: ['string', 'number'],
                },
                borderColor: {
                  description:
                    "The **`border-color`** shorthand CSS property sets the color of all sides of an element's border.\n\n**Syntax**: `<color>{1,4}`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |",
                  type: 'string',
                },
                borderImage: {
                  description:
                    "The **`border-image`** CSS property draws an image in place of an element's `border-style`.\n\n**Syntax**: `<'border-image-source'> || <'border-image-slice'> [ / <'border-image-width'> | / <'border-image-width'>? / <'border-image-outset'> ]? || <'border-image-repeat'>`\n\n| Chrome  |  Firefox  | Safari  |  Edge  |   IE   |\n| :-----: | :-------: | :-----: | :----: | :----: |\n| **16**  |  **15**   |  **6**  | **12** | **11** |\n| 7 _-x-_ | 3.5 _-x-_ | 3 _-x-_ |        |        |",
                  type: ['string', 'number'],
                },
                borderInline: {
                  description:
                    "The **`border-inline`** CSS property is a shorthand property for setting the individual logical inline border property values in a single place in the style sheet.\n\n**Syntax**: `<'border-top-width'> || <'border-top-style'> || <'color'>`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **69** | **66**  |   No   | **79** | No  |",
                  type: ['string', 'number'],
                },
                borderInlineEnd: {
                  description:
                    "The **`border-inline-end`** CSS property is a shorthand property for setting the individual logical inline-end border property values in a single place in the style sheet.\n\n**Syntax**: `<'border-top-width'> || <'border-top-style'> || <'color'>`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **69** | **41**  | **12.1** | **79** | No  |",
                  type: ['string', 'number'],
                },
                borderInlineStart: {
                  description:
                    "The **`border-inline-start`** CSS property is a shorthand property for setting the individual logical inline-start border property values in a single place in the style sheet.\n\n**Syntax**: `<'border-top-width'> || <'border-top-style'> || <'color'>`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **69** | **41**  | **12.1** | **79** | No  |",
                  type: ['string', 'number'],
                },
                borderLeft: {
                  description:
                    "The **`border-left`** CSS property is a shorthand that sets the values of `border-left-width`, `border-left-style` and `border-left-color`. These properties set an element's left border.\n\n**Syntax**: `<line-width> || <line-style> || <color>`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |",
                  type: ['string', 'number'],
                },
                borderRadius: {
                  description:
                    "The **`border-radius`** CSS property rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners.\n\n**Syntax**: `<length-percentage>{1,4} [ / <length-percentage>{1,4} ]?`\n\n| Chrome  | Firefox | Safari  |  Edge  |  IE   |\n| :-----: | :-----: | :-----: | :----: | :---: |\n|  **4**  |  **4**  |  **5**  | **12** | **9** |\n| 1 _-x-_ |         | 3 _-x-_ |        |       |",
                  type: ['string', 'number'],
                },
                borderRight: {
                  description:
                    "The **`border-right`** CSS property is a shorthand that sets the values of `border-right-width`, `border-right-style` and `border-right-color`. These properties set an element's right border.\n\n**Syntax**: `<line-width> || <line-style> || <color>`\n\n| Chrome | Firefox | Safari |  Edge  |   IE    |\n| :----: | :-----: | :----: | :----: | :-----: |\n| **1**  |  **1**  | **1**  | **12** | **5.5** |",
                  type: ['string', 'number'],
                },
                borderStyle: {
                  description:
                    "The **`border-style`** CSS property is a shorthand property that sets the line style for all four sides of an element's border.\n\n**Syntax**: `<line-style>{1,4}`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |",
                  type: 'string',
                },
                borderTop: {
                  description:
                    "The **`border-top`** CSS property is a shorthand that sets the values of `border-top-width`, `border-top-style` and `border-top-color`. These properties set an element's top border.\n\n**Syntax**: `<line-width> || <line-style> || <color>`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |",
                  type: ['string', 'number'],
                },
                borderWidth: {
                  description:
                    "The **`border-width`** shorthand CSS property sets the widths of all four sides of an element's border.\n\n**Syntax**: `<line-width>{1,4}`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |",
                  type: ['string', 'number'],
                },
                columnRule: {
                  description:
                    "The **`column-rule`** CSS property sets the width, style, and color of the rule (line) drawn between columns in a multi-column layout.\n\n**Syntax**: `<'column-rule-width'> || <'column-rule-style'> || <'column-rule-color'>`\n\n| Chrome  | Firefox | Safari  |  Edge  |   IE   |\n| :-----: | :-----: | :-----: | :----: | :----: |\n| **50**  | **52**  |  **9**  | **12** | **10** |\n| 1 _-x-_ |         | 3 _-x-_ |        |        |",
                  type: ['string', 'number'],
                },
                columns: {
                  description:
                    "The **`columns`** CSS property sets the column width and column count of an element.\n\n**Syntax**: `<'column-width'> || <'column-count'>`\n\n| Chrome | Firefox | Safari  |  Edge  |   IE   |\n| :----: | :-----: | :-----: | :----: | :----: |\n| **50** | **52**  |  **9**  | **12** | **10** |\n|        |         | 3 _-x-_ |        |        |",
                  type: ['string', 'number'],
                },
                flex: {
                  description:
                    "The **`flex`** CSS property sets how a flex item will grow or shrink to fit the space available in its flex container. It is a shorthand for `flex-grow`, `flex-shrink`, and `flex-basis`.\n\n**Syntax**: `none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]`\n\n|  Chrome  | Firefox |  Safari   |  Edge  |    IE    |\n| :------: | :-----: | :-------: | :----: | :------: |\n|  **29**  | **20**  |   **9**   | **12** |  **11**  |\n| 21 _-x-_ |         | 6.1 _-x-_ |        | 10 _-x-_ |",
                  type: ['string', 'number'],
                },
                flexFlow: {
                  description:
                    "The **`flex-flow`** CSS property is a shorthand property for `flex-direction` and `flex-wrap` properties.\n\n**Syntax**: `<'flex-direction'> || <'flex-wrap'>`\n\n|  Chrome  | Firefox |  Safari   |  Edge  |   IE   |\n| :------: | :-----: | :-------: | :----: | :----: |\n|  **29**  | **28**  |   **9**   | **12** | **11** |\n| 21 _-x-_ |         | 6.1 _-x-_ |        |        |",
                  type: 'string',
                },
                font: {
                  description:
                    "The **`font`** CSS property is a shorthand for `font-style`, `font-variant`, `font-weight`, `font-size`, `line-height`, and `font-family`. Alternatively, it sets an element's font to a system font.\n\n**Syntax**: `[ [ <'font-style'> || <font-variant-css21> || <'font-weight'> || <'font-stretch'> ]? <'font-size'> [ / <'line-height'> ]? <'font-family'> ] | caption | icon | menu | message-box | small-caption | status-bar`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **3** |",
                  type: 'string',
                },
                gap: {
                  description:
                    "The **`gap`** CSS property sets the gaps (gutters) between rows and columns. It is a shorthand for `row-gap` and `column-gap`.\n\n**Syntax**: `<'row-gap'> <'column-gap'>?`\n\n---\n\n_Supported in Flex Layout_\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **84** | **63**  |   No   | **84** | No  |\n\n---\n\n_Supported in Grid Layout_\n\n|     Chrome      |     Firefox     |      Safari       |  Edge  | IE  |\n| :-------------: | :-------------: | :---------------: | :----: | :-: |\n|     **66**      |     **61**      |      **12**       | **16** | No  |\n| 57 _(grid-gap)_ | 52 _(grid-gap)_ | 10.1 _(grid-gap)_ |        |     |\n\n---\n\n_Supported in Multi-column Layout_\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **66** | **61**  |   No   | **16** | No  |\n\n---",
                  type: ['string', 'number'],
                },
                grid: {
                  description:
                    "The **`grid`** CSS property is a shorthand property that sets all of the explicit grid properties (`grid-template-rows`, `grid-template-columns`, and `grid-template-areas`), and all the implicit grid properties (`grid-auto-rows`, `grid-auto-columns`, and `grid-auto-flow`), in a single declaration.\n\n**Syntax**: `<'grid-template'> | <'grid-template-rows'> / [ auto-flow && dense? ] <'grid-auto-columns'>? | [ auto-flow && dense? ] <'grid-auto-rows'>? / <'grid-template-columns'>`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **57** | **52**  | **10.1** | **16** | No  |",
                  type: 'string',
                },
                gridArea: {
                  description:
                    'The **`grid-area`** CSS property is a shorthand property for `grid-row-start`, `grid-column-start`, `grid-row-end` and `grid-column-end`, specifying a grid item’s size and location within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the edges of its grid area.\n\n**Syntax**: `<grid-line> [ / <grid-line> ]{0,3}`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **57** | **52**  | **10.1** | **16** | No  |',
                  type: ['string', 'number'],
                },
                gridColumn: {
                  description:
                    "The **`grid-column`** CSS property is a shorthand property for `grid-column-start` and `grid-column-end` specifying a grid item's size and location within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area.\n\n**Syntax**: `<grid-line> [ / <grid-line> ]?`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **57** | **52**  | **10.1** | **16** | No  |",
                  type: ['string', 'number'],
                },
                gridRow: {
                  description:
                    'The **`grid-row`** CSS property is a shorthand property for `grid-row-start` and `grid-row-end` specifying a grid item’s size and location within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area.\n\n**Syntax**: `<grid-line> [ / <grid-line> ]?`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **57** | **52**  | **10.1** | **16** | No  |',
                  type: ['string', 'number'],
                },
                gridTemplate: {
                  description:
                    "The **`grid-template`** CSS property is a shorthand property for defining grid columns, rows, and areas.\n\n**Syntax**: `none | [ <'grid-template-rows'> / <'grid-template-columns'> ] | [ <line-names>? <string> <track-size>? <line-names>? ]+ [ / <explicit-track-list> ]?`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **57** | **52**  | **10.1** | **16** | No  |",
                  type: 'string',
                },
                lineClamp: {
                  description:
                    '**Syntax**: `none | <integer>`\n\n**Initial value**: `none`',
                  anyOf: [
                    {
                      enum: [
                        '-moz-initial',
                        'inherit',
                        'initial',
                        'none',
                        'revert',
                        'unset',
                      ],
                      type: 'string',
                    },
                    {
                      type: 'number',
                    },
                  ],
                },
                listStyle: {
                  description:
                    "The **`list-style`** CSS property is a shorthand to set list style properties `list-style-type`, `list-style-image`, and `list-style-position`.\n\n**Syntax**: `<'list-style-type'> || <'list-style-position'> || <'list-style-image'>`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |",
                  type: 'string',
                },
                margin: {
                  description:
                    'The **`margin`** CSS property sets the margin area on all four sides of an element. It is a shorthand for `margin-top`, `margin-right`, `margin-bottom`, and `margin-left`.\n\n**Syntax**: `[ <length> | <percentage> | auto ]{1,4}`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **3** |',
                  type: ['string', 'number'],
                },
                mask: {
                  description:
                    'The **`mask`** CSS property hides an element (partially or fully) by masking or clipping the image at specific points.\n\n**Syntax**: `<mask-layer>#`\n\n| Chrome | Firefox | Safari  |  Edge  | IE  |\n| :----: | :-----: | :-----: | :----: | :-: |\n| **1**  |  **2**  | **3.2** | **12** | No  |',
                  type: ['string', 'number'],
                },
                maskBorder: {
                  description:
                    "The **`mask-border`** CSS property lets you create a mask along the edge of an element's border.\n\n**Syntax**: `<'mask-border-source'> || <'mask-border-slice'> [ / <'mask-border-width'>? [ / <'mask-border-outset'> ]? ]? || <'mask-border-repeat'> || <'mask-border-mode'>`",
                  type: ['string', 'number'],
                },
                motion: {
                  description:
                    "The **`offset`** CSS property is a shorthand property for animating an element along a defined path.\n\n**Syntax**: `[ <'offset-position'>? [ <'offset-path'> [ <'offset-distance'> || <'offset-rotate'> ]? ]? ]! [ / <'offset-anchor'> ]?`\n\n|    Chrome     | Firefox | Safari |  Edge  | IE  |\n| :-----------: | :-----: | :----: | :----: | :-: |\n|    **55**     | **72**  |   No   | **79** | No  |\n| 46 _(motion)_ |         |        |        |     |",
                  type: ['string', 'number'],
                },
                offset: {
                  description:
                    "The **`offset`** CSS property is a shorthand property for animating an element along a defined path.\n\n**Syntax**: `[ <'offset-position'>? [ <'offset-path'> [ <'offset-distance'> || <'offset-rotate'> ]? ]? ]! [ / <'offset-anchor'> ]?`\n\n|    Chrome     | Firefox | Safari |  Edge  | IE  |\n| :-----------: | :-----: | :----: | :----: | :-: |\n|    **55**     | **72**  |   No   | **79** | No  |\n| 46 _(motion)_ |         |        |        |     |",
                  type: ['string', 'number'],
                },
                outline: {
                  description:
                    "The **`outline`** CSS property is a shorthand to set various outline properties in a single declaration: `outline-style`, `outline-width`, and `outline-color`.\n\n**Syntax**: `[ <'outline-color'> || <'outline-style'> || <'outline-width'> ]`\n\n| Chrome | Firefox | Safari  |  Edge  |  IE   |\n| :----: | :-----: | :-----: | :----: | :---: |\n| **1**  | **1.5** | **1.2** | **12** | **8** |",
                  type: ['string', 'number'],
                },
                overflow: {
                  description:
                    "The **`overflow`** CSS property sets what to do when an element's content is too big to fit in its block formatting context. It is a shorthand for `overflow-x` and `overflow-y`.\n\n**Syntax**: `[ visible | hidden | clip | scroll | auto ]{1,2}`\n\n**Initial value**: `visible`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |",
                  type: 'string',
                },
                padding: {
                  description:
                    'The **`padding`** CSS property sets the padding area on all four sides of an element. It is a shorthand for `padding-top`, `padding-right`, `padding-bottom`, and `padding-left`.\n\n**Syntax**: `[ <length> | <percentage> ]{1,4}`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |',
                  type: ['string', 'number'],
                },
                placeItems: {
                  description:
                    "The CSS **`place-items`** shorthand property sets the `align-items` and `justify-items` properties, respectively. If the second value is not set, the first value is also used for it.\n\n**Syntax**: `<'align-items'> <'justify-items'>?`\n\n---\n\n_Supported in Flex Layout_\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **59** | **45**  | **11** | **79** | No  |\n\n---\n\n_Supported in Grid Layout_\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **59** | **45**  | **11** | **79** | No  |\n\n---",
                  type: 'string',
                },
                placeSelf: {
                  description:
                    "The **`place-self`** CSS property is a shorthand property sets both the `align-self` and `justify-self` properties. The first value is the `align-self` property value, the second the `justify-self` one. If the second value is not present, the first value is also used for it.\n\n**Syntax**: `<'align-self'> <'justify-self'>?`\n\n---\n\n_Supported in Flex Layout_\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **59** | **45**  | **11** | **79** | No  |\n\n---\n\n_Supported in Grid Layout_\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **59** | **45**  | **11** | **79** | No  |\n\n---",
                  type: 'string',
                },
                textDecoration: {
                  description:
                    "The **`text-decoration`** CSS property sets the appearance of decorative lines on text. It is a shorthand for `text-decoration-line`, `text-decoration-color`, and `text-decoration-style`.\n\n**Syntax**: `<'text-decoration-line'> || <'text-decoration-style'> || <'text-decoration-color'> || <'text-decoration-thickness'>`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **3** |",
                  type: ['string', 'number'],
                },
                textEmphasis: {
                  description:
                    "The **`text-emphasis`** CSS property applies emphasis marks to text (except spaces and control characters). It is a shorthand for `text-emphasis-style` and `text-emphasis-color`.\n\n**Syntax**: `<'text-emphasis-style'> || <'text-emphasis-color'>`\n\n|    Chrome    | Firefox | Safari  |     Edge     | IE  |\n| :----------: | :-----: | :-----: | :----------: | :-: |\n| **25** _-x-_ | **46**  | **6.1** | **79** _-x-_ | No  |",
                  type: 'string',
                },
                transition: {
                  description:
                    'The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.\n\n**Syntax**: `<single-transition>#`\n\n| Chrome  | Firefox |  Safari   |  Edge  |   IE   |\n| :-----: | :-----: | :-------: | :----: | :----: |\n| **26**  | **16**  |   **9**   | **12** | **10** |\n| 1 _-x-_ | 4 _-x-_ | 3.1 _-x-_ |        |        |',
                  type: 'string',
                },
                MozAnimationDelay: {
                  description:
                    'The **`animation-delay`** CSS property sets when an animation starts. The animation can start later, immediately from its beginning, or immediately and partway through the animation.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`',
                  type: 'string',
                },
                MozAnimationDirection: {
                  description:
                    'The **`animation-direction`** CSS property sets whether an animation should play forwards, backwards, or alternating back and forth.\n\n**Syntax**: `<single-animation-direction>#`\n\n**Initial value**: `normal`',
                  type: 'string',
                },
                MozAnimationDuration: {
                  description:
                    'The **`animation-duration`** CSS property sets the length of time that an animation takes to complete one cycle.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`',
                  type: 'string',
                },
                MozAnimationFillMode: {
                  description:
                    'The **`animation-fill-mode`** CSS property sets how a CSS animation applies styles to its target before and after its execution.\n\n**Syntax**: `<single-animation-fill-mode>#`\n\n**Initial value**: `none`',
                  type: 'string',
                },
                MozAnimationIterationCount: {
                  description:
                    'The **`animation-iteration-count`** CSS property sets the number of times an animation cycle should be played before stopping.\n\n**Syntax**: `<single-animation-iteration-count>#`\n\n**Initial value**: `1`',
                  type: ['string', 'number'],
                },
                MozAnimationName: {
                  description:
                    'The **`animation-name`** CSS property sets one or more animations to apply to an element. Each name is an `@keyframes` at-rule that sets the property values for the animation sequence.\n\n**Syntax**: `[ none | <keyframes-name> ]#`\n\n**Initial value**: `none`',
                  type: 'string',
                },
                MozAnimationPlayState: {
                  description:
                    'The **`animation-play-state`** CSS property sets whether an animation is running or paused.\n\n**Syntax**: `<single-animation-play-state>#`\n\n**Initial value**: `running`',
                  type: 'string',
                },
                MozAnimationTimingFunction: {
                  description:
                    'The `**animation-timing-function**` CSS property sets how an animation progresses through the duration of each cycle.\n\n**Syntax**: `<timing-function>#`\n\n**Initial value**: `ease`',
                  type: 'string',
                },
                MozAppearance: {
                  description:
                    "The **`-moz-appearance`** CSS property is used in Gecko (Firefox) to display an element using platform-native styling based on the operating system's theme.\n\n**Syntax**: `none | button | button-arrow-down | button-arrow-next | button-arrow-previous | button-arrow-up | button-bevel | button-focus | caret | checkbox | checkbox-container | checkbox-label | checkmenuitem | dualbutton | groupbox | listbox | listitem | menuarrow | menubar | menucheckbox | menuimage | menuitem | menuitemtext | menulist | menulist-button | menulist-text | menulist-textfield | menupopup | menuradio | menuseparator | meterbar | meterchunk | progressbar | progressbar-vertical | progresschunk | progresschunk-vertical | radio | radio-container | radio-label | radiomenuitem | range | range-thumb | resizer | resizerpanel | scale-horizontal | scalethumbend | scalethumb-horizontal | scalethumbstart | scalethumbtick | scalethumb-vertical | scale-vertical | scrollbarbutton-down | scrollbarbutton-left | scrollbarbutton-right | scrollbarbutton-up | scrollbarthumb-horizontal | scrollbarthumb-vertical | scrollbartrack-horizontal | scrollbartrack-vertical | searchfield | separator | sheet | spinner | spinner-downbutton | spinner-textfield | spinner-upbutton | splitter | statusbar | statusbarpanel | tab | tabpanel | tabpanels | tab-scroll-arrow-back | tab-scroll-arrow-forward | textfield | textfield-multiline | toolbar | toolbarbutton | toolbarbutton-dropdown | toolbargripper | toolbox | tooltip | treeheader | treeheadercell | treeheadersortarrow | treeitem | treeline | treetwisty | treetwistyopen | treeview | -moz-mac-unified-toolbar | -moz-win-borderless-glass | -moz-win-browsertabbar-toolbox | -moz-win-communicationstext | -moz-win-communications-toolbox | -moz-win-exclude-glass | -moz-win-glass | -moz-win-mediatext | -moz-win-media-toolbox | -moz-window-button-box | -moz-window-button-box-maximized | -moz-window-button-close | -moz-window-button-maximize | -moz-window-button-minimize | -moz-window-button-restore | -moz-window-frame-bottom | -moz-window-frame-left | -moz-window-frame-right | -moz-window-titlebar | -moz-window-titlebar-maximized`\n\n**Initial value**: `none` (but this value is overridden in the user agent CSS)",
                  enum: [
                    '-moz-initial',
                    '-moz-mac-unified-toolbar',
                    '-moz-win-borderless-glass',
                    '-moz-win-browsertabbar-toolbox',
                    '-moz-win-communications-toolbox',
                    '-moz-win-communicationstext',
                    '-moz-win-exclude-glass',
                    '-moz-win-glass',
                    '-moz-win-media-toolbox',
                    '-moz-win-mediatext',
                    '-moz-window-button-box',
                    '-moz-window-button-box-maximized',
                    '-moz-window-button-close',
                    '-moz-window-button-maximize',
                    '-moz-window-button-minimize',
                    '-moz-window-button-restore',
                    '-moz-window-frame-bottom',
                    '-moz-window-frame-left',
                    '-moz-window-frame-right',
                    '-moz-window-titlebar',
                    '-moz-window-titlebar-maximized',
                    'button',
                    'button-arrow-down',
                    'button-arrow-next',
                    'button-arrow-previous',
                    'button-arrow-up',
                    'button-bevel',
                    'button-focus',
                    'caret',
                    'checkbox',
                    'checkbox-container',
                    'checkbox-label',
                    'checkmenuitem',
                    'dualbutton',
                    'groupbox',
                    'inherit',
                    'initial',
                    'listbox',
                    'listitem',
                    'menuarrow',
                    'menubar',
                    'menucheckbox',
                    'menuimage',
                    'menuitem',
                    'menuitemtext',
                    'menulist',
                    'menulist-button',
                    'menulist-text',
                    'menulist-textfield',
                    'menupopup',
                    'menuradio',
                    'menuseparator',
                    'meterbar',
                    'meterchunk',
                    'none',
                    'progressbar',
                    'progressbar-vertical',
                    'progresschunk',
                    'progresschunk-vertical',
                    'radio',
                    'radio-container',
                    'radio-label',
                    'radiomenuitem',
                    'range',
                    'range-thumb',
                    'resizer',
                    'resizerpanel',
                    'revert',
                    'scale-horizontal',
                    'scale-vertical',
                    'scalethumb-horizontal',
                    'scalethumb-vertical',
                    'scalethumbend',
                    'scalethumbstart',
                    'scalethumbtick',
                    'scrollbarbutton-down',
                    'scrollbarbutton-left',
                    'scrollbarbutton-right',
                    'scrollbarbutton-up',
                    'scrollbarthumb-horizontal',
                    'scrollbarthumb-vertical',
                    'scrollbartrack-horizontal',
                    'scrollbartrack-vertical',
                    'searchfield',
                    'separator',
                    'sheet',
                    'spinner',
                    'spinner-downbutton',
                    'spinner-textfield',
                    'spinner-upbutton',
                    'splitter',
                    'statusbar',
                    'statusbarpanel',
                    'tab',
                    'tab-scroll-arrow-back',
                    'tab-scroll-arrow-forward',
                    'tabpanel',
                    'tabpanels',
                    'textfield',
                    'textfield-multiline',
                    'toolbar',
                    'toolbarbutton',
                    'toolbarbutton-dropdown',
                    'toolbargripper',
                    'toolbox',
                    'tooltip',
                    'treeheader',
                    'treeheadercell',
                    'treeheadersortarrow',
                    'treeitem',
                    'treeline',
                    'treetwisty',
                    'treetwistyopen',
                    'treeview',
                    'unset',
                  ],
                  type: 'string',
                },
                MozBackfaceVisibility: {
                  description:
                    'The **`backface-visibility`** CSS property sets whether the back face of an element is visible when turned towards the user.\n\n**Syntax**: `visible | hidden`\n\n**Initial value**: `visible`',
                  enum: [
                    '-moz-initial',
                    'hidden',
                    'inherit',
                    'initial',
                    'revert',
                    'unset',
                    'visible',
                  ],
                  type: 'string',
                },
                MozBorderBottomColors: {
                  description:
                    'In Mozilla applications like Firefox, the **`-moz-border-bottom-colors`** CSS property sets a list of colors for the bottom border.\n\n**Syntax**: `<color>+ | none`\n\n**Initial value**: `none`',
                  type: 'string',
                },
                MozBorderEndColor: {
                  description:
                    "The **`border-inline-end-color`** CSS property defines the color of the logical inline-end border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-color'>`\n\n**Initial value**: `currentcolor`",
                  type: 'string',
                },
                MozBorderEndStyle: {
                  description:
                    "The **`border-inline-end-style`** CSS property defines the style of the logical inline end border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-style'>`\n\n**Initial value**: `none`",
                  enum: [
                    '-moz-initial',
                    'dashed',
                    'dotted',
                    'double',
                    'groove',
                    'hidden',
                    'inherit',
                    'initial',
                    'inset',
                    'none',
                    'outset',
                    'revert',
                    'ridge',
                    'solid',
                    'unset',
                  ],
                  type: 'string',
                },
                MozBorderEndWidth: {
                  description:
                    "The **`border-inline-end-width`** CSS property defines the width of the logical inline-end border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-width'>`\n\n**Initial value**: `medium`",
                  type: ['string', 'number'],
                },
                MozBorderLeftColors: {
                  description:
                    'In Mozilla applications like Firefox, the **`-moz-border-left-colors`** CSS property sets a list of colors for the left border.\n\n**Syntax**: `<color>+ | none`\n\n**Initial value**: `none`',
                  type: 'string',
                },
                MozBorderRightColors: {
                  description:
                    'In Mozilla applications like Firefox, the **`-moz-border-right-colors`** CSS property sets a list of colors for the right border.\n\n**Syntax**: `<color>+ | none`\n\n**Initial value**: `none`',
                  type: 'string',
                },
                MozBorderStartColor: {
                  description:
                    "The **`border-inline-start-color`** CSS property defines the color of the logical inline start border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-color'>`\n\n**Initial value**: `currentcolor`",
                  type: 'string',
                },
                MozBorderStartStyle: {
                  description:
                    "The **`border-inline-start-style`** CSS property defines the style of the logical inline start border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-style'>`\n\n**Initial value**: `none`",
                  enum: [
                    '-moz-initial',
                    'dashed',
                    'dotted',
                    'double',
                    'groove',
                    'hidden',
                    'inherit',
                    'initial',
                    'inset',
                    'none',
                    'outset',
                    'revert',
                    'ridge',
                    'solid',
                    'unset',
                  ],
                  type: 'string',
                },
                MozBorderTopColors: {
                  description:
                    'In Mozilla applications like Firefox, the **`-moz-border-top-colors`** CSS property sets a list of colors for the top border.\n\n**Syntax**: `<color>+ | none`\n\n**Initial value**: `none`',
                  type: 'string',
                },
                MozBoxSizing: {
                  description:
                    'The **`box-sizing`** CSS property defines how the user agent should calculate the total width and height of an element.\n\n**Syntax**: `content-box | border-box`\n\n**Initial value**: `content-box`',
                  enum: [
                    '-moz-initial',
                    'border-box',
                    'content-box',
                    'inherit',
                    'initial',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                MozColumnCount: {
                  description:
                    "The **`column-count`** CSS property breaks an element's content into the specified number of columns.\n\n**Syntax**: `<integer> | auto`\n\n**Initial value**: `auto`",
                  anyOf: [
                    {
                      enum: [
                        '-moz-initial',
                        'auto',
                        'inherit',
                        'initial',
                        'revert',
                        'unset',
                      ],
                      type: 'string',
                    },
                    {
                      type: 'number',
                    },
                  ],
                },
                MozColumnFill: {
                  description:
                    "The **`column-fill`** CSS property controls how an element's contents are balanced when broken into columns.\n\n**Syntax**: `auto | balance | balance-all`\n\n**Initial value**: `balance`",
                  enum: [
                    '-moz-initial',
                    'auto',
                    'balance',
                    'inherit',
                    'initial',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                MozColumnGap: {
                  description:
                    "The **`column-gap`** CSS property sets the size of the gap (gutter) between an element's columns.\n\n**Syntax**: `normal | <length-percentage>`\n\n**Initial value**: `normal`",
                  type: ['string', 'number'],
                },
                MozColumnRuleColor: {
                  description:
                    'The **`column-rule-color`** CSS property sets the color of the rule (line) drawn between columns in a multi-column layout.\n\n**Syntax**: `<color>`\n\n**Initial value**: `currentcolor`',
                  type: 'string',
                },
                MozColumnRuleStyle: {
                  description:
                    "The **`column-rule-style`** CSS property sets the style of the line drawn between columns in a multi-column layout.\n\n**Syntax**: `<'border-style'>`\n\n**Initial value**: `none`",
                  type: 'string',
                },
                MozColumnRuleWidth: {
                  description:
                    "The **`column-rule-width`** CSS property sets the width of the rule (line) drawn between columns in a multi-column layout.\n\n**Syntax**: `<'border-width'>`\n\n**Initial value**: `medium`",
                  type: ['string', 'number'],
                },
                MozColumnWidth: {
                  description:
                    "The **`column-width`** CSS property specifies the ideal column width in a multi-column layout. The container will have as many columns as can fit without any of them having a width less than the `column-width` value. If the width of the container is narrower than the specified value, the single column's width will be smaller than the declared column width.\n\n**Syntax**: `<length> | auto`\n\n**Initial value**: `auto`",
                  type: ['string', 'number'],
                },
                MozContextProperties: {
                  description:
                    'If you reference an SVG image in a webpage (such as with the `<img>` element or as a background image), the SVG image can coordinate with the embedding element (its context) to have the image adopt property values set on the embedding element. To do this the embedding element needs to list the properties that are to be made available to the image by listing them as values of the **`-moz-context-properties`** property, and the image needs to opt in to using those properties by using values such as the `context-fill` value.\n\n**Syntax**: `none | [ fill | fill-opacity | stroke | stroke-opacity ]#`\n\n**Initial value**: `none`',
                  type: 'string',
                },
                MozFontFeatureSettings: {
                  description:
                    'The **`font-feature-settings`** CSS property controls advanced typographic features in OpenType fonts.\n\n**Syntax**: `normal | <feature-tag-value>#`\n\n**Initial value**: `normal`',
                  type: 'string',
                },
                MozFontLanguageOverride: {
                  description:
                    'The **`font-language-override`** CSS property controls the use of language-specific glyphs in a typeface.\n\n**Syntax**: `normal | <string>`\n\n**Initial value**: `normal`',
                  type: 'string',
                },
                MozHyphens: {
                  description:
                    'The **`hyphens`** CSS property specifies how words should be hyphenated when text wraps across multiple lines. You can prevent hyphenation entirely, use hyphenation in manually-specified points within the text, or let the browser automatically insert hyphens where appropriate.\n\n**Syntax**: `none | manual | auto`\n\n**Initial value**: `manual`',
                  enum: [
                    '-moz-initial',
                    'auto',
                    'inherit',
                    'initial',
                    'manual',
                    'none',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                MozImageRegion: {
                  description:
                    'For certain XUL elements and pseudo-elements that use an image from the `list-style-image` property, this property specifies a region of the image that is used in place of the whole image. This allows elements to use different pieces of the same image to improve performance.\n\n**Syntax**: `<shape> | auto`\n\n**Initial value**: `auto`',
                  type: 'string',
                },
                MozMarginEnd: {
                  description:
                    "The **`margin-inline-end`** CSS property defines the logical inline end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. In other words, it corresponds to the `margin-top`, `margin-right`, `margin-bottom` or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'margin-left'>`\n\n**Initial value**: `0`",
                  type: ['string', 'number'],
                },
                MozMarginStart: {
                  description:
                    "The **`margin-inline-start`** CSS property defines the logical inline start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. It corresponds to the `margin-top`, `margin-right`, `margin-bottom`, or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'margin-left'>`\n\n**Initial value**: `0`",
                  type: ['string', 'number'],
                },
                MozOrient: {
                  description:
                    "The **`-moz-orient`** CSS property specifies the orientation of the element to which it's applied.\n\n**Syntax**: `inline | block | horizontal | vertical`\n\n**Initial value**: `inline`",
                  enum: [
                    '-moz-initial',
                    'block',
                    'horizontal',
                    'inherit',
                    'initial',
                    'inline',
                    'revert',
                    'unset',
                    'vertical',
                  ],
                  type: 'string',
                },
                MozOsxFontSmoothing: {
                  description:
                    'The **`font-smooth`** CSS property controls the application of anti-aliasing when fonts are rendered.\n\n**Syntax**: `auto | never | always | <absolute-size> | <length>`\n\n**Initial value**: `auto`',
                  type: ['string', 'number'],
                },
                MozPaddingEnd: {
                  description:
                    "The **`padding-inline-end`** CSS property defines the logical inline end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation. It corresponds to the `padding-top`, `padding-right`, `padding-bottom`, or `padding-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'padding-left'>`\n\n**Initial value**: `0`",
                  type: ['string', 'number'],
                },
                MozPaddingStart: {
                  description:
                    "The **`padding-inline-start`** CSS property defines the logical inline start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation. It corresponds to the `padding-top`, `padding-right`, `padding-bottom`, or `padding-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'padding-left'>`\n\n**Initial value**: `0`",
                  type: ['string', 'number'],
                },
                MozPerspective: {
                  description:
                    'The **`perspective`** CSS property determines the distance between the z=0 plane and the user in order to give a 3D-positioned element some perspective. Each 3D element with z>0 becomes larger; each 3D-element with z<0 becomes smaller. The strength of the effect is determined by the value of this property.\n\n**Syntax**: `none | <length>`\n\n**Initial value**: `none`',
                  type: ['string', 'number'],
                },
                MozPerspectiveOrigin: {
                  description:
                    'The **`perspective-origin`** CSS property determines the position at which the viewer is looking. It is used as the _vanishing point_ by the `perspective` property.\n\n**Syntax**: `<position>`\n\n**Initial value**: `50% 50%`',
                  type: ['string', 'number'],
                },
                MozStackSizing: {
                  description:
                    '**`-moz-stack-sizing`** is an extended CSS property. Normally, a `stack` will change its size so that all of its child elements are completely visible. For example, moving a child of the stack far to the right will widen the stack so the child remains visible.\n\n**Syntax**: `ignore | stretch-to-fit`\n\n**Initial value**: `stretch-to-fit`',
                  enum: [
                    '-moz-initial',
                    'ignore',
                    'inherit',
                    'initial',
                    'revert',
                    'stretch-to-fit',
                    'unset',
                  ],
                  type: 'string',
                },
                MozTabSize: {
                  description:
                    'The **`tab-size`** CSS property is used to customize the width of a tab (`U+0009`) character.\n\n**Syntax**: `<integer> | <length>`\n\n**Initial value**: `8`',
                  type: ['string', 'number'],
                },
                MozTextBlink: {
                  description:
                    'The **`-moz-text-blink`** non-standard Mozilla CSS extension specifies the blink mode.\n\n**Syntax**: `none | blink`\n\n**Initial value**: `none`',
                  enum: [
                    '-moz-initial',
                    'blink',
                    'inherit',
                    'initial',
                    'none',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                MozTextSizeAdjust: {
                  description:
                    'The **`text-size-adjust`** CSS property controls the text inflation algorithm used on some smartphones and tablets. Other browsers will ignore this property.\n\n**Syntax**: `none | auto | <percentage>`\n\n**Initial value**: `auto` for smartphone browsers supporting inflation, `none` in other cases (and then not modifiable).',
                  type: 'string',
                },
                MozTransformOrigin: {
                  description:
                    "The **`transform-origin`** CSS property sets the origin for an element's transformations.\n\n**Syntax**: `[ <length-percentage> | left | center | right | top | bottom ] | [ [ <length-percentage> | left | center | right ] && [ <length-percentage> | top | center | bottom ] ] <length>?`\n\n**Initial value**: `50% 50% 0`",
                  type: ['string', 'number'],
                },
                MozTransformStyle: {
                  description:
                    'The **`transform-style`** CSS property sets whether children of an element are positioned in the 3D space or are flattened in the plane of the element.\n\n**Syntax**: `flat | preserve-3d`\n\n**Initial value**: `flat`',
                  enum: [
                    '-moz-initial',
                    'flat',
                    'inherit',
                    'initial',
                    'preserve-3d',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                MozTransitionDelay: {
                  description:
                    "The **`transition-delay`** CSS property specifies the duration to wait before starting a property's transition effect when its value changes.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`",
                  type: 'string',
                },
                MozTransitionDuration: {
                  description:
                    'The **`transition-duration`** CSS property sets the length of time a transition animation should take to complete. By default, the value is `0s`, meaning that no animation will occur.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`',
                  type: 'string',
                },
                MozTransitionProperty: {
                  description:
                    'The **`transition-property`** CSS property sets the CSS properties to which a transition effect should be applied.\n\n**Syntax**: `none | <single-transition-property>#`\n\n**Initial value**: all',
                  type: 'string',
                },
                MozTransitionTimingFunction: {
                  description:
                    'The **`transition-timing-function`** CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect.\n\n**Syntax**: `<timing-function>#`\n\n**Initial value**: `ease`',
                  type: 'string',
                },
                MozUserFocus: {
                  description:
                    'The **`-moz-user-focus`** CSS property is used to indicate whether an element can have the focus.\n\n**Syntax**: `ignore | normal | select-after | select-before | select-menu | select-same | select-all | none`\n\n**Initial value**: `none`',
                  enum: [
                    '-moz-initial',
                    'ignore',
                    'inherit',
                    'initial',
                    'none',
                    'normal',
                    'revert',
                    'select-after',
                    'select-all',
                    'select-before',
                    'select-menu',
                    'select-same',
                    'unset',
                  ],
                  type: 'string',
                },
                MozUserModify: {
                  description:
                    'The **`user-modify`** property has no effect in Firefox. It was originally planned to determine whether or not the content of an element can be edited by a user.\n\n**Syntax**: `read-only | read-write | write-only`\n\n**Initial value**: `read-only`',
                  enum: [
                    '-moz-initial',
                    'inherit',
                    'initial',
                    'read-only',
                    'read-write',
                    'revert',
                    'unset',
                    'write-only',
                  ],
                  type: 'string',
                },
                MozUserSelect: {
                  description:
                    "The `**user-select**` CSS property controls whether the user can select text. This doesn't have any effect on content loaded as chrome, except in textboxes.\n\n**Syntax**: `auto | text | none | contain | all`\n\n**Initial value**: `auto`",
                  enum: [
                    '-moz-initial',
                    '-moz-none',
                    'all',
                    'auto',
                    'contain',
                    'element',
                    'inherit',
                    'initial',
                    'none',
                    'revert',
                    'text',
                    'unset',
                  ],
                  type: 'string',
                },
                MozWindowDragging: {
                  description:
                    'The **`-moz-window-dragging`** CSS property specifies whether a window is draggable or not. It only works in Chrome code, and only on Mac OS X.\n\n**Syntax**: `drag | no-drag`\n\n**Initial value**: `drag`',
                  enum: [
                    '-moz-initial',
                    'drag',
                    'inherit',
                    'initial',
                    'no-drag',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                MozWindowShadow: {
                  description:
                    'The **`-moz-window-shadow`** CSS property specifies whether a window will have a shadow. It only works on Mac OS X.\n\n**Syntax**: `default | menu | tooltip | sheet | none`\n\n**Initial value**: `default`',
                  enum: [
                    '-moz-initial',
                    'default',
                    'inherit',
                    'initial',
                    'menu',
                    'none',
                    'revert',
                    'sheet',
                    'tooltip',
                    'unset',
                  ],
                  type: 'string',
                },
                msAccelerator: {
                  description:
                    'The **`-ms-accelerator`** CSS property is a Microsoft extension that sets or retrieves a string indicating whether the object represents a keyboard shortcut.\n\n**Syntax**: `false | true`\n\n**Initial value**: `false`',
                  enum: [
                    '-moz-initial',
                    'false',
                    'inherit',
                    'initial',
                    'revert',
                    'true',
                    'unset',
                  ],
                  type: 'string',
                },
                msAlignSelf: {
                  description:
                    "The **`align-self`** CSS property aligns flex items of the current flex line overriding the `align-items` value. If any of the item's cross-axis margin is set to `auto`, then `align-self` is ignored. In Grid layout `align-self` aligns the item inside the grid area.\n\n**Syntax**: `auto | normal | stretch | <baseline-position> | <overflow-position>? <self-position>`\n\n**Initial value**: `auto`",
                  type: 'string',
                },
                msBlockProgression: {
                  description:
                    'The **`-ms-block-progression`** CSS property is a Microsoft extension that specifies the block progression and layout orientation.\n\n**Syntax**: `tb | rl | bt | lr`\n\n**Initial value**: `tb`',
                  enum: [
                    '-moz-initial',
                    'bt',
                    'inherit',
                    'initial',
                    'lr',
                    'revert',
                    'rl',
                    'tb',
                    'unset',
                  ],
                  type: 'string',
                },
                msContentZoomChaining: {
                  description:
                    'The **`-ms-content-zoom-chaining`** CSS property is a Microsoft extension specifying the zoom behavior that occurs when a user hits the zoom limit during page manipulation.\n\n**Syntax**: `none | chained`\n\n**Initial value**: `none`',
                  enum: [
                    '-moz-initial',
                    'chained',
                    'inherit',
                    'initial',
                    'none',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                msContentZoomLimitMax: {
                  description:
                    "The **`-ms-content-zoom-limit-max`** CSS property is a Microsoft extension that specifies the selected elements' maximum zoom factor.\n\n**Syntax**: `<percentage>`\n\n**Initial value**: `400%`",
                  type: 'string',
                },
                msContentZoomLimitMin: {
                  description:
                    'The **`-ms-content-zoom-limit-min`** CSS property is a Microsoft extension that specifies the minimum zoom factor.\n\n**Syntax**: `<percentage>`\n\n**Initial value**: `100%`',
                  type: 'string',
                },
                msContentZoomSnapPoints: {
                  description:
                    'The **`-ms-content-zoom-snap-points`** CSS property is a Microsoft extension that specifies where zoom snap-points are located.\n\n**Syntax**: `snapInterval( <percentage>, <percentage> ) | snapList( <percentage># )`\n\n**Initial value**: `snapInterval(0%, 100%)`',
                  type: 'string',
                },
                msContentZoomSnapType: {
                  description:
                    'The **`-ms-content-zoom-snap-type`** CSS property is a Microsoft extension that specifies how zooming is affected by defined snap-points.\n\n**Syntax**: `none | proximity | mandatory`\n\n**Initial value**: `none`',
                  enum: [
                    '-moz-initial',
                    'inherit',
                    'initial',
                    'mandatory',
                    'none',
                    'proximity',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                msContentZooming: {
                  description:
                    'The **`-ms-content-zooming`** CSS property is a Microsoft extension that specifies whether zooming is enabled.\n\n**Syntax**: `none | zoom`\n\n**Initial value**: zoom for the top level element, none for all other elements',
                  enum: [
                    '-moz-initial',
                    'inherit',
                    'initial',
                    'none',
                    'revert',
                    'unset',
                    'zoom',
                  ],
                  type: 'string',
                },
                msFilter: {
                  description:
                    'The `-ms-filter` CSS property is a Microsoft extension that sets or retrieves the filter or collection of filters applied to an object.\n\n**Syntax**: `<string>`\n\n**Initial value**: "" (the empty string)',
                  type: 'string',
                },
                msFlexDirection: {
                  description:
                    'The **`flex-direction`** CSS property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).\n\n**Syntax**: `row | row-reverse | column | column-reverse`\n\n**Initial value**: `row`',
                  enum: [
                    '-moz-initial',
                    'column',
                    'column-reverse',
                    'inherit',
                    'initial',
                    'revert',
                    'row',
                    'row-reverse',
                    'unset',
                  ],
                  type: 'string',
                },
                msFlexPositive: {
                  description:
                    'The **`flex-grow`** CSS property sets how much of the available space in the flex container should be assigned to that item (the flex grow factor). If all sibling items have the same flex grow factor, then all items will receive the same share of available space, otherwise it is distributed according to the ratio defined by the different flex grow factors.\n\n**Syntax**: `<number>`\n\n**Initial value**: `0`',
                  anyOf: [
                    {
                      enum: [
                        '-moz-initial',
                        'inherit',
                        'initial',
                        'revert',
                        'unset',
                      ],
                      type: 'string',
                    },
                    {
                      type: 'number',
                    },
                  ],
                },
                msFlowFrom: {
                  description:
                    'The **`-ms-flow-from`** CSS property is a Microsoft extension that gets or sets a value identifying a region container in the document that accepts the content flow from the data source.\n\n**Syntax**: `[ none | <custom-ident> ]#`\n\n**Initial value**: `none`',
                  type: 'string',
                },
                msFlowInto: {
                  description:
                    "The **`-ms-flow-into`** CSS property is a Microsoft extension that gets or sets a value identifying an iframe container in the document that serves as the region's data source.\n\n**Syntax**: `[ none | <custom-ident> ]#`\n\n**Initial value**: `none`",
                  type: 'string',
                },
                msGridColumns: {
                  description:
                    'The **`grid-template-columns`** CSS property defines the line names and track sizing functions of the grid columns.\n\n**Syntax**: `none | <track-list> | <auto-track-list>`\n\n**Initial value**: `none`',
                  type: ['string', 'number'],
                },
                msGridRows: {
                  description:
                    'The **`grid-template-rows`** CSS property defines the line names and track sizing functions of the grid rows.\n\n**Syntax**: `none | <track-list> | <auto-track-list>`\n\n**Initial value**: `none`',
                  type: ['string', 'number'],
                },
                msHighContrastAdjust: {
                  description:
                    'The **`-ms-high-contrast-adjust`** CSS property is a Microsoft extension that gets or sets a value indicating whether to override any CSS properties that would have been set in high contrast mode.\n\n**Syntax**: `auto | none`\n\n**Initial value**: `auto`',
                  enum: [
                    '-moz-initial',
                    'auto',
                    'inherit',
                    'initial',
                    'none',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                msHyphenateLimitChars: {
                  description:
                    'The **`-ms-hyphenate-limit-chars`** CSS property is a Microsoft extension that specifies one to three values indicating the minimum number of characters in a hyphenated word. If the word does not meet the required minimum number of characters in the word, before the hyphen, or after the hyphen, then the word is not hyphenated.\n\n**Syntax**: `auto | <integer>{1,3}`\n\n**Initial value**: `auto`',
                  type: ['string', 'number'],
                },
                msHyphenateLimitLines: {
                  description:
                    'The **`-ms-hyphenate-limit-lines`** CSS property is a Microsoft extension specifying the maximum number of consecutive lines in an element that may be ended with a hyphenated word.\n\n**Syntax**: `no-limit | <integer>`\n\n**Initial value**: `no-limit`',
                  anyOf: [
                    {
                      enum: [
                        '-moz-initial',
                        'inherit',
                        'initial',
                        'no-limit',
                        'revert',
                        'unset',
                      ],
                      type: 'string',
                    },
                    {
                      type: 'number',
                    },
                  ],
                },
                msHyphenateLimitZone: {
                  description:
                    'The `**-ms-hyphenate-limit-zone**` CSS property is a Microsoft extension specifying the width of the hyphenation zone.\n\n**Syntax**: `<percentage> | <length>`\n\n**Initial value**: `0`',
                  type: ['string', 'number'],
                },
                msHyphens: {
                  description:
                    'The **`hyphens`** CSS property specifies how words should be hyphenated when text wraps across multiple lines. You can prevent hyphenation entirely, use hyphenation in manually-specified points within the text, or let the browser automatically insert hyphens where appropriate.\n\n**Syntax**: `none | manual | auto`\n\n**Initial value**: `manual`',
                  enum: [
                    '-moz-initial',
                    'auto',
                    'inherit',
                    'initial',
                    'manual',
                    'none',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                msImeAlign: {
                  description:
                    'The **`-ms-ime-align`** CSS property is a Microsoft extension aligning the Input Method Editor (IME) candidate window box relative to the element on which the IME composition is active. The extension is implemented in Microsoft Edge and Internet Explorer 11.\n\n**Syntax**: `auto | after`\n\n**Initial value**: `auto`',
                  enum: [
                    '-moz-initial',
                    'after',
                    'auto',
                    'inherit',
                    'initial',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                msJustifySelf: {
                  description:
                    'The CSS **`justify-self`** property set the way a box is justified inside its alignment container along the appropriate axis.\n\n**Syntax**: `auto | normal | stretch | <baseline-position> | <overflow-position>? [ <self-position> | left | right ]`\n\n**Initial value**: `auto`',
                  type: 'string',
                },
                msLineBreak: {
                  description:
                    'The **`line-break`** CSS property sets how to break lines of Chinese, Japanese, or Korean (CJK) text when working with punctuation and symbols.\n\n**Syntax**: `auto | loose | normal | strict | anywhere`\n\n**Initial value**: `auto`',
                  enum: [
                    '-moz-initial',
                    'anywhere',
                    'auto',
                    'inherit',
                    'initial',
                    'loose',
                    'normal',
                    'revert',
                    'strict',
                    'unset',
                  ],
                  type: 'string',
                },
                msOrder: {
                  description:
                    'The **`order`** CSS property sets the order to lay out an item in a flex or grid container. Items in a container are sorted by ascending `order` value and then by their source code order.\n\n**Syntax**: `<integer>`\n\n**Initial value**: `0`',
                  anyOf: [
                    {
                      enum: [
                        '-moz-initial',
                        'inherit',
                        'initial',
                        'revert',
                        'unset',
                      ],
                      type: 'string',
                    },
                    {
                      type: 'number',
                    },
                  ],
                },
                msOverflowStyle: {
                  description:
                    'The **`-ms-overflow-style`** CSS property is a Microsoft extension controlling the behavior of scrollbars when the content of an element overflows.\n\n**Syntax**: `auto | none | scrollbar | -ms-autohiding-scrollbar`\n\n**Initial value**: `auto`',
                  enum: [
                    '-moz-initial',
                    '-ms-autohiding-scrollbar',
                    'auto',
                    'inherit',
                    'initial',
                    'none',
                    'revert',
                    'scrollbar',
                    'unset',
                  ],
                  type: 'string',
                },
                msOverflowX: {
                  description:
                    "The **`overflow-x`** CSS property sets what shows when content overflows a block-level element's left and right edges. This may be nothing, a scroll bar, or the overflow content.\n\n**Syntax**: `visible | hidden | clip | scroll | auto`\n\n**Initial value**: `visible`",
                  enum: [
                    '-moz-hidden-unscrollable',
                    '-moz-initial',
                    'auto',
                    'clip',
                    'hidden',
                    'inherit',
                    'initial',
                    'revert',
                    'scroll',
                    'unset',
                    'visible',
                  ],
                  type: 'string',
                },
                msOverflowY: {
                  description:
                    "The **`overflow-y`** CSS property sets what shows when content overflows a block-level element's top and bottom edges. This may be nothing, a scroll bar, or the overflow content.\n\n**Syntax**: `visible | hidden | clip | scroll | auto`\n\n**Initial value**: `visible`",
                  enum: [
                    '-moz-hidden-unscrollable',
                    '-moz-initial',
                    'auto',
                    'clip',
                    'hidden',
                    'inherit',
                    'initial',
                    'revert',
                    'scroll',
                    'unset',
                    'visible',
                  ],
                  type: 'string',
                },
                msScrollChaining: {
                  description:
                    'The `**-ms-scroll-chaining**` CSS property is a Microsoft extension that specifies the scrolling behavior that occurs when a user hits the scroll limit during a manipulation.\n\n**Syntax**: `chained | none`\n\n**Initial value**: `chained`',
                  enum: [
                    '-moz-initial',
                    'chained',
                    'inherit',
                    'initial',
                    'none',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                msScrollLimitXMax: {
                  description:
                    'The `**-ms-scroll-limit-x-max**` CSS property is a Microsoft extension that specifies the maximum value for the `Element.scrollLeft` property.\n\n**Syntax**: `auto | <length>`\n\n**Initial value**: `auto`',
                  type: ['string', 'number'],
                },
                msScrollLimitXMin: {
                  description:
                    'The **`-ms-scroll-limit-x-min`** CSS property is a Microsoft extension that specifies the minimum value for the `Element.scrollLeft` property.\n\n**Syntax**: `<length>`\n\n**Initial value**: `0`',
                  type: ['string', 'number'],
                },
                msScrollLimitYMax: {
                  description:
                    'The **`-ms-scroll-limit-y-max`** CSS property is a Microsoft extension that specifies the maximum value for the `Element.scrollTop` property.\n\n**Syntax**: `auto | <length>`\n\n**Initial value**: `auto`',
                  type: ['string', 'number'],
                },
                msScrollLimitYMin: {
                  description:
                    'The **`-ms-scroll-limit-y-min`** CSS property is a Microsoft extension that specifies the minimum value for the `Element.scrollTop` property.\n\n**Syntax**: `<length>`\n\n**Initial value**: `0`',
                  type: ['string', 'number'],
                },
                msScrollRails: {
                  description:
                    'The **`-ms-scroll-rails`** CSS property is a Microsoft extension that specifies whether scrolling locks to the primary axis of motion.\n\n**Syntax**: `none | railed`\n\n**Initial value**: `railed`',
                  enum: [
                    '-moz-initial',
                    'inherit',
                    'initial',
                    'none',
                    'railed',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                msScrollSnapPointsX: {
                  description:
                    'The **`-ms-scroll-snap-points-x`** CSS property is a Microsoft extension that specifies where snap-points will be located along the x-axis.\n\n**Syntax**: `snapInterval( <length-percentage>, <length-percentage> ) | snapList( <length-percentage># )`\n\n**Initial value**: `snapInterval(0px, 100%)`',
                  type: 'string',
                },
                msScrollSnapPointsY: {
                  description:
                    'The **`-ms-scroll-snap-points-y`** CSS property is a Microsoft extension that specifies where snap-points will be located along the y-axis.\n\n**Syntax**: `snapInterval( <length-percentage>, <length-percentage> ) | snapList( <length-percentage># )`\n\n**Initial value**: `snapInterval(0px, 100%)`',
                  type: 'string',
                },
                msScrollSnapType: {
                  description:
                    'The **`scroll-snap-type`** CSS property sets how strictly snap points are enforced on the scroll container in case there is one.\n\n**Syntax**: `none | proximity | mandatory`\n\n**Initial value**: `none`',
                  enum: [
                    '-moz-initial',
                    'inherit',
                    'initial',
                    'mandatory',
                    'none',
                    'proximity',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                msScrollTranslation: {
                  description:
                    'The **`-ms-scroll-translation`** CSS property is a Microsoft extension that specifies whether vertical-to-horizontal scroll wheel translation occurs on the specified element.\n\n**Syntax**: `none | vertical-to-horizontal`\n\n**Initial value**: `none`',
                  enum: [
                    '-moz-initial',
                    'inherit',
                    'initial',
                    'none',
                    'revert',
                    'unset',
                    'vertical-to-horizontal',
                  ],
                  type: 'string',
                },
                msScrollbar3dlightColor: {
                  description:
                    'The **`-ms-scrollbar-3dlight-color`** CSS property is a Microsoft extension specifying the color of the top and left edges of the scroll box and scroll arrows of a scroll bar.\n\n**Syntax**: `<color>`\n\n**Initial value**: depends on user agent',
                  type: 'string',
                },
                msScrollbarArrowColor: {
                  description:
                    'The **`-ms-scrollbar-arrow-color`** CSS property is a Microsoft extension that specifies the color of the arrow elements of a scroll arrow.\n\n**Syntax**: `<color>`\n\n**Initial value**: `ButtonText`',
                  type: 'string',
                },
                msScrollbarBaseColor: {
                  description:
                    'The `**-ms-scrollbar-base-color**` CSS property is a Microsoft extension that specifies the base color of the main elements of a scroll bar.\n\n**Syntax**: `<color>`\n\n**Initial value**: depends on user agent',
                  type: 'string',
                },
                msScrollbarDarkshadowColor: {
                  description:
                    "The **`-ms-scrollbar-darkshadow-color`** CSS property is a Microsoft extension that specifies the color of a scroll bar's gutter.\n\n**Syntax**: `<color>`\n\n**Initial value**: `ThreeDDarkShadow`",
                  type: 'string',
                },
                msScrollbarFaceColor: {
                  description:
                    'The `**-ms-scrollbar-face-color**` CSS property is a Microsoft extension that specifies the color of the scroll box and scroll arrows of a scroll bar.\n\n**Syntax**: `<color>`\n\n**Initial value**: `ThreeDFace`',
                  type: 'string',
                },
                msScrollbarHighlightColor: {
                  description:
                    'The `**-ms-scrollbar-highlight-color**` CSS property is a Microsoft extension that specifies the color of the slider tray, the top and left edges of the scroll box, and the scroll arrows of a scroll bar.\n\n**Syntax**: `<color>`\n\n**Initial value**: `ThreeDHighlight`',
                  type: 'string',
                },
                msScrollbarShadowColor: {
                  description:
                    'The **`-ms-scrollbar-shadow-color`** CSS property is a Microsoft extension that specifies the color of the bottom and right edges of the scroll box and scroll arrows of a scroll bar.\n\n**Syntax**: `<color>`\n\n**Initial value**: `ThreeDDarkShadow`',
                  type: 'string',
                },
                msTextAutospace: {
                  description:
                    'The **`-ms-text-autospace`** CSS property is a Microsoft extension that specifies the autospacing and narrow space width adjustment of text.\n\n**Syntax**: `none | ideograph-alpha | ideograph-numeric | ideograph-parenthesis | ideograph-space`\n\n**Initial value**: `none`',
                  enum: [
                    '-moz-initial',
                    'ideograph-alpha',
                    'ideograph-numeric',
                    'ideograph-parenthesis',
                    'ideograph-space',
                    'inherit',
                    'initial',
                    'none',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                msTextCombineHorizontal: {
                  description:
                    'The **`text-combine-upright`** CSS property sets the combination of characters into the space of a single character. If the combined text is wider than 1em, the user agent must fit the contents within 1em. The resulting composition is treated as a single upright glyph for layout and decoration. This property only has an effect in vertical writing modes.\n\n**Syntax**: `none | all | [ digits <integer>? ]`\n\n**Initial value**: `none`',
                  type: 'string',
                },
                msTextOverflow: {
                  description:
                    "The **`text-overflow`** CSS property sets how hidden overflow content is signaled to users. It can be clipped, display an ellipsis ('`…`'), or display a custom string.\n\n**Syntax**: `[ clip | ellipsis | <string> ]{1,2}`\n\n**Initial value**: `clip`",
                  type: 'string',
                },
                msTouchAction: {
                  description:
                    'The **`touch-action`** CSS property sets how a region can be manipulated by a touchscreen user (for example, by zooming features built into the browser).\n\n**Syntax**: `auto | none | [ [ pan-x | pan-left | pan-right ] || [ pan-y | pan-up | pan-down ] || pinch-zoom ] | manipulation`\n\n**Initial value**: `auto`',
                  type: 'string',
                },
                msTouchSelect: {
                  description:
                    'The **`-ms-touch-select`** CSS property is a Microsoft extension that toggles the gripper visual elements that enable touch text selection.\n\n**Syntax**: `grippers | none`\n\n**Initial value**: `grippers`',
                  enum: [
                    '-moz-initial',
                    'grippers',
                    'inherit',
                    'initial',
                    'none',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                msTransform: {
                  description:
                    'The **`transform`** CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.\n\n**Syntax**: `none | <transform-list>`\n\n**Initial value**: `none`',
                  type: 'string',
                },
                msTransformOrigin: {
                  description:
                    "The **`transform-origin`** CSS property sets the origin for an element's transformations.\n\n**Syntax**: `[ <length-percentage> | left | center | right | top | bottom ] | [ [ <length-percentage> | left | center | right ] && [ <length-percentage> | top | center | bottom ] ] <length>?`\n\n**Initial value**: `50% 50% 0`",
                  type: ['string', 'number'],
                },
                msTransitionDelay: {
                  description:
                    "The **`transition-delay`** CSS property specifies the duration to wait before starting a property's transition effect when its value changes.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`",
                  type: 'string',
                },
                msTransitionDuration: {
                  description:
                    'The **`transition-duration`** CSS property sets the length of time a transition animation should take to complete. By default, the value is `0s`, meaning that no animation will occur.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`',
                  type: 'string',
                },
                msTransitionProperty: {
                  description:
                    'The **`transition-property`** CSS property sets the CSS properties to which a transition effect should be applied.\n\n**Syntax**: `none | <single-transition-property>#`\n\n**Initial value**: all',
                  type: 'string',
                },
                msTransitionTimingFunction: {
                  description:
                    'The **`transition-timing-function`** CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect.\n\n**Syntax**: `<timing-function>#`\n\n**Initial value**: `ease`',
                  type: 'string',
                },
                msUserSelect: {
                  description:
                    "The `**user-select**` CSS property controls whether the user can select text. This doesn't have any effect on content loaded as chrome, except in textboxes.\n\n**Syntax**: `none | element | text`\n\n**Initial value**: `text`",
                  enum: [
                    '-moz-initial',
                    'element',
                    'inherit',
                    'initial',
                    'none',
                    'revert',
                    'text',
                    'unset',
                  ],
                  type: 'string',
                },
                msWordBreak: {
                  description:
                    'The **`word-break`** CSS property sets whether line breaks appear wherever the text would otherwise overflow its content box.\n\n**Syntax**: `normal | break-all | keep-all | break-word`\n\n**Initial value**: `normal`',
                  enum: [
                    '-moz-initial',
                    'break-all',
                    'break-word',
                    'inherit',
                    'initial',
                    'keep-all',
                    'normal',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                msWrapFlow: {
                  description:
                    'The **`-ms-wrap-flow`** CSS property is a Microsoft extension that specifies how exclusions impact inline content within block-level elements.\n\n**Syntax**: `auto | both | start | end | maximum | clear`\n\n**Initial value**: `auto`',
                  enum: [
                    '-moz-initial',
                    'auto',
                    'both',
                    'clear',
                    'end',
                    'inherit',
                    'initial',
                    'maximum',
                    'revert',
                    'start',
                    'unset',
                  ],
                  type: 'string',
                },
                msWrapMargin: {
                  description:
                    'The **`-ms-wrap-margin`** CSS property is a Microsoft extension that specifies a margin that offsets the inner wrap shape from other shapes.\n\n**Syntax**: `<length>`\n\n**Initial value**: `0`',
                  type: ['string', 'number'],
                },
                msWrapThrough: {
                  description:
                    'The **`-ms-wrap-through`** CSS property is a Microsoft extension that specifies how content should wrap around an exclusion element.\n\n**Syntax**: `wrap | none`\n\n**Initial value**: `wrap`',
                  enum: [
                    '-moz-initial',
                    'inherit',
                    'initial',
                    'none',
                    'revert',
                    'unset',
                    'wrap',
                  ],
                  type: 'string',
                },
                msWritingMode: {
                  description:
                    'The **`writing-mode`** CSS property sets whether lines of text are laid out horizontally or vertically, as well as the direction in which blocks progress.\n\n**Syntax**: `horizontal-tb | vertical-rl | vertical-lr | sideways-rl | sideways-lr`\n\n**Initial value**: `horizontal-tb`',
                  enum: [
                    '-moz-initial',
                    'horizontal-tb',
                    'inherit',
                    'initial',
                    'revert',
                    'sideways-lr',
                    'sideways-rl',
                    'unset',
                    'vertical-lr',
                    'vertical-rl',
                  ],
                  type: 'string',
                },
                OObjectFit: {
                  description:
                    'The **`object-fit`** CSS property sets how the content of a replaced element, such as an `<img>` or `<video>`, should be resized to fit its container.\n\n**Syntax**: `fill | contain | cover | none | scale-down`\n\n**Initial value**: `fill`',
                  enum: [
                    '-moz-initial',
                    'contain',
                    'cover',
                    'fill',
                    'inherit',
                    'initial',
                    'none',
                    'revert',
                    'scale-down',
                    'unset',
                  ],
                  type: 'string',
                },
                OObjectPosition: {
                  description:
                    "The **`object-position`** CSS property specifies the alignment of the selected replaced element's contents within the element's box. Areas of the box which aren't covered by the replaced element's object will show the element's background.\n\n**Syntax**: `<position>`\n\n**Initial value**: `50% 50%`",
                  type: ['string', 'number'],
                },
                OTabSize: {
                  description:
                    'The **`tab-size`** CSS property is used to customize the width of a tab (`U+0009`) character.\n\n**Syntax**: `<integer> | <length>`\n\n**Initial value**: `8`',
                  type: ['string', 'number'],
                },
                OTextOverflow: {
                  description:
                    "The **`text-overflow`** CSS property sets how hidden overflow content is signaled to users. It can be clipped, display an ellipsis ('`…`'), or display a custom string.\n\n**Syntax**: `[ clip | ellipsis | <string> ]{1,2}`\n\n**Initial value**: `clip`",
                  type: 'string',
                },
                OTransformOrigin: {
                  description:
                    "The **`transform-origin`** CSS property sets the origin for an element's transformations.\n\n**Syntax**: `[ <length-percentage> | left | center | right | top | bottom ] | [ [ <length-percentage> | left | center | right ] && [ <length-percentage> | top | center | bottom ] ] <length>?`\n\n**Initial value**: `50% 50% 0`",
                  type: ['string', 'number'],
                },
                WebkitAlignContent: {
                  description:
                    'The CSS **`align-content`** property sets how the browser distributes space between and around content items along the cross-axis of a flexbox container, and the main-axis of a grid container.\n\n**Syntax**: `normal | <baseline-position> | <content-distribution> | <overflow-position>? <content-position>`\n\n**Initial value**: `normal`',
                  type: 'string',
                },
                WebkitAlignItems: {
                  description:
                    'The CSS **`align-items`** property sets the `align-self` value on all direct children as a group. The align-self property sets the alignment of an item within its containing block. In Flexbox it controls the alignment of items on the Cross Axis, in Grid Layout it controls the alignment of items on the Block Axis within their grid area.\n\n**Syntax**: `normal | stretch | <baseline-position> | [ <overflow-position>? <self-position> ]`\n\n**Initial value**: `normal`',
                  type: 'string',
                },
                WebkitAlignSelf: {
                  description:
                    "The **`align-self`** CSS property aligns flex items of the current flex line overriding the `align-items` value. If any of the item's cross-axis margin is set to `auto`, then `align-self` is ignored. In Grid layout `align-self` aligns the item inside the grid area.\n\n**Syntax**: `auto | normal | stretch | <baseline-position> | <overflow-position>? <self-position>`\n\n**Initial value**: `auto`",
                  type: 'string',
                },
                WebkitAnimationDelay: {
                  description:
                    'The **`animation-delay`** CSS property sets when an animation starts. The animation can start later, immediately from its beginning, or immediately and partway through the animation.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`',
                  type: 'string',
                },
                WebkitAnimationDirection: {
                  description:
                    'The **`animation-direction`** CSS property sets whether an animation should play forwards, backwards, or alternating back and forth.\n\n**Syntax**: `<single-animation-direction>#`\n\n**Initial value**: `normal`',
                  type: 'string',
                },
                WebkitAnimationDuration: {
                  description:
                    'The **`animation-duration`** CSS property sets the length of time that an animation takes to complete one cycle.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`',
                  type: 'string',
                },
                WebkitAnimationFillMode: {
                  description:
                    'The **`animation-fill-mode`** CSS property sets how a CSS animation applies styles to its target before and after its execution.\n\n**Syntax**: `<single-animation-fill-mode>#`\n\n**Initial value**: `none`',
                  type: 'string',
                },
                WebkitAnimationIterationCount: {
                  description:
                    'The **`animation-iteration-count`** CSS property sets the number of times an animation cycle should be played before stopping.\n\n**Syntax**: `<single-animation-iteration-count>#`\n\n**Initial value**: `1`',
                  type: ['string', 'number'],
                },
                WebkitAnimationName: {
                  description:
                    'The **`animation-name`** CSS property sets one or more animations to apply to an element. Each name is an `@keyframes` at-rule that sets the property values for the animation sequence.\n\n**Syntax**: `[ none | <keyframes-name> ]#`\n\n**Initial value**: `none`',
                  type: 'string',
                },
                WebkitAnimationPlayState: {
                  description:
                    'The **`animation-play-state`** CSS property sets whether an animation is running or paused.\n\n**Syntax**: `<single-animation-play-state>#`\n\n**Initial value**: `running`',
                  type: 'string',
                },
                WebkitAnimationTimingFunction: {
                  description:
                    'The `**animation-timing-function**` CSS property sets how an animation progresses through the duration of each cycle.\n\n**Syntax**: `<timing-function>#`\n\n**Initial value**: `ease`',
                  type: 'string',
                },
                WebkitAppearance: {
                  description:
                    "The **`-moz-appearance`** CSS property is used in Gecko (Firefox) to display an element using platform-native styling based on the operating system's theme.\n\n**Syntax**: `none | button | button-bevel | caret | checkbox | default-button | inner-spin-button | listbox | listitem | media-controls-background | media-controls-fullscreen-background | media-current-time-display | media-enter-fullscreen-button | media-exit-fullscreen-button | media-fullscreen-button | media-mute-button | media-overlay-play-button | media-play-button | media-seek-back-button | media-seek-forward-button | media-slider | media-sliderthumb | media-time-remaining-display | media-toggle-closed-captions-button | media-volume-slider | media-volume-slider-container | media-volume-sliderthumb | menulist | menulist-button | menulist-text | menulist-textfield | meter | progress-bar | progress-bar-value | push-button | radio | searchfield | searchfield-cancel-button | searchfield-decoration | searchfield-results-button | searchfield-results-decoration | slider-horizontal | slider-vertical | sliderthumb-horizontal | sliderthumb-vertical | square-button | textarea | textfield | -apple-pay-button`\n\n**Initial value**: `none` (but this value is overridden in the user agent CSS)",
                  enum: [
                    '-apple-pay-button',
                    '-moz-initial',
                    'button',
                    'button-bevel',
                    'caret',
                    'checkbox',
                    'default-button',
                    'inherit',
                    'initial',
                    'inner-spin-button',
                    'listbox',
                    'listitem',
                    'media-controls-background',
                    'media-controls-fullscreen-background',
                    'media-current-time-display',
                    'media-enter-fullscreen-button',
                    'media-exit-fullscreen-button',
                    'media-fullscreen-button',
                    'media-mute-button',
                    'media-overlay-play-button',
                    'media-play-button',
                    'media-seek-back-button',
                    'media-seek-forward-button',
                    'media-slider',
                    'media-sliderthumb',
                    'media-time-remaining-display',
                    'media-toggle-closed-captions-button',
                    'media-volume-slider',
                    'media-volume-slider-container',
                    'media-volume-sliderthumb',
                    'menulist',
                    'menulist-button',
                    'menulist-text',
                    'menulist-textfield',
                    'meter',
                    'none',
                    'progress-bar',
                    'progress-bar-value',
                    'push-button',
                    'radio',
                    'revert',
                    'searchfield',
                    'searchfield-cancel-button',
                    'searchfield-decoration',
                    'searchfield-results-button',
                    'searchfield-results-decoration',
                    'slider-horizontal',
                    'slider-vertical',
                    'sliderthumb-horizontal',
                    'sliderthumb-vertical',
                    'square-button',
                    'textarea',
                    'textfield',
                    'unset',
                  ],
                  type: 'string',
                },
                WebkitBackdropFilter: {
                  description:
                    'The **`backdrop-filter`** CSS property lets you apply graphical effects such as blurring or color shifting to the area behind an element. Because it applies to everything _behind_ the element, to see the effect you must make the element or its background at least partially transparent.\n\n**Syntax**: `none | <filter-function-list>`\n\n**Initial value**: `none`',
                  type: 'string',
                },
                WebkitBackfaceVisibility: {
                  description:
                    'The **`backface-visibility`** CSS property sets whether the back face of an element is visible when turned towards the user.\n\n**Syntax**: `visible | hidden`\n\n**Initial value**: `visible`',
                  enum: [
                    '-moz-initial',
                    'hidden',
                    'inherit',
                    'initial',
                    'revert',
                    'unset',
                    'visible',
                  ],
                  type: 'string',
                },
                WebkitBackgroundClip: {
                  description:
                    "The **`background-clip`** CSS property sets whether an element's background `<color>` or `<image>` extends underneath its border.\n\n**Syntax**: `<box>#`\n\n**Initial value**: `border-box`",
                  type: 'string',
                },
                WebkitBackgroundOrigin: {
                  description:
                    'The **`background-origin`** CSS property sets the _background positioning area_. In other words, it sets the origin position of an image set with the `background-image` property.\n\n**Syntax**: `<box>#`\n\n**Initial value**: `padding-box`',
                  type: 'string',
                },
                WebkitBackgroundSize: {
                  description:
                    "The **`background-size`** CSS property sets the size of the element's background image. The image can be left to its natural size, stretched, or constrained to fit the available space.\n\n**Syntax**: `<bg-size>#`\n\n**Initial value**: `auto auto`",
                  type: ['string', 'number'],
                },
                WebkitBorderBeforeColor: {
                  description:
                    "**Syntax**: `<'color'>`\n\n**Initial value**: `currentcolor`",
                  type: 'string',
                },
                WebkitBorderBeforeStyle: {
                  description:
                    "**Syntax**: `<'border-style'>`\n\n**Initial value**: `none`",
                  type: 'string',
                },
                WebkitBorderBeforeWidth: {
                  description:
                    "**Syntax**: `<'border-width'>`\n\n**Initial value**: `medium`",
                  type: ['string', 'number'],
                },
                WebkitBorderBottomLeftRadius: {
                  description:
                    'The **`border-bottom-left-radius`** CSS property rounds the bottom-left corner of an element.\n\n**Syntax**: `<length-percentage>{1,2}`\n\n**Initial value**: `0`',
                  type: ['string', 'number'],
                },
                WebkitBorderBottomRightRadius: {
                  description:
                    'The **`border-bottom-right-radius`** CSS property rounds the bottom-right corner of an element.\n\n**Syntax**: `<length-percentage>{1,2}`\n\n**Initial value**: `0`',
                  type: ['string', 'number'],
                },
                WebkitBorderImageSlice: {
                  description:
                    "The **`border-image-slice`** CSS property divides the image specified by `border-image-source` into regions. These regions form the components of an element's border image.\n\n**Syntax**: `<number-percentage>{1,4} && fill?`\n\n**Initial value**: `100%`",
                  type: ['string', 'number'],
                },
                WebkitBorderTopLeftRadius: {
                  description:
                    'The **`border-top-left-radius`** CSS property rounds the top-left corner of an element.\n\n**Syntax**: `<length-percentage>{1,2}`\n\n**Initial value**: `0`',
                  type: ['string', 'number'],
                },
                WebkitBorderTopRightRadius: {
                  description:
                    'The **`border-top-right-radius`** CSS property rounds the top-right corner of an element.\n\n**Syntax**: `<length-percentage>{1,2}`\n\n**Initial value**: `0`',
                  type: ['string', 'number'],
                },
                WebkitBoxDecorationBreak: {
                  description:
                    "The **`box-decoration-break`** CSS property specifies how an element's fragments should be rendered when broken across multiple lines, columns, or pages.\n\n**Syntax**: `slice | clone`\n\n**Initial value**: `slice`",
                  enum: [
                    '-moz-initial',
                    'clone',
                    'inherit',
                    'initial',
                    'revert',
                    'slice',
                    'unset',
                  ],
                  type: 'string',
                },
                WebkitBoxReflect: {
                  description:
                    'The **`-webkit-box-reflect`** CSS property lets you reflect the content of an element in one specific direction.\n\n**Syntax**: `[ above | below | right | left ]? <length>? <image>?`\n\n**Initial value**: `none`',
                  type: ['string', 'number'],
                },
                WebkitBoxShadow: {
                  description:
                    "The **`box-shadow`** CSS property adds shadow effects around an element's frame. You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radii, and color.\n\n**Syntax**: `none | <shadow>#`\n\n**Initial value**: `none`",
                  type: 'string',
                },
                WebkitBoxSizing: {
                  description:
                    'The **`box-sizing`** CSS property defines how the user agent should calculate the total width and height of an element.\n\n**Syntax**: `content-box | border-box`\n\n**Initial value**: `content-box`',
                  enum: [
                    '-moz-initial',
                    'border-box',
                    'content-box',
                    'inherit',
                    'initial',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                WebkitClipPath: {
                  description:
                    'The `**clip-path**` CSS property creates a clipping region that sets what part of an element should be shown. Parts that are inside the region are shown, while those outside are hidden.\n\n**Syntax**: `<clip-source> | [ <basic-shape> || <geometry-box> ] | none`\n\n**Initial value**: `none`',
                  type: 'string',
                },
                WebkitColumnCount: {
                  description:
                    "The **`column-count`** CSS property breaks an element's content into the specified number of columns.\n\n**Syntax**: `<integer> | auto`\n\n**Initial value**: `auto`",
                  anyOf: [
                    {
                      enum: [
                        '-moz-initial',
                        'auto',
                        'inherit',
                        'initial',
                        'revert',
                        'unset',
                      ],
                      type: 'string',
                    },
                    {
                      type: 'number',
                    },
                  ],
                },
                WebkitColumnFill: {
                  description:
                    "The **`column-fill`** CSS property controls how an element's contents are balanced when broken into columns.\n\n**Syntax**: `auto | balance | balance-all`\n\n**Initial value**: `balance`",
                  enum: [
                    '-moz-initial',
                    'auto',
                    'balance',
                    'inherit',
                    'initial',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                WebkitColumnGap: {
                  description:
                    "The **`column-gap`** CSS property sets the size of the gap (gutter) between an element's columns.\n\n**Syntax**: `normal | <length-percentage>`\n\n**Initial value**: `normal`",
                  type: ['string', 'number'],
                },
                WebkitColumnRuleColor: {
                  description:
                    'The **`column-rule-color`** CSS property sets the color of the rule (line) drawn between columns in a multi-column layout.\n\n**Syntax**: `<color>`\n\n**Initial value**: `currentcolor`',
                  type: 'string',
                },
                WebkitColumnRuleStyle: {
                  description:
                    "The **`column-rule-style`** CSS property sets the style of the line drawn between columns in a multi-column layout.\n\n**Syntax**: `<'border-style'>`\n\n**Initial value**: `none`",
                  type: 'string',
                },
                WebkitColumnRuleWidth: {
                  description:
                    "The **`column-rule-width`** CSS property sets the width of the rule (line) drawn between columns in a multi-column layout.\n\n**Syntax**: `<'border-width'>`\n\n**Initial value**: `medium`",
                  type: ['string', 'number'],
                },
                WebkitColumnSpan: {
                  description:
                    'The **`column-span`** CSS property makes it possible for an element to span across all columns when its value is set to `all`.\n\n**Syntax**: `none | all`\n\n**Initial value**: `none`',
                  enum: [
                    '-moz-initial',
                    'all',
                    'inherit',
                    'initial',
                    'none',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                WebkitColumnWidth: {
                  description:
                    "The **`column-width`** CSS property specifies the ideal column width in a multi-column layout. The container will have as many columns as can fit without any of them having a width less than the `column-width` value. If the width of the container is narrower than the specified value, the single column's width will be smaller than the declared column width.\n\n**Syntax**: `<length> | auto`\n\n**Initial value**: `auto`",
                  type: ['string', 'number'],
                },
                WebkitFilter: {
                  description:
                    'The **`filter`** CSS property applies graphical effects like blur or color shift to an element. Filters are commonly used to adjust the rendering of images, backgrounds, and borders.\n\n**Syntax**: `none | <filter-function-list>`\n\n**Initial value**: `none`',
                  type: 'string',
                },
                WebkitFlexBasis: {
                  description:
                    "The **`flex-basis`** CSS property sets the initial main size of a flex item. It sets the size of the content box unless otherwise set with `box-sizing`.\n\n**Syntax**: `content | <'width'>`\n\n**Initial value**: `auto`",
                  type: ['string', 'number'],
                },
                WebkitFlexDirection: {
                  description:
                    'The **`flex-direction`** CSS property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).\n\n**Syntax**: `row | row-reverse | column | column-reverse`\n\n**Initial value**: `row`',
                  enum: [
                    '-moz-initial',
                    'column',
                    'column-reverse',
                    'inherit',
                    'initial',
                    'revert',
                    'row',
                    'row-reverse',
                    'unset',
                  ],
                  type: 'string',
                },
                WebkitFlexGrow: {
                  description:
                    'The **`flex-grow`** CSS property sets how much of the available space in the flex container should be assigned to that item (the flex grow factor). If all sibling items have the same flex grow factor, then all items will receive the same share of available space, otherwise it is distributed according to the ratio defined by the different flex grow factors.\n\n**Syntax**: `<number>`\n\n**Initial value**: `0`',
                  anyOf: [
                    {
                      enum: [
                        '-moz-initial',
                        'inherit',
                        'initial',
                        'revert',
                        'unset',
                      ],
                      type: 'string',
                    },
                    {
                      type: 'number',
                    },
                  ],
                },
                WebkitFlexShrink: {
                  description:
                    'The **`flex-shrink`** CSS property sets the flex shrink factor of a flex item. If the size of flex items is larger than the flex container, items shrink to fit according to `flex-shrink`.\n\n**Syntax**: `<number>`\n\n**Initial value**: `1`',
                  anyOf: [
                    {
                      enum: [
                        '-moz-initial',
                        'inherit',
                        'initial',
                        'revert',
                        'unset',
                      ],
                      type: 'string',
                    },
                    {
                      type: 'number',
                    },
                  ],
                },
                WebkitFlexWrap: {
                  description:
                    'The **`flex-wrap`** CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked.\n\n**Syntax**: `nowrap | wrap | wrap-reverse`\n\n**Initial value**: `nowrap`',
                  enum: [
                    '-moz-initial',
                    'inherit',
                    'initial',
                    'nowrap',
                    'revert',
                    'unset',
                    'wrap',
                    'wrap-reverse',
                  ],
                  type: 'string',
                },
                WebkitFontFeatureSettings: {
                  description:
                    'The **`font-feature-settings`** CSS property controls advanced typographic features in OpenType fonts.\n\n**Syntax**: `normal | <feature-tag-value>#`\n\n**Initial value**: `normal`',
                  type: 'string',
                },
                WebkitFontKerning: {
                  description:
                    'The **`font-kerning`** CSS property sets the use of the kerning information stored in a font.\n\n**Syntax**: `auto | normal | none`\n\n**Initial value**: `auto`',
                  enum: [
                    '-moz-initial',
                    'auto',
                    'inherit',
                    'initial',
                    'none',
                    'normal',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                WebkitFontSmoothing: {
                  description:
                    'The **`font-smooth`** CSS property controls the application of anti-aliasing when fonts are rendered.\n\n**Syntax**: `auto | never | always | <absolute-size> | <length>`\n\n**Initial value**: `auto`',
                  type: ['string', 'number'],
                },
                WebkitFontVariantLigatures: {
                  description:
                    'The **`font-variant-ligatures`** CSS property controls which ligatures and contextual forms are used in textual content of the elements it applies to. This leads to more harmonized forms in the resulting text.\n\n**Syntax**: `normal | none | [ <common-lig-values> || <discretionary-lig-values> || <historical-lig-values> || <contextual-alt-values> ]`\n\n**Initial value**: `normal`',
                  type: 'string',
                },
                WebkitHyphens: {
                  description:
                    'The **`hyphens`** CSS property specifies how words should be hyphenated when text wraps across multiple lines. You can prevent hyphenation entirely, use hyphenation in manually-specified points within the text, or let the browser automatically insert hyphens where appropriate.\n\n**Syntax**: `none | manual | auto`\n\n**Initial value**: `manual`',
                  enum: [
                    '-moz-initial',
                    'auto',
                    'inherit',
                    'initial',
                    'manual',
                    'none',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                WebkitJustifyContent: {
                  description:
                    'The CSS **`justify-content`** property defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container.\n\n**Syntax**: `normal | <content-distribution> | <overflow-position>? [ <content-position> | left | right ]`\n\n**Initial value**: `normal`',
                  type: 'string',
                },
                WebkitLineBreak: {
                  description:
                    'The **`line-break`** CSS property sets how to break lines of Chinese, Japanese, or Korean (CJK) text when working with punctuation and symbols.\n\n**Syntax**: `auto | loose | normal | strict | anywhere`\n\n**Initial value**: `auto`',
                  enum: [
                    '-moz-initial',
                    'anywhere',
                    'auto',
                    'inherit',
                    'initial',
                    'loose',
                    'normal',
                    'revert',
                    'strict',
                    'unset',
                  ],
                  type: 'string',
                },
                WebkitLineClamp: {
                  description:
                    'The **`-webkit-line-clamp`** CSS property allows limiting of the contents of a block container to the specified number of lines.\n\n**Syntax**: `none | <integer>`\n\n**Initial value**: `none`',
                  anyOf: [
                    {
                      enum: [
                        '-moz-initial',
                        'inherit',
                        'initial',
                        'none',
                        'revert',
                        'unset',
                      ],
                      type: 'string',
                    },
                    {
                      type: 'number',
                    },
                  ],
                },
                WebkitMarginEnd: {
                  description:
                    "The **`margin-inline-end`** CSS property defines the logical inline end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. In other words, it corresponds to the `margin-top`, `margin-right`, `margin-bottom` or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'margin-left'>`\n\n**Initial value**: `0`",
                  type: ['string', 'number'],
                },
                WebkitMarginStart: {
                  description:
                    "The **`margin-inline-start`** CSS property defines the logical inline start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. It corresponds to the `margin-top`, `margin-right`, `margin-bottom`, or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'margin-left'>`\n\n**Initial value**: `0`",
                  type: ['string', 'number'],
                },
                WebkitMaskAttachment: {
                  description:
                    "If a `-webkit-mask-image` is specified, `-webkit-mask-attachment` determines whether the mask image's position is fixed within the viewport, or scrolls along with its containing block.\n\n**Syntax**: `<attachment>#`\n\n**Initial value**: `scroll`",
                  type: 'string',
                },
                WebkitMaskClip: {
                  description:
                    'The **`mask-clip`** CSS property determines the area, which is affected by a mask. The painted content of an element must be restricted to this area.\n\n**Syntax**: `[ <box> | border | padding | content | text ]#`\n\n**Initial value**: `border`',
                  type: 'string',
                },
                WebkitMaskComposite: {
                  description:
                    'The **`-webkit-mask-composite`** property specifies the manner in which multiple mask images applied to the same element are composited with one another. Mask images are composited in the opposite order that they are declared with the `-webkit-mask-image` property.\n\n**Syntax**: `<composite-style>#`\n\n**Initial value**: `source-over`',
                  type: 'string',
                },
                WebkitMaskImage: {
                  description:
                    'The **`mask-image`** CSS property sets the image that is used as mask layer for an element.\n\n**Syntax**: `<mask-reference>#`\n\n**Initial value**: `none`',
                  type: 'string',
                },
                WebkitMaskOrigin: {
                  description:
                    'The **`mask-origin`** CSS property sets the origin of a mask.\n\n**Syntax**: `[ <box> | border | padding | content ]#`\n\n**Initial value**: `padding`',
                  type: 'string',
                },
                WebkitMaskPosition: {
                  description:
                    'The **`mask-position`** CSS property sets the initial position, relative to the mask position layer set by `mask-origin`, for each defined mask image.\n\n**Syntax**: `<position>#`\n\n**Initial value**: `0% 0%`',
                  type: ['string', 'number'],
                },
                WebkitMaskPositionX: {
                  description:
                    'The `-webkit-mask-position-x` CSS property sets the initial horizontal position of a mask image.\n\n**Syntax**: `[ <length-percentage> | left | center | right ]#`\n\n**Initial value**: `0%`',
                  type: ['string', 'number'],
                },
                WebkitMaskPositionY: {
                  description:
                    'The `-webkit-mask-position-y` CSS property sets the initial vertical position of a mask image.\n\n**Syntax**: `[ <length-percentage> | top | center | bottom ]#`\n\n**Initial value**: `0%`',
                  type: ['string', 'number'],
                },
                WebkitMaskRepeat: {
                  description:
                    'The **`mask-repeat`** CSS property sets how mask images are repeated. A mask image can be repeated along the horizontal axis, the vertical axis, both axes, or not repeated at all.\n\n**Syntax**: `<repeat-style>#`\n\n**Initial value**: `repeat`',
                  type: 'string',
                },
                WebkitMaskRepeatX: {
                  description:
                    'The `-webkit-mask-repeat-x` property specifies whether and how a mask image is repeated (tiled) horizontally.\n\n**Syntax**: `repeat | no-repeat | space | round`\n\n**Initial value**: `repeat`',
                  enum: [
                    '-moz-initial',
                    'inherit',
                    'initial',
                    'no-repeat',
                    'repeat',
                    'revert',
                    'round',
                    'space',
                    'unset',
                  ],
                  type: 'string',
                },
                WebkitMaskRepeatY: {
                  description:
                    'The `-webkit-mask-repeat-y` property sets whether and how a mask image is repeated (tiled) vertically.\n\n**Syntax**: `repeat | no-repeat | space | round`\n\n**Initial value**: `repeat`',
                  enum: [
                    '-moz-initial',
                    'inherit',
                    'initial',
                    'no-repeat',
                    'repeat',
                    'revert',
                    'round',
                    'space',
                    'unset',
                  ],
                  type: 'string',
                },
                WebkitMaskSize: {
                  description:
                    'The **`mask-size`** CSS property specifies the sizes of the mask images. The size of the image can be fully or partially constrained in order to preserve its intrinsic ratio.\n\n**Syntax**: `<bg-size>#`\n\n**Initial value**: `auto auto`',
                  type: ['string', 'number'],
                },
                WebkitMaxInlineSize: {
                  description:
                    "The **`max-inline-size`** CSS property defines the horizontal or vertical maximum size of an element's block depending on its writing mode. It corresponds to the `max-width` or the `max-height` property depending on the value defined for `writing-mode`. If the writing mode is vertically oriented, the value of `max-inline-size` relates to the maximal height of the element, otherwise it relates to the maximal width of the element. It relates to `max-block-size`, which defines the other dimension of the element.\n\n**Syntax**: `<'max-width'>`\n\n**Initial value**: `0`",
                  type: ['string', 'number'],
                },
                WebkitOrder: {
                  description:
                    'The **`order`** CSS property sets the order to lay out an item in a flex or grid container. Items in a container are sorted by ascending `order` value and then by their source code order.\n\n**Syntax**: `<integer>`\n\n**Initial value**: `0`',
                  anyOf: [
                    {
                      enum: [
                        '-moz-initial',
                        'inherit',
                        'initial',
                        'revert',
                        'unset',
                      ],
                      type: 'string',
                    },
                    {
                      type: 'number',
                    },
                  ],
                },
                WebkitOverflowScrolling: {
                  description:
                    'The `-webkit-overflow-scrolling` CSS property controls whether or not touch devices use momentum-based scrolling for a given element.\n\n**Syntax**: `auto | touch`\n\n**Initial value**: `auto`',
                  enum: [
                    '-moz-initial',
                    'auto',
                    'inherit',
                    'initial',
                    'revert',
                    'touch',
                    'unset',
                  ],
                  type: 'string',
                },
                WebkitPaddingEnd: {
                  description:
                    "The **`padding-inline-end`** CSS property defines the logical inline end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation. It corresponds to the `padding-top`, `padding-right`, `padding-bottom`, or `padding-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'padding-left'>`\n\n**Initial value**: `0`",
                  type: ['string', 'number'],
                },
                WebkitPaddingStart: {
                  description:
                    "The **`padding-inline-start`** CSS property defines the logical inline start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation. It corresponds to the `padding-top`, `padding-right`, `padding-bottom`, or `padding-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'padding-left'>`\n\n**Initial value**: `0`",
                  type: ['string', 'number'],
                },
                WebkitPerspective: {
                  description:
                    'The **`perspective`** CSS property determines the distance between the z=0 plane and the user in order to give a 3D-positioned element some perspective. Each 3D element with z>0 becomes larger; each 3D-element with z<0 becomes smaller. The strength of the effect is determined by the value of this property.\n\n**Syntax**: `none | <length>`\n\n**Initial value**: `none`',
                  type: ['string', 'number'],
                },
                WebkitPerspectiveOrigin: {
                  description:
                    'The **`perspective-origin`** CSS property determines the position at which the viewer is looking. It is used as the _vanishing point_ by the `perspective` property.\n\n**Syntax**: `<position>`\n\n**Initial value**: `50% 50%`',
                  type: ['string', 'number'],
                },
                WebkitPrintColorAdjust: {
                  description:
                    "The **`color-adjust`** CSS property sets what, if anything, the user agent may do to optimize the appearance of the element on the output device. By default, the browser is allowed to make any adjustments to the element's appearance it determines to be necessary and prudent given the type and capabilities of the output device.\n\n**Syntax**: `economy | exact`\n\n**Initial value**: `economy`",
                  enum: [
                    '-moz-initial',
                    'economy',
                    'exact',
                    'inherit',
                    'initial',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                WebkitRubyPosition: {
                  description:
                    'The `**ruby-position**` CSS property defines the position of a ruby element relatives to its base element. It can be position over the element (`over`), under it (`under`), or between the characters, on their right side (`inter-character`).\n\n**Syntax**: `over | under | inter-character`\n\n**Initial value**: `over`',
                  enum: [
                    '-moz-initial',
                    'inherit',
                    'initial',
                    'over',
                    'revert',
                    'under',
                    'unset',
                  ],
                  type: 'string',
                },
                WebkitScrollSnapType: {
                  description:
                    'The **`scroll-snap-type`** CSS property sets how strictly snap points are enforced on the scroll container in case there is one.\n\n**Syntax**: `none | [ x | y | block | inline | both ] [ mandatory | proximity ]?`\n\n**Initial value**: `none`',
                  type: 'string',
                },
                WebkitShapeMargin: {
                  description:
                    'The **`shape-margin`** CSS property sets a margin for a CSS shape created using `shape-outside`.\n\n**Syntax**: `<length-percentage>`\n\n**Initial value**: `0`',
                  type: ['string', 'number'],
                },
                WebkitTapHighlightColor: {
                  description:
                    "**`-webkit-tap-highlight-color`** is a non-standard CSS property that sets the color of the highlight that appears over a link while it's being tapped. The highlighting indicates to the user that their tap is being successfully recognized, and indicates which element they're tapping on.\n\n**Syntax**: `<color>`\n\n**Initial value**: `black`",
                  type: 'string',
                },
                WebkitTextCombine: {
                  description:
                    'The **`text-combine-upright`** CSS property sets the combination of characters into the space of a single character. If the combined text is wider than 1em, the user agent must fit the contents within 1em. The resulting composition is treated as a single upright glyph for layout and decoration. This property only has an effect in vertical writing modes.\n\n**Syntax**: `none | all | [ digits <integer>? ]`\n\n**Initial value**: `none`',
                  type: 'string',
                },
                WebkitTextDecorationColor: {
                  description:
                    'The **`text-decoration-color`** CSS property sets the color of decorations added to text by `text-decoration-line`.\n\n**Syntax**: `<color>`\n\n**Initial value**: `currentcolor`',
                  type: 'string',
                },
                WebkitTextDecorationLine: {
                  description:
                    'The **`text-decoration-line`** CSS property sets the kind of decoration that is used on text in an element, such as an underline or overline.\n\n**Syntax**: `none | [ underline || overline || line-through || blink ] | spelling-error | grammar-error`\n\n**Initial value**: `none`',
                  type: 'string',
                },
                WebkitTextDecorationSkip: {
                  description:
                    'The **`text-decoration-skip`** CSS property sets what parts of an element’s content any text decoration affecting the element must skip over. It controls all text decoration lines drawn by the element and also any text decoration lines drawn by its ancestors.\n\n**Syntax**: `none | [ objects || [ spaces | [ leading-spaces || trailing-spaces ] ] || edges || box-decoration ]`\n\n**Initial value**: `objects`',
                  type: 'string',
                },
                WebkitTextDecorationStyle: {
                  description:
                    'The **`text-decoration-style`** CSS property sets the style of the lines specified by `text-decoration-line`. The style applies to all lines that are set with `text-decoration-line`.\n\n**Syntax**: `solid | double | dotted | dashed | wavy`\n\n**Initial value**: `solid`',
                  enum: [
                    '-moz-initial',
                    'dashed',
                    'dotted',
                    'double',
                    'inherit',
                    'initial',
                    'revert',
                    'solid',
                    'unset',
                    'wavy',
                  ],
                  type: 'string',
                },
                WebkitTextEmphasisColor: {
                  description:
                    'The **`text-emphasis-color`** CSS property sets the color of emphasis marks. This value can also be set using the `text-emphasis` shorthand.\n\n**Syntax**: `<color>`\n\n**Initial value**: `currentcolor`',
                  type: 'string',
                },
                WebkitTextEmphasisPosition: {
                  description:
                    "The **`text-emphasis-position`** CSS property sets where emphasis marks are drawn. Like ruby text, if there isn't enough room for emphasis marks, the line height is increased.\n\n**Syntax**: `[ over | under ] && [ right | left ]`\n\n**Initial value**: `over right`",
                  type: 'string',
                },
                WebkitTextEmphasisStyle: {
                  description:
                    'The **`text-emphasis-style`** CSS property sets the appearance of emphasis marks. It can also be set, and reset, using the `text-emphasis` shorthand.\n\n**Syntax**: `none | [ [ filled | open ] || [ dot | circle | double-circle | triangle | sesame ] ] | <string>`\n\n**Initial value**: `none`',
                  type: 'string',
                },
                WebkitTextFillColor: {
                  description:
                    'The **`-webkit-text-fill-color`** CSS property specifies the fill color of characters of text. If this property is not set, the value of the `color` property is used.\n\n**Syntax**: `<color>`\n\n**Initial value**: `currentcolor`',
                  type: 'string',
                },
                WebkitTextOrientation: {
                  description:
                    'The **`text-orientation`** CSS property sets the orientation of the text characters in a line. It only affects text in vertical mode (when `writing-mode` is not `horizontal-tb`). It is useful for controlling the display of languages that use vertical script, and also for making vertical table headers.\n\n**Syntax**: `mixed | upright | sideways`\n\n**Initial value**: `mixed`',
                  enum: [
                    '-moz-initial',
                    'inherit',
                    'initial',
                    'mixed',
                    'revert',
                    'sideways',
                    'unset',
                    'upright',
                  ],
                  type: 'string',
                },
                WebkitTextSizeAdjust: {
                  description:
                    'The **`text-size-adjust`** CSS property controls the text inflation algorithm used on some smartphones and tablets. Other browsers will ignore this property.\n\n**Syntax**: `none | auto | <percentage>`\n\n**Initial value**: `auto` for smartphone browsers supporting inflation, `none` in other cases (and then not modifiable).',
                  type: 'string',
                },
                WebkitTextStrokeColor: {
                  description:
                    'The **`-webkit-text-stroke-color`** CSS property specifies the stroke color of characters of text. If this property is not set, the value of the `color` property is used.\n\n**Syntax**: `<color>`\n\n**Initial value**: `currentcolor`',
                  type: 'string',
                },
                WebkitTextStrokeWidth: {
                  description:
                    'The **`-webkit-text-stroke-width`** CSS property specifies the width of the stroke for text.\n\n**Syntax**: `<length>`\n\n**Initial value**: `0`',
                  type: ['string', 'number'],
                },
                WebkitTextUnderlinePosition: {
                  description:
                    "The **`text-underline-position`** CSS property specifies the position of the underline which is set using the `text-decoration` property's `underline` value.\n\n**Syntax**: `auto | from-font | [ under || [ left | right ] ]`\n\n**Initial value**: `auto`",
                  type: 'string',
                },
                WebkitTouchCallout: {
                  description:
                    'The `-webkit-touch-callout` CSS property controls the display of the default callout shown when you touch and hold a touch target.\n\n**Syntax**: `default | none`\n\n**Initial value**: `default`',
                  enum: [
                    '-moz-initial',
                    'default',
                    'inherit',
                    'initial',
                    'none',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                WebkitTransform: {
                  description:
                    'The **`transform`** CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.\n\n**Syntax**: `none | <transform-list>`\n\n**Initial value**: `none`',
                  type: 'string',
                },
                WebkitTransformOrigin: {
                  description:
                    "The **`transform-origin`** CSS property sets the origin for an element's transformations.\n\n**Syntax**: `[ <length-percentage> | left | center | right | top | bottom ] | [ [ <length-percentage> | left | center | right ] && [ <length-percentage> | top | center | bottom ] ] <length>?`\n\n**Initial value**: `50% 50% 0`",
                  type: ['string', 'number'],
                },
                WebkitTransformStyle: {
                  description:
                    'The **`transform-style`** CSS property sets whether children of an element are positioned in the 3D space or are flattened in the plane of the element.\n\n**Syntax**: `flat | preserve-3d`\n\n**Initial value**: `flat`',
                  enum: [
                    '-moz-initial',
                    'flat',
                    'inherit',
                    'initial',
                    'preserve-3d',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                WebkitTransitionDelay: {
                  description:
                    "The **`transition-delay`** CSS property specifies the duration to wait before starting a property's transition effect when its value changes.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`",
                  type: 'string',
                },
                WebkitTransitionDuration: {
                  description:
                    'The **`transition-duration`** CSS property sets the length of time a transition animation should take to complete. By default, the value is `0s`, meaning that no animation will occur.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`',
                  type: 'string',
                },
                WebkitTransitionProperty: {
                  description:
                    'The **`transition-property`** CSS property sets the CSS properties to which a transition effect should be applied.\n\n**Syntax**: `none | <single-transition-property>#`\n\n**Initial value**: all',
                  type: 'string',
                },
                WebkitTransitionTimingFunction: {
                  description:
                    'The **`transition-timing-function`** CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect.\n\n**Syntax**: `<timing-function>#`\n\n**Initial value**: `ease`',
                  type: 'string',
                },
                WebkitUserModify: {
                  description:
                    '**Syntax**: `read-only | read-write | read-write-plaintext-only`\n\n**Initial value**: `read-only`',
                  enum: [
                    '-moz-initial',
                    'inherit',
                    'initial',
                    'read-only',
                    'read-write',
                    'read-write-plaintext-only',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                WebkitUserSelect: {
                  description:
                    "The `**user-select**` CSS property controls whether the user can select text. This doesn't have any effect on content loaded as chrome, except in textboxes.\n\n**Syntax**: `auto | text | none | contain | all`\n\n**Initial value**: `auto`",
                  enum: [
                    '-moz-initial',
                    '-moz-none',
                    'all',
                    'auto',
                    'contain',
                    'element',
                    'inherit',
                    'initial',
                    'none',
                    'revert',
                    'text',
                    'unset',
                  ],
                  type: 'string',
                },
                WebkitWritingMode: {
                  description:
                    'The **`writing-mode`** CSS property sets whether lines of text are laid out horizontally or vertically, as well as the direction in which blocks progress.\n\n**Syntax**: `horizontal-tb | vertical-rl | vertical-lr | sideways-rl | sideways-lr`\n\n**Initial value**: `horizontal-tb`',
                  enum: [
                    '-moz-initial',
                    'horizontal-tb',
                    'inherit',
                    'initial',
                    'revert',
                    'sideways-lr',
                    'sideways-rl',
                    'unset',
                    'vertical-lr',
                    'vertical-rl',
                  ],
                  type: 'string',
                },
                MozAnimation: {
                  description:
                    'The **`animation`** shorthand CSS property sets an animated transition between styles. It is a shorthand for `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, and `animation-play-state`.\n\n**Syntax**: `<single-animation>#`',
                  type: ['string', 'number'],
                },
                MozBorderImage: {
                  description:
                    "The **`border-image`** CSS property draws an image in place of an element's `border-style`.\n\n**Syntax**: `<'border-image-source'> || <'border-image-slice'> [ / <'border-image-width'> | / <'border-image-width'>? / <'border-image-outset'> ]? || <'border-image-repeat'>`",
                  type: ['string', 'number'],
                },
                MozColumnRule: {
                  description:
                    "The **`column-rule`** CSS property sets the width, style, and color of the rule (line) drawn between columns in a multi-column layout.\n\n**Syntax**: `<'column-rule-width'> || <'column-rule-style'> || <'column-rule-color'>`",
                  type: ['string', 'number'],
                },
                MozColumns: {
                  description:
                    "The **`columns`** CSS property sets the column width and column count of an element.\n\n**Syntax**: `<'column-width'> || <'column-count'>`",
                  type: ['string', 'number'],
                },
                MozTransition: {
                  description:
                    'The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.\n\n**Syntax**: `<single-transition>#`',
                  type: 'string',
                },
                msContentZoomLimit: {
                  description:
                    "The **`-ms-content-zoom-limit`** CSS shorthand property is a Microsoft extension that specifies values for the `-ms-content-zoom-limit-min` and `-ms-content-zoom-limit-max` properties.\n\n**Syntax**: `<'-ms-content-zoom-limit-min'> <'-ms-content-zoom-limit-max'>`",
                  type: 'string',
                },
                msContentZoomSnap: {
                  description:
                    "The **`-ms-content-zoom-snap`** CSS shorthand property is a Microsoft extension that specifies values for the `-ms-content-zoom-snap-type` and `-ms-content-zoom-snap-points` properties.\n\n**Syntax**: `<'-ms-content-zoom-snap-type'> || <'-ms-content-zoom-snap-points'>`",
                  type: 'string',
                },
                msFlex: {
                  description:
                    "The **`flex`** CSS property sets how a flex item will grow or shrink to fit the space available in its flex container. It is a shorthand for `flex-grow`, `flex-shrink`, and `flex-basis`.\n\n**Syntax**: `none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]`",
                  type: ['string', 'number'],
                },
                msScrollLimit: {
                  description:
                    "The **\\-ms-scroll-limit** CSS property is a Microsoft extension that specifies values for the `-ms-scroll-limit-x-min`, `-ms-scroll-limit-y-min`, `-ms-scroll-limit-x-max`, and `-ms-scroll-limit-y-max` properties.\n\n**Syntax**: `<'-ms-scroll-limit-x-min'> <'-ms-scroll-limit-y-min'> <'-ms-scroll-limit-x-max'> <'-ms-scroll-limit-y-max'>`",
                  type: 'string',
                },
                msScrollSnapX: {
                  description:
                    "The **`-ms-scroll-snap-x`** CSS shorthand property is a Microsoft extension that specifies values for the `-ms-scroll-snap-type` and `-ms-scroll-snap-points-x` properties.\n\n**Syntax**: `<'-ms-scroll-snap-type'> <'-ms-scroll-snap-points-x'>`",
                  type: 'string',
                },
                msScrollSnapY: {
                  description:
                    "The **`-ms-scroll-snap-x`** CSS shorthand property is a Microsoft extension that specifies values for the `-ms-scroll-snap-type` and `-ms-scroll-snap-points-y` properties.\n\n**Syntax**: `<'-ms-scroll-snap-type'> <'-ms-scroll-snap-points-y'>`",
                  type: 'string',
                },
                msTransition: {
                  description:
                    'The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.\n\n**Syntax**: `<single-transition>#`',
                  type: 'string',
                },
                WebkitAnimation: {
                  description:
                    'The **`animation`** shorthand CSS property sets an animated transition between styles. It is a shorthand for `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, and `animation-play-state`.\n\n**Syntax**: `<single-animation>#`',
                  type: ['string', 'number'],
                },
                WebkitBorderBefore: {
                  description:
                    "The **`-webkit-border-before`** CSS property is a shorthand property for setting the individual logical block start border property values in a single place in the style sheet.\n\n**Syntax**: `<'border-width'> || <'border-style'> || <'color'>`",
                  type: ['string', 'number'],
                },
                WebkitBorderImage: {
                  description:
                    "The **`border-image`** CSS property draws an image in place of an element's `border-style`.\n\n**Syntax**: `<'border-image-source'> || <'border-image-slice'> [ / <'border-image-width'> | / <'border-image-width'>? / <'border-image-outset'> ]? || <'border-image-repeat'>`",
                  type: ['string', 'number'],
                },
                WebkitBorderRadius: {
                  description:
                    "The **`border-radius`** CSS property rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners.\n\n**Syntax**: `<length-percentage>{1,4} [ / <length-percentage>{1,4} ]?`",
                  type: ['string', 'number'],
                },
                WebkitColumnRule: {
                  description:
                    "The **`column-rule`** CSS property sets the width, style, and color of the rule (line) drawn between columns in a multi-column layout.\n\n**Syntax**: `<'column-rule-width'> || <'column-rule-style'> || <'column-rule-color'>`",
                  type: ['string', 'number'],
                },
                WebkitColumns: {
                  description:
                    "The **`columns`** CSS property sets the column width and column count of an element.\n\n**Syntax**: `<'column-width'> || <'column-count'>`",
                  type: ['string', 'number'],
                },
                WebkitFlex: {
                  description:
                    "The **`flex`** CSS property sets how a flex item will grow or shrink to fit the space available in its flex container. It is a shorthand for `flex-grow`, `flex-shrink`, and `flex-basis`.\n\n**Syntax**: `none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]`",
                  type: ['string', 'number'],
                },
                WebkitFlexFlow: {
                  description:
                    "The **`flex-flow`** CSS property is a shorthand property for `flex-direction` and `flex-wrap` properties.\n\n**Syntax**: `<'flex-direction'> || <'flex-wrap'>`",
                  type: 'string',
                },
                WebkitMask: {
                  description:
                    'The **`mask`** CSS property hides an element (partially or fully) by masking or clipping the image at specific points.\n\n**Syntax**: `[ <mask-reference> || <position> [ / <bg-size> ]? || <repeat-style> || [ <box> | border | padding | content | text ] || [ <box> | border | padding | content ] ]#`',
                  type: ['string', 'number'],
                },
                WebkitTextEmphasis: {
                  description:
                    "The **`text-emphasis`** CSS property applies emphasis marks to text (except spaces and control characters). It is a shorthand for `text-emphasis-style` and `text-emphasis-color`.\n\n**Syntax**: `<'text-emphasis-style'> || <'text-emphasis-color'>`",
                  type: 'string',
                },
                WebkitTextStroke: {
                  description:
                    'The **`-webkit-text-stroke`** CSS property specifies the width and color of strokes for text characters. This is a shorthand property for the longhand properties `-webkit-text-stroke-width` and `-webkit-text-stroke-color`.\n\n**Syntax**: `<length> || <color>`',
                  type: ['string', 'number'],
                },
                WebkitTransition: {
                  description:
                    'The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.\n\n**Syntax**: `<single-transition>#`',
                  type: 'string',
                },
                azimuth: {
                  description:
                    'In combination with `elevation`, the **`azimuth`** CSS property enables different audio sources to be positioned spatially for aural presentation. This is important in that it provides a natural way to tell several voices apart, as each can be positioned to originate at a different location on the sound stage. Stereo output produce a lateral sound stage, while binaural headphones and multi-speaker setups allow for a fully three-dimensional stage.\n\n**Syntax**: `<angle> | [ [ left-side | far-left | left | center-left | center | center-right | right | far-right | right-side ] || behind ] | leftwards | rightwards`\n\n**Initial value**: `center`',
                  type: 'string',
                },
                boxAlign: {
                  description:
                    'The **`box-align`** CSS property specifies how an element aligns its contents across its layout in a perpendicular direction. The effect of the property is only visible if there is extra space in the box.\n\n**Syntax**: `start | center | end | baseline | stretch`\n\n**Initial value**: `stretch`',
                  enum: [
                    '-moz-initial',
                    'baseline',
                    'center',
                    'end',
                    'inherit',
                    'initial',
                    'revert',
                    'start',
                    'stretch',
                    'unset',
                  ],
                  type: 'string',
                },
                boxDirection: {
                  description:
                    'The **`box-direction`** CSS property specifies whether a box lays out its contents normally (from the top or left edge), or in reverse (from the bottom or right edge).\n\n**Syntax**: `normal | reverse | inherit`\n\n**Initial value**: `normal`',
                  enum: [
                    '-moz-initial',
                    'inherit',
                    'initial',
                    'normal',
                    'reverse',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                boxFlex: {
                  description:
                    "The **`-moz-box-flex`** and **`-webkit-box-flex`** CSS properties specify how a `-moz-box` or `-webkit-box` grows to fill the box that contains it, in the direction of the containing box's layout.\n\n**Syntax**: `<number>`\n\n**Initial value**: `0`",
                  anyOf: [
                    {
                      enum: [
                        '-moz-initial',
                        'inherit',
                        'initial',
                        'revert',
                        'unset',
                      ],
                      type: 'string',
                    },
                    {
                      type: 'number',
                    },
                  ],
                },
                boxFlexGroup: {
                  description:
                    "The **`box-flex-group`** CSS property assigns the flexbox's child elements to a flex group.\n\n**Syntax**: `<integer>`\n\n**Initial value**: `1`",
                  anyOf: [
                    {
                      enum: [
                        '-moz-initial',
                        'inherit',
                        'initial',
                        'revert',
                        'unset',
                      ],
                      type: 'string',
                    },
                    {
                      type: 'number',
                    },
                  ],
                },
                boxLines: {
                  description:
                    'The **`box-lines`** CSS property determines whether the box may have a single or multiple lines (rows for horizontally oriented boxes, columns for vertically oriented boxes).\n\n**Syntax**: `single | multiple`\n\n**Initial value**: `single`',
                  enum: [
                    '-moz-initial',
                    'inherit',
                    'initial',
                    'multiple',
                    'revert',
                    'single',
                    'unset',
                  ],
                  type: 'string',
                },
                boxOrdinalGroup: {
                  description:
                    "The **`box-ordinal-group`** CSS property assigns the flexbox's child elements to an ordinal group.\n\n**Syntax**: `<integer>`\n\n**Initial value**: `1`",
                  anyOf: [
                    {
                      enum: [
                        '-moz-initial',
                        'inherit',
                        'initial',
                        'revert',
                        'unset',
                      ],
                      type: 'string',
                    },
                    {
                      type: 'number',
                    },
                  ],
                },
                boxOrient: {
                  description:
                    'The **`box-orient`** CSS property specifies whether an element lays out its contents horizontally or vertically.\n\n**Syntax**: `horizontal | vertical | inline-axis | block-axis | inherit`\n\n**Initial value**: `inline-axis` (`horizontal` in XUL)',
                  enum: [
                    '-moz-initial',
                    'block-axis',
                    'horizontal',
                    'inherit',
                    'initial',
                    'inline-axis',
                    'revert',
                    'unset',
                    'vertical',
                  ],
                  type: 'string',
                },
                boxPack: {
                  description:
                    'The **`-moz-box-pack`** and **`-webkit-box-pack`** CSS properties specify how a `-moz-box` or `-webkit-box` packs its contents in the direction of its layout. The effect of this is only visible if there is extra space in the box.\n\n**Syntax**: `start | center | end | justify`\n\n**Initial value**: `start`',
                  enum: [
                    '-moz-initial',
                    'center',
                    'end',
                    'inherit',
                    'initial',
                    'justify',
                    'revert',
                    'start',
                    'unset',
                  ],
                  type: 'string',
                },
                clip: {
                  description:
                    'The **`clip`** CSS property defines what portion of an element is visible. The `clip` property applies only to absolutely positioned elements, that is elements with `position:absolute` or `position:fixed`.\n\n**Syntax**: `<shape> | auto`\n\n**Initial value**: `auto`',
                  type: 'string',
                },
                fontVariantAlternates: {
                  description:
                    'The **`font-variant-alternates`** CSS property controls the usage of alternate glyphs. These alternate glyphs may be referenced by alternative names defined in `@font-feature-values`.\n\n**Syntax**: `normal | [ stylistic( <feature-value-name> ) || historical-forms || styleset( <feature-value-name># ) || character-variant( <feature-value-name># ) || swash( <feature-value-name> ) || ornaments( <feature-value-name> ) || annotation( <feature-value-name> ) ]`\n\n**Initial value**: `normal`',
                  type: 'string',
                },
                gridColumnGap: {
                  description:
                    "The **`column-gap`** CSS property sets the size of the gap (gutter) between an element's columns.\n\n**Syntax**: `<length-percentage>`\n\n**Initial value**: `0`",
                  type: ['string', 'number'],
                },
                gridGap: {
                  description:
                    "The **`gap`** CSS property sets the gaps (gutters) between rows and columns. It is a shorthand for `row-gap` and `column-gap`.\n\n**Syntax**: `<'grid-row-gap'> <'grid-column-gap'>?`",
                  type: ['string', 'number'],
                },
                gridRowGap: {
                  description:
                    "The **`row-gap`** CSS property sets the size of the gap (gutter) between an element's grid rows.\n\n**Syntax**: `<length-percentage>`\n\n**Initial value**: `0`",
                  type: ['string', 'number'],
                },
                imeMode: {
                  description:
                    'The **`ime-mode`** CSS property controls the state of the input method editor (IME) for text fields. This property is obsolete.\n\n**Syntax**: `auto | normal | active | inactive | disabled`\n\n**Initial value**: `auto`',
                  enum: [
                    '-moz-initial',
                    'active',
                    'auto',
                    'disabled',
                    'inactive',
                    'inherit',
                    'initial',
                    'normal',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                offsetBlock: {
                  description:
                    "The **`inset-block`** CSS property defines the logical block start and end offsets of an element, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top` and `bottom`, or `right` and `left` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'top'>{1,2}`\n\n**Initial value**: `auto`",
                  type: ['string', 'number'],
                },
                offsetBlockEnd: {
                  description:
                    "The **`inset-block-end`** CSS property defines the logical block end offset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'top'>`\n\n**Initial value**: `auto`",
                  type: ['string', 'number'],
                },
                offsetBlockStart: {
                  description:
                    "The **`inset-block-start`** CSS property defines the logical block start offset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'top'>`\n\n**Initial value**: `auto`",
                  type: ['string', 'number'],
                },
                offsetInline: {
                  description:
                    "The **`inset-inline`** CSS property defines the logical block start and end offsets of an element, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top` and `bottom`, or `right` and `left` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'top'>{1,2}`\n\n**Initial value**: `auto`",
                  type: ['string', 'number'],
                },
                offsetInlineEnd: {
                  description:
                    "The **`inset-inline-end`** CSS property defines the logical inline end inset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'top'>`\n\n**Initial value**: `auto`",
                  type: ['string', 'number'],
                },
                offsetInlineStart: {
                  description:
                    "The **`inset-inline-start`** CSS property defines the logical inline start inset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'top'>`\n\n**Initial value**: `auto`",
                  type: ['string', 'number'],
                },
                scrollSnapCoordinate: {
                  description:
                    "The **`scroll-snap-coordinate`** CSS property defines the x and y coordinate positions within an element that will align with its nearest ancestor scroll container's `scroll-snap-destination` for each respective axis.\n\n**Syntax**: `none | <position>#`\n\n**Initial value**: `none`",
                  type: ['string', 'number'],
                },
                scrollSnapDestination: {
                  description:
                    "The **`scroll-snap-destination`** CSS property defines the position in x and y coordinates within the scroll container's visual viewport which element snap points align with.\n\n**Syntax**: `<position>`\n\n**Initial value**: `0px 0px`",
                  type: ['string', 'number'],
                },
                scrollSnapPointsX: {
                  description:
                    'The **`scroll-snap-points-x`** CSS property defines the horizontal positioning of snap points within the content of the scroll container they are applied to.\n\n**Syntax**: `none | repeat( <length-percentage> )`\n\n**Initial value**: `none`',
                  type: 'string',
                },
                scrollSnapPointsY: {
                  description:
                    'The **`scroll-snap-points-y`** CSS property defines the vertical positioning of snap points within the content of the scroll container they are applied to.\n\n**Syntax**: `none | repeat( <length-percentage> )`\n\n**Initial value**: `none`',
                  type: 'string',
                },
                scrollSnapTypeX: {
                  description:
                    'The **`scroll-snap-type-x`** CSS property defines how strictly snap points are enforced on the horizontal axis of the scroll container in case there is one.\n\n**Syntax**: `none | mandatory | proximity`\n\n**Initial value**: `none`',
                  enum: [
                    '-moz-initial',
                    'inherit',
                    'initial',
                    'mandatory',
                    'none',
                    'proximity',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                scrollSnapTypeY: {
                  description:
                    'The **`scroll-snap-type-y`** CSS property defines how strictly snap points are enforced on the vertical axis of the scroll container in case there is one.\n\n**Syntax**: `none | mandatory | proximity`\n\n**Initial value**: `none`',
                  enum: [
                    '-moz-initial',
                    'inherit',
                    'initial',
                    'mandatory',
                    'none',
                    'proximity',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                scrollbarTrackColor: {
                  description:
                    'The **`-ms-scrollbar-track-color`** CSS property is a Microsoft extension that specifies the color of the track element of a scrollbar.\n\n**Syntax**: `<color>`\n\n**Initial value**: `Scrollbar`',
                  type: 'string',
                },
                textCombineHorizontal: {
                  description:
                    'The **`text-combine-upright`** CSS property sets the combination of characters into the space of a single character. If the combined text is wider than 1em, the user agent must fit the contents within 1em. The resulting composition is treated as a single upright glyph for layout and decoration. This property only has an effect in vertical writing modes.\n\n**Syntax**: `none | all | [ digits <integer>? ]`\n\n**Initial value**: `none`',
                  type: 'string',
                },
                KhtmlBoxAlign: {
                  description:
                    'The **`box-align`** CSS property specifies how an element aligns its contents across its layout in a perpendicular direction. The effect of the property is only visible if there is extra space in the box.\n\n**Syntax**: `start | center | end | baseline | stretch`\n\n**Initial value**: `stretch`',
                  enum: [
                    '-moz-initial',
                    'baseline',
                    'center',
                    'end',
                    'inherit',
                    'initial',
                    'revert',
                    'start',
                    'stretch',
                    'unset',
                  ],
                  type: 'string',
                },
                KhtmlBoxDirection: {
                  description:
                    'The **`box-direction`** CSS property specifies whether a box lays out its contents normally (from the top or left edge), or in reverse (from the bottom or right edge).\n\n**Syntax**: `normal | reverse | inherit`\n\n**Initial value**: `normal`',
                  enum: [
                    '-moz-initial',
                    'inherit',
                    'initial',
                    'normal',
                    'reverse',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                KhtmlBoxFlex: {
                  description:
                    "The **`-moz-box-flex`** and **`-webkit-box-flex`** CSS properties specify how a `-moz-box` or `-webkit-box` grows to fill the box that contains it, in the direction of the containing box's layout.\n\n**Syntax**: `<number>`\n\n**Initial value**: `0`",
                  anyOf: [
                    {
                      enum: [
                        '-moz-initial',
                        'inherit',
                        'initial',
                        'revert',
                        'unset',
                      ],
                      type: 'string',
                    },
                    {
                      type: 'number',
                    },
                  ],
                },
                KhtmlBoxFlexGroup: {
                  description:
                    "The **`box-flex-group`** CSS property assigns the flexbox's child elements to a flex group.\n\n**Syntax**: `<integer>`\n\n**Initial value**: `1`",
                  anyOf: [
                    {
                      enum: [
                        '-moz-initial',
                        'inherit',
                        'initial',
                        'revert',
                        'unset',
                      ],
                      type: 'string',
                    },
                    {
                      type: 'number',
                    },
                  ],
                },
                KhtmlBoxLines: {
                  description:
                    'The **`box-lines`** CSS property determines whether the box may have a single or multiple lines (rows for horizontally oriented boxes, columns for vertically oriented boxes).\n\n**Syntax**: `single | multiple`\n\n**Initial value**: `single`',
                  enum: [
                    '-moz-initial',
                    'inherit',
                    'initial',
                    'multiple',
                    'revert',
                    'single',
                    'unset',
                  ],
                  type: 'string',
                },
                KhtmlBoxOrdinalGroup: {
                  description:
                    "The **`box-ordinal-group`** CSS property assigns the flexbox's child elements to an ordinal group.\n\n**Syntax**: `<integer>`\n\n**Initial value**: `1`",
                  anyOf: [
                    {
                      enum: [
                        '-moz-initial',
                        'inherit',
                        'initial',
                        'revert',
                        'unset',
                      ],
                      type: 'string',
                    },
                    {
                      type: 'number',
                    },
                  ],
                },
                KhtmlBoxOrient: {
                  description:
                    'The **`box-orient`** CSS property specifies whether an element lays out its contents horizontally or vertically.\n\n**Syntax**: `horizontal | vertical | inline-axis | block-axis | inherit`\n\n**Initial value**: `inline-axis` (`horizontal` in XUL)',
                  enum: [
                    '-moz-initial',
                    'block-axis',
                    'horizontal',
                    'inherit',
                    'initial',
                    'inline-axis',
                    'revert',
                    'unset',
                    'vertical',
                  ],
                  type: 'string',
                },
                KhtmlBoxPack: {
                  description:
                    'The **`-moz-box-pack`** and **`-webkit-box-pack`** CSS properties specify how a `-moz-box` or `-webkit-box` packs its contents in the direction of its layout. The effect of this is only visible if there is extra space in the box.\n\n**Syntax**: `start | center | end | justify`\n\n**Initial value**: `start`',
                  enum: [
                    '-moz-initial',
                    'center',
                    'end',
                    'inherit',
                    'initial',
                    'justify',
                    'revert',
                    'start',
                    'unset',
                  ],
                  type: 'string',
                },
                KhtmlLineBreak: {
                  description:
                    'The **`line-break`** CSS property sets how to break lines of Chinese, Japanese, or Korean (CJK) text when working with punctuation and symbols.\n\n**Syntax**: `auto | loose | normal | strict | anywhere`\n\n**Initial value**: `auto`',
                  enum: [
                    '-moz-initial',
                    'anywhere',
                    'auto',
                    'inherit',
                    'initial',
                    'loose',
                    'normal',
                    'revert',
                    'strict',
                    'unset',
                  ],
                  type: 'string',
                },
                KhtmlOpacity: {
                  description:
                    'The **`opacity`** CSS property sets the transparency of an element or the degree to which content behind an element is visible.\n\n**Syntax**: `<alpha-value>`\n\n**Initial value**: `1.0`',
                  type: ['string', 'number'],
                },
                KhtmlUserSelect: {
                  description:
                    "The `**user-select**` CSS property controls whether the user can select text. This doesn't have any effect on content loaded as chrome, except in textboxes.\n\n**Syntax**: `auto | text | none | contain | all`\n\n**Initial value**: `auto`",
                  enum: [
                    '-moz-initial',
                    '-moz-none',
                    'all',
                    'auto',
                    'contain',
                    'element',
                    'inherit',
                    'initial',
                    'none',
                    'revert',
                    'text',
                    'unset',
                  ],
                  type: 'string',
                },
                MozBackgroundClip: {
                  description:
                    "The **`background-clip`** CSS property sets whether an element's background `<color>` or `<image>` extends underneath its border.\n\n**Syntax**: `<box>#`\n\n**Initial value**: `border-box`",
                  type: 'string',
                },
                MozBackgroundInlinePolicy: {
                  description:
                    "The **`box-decoration-break`** CSS property specifies how an element's fragments should be rendered when broken across multiple lines, columns, or pages.\n\n**Syntax**: `slice | clone`\n\n**Initial value**: `slice`",
                  enum: [
                    '-moz-initial',
                    'clone',
                    'inherit',
                    'initial',
                    'revert',
                    'slice',
                    'unset',
                  ],
                  type: 'string',
                },
                MozBackgroundOrigin: {
                  description:
                    'The **`background-origin`** CSS property sets the _background positioning area_. In other words, it sets the origin position of an image set with the `background-image` property.\n\n**Syntax**: `<box>#`\n\n**Initial value**: `padding-box`',
                  type: 'string',
                },
                MozBackgroundSize: {
                  description:
                    "The **`background-size`** CSS property sets the size of the element's background image. The image can be left to its natural size, stretched, or constrained to fit the available space.\n\n**Syntax**: `<bg-size>#`\n\n**Initial value**: `auto auto`",
                  type: ['string', 'number'],
                },
                MozBinding: {
                  description:
                    'The **`-moz-binding`** CSS property is used by Mozilla-based applications to attach an XBL binding to a DOM element.\n\n**Syntax**: `<url> | none`\n\n**Initial value**: `none`',
                  type: 'string',
                },
                MozBorderRadius: {
                  description:
                    "The **`border-radius`** CSS property rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners.\n\n**Syntax**: `<length-percentage>{1,4} [ / <length-percentage>{1,4} ]?`",
                  type: ['string', 'number'],
                },
                MozBorderRadiusBottomleft: {
                  description:
                    'The **`border-bottom-left-radius`** CSS property rounds the bottom-left corner of an element.\n\n**Syntax**: `<length-percentage>{1,2}`\n\n**Initial value**: `0`',
                  type: ['string', 'number'],
                },
                MozBorderRadiusBottomright: {
                  description:
                    'The **`border-bottom-right-radius`** CSS property rounds the bottom-right corner of an element.\n\n**Syntax**: `<length-percentage>{1,2}`\n\n**Initial value**: `0`',
                  type: ['string', 'number'],
                },
                MozBorderRadiusTopleft: {
                  description:
                    'The **`border-top-left-radius`** CSS property rounds the top-left corner of an element.\n\n**Syntax**: `<length-percentage>{1,2}`\n\n**Initial value**: `0`',
                  type: ['string', 'number'],
                },
                MozBorderRadiusTopright: {
                  description:
                    'The **`border-top-right-radius`** CSS property rounds the top-right corner of an element.\n\n**Syntax**: `<length-percentage>{1,2}`\n\n**Initial value**: `0`',
                  type: ['string', 'number'],
                },
                MozBoxAlign: {
                  description:
                    'The **`box-align`** CSS property specifies how an element aligns its contents across its layout in a perpendicular direction. The effect of the property is only visible if there is extra space in the box.\n\n**Syntax**: `start | center | end | baseline | stretch`\n\n**Initial value**: `stretch`',
                  enum: [
                    '-moz-initial',
                    'baseline',
                    'center',
                    'end',
                    'inherit',
                    'initial',
                    'revert',
                    'start',
                    'stretch',
                    'unset',
                  ],
                  type: 'string',
                },
                MozBoxDirection: {
                  description:
                    'The **`box-direction`** CSS property specifies whether a box lays out its contents normally (from the top or left edge), or in reverse (from the bottom or right edge).\n\n**Syntax**: `normal | reverse | inherit`\n\n**Initial value**: `normal`',
                  enum: [
                    '-moz-initial',
                    'inherit',
                    'initial',
                    'normal',
                    'reverse',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                MozBoxFlex: {
                  description:
                    "The **`-moz-box-flex`** and **`-webkit-box-flex`** CSS properties specify how a `-moz-box` or `-webkit-box` grows to fill the box that contains it, in the direction of the containing box's layout.\n\n**Syntax**: `<number>`\n\n**Initial value**: `0`",
                  anyOf: [
                    {
                      enum: [
                        '-moz-initial',
                        'inherit',
                        'initial',
                        'revert',
                        'unset',
                      ],
                      type: 'string',
                    },
                    {
                      type: 'number',
                    },
                  ],
                },
                MozBoxOrdinalGroup: {
                  description:
                    "The **`box-ordinal-group`** CSS property assigns the flexbox's child elements to an ordinal group.\n\n**Syntax**: `<integer>`\n\n**Initial value**: `1`",
                  anyOf: [
                    {
                      enum: [
                        '-moz-initial',
                        'inherit',
                        'initial',
                        'revert',
                        'unset',
                      ],
                      type: 'string',
                    },
                    {
                      type: 'number',
                    },
                  ],
                },
                MozBoxOrient: {
                  description:
                    'The **`box-orient`** CSS property specifies whether an element lays out its contents horizontally or vertically.\n\n**Syntax**: `horizontal | vertical | inline-axis | block-axis | inherit`\n\n**Initial value**: `inline-axis` (`horizontal` in XUL)',
                  enum: [
                    '-moz-initial',
                    'block-axis',
                    'horizontal',
                    'inherit',
                    'initial',
                    'inline-axis',
                    'revert',
                    'unset',
                    'vertical',
                  ],
                  type: 'string',
                },
                MozBoxPack: {
                  description:
                    'The **`-moz-box-pack`** and **`-webkit-box-pack`** CSS properties specify how a `-moz-box` or `-webkit-box` packs its contents in the direction of its layout. The effect of this is only visible if there is extra space in the box.\n\n**Syntax**: `start | center | end | justify`\n\n**Initial value**: `start`',
                  enum: [
                    '-moz-initial',
                    'center',
                    'end',
                    'inherit',
                    'initial',
                    'justify',
                    'revert',
                    'start',
                    'unset',
                  ],
                  type: 'string',
                },
                MozBoxShadow: {
                  description:
                    "The **`box-shadow`** CSS property adds shadow effects around an element's frame. You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radii, and color.\n\n**Syntax**: `none | <shadow>#`\n\n**Initial value**: `none`",
                  type: 'string',
                },
                MozFloatEdge: {
                  description:
                    'The non-standard **`-moz-float-edge`** CSS property specifies whether the height and width properties of the element include the margin, border, or padding thickness.\n\n**Syntax**: `border-box | content-box | margin-box | padding-box`\n\n**Initial value**: `content-box`',
                  enum: [
                    '-moz-initial',
                    'border-box',
                    'content-box',
                    'inherit',
                    'initial',
                    'margin-box',
                    'padding-box',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                MozForceBrokenImageIcon: {
                  description:
                    'The **`-moz-force-broken-image-icon`** extended CSS property can be used to force the broken image icon to be shown even when a broken image has an `alt` attribute.\n\n**Syntax**: `<integer [0,1]>`\n\n**Initial value**: `0`',
                  anyOf: [
                    {
                      enum: [
                        '-moz-initial',
                        'inherit',
                        'initial',
                        'revert',
                        'unset',
                      ],
                      type: 'string',
                    },
                    {
                      type: 'number',
                    },
                  ],
                },
                MozOpacity: {
                  description:
                    'The **`opacity`** CSS property sets the transparency of an element or the degree to which content behind an element is visible.\n\n**Syntax**: `<alpha-value>`\n\n**Initial value**: `1.0`',
                  type: ['string', 'number'],
                },
                MozOutline: {
                  description:
                    "The **`outline`** CSS property is a shorthand to set various outline properties in a single declaration: `outline-style`, `outline-width`, and `outline-color`.\n\n**Syntax**: `[ <'outline-color'> || <'outline-style'> || <'outline-width'> ]`",
                  type: ['string', 'number'],
                },
                MozOutlineColor: {
                  description:
                    "The **`outline-color`** CSS property sets the color of an element's outline.\n\n**Syntax**: `<color> | invert`\n\n**Initial value**: `invert`, for browsers supporting it, `currentColor` for the other",
                  type: 'string',
                },
                MozOutlineRadius: {
                  description:
                    "In Mozilla applications like Firefox, the **`-moz-outline-radius`** CSS property can be used to give an element's `outline` rounded corners.\n\n**Syntax**: `<outline-radius>{1,4} [ / <outline-radius>{1,4} ]?`",
                  type: ['string', 'number'],
                },
                MozOutlineRadiusBottomleft: {
                  description:
                    "In Mozilla applications, the **`-moz-outline-radius-bottomleft`** CSS property can be used to round the bottom-left corner of an element's `outline`.\n\n**Syntax**: `<outline-radius>`\n\n**Initial value**: `0`",
                  type: ['string', 'number'],
                },
                MozOutlineRadiusBottomright: {
                  description:
                    "In Mozilla applications, the **`-moz-outline-radius-bottomright`** CSS property can be used to round the bottom-right corner of an element's `outline`.\n\n**Syntax**: `<outline-radius>`\n\n**Initial value**: `0`",
                  type: ['string', 'number'],
                },
                MozOutlineRadiusTopleft: {
                  description:
                    "In Mozilla applications, the **`-moz-outline-radius-topleft`** CSS property can be used to round the top-left corner of an element's `outline`.\n\n**Syntax**: `<outline-radius>`\n\n**Initial value**: `0`",
                  type: ['string', 'number'],
                },
                MozOutlineRadiusTopright: {
                  description:
                    "In Mozilla applications, the **`-moz-outline-radius-topright`** CSS property can be used to round the top-right corner of an element's `outline`.\n\n**Syntax**: `<outline-radius>`\n\n**Initial value**: `0`",
                  type: ['string', 'number'],
                },
                MozOutlineStyle: {
                  description:
                    "The **`outline-style`** CSS property sets the style of an element's outline. An outline is a line that is drawn around an element, outside the `border`.\n\n**Syntax**: `auto | <'border-style'>`\n\n**Initial value**: `none`",
                  type: 'string',
                },
                MozOutlineWidth: {
                  description:
                    "The **`outline-width`** CSS property sets the thickness of an element's outline. An outline is a line that is drawn around an element, outside the `border`.\n\n**Syntax**: `<line-width>`\n\n**Initial value**: `medium`",
                  type: ['string', 'number'],
                },
                MozTextAlignLast: {
                  description:
                    'The **`text-align-last`** CSS property sets how the last line of a block or a line, right before a forced line break, is aligned.\n\n**Syntax**: `auto | start | end | left | right | center | justify`\n\n**Initial value**: `auto`',
                  enum: [
                    '-moz-initial',
                    'auto',
                    'center',
                    'end',
                    'inherit',
                    'initial',
                    'justify',
                    'left',
                    'revert',
                    'right',
                    'start',
                    'unset',
                  ],
                  type: 'string',
                },
                MozTextDecorationColor: {
                  description:
                    'The **`text-decoration-color`** CSS property sets the color of decorations added to text by `text-decoration-line`.\n\n**Syntax**: `<color>`\n\n**Initial value**: `currentcolor`',
                  type: 'string',
                },
                MozTextDecorationLine: {
                  description:
                    'The **`text-decoration-line`** CSS property sets the kind of decoration that is used on text in an element, such as an underline or overline.\n\n**Syntax**: `none | [ underline || overline || line-through || blink ] | spelling-error | grammar-error`\n\n**Initial value**: `none`',
                  type: 'string',
                },
                MozTextDecorationStyle: {
                  description:
                    'The **`text-decoration-style`** CSS property sets the style of the lines specified by `text-decoration-line`. The style applies to all lines that are set with `text-decoration-line`.\n\n**Syntax**: `solid | double | dotted | dashed | wavy`\n\n**Initial value**: `solid`',
                  enum: [
                    '-moz-initial',
                    'dashed',
                    'dotted',
                    'double',
                    'inherit',
                    'initial',
                    'revert',
                    'solid',
                    'unset',
                    'wavy',
                  ],
                  type: 'string',
                },
                MozUserInput: {
                  description:
                    'In Mozilla applications, **`-moz-user-input`** determines if an element will accept user input.\n\n**Syntax**: `auto | none | enabled | disabled`\n\n**Initial value**: `auto`',
                  enum: [
                    '-moz-initial',
                    'auto',
                    'disabled',
                    'enabled',
                    'inherit',
                    'initial',
                    'none',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                msImeMode: {
                  description:
                    'The **`ime-mode`** CSS property controls the state of the input method editor (IME) for text fields. This property is obsolete.\n\n**Syntax**: `auto | normal | active | inactive | disabled`\n\n**Initial value**: `auto`',
                  enum: [
                    '-moz-initial',
                    'active',
                    'auto',
                    'disabled',
                    'inactive',
                    'inherit',
                    'initial',
                    'normal',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                msScrollbarTrackColor: {
                  description:
                    'The **`-ms-scrollbar-track-color`** CSS property is a Microsoft extension that specifies the color of the track element of a scrollbar.\n\n**Syntax**: `<color>`\n\n**Initial value**: `Scrollbar`',
                  type: 'string',
                },
                OAnimation: {
                  description:
                    'The **`animation`** shorthand CSS property sets an animated transition between styles. It is a shorthand for `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, and `animation-play-state`.\n\n**Syntax**: `<single-animation>#`',
                  type: ['string', 'number'],
                },
                OAnimationDelay: {
                  description:
                    'The **`animation-delay`** CSS property sets when an animation starts. The animation can start later, immediately from its beginning, or immediately and partway through the animation.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`',
                  type: 'string',
                },
                OAnimationDirection: {
                  description:
                    'The **`animation-direction`** CSS property sets whether an animation should play forwards, backwards, or alternating back and forth.\n\n**Syntax**: `<single-animation-direction>#`\n\n**Initial value**: `normal`',
                  type: 'string',
                },
                OAnimationDuration: {
                  description:
                    'The **`animation-duration`** CSS property sets the length of time that an animation takes to complete one cycle.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`',
                  type: 'string',
                },
                OAnimationFillMode: {
                  description:
                    'The **`animation-fill-mode`** CSS property sets how a CSS animation applies styles to its target before and after its execution.\n\n**Syntax**: `<single-animation-fill-mode>#`\n\n**Initial value**: `none`',
                  type: 'string',
                },
                OAnimationIterationCount: {
                  description:
                    'The **`animation-iteration-count`** CSS property sets the number of times an animation cycle should be played before stopping.\n\n**Syntax**: `<single-animation-iteration-count>#`\n\n**Initial value**: `1`',
                  type: ['string', 'number'],
                },
                OAnimationName: {
                  description:
                    'The **`animation-name`** CSS property sets one or more animations to apply to an element. Each name is an `@keyframes` at-rule that sets the property values for the animation sequence.\n\n**Syntax**: `[ none | <keyframes-name> ]#`\n\n**Initial value**: `none`',
                  type: 'string',
                },
                OAnimationPlayState: {
                  description:
                    'The **`animation-play-state`** CSS property sets whether an animation is running or paused.\n\n**Syntax**: `<single-animation-play-state>#`\n\n**Initial value**: `running`',
                  type: 'string',
                },
                OAnimationTimingFunction: {
                  description:
                    'The `**animation-timing-function**` CSS property sets how an animation progresses through the duration of each cycle.\n\n**Syntax**: `<timing-function>#`\n\n**Initial value**: `ease`',
                  type: 'string',
                },
                OBackgroundSize: {
                  description:
                    "The **`background-size`** CSS property sets the size of the element's background image. The image can be left to its natural size, stretched, or constrained to fit the available space.\n\n**Syntax**: `<bg-size>#`\n\n**Initial value**: `auto auto`",
                  type: ['string', 'number'],
                },
                OBorderImage: {
                  description:
                    "The **`border-image`** CSS property draws an image in place of an element's `border-style`.\n\n**Syntax**: `<'border-image-source'> || <'border-image-slice'> [ / <'border-image-width'> | / <'border-image-width'>? / <'border-image-outset'> ]? || <'border-image-repeat'>`",
                  type: ['string', 'number'],
                },
                OTransform: {
                  description:
                    'The **`transform`** CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.\n\n**Syntax**: `none | <transform-list>`\n\n**Initial value**: `none`',
                  type: 'string',
                },
                OTransition: {
                  description:
                    'The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.\n\n**Syntax**: `<single-transition>#`',
                  type: 'string',
                },
                OTransitionDelay: {
                  description:
                    "The **`transition-delay`** CSS property specifies the duration to wait before starting a property's transition effect when its value changes.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`",
                  type: 'string',
                },
                OTransitionDuration: {
                  description:
                    'The **`transition-duration`** CSS property sets the length of time a transition animation should take to complete. By default, the value is `0s`, meaning that no animation will occur.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`',
                  type: 'string',
                },
                OTransitionProperty: {
                  description:
                    'The **`transition-property`** CSS property sets the CSS properties to which a transition effect should be applied.\n\n**Syntax**: `none | <single-transition-property>#`\n\n**Initial value**: all',
                  type: 'string',
                },
                OTransitionTimingFunction: {
                  description:
                    'The **`transition-timing-function`** CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect.\n\n**Syntax**: `<timing-function>#`\n\n**Initial value**: `ease`',
                  type: 'string',
                },
                WebkitBoxAlign: {
                  description:
                    'The **`box-align`** CSS property specifies how an element aligns its contents across its layout in a perpendicular direction. The effect of the property is only visible if there is extra space in the box.\n\n**Syntax**: `start | center | end | baseline | stretch`\n\n**Initial value**: `stretch`',
                  enum: [
                    '-moz-initial',
                    'baseline',
                    'center',
                    'end',
                    'inherit',
                    'initial',
                    'revert',
                    'start',
                    'stretch',
                    'unset',
                  ],
                  type: 'string',
                },
                WebkitBoxDirection: {
                  description:
                    'The **`box-direction`** CSS property specifies whether a box lays out its contents normally (from the top or left edge), or in reverse (from the bottom or right edge).\n\n**Syntax**: `normal | reverse | inherit`\n\n**Initial value**: `normal`',
                  enum: [
                    '-moz-initial',
                    'inherit',
                    'initial',
                    'normal',
                    'reverse',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                WebkitBoxFlex: {
                  description:
                    "The **`-moz-box-flex`** and **`-webkit-box-flex`** CSS properties specify how a `-moz-box` or `-webkit-box` grows to fill the box that contains it, in the direction of the containing box's layout.\n\n**Syntax**: `<number>`\n\n**Initial value**: `0`",
                  anyOf: [
                    {
                      enum: [
                        '-moz-initial',
                        'inherit',
                        'initial',
                        'revert',
                        'unset',
                      ],
                      type: 'string',
                    },
                    {
                      type: 'number',
                    },
                  ],
                },
                WebkitBoxFlexGroup: {
                  description:
                    "The **`box-flex-group`** CSS property assigns the flexbox's child elements to a flex group.\n\n**Syntax**: `<integer>`\n\n**Initial value**: `1`",
                  anyOf: [
                    {
                      enum: [
                        '-moz-initial',
                        'inherit',
                        'initial',
                        'revert',
                        'unset',
                      ],
                      type: 'string',
                    },
                    {
                      type: 'number',
                    },
                  ],
                },
                WebkitBoxLines: {
                  description:
                    'The **`box-lines`** CSS property determines whether the box may have a single or multiple lines (rows for horizontally oriented boxes, columns for vertically oriented boxes).\n\n**Syntax**: `single | multiple`\n\n**Initial value**: `single`',
                  enum: [
                    '-moz-initial',
                    'inherit',
                    'initial',
                    'multiple',
                    'revert',
                    'single',
                    'unset',
                  ],
                  type: 'string',
                },
                WebkitBoxOrdinalGroup: {
                  description:
                    "The **`box-ordinal-group`** CSS property assigns the flexbox's child elements to an ordinal group.\n\n**Syntax**: `<integer>`\n\n**Initial value**: `1`",
                  anyOf: [
                    {
                      enum: [
                        '-moz-initial',
                        'inherit',
                        'initial',
                        'revert',
                        'unset',
                      ],
                      type: 'string',
                    },
                    {
                      type: 'number',
                    },
                  ],
                },
                WebkitBoxOrient: {
                  description:
                    'The **`box-orient`** CSS property specifies whether an element lays out its contents horizontally or vertically.\n\n**Syntax**: `horizontal | vertical | inline-axis | block-axis | inherit`\n\n**Initial value**: `inline-axis` (`horizontal` in XUL)',
                  enum: [
                    '-moz-initial',
                    'block-axis',
                    'horizontal',
                    'inherit',
                    'initial',
                    'inline-axis',
                    'revert',
                    'unset',
                    'vertical',
                  ],
                  type: 'string',
                },
                WebkitBoxPack: {
                  description:
                    'The **`-moz-box-pack`** and **`-webkit-box-pack`** CSS properties specify how a `-moz-box` or `-webkit-box` packs its contents in the direction of its layout. The effect of this is only visible if there is extra space in the box.\n\n**Syntax**: `start | center | end | justify`\n\n**Initial value**: `start`',
                  enum: [
                    '-moz-initial',
                    'center',
                    'end',
                    'inherit',
                    'initial',
                    'justify',
                    'revert',
                    'start',
                    'unset',
                  ],
                  type: 'string',
                },
                WebkitScrollSnapPointsX: {
                  description:
                    'The **`scroll-snap-points-x`** CSS property defines the horizontal positioning of snap points within the content of the scroll container they are applied to.\n\n**Syntax**: `none | repeat( <length-percentage> )`\n\n**Initial value**: `none`',
                  type: 'string',
                },
                WebkitScrollSnapPointsY: {
                  description:
                    'The **`scroll-snap-points-y`** CSS property defines the vertical positioning of snap points within the content of the scroll container they are applied to.\n\n**Syntax**: `none | repeat( <length-percentage> )`\n\n**Initial value**: `none`',
                  type: 'string',
                },
                alignmentBaseline: {
                  enum: [
                    '-moz-initial',
                    'after-edge',
                    'alphabetic',
                    'auto',
                    'baseline',
                    'before-edge',
                    'central',
                    'hanging',
                    'ideographic',
                    'inherit',
                    'initial',
                    'mathematical',
                    'middle',
                    'revert',
                    'text-after-edge',
                    'text-before-edge',
                    'unset',
                  ],
                  type: 'string',
                },
                baselineShift: {
                  type: ['string', 'number'],
                },
                clipRule: {
                  enum: [
                    '-moz-initial',
                    'evenodd',
                    'inherit',
                    'initial',
                    'nonzero',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                colorInterpolation: {
                  enum: [
                    '-moz-initial',
                    'auto',
                    'inherit',
                    'initial',
                    'linearRGB',
                    'revert',
                    'sRGB',
                    'unset',
                  ],
                  type: 'string',
                },
                colorRendering: {
                  enum: [
                    '-moz-initial',
                    'auto',
                    'inherit',
                    'initial',
                    'optimizeQuality',
                    'optimizeSpeed',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                dominantBaseline: {
                  enum: [
                    '-moz-initial',
                    'alphabetic',
                    'auto',
                    'central',
                    'hanging',
                    'ideographic',
                    'inherit',
                    'initial',
                    'mathematical',
                    'middle',
                    'no-change',
                    'reset-size',
                    'revert',
                    'text-after-edge',
                    'text-before-edge',
                    'unset',
                    'use-script',
                  ],
                  type: 'string',
                },
                fill: {
                  type: 'string',
                },
                fillOpacity: {
                  anyOf: [
                    {
                      enum: [
                        '-moz-initial',
                        'inherit',
                        'initial',
                        'revert',
                        'unset',
                      ],
                      type: 'string',
                    },
                    {
                      type: 'number',
                    },
                  ],
                },
                fillRule: {
                  enum: [
                    '-moz-initial',
                    'evenodd',
                    'inherit',
                    'initial',
                    'nonzero',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                floodColor: {
                  type: 'string',
                },
                floodOpacity: {
                  anyOf: [
                    {
                      enum: [
                        '-moz-initial',
                        'inherit',
                        'initial',
                        'revert',
                        'unset',
                      ],
                      type: 'string',
                    },
                    {
                      type: 'number',
                    },
                  ],
                },
                glyphOrientationVertical: {
                  type: ['string', 'number'],
                },
                lightingColor: {
                  type: 'string',
                },
                marker: {
                  type: 'string',
                },
                markerEnd: {
                  type: 'string',
                },
                markerMid: {
                  type: 'string',
                },
                markerStart: {
                  type: 'string',
                },
                shapeRendering: {
                  enum: [
                    '-moz-initial',
                    'auto',
                    'crispEdges',
                    'geometricPrecision',
                    'inherit',
                    'initial',
                    'optimizeSpeed',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
                stopColor: {
                  type: 'string',
                },
                stopOpacity: {
                  anyOf: [
                    {
                      enum: [
                        '-moz-initial',
                        'inherit',
                        'initial',
                        'revert',
                        'unset',
                      ],
                      type: 'string',
                    },
                    {
                      type: 'number',
                    },
                  ],
                },
                stroke: {
                  type: 'string',
                },
                strokeDasharray: {
                  type: ['string', 'number'],
                },
                strokeDashoffset: {
                  type: ['string', 'number'],
                },
                strokeLinecap: {
                  enum: [
                    '-moz-initial',
                    'butt',
                    'inherit',
                    'initial',
                    'revert',
                    'round',
                    'square',
                    'unset',
                  ],
                  type: 'string',
                },
                strokeLinejoin: {
                  enum: [
                    '-moz-initial',
                    'bevel',
                    'inherit',
                    'initial',
                    'miter',
                    'revert',
                    'round',
                    'unset',
                  ],
                  type: 'string',
                },
                strokeMiterlimit: {
                  anyOf: [
                    {
                      enum: [
                        '-moz-initial',
                        'inherit',
                        'initial',
                        'revert',
                        'unset',
                      ],
                      type: 'string',
                    },
                    {
                      type: 'number',
                    },
                  ],
                },
                strokeOpacity: {
                  anyOf: [
                    {
                      enum: [
                        '-moz-initial',
                        'inherit',
                        'initial',
                        'revert',
                        'unset',
                      ],
                      type: 'string',
                    },
                    {
                      type: 'number',
                    },
                  ],
                },
                strokeWidth: {
                  type: ['string', 'number'],
                },
                textAnchor: {
                  enum: [
                    '-moz-initial',
                    'end',
                    'inherit',
                    'initial',
                    'middle',
                    'revert',
                    'start',
                    'unset',
                  ],
                  type: 'string',
                },
                vectorEffect: {
                  enum: [
                    '-moz-initial',
                    'inherit',
                    'initial',
                    'non-scaling-stroke',
                    'none',
                    'revert',
                    'unset',
                  ],
                  type: 'string',
                },
              },
            },
            title: {
              type: 'string',
            },
            dir: {
              type: 'string',
            },
            slot: {
              type: 'string',
            },
            media: {
              type: 'string',
            },
            hidden: {
              type: 'boolean',
            },
            color: {
              type: 'string',
            },
            download: {},
            hrefLang: {
              type: 'string',
            },
            ping: {
              type: 'string',
            },
            rel: {
              type: 'string',
            },
            referrerPolicy: {
              type: 'string',
            },
            defaultChecked: {
              type: 'boolean',
            },
            defaultValue: {
              anyOf: [
                {
                  type: 'array',
                  items: {
                    type: 'string',
                  },
                },
                {
                  type: ['string', 'number'],
                },
              ],
            },
            suppressContentEditableWarning: {
              type: 'boolean',
            },
            suppressHydrationWarning: {
              type: 'boolean',
            },
            accessKey: {
              type: 'string',
            },
            contentEditable: {
              type: 'boolean',
            },
            contextMenu: {
              type: 'string',
            },
            draggable: {
              type: 'boolean',
            },
            id: {
              type: 'string',
            },
            lang: {
              type: 'string',
            },
            placeholder: {
              type: 'string',
            },
            spellCheck: {
              type: 'boolean',
            },
            tabIndex: {
              type: 'number',
            },
            radioGroup: {
              type: 'string',
            },
            role: {
              type: 'string',
            },
            about: {
              type: 'string',
            },
            datatype: {
              type: 'string',
            },
            inlist: {},
            prefix: {
              type: 'string',
            },
            property: {
              type: 'string',
            },
            resource: {
              type: 'string',
            },
            typeof: {
              type: 'string',
            },
            vocab: {
              type: 'string',
            },
            autoCapitalize: {
              type: 'string',
            },
            autoCorrect: {
              type: 'string',
            },
            autoSave: {
              type: 'string',
            },
            itemProp: {
              type: 'string',
            },
            itemScope: {
              type: 'boolean',
            },
            itemType: {
              type: 'string',
            },
            itemID: {
              type: 'string',
            },
            itemRef: {
              type: 'string',
            },
            results: {
              type: 'number',
            },
            security: {
              type: 'string',
            },
            unselectable: {
              enum: ['off', 'on'],
              type: 'string',
            },
            inputMode: {
              description:
                'Hints at the type of data that might be entered by the user while editing the element or its contents',
              enum: [
                'decimal',
                'email',
                'none',
                'numeric',
                'search',
                'tel',
                'text',
                'url',
              ],
              type: 'string',
            },
            is: {
              description:
                'Specify that a standard HTML element should behave like a defined custom built-in element',
              type: 'string',
            },
            'aria-activedescendant': {
              description:
                'Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.',
              type: 'string',
            },
            'aria-atomic': {
              description:
                'Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.',
              enum: [false, 'false', true, 'true'],
            },
            'aria-autocomplete': {
              description:
                "Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be\npresented if they are made.",
              enum: ['both', 'inline', 'list', 'none'],
              type: 'string',
            },
            'aria-busy': {
              description:
                'Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.',
              enum: [false, 'false', true, 'true'],
            },
            'aria-checked': {
              description:
                'Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.',
              enum: [false, 'false', 'mixed', true, 'true'],
            },
            'aria-colcount': {
              description:
                'Defines the total number of columns in a table, grid, or treegrid.',
              type: 'number',
            },
            'aria-colindex': {
              description:
                "Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.",
              type: 'number',
            },
            'aria-colspan': {
              description:
                'Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.',
              type: 'number',
            },
            'aria-controls': {
              description:
                'Identifies the element (or elements) whose contents or presence are controlled by the current element.',
              type: 'string',
            },
            'aria-current': {
              description:
                'Indicates the element that represents the current item within a container or set of related elements.',
              enum: [
                'date',
                false,
                'false',
                'location',
                'page',
                'step',
                'time',
                true,
                'true',
              ],
            },
            'aria-describedby': {
              description:
                'Identifies the element (or elements) that describes the object.',
              type: 'string',
            },
            'aria-details': {
              description:
                'Identifies the element that provides a detailed, extended description for the object.',
              type: 'string',
            },
            'aria-disabled': {
              description:
                'Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.',
              enum: [false, 'false', true, 'true'],
            },
            'aria-dropeffect': {
              description:
                'Indicates what functions can be performed when a dragged object is released on the drop target.',
              enum: ['copy', 'execute', 'link', 'move', 'none', 'popup'],
              type: 'string',
            },
            'aria-errormessage': {
              description:
                'Identifies the element that provides an error message for the object.',
              type: 'string',
            },
            'aria-expanded': {
              description:
                'Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.',
              enum: [false, 'false', true, 'true'],
            },
            'aria-flowto': {
              description:
                "Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,\nallows assistive technology to override the general default of reading in document source order.",
              type: 'string',
            },
            'aria-grabbed': {
              description:
                'Indicates an element\'s "grabbed" state in a drag-and-drop operation.',
              enum: [false, 'false', true, 'true'],
            },
            'aria-haspopup': {
              description:
                'Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.',
              enum: [
                'dialog',
                false,
                'false',
                'grid',
                'listbox',
                'menu',
                'tree',
                true,
                'true',
              ],
            },
            'aria-hidden': {
              description:
                'Indicates whether the element is exposed to an accessibility API.',
              enum: [false, 'false', true, 'true'],
            },
            'aria-invalid': {
              description:
                'Indicates the entered value does not conform to the format expected by the application.',
              enum: [false, 'false', 'grammar', 'spelling', true, 'true'],
            },
            'aria-keyshortcuts': {
              description:
                'Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.',
              type: 'string',
            },
            'aria-label': {
              description:
                'Defines a string value that labels the current element.',
              type: 'string',
            },
            'aria-labelledby': {
              description:
                'Identifies the element (or elements) that labels the current element.',
              type: 'string',
            },
            'aria-level': {
              description:
                'Defines the hierarchical level of an element within a structure.',
              type: 'number',
            },
            'aria-live': {
              description:
                'Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.',
              enum: ['assertive', 'off', 'polite'],
              type: 'string',
            },
            'aria-modal': {
              description:
                'Indicates whether an element is modal when displayed.',
              enum: [false, 'false', true, 'true'],
            },
            'aria-multiline': {
              description:
                'Indicates whether a text box accepts multiple lines of input or only a single line.',
              enum: [false, 'false', true, 'true'],
            },
            'aria-multiselectable': {
              description:
                'Indicates that the user may select more than one item from the current selectable descendants.',
              enum: [false, 'false', true, 'true'],
            },
            'aria-orientation': {
              description:
                "Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.",
              enum: ['horizontal', 'vertical'],
              type: 'string',
            },
            'aria-owns': {
              description:
                'Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship\nbetween DOM elements where the DOM hierarchy cannot be used to represent the relationship.',
              type: 'string',
            },
            'aria-placeholder': {
              description:
                'Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.\nA hint could be a sample value or a brief description of the expected format.',
              type: 'string',
            },
            'aria-posinset': {
              description:
                "Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.",
              type: 'number',
            },
            'aria-pressed': {
              description:
                'Indicates the current "pressed" state of toggle buttons.',
              enum: [false, 'false', 'mixed', true, 'true'],
            },
            'aria-readonly': {
              description:
                'Indicates that the element is not editable, but is otherwise operable.',
              enum: [false, 'false', true, 'true'],
            },
            'aria-relevant': {
              description:
                'Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.',
              enum: ['additions', 'additions text', 'all', 'removals', 'text'],
              type: 'string',
            },
            'aria-required': {
              description:
                'Indicates that user input is required on the element before a form may be submitted.',
              enum: [false, 'false', true, 'true'],
            },
            'aria-roledescription': {
              description:
                'Defines a human-readable, author-localized description for the role of an element.',
              type: 'string',
            },
            'aria-rowcount': {
              description:
                'Defines the total number of rows in a table, grid, or treegrid.',
              type: 'number',
            },
            'aria-rowindex': {
              description:
                "Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.",
              type: 'number',
            },
            'aria-rowspan': {
              description:
                'Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.',
              type: 'number',
            },
            'aria-selected': {
              description:
                'Indicates the current "selected" state of various widgets.',
              enum: [false, 'false', true, 'true'],
            },
            'aria-setsize': {
              description:
                'Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.',
              type: 'number',
            },
            'aria-sort': {
              description:
                'Indicates if items in a table or grid are sorted in ascending or descending order.',
              enum: ['ascending', 'descending', 'none', 'other'],
              type: 'string',
            },
            'aria-valuemax': {
              description:
                'Defines the maximum allowed value for a range widget.',
              type: 'number',
            },
            'aria-valuemin': {
              description:
                'Defines the minimum allowed value for a range widget.',
              type: 'number',
            },
            'aria-valuenow': {
              description: 'Defines the current value for a range widget.',
              type: 'number',
            },
            'aria-valuetext': {
              description:
                'Defines the human readable text alternative of aria-valuenow for a range widget.',
              type: 'string',
            },
            dangerouslySetInnerHTML: {
              type: 'object',
              properties: {
                __html: {
                  type: 'string',
                },
              },
            },
            onCopy: {
              type: 'object',
            },
            onCopyCapture: {
              type: 'object',
            },
            onCut: {
              type: 'object',
            },
            onCutCapture: {
              type: 'object',
            },
            onPaste: {
              type: 'object',
            },
            onPasteCapture: {
              type: 'object',
            },
            onCompositionEnd: {
              type: 'object',
            },
            onCompositionEndCapture: {
              type: 'object',
            },
            onCompositionStart: {
              type: 'object',
            },
            onCompositionStartCapture: {
              type: 'object',
            },
            onCompositionUpdate: {
              type: 'object',
            },
            onCompositionUpdateCapture: {
              type: 'object',
            },
            onFocus: {
              type: 'object',
            },
            onFocusCapture: {
              type: 'object',
            },
            onBlur: {
              type: 'object',
            },
            onBlurCapture: {
              type: 'object',
            },
            onChange: {
              type: 'object',
            },
            onChangeCapture: {
              type: 'object',
            },
            onBeforeInput: {
              type: 'object',
            },
            onBeforeInputCapture: {
              type: 'object',
            },
            onInput: {
              type: 'object',
            },
            onInputCapture: {
              type: 'object',
            },
            onReset: {
              type: 'object',
            },
            onResetCapture: {
              type: 'object',
            },
            onSubmit: {
              type: 'object',
            },
            onSubmitCapture: {
              type: 'object',
            },
            onInvalid: {
              type: 'object',
            },
            onInvalidCapture: {
              type: 'object',
            },
            onLoad: {
              type: 'object',
            },
            onLoadCapture: {
              type: 'object',
            },
            onError: {
              type: 'object',
            },
            onErrorCapture: {
              type: 'object',
            },
            onKeyDown: {
              type: 'object',
            },
            onKeyDownCapture: {
              type: 'object',
            },
            onKeyPress: {
              type: 'object',
            },
            onKeyPressCapture: {
              type: 'object',
            },
            onKeyUp: {
              type: 'object',
            },
            onKeyUpCapture: {
              type: 'object',
            },
            onAbort: {
              type: 'object',
            },
            onAbortCapture: {
              type: 'object',
            },
            onCanPlay: {
              type: 'object',
            },
            onCanPlayCapture: {
              type: 'object',
            },
            onCanPlayThrough: {
              type: 'object',
            },
            onCanPlayThroughCapture: {
              type: 'object',
            },
            onDurationChange: {
              type: 'object',
            },
            onDurationChangeCapture: {
              type: 'object',
            },
            onEmptied: {
              type: 'object',
            },
            onEmptiedCapture: {
              type: 'object',
            },
            onEncrypted: {
              type: 'object',
            },
            onEncryptedCapture: {
              type: 'object',
            },
            onEnded: {
              type: 'object',
            },
            onEndedCapture: {
              type: 'object',
            },
            onLoadedData: {
              type: 'object',
            },
            onLoadedDataCapture: {
              type: 'object',
            },
            onLoadedMetadata: {
              type: 'object',
            },
            onLoadedMetadataCapture: {
              type: 'object',
            },
            onLoadStart: {
              type: 'object',
            },
            onLoadStartCapture: {
              type: 'object',
            },
            onPause: {
              type: 'object',
            },
            onPauseCapture: {
              type: 'object',
            },
            onPlay: {
              type: 'object',
            },
            onPlayCapture: {
              type: 'object',
            },
            onPlaying: {
              type: 'object',
            },
            onPlayingCapture: {
              type: 'object',
            },
            onProgress: {
              type: 'object',
            },
            onProgressCapture: {
              type: 'object',
            },
            onRateChange: {
              type: 'object',
            },
            onRateChangeCapture: {
              type: 'object',
            },
            onSeeked: {
              type: 'object',
            },
            onSeekedCapture: {
              type: 'object',
            },
            onSeeking: {
              type: 'object',
            },
            onSeekingCapture: {
              type: 'object',
            },
            onStalled: {
              type: 'object',
            },
            onStalledCapture: {
              type: 'object',
            },
            onSuspend: {
              type: 'object',
            },
            onSuspendCapture: {
              type: 'object',
            },
            onTimeUpdate: {
              type: 'object',
            },
            onTimeUpdateCapture: {
              type: 'object',
            },
            onVolumeChange: {
              type: 'object',
            },
            onVolumeChangeCapture: {
              type: 'object',
            },
            onWaiting: {
              type: 'object',
            },
            onWaitingCapture: {
              type: 'object',
            },
            onAuxClick: {
              type: 'object',
            },
            onAuxClickCapture: {
              type: 'object',
            },
            onClickCapture: {
              type: 'object',
            },
            onContextMenu: {
              type: 'object',
            },
            onContextMenuCapture: {
              type: 'object',
            },
            onDoubleClick: {
              type: 'object',
            },
            onDoubleClickCapture: {
              type: 'object',
            },
            onDrag: {
              type: 'object',
            },
            onDragCapture: {
              type: 'object',
            },
            onDragEnd: {
              type: 'object',
            },
            onDragEndCapture: {
              type: 'object',
            },
            onDragEnter: {
              type: 'object',
            },
            onDragEnterCapture: {
              type: 'object',
            },
            onDragExit: {
              type: 'object',
            },
            onDragExitCapture: {
              type: 'object',
            },
            onDragLeave: {
              type: 'object',
            },
            onDragLeaveCapture: {
              type: 'object',
            },
            onDragOver: {
              type: 'object',
            },
            onDragOverCapture: {
              type: 'object',
            },
            onDragStart: {
              type: 'object',
            },
            onDragStartCapture: {
              type: 'object',
            },
            onDrop: {
              type: 'object',
            },
            onDropCapture: {
              type: 'object',
            },
            onMouseDown: {
              type: 'object',
            },
            onMouseDownCapture: {
              type: 'object',
            },
            onMouseEnter: {
              type: 'object',
            },
            onMouseLeave: {
              type: 'object',
            },
            onMouseMove: {
              type: 'object',
            },
            onMouseMoveCapture: {
              type: 'object',
            },
            onMouseOut: {
              type: 'object',
            },
            onMouseOutCapture: {
              type: 'object',
            },
            onMouseOver: {
              type: 'object',
            },
            onMouseOverCapture: {
              type: 'object',
            },
            onMouseUp: {
              type: 'object',
            },
            onMouseUpCapture: {
              type: 'object',
            },
            onSelect: {
              type: 'object',
            },
            onSelectCapture: {
              type: 'object',
            },
            onTouchCancel: {
              type: 'object',
            },
            onTouchCancelCapture: {
              type: 'object',
            },
            onTouchEnd: {
              type: 'object',
            },
            onTouchEndCapture: {
              type: 'object',
            },
            onTouchMove: {
              type: 'object',
            },
            onTouchMoveCapture: {
              type: 'object',
            },
            onTouchStart: {
              type: 'object',
            },
            onTouchStartCapture: {
              type: 'object',
            },
            onPointerDown: {
              type: 'object',
            },
            onPointerDownCapture: {
              type: 'object',
            },
            onPointerMove: {
              type: 'object',
            },
            onPointerMoveCapture: {
              type: 'object',
            },
            onPointerUp: {
              type: 'object',
            },
            onPointerUpCapture: {
              type: 'object',
            },
            onPointerCancel: {
              type: 'object',
            },
            onPointerCancelCapture: {
              type: 'object',
            },
            onPointerEnter: {
              type: 'object',
            },
            onPointerEnterCapture: {
              type: 'object',
            },
            onPointerLeave: {
              type: 'object',
            },
            onPointerLeaveCapture: {
              type: 'object',
            },
            onPointerOver: {
              type: 'object',
            },
            onPointerOverCapture: {
              type: 'object',
            },
            onPointerOut: {
              type: 'object',
            },
            onPointerOutCapture: {
              type: 'object',
            },
            onGotPointerCapture: {
              type: 'object',
            },
            onGotPointerCaptureCapture: {
              type: 'object',
            },
            onLostPointerCapture: {
              type: 'object',
            },
            onLostPointerCaptureCapture: {
              type: 'object',
            },
            onScroll: {
              type: 'object',
            },
            onScrollCapture: {
              type: 'object',
            },
            onWheel: {
              type: 'object',
            },
            onWheelCapture: {
              type: 'object',
            },
            onAnimationStart: {
              type: 'object',
            },
            onAnimationStartCapture: {
              type: 'object',
            },
            onAnimationEnd: {
              type: 'object',
            },
            onAnimationEndCapture: {
              type: 'object',
            },
            onAnimationIteration: {
              type: 'object',
            },
            onAnimationIterationCapture: {
              type: 'object',
            },
            onTransitionEnd: {
              type: 'object',
            },
            onTransitionEndCapture: {
              type: 'object',
            },
            htmlType: {
              enum: ['button', 'reset', 'submit'],
              type: 'string',
            },
            form: {
              type: 'string',
            },
            disabled: {
              type: 'boolean',
            },
            autoFocus: {
              type: 'boolean',
            },
            formAction: {
              type: 'string',
            },
            formEncType: {
              type: 'string',
            },
            formMethod: {
              type: 'string',
            },
            formNoValidate: {
              type: 'boolean',
            },
            formTarget: {
              type: 'string',
            },
            name: {
              type: 'string',
            },
            value: {
              anyOf: [
                {
                  type: 'array',
                  items: {
                    type: 'string',
                  },
                },
                {
                  type: ['string', 'number'],
                },
              ],
            },
          },
          $schema: 'http://json-schema.org/draft-07/schema#',
        },
      ],
    },
  },
  required: ['vertexId'],
}

const UpdateVertexInputDecorators: DecoratorsMap = {
  props: {
    'data-grid': {
      x: {
        __grid: {
          order: 1,
          span: 6,
        },
      },
      y: {
        __grid: {
          order: 2,
          span: 6,
        },
      },
      w: {
        __grid: {
          order: 3,
          span: 6,
        },
      },
      h: {
        __grid: {
          order: 4,
          span: 6,
        },
      },
    },
  },
}

export const UpdateVertexInputFormProps = {
  ObjectFieldTemplate: ObjectFieldTemplateFactory(UpdateVertexInputDecorators),
}

export const CreatePageInputSchema: JSONSchema7 = {
  type: 'object',
  properties: {
    title: {
      type: 'string',
    },
    appId: {
      type: 'string',
    },
  },
  $schema: 'http://json-schema.org/draft-07/schema#',
}

export const DeletePageInputSchema: JSONSchema7 = {
  type: 'object',
  properties: {
    pageId: {
      type: 'string',
    },
  },
  $schema: 'http://json-schema.org/draft-07/schema#',
}

export const GetPageInputSchema: JSONSchema7 = {
  type: 'object',
  properties: {
    pageId: {
      type: 'string',
    },
  },
  $schema: 'http://json-schema.org/draft-07/schema#',
}

export const GetPagesInputSchema: JSONSchema7 = {
  type: 'object',
  properties: {
    appId: {
      type: 'string',
    },
  },
  $schema: 'http://json-schema.org/draft-07/schema#',
}

export const UpdatePageInputSchema: JSONSchema7 = {
  type: 'object',
  properties: {
    title: {
      type: 'string',
    },
    pageId: {
      type: 'string',
    },
  },
  $schema: 'http://json-schema.org/draft-07/schema#',
}

export const DeleteUserInputSchema: JSONSchema7 = {
  type: 'object',
  properties: {
    email: {
      type: 'string',
    },
  },
  $schema: 'http://json-schema.org/draft-07/schema#',
}

export const LoginUserInputSchema: JSONSchema7 = {
  type: 'object',
  properties: {
    email: {
      type: 'string',
    },
    password: {
      type: 'string',
    },
  },
  $schema: 'http://json-schema.org/draft-07/schema#',
}

export const RegisterUserInputSchema: JSONSchema7 = {
  type: 'object',
  properties: {
    email: {
      type: 'string',
    },
    password: {
      type: 'string',
    },
  },
  $schema: 'http://json-schema.org/draft-07/schema#',
}

export const UpdateUserInputSchema: JSONSchema7 = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
    },
    email: {
      type: 'string',
    },
  },
  $schema: 'http://json-schema.org/draft-07/schema#',
}