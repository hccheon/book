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

        <div v-show="showAlert">
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
          <div class="alert alert-success d-flex align-items-center mt-5" role="alert">
            <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
            <div>
              {{ addedBook }}이 등록되었습니다.
            </div>
          </div>
        </div>

        <form>
          <div class="mt-3">
            <label for="isbn" class="form-label">ISBN</label>
            <input type="text" class="form-control" id="isbn" v-model="isbn" @keypress.enter="getBookInfo(isbn)" ref="isbn">
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
      qty: 1,
      addedBook: ''
    }
  },
  computed: {
    showAlert() {
      if (this.addedBook == '') {
        return false;
      } else {
        return true;
      }
      //this.setFocus();           
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
  async mounted() {
    this.setFocus();
    this.$nextTick(() => {
      console.log(this.$refs["isbn"]);
    });
  },
  updated() {
    
  },
  methods: {
    async getBookInfo(isbn) {
      let url = "http://203.254.143.87:8001/search/d_isbn/" + isbn;
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
      let url = "http://203.254.143.87:8001/book/";
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
      //document.getElementById("isbn").focus();
      this.$refs.isbn.setFocus;
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
        this.addedBook = this.title;
        //console.log("validated");
        //this.sendModal(this.title);
        this.isbn = '';
        this.title = '';
        this.author = '';
        this.publisher = '';
        this.imgSrc = '';
        this.library = '';
        //this.setFocus();

      } else if (this.imgSrc == '') {
        alert('표지 이미지가 없습니다.');

      } else {
        alert('잘못된 책 정보입니다. 서고 정보를 확인하세요');
      }
      this.setFocus();
    },

    

  }
}
</script>
<style scoped>
  ::-webkit-outer-spin-button, ::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
</style>