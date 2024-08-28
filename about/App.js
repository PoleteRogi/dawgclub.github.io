// Headers
ImportStyle('https://fonts.cdnfonts.com/css/square-dance')
GlobalWindowStyle["font-family"] = 'SquareDance10'
WindowTitle = 'DawgClub'

HotReload = false

function Navbar() {
    return NavigationBar([
            Image('../favicon.ico', style = {
                height: '20px',
                'margin-right': '10px'
            }),
            Link(
                ['DawgClub']
            ).Event('click', () => {
                window.location.href = '../'
            }),
            VSpacer(),
            Link(
                ['News'],
                style = {
                    'margin-right': '10px'
                }
            ).Event('click', () => {
                window.location.href = '../news/'
            }),
            Link(
                ['about'],
                style = {
                    'margin-right': '10px'
                }
            ).Event('click', () => {
                window.location.href = './'
            }),
            Link(
                ['Play'], style = {
                    'margin-left': 'auto'
                }
            ).Event('click', () => {
                window.location.href = '../play'
            })
        ],
        style = {
            'background-color': Palette.Background
        })
}

function Footer() {
    return Container(
        [
            Text(
                '(C) 2024 DawgClub. All Rights Reserved.'
            )
        ],
        style = {
            'background-color': Palette.Foreground,
            'color': Palette.Background,
            'z-index': 2,
            'padding': '40px',
            'box-sizing': 'border-box'
        }
    )
}

WindowComponent = function App() {
    return Container([
        Navbar(),
        // Main Content
        Container([
                Container([
                    Text('About',
                        style = {
                            'font-size': '40px'
                        }
                    ),
                    HSpacer(),
                    Image('../assets/dawgclubabout.png', style = {
                        'width': '350px',
                        'margin-bottom': '10px',
                        'border': '2px solid ' + Palette.Foreground
                    }).Tooltip("A Dawg's anatomy"),
                    Text("DawgClub is a fun online MMO platform, where you can play minigames with friends, win coins, and customize your Dawg to your likings! Decorate your house, celebrate parties in it, make your own shop, and much more!", style={'margin-bottom': '10px'}),
                ], style={
                    'max-width': '350px'
                })
            ],
            style = {
                padding: '40px',
                display: 'flex',
                'justify-content': 'center',
                'min-height': 'calc(100vh - 230px)'
            }),
        Footer()
    ])
}