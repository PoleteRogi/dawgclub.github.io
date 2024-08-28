// Headers
ImportStyle('https://fonts.cdnfonts.com/css/square-dance')
GlobalWindowStyle["font-family"] = 'SquareDance10'
WindowTitle = 'DawgClub'

HotReload = false

WindowComponent = function App() {
    return Container
    ([
        Text('The game will run here')
    ], 
    style={
        display: 'flex',
        'justify-content': 'center',
        'align-items': 'center',
        'height': '100vh'
    })
}