var WindowComponent = null
var WindowTitle = 'DawgUI'

var Palette = {
    Background: '#fffaff',
    Primary: '#3e92cc',
    Secondary: '#d8315b',
    Foreground: '#1e1b18'
}

var __objectEventList = []

function getIdFromString(component) {
    return component.split('id="')[1].split('"')[0]
}

String.prototype.Event = function (eventName, func) {
    __objectEventList.push([eventName, func, this])
    return this
}

String.prototype.Tooltip = function (tooltip) {
    return '<div title="' + tooltip + '">' + this + '</div>'
}

function GetForegroundOf(color) {
    // Get the foreground color of a color

    var r = parseInt(color.substring(1, 3), 16)
    var g = parseInt(color.substring(3, 5), 16)
    var b = parseInt(color.substring(5, 7), 16)

    var yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000
    return (yiq >= 128) ? Palette.Foreground : Palette.Background
}

function GenerateID() {
    return '_' + Math.random().toString(36).substr(2, 9)
}

var GlobalWindowStyle = {
    'font-family': 'Inter',
    'padding': '0px',
    'margin': '0px',
    'background-color': Palette.Background,
    'color': Palette.Foreground,
    'overflow-x': 'hidden'
}

var GlobalElementStyle = {
    'transition': ' cubic-bezier(0.075, 0.82, 0.165, 1) .2s',
}

var HotReload = false
var HotReloadTime = 500

function ImportStyle(url) {
    var link = document.createElement('link')
    link.type = 'text/css'
    link.rel = 'stylesheet'
    link.href = url
    document.getElementsByTagName('head')[0].appendChild(link)
}

function AddStyleCode(code) {
    document.head.innerHTML += '<style>' + code + '</style>'
}

function Image(src, style = {}) {
    if (style['user-select'] == undefined) style['user-select'] = 'none'

    return '<img id="' + GenerateID() + '" draggable="false" src="' + src + '" style="' + Style(style) + '">'
}

function Style(style = {}) {
    const styles = Object.getOwnPropertyNames(style)
    const globalElementStyles = Object.getOwnPropertyNames(GlobalElementStyle)

    var styleCompiled = ''

    for (let i = 0; i < styles.length; i++) {
        styleCompiled += styles[i] + ':' + style[styles[i]] + ';'
    }

    for (let i = 0; i < globalElementStyles.length; i++) {
        styleCompiled += globalElementStyles[i] + ':' + GlobalElementStyle[globalElementStyles[i]] + ';'
    }

    return styleCompiled
}

function CombineElements(elements) {
    return elements.join('')
}

function Container(elements = [], style = {}) {
    return '<div id="' + GenerateID() + '" style="' + Style(style) + '">' + CombineElements(elements) + '</div>'
}

function Text(elements, style = {}) {
    if (style['color'] == undefined && style['background-color'] != undefined) style['color'] = GetForegroundOf(style['background-color'])

    return '<span id="' + GenerateID() + '" style="' + Style(style) + '">' + elements + '</span>'
}

function Link(elements, style = {}) {
    if (style['color'] == undefined && style['background-color'] != undefined) style['color'] = GetForegroundOf(style['background-color'])

    if (style['cursor'] == undefined) style['cursor'] = 'pointer'

    return '<a id="' + GenerateID() + '" style="' + Style(style) + '">' + CombineElements(elements) + '</a>'
}

function VSpacer(style = {}) {
    if (style['height'] == undefined) style['height'] = '20px'
    if (style['width'] == undefined) style['width'] = '2px'
    if (style['background-color'] == undefined) style['background-color'] = Palette.Foreground
    if (style['color'] != undefined) style['background-color'] = style['color']

    if (style['margin-left'] == undefined) style['margin-left'] = '10px'
    if (style['margin-right'] == undefined) style['margin-right'] = '10px'

    if (style['opacity'] == undefined) style['opacity'] = '0.5'

    return '<div id="' + GenerateID() + '" style="' + Style(style) + '"></div>'
}

