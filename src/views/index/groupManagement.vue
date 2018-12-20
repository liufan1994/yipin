/*
 * @Author: lf
 * @Date: 2018-12-18 14:07:07
 * @Last Modified by: lf
 * @Last Modified time: 2018-12-19 23:00:21
 * @文件说明: 团购管理
 */
<template>
    <div class="groupManagement">
        <div class="list">
            <div class="list_top">
                <div class="list_top_left">
                    <p class="list_top_left_title">团购管理</p>
                    <div class="list_top_left_add">
                        <img class="list_top_left_add1" src="../../assets/images/top_add.png" alt="icon">
                        <p class="list_top_left_add2">新增团购</p>
                    </div>
                </div>
                <div class="list_top_right">
                    <div class="list_top_right_state">
                        <p>全部</p>
                        <img class="list_top_right_state2" src="../../assets/images/top_arrow.png" alt="icon">
                    </div>
                    <input class="list_top_right_input" type="text" placeholder="团购名称关键词" v-model="searchVal">
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
                    <div class="list_list_content1" v-for="h in contents" :key="h.article_id">
                        <div class="list_list_content2" :style="{width:titles[0].styleA}" style="text-indent:2.08vw;">{{h.name}}</div>
                        <div class="created_price" :style="{width:titles[1].styleA}">{{h.price}}</div>
                        <div class="created_state" :style="{width:titles[2].styleA}">
                            <p class="created_state1" v-if="h.state1==='未开始'">{{h.state1}}</p>
                            <p class="created_state2" v-else-if="h.state2==='进行中'">{{h.state2}}</p>
                            <p class="created_state3" v-else-if="h.state3==='已失效'">{{h.state3}}</p>
                        </div>
                        <div class="list_list_content2" :style="{width:titles[3].styleA}">{{h.time}}</div>
                        <div class="created_operation" :style="{width:titles[4].styleA}">
                            <div class="created_operation_" @click="editFun">
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
                    <p class="page_text">共{{totalPage}}页/{{oldContents.length}}条，每页显示{{eachPage}}条，到第</p>
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
                searchVal: '',
                newNumber: 0,
                currPage: 1,
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
                oldContents: [
                    {
                        name: '黄焖鸡米饭单人套餐',
                        price: '￥30.0',
                        state1: '未开始',
                        time: '2017-10-20 至 2017-10-30'
                    },
                    {
                        name: '黄焖鸡单人套餐',
                        price: '￥35.0',
                        state2: '进行中',
                        time: '2017-10-20 至 2017-10-30'
                    },
                    {
                        name: '黄焖鸡米饭双人套餐',
                        price: '￥42.0',
                        state1: '未开始',
                        time: '2017-10-20 至 2017-10-30'
                    },
                    {
                        name: '米饭单人套餐',
                        price: '￥34.0',
                        state3: '已失效',
                        time: '2017-10-20 至 2017-10-30'
                    },
                    {
                        name: '双人套餐',
                        price: '￥40.0',
                        state3: '已失效',
                        time: '2017-10-20 至 2017-10-30'
                    },
                    {
                        name: '黄焖鸡米饭单人套餐',
                        price: '￥28.0',
                        state2: '进行中',
                        time: '2017-10-20 至 2017-10-30'
                    },
                    {
                        name: '黄焖鸡米饭单人套餐',
                        price: '￥30.0',
                        state1: '未开始',
                        time: '2017-10-20 至 2017-10-30'
                    },
                    {
                        name: '黄焖鸡米饭套餐',
                        price: '￥66.0',
                        state1: '未开始',
                        time: '2017-10-20 至 2017-10-30'
                    },
                    {
                        name: '黄焖鸡米饭八人套餐',
                        price: '￥128.0',
                        state1: '未开始',
                        time: '2017-10-20 至 2017-10-30'
                    },
                    {
                        name: '黄焖鸡米饭四人套餐',
                        price: '￥88.0',
                        state2: '进行中',
                        time: '2017-10-20 至 2017-10-30'
                    },
                    {
                        name: '黄焖鸡米饭单人套餐',
                        price: '￥28.0',
                        state2: '进行中',
                        time: '2017-10-20 至 2017-10-30'
                    },
                    {
                        name: '黄焖鸡米饭单人套餐',
                        price: '￥30.0',
                        state1: '未开始',
                        time: '2017-10-20 至 2017-10-30'
                    },
                    {
                        name: '黄焖鸡米饭套餐',
                        price: '￥66.0',
                        state1: '未开始',
                        time: '2017-10-20 至 2017-10-30'
                    },
                    {
                        name: '黄焖鸡米饭八人套餐',
                        price: '￥128.0',
                        state1: '未开始',
                        time: '2017-10-20 至 2017-10-30'
                    },
                    {
                        name: '黄焖鸡米饭四人套餐',
                        price: '￥88.0',
                        state2: '进行中',
                        time: '2017-10-20 至 2017-10-30'
                    }
                ]
            }
        },
        methods: {
            //编辑事件
            editFun() {
                // sessionStorage.setItem('editObj', JSON.stringify({ name: 123 }))
                this.$setItem('editObj', { name: 123 })
                this.$router.push('/index/edit_groupManagement')
            },
            //点击页数事件
            pageClick(page) {
                this.currPage = page
            },
            // 上一页事件
            upperFun() {
                this.currPage = this.currPage > 1 ? this.currPage - 1 : 1
            },
            // 下一页事件
            lowerFun() {
                this.currPage =
                    this.currPage < this.totalPage
                        ? this.currPage + 1
                        : this.totalPage
            },
            //页数确认事件
            page_bottomFun() {
                if (this.newNumber > this.totalPage) {
                    this.newNumber = this.totalPage
                } else if (this.newNumber < 1) {
                    this.newNumber = 1
                }
                this.currPage = this.newNumber
            },
            //搜索事件
            searchFun() {
                let arr = []
                this.oldContents.map(val => {
                    if (val.name.includes(this.searchVal)) {
                        console.log(val.name)
                        arr.push(val)
                    }
                })
                this.contents = arr
            }
        },
        computed: {
            totalPage() {
                let a = Math.ceil(this.oldContents.length / this.eachPage)
                return a
            }
        },
        mounted() {
            let a = document.body.clientHeight - 0.219 * document.body.clientWidth
            let b = Math.trunc(a / (0.0276 * document.body.clientWidth))
            this.contents = this.oldContents.slice(0, b)
            this.eachPage = b
        }
    }
</script>
 <style lang="scss" scoped>
    .groupManagement {
        .list {
            width: 83.7vw;
            // min-height: calc(100vh - 6.97vw);
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
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        width: 6.67vw;
                        height: 2.5vw;
                        border: 1px solid #e6e6e6;
                        border-radius: 0.21vw;
                        padding: 0 0.83vw;
                        cursor: pointer;
                        .list_top_right_state2 {
                            width: 0.78vw;
                            height: 0.42vw;
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
