<template>
  <!-- <Modal v-if="isModalAct" @close-modal="closeModal" />> -->
  <div>
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
            <router-link class="nav-link" to="/list">도서 조회/추가</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/return">반납</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/lendlist">대출</router-link>
          </li>
        </ul>
        <!-- 검색창 -->
        <!-- <form class="d-flex" @submit.prevent="search(this.searchText)">
          <input class="form-control me-2" type="search" placeholder="Search" v-model="searchText" >
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form> -->

        <!-- 검색창dropdown -->
        <form class="d-flex" @submit.prevent="search(ddVm.selectedValue, searchText)">
          <div class="input-group mb-3">
            <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">{{ ddVm.selectedText }}</button>
            <ul class="dropdown-menu">
              <li :key="i" :value="option.value" v-for="(option,i) in ddVm.options"><a class="dropdown-item" @click="selectCategory(option)" href="javascript:void(0)">{{option.text}}</a></li>
              <!-- <li><a class="dropdown-item" href="javascript:void(0)">저자</a></li>
              <li><a class="dropdown-item" href="javascript:void(0)">출판사</a></li>
              <li><a class="dropdown-item" href="javascript:void(0)">ISBN</a></li> -->
            </ul>
            <!-- <input type="text" class="form-control" aria-label="Text input with dropdown button"> -->
            <input id="input-submit" class="form-control me-2" type="search" placeholder="Search" v-model="searchText" >
            <button class="btn btn-outline-success" type="submit">Search</button>
          </div>
        </form>
      </div>
    </div>
  </nav>
  <router-view/>
  </div>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'
//import Modal from './components/Modal.vue';

export default {
  data() {
    return {
      searchText: '',
      ddVm: {
        selectedValue: "title",
        selectedText: "제목",
        options: [
          {
            "value": "title",
            "text": "제목"
          },
          {
            "value": "isbn",
            "text": "ISBN"
          },
          {
            "value": "author",
            "text": "저자"
          },
          {
            "value": "publisher",
            "text": "출판사"
          },
        ]
      },
    }
  },
  
  methods: {
    selectCategory(option) {
      this.ddVm.selectedValue = option.value;
      this.ddVm.selectedText = option.text;
      document.getElementById("input-submit").focus();
      //console.log('success ' + this.ddVm.selectedValue + this.ddVm.selectedText);
    },

    search(searchValue, searchText) {
      //console.log(searchValue);
      //console.log(searchText);
      
      //this.$router.push({path:'/search', query:{pa:searchText}});
      this.searchText = '';
      this.$router.push({path:'/search', query:{searchValue:searchValue, searchText:searchText}});
    }
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
