<!-- This example requires Tailwind CSS v2.0+ -->
<template>
<div class="flex">
        <!-- BEGIN: Side Menu -->
        <nav class="side-nav">
            <a href="" class="intro-x flex items-center pl-5 pt-4">
                <img alt="" class="w-6" src="">
                <span class="hidden xl:block text-white text-lg ml-3">
                    Mid<span class="font-medium">one</span>
                </span>
            </a>
            <div class="side-nav__devider my-6"></div>
            <ul>
                <template v-for="menu in side_menu">
                    <template v-if="menu == 'devider'">
                        <li  :key="menu.title" class="side-nav__devider my-6"></li>
                    </template>
                    <template v-else>
                        <li :key="menu.title">
                            <a>
                                <div class="side-menu__icon">
                                    <i data-feather="{{ menu.icon }}"></i>
                                </div>
                                <div class="side-menu__title">
                                    {{ menu.title }}
                                     <template v-if="menu.sub_menu">
                                        <i data-feather="chevron-down" class="side-menu__sub-icon"></i>
                                     </template>
                                </div>
                            </a>
                            <div v-if="menu.sub_menu">
                                <ul class="">
                                        <li v-for="subMenu in menu.sub_menu" :key="subMenu.title">
                                            <a href="" class="">
                                                <div class="side-menu__icon">
                                                    <i data-feather="activity"></i>
                                                </div>
                                                <div class="side-menu__title">
                                                    {{ subMenu.title }}
                                                    <div v-if="subMenu.sub_menu">
                                                        <i data-feather="chevron-down" class="side-menu__sub-icon"></i>
                                                    </div>
                                                </div>
                                            </a>
                                            <div v-if="subMenu.sub_menu">
                                                <ul class="">
                                                    <li v-for="lastSubMenu in subMenu.sub_menu" :key="lastSubMenu">
                                                        <a href="" class="">
                                                            <div class="side-menu__icon">
                                                                <i data-feather="zap"></i>
                                                            </div>
                                                            <div class="side-menu__title">{{ lastSubMenu.title }}</div>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                </ul>
                            </div>
                        </li>
                    </template>
                
                </template>
            </ul>
        </nav>
        <div class="content">
            <router-view/>
        </div>
    </div>
    
</template>

<script>

