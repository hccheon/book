<template>
  <!-- <Modal v-if="isModalAct" @close-modal="closeModal" />> -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <router-link class="navbar-brand" to="/home">도서관리</router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link class="nav-link active" to="/home">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/list" @openModal="eventTest">도서 조회/추가</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link disabled" to="/home">반납</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link disabled" to="/home">대출</router-link>
              </li>
            </ul>
            <form class="d-flex" @submit.prevent="search(this.searchText)">
              <input class="form-control me-2" type="search" placeholder="Search" v-model="searchText" >
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
  <router-view/>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'
//import Modal from './components/Modal.vue';

export default {
  data() {
    return {
      searchText: '',
    }
  },
  methods: {
    eventTest() {
      console.log('success');
    },

    search(searchText) {
      //console.log('search');
      console.log(searchText);
      //this.searchText = '';
      //document.getElementsByName("SearchInput").reset;
      //this.$router.push({path:'/search', query:{}});
      this.$router.push({path:'/search', query:{pa:searchText}});
    }

    /* openModal(isbn) {
      console.log('app=' + isbn);
      this.stateId = isbn;
      this.isModalAct = true;
    },
    closeModal() {
      this.stateId = '';
      this.isModalAct =false;
    } */
  },
  components: {
    //Modal
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
