/*
 * @Author: lf
 * @Date: 2018-12-18 14:07:07
 * @Last Modified by: lf
 * @Last Modified time: 2018-12-22 23:53:38
 * @文件说明: 团购管理
 */
<template>
    <div class="groupManagement">
        <div class="list">
            <div class="list_top">
                <div class="list_top_left">
                    <p class="list_top_left_title">团购管理</p>
                    <div class="list_top_left_add" @click="editFun">
                        <img class="list_top_left_add1" src="../../assets/images/top_add.png" alt="icon">
                        <p class="list_top_left_add2">新增团购</p>
                    </div>
                </div>
                <div class="list_top_right">
                    <div class="list_top_right_state" @click="stateFun">
                        <p>{{stateName}}</p>
                        <img class="list_top_right_state2" src="../../assets/images/top_arrow.png" alt="icon" v-if="!stateType">
                        <img class="list_top_right_state2" src="../../assets/images/top_arrowa.png" alt="icon" v-else>
                        <div class="state" v-if="stateType">
                            <p class="state_text" v-for="s in states" :key="s.name" @click="stateTextFun(s)">{{s.name}}</p>
                        </div>
                    </div>
                    <input class="list_top_right_input" type="text" placeholder="团购名称关键词" v-model="searchVal" @keyup.enter="searchFun">
                    <div class="list_top_right_search" @click="searchFun">
                        <img class="list_top_right_search1" src="../../assets/images/top_search.png" alt="icon">
                        <p class="list_top_right_search2">搜索</p>
                    </div>
                </div>
            </div>
            <div class="list_list">
                <div class="list_list_title">
                    <div class="list_list_title1" v-for="(i,index) in titles" :key="i.name" :style="{width:i.styleA,textIndent:index?'0.8vw':'2.08vw'}">{{i.name}}</div>
                </div>
                <div class="list_list_content">
                    <p class="list_list_content_tips" v-if="contents.length===0">无数据</p>
                    <div class="list_list_content1" v-for="h in contents" :key="h.article_id">
                        <div class="list_list_content2" :style="{width:titles[0].styleA}" style="text-indent:2.08vw;">{{h.name}}</div>
                        <div class="created_price" :style="{width:titles[1].styleA}">¥{{(h.price*1).toFixed(1)}}</div>
                        <div class="created_state" :style="{width:titles[2].styleA}">
                            <p :class="'created_state'+h.stateCode">{{h.stateName}}</p>
                        </div>
                        <div class="list_list_content2" :style="{width:titles[3].styleA}">{{h.time1}}至{{h.time2}}</div>
                        <div class="created_operation" :style="{width:titles[4].styleA}">
                            <div class="created_operation_" @click="editFun(h)">
                                <img class="created_operation_img" src="../../assets/images/edit.png" alt="icon">
                                <p class="created_operation_edit_text">编辑</p>
                            </div>
                            <div class="created_operation_">
                                <img class="created_operation_img" src="../../assets/images/delete.png" alt="icon">
                                <p class="created_operation_delete_text">删除</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="page">
                <div class="page_left">
                    <div class="page_" @click="upperFun">
                        <img class="page_img" src="../../assets/images/upper.png" alt="icon">
                        <p class="page_text">上一页</p>
                    </div>
                    <p class="page_number" v-for="p in totalPage" :key="p" :class="{pageNumber:currPage==p}" @click="pageClick(p)">{{p}}</p>
                    <div class="page_" @click="lowerFun">
                        <p class="page_text">下一页</p>
                        <img class="page_img" src="../../assets/images/lower.png" alt="icon">
                    </div>
                </div>
                <div class="page_right">
                    <p class="page_text">共{{totalPage}}页/{{filterContents.length}}条，每页显示{{eachPage}}条，到第</p>
                    <input class="page_input" type="number" v-model="newNumber">
                    <p class="page_text">页</p>
                    <p class="page_bottom" @click="page_bottomFun">确认</p>
                </div>
            </div>
        </div>
        <div class="blank"></div>
    </div>

