/*
 * @Author: lf
 * @Date: 2018-12-19 17:20:31
 * @Last Modified by: lf
 * @Last Modified time: 2018-12-19 21:27:02
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
                        <div class="edit_content_title"></div>
                        <div class="edit_content_content"></div>
                    </div>
                    <div class="edit_content_price">
                        <div class="edit_content_title"></div>
                        <div class="edit_content_content"></div>
                    </div>
                    <div class="edit_content_time">
                        <div class="edit_content_title"></div>
                        <div class="edit_content_content"></div>
                    </div>
                    <div class="edit_content_degree">
                        <div class="edit_content_title"></div>
                        <div class="edit_content_content"></div>
                    </div>
                    <div class="edit_content_value">
                        <div class="edit_content_title"></div>
                        <div class="edit_content_content"></div>
                    </div>
                    <div class="edit_content_buy">
                        <div class="edit_content_title"></div>
                        <div class="edit_content_content"></div>
                    </div>
                    <div class="edit_content_give">
                        <div class="edit_content_title"></div>
                        <div class="edit_content_content"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'edit_groupManagement'
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
                .edit_content_ {
                    .edit_content_name {
                        margin-bottom: 0.42vw;
                        .edit_content_title {
                            width: 6.77vw;
                        }
                    }
                }
            }
        }
    }
</style>
