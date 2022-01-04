<template>
  <div>
    <main class="mt-3">
      <div class="container">
        <div class="row g-3">
          <div class="col-lg-3 col-mid-6">
            <div class="card" style="width: 18rem;">
              <!-- <img src="..." class="card-img-top" alt="..."> -->
              <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
              </svg>
              <div class="card-body">
                <h2 class="card-title">대출</h2>
                <!-- <a href="#" class="btn btn-primary" @click="gotoLendReturn(isbn, id)">대출완료</a> -->
                <a href="#" class="btn btn-primary disabled" v-if="warning" @click="sendModal(id, title, qty)">대출완료</a>
                <a href="#" class="btn btn-primary" v-else @click="sendModal(id, title, qty)">대출완료</a>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-5" v-show="userErr">
          <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
              <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
            </symbol>
            <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
            </symbol>
            <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </symbol>
          </svg>                
          <div class="alert alert-danger d-flex align-items-center" role="alert">
            <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
            <div>
              신청인을 입력하세요.
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
            <span class="input-group-text" id="basic-addon6">서 고</span>
            <label type="text" class="form-control" id="library">{{ library }}</label>
          </div>
          <div class="input-group mb-5">
            <span class="input-group-text" id="basic-addon5">수 량</span>
            <label type="text" class="form-control" id="qty">{{ qty }}</label>
          </div>
          <!-- <div class="input-group mb-5">
            <span class="input-group-text" id="basic-addon6">등록번호</span>
            <label type="text" class="form-control" id="regnum">{{ regnum }}</label>
          </div> -->
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
      user: '',
      userErr: false,
    }
  },
  computed: {
    warning() {
      if (this.qty <= 0) {
        return true;
      } else {
        return false;
      }
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
      this.getBookInfoId(this.id);
  },
  
  mounted() {
    //this.getBookInfo();
    
    //document.getElementById("isbn").focus();
  },
  updated() {
    this.$refs.user.focus();
  },

  methods: {
    async getBookInfoId(id) {
      
      /* let bookDetail = await this.$api("http://203.254.143.87:8001/book/isbn/" + isbn, "get", {});
      console.log(bookDetail);
      this.imgSrc = bookDetail.output.link;
      this.isbn = bookDetail.output.isbn;
      this.title = bookDetail.output.title;
      this.author = bookDetail.output.author;
      this.publisher = bookDetail.output.publisher;
      this.id = bookDetail.output._id;
      this.qty = bookDetail.output.qty;
      this.library = bookDetail.output.library;
      console.log(this.imgSrc); */

      let bookDetail = await this.$api("http://203.254.143.87:8001/book/id", "post", {id:id});
      //console.log(bookDetail);
      this.imgSrc = bookDetail.output[0].link;
      this.isbn = bookDetail.output[0].isbn;
      this.title = bookDetail.output[0].title;
      this.author = bookDetail.output[0].author;
      this.publisher = bookDetail.output[0].publisher;
      this.id = bookDetail.output[0]._id;
      this.qty = bookDetail.output[0].c_qty;
      this.o_qty = bookDetail.output[0].t_qty;
      this.library = bookDetail.output[0].library;
      //console.log(bookDetail.output[0].c_qty);
      
    },
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
      //console.log(bookDetail);
      this.imgSrc = bookDetail.output.link;
      this.isbn = bookDetail.output.isbn;
      this.title = bookDetail.output.title;
      this.author = bookDetail.output.author;
      this.publisher = bookDetail.output.publisher;
      this.id = bookDetail.output._id;
      this.qty = bookDetail.output.c_qty;
      this.library = bookDetail.output.library;
      //console.log(this.imgSrc);
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
    sendModal(id, title, qty) {
      if (this.user!='') {
        
        if(window.confirm(title + " 대출하시겠습니까?")){
          //this.goToDelete(this.isbn);
          //console.log("대출" + id);
          this.postBookLend(id, qty);
        }
        this.$router.push({path:'/lendlist', query:{}});

      } else {
        this.warning = true;
      }
      
      
      // this.$store.commit('currenrBook()');
      //this.$emit('openModal', isbn);
    },
    async postBookLend(id, qty) {
      let url = "http://203.254.143.87:8001/book/lend";
      qty = 1;
      let lendInfo = {
        "qty": qty, 
        //"user": this.user, 
        "id": id
      };
      //console.log(lendInfo);
      await this.$api(url, "post", lendInfo);
      //console.log(book);
      //this.$router.push({path:'/list', query:{}}); 
      //this.$router.push({path:'/lendlist', query:{}});
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