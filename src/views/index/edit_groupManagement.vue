/*
 * @Author: lf
 * @Date: 2018-12-19 17:20:31
 * @Last Modified by: lf
 * @Last Modified time: 2018-12-22 16:40:07
 * @文件说明:团购管理_设置
 */
<template>
    <div class="edit_groupManagement">
        <div class="edit">
            <div class="edit_title">
                <div class="edit_title_left">编辑团购详情</div>
                <div class="edit_title_right" @click="signOutFun">
                    <p class="edit_title_right_text">退出</p>
                    <img class="edit_title_right_img" src="../../assets/images/quit.png" alt="">
                </div>
            </div>
            <div class="edit_content">
                <div class="edit_content_">
                    <div class="edit_content_name">
                        <div class="edit_content_title">团购名称</div>
                        <div class="edit_content_content">
                            <input class="edit_content_content_input" type="text" placeholder="请输入团购名称" v-model="editObj.name">
                        </div>
                    </div>
                    <div class="edit_content_name">
                        <div class="edit_content_title">价格</div>
                        <div class="edit_content_content">
                            <input class="edit_content_content_input" type="text" placeholder="请输入价格" v-model="editObj.price">
                        </div>
                    </div>
                    <div class="edit_content_name1">
                        <div class="edit_content_title">有效期</div>
                        <div class="edit_content_content">
                            <div class="block">
                                <el-date-picker v-model="editObj.time1" type="date" placeholder="开始时间">
                                </el-date-picker>
                            </div>
                            <p class="block_zhi">~</p>
                            <div class="block">
                                <el-date-picker v-model="editObj.time2" type="date" placeholder="结束时间">
                                </el-date-picker>
                            </div>
                        </div>
                    </div>
                    <div class="edit_content_name">
                        <div class="edit_content_title">每人限购次数</div>
                        <div class="edit_content_content">
                            <div class="restrain" @click="radioType = false">
                                <img class="restrain_img" v-if="radioType" src="../../assets/images/radio.png" alt="icon">
                                <img class="restrain_img" v-else src="../../assets/images/radio_pitch.png" alt="icon">
                                <p class="restrain_text">不限购</p>
                            </div>
                            <div class="restrain" @click="radioType = true">
                                <img class="restrain_img" v-if="radioType" src="../../assets/images/radio_pitch.png" alt="icon">
                                <img class="restrain_img" v-else src="../../assets/images/radio.png" alt="icon">
                                <p class="restrain_text">限购</p>
                            </div>
                            <div class="restrain_choice" v-if="!radioType" @click="degreeFun">
                                <p>{{degreeText}}</p>
                                <img class="restrain_choice_img" src="../../assets/images/top_arrow.png" alt="icon" v-if="!degreeType">
                                <img class="restrain_choice_img" src="../../assets/images/top_arrowa.png" alt="icon" v-else>
                                <div class="degree" v-if="degreeType">
                                    <p class="degree_text" v-for="i in degrees" :key="i.name" @click="degreeTextFun(i)">{{i.name}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="edit_content_name">
                        <div class="edit_content_title">市场价</div>
                        <div class="edit_content_content">
                            <input class="edit_content_content_input" type="number" placeholder="请输入市场价"></div>
                    </div>
                    <div class="edit_content_name">
                        <div class="edit_content_title">优惠券购买</div>
                        <div class="edit_content_content">
                            <div class="restrain" @click="allowType=false">
                                <img class="restrain_img" v-if="allowType" src="../../assets/images/radio.png" alt="icon">
                                <img class="restrain_img" v-else src="../../assets/images/radio_pitch.png" alt="icon">
                                <p class="restrain_text">不允许</p>
                            </div>
                            <div class="restrain" @click="allowType=true">
                                <img class="restrain_img" v-if="allowType" src="../../assets/images/radio_pitch.png" alt="icon">
                                <img class="restrain_img" v-else src="../../assets/images/radio.png" alt="icon">
                                <p class="restrain_text">允许</p>
                            </div>
                        </div>
                    </div>
                    <div class="buy_checkbox" v-if="allowType">
                        <div class="buy_checkbox_" @click="platformFun">
                            <img class="buy_checkbox_img" v-if="platformType" src="../../assets/images/checkbox.png" alt="icon">
                            <img class="buy_checkbox_img" v-else src="../../assets/images/checkbox_pitch.png" alt="icon">
                            <p class="buy_checkbox_text">平台通用优惠券</p>
                        </div>
                        <div class="buy_checkbox_" @click="sellerFun">
                            <img class="buy_checkbox_img" v-if="sellerType" src="../../assets/images/checkbox.png" alt="icon">
                            <img class="buy_checkbox_img" v-else src="../../assets/images/checkbox_pitch.png" alt="icon">
                            <p class="buy_checkbox_text">商家优惠券</p>
                        </div>
                    </div>
                    <div class="edit_content_name">
                        <div class="edit_content_title">赠送优惠券</div>
                        <div class="edit_content_content">
                            <div class="restrain" @click="giveType=false">
                                <img class="restrain_img" v-if="giveType" src="../../assets/images/radio.png" alt="icon">
                                <img class="restrain_img" v-else src="../../assets/images/radio_pitch.png" alt="icon">
                                <p class="restrain_text">不赠送</p>
                            </div>
                            <div class="restrain" @click="giveType=true">
                                <img class="restrain_img" v-if="giveType" src="../../assets/images/radio_pitch.png" alt="icon">
                                <img class="restrain_img" v-else src="../../assets/images/radio.png" alt="icon">
                                <p class="restrain_text">赠送</p>
                            </div>
                            <div class="restrain_choice1" v-if="giveType" @click="couponFun">
                                <p>选择优惠券</p>
                                <img class="restrain_choice_img" src="../../assets/images/top_arrow.png" alt="icon" v-if="!couponType">
                                <img class="restrain_choice_img" src="../../assets/images/top_arrowa.png" alt="icon" v-else>
                            </div>
                            <div class="coupon" v-if="couponType">
                                <p class="coupon_title">请选择优惠券</p>
                                <div class="coupon_content">
                                    <div class="coupon_content_" v-for="(h,index) in coupons" :key="index" @click="couponContentFun(h)">
                                        <img class="coupon_content_checkbox" src="../../assets/images/checkbox.png" v-if="!h.pitch">
                                        <img class="coupon_content_checkbox" src="../../assets/images/checkbox_pitch.png" v-else>
                                        <div class="coupon_content_coup">
                                            <div class="coupon_content_coup_image" :style="{backgroundImage:'url('+require('../../assets/images/'+h.image+'.png')}"></div>
                                            <div>
                                                <p class="coupon_content_coup_title">{{h.name}}</p>
                                                <p class="coupon_content_coup_text">{{h.text}}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="coupon_button">
                                    <div class="coupon_button_cancel">取消</div>
                                    <div class="coupon_button_sure">确定</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="line"></div>
                <div class="imageText">
                    <div class="imageText_title">图文描述</div>
                    <div class="imageText_richText" ref="editorElem1"></div>
                </div>
                <div class="line"></div>
                <div class="imageText">
                    <div class="imageText_title">购买须知</div>
                    <div class="imageText_richText" ref="editorElem2"></div>
                </div>
                <div class="line"></div>
                <div class="release" @click="$router.push('/index/groupManagement')">
                    <img class="release_img" src="../../assets/images/release.png">
                    <p class="release_text">发布</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import E from 'wangeditor'
    export default {
        name: 'edit_groupManagement',
        data() {
            return {
                //需要修改的数据
                editObj: {},
                coupons: [
                    {
                        pitch: false,
                        image: 'couponImage',
                        name: '雪人火锅满200减30',
                        text: '有效期：2017.08.10-2017.09.10'
                    },
                    {
                        pitch: true,
                        image: 'couponImage',
                        name: '雪人火锅满200减30',
                        text: '有效期：2017.08.10-2017.09.10'
                    },
                    {
                        pitch: false,
                        image: 'couponImage',
                        name: '雪人火锅满200减30',
                        text: '有效期：2017.08.10-2017.09.10'
                    },
                    {
                        pitch: true,
                        image: 'couponImage',
                        name: '雪人火锅满200减30',
                        text: '有效期：2017.08.10-2017.09.10'
                    },
                    {
                        pitch: false,
                        image: 'couponImage',
                        name: '雪人火锅满200减30',
                        text: '有效期：2017.08.10-2017.09.10'
                    },
                    {
                        pitch: true,
                        image: 'couponImage',
                        name: '雪人火锅满200减30',
                        text: '有效期：2017.08.10-2017.09.10'
                    }
                ],
                couponType: false,
                //是否赠送优惠券|默认赠送
                giveType: true,
                //平台通用优惠券复选框默认未选中
                platformType: true,
                //商家优惠券复选框默认未选中
                sellerType: true,
                //是否允许购买优惠券|默认允许
                allowType: true,
                // 点击限购次数框是否出现次数下拉框
                degreeType: false,
                // 限购次数下拉框
                degrees: [
                    {
                        pitch: true,
                        name: '1次'
                    },
                    {
                        pitch: false,
                        name: '2次'
                    },
                    {
                        pitch: false,
                        name: '5次'
                    },
                    {
                        pitch: false,
                        name: '10次'
                    },
                    {
                        pitch: false,
                        name: '20次'
                    }
                ],
                // 是否限购|默认限购
                radioType: false,
                // 限购次数框默认次数
                degreeText: '1次'
            }
        },
        methods: {
            /**
             * post的传参
             * {
             *      name:this.editObj.name
             *      price:this.editObj.price,
             *      time1:this.editObj.time1,
             *      time2:this.editObj.time2,
             *      yhq:1
             * }
             *
             * this.editObj
             *
             * {
             *      ...this.editObj,
             *      yhq:1,
             * }
             * {
             * get的传参
             *  parmas:{
             *      name:'dasd'
             * }
             * }
             */
            //退出事件
            signOutFun() {
                this.$router.push('/index/groupManagement')
            },
            //点击下拉限购次数事件
            degreeFun() {
                this.degreeType = !this.degreeType
            },
            //选择限购次数事件
            degreeTextFun(i) {
                this.degrees.map(val => {
                    val.pitch = false
                })
                i.pitch = true
                this.degreeText = i.name
            },
            //平台通用优惠券复选框事件
            platformFun() {
                this.platformType = !this.platformType
            },
            //商家优惠券复选框事件
            sellerFun() {
                this.sellerType = !this.sellerType
            },
            //点击出现优惠券选择框
            couponFun() {
                this.couponType = !this.couponType
            },
            //选择优惠券事件
            couponContentFun(h) {
                h.pitch = !h.pitch
            }
        },
        created() {
            this.editObj = this.$getItem('editObj')
            // console.log(JSON.parse(sessionStorage.getItem('editObj')))
        },
        mounted() {
            let editor1 = new E(this.$refs.editorElem1)
            editor1.create()
            let editor2 = new E(this.$refs.editorElem2)
            editor2.create()
        }
    }
</script>
<style lang="scss">
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
                    cursor: pointer;
                    user-select: none;
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
                padding: 2.08vw;
                .edit_content_ {
                    width: 43.55vw;
                    .edit_content_name {
                        display: flex;
                        align-items: center;
                        margin-bottom: 0.42vw;
                        .edit_content_title {
                            width: 6vw;
                            text-align: right;
                            margin-right: 1.3vw;
                        }
                        .edit_content_content {
                            position: relative;
                            display: flex;
                            align-items: center;
                            .edit_content_content_input {
                                width: 34.45vw;
                                height: 3.33vw;
                                border: 1px solid #e6e6e6;
                                border-radius: 0.21vw;
                                outline: none;
                                padding: 0 0.9vw;
                                &::-webkit-input-placeholder {
                                    color: #ccc;
                                }
                            }
                            .restrain {
                                display: flex;
                                align-items: center;
                                height: 3.33vw;
                                margin-right: 2vw;
                                cursor: pointer;
                                user-select: none;
                                .restrain_img {
                                    width: 1.1vw;
                                    height: 1.1vw;
                                    margin-right: 0.42vw;
                                }
                                .restrain_text {
                                    color: #999;
                                }
                            }
                            .restrain_choice,
                            .restrain_choice1 {
                                position: relative;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                width: 5.57vw;
                                height: 3.33vw;
                                border: 1px solid #e6e6e6;
                                border-radius: 0.21vw;
                                background-color: #fff;
                                margin-left: 0.42vw;
                                cursor: pointer;
                                user-select: none;
                                .restrain_choice_img {
                                    width: 0.78vw;
                                    height: 0.42vw;
                                    margin-left: 0.42vw;
                                }
                                .degree {
                                    position: absolute;
                                    top: 3.33vw;
                                    z-index: 10002;
                                    width: 5.57vw;
                                    text-align: center;
                                    line-height: 2.5vw;
                                    border: 1px solid #e6e6e6;
                                    background-color: #fff;
                                    cursor: pointer;
                                    user-select: none;
                                    .degree_text {
                                        width: 4vw;
                                        height: 2.5vw;
                                        margin: 0 auto;
                                        border-bottom: 1px solid #f7f7f7;
                                    }
                                    .degree_text:hover {
                                        width: 5.57vw;
                                        background-color: #0e4b4a;
                                        color: #fff;
                                    }
                                }
                            }
                            .restrain_choice1 {
                                width: 11.1vw;
                            }
                            .coupon {
                                position: absolute;
                                top: 0;
                                left: 24vw;
                                z-index: 10002;
                                width: 23.49vw;
                                height: 31.82vw;
                                border-radius: 0.42vw;
                                background-color: #fff;
                                box-shadow: 0px 0px 40px 0px rgba(35, 35, 35, 0.1);
                                .coupon_title {
                                    height: 4.32vw;
                                    font-size: 1.5vw;
                                    color: #666;
                                    text-align: center;
                                    line-height: 4.32vw;
                                    border-bottom: 1px solid #f7f7f7;
                                }
                                .coupon_content {
                                    height: 19.24vw;
                                    margin: 1.22vw 0;
                                    overflow: auto;
                                    &::-webkit-scrollbar {
                                        width: 1vw;
                                        height: 1vw;
                                    }
                                    .coupon_content_ {
                                        display: flex;
                                        justify-content: center;
                                        align-items: center;
                                        margin: 0.44vw 0;
                                        cursor: pointer;
                                        user-select: none;
                                        .coupon_content_checkbox {
                                            margin-right: 0.88vw;
                                        }
                                        .coupon_content_coup {
                                            display: flex;
                                            justify-content: center;
                                            align-items: center;
                                            width: 18.59vw;
                                            height: 4.17vw;
                                            border: 1px solid #ccc;
                                            border-radius: 0.21vw;
                                            .coupon_content_coup_image {
                                                width: 3.33vw;
                                                height: 3.33vw;
                                                background-image: url('../../assets/images/couponImage.png');
                                                background-size: cover;
                                                border-radius: 0.16vw;
                                                margin-right: 0.78vw;
                                            }
                                            .coupon_content_coup_title {
                                                font-size: 1.1vw;
                                                color: #666;
                                                font-weight: 700;
                                            }
                                            .coupon_content_coup_text {
                                                font-size: 0.83vw;
                                                color: #999;
                                                white-space: nowrap;
                                            }
                                        }
                                    }
                                }
                                .coupon_button {
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                    height: 5.78vw;
                                    border-top: 1px solid #f7f7f7;
                                    cursor: pointer;
                                    user-select: none;
                                    .coupon_button_cancel,
                                    .coupon_button_sure {
                                        width: 6.82vw;
                                        height: 3.33vw;
                                        font-size: 1.4vw;
                                        font-weight: 900;
                                        border-radius: 0.26vw;
                                        text-align: center;
                                        line-height: 3.33vw;
                                        margin: 0 1.04vw;
                                        color: #333;
                                        background-color: #ccc;
                                    }
                                    .coupon_button_sure {
                                        background-color: #0e4b4a;
                                        color: #ebc5a1;
                                    }
                                }
                            }
                        }
                    }
                    .edit_content_name1 {
                        display: flex;
                        align-items: center;
                        margin-bottom: 0.42vw;
                        .edit_content_title {
                            width: 6vw;
                            text-align: right;
                            margin-right: 1.3vw;
                        }
                        .edit_content_content {
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            width: 36.25vw;
                            .el-input--prefix .el-input__inner {
                                width: 14.74vw;
                                height: 3.33vw;
                                border-radius: 0.21vw;
                                margin-right: none;
                            }
                            .el-date-editor.el-input,
                            .el-date- {
                                width: auto;
                            }
                            .el-input__icon {
                                line-height: normal;
                            }
                            .block_zhi {
                                font-size: 1.4vw;
                                color: #666;
                            }
                        }
                    }
                    .buy_checkbox {
                        display: flex;
                        margin: -1vw 0 0.3vw 7.3vw;
                        .buy_checkbox_ {
                            display: flex;
                            align-items: center;
                            margin-right: 2vw;
                            .buy_checkbox_img {
                                width: 1.1vw;
                                height: 1.1vw;
                                margin-right: 0.42vw;
                            }
                            .buy_checkbox_text {
                                color: #999;
                            }
                        }
                    }
                }
                .line {
                    height: 0.15vw;
                    background-color: #f0f0f0;
                    margin: 2.08vw 0;
                }
                .imageText {
                    display: flex;
                    .imageText_title {
                        width: 6vw;
                        text-align: right;
                        margin-right: 1.3vw;
                    }
                    .imageText_richText {
                        width: 70vw;
                        height: 22.8vw;
                    }
                }
                .release {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 11.1vw;
                    height: 3.33vw;
                    background-color: #0e4b4a;
                    border-radius: 0.42vw;
                    margin-left: 7.3vw;
                    cursor: pointer;
                    user-select: none;
                    .release_img {
                        width: 1.51vw;
                        height: 1.51vw;
                        margin-right: 0.42vw;
                    }
                    .release_text {
                        color: #ebc5a0;
                        font-size: 1.4vw;
                        font-weight: 900;
                    }
                }
            }
        }
    }
</style>
