<template>
    <section class="cards">
        <article :key="match.id" v-for="match in matches" class="card">
            <picture class="thumbnail">
                <img class="category__01" :src="winnerImage(match)" alt="" />
            </picture>
            <div class="card-content">
                <p class="category category__01">{{match.matchType}}</p>
                <h2>{{match.name}}</h2>
                <p>{{match.status}}</p>
            </div>
            <footer>
            <div class="post-meta">
                <span class="timestamp"><i class="fa fa-clock-o"></i> {{getFormattedDate(new Date(match.date))}}</span>
                <span class="comments"><i class="fa fa-comments"></i><a href="#"> {{match.venue}}</a></span>
                </div>
            </footer>
        </article>
</section>

</template>

<script setup>
    import {onMounted, ref, computed} from 'vue';
    import axios from 'axios';

    const matches = ref([]);

    onMounted(async ()=> {
        const response = await axios.get("currentMatches.json");
        const {data} = response.data;
        matches.value = data.matchList;
    });

    computed(()=>{

    });

    const getFormattedDate = (date)=> {
	 
		return (date.getMonth() + 1) + '/'+
		(date.getDate()) + '/'+
		date.getFullYear()
    }

    const winnerImage = (winnerInfo)=> {
        const winnerTeam = winnerInfo.status.split('won')[0].trim();
        const teamInfo = winnerInfo.teamInfo.find((info)=> info.name === winnerTeam);
        return teamInfo.img;
    }


</script>

<style lang="scss">

</style>
