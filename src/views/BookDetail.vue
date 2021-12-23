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
                <a href="#" class="btn btn-primary" @click="sendModal(id, title)">도서 등록/수정</a>
              </div>
            </div>
          </div>
        </div>
        <form>
          <!-- <div class="mt-3">
            <label for="isbn" class="form-label">ISBN</label>
            <input type="text" class="form-control" id="isbn" v-model="isbn" @keypress.enter="getBookInfoDB(isbn)" autofocus>
            <div id="isbnHelp" class="form-text text-primary">바코드스캐너를 이용하세요.</div>
          </div> -->
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
            <label for="isbn" class="form-label">ISBN</label>
            <input type="text" class="form-control" id="isbn" v-model="isbn" @keypress.enter="getBookInfoDB(isbn)" autofocus>
            <!-- <div id="isbnHelp" class="form-text text-primary">바코드스캐너를 이용하세요.</div> -->
          </div>
          <div class="mt-3">
            <label for="library" class="form-label">서고</label>
            <input type="text" class="form-control" id="library" placeholder="혁신지원팀 캐비넷" v-model="library">
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
      id: ''
    }
  },
  created() {
    
    /* axios.get('https://api.hnpwa.com/v0/news/1.json')
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      }); */
      this.isbn =  this.$route.query.isbn;
      this.getBookInfoDB(this.isbn);
  },
  mounted() {
    //this.getBookInfo();
    if (this.isbn != '') {
      //console.log(this.isbn);
      //this.getBookInfo(this.isbn);
    }
    //document.getElementById("isbn").focus();
  },
  methods: {
    async getBookInfo(isbn) {
      /* let url = "http://localhost:8001/search/d_isbn/" + isbn;
      //console.log(url);
      let book = await this.$api(url, "get", {});
      //console.log(book);
      this.imgSrc = book.rss.channel.item.image._text;
      this.title = book.rss.channel.item.title._text;
      this.author = book.rss.channel.item.author._text;
      this.publisher = book.rss.channel.item.publisher._text;
      //this.id = book.rss.channel.item._id._text;
      document.getElementById("library").focus(); */

      let bookDetail = await this.$api("http://localhost:8001/book/isbn/" + isbn, "get", {});
      console.log(bookDetail);
      this.imgSrc = bookDetail.output.link;
      this.isbn = bookDetail.output.isbn;
      this.title = bookDetail.output.title;
      this.author = bookDetail.output.author;
      this.publisher = bookDetail.output.publisher;
      this.id = bookDetail.output._id;
      console.log(this.imgSrc);
      /* if(bookDetail.rows > 10) {
        this.imgSrc = bookDetail..rss.channel.item.image._text;
        this.title = book.rss.channel.item.title._text;
        this.author = book.rss.channel.item.author._text;
        this.publisher = book.rss.channel.item.publisher._text;
      } */
    },
    async getBookInfoDB(isbn) {
      let url = "http://localhost:8001/book/isbn/" + isbn;
      //console.log(url);
      let book = await this.$api(url, "get", {});
      console.log(book.output[0]);
      this.books = book.output;
      this.imgSrc = book.output[0].link;
      this.title = book.output[0].title;
      this.author = book.output[0].author;
      this.publisher = book.output[0].publisher;
      this.id = book.output[0]._id;
      document.getElementById("library").focus();
    },
    sendModal(id, title) {
      if(window.confirm(title + "수정하시겠습니까?")){
        //this.goToDelete(this.isbn);
        //console.log("del");
        this.postBookModify(this.id);
      }
      // this.$store.commit('currenrBook()');
      //this.$emit('openModal', isbn);
    },
    async postBookModify(id) {
      let url = "http://localhost:8001/book/modify";
      let bookInfo = {
        "title": this.title, 
        "author": this.author, 
        "publisher": this.publisher, 
        "link": this.imgSrc, 
        "isbn": this.isbn,
        "_id": id
      };
      console.log(bookInfo);
      let book = await this.$api(url, "post", bookInfo);
      console.log(book);
      this.$router.push({path:'/list', query:{}}); 
    },
  }
}
</script>