export default {
  components: {
  },
  data: {
    side_menu : this.sideMenu()
  },
  sideMenu()
  {
        return {
            'dashboard' : {
                'icon' : 'home',
                'layout' : 'side-menu',
                'page_name' : 'dashboard',
                'title' : 'Dashboard'
            },
            'menu-layout' : {
                'icon' : 'box',
                'page_name' : 'menu-layout',
                'title' : 'Menu Layout',
                'sub_menu' : {
                    'side-menu' : {
                        'icon' : '',
                        'layout' : 'side-menu',
                        'page_name' : 'dashboard',
                        'title' : 'Side Menu'
                    },
                    'simple-menu' : {
                        'icon' : '',
                        'layout' : 'simple-menu',
                        'page_name' : 'dashboard',
                        'title' : 'Simple Menu'
                    },
                    'top-menu' : {
                        'icon' : '',
                        'layout' : 'top-menu',
                        'page_name' : 'dashboard',
                        'title' : 'Top Menu'
                    }
                }
            },
            'inbox' : {
                'icon' : 'inbox',
                'layout' : 'side-menu',
                'page_name' : 'inbox',
                'title' : 'Inbox'
            },
            'file-manager' : {
                'icon' : 'hard-drive',
                'layout' : 'side-menu',
                'page_name' : 'file-manager',
                'title' : 'File Manager'
            },
            'point-of-sale' : {
                'icon' : 'credit-card',
                'layout' : 'side-menu',
                'page_name' : 'point-of-sale',
                'title' : 'Point of Sale'
            },
            'chat' : {
                'icon' : 'message-square',
                'layout' : 'side-menu',
                'page_name' : 'chat',
                'title' : 'Chat'
            },
            'post' : {
                'icon' : 'file-text',
                'layout' : 'side-menu',
                'page_name' : 'post',
                'title' : 'Post'
            },
            'devider' : any,
            'crud' : {
                'icon' : 'edit',
                'page_name' : 'crud',
                'title' : 'Crud',
                'sub_menu' : {
                    'crud-data-list' : {
                        'icon' : '',
                        'layout' : 'side-menu',
                        'page_name' : 'crud-data-list',
                        'title' : 'Data List'
                    },
                    'crud-form' : {
                        'icon' : '',
                        'layout' : 'side-menu',
                        'page_name' : 'crud-form',
                        'title' : 'Form'
                    }
                }
            },
            'users' : {
                'icon' : 'users',
                'page_name' : 'users',
                'title' : 'Users',
                'sub_menu' : {
                    'users-layout-1' : {
                        'icon' : '',
                        'layout' : 'side-menu',
                        'page_name' : 'users-layout-1',
                        'title' : 'Layout 1'
                    },
                    'users-layout-2' : {
                        'icon' : '',
                        'layout' : 'side-menu',
                        'page_name' : 'users-layout-2',
                        'title' : 'Layout 2'
                    },
                    'users-layout-3' : {
                        'icon' : '',
                        'layout' : 'side-menu',
                        'page_name' : 'users-layout-3',
                        'title' : 'Layout 3'
                    }
                }
            },
            'profile' : {
                'icon' : 'trello',
                'page_name' : 'profile',
                'title' : 'Profile',
                'sub_menu' : {
                    'profile-overview-1' : {
                        'icon' : '',
                        'layout' : 'side-menu',
                        'page_name' : 'profile-overview-1',
                        'title' : 'Overview 1'
                    },
                    'profile-overview-2' : {
                        'icon' : '',
                        'layout' : 'side-menu',
                        'page_name' : 'profile-overview-2',
                        'title' : 'Overview 2'
                    },
                    'profile-overview-3' : {
                        'icon' : '',
                        'layout' : 'side-menu',
                        'page_name' : 'profile-overview-3',
                        'title' : 'Overview 3'
                    }
                }
            },
            'pages' : {
                'icon' : 'layout',
                'page_name' : 'layout',
                'title' : 'Pages',
                'sub_menu' : {
                    'wizards' : {
                        'icon' : '',
                        'page_name' : 'wizards',
                        'title' : 'Wizards',
                        'sub_menu' : {
                            'wizard-layout-1' : {
                                'icon' : '',
                                'layout' : 'side-menu',
                                'page_name' : 'wizard-layout-1',
                                'title' : 'Layout 1'
                            },
                            'wizard-layout-2' : {
                                'icon' : '',
                                'layout' : 'side-menu',
                                'page_name' : 'wizard-layout-2',
                                'title' : 'Layout 2'
                            },
                            'wizard-layout-3' : {
                                'icon' : '',
                                'layout' : 'side-menu',
                                'page_name' : 'wizard-layout-3',
                                'title' : 'Layout 3'
                            }
                        }
                    },
                    'blog' : {
                        'icon' : '',
                        'page_name' : 'blog',
                        'title' : 'Blog',
                        'sub_menu' : {
                            'blog-layout-1' : {
                                'icon' : '',
                                'layout' : 'side-menu',
                                'page_name' : 'blog-layout-1',
                                'title' : 'Layout 1'
                            },
                            'blog-layout-2' : {
                                'icon' : '',
                                'layout' : 'side-menu',
                                'page_name' : 'blog-layout-2',
                                'title' : 'Layout 2'
                            },
                            'blog-layout-3' : {
                                'icon' : '',
                                'layout' : 'side-menu',
                                'page_name' : 'blog-layout-3',
                                'title' : 'Layout 3'
                            }
                        }
                    },
                    'pricing' : {
                        'icon' : '',
                        'page_name' : 'pricing',
                        'title' : 'Pricing',
                        'sub_menu' : {
                            'pricing-layout-1' : {
                                'icon' : '',
                                'layout' : 'side-menu',
                                'page_name' : 'pricing-layout-1',
                                'title' : 'Layout 1'
                            },
                            'pricing-layout-2' : {
                                'icon' : '',
                                'layout' : 'side-menu',
                                'page_name' : 'pricing-layout-2',
                                'title' : 'Layout 2'
                            }
                        }
                    },
                    'invoice' : {
                        'icon' : '',
                        'page_name' : 'invoice',
                        'title' : 'Invoice',
                        'sub_menu' : {
                            'invoice-layout-1' : {
                                'icon' : '',
                                'layout' : 'side-menu',
                                'page_name' : 'invoice-layout-1',
                                'title' : 'Layout 1'
                            },
                            'invoice-layout-2' : {
                                'icon' : '',
                                'layout' : 'side-menu',
                                'page_name' : 'invoice-layout-2',
                                'title' : 'Layout 2'
                            }
                        }
                    },
                    'faq' : {
                        'icon' : '',
                        'page_name' : 'faq',
                        'title' : 'FAQ',
                        'sub_menu' : {
                            'faq-layout-1' : {
                                'icon' : '',
                                'layout' : 'side-menu',
                                'page_name' : 'faq-layout-1',
                                'title' : 'Layout 1'
                            },
                            'faq-layout-2' : {
                                'icon' : '',
                                'layout' : 'side-menu',
                                'page_name' : 'faq-layout-2',
                                'title' : 'Layout 2'
                            },
                            'faq-layout-3' : {
                                'icon' : '',
                                'layout' : 'side-menu',
                                'page_name' : 'faq-layout-3',
                                'title' : 'Layout 3'
                            }
                        }
                    },
                    'login' : {
                        'icon' : '',
                        'layout' : 'login',
                        'page_name' : 'login',
                        'title' : 'Login'
                    },
                    'register' : {
                        'icon' : '',
                        'layout' : 'login',
                        'page_name' : 'register',
                        'title' : 'Register'
                    },
                    'error-page' : {
                        'icon' : '',
                        'layout' : 'main',
                        'page_name' : 'error-page',
                        'title' : 'Error Page'
                    },
                    'update-profile' : {
                        'icon' : '',
                        'layout' : 'side-menu',
                        'page_name' : 'update-profile',
                        'title' : 'Update profile'
                    },
                    'change-password' : {
                        'icon' : '',
                        'layout' : 'side-menu',
                        'page_name' : 'change-password',
                        'title' : 'Change Password'
                    }
                }
            },
            'devider' : any,
            'components' : {
                'icon' : 'inbox',
                'page_name' : 'components',
                'title' : 'Components',
                'sub_menu' : {
                    'grid' : {
                        'icon' : '',
                        'page_name' : 'grid',
                        'title' : 'Grid',
                        'sub_menu' : {
                            'regular-table' : {
                                'icon' : '',
                                'layout' : 'side-menu',
                                'page_name' : 'regular-table',
                                'title' : 'Regular Table'
                            },
                            'tabulator' : {
                                'icon' : '',
                                'layout' : 'side-menu',
                                'page_name' : 'tabulator',
                                'title' : 'Tabulator'
                            }
                        }
                    },
                    'accordion' : {
                        'icon' : '',
                        'layout' : 'side-menu',
                        'page_name' : 'accordion',
                        'title' : 'Accordion'
                    },
                    'button' : {
                        'icon' : '',
                        'layout' : 'side-menu',
                        'page_name' : 'button',
                        'title' : 'Button'
                    },
                    'modal' : {
                        'icon' : '',
                        'layout' : 'side-menu',
                        'page_name' : 'modal',
                        'title' : 'Modal'
                    },
                    'alert' : {
                        'icon' : '',
                        'layout' : 'side-menu',
                        'page_name' : 'alert',
                        'title' : 'Alert'
                    },
                    'progress-bar' : {
                        'icon' : '',
                        'layout' : 'side-menu',
                        'page_name' : 'progress-bar',
                        'title' : 'Progress Bar'
                    },
                    'tooltip' : {
                        'icon' : '',
                        'layout' : 'side-menu',
                        'page_name' : 'tooltip',
                        'title' : 'Tooltip'
                    },
                    'dropdown' : {
                        'icon' : '',
                        'layout' : 'side-menu',
                        'page_name' : 'dropdown',
                        'title' : 'Dropdown'
                    },
                    'toast' : {
                        'icon' : '',
                        'layout' : 'side-menu',
                        'page_name' : 'toast',
                        'title' : 'Toast'
                    },
                    'typography' : {
                        'icon' : '',
                        'layout' : 'side-menu',
                        'page_name' : 'typography',
                        'title' : 'Typography'
                    },
                    'icon' : {
                        'icon' : '',
                        'layout' : 'side-menu',
                        'page_name' : 'icon',
                        'title' : 'Icon'
                    },
                    'loading-icon' : {
                        'icon' : '',
                        'layout' : 'side-menu',
                        'page_name' : 'loading-icon',
                        'title' : 'Loading Icon'
                    }
                }
            },
            'forms' : {
                'icon' : 'sidebar',
                'page_name' : 'forms',
                'title' : 'Forms',
                'sub_menu' : {
                    'regular-form' : {
                        'icon' : '',
                        'layout' : 'side-menu',
                        'page_name' : 'regular-form',
                        'title' : 'Regular Form'
                    },
                    'datepicker' : {
                        'icon' : '',
                        'layout' : 'side-menu',
                        'page_name' : 'datepicker',
                        'title' : 'Datepicker'
                    },
                    'tail-select' : {
                        'icon' : '',
                        'layout' : 'side-menu',
                        'page_name' : 'tail-select',
                        'title' : 'Tail Select'
                    },
                    'file-upload' : {
                        'icon' : '',
                        'layout' : 'side-menu',
                        'page_name' : 'file-upload',
                        'title' : 'File Upload'
                    },
                    'wysiwyg-editor' : {
                        'icon' : '',
                        'layout' : 'side-menu',
                        'page_name' : 'wysiwyg-editor',
                        'title' : 'Wysiwyg Editor'
                    },
                    'validation' : {
                        'icon' : '',
                        'layout' : 'side-menu',
                        'page_name' : 'validation',
                        'title' : 'Validation'
                    }
                }
            },
            'widgets' : {
                'icon' : 'hard-drive',
                'page_name' : 'widgets',
                'title' : 'Widgets',
                'sub_menu' : {
                    'chart' : {
                        'icon' : '',
                        'layout' : 'side-menu',
                        'page_name' : 'chart',
                        'title' : 'Chart'
                    },
                    'slider' : {
                        'icon' : '',
                        'layout' : 'side-menu',
                        'page_name' : 'slider',
                        'title' : 'Slider'
                    },
                    'image-zoom' : {
                        'icon' : '',
                        'layout' : 'side-menu',
                        'page_name' : 'image-zoom',
                        'title' : 'Image Zoom'
                    }
                }
            }
        };
  }
}
</script>