function HSpacer(style = {}) {
    if (style['height'] == undefined) style['height'] = '2px'
    if (style['width'] == undefined) style['width'] = '100%'
    if (style['background-color'] == undefined) style['background-color'] = Palette.Foreground
    if (style['color'] != undefined) style['background-color'] = style['color']

    if (style['margin-top'] == undefined) style['margin-top'] = '10px'
    if (style['margin-bottom'] == undefined) style['margin-bottom'] = '10px'

    if (style['opacity'] == undefined) style['opacity'] = '0.5'

    return '<div id="' + GenerateID() + '" style="' + Style(style) + '"></div>'
}

function NavigationBar(elements = [], style = {}) {
    // {height: '50px', width: '100%', 'box-sizing': 'border-box', display: 'flex', 'align-items': 'center', 'padding-left': '15px', 'padding-right': '15px', 'background-color': Palette.Primary, 'color': GetForegroundOf(Palette.Primary), 'user-select': 'none'}

    if (style['height'] == undefined) style['height'] = '50px'

    if (style['width'] == undefined) style['width'] = '100%'

    if (style['box-sizing'] == undefined) style['box-sizing'] = 'border-box'

    if (style['display'] == undefined) style['display'] = 'flex'

    if (style['align-items'] == undefined) style['align-items'] = 'center'

    if (style['padding-left'] == undefined) style['padding-left'] = '15px'

    if (style['padding-right'] == undefined) style['padding-right'] = '15px'

    if (style['background-color'] == undefined) style['background-color'] = Palette.Primary

    if (style['color'] == undefined) style['color'] = GetForegroundOf(style['background-color'])

    if (style['user-select'] == undefined) style['user-select'] = 'none'

    if (style['border-bottom'] == undefined) style['border-bottom'] = '2px solid ' + 'rgba(0, 0, 0, 0.5)'

    return '<nav id="' + GenerateID() + '" style="' + Style(style) + '">' + CombineElements(elements) + '</nav>'
}

function Button(elements = [], style = {}) {
    if (style['padding'] == undefined) style['padding'] = '20px'

    if (style['outline'] == undefined) style['outline'] = 'none'

    if (style['border'] == undefined) style['border'] = 'none'

    if (style['background-color'] == undefined) style['background-color'] = Palette.Primary

    if (style['color'] == undefined) style['color'] = GetForegroundOf(style['background-color'])

    if (style['user-select'] == undefined) style['user-select'] = 'none'

    if (style['cursor'] == undefined) style['cursor'] = 'pointer'

    if (style['text-align'] == undefined) style['text-align'] = 'center'

    if (style['font-family'] == undefined) style['font-family'] = 'inherit'

    AddStyleCode
        (
            `
        button:hover {
            transform: scale(1.05);
        }
        
        button:active {
            transform: scale(0.9);
        }
        `
        )

    return '<button id="' + GenerateID() + '" style="' + Style(style) + '">' + CombineElements(elements) + '</button>'
}

function NewLine() {
    return '<br>'
}

let lastText = ''

window.onload = (e) => {
    ImportStyle('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap')
    AddStyleCode(`
        /* width */
        ::-webkit-scrollbar {
            width: 20px;
        }

        /* Track */
        ::-webkit-scrollbar-track {
            background: ${Palette.Foreground};
        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
            background: ${Palette.Background};
        }
        `)

    document.body.innerHTML = WindowComponent()
    document.body.style = Style(GlobalWindowStyle)
    document.title = WindowTitle

    for (let i = 0; i < __objectEventList.length; i++) {
        const id = getIdFromString(__objectEventList[i][2])

        document.getElementById(id).addEventListener(__objectEventList[i][0], __objectEventList[i][1])
    }

    fetch('./App.js')
        .then(res => res.text())
        .then(text => {
            lastText = text

            if (HotReload) {
                setInterval(() => {
                    fetch('./App.js')
                        .then(res2 => res2.text())
                        .then(js => {
                            if (js != lastText) {
                                window.location.reload()
                            }
                        })
                }, HotReloadTime)
            }
        })
};