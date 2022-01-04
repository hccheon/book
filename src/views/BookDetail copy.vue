<template>
  <div>
    <main class="mt-3">
      <div class="container">
        <div class="row g-3">
          <div class="col-lg-3 col-mid-6">
            <div class="card" style="width: 18rem;">
              <!-- <img src="..." class="card-img-top" alt="..."> -->
              <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-book" viewBox="0 0 16 16">
                            <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
                        </svg>
              <div class="card-body">
                <h2 class="card-title">도서 상세</h2>
                <!-- <a href="#" class="btn btn-primary" @click="gotoModify(isbn, id)">도서 수정</a> -->
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
      qty: 0
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