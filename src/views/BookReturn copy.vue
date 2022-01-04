<template>
  <div>
    <main class="mt-3">
      <div class="container">
        <div class="row g-3">
          <div class="col-lg-3 col-mid-6">
            <div class="card" style="width: 18rem;">
              <!-- <img src="..." class="card-img-top" alt="..."> -->
              <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
              </svg>
              <div class="card-body">
                <h2 class="card-title">반납</h2>
                <a href="#" class="btn btn-primary" @click="gotoLendReturn(isbn, id)">반납완료</a>
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
          <div class="mt-5 mb-5" v-show="imgSrc">
            <label for="coverImage" class="form-label">표지 이미지</label>
            <!-- <input type="text" class="form-control" id="coverImage" v-model="imgSrc"> -->
            <div>
              <img :src=imgSrc class="img-responsive" alt="이미지를 찾을 수 없습니다.">
            </div>
          </div>
          <div class="input-group mb-5">
            <span class="input-group-text" id="basic-addon1">제 목</span>
            <label type="text" class="form-control" id="title">{{ title }}</label>
          </div>
          <div class="input-group mb-5">
            <span class="input-group-text" id="basic-addon2">ISBN</span>
            <label type="text" class="form-control" id="isbn">{{ isbn }}</label>
          </div>
          <div class="input-group mb-5">
            <span class="input-group-text" id="basic-addon3">저 자</span>
            <label type="text" class="form-control" id="author">{{ author }}</label>
          </div>
          <div class="input-group mb-5">
            <span class="input-group-text" id="basic-addon4">출판사</span>
            <label type="text" class="form-control" id="publisher">{{ publisher }}</label>
          </div>
          <div class="input-group mb-5">
            <span class="input-group-text" id="basic-addon5">수 량</span>
            <label type="text" class="form-control" id="qty">{{ qty }}</label>
          </div>
          <div class="input-group mb-5">
            <span class="input-group-text" id="basic-addon6">서 고</span>
            <label type="text" class="form-control" id="library">{{ library }}</label>
          </div>
          <div class="input-group mb-5">
            <span class="input-group-text" id="basic-addon6">등록번호</span>
            <label type="text" class="form-control" id="regnum">{{ regnum }}</label>
          </div>
          <div class="input-group mb-5">
            <span class="input-group-text" id="basic-addon6">신청인</span>
            <input type="text" class="form-control" id="user" v-model="user" ref="user" autofocus>
          </div>
          <!-- <div class="mt-3">
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
          </div> -->
            <!-- <div id="isbnHelp" class="form-text text-primary">바코드스캐너를 이용하세요.</div> -->
          <!-- <div class="mt-3">
            <label for="library" class="form-label">서고</label>
            <input type="text" class="form-control" id="library" placeholder="혁신지원팀 캐비넷" v-model="library">
          </div> -->
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
      id: '',
      qty: 0,
      regnum: 0,
      user: ''
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
      this.id =  this.$route.query.id;
      this.getBookInfoDB(this.isbn);
  },
  mounted() {
    //this.getBookInfo();
    
    //document.getElementById("isbn").focus();
  },
  updated() {
    this.$refs.user.focus();
  },
  methods: {
    async getBookInfo(isbn) {
      /* let url = "http://203.254.143.87:8001/search/d_isbn/" + isbn;
      //console.log(url);
      let book = await this.$api(url, "get", {});
      //console.log(book);
      this.imgSrc = book.rss.channel.item.image._text;
      this.title = book.rss.channel.item.title._text;
      this.author = book.rss.channel.item.author._text;
      this.publisher = book.rss.channel.item.publisher._text;
      //this.id = book.rss.channel.item._id._text;
      document.getElementById("library").focus(); */

      let bookDetail = await this.$api("http://203.254.143.87:8001/book/isbn/" + isbn, "get", {});
      console.log(bookDetail);
      this.imgSrc = bookDetail.output.link;
      this.isbn = bookDetail.output.isbn;
      this.title = bookDetail.output.title;
      this.author = bookDetail.output.author;
      this.publisher = bookDetail.output.publisher;
      this.id = bookDetail.output._id;
      this.qty = bookDetail.output.qty;
      this.library = bookDetail.output.library;
      console.log(this.imgSrc);
      /* if(bookDetail.rows > 10) {
        this.imgSrc = bookDetail..rss.channel.item.image._text;
        this.title = book.rss.channel.item.title._text;
        this.author = book.rss.channel.item.author._text;
        this.publisher = book.rss.channel.item.publisher._text;
      } */
    },
    async getBookInfoDB(isbn) {
      let url = "http://203.254.143.87:8001/book/isbn/" + isbn;
      //console.log(url);
      let book = await this.$api(url, "get", {});
      //console.log(book.output[0]);
      this.books = book.output;
      this.imgSrc = book.output[0].link;
      this.title = book.output[0].title;
      this.author = book.output[0].author;
      this.publisher = book.output[0].publisher;
      this.id = book.output[0]._id;
      this.qty = book.output[0].qty;
      this.library = book.output[0].library;
      //document.getElementById("library").focus();
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
      let url = "http://203.254.143.87:8001/book/modify";
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
    goToModify(isbn, id) {
      //console.log(isbn, id);
      this.$router.push({path:'/modify', query:{isbn:isbn, id:id}}); 
    },
  }
}
</script>
<style scoped>
  img {
    
      
    
  };
</style>