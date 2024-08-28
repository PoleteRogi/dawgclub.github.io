// Headers
ImportStyle('https://fonts.cdnfonts.com/css/square-dance')
GlobalWindowStyle["font-family"] = 'SquareDance10'
WindowTitle = 'DawgClub'

HotReload = true

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
                window.location.href = './'
            }),
            Link(
                ['about'],
                style = {
                    'margin-right': '10px'
                }
            ).Event('click', () => {
                window.location.href = '../about/'
            }),
            Link(
                ['Play'], style = {
                    'margin-left': 'auto'
                }
            ).Event('click', () => {
                window.location.href = '../play/'
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
                    Text('News',
                        style = {
                            'font-size': '40px'
                        }
                    ),
                    HSpacer(),
                    Text("DawgClub's news about new updates and content.", style={'margin-bottom': '10px'}),

                    Container([
                        // New
                        Container([
                            Text('Update 0.1.0', style={
                                'font-size': '20px'
                            }),
                            NewLine(),
                            Text('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa dolor, volutpat sed purus sed, auctor luctus massa. Fusce vestibulum eu diam eget condimentum. Ut rutrum diam lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras vitae maximus lacus. Nulla vitae enim eu ex sagittis posuere. Nulla et augue accumsan, pharetra risus et, convallis ante.', style={
                                'font-size': '13px'
                            })
                        ], style = {
                            'max-width': '500px',
                            'margin': 'auto',
                            'padding': '40px',
                            'background-color': Palette.Background,
                            'border': '2px solid ' + 'rgba(0, 0, 0, 0.5)',
                            'box-sizing': 'border-box',
                            'margin-bottom': '10px'
                        }),

                        Container([
                            Text('Update 0.1.0', style={
                                'font-size': '20px'
                            }),
                            NewLine(),
                            Text('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa dolor, volutpat sed purus sed, auctor luctus massa. Fusce vestibulum eu diam eget condimentum. Ut rutrum diam lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras vitae maximus lacus. Nulla vitae enim eu ex sagittis posuere. Nulla et augue accumsan, pharetra risus et, convallis ante.', style={
                                'font-size': '13px'
                            })
                        ], style = {
                            'max-width': '500px',
                            'margin': 'auto',
                            'padding': '40px',
                            'background-color': Palette.Background,
                            'border': '2px solid ' + 'rgba(0, 0, 0, 0.5)',
                            'box-sizing': 'border-box',
                            'margin-bottom': '10px'
                        }),

                        Container([
                            Text('Update 0.1.0', style={
                                'font-size': '20px'
                            }),
                            NewLine(),
                            Text('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa dolor, volutpat sed purus sed, auctor luctus massa. Fusce vestibulum eu diam eget condimentum. Ut rutrum diam lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras vitae maximus lacus. Nulla vitae enim eu ex sagittis posuere. Nulla et augue accumsan, pharetra risus et, convallis ante.', style={
                                'font-size': '13px'
                            })
                        ], style = {
                            'max-width': '500px',
                            'margin': 'auto',
                            'padding': '40px',
                            'background-color': Palette.Background,
                            'border': '2px solid ' + 'rgba(0, 0, 0, 0.5)',
                            'box-sizing': 'border-box',
                            'margin-bottom': '10px'
                        }),

                        // No more news text
                        Text('No more news.', style = {
                            opacity: 0.5,
                            'text-align': 'center',
                            'margin-top': '10px'
                        })
                    ], style={
                        display: 'flex',
                        'justify-content': 'center',
                        'flex-direction': 'column',
                        'margin-top': '10px'
                    })
                ])
            ],
            style = {
                padding: '40px',
                display: 'flex',
                'justify-content': 'center',
            }),
        Footer()
    ])
}