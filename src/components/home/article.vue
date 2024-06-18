<script>
import { ref, onMounted, reactive } from 'vue'
import api from '../../api/axios.js';
export default {
    setup() {
        const state = reactive({
            articleArray: []
        });
        // 文章自动刷新获取列表
        const getArticles = async () => {

            try {
                var response = await api.get("/Home/showArticles", {})
                if (response.data.status === 200) {

                    state.articleArray = response.data.data;
                    console.log(state.articleArray)

                } else {
                    console.log(response.data)

                }

            } catch (error) {
                console.error(error);
            }
        }



        onMounted(() => {
            getArticles();
        });
        return {
            state
        }


    },
    methods: {
        postArticleId(e) {
            this.$router.push({
                path: 'articleDetail',
                query: {
                    articleIds: e
                }
            })

        }

    }



}
</script>

<template>
    <div class="article">

        <div class="bdrBox">

            <!-- artBox -->
            <!-- 匿名箭头函数来包裹事件处理函数postArticleId，并将$event作为参数传递给它。 -->
            <div class="artBox" v-for="article in state.articleArray" :key="article.articleId"
                @click="($event) => postArticleId(article.articleIds, $event)">
                <div class="artImg">
                    <img :src="article.articleHeadimg" alt="">
                </div>
                <div class="context">
                    <p>{{ article.articleTitle }}</p>
                    <p id="p_artContext">
                        {{ article.articleContent }}
                    </p>
                </div>
            </div>
             <!-- artBox -->
            <!-- 匿名箭头函数来包裹事件处理函数postArticleId，并将$event作为参数传递给它。 -->
            <div class="artBox">
                <div class="artImg">
                    <img src="http://8.138.124.70/product/images/山苍子油2.jpg" alt="">
                </div>
                <div class="context">
                    <p> 山苍子油 </p>
                    <p id="p_artContext">
                        
                      山苍子油是以山苍子鲜果为主料提取而成的一种具有药食两用的纯天然的油料。有祛风祛湿、散寒理气、解毒消肿、止痒止痛、驱蚊防蚊、清新空气、去除异味、醒脑防眩晕的功效。常用于海鲜等荤腥菜及火锅调味，具有增味、赋香的功效。
                  
                    </p>
                </div>
            </div>
            <div class="artBox">
                <div class="artImg">
                    <img src="http://8.138.124.70/product/images/山苍子油2.jpg" alt="">
                </div>
                <div class="context">
                    <p> 山苍子油 </p>
                    <p id="p_artContext">
                        
                      山苍子油是以山苍子鲜果为主料提取而成的一种具有药食两用的纯天然的油料。
                  
                    </p>
                </div>
            </div>
            <div class="artBox">
                <div class="artImg">
                    <img src="http://8.138.124.70/product/images/山苍子油2.jpg" alt="">
                </div>
                <div class="context">
                    <p> 山苍子油 </p>
                    <p id="p_artContext">
                        
                      山苍子油是以山苍子鲜果为主料提取而成的一种具有药食两用的纯天然的油料。有祛风祛湿、散寒理气、解毒消肿、止痒止痛、驱蚊防蚊、清新空气、去除异味、醒脑防眩晕的功效。常用于海鲜等荤腥菜及火锅调味，具有增味、赋香的功效。  山苍子油是以山苍子鲜果为主料提取而成的一种具有药食两用的纯天然的油料。有祛风祛湿、散寒理气、解毒消肿、止痒止痛、驱蚊防蚊、清新空气、去除异味、醒脑防眩晕的功效。常用于海鲜等荤腥菜及火锅调味，具有增味、赋香的功效。  山苍子油是以山苍子鲜果为主料提取而成的一种具有药食两用的纯天然的油料。有祛风祛湿、散寒理气、解毒消肿、止痒止痛、驱蚊防蚊、清新空气、去除异味、醒脑防眩晕的功效。常用于海鲜等荤腥菜及火锅调味，具有增味、赋香的功效。
                  
                    </p>
                </div>
            </div>
        </div>


    </div>
</template>

<style scoped>
.article {
    margin-top: 10px;
    height: 100vh;
}

.bdrBox {
    max-width: 1200px;
    /* min-width:500px; */
    display: flex;
    flex-direction: column;
    /* border: 1px solid white;
      height: 300px;
      overflow: hidden; */
}

.artBox {
    border: 1px solid #3d3d3f;
    border-radius: 20px;
    margin: 5px 0;
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    display: flex;
    justify-content: flex-start;

}

.artBox:hover {
    border: 1px solid #1784d5;
    transition: all 0.3s ease-in-out;
}

.artImg {
    width: 300px;
    height: 200px;
    /* margin: 10px 10px; */

}

.artImg img {
    width: 300px;
    height: 200px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
}

#p_artContext {
    margin: 10px 20px;
    height: 120px;

    overflow: hidden;
    /* 文字溢出隐藏 */
    text-overflow: ellipsis;
    /* 显示省略号 */
}
</style>
