<template>

  <div class="col-md-8 offset-md-4 container-fluid contacts">
    <div v-if="dataLoaded" class="contacts__list">
    <div class="carousel">
      <div class="carousel__images">
        <div class="col" v-for="(images, i)  in carouselList" :key="i">
          <img :src="images.image" v-on:click="profiletab=images.email; scrollToProfile()" on:dblclick="scrollToProfile()"/>
          <p class="carousel__images__name">{{images.last}} {{images.first}} </p>
        </div>
      </div>
    </div>
      <div class="contacts__list__all">
      <div v-for="(tabs, index) in tabList" class="contacts__list__profile">
        <a v-on:click="activetab=tabs" class="pagination active-tab" >{{tabs}}</a>
        <div class="tabs" v-for="(item, index) in filtered[tabs]" :id="'active-tab' + index">
                <div>
                  <a v-on:click="profiletab=item.email" class="pagination" 
                    v-bind:class="[ profiletab === item.email ? 'active' : '' ]"> {{item.name.last}} {{item.name.first}}</a>
                  
                  <div v-if="profiletab === item.email" class="contacts__list__profile__content">
                    <div class ="contacts__list__profile__content__pic col-md-4"> 
                      <img :src="item.picture.large" alt="">
                    </div>
                    <div class="contacts__list__profile__content__info">
                      <p><b>Email  : </b>{{item.email}}</p>
                      <p><b>Phone  : </b>{{item.phone}}</p>
                      <p><b>Street : </b>{{item.location.street}}</p>
                      <p><b>City   : </b>{{item.location.city}}</p>
                      <p><b>State  : </b>{{item.location.state}}</p>
                      <p><b>Postcode:</b>{{item.location.postcode}}</p>
                    </div>
                  </div>
                </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script src="./ContactList.js"></script>
