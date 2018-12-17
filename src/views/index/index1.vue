/*
 * @Author: lf
 * @Date: 2018-12-13 22:07:06
 * @Last Modified by: lf
 * @Last Modified time: 2018-12-17 21:37:38
 * @文件说明: 主页页面
 */
<template>
    <div class='index1'>
        <div class="count">
            <div class="count1">
                <div class="count1_top">
                    <img class="count1_top_icon1" src="../../assets/images/order.png" alt="icon">
                    <p class="count1_top_title">今日已完成订单</p>
                </div>
                <div class="count1_bottom"> {{order}} </div>
            </div>
            <div class="count1">
                <div class="count1_top">
                    <img class="count1_top_icon2" src="../../assets/images/bespoke.png" alt="icon">
                    <p class="count1_top_title">今日预约</p>
                </div>
                <div class="count1_bottom"> {{bespoke}} </div>
            </div>
            <div class="count1">
                <div class="count1_top">
                    <img class="count1_top_icon2" src="../../assets/images/income.png" alt="icon">
                    <p class="count1_top_title">今日收入</p>
                </div>
                <div class="count1_bottom"> {{income}} </div>
            </div>
            <div class="count1">
                <div class="count1_top">
                    <img class="count1_top_icon3" src="../../assets/images/heap.png" alt="icon">
                    <p class="count1_top_title">累积收入</p>
                </div>
                <div class="count1_bottom"> {{heap}} </div>
            </div>
        </div>
        <div class="data">
            <div class="data_top">
                <div class="data_top_left">
                    <p class="data_top_left_text">数据统计</p>
                    <img class="data_top_left_img" src="../../assets/images/notice_arrow.png" alt="icon">
                </div>
                <div class="data_top_middle">订单量</div>
                <div class="data_top_bottom">
                    <p class="data_top_bottom_text">7天</p>
                    <p class="data_top_bottom_text">14天</p>
                    <p class="data_top_bottom_text">1个月</p>
                </div>
            </div>
        </div>
        <div class="notice">
            <div class="notice_title">
                <p class="notice_title_text">系统公告</p>
                <img class="notice_title_img" src="../../assets/images/notice_arrow.png" alt="icon">
            </div>
            <div class="notice_news">
                <div class="noticeNew" v-for="i in noticeNews" :key="i.name">
                    <div class="noticeNew_left">
                        <img class="noticeNew_left_img" src="../../assets/images/notice_horn.png" alt="">
                        <div class="noticeNew_left_text"> {{i.name}}
                            <div class="details"> {{i.name}} </div>
                        </div>
                    </div>
                    <p class="noticeNew_right"> {{i.time}} </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'index1',
        data() {
            return {
                order: '67',
                bespoke: '5',
                income: '￥5855.20',
                heap: '￥699560.39',
                noticeNews: [
                    {
                        name:
                            '关于开展10月1日国庆一品CG店庆活动的通知关于开展10月1日国庆一品CG店庆活动的通知',
                        time: '2017-10-14'
                    },
                    {
                        name: '关于商户迎接环保局检查的通知',
                        time: '2017-09-29'
                    },
                    {
                        name: '关于商户迎接环保局检查的通知',
                        time: '2017-09-29'
                    }
                ]
            }
        },
        methods: {},
        created() {
            console.log(this.$route)
        }
    }
</script>

<style lang='scss' scoped>
    .index1 {
        .count {
            display: flex;
            .count1 {
                width: 18.39vw;
                height: 4.11vw;
                background-color: #fff;
                border-radius: 0.42vw;
                margin-right: 0.68vw;
                padding: 1.41vw 0 1.41vw 2.08vw;
                .count1_top {
                    display: flex;
                    align-items: center;
                    .count1_top_icon1 {
                        width: 0.99vw;
                        height: 1.09vw;
                        margin-right: 0.68vw;
                    }
                    .count1_top_icon2 {
                        width: 1.09vw;
                        height: 1.09vw;
                        margin-right: 0.68vw;
                    }
                    .count1_top_icon3 {
                        width: 1.2vw;
                        height: 1.09vw;
                        margin-right: 0.68vw;
                    }
                    .count1_top_title {
                        color: #0e4b4a;
                        font-weight: 700;
                    }
                }
                .count1_bottom {
                    font-size: 2.5vw;
                    color: #dc4678;
                    font-weight: 900;
                    margin-top: 0.2vw;
                }
            }
        }
        .data {
            height: 24.33vw;
            .data_top {
                justify-content: space-between;
                .data_top_left {
                    display: flex;
                    align-items: center;
                }
                .data_top_bottom {
                    display: flex;
                    .data_top_bottom_text {
                        width: 6.25vw;
                        height: 2.08vw;
                        background-color: #f0f0f0;
                        font-weight: 700;
                        border-radius: 0.21vw;
                        margin-right: 0.26vw;
                        text-align: center;
                        line-height: 2.08vw;
                    }
                }
            }
        }
        .notice,
        .data {
            width: 79.54vw;
            height: 23.49vw;
            background-color: #fff;
            margin-top: 1.4vw;
            border-radius: 0.42vw;
            padding: 2.08vw;
            .notice_title,
            .data_top {
                display: flex;
                align-items: center;
                margin-bottom: 2.08vw;
                .notice_title_text,
                .data_top_left_text {
                    color: #333;
                    font-weight: 700;
                    font-size: 1.67vw;
                    margin-right: 2.08vw;
                }
                .notice_title_img,
                .data_top_left_img {
                    width: 0.57vw;
                    height: 1.09vw;
                }
            }
            .notice_news {
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                .noticeNew {
                    position: relative;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 39.58vw;
                    height: 3.49vw;
                    background-color: #f7f7f7;
                    border-radius: 0.21vw;
                    cursor: pointer;
                    margin-bottom: 0.68vw;
                    .noticeNew_left {
                        display: flex;
                        align-items: center;
                        .noticeNew_left_img {
                            width: 1.2vw;
                            height: 0.99vw;
                            margin: 0 1.4vw;
                        }
                        .noticeNew_left_text {
                            width: 27.5vw;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            .details {
                                display: none;
                                position: absolute;
                                top: 3vw;
                                z-index: 10;
                                width: 25vw;
                                background-color: rgb(215, 215, 215);
                                padding: 0.4vw 1.4vw;
                                white-space: normal;
                                border-radius: 0.21vw;
                                box-shadow: 0 0 1vw rgba(35, 35, 35, 0.2);
                            }
                            &:hover .details {
                                display: block;
                            }
                        }
                    }
                    .noticeNew_right {
                        color: #999;
                        margin-right: 1.4vw;
                    }
                }
            }
        }
    }
</style>
