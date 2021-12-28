<template>
  <div>
    <main class="mt-3">
      <div class="container">
        <div class="row g-3">
          <div class="col-lg-3 col-mid-6">
            <div class="card" style="width: 18rem;">
              <!-- <img src="..." class="card-img-top" alt="..."> -->
              <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
              </svg>
              <div class="card-body">
                <h2 class="card-title">도서 등록/수정</h2>
                <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
                <!-- <a href="#" class="btn btn-primary" @click="postBookAdd(isbn)">도서 등록/수정</a> -->
                <a href="#" class="btn btn-primary" @click="validateInputs()">도서 등록/수정</a>
              </div>
            </div>
          </div>
        </div>
        <form>
          <div class="mt-3">
            <label for="isbn" class="form-label">ISBN</label>
            <input type="text" class="form-control" id="isbn" v-model="isbn" @keypress.enter="getBookInfo(isbn)">
            <div id="isbnHelp" class="form-text text-primary">바코드스캐너를 이용하세요.</div>
          </div>
          <div class="mt-3" v-show="imgSrc">
            <label for="coverImage" class="form-label">표지 이미지</label>
            <!-- <input type="text" class="form-control" id="coverImage" v-model="imgSrc"> -->
            <div>
              <img :src=imgSrc class="img-thumbnail" alt="이미지를 찾을 수 없습니다.">
            </div>
          </div>
          <div class="mt-3">
            <label for="bookTitle" class="form-label">제목</label>
            <input type="text" class="form-control" id="bookTitle" v-model="title">
          </div>
          <div class="mt-3">
            <label for="author" class="form-label">저자</label>
            <input type="text" class="form-control" id="author" v-model="author">
          </div>
          <div class="mt-3">
            <label for="publisher" class="form-label">출판사</label>
            <input type="text" class="form-control" id="publisher" v-model="publisher">
          </div>
          <div class="mt-3">
            <label for="publisher" class="form-label">수량</label>
            <input type="number" class="form-control" id="qty" v-model="qty">
          </div>
          <div class="mt-3">
            <label for="library" class="form-label">서고</label>
            <input type="text" class="form-control" id="library" v-model="library" placeholder="혁신지원팀 캐비넷">
            
          </div>
        </form>
      </div>
    </main>
  </div>
</template>
<script>
//import axios from 'axios';

export default {
  data() {
    return {
      books: [],
      isbn: '',
      imgSrc: '',
      title: '',
      author: '',
      publisher: '',
      library: '',
      qty: 1
    }
  },
  created() {
    
    //this.getBookList();
    /* axios.get('https://api.hnpwa.com/v0/news/1.json')
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      }); */
  },
  mounted() {
    this.setFocus();
  },
  updated() {
    
  },
  methods: {
    async getBookInfo(isbn) {
      let url = "http://localhost:8001/search/d_isbn/" + isbn;
      //console.log(url);
      let book = await this.$api(url, "get", {});
      //console.log(book);
      this.imgSrc = book.rss.channel.item.image._text;
      this.title = book.rss.channel.item.title._text;
      this.author = book.rss.channel.item.author._text;
      this.publisher = book.rss.channel.item.publisher._text;
      document.getElementById("library").focus();
    },
    
    async postBookAdd() {
      let url = "http://localhost:8001/book/";
      let bookInfo = {
        "title": this.title, 
        "author": this.author, 
        "publisher": this.publisher, 
        "link": this.imgSrc, 
        "isbn": this.isbn, 
        "qty": this.qty, 
        "library": this.library, 
      };
      console.log(bookInfo);
      let book = await this.$api(url, "post", bookInfo);
      console.log(book);
      /* this.isbn = '';
      this.title = '';
      this.author = '';
      this.publisher = '';
      this.imgSrc = '';
      this.library = ''; */
      //this.$router.push({path:'/list', query:{}}); 
    },
    setFocus() {
      document.getElementById("isbn").focus();
    },
    sendModal(title) {
      window.confirm(title + " 등록되었습니다.");  
    },
    validateInputs() {
      if (this.title != '' &&
          this.isbn != '' &&
          this.author != '' &&
          this.publisher != '' &&
          this.qty > 0 &&
          this.library != '') {
        
        this.postBookAdd();
        //console.log("validated");
        //this.sendModal(this.title);
        this.isbn = '';
        this.title = '';
        this.author = '';
        this.publisher = '';
        this.imgSrc = '';
        this.library = '';
        this.setFocus();

      } else if (this.imgSrc != '') {
        alert('표지 이미지가 없습니다.');

      } else {
        alert('잘못된 책 정보입니다. 책 정보를 확인하세요');
      }
      
    }

  }
}
</script>
<style scoped>
  ::-webkit-outer-spin-button, ::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
</style>