</template>
<script>
    import axios from 'axios'
    export default {
        name: 'groupManagement',
        data() {
            return {
                states: [
                    {
                        pitch: true,
                        name: '全部'
                    },
                    {
                        pitch: false,
                        name: '未开始'
                    },
                    {
                        pitch: false,
                        name: '进行中'
                    },
                    {
                        pitch: false,
                        name: '已失效'
                    }
                ],
                stateName: '全部',
                stateType: false,
                searchVal: '',
                newNumber: 0,
                //当前页数
                currPage: 1,
                //每页条数
                eachPage: 1,
                titles: [
                    {
                        name: '团购名称',
                        styleA: '28.8vw'
                    },
                    {
                        name: '价格',
                        styleA: '8.9vw'
                    },
                    {
                        name: '状态',
                        styleA: '7vw'
                    },
                    {
                        name: '有效期',
                        styleA: '20.1vw'
                    },
                    {
                        name: '操作',
                        styleA: '18.92vw'
                    }
                ],
                pageObj: {},
                contents: [],
                filterContents: [],
                oldContents: [
                    {
                        name: '黄焖鸡米饭单人套餐',
                        price: '30',
                        stateCode: 1,
                        stateName: '未开始',
                        time1: '2017-10-20',
                        time2: '2017-10-30'
                    },
                    {
                        name: '黄焖鸡单人套餐',
                        price: '35',
                        stateCode: 2,
                        stateName: '进行中',
                        time1: '2017-10-20',
                        time2: '2017-10-30'
                    },
                    {
                        name: '黄焖鸡米饭双人套餐',
                        price: '42',
                        stateCode: 1,
                        stateName: '未开始',
                        time1: '2017-10-20',
                        time2: '2017-10-30'
                    },
                    {
                        name: '米饭单人套餐',
                        price: '34',
                        stateCode: 3,
                        stateName: '已失效',
                        time1: '2017-10-20',
                        time2: '2017-10-30'
                    },
                    {
                        name: '双人套餐',
                        price: '40',

                        stateCode: 3,
                        stateName: '已失效',
                        time1: '2017-10-20',
                        time2: '2017-10-30'
                    },
                    {
                        name: '黄焖鸡米饭单人套餐',
                        price: '28',
                        stateCode: 3,
                        stateName: '已失效',
                        time1: '2017-10-20',
                        time2: '2017-10-30'
                    },
                    {
                        name: '黄焖鸡米饭单人套餐',
                        price: '30',
                        stateCode: 1,
                        stateName: '未开始',
                        time1: '2017-10-20',
                        time2: '2017-10-30'
                    },
                    {
                        name: '黄焖鸡米饭套餐',
                        price: '66',
                        stateCode: 1,
                        stateName: '未开始',
                        time1: '2017-10-20',
                        time2: '2017-10-30'
                    },
                    {
                        name: '黄焖鸡米饭八人套餐',
                        price: '128',
                        stateCode: 1,
                        stateName: '未开始',
                        time1: '2017-10-20',
                        time2: '2017-10-30'
                    },
                    {
                        name: '黄焖鸡米饭四人套餐',
                        price: '88',
                        stateCode: 2,
                        stateName: '进行中',
                        time1: '2017-10-20',
                        time2: '2017-10-30'
                    },
                    {
                        name: '黄焖鸡米饭单人套餐',
                        price: '28',
                        stateCode: 2,
                        stateName: '进行中',
                        time1: '2017-10-20',
                        time2: '2017-10-30'
                    },
                    {
                        name: '黄焖鸡米饭单人套餐',
                        price: '30',
                        stateCode: 1,
                        stateName: '未开始',
                        time1: '2017-10-20',
                        time2: '2017-10-30'
                    },
                    {
                        name: '黄焖鸡米饭套餐',
                        price: '66',
                        stateCode: 1,
                        stateName: '未开始',
                        time1: '2017-10-20',
                        time2: '2017-10-30'
                    },
                    {
                        name: '黄焖鸡米饭八人套餐',
                        price: '128',
                        stateCode: 1,
                        stateName: '未开始',
                        time1: '2017-10-20',
                        time2: '2017-10-30'
                    },
                    {
                        name: '黄焖鸡米饭四人套餐',
                        price: '88',
                        stateCode: 2,
                        stateName: '进行中',
                        time1: '2017-10-20',
                        time2: '2017-10-30'
                    }
                ]
            }
        },
        methods: {
            //状态选择框选择事件
            stateTextFun(s) {
                this.states.map(val => {
                    val.pitch = false
                })
                s.pitch = true
                this.stateName = s.name
                let add = []
                if (s.name == '全部') {
                    add = this.oldContents
                } else {
                    this.oldContents.map(val => {
                        if (s.name == val.stateName) {
                            add.push(val)
                        }
                    })
                }
                this.filterContents = add
                this.contents = add.slice(0, this.eachPage)
                this.currPage = 1
            },
            //状态框点击事件
            stateFun() {
                this.stateType = !this.stateType
            },
            //编辑事件
            editFun(h) {
                if (h) {
                    this.$setItem('editObj', h)
                }
                // sessionStorage.setItem('editObj', JSON.stringify({ name: 123 }))
                this.$router.push('/index/edit_groupManagement')
            },
            //判断页数来更新表格
            pageNew() {
                this.contents = this.filterContents.slice(
                    (this.currPage - 1) * this.eachPage,
                    this.currPage * this.eachPage
                )
            },
            //点击页数事件
            pageClick(page) {
                this.currPage = page
                this.pageNew()
            },
            // 上一页事件
            upperFun() {
                this.currPage = this.currPage > 1 ? this.currPage - 1 : 1
                this.pageNew()
            },
            // 下一页事件
            lowerFun() {
                this.currPage =
                    this.currPage < this.totalPage
                        ? this.currPage + 1
                        : this.totalPage
                this.pageNew()
            },
            //页数确认事件
            page_bottomFun() {
                if (this.newNumber > this.totalPage) {
                    this.newNumber = this.totalPage
                } else if (this.newNumber < 1) {
                    this.newNumber = 1
                }
                this.currPage = this.newNumber
                this.pageNew()
            },
            //搜索事件
            searchFun() {
                let arr = []
                let _arr = this.filterContents
                if (this.stateName === '全部') {
                    _arr = this.oldContents
                }
                _arr.map(val => {
                    if (val.name.includes(this.searchVal)) {
                        arr.push(val)
                    }
                })
                this.filterContents = arr
                this.contents = arr.slice(0, this.eachPage)
                this.currPage = 1
            }
        },
        computed: {
            //总页数
            totalPage() {
                let a = 1
                if (this.filterContents.length) {
                    a = Math.ceil(this.filterContents.length / this.eachPage)
                }
                return a
            }
        },
        mounted() {
            let a = document.body.clientHeight - 0.219 * document.body.clientWidth
            let b = Math.trunc(a / (0.0276 * document.body.clientWidth))
            this.contents = this.oldContents.slice(0, b)
            this.eachPage = b
            this.filterContents = this.oldContents
        }
    }
