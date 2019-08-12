<template>
  <div id="app" class="app">
    <header>
        <h1>Contacts Page</h1>
    </header>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/contact">Contact List</router-link></li>
      </ul>
    </nav>
    <main>
      <router-view/>
    </main>
  </div>
</template>
