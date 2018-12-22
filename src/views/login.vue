/*
 * @Author: lf
 * @Date: 2018-12-12 14:32:27
 * @Last Modified by: lf
 * @Last Modified time: 2018-12-21 16:06:25
 * @文件说明:登录页面
 */
<template>
    <div class="login">
        <!-- 背景 -->
        <img class="bg" src="../assets/images/bg.png">
        <!-- 背景LOGO -->
        <img class="title" src="../assets/images/title.png">
        <!-- 登录框 -->
        <div class="login_bg">
            <p class="login_title">登录</p>
            <div class="input_bg">
                <img class="input_icon" src="../assets/images/phone.png" alt="icon">
                <input type="number" placeholder="手机号" v-model="phoneType">
            </div>
            <div class="input_bg">
                <img class="input_icon" src="../assets/images/password.png" alt="icon">
                <input type="text" placeholder="密码" v-model="passwordType">
            </div>
            <div class="input_bg1">
                <div class="input_left">
                    <img class="input_icon" src="../assets/images/code.png" alt="icon">
                    <input type="text" placeholder="验证码" v-model="codeType">
                </div>
                <div class="input_right">
                    <!-- <img class="change" src="../assets/images/change_icon.png" alt="icon"> -->
                    <img class="code_img" src="../assets/images/code_img.png" alt="icon">
                </div>
            </div>
            <!-- <div class="operation">
                <div class="automatic" @click="automaticFun">
                    <div class="checkbox" :class="{checkbox_pitch:automatic1}"></div>
                    <p class="automatic_text">下次自动登录</p>
                </div>
                <p class="forget">忘记密码？</p>
            </div> -->
            <div class="button" @click="buttonFun">登录</div>
            <!-- <div class="line"></div>
            <div class="enroll">
                <p class="enroll_text">没有账号？先注册一个</p>
                <img class="enroll_img" src="../assets/images/arrow.png" alt="icon">
            </div> -->
        </div>
        <div class="bottom">
            <p class="bottom_text">© 一品天下餐饮管理有限公司</p>
            <img class="bottom_img" src="../assets/images/telephone.png" alt="icon">
            <p class="bottom_text">咨询电话：028-87654321 / 87651234</p>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'login',
        data() {
            return {
                //复选框切换：默认未选中
                automatic1: false,
                //input框：手机号码
                phoneType: '',
                //input框：密码
                passwordType: '',
                //input框：验证码
                codeType: ''
            }
        },
        methods: {
            //下次是否自动登录事件
            automaticFun() {
                this.automatic1 = !this.automatic1
            },
            //点击登录事件
            buttonFun() {
                if (this.phoneType == '') {
                    this.$message({
                        message: '请输入电话号码',
                        center: true
                    })
                } else if (!/^1[34578]\d{9}$/.test(this.phoneType)) {
                    this.$message({
                        message: '请输入正确的电话号码',
                        center: true
                    })
                } else if (this.passwordType == '') {
                    this.$message({
                        message: '请输入密码',
                        center: true
                    })
                } else if (this.passwordType != '123456') {
                    this.$message({
                        message: '请输入正确的密码',
                        center: true
                    })
                } else if (this.codeType == '') {
                    this.$message({
                        message: '请输入验证码',
                        center: true
                    })
                } else if (this.codeType != 'ktlu') {
                    this.$message({
                        message: '请输入正确的验证码',
                        center: true
                    })
                } else {
                    this.$router.push('/index/index1')
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    .login {
        .bg {
            width: 100vw;
            height: 38.18vw;
        }
        .title {
            position: absolute;
            top: 13.33vw;
            left: 28.44vw;
            width: 16.35vw;
        }
        .login_bg {
            position: absolute;
            top: 10.31vw;
            left: 47.6vw;
            width: 20.75vw;
            height: 29.5vw;
            background-color: #fff;
            border-radius: 0.42vw;
            box-shadow: 0 0 2.08vw rgba(35, 35, 35, 0.1);
            padding: 2.8vw 2.8vw 0;
            .login_title {
                font-size: 2.4vw;
                color: #666;
                margin-bottom: 2.6vw;
            }
            .input_bg,
            .input_bg1 {
                display: flex;
                align-items: center;
                width: 20.83vw;
                height: 3vw;
                border: 0.1vw solid #e6e6e6;
                margin-bottom: 1.4vw;
                border-radius: 0.21vw;
                .input_icon {
                    width: 1.67vw;
                    height: 1.67vw;
                    margin: 0 0.68vw;
                }
                input {
                    width: 100%;
                    border: none;
                    outline: none;
                    &::-webkit-input-placeholder {
                        color: #ccc;
                        font-size: 0.9vw;
                    }
                }
            }
        }
        .input_bg1 {
            justify-content: space-between;
            .input_left {
                display: flex;
            }
            .input_right {
                display: flex;
                align-items: center;
                .change {
                    width: 1.14vw;
                    height: 0.94vw;
                    margin-right: 0.42vw;
                    cursor: pointer;
                }
                .code_img {
                    width: 5.83vw;
                    height: 2.45vw;
                    margin-right: 0.31vw;
                }
            }
        }
        .operation {
            display: flex;
            justify-content: space-between;
            margin-top: 0.83vw;
            .automatic {
                display: flex;
                cursor: pointer;
                user-select: none;
                .checkbox {
                    width: 1.14vw;
                    height: 1.14vw;
                    background-image: url(../assets/images/checkbox.png);
                    background-size: 100%;
                }
                .checkbox_pitch {
                    background-image: url(../assets/images/checkbox_pitch.png);
                }
                .automatic_text {
                    color: #999;
                    margin-left: 0.83vw;
                }
            }
            .forget {
                color: #148cdc;
                margin-right: -0.7vw;
                cursor: pointer;
            }
        }
        .button {
            width: 20.83vw;
            height: 3.49vw;
            background-color: #0e4b4a;
            text-align: center;
            line-height: 3.49vw;
            color: #f4caa3;
            font-size: 1.4vw;
            font-weight: 700;
            border-radius: 0.42vw;
            box-shadow: 0px 7px 27px 0px rgba(0, 0, 0, 0.2);
            margin: 3.8vw 0;
            cursor: pointer;
            user-select: none;
        }
        .line {
            width: 20.83vw;
            height: 0.05vw;
            background-color: #e6e6e6;
        }
        .enroll {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 1.77vw 0;
            .enroll_text {
                color: #999;
                cursor: pointer;
            }
            .enroll_img {
                width: 1.3vw;
                height: 1.1vw;
                cursor: pointer;
            }
        }
        .bottom {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 6.25vw;
            color: #999;
            .bottom_text {
                color: #999;
            }
            .bottom_img {
                width: 1vw;
                height: 1vw;
                margin: 0 0.36vw 0 2.03vw;
            }
        }
    }
</style>
