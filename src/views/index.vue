/*
 * @Author: lf
 * @Date: 2018-12-13 15:39:09
 * @Last Modified by: lf
 * @Last Modified time: 2018-12-15 01:15:45
 * @文件说明: 侧边栏、顶部栏公用页面+子路由渲染
 */
<template>
    <div class="index">
        <div class="top">
            <div class="name">
                <img class="name_logo" src="../assets/images/logo.png" alt="LOGO">
                <span class="name_title">商家管理平台</span>
            </div>
            <div class="private">
                <img class="private_head" src="../assets/images/head.png" alt="icon">
                <div>
                    <p class="private_name">味真鲜餐饮有限公司</p>
                    <p class="private_job">管理员</p>
                </div>
                <img class="private_down" src="../assets/images/down.png" alt="icon">
            </div>
            <div class="news">
                <img class="news_img" src="../assets/images/news.png" alt="icon">
            </div>
        </div>
        <div class="sidebar">
            <div class="sidebar_bg" v-for="(i,index) in sidebar" :key="index">
                <div class="sidebar_menu" @click="sidebar_menuFun(i,index)" :class="{sidebar_menu1:index===currIndex&&i.icon1}">
                    <div class="sidebar_left">
                        <img class="sidebar_img" :src="require('../assets/images/'+i.icon1+'.png')" alt="icon" v-if="index===currIndex&&i.icon1">
                        <img class="sidebar_img" :src="require('../assets/images/'+i.icon+'.png')" alt="icon" v-else>
                        <div class="sidebar_title">{{i.name}}</div>
                    </div>
                    <img class="sidebar_icon" v-if="i.open&&i.children" src="../assets/images/jianIcon.png" alt="icon">
                    <img class="sidebar_icon" v-else-if="i.children" src="../assets/images/addIcon.png" alt="icon">
                </div>
                <template v-if="i.open">
                    <div class="sublist" v-for="h in i.children" :key="h.name" @click="childrenFun(h,index)" :class="{sublist1:h.selection1}">
                        <div class="sublist_spot"></div>
                        <div class="sublist_name"> {{h.name1}} </div>
                    </div>
                </template>
            </div>
        </div>
        <router-view class="routerView"></router-view>
    </div>
</template>
<script>
    export default {
        name: 'index',
        data() {
            return {
                currIndex: 0,
                // JSON [{},{},{}]
                sidebar: [
                    {
                        // 图标
                        icon: 'homepage',
                        icon1: 'homepage_pitch',
                        // 菜单中文名
                        name: '主页'
                        //菜单是否选中
                    },
                    {
                        // 图标
                        icon: 'daily',
                        // 菜单中文名
                        name: '日常管理',
                        // 子菜单是否展开
                        open: false,
                        // 子菜单
                        children: [
                            {
                                name1: '团购管理',
                                // 子菜单是否选中
                                selection1: false
                            }
                        ]
                    },
                    {
                        // 图标
                        icon: 'homepage',
                        icon1: 'homepage_pitch',
                        // 菜单中文名
                        name: '主页1'
                    },
                    {
                        // 图标
                        icon: 'daily',
                        // 菜单中文名
                        name: '日常管理1',
                        // 子菜单是否展开
                        open: false,
                        // 子菜单
                        children: [
                            {
                                name1: '团购管理',
                                // 子菜单是否选中
                                selection1: false
                            }
                        ]
                    },
                    {
                        // 图标
                        icon: 'homepage',
                        icon1: 'homepage_pitch',
                        // 菜单中文名
                        name: '主页'
                        //菜单是否选中
                    },
                    {
                        // 图标
                        icon: 'daily',
                        // 菜单中文名
                        name: '日常管理',
                        // 子菜单是否展开
                        open: false,
                        // 子菜单
                        children: [
                            {
                                name1: '团购管理',
                                // 子菜单是否选中
                                selection1: false
                            }
                        ]
                    },
                    {
                        // 图标
                        icon: 'homepage',
                        icon1: 'homepage_pitch',
                        // 菜单中文名
                        name: '主页1'
                    },
                    {
                        // 图标
                        icon: 'daily',
                        // 菜单中文名
                        name: '日常管理1',
                        // 子菜单是否展开
                        open: false,
                        // 子菜单
                        children: [
                            {
                                name1: '团购管理',
                                // 子菜单是否选中
                                selection1: false
                            }
                        ]
                    },
                    {
                        // 图标
                        icon: 'homepage',
                        icon1: 'homepage_pitch',
                        // 菜单中文名
                        name: '主页'
                        //菜单是否选中
                    },
                    {
                        // 图标
                        icon: 'daily',
                        // 菜单中文名
                        name: '日常管理',
                        // 子菜单是否展开
                        open: false,
                        // 子菜单
                        children: [
                            {
                                name1: '团购管理',
                                // 子菜单是否选中
                                selection1: false
                            }
                        ]
                    },
                    {
                        // 图标
                        icon: 'homepage',
                        icon1: 'homepage_pitch',
                        // 菜单中文名
                        name: '主页1'
                    },
                    {
                        // 图标
                        icon: 'daily',
                        // 菜单中文名
                        name: '日常管理1',
                        // 子菜单是否展开
                        open: false,
                        // 子菜单
                        children: [
                            {
                                name1: '团购管理',
                                // 子菜单是否选中
                                selection1: false
                            }
                        ]
                    }
                ],
                tableData: [
                    {
                        sn: '1',
                        price: '100'
                    },
                    {
                        sn: '2',
                        price: '200'
                    }
                ],
                currPage: 1
            }
        },
        methods: {
            nextPage() {
                this.currPage++
                this.tableData = [
                    {
                        sn: '3',
                        price: '300'
                    },
                    {
                        sn: '4',
                        price: '400'
                    }
                ]
            },
            sidebar_menuFun(i, index) {
                if (i.children) {
                    i.open = !i.open
                } else {
                    this.childrenFun(null, index)
                    // this.currIndex = index
                    // this.sidebar.map(val => {
                    //     if (val.children) {
                    //         val.open = false
                    //         val.children.map(c => {
                    //             c.selection1 = false
                    //         })
                    //     }
                    // })
                }
            },
            childrenFun(h, index) {
                this.currIndex = index
                this.sidebar.forEach((val, _index) => {
                    if (val.children) {
                        if (index !== _index) val.open = false
                        val.children.map(c => {
                            c.selection1 = false
                        })
                    }
                })
                if (h) h.selection1 = true
            }
        }
    }
