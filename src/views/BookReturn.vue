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
                          <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
                          <!-- <router-link to="/addbook" class="btn btn-primary">Add Item</router-link> -->
                        </div>
                    </div>
                </div>
              </div>

              <!-- Modal -->
              <!-- <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">도서 삭제</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                       삭제되었습니다.
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">취소</button>
                      <button type="button" class="btn btn-danger" @click="goToDelete(book.isbn);">{{isbn}}확인</button>
                    </div>
                  </div>
                </div>
              </div> -->

              <!-- <div class="input-group mt-5">
                <span class="input-group-text" id="basic-addon1">반납자</span>
                <input type="text" class="form-control" id="user" v-model="user" autofocus> 
                <button class="btn btn-primary" type="button" id="button-addon2" @click="sendModal(user)">확인</button>
              </div> -->

              <table id="tableId" class="table table-hover mt-3">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">제목</th>
                    <th scope="col">저자</th>
                    <th scope="col">출판사</th>
                    <th scope="col">서고</th>
                    <th scope="col">수량</th>
                  </tr>
                </thead>
                <tbody>
                  <!-- <tr :key="i" v-for="(book, i) in books" @click="addRowHandlers"> -->
                  <tr :key="i" v-for="(book, i) in books" >
                    <th scope="row">{{ i+1 }}</th>
                    <!-- <td><img :src="`{{ book.link }}`" alt="빈표지" width="25px" height="25px">{{ imSrc }}</td> -->
                    <!-- <td>{{ book.link }}</td> -->
                    <td @click="confirmReturnBook(book.stock_id, book.qty, book.title);">{{ book.title }}</td>
                    <td @click="confirmReturnBook(book.stock_id, book.qty, book.title);">{{ book.author }}</td>
                    <td @click="confirmReturnBook(book.stock_id, book.qty, book.title);">{{ book.publisher }}</td>
                    <td @click="confirmReturnBook(book.stock_id, book.qty, book.title);">{{ book.library }}</td>
                    <td @click="confirmReturnBook(book.stock_id, book.qty, book.title);">{{ -book.qty }}</td>
                    <td>
                      <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                        <!-- <button class="btn btn-warning me-md-2" type="button" @click="goToModify(book.isbn, book._id);">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square mx-3" viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                          </svg>
                        </button> -->
                        
                        <button class="btn btn-warning me-md-2" type="button" @click="confirmReturnBook(book.stock_id, book.qty, book.title);">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
          </div>
      </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      books: [],
      isbn: '',
      bookDetail: [],
      bookDelete: [],
      user: '테스터'
    }
  },
  props: {
    bookSelect: Object
  },
  components: {
  },
  computed: {
    
  },
  created() {
    
  },
  mounted() {
    //this.test();
    this.getBooklistUser(this.user);
  },
  watch: {
    isbn() {
      //console.log("watch");
    }
  },
  methods: {

    sendModal(id, qty, title) {
      if(window.confirm(title + " 을 반납합니까?")) {
        //this.goToDelete(this.isbn);
        //console.log("del");
        this.returnBook(id, qty);
        
      }
      
      //  
      // this.$store.commit('currenrBook()');
      //this.$emit('openModal', isbn);
    },
    
    
    async getBooklistUser(user) {
      //console.log(user);
      let url = "http://localhost:8001/book/userbook";
      let book = await this.$api(url, "post", {user:user});
      if (book.rows > 0) {
        //console.log(book.rows);
        this.books = book.output;
      }
      
      //console.log(this.books);
    },

    confirmReturnBook(id, qty, title) {
      if(window.confirm(title + " 을 반납합니까?")) {
        //console.log(id, qty, title);
        this.returnBook(id, qty);
        
        
      }
      this.getBooklistUser(this.user);
      //  
      // this.$store.commit('currenrBook()');
      //this.$emit('openModal', isbn);
    },

    async returnBook(id, qty) {
      let url = "http://203.254.143.87:8001/book/return";
      await this.$api(url, "post", {id:id, qty:qty});
      this.getBooklistUser(this.user);
      //this.returnBook(id, qty);
      //console.log(book);
      /* if (book.rows > 0) {
        //console.log(book.rows);
        this.books = book.output;
      } */
      
      //console.log(this.books);
    },
    async getBooklist() {
      let url = "http://203.254.143.87:8001/book/";
      let book = await this.$api(url, "get", {});
      if (book.rows > 0) {
        //console.log(book.rows);
        this.books = book.output;
      }
      
      //console.log(this.books);
    },

    async getBookDetail(isbn) {
      let bookDetail = await this.$api("http://203.254.143.87:8001/book/isbn/" + isbn, "get", {});
      if(bookDetail.rows > 0) {
        this.bookDetail = bookDetail.output;
      }
      //console.log('id=' + this.bookDetail._id);
    },
    goToDetail(isbn, id) {
      //console.log(isbn, id);
      this.$router.push({path:'/detail', query:{isbn:isbn, id:id}}); 
    },
    goToModify(isbn, id) {
      //console.log(isbn, id);
      this.$router.push({path:'/modify', query:{isbn:isbn, id:id}}); 
    },
    async goToDelete(isbn) {

      let bookDelete = await this.$api("http://203.254.143.87:8001/book/", "delete", {isbn});
      if(bookDelete.rows > 0) {
        this.bookDelete = bookDelete.output;
        //console.log("if");
        this.getBooklist();
      }
      //this.getBooklist();
      
      
      //console.log("this.bookDelete");
      //console.log(this.bookDelete);
    },
    delNList(isbn) {
        this.goToDelete(isbn);
        this.getBookList();
    }
  }
}
</script>

<style scoped>
  #tableId tr {
    cursor: pointer;
  } 
</style>