</script>
 <style lang="scss" scoped>
    .groupManagement {
        .list {
            width: 83.7vw;
            border-radius: 0.42vw;
            background-color: #fff;
            .list_top {
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 5vw;
                .list_top_left {
                    display: flex;
                    align-items: center;
                    font-size: 1.67vw;
                    font-weight: 900;
                    .list_top_left_title {
                        font-size: 1.67vw;
                        font-weight: 900;
                        margin: 0 2.08vw;
                    }
                    .list_top_left_add {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 7.66vw;
                        height: 2.5vw;
                        background-color: #0e4b4a;
                        border-radius: 0.21vw;
                        cursor: pointer;
                        .list_top_left_add1 {
                            width: 1.1vw;
                            height: 1.1vw;
                        }
                        .list_top_left_add2 {
                            color: #f4caa3;
                            font-size: 1.1vw;
                            border-width: 700;
                            margin-left: 0.42vw;
                        }
                    }
                }
                .list_top_right {
                    display: flex;
                    .list_top_right_state {
                        position: relative;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        width: 6.67vw;
                        height: 2.5vw;
                        border: 1px solid #e6e6e6;
                        border-radius: 0.21vw;
                        padding: 0 0.83vw;
                        cursor: pointer;
                        user-select: none;
                        .list_top_right_state2 {
                            width: 0.78vw;
                            height: 0.42vw;
                        }
                        .state {
                            position: absolute;
                            top: 2.5vw;
                            left: 0;
                            z-index: 10002;
                            width: 8.25vw;
                            text-align: center;
                            line-height: 2.5vw;
                            border: 1px solid #e6e6e6;
                            background-color: #fff;
                            cursor: pointer;
                            user-select: none;
                            .state_text {
                                width: 6vw;
                                height: 3vw;
                                margin: 0 auto;
                                border-bottom: 1px solid #f7f7f7;
                            }
                            .state_text:hover {
                                width: 8.25vw;
                                background-color: #0e4b4a;
                                color: #fff;
                            }
                        }
                    }
                    .list_top_right_input {
                        width: 15vw;
                        padding: 0 0.83vw;
                        margin: 0 0.42vw;
                        border: 1px solid #e6e6e6;
                        border-radius: 0.21vw;
                        outline: none;
                    }
                    .list_top_right_input::-webkit-input-placeholder {
                        color: #ccc;
                    }
                    .list_top_right_search {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 6.25vw;
                        height: 2.5vw;
                        background-color: #0e4b4a;
                        border-radius: 0.21vw;
                        margin-right: 1.41vw;
                        cursor: pointer;
                        .list_top_right_search1 {
                            width: 1.25vw;
                            height: 1.25vw;
                            margin-right: 0.57vw;
                        }
                        .list_top_right_search2 {
                            color: #f4caa3;
                            font-size: 1.1vw;
                            font-weight: 700;
                        }
                    }
                }
            }
            .list_list {
                min-height: calc(100vh - 18.89vw);
                background-color: #fafafa;
                .list_list_title {
                    display: flex;
                    .list_list_title1 {
                        height: 2.76vw;
                        border: 1px solid #f7f7f7;
                        border-right: none;
                        line-height: 2.76vw;
                    }
                }
                .list_list_content {
                    .list_list_content_tips {
                        height: 2.76vw;
                        text-align: center;
                        line-height: 2.76vw;
                        color: #999;
                        background-color: #fff;
                    }
                    .list_list_content1 {
                        display: flex;
                        .list_list_content2,
                        .created_price,
                        .created_state,
                        .created_operation {
                            height: 2.76vw;
                            border: 1px solid #f7f7f7;
                            border-right: none;
                            border-top: none;
                            line-height: 2.76vw;
                            background-color: #fff;
                            text-indent: 0.8vw;
                        }
                        .created_price {
                            color: #e63c3c;
                        }
                        .created_state {
                            display: flex;
                            .created_state1 {
                                color: #2896dc;
                            }
                            .created_state2 {
                                color: #28b45a;
                            }
                            .created_state3 {
                                color: #999;
                            }
                        }
                        .created_operation {
                            display: flex;
                            .created_operation_ {
                                display: flex;
                                align-items: center;
                                margin-right: 2.5vw;
                                cursor: pointer;
                                .created_operation_img {
                                    width: 1.1vw;
                                    height: 1.1vw;
                                    margin-left: 0.8vw;
                                }
                                .created_operation_edit_text {
                                    color: #2896dc;
                                }
                                .created_operation_delete_text {
                                    color: #999;
                                }
                            }
                        }
                    }
                }
            }
            .page {
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 5.16vw;
                .page_left {
                    display: flex;
                    margin-left: 1.53vw;
                    .page_ {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 5.57vw;
                        height: 2.34vw;
                        background-color: #f7f7f7;
                        border-radius: 0.26vw;
                        margin: 0 0.55vw;
                        cursor: pointer;
                        user-select: none;
                        .page_img {
                            width: 0.26vw;
                            height: 0.47vw;
                            margin: 0 0.28vw;
                        }
                        .page_text {
                            color: #666;
                            font-size: 0.83vw;
                            margin: 0 0.28vw;
                        }
                    }
                    .page_number {
                        width: 2.34vw;
                        height: 2.34vw;
                        font-size: 0.83vw;
                        color: #666;
                        background-color: #f7f7f7;
                        border-radius: 0.26vw;
                        margin: 0 0.13vw;
                        text-align: center;
                        line-height: 2.34vw;
                        cursor: pointer;
                        user-select: none;
                    }
                    .pageNumber {
                        background-color: #0e4b4a;
                        color: #fff;
                    }
                }
                .page_right {
                    display: flex;
                    align-items: center;
                    .page_text {
                        color: #666;
                        font-size: 0.83vw;
                    }
                    .page_input {
                        width: 3.07vw;
                        height: 2.34vw;
                        border: 1px solid #e6e6e6;
                        border-radius: 0.26vw;
                        margin: 0 0.3vw;
                        outline: none;
                        text-align: center;
                    }
                    .page_bottom {
                        width: 4.43vw;
                        height: 2.34vw;
                        color: #fff;
                        background-color: #0e4b4a;
                        border-radius: 0.26vw;
                        margin: 0 2.08vw 0 0.68vw;
                        text-align: center;
                        line-height: 2.34vw;
                        cursor: pointer;
                        user-select: none;
                    }
                }
            }
        }
        .blank {
            height: 1.4vw;
            background-color: #f0f0f0;
        }
    }
</style>
