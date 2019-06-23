<template>
  <div id="app" class="app">
    <div class="col-md-12 col-sm-12">
      <nav class="col-md-3">
        <div class="app__logo">
            <h1>Contacts</h1>
        </div>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/contact">Contact List</router-link></li>
        </ul>
      </nav>
      <router-view/>
    </div>
  </div>
</template>
