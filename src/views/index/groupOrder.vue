/*
 * @Author: lf
 * @Date: 2018-12-17 19:47:53
 * @Last Modified by: lf
 * @Last Modified time: 2018-12-22 23:52:37
 * @文件说明: 团购订单
 */
 <template>
    <div class="groupOrder">
        <div class="list">
            <div class="list_top"></div>
            <div class="list_list">
                <div class="list_list_title">
                    <div class="list_list_title1" v-for="i in titles" :key="i.name" :style="{width:i.styleA}"> {{i.name}} </div>
                    {{username}}
                </div>
                <div class="list_list_content">
                    <div class="list_list_content1" v-for="h in contents" :key="h.article_id">
                        <div :style="{width:titles[0].styleA}">{{h.article_id}} </div>
                        <div :style="{width:titles[1].styleA}" class="created_time">{{h.created_time}} </div>
                    </div>
                </div>
            </div>
            <div class="page">
                <p v-for="p in pageObj.total_page" :key="p" :style="{color:currPage===p?'red':'aqua'}" @click="pageClick(p)">{{p}}</p>
            </div>
        </div>
    </div>
</template>
 <script>
    import axios from 'axios'
    export default {
        name: 'groupOrder',
        data() {
            return {
                currPage: 1,
                titles: [
                    {
                        name: '订单号',
                        styleA: '13.8vw'
                    },
                    {
                        name: '消费者',
                        styleA: '16vw'
                    },
                    {
                        name: '订单金额',
                        styleA: '20vw'
                    }
                ],
                contents: [],
                pageObj: {}
            }
        },
        methods: {
            pageClick(page) {
                this.currPage = page
                this.getArtList()
            },
            getArtList() {
                // 文章列表接口
                axios
                    .get('https://open-api.beone.app/web/article/getArticleList', {
                        params: {
                            user_id: this.$getItem('user_id'),
                            page: this.currPage,
                            page_size: 3
                        },
                        headers: {
                            'X-APPID': 'x9UdyFXeEwMp',
                            'X-TOKEN':
                                '3c6e836c417e1773wzBkpsW+KppL7Qgbdw+slX2SwALOBmt36TvTQ3/4MeWt88ccJUN6SJ1z1rbT85JO/h'
                        }
                    })
                    .then(response => {
                        this.userId = response.data.user_id
                        this.contents = response.data.data.data_list
                        this.pageObj = response.data.data
                        delete this.pageObj.data_list
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
        },
        created() {
            this.getArtList()
            this.$api
                .login({
                    user_id: 102334,
                    page: this.currPage,
                    page_size: 3
                })
                .then(res => {
                    this.username = res.data.username
                })
        }
    }
</script>
 <style lang="scss" scoped>
    .groupOrder {
        .list {
            width: 83.7vw;
            height: 66.09vw;
            background-color: #fff;
            border-radius: 0.42vw;
            .list_list {
                .list_list_title {
                    display: flex;
                    .list_list_title1 {
                        height: 2.76vw;
                        background-color: #fafafa;
                        border: 1px solid #f7f7f7;
                        border-right: none;
                        text-align: center;
                        line-height: 2.76vw;
                    }
                }
                .list_list_content {
                    // display: flex;
                    .list_list_content1 {
                        display: flex;
                        height: 2.76vw;
                        border: 1px solid #f7f7f7;
                        border-right: none;
                        border-top: none;
                        text-align: center;
                        line-height: 2.76vw;
                        .created_time {
                            color: red;
                        }
                    }
                }
            }
        }
    }
</style>
