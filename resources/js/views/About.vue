<template>
  <div class="container">
    <h1 class="my-5" v-show="name">Ik ben {{name}}</h1>
     <span>{{like}}</span>
    <button @click="like++" class="btn btn-outline-primary btn-sm rounded-circle"><i class="far fa-heart"></i></button>
    <div class="row">
      <div class="col-md-6">
        <div style="width: 20rem;height: 30rem;position: relative;background: url('/images/tahanialhammad.jpg');background-size: cover;z-index: 1;"></div>
        <div
          style="width: 20rem;height: 30rem;position: absolute;top: 2rem;right: 10rem;border: 12px solid yellow;z-index: 0;"></div>
      </div>
      <div class="col-md-6 mt-5">
        <p>
          Ik ben Tahani Alhammad woon in Groningen en kom oorspronkelijk uit
          Irak, waar ik computer engineer was. Bestond mijn werk daar
          voornamelijk uit onderzoek naar o.a. netwerkapparaten, inmiddels weet
          ik dat ik de kant van front end developer op wil. Hoewel mijn passie
          daar ligt, heb ik ook interesse in de back end-kant van programmeren.
          Ik vond CodeGorilla-avontuur als een van de tofste dingen die ik ooit
          heeft gedaan. Mijn programmertalen zijn : HTML5/CSS3, SASS, Bootstrap,
          JS, NodeJS, Express, EJS, VueJs, JSON, Mongoose, MongoDB, PHP, MySQL
          en Laravel
        </p>
        <ul>
            <li v-for="skill in skills">{{skill}}</li>
        </ul>
        <h3 v-if="work_experience > 5">Senior developer</h3>
        <h3 v-else-if="work_experience < 5 && work_experience >= 3">Medior developer</h3>
        <h3 v-else>Junior developer</h3>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-md-6 mt-5">
        <p>
       Ik leer snel nieuwe dingen, maar stop pas als ik echt tevreden is. Ik ben een doorzetter en pas zich makkelijk aan. Dit merkt ik aan het feit dat ik zes jaar geleden vanuit Irak naar Nederland kwam en mezelf het doel stelde om als front end developer aan de slag te gaan. Met mijn gevoel voor verantwoordelijkheid en oog voor gebruiksvriendelijkheid onderscheid ik me van andere developers. Ik leerde mezelf allerlei skills aan en kon deze toepassen in het vrijwilligerswerk dat ze deed voor stichting Femina. Bij CodeGorilla bouwde ik mijn kennis en techniek verder uit, waar ik erg trots op is.
        </p>
        <ul>
            <li v-for="tool in tools">{{tool.name}}-{{tool.percent}}%</li>
        </ul>
        <div class="progress mb-2" v-for="tool in tools">
            <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuemin="0" aria-valuemax="100">{{tool.name}}</div>
        </div>
      </div>
      <div class="col-md-6">
        <div style="width: 20rem;height: 30rem;position: relative;background: url('/images/wotahwi.jpg');background-size: cover;z-index: 1;"></div>
        <div style="width: 20rem;height: 30rem;position: absolute;top: 2rem;left: 4rem;border: 12px solid yellow;z-index: 0;"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            name : 'Tahani Alhammad',
            skills : ['HTML', 'CSS', 'Javascript', 'MYSQL', 'PHP', 'WordPress'],
            tools : [
                {name:'laravel', percent: 70},
                {name:'Vuejs', percent: 90},
                {name:'MYSQL', percent: 60},
            ],
            work_experience : 2,
            like : 0
        }
    },
  mounted() {
    console.log("Component mounted.");
  },
};
</script>
