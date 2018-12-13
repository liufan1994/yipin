/*
 * @Author: lf
 * @Date: 2018-12-13 15:39:09
 * @Last Modified by: lf
 * @Last Modified time: 2018-12-13 22:13:41
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
            <div class="sidebar_bg" v-for="i in sidebar" :key="i.icon">
                <div class="sidebar_left">
                    <img class="sidebar_img" :src="require('../assets/images/'+i.icon+'.png')" alt="icon">
                    <div class="sidebar_title">{{i.name}}</div>
                </div>
                <img v-if="i.open" src="../assets/images/jianIcon.png" alt="icon">
                <img v-else-if="i.children" src="../assets/images/addIcon.png" alt="icon">
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
                currCode: 0,
                // JSON [{},{},{}]
                sidebar: [
                    {
                        // 图标
                        icon: 'homepage',
                        // 菜单中文名
                        name: '主页'
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
                                name: '团购管理'
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>
<style lang="scss" scoped>
    .index {
        width: 100vw;
        height: 100vh;
        background-color: #f0f0f0;
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
            .sidebar_bg {
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 13.18vw;
                height: 5.57vw;
                background-color: #0e4b4a;
                margin-bottom: 0.1vw;
                .sidebar_left {
                    display: flex;
                    .sidebar_img {
                        width: 1.25vw;
                        height: 1.25vw;
                        margin: 0 0.52vw 0 2.08vw;
                    }
                }
            }
        }
        .routerView {
            margin-top: 6vw;
            margin-left: 13.5vw;
        }
    }
</style>
