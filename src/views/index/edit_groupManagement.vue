/*
 * @Author: lf
 * @Date: 2018-12-19 17:20:31
 * @Last Modified by: lf
 * @Last Modified time: 2018-12-20 11:48:44
 * @文件说明:团购管理_设置
 */
<template>
    <div class="edit_groupManagement">
        <div class="edit">
            <div class="edit_title">
                <div class="edit_title_left">编辑团购详情</div>
                <div class="edit_title_right">
                    <p class="edit_title_right_text">退出</p>
                    <img class="edit_title_right_img" src="../../assets/images/quit.png" alt="">
                </div>
            </div>
            <div class="edit_content">
                <div class="edit_content_">
                    <div class="edit_content_name">
                        <div class="edit_content_title">团购名称</div>
                        <div class="edit_content_content">
                            <input class="edit_content_content_input" type="text">
                        </div>
                    </div>
                    <div class="edit_content_name">
                        <div class="edit_content_title">价格</div>
                        <div class="edit_content_content">
                            <input class="edit_content_content_input" type="number">
                        </div>
                    </div>
                    <div class="edit_content_name">
                        <div class="edit_content_title">有效期</div>
                        <div class="edit_content_content">
                            <div class="block">
                                <el-date-picker v-model="value1" type="date" placeholder="开始时间">
                                </el-date-picker>
                            </div>
                            <p>~</p>
                            <div class="block">
                                <el-date-picker v-model="value1" type="date" placeholder="结束时间">
                                </el-date-picker>
                            </div>
                        </div>
                    </div>
                    <div class="edit_content_name">
                        <div class="edit_content_title">每人限购次数</div>
                        <div class="edit_content_content"></div>
                    </div>
                    <div class="edit_content_name">
                        <div class="edit_content_title">市场价</div>
                        <div class="edit_content_content"></div>
                    </div>
                    <div class="edit_content_name">
                        <div class="edit_content_title">优惠券购买</div>
                        <div class="edit_content_content"></div>
                    </div>
                    <div class="edit_content_name">
                        <div class="edit_content_title">赠送优惠券</div>
                        <div class="edit_content_content"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'edit_groupManagement',
        data() {
            return {
                pickerOptions1: {
                    disabledDate(time) {
                        return time.getTime() > Date.now()
                    },
                    shortcuts: [
                        {
                            text: '今天',
                            onClick(picker) {
                                picker.$emit('pick', new Date())
                            }
                        },
                        {
                            text: '昨天',
                            onClick(picker) {
                                const date = new Date()
                                date.setTime(date.getTime() - 3600 * 1000 * 24)
                                picker.$emit('pick', date)
                            }
                        },
                        {
                            text: '一周前',
                            onClick(picker) {
                                const date = new Date()
                                date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
                                picker.$emit('pick', date)
                            }
                        }
                    ]
                },
                value1: ''
                // value2: ''
            }
        },
        created() {
            this.$getItem('editObj')
            // console.log(JSON.parse(sessionStorage.getItem('editObj')))
        }
    }
</script>
<style lang="scss" scoped>
    .edit_groupManagement {
        .edit {
            width: 83.7vw;
            min-height: calc(100vh - 6.97vw);
            border-radius: 0.42vw 0.42vw 0 0;
            background-color: #f7f7f7;
            .edit_title {
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 5vw;
                border-radius: 0.42vw 0.42vw 0 0;
                background-color: #fff;
                .edit_title_left {
                    color: #333;
                    font-size: 1.67vw;
                    font-weight: 900;
                    margin-left: 2.08vw;
                }
                .edit_title_right {
                    display: flex;
                    align-items: center;
                    margin-right: 2.08vw;
                    .edit_title_right_text {
                        color: #666;
                        font-size: 1.41vw;
                        font-weight: 700;
                        margin-right: 0.42vw;
                    }
                    .edit_title_right_img {
                        width: 1.67vw;
                        height: 1.7vw;
                        margin-top: 0.2vw;
                    }
                }
            }
            .edit_content {
                margin: 2.08vw;
                .edit_content_ {
                    .edit_content_name {
                        display: flex;
                        align-items: center;
                        margin-bottom: 0.42vw;
                        .edit_content_title {
                            width: 6.77vw;
                            text-align: right;
                            margin-right: 1.3vw;
                        }
                        .edit_content_content {
                            display: flex;
                            align-items: center;
                            width: 36.25vw;
                            .edit_content_content_input {
                                width: 34.45vw;
                                height: 3.33vw;
                                border: 1px solid #e6e6e6;
                                border-radius: 0.21vw;
                                outline: none;
                                padding: 0 0.9vw;
                            }
                            // .block {
                            .el-input--prefix .el-input__inner {
                                height: 3.33vw;
                            }
                            // }
                        }
                    }
                }
            }
        }
    }
</style>
