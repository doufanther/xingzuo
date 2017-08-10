<template>
	<div class="main">
		<h1>星座匹配</h1>
		<div>
			<span>你的星座</span>
			<Select v-model="modelMe" style="width:200px">
    			<Option v-for="item in starList" :value="item.label" :key="item.value">{{item.label }}</Option>
    		</Select>
		</div>
		<div>
			<span>她/他的星座</span>
			<Select v-model="modelHe" style="width:200px">
    			<Option v-for="item in starList" :value="item.label" :key="item.value">{{item.label }}</Option>
    		</Select>
		</div>
		<button @click="btn">匹配</button>
		<div class="content">
			<ul>
				<li v-for="item in data.newslist">
					<p>{{item.title}}</p>
					<p>{{item.grade}}</p>
					<p>{{item.content}}</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	
	import axios from 'axios'
	
	export default {
		name: 'main',
		components: {
		   
		},
	    props: {
		    
		},
		data() {
		    return {
		    	data:'',
		    	modelMe:'',
		    	modelHe:'',
		    	starList: [
                    {
                        value: 'jinniu',
                        label: '金牛座'
                    },
                    {
                        value: 'shuangzi',
                        label: '双子座 '
                    },
                    {
                        value: 'junxie',
                        label: '巨蟹座 '
                    },
                    {
                        value: 'shizi',
                        label: '狮子座 '
                    },
                    {
                        value: 'chunv',
                        label: '处女座 '
                    },
                    {
                        value: 'tianping',
                        label: '天枰座'
                    },
                    {
                        value: 'tianxie',
                        label: '天蝎座 '
                    },
                    {
                        value: 'sheshou',
                        label: '射手座'
                    },
                    {
                        value: 'moxie',
                        label: '摩羯座'
                    },
                    {
                        value: 'shuiping',
                        label: '水瓶座'
                    },
                    {
                        value: 'shuangyu',
                        label: '双鱼座'
                    }
                   
                ],
                url:'https://api.tianapi.com/txapi/xingzuo/?key=b10513cff509e93e1d7b3546755b77cc'
			}
		},
		created(){
			
		},
		computed: {
		   
		},
		methods: {
			btn(){
				//console.log(this.modelMe.slice(0,2));
				axios.get(this.url+'&me='+this.modelMe.slice(0,2)+'&he='+this.modelHe.slice(0,2)).then((res)=>{
					console.log(res);
					this.data=res.data;
				})
			}
		}
	}
</script>


<style scoped >
	
</style>