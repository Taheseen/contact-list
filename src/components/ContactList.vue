<template>

    <div v-if="dataLoaded" class="contacts__list">
      <div class="carousel">
        <ul class="carousel__images">
          <li v-for="(images, i)  in carouselList" :key="i">
            <img :src="images.image" v-on:click="profiletab=images.email; scrollToProfile()" on:dblclick="scrollToProfile()"/>
            <p class="carousel__images__name">{{images.last}} {{images.first}} </p>
          </li>
        </ul>
      </div>
      <div class="contacts__list__all">
      <div v-for="(tabs, index) in tabList" :key="index" class="contacts__list__profile">
        <a v-on:click="activetab=tabs" class="pagination active-tab" >{{tabs}}</a>
        <div v-for="(item, index) in filtered[tabs]" :key="index" :id="'active-tab' + index">
                <div>
                  <a v-on:click="profiletab=item.email" class="pagination" v-bind:class="[ profiletab === item.email ? 'active' : '' ]"> {{item.name.last}} {{item.name.first}}</a>
                  <div v-if="profiletab === item.email" class="contacts__list__profile__content">
                    <div class ="contacts__list__profile__content__pic">
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
</template>

<script src="./ContactList.js"></script>