</script>
<style lang="scss" scoped>
    .index {
        .top {
            position: fixed;
            top: 0;
            left: 0;
            display: flex;
            height: 5.57vw;
            .name {
                display: flex;
                align-items: center;
                width: 76.09vw;
                background-color: #fff;
                .name_logo {
                    width: 11.09vw;
                    margin: 0 2.08vw;
                }
                .name_title {
                    font-size: 2.08vw;
                    color: #e6be96;
                    // font-family: 'FZLTHK--GBK1-0';
                }
            }
            .private {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 18.07vw;
                background-color: #fff;
                margin: 0 0.1vw;
                .private_head {
                    width: 2.24vw;
                    height: 2.24vw;
                    margin-right: 0.68vw;
                }
                .private_name {
                    color: #666;
                    font-weight: 700;
                }
                .private_job {
                    font-size: 0.83vw;
                    color: #148cdc;
                }
                .private_down {
                    width: 1vw;
                    height: 0.625vw;
                    margin-left: 2.08vw;
                }
            }
            .news {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 5.66vw;
                background-color: #fff;
                .news_img {
                    width: 2.08vw;
                    height: 1.51vw;
                }
            }
        }
        .sidebar {
            position: fixed;
            top: 5.57vw;
            left: 0;
            width: 13.18vw;
            height: 100vh;
            background-color: #0a3737;
            user-select: none;
            overflow: auto;
            &::-webkit-scrollbar {
                /*滚动条整体样式*/
                width: 0px; /*高宽分别对应横竖滚动条的尺寸*/
                height: 0px;
            }
            .sidebar_bg {
                .sidebar_menu {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 13.18vw;
                    height: 5.57vw;
                    background-color: #0e4b4a;
                    margin-bottom: 0.1vw;
                    .sidebar_left {
                        display: flex;
                        align-items: center;
                        .sidebar_img {
                            width: 1.25vw;
                            height: 1.25vw;
                            margin: 0 0.52vw 0 2.08vw;
                        }
                        .sidebar_title {
                            color: #f6c9a8;
                            font-size: 1.04vw;
                            font-weight: 800;
                        }
                    }
                    .sidebar_icon {
                        width: 1.09vw;
                        height: 1.09vw;
                        margin-right: 1.3vw;
                    }
                }
                .sidebar_menu1 {
                    background-color: #f6c9a8;
                    .sidebar_left {
                        .sidebar_title {
                            color: #0e4b4a;
                        }
                    }
                }
                .sublist {
                    width: 13.18vw;
                    height: 2.92vw;
                    display: flex;
                    align-items: center;
                    margin: 0.156vw 0;
                    .sublist_spot {
                        width: 0.57vw;
                        height: 0.57vw;
                        background-color: #8a7a60;
                        border-radius: 0.156vw;
                        margin: 0 0.88vw 0 2.45vw;
                    }
                    .sublist_name {
                        color: #8a7a60;
                        font-weight: 700;
                    }
                }
                .sublist1 {
                    background-color: #f4caa3;
                    .sublist_spot {
                        background-color: #0e4b4a;
                    }
                    .sublist_name1 {
                        color: #0e4b4a;
                    }
                }
            }
        }
        .routerView {
            min-height: calc(100vh - 6.97vw);
            background-color: #f0f0f0;
            padding-top: 6.97vw;
            padding-left: 14.6vw;
        }
    }
</style>
