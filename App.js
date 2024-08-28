// Headers
ImportStyle('https://fonts.cdnfonts.com/css/square-dance')
GlobalWindowStyle["font-family"] = 'SquareDance10'
WindowTitle = 'DawgClub'

HotReload = false

const IsMobile = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

function Navbar() {
    return NavigationBar
    ([
        Image('./favicon.ico', style={height: '20px', 'margin-right': '10px'}),
        Link
        (
            ['DawgClub']
        ).Event('click', () => {
            window.location.href = './'
        }),
        VSpacer(),
        Link
        (
            ['News'],
            style={
                'margin-right': '10px'
            }
        ).Event('click', () => {
            window.location.href = './news/'
        }),
        Link
        (
            ['about'],
            style={
                'margin-right': '10px'
            }
        ).Event('click', () => {
            window.location.href = './about/'
        }),
        Link
        (
            ['Play'], style=
            {
                'margin-left': 'auto'
            }
        ).Event('click', () => {
            window.location.href = './play/'
        })
    ],
    style=
    {
        'background-color': Palette.Background
    })
}

function Footer() {
    return Container
    (
        [
            Text
            (
                '(C) 2024 DawgClub. All Rights Reserved.'
            )
        ],
        style=
        {
            'background-color': Palette.Foreground,
            'color': Palette.Background,
            'z-index': 2,
            'padding': '40px',
            'box-sizing': 'border-box'
        }
    )
}

WindowComponent = function App() {
    return Container
    ([
        Navbar(),
        // Main Content
        Container
        ([
            // Hero
            Container
            (
                [
                    Button
                    (
                        ['Play Now!'], style=
                        {
                            'position': 'fixed',
                            'top': IsMobile() ? '52%' : '500px',
                            'background-color': Palette.Background,
                            'z-index': 1
                        }
                    ).Event('click', () => {
                        window.location.href = './play/'
                    })
                ],
                style=
                {
                    width: '100vw',
                    height: 'calc(100vh - 50px)',
                    'background-image': 'url(./assets/dawgclubbanner1.png)',
                    'background-position': 'center',
                    'background-repeat': 'no-repeat',
                    display: 'flex',
                    'justify-content': 'center',
                    'align-items': 'center',
                    'background-attachment': 'fixed',
                    'margin': '0px',
                    'z-index': 1,
                    // Make it blur if IsMobile is true
                    'background-size': IsMobile() ? '100%' : 'cover',
                    'background-color': IsMobile() ? '#e0871c' : 'none'
                }
            ),            
        ]),
        Footer()
    ])
}

// xd