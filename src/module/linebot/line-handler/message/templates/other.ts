import { ImageMapMessage } from "@line/bot-sdk"

export const otherTemplate: ImageMapMessage = {
    type: 'imagemap',
    baseUrl: 'https://upload.cc/i1/2022/09/29/v3GJcO.jpg?',
    altText: 'Menus ImageMap',
    baseSize: { width: 2500, height: 1686 },
    actions: [
        { area: { x: 0, y: 0, width: 833, height: 843 }, type: 'message', text: 'Menus' },
        { area: { x: 833, y: 0, width: 833, height: 843 }, type: 'message', text: 'Github' },
        { area: { x: 1666, y: 0, width: 833, height: 843 }, type: 'message', text: 'Articles' },
        { area: { x: 0, y: 843, width: 833, height: 843 }, type: 'message', text: 'Lists' },
        { area: { x: 833, y: 843, width: 833, height: 843 }, type: 'message', text: 'Links' },
        { area: { x: 1666, y: 843, width: 833, height: 843 }, type: 'message', text: 'Setting' },
    ],
}