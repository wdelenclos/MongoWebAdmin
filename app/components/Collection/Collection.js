import {Candle} from '../../../core/core.js';


import homeAction from "../../actions/Navbar/homeAction.js";



export var Collection = Candle.dom.createEl('div', {
    attrs: {
        "id": 'appContent',
        "class": "container",
        "style": "padding: 24px",
    },
    children: [
        Candle.dom.createEl('h4',
            {
                attrs: {
                    'style': 'margin: 24px 0'
                },
                children: [
                    Candle.dom.createEl('a',
                        {
                            children: [
                                Candle.dom.createEl('button',
                                    {
                                        attrs:{
                                            'class': 'btn',
                                            'style' : "color: #f5a623; border-color: #f5a623; margin-right: 24px"
                                        },
                                        children:[
                                            Candle.dom.createEl('i',{
                                                attrs: {
                                                    'class': 'icon icon-arrow-left'
                                                }
                                            })
                                        ]
                                    })
                            ],
                            event: {
                                trigger: 'click',
                                action: homeAction
                            }
                        }),
                    "Details de la collection"
                ]
            }
        ),
        Candle.dom.createEl('div',
            {
                attrs: {
                    'class': 'columns',
                    'id' : "content"
                },
                children: [
                    Candle.dom.createEl('div',{
                        attrs:{
                            'class' : "loading loading-lg p-centered",
                        }
                    })
                ]
            }
        )
    ],
});

