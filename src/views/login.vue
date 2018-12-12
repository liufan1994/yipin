/*
 * @Author: lf
 * @Date: 2018-12-12 14:32:27
 * @Last Modified by: lf
 * @Last Modified time: 2018-12-12 22:15:00
 * @文件说明:登录页面
 */
<template>
    <div class="login">
        <img class="bg" src="../assets/images/bg.png">
        <img class="title" src="../assets/images/title.png">
        <div class="login_bg">
            <p>登录</p>
            <div class="input_bg">
                <img class="input_icon" src="../assets/images/phone.png" alt="icon">
                <input type="number" placeholder="手机号">
            </div>
            <div class="input_bg">
                <img class="input_icon" src="../assets/images/password.png" alt="icon">
                <input type="text" placeholder="密码">
            </div>
            <div class="input_bg">
                <img class="input_icon" src="../assets/images/code.png" alt="icon">
                <input type="text" placeholder="验证码">
                <img class="change" src="../assets/images/change_icon.png" alt="icon">
                <img class="code_img" src="../assets/images/code_img.png" alt="icon">
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'login'
    }
</script>
<style lang="scss" scoped>
    .bg {
        width: 100vw;
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
        height: 27.72vw;
        background-color: #fff;
        border-radius: 0.42vw;
        box-shadow: 0 0 2.08vw rgba(35, 35, 35, 0.1);
        padding: 2.8vw 2.8vw 0;
        p {
            font-size: 2.4vw;
            color: #666;
            margin-bottom: 2.6vw;
        }
        .input_bg {
            display: flex;
            align-items: center;
            width: 20.83vw;
            height: 3vw;
            border: 0.1vw solid #e6e6e6;
            margin-bottom: 0.42vw;
            border-radius: 0.21vw;
            .input_icon {
                width: 1.67vw;
                margin: 0 1.14vw;
            }
            input {
                border: none;
                outline: none;
                &::-webkit-input-placeholder {
                    color: #ccc;
                    font-size: 0.9vw;
                }
            }
            .change {
                width: 1.14vw;
            }
            .code_img {
                width: 5.83vw;
            }
        }
    }
</style>
