import { IWebDocument } from './core/document/web-document.interface';
import { IFormData } from './interfaces';
import { IOptionConfig } from './core/controls/web-control.interface';
// 测试数据
export const formJson: IWebDocument = {
  'tagName': 'div',
  'className': 'WebDocument',
  'propObj': {
    'styleObj': {},
    'attrObj': {
      'name': 'document-content',
      'field-config': '{"name":"selectOptions","resultValue":"table2.field2","options":[{"label":"表1","value":"table1","checked":false,"selected":false,"options":[{"label":"字段1-1","value":"table1.field1","checked":false,"selected":false},{"label":"字段1-2","value":"table1.field2","checked":false,"selected":false},{"label":"字段1-3","value":"table1.field3","checked":false,"selected":false}]},{"label":"表2","value":"table2","checked":false,"selected":false,"options":[{"label":"字段2-1","value":"table2.field1","checked":false,"selected":false},{"label":"字段2-2","value":"table2.field2","checked":false,"selected":false},{"label":"字段2-3","value":"table2.field3","checked":false,"selected":false}]},{"label":"表3","value":"table3","checked":false,"selected":false,"options":[{"label":"字段3-1","value":"table3.field1","checked":false,"selected":false},{"label":"字段3-2","value":"table3.field2","checked":false,"selected":false},{"label":"字段3-3","value":"table3.field3","checked":false,"selected":false}]}]}'
    }
  },
  'childNodes': [
    {
      'tagName': 'ul',
      'className': 'WebDocumentTabs',
      'propObj': {
        'styleObj': {
          'display': 'flex',
          'listStyle': 'none',
          'backgroundColor': '#f0f0f0',
          'padding': '0 5px',
          'marginTop': '-35px',
          'width': '493px',
          'flexDirection': 'row'
        },
        'attrObj': {
          'name': 'document-tabs'
        }
      },
      'childNodes': [
        {
          'tagName': 'li',
          'className': 'ListItem',
          'propObj': {
            'styleObj': {
              'width': '150px',
              'textAlign': 'center',
              'padding': '6px 14px',
              'borderRadius': '4px 4px 0px 0px',
              'borderBottom': 'none',
              'boxSizing': 'border-box',
              'borderTop': '1px solid #d2d2d2',
              'borderLeft': '1px solid #d2d2d2',
              'borderRight': '1px solid #d2d2d2',
              'overflowWrap': 'break-word',
              'overflow': 'hidden',
              'fontSize': '14px',
              'paddingTop': '10px',
              'backgroundColor': ''
            },
            'attrObj': {
              'name': 'list-item',
              'constenteditable': false,
              'contenteditable': false
            }
          },
          'childNodes': [
            {
              'className': 'WebTextNode',
              'text': '首k页'
            }
          ]
        },
        {
          'tagName': 'li',
          'className': 'ListItem',
          'propObj': {
            'styleObj': {
              'width': '150px',
              'textAlign': 'center',
              'padding': '6px 14px',
              'borderRadius': '4px 4px 0px 0px',
              'borderBottom': 'none',
              'boxSizing': 'border-box',
              'borderTop': '1px solid #d2d2d2',
              'borderLeft': '1px solid #d2d2d2',
              'borderRight': '1px solid #d2d2d2',
              'overflowWrap': 'break-word',
              'overflow': 'hidden',
              'fontSize': '14px',
              'paddingTop': '10px',
              'backgroundColor': ''
            },
            'attrObj': {
              'name': 'list-item',
              'constenteditable': false,
              'contenteditable': false
            }
          },
          'childNodes': [
            {
              'className': 'WebTextNode',
              'text': '第2kk页'
            }
          ]
        },
        {
          'tagName': 'li',
          'className': 'ListItem',
          'propObj': {
            'styleObj': {
              'width': '150px',
              'textAlign': 'center',
              'padding': '6px 14px',
              'borderRadius': '4px 4px 0px 0px',
              'borderBottom': 'none',
              'boxSizing': 'border-box',
              'borderTop': '1px solid #d2d2d2',
              'borderLeft': '1px solid #d2d2d2',
              'borderRight': '1px solid #d2d2d2',
              'overflowWrap': 'break-word',
              'overflow': 'hidden',
              'fontSize': '14px',
              'paddingTop': '10px',
              'backgroundColor': '#ffffff'
            },
            'attrObj': {
              'name': 'list-item',
              'constenteditable': false,
              'contenteditable': true
            }
          },
          'childNodes': [
            {
              'className': 'WebTextNode',
              'text': '第3kkk页'
            }
          ]
        }
      ]
    },
    {
      'tagName': 'div',
      'className': 'WebDocumentContents',
      'propObj': {
        'styleObj': {},
        'attrObj': {
          'name': 'document-contents'
        }
      },
      'childNodes': [
        {
          'tagName': 'div',
          'className': 'WebPage',
          'propObj': {
            'styleObj': {
              'position': 'relative',
              'fontFamily': '宋体',
              'fontSize': '3.5mm',
              'boxShadow': '0px 0px 20px #000',
              'boxSizing': 'border-box',
              'margin': '5mm',
              'minHeight': '300px',
              'maxHeight': 'calc(564px - 60px - 10mm)',
              'overflowY': 'auto',
              'backgroundColor': '#fff',
              'backgroundImage': '',
              'display': 'none'
            },
            'attrObj': {
              'landscape': false,
              'pageIndex': 1,
              'name': 'web-page'
            }
          },
          'childNodes': [
            {
              'tagName': 'div',
              'className': 'RadioControl',
              'propObj': {
                'styleObj': {
                  'display': 'inline-block',
                  'width': '100%',
                  'padding': '10px',
                  'marginBottom': '10px!important',
                  'border': '1px solid #e2e0e0',
                  'boxSizing': 'border-box',
                  'zIndex': 9
                },
                'attrObj': {
                  'draggable': 'true',
                  'ctrl-id': 1,
                  'default-value': '',
                  'name': 'radio-control',
                  'option-config': '{"name":"单选0.4520548831312725","resultValue":1,"options":[{"label":"选项一","value":1,"checked":true,"selected":true,"options":[{"label":"选项一/1","value":11,"checked":true,"selected":true},{"label":"选项一/2","value":12,"checked":false,"selected":false},{"label":"选项一/3","value":13,"checked":false,"selected":false}]},{"label":"选项二","value":2,"checked":false,"selected":false,"options":[{"label":"选项二/1","value":21,"checked":false,"selected":false},{"label":"选项二/2","value":22,"checked":false,"selected":false},{"label":"选项二/3","value":23,"checked":false,"selected":false}]},{"label":"选项三","value":3,"checked":false,"selected":false,"options":[{"label":"选项三/1","value":31,"checked":false,"selected":false},{"label":"选项三/2","value":32,"checked":false,"selected":false},{"label":"选项三/3","value":33,"checked":false,"selected":false}]}]}',
                  'field-name': 'table1.field1',
                  'value': '12'
                }
              },
              'childNodes': [
                {
                  'tagName': 'div',
                  'className': 'RadioItem',
                  'propObj': {
                    'styleObj': {
                      'border': '1px solid #1890ff',
                      'background': '#f3f9ff',
                      'padding': '10px',
                      'marginBottom': '10px!important',
                      'fontSize': '14px',
                      'display': 'block'
                    },
                    'attrObj': {}
                  },
                  'childNodes': [
                    {
                      'tagName': 'label',
                      'className': 'Label',
                      'propObj': {
                        'styleObj': {
                          'width': '100px',
                          'lineHeight': '32px',
                          'textAlign': 'right',
                          'verticalAlign': 'middle',
                          'float': 'left',
                          'fontSize': '14px',
                          'color': '#606266',
                          'padding': '0 12px 0 0',
                          'boxSizing': 'border-box'
                        },
                        'attrObj': {
                          'name': 'label'
                        }
                      },
                      'childNodes': [
                        {
                          'className': 'WebTextNode',
                          'text': '单选'
                        }
                      ]
                    },
                    {
                      'tagName': 'div',
                      'className': 'RadioGroup',
                      'propObj': {
                        'styleObj': {
                          'height': '100%',
                          'lineHeight': '32px',
                          'paddingLeft': '43px',
                          'paddingRight': '43px',
                          'textAlign': 'center',
                          'backgroundColor': '#FFF',
                          'backgroundImage': 'none',
                          'borderRadius': '4px',
                          'border': '1px solid #DCDFE6',
                          'boxSizing': 'border-box',
                          'color': '#606266',
                          'display': 'inline-block',
                          'fontSize': 'inherit',
                          'outline': '0',
                          'padding': '0 15px',
                          'margin': '0',
                          'transition': 'border-color .2s cubic-bezier(.645,.045,.355,1)',
                          'width': 'calc(100% - 100px)'
                        },
                        'attrObj': {
                          'name': 'radio-group'
                        }
                      },
                      'childNodes': [
                        {
                          'tagName': 'span',
                          'className': 'RadioOption',
                          'propObj': {
                            'styleObj': {},
                            'attrObj': {}
                          },
                          'childNodes': [
                            {
                              'tagName': 'input',
                              'className': 'Input',
                              'propObj': {
                                'styleObj': {},
                                'attrObj': {
                                  'type': 'radio',
                                  'name': '单选0.4520548831312725',
                                  'label': '选项一/1',
                                  'value': 11,
                                  'checked': true
                                }
                              },
                              'childNodes': []
                            },
                            {
                              'className': 'WebTextNode',
                              'text': '选项一/1'
                            }
                          ]
                        },
                        {
                          'tagName': 'span',
                          'className': 'RadioOption',
                          'propObj': {
                            'styleObj': {},
                            'attrObj': {}
                          },
                          'childNodes': [
                            {
                              'tagName': 'input',
                              'className': 'Input',
                              'propObj': {
                                'styleObj': {},
                                'attrObj': {
                                  'type': 'radio',
                                  'name': '单选0.4520548831312725',
                                  'label': '选项一/2',
                                  'value': 12,
                                  'checked': false
                                }
                              },
                              'childNodes': []
                            },
                            {
                              'className': 'WebTextNode',
                              'text': '选项一/2'
                            }
                          ]
                        },
                        {
                          'tagName': 'span',
                          'className': 'RadioOption',
                          'propObj': {
                            'styleObj': {},
                            'attrObj': {}
                          },
                          'childNodes': [
                            {
                              'tagName': 'input',
                              'className': 'Input',
                              'propObj': {
                                'styleObj': {},
                                'attrObj': {
                                  'type': 'radio',
                                  'name': '单选0.4520548831312725',
                                  'label': '选项一/3',
                                  'value': 13,
                                  'checked': false
                                }
                              },
                              'childNodes': []
                            },
                            {
                              'className': 'WebTextNode',
                              'text': '选项一/3'
                            }
                          ]
                        }
                      ]
                    },
                    {
                      'tagName': 'span',
                      'className': 'Span',
                      'propObj': {
                        'styleObj': {
                          'float': 'right',
                          'backgroundColor': '#fff'
                        },
                        'attrObj': {}
                      },
                      'childNodes': [
                        {
                          'tagName': 'svg',
                          'className': 'DeleteSvg',
                          'propObj': {
                            'styleObj': {},
                            'attrObj': {
                              'version': '1.1',
                              'xmlns': 'http://www.w3.org/2000/svg',
                              'width': 20,
                              'height': 20,
                              'viewBox': '0 0 1024 1024'
                            }
                          },
                          'childNodes': [
                            {
                              'tagName': 'path',
                              'className': 'SvgPath',
                              'propObj': {
                                'styleObj': {},
                                'attrObj': {
                                  'd': 'M608 768c-17.696 0-32-14.304-32-32L576 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C640 753.696 625.696 768 608 768z M416 768c-17.696 0-32-14.304-32-32L384 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C448 753.696 433.696 768 416 768z M928 224l-160 0L768 160c0-52.928-42.72-96-95.264-96L352 64C299.072 64 256 107.072 256 160l0 64L96 224C78.304 224 64 238.304 64 256s14.304 32 32 32l832 0c17.696 0 32-14.304 32-32S945.696 224 928 224zM320 160c0-17.632 14.368-32 32-32l320.736 0C690.272 128 704 142.048 704 160l0 64L320 224 320 160z M736.128 960 288.064 960c-52.928 0-96-43.072-96-96L192.064 383.52c0-17.664 14.336-32 32-32s32 14.336 32 32L256.064 864c0 17.664 14.368 32 32 32l448.064 0c17.664 0 32-14.336 32-32L768.128 384.832c0-17.664 14.304-32 32-32s32 14.336 32 32L832.128 864C832.128 916.928 789.056 960 736.128 960z'
                                }
                              },
                              'childNodes': []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              'tagName': 'div',
              'className': 'CheckboxControl',
              'propObj': {
                'styleObj': {
                  'display': 'inline-block',
                  'width': '100%',
                  'padding': '10px',
                  'marginBottom': '10px!important',
                  'border': '1px solid #e2e0e0',
                  'boxSizing': 'border-box',
                  'zIndex': 9
                },
                'attrObj': {
                  'draggable': 'true',
                  'ctrl-id': 2,
                  'default-value': '',
                  'name': 'checkbox-control',
                  'option-config': '{"name":"复选0.3484456203990578","resultValue":1,"options":[{"label":"选项一","value":1,"checked":true,"selected":true,"options":[{"label":"选项一/1","value":11,"checked":true,"selected":true},{"label":"选项一/2","value":12,"checked":false,"selected":false},{"label":"选项一/3","value":13,"checked":false,"selected":false}]},{"label":"选项二","value":2,"checked":false,"selected":false,"options":[{"label":"选项二/1","value":21,"checked":false,"selected":false},{"label":"选项二/2","value":22,"checked":false,"selected":false},{"label":"选项二/3","value":23,"checked":false,"selected":false}]},{"label":"选项三","value":3,"checked":false,"selected":false,"options":[{"label":"选项三/1","value":31,"checked":false,"selected":false},{"label":"选项三/2","value":32,"checked":false,"selected":false},{"label":"选项三/3","value":33,"checked":false,"selected":false}]}]}',
                  'field-name': 'table1.field2',
                  'value': '11,12'
                }
              },
              'childNodes': [
                {
                  'tagName': 'div',
                  'className': 'CheckboxItem',
                  'propObj': {
                    'styleObj': {
                      'border': '1px solid #1890ff',
                      'background': '#f3f9ff',
                      'padding': '10px',
                      'marginBottom': '10px!important',
                      'fontSize': '14px',
                      'display': 'block'
                    },
                    'attrObj': {}
                  },
                  'childNodes': [
                    {
                      'tagName': 'label',
                      'className': 'Label',
                      'propObj': {
                        'styleObj': {
                          'width': '100px',
                          'lineHeight': '32px',
                          'textAlign': 'right',
                          'verticalAlign': 'middle',
                          'float': 'left',
                          'fontSize': '14px',
                          'color': '#606266',
                          'padding': '0 12px 0 0',
                          'boxSizing': 'border-box'
                        },
                        'attrObj': {
                          'name': 'label'
                        }
                      },
                      'childNodes': [
                        {
                          'className': 'WebTextNode',
                          'text': '复选'
                        }
                      ]
                    },
                    {
                      'tagName': 'div',
                      'className': 'CheckboxGroup',
                      'propObj': {
                        'styleObj': {
                          'height': '100%',
                          'lineHeight': '32px',
                          'paddingLeft': '43px',
                          'paddingRight': '43px',
                          'textAlign': 'center',
                          'backgroundColor': '#FFF',
                          'backgroundImage': 'none',
                          'borderRadius': '4px',
                          'border': '1px solid #DCDFE6',
                          'boxSizing': 'border-box',
                          'color': '#606266',
                          'display': 'inline-block',
                          'fontSize': 'inherit',
                          'outline': '0',
                          'padding': '0 15px',
                          'margin': '0',
                          'transition': 'border-color .2s cubic-bezier(.645,.045,.355,1)',
                          'width': 'calc(100% - 100px)'
                        },
                        'attrObj': {
                          'name': 'checkbox-group'
                        }
                      },
                      'childNodes': [
                        {
                          'tagName': 'span',
                          'className': 'CheckboxOption',
                          'propObj': {
                            'styleObj': {},
                            'attrObj': {}
                          },
                          'childNodes': [
                            {
                              'tagName': 'input',
                              'className': 'Input',
                              'propObj': {
                                'styleObj': {},
                                'attrObj': {
                                  'type': 'checkbox',
                                  'name': '复选0.3484456203990578',
                                  'label': '选项一/1',
                                  'value': 11,
                                  'checked': true
                                }
                              },
                              'childNodes': []
                            },
                            {
                              'className': 'WebTextNode',
                              'text': '选项一/1'
                            }
                          ]
                        },
                        {
                          'tagName': 'span',
                          'className': 'CheckboxOption',
                          'propObj': {
                            'styleObj': {},
                            'attrObj': {}
                          },
                          'childNodes': [
                            {
                              'tagName': 'input',
                              'className': 'Input',
                              'propObj': {
                                'styleObj': {},
                                'attrObj': {
                                  'type': 'checkbox',
                                  'name': '复选0.3484456203990578',
                                  'label': '选项一/2',
                                  'value': 12,
                                  'checked': false
                                }
                              },
                              'childNodes': []
                            },
                            {
                              'className': 'WebTextNode',
                              'text': '选项一/2'
                            }
                          ]
                        },
                        {
                          'tagName': 'span',
                          'className': 'CheckboxOption',
                          'propObj': {
                            'styleObj': {},
                            'attrObj': {}
                          },
                          'childNodes': [
                            {
                              'tagName': 'input',
                              'className': 'Input',
                              'propObj': {
                                'styleObj': {},
                                'attrObj': {
                                  'type': 'checkbox',
                                  'name': '复选0.3484456203990578',
                                  'label': '选项一/3',
                                  'value': 13,
                                  'checked': false
                                }
                              },
                              'childNodes': []
                            },
                            {
                              'className': 'WebTextNode',
                              'text': '选项一/3'
                            }
                          ]
                        }
                      ]
                    },
                    {
                      'tagName': 'span',
                      'className': 'Span',
                      'propObj': {
                        'styleObj': {
                          'float': 'right',
                          'backgroundColor': '#fff'
                        },
                        'attrObj': {}
                      },
                      'childNodes': [
                        {
                          'tagName': 'svg',
                          'className': 'DeleteSvg',
                          'propObj': {
                            'styleObj': {},
                            'attrObj': {
                              'version': '1.1',
                              'xmlns': 'http://www.w3.org/2000/svg',
                              'width': 20,
                              'height': 20,
                              'viewBox': '0 0 1024 1024'
                            }
                          },
                          'childNodes': [
                            {
                              'tagName': 'path',
                              'className': 'SvgPath',
                              'propObj': {
                                'styleObj': {},
                                'attrObj': {
                                  'd': 'M608 768c-17.696 0-32-14.304-32-32L576 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C640 753.696 625.696 768 608 768z M416 768c-17.696 0-32-14.304-32-32L384 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C448 753.696 433.696 768 416 768z M928 224l-160 0L768 160c0-52.928-42.72-96-95.264-96L352 64C299.072 64 256 107.072 256 160l0 64L96 224C78.304 224 64 238.304 64 256s14.304 32 32 32l832 0c17.696 0 32-14.304 32-32S945.696 224 928 224zM320 160c0-17.632 14.368-32 32-32l320.736 0C690.272 128 704 142.048 704 160l0 64L320 224 320 160z M736.128 960 288.064 960c-52.928 0-96-43.072-96-96L192.064 383.52c0-17.664 14.336-32 32-32s32 14.336 32 32L256.064 864c0 17.664 14.368 32 32 32l448.064 0c17.664 0 32-14.336 32-32L768.128 384.832c0-17.664 14.304-32 32-32s32 14.336 32 32L832.128 864C832.128 916.928 789.056 960 736.128 960z'
                                }
                              },
                              'childNodes': []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              'tagName': 'div',
              'className': 'SelectControl',
              'propObj': {
                'styleObj': {
                  'display': 'inline-block',
                  'width': '100%',
                  'padding': '10px',
                  'marginBottom': '10px!important',
                  'border': '1px solid #e2e0e0',
                  'boxSizing': 'border-box',
                  'zIndex': 9
                },
                'attrObj': {
                  'draggable': 'true',
                  'ctrl-id': 3,
                  'default-value': '',
                  'name': 'select-control',
                  'option-config': '{"name":"下拉选择0.369625384027505","resultValue":1,"options":[{"label":"选项一","value":1,"checked":true,"selected":true,"options":[{"label":"选项一/1","value":11,"checked":true,"selected":true},{"label":"选项一/2","value":12,"checked":false,"selected":false},{"label":"选项一/3","value":13,"checked":false,"selected":false}]},{"label":"选项二","value":2,"checked":false,"selected":false,"options":[{"label":"选项二/1","value":21,"checked":false,"selected":false},{"label":"选项二/2","value":22,"checked":false,"selected":false},{"label":"选项二/3","value":23,"checked":false,"selected":false}]},{"label":"选项三","value":3,"checked":false,"selected":false,"options":[{"label":"选项三/1","value":31,"checked":false,"selected":false},{"label":"选项三/2","value":32,"checked":false,"selected":false},{"label":"选项三/3","value":33,"checked":false,"selected":false}]}]}',
                  'field-name': 'table1.field3',
                  'value': '12'
                }
              },
              'childNodes': [
                {
                  'tagName': 'div',
                  'className': 'SelectItem',
                  'propObj': {
                    'styleObj': {
                      'border': '1px solid #1890ff',
                      'background': '#f3f9ff',
                      'padding': '10px',
                      'marginBottom': '10px!important',
                      'fontSize': '14px',
                      'display': 'block'
                    },
                    'attrObj': {}
                  },
                  'childNodes': [
                    {
                      'tagName': 'label',
                      'className': 'Label',
                      'propObj': {
                        'styleObj': {
                          'width': '100px',
                          'lineHeight': '32px',
                          'textAlign': 'right',
                          'verticalAlign': 'middle',
                          'float': 'left',
                          'fontSize': '14px',
                          'color': '#606266',
                          'padding': '0 12px 0 0',
                          'boxSizing': 'border-box'
                        },
                        'attrObj': {
                          'name': 'label'
                        }
                      },
                      'childNodes': [
                        {
                          'className': 'WebTextNode',
                          'text': '下拉选择框'
                        }
                      ]
                    },
                    {
                      'tagName': 'select',
                      'className': 'Select',
                      'propObj': {
                        'styleObj': {
                          'height': '32px',
                          'lineHeight': '32px',
                          'paddingLeft': '43px',
                          'paddingRight': '43px',
                          'textAlign': 'center',
                          'backgroundColor': '#FFF',
                          'backgroundImage': 'none',
                          'borderRadius': '4px',
                          'border': '1px solid #DCDFE6',
                          'boxSizing': 'border-box',
                          'color': '#606266',
                          'display': 'inline-block',
                          'fontSize': 'inherit',
                          'outline': '0',
                          'padding': '0 15px',
                          'margin': '0',
                          'transition': 'border-color .2s cubic-bezier(.645,.045,.355,1)',
                          'width': 'calc(100% - 100px)'
                        },
                        'attrObj': {
                          'name': 'select'
                        }
                      },
                      'childNodes': [
                        {
                          'tagName': 'option',
                          'className': 'WebOption',
                          'propObj': {
                            'styleObj': {},
                            'attrObj': {
                              'name': 'option',
                              'label': '请选择',
                              'value': 0,
                              'selected': true
                            }
                          },
                          'childNodes': [
                            {
                              'className': 'WebTextNode',
                              'text': '请选择'
                            }
                          ]
                        },
                        {
                          'tagName': 'option',
                          'className': 'WebOption',
                          'propObj': {
                            'styleObj': {},
                            'attrObj': {
                              'name': 'option',
                              'label': '选项一/1',
                              'value': 11
                            }
                          },
                          'childNodes': [
                            {
                              'className': 'WebTextNode',
                              'text': '选项一/1'
                            }
                          ]
                        },
                        {
                          'tagName': 'option',
                          'className': 'WebOption',
                          'propObj': {
                            'styleObj': {},
                            'attrObj': {
                              'name': 'option',
                              'label': '选项一/2',
                              'value': 12
                            }
                          },
                          'childNodes': [
                            {
                              'className': 'WebTextNode',
                              'text': '选项一/2'
                            }
                          ]
                        },
                        {
                          'tagName': 'option',
                          'className': 'WebOption',
                          'propObj': {
                            'styleObj': {},
                            'attrObj': {
                              'name': 'option',
                              'label': '选项一/3',
                              'value': 13
                            }
                          },
                          'childNodes': [
                            {
                              'className': 'WebTextNode',
                              'text': '选项一/3'
                            }
                          ]
                        }
                      ]
                    },
                    {
                      'tagName': 'span',
                      'className': 'Span',
                      'propObj': {
                        'styleObj': {
                          'float': 'right',
                          'backgroundColor': '#fff'
                        },
                        'attrObj': {}
                      },
                      'childNodes': [
                        {
                          'tagName': 'svg',
                          'className': 'DeleteSvg',
                          'propObj': {
                            'styleObj': {},
                            'attrObj': {
                              'version': '1.1',
                              'xmlns': 'http://www.w3.org/2000/svg',
                              'width': 20,
                              'height': 20,
                              'viewBox': '0 0 1024 1024'
                            }
                          },
                          'childNodes': [
                            {
                              'tagName': 'path',
                              'className': 'SvgPath',
                              'propObj': {
                                'styleObj': {},
                                'attrObj': {
                                  'd': 'M608 768c-17.696 0-32-14.304-32-32L576 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C640 753.696 625.696 768 608 768z M416 768c-17.696 0-32-14.304-32-32L384 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C448 753.696 433.696 768 416 768z M928 224l-160 0L768 160c0-52.928-42.72-96-95.264-96L352 64C299.072 64 256 107.072 256 160l0 64L96 224C78.304 224 64 238.304 64 256s14.304 32 32 32l832 0c17.696 0 32-14.304 32-32S945.696 224 928 224zM320 160c0-17.632 14.368-32 32-32l320.736 0C690.272 128 704 142.048 704 160l0 64L320 224 320 160z M736.128 960 288.064 960c-52.928 0-96-43.072-96-96L192.064 383.52c0-17.664 14.336-32 32-32s32 14.336 32 32L256.064 864c0 17.664 14.368 32 32 32l448.064 0c17.664 0 32-14.336 32-32L768.128 384.832c0-17.664 14.304-32 32-32s32 14.336 32 32L832.128 864C832.128 916.928 789.056 960 736.128 960z'
                                }
                              },
                              'childNodes': []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              'tagName': 'div',
              'className': 'AttachmentControl',
              'propObj': {
                'styleObj': {
                  'display': 'inline-block',
                  'width': '100%',
                  'padding': '10px',
                  'marginBottom': '10px!important',
                  'border': '1px solid #e2e0e0',
                  'boxSizing': 'border-box',
                  'zIndex': 9
                },
                'attrObj': {
                  'draggable': 'true',
                  'ctrl-id': 4,
                  'default-value': '',
                  'name': 'attachment-control',
                  'field-name': 'table2.field1',
                  'value': ''
                }
              },
              'childNodes': [
                {
                  'tagName': 'div',
                  'className': 'InputItem',
                  'propObj': {
                    'styleObj': {
                      'border': '1px solid #1890ff',
                      'background': '#f3f9ff',
                      'padding': '10px',
                      'marginBottom': '10px!important',
                      'fontSize': '14px',
                      'display': 'block'
                    },
                    'attrObj': {}
                  },
                  'childNodes': [
                    {
                      'tagName': 'label',
                      'className': 'Label',
                      'propObj': {
                        'styleObj': {
                          'width': '100px',
                          'lineHeight': '32px',
                          'textAlign': 'right',
                          'verticalAlign': 'middle',
                          'float': 'left',
                          'fontSize': '14px',
                          'color': '#606266',
                          'padding': '0 12px 0 0',
                          'boxSizing': 'border-box'
                        },
                        'attrObj': {
                          'name': 'label'
                        }
                      },
                      'childNodes': [
                        {
                          'className': 'WebTextNode',
                          'text': '附件'
                        }
                      ]
                    },
                    {
                      'tagName': 'input',
                      'className': 'Input',
                      'propObj': {
                        'styleObj': {
                          'height': '32px',
                          'lineHeight': '32px',
                          'paddingLeft': '43px',
                          'paddingRight': '43px',
                          'textAlign': 'center',
                          'backgroundColor': '#FFF',
                          'backgroundImage': 'none',
                          'borderRadius': '4px',
                          'border': '1px solid #DCDFE6',
                          'boxSizing': 'border-box',
                          'color': '#606266',
                          'display': 'inline-block',
                          'fontSize': 'inherit',
                          'outline': '0',
                          'padding': '0 15px',
                          'margin': '0',
                          'transition': 'border-color .2s cubic-bezier(.645,.045,.355,1)',
                          'width': 'calc(100% - 100px)'
                        },
                        'attrObj': {
                          'type': 'file',
                          'placeholder': '请选择附件',
                          'value': ''
                        }
                      },
                      'childNodes': []
                    },
                    {
                      'tagName': 'span',
                      'className': 'Span',
                      'propObj': {
                        'styleObj': {
                          'float': 'right',
                          'backgroundColor': '#fff'
                        },
                        'attrObj': {}
                      },
                      'childNodes': [
                        {
                          'tagName': 'svg',
                          'className': 'DeleteSvg',
                          'propObj': {
                            'styleObj': {},
                            'attrObj': {
                              'version': '1.1',
                              'xmlns': 'http://www.w3.org/2000/svg',
                              'width': 20,
                              'height': 20,
                              'viewBox': '0 0 1024 1024'
                            }
                          },
                          'childNodes': [
                            {
                              'tagName': 'path',
                              'className': 'SvgPath',
                              'propObj': {
                                'styleObj': {},
                                'attrObj': {
                                  'd': 'M608 768c-17.696 0-32-14.304-32-32L576 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C640 753.696 625.696 768 608 768z M416 768c-17.696 0-32-14.304-32-32L384 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C448 753.696 433.696 768 416 768z M928 224l-160 0L768 160c0-52.928-42.72-96-95.264-96L352 64C299.072 64 256 107.072 256 160l0 64L96 224C78.304 224 64 238.304 64 256s14.304 32 32 32l832 0c17.696 0 32-14.304 32-32S945.696 224 928 224zM320 160c0-17.632 14.368-32 32-32l320.736 0C690.272 128 704 142.048 704 160l0 64L320 224 320 160z M736.128 960 288.064 960c-52.928 0-96-43.072-96-96L192.064 383.52c0-17.664 14.336-32 32-32s32 14.336 32 32L256.064 864c0 17.664 14.368 32 32 32l448.064 0c17.664 0 32-14.336 32-32L768.128 384.832c0-17.664 14.304-32 32-32s32 14.336 32 32L832.128 864C832.128 916.928 789.056 960 736.128 960z'
                                }
                              },
                              'childNodes': []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          'tagName': 'div',
          'className': 'WebPage',
          'propObj': {
            'styleObj': {
              'position': 'relative',
              'fontFamily': '宋体',
              'fontSize': '3.5mm',
              'boxShadow': '0px 0px 20px #000',
              'boxSizing': 'border-box',
              'margin': '5mm',
              'minHeight': '300px',
              'maxHeight': 'calc(564px - 60px - 10mm)',
              'overflowY': 'auto',
              'backgroundColor': '#fff',
              'backgroundImage': '',
              'display': 'none'
            },
            'attrObj': {
              'landscape': false,
              'pageIndex': 2,
              'name': 'web-page'
            }
          },
          'childNodes': [
            {
              'tagName': 'div',
              'className': 'ConnectionControl',
              'propObj': {
                'styleObj': {
                  'display': 'inline-block',
                  'width': '100%',
                  'padding': '10px',
                  'marginBottom': '10px!important',
                  'border': '1px solid #e2e0e0',
                  'boxSizing': 'border-box',
                  'zIndex': 9
                },
                'attrObj': {
                  'draggable': 'true',
                  'ctrl-id': 5,
                  'default-value': '',
                  'name': 'button-control',
                  'field-name': 'table2.field2',
                  'value': '选择1'
                }
              },
              'childNodes': [
                {
                  'tagName': 'div',
                  'className': 'ButtonItem',
                  'propObj': {
                    'styleObj': {
                      'border': '1px solid #1890ff',
                      'background': '#f3f9ff',
                      'padding': '10px',
                      'marginBottom': '10px!important',
                      'fontSize': '14px',
                      'display': 'block'
                    },
                    'attrObj': {
                      'name': 'button-item'
                    }
                  },
                  'childNodes': [
                    {
                      'tagName': 'label',
                      'className': 'Label',
                      'propObj': {
                        'styleObj': {
                          'width': '100px',
                          'lineHeight': '32px',
                          'textAlign': 'right',
                          'verticalAlign': 'middle',
                          'float': 'left',
                          'fontSize': '14px',
                          'color': '#606266',
                          'padding': '0 12px 0 0',
                          'boxSizing': 'border-box'
                        },
                        'attrObj': {
                          'name': 'label'
                        }
                      },
                      'childNodes': [
                        {
                          'className': 'WebTextNode',
                          'text': '关联选项'
                        }
                      ]
                    },
                    {
                      'tagName': 'input',
                      'className': 'Input',
                      'propObj': {
                        'styleObj': {
                          'height': '32px',
                          'lineHeight': '32px',
                          'paddingLeft': '43px',
                          'paddingRight': '43px',
                          'textAlign': 'center',
                          'backgroundColor': '#FFF',
                          'backgroundImage': 'none',
                          'borderRadius': '4px',
                          'border': '1px solid #DCDFE6',
                          'boxSizing': 'border-box',
                          'color': '#606266',
                          'display': 'inline-block',
                          'fontSize': 'inherit',
                          'outline': '0',
                          'padding': '0 15px',
                          'margin': '0',
                          'transition': 'border-color .2s cubic-bezier(.645,.045,.355,1)',
                          'width': 'calc(100% - 100px)'
                        },
                        'attrObj': {
                          'name': 'button-item-content',
                          'type': 'button',
                          'value': '选择1'
                        }
                      },
                      'childNodes': []
                    },
                    {
                      'tagName': 'span',
                      'className': 'Span',
                      'propObj': {
                        'styleObj': {
                          'float': 'right',
                          'backgroundColor': '#fff'
                        },
                        'attrObj': {}
                      },
                      'childNodes': [
                        {
                          'tagName': 'svg',
                          'className': 'DeleteSvg',
                          'propObj': {
                            'styleObj': {},
                            'attrObj': {
                              'version': '1.1',
                              'xmlns': 'http://www.w3.org/2000/svg',
                              'width': 20,
                              'height': 20,
                              'viewBox': '0 0 1024 1024'
                            }
                          },
                          'childNodes': [
                            {
                              'tagName': 'path',
                              'className': 'SvgPath',
                              'propObj': {
                                'styleObj': {},
                                'attrObj': {
                                  'd': 'M608 768c-17.696 0-32-14.304-32-32L576 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C640 753.696 625.696 768 608 768z M416 768c-17.696 0-32-14.304-32-32L384 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C448 753.696 433.696 768 416 768z M928 224l-160 0L768 160c0-52.928-42.72-96-95.264-96L352 64C299.072 64 256 107.072 256 160l0 64L96 224C78.304 224 64 238.304 64 256s14.304 32 32 32l832 0c17.696 0 32-14.304 32-32S945.696 224 928 224zM320 160c0-17.632 14.368-32 32-32l320.736 0C690.272 128 704 142.048 704 160l0 64L320 224 320 160z M736.128 960 288.064 960c-52.928 0-96-43.072-96-96L192.064 383.52c0-17.664 14.336-32 32-32s32 14.336 32 32L256.064 864c0 17.664 14.368 32 32 32l448.064 0c17.664 0 32-14.336 32-32L768.128 384.832c0-17.664 14.304-32 32-32s32 14.336 32 32L832.128 864C832.128 916.928 789.056 960 736.128 960z'
                                }
                              },
                              'childNodes': []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              'tagName': 'div',
              'className': 'TableControl',
              'propObj': {
                'styleObj': {
                  'display': 'inline-block',
                  'width': '100%',
                  'padding': '10px',
                  'marginBottom': '10px!important',
                  'border': '1px solid #e2e0e0',
                  'boxSizing': 'border-box',
                  'zIndex': 9
                },
                'attrObj': {
                  'draggable': 'true',
                  'ctrl-id': 6,
                  'default-value': '',
                  'name': 'table-control'
                }
              },
              'childNodes': [
                {
                  'tagName': 'div',
                  'className': 'TableItem',
                  'propObj': {
                    'styleObj': {
                      'border': '1px solid #1890ff',
                      'background': '#f3f9ff',
                      'padding': '10px',
                      'marginBottom': '10px!important',
                      'fontSize': '14px',
                      'display': 'block'
                    },
                    'attrObj': {}
                  },
                  'childNodes': [
                    {
                      'tagName': 'label',
                      'className': 'Label',
                      'propObj': {
                        'styleObj': {
                          'display': 'block',
                          'width': '100%',
                          'lineHeight': '36px',
                          'color': '#606266',
                          'textAlign': 'center',
                          'verticalAlign': 'middle',
                          'fontWeight': 'bold',
                          'fontSize': '20px',
                          'padding': '10px'
                        },
                        'attrObj': {
                          'name': 'label'
                        }
                      },
                      'childNodes': [
                        {
                          'className': 'WebTextNode',
                          'text': '表格名称'
                        }
                      ]
                    },
                    {
                      'tagName': 'table',
                      'className': 'WebTable',
                      'propObj': {
                        'styleObj': {
                          'height': '100%',
                          'width': '100%',
                          'borderWidth': '1px',
                          'borderStyle': 'solid',
                          'borderColor': '#DCDFE6',
                          'backgroundColor': '#fff'
                        },
                        'attrObj': {}
                      },
                      'childNodes': [
                        {
                          'tagName': 'thead',
                          'className': 'WebTableHead',
                          'propObj': {
                            'styleObj': {},
                            'attrObj': {}
                          },
                          'childNodes': [
                            {
                              'tagName': 'th',
                              'className': 'WebTableHeader',
                              'propObj': {
                                'styleObj': {},
                                'attrObj': {
                                  'name': 'table3.field1'
                                }
                              },
                              'childNodes': [
                                {
                                  'className': 'WebTextNode',
                                  'text': '字段3-1'
                                }
                              ]
                            },
                            {
                              'tagName': 'th',
                              'className': 'WebTableHeader',
                              'propObj': {
                                'styleObj': {},
                                'attrObj': {
                                  'name': 'table3.field2'
                                }
                              },
                              'childNodes': [
                                {
                                  'className': 'WebTextNode',
                                  'text': '字段3-2'
                                }
                              ]
                            },
                            {
                              'tagName': 'th',
                              'className': 'WebTableHeader',
                              'propObj': {
                                'styleObj': {},
                                'attrObj': {
                                  'name': 'table3.field3'
                                }
                              },
                              'childNodes': [
                                {
                                  'className': 'WebTextNode',
                                  'text': '字段3-3'
                                }
                              ]
                            }
                          ]
                        },
                        {
                          'tagName': 'tr',
                          'className': 'WebTableRow',
                          'propObj': {
                            'styleObj': {},
                            'attrObj': {}
                          },
                          'childNodes': [
                            {
                              'tagName': 'td',
                              'className': 'WebTableDataCell',
                              'propObj': {
                                'styleObj': {
                                  'borderWidth': '1px',
                                  'borderStyle': 'solid',
                                  'borderColor': '#DCDFE6',
                                  'display': 'table-cell'
                                },
                                'attrObj': {}
                              },
                              'childNodes': [
                                {
                                  'tagName': 'div',
                                  'className': 'SelectControl',
                                  'propObj': {
                                    'styleObj': {},
                                    'attrObj': {
                                      'default-value': '',
                                      'name': 'select-control',
                                      'option-config': '{"name":"下拉选择0.42824261874382086","resultValue":1,"options":[{"label":"选项一","value":1,"checked":true,"selected":true,"options":[{"label":"选项一/1","value":11,"checked":true,"selected":true},{"label":"选项一/2","value":12,"checked":false,"selected":false},{"label":"选项一/3","value":13,"checked":false,"selected":false}]},{"label":"选项二","value":2,"checked":false,"selected":false,"options":[{"label":"选项二/1","value":21,"checked":false,"selected":false},{"label":"选项二/2","value":22,"checked":false,"selected":false},{"label":"选项二/3","value":23,"checked":false,"selected":false}]},{"label":"选项三","value":3,"checked":false,"selected":false,"options":[{"label":"选项三/1","value":31,"checked":false,"selected":false},{"label":"选项三/2","value":32,"checked":false,"selected":false},{"label":"选项三/3","value":33,"checked":false,"selected":false}]}]}'
                                    }
                                  },
                                  'childNodes': [
                                    {
                                      'tagName': 'div',
                                      'className': 'SelectItem',
                                      'propObj': {
                                        'styleObj': {},
                                        'attrObj': {}
                                      },
                                      'childNodes': [
                                        {
                                          'tagName': 'label',
                                          'className': 'Label',
                                          'propObj': {
                                            'styleObj': {
                                              'width': '100px',
                                              'lineHeight': '32px',
                                              'textAlign': 'right',
                                              'verticalAlign': 'middle',
                                              'float': 'left',
                                              'fontSize': '14px',
                                              'color': '#606266',
                                              'padding': '0 12px 0 0',
                                              'boxSizing': 'border-box',
                                              'display': 'none'
                                            },
                                            'attrObj': {
                                              'name': 'label'
                                            }
                                          },
                                          'childNodes': [
                                            {
                                              'className': 'WebTextNode',
                                              'text': '下拉选择框'
                                            }
                                          ]
                                        },
                                        {
                                          'tagName': 'select',
                                          'className': 'Select',
                                          'propObj': {
                                            'styleObj': {
                                              'height': '32px',
                                              'lineHeight': '32px',
                                              'paddingLeft': '43px',
                                              'paddingRight': '43px',
                                              'textAlign': 'center',
                                              'backgroundColor': '#FFF',
                                              'backgroundImage': 'none',
                                              'borderRadius': '4px',
                                              'border': '1px solid #DCDFE6',
                                              'boxSizing': 'border-box',
                                              'color': '#606266',
                                              'display': 'inline-block',
                                              'fontSize': 'inherit',
                                              'outline': '0',
                                              'padding': '0 15px',
                                              'margin': '0',
                                              'transition': 'border-color .2s cubic-bezier(.645,.045,.355,1)',
                                              'width': '100%'
                                            },
                                            'attrObj': {
                                              'name': 'select'
                                            }
                                          },
                                          'childNodes': [
                                            {
                                              'tagName': 'option',
                                              'className': 'WebOption',
                                              'propObj': {
                                                'styleObj': {},
                                                'attrObj': {
                                                  'name': 'option',
                                                  'label': '请选择',
                                                  'value': 0,
                                                  'selected': true
                                                }
                                              },
                                              'childNodes': [
                                                {
                                                  'className': 'WebTextNode',
                                                  'text': '请选择'
                                                }
                                              ]
                                            },
                                            {
                                              'tagName': 'option',
                                              'className': 'WebOption',
                                              'propObj': {
                                                'styleObj': {},
                                                'attrObj': {
                                                  'name': 'option',
                                                  'label': '选项一/1',
                                                  'value': 11
                                                }
                                              },
                                              'childNodes': [
                                                {
                                                  'className': 'WebTextNode',
                                                  'text': '选项一/1'
                                                }
                                              ]
                                            },
                                            {
                                              'tagName': 'option',
                                              'className': 'WebOption',
                                              'propObj': {
                                                'styleObj': {},
                                                'attrObj': {
                                                  'name': 'option',
                                                  'label': '选项一/2',
                                                  'value': 12
                                                }
                                              },
                                              'childNodes': [
                                                {
                                                  'className': 'WebTextNode',
                                                  'text': '选项一/2'
                                                }
                                              ]
                                            },
                                            {
                                              'tagName': 'option',
                                              'className': 'WebOption',
                                              'propObj': {
                                                'styleObj': {},
                                                'attrObj': {
                                                  'name': 'option',
                                                  'label': '选项一/3',
                                                  'value': 13
                                                }
                                              },
                                              'childNodes': [
                                                {
                                                  'className': 'WebTextNode',
                                                  'text': '选项一/3'
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        {
                                          'tagName': 'span',
                                          'className': 'Span',
                                          'propObj': {
                                            'styleObj': {
                                              'float': 'right',
                                              'backgroundColor': '#fff',
                                              'display': 'none'
                                            },
                                            'attrObj': {}
                                          },
                                          'childNodes': [
                                            {
                                              'tagName': 'svg',
                                              'className': 'DeleteSvg',
                                              'propObj': {
                                                'styleObj': {},
                                                'attrObj': {
                                                  'version': '1.1',
                                                  'xmlns': 'http://www.w3.org/2000/svg',
                                                  'width': 20,
                                                  'height': 20,
                                                  'viewBox': '0 0 1024 1024'
                                                }
                                              },
                                              'childNodes': [
                                                {
                                                  'tagName': 'path',
                                                  'className': 'SvgPath',
                                                  'propObj': {
                                                    'styleObj': {},
                                                    'attrObj': {
                                                      'd': 'M608 768c-17.696 0-32-14.304-32-32L576 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C640 753.696 625.696 768 608 768z M416 768c-17.696 0-32-14.304-32-32L384 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C448 753.696 433.696 768 416 768z M928 224l-160 0L768 160c0-52.928-42.72-96-95.264-96L352 64C299.072 64 256 107.072 256 160l0 64L96 224C78.304 224 64 238.304 64 256s14.304 32 32 32l832 0c17.696 0 32-14.304 32-32S945.696 224 928 224zM320 160c0-17.632 14.368-32 32-32l320.736 0C690.272 128 704 142.048 704 160l0 64L320 224 320 160z M736.128 960 288.064 960c-52.928 0-96-43.072-96-96L192.064 383.52c0-17.664 14.336-32 32-32s32 14.336 32 32L256.064 864c0 17.664 14.368 32 32 32l448.064 0c17.664 0 32-14.336 32-32L768.128 384.832c0-17.664 14.304-32 32-32s32 14.336 32 32L832.128 864C832.128 916.928 789.056 960 736.128 960z'
                                                    }
                                                  },
                                                  'childNodes': []
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              'tagName': 'td',
                              'className': 'WebTableDataCell',
                              'propObj': {
                                'styleObj': {
                                  'borderWidth': '1px',
                                  'borderStyle': 'solid',
                                  'borderColor': '#DCDFE6',
                                  'display': 'table-cell'
                                },
                                'attrObj': {}
                              },
                              'childNodes': [
                                {
                                  'tagName': 'div',
                                  'className': 'RadioControl',
                                  'propObj': {
                                    'styleObj': {},
                                    'attrObj': {
                                      'default-value': '',
                                      'name': 'radio-control',
                                      'option-config': '{"name":"单选0.15577801512644096","resultValue":1,"options":[{"label":"选项一","value":1,"checked":true,"selected":true,"options":[{"label":"选项一/1","value":11,"checked":true,"selected":true},{"label":"选项一/2","value":12,"checked":false,"selected":false},{"label":"选项一/3","value":13,"checked":false,"selected":false}]},{"label":"选项二","value":2,"checked":false,"selected":false,"options":[{"label":"选项二/1","value":21,"checked":false,"selected":false},{"label":"选项二/2","value":22,"checked":false,"selected":false},{"label":"选项二/3","value":23,"checked":false,"selected":false}]},{"label":"选项三","value":3,"checked":false,"selected":false,"options":[{"label":"选项三/1","value":31,"checked":false,"selected":false},{"label":"选项三/2","value":32,"checked":false,"selected":false},{"label":"选项三/3","value":33,"checked":false,"selected":false}]}]}'
                                    }
                                  },
                                  'childNodes': [
                                    {
                                      'tagName': 'div',
                                      'className': 'RadioItem',
                                      'propObj': {
                                        'styleObj': {},
                                        'attrObj': {}
                                      },
                                      'childNodes': [
                                        {
                                          'tagName': 'label',
                                          'className': 'Label',
                                          'propObj': {
                                            'styleObj': {
                                              'width': '100px',
                                              'lineHeight': '32px',
                                              'textAlign': 'right',
                                              'verticalAlign': 'middle',
                                              'float': 'left',
                                              'fontSize': '14px',
                                              'color': '#606266',
                                              'padding': '0 12px 0 0',
                                              'boxSizing': 'border-box',
                                              'display': 'none'
                                            },
                                            'attrObj': {
                                              'name': 'label'
                                            }
                                          },
                                          'childNodes': [
                                            {
                                              'className': 'WebTextNode',
                                              'text': '单选'
                                            }
                                          ]
                                        },
                                        {
                                          'tagName': 'div',
                                          'className': 'RadioGroup',
                                          'propObj': {
                                            'styleObj': {
                                              'height': '100%',
                                              'lineHeight': '32px',
                                              'paddingLeft': '43px',
                                              'paddingRight': '43px',
                                              'textAlign': 'center',
                                              'backgroundColor': '#FFF',
                                              'backgroundImage': 'none',
                                              'borderRadius': '4px',
                                              'border': '1px solid #DCDFE6',
                                              'boxSizing': 'border-box',
                                              'color': '#606266',
                                              'display': 'inline-block',
                                              'fontSize': 'inherit',
                                              'outline': '0',
                                              'padding': '0 15px',
                                              'margin': '0',
                                              'transition': 'border-color .2s cubic-bezier(.645,.045,.355,1)',
                                              'width': '100%'
                                            },
                                            'attrObj': {
                                              'name': 'radio-group'
                                            }
                                          },
                                          'childNodes': [
                                            {
                                              'tagName': 'span',
                                              'className': 'RadioOption',
                                              'propObj': {
                                                'styleObj': {},
                                                'attrObj': {}
                                              },
                                              'childNodes': [
                                                {
                                                  'tagName': 'input',
                                                  'className': 'Input',
                                                  'propObj': {
                                                    'styleObj': {},
                                                    'attrObj': {
                                                      'type': 'radio',
                                                      'name': '单选0.15577801512644096',
                                                      'label': '选项一/1',
                                                      'value': 11,
                                                      'checked': true
                                                    }
                                                  },
                                                  'childNodes': []
                                                },
                                                {
                                                  'className': 'WebTextNode',
                                                  'text': '选项一/1'
                                                }
                                              ]
                                            },
                                            {
                                              'tagName': 'span',
                                              'className': 'RadioOption',
                                              'propObj': {
                                                'styleObj': {},
                                                'attrObj': {}
                                              },
                                              'childNodes': [
                                                {
                                                  'tagName': 'input',
                                                  'className': 'Input',
                                                  'propObj': {
                                                    'styleObj': {},
                                                    'attrObj': {
                                                      'type': 'radio',
                                                      'name': '单选0.15577801512644096',
                                                      'label': '选项一/2',
                                                      'value': 12,
                                                      'checked': false
                                                    }
                                                  },
                                                  'childNodes': []
                                                },
                                                {
                                                  'className': 'WebTextNode',
                                                  'text': '选项一/2'
                                                }
                                              ]
                                            },
                                            {
                                              'tagName': 'span',
                                              'className': 'RadioOption',
                                              'propObj': {
                                                'styleObj': {},
                                                'attrObj': {}
                                              },
                                              'childNodes': [
                                                {
                                                  'tagName': 'input',
                                                  'className': 'Input',
                                                  'propObj': {
                                                    'styleObj': {},
                                                    'attrObj': {
                                                      'type': 'radio',
                                                      'name': '单选0.15577801512644096',
                                                      'label': '选项一/3',
                                                      'value': 13,
                                                      'checked': false
                                                    }
                                                  },
                                                  'childNodes': []
                                                },
                                                {
                                                  'className': 'WebTextNode',
                                                  'text': '选项一/3'
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        {
                                          'tagName': 'span',
                                          'className': 'Span',
                                          'propObj': {
                                            'styleObj': {
                                              'float': 'right',
                                              'backgroundColor': '#fff',
                                              'display': 'none'
                                            },
                                            'attrObj': {}
                                          },
                                          'childNodes': [
                                            {
                                              'tagName': 'svg',
                                              'className': 'DeleteSvg',
                                              'propObj': {
                                                'styleObj': {},
                                                'attrObj': {
                                                  'version': '1.1',
                                                  'xmlns': 'http://www.w3.org/2000/svg',
                                                  'width': 20,
                                                  'height': 20,
                                                  'viewBox': '0 0 1024 1024'
                                                }
                                              },
                                              'childNodes': [
                                                {
                                                  'tagName': 'path',
                                                  'className': 'SvgPath',
                                                  'propObj': {
                                                    'styleObj': {},
                                                    'attrObj': {
                                                      'd': 'M608 768c-17.696 0-32-14.304-32-32L576 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C640 753.696 625.696 768 608 768z M416 768c-17.696 0-32-14.304-32-32L384 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C448 753.696 433.696 768 416 768z M928 224l-160 0L768 160c0-52.928-42.72-96-95.264-96L352 64C299.072 64 256 107.072 256 160l0 64L96 224C78.304 224 64 238.304 64 256s14.304 32 32 32l832 0c17.696 0 32-14.304 32-32S945.696 224 928 224zM320 160c0-17.632 14.368-32 32-32l320.736 0C690.272 128 704 142.048 704 160l0 64L320 224 320 160z M736.128 960 288.064 960c-52.928 0-96-43.072-96-96L192.064 383.52c0-17.664 14.336-32 32-32s32 14.336 32 32L256.064 864c0 17.664 14.368 32 32 32l448.064 0c17.664 0 32-14.336 32-32L768.128 384.832c0-17.664 14.304-32 32-32s32 14.336 32 32L832.128 864C832.128 916.928 789.056 960 736.128 960z'
                                                    }
                                                  },
                                                  'childNodes': []
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              'tagName': 'td',
                              'className': 'WebTableDataCell',
                              'propObj': {
                                'styleObj': {
                                  'borderWidth': '1px',
                                  'borderStyle': 'solid',
                                  'borderColor': '#DCDFE6',
                                  'display': 'table-cell'
                                },
                                'attrObj': {}
                              },
                              'childNodes': [
                                {
                                  'tagName': 'div',
                                  'className': 'CheckboxControl',
                                  'propObj': {
                                    'styleObj': {},
                                    'attrObj': {
                                      'default-value': '',
                                      'name': 'checkbox-control',
                                      'option-config': '{"name":"复选0.8134857736479795","resultValue":1,"options":[{"label":"选项一","value":1,"checked":true,"selected":true,"options":[{"label":"选项一/1","value":11,"checked":true,"selected":true},{"label":"选项一/2","value":12,"checked":false,"selected":false},{"label":"选项一/3","value":13,"checked":false,"selected":false}]},{"label":"选项二","value":2,"checked":false,"selected":false,"options":[{"label":"选项二/1","value":21,"checked":false,"selected":false},{"label":"选项二/2","value":22,"checked":false,"selected":false},{"label":"选项二/3","value":23,"checked":false,"selected":false}]},{"label":"选项三","value":3,"checked":false,"selected":false,"options":[{"label":"选项三/1","value":31,"checked":false,"selected":false},{"label":"选项三/2","value":32,"checked":false,"selected":false},{"label":"选项三/3","value":33,"checked":false,"selected":false}]}]}'
                                    }
                                  },
                                  'childNodes': [
                                    {
                                      'tagName': 'div',
                                      'className': 'CheckboxItem',
                                      'propObj': {
                                        'styleObj': {},
                                        'attrObj': {}
                                      },
                                      'childNodes': [
                                        {
                                          'tagName': 'label',
                                          'className': 'Label',
                                          'propObj': {
                                            'styleObj': {
                                              'width': '100px',
                                              'lineHeight': '32px',
                                              'textAlign': 'right',
                                              'verticalAlign': 'middle',
                                              'float': 'left',
                                              'fontSize': '14px',
                                              'color': '#606266',
                                              'padding': '0 12px 0 0',
                                              'boxSizing': 'border-box',
                                              'display': 'none'
                                            },
                                            'attrObj': {
                                              'name': 'label'
                                            }
                                          },
                                          'childNodes': [
                                            {
                                              'className': 'WebTextNode',
                                              'text': '复选'
                                            }
                                          ]
                                        },
                                        {
                                          'tagName': 'div',
                                          'className': 'CheckboxGroup',
                                          'propObj': {
                                            'styleObj': {
                                              'height': '100%',
                                              'lineHeight': '32px',
                                              'paddingLeft': '43px',
                                              'paddingRight': '43px',
                                              'textAlign': 'center',
                                              'backgroundColor': '#FFF',
                                              'backgroundImage': 'none',
                                              'borderRadius': '4px',
                                              'border': '1px solid #DCDFE6',
                                              'boxSizing': 'border-box',
                                              'color': '#606266',
                                              'display': 'inline-block',
                                              'fontSize': 'inherit',
                                              'outline': '0',
                                              'padding': '0 15px',
                                              'margin': '0',
                                              'transition': 'border-color .2s cubic-bezier(.645,.045,.355,1)',
                                              'width': '100%'
                                            },
                                            'attrObj': {
                                              'name': 'checkbox-group'
                                            }
                                          },
                                          'childNodes': [
                                            {
                                              'tagName': 'span',
                                              'className': 'CheckboxOption',
                                              'propObj': {
                                                'styleObj': {},
                                                'attrObj': {}
                                              },
                                              'childNodes': [
                                                {
                                                  'tagName': 'input',
                                                  'className': 'Input',
                                                  'propObj': {
                                                    'styleObj': {},
                                                    'attrObj': {
                                                      'type': 'checkbox',
                                                      'name': '复选0.8134857736479795',
                                                      'label': '选项一/1',
                                                      'value': 11,
                                                      'checked': true
                                                    }
                                                  },
                                                  'childNodes': []
                                                },
                                                {
                                                  'className': 'WebTextNode',
                                                  'text': '选项一/1'
                                                }
                                              ]
                                            },
                                            {
                                              'tagName': 'span',
                                              'className': 'CheckboxOption',
                                              'propObj': {
                                                'styleObj': {},
                                                'attrObj': {}
                                              },
                                              'childNodes': [
                                                {
                                                  'tagName': 'input',
                                                  'className': 'Input',
                                                  'propObj': {
                                                    'styleObj': {},
                                                    'attrObj': {
                                                      'type': 'checkbox',
                                                      'name': '复选0.8134857736479795',
                                                      'label': '选项一/2',
                                                      'value': 12,
                                                      'checked': false
                                                    }
                                                  },
                                                  'childNodes': []
                                                },
                                                {
                                                  'className': 'WebTextNode',
                                                  'text': '选项一/2'
                                                }
                                              ]
                                            },
                                            {
                                              'tagName': 'span',
                                              'className': 'CheckboxOption',
                                              'propObj': {
                                                'styleObj': {},
                                                'attrObj': {}
                                              },
                                              'childNodes': [
                                                {
                                                  'tagName': 'input',
                                                  'className': 'Input',
                                                  'propObj': {
                                                    'styleObj': {},
                                                    'attrObj': {
                                                      'type': 'checkbox',
                                                      'name': '复选0.8134857736479795',
                                                      'label': '选项一/3',
                                                      'value': 13,
                                                      'checked': false
                                                    }
                                                  },
                                                  'childNodes': []
                                                },
                                                {
                                                  'className': 'WebTextNode',
                                                  'text': '选项一/3'
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        {
                                          'tagName': 'span',
                                          'className': 'Span',
                                          'propObj': {
                                            'styleObj': {
                                              'float': 'right',
                                              'backgroundColor': '#fff',
                                              'display': 'none'
                                            },
                                            'attrObj': {}
                                          },
                                          'childNodes': [
                                            {
                                              'tagName': 'svg',
                                              'className': 'DeleteSvg',
                                              'propObj': {
                                                'styleObj': {},
                                                'attrObj': {
                                                  'version': '1.1',
                                                  'xmlns': 'http://www.w3.org/2000/svg',
                                                  'width': 20,
                                                  'height': 20,
                                                  'viewBox': '0 0 1024 1024'
                                                }
                                              },
                                              'childNodes': [
                                                {
                                                  'tagName': 'path',
                                                  'className': 'SvgPath',
                                                  'propObj': {
                                                    'styleObj': {},
                                                    'attrObj': {
                                                      'd': 'M608 768c-17.696 0-32-14.304-32-32L576 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C640 753.696 625.696 768 608 768z M416 768c-17.696 0-32-14.304-32-32L384 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C448 753.696 433.696 768 416 768z M928 224l-160 0L768 160c0-52.928-42.72-96-95.264-96L352 64C299.072 64 256 107.072 256 160l0 64L96 224C78.304 224 64 238.304 64 256s14.304 32 32 32l832 0c17.696 0 32-14.304 32-32S945.696 224 928 224zM320 160c0-17.632 14.368-32 32-32l320.736 0C690.272 128 704 142.048 704 160l0 64L320 224 320 160z M736.128 960 288.064 960c-52.928 0-96-43.072-96-96L192.064 383.52c0-17.664 14.336-32 32-32s32 14.336 32 32L256.064 864c0 17.664 14.368 32 32 32l448.064 0c17.664 0 32-14.336 32-32L768.128 384.832c0-17.664 14.304-32 32-32s32 14.336 32 32L832.128 864C832.128 916.928 789.056 960 736.128 960z'
                                                    }
                                                  },
                                                  'childNodes': []
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      'tagName': 'span',
                      'className': 'Span',
                      'propObj': {
                        'styleObj': {
                          'float': 'right',
                          'backgroundColor': '#fff'
                        },
                        'attrObj': {}
                      },
                      'childNodes': [
                        {
                          'tagName': 'svg',
                          'className': 'DeleteSvg',
                          'propObj': {
                            'styleObj': {},
                            'attrObj': {
                              'version': '1.1',
                              'xmlns': 'http://www.w3.org/2000/svg',
                              'width': 20,
                              'height': 20,
                              'viewBox': '0 0 1024 1024'
                            }
                          },
                          'childNodes': [
                            {
                              'tagName': 'path',
                              'className': 'SvgPath',
                              'propObj': {
                                'styleObj': {},
                                'attrObj': {
                                  'd': 'M608 768c-17.696 0-32-14.304-32-32L576 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C640 753.696 625.696 768 608 768z M416 768c-17.696 0-32-14.304-32-32L384 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C448 753.696 433.696 768 416 768z M928 224l-160 0L768 160c0-52.928-42.72-96-95.264-96L352 64C299.072 64 256 107.072 256 160l0 64L96 224C78.304 224 64 238.304 64 256s14.304 32 32 32l832 0c17.696 0 32-14.304 32-32S945.696 224 928 224zM320 160c0-17.632 14.368-32 32-32l320.736 0C690.272 128 704 142.048 704 160l0 64L320 224 320 160z M736.128 960 288.064 960c-52.928 0-96-43.072-96-96L192.064 383.52c0-17.664 14.336-32 32-32s32 14.336 32 32L256.064 864c0 17.664 14.368 32 32 32l448.064 0c17.664 0 32-14.336 32-32L768.128 384.832c0-17.664 14.304-32 32-32s32 14.336 32 32L832.128 864C832.128 916.928 789.056 960 736.128 960z'
                                }
                              },
                              'childNodes': []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          'tagName': 'div',
          'className': 'WebPage',
          'propObj': {
            'styleObj': {
              'position': 'relative',
              'fontFamily': '宋体',
              'fontSize': '3.5mm',
              'boxShadow': '0px 0px 20px #000',
              'boxSizing': 'border-box',
              'margin': '5mm',
              'minHeight': '300px',
              'maxHeight': 'calc(564px - 60px - 10mm)',
              'overflowY': 'auto',
              'backgroundColor': '#fff',
              'backgroundImage': '',
              'display': 'block'
            },
            'attrObj': {
              'landscape': false,
              'pageIndex': 3,
              'name': 'web-page'
            }
          },
          'childNodes': []
        }
      ]
    }
  ]
};
export const exampleData: IFormData = {
  'table': [
    {
      'table3.field1': '12',
      'table3.field2': '12',
      'table3.field3': '11,13,12'
    }
  ],
  'table1.field1': '12',
  'table1.field2': '11,12',
  'table1.field3': '12',
  'table2.field1': '',
  'table2.field2': '选择1'
};

// 2张表格
export const tableJson: IWebDocument = {
  'tagName': 'div',
  'className': 'WebDocument',
  'propObj': {
    'styleObj': {},
    'attrObj': {
      'name': 'document-content',
      'field-config': '{"name":"selectOptions","resultValue":"table2.field3","options":[{"label":"表1","value":"table1","checked":false,"selected":false,"options":[{"label":"字段1-1","value":"table1.field1","checked":false,"selected":false},{"label":"字段1-2","value":"table1.field2","checked":false,"selected":false},{"label":"字段1-3","value":"table1.field3","checked":false,"selected":false}]},{"label":"表2","value":"table2","checked":false,"selected":false,"options":[{"label":"字段2-1","value":"table2.field1","checked":false,"selected":false},{"label":"字段2-2","value":"table2.field2","checked":false,"selected":false},{"label":"字段2-3","value":"table2.field3","checked":false,"selected":false}]},{"label":"表3","value":"table3","checked":false,"selected":false,"options":[{"label":"字段3-1","value":"table3.field1","checked":false,"selected":false},{"label":"字段3-2","value":"table3.field2","checked":false,"selected":false},{"label":"字段3-3","value":"table3.field3","checked":false,"selected":false}]}]}'
    }
  },
  'childNodes': [
    {
      'tagName': 'ul',
      'className': 'WebDocumentTabs',
      'propObj': {
        'styleObj': {
          'display': 'none',
          'listStyle': 'none',
          'backgroundColor': '#f0f0f0',
          'padding': '0 5px',
          'marginTop': '-35px',
          'width': '414px'
        },
        'attrObj': {
          'name': 'document-tabs'
        }
      },
      'childNodes': [
        {
          'tagName': 'li',
          'className': 'ListItem',
          'propObj': {
            'styleObj': {
              'width': '150px',
              'textAlign': 'center',
              'padding': '6px 14px',
              'borderRadius': '4px 4px 0px 0px',
              'borderBottom': 'none',
              'boxSizing': 'border-box',
              'borderTop': '1px solid #d2d2d2',
              'borderLeft': '1px solid #d2d2d2',
              'borderRight': '1px solid #d2d2d2',
              'overflowWrap': 'break-word',
              'overflow': 'hidden',
              'fontSize': '14px',
              'paddingTop': '10px',
              'backgroundColor': '#ffffff'
            },
            'attrObj': {
              'name': 'list-item'
            }
          },
          'childNodes': [
            {
              'className': 'WebTextNode',
              'text': '首页'
            }
          ]
        }
      ]
    },
    {
      'tagName': 'div',
      'className': 'WebDocumentContents',
      'propObj': {
        'styleObj': {},
        'attrObj': {
          'name': 'document-contents'
        }
      },
      'childNodes': [
        {
          'tagName': 'div',
          'className': 'WebPage',
          'propObj': {
            'styleObj': {
              'position': 'relative',
              'fontFamily': '宋体',
              'fontSize': '3.5mm',
              'boxShadow': '0px 0px 20px #000',
              'boxSizing': 'border-box',
              'margin': '5mm',
              'minHeight': '300px',
              'maxHeight': 'calc(600px - 60px - 10mm)',
              'overflowY': 'auto',
              'backgroundColor': '#fff',
              'backgroundImage': ''
            },
            'attrObj': {
              'landscape': false,
              'pageIndex': 1,
              'name': 'web-page'
            }
          },
          'childNodes': [
            {
              'tagName': 'div',
              'className': 'TableControl',
              'propObj': {
                'styleObj': {
                  'display': 'inline-block',
                  'width': '100%',
                  'padding': '10px',
                  'marginBottom': '10px!important',
                  'border': '1px solid #e2e0e0',
                  'boxSizing': 'border-box',
                  'zIndex': 9
                },
                'attrObj': {
                  'draggable': 'true',
                  'ctrl-id': 1,
                  'default-value': '',
                  'name': 'table-control'
                }
              },
              'childNodes': [
                {
                  'tagName': 'div',
                  'className': 'TableItem',
                  'propObj': {
                    'styleObj': {
                      'border': '1px solid #1890ff',
                      'background': '#f3f9ff',
                      'padding': '10px',
                      'marginBottom': '10px!important',
                      'fontSize': '14px',
                      'display': 'block'
                    },
                    'attrObj': {}
                  },
                  'childNodes': [
                    {
                      'tagName': 'label',
                      'className': 'Label',
                      'propObj': {
                        'styleObj': {
                          'display': 'block',
                          'width': '100%',
                          'lineHeight': '36px',
                          'color': '#606266',
                          'textAlign': 'center',
                          'verticalAlign': 'middle',
                          'fontWeight': 'bold',
                          'fontSize': '20px',
                          'padding': '10px'
                        },
                        'attrObj': {
                          'name': 'label'
                        }
                      },
                      'childNodes': [
                        {
                          'className': 'WebTextNode',
                          'text': '表格名称'
                        }
                      ]
                    },
                    {
                      'tagName': 'table',
                      'className': 'WebTable',
                      'propObj': {
                        'styleObj': {
                          'height': '100%',
                          'width': '100%',
                          'borderWidth': '1px',
                          'borderStyle': 'solid',
                          'borderColor': '#DCDFE6',
                          'backgroundColor': '#fff'
                        },
                        'attrObj': {}
                      },
                      'childNodes': [
                        {
                          'tagName': 'thead',
                          'className': 'WebTableHead',
                          'propObj': {
                            'styleObj': {},
                            'attrObj': {}
                          },
                          'childNodes': [
                            {
                              'tagName': 'th',
                              'className': 'WebTableHeader',
                              'propObj': {
                                'styleObj': {},
                                'attrObj': {
                                  'name': 'table1.field1'
                                }
                              },
                              'childNodes': [
                                {
                                  'className': 'WebTextNode',
                                  'text': '字段1-1'
                                }
                              ]
                            },
                            {
                              'tagName': 'th',
                              'className': 'WebTableHeader',
                              'propObj': {
                                'styleObj': {},
                                'attrObj': {
                                  'name': 'table1.field2'
                                }
                              },
                              'childNodes': [
                                {
                                  'className': 'WebTextNode',
                                  'text': '字段1-2'
                                }
                              ]
                            },
                            {
                              'tagName': 'th',
                              'className': 'WebTableHeader',
                              'propObj': {
                                'styleObj': {},
                                'attrObj': {
                                  'name': 'table1.field3'
                                }
                              },
                              'childNodes': [
                                {
                                  'className': 'WebTextNode',
                                  'text': '字段1-3'
                                }
                              ]
                            }
                          ]
                        },
                        {
                          'tagName': 'tr',
                          'className': 'WebTableRow',
                          'propObj': {
                            'styleObj': {},
                            'attrObj': {
                              'row-id': '{"table1.ID":"1114"}'
                            }
                          },
                          'childNodes': [
                            {
                              'tagName': 'td',
                              'className': 'WebTableDataCell',
                              'propObj': {
                                'styleObj': {
                                  'borderWidth': '1px',
                                  'borderStyle': 'solid',
                                  'borderColor': '#DCDFE6',
                                  'display': 'table-cell'
                                },
                                'attrObj': {}
                              },
                              'childNodes': [
                                {
                                  'tagName': 'div',
                                  'className': 'SelectControl',
                                  'propObj': {
                                    'styleObj': {},
                                    'attrObj': {
                                      'default-value': '',
                                      'name': 'select-control',
                                      'option-config': '{"name":"下拉选择0.52826451695526","resultValue":1,"options":[{"label":"选项一","value":1,"checked":true,"selected":true,"options":[{"label":"选项一/1","value":11,"checked":true,"selected":true},{"label":"选项一/2","value":12,"checked":false,"selected":false},{"label":"选项一/3","value":13,"checked":false,"selected":false}]},{"label":"选项二","value":2,"checked":false,"selected":false,"options":[{"label":"选项二/1","value":21,"checked":false,"selected":false},{"label":"选项二/2","value":22,"checked":false,"selected":false},{"label":"选项二/3","value":23,"checked":false,"selected":false}]},{"label":"选项三","value":3,"checked":false,"selected":false,"options":[{"label":"选项三/1","value":31,"checked":false,"selected":false},{"label":"选项三/2","value":32,"checked":false,"selected":false},{"label":"选项三/3","value":33,"checked":false,"selected":false}]}]}',
                                      'value': '0'
                                    }
                                  },
                                  'childNodes': [
                                    {
                                      'tagName': 'div',
                                      'className': 'SelectItem',
                                      'propObj': {
                                        'styleObj': {},
                                        'attrObj': {}
                                      },
                                      'childNodes': [
                                        {
                                          'tagName': 'label',
                                          'className': 'Label',
                                          'propObj': {
                                            'styleObj': {
                                              'width': '100px',
                                              'lineHeight': '32px',
                                              'textAlign': 'right',
                                              'verticalAlign': 'middle',
                                              'float': 'left',
                                              'fontSize': '14px',
                                              'color': '#606266',
                                              'padding': '0 12px 0 0',
                                              'boxSizing': 'border-box',
                                              'display': 'none'
                                            },
                                            'attrObj': {
                                              'name': 'label'
                                            }
                                          },
                                          'childNodes': [
                                            {
                                              'className': 'WebTextNode',
                                              'text': '下拉选择框'
                                            }
                                          ]
                                        },
                                        {
                                          'tagName': 'select',
                                          'className': 'Select',
                                          'propObj': {
                                            'styleObj': {
                                              'height': '32px',
                                              'lineHeight': '32px',
                                              'paddingLeft': '43px',
                                              'paddingRight': '43px',
                                              'textAlign': 'center',
                                              'backgroundColor': '#FFF',
                                              'backgroundImage': 'none',
                                              'borderRadius': '4px',
                                              'border': '1px solid #DCDFE6',
                                              'boxSizing': 'border-box',
                                              'color': '#606266',
                                              'display': 'inline-block',
                                              'fontSize': 'inherit',
                                              'outline': '0',
                                              'padding': '0 15px',
                                              'margin': '0',
                                              'transition': 'border-color .2s cubic-bezier(.645,.045,.355,1)',
                                              'width': '100%'
                                            },
                                            'attrObj': {
                                              'name': 'select'
                                            }
                                          },
                                          'childNodes': [
                                            {
                                              'tagName': 'option',
                                              'className': 'WebOption',
                                              'propObj': {
                                                'styleObj': {},
                                                'attrObj': {
                                                  'name': 'option',
                                                  'label': '请选择',
                                                  'value': 0
                                                }
                                              },
                                              'childNodes': [
                                                {
                                                  'className': 'WebTextNode',
                                                  'text': '请选择'
                                                }
                                              ]
                                            },
                                            {
                                              'tagName': 'option',
                                              'className': 'WebOption',
                                              'propObj': {
                                                'styleObj': {},
                                                'attrObj': {
                                                  'name': 'option',
                                                  'label': '选项一/1',
                                                  'value': 11,
                                                  'selected': true
                                                }
                                              },
                                              'childNodes': [
                                                {
                                                  'className': 'WebTextNode',
                                                  'text': '选项一/1'
                                                }
                                              ]
                                            },
                                            {
                                              'tagName': 'option',
                                              'className': 'WebOption',
                                              'propObj': {
                                                'styleObj': {},
                                                'attrObj': {
                                                  'name': 'option',
                                                  'label': '选项一/2',
                                                  'value': 12
                                                }
                                              },
                                              'childNodes': [
                                                {
                                                  'className': 'WebTextNode',
                                                  'text': '选项一/2'
                                                }
                                              ]
                                            },
                                            {
                                              'tagName': 'option',
                                              'className': 'WebOption',
                                              'propObj': {
                                                'styleObj': {},
                                                'attrObj': {
                                                  'name': 'option',
                                                  'label': '选项一/3',
                                                  'value': 13
                                                }
                                              },
                                              'childNodes': [
                                                {
                                                  'className': 'WebTextNode',
                                                  'text': '选项一/3'
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        {
                                          'tagName': 'span',
                                          'className': 'Span',
                                          'propObj': {
                                            'styleObj': {
                                              'float': 'right',
                                              'backgroundColor': '#fff',
                                              'display': 'none'
                                            },
                                            'attrObj': {}
                                          },
                                          'childNodes': [
                                            {
                                              'tagName': 'svg',
                                              'className': 'DeleteSvg',
                                              'propObj': {
                                                'styleObj': {},
                                                'attrObj': {
                                                  'version': '1.1',
                                                  'xmlns': 'http://www.w3.org/2000/svg',
                                                  'width': 20,
                                                  'height': 20,
                                                  'viewBox': '0 0 1024 1024'
                                                }
                                              },
                                              'childNodes': [
                                                {
                                                  'tagName': 'path',
                                                  'className': 'SvgPath',
                                                  'propObj': {
                                                    'styleObj': {},
                                                    'attrObj': {
                                                      'd': 'M608 768c-17.696 0-32-14.304-32-32L576 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C640 753.696 625.696 768 608 768z M416 768c-17.696 0-32-14.304-32-32L384 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C448 753.696 433.696 768 416 768z M928 224l-160 0L768 160c0-52.928-42.72-96-95.264-96L352 64C299.072 64 256 107.072 256 160l0 64L96 224C78.304 224 64 238.304 64 256s14.304 32 32 32l832 0c17.696 0 32-14.304 32-32S945.696 224 928 224zM320 160c0-17.632 14.368-32 32-32l320.736 0C690.272 128 704 142.048 704 160l0 64L320 224 320 160z M736.128 960 288.064 960c-52.928 0-96-43.072-96-96L192.064 383.52c0-17.664 14.336-32 32-32s32 14.336 32 32L256.064 864c0 17.664 14.368 32 32 32l448.064 0c17.664 0 32-14.336 32-32L768.128 384.832c0-17.664 14.304-32 32-32s32 14.336 32 32L832.128 864C832.128 916.928 789.056 960 736.128 960z'
                                                    }
                                                  },
                                                  'childNodes': []
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              'tagName': 'td',
                              'className': 'WebTableDataCell',
                              'propObj': {
                                'styleObj': {
                                  'borderWidth': '1px',
                                  'borderStyle': 'solid',
                                  'borderColor': '#DCDFE6',
                                  'display': 'table-cell'
                                },
                                'attrObj': {}
                              },
                              'childNodes': [
                                {
                                  'tagName': 'div',
                                  'className': 'SelectControl',
                                  'propObj': {
                                    'styleObj': {},
                                    'attrObj': {
                                      'default-value': '',
                                      'name': 'select-control',
                                      'option-config': '{"name":"下拉选择0.11117854336283872","resultValue":2,"options":[{"label":"选项一","value":1,"checked":true,"selected":true,"options":[{"label":"选项一/1","value":11,"checked":true,"selected":true},{"label":"选项一/2","value":12,"checked":false,"selected":false},{"label":"选项一/3","value":13,"checked":false,"selected":false}]},{"label":"选项二","value":2,"checked":false,"selected":false,"options":[{"label":"选项二/1","value":21,"checked":false,"selected":false},{"label":"选项二/2","value":22,"checked":false,"selected":false},{"label":"选项二/3","value":23,"checked":false,"selected":false}]},{"label":"选项三","value":3,"checked":false,"selected":false,"options":[{"label":"选项三/1","value":31,"checked":false,"selected":false},{"label":"选项三/2","value":32,"checked":false,"selected":false},{"label":"选项三/3","value":33,"checked":false,"selected":false}]}]}',
                                      'value': '0'
                                    }
                                  },
                                  'childNodes': [
                                    {
                                      'tagName': 'div',
                                      'className': 'SelectItem',
                                      'propObj': {
                                        'styleObj': {},
                                        'attrObj': {}
                                      },
                                      'childNodes': [
                                        {
                                          'tagName': 'label',
                                          'className': 'Label',
                                          'propObj': {
                                            'styleObj': {
                                              'width': '100px',
                                              'lineHeight': '32px',
                                              'textAlign': 'right',
                                              'verticalAlign': 'middle',
                                              'float': 'left',
                                              'fontSize': '14px',
                                              'color': '#606266',
                                              'padding': '0 12px 0 0',
                                              'boxSizing': 'border-box',
                                              'display': 'none'
                                            },
                                            'attrObj': {
                                              'name': 'label'
                                            }
                                          },
                                          'childNodes': [
                                            {
                                              'className': 'WebTextNode',
                                              'text': '下拉选择框'
                                            }
                                          ]
                                        },
                                        {
                                          'tagName': 'select',
                                          'className': 'Select',
                                          'propObj': {
                                            'styleObj': {
                                              'height': '32px',
                                              'lineHeight': '32px',
                                              'paddingLeft': '43px',
                                              'paddingRight': '43px',
                                              'textAlign': 'center',
                                              'backgroundColor': '#FFF',
                                              'backgroundImage': 'none',
                                              'borderRadius': '4px',
                                              'border': '1px solid #DCDFE6',
                                              'boxSizing': 'border-box',
                                              'color': '#606266',
                                              'display': 'inline-block',
                                              'fontSize': 'inherit',
                                              'outline': '0',
                                              'padding': '0 15px',
                                              'margin': '0',
                                              'transition': 'border-color .2s cubic-bezier(.645,.045,.355,1)',
                                              'width': '100%'
                                            },
                                            'attrObj': {
                                              'name': 'select'
                                            }
                                          },
                                          'childNodes': [
                                            {
                                              'tagName': 'option',
                                              'className': 'WebOption',
                                              'propObj': {
                                                'styleObj': {},
                                                'attrObj': {
                                                  'name': 'option',
                                                  'label': '请选择',
                                                  'value': 0
                                                }
                                              },
                                              'childNodes': [
                                                {
                                                  'className': 'WebTextNode',
                                                  'text': '请选择'
                                                }
                                              ]
                                            },
                                            {
                                              'tagName': 'option',
                                              'className': 'WebOption',
                                              'propObj': {
                                                'styleObj': {},
                                                'attrObj': {
                                                  'name': 'option',
                                                  'label': '选项二/1',
                                                  'value': 21,
                                                  'selected': true
                                                }
                                              },
                                              'childNodes': [
                                                {
                                                  'className': 'WebTextNode',
                                                  'text': '选项二/1'
                                                }
                                              ]
                                            },
                                            {
                                              'tagName': 'option',
                                              'className': 'WebOption',
                                              'propObj': {
                                                'styleObj': {},
                                                'attrObj': {
                                                  'name': 'option',
                                                  'label': '选项二/2',
                                                  'value': 22
                                                }
                                              },
                                              'childNodes': [
                                                {
                                                  'className': 'WebTextNode',
                                                  'text': '选项二/2'
                                                }
                                              ]
                                            },
                                            {
                                              'tagName': 'option',
                                              'className': 'WebOption',
                                              'propObj': {
                                                'styleObj': {},
                                                'attrObj': {
                                                  'name': 'option',
                                                  'label': '选项二/3',
                                                  'value': 23
                                                }
                                              },
                                              'childNodes': [
                                                {
                                                  'className': 'WebTextNode',
                                                  'text': '选项二/3'
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        {
                                          'tagName': 'span',
                                          'className': 'Span',
                                          'propObj': {
                                            'styleObj': {
                                              'float': 'right',
                                              'backgroundColor': '#fff',
                                              'display': 'none'
                                            },
                                            'attrObj': {}
                                          },
                                          'childNodes': [
                                            {
                                              'tagName': 'svg',
                                              'className': 'DeleteSvg',
                                              'propObj': {
                                                'styleObj': {},
                                                'attrObj': {
                                                  'version': '1.1',
                                                  'xmlns': 'http://www.w3.org/2000/svg',
                                                  'width': 20,
                                                  'height': 20,
                                                  'viewBox': '0 0 1024 1024'
                                                }
                                              },
                                              'childNodes': [
                                                {
                                                  'tagName': 'path',
                                                  'className': 'SvgPath',
                                                  'propObj': {
                                                    'styleObj': {},
                                                    'attrObj': {
                                                      'd': 'M608 768c-17.696 0-32-14.304-32-32L576 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C640 753.696 625.696 768 608 768z M416 768c-17.696 0-32-14.304-32-32L384 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C448 753.696 433.696 768 416 768z M928 224l-160 0L768 160c0-52.928-42.72-96-95.264-96L352 64C299.072 64 256 107.072 256 160l0 64L96 224C78.304 224 64 238.304 64 256s14.304 32 32 32l832 0c17.696 0 32-14.304 32-32S945.696 224 928 224zM320 160c0-17.632 14.368-32 32-32l320.736 0C690.272 128 704 142.048 704 160l0 64L320 224 320 160z M736.128 960 288.064 960c-52.928 0-96-43.072-96-96L192.064 383.52c0-17.664 14.336-32 32-32s32 14.336 32 32L256.064 864c0 17.664 14.368 32 32 32l448.064 0c17.664 0 32-14.336 32-32L768.128 384.832c0-17.664 14.304-32 32-32s32 14.336 32 32L832.128 864C832.128 916.928 789.056 960 736.128 960z'
                                                    }
                                                  },
                                                  'childNodes': []
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              'tagName': 'td',
                              'className': 'WebTableDataCell',
                              'propObj': {
                                'styleObj': {
                                  'borderWidth': '1px',
                                  'borderStyle': 'solid',
                                  'borderColor': '#DCDFE6',
                                  'display': 'table-cell'
                                },
                                'attrObj': {}
                              },
                              'childNodes': [
                                {
                                  'tagName': 'div',
                                  'className': 'SingleInputControl',
                                  'propObj': {
                                    'styleObj': {},
                                    'attrObj': {
                                      'default-value': '',
                                      'name': 'single-input-control',
                                      'value': ''
                                    }
                                  },
                                  'childNodes': [
                                    {
                                      'tagName': 'div',
                                      'className': 'InputItem',
                                      'propObj': {
                                        'styleObj': {},
                                        'attrObj': {}
                                      },
                                      'childNodes': [
                                        {
                                          'tagName': 'label',
                                          'className': 'Label',
                                          'propObj': {
                                            'styleObj': {
                                              'width': '100px',
                                              'lineHeight': '32px',
                                              'textAlign': 'right',
                                              'verticalAlign': 'middle',
                                              'float': 'left',
                                              'fontSize': '14px',
                                              'color': '#606266',
                                              'padding': '0 12px 0 0',
                                              'boxSizing': 'border-box',
                                              'display': 'none'
                                            },
                                            'attrObj': {
                                              'name': 'label'
                                            }
                                          },
                                          'childNodes': [
                                            {
                                              'className': 'WebTextNode',
                                              'text': '单行输入'
                                            }
                                          ]
                                        },
                                        {
                                          'tagName': 'input',
                                          'className': 'Input',
                                          'propObj': {
                                            'styleObj': {
                                              'height': '32px',
                                              'lineHeight': '32px',
                                              'paddingLeft': '43px',
                                              'paddingRight': '43px',
                                              'textAlign': 'center',
                                              'backgroundColor': '#FFF',
                                              'backgroundImage': 'none',
                                              'borderRadius': '4px',
                                              'border': '1px solid #DCDFE6',
                                              'boxSizing': 'border-box',
                                              'color': '#606266',
                                              'display': 'inline-block',
                                              'fontSize': 'inherit',
                                              'outline': '0',
                                              'padding': '0 15px',
                                              'margin': '0',
                                              'transition': 'border-color .2s cubic-bezier(.645,.045,.355,1)',
                                              'width': '100%'
                                            },
                                            'attrObj': {
                                              'type': 'text',
                                              'placeholder': '请输入',
                                              'value': ''
                                            }
                                          },
                                          'childNodes': []
                                        },
                                        {
                                          'tagName': 'span',
                                          'className': 'Span',
                                          'propObj': {
                                            'styleObj': {
                                              'float': 'right',
                                              'backgroundColor': '#fff',
                                              'display': 'none'
                                            },
                                            'attrObj': {}
                                          },
                                          'childNodes': [
                                            {
                                              'tagName': 'svg',
                                              'className': 'DeleteSvg',
                                              'propObj': {
                                                'styleObj': {},
                                                'attrObj': {
                                                  'version': '1.1',
                                                  'xmlns': 'http://www.w3.org/2000/svg',
                                                  'width': 20,
                                                  'height': 20,
                                                  'viewBox': '0 0 1024 1024'
                                                }
                                              },
                                              'childNodes': [
                                                {
                                                  'tagName': 'path',
                                                  'className': 'SvgPath',
                                                  'propObj': {
                                                    'styleObj': {},
                                                    'attrObj': {
                                                      'd': 'M608 768c-17.696 0-32-14.304-32-32L576 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C640 753.696 625.696 768 608 768z M416 768c-17.696 0-32-14.304-32-32L384 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C448 753.696 433.696 768 416 768z M928 224l-160 0L768 160c0-52.928-42.72-96-95.264-96L352 64C299.072 64 256 107.072 256 160l0 64L96 224C78.304 224 64 238.304 64 256s14.304 32 32 32l832 0c17.696 0 32-14.304 32-32S945.696 224 928 224zM320 160c0-17.632 14.368-32 32-32l320.736 0C690.272 128 704 142.048 704 160l0 64L320 224 320 160z M736.128 960 288.064 960c-52.928 0-96-43.072-96-96L192.064 383.52c0-17.664 14.336-32 32-32s32 14.336 32 32L256.064 864c0 17.664 14.368 32 32 32l448.064 0c17.664 0 32-14.336 32-32L768.128 384.832c0-17.664 14.304-32 32-32s32 14.336 32 32L832.128 864C832.128 916.928 789.056 960 736.128 960z'
                                                    }
                                                  },
                                                  'childNodes': []
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          'tagName': 'tr',
                          'className': 'WebTableRow',
                          'propObj': {
                            'styleObj': {},
                            'attrObj': {
                              'row-id': '{"table1.ID":"1114"}'
                            }
                          },
                          'childNodes': [
                            {
                              'tagName': 'td',
                              'className': 'WebTableDataCell',
                              'propObj': {
                                'styleObj': {
                                  'borderWidth': '1px',
                                  'borderStyle': 'solid',
                                  'borderColor': '#DCDFE6',
                                  'display': 'table-cell'
                                },
                                'attrObj': {}
                              },
                              'childNodes': [
                                {
                                  'tagName': 'div',
                                  'className': 'SelectControl',
                                  'propObj': {
                                    'styleObj': {},
                                    'attrObj': {
                                      'default-value': '',
                                      'name': 'select-control',
                                      'option-config': '{"name":"下拉选择0.52826451695526","resultValue":1,"options":[{"label":"选项一","value":1,"checked":true,"selected":true,"options":[{"label":"选项一/1","value":11,"checked":true,"selected":true},{"label":"选项一/2","value":12,"checked":false,"selected":false},{"label":"选项一/3","value":13,"checked":false,"selected":false}]},{"label":"选项二","value":2,"checked":false,"selected":false,"options":[{"label":"选项二/1","value":21,"checked":false,"selected":false},{"label":"选项二/2","value":22,"checked":false,"selected":false},{"label":"选项二/3","value":23,"checked":false,"selected":false}]},{"label":"选项三","value":3,"checked":false,"selected":false,"options":[{"label":"选项三/1","value":31,"checked":false,"selected":false},{"label":"选项三/2","value":32,"checked":false,"selected":false},{"label":"选项三/3","value":33,"checked":false,"selected":false}]}]}',
                                      'value': '0'
                                    }
                                  },
                                  'childNodes': [
                                    {
                                      'tagName': 'div',
                                      'className': 'SelectItem',
                                      'propObj': {
                                        'styleObj': {},
                                        'attrObj': {}
                                      },
                                      'childNodes': [
                                        {
                                          'tagName': 'label',
                                          'className': 'Label',
                                          'propObj': {
                                            'styleObj': {
                                              'width': '100px',
                                              'lineHeight': '32px',
                                              'textAlign': 'right',
                                              'verticalAlign': 'middle',
                                              'float': 'left',
                                              'fontSize': '14px',
                                              'color': '#606266',
                                              'padding': '0 12px 0 0',
                                              'boxSizing': 'border-box',
                                              'display': 'none'
                                            },
                                            'attrObj': {
                                              'name': 'label'
                                            }
                                          },
                                          'childNodes': [
                                            {
                                              'className': 'WebTextNode',
                                              'text': '下拉选择框'
                                            }
                                          ]
                                        },
                                        {
                                          'tagName': 'select',
                                          'className': 'Select',
                                          'propObj': {
                                            'styleObj': {
                                              'height': '32px',
                                              'lineHeight': '32px',
                                              'paddingLeft': '43px',
                                              'paddingRight': '43px',
                                              'textAlign': 'center',
                                              'backgroundColor': '#FFF',
                                              'backgroundImage': 'none',
                                              'borderRadius': '4px',
                                              'border': '1px solid #DCDFE6',
                                              'boxSizing': 'border-box',
                                              'color': '#606266',
                                              'display': 'inline-block',
                                              'fontSize': 'inherit',
                                              'outline': '0',
                                              'padding': '0 15px',
                                              'margin': '0',
                                              'transition': 'border-color .2s cubic-bezier(.645,.045,.355,1)',
                                              'width': '100%'
                                            },
                                            'attrObj': {
                                              'name': 'select'
                                            }
                                          },
                                          'childNodes': [
                                            {
                                              'tagName': 'option',
                                              'className': 'WebOption',
                                              'propObj': {
                                                'styleObj': {},
                                                'attrObj': {
                                                  'name': 'option',
                                                  'label': '请选择',
                                                  'value': 0
                                                }
                                              },
                                              'childNodes': [
                                                {
                                                  'className': 'WebTextNode',
                                                  'text': '请选择'
                                                }
                                              ]
                                            },
                                            {
                                              'tagName': 'option',
                                              'className': 'WebOption',
                                              'propObj': {
                                                'styleObj': {},
                                                'attrObj': {
                                                  'name': 'option',
                                                  'label': '选项一/1',
                                                  'value': 11
                                                }
                                              },
                                              'childNodes': [
                                                {
                                                  'className': 'WebTextNode',
                                                  'text': '选项一/1'
                                                }
                                              ]
                                            },
                                            {
                                              'tagName': 'option',
                                              'className': 'WebOption',
                                              'propObj': {
                                                'styleObj': {},
                                                'attrObj': {
                                                  'name': 'option',
                                                  'label': '选项一/2',
                                                  'value': 12,
                                                  'selected': true
                                                }
                                              },
                                              'childNodes': [
                                                {
                                                  'className': 'WebTextNode',
                                                  'text': '选项一/2'
                                                }
                                              ]
                                            },
                                            {
                                              'tagName': 'option',
                                              'className': 'WebOption',
                                              'propObj': {
                                                'styleObj': {},
                                                'attrObj': {
                                                  'name': 'option',
                                                  'label': '选项一/3',
                                                  'value': 13
                                                }
                                              },
                                              'childNodes': [
                                                {
                                                  'className': 'WebTextNode',
                                                  'text': '选项一/3'
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        {
                                          'tagName': 'span',
                                          'className': 'Span',
                                          'propObj': {
                                            'styleObj': {
                                              'float': 'right',
                                              'backgroundColor': '#fff',
                                              'display': 'none'
                                            },
                                            'attrObj': {}
                                          },
                                          'childNodes': [
                                            {
                                              'tagName': 'svg',
                                              'className': 'DeleteSvg',
                                              'propObj': {
                                                'styleObj': {},
                                                'attrObj': {
                                                  'version': '1.1',
                                                  'xmlns': 'http://www.w3.org/2000/svg',
                                                  'width': 20,
                                                  'height': 20,
                                                  'viewBox': '0 0 1024 1024'
                                                }
                                              },
                                              'childNodes': [
                                                {
                                                  'tagName': 'path',
                                                  'className': 'SvgPath',
                                                  'propObj': {
                                                    'styleObj': {},
                                                    'attrObj': {
                                                      'd': 'M608 768c-17.696 0-32-14.304-32-32L576 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C640 753.696 625.696 768 608 768z M416 768c-17.696 0-32-14.304-32-32L384 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C448 753.696 433.696 768 416 768z M928 224l-160 0L768 160c0-52.928-42.72-96-95.264-96L352 64C299.072 64 256 107.072 256 160l0 64L96 224C78.304 224 64 238.304 64 256s14.304 32 32 32l832 0c17.696 0 32-14.304 32-32S945.696 224 928 224zM320 160c0-17.632 14.368-32 32-32l320.736 0C690.272 128 704 142.048 704 160l0 64L320 224 320 160z M736.128 960 288.064 960c-52.928 0-96-43.072-96-96L192.064 383.52c0-17.664 14.336-32 32-32s32 14.336 32 32L256.064 864c0 17.664 14.368 32 32 32l448.064 0c17.664 0 32-14.336 32-32L768.128 384.832c0-17.664 14.304-32 32-32s32 14.336 32 32L832.128 864C832.128 916.928 789.056 960 736.128 960z'
                                                    }
                                                  },
                                                  'childNodes': []
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              'tagName': 'td',
                              'className': 'WebTableDataCell',
                              'propObj': {
                                'styleObj': {
                                  'borderWidth': '1px',
                                  'borderStyle': 'solid',
                                  'borderColor': '#DCDFE6',
                                  'display': 'table-cell'
                                },
                                'attrObj': {}
                              },
                              'childNodes': [
                                {
                                  'tagName': 'div',
                                  'className': 'SelectControl',
                                  'propObj': {
                                    'styleObj': {},
                                    'attrObj': {
                                      'default-value': '',
                                      'name': 'select-control',
                                      'option-config': '{"name":"下拉选择0.11117854336283872","resultValue":2,"options":[{"label":"选项一","value":1,"checked":true,"selected":true,"options":[{"label":"选项一/1","value":11,"checked":true,"selected":true},{"label":"选项一/2","value":12,"checked":false,"selected":false},{"label":"选项一/3","value":13,"checked":false,"selected":false}]},{"label":"选项二","value":2,"checked":false,"selected":false,"options":[{"label":"选项二/1","value":21,"checked":false,"selected":false},{"label":"选项二/2","value":22,"checked":false,"selected":false},{"label":"选项二/3","value":23,"checked":false,"selected":false}]},{"label":"选项三","value":3,"checked":false,"selected":false,"options":[{"label":"选项三/1","value":31,"checked":false,"selected":false},{"label":"选项三/2","value":32,"checked":false,"selected":false},{"label":"选项三/3","value":33,"checked":false,"selected":false}]}]}',
                                      'value': '0'
                                    }
                                  },
                                  'childNodes': [
                                    {
                                      'tagName': 'div',
                                      'className': 'SelectItem',
                                      'propObj': {
                                        'styleObj': {},
                                        'attrObj': {}
                                      },
                                      'childNodes': [
                                        {
                                          'tagName': 'label',
                                          'className': 'Label',
                                          'propObj': {
                                            'styleObj': {
                                              'width': '100px',
                                              'lineHeight': '32px',
                                              'textAlign': 'right',
                                              'verticalAlign': 'middle',
                                              'float': 'left',
                                              'fontSize': '14px',
                                              'color': '#606266',
                                              'padding': '0 12px 0 0',
                                              'boxSizing': 'border-box',
                                              'display': 'none'
                                            },
                                            'attrObj': {
                                              'name': 'label'
                                            }
                                          },
                                          'childNodes': [
                                            {
                                              'className': 'WebTextNode',
                                              'text': '下拉选择框'
                                            }
                                          ]
                                        },
                                        {
                                          'tagName': 'select',
                                          'className': 'Select',
                                          'propObj': {
                                            'styleObj': {
                                              'height': '32px',
                                              'lineHeight': '32px',
                                              'paddingLeft': '43px',
                                              'paddingRight': '43px',
                                              'textAlign': 'center',
                                              'backgroundColor': '#FFF',
                                              'backgroundImage': 'none',
                                              'borderRadius': '4px',
                                              'border': '1px solid #DCDFE6',
                                              'boxSizing': 'border-box',
                                              'color': '#606266',
                                              'display': 'inline-block',
                                              'fontSize': 'inherit',
                                              'outline': '0',
                                              'padding': '0 15px',
                                              'margin': '0',
                                              'transition': 'border-color .2s cubic-bezier(.645,.045,.355,1)',
                                              'width': '100%'
                                            },
                                            'attrObj': {
                                              'name': 'select'
                                            }
                                          },
                                          'childNodes': [
                                            {
                                              'tagName': 'option',
                                              'className': 'WebOption',
                                              'propObj': {
                                                'styleObj': {},
                                                'attrObj': {
                                                  'name': 'option',
                                                  'label': '请选择',
                                                  'value': 0
                                                }
                                              },
                                              'childNodes': [
                                                {
                                                  'className': 'WebTextNode',
                                                  'text': '请选择'
                                                }
                                              ]
                                            },
                                            {
                                              'tagName': 'option',
                                              'className': 'WebOption',
                                              'propObj': {
                                                'styleObj': {},
                                                'attrObj': {
                                                  'name': 'option',
                                                  'label': '选项二/1',
                                                  'value': 21
                                                }
                                              },
                                              'childNodes': [
                                                {
                                                  'className': 'WebTextNode',
                                                  'text': '选项二/1'
                                                }
                                              ]
                                            },
                                            {
                                              'tagName': 'option',
                                              'className': 'WebOption',
                                              'propObj': {
                                                'styleObj': {},
                                                'attrObj': {
                                                  'name': 'option',
                                                  'label': '选项二/2',
                                                  'value': 22,
                                                  'selected': true
                                                }
                                              },
                                              'childNodes': [
                                                {
                                                  'className': 'WebTextNode',
                                                  'text': '选项二/2'
                                                }
                                              ]
                                            },
                                            {
                                              'tagName': 'option',
                                              'className': 'WebOption',
                                              'propObj': {
                                                'styleObj': {},
                                                'attrObj': {
                                                  'name': 'option',
                                                  'label': '选项二/3',
                                                  'value': 23
                                                }
                                              },
                                              'childNodes': [
                                                {
                                                  'className': 'WebTextNode',
                                                  'text': '选项二/3'
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        {
                                          'tagName': 'span',
                                          'className': 'Span',
                                          'propObj': {
                                            'styleObj': {
                                              'float': 'right',
                                              'backgroundColor': '#fff',
                                              'display': 'none'
                                            },
                                            'attrObj': {}
                                          },
                                          'childNodes': [
                                            {
                                              'tagName': 'svg',
                                              'className': 'DeleteSvg',
                                              'propObj': {
                                                'styleObj': {},
                                                'attrObj': {
                                                  'version': '1.1',
                                                  'xmlns': 'http://www.w3.org/2000/svg',
                                                  'width': 20,
                                                  'height': 20,
                                                  'viewBox': '0 0 1024 1024'
                                                }
                                              },
                                              'childNodes': [
                                                {
                                                  'tagName': 'path',
                                                  'className': 'SvgPath',
                                                  'propObj': {
                                                    'styleObj': {},
                                                    'attrObj': {
                                                      'd': 'M608 768c-17.696 0-32-14.304-32-32L576 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C640 753.696 625.696 768 608 768z M416 768c-17.696 0-32-14.304-32-32L384 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C448 753.696 433.696 768 416 768z M928 224l-160 0L768 160c0-52.928-42.72-96-95.264-96L352 64C299.072 64 256 107.072 256 160l0 64L96 224C78.304 224 64 238.304 64 256s14.304 32 32 32l832 0c17.696 0 32-14.304 32-32S945.696 224 928 224zM320 160c0-17.632 14.368-32 32-32l320.736 0C690.272 128 704 142.048 704 160l0 64L320 224 320 160z M736.128 960 288.064 960c-52.928 0-96-43.072-96-96L192.064 383.52c0-17.664 14.336-32 32-32s32 14.336 32 32L256.064 864c0 17.664 14.368 32 32 32l448.064 0c17.664 0 32-14.336 32-32L768.128 384.832c0-17.664 14.304-32 32-32s32 14.336 32 32L832.128 864C832.128 916.928 789.056 960 736.128 960z'
                                                    }
                                                  },
                                                  'childNodes': []
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              'tagName': 'td',
                              'className': 'WebTableDataCell',
                              'propObj': {
                                'styleObj': {
                                  'borderWidth': '1px',
                                  'borderStyle': 'solid',
                                  'borderColor': '#DCDFE6',
                                  'display': 'table-cell'
                                },
                                'attrObj': {}
                              },
                              'childNodes': [
                                {
                                  'tagName': 'div',
                                  'className': 'SingleInputControl',
                                  'propObj': {
                                    'styleObj': {},
                                    'attrObj': {
                                      'default-value': '',
                                      'name': 'single-input-control',
                                      'value': ''
                                    }
                                  },
                                  'childNodes': [
                                    {
                                      'tagName': 'div',
                                      'className': 'InputItem',
                                      'propObj': {
                                        'styleObj': {},
                                        'attrObj': {}
                                      },
                                      'childNodes': [
                                        {
                                          'tagName': 'label',
                                          'className': 'Label',
                                          'propObj': {
                                            'styleObj': {
                                              'width': '100px',
                                              'lineHeight': '32px',
                                              'textAlign': 'right',
                                              'verticalAlign': 'middle',
                                              'float': 'left',
                                              'fontSize': '14px',
                                              'color': '#606266',
                                              'padding': '0 12px 0 0',
                                              'boxSizing': 'border-box',
                                              'display': 'none'
                                            },
                                            'attrObj': {
                                              'name': 'label'
                                            }
                                          },
                                          'childNodes': [
                                            {
                                              'className': 'WebTextNode',
                                              'text': '单行输入'
                                            }
                                          ]
                                        },
                                        {
                                          'tagName': 'input',
                                          'className': 'Input',
                                          'propObj': {
                                            'styleObj': {
                                              'height': '32px',
                                              'lineHeight': '32px',
                                              'paddingLeft': '43px',
                                              'paddingRight': '43px',
                                              'textAlign': 'center',
                                              'backgroundColor': '#FFF',
                                              'backgroundImage': 'none',
                                              'borderRadius': '4px',
                                              'border': '1px solid #DCDFE6',
                                              'boxSizing': 'border-box',
                                              'color': '#606266',
                                              'display': 'inline-block',
                                              'fontSize': 'inherit',
                                              'outline': '0',
                                              'padding': '0 15px',
                                              'margin': '0',
                                              'transition': 'border-color .2s cubic-bezier(.645,.045,.355,1)',
                                              'width': '100%'
                                            },
                                            'attrObj': {
                                              'type': 'text',
                                              'placeholder': '请输入',
                                              'value': ''
                                            }
                                          },
                                          'childNodes': []
                                        },
                                        {
                                          'tagName': 'span',
                                          'className': 'Span',
                                          'propObj': {
                                            'styleObj': {
                                              'float': 'right',
                                              'backgroundColor': '#fff',
                                              'display': 'none'
                                            },
                                            'attrObj': {}
                                          },
                                          'childNodes': [
                                            {
                                              'tagName': 'svg',
                                              'className': 'DeleteSvg',
                                              'propObj': {
                                                'styleObj': {},
                                                'attrObj': {
                                                  'version': '1.1',
                                                  'xmlns': 'http://www.w3.org/2000/svg',
                                                  'width': 20,
                                                  'height': 20,
                                                  'viewBox': '0 0 1024 1024'
                                                }
                                              },
                                              'childNodes': [
                                                {
                                                  'tagName': 'path',
                                                  'className': 'SvgPath',
                                                  'propObj': {
                                                    'styleObj': {},
                                                    'attrObj': {
                                                      'd': 'M608 768c-17.696 0-32-14.304-32-32L576 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C640 753.696 625.696 768 608 768z M416 768c-17.696 0-32-14.304-32-32L384 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C448 753.696 433.696 768 416 768z M928 224l-160 0L768 160c0-52.928-42.72-96-95.264-96L352 64C299.072 64 256 107.072 256 160l0 64L96 224C78.304 224 64 238.304 64 256s14.304 32 32 32l832 0c17.696 0 32-14.304 32-32S945.696 224 928 224zM320 160c0-17.632 14.368-32 32-32l320.736 0C690.272 128 704 142.048 704 160l0 64L320 224 320 160z M736.128 960 288.064 960c-52.928 0-96-43.072-96-96L192.064 383.52c0-17.664 14.336-32 32-32s32 14.336 32 32L256.064 864c0 17.664 14.368 32 32 32l448.064 0c17.664 0 32-14.336 32-32L768.128 384.832c0-17.664 14.304-32 32-32s32 14.336 32 32L832.128 864C832.128 916.928 789.056 960 736.128 960z'
                                                    }
                                                  },
                                                  'childNodes': []
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          'tagName': 'tr',
                          'className': 'WebTableRow',
                          'propObj': {
                            'styleObj': {},
                            'attrObj': {
                              'row-id': '{"table1.ID":"1114"}'
                            }
                          },
                          'childNodes': [
                            {
                              'tagName': 'td',
                              'className': 'WebTableDataCell',
                              'propObj': {
                                'styleObj': {
                                  'borderWidth': '1px',
                                  'borderStyle': 'solid',
                                  'borderColor': '#DCDFE6',
                                  'display': 'table-cell'
                                },
                                'attrObj': {}
                              },
                              'childNodes': [
                                {
                                  'tagName': 'div',
                                  'className': 'SelectControl',
                                  'propObj': {
                                    'styleObj': {},
                                    'attrObj': {
                                      'default-value': '',
                                      'name': 'select-control',
                                      'option-config': '{"name":"下拉选择0.52826451695526","resultValue":1,"options":[{"label":"选项一","value":1,"checked":true,"selected":true,"options":[{"label":"选项一/1","value":11,"checked":true,"selected":true},{"label":"选项一/2","value":12,"checked":false,"selected":false},{"label":"选项一/3","value":13,"checked":false,"selected":false}]},{"label":"选项二","value":2,"checked":false,"selected":false,"options":[{"label":"选项二/1","value":21,"checked":false,"selected":false},{"label":"选项二/2","value":22,"checked":false,"selected":false},{"label":"选项二/3","value":23,"checked":false,"selected":false}]},{"label":"选项三","value":3,"checked":false,"selected":false,"options":[{"label":"选项三/1","value":31,"checked":false,"selected":false},{"label":"选项三/2","value":32,"checked":false,"selected":false},{"label":"选项三/3","value":33,"checked":false,"selected":false}]}]}',
                                      'value': '0'
                                    }
                                  },
                                  'childNodes': [
                                    {
                                      'tagName': 'div',
                                      'className': 'SelectItem',
                                      'propObj': {
                                        'styleObj': {},
                                        'attrObj': {}
                                      },
                                      'childNodes': [
                                        {
                                          'tagName': 'label',
                                          'className': 'Label',
                                          'propObj': {
                                            'styleObj': {
                                              'width': '100px',
                                              'lineHeight': '32px',
                                              'textAlign': 'right',
                                              'verticalAlign': 'middle',
                                              'float': 'left',
                                              'fontSize': '14px',
                                              'color': '#606266',
                                              'padding': '0 12px 0 0',
                                              'boxSizing': 'border-box',
                                              'display': 'none'
                                            },
                                            'attrObj': {
                                              'name': 'label'
                                            }
                                          },
                                          'childNodes': [
                                            {
                                              'className': 'WebTextNode',
                                              'text': '下拉选择框'
                                            }
                                          ]
                                        },
                                        {
                                          'tagName': 'select',
                                          'className': 'Select',
                                          'propObj': {
                                            'styleObj': {
                                              'height': '32px',
                                              'lineHeight': '32px',
                                              'paddingLeft': '43px',
                                              'paddingRight': '43px',
                                              'textAlign': 'center',
                                              'backgroundColor': '#FFF',
                                              'backgroundImage': 'none',
                                              'borderRadius': '4px',
                                              'border': '1px solid #DCDFE6',
                                              'boxSizing': 'border-box',
                                              'color': '#606266',
                                              'display': 'inline-block',
                                              'fontSize': 'inherit',
                                              'outline': '0',
                                              'padding': '0 15px',
                                              'margin': '0',
                                              'transition': 'border-color .2s cubic-bezier(.645,.045,.355,1)',
                                              'width': '100%'
                                            },
                                            'attrObj': {
                                              'name': 'select'
                                            }
                                          },
                                          'childNodes': [
                                            {
                                              'tagName': 'option',
                                              'className': 'WebOption',
                                              'propObj': {
                                                'styleObj': {},
                                                'attrObj': {
                                                  'name': 'option',
                                                  'label': '请选择',
                                                  'value': 0
                                                }
                                              },
                                              'childNodes': [
                                                {
                                                  'className': 'WebTextNode',
                                                  'text': '请选择'
                                                }
                                              ]
                                            },
                                            {
                                              'tagName': 'option',
                                              'className': 'WebOption',
                                              'propObj': {
                                                'styleObj': {},
                                                'attrObj': {
                                                  'name': 'option',
                                                  'label': '选项一/1',
                                                  'value': 11
                                                }
                                              },
                                              'childNodes': [
                                                {
                                                  'className': 'WebTextNode',
                                                  'text': '选项一/1'
                                                }
                                              ]
                                            },
                                            {
                                              'tagName': 'option',
                                              'className': 'WebOption',
                                              'propObj': {
                                                'styleObj': {},
                                                'attrObj': {
                                                  'name': 'option',
                                                  'label': '选项一/2',
                                                  'value': 12
                                                }
                                              },
                                              'childNodes': [
                                                {
                                                  'className': 'WebTextNode',
                                                  'text': '选项一/2'
                                                }
                                              ]
                                            },
                                            {
                                              'tagName': 'option',
                                              'className': 'WebOption',
                                              'propObj': {
                                                'styleObj': {},
                                                'attrObj': {
                                                  'name': 'option',
                                                  'label': '选项一/3',
                                                  'value': 13,
                                                  'selected': true
                                                }
                                              },
                                              'childNodes': [
                                                {
                                                  'className': 'WebTextNode',
                                                  'text': '选项一/3'
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        {
                                          'tagName': 'span',
                                          'className': 'Span',
                                          'propObj': {
                                            'styleObj': {
                                              'float': 'right',
                                              'backgroundColor': '#fff',
                                              'display': 'none'
                                            },
                                            'attrObj': {}
                                          },
                                          'childNodes': [
                                            {
                                              'tagName': 'svg',
                                              'className': 'DeleteSvg',
                                              'propObj': {
                                                'styleObj': {},
                                                'attrObj': {
                                                  'version': '1.1',
                                                  'xmlns': 'http://www.w3.org/2000/svg',
                                                  'width': 20,
                                                  'height': 20,
                                                  'viewBox': '0 0 1024 1024'
                                                }
                                              },
                                              'childNodes': [
                                                {
                                                  'tagName': 'path',
                                                  'className': 'SvgPath',
                                                  'propObj': {
                                                    'styleObj': {},
                                                    'attrObj': {
                                                      'd': 'M608 768c-17.696 0-32-14.304-32-32L576 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C640 753.696 625.696 768 608 768z M416 768c-17.696 0-32-14.304-32-32L384 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C448 753.696 433.696 768 416 768z M928 224l-160 0L768 160c0-52.928-42.72-96-95.264-96L352 64C299.072 64 256 107.072 256 160l0 64L96 224C78.304 224 64 238.304 64 256s14.304 32 32 32l832 0c17.696 0 32-14.304 32-32S945.696 224 928 224zM320 160c0-17.632 14.368-32 32-32l320.736 0C690.272 128 704 142.048 704 160l0 64L320 224 320 160z M736.128 960 288.064 960c-52.928 0-96-43.072-96-96L192.064 383.52c0-17.664 14.336-32 32-32s32 14.336 32 32L256.064 864c0 17.664 14.368 32 32 32l448.064 0c17.664 0 32-14.336 32-32L768.128 384.832c0-17.664 14.304-32 32-32s32 14.336 32 32L832.128 864C832.128 916.928 789.056 960 736.128 960z'
                                                    }
                                                  },
                                                  'childNodes': []
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              'tagName': 'td',
                              'className': 'WebTableDataCell',
                              'propObj': {
                                'styleObj': {
                                  'borderWidth': '1px',
                                  'borderStyle': 'solid',
                                  'borderColor': '#DCDFE6',
                                  'display': 'table-cell'
                                },
                                'attrObj': {}
                              },
                              'childNodes': [
                                {
                                  'tagName': 'div',
                                  'className': 'SelectControl',
                                  'propObj': {
                                    'styleObj': {},
                                    'attrObj': {
                                      'default-value': '',
                                      'name': 'select-control',
                                      'option-config': '{"name":"下拉选择0.11117854336283872","resultValue":2,"options":[{"label":"选项一","value":1,"checked":true,"selected":true,"options":[{"label":"选项一/1","value":11,"checked":true,"selected":true},{"label":"选项一/2","value":12,"checked":false,"selected":false},{"label":"选项一/3","value":13,"checked":false,"selected":false}]},{"label":"选项二","value":2,"checked":false,"selected":false,"options":[{"label":"选项二/1","value":21,"checked":false,"selected":false},{"label":"选项二/2","value":22,"checked":false,"selected":false},{"label":"选项二/3","value":23,"checked":false,"selected":false}]},{"label":"选项三","value":3,"checked":false,"selected":false,"options":[{"label":"选项三/1","value":31,"checked":false,"selected":false},{"label":"选项三/2","value":32,"checked":false,"selected":false},{"label":"选项三/3","value":33,"checked":false,"selected":false}]}]}',
                                      'value': '0'
                                    }
                                  },
                                  'childNodes': [
                                    {
                                      'tagName': 'div',
                                      'className': 'SelectItem',
                                      'propObj': {
                                        'styleObj': {},
                                        'attrObj': {}
                                      },
                                      'childNodes': [
                                        {
                                          'tagName': 'label',
                                          'className': 'Label',
                                          'propObj': {
                                            'styleObj': {
                                              'width': '100px',
                                              'lineHeight': '32px',
                                              'textAlign': 'right',
                                              'verticalAlign': 'middle',
                                              'float': 'left',
                                              'fontSize': '14px',
                                              'color': '#606266',
                                              'padding': '0 12px 0 0',
                                              'boxSizing': 'border-box',
                                              'display': 'none'
                                            },
                                            'attrObj': {
                                              'name': 'label'
                                            }
                                          },
                                          'childNodes': [
                                            {
                                              'className': 'WebTextNode',
                                              'text': '下拉选择框'
                                            }
                                          ]
                                        },
                                        {
                                          'tagName': 'select',
                                          'className': 'Select',
                                          'propObj': {
                                            'styleObj': {
                                              'height': '32px',
                                              'lineHeight': '32px',
                                              'paddingLeft': '43px',
                                              'paddingRight': '43px',
                                              'textAlign': 'center',
                                              'backgroundColor': '#FFF',
                                              'backgroundImage': 'none',
                                              'borderRadius': '4px',
                                              'border': '1px solid #DCDFE6',
                                              'boxSizing': 'border-box',
                                              'color': '#606266',
                                              'display': 'inline-block',
                                              'fontSize': 'inherit',
                                              'outline': '0',
                                              'padding': '0 15px',
                                              'margin': '0',
                                              'transition': 'border-color .2s cubic-bezier(.645,.045,.355,1)',
                                              'width': '100%'
                                            },
                                            'attrObj': {
                                              'name': 'select'
                                            }
                                          },
                                          'childNodes': [
                                            {
                                              'tagName': 'option',
                                              'className': 'WebOption',
                                              'propObj': {
                                                'styleObj': {},
                                                'attrObj': {
                                                  'name': 'option',
                                                  'label': '请选择',
                                                  'value': 0
                                                }
                                              },
                                              'childNodes': [
                                                {
                                                  'className': 'WebTextNode',
                                                  'text': '请选择'
                                                }
                                              ]
                                            },
                                            {
                                              'tagName': 'option',
                                              'className': 'WebOption',
                                              'propObj': {
                                                'styleObj': {},
                                                'attrObj': {
                                                  'name': 'option',
                                                  'label': '选项二/1',
                                                  'value': 21
                                                }
                                              },
                                              'childNodes': [
                                                {
                                                  'className': 'WebTextNode',
                                                  'text': '选项二/1'
                                                }
                                              ]
                                            },
                                            {
                                              'tagName': 'option',
                                              'className': 'WebOption',
                                              'propObj': {
                                                'styleObj': {},
                                                'attrObj': {
                                                  'name': 'option',
                                                  'label': '选项二/2',
                                                  'value': 22
                                                }
                                              },
                                              'childNodes': [
                                                {
                                                  'className': 'WebTextNode',
                                                  'text': '选项二/2'
                                                }
                                              ]
                                            },
                                            {
                                              'tagName': 'option',
                                              'className': 'WebOption',
                                              'propObj': {
                                                'styleObj': {},
                                                'attrObj': {
                                                  'name': 'option',
                                                  'label': '选项二/3',
                                                  'value': 23,
                                                  'selected': true
                                                }
                                              },
                                              'childNodes': [
                                                {
                                                  'className': 'WebTextNode',
                                                  'text': '选项二/3'
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        {
                                          'tagName': 'span',
                                          'className': 'Span',
                                          'propObj': {
                                            'styleObj': {
                                              'float': 'right',
                                              'backgroundColor': '#fff',
                                              'display': 'none'
                                            },
                                            'attrObj': {}
                                          },
                                          'childNodes': [
                                            {
                                              'tagName': 'svg',
                                              'className': 'DeleteSvg',
                                              'propObj': {
                                                'styleObj': {},
                                                'attrObj': {
                                                  'version': '1.1',
                                                  'xmlns': 'http://www.w3.org/2000/svg',
                                                  'width': 20,
                                                  'height': 20,
                                                  'viewBox': '0 0 1024 1024'
                                                }
                                              },
                                              'childNodes': [
                                                {
                                                  'tagName': 'path',
                                                  'className': 'SvgPath',
                                                  'propObj': {
                                                    'styleObj': {},
                                                    'attrObj': {
                                                      'd': 'M608 768c-17.696 0-32-14.304-32-32L576 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C640 753.696 625.696 768 608 768z M416 768c-17.696 0-32-14.304-32-32L384 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C448 753.696 433.696 768 416 768z M928 224l-160 0L768 160c0-52.928-42.72-96-95.264-96L352 64C299.072 64 256 107.072 256 160l0 64L96 224C78.304 224 64 238.304 64 256s14.304 32 32 32l832 0c17.696 0 32-14.304 32-32S945.696 224 928 224zM320 160c0-17.632 14.368-32 32-32l320.736 0C690.272 128 704 142.048 704 160l0 64L320 224 320 160z M736.128 960 288.064 960c-52.928 0-96-43.072-96-96L192.064 383.52c0-17.664 14.336-32 32-32s32 14.336 32 32L256.064 864c0 17.664 14.368 32 32 32l448.064 0c17.664 0 32-14.336 32-32L768.128 384.832c0-17.664 14.304-32 32-32s32 14.336 32 32L832.128 864C832.128 916.928 789.056 960 736.128 960z'
                                                    }
                                                  },
                                                  'childNodes': []
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              'tagName': 'td',
                              'className': 'WebTableDataCell',
                              'propObj': {
                                'styleObj': {
                                  'borderWidth': '1px',
                                  'borderStyle': 'solid',
                                  'borderColor': '#DCDFE6',
                                  'display': 'table-cell'
                                },
                                'attrObj': {}
                              },
                              'childNodes': [
                                {
                                  'tagName': 'div',
                                  'className': 'SingleInputControl',
                                  'propObj': {
                                    'styleObj': {},
                                    'attrObj': {
                                      'default-value': '',
                                      'name': 'single-input-control',
                                      'value': ''
                                    }
                                  },
                                  'childNodes': [
                                    {
                                      'tagName': 'div',
                                      'className': 'InputItem',
                                      'propObj': {
                                        'styleObj': {},
                                        'attrObj': {}
                                      },
                                      'childNodes': [
                                        {
                                          'tagName': 'label',
                                          'className': 'Label',
                                          'propObj': {
                                            'styleObj': {
                                              'width': '100px',
                                              'lineHeight': '32px',
                                              'textAlign': 'right',
                                              'verticalAlign': 'middle',
                                              'float': 'left',
                                              'fontSize': '14px',
                                              'color': '#606266',
                                              'padding': '0 12px 0 0',
                                              'boxSizing': 'border-box',
                                              'display': 'none'
                                            },
                                            'attrObj': {
                                              'name': 'label'
                                            }
                                          },
                                          'childNodes': [
                                            {
                                              'className': 'WebTextNode',
                                              'text': '单行输入'
                                            }
                                          ]
                                        },
                                        {
                                          'tagName': 'input',
                                          'className': 'Input',
                                          'propObj': {
                                            'styleObj': {
                                              'height': '32px',
                                              'lineHeight': '32px',
                                              'paddingLeft': '43px',
                                              'paddingRight': '43px',
                                              'textAlign': 'center',
                                              'backgroundColor': '#FFF',
                                              'backgroundImage': 'none',
                                              'borderRadius': '4px',
                                              'border': '1px solid #DCDFE6',
                                              'boxSizing': 'border-box',
                                              'color': '#606266',
                                              'display': 'inline-block',
                                              'fontSize': 'inherit',
                                              'outline': '0',
                                              'padding': '0 15px',
                                              'margin': '0',
                                              'transition': 'border-color .2s cubic-bezier(.645,.045,.355,1)',
                                              'width': '100%'
                                            },
                                            'attrObj': {
                                              'type': 'text',
                                              'placeholder': '请输入',
                                              'value': ''
                                            }
                                          },
                                          'childNodes': []
                                        },
                                        {
                                          'tagName': 'span',
                                          'className': 'Span',
                                          'propObj': {
                                            'styleObj': {
                                              'float': 'right',
                                              'backgroundColor': '#fff',
                                              'display': 'none'
                                            },
                                            'attrObj': {}
                                          },
                                          'childNodes': [
                                            {
                                              'tagName': 'svg',
                                              'className': 'DeleteSvg',
                                              'propObj': {
                                                'styleObj': {},
                                                'attrObj': {
                                                  'version': '1.1',
                                                  'xmlns': 'http://www.w3.org/2000/svg',
                                                  'width': 20,
                                                  'height': 20,
                                                  'viewBox': '0 0 1024 1024'
                                                }
                                              },
                                              'childNodes': [
                                                {
                                                  'tagName': 'path',
                                                  'className': 'SvgPath',
                                                  'propObj': {
                                                    'styleObj': {},
                                                    'attrObj': {
                                                      'd': 'M608 768c-17.696 0-32-14.304-32-32L576 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C640 753.696 625.696 768 608 768z M416 768c-17.696 0-32-14.304-32-32L384 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C448 753.696 433.696 768 416 768z M928 224l-160 0L768 160c0-52.928-42.72-96-95.264-96L352 64C299.072 64 256 107.072 256 160l0 64L96 224C78.304 224 64 238.304 64 256s14.304 32 32 32l832 0c17.696 0 32-14.304 32-32S945.696 224 928 224zM320 160c0-17.632 14.368-32 32-32l320.736 0C690.272 128 704 142.048 704 160l0 64L320 224 320 160z M736.128 960 288.064 960c-52.928 0-96-43.072-96-96L192.064 383.52c0-17.664 14.336-32 32-32s32 14.336 32 32L256.064 864c0 17.664 14.368 32 32 32l448.064 0c17.664 0 32-14.336 32-32L768.128 384.832c0-17.664 14.304-32 32-32s32 14.336 32 32L832.128 864C832.128 916.928 789.056 960 736.128 960z'
                                                    }
                                                  },
                                                  'childNodes': []
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          'tagName': 'tr',
                          'className': 'WebTableRow',
                          'propObj': {
                            'styleObj': {},
                            'attrObj': {
                              'row-id': '{"table1.ID":"1114"}'
                            }
                          },
                          'childNodes': [
                            {
                              'tagName': 'td',
                              'className': 'WebTableDataCell',
                              'propObj': {
                                'styleObj': {
                                  'borderWidth': '1px',
                                  'borderStyle': 'solid',
                                  'borderColor': '#DCDFE6',
                                  'display': 'table-cell'
                                },
                                'attrObj': {}
                              },
                              'childNodes': [
                                {
                                  'tagName': 'div',
                                  'className': 'SelectControl',
                                  'propObj': {
                                    'styleObj': {},
                                    'attrObj': {
                                      'default-value': '',
                                      'name': 'select-control',
                                      'option-config': '{"name":"下拉选择0.52826451695526","resultValue":1,"options":[{"label":"选项一","value":1,"checked":true,"selected":true,"options":[{"label":"选项一/1","value":11,"checked":true,"selected":true},{"label":"选项一/2","value":12,"checked":false,"selected":false},{"label":"选项一/3","value":13,"checked":false,"selected":false}]},{"label":"选项二","value":2,"checked":false,"selected":false,"options":[{"label":"选项二/1","value":21,"checked":false,"selected":false},{"label":"选项二/2","value":22,"checked":false,"selected":false},{"label":"选项二/3","value":23,"checked":false,"selected":false}]},{"label":"选项三","value":3,"checked":false,"selected":false,"options":[{"label":"选项三/1","value":31,"checked":false,"selected":false},{"label":"选项三/2","value":32,"checked":false,"selected":false},{"label":"选项三/3","value":33,"checked":false,"selected":false}]}]}',
                                      'value': '0'
                                    }
                                  },
                                  'childNodes': [
                                    {
                                      'tagName': 'div',
                                      'className': 'SelectItem',
                                      'propObj': {
                                        'styleObj': {},
                                        'attrObj': {}
                                      },
                                      'childNodes': [
                                        {
                                          'tagName': 'label',
                                          'className': 'Label',
                                          'propObj': {
                                            'styleObj': {
                                              'width': '100px',
                                              'lineHeight': '32px',
                                              'textAlign': 'right',
                                              'verticalAlign': 'middle',
                                              'float': 'left',
                                              'fontSize': '14px',
                                              'color': '#606266',
                                              'padding': '0 12px 0 0',
                                              'boxSizing': 'border-box',
                                              'display': 'none'
                                            },
                                            'attrObj': {
                                              'name': 'label'
                                            }
                                          },
                                          'childNodes': [
                                            {
                                              'className': 'WebTextNode',
                                              'text': '下拉选择框'
                                            }
                                          ]
                                        },
                                        {
                                          'tagName': 'select',
                                          'className': 'Select',
                                          'propObj': {
                                            'styleObj': {
                                              'height': '32px',
                                              'lineHeight': '32px',
                                              'paddingLeft': '43px',
                                              'paddingRight': '43px',
                                              'textAlign': 'center',
                                              'backgroundColor': '#FFF',
                                              'backgroundImage': 'none',
                                              'borderRadius': '4px',
                                              'border': '1px solid #DCDFE6',
                                              'boxSizing': 'border-box',
                                              'color': '#606266',
                                              'display': 'inline-block',
                                              'fontSize': 'inherit',
                                              'outline': '0',
                                              'padding': '0 15px',
                                              'margin': '0',
                                              'transition': 'border-color .2s cubic-bezier(.645,.045,.355,1)',
                                              'width': '100%'
                                            },
                                            'attrObj': {
                                              'name': 'select'
                                            }
                                          },
                                          'childNodes': [
                                            {
                                              'tagName': 'option',
                                              'className': 'WebOption',
                                              'propObj': {
                                                'styleObj': {},
                                                'attrObj': {
                                                  'name': 'option',
                                                  'label': '请选择',
                                                  'value': 0,
                                                  'selected': true
                                                }
                                              },
                                              'childNodes': [
                                                {
                                                  'className': 'WebTextNode',
                                                  'text': '请选择'
                                                }
                                              ]
                                            },
                                            {
                                              'tagName': 'option',
                                              'className': 'WebOption',
                                              'propObj': {
                                                'styleObj': {},
                                                'attrObj': {
                                                  'name': 'option',
                                                  'label': '选项一/1',
                                                  'value': 11
                                                }
                                              },
                                              'childNodes': [
                                                {
                                                  'className': 'WebTextNode',
                                                  'text': '选项一/1'
                                                }
                                              ]
                                            },
                                            {
                                              'tagName': 'option',
                                              'className': 'WebOption',
                                              'propObj': {
                                                'styleObj': {},
                                                'attrObj': {
                                                  'name': 'option',
                                                  'label': '选项一/2',
                                                  'value': 12
                                                }
                                              },
                                              'childNodes': [
                                                {
                                                  'className': 'WebTextNode',
                                                  'text': '选项一/2'
                                                }
                                              ]
                                            },
                                            {
                                              'tagName': 'option',
                                              'className': 'WebOption',
                                              'propObj': {
                                                'styleObj': {},
                                                'attrObj': {
                                                  'name': 'option',
                                                  'label': '选项一/3',
                                                  'value': 13
                                                }
                                              },
                                              'childNodes': [
                                                {
                                                  'className': 'WebTextNode',
                                                  'text': '选项一/3'
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        {
                                          'tagName': 'span',
                                          'className': 'Span',
                                          'propObj': {
                                            'styleObj': {
                                              'float': 'right',
                                              'backgroundColor': '#fff',
                                              'display': 'none'
                                            },
                                            'attrObj': {}
                                          },
                                          'childNodes': [
                                            {
                                              'tagName': 'svg',
                                              'className': 'DeleteSvg',
                                              'propObj': {
                                                'styleObj': {},
                                                'attrObj': {
                                                  'version': '1.1',
                                                  'xmlns': 'http://www.w3.org/2000/svg',
                                                  'width': 20,
                                                  'height': 20,
                                                  'viewBox': '0 0 1024 1024'
                                                }
                                              },
                                              'childNodes': [
                                                {
                                                  'tagName': 'path',
                                                  'className': 'SvgPath',
                                                  'propObj': {
                                                    'styleObj': {},
                                                    'attrObj': {
                                                      'd': 'M608 768c-17.696 0-32-14.304-32-32L576 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C640 753.696 625.696 768 608 768z M416 768c-17.696 0-32-14.304-32-32L384 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C448 753.696 433.696 768 416 768z M928 224l-160 0L768 160c0-52.928-42.72-96-95.264-96L352 64C299.072 64 256 107.072 256 160l0 64L96 224C78.304 224 64 238.304 64 256s14.304 32 32 32l832 0c17.696 0 32-14.304 32-32S945.696 224 928 224zM320 160c0-17.632 14.368-32 32-32l320.736 0C690.272 128 704 142.048 704 160l0 64L320 224 320 160z M736.128 960 288.064 960c-52.928 0-96-43.072-96-96L192.064 383.52c0-17.664 14.336-32 32-32s32 14.336 32 32L256.064 864c0 17.664 14.368 32 32 32l448.064 0c17.664 0 32-14.336 32-32L768.128 384.832c0-17.664 14.304-32 32-32s32 14.336 32 32L832.128 864C832.128 916.928 789.056 960 736.128 960z'
                                                    }
                                                  },
                                                  'childNodes': []
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              'tagName': 'td',
                              'className': 'WebTableDataCell',
                              'propObj': {
                                'styleObj': {
                                  'borderWidth': '1px',
                                  'borderStyle': 'solid',
                                  'borderColor': '#DCDFE6',
                                  'display': 'table-cell'
                                },
                                'attrObj': {}
                              },
                              'childNodes': [
                                {
                                  'tagName': 'div',
                                  'className': 'SelectControl',
                                  'propObj': {
                                    'styleObj': {},
                                    'attrObj': {
                                      'default-value': '',
                                      'name': 'select-control',
                                      'option-config': '{"name":"下拉选择0.11117854336283872","resultValue":2,"options":[{"label":"选项一","value":1,"checked":true,"selected":true,"options":[{"label":"选项一/1","value":11,"checked":true,"selected":true},{"label":"选项一/2","value":12,"checked":false,"selected":false},{"label":"选项一/3","value":13,"checked":false,"selected":false}]},{"label":"选项二","value":2,"checked":false,"selected":false,"options":[{"label":"选项二/1","value":21,"checked":false,"selected":false},{"label":"选项二/2","value":22,"checked":false,"selected":false},{"label":"选项二/3","value":23,"checked":false,"selected":false}]},{"label":"选项三","value":3,"checked":false,"selected":false,"options":[{"label":"选项三/1","value":31,"checked":false,"selected":false},{"label":"选项三/2","value":32,"checked":false,"selected":false},{"label":"选项三/3","value":33,"checked":false,"selected":false}]}]}',
                                      'value': '0'
                                    }
                                  },
                                  'childNodes': [
                                    {
                                      'tagName': 'div',
                                      'className': 'SelectItem',
                                      'propObj': {
                                        'styleObj': {},
                                        'attrObj': {}
                                      },
                                      'childNodes': [
                                        {
                                          'tagName': 'label',
                                          'className': 'Label',
                                          'propObj': {
                                            'styleObj': {
                                              'width': '100px',
                                              'lineHeight': '32px',
                                              'textAlign': 'right',
                                              'verticalAlign': 'middle',
                                              'float': 'left',
                                              'fontSize': '14px',
                                              'color': '#606266',
                                              'padding': '0 12px 0 0',
                                              'boxSizing': 'border-box',
                                              'display': 'none'
                                            },
                                            'attrObj': {
                                              'name': 'label'
                                            }
                                          },
                                          'childNodes': [
                                            {
                                              'className': 'WebTextNode',
                                              'text': '下拉选择框'
                                            }
                                          ]
                                        },
                                        {
                                          'tagName': 'select',
                                          'className': 'Select',
                                          'propObj': {
                                            'styleObj': {
                                              'height': '32px',
                                              'lineHeight': '32px',
                                              'paddingLeft': '43px',
                                              'paddingRight': '43px',
                                              'textAlign': 'center',
                                              'backgroundColor': '#FFF',
                                              'backgroundImage': 'none',
                                              'borderRadius': '4px',
                                              'border': '1px solid #DCDFE6',
                                              'boxSizing': 'border-box',
                                              'color': '#606266',
                                              'display': 'inline-block',
                                              'fontSize': 'inherit',
                                              'outline': '0',
                                              'padding': '0 15px',
                                              'margin': '0',
                                              'transition': 'border-color .2s cubic-bezier(.645,.045,.355,1)',
                                              'width': '100%'
                                            },
                                            'attrObj': {
                                              'name': 'select'
                                            }
                                          },
                                          'childNodes': [
                                            {
                                              'tagName': 'option',
                                              'className': 'WebOption',
                                              'propObj': {
                                                'styleObj': {},
                                                'attrObj': {
                                                  'name': 'option',
                                                  'label': '请选择',
                                                  'value': 0,
                                                  'selected': true
                                                }
                                              },
                                              'childNodes': [
                                                {
                                                  'className': 'WebTextNode',
                                                  'text': '请选择'
                                                }
                                              ]
                                            },
                                            {
                                              'tagName': 'option',
                                              'className': 'WebOption',
                                              'propObj': {
                                                'styleObj': {},
                                                'attrObj': {
                                                  'name': 'option',
                                                  'label': '选项二/1',
                                                  'value': 21
                                                }
                                              },
                                              'childNodes': [
                                                {
                                                  'className': 'WebTextNode',
                                                  'text': '选项二/1'
                                                }
                                              ]
                                            },
                                            {
                                              'tagName': 'option',
                                              'className': 'WebOption',
                                              'propObj': {
                                                'styleObj': {},
                                                'attrObj': {
                                                  'name': 'option',
                                                  'label': '选项二/2',
                                                  'value': 22
                                                }
                                              },
                                              'childNodes': [
                                                {
                                                  'className': 'WebTextNode',
                                                  'text': '选项二/2'
                                                }
                                              ]
                                            },
                                            {
                                              'tagName': 'option',
                                              'className': 'WebOption',
                                              'propObj': {
                                                'styleObj': {},
                                                'attrObj': {
                                                  'name': 'option',
                                                  'label': '选项二/3',
                                                  'value': 23
                                                }
                                              },
                                              'childNodes': [
                                                {
                                                  'className': 'WebTextNode',
                                                  'text': '选项二/3'
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        {
                                          'tagName': 'span',
                                          'className': 'Span',
                                          'propObj': {
                                            'styleObj': {
                                              'float': 'right',
                                              'backgroundColor': '#fff',
                                              'display': 'none'
                                            },
                                            'attrObj': {}
                                          },
                                          'childNodes': [
                                            {
                                              'tagName': 'svg',
                                              'className': 'DeleteSvg',
                                              'propObj': {
                                                'styleObj': {},
                                                'attrObj': {
                                                  'version': '1.1',
                                                  'xmlns': 'http://www.w3.org/2000/svg',
                                                  'width': 20,
                                                  'height': 20,
                                                  'viewBox': '0 0 1024 1024'
                                                }
                                              },
                                              'childNodes': [
                                                {
                                                  'tagName': 'path',
                                                  'className': 'SvgPath',
                                                  'propObj': {
                                                    'styleObj': {},
                                                    'attrObj': {
                                                      'd': 'M608 768c-17.696 0-32-14.304-32-32L576 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C640 753.696 625.696 768 608 768z M416 768c-17.696 0-32-14.304-32-32L384 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C448 753.696 433.696 768 416 768z M928 224l-160 0L768 160c0-52.928-42.72-96-95.264-96L352 64C299.072 64 256 107.072 256 160l0 64L96 224C78.304 224 64 238.304 64 256s14.304 32 32 32l832 0c17.696 0 32-14.304 32-32S945.696 224 928 224zM320 160c0-17.632 14.368-32 32-32l320.736 0C690.272 128 704 142.048 704 160l0 64L320 224 320 160z M736.128 960 288.064 960c-52.928 0-96-43.072-96-96L192.064 383.52c0-17.664 14.336-32 32-32s32 14.336 32 32L256.064 864c0 17.664 14.368 32 32 32l448.064 0c17.664 0 32-14.336 32-32L768.128 384.832c0-17.664 14.304-32 32-32s32 14.336 32 32L832.128 864C832.128 916.928 789.056 960 736.128 960z'
                                                    }
                                                  },
                                                  'childNodes': []
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              'tagName': 'td',
                              'className': 'WebTableDataCell',
                              'propObj': {
                                'styleObj': {
                                  'borderWidth': '1px',
                                  'borderStyle': 'solid',
                                  'borderColor': '#DCDFE6',
                                  'display': 'table-cell'
                                },
                                'attrObj': {}
                              },
                              'childNodes': [
                                {
                                  'tagName': 'div',
                                  'className': 'SingleInputControl',
                                  'propObj': {
                                    'styleObj': {},
                                    'attrObj': {
                                      'default-value': '',
                                      'name': 'single-input-control',
                                      'value': ''
                                    }
                                  },
                                  'childNodes': [
                                    {
                                      'tagName': 'div',
                                      'className': 'InputItem',
                                      'propObj': {
                                        'styleObj': {},
                                        'attrObj': {}
                                      },
                                      'childNodes': [
                                        {
                                          'tagName': 'label',
                                          'className': 'Label',
                                          'propObj': {
                                            'styleObj': {
                                              'width': '100px',
                                              'lineHeight': '32px',
                                              'textAlign': 'right',
                                              'verticalAlign': 'middle',
                                              'float': 'left',
                                              'fontSize': '14px',
                                              'color': '#606266',
                                              'padding': '0 12px 0 0',
                                              'boxSizing': 'border-box',
                                              'display': 'none'
                                            },
                                            'attrObj': {
                                              'name': 'label'
                                            }
                                          },
                                          'childNodes': [
                                            {
                                              'className': 'WebTextNode',
                                              'text': '单行输入'
                                            }
                                          ]
                                        },
                                        {
                                          'tagName': 'input',
                                          'className': 'Input',
                                          'propObj': {
                                            'styleObj': {
                                              'height': '32px',
                                              'lineHeight': '32px',
                                              'paddingLeft': '43px',
                                              'paddingRight': '43px',
                                              'textAlign': 'center',
                                              'backgroundColor': '#FFF',
                                              'backgroundImage': 'none',
                                              'borderRadius': '4px',
                                              'border': '1px solid #DCDFE6',
                                              'boxSizing': 'border-box',
                                              'color': '#606266',
                                              'display': 'inline-block',
                                              'fontSize': 'inherit',
                                              'outline': '0',
                                              'padding': '0 15px',
                                              'margin': '0',
                                              'transition': 'border-color .2s cubic-bezier(.645,.045,.355,1)',
                                              'width': '100%'
                                            },
                                            'attrObj': {
                                              'type': 'text',
                                              'placeholder': '请输入',
                                              'value': ''
                                            }
                                          },
                                          'childNodes': []
                                        },
                                        {
                                          'tagName': 'span',
                                          'className': 'Span',
                                          'propObj': {
                                            'styleObj': {
                                              'float': 'right',
                                              'backgroundColor': '#fff',
                                              'display': 'none'
                                            },
                                            'attrObj': {}
                                          },
                                          'childNodes': [
                                            {
                                              'tagName': 'svg',
                                              'className': 'DeleteSvg',
                                              'propObj': {
                                                'styleObj': {},
                                                'attrObj': {
                                                  'version': '1.1',
                                                  'xmlns': 'http://www.w3.org/2000/svg',
                                                  'width': 20,
                                                  'height': 20,
                                                  'viewBox': '0 0 1024 1024'
                                                }
                                              },
                                              'childNodes': [
                                                {
                                                  'tagName': 'path',
                                                  'className': 'SvgPath',
                                                  'propObj': {
                                                    'styleObj': {},
                                                    'attrObj': {
                                                      'd': 'M608 768c-17.696 0-32-14.304-32-32L576 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C640 753.696 625.696 768 608 768z M416 768c-17.696 0-32-14.304-32-32L384 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C448 753.696 433.696 768 416 768z M928 224l-160 0L768 160c0-52.928-42.72-96-95.264-96L352 64C299.072 64 256 107.072 256 160l0 64L96 224C78.304 224 64 238.304 64 256s14.304 32 32 32l832 0c17.696 0 32-14.304 32-32S945.696 224 928 224zM320 160c0-17.632 14.368-32 32-32l320.736 0C690.272 128 704 142.048 704 160l0 64L320 224 320 160z M736.128 960 288.064 960c-52.928 0-96-43.072-96-96L192.064 383.52c0-17.664 14.336-32 32-32s32 14.336 32 32L256.064 864c0 17.664 14.368 32 32 32l448.064 0c17.664 0 32-14.336 32-32L768.128 384.832c0-17.664 14.304-32 32-32s32 14.336 32 32L832.128 864C832.128 916.928 789.056 960 736.128 960z'
                                                    }
                                                  },
                                                  'childNodes': []
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      'tagName': 'span',
                      'className': 'Span',
                      'propObj': {
                        'styleObj': {
                          'float': 'right',
                          'backgroundColor': '#fff'
                        },
                        'attrObj': {}
                      },
                      'childNodes': [
                        {
                          'tagName': 'svg',
                          'className': 'DeleteSvg',
                          'propObj': {
                            'styleObj': {},
                            'attrObj': {
                              'version': '1.1',
                              'xmlns': 'http://www.w3.org/2000/svg',
                              'width': 20,
                              'height': 20,
                              'viewBox': '0 0 1024 1024'
                            }
                          },
                          'childNodes': [
                            {
                              'tagName': 'path',
                              'className': 'SvgPath',
                              'propObj': {
                                'styleObj': {},
                                'attrObj': {
                                  'd': 'M608 768c-17.696 0-32-14.304-32-32L576 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C640 753.696 625.696 768 608 768z M416 768c-17.696 0-32-14.304-32-32L384 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C448 753.696 433.696 768 416 768z M928 224l-160 0L768 160c0-52.928-42.72-96-95.264-96L352 64C299.072 64 256 107.072 256 160l0 64L96 224C78.304 224 64 238.304 64 256s14.304 32 32 32l832 0c17.696 0 32-14.304 32-32S945.696 224 928 224zM320 160c0-17.632 14.368-32 32-32l320.736 0C690.272 128 704 142.048 704 160l0 64L320 224 320 160z M736.128 960 288.064 960c-52.928 0-96-43.072-96-96L192.064 383.52c0-17.664 14.336-32 32-32s32 14.336 32 32L256.064 864c0 17.664 14.368 32 32 32l448.064 0c17.664 0 32-14.336 32-32L768.128 384.832c0-17.664 14.304-32 32-32s32 14.336 32 32L832.128 864C832.128 916.928 789.056 960 736.128 960z'
                                }
                              },
                              'childNodes': []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              'tagName': 'div',
              'className': 'TableControl',
              'propObj': {
                'styleObj': {
                  'display': 'inline-block',
                  'width': '100%',
                  'padding': '10px',
                  'marginBottom': '10px!important',
                  'border': '1px solid #e2e0e0',
                  'boxSizing': 'border-box',
                  'zIndex': 9
                },
                'attrObj': {
                  'draggable': 'true',
                  'ctrl-id': 35,
                  'default-value': '',
                  'name': 'table-control'
                }
              },
              'childNodes': [
                {
                  'tagName': 'div',
                  'className': 'TableItem',
                  'propObj': {
                    'styleObj': {
                      'border': '1px solid #1890ff',
                      'background': '#f3f9ff',
                      'padding': '10px',
                      'marginBottom': '10px!important',
                      'fontSize': '14px',
                      'display': 'block'
                    },
                    'attrObj': {}
                  },
                  'childNodes': [
                    {
                      'tagName': 'label',
                      'className': 'Label',
                      'propObj': {
                        'styleObj': {
                          'display': 'block',
                          'width': '100%',
                          'lineHeight': '36px',
                          'color': '#606266',
                          'textAlign': 'center',
                          'verticalAlign': 'middle',
                          'fontWeight': 'bold',
                          'fontSize': '20px',
                          'padding': '10px'
                        },
                        'attrObj': {
                          'name': 'label'
                        }
                      },
                      'childNodes': [
                        {
                          'className': 'WebTextNode',
                          'text': '表格名称'
                        }
                      ]
                    },
                    {
                      'tagName': 'table',
                      'className': 'WebTable',
                      'propObj': {
                        'styleObj': {
                          'height': '100%',
                          'width': '100%',
                          'borderWidth': '1px',
                          'borderStyle': 'solid',
                          'borderColor': '#DCDFE6',
                          'backgroundColor': '#fff'
                        },
                        'attrObj': {}
                      },
                      'childNodes': [
                        {
                          'tagName': 'thead',
                          'className': 'WebTableHead',
                          'propObj': {
                            'styleObj': {},
                            'attrObj': {}
                          },
                          'childNodes': [
                            {
                              'tagName': 'th',
                              'className': 'WebTableHeader',
                              'propObj': {
                                'styleObj': {},
                                'attrObj': {
                                  'name': 'table2.field1'
                                }
                              },
                              'childNodes': [
                                {
                                  'className': 'WebTextNode',
                                  'text': '字段2-1'
                                }
                              ]
                            },
                            {
                              'tagName': 'th',
                              'className': 'WebTableHeader',
                              'propObj': {
                                'styleObj': {},
                                'attrObj': {
                                  'name': 'table2.field2'
                                }
                              },
                              'childNodes': [
                                {
                                  'className': 'WebTextNode',
                                  'text': '字段2-2'
                                }
                              ]
                            },
                            {
                              'tagName': 'th',
                              'className': 'WebTableHeader',
                              'propObj': {
                                'styleObj': {},
                                'attrObj': {
                                  'name': 'table2.field3'
                                }
                              },
                              'childNodes': [
                                {
                                  'className': 'WebTextNode',
                                  'text': '字段2-3'
                                }
                              ]
                            }
                          ]
                        },
                        {
                          'tagName': 'tr',
                          'className': 'WebTableRow',
                          'propObj': {
                            'styleObj': {},
                            'attrObj': {
                              'row-id': '{"table2.ID":"1115"}'
                            }
                          },
                          'childNodes': [
                            {
                              'tagName': 'td',
                              'className': 'WebTableDataCell',
                              'propObj': {
                                'styleObj': {
                                  'borderWidth': '1px',
                                  'borderStyle': 'solid',
                                  'borderColor': '#DCDFE6',
                                  'display': 'table-cell'
                                },
                                'attrObj': {}
                              },
                              'childNodes': [
                                {
                                  'tagName': 'div',
                                  'className': 'SelectControl',
                                  'propObj': {
                                    'styleObj': {},
                                    'attrObj': {
                                      'default-value': '',
                                      'name': 'select-control',
                                      'option-config': '{"name":"下拉选择0.11045603580376673","resultValue":1,"options":[{"label":"选项一","value":1,"checked":true,"selected":true,"options":[{"label":"选项一/1","value":11,"checked":true,"selected":true},{"label":"选项一/2","value":12,"checked":false,"selected":false},{"label":"选项一/3","value":13,"checked":false,"selected":false}]},{"label":"选项二","value":2,"checked":false,"selected":false,"options":[{"label":"选项二/1","value":21,"checked":false,"selected":false},{"label":"选项二/2","value":22,"checked":false,"selected":false},{"label":"选项二/3","value":23,"checked":false,"selected":false}]},{"label":"选项三","value":3,"checked":false,"selected":false,"options":[{"label":"选项三/1","value":31,"checked":false,"selected":false},{"label":"选项三/2","value":32,"checked":false,"selected":false},{"label":"选项三/3","value":33,"checked":false,"selected":false}]}]}',
                                      'value': '0'
                                    }
                                  },
                                  'childNodes': [
                                    {
                                      'tagName': 'div',
                                      'className': 'SelectItem',
                                      'propObj': {
                                        'styleObj': {},
                                        'attrObj': {}
                                      },
                                      'childNodes': [
                                        {
                                          'tagName': 'label',
                                          'className': 'Label',
                                          'propObj': {
                                            'styleObj': {
                                              'width': '100px',
                                              'lineHeight': '32px',
                                              'textAlign': 'right',
                                              'verticalAlign': 'middle',
                                              'float': 'left',
                                              'fontSize': '14px',
                                              'color': '#606266',
                                              'padding': '0 12px 0 0',
                                              'boxSizing': 'border-box',
                                              'display': 'none'
                                            },
                                            'attrObj': {
                                              'name': 'label'
                                            }
                                          },
                                          'childNodes': [
                                            {
                                              'className': 'WebTextNode',
                                              'text': '下拉选择框'
                                            }
                                          ]
                                        },
                                        {
                                          'tagName': 'select',
                                          'className': 'Select',
                                          'propObj': {
                                            'styleObj': {
                                              'height': '32px',
                                              'lineHeight': '32px',
                                              'paddingLeft': '43px',
                                              'paddingRight': '43px',
                                              'textAlign': 'center',
                                              'backgroundColor': '#FFF',
                                              'backgroundImage': 'none',
                                              'borderRadius': '4px',
                                              'border': '1px solid #DCDFE6',
                                              'boxSizing': 'border-box',
                                              'color': '#606266',
                                              'display': 'inline-block',
                                              'fontSize': 'inherit',
                                              'outline': '0',
                                              'padding': '0 15px',
                                              'margin': '0',
                                              'transition': 'border-color .2s cubic-bezier(.645,.045,.355,1)',
                                              'width': '100%'
                                            },
                                            'attrObj': {
                                              'name': 'select'
                                            }
                                          },
                                          'childNodes': [
                                            {
                                              'tagName': 'option',
                                              'className': 'WebOption',
                                              'propObj': {
                                                'styleObj': {},
                                                'attrObj': {
                                                  'name': 'option',
                                                  'label': '请选择',
                                                  'value': 0,
                                                  'selected': true
                                                }
                                              },
                                              'childNodes': [
                                                {
                                                  'className': 'WebTextNode',
                                                  'text': '请选择'
                                                }
                                              ]
                                            },
                                            {
                                              'tagName': 'option',
                                              'className': 'WebOption',
                                              'propObj': {
                                                'styleObj': {},
                                                'attrObj': {
                                                  'name': 'option',
                                                  'label': '选项一/1',
                                                  'value': 11
                                                }
                                              },
                                              'childNodes': [
                                                {
                                                  'className': 'WebTextNode',
                                                  'text': '选项一/1'
                                                }
                                              ]
                                            },
                                            {
                                              'tagName': 'option',
                                              'className': 'WebOption',
                                              'propObj': {
                                                'styleObj': {},
                                                'attrObj': {
                                                  'name': 'option',
                                                  'label': '选项一/2',
                                                  'value': 12
                                                }
                                              },
                                              'childNodes': [
                                                {
                                                  'className': 'WebTextNode',
                                                  'text': '选项一/2'
                                                }
                                              ]
                                            },
                                            {
                                              'tagName': 'option',
                                              'className': 'WebOption',
                                              'propObj': {
                                                'styleObj': {},
                                                'attrObj': {
                                                  'name': 'option',
                                                  'label': '选项一/3',
                                                  'value': 13
                                                }
                                              },
                                              'childNodes': [
                                                {
                                                  'className': 'WebTextNode',
                                                  'text': '选项一/3'
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        {
                                          'tagName': 'span',
                                          'className': 'Span',
                                          'propObj': {
                                            'styleObj': {
                                              'float': 'right',
                                              'backgroundColor': '#fff',
                                              'display': 'none'
                                            },
                                            'attrObj': {}
                                          },
                                          'childNodes': [
                                            {
                                              'tagName': 'svg',
                                              'className': 'DeleteSvg',
                                              'propObj': {
                                                'styleObj': {},
                                                'attrObj': {
                                                  'version': '1.1',
                                                  'xmlns': 'http://www.w3.org/2000/svg',
                                                  'width': 20,
                                                  'height': 20,
                                                  'viewBox': '0 0 1024 1024'
                                                }
                                              },
                                              'childNodes': [
                                                {
                                                  'tagName': 'path',
                                                  'className': 'SvgPath',
                                                  'propObj': {
                                                    'styleObj': {},
                                                    'attrObj': {
                                                      'd': 'M608 768c-17.696 0-32-14.304-32-32L576 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C640 753.696 625.696 768 608 768z M416 768c-17.696 0-32-14.304-32-32L384 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C448 753.696 433.696 768 416 768z M928 224l-160 0L768 160c0-52.928-42.72-96-95.264-96L352 64C299.072 64 256 107.072 256 160l0 64L96 224C78.304 224 64 238.304 64 256s14.304 32 32 32l832 0c17.696 0 32-14.304 32-32S945.696 224 928 224zM320 160c0-17.632 14.368-32 32-32l320.736 0C690.272 128 704 142.048 704 160l0 64L320 224 320 160z M736.128 960 288.064 960c-52.928 0-96-43.072-96-96L192.064 383.52c0-17.664 14.336-32 32-32s32 14.336 32 32L256.064 864c0 17.664 14.368 32 32 32l448.064 0c17.664 0 32-14.336 32-32L768.128 384.832c0-17.664 14.304-32 32-32s32 14.336 32 32L832.128 864C832.128 916.928 789.056 960 736.128 960z'
                                                    }
                                                  },
                                                  'childNodes': []
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              'tagName': 'td',
                              'className': 'WebTableDataCell',
                              'propObj': {
                                'styleObj': {
                                  'borderWidth': '1px',
                                  'borderStyle': 'solid',
                                  'borderColor': '#DCDFE6',
                                  'display': 'table-cell'
                                },
                                'attrObj': {}
                              },
                              'childNodes': [
                                {
                                  'tagName': 'div',
                                  'className': 'RadioControl',
                                  'propObj': {
                                    'styleObj': {},
                                    'attrObj': {
                                      'default-value': '',
                                      'name': 'radio-control',
                                      'option-config': '{"name":"单选0.9698000344300208","resultValue":2,"options":[{"label":"选项一","value":1,"checked":true,"selected":true,"options":[{"label":"选项一/1","value":11,"checked":true,"selected":true},{"label":"选项一/2","value":12,"checked":false,"selected":false},{"label":"选项一/3","value":13,"checked":false,"selected":false}]},{"label":"选项二","value":2,"checked":false,"selected":false,"options":[{"label":"选项二/1","value":21,"checked":false,"selected":false},{"label":"选项二/2","value":22,"checked":false,"selected":false},{"label":"选项二/3","value":23,"checked":false,"selected":false}]},{"label":"选项三","value":3,"checked":false,"selected":false,"options":[{"label":"选项三/1","value":31,"checked":false,"selected":false},{"label":"选项三/2","value":32,"checked":false,"selected":false},{"label":"选项三/3","value":33,"checked":false,"selected":false}]}]}',
                                      'value': '22'
                                    }
                                  },
                                  'childNodes': [
                                    {
                                      'tagName': 'div',
                                      'className': 'RadioItem',
                                      'propObj': {
                                        'styleObj': {},
                                        'attrObj': {}
                                      },
                                      'childNodes': [
                                        {
                                          'tagName': 'label',
                                          'className': 'Label',
                                          'propObj': {
                                            'styleObj': {
                                              'width': '100px',
                                              'lineHeight': '32px',
                                              'textAlign': 'right',
                                              'verticalAlign': 'middle',
                                              'float': 'left',
                                              'fontSize': '14px',
                                              'color': '#606266',
                                              'padding': '0 12px 0 0',
                                              'boxSizing': 'border-box',
                                              'display': 'none'
                                            },
                                            'attrObj': {
                                              'name': 'label'
                                            }
                                          },
                                          'childNodes': [
                                            {
                                              'className': 'WebTextNode',
                                              'text': '单选'
                                            }
                                          ]
                                        },
                                        {
                                          'tagName': 'div',
                                          'className': 'RadioGroup',
                                          'propObj': {
                                            'styleObj': {
                                              'height': '100%',
                                              'lineHeight': '32px',
                                              'paddingLeft': '43px',
                                              'paddingRight': '43px',
                                              'textAlign': 'center',
                                              'backgroundColor': '#FFF',
                                              'backgroundImage': 'none',
                                              'borderRadius': '4px',
                                              'border': '1px solid #DCDFE6',
                                              'boxSizing': 'border-box',
                                              'color': '#606266',
                                              'display': 'inline-block',
                                              'fontSize': 'inherit',
                                              'outline': '0',
                                              'padding': '0 15px',
                                              'margin': '0',
                                              'transition': 'border-color .2s cubic-bezier(.645,.045,.355,1)',
                                              'width': '100%'
                                            },
                                            'attrObj': {
                                              'name': 'radio-group'
                                            }
                                          },
                                          'childNodes': [
                                            {
                                              'tagName': 'span',
                                              'className': 'RadioOption',
                                              'propObj': {
                                                'styleObj': {},
                                                'attrObj': {}
                                              },
                                              'childNodes': [
                                                {
                                                  'tagName': 'input',
                                                  'className': 'Input',
                                                  'propObj': {
                                                    'styleObj': {},
                                                    'attrObj': {
                                                      'type': 'radio',
                                                      'name': '单选0.9698000344300208',
                                                      'label': '选项二/1',
                                                      'value': 21,
                                                      'checked': false
                                                    }
                                                  },
                                                  'childNodes': []
                                                },
                                                {
                                                  'className': 'WebTextNode',
                                                  'text': '选项二/1'
                                                }
                                              ]
                                            },
                                            {
                                              'tagName': 'span',
                                              'className': 'RadioOption',
                                              'propObj': {
                                                'styleObj': {},
                                                'attrObj': {}
                                              },
                                              'childNodes': [
                                                {
                                                  'tagName': 'input',
                                                  'className': 'Input',
                                                  'propObj': {
                                                    'styleObj': {},
                                                    'attrObj': {
                                                      'type': 'radio',
                                                      'name': '单选0.9698000344300208',
                                                      'label': '选项二/2',
                                                      'value': 22,
                                                      'checked': false
                                                    }
                                                  },
                                                  'childNodes': []
                                                },
                                                {
                                                  'className': 'WebTextNode',
                                                  'text': '选项二/2'
                                                }
                                              ]
                                            },
                                            {
                                              'tagName': 'span',
                                              'className': 'RadioOption',
                                              'propObj': {
                                                'styleObj': {},
                                                'attrObj': {}
                                              },
                                              'childNodes': [
                                                {
                                                  'tagName': 'input',
                                                  'className': 'Input',
                                                  'propObj': {
                                                    'styleObj': {},
                                                    'attrObj': {
                                                      'type': 'radio',
                                                      'name': '单选0.9698000344300208',
                                                      'label': '选项二/3',
                                                      'value': 23,
                                                      'checked': false
                                                    }
                                                  },
                                                  'childNodes': []
                                                },
                                                {
                                                  'className': 'WebTextNode',
                                                  'text': '选项二/3'
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        {
                                          'tagName': 'span',
                                          'className': 'Span',
                                          'propObj': {
                                            'styleObj': {
                                              'float': 'right',
                                              'backgroundColor': '#fff',
                                              'display': 'none'
                                            },
                                            'attrObj': {}
                                          },
                                          'childNodes': [
                                            {
                                              'tagName': 'svg',
                                              'className': 'DeleteSvg',
                                              'propObj': {
                                                'styleObj': {},
                                                'attrObj': {
                                                  'version': '1.1',
                                                  'xmlns': 'http://www.w3.org/2000/svg',
                                                  'width': 20,
                                                  'height': 20,
                                                  'viewBox': '0 0 1024 1024'
                                                }
                                              },
                                              'childNodes': [
                                                {
                                                  'tagName': 'path',
                                                  'className': 'SvgPath',
                                                  'propObj': {
                                                    'styleObj': {},
                                                    'attrObj': {
                                                      'd': 'M608 768c-17.696 0-32-14.304-32-32L576 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C640 753.696 625.696 768 608 768z M416 768c-17.696 0-32-14.304-32-32L384 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C448 753.696 433.696 768 416 768z M928 224l-160 0L768 160c0-52.928-42.72-96-95.264-96L352 64C299.072 64 256 107.072 256 160l0 64L96 224C78.304 224 64 238.304 64 256s14.304 32 32 32l832 0c17.696 0 32-14.304 32-32S945.696 224 928 224zM320 160c0-17.632 14.368-32 32-32l320.736 0C690.272 128 704 142.048 704 160l0 64L320 224 320 160z M736.128 960 288.064 960c-52.928 0-96-43.072-96-96L192.064 383.52c0-17.664 14.336-32 32-32s32 14.336 32 32L256.064 864c0 17.664 14.368 32 32 32l448.064 0c17.664 0 32-14.336 32-32L768.128 384.832c0-17.664 14.304-32 32-32s32 14.336 32 32L832.128 864C832.128 916.928 789.056 960 736.128 960z'
                                                    }
                                                  },
                                                  'childNodes': []
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              'tagName': 'td',
                              'className': 'WebTableDataCell',
                              'propObj': {
                                'styleObj': {
                                  'borderWidth': '1px',
                                  'borderStyle': 'solid',
                                  'borderColor': '#DCDFE6',
                                  'display': 'table-cell'
                                },
                                'attrObj': {}
                              },
                              'childNodes': [
                                {
                                  'tagName': 'div',
                                  'className': 'CheckboxControl',
                                  'propObj': {
                                    'styleObj': {},
                                    'attrObj': {
                                      'default-value': '',
                                      'name': 'checkbox-control',
                                      'option-config': '{"name":"复选0.7808719316476243","resultValue":3,"options":[{"label":"选项一","value":1,"checked":true,"selected":true,"options":[{"label":"选项一/1","value":11,"checked":true,"selected":true},{"label":"选项一/2","value":12,"checked":false,"selected":false},{"label":"选项一/3","value":13,"checked":false,"selected":false}]},{"label":"选项二","value":2,"checked":false,"selected":false,"options":[{"label":"选项二/1","value":21,"checked":false,"selected":false},{"label":"选项二/2","value":22,"checked":false,"selected":false},{"label":"选项二/3","value":23,"checked":false,"selected":false}]},{"label":"选项三","value":3,"checked":false,"selected":false,"options":[{"label":"选项三/1","value":31,"checked":false,"selected":false},{"label":"选项三/2","value":32,"checked":false,"selected":false},{"label":"选项三/3","value":33,"checked":false,"selected":false}]}]}',
                                      'value': '32,33'
                                    }
                                  },
                                  'childNodes': [
                                    {
                                      'tagName': 'div',
                                      'className': 'CheckboxItem',
                                      'propObj': {
                                        'styleObj': {},
                                        'attrObj': {}
                                      },
                                      'childNodes': [
                                        {
                                          'tagName': 'label',
                                          'className': 'Label',
                                          'propObj': {
                                            'styleObj': {
                                              'width': '100px',
                                              'lineHeight': '32px',
                                              'textAlign': 'right',
                                              'verticalAlign': 'middle',
                                              'float': 'left',
                                              'fontSize': '14px',
                                              'color': '#606266',
                                              'padding': '0 12px 0 0',
                                              'boxSizing': 'border-box',
                                              'display': 'none'
                                            },
                                            'attrObj': {
                                              'name': 'label'
                                            }
                                          },
                                          'childNodes': [
                                            {
                                              'className': 'WebTextNode',
                                              'text': '复选'
                                            }
                                          ]
                                        },
                                        {
                                          'tagName': 'div',
                                          'className': 'CheckboxGroup',
                                          'propObj': {
                                            'styleObj': {
                                              'height': '100%',
                                              'lineHeight': '32px',
                                              'paddingLeft': '43px',
                                              'paddingRight': '43px',
                                              'textAlign': 'center',
                                              'backgroundColor': '#FFF',
                                              'backgroundImage': 'none',
                                              'borderRadius': '4px',
                                              'border': '1px solid #DCDFE6',
                                              'boxSizing': 'border-box',
                                              'color': '#606266',
                                              'display': 'inline-block',
                                              'fontSize': 'inherit',
                                              'outline': '0',
                                              'padding': '0 15px',
                                              'margin': '0',
                                              'transition': 'border-color .2s cubic-bezier(.645,.045,.355,1)',
                                              'width': '100%'
                                            },
                                            'attrObj': {
                                              'name': 'checkbox-group'
                                            }
                                          },
                                          'childNodes': [
                                            {
                                              'tagName': 'span',
                                              'className': 'CheckboxOption',
                                              'propObj': {
                                                'styleObj': {},
                                                'attrObj': {}
                                              },
                                              'childNodes': [
                                                {
                                                  'tagName': 'input',
                                                  'className': 'Input',
                                                  'propObj': {
                                                    'styleObj': {},
                                                    'attrObj': {
                                                      'type': 'checkbox',
                                                      'name': '复选0.7808719316476243',
                                                      'label': '选项三/1',
                                                      'value': 31,
                                                      'checked': false
                                                    }
                                                  },
                                                  'childNodes': []
                                                },
                                                {
                                                  'className': 'WebTextNode',
                                                  'text': '选项三/1'
                                                }
                                              ]
                                            },
                                            {
                                              'tagName': 'span',
                                              'className': 'CheckboxOption',
                                              'propObj': {
                                                'styleObj': {},
                                                'attrObj': {}
                                              },
                                              'childNodes': [
                                                {
                                                  'tagName': 'input',
                                                  'className': 'Input',
                                                  'propObj': {
                                                    'styleObj': {},
                                                    'attrObj': {
                                                      'type': 'checkbox',
                                                      'name': '复选0.7808719316476243',
                                                      'label': '选项三/2',
                                                      'value': 32,
                                                      'checked': false
                                                    }
                                                  },
                                                  'childNodes': []
                                                },
                                                {
                                                  'className': 'WebTextNode',
                                                  'text': '选项三/2'
                                                }
                                              ]
                                            },
                                            {
                                              'tagName': 'span',
                                              'className': 'CheckboxOption',
                                              'propObj': {
                                                'styleObj': {},
                                                'attrObj': {}
                                              },
                                              'childNodes': [
                                                {
                                                  'tagName': 'input',
                                                  'className': 'Input',
                                                  'propObj': {
                                                    'styleObj': {},
                                                    'attrObj': {
                                                      'type': 'checkbox',
                                                      'name': '复选0.7808719316476243',
                                                      'label': '选项三/3',
                                                      'value': 33,
                                                      'checked': false
                                                    }
                                                  },
                                                  'childNodes': []
                                                },
                                                {
                                                  'className': 'WebTextNode',
                                                  'text': '选项三/3'
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        {
                                          'tagName': 'span',
                                          'className': 'Span',
                                          'propObj': {
                                            'styleObj': {
                                              'float': 'right',
                                              'backgroundColor': '#fff',
                                              'display': 'none'
                                            },
                                            'attrObj': {}
                                          },
                                          'childNodes': [
                                            {
                                              'tagName': 'svg',
                                              'className': 'DeleteSvg',
                                              'propObj': {
                                                'styleObj': {},
                                                'attrObj': {
                                                  'version': '1.1',
                                                  'xmlns': 'http://www.w3.org/2000/svg',
                                                  'width': 20,
                                                  'height': 20,
                                                  'viewBox': '0 0 1024 1024'
                                                }
                                              },
                                              'childNodes': [
                                                {
                                                  'tagName': 'path',
                                                  'className': 'SvgPath',
                                                  'propObj': {
                                                    'styleObj': {},
                                                    'attrObj': {
                                                      'd': 'M608 768c-17.696 0-32-14.304-32-32L576 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C640 753.696 625.696 768 608 768z M416 768c-17.696 0-32-14.304-32-32L384 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C448 753.696 433.696 768 416 768z M928 224l-160 0L768 160c0-52.928-42.72-96-95.264-96L352 64C299.072 64 256 107.072 256 160l0 64L96 224C78.304 224 64 238.304 64 256s14.304 32 32 32l832 0c17.696 0 32-14.304 32-32S945.696 224 928 224zM320 160c0-17.632 14.368-32 32-32l320.736 0C690.272 128 704 142.048 704 160l0 64L320 224 320 160z M736.128 960 288.064 960c-52.928 0-96-43.072-96-96L192.064 383.52c0-17.664 14.336-32 32-32s32 14.336 32 32L256.064 864c0 17.664 14.368 32 32 32l448.064 0c17.664 0 32-14.336 32-32L768.128 384.832c0-17.664 14.304-32 32-32s32 14.336 32 32L832.128 864C832.128 916.928 789.056 960 736.128 960z'
                                                    }
                                                  },
                                                  'childNodes': []
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      'tagName': 'span',
                      'className': 'Span',
                      'propObj': {
                        'styleObj': {
                          'float': 'right',
                          'backgroundColor': '#fff'
                        },
                        'attrObj': {}
                      },
                      'childNodes': [
                        {
                          'tagName': 'svg',
                          'className': 'DeleteSvg',
                          'propObj': {
                            'styleObj': {},
                            'attrObj': {
                              'version': '1.1',
                              'xmlns': 'http://www.w3.org/2000/svg',
                              'width': 20,
                              'height': 20,
                              'viewBox': '0 0 1024 1024'
                            }
                          },
                          'childNodes': [
                            {
                              'tagName': 'path',
                              'className': 'SvgPath',
                              'propObj': {
                                'styleObj': {},
                                'attrObj': {
                                  'd': 'M608 768c-17.696 0-32-14.304-32-32L576 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C640 753.696 625.696 768 608 768z M416 768c-17.696 0-32-14.304-32-32L384 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C448 753.696 433.696 768 416 768z M928 224l-160 0L768 160c0-52.928-42.72-96-95.264-96L352 64C299.072 64 256 107.072 256 160l0 64L96 224C78.304 224 64 238.304 64 256s14.304 32 32 32l832 0c17.696 0 32-14.304 32-32S945.696 224 928 224zM320 160c0-17.632 14.368-32 32-32l320.736 0C690.272 128 704 142.048 704 160l0 64L320 224 320 160z M736.128 960 288.064 960c-52.928 0-96-43.072-96-96L192.064 383.52c0-17.664 14.336-32 32-32s32 14.336 32 32L256.064 864c0 17.664 14.368 32 32 32l448.064 0c17.664 0 32-14.336 32-32L768.128 384.832c0-17.664 14.304-32 32-32s32 14.336 32 32L832.128 864C832.128 916.928 789.056 960 736.128 960z'
                                }
                              },
                              'childNodes': []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
export const tableData: IFormData = {
  'table': [
    {
      'table1.ID': '1114',
      'table1.field1': '11',
      'table1.field2': '21',
      'table1.field3': '1'
    },
    {
      'table1.ID': '1114',
      'table1.field1': '12',
      'table1.field2': '22',
      'table1.field3': '2'
    },
    {
      'table1.ID': '1114',
      'table1.field1': '13',
      'table1.field2': '23',
      'table1.field3': '3'
    },
    {
      'table1.ID': '1114',
      'table1.field1': '0',
      'table1.field2': '0',
      'table1.field3': ''
    },
    {
      'table2.ID': '1115',
      'table2.field1': '11',
      'table2.field2': '22',
      'table2.field3': '32,33'
    }
  ]
};

export const oldFormJson: IWebDocument = {
  'tagName': 'div',
  'className': 'WebDocument',
  'propObj': {
    'styleObj': {},
    'attrObj': {
      'name': 'document-content',
      'model': '3',
      'field-config': '{"name":"注册测试","resultValue":0,"options":[{"label":"注册测试.名称","value":"1473912138036269057.1473912374385299458","checked":false,"selected":false},{"label":"注册测试.状态","value":"1473912138036269057.1473912702723805185","checked":false,"selected":false},{"label":"注册测试.理由","value":"1473912138036269057.1473912941618778113","checked":false,"selected":false},{"label":"注册测试.日期","value":"1473912138036269057.1473913078638301185","checked":false,"selected":false}]}'
    }
  },
  'childNodes': [{
    'tagName': 'ul',
    'className': 'WebDocumentTabs',
    'propObj': {
      'styleObj': {
        'display': 'none',
        'listStyle': 'none',
        'backgroundColor': '#f0f0f0',
        'paddingLeft': '5px'
      },
      'attrObj': { 'name': 'document-tabs' }
    },
    'childNodes': [{
      'tagName': 'li',
      'className': 'ListItem',
      'propObj': {
        'styleObj': {
          'width': '150px',
          'textAlign': 'center',
          'padding': '6px 14px',
          'borderRadius': '4px 4px 0px 0px',
          'borderBottom': 'none',
          'boxSizing': 'border-box',
          'borderTop': '1px solid #d2d2d2',
          'borderLeft': '1px solid #d2d2d2',
          'borderRight': '1px solid #d2d2d2',
          'height': '38px',
          'overflowWrap': 'break-word',
          'overflow': 'hidden',
          'backgroundColor': '#ffffff',
          'fontSize': '14px',
          'paddingTop': '10px'
        },
        'attrObj': { 'name': 'list-item' }
      },
      'childNodes': [{
        'className': 'WebTextNode',
        'text': '首页'
      }]
    }]
  }, {
    'tagName': 'div',
    'className': 'WebDocumentContents',
    'propObj': {
      'styleObj': {},
      'attrObj': { 'name': 'document-contents' }
    },
    'childNodes': [
      {
        'tagName': 'div',
        'className': 'WebPage',
        'propObj': {
          'styleObj': {
            'position': 'relative',
            'fontFamily': '宋体',
            'fontSize': '3.5mm',
            'boxShadow': '0px 0px 20px #000',
            'boxSizing': 'border-box',
            'margin': '5mm',
            'minHeight': '300px',
            'maxHeight': 'calc(600px - 60px - 10mm)',
            'overflowY': 'auto',
            'backgroundColor': '#fff',
            'backgroundImage': ''
          },
          'attrObj': {
            'pageIndex': 1,
            'name': 'web-page',
            'landscape': false
          }
        },
        'childNodes': [{
          'tagName': 'div',
          'className': 'SingleInputControl',
          'propObj': {
            'styleObj': {
              'display': 'inline-block',
              'width': '100%',
              'padding': '10px',
              'marginBottom': '10px!important',
              'border': '1px solid #e2e0e0',
              'boxSizing': 'border-box',
              'zIndex': 9
            },
            'attrObj': {
              'field-name': '1473912138036269057.1473912374385299458',
              'default-value': '',
              'draggable': 'true',
              'name': 'single-input-control',
              'ctrl-id': 1
            }
          },
          'childNodes': [{
            'tagName': 'div',
            'className': 'InputItem',
            'propObj': {
              'styleObj': {
                'border': '1px solid #1890ff',
                'background': '#f3f9ff',
                'padding': '10px',
                'marginBottom': '10px!important',
                'fontSize': '14px',
                'display': 'block'
              },
              'attrObj': {}
            },
            'childNodes': [{
              'tagName': 'label',
              'className': 'Label',
              'propObj': {
                'styleObj': {
                  'width': '100px',
                  'lineHeight': '32px',
                  'textAlign': 'right',
                  'verticalAlign': 'middle',
                  'float': 'left',
                  'fontSize': '14px',
                  'color': '#606266',
                  'padding': '0 12px 0 0',
                  'boxSizing': 'border-box'
                },
                'attrObj': { 'name': 'label' }
              },
              'childNodes': [{
                'className': 'WebTextNode',
                'text': '名称'
              }]
            }, {
              'tagName': 'input',
              'className': 'Input',
              'propObj': {
                'styleObj': {
                  'height': '32px',
                  'lineHeight': '32px',
                  'paddingLeft': '43px',
                  'paddingRight': '43px',
                  'textAlign': 'center',
                  'backgroundColor': '#FFF',
                  'backgroundImage': 'none',
                  'borderRadius': '4px',
                  'border': '1px solid #DCDFE6',
                  'boxSizing': 'border-box',
                  'color': '#606266',
                  'display': 'inline-block',
                  'fontSize': 'inherit',
                  'outline': '0',
                  'padding': '0 15px',
                  'margin': '0',
                  'transition': 'border-color .2s cubic-bezier(.645,.045,.355,1)',
                  'width': 'calc(100% - 100px)'
                },
                'attrObj': {
                  'placeholder': '请输入',
                  'type': 'text'
                }
              },
              'childNodes': []
            }, {
              'tagName': 'span',
              'className': 'Span',
              'propObj': {
                'styleObj': {
                  'float': 'right',
                  'backgroundColor': '#fff'
                },
                'attrObj': {}
              },
              'childNodes': [{
                'tagName': 'svg',
                'className': 'DeleteSvg',
                'propObj': {
                  'styleObj': {},
                  'attrObj': {
                    'version': '1.1',
                    'xmlns': 'http://www.w3.org/2000/svg',
                    'width': 20,
                    'height': 20,
                    'viewBox': '0 0 1024 1024'
                  }
                },
                'childNodes': [{
                  'tagName': 'path',
                  'className': 'SvgPath',
                  'propObj': {
                    'styleObj': {},
                    'attrObj': { 'd': 'M608 768c-17.696 0-32-14.304-32-32L576 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C640 753.696 625.696 768 608 768z M416 768c-17.696 0-32-14.304-32-32L384 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C448 753.696 433.696 768 416 768z M928 224l-160 0L768 160c0-52.928-42.72-96-95.264-96L352 64C299.072 64 256 107.072 256 160l0 64L96 224C78.304 224 64 238.304 64 256s14.304 32 32 32l832 0c17.696 0 32-14.304 32-32S945.696 224 928 224zM320 160c0-17.632 14.368-32 32-32l320.736 0C690.272 128 704 142.048 704 160l0 64L320 224 320 160z M736.128 960 288.064 960c-52.928 0-96-43.072-96-96L192.064 383.52c0-17.664 14.336-32 32-32s32 14.336 32 32L256.064 864c0 17.664 14.368 32 32 32l448.064 0c17.664 0 32-14.336 32-32L768.128 384.832c0-17.664 14.304-32 32-32s32 14.336 32 32L832.128 864C832.128 916.928 789.056 960 736.128 960z' }
                  },
                  'childNodes': []
                }]
              }]
            }]
          }]
        }, {
          'tagName': 'div',
          'className': 'SingleInputControl',
          'propObj': {
            'styleObj': {
              'display': 'inline-block',
              'width': '100%',
              'padding': '10px',
              'marginBottom': '10px!important',
              'border': '1px solid #e2e0e0',
              'boxSizing': 'border-box',
              'zIndex': 9
            },
            'attrObj': {
              'field-name': '1473912138036269057.1473912941618778113',
              'default-value': '',
              'draggable': 'true',
              'name': 'single-input-control',
              'ctrl-id': 2
            }
          },
          'childNodes': [{
            'tagName': 'div',
            'className': 'InputItem',
            'propObj': {
              'styleObj': {
                'border': '1px solid #1890ff',
                'background': '#f3f9ff',
                'padding': '10px',
                'marginBottom': '10px!important',
                'fontSize': '14px',
                'display': 'block'
              },
              'attrObj': {}
            },
            'childNodes': [{
              'tagName': 'label',
              'className': 'Label',
              'propObj': {
                'styleObj': {
                  'width': '100px',
                  'lineHeight': '32px',
                  'textAlign': 'right',
                  'verticalAlign': 'middle',
                  'float': 'left',
                  'fontSize': '14px',
                  'color': '#606266',
                  'padding': '0 12px 0 0',
                  'boxSizing': 'border-box'
                },
                'attrObj': { 'name': 'label' }
              },
              'childNodes': [{
                'className': 'WebTextNode',
                'text': '理由'
              }]
            }, {
              'tagName': 'input',
              'className': 'Input',
              'propObj': {
                'styleObj': {
                  'height': '32px',
                  'lineHeight': '32px',
                  'paddingLeft': '43px',
                  'paddingRight': '43px',
                  'textAlign': 'center',
                  'backgroundColor': '#FFF',
                  'backgroundImage': 'none',
                  'borderRadius': '4px',
                  'border': '1px solid #DCDFE6',
                  'boxSizing': 'border-box',
                  'color': '#606266',
                  'display': 'inline-block',
                  'fontSize': 'inherit',
                  'outline': '0',
                  'padding': '0 15px',
                  'margin': '0',
                  'transition': 'border-color .2s cubic-bezier(.645,.045,.355,1)',
                  'width': 'calc(100% - 100px)'
                },
                'attrObj': {
                  'placeholder': '请输入',
                  'type': 'text'
                }
              },
              'childNodes': []
            }, {
              'tagName': 'span',
              'className': 'Span',
              'propObj': {
                'styleObj': {
                  'float': 'right',
                  'backgroundColor': '#fff'
                },
                'attrObj': {}
              },
              'childNodes': [{
                'tagName': 'svg',
                'className': 'DeleteSvg',
                'propObj': {
                  'styleObj': {},
                  'attrObj': {
                    'version': '1.1',
                    'xmlns': 'http://www.w3.org/2000/svg',
                    'width': 20,
                    'height': 20,
                    'viewBox': '0 0 1024 1024'
                  }
                },
                'childNodes': [{
                  'tagName': 'path',
                  'className': 'SvgPath',
                  'propObj': {
                    'styleObj': {},
                    'attrObj': { 'd': 'M608 768c-17.696 0-32-14.304-32-32L576 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C640 753.696 625.696 768 608 768z M416 768c-17.696 0-32-14.304-32-32L384 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C448 753.696 433.696 768 416 768z M928 224l-160 0L768 160c0-52.928-42.72-96-95.264-96L352 64C299.072 64 256 107.072 256 160l0 64L96 224C78.304 224 64 238.304 64 256s14.304 32 32 32l832 0c17.696 0 32-14.304 32-32S945.696 224 928 224zM320 160c0-17.632 14.368-32 32-32l320.736 0C690.272 128 704 142.048 704 160l0 64L320 224 320 160z M736.128 960 288.064 960c-52.928 0-96-43.072-96-96L192.064 383.52c0-17.664 14.336-32 32-32s32 14.336 32 32L256.064 864c0 17.664 14.368 32 32 32l448.064 0c17.664 0 32-14.336 32-32L768.128 384.832c0-17.664 14.304-32 32-32s32 14.336 32 32L832.128 864C832.128 916.928 789.056 960 736.128 960z' }
                  },
                  'childNodes': []
                }]
              }]
            }]
          }]
        }, {
          'tagName': 'div',
          'className': 'DateControl',
          'propObj': {
            'styleObj': {
              'display': 'inline-block',
              'width': '100%',
              'padding': '10px',
              'marginBottom': '10px!important',
              'border': '1px solid #e2e0e0',
              'boxSizing': 'border-box',
              'zIndex': 9
            },
            'attrObj': {
              'field-name': '1473912138036269057.1473913078638301185',
              'default-value': '',
              'draggable': 'true',
              'name': 'date-control',
              'ctrl-id': 18
            }
          },
          'childNodes': [{
            'tagName': 'div',
            'className': 'InputItem',
            'propObj': {
              'styleObj': {
                'border': '1px solid #1890ff',
                'background': '#f3f9ff',
                'padding': '10px',
                'marginBottom': '10px!important',
                'fontSize': '14px',
                'display': 'block'
              },
              'attrObj': {}
            },
            'childNodes': [{
              'tagName': 'label',
              'className': 'Label',
              'propObj': {
                'styleObj': {
                  'width': '100px',
                  'lineHeight': '32px',
                  'textAlign': 'right',
                  'verticalAlign': 'middle',
                  'float': 'left',
                  'fontSize': '14px',
                  'color': '#606266',
                  'padding': '0 12px 0 0',
                  'boxSizing': 'border-box'
                },
                'attrObj': { 'name': 'label' }
              },
              'childNodes': [{
                'className': 'WebTextNode',
                'text': '日期'
              }]
            }, {
              'tagName': 'input',
              'className': 'Input',
              'propObj': {
                'styleObj': {
                  'height': '32px',
                  'lineHeight': '32px',
                  'paddingLeft': '43px',
                  'paddingRight': '43px',
                  'textAlign': 'center',
                  'backgroundColor': '#FFF',
                  'backgroundImage': 'none',
                  'borderRadius': '4px',
                  'border': '1px solid #DCDFE6',
                  'boxSizing': 'border-box',
                  'color': '#606266',
                  'display': 'inline-block',
                  'fontSize': 'inherit',
                  'outline': '0',
                  'padding': '0 15px',
                  'margin': '0',
                  'transition': 'border-color .2s cubic-bezier(.645,.045,.355,1)',
                  'width': 'calc(100% - 100px)'
                },
                'attrObj': {
                  'placeholder': '请选择日期',
                  'type': 'date'
                }
              },
              'childNodes': []
            }, {
              'tagName': 'span',
              'className': 'Span',
              'propObj': {
                'styleObj': {
                  'float': 'right',
                  'backgroundColor': '#fff'
                },
                'attrObj': {}
              },
              'childNodes': [{
                'tagName': 'svg',
                'className': 'DeleteSvg',
                'propObj': {
                  'styleObj': {},
                  'attrObj': {
                    'version': '1.1',
                    'xmlns': 'http://www.w3.org/2000/svg',
                    'width': 20,
                    'height': 20,
                    'viewBox': '0 0 1024 1024'
                  }
                },
                'childNodes': [{
                  'tagName': 'path',
                  'className': 'SvgPath',
                  'propObj': {
                    'styleObj': {},
                    'attrObj': { 'd': 'M608 768c-17.696 0-32-14.304-32-32L576 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C640 753.696 625.696 768 608 768z M416 768c-17.696 0-32-14.304-32-32L384 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C448 753.696 433.696 768 416 768z M928 224l-160 0L768 160c0-52.928-42.72-96-95.264-96L352 64C299.072 64 256 107.072 256 160l0 64L96 224C78.304 224 64 238.304 64 256s14.304 32 32 32l832 0c17.696 0 32-14.304 32-32S945.696 224 928 224zM320 160c0-17.632 14.368-32 32-32l320.736 0C690.272 128 704 142.048 704 160l0 64L320 224 320 160z M736.128 960 288.064 960c-52.928 0-96-43.072-96-96L192.064 383.52c0-17.664 14.336-32 32-32s32 14.336 32 32L256.064 864c0 17.664 14.368 32 32 32l448.064 0c17.664 0 32-14.336 32-32L768.128 384.832c0-17.664 14.304-32 32-32s32 14.336 32 32L832.128 864C832.128 916.928 789.056 960 736.128 960z' }
                  },
                  'childNodes': []
                }]
              }]
            }]
          }]
        }, {
          'tagName': 'div',
          'className': 'SingleInputControl',
          'propObj': {
            'styleObj': {
              'display': 'inline-block',
              'width': '100%',
              'padding': '10px',
              'marginBottom': '10px!important',
              'border': '1px solid #e2e0e0',
              'boxSizing': 'border-box',
              'zIndex': 9
            },
            'attrObj': {
              'draggable': 'true',
              'ctrl-id': 5,
              'default-value': '',
              'name': 'single-input-control',
              'field-name': '1473912138036269057.1473912702723805185'
            }
          },
          'childNodes': [{
            'tagName': 'div',
            'className': 'InputItem',
            'propObj': {
              'styleObj': {
                'border': '1px solid #1890ff',
                'background': '#f3f9ff',
                'padding': '10px',
                'marginBottom': '10px!important',
                'fontSize': '14px',
                'display': 'block'
              },
              'attrObj': {}
            },
            'childNodes': [{
              'tagName': 'label',
              'className': 'Label',
              'propObj': {
                'styleObj': {
                  'width': '100px',
                  'lineHeight': '32px',
                  'textAlign': 'right',
                  'verticalAlign': 'middle',
                  'float': 'left',
                  'fontSize': '14px',
                  'color': '#606266',
                  'padding': '0 12px 0 0',
                  'boxSizing': 'border-box'
                },
                'attrObj': { 'name': 'label' }
              },
              'childNodes': [{
                'className': 'WebTextNode',
                'text': '状态'
              }]
            }, {
              'tagName': 'input',
              'className': 'Input',
              'propObj': {
                'styleObj': {
                  'height': '32px',
                  'lineHeight': '32px',
                  'paddingLeft': '43px',
                  'paddingRight': '43px',
                  'textAlign': 'center',
                  'backgroundColor': '#FFF',
                  'backgroundImage': 'none',
                  'borderRadius': '4px',
                  'border': '1px solid #DCDFE6',
                  'boxSizing': 'border-box',
                  'color': '#606266',
                  'display': 'inline-block',
                  'fontSize': 'inherit',
                  'outline': '0',
                  'padding': '0 15px',
                  'margin': '0',
                  'transition': 'border-color .2s cubic-bezier(.645,.045,.355,1)',
                  'width': 'calc(100% - 100px)'
                },
                'attrObj': {
                  'type': 'text',
                  'placeholder': '请输入'
                }
              },
              'childNodes': []
            }, {
              'tagName': 'span',
              'className': 'Span',
              'propObj': {
                'styleObj': {
                  'float': 'right',
                  'backgroundColor': '#fff'
                },
                'attrObj': {}
              },
              'childNodes': [{
                'tagName': 'svg',
                'className': 'DeleteSvg',
                'propObj': {
                  'styleObj': {},
                  'attrObj': {
                    'version': '1.1',
                    'xmlns': 'http://www.w3.org/2000/svg',
                    'width': 20,
                    'height': 20,
                    'viewBox': '0 0 1024 1024'
                  }
                },
                'childNodes': [{
                  'tagName': 'path',
                  'className': 'SvgPath',
                  'propObj': {
                    'styleObj': {},
                    'attrObj': { 'd': 'M608 768c-17.696 0-32-14.304-32-32L576 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C640 753.696 625.696 768 608 768z M416 768c-17.696 0-32-14.304-32-32L384 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C448 753.696 433.696 768 416 768z M928 224l-160 0L768 160c0-52.928-42.72-96-95.264-96L352 64C299.072 64 256 107.072 256 160l0 64L96 224C78.304 224 64 238.304 64 256s14.304 32 32 32l832 0c17.696 0 32-14.304 32-32S945.696 224 928 224zM320 160c0-17.632 14.368-32 32-32l320.736 0C690.272 128 704 142.048 704 160l0 64L320 224 320 160z M736.128 960 288.064 960c-52.928 0-96-43.072-96-96L192.064 383.52c0-17.664 14.336-32 32-32s32 14.336 32 32L256.064 864c0 17.664 14.368 32 32 32l448.064 0c17.664 0 32-14.336 32-32L768.128 384.832c0-17.664 14.304-32 32-32s32 14.336 32 32L832.128 864C832.128 916.928 789.056 960 736.128 960z' }
                  },
                  'childNodes': []
                }]
              }]
            }]
          }]
        }]
      }
    ]
  }]
};
export const oldFormData: IFormData = {
  'table': [],
  '1473912138036269057.1473912374385299458': '666',
  '1473912138036269057.1473912941618778113': 'ujj',
  '1473912138036269057.1473913078638301185': '2021-12-23',
  '1473912138036269057.1473912702723805185': 'hhh',
  'form.ID': '01231234',
};

export const testJson1: IWebDocument = {
  'tagName': 'div',
  'className': 'WebDocument',
  'propObj': {
    'styleObj': {},
    'attrObj': {
      'name': 'document-content',
      'field-config': '{"name":"selectOptions","resultValue":0,"options":[{"label":"表1","value":"table1","checked":false,"selected":false,"options":[{"label":"字段1-1","value":"table1.field1","checked":false,"selected":false},{"label":"字段1-2","value":"table1.field2","checked":false,"selected":false},{"label":"字段1-3","value":"table1.field3","checked":false,"selected":false}]},{"label":"表2","value":"table2","checked":false,"selected":false,"options":[{"label":"字段2-1","value":"table2.field1","checked":false,"selected":false},{"label":"字段2-2","value":"table2.field2","checked":false,"selected":false},{"label":"字段2-3","value":"table2.field3","checked":false,"selected":false}]},{"label":"表3","value":"table3","checked":false,"selected":false,"options":[{"label":"字段3-1","value":"table3.field1","checked":false,"selected":false},{"label":"字段3-2","value":"table3.field2","checked":false,"selected":false},{"label":"字段3-3","value":"table3.field3","checked":false,"selected":false}]}]}'
    }
  },
  'childNodes': [
    {
      'tagName': 'ul',
      'className': 'WebDocumentTabs',
      'propObj': {
        'styleObj': {
          'display': 'flex',
          'listStyle': 'none',
          'backgroundColor': '#f0f0f0',
          'padding': '0 5px',
          'marginTop': '-35px',
          'width': '325px',
          'flexDirection': 'row'
        },
        'attrObj': {
          'name': 'document-tabs'
        }
      },
      'childNodes': [
        {
          'tagName': 'li',
          'className': 'ListItem',
          'propObj': {
            'styleObj': {
              'width': '150px',
              'textAlign': 'center',
              'padding': '6px 14px',
              'borderRadius': '4px 4px 0px 0px',
              'borderBottom': 'none',
              'boxSizing': 'border-box',
              'borderTop': '1px solid #d2d2d2',
              'borderLeft': '1px solid #d2d2d2',
              'borderRight': '1px solid #d2d2d2',
              'overflowWrap': 'break-word',
              'overflow': 'hidden',
              'fontSize': '14px',
              'paddingTop': '10px',
              'backgroundColor': '#ffffff'
            },
            'attrObj': {
              'name': 'list-item',
              'constenteditable': false
            }
          },
          'childNodes': [
            {
              'className': 'WebTextNode',
              'text': '首页'
            }
          ]
        },
        {
          'tagName': 'li',
          'className': 'ListItem',
          'propObj': {
            'styleObj': {
              'width': '150px',
              'textAlign': 'center',
              'padding': '6px 14px',
              'borderRadius': '4px 4px 0px 0px',
              'borderBottom': 'none',
              'boxSizing': 'border-box',
              'borderTop': '1px solid #d2d2d2',
              'borderLeft': '1px solid #d2d2d2',
              'borderRight': '1px solid #d2d2d2',
              'overflowWrap': 'break-word',
              'overflow': 'hidden',
              'fontSize': '14px',
              'paddingTop': '10px',
              'backgroundColor': ''
            },
            'attrObj': {
              'name': 'list-item',
              'constenteditable': false
            }
          },
          'childNodes': [
            {
              'className': 'WebTextNode',
              'text': '第2页'
            }
          ]
        }
      ]
    },
    {
      'tagName': 'div',
      'className': 'WebDocumentContents',
      'propObj': {
        'styleObj': {},
        'attrObj': {
          'name': 'document-contents'
        }
      },
      'childNodes': [
        {
          'tagName': 'div',
          'className': 'WebPage',
          'propObj': {
            'styleObj': {
              'position': 'relative',
              'fontFamily': '宋体',
              'fontSize': '3.5mm',
              'boxShadow': '0px 0px 20px #000',
              'boxSizing': 'border-box',
              'margin': '5mm',
              'minHeight': '300px',
              'maxHeight': 'calc(600px - 60px - 10mm)',
              'overflowY': 'auto',
              'backgroundColor': '#fff',
              'backgroundImage': '',
              'display': 'block'
            },
            'attrObj': {
              'landscape': false,
              'pageIndex': 1,
              'name': 'web-page'
            }
          },
          'childNodes': [
            {
              'tagName': 'div',
              'className': 'RadioControl',
              'propObj': {
                'styleObj': {
                  'display': 'inline-block',
                  'width': '100%',
                  'padding': '10px',
                  'marginBottom': '10px!important',
                  'border': '1px solid #e2e0e0',
                  'boxSizing': 'border-box',
                  'zIndex': 9
                },
                'attrObj': {
                  'draggable': 'true',
                  'ctrl-id': 1,
                  'default-value': '',
                  'name': 'radio-control',
                  'option-config': '{"name":"单选0.4520548831312725","resultValue":1,"options":[{"label":"选项一","value":1,"checked":true,"selected":true,"options":[{"label":"选项一/1","value":11,"checked":true,"selected":true},{"label":"选项一/2","value":12,"checked":false,"selected":false},{"label":"选项一/3","value":13,"checked":false,"selected":false}]},{"label":"选项二","value":2,"checked":false,"selected":false,"options":[{"label":"选项二/1","value":21,"checked":false,"selected":false},{"label":"选项二/2","value":22,"checked":false,"selected":false},{"label":"选项二/3","value":23,"checked":false,"selected":false}]},{"label":"选项三","value":3,"checked":false,"selected":false,"options":[{"label":"选项三/1","value":31,"checked":false,"selected":false},{"label":"选项三/2","value":32,"checked":false,"selected":false},{"label":"选项三/3","value":33,"checked":false,"selected":false}]}]}',
                  'field-name': 'table1.field1'
                }
              },
              'childNodes': [
                {
                  'tagName': 'div',
                  'className': 'RadioItem',
                  'propObj': {
                    'styleObj': {
                      'border': '1px solid #1890ff',
                      'background': '#f3f9ff',
                      'padding': '10px',
                      'marginBottom': '10px!important',
                      'fontSize': '14px',
                      'display': 'block'
                    },
                    'attrObj': {}
                  },
                  'childNodes': [
                    {
                      'tagName': 'label',
                      'className': 'Label',
                      'propObj': {
                        'styleObj': {
                          'width': '100px',
                          'lineHeight': '32px',
                          'textAlign': 'right',
                          'verticalAlign': 'middle',
                          'float': 'left',
                          'fontSize': '14px',
                          'color': '#606266',
                          'padding': '0 12px 0 0',
                          'boxSizing': 'border-box'
                        },
                        'attrObj': {
                          'name': 'label'
                        }
                      },
                      'childNodes': [
                        {
                          'className': 'WebTextNode',
                          'text': '单选'
                        }
                      ]
                    },
                    {
                      'tagName': 'div',
                      'className': 'RadioGroup',
                      'propObj': {
                        'styleObj': {
                          'height': '100%',
                          'lineHeight': '32px',
                          'paddingLeft': '43px',
                          'paddingRight': '43px',
                          'textAlign': 'center',
                          'backgroundColor': '#FFF',
                          'backgroundImage': 'none',
                          'borderRadius': '4px',
                          'border': '1px solid #DCDFE6',
                          'boxSizing': 'border-box',
                          'color': '#606266',
                          'display': 'inline-block',
                          'fontSize': 'inherit',
                          'outline': '0',
                          'padding': '0 15px',
                          'margin': '0',
                          'transition': 'border-color .2s cubic-bezier(.645,.045,.355,1)',
                          'width': 'calc(100% - 100px)'
                        },
                        'attrObj': {
                          'name': 'radio-group'
                        }
                      },
                      'childNodes': [
                        {
                          'tagName': 'span',
                          'className': 'RadioOption',
                          'propObj': {
                            'styleObj': {},
                            'attrObj': {}
                          },
                          'childNodes': [
                            {
                              'tagName': 'input',
                              'className': 'Input',
                              'propObj': {
                                'styleObj': {},
                                'attrObj': {
                                  'type': 'radio',
                                  'name': '单选0.4520548831312725',
                                  'label': '选项一/1',
                                  'value': 11,
                                  'checked': true
                                }
                              },
                              'childNodes': []
                            },
                            {
                              'className': 'WebTextNode',
                              'text': '选项一/1'
                            }
                          ]
                        },
                        {
                          'tagName': 'span',
                          'className': 'RadioOption',
                          'propObj': {
                            'styleObj': {},
                            'attrObj': {}
                          },
                          'childNodes': [
                            {
                              'tagName': 'input',
                              'className': 'Input',
                              'propObj': {
                                'styleObj': {},
                                'attrObj': {
                                  'type': 'radio',
                                  'name': '单选0.4520548831312725',
                                  'label': '选项一/2',
                                  'value': 12,
                                  'checked': false
                                }
                              },
                              'childNodes': []
                            },
                            {
                              'className': 'WebTextNode',
                              'text': '选项一/2'
                            }
                          ]
                        },
                        {
                          'tagName': 'span',
                          'className': 'RadioOption',
                          'propObj': {
                            'styleObj': {},
                            'attrObj': {}
                          },
                          'childNodes': [
                            {
                              'tagName': 'input',
                              'className': 'Input',
                              'propObj': {
                                'styleObj': {},
                                'attrObj': {
                                  'type': 'radio',
                                  'name': '单选0.4520548831312725',
                                  'label': '选项一/3',
                                  'value': 13,
                                  'checked': false
                                }
                              },
                              'childNodes': []
                            },
                            {
                              'className': 'WebTextNode',
                              'text': '选项一/3'
                            }
                          ]
                        }
                      ]
                    },
                    {
                      'tagName': 'span',
                      'className': 'Span',
                      'propObj': {
                        'styleObj': {
                          'float': 'right',
                          'backgroundColor': '#fff'
                        },
                        'attrObj': {}
                      },
                      'childNodes': [
                        {
                          'tagName': 'svg',
                          'className': 'DeleteSvg',
                          'propObj': {
                            'styleObj': {},
                            'attrObj': {
                              'version': '1.1',
                              'xmlns': 'http://www.w3.org/2000/svg',
                              'width': 20,
                              'height': 20,
                              'viewBox': '0 0 1024 1024'
                            }
                          },
                          'childNodes': [
                            {
                              'tagName': 'path',
                              'className': 'SvgPath',
                              'propObj': {
                                'styleObj': {},
                                'attrObj': {
                                  'd': 'M608 768c-17.696 0-32-14.304-32-32L576 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C640 753.696 625.696 768 608 768z M416 768c-17.696 0-32-14.304-32-32L384 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C448 753.696 433.696 768 416 768z M928 224l-160 0L768 160c0-52.928-42.72-96-95.264-96L352 64C299.072 64 256 107.072 256 160l0 64L96 224C78.304 224 64 238.304 64 256s14.304 32 32 32l832 0c17.696 0 32-14.304 32-32S945.696 224 928 224zM320 160c0-17.632 14.368-32 32-32l320.736 0C690.272 128 704 142.048 704 160l0 64L320 224 320 160z M736.128 960 288.064 960c-52.928 0-96-43.072-96-96L192.064 383.52c0-17.664 14.336-32 32-32s32 14.336 32 32L256.064 864c0 17.664 14.368 32 32 32l448.064 0c17.664 0 32-14.336 32-32L768.128 384.832c0-17.664 14.304-32 32-32s32 14.336 32 32L832.128 864C832.128 916.928 789.056 960 736.128 960z'
                                }
                              },
                              'childNodes': []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              'tagName': 'div',
              'className': 'CheckboxControl',
              'propObj': {
                'styleObj': {
                  'display': 'inline-block',
                  'width': '100%',
                  'padding': '10px',
                  'marginBottom': '10px!important',
                  'border': '1px solid #e2e0e0',
                  'boxSizing': 'border-box',
                  'zIndex': 9
                },
                'attrObj': {
                  'draggable': 'true',
                  'ctrl-id': 2,
                  'default-value': '',
                  'name': 'checkbox-control',
                  'option-config': '{"name":"复选0.3484456203990578","resultValue":1,"options":[{"label":"选项一","value":1,"checked":true,"selected":true,"options":[{"label":"选项一/1","value":11,"checked":true,"selected":true},{"label":"选项一/2","value":12,"checked":false,"selected":false},{"label":"选项一/3","value":13,"checked":false,"selected":false}]},{"label":"选项二","value":2,"checked":false,"selected":false,"options":[{"label":"选项二/1","value":21,"checked":false,"selected":false},{"label":"选项二/2","value":22,"checked":false,"selected":false},{"label":"选项二/3","value":23,"checked":false,"selected":false}]},{"label":"选项三","value":3,"checked":false,"selected":false,"options":[{"label":"选项三/1","value":31,"checked":false,"selected":false},{"label":"选项三/2","value":32,"checked":false,"selected":false},{"label":"选项三/3","value":33,"checked":false,"selected":false}]}]}',
                  'field-name': 'table1.field2'
                }
              },
              'childNodes': [
                {
                  'tagName': 'div',
                  'className': 'CheckboxItem',
                  'propObj': {
                    'styleObj': {
                      'border': '1px solid #1890ff',
                      'background': '#f3f9ff',
                      'padding': '10px',
                      'marginBottom': '10px!important',
                      'fontSize': '14px',
                      'display': 'block'
                    },
                    'attrObj': {}
                  },
                  'childNodes': [
                    {
                      'tagName': 'label',
                      'className': 'Label',
                      'propObj': {
                        'styleObj': {
                          'width': '100px',
                          'lineHeight': '32px',
                          'textAlign': 'right',
                          'verticalAlign': 'middle',
                          'float': 'left',
                          'fontSize': '14px',
                          'color': '#606266',
                          'padding': '0 12px 0 0',
                          'boxSizing': 'border-box'
                        },
                        'attrObj': {
                          'name': 'label'
                        }
                      },
                      'childNodes': [
                        {
                          'className': 'WebTextNode',
                          'text': '复选'
                        }
                      ]
                    },
                    {
                      'tagName': 'div',
                      'className': 'CheckboxGroup',
                      'propObj': {
                        'styleObj': {
                          'height': '100%',
                          'lineHeight': '32px',
                          'paddingLeft': '43px',
                          'paddingRight': '43px',
                          'textAlign': 'center',
                          'backgroundColor': '#FFF',
                          'backgroundImage': 'none',
                          'borderRadius': '4px',
                          'border': '1px solid #DCDFE6',
                          'boxSizing': 'border-box',
                          'color': '#606266',
                          'display': 'inline-block',
                          'fontSize': 'inherit',
                          'outline': '0',
                          'padding': '0 15px',
                          'margin': '0',
                          'transition': 'border-color .2s cubic-bezier(.645,.045,.355,1)',
                          'width': 'calc(100% - 100px)'
                        },
                        'attrObj': {
                          'name': 'checkbox-group'
                        }
                      },
                      'childNodes': [
                        {
                          'tagName': 'span',
                          'className': 'CheckboxOption',
                          'propObj': {
                            'styleObj': {},
                            'attrObj': {}
                          },
                          'childNodes': [
                            {
                              'tagName': 'input',
                              'className': 'Input',
                              'propObj': {
                                'styleObj': {},
                                'attrObj': {
                                  'type': 'checkbox',
                                  'name': '复选0.3484456203990578',
                                  'label': '选项一/1',
                                  'value': 11,
                                  'checked': true
                                }
                              },
                              'childNodes': []
                            },
                            {
                              'className': 'WebTextNode',
                              'text': '选项一/1'
                            }
                          ]
                        },
                        {
                          'tagName': 'span',
                          'className': 'CheckboxOption',
                          'propObj': {
                            'styleObj': {},
                            'attrObj': {}
                          },
                          'childNodes': [
                            {
                              'tagName': 'input',
                              'className': 'Input',
                              'propObj': {
                                'styleObj': {},
                                'attrObj': {
                                  'type': 'checkbox',
                                  'name': '复选0.3484456203990578',
                                  'label': '选项一/2',
                                  'value': 12,
                                  'checked': false
                                }
                              },
                              'childNodes': []
                            },
                            {
                              'className': 'WebTextNode',
                              'text': '选项一/2'
                            }
                          ]
                        },
                        {
                          'tagName': 'span',
                          'className': 'CheckboxOption',
                          'propObj': {
                            'styleObj': {},
                            'attrObj': {}
                          },
                          'childNodes': [
                            {
                              'tagName': 'input',
                              'className': 'Input',
                              'propObj': {
                                'styleObj': {},
                                'attrObj': {
                                  'type': 'checkbox',
                                  'name': '复选0.3484456203990578',
                                  'label': '选项一/3',
                                  'value': 13,
                                  'checked': false
                                }
                              },
                              'childNodes': []
                            },
                            {
                              'className': 'WebTextNode',
                              'text': '选项一/3'
                            }
                          ]
                        }
                      ]
                    },
                    {
                      'tagName': 'span',
                      'className': 'Span',
                      'propObj': {
                        'styleObj': {
                          'float': 'right',
                          'backgroundColor': '#fff'
                        },
                        'attrObj': {}
                      },
                      'childNodes': [
                        {
                          'tagName': 'svg',
                          'className': 'DeleteSvg',
                          'propObj': {
                            'styleObj': {},
                            'attrObj': {
                              'version': '1.1',
                              'xmlns': 'http://www.w3.org/2000/svg',
                              'width': 20,
                              'height': 20,
                              'viewBox': '0 0 1024 1024'
                            }
                          },
                          'childNodes': [
                            {
                              'tagName': 'path',
                              'className': 'SvgPath',
                              'propObj': {
                                'styleObj': {},
                                'attrObj': {
                                  'd': 'M608 768c-17.696 0-32-14.304-32-32L576 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C640 753.696 625.696 768 608 768z M416 768c-17.696 0-32-14.304-32-32L384 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C448 753.696 433.696 768 416 768z M928 224l-160 0L768 160c0-52.928-42.72-96-95.264-96L352 64C299.072 64 256 107.072 256 160l0 64L96 224C78.304 224 64 238.304 64 256s14.304 32 32 32l832 0c17.696 0 32-14.304 32-32S945.696 224 928 224zM320 160c0-17.632 14.368-32 32-32l320.736 0C690.272 128 704 142.048 704 160l0 64L320 224 320 160z M736.128 960 288.064 960c-52.928 0-96-43.072-96-96L192.064 383.52c0-17.664 14.336-32 32-32s32 14.336 32 32L256.064 864c0 17.664 14.368 32 32 32l448.064 0c17.664 0 32-14.336 32-32L768.128 384.832c0-17.664 14.304-32 32-32s32 14.336 32 32L832.128 864C832.128 916.928 789.056 960 736.128 960z'
                                }
                              },
                              'childNodes': []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              'tagName': 'div',
              'className': 'SelectControl',
              'propObj': {
                'styleObj': {
                  'display': 'inline-block',
                  'width': '100%',
                  'padding': '10px',
                  'marginBottom': '10px!important',
                  'border': '1px solid #e2e0e0',
                  'boxSizing': 'border-box',
                  'zIndex': 9
                },
                'attrObj': {
                  'draggable': 'true',
                  'ctrl-id': 3,
                  'default-value': '',
                  'name': 'select-control',
                  'option-config': '{"name":"下拉选择0.369625384027505","resultValue":1,"options":[{"label":"选项一","value":1,"checked":true,"selected":true,"options":[{"label":"选项一/1","value":11,"checked":true,"selected":true},{"label":"选项一/2","value":12,"checked":false,"selected":false},{"label":"选项一/3","value":13,"checked":false,"selected":false}]},{"label":"选项二","value":2,"checked":false,"selected":false,"options":[{"label":"选项二/1","value":21,"checked":false,"selected":false},{"label":"选项二/2","value":22,"checked":false,"selected":false},{"label":"选项二/3","value":23,"checked":false,"selected":false}]},{"label":"选项三","value":3,"checked":false,"selected":false,"options":[{"label":"选项三/1","value":31,"checked":false,"selected":false},{"label":"选项三/2","value":32,"checked":false,"selected":false},{"label":"选项三/3","value":33,"checked":false,"selected":false}]}]}',
                  'field-name': 'table1.field3'
                }
              },
              'childNodes': [
                {
                  'tagName': 'div',
                  'className': 'SelectItem',
                  'propObj': {
                    'styleObj': {
                      'border': '1px solid #1890ff',
                      'background': '#f3f9ff',
                      'padding': '10px',
                      'marginBottom': '10px!important',
                      'fontSize': '14px',
                      'display': 'block'
                    },
                    'attrObj': {}
                  },
                  'childNodes': [
                    {
                      'tagName': 'label',
                      'className': 'Label',
                      'propObj': {
                        'styleObj': {
                          'width': '100px',
                          'lineHeight': '32px',
                          'textAlign': 'right',
                          'verticalAlign': 'middle',
                          'float': 'left',
                          'fontSize': '14px',
                          'color': '#606266',
                          'padding': '0 12px 0 0',
                          'boxSizing': 'border-box'
                        },
                        'attrObj': {
                          'name': 'label'
                        }
                      },
                      'childNodes': [
                        {
                          'className': 'WebTextNode',
                          'text': '下拉选择框'
                        }
                      ]
                    },
                    {
                      'tagName': 'select',
                      'className': 'Select',
                      'propObj': {
                        'styleObj': {
                          'height': '32px',
                          'lineHeight': '32px',
                          'paddingLeft': '43px',
                          'paddingRight': '43px',
                          'textAlign': 'center',
                          'backgroundColor': '#FFF',
                          'backgroundImage': 'none',
                          'borderRadius': '4px',
                          'border': '1px solid #DCDFE6',
                          'boxSizing': 'border-box',
                          'color': '#606266',
                          'display': 'inline-block',
                          'fontSize': 'inherit',
                          'outline': '0',
                          'padding': '0 15px',
                          'margin': '0',
                          'transition': 'border-color .2s cubic-bezier(.645,.045,.355,1)',
                          'width': 'calc(100% - 100px)'
                        },
                        'attrObj': {
                          'name': 'select'
                        }
                      },
                      'childNodes': [
                        {
                          'tagName': 'option',
                          'className': 'WebOption',
                          'propObj': {
                            'styleObj': {},
                            'attrObj': {
                              'name': 'option',
                              'label': '请选择',
                              'value': 0,
                              'selected': true
                            }
                          },
                          'childNodes': [
                            {
                              'className': 'WebTextNode',
                              'text': '请选择'
                            }
                          ]
                        },
                        {
                          'tagName': 'option',
                          'className': 'WebOption',
                          'propObj': {
                            'styleObj': {},
                            'attrObj': {
                              'name': 'option',
                              'label': '选项一/1',
                              'value': 11
                            }
                          },
                          'childNodes': [
                            {
                              'className': 'WebTextNode',
                              'text': '选项一/1'
                            }
                          ]
                        },
                        {
                          'tagName': 'option',
                          'className': 'WebOption',
                          'propObj': {
                            'styleObj': {},
                            'attrObj': {
                              'name': 'option',
                              'label': '选项一/2',
                              'value': 12
                            }
                          },
                          'childNodes': [
                            {
                              'className': 'WebTextNode',
                              'text': '选项一/2'
                            }
                          ]
                        },
                        {
                          'tagName': 'option',
                          'className': 'WebOption',
                          'propObj': {
                            'styleObj': {},
                            'attrObj': {
                              'name': 'option',
                              'label': '选项一/3',
                              'value': 13
                            }
                          },
                          'childNodes': [
                            {
                              'className': 'WebTextNode',
                              'text': '选项一/3'
                            }
                          ]
                        }
                      ]
                    },
                    {
                      'tagName': 'span',
                      'className': 'Span',
                      'propObj': {
                        'styleObj': {
                          'float': 'right',
                          'backgroundColor': '#fff'
                        },
                        'attrObj': {}
                      },
                      'childNodes': [
                        {
                          'tagName': 'svg',
                          'className': 'DeleteSvg',
                          'propObj': {
                            'styleObj': {},
                            'attrObj': {
                              'version': '1.1',
                              'xmlns': 'http://www.w3.org/2000/svg',
                              'width': 20,
                              'height': 20,
                              'viewBox': '0 0 1024 1024'
                            }
                          },
                          'childNodes': [
                            {
                              'tagName': 'path',
                              'className': 'SvgPath',
                              'propObj': {
                                'styleObj': {},
                                'attrObj': {
                                  'd': 'M608 768c-17.696 0-32-14.304-32-32L576 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C640 753.696 625.696 768 608 768z M416 768c-17.696 0-32-14.304-32-32L384 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C448 753.696 433.696 768 416 768z M928 224l-160 0L768 160c0-52.928-42.72-96-95.264-96L352 64C299.072 64 256 107.072 256 160l0 64L96 224C78.304 224 64 238.304 64 256s14.304 32 32 32l832 0c17.696 0 32-14.304 32-32S945.696 224 928 224zM320 160c0-17.632 14.368-32 32-32l320.736 0C690.272 128 704 142.048 704 160l0 64L320 224 320 160z M736.128 960 288.064 960c-52.928 0-96-43.072-96-96L192.064 383.52c0-17.664 14.336-32 32-32s32 14.336 32 32L256.064 864c0 17.664 14.368 32 32 32l448.064 0c17.664 0 32-14.336 32-32L768.128 384.832c0-17.664 14.304-32 32-32s32 14.336 32 32L832.128 864C832.128 916.928 789.056 960 736.128 960z'
                                }
                              },
                              'childNodes': []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              'tagName': 'div',
              'className': 'AttachmentControl',
              'propObj': {
                'styleObj': {
                  'display': 'inline-block',
                  'width': '100%',
                  'padding': '10px',
                  'marginBottom': '10px!important',
                  'border': '1px solid #e2e0e0',
                  'boxSizing': 'border-box',
                  'zIndex': 9
                },
                'attrObj': {
                  'draggable': 'true',
                  'ctrl-id': 4,
                  'default-value': '',
                  'name': 'attachment-control',
                  'field-name': 'table2.field1'
                }
              },
              'childNodes': [
                {
                  'tagName': 'div',
                  'className': 'InputItem',
                  'propObj': {
                    'styleObj': {
                      'border': '1px solid #1890ff',
                      'background': '#f3f9ff',
                      'padding': '10px',
                      'marginBottom': '10px!important',
                      'fontSize': '14px',
                      'display': 'block'
                    },
                    'attrObj': {}
                  },
                  'childNodes': [
                    {
                      'tagName': 'label',
                      'className': 'Label',
                      'propObj': {
                        'styleObj': {
                          'width': '100px',
                          'lineHeight': '32px',
                          'textAlign': 'right',
                          'verticalAlign': 'middle',
                          'float': 'left',
                          'fontSize': '14px',
                          'color': '#606266',
                          'padding': '0 12px 0 0',
                          'boxSizing': 'border-box'
                        },
                        'attrObj': {
                          'name': 'label'
                        }
                      },
                      'childNodes': [
                        {
                          'className': 'WebTextNode',
                          'text': '附件'
                        }
                      ]
                    },
                    {
                      'tagName': 'input',
                      'className': 'Input',
                      'propObj': {
                        'styleObj': {
                          'height': '32px',
                          'lineHeight': '32px',
                          'paddingLeft': '43px',
                          'paddingRight': '43px',
                          'textAlign': 'center',
                          'backgroundColor': '#FFF',
                          'backgroundImage': 'none',
                          'borderRadius': '4px',
                          'border': '1px solid #DCDFE6',
                          'boxSizing': 'border-box',
                          'color': '#606266',
                          'display': 'inline-block',
                          'fontSize': 'inherit',
                          'outline': '0',
                          'padding': '0 15px',
                          'margin': '0',
                          'transition': 'border-color .2s cubic-bezier(.645,.045,.355,1)',
                          'width': 'calc(100% - 100px)'
                        },
                        'attrObj': {
                          'type': 'file',
                          'placeholder': '请选择附件'
                        }
                      },
                      'childNodes': []
                    },
                    {
                      'tagName': 'span',
                      'className': 'Span',
                      'propObj': {
                        'styleObj': {
                          'float': 'right',
                          'backgroundColor': '#fff'
                        },
                        'attrObj': {}
                      },
                      'childNodes': [
                        {
                          'tagName': 'svg',
                          'className': 'DeleteSvg',
                          'propObj': {
                            'styleObj': {},
                            'attrObj': {
                              'version': '1.1',
                              'xmlns': 'http://www.w3.org/2000/svg',
                              'width': 20,
                              'height': 20,
                              'viewBox': '0 0 1024 1024'
                            }
                          },
                          'childNodes': [
                            {
                              'tagName': 'path',
                              'className': 'SvgPath',
                              'propObj': {
                                'styleObj': {},
                                'attrObj': {
                                  'd': 'M608 768c-17.696 0-32-14.304-32-32L576 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C640 753.696 625.696 768 608 768z M416 768c-17.696 0-32-14.304-32-32L384 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C448 753.696 433.696 768 416 768z M928 224l-160 0L768 160c0-52.928-42.72-96-95.264-96L352 64C299.072 64 256 107.072 256 160l0 64L96 224C78.304 224 64 238.304 64 256s14.304 32 32 32l832 0c17.696 0 32-14.304 32-32S945.696 224 928 224zM320 160c0-17.632 14.368-32 32-32l320.736 0C690.272 128 704 142.048 704 160l0 64L320 224 320 160z M736.128 960 288.064 960c-52.928 0-96-43.072-96-96L192.064 383.52c0-17.664 14.336-32 32-32s32 14.336 32 32L256.064 864c0 17.664 14.368 32 32 32l448.064 0c17.664 0 32-14.336 32-32L768.128 384.832c0-17.664 14.304-32 32-32s32 14.336 32 32L832.128 864C832.128 916.928 789.056 960 736.128 960z'
                                }
                              },
                              'childNodes': []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          'tagName': 'div',
          'className': 'WebPage',
          'propObj': {
            'styleObj': {
              'position': 'relative',
              'fontFamily': '宋体',
              'fontSize': '3.5mm',
              'boxShadow': '0px 0px 20px #000',
              'boxSizing': 'border-box',
              'margin': '5mm',
              'minHeight': '300px',
              'maxHeight': 'calc(600px - 60px - 10mm)',
              'overflowY': 'auto',
              'backgroundColor': '#fff',
              'backgroundImage': '',
              'display': 'none'
            },
            'attrObj': {
              'landscape': false,
              'pageIndex': 2,
              'name': 'web-page'
            }
          },
          'childNodes': [
            {
              'tagName': 'div',
              'className': 'ConnectionControl',
              'propObj': {
                'styleObj': {
                  'display': 'inline-block',
                  'width': '100%',
                  'padding': '10px',
                  'marginBottom': '10px!important',
                  'border': '1px solid #e2e0e0',
                  'boxSizing': 'border-box',
                  'zIndex': 9
                },
                'attrObj': {
                  'draggable': 'true',
                  'ctrl-id': 5,
                  'default-value': '',
                  'name': 'button-control',
                  'field-name': 'table3.field3'
                }
              },
              'childNodes': [
                {
                  'tagName': 'div',
                  'className': 'ButtonItem',
                  'propObj': {
                    'styleObj': {
                      'border': '1px solid #1890ff',
                      'background': '#f3f9ff',
                      'padding': '10px',
                      'marginBottom': '10px!important',
                      'fontSize': '14px',
                      'display': 'block'
                    },
                    'attrObj': {
                      'name': 'button-item'
                    }
                  },
                  'childNodes': [
                    {
                      'tagName': 'label',
                      'className': 'Label',
                      'propObj': {
                        'styleObj': {
                          'width': '100px',
                          'lineHeight': '32px',
                          'textAlign': 'right',
                          'verticalAlign': 'middle',
                          'float': 'left',
                          'fontSize': '14px',
                          'color': '#606266',
                          'padding': '0 12px 0 0',
                          'boxSizing': 'border-box'
                        },
                        'attrObj': {
                          'name': 'label'
                        }
                      },
                      'childNodes': [
                        {
                          'className': 'WebTextNode',
                          'text': '关联选项'
                        }
                      ]
                    },
                    {
                      'tagName': 'input',
                      'className': 'Input',
                      'propObj': {
                        'styleObj': {
                          'height': '32px',
                          'lineHeight': '32px',
                          'paddingLeft': '43px',
                          'paddingRight': '43px',
                          'textAlign': 'center',
                          'backgroundColor': '#FFF',
                          'backgroundImage': 'none',
                          'borderRadius': '4px',
                          'border': '1px solid #DCDFE6',
                          'boxSizing': 'border-box',
                          'color': '#606266',
                          'display': 'inline-block',
                          'fontSize': 'inherit',
                          'outline': '0',
                          'padding': '0 15px',
                          'margin': '0',
                          'transition': 'border-color .2s cubic-bezier(.645,.045,.355,1)',
                          'width': 'calc(100% - 100px)'
                        },
                        'attrObj': {
                          'name': 'button-item-content',
                          'type': 'button',
                          'value': '选择'
                        }
                      },
                      'childNodes': []
                    },
                    {
                      'tagName': 'span',
                      'className': 'Span',
                      'propObj': {
                        'styleObj': {
                          'float': 'right',
                          'backgroundColor': '#fff'
                        },
                        'attrObj': {}
                      },
                      'childNodes': [
                        {
                          'tagName': 'svg',
                          'className': 'DeleteSvg',
                          'propObj': {
                            'styleObj': {},
                            'attrObj': {
                              'version': '1.1',
                              'xmlns': 'http://www.w3.org/2000/svg',
                              'width': 20,
                              'height': 20,
                              'viewBox': '0 0 1024 1024'
                            }
                          },
                          'childNodes': [
                            {
                              'tagName': 'path',
                              'className': 'SvgPath',
                              'propObj': {
                                'styleObj': {},
                                'attrObj': {
                                  'd': 'M608 768c-17.696 0-32-14.304-32-32L576 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C640 753.696 625.696 768 608 768z M416 768c-17.696 0-32-14.304-32-32L384 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C448 753.696 433.696 768 416 768z M928 224l-160 0L768 160c0-52.928-42.72-96-95.264-96L352 64C299.072 64 256 107.072 256 160l0 64L96 224C78.304 224 64 238.304 64 256s14.304 32 32 32l832 0c17.696 0 32-14.304 32-32S945.696 224 928 224zM320 160c0-17.632 14.368-32 32-32l320.736 0C690.272 128 704 142.048 704 160l0 64L320 224 320 160z M736.128 960 288.064 960c-52.928 0-96-43.072-96-96L192.064 383.52c0-17.664 14.336-32 32-32s32 14.336 32 32L256.064 864c0 17.664 14.368 32 32 32l448.064 0c17.664 0 32-14.336 32-32L768.128 384.832c0-17.664 14.304-32 32-32s32 14.336 32 32L832.128 864C832.128 916.928 789.056 960 736.128 960z'
                                }
                              },
                              'childNodes': []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
export const testData1: IFormData = {
  'table': [],
  'table1.field1': '12',
  'table1.field2': '11,12',
  'table1.field3': '12',
  'table2.field1': '',
  'table3.field3': '选择1'
};

// 选项控件的选项配置数据
export const optionsConfig: IOptionConfig = {
  name: 'config',
  resultValue: 'opt1.opt11',
  options: [
    {
      label: 'option1',
      value: 'opt1',
      options: [
        {
          label: 'option11',
          value: 'opt1.opt11',
        },
        {
          label: 'option12',
          value: 'opt1.opt12',
        },
        {
          label: 'option13',
          value: 'opt1.opt13',
        },
      ]
    },
    {
      label: 'option2',
      value: 'opt2',
      options: [
        {
          label: 'option21',
          value: 'opt2.opt21',
        },
        {
          label: 'option22',
          value: 'opt2.opt22',
        },
        {
          label: 'option23',
          value: 'opt2.opt23',
        },
      ]
    }
  ]
};

export const fieldsConfig: IOptionConfig = {
  name: 'fields-config',
  resultValue: 'tbl1.fld11',
  options: [
    {
      label: 'tbl1',
      value: 'tbl1',
      options: [
        {
          label: 'tbl1.field11',
          value: 'tbl1.fld11',
        },
        {
          label: 'tbl1.field12',
          value: 'tbl1.fld12',
        },
        {
          label: 'tbl1.field13',
          value: 'tbl1.fld13',
        },
      ]
    },
    {
      label: 'tbl2',
      value: 'tbl2',
      options: [
        {
          label: 'tbl2.field21',
          value: 'tbl2.fld21',
        },
        {
          label: 'tbl2.field22',
          value: 'tbl2.fld22',
        },
        {
          label: 'tbl2.field23',
          value: 'tbl2.fld23',
        },
      ]
    }
  ]
};

export const taskJson: IWebDocument = {
  'tagName': 'div',
  'className': 'WebDocument',
  'propObj': {
    'styleObj': {},
    'attrObj': {
      'name': 'document-content',
      'field-config': '{"name":"fields-config","resultValue":0,"options":[{"label":"tbl1","value":"tbl1","options":[{"label":"tbl1.field11","value":"tbl1.fld11"},{"label":"tbl1.field12","value":"tbl1.fld12"},{"label":"tbl1.field13","value":"tbl1.fld13"}]},{"label":"tbl2","value":"tbl2","options":[{"label":"tbl2.field21","value":"tbl2.fld21"},{"label":"tbl2.field22","value":"tbl2.fld22"},{"label":"tbl2.field23","value":"tbl2.fld23"}]}]}'
    }
  },
  'childNodes': [
    {
      'tagName': 'ul',
      'className': 'WebDocumentTabs',
      'propObj': {
        'styleObj': {
          'display': 'none',
          'listStyle': 'none',
          'backgroundColor': '#f0f0f0',
          'padding': '0 5px',
          'marginTop': '-35px',
          'width': '599px'
        },
        'attrObj': {
          'name': 'document-tabs'
        }
      },
      'childNodes': [
        {
          'tagName': 'li',
          'className': 'ListItem',
          'propObj': {
            'styleObj': {
              'width': '150px',
              'textAlign': 'center',
              'padding': '6px 14px',
              'borderRadius': '4px 4px 0px 0px',
              'borderBottom': 'none',
              'boxSizing': 'border-box',
              'borderTop': '1px solid #d2d2d2',
              'borderLeft': '1px solid #d2d2d2',
              'borderRight': '1px solid #d2d2d2',
              'overflowWrap': 'break-word',
              'overflow': 'hidden',
              'fontSize': '14px',
              'paddingTop': '10px'
            },
            'attrObj': {
              'name': 'list-item'
            }
          },
          'childNodes': [
            {
              'className': 'WebTextNode',
              'text': '首页'
            }
          ]
        }
      ]
    },
    {
      'tagName': 'div',
      'className': 'WebDocumentContents',
      'propObj': {
        'styleObj': {},
        'attrObj': {
          'name': 'document-contents'
        }
      },
      'childNodes': [
        {
          'tagName': 'div',
          'className': 'WebPage',
          'propObj': {
            'styleObj': {
              'position': 'relative',
              'fontFamily': '宋体',
              'fontSize': '3.5mm',
              'boxShadow': '0px 0px 20px #000',
              'boxSizing': 'border-box',
              'margin': '5mm',
              'minHeight': '300px',
              'maxHeight': 'calc(600px - 60px - 10mm)',
              'overflowY': 'auto',
              'backgroundColor': '#fff',
              'backgroundImage': ''
            },
            'attrObj': {
              'landscape': false,
              'pageIndex': 1,
              'name': 'web-page'
            }
          },
          'childNodes': [
            {
              'tagName': 'div',
              'className': 'RadioControl',
              'propObj': {
                'styleObj': {
                  'display': 'inline-block',
                  'width': '100%',
                  'padding': '10px',
                  'marginBottom': '10px!important',
                  'border': '1px solid #e2e0e0',
                  'boxSizing': 'border-box',
                  'zIndex': 9
                },
                'attrObj': {
                  'draggable': 'true',
                  'ctrl-id': 2,
                  'default-value': '',
                  'name': 'radio-control',
                  'option-config': '{"name":"option-config","resultValue":1,"options":[{"label":"选项一","value":1,"checked":true,"selected":true,"options":[{"label":"选项一/1","value":11,"checked":true,"selected":true},{"label":"选项一/2","value":12,"checked":false,"selected":false},{"label":"选项一/3","value":13,"checked":false,"selected":false}]},{"label":"选项二","value":2,"checked":false,"selected":false,"options":[{"label":"选项二/1","value":21,"checked":false,"selected":false},{"label":"选项二/2","value":22,"checked":false,"selected":false},{"label":"选项二/3","value":23,"checked":false,"selected":false}]},{"label":"选项三","value":3,"checked":false,"selected":false,"options":[{"label":"选项三/1","value":31,"checked":false,"selected":false},{"label":"选项三/2","value":32,"checked":false,"selected":false},{"label":"选项三/3","value":33,"checked":false,"selected":false}]}]}'
                }
              },
              'childNodes': [
                {
                  'tagName': 'div',
                  'className': 'RadioItem',
                  'propObj': {
                    'styleObj': {
                      'border': '1px solid #1890ff',
                      'background': '#f3f9ff',
                      'padding': '10px',
                      'marginBottom': '10px!important',
                      'fontSize': '14px',
                      'display': 'block'
                    },
                    'attrObj': {}
                  },
                  'childNodes': [
                    {
                      'tagName': 'label',
                      'className': 'Label',
                      'propObj': {
                        'styleObj': {
                          'width': '100px',
                          'lineHeight': '32px',
                          'textAlign': 'right',
                          'verticalAlign': 'middle',
                          'float': 'left',
                          'fontSize': '14px',
                          'color': '#606266',
                          'padding': '0 12px 0 0',
                          'boxSizing': 'border-box'
                        },
                        'attrObj': {
                          'name': 'label'
                        }
                      },
                      'childNodes': [
                        {
                          'className': 'WebTextNode',
                          'text': '任务类型'
                        }
                      ]
                    },
                    {
                      'tagName': 'div',
                      'className': 'RadioGroup',
                      'propObj': {
                        'styleObj': {
                          'height': '100%',
                          'lineHeight': '32px',
                          'paddingLeft': '43px',
                          'paddingRight': '43px',
                          'textAlign': 'center',
                          'backgroundColor': '#FFF',
                          'backgroundImage': 'none',
                          'borderRadius': '4px',
                          'border': '1px solid #DCDFE6',
                          'boxSizing': 'border-box',
                          'color': '#606266',
                          'display': 'inline-block',
                          'fontSize': 'inherit',
                          'outline': '0',
                          'padding': '0 15px',
                          'margin': '0',
                          'transition': 'border-color .2s cubic-bezier(.645,.045,.355,1)',
                          'width': 'calc(100% - 100px)'
                        },
                        'attrObj': {
                          'name': 'radio-group'
                        }
                      },
                      'childNodes': [
                        {
                          'tagName': 'span',
                          'className': 'RadioOption',
                          'propObj': {
                            'styleObj': {
                              'padding': '0 5px'
                            },
                            'attrObj': {}
                          },
                          'childNodes': [
                            {
                              'tagName': 'input',
                              'className': 'Input',
                              'propObj': {
                                'styleObj': {},
                                'attrObj': {
                                  'type': 'radio',
                                  'name': 'radio0.9911653444698953',
                                  'label': '选项一/1',
                                  'value': 11,
                                  'checked': true
                                }
                              },
                              'childNodes': []
                            },
                            {
                              'className': 'WebTextNode',
                              'text': '选项一/1'
                            }
                          ]
                        },
                        {
                          'tagName': 'span',
                          'className': 'RadioOption',
                          'propObj': {
                            'styleObj': {
                              'padding': '0 5px'
                            },
                            'attrObj': {}
                          },
                          'childNodes': [
                            {
                              'tagName': 'input',
                              'className': 'Input',
                              'propObj': {
                                'styleObj': {},
                                'attrObj': {
                                  'type': 'radio',
                                  'name': 'radio0.9911653444698953',
                                  'label': '选项一/2',
                                  'value': 12,
                                  'checked': false
                                }
                              },
                              'childNodes': []
                            },
                            {
                              'className': 'WebTextNode',
                              'text': '选项一/2'
                            }
                          ]
                        },
                        {
                          'tagName': 'span',
                          'className': 'RadioOption',
                          'propObj': {
                            'styleObj': {
                              'padding': '0 5px'
                            },
                            'attrObj': {}
                          },
                          'childNodes': [
                            {
                              'tagName': 'input',
                              'className': 'Input',
                              'propObj': {
                                'styleObj': {},
                                'attrObj': {
                                  'type': 'radio',
                                  'name': 'radio0.9911653444698953',
                                  'label': '选项一/3',
                                  'value': 13,
                                  'checked': false
                                }
                              },
                              'childNodes': []
                            },
                            {
                              'className': 'WebTextNode',
                              'text': '选项一/3'
                            }
                          ]
                        }
                      ]
                    },
                    {
                      'tagName': 'span',
                      'className': 'Span',
                      'propObj': {
                        'styleObj': {
                          'float': 'right',
                          'backgroundColor': '#fff'
                        },
                        'attrObj': {}
                      },
                      'childNodes': [
                        {
                          'tagName': 'svg',
                          'className': 'DeleteSvg',
                          'propObj': {
                            'styleObj': {},
                            'attrObj': {
                              'version': '1.1',
                              'xmlns': 'http://www.w3.org/2000/svg',
                              'width': 20,
                              'height': 20,
                              'viewBox': '0 0 1024 1024'
                            }
                          },
                          'childNodes': [
                            {
                              'tagName': 'path',
                              'className': 'SvgPath',
                              'propObj': {
                                'styleObj': {},
                                'attrObj': {
                                  'd': 'M608 768c-17.696 0-32-14.304-32-32L576 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C640 753.696 625.696 768 608 768z M416 768c-17.696 0-32-14.304-32-32L384 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C448 753.696 433.696 768 416 768z M928 224l-160 0L768 160c0-52.928-42.72-96-95.264-96L352 64C299.072 64 256 107.072 256 160l0 64L96 224C78.304 224 64 238.304 64 256s14.304 32 32 32l832 0c17.696 0 32-14.304 32-32S945.696 224 928 224zM320 160c0-17.632 14.368-32 32-32l320.736 0C690.272 128 704 142.048 704 160l0 64L320 224 320 160z M736.128 960 288.064 960c-52.928 0-96-43.072-96-96L192.064 383.52c0-17.664 14.336-32 32-32s32 14.336 32 32L256.064 864c0 17.664 14.368 32 32 32l448.064 0c17.664 0 32-14.336 32-32L768.128 384.832c0-17.664 14.304-32 32-32s32 14.336 32 32L832.128 864C832.128 916.928 789.056 960 736.128 960z'
                                }
                              },
                              'childNodes': []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              'tagName': 'div',
              'className': 'SingleInputControl',
              'propObj': {
                'styleObj': {
                  'display': 'inline-block',
                  'width': '100%',
                  'padding': '10px',
                  'marginBottom': '10px!important',
                  'border': '1px solid #e2e0e0',
                  'boxSizing': 'border-box',
                  'zIndex': 9
                },
                'attrObj': {
                  'draggable': 'true',
                  'ctrl-id': 3,
                  'default-value': '',
                  'name': 'single-input-control'
                }
              },
              'childNodes': [
                {
                  'tagName': 'div',
                  'className': 'InputItem',
                  'propObj': {
                    'styleObj': {
                      'border': '1px solid #1890ff',
                      'background': '#f3f9ff',
                      'padding': '10px',
                      'marginBottom': '10px!important',
                      'fontSize': '14px',
                      'display': 'block'
                    },
                    'attrObj': {}
                  },
                  'childNodes': [
                    {
                      'tagName': 'label',
                      'className': 'Label',
                      'propObj': {
                        'styleObj': {
                          'width': '100px',
                          'lineHeight': '32px',
                          'textAlign': 'right',
                          'verticalAlign': 'middle',
                          'float': 'left',
                          'fontSize': '14px',
                          'color': '#606266',
                          'padding': '0 12px 0 0',
                          'boxSizing': 'border-box'
                        },
                        'attrObj': {
                          'name': 'label'
                        }
                      },
                      'childNodes': [
                        {
                          'className': 'WebTextNode',
                          'text': '任务名称'
                        }
                      ]
                    },
                    {
                      'tagName': 'input',
                      'className': 'Input',
                      'propObj': {
                        'styleObj': {
                          'height': '32px',
                          'lineHeight': '32px',
                          'paddingLeft': '43px',
                          'paddingRight': '43px',
                          'textAlign': 'center',
                          'backgroundColor': '#FFF',
                          'backgroundImage': 'none',
                          'borderRadius': '4px',
                          'border': '1px solid #DCDFE6',
                          'boxSizing': 'border-box',
                          'color': '#606266',
                          'display': 'inline-block',
                          'fontSize': 'inherit',
                          'outline': '0',
                          'padding': '0 15px',
                          'margin': '0',
                          'transition': 'border-color .2s cubic-bezier(.645,.045,.355,1)',
                          'width': 'calc(100% - 100px)'
                        },
                        'attrObj': {
                          'type': 'text',
                          'placeholder': '请输入'
                        }
                      },
                      'childNodes': []
                    },
                    {
                      'tagName': 'span',
                      'className': 'Span',
                      'propObj': {
                        'styleObj': {
                          'float': 'right',
                          'backgroundColor': '#fff'
                        },
                        'attrObj': {}
                      },
                      'childNodes': [
                        {
                          'tagName': 'svg',
                          'className': 'DeleteSvg',
                          'propObj': {
                            'styleObj': {},
                            'attrObj': {
                              'version': '1.1',
                              'xmlns': 'http://www.w3.org/2000/svg',
                              'width': 20,
                              'height': 20,
                              'viewBox': '0 0 1024 1024'
                            }
                          },
                          'childNodes': [
                            {
                              'tagName': 'path',
                              'className': 'SvgPath',
                              'propObj': {
                                'styleObj': {},
                                'attrObj': {
                                  'd': 'M608 768c-17.696 0-32-14.304-32-32L576 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C640 753.696 625.696 768 608 768z M416 768c-17.696 0-32-14.304-32-32L384 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C448 753.696 433.696 768 416 768z M928 224l-160 0L768 160c0-52.928-42.72-96-95.264-96L352 64C299.072 64 256 107.072 256 160l0 64L96 224C78.304 224 64 238.304 64 256s14.304 32 32 32l832 0c17.696 0 32-14.304 32-32S945.696 224 928 224zM320 160c0-17.632 14.368-32 32-32l320.736 0C690.272 128 704 142.048 704 160l0 64L320 224 320 160z M736.128 960 288.064 960c-52.928 0-96-43.072-96-96L192.064 383.52c0-17.664 14.336-32 32-32s32 14.336 32 32L256.064 864c0 17.664 14.368 32 32 32l448.064 0c17.664 0 32-14.336 32-32L768.128 384.832c0-17.664 14.304-32 32-32s32 14.336 32 32L832.128 864C832.128 916.928 789.056 960 736.128 960z'
                                }
                              },
                              'childNodes': []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              'tagName': 'div',
              'className': 'SingleInputControl',
              'propObj': {
                'styleObj': {
                  'display': 'inline-block',
                  'width': '100%',
                  'padding': '10px',
                  'marginBottom': '10px!important',
                  'border': '1px solid #e2e0e0',
                  'boxSizing': 'border-box',
                  'zIndex': 9
                },
                'attrObj': {
                  'draggable': 'true',
                  'ctrl-id': 4,
                  'default-value': '',
                  'name': 'single-input-control'
                }
              },
              'childNodes': [
                {
                  'tagName': 'div',
                  'className': 'InputItem',
                  'propObj': {
                    'styleObj': {
                      'border': '1px solid #1890ff',
                      'background': '#f3f9ff',
                      'padding': '10px',
                      'marginBottom': '10px!important',
                      'fontSize': '14px',
                      'display': 'block'
                    },
                    'attrObj': {}
                  },
                  'childNodes': [
                    {
                      'tagName': 'label',
                      'className': 'Label',
                      'propObj': {
                        'styleObj': {
                          'width': '100px',
                          'lineHeight': '32px',
                          'textAlign': 'right',
                          'verticalAlign': 'middle',
                          'float': 'left',
                          'fontSize': '14px',
                          'color': '#606266',
                          'padding': '0 12px 0 0',
                          'boxSizing': 'border-box'
                        },
                        'attrObj': {
                          'name': 'label'
                        }
                      },
                      'childNodes': [
                        {
                          'className': 'WebTextNode',
                          'text': '任务编号'
                        }
                      ]
                    },
                    {
                      'tagName': 'input',
                      'className': 'Input',
                      'propObj': {
                        'styleObj': {
                          'height': '32px',
                          'lineHeight': '32px',
                          'paddingLeft': '43px',
                          'paddingRight': '43px',
                          'textAlign': 'center',
                          'backgroundColor': '#FFF',
                          'backgroundImage': 'none',
                          'borderRadius': '4px',
                          'border': '1px solid #DCDFE6',
                          'boxSizing': 'border-box',
                          'color': '#606266',
                          'display': 'inline-block',
                          'fontSize': 'inherit',
                          'outline': '0',
                          'padding': '0 15px',
                          'margin': '0',
                          'transition': 'border-color .2s cubic-bezier(.645,.045,.355,1)',
                          'width': 'calc(100% - 100px)'
                        },
                        'attrObj': {
                          'type': 'text',
                          'placeholder': '请输入'
                        }
                      },
                      'childNodes': []
                    },
                    {
                      'tagName': 'span',
                      'className': 'Span',
                      'propObj': {
                        'styleObj': {
                          'float': 'right',
                          'backgroundColor': '#fff'
                        },
                        'attrObj': {}
                      },
                      'childNodes': [
                        {
                          'tagName': 'svg',
                          'className': 'DeleteSvg',
                          'propObj': {
                            'styleObj': {},
                            'attrObj': {
                              'version': '1.1',
                              'xmlns': 'http://www.w3.org/2000/svg',
                              'width': 20,
                              'height': 20,
                              'viewBox': '0 0 1024 1024'
                            }
                          },
                          'childNodes': [
                            {
                              'tagName': 'path',
                              'className': 'SvgPath',
                              'propObj': {
                                'styleObj': {},
                                'attrObj': {
                                  'd': 'M608 768c-17.696 0-32-14.304-32-32L576 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C640 753.696 625.696 768 608 768z M416 768c-17.696 0-32-14.304-32-32L384 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C448 753.696 433.696 768 416 768z M928 224l-160 0L768 160c0-52.928-42.72-96-95.264-96L352 64C299.072 64 256 107.072 256 160l0 64L96 224C78.304 224 64 238.304 64 256s14.304 32 32 32l832 0c17.696 0 32-14.304 32-32S945.696 224 928 224zM320 160c0-17.632 14.368-32 32-32l320.736 0C690.272 128 704 142.048 704 160l0 64L320 224 320 160z M736.128 960 288.064 960c-52.928 0-96-43.072-96-96L192.064 383.52c0-17.664 14.336-32 32-32s32 14.336 32 32L256.064 864c0 17.664 14.368 32 32 32l448.064 0c17.664 0 32-14.336 32-32L768.128 384.832c0-17.664 14.304-32 32-32s32 14.336 32 32L832.128 864C832.128 916.928 789.056 960 736.128 960z'
                                }
                              },
                              'childNodes': []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              'tagName': 'div',
              'className': 'RadioControl',
              'propObj': {
                'styleObj': {
                  'display': 'inline-block',
                  'width': '100%',
                  'padding': '10px',
                  'marginBottom': '10px!important',
                  'border': '1px solid #e2e0e0',
                  'boxSizing': 'border-box',
                  'zIndex': 9
                },
                'attrObj': {
                  'draggable': 'true',
                  'ctrl-id': 5,
                  'default-value': '',
                  'name': 'radio-control',
                  'option-config': '{"name":"option-config","resultValue":1,"options":[{"label":"选项一","value":1,"checked":true,"selected":true,"options":[{"label":"选项一/1","value":11,"checked":true,"selected":true},{"label":"选项一/2","value":12,"checked":false,"selected":false},{"label":"选项一/3","value":13,"checked":false,"selected":false}]},{"label":"选项二","value":2,"checked":false,"selected":false,"options":[{"label":"选项二/1","value":21,"checked":false,"selected":false},{"label":"选项二/2","value":22,"checked":false,"selected":false},{"label":"选项二/3","value":23,"checked":false,"selected":false}]},{"label":"选项三","value":3,"checked":false,"selected":false,"options":[{"label":"选项三/1","value":31,"checked":false,"selected":false},{"label":"选项三/2","value":32,"checked":false,"selected":false},{"label":"选项三/3","value":33,"checked":false,"selected":false}]}]}'
                }
              },
              'childNodes': [
                {
                  'tagName': 'div',
                  'className': 'RadioItem',
                  'propObj': {
                    'styleObj': {
                      'border': '1px solid #1890ff',
                      'background': '#f3f9ff',
                      'padding': '10px',
                      'marginBottom': '10px!important',
                      'fontSize': '14px',
                      'display': 'block'
                    },
                    'attrObj': {}
                  },
                  'childNodes': [
                    {
                      'tagName': 'label',
                      'className': 'Label',
                      'propObj': {
                        'styleObj': {
                          'width': '100px',
                          'lineHeight': '32px',
                          'textAlign': 'right',
                          'verticalAlign': 'middle',
                          'float': 'left',
                          'fontSize': '14px',
                          'color': '#606266',
                          'padding': '0 12px 0 0',
                          'boxSizing': 'border-box'
                        },
                        'attrObj': {
                          'name': 'label'
                        }
                      },
                      'childNodes': [
                        {
                          'className': 'WebTextNode',
                          'text': 'PDT归属'
                        }
                      ]
                    },
                    {
                      'tagName': 'div',
                      'className': 'RadioGroup',
                      'propObj': {
                        'styleObj': {
                          'height': '100%',
                          'lineHeight': '32px',
                          'paddingLeft': '43px',
                          'paddingRight': '43px',
                          'textAlign': 'center',
                          'backgroundColor': '#FFF',
                          'backgroundImage': 'none',
                          'borderRadius': '4px',
                          'border': '1px solid #DCDFE6',
                          'boxSizing': 'border-box',
                          'color': '#606266',
                          'display': 'inline-block',
                          'fontSize': 'inherit',
                          'outline': '0',
                          'padding': '0 15px',
                          'margin': '0',
                          'transition': 'border-color .2s cubic-bezier(.645,.045,.355,1)',
                          'width': 'calc(100% - 100px)'
                        },
                        'attrObj': {
                          'name': 'radio-group'
                        }
                      },
                      'childNodes': [
                        {
                          'tagName': 'span',
                          'className': 'RadioOption',
                          'propObj': {
                            'styleObj': {
                              'padding': '0 5px'
                            },
                            'attrObj': {}
                          },
                          'childNodes': [
                            {
                              'tagName': 'input',
                              'className': 'Input',
                              'propObj': {
                                'styleObj': {},
                                'attrObj': {
                                  'type': 'radio',
                                  'name': 'radio0.2857165821761174',
                                  'label': '选项一/1',
                                  'value': 11,
                                  'checked': true
                                }
                              },
                              'childNodes': []
                            },
                            {
                              'className': 'WebTextNode',
                              'text': '选项一/1'
                            }
                          ]
                        },
                        {
                          'tagName': 'span',
                          'className': 'RadioOption',
                          'propObj': {
                            'styleObj': {
                              'padding': '0 5px'
                            },
                            'attrObj': {}
                          },
                          'childNodes': [
                            {
                              'tagName': 'input',
                              'className': 'Input',
                              'propObj': {
                                'styleObj': {},
                                'attrObj': {
                                  'type': 'radio',
                                  'name': 'radio0.2857165821761174',
                                  'label': '选项一/2',
                                  'value': 12,
                                  'checked': false
                                }
                              },
                              'childNodes': []
                            },
                            {
                              'className': 'WebTextNode',
                              'text': '选项一/2'
                            }
                          ]
                        },
                        {
                          'tagName': 'span',
                          'className': 'RadioOption',
                          'propObj': {
                            'styleObj': {
                              'padding': '0 5px'
                            },
                            'attrObj': {}
                          },
                          'childNodes': [
                            {
                              'tagName': 'input',
                              'className': 'Input',
                              'propObj': {
                                'styleObj': {},
                                'attrObj': {
                                  'type': 'radio',
                                  'name': 'radio0.2857165821761174',
                                  'label': '选项一/3',
                                  'value': 13,
                                  'checked': false
                                }
                              },
                              'childNodes': []
                            },
                            {
                              'className': 'WebTextNode',
                              'text': '选项一/3'
                            }
                          ]
                        }
                      ]
                    },
                    {
                      'tagName': 'span',
                      'className': 'Span',
                      'propObj': {
                        'styleObj': {
                          'float': 'right',
                          'backgroundColor': '#fff'
                        },
                        'attrObj': {}
                      },
                      'childNodes': [
                        {
                          'tagName': 'svg',
                          'className': 'DeleteSvg',
                          'propObj': {
                            'styleObj': {},
                            'attrObj': {
                              'version': '1.1',
                              'xmlns': 'http://www.w3.org/2000/svg',
                              'width': 20,
                              'height': 20,
                              'viewBox': '0 0 1024 1024'
                            }
                          },
                          'childNodes': [
                            {
                              'tagName': 'path',
                              'className': 'SvgPath',
                              'propObj': {
                                'styleObj': {},
                                'attrObj': {
                                  'd': 'M608 768c-17.696 0-32-14.304-32-32L576 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C640 753.696 625.696 768 608 768z M416 768c-17.696 0-32-14.304-32-32L384 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C448 753.696 433.696 768 416 768z M928 224l-160 0L768 160c0-52.928-42.72-96-95.264-96L352 64C299.072 64 256 107.072 256 160l0 64L96 224C78.304 224 64 238.304 64 256s14.304 32 32 32l832 0c17.696 0 32-14.304 32-32S945.696 224 928 224zM320 160c0-17.632 14.368-32 32-32l320.736 0C690.272 128 704 142.048 704 160l0 64L320 224 320 160z M736.128 960 288.064 960c-52.928 0-96-43.072-96-96L192.064 383.52c0-17.664 14.336-32 32-32s32 14.336 32 32L256.064 864c0 17.664 14.368 32 32 32l448.064 0c17.664 0 32-14.336 32-32L768.128 384.832c0-17.664 14.304-32 32-32s32 14.336 32 32L832.128 864C832.128 916.928 789.056 960 736.128 960z'
                                }
                              },
                              'childNodes': []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              'tagName': 'div',
              'className': 'RadioControl',
              'propObj': {
                'styleObj': {
                  'display': 'inline-block',
                  'width': '100%',
                  'padding': '10px',
                  'marginBottom': '10px!important',
                  'border': '1px solid #e2e0e0',
                  'boxSizing': 'border-box',
                  'zIndex': 9
                },
                'attrObj': {
                  'draggable': 'true',
                  'ctrl-id': 6,
                  'default-value': '',
                  'name': 'radio-control',
                  'option-config': '{"name":"option-config","resultValue":1,"options":[{"label":"选项一","value":1,"checked":true,"selected":true,"options":[{"label":"选项一/1","value":11,"checked":true,"selected":true},{"label":"选项一/2","value":12,"checked":false,"selected":false},{"label":"选项一/3","value":13,"checked":false,"selected":false}]},{"label":"选项二","value":2,"checked":false,"selected":false,"options":[{"label":"选项二/1","value":21,"checked":false,"selected":false},{"label":"选项二/2","value":22,"checked":false,"selected":false},{"label":"选项二/3","value":23,"checked":false,"selected":false}]},{"label":"选项三","value":3,"checked":false,"selected":false,"options":[{"label":"选项三/1","value":31,"checked":false,"selected":false},{"label":"选项三/2","value":32,"checked":false,"selected":false},{"label":"选项三/3","value":33,"checked":false,"selected":false}]}]}'
                }
              },
              'childNodes': [
                {
                  'tagName': 'div',
                  'className': 'RadioItem',
                  'propObj': {
                    'styleObj': {
                      'border': '1px solid #1890ff',
                      'background': '#f3f9ff',
                      'padding': '10px',
                      'marginBottom': '10px!important',
                      'fontSize': '14px',
                      'display': 'block'
                    },
                    'attrObj': {}
                  },
                  'childNodes': [
                    {
                      'tagName': 'label',
                      'className': 'Label',
                      'propObj': {
                        'styleObj': {
                          'width': '100px',
                          'lineHeight': '32px',
                          'textAlign': 'right',
                          'verticalAlign': 'middle',
                          'float': 'left',
                          'fontSize': '14px',
                          'color': '#606266',
                          'padding': '0 12px 0 0',
                          'boxSizing': 'border-box'
                        },
                        'attrObj': {
                          'name': 'label'
                        }
                      },
                      'childNodes': [
                        {
                          'className': 'WebTextNode',
                          'text': '片区归属'
                        }
                      ]
                    },
                    {
                      'tagName': 'div',
                      'className': 'RadioGroup',
                      'propObj': {
                        'styleObj': {
                          'height': '100%',
                          'lineHeight': '32px',
                          'paddingLeft': '43px',
                          'paddingRight': '43px',
                          'textAlign': 'center',
                          'backgroundColor': '#FFF',
                          'backgroundImage': 'none',
                          'borderRadius': '4px',
                          'border': '1px solid #DCDFE6',
                          'boxSizing': 'border-box',
                          'color': '#606266',
                          'display': 'inline-block',
                          'fontSize': 'inherit',
                          'outline': '0',
                          'padding': '0 15px',
                          'margin': '0',
                          'transition': 'border-color .2s cubic-bezier(.645,.045,.355,1)',
                          'width': 'calc(100% - 100px)'
                        },
                        'attrObj': {
                          'name': 'radio-group'
                        }
                      },
                      'childNodes': [
                        {
                          'tagName': 'span',
                          'className': 'RadioOption',
                          'propObj': {
                            'styleObj': {
                              'padding': '0 5px'
                            },
                            'attrObj': {}
                          },
                          'childNodes': [
                            {
                              'tagName': 'input',
                              'className': 'Input',
                              'propObj': {
                                'styleObj': {},
                                'attrObj': {
                                  'type': 'radio',
                                  'name': 'radio0.7091325526422991',
                                  'label': '选项一/1',
                                  'value': 11,
                                  'checked': true
                                }
                              },
                              'childNodes': []
                            },
                            {
                              'className': 'WebTextNode',
                              'text': '选项一/1'
                            }
                          ]
                        },
                        {
                          'tagName': 'span',
                          'className': 'RadioOption',
                          'propObj': {
                            'styleObj': {
                              'padding': '0 5px'
                            },
                            'attrObj': {}
                          },
                          'childNodes': [
                            {
                              'tagName': 'input',
                              'className': 'Input',
                              'propObj': {
                                'styleObj': {},
                                'attrObj': {
                                  'type': 'radio',
                                  'name': 'radio0.7091325526422991',
                                  'label': '选项一/2',
                                  'value': 12,
                                  'checked': false
                                }
                              },
                              'childNodes': []
                            },
                            {
                              'className': 'WebTextNode',
                              'text': '选项一/2'
                            }
                          ]
                        },
                        {
                          'tagName': 'span',
                          'className': 'RadioOption',
                          'propObj': {
                            'styleObj': {
                              'padding': '0 5px'
                            },
                            'attrObj': {}
                          },
                          'childNodes': [
                            {
                              'tagName': 'input',
                              'className': 'Input',
                              'propObj': {
                                'styleObj': {},
                                'attrObj': {
                                  'type': 'radio',
                                  'name': 'radio0.7091325526422991',
                                  'label': '选项一/3',
                                  'value': 13,
                                  'checked': false
                                }
                              },
                              'childNodes': []
                            },
                            {
                              'className': 'WebTextNode',
                              'text': '选项一/3'
                            }
                          ]
                        }
                      ]
                    },
                    {
                      'tagName': 'span',
                      'className': 'Span',
                      'propObj': {
                        'styleObj': {
                          'float': 'right',
                          'backgroundColor': '#fff'
                        },
                        'attrObj': {}
                      },
                      'childNodes': [
                        {
                          'tagName': 'svg',
                          'className': 'DeleteSvg',
                          'propObj': {
                            'styleObj': {},
                            'attrObj': {
                              'version': '1.1',
                              'xmlns': 'http://www.w3.org/2000/svg',
                              'width': 20,
                              'height': 20,
                              'viewBox': '0 0 1024 1024'
                            }
                          },
                          'childNodes': [
                            {
                              'tagName': 'path',
                              'className': 'SvgPath',
                              'propObj': {
                                'styleObj': {},
                                'attrObj': {
                                  'd': 'M608 768c-17.696 0-32-14.304-32-32L576 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C640 753.696 625.696 768 608 768z M416 768c-17.696 0-32-14.304-32-32L384 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C448 753.696 433.696 768 416 768z M928 224l-160 0L768 160c0-52.928-42.72-96-95.264-96L352 64C299.072 64 256 107.072 256 160l0 64L96 224C78.304 224 64 238.304 64 256s14.304 32 32 32l832 0c17.696 0 32-14.304 32-32S945.696 224 928 224zM320 160c0-17.632 14.368-32 32-32l320.736 0C690.272 128 704 142.048 704 160l0 64L320 224 320 160z M736.128 960 288.064 960c-52.928 0-96-43.072-96-96L192.064 383.52c0-17.664 14.336-32 32-32s32 14.336 32 32L256.064 864c0 17.664 14.368 32 32 32l448.064 0c17.664 0 32-14.336 32-32L768.128 384.832c0-17.664 14.304-32 32-32s32 14.336 32 32L832.128 864C832.128 916.928 789.056 960 736.128 960z'
                                }
                              },
                              'childNodes': []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              'tagName': 'div',
              'className': 'SingleInputControl',
              'propObj': {
                'styleObj': {
                  'display': 'inline-block',
                  'width': '100%',
                  'padding': '10px',
                  'marginBottom': '10px!important',
                  'border': '1px solid #e2e0e0',
                  'boxSizing': 'border-box',
                  'zIndex': 9
                },
                'attrObj': {
                  'draggable': 'true',
                  'ctrl-id': 7,
                  'default-value': '',
                  'name': 'single-input-control'
                }
              },
              'childNodes': [
                {
                  'tagName': 'div',
                  'className': 'InputItem',
                  'propObj': {
                    'styleObj': {
                      'border': '1px solid #1890ff',
                      'background': '#f3f9ff',
                      'padding': '10px',
                      'marginBottom': '10px!important',
                      'fontSize': '14px',
                      'display': 'block'
                    },
                    'attrObj': {}
                  },
                  'childNodes': [
                    {
                      'tagName': 'label',
                      'className': 'Label',
                      'propObj': {
                        'styleObj': {
                          'width': '100px',
                          'lineHeight': '32px',
                          'textAlign': 'right',
                          'verticalAlign': 'middle',
                          'float': 'left',
                          'fontSize': '14px',
                          'color': '#606266',
                          'padding': '0 12px 0 0',
                          'boxSizing': 'border-box'
                        },
                        'attrObj': {
                          'name': 'label'
                        }
                      },
                      'childNodes': [
                        {
                          'className': 'WebTextNode',
                          'text': '任务下达人'
                        }
                      ]
                    },
                    {
                      'tagName': 'input',
                      'className': 'Input',
                      'propObj': {
                        'styleObj': {
                          'height': '32px',
                          'lineHeight': '32px',
                          'paddingLeft': '43px',
                          'paddingRight': '43px',
                          'textAlign': 'center',
                          'backgroundColor': '#FFF',
                          'backgroundImage': 'none',
                          'borderRadius': '4px',
                          'border': '1px solid #DCDFE6',
                          'boxSizing': 'border-box',
                          'color': '#606266',
                          'display': 'inline-block',
                          'fontSize': 'inherit',
                          'outline': '0',
                          'padding': '0 15px',
                          'margin': '0',
                          'transition': 'border-color .2s cubic-bezier(.645,.045,.355,1)',
                          'width': 'calc(100% - 100px)'
                        },
                        'attrObj': {
                          'type': 'text',
                          'placeholder': '请输入'
                        }
                      },
                      'childNodes': []
                    },
                    {
                      'tagName': 'span',
                      'className': 'Span',
                      'propObj': {
                        'styleObj': {
                          'float': 'right',
                          'backgroundColor': '#fff'
                        },
                        'attrObj': {}
                      },
                      'childNodes': [
                        {
                          'tagName': 'svg',
                          'className': 'DeleteSvg',
                          'propObj': {
                            'styleObj': {},
                            'attrObj': {
                              'version': '1.1',
                              'xmlns': 'http://www.w3.org/2000/svg',
                              'width': 20,
                              'height': 20,
                              'viewBox': '0 0 1024 1024'
                            }
                          },
                          'childNodes': [
                            {
                              'tagName': 'path',
                              'className': 'SvgPath',
                              'propObj': {
                                'styleObj': {},
                                'attrObj': {
                                  'd': 'M608 768c-17.696 0-32-14.304-32-32L576 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C640 753.696 625.696 768 608 768z M416 768c-17.696 0-32-14.304-32-32L384 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C448 753.696 433.696 768 416 768z M928 224l-160 0L768 160c0-52.928-42.72-96-95.264-96L352 64C299.072 64 256 107.072 256 160l0 64L96 224C78.304 224 64 238.304 64 256s14.304 32 32 32l832 0c17.696 0 32-14.304 32-32S945.696 224 928 224zM320 160c0-17.632 14.368-32 32-32l320.736 0C690.272 128 704 142.048 704 160l0 64L320 224 320 160z M736.128 960 288.064 960c-52.928 0-96-43.072-96-96L192.064 383.52c0-17.664 14.336-32 32-32s32 14.336 32 32L256.064 864c0 17.664 14.368 32 32 32l448.064 0c17.664 0 32-14.336 32-32L768.128 384.832c0-17.664 14.304-32 32-32s32 14.336 32 32L832.128 864C832.128 916.928 789.056 960 736.128 960z'
                                }
                              },
                              'childNodes': []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              'tagName': 'div',
              'className': 'SingleInputControl',
              'propObj': {
                'styleObj': {
                  'display': 'inline-block',
                  'width': '100%',
                  'padding': '10px',
                  'marginBottom': '10px!important',
                  'border': '1px solid #e2e0e0',
                  'boxSizing': 'border-box',
                  'zIndex': 9
                },
                'attrObj': {
                  'draggable': 'true',
                  'ctrl-id': 8,
                  'default-value': '',
                  'name': 'single-input-control'
                }
              },
              'childNodes': [
                {
                  'tagName': 'div',
                  'className': 'InputItem',
                  'propObj': {
                    'styleObj': {
                      'border': '1px solid #1890ff',
                      'background': '#f3f9ff',
                      'padding': '10px',
                      'marginBottom': '10px!important',
                      'fontSize': '14px',
                      'display': 'block'
                    },
                    'attrObj': {}
                  },
                  'childNodes': [
                    {
                      'tagName': 'label',
                      'className': 'Label',
                      'propObj': {
                        'styleObj': {
                          'width': '100px',
                          'lineHeight': '32px',
                          'textAlign': 'right',
                          'verticalAlign': 'middle',
                          'float': 'left',
                          'fontSize': '14px',
                          'color': '#606266',
                          'padding': '0 12px 0 0',
                          'boxSizing': 'border-box'
                        },
                        'attrObj': {
                          'name': 'label'
                        }
                      },
                      'childNodes': [
                        {
                          'className': 'WebTextNode',
                          'text': '任务接收人'
                        }
                      ]
                    },
                    {
                      'tagName': 'input',
                      'className': 'Input',
                      'propObj': {
                        'styleObj': {
                          'height': '32px',
                          'lineHeight': '32px',
                          'paddingLeft': '43px',
                          'paddingRight': '43px',
                          'textAlign': 'center',
                          'backgroundColor': '#FFF',
                          'backgroundImage': 'none',
                          'borderRadius': '4px',
                          'border': '1px solid #DCDFE6',
                          'boxSizing': 'border-box',
                          'color': '#606266',
                          'display': 'inline-block',
                          'fontSize': 'inherit',
                          'outline': '0',
                          'padding': '0 15px',
                          'margin': '0',
                          'transition': 'border-color .2s cubic-bezier(.645,.045,.355,1)',
                          'width': 'calc(100% - 100px)'
                        },
                        'attrObj': {
                          'type': 'text',
                          'placeholder': '请输入'
                        }
                      },
                      'childNodes': []
                    },
                    {
                      'tagName': 'span',
                      'className': 'Span',
                      'propObj': {
                        'styleObj': {
                          'float': 'right',
                          'backgroundColor': '#fff'
                        },
                        'attrObj': {}
                      },
                      'childNodes': [
                        {
                          'tagName': 'svg',
                          'className': 'DeleteSvg',
                          'propObj': {
                            'styleObj': {},
                            'attrObj': {
                              'version': '1.1',
                              'xmlns': 'http://www.w3.org/2000/svg',
                              'width': 20,
                              'height': 20,
                              'viewBox': '0 0 1024 1024'
                            }
                          },
                          'childNodes': [
                            {
                              'tagName': 'path',
                              'className': 'SvgPath',
                              'propObj': {
                                'styleObj': {},
                                'attrObj': {
                                  'd': 'M608 768c-17.696 0-32-14.304-32-32L576 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C640 753.696 625.696 768 608 768z M416 768c-17.696 0-32-14.304-32-32L384 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C448 753.696 433.696 768 416 768z M928 224l-160 0L768 160c0-52.928-42.72-96-95.264-96L352 64C299.072 64 256 107.072 256 160l0 64L96 224C78.304 224 64 238.304 64 256s14.304 32 32 32l832 0c17.696 0 32-14.304 32-32S945.696 224 928 224zM320 160c0-17.632 14.368-32 32-32l320.736 0C690.272 128 704 142.048 704 160l0 64L320 224 320 160z M736.128 960 288.064 960c-52.928 0-96-43.072-96-96L192.064 383.52c0-17.664 14.336-32 32-32s32 14.336 32 32L256.064 864c0 17.664 14.368 32 32 32l448.064 0c17.664 0 32-14.336 32-32L768.128 384.832c0-17.664 14.304-32 32-32s32 14.336 32 32L832.128 864C832.128 916.928 789.056 960 736.128 960z'
                                }
                              },
                              'childNodes': []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              'tagName': 'div',
              'className': 'MultilineInputControl',
              'propObj': {
                'styleObj': {
                  'display': 'inline-block',
                  'width': '100%',
                  'padding': '10px',
                  'marginBottom': '10px!important',
                  'border': '1px solid #e2e0e0',
                  'boxSizing': 'border-box',
                  'zIndex': 9
                },
                'attrObj': {
                  'draggable': 'true',
                  'ctrl-id': 9,
                  'default-value': '',
                  'name': 'multiline-input-control'
                }
              },
              'childNodes': [
                {
                  'tagName': 'div',
                  'className': 'TextareaItem',
                  'propObj': {
                    'styleObj': {
                      'border': '1px solid #1890ff',
                      'background': '#f3f9ff',
                      'padding': '10px',
                      'marginBottom': '10px!important',
                      'fontSize': '14px',
                      'display': 'block'
                    },
                    'attrObj': {}
                  },
                  'childNodes': [
                    {
                      'tagName': 'label',
                      'className': 'Label',
                      'propObj': {
                        'styleObj': {
                          'width': '100px',
                          'lineHeight': '32px',
                          'textAlign': 'right',
                          'verticalAlign': 'middle',
                          'float': 'left',
                          'fontSize': '14px',
                          'color': '#606266',
                          'padding': '0 12px 0 0',
                          'boxSizing': 'border-box'
                        },
                        'attrObj': {
                          'name': 'label'
                        }
                      },
                      'childNodes': [
                        {
                          'className': 'WebTextNode',
                          'text': '任务背景'
                        }
                      ]
                    },
                    {
                      'tagName': 'textarea',
                      'className': 'TextArea',
                      'propObj': {
                        'styleObj': {
                          'height': '80px',
                          'lineHeight': '32px',
                          'paddingLeft': '43px',
                          'paddingRight': '43px',
                          'textAlign': 'center',
                          'backgroundColor': '#FFF',
                          'backgroundImage': 'none',
                          'borderRadius': '4px',
                          'border': '1px solid #DCDFE6',
                          'boxSizing': 'border-box',
                          'color': '#606266',
                          'display': 'inline-block',
                          'fontSize': 'inherit',
                          'outline': '0',
                          'padding': '0 15px',
                          'margin': '0',
                          'transition': 'border-color .2s cubic-bezier(.645,.045,.355,1)',
                          'width': 'calc(100% - 100px)'
                        },
                        'attrObj': {
                          'type': 'text',
                          'placeholder': '请输入'
                        }
                      },
                      'childNodes': []
                    },
                    {
                      'tagName': 'span',
                      'className': 'Span',
                      'propObj': {
                        'styleObj': {
                          'float': 'right',
                          'backgroundColor': '#fff'
                        },
                        'attrObj': {}
                      },
                      'childNodes': [
                        {
                          'tagName': 'svg',
                          'className': 'DeleteSvg',
                          'propObj': {
                            'styleObj': {},
                            'attrObj': {
                              'version': '1.1',
                              'xmlns': 'http://www.w3.org/2000/svg',
                              'width': 20,
                              'height': 20,
                              'viewBox': '0 0 1024 1024'
                            }
                          },
                          'childNodes': [
                            {
                              'tagName': 'path',
                              'className': 'SvgPath',
                              'propObj': {
                                'styleObj': {},
                                'attrObj': {
                                  'd': 'M608 768c-17.696 0-32-14.304-32-32L576 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C640 753.696 625.696 768 608 768z M416 768c-17.696 0-32-14.304-32-32L384 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C448 753.696 433.696 768 416 768z M928 224l-160 0L768 160c0-52.928-42.72-96-95.264-96L352 64C299.072 64 256 107.072 256 160l0 64L96 224C78.304 224 64 238.304 64 256s14.304 32 32 32l832 0c17.696 0 32-14.304 32-32S945.696 224 928 224zM320 160c0-17.632 14.368-32 32-32l320.736 0C690.272 128 704 142.048 704 160l0 64L320 224 320 160z M736.128 960 288.064 960c-52.928 0-96-43.072-96-96L192.064 383.52c0-17.664 14.336-32 32-32s32 14.336 32 32L256.064 864c0 17.664 14.368 32 32 32l448.064 0c17.664 0 32-14.336 32-32L768.128 384.832c0-17.664 14.304-32 32-32s32 14.336 32 32L832.128 864C832.128 916.928 789.056 960 736.128 960z'
                                }
                              },
                              'childNodes': []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              'tagName': 'div',
              'className': 'MultilineInputControl',
              'propObj': {
                'styleObj': {
                  'display': 'inline-block',
                  'width': '100%',
                  'padding': '10px',
                  'marginBottom': '10px!important',
                  'border': '1px solid #e2e0e0',
                  'boxSizing': 'border-box',
                  'zIndex': 9
                },
                'attrObj': {
                  'draggable': 'true',
                  'ctrl-id': 10,
                  'default-value': '',
                  'name': 'multiline-input-control'
                }
              },
              'childNodes': [
                {
                  'tagName': 'div',
                  'className': 'TextareaItem',
                  'propObj': {
                    'styleObj': {
                      'border': '1px solid #1890ff',
                      'background': '#f3f9ff',
                      'padding': '10px',
                      'marginBottom': '10px!important',
                      'fontSize': '14px',
                      'display': 'block'
                    },
                    'attrObj': {}
                  },
                  'childNodes': [
                    {
                      'tagName': 'label',
                      'className': 'Label',
                      'propObj': {
                        'styleObj': {
                          'width': '100px',
                          'lineHeight': '32px',
                          'textAlign': 'right',
                          'verticalAlign': 'middle',
                          'float': 'left',
                          'fontSize': '14px',
                          'color': '#606266',
                          'padding': '0 12px 0 0',
                          'boxSizing': 'border-box'
                        },
                        'attrObj': {
                          'name': 'label'
                        }
                      },
                      'childNodes': [
                        {
                          'className': 'WebTextNode',
                          'text': '任务内容'
                        }
                      ]
                    },
                    {
                      'tagName': 'textarea',
                      'className': 'TextArea',
                      'propObj': {
                        'styleObj': {
                          'height': '80px',
                          'lineHeight': '32px',
                          'paddingLeft': '43px',
                          'paddingRight': '43px',
                          'textAlign': 'center',
                          'backgroundColor': '#FFF',
                          'backgroundImage': 'none',
                          'borderRadius': '4px',
                          'border': '1px solid #DCDFE6',
                          'boxSizing': 'border-box',
                          'color': '#606266',
                          'display': 'inline-block',
                          'fontSize': 'inherit',
                          'outline': '0',
                          'padding': '0 15px',
                          'margin': '0',
                          'transition': 'border-color .2s cubic-bezier(.645,.045,.355,1)',
                          'width': 'calc(100% - 100px)'
                        },
                        'attrObj': {
                          'type': 'text',
                          'placeholder': '请输入'
                        }
                      },
                      'childNodes': []
                    },
                    {
                      'tagName': 'span',
                      'className': 'Span',
                      'propObj': {
                        'styleObj': {
                          'float': 'right',
                          'backgroundColor': '#fff'
                        },
                        'attrObj': {}
                      },
                      'childNodes': [
                        {
                          'tagName': 'svg',
                          'className': 'DeleteSvg',
                          'propObj': {
                            'styleObj': {},
                            'attrObj': {
                              'version': '1.1',
                              'xmlns': 'http://www.w3.org/2000/svg',
                              'width': 20,
                              'height': 20,
                              'viewBox': '0 0 1024 1024'
                            }
                          },
                          'childNodes': [
                            {
                              'tagName': 'path',
                              'className': 'SvgPath',
                              'propObj': {
                                'styleObj': {},
                                'attrObj': {
                                  'd': 'M608 768c-17.696 0-32-14.304-32-32L576 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C640 753.696 625.696 768 608 768z M416 768c-17.696 0-32-14.304-32-32L384 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C448 753.696 433.696 768 416 768z M928 224l-160 0L768 160c0-52.928-42.72-96-95.264-96L352 64C299.072 64 256 107.072 256 160l0 64L96 224C78.304 224 64 238.304 64 256s14.304 32 32 32l832 0c17.696 0 32-14.304 32-32S945.696 224 928 224zM320 160c0-17.632 14.368-32 32-32l320.736 0C690.272 128 704 142.048 704 160l0 64L320 224 320 160z M736.128 960 288.064 960c-52.928 0-96-43.072-96-96L192.064 383.52c0-17.664 14.336-32 32-32s32 14.336 32 32L256.064 864c0 17.664 14.368 32 32 32l448.064 0c17.664 0 32-14.336 32-32L768.128 384.832c0-17.664 14.304-32 32-32s32 14.336 32 32L832.128 864C832.128 916.928 789.056 960 736.128 960z'
                                }
                              },
                              'childNodes': []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              'tagName': 'div',
              'className': 'MultilineInputControl',
              'propObj': {
                'styleObj': {
                  'display': 'inline-block',
                  'width': '100%',
                  'padding': '10px',
                  'marginBottom': '10px!important',
                  'border': '1px solid #e2e0e0',
                  'boxSizing': 'border-box',
                  'zIndex': 9
                },
                'attrObj': {
                  'draggable': 'true',
                  'ctrl-id': 11,
                  'default-value': '',
                  'name': 'multiline-input-control'
                }
              },
              'childNodes': [
                {
                  'tagName': 'div',
                  'className': 'TextareaItem',
                  'propObj': {
                    'styleObj': {
                      'border': '1px solid #1890ff',
                      'background': '#f3f9ff',
                      'padding': '10px',
                      'marginBottom': '10px!important',
                      'fontSize': '14px',
                      'display': 'block'
                    },
                    'attrObj': {}
                  },
                  'childNodes': [
                    {
                      'tagName': 'label',
                      'className': 'Label',
                      'propObj': {
                        'styleObj': {
                          'width': '100px',
                          'lineHeight': '32px',
                          'textAlign': 'right',
                          'verticalAlign': 'middle',
                          'float': 'left',
                          'fontSize': '14px',
                          'color': '#606266',
                          'padding': '0 12px 0 0',
                          'boxSizing': 'border-box'
                        },
                        'attrObj': {
                          'name': 'label'
                        }
                      },
                      'childNodes': [
                        {
                          'className': 'WebTextNode',
                          'text': '任务完成标准'
                        }
                      ]
                    },
                    {
                      'tagName': 'textarea',
                      'className': 'TextArea',
                      'propObj': {
                        'styleObj': {
                          'height': '80px',
                          'lineHeight': '32px',
                          'paddingLeft': '43px',
                          'paddingRight': '43px',
                          'textAlign': 'center',
                          'backgroundColor': '#FFF',
                          'backgroundImage': 'none',
                          'borderRadius': '4px',
                          'border': '1px solid #DCDFE6',
                          'boxSizing': 'border-box',
                          'color': '#606266',
                          'display': 'inline-block',
                          'fontSize': 'inherit',
                          'outline': '0',
                          'padding': '0 15px',
                          'margin': '0',
                          'transition': 'border-color .2s cubic-bezier(.645,.045,.355,1)',
                          'width': 'calc(100% - 100px)'
                        },
                        'attrObj': {
                          'type': 'text',
                          'placeholder': '请输入'
                        }
                      },
                      'childNodes': []
                    },
                    {
                      'tagName': 'span',
                      'className': 'Span',
                      'propObj': {
                        'styleObj': {
                          'float': 'right',
                          'backgroundColor': '#fff'
                        },
                        'attrObj': {}
                      },
                      'childNodes': [
                        {
                          'tagName': 'svg',
                          'className': 'DeleteSvg',
                          'propObj': {
                            'styleObj': {},
                            'attrObj': {
                              'version': '1.1',
                              'xmlns': 'http://www.w3.org/2000/svg',
                              'width': 20,
                              'height': 20,
                              'viewBox': '0 0 1024 1024'
                            }
                          },
                          'childNodes': [
                            {
                              'tagName': 'path',
                              'className': 'SvgPath',
                              'propObj': {
                                'styleObj': {},
                                'attrObj': {
                                  'd': 'M608 768c-17.696 0-32-14.304-32-32L576 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C640 753.696 625.696 768 608 768z M416 768c-17.696 0-32-14.304-32-32L384 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C448 753.696 433.696 768 416 768z M928 224l-160 0L768 160c0-52.928-42.72-96-95.264-96L352 64C299.072 64 256 107.072 256 160l0 64L96 224C78.304 224 64 238.304 64 256s14.304 32 32 32l832 0c17.696 0 32-14.304 32-32S945.696 224 928 224zM320 160c0-17.632 14.368-32 32-32l320.736 0C690.272 128 704 142.048 704 160l0 64L320 224 320 160z M736.128 960 288.064 960c-52.928 0-96-43.072-96-96L192.064 383.52c0-17.664 14.336-32 32-32s32 14.336 32 32L256.064 864c0 17.664 14.368 32 32 32l448.064 0c17.664 0 32-14.336 32-32L768.128 384.832c0-17.664 14.304-32 32-32s32 14.336 32 32L832.128 864C832.128 916.928 789.056 960 736.128 960z'
                                }
                              },
                              'childNodes': []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              'tagName': 'div',
              'className': 'MultilineInputControl',
              'propObj': {
                'styleObj': {
                  'display': 'inline-block',
                  'width': '100%',
                  'padding': '10px',
                  'marginBottom': '10px!important',
                  'border': '1px solid #e2e0e0',
                  'boxSizing': 'border-box',
                  'zIndex': 9
                },
                'attrObj': {
                  'draggable': 'true',
                  'ctrl-id': 13,
                  'default-value': '',
                  'name': 'multiline-input-control'
                }
              },
              'childNodes': [
                {
                  'tagName': 'div',
                  'className': 'TextareaItem',
                  'propObj': {
                    'styleObj': {
                      'border': '1px solid #1890ff',
                      'background': '#f3f9ff',
                      'padding': '10px',
                      'marginBottom': '10px!important',
                      'fontSize': '14px',
                      'display': 'block'
                    },
                    'attrObj': {}
                  },
                  'childNodes': [
                    {
                      'tagName': 'label',
                      'className': 'Label',
                      'propObj': {
                        'styleObj': {
                          'width': '100px',
                          'lineHeight': '32px',
                          'textAlign': 'right',
                          'verticalAlign': 'middle',
                          'float': 'left',
                          'fontSize': '14px',
                          'color': '#606266',
                          'padding': '0 12px 0 0',
                          'boxSizing': 'border-box'
                        },
                        'attrObj': {
                          'name': 'label'
                        }
                      },
                      'childNodes': [
                        {
                          'className': 'WebTextNode',
                          'text': '任务输出物'
                        }
                      ]
                    },
                    {
                      'tagName': 'textarea',
                      'className': 'TextArea',
                      'propObj': {
                        'styleObj': {
                          'height': '80px',
                          'lineHeight': '32px',
                          'paddingLeft': '43px',
                          'paddingRight': '43px',
                          'textAlign': 'center',
                          'backgroundColor': '#FFF',
                          'backgroundImage': 'none',
                          'borderRadius': '4px',
                          'border': '1px solid #DCDFE6',
                          'boxSizing': 'border-box',
                          'color': '#606266',
                          'display': 'inline-block',
                          'fontSize': 'inherit',
                          'outline': '0',
                          'padding': '0 15px',
                          'margin': '0',
                          'transition': 'border-color .2s cubic-bezier(.645,.045,.355,1)',
                          'width': 'calc(100% - 100px)'
                        },
                        'attrObj': {
                          'type': 'text',
                          'placeholder': '请输入'
                        }
                      },
                      'childNodes': []
                    },
                    {
                      'tagName': 'span',
                      'className': 'Span',
                      'propObj': {
                        'styleObj': {
                          'float': 'right',
                          'backgroundColor': '#fff'
                        },
                        'attrObj': {}
                      },
                      'childNodes': [
                        {
                          'tagName': 'svg',
                          'className': 'DeleteSvg',
                          'propObj': {
                            'styleObj': {},
                            'attrObj': {
                              'version': '1.1',
                              'xmlns': 'http://www.w3.org/2000/svg',
                              'width': 20,
                              'height': 20,
                              'viewBox': '0 0 1024 1024'
                            }
                          },
                          'childNodes': [
                            {
                              'tagName': 'path',
                              'className': 'SvgPath',
                              'propObj': {
                                'styleObj': {},
                                'attrObj': {
                                  'd': 'M608 768c-17.696 0-32-14.304-32-32L576 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C640 753.696 625.696 768 608 768z M416 768c-17.696 0-32-14.304-32-32L384 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C448 753.696 433.696 768 416 768z M928 224l-160 0L768 160c0-52.928-42.72-96-95.264-96L352 64C299.072 64 256 107.072 256 160l0 64L96 224C78.304 224 64 238.304 64 256s14.304 32 32 32l832 0c17.696 0 32-14.304 32-32S945.696 224 928 224zM320 160c0-17.632 14.368-32 32-32l320.736 0C690.272 128 704 142.048 704 160l0 64L320 224 320 160z M736.128 960 288.064 960c-52.928 0-96-43.072-96-96L192.064 383.52c0-17.664 14.336-32 32-32s32 14.336 32 32L256.064 864c0 17.664 14.368 32 32 32l448.064 0c17.664 0 32-14.336 32-32L768.128 384.832c0-17.664 14.304-32 32-32s32 14.336 32 32L832.128 864C832.128 916.928 789.056 960 736.128 960z'
                                }
                              },
                              'childNodes': []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              'tagName': 'div',
              'className': 'DateControl',
              'propObj': {
                'styleObj': {
                  'display': 'inline-block',
                  'width': '100%',
                  'padding': '10px',
                  'marginBottom': '10px!important',
                  'border': '1px solid #e2e0e0',
                  'boxSizing': 'border-box',
                  'zIndex': 9
                },
                'attrObj': {
                  'draggable': 'true',
                  'ctrl-id': 14,
                  'default-value': '',
                  'name': 'date-control'
                }
              },
              'childNodes': [
                {
                  'tagName': 'div',
                  'className': 'InputItem',
                  'propObj': {
                    'styleObj': {
                      'border': '1px solid #1890ff',
                      'background': '#f3f9ff',
                      'padding': '10px',
                      'marginBottom': '10px!important',
                      'fontSize': '14px',
                      'display': 'block'
                    },
                    'attrObj': {}
                  },
                  'childNodes': [
                    {
                      'tagName': 'label',
                      'className': 'Label',
                      'propObj': {
                        'styleObj': {
                          'width': '100px',
                          'lineHeight': '32px',
                          'textAlign': 'right',
                          'verticalAlign': 'middle',
                          'float': 'left',
                          'fontSize': '14px',
                          'color': '#606266',
                          'padding': '0 12px 0 0',
                          'boxSizing': 'border-box'
                        },
                        'attrObj': {
                          'name': 'label'
                        }
                      },
                      'childNodes': [
                        {
                          'className': 'WebTextNode',
                          'text': '计划开始日期'
                        }
                      ]
                    },
                    {
                      'tagName': 'input',
                      'className': 'Input',
                      'propObj': {
                        'styleObj': {
                          'height': '32px',
                          'lineHeight': '32px',
                          'paddingLeft': '43px',
                          'paddingRight': '43px',
                          'textAlign': 'center',
                          'backgroundColor': '#FFF',
                          'backgroundImage': 'none',
                          'borderRadius': '4px',
                          'border': '1px solid #DCDFE6',
                          'boxSizing': 'border-box',
                          'color': '#606266',
                          'display': 'inline-block',
                          'fontSize': 'inherit',
                          'outline': '0',
                          'padding': '0 15px',
                          'margin': '0',
                          'transition': 'border-color .2s cubic-bezier(.645,.045,.355,1)',
                          'width': 'calc(100% - 100px)'
                        },
                        'attrObj': {
                          'type': 'date',
                          'placeholder': false
                        }
                      },
                      'childNodes': []
                    },
                    {
                      'tagName': 'span',
                      'className': 'Span',
                      'propObj': {
                        'styleObj': {
                          'float': 'right',
                          'backgroundColor': '#fff'
                        },
                        'attrObj': {}
                      },
                      'childNodes': [
                        {
                          'tagName': 'svg',
                          'className': 'DeleteSvg',
                          'propObj': {
                            'styleObj': {},
                            'attrObj': {
                              'version': '1.1',
                              'xmlns': 'http://www.w3.org/2000/svg',
                              'width': 20,
                              'height': 20,
                              'viewBox': '0 0 1024 1024'
                            }
                          },
                          'childNodes': [
                            {
                              'tagName': 'path',
                              'className': 'SvgPath',
                              'propObj': {
                                'styleObj': {},
                                'attrObj': {
                                  'd': 'M608 768c-17.696 0-32-14.304-32-32L576 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C640 753.696 625.696 768 608 768z M416 768c-17.696 0-32-14.304-32-32L384 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C448 753.696 433.696 768 416 768z M928 224l-160 0L768 160c0-52.928-42.72-96-95.264-96L352 64C299.072 64 256 107.072 256 160l0 64L96 224C78.304 224 64 238.304 64 256s14.304 32 32 32l832 0c17.696 0 32-14.304 32-32S945.696 224 928 224zM320 160c0-17.632 14.368-32 32-32l320.736 0C690.272 128 704 142.048 704 160l0 64L320 224 320 160z M736.128 960 288.064 960c-52.928 0-96-43.072-96-96L192.064 383.52c0-17.664 14.336-32 32-32s32 14.336 32 32L256.064 864c0 17.664 14.368 32 32 32l448.064 0c17.664 0 32-14.336 32-32L768.128 384.832c0-17.664 14.304-32 32-32s32 14.336 32 32L832.128 864C832.128 916.928 789.056 960 736.128 960z'
                                }
                              },
                              'childNodes': []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              'tagName': 'div',
              'className': 'DateControl',
              'propObj': {
                'styleObj': {
                  'display': 'inline-block',
                  'width': '100%',
                  'padding': '10px',
                  'marginBottom': '10px!important',
                  'border': '1px solid #e2e0e0',
                  'boxSizing': 'border-box',
                  'zIndex': 9
                },
                'attrObj': {
                  'draggable': 'true',
                  'ctrl-id': 15,
                  'default-value': '',
                  'name': 'date-control'
                }
              },
              'childNodes': [
                {
                  'tagName': 'div',
                  'className': 'InputItem',
                  'propObj': {
                    'styleObj': {
                      'border': '1px solid #1890ff',
                      'background': '#f3f9ff',
                      'padding': '10px',
                      'marginBottom': '10px!important',
                      'fontSize': '14px',
                      'display': 'block'
                    },
                    'attrObj': {}
                  },
                  'childNodes': [
                    {
                      'tagName': 'label',
                      'className': 'Label',
                      'propObj': {
                        'styleObj': {
                          'width': '100px',
                          'lineHeight': '32px',
                          'textAlign': 'right',
                          'verticalAlign': 'middle',
                          'float': 'left',
                          'fontSize': '14px',
                          'color': '#606266',
                          'padding': '0 12px 0 0',
                          'boxSizing': 'border-box'
                        },
                        'attrObj': {
                          'name': 'label'
                        }
                      },
                      'childNodes': [
                        {
                          'className': 'WebTextNode',
                          'text': '计划完成日期'
                        }
                      ]
                    },
                    {
                      'tagName': 'input',
                      'className': 'Input',
                      'propObj': {
                        'styleObj': {
                          'height': '32px',
                          'lineHeight': '32px',
                          'paddingLeft': '43px',
                          'paddingRight': '43px',
                          'textAlign': 'center',
                          'backgroundColor': '#FFF',
                          'backgroundImage': 'none',
                          'borderRadius': '4px',
                          'border': '1px solid #DCDFE6',
                          'boxSizing': 'border-box',
                          'color': '#606266',
                          'display': 'inline-block',
                          'fontSize': 'inherit',
                          'outline': '0',
                          'padding': '0 15px',
                          'margin': '0',
                          'transition': 'border-color .2s cubic-bezier(.645,.045,.355,1)',
                          'width': 'calc(100% - 100px)'
                        },
                        'attrObj': {
                          'type': 'date',
                          'placeholder': false
                        }
                      },
                      'childNodes': []
                    },
                    {
                      'tagName': 'span',
                      'className': 'Span',
                      'propObj': {
                        'styleObj': {
                          'float': 'right',
                          'backgroundColor': '#fff'
                        },
                        'attrObj': {}
                      },
                      'childNodes': [
                        {
                          'tagName': 'svg',
                          'className': 'DeleteSvg',
                          'propObj': {
                            'styleObj': {},
                            'attrObj': {
                              'version': '1.1',
                              'xmlns': 'http://www.w3.org/2000/svg',
                              'width': 20,
                              'height': 20,
                              'viewBox': '0 0 1024 1024'
                            }
                          },
                          'childNodes': [
                            {
                              'tagName': 'path',
                              'className': 'SvgPath',
                              'propObj': {
                                'styleObj': {},
                                'attrObj': {
                                  'd': 'M608 768c-17.696 0-32-14.304-32-32L576 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C640 753.696 625.696 768 608 768z M416 768c-17.696 0-32-14.304-32-32L384 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C448 753.696 433.696 768 416 768z M928 224l-160 0L768 160c0-52.928-42.72-96-95.264-96L352 64C299.072 64 256 107.072 256 160l0 64L96 224C78.304 224 64 238.304 64 256s14.304 32 32 32l832 0c17.696 0 32-14.304 32-32S945.696 224 928 224zM320 160c0-17.632 14.368-32 32-32l320.736 0C690.272 128 704 142.048 704 160l0 64L320 224 320 160z M736.128 960 288.064 960c-52.928 0-96-43.072-96-96L192.064 383.52c0-17.664 14.336-32 32-32s32 14.336 32 32L256.064 864c0 17.664 14.368 32 32 32l448.064 0c17.664 0 32-14.336 32-32L768.128 384.832c0-17.664 14.304-32 32-32s32 14.336 32 32L832.128 864C832.128 916.928 789.056 960 736.128 960z'
                                }
                              },
                              'childNodes': []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              'tagName': 'div',
              'className': 'NumericalControl',
              'propObj': {
                'styleObj': {
                  'display': 'inline-block',
                  'width': '100%',
                  'padding': '10px',
                  'marginBottom': '10px!important',
                  'border': '1px solid #e2e0e0',
                  'boxSizing': 'border-box',
                  'zIndex': 9
                },
                'attrObj': {
                  'draggable': 'true',
                  'ctrl-id': 16,
                  'default-value': '',
                  'name': 'numerical-control',
                  'field-name': '0'
                }
              },
              'childNodes': [
                {
                  'tagName': 'div',
                  'className': 'InputItem',
                  'propObj': {
                    'styleObj': {
                      'border': '1px solid #1890ff',
                      'background': '#f3f9ff',
                      'padding': '10px',
                      'marginBottom': '10px!important',
                      'fontSize': '14px',
                      'display': 'block'
                    },
                    'attrObj': {}
                  },
                  'childNodes': [
                    {
                      'tagName': 'label',
                      'className': 'Label',
                      'propObj': {
                        'styleObj': {
                          'width': '100px',
                          'lineHeight': '32px',
                          'textAlign': 'right',
                          'verticalAlign': 'middle',
                          'float': 'left',
                          'fontSize': '14px',
                          'color': '#606266',
                          'padding': '0 12px 0 0',
                          'boxSizing': 'border-box'
                        },
                        'attrObj': {
                          'name': 'label'
                        }
                      },
                      'childNodes': [
                        {
                          'className': 'WebTextNode',
                          'text': '计划工时'
                        }
                      ]
                    },
                    {
                      'tagName': 'input',
                      'className': 'Input',
                      'propObj': {
                        'styleObj': {
                          'height': '32px',
                          'lineHeight': '32px',
                          'paddingLeft': '43px',
                          'paddingRight': '43px',
                          'textAlign': 'center',
                          'backgroundColor': '#FFF',
                          'backgroundImage': 'none',
                          'borderRadius': '4px',
                          'border': '1px solid #DCDFE6',
                          'boxSizing': 'border-box',
                          'color': '#606266',
                          'display': 'inline-block',
                          'fontSize': 'inherit',
                          'outline': '0',
                          'padding': '0 15px',
                          'margin': '0',
                          'transition': 'border-color .2s cubic-bezier(.645,.045,.355,1)',
                          'width': 'calc(100% - 100px)'
                        },
                        'attrObj': {
                          'type': 'number'
                        }
                      },
                      'childNodes': []
                    },
                    {
                      'tagName': 'span',
                      'className': 'Span',
                      'propObj': {
                        'styleObj': {
                          'float': 'right',
                          'backgroundColor': '#fff'
                        },
                        'attrObj': {}
                      },
                      'childNodes': [
                        {
                          'tagName': 'svg',
                          'className': 'DeleteSvg',
                          'propObj': {
                            'styleObj': {},
                            'attrObj': {
                              'version': '1.1',
                              'xmlns': 'http://www.w3.org/2000/svg',
                              'width': 20,
                              'height': 20,
                              'viewBox': '0 0 1024 1024'
                            }
                          },
                          'childNodes': [
                            {
                              'tagName': 'path',
                              'className': 'SvgPath',
                              'propObj': {
                                'styleObj': {},
                                'attrObj': {
                                  'd': 'M608 768c-17.696 0-32-14.304-32-32L576 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C640 753.696 625.696 768 608 768z M416 768c-17.696 0-32-14.304-32-32L384 384c0-17.696 14.304-32 32-32s32 14.304 32 32l0 352C448 753.696 433.696 768 416 768z M928 224l-160 0L768 160c0-52.928-42.72-96-95.264-96L352 64C299.072 64 256 107.072 256 160l0 64L96 224C78.304 224 64 238.304 64 256s14.304 32 32 32l832 0c17.696 0 32-14.304 32-32S945.696 224 928 224zM320 160c0-17.632 14.368-32 32-32l320.736 0C690.272 128 704 142.048 704 160l0 64L320 224 320 160z M736.128 960 288.064 960c-52.928 0-96-43.072-96-96L192.064 383.52c0-17.664 14.336-32 32-32s32 14.336 32 32L256.064 864c0 17.664 14.368 32 32 32l448.064 0c17.664 0 32-14.336 32-32L768.128 384.832c0-17.664 14.304-32 32-32s32 14.336 32 32L832.128 864C832.128 916.928 789.056 960 736.128 960z'
                                }
                              },
                              'childNodes': []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
export const taskData: IFormData = {
  'table': [],
  'table1.field1': '12',
  'table1.field2': '11,12',
  'table1.field3': '12',
  'table2.field1': '',
  'table3.field3': '选择1'
};
