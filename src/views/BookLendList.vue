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
                <span class="input-group-text" id="basic-addon1">대출자</span>
                <input type="text" class="form-control" id="user" v-model="user" autofocus> 
                <button class="btn btn-primary" type="button" id="button-addon2">확인</button>
              </div> -->

              <table id="tableId" class="table table-hover mt-5">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">제목</th>
                    <th scope="col">저자</th>
                    <th scope="col">출판사</th>
                    <th scope="col">서고</th>
                  </tr>
                </thead>
                <tbody>
                  <!-- <tr :key="i" v-for="(book, i) in books" @click="addRowHandlers"> -->
                  <tr :key="i" v-for="(book, i) in books" >
                    <th scope="row">{{ i+1 }}</th>
                    <!-- <td><img :src="`{{ book.link }}`" alt="빈표지" width="25px" height="25px">{{ imSrc }}</td> -->
                    <!-- <td>{{ book.link }}</td> -->
                    <td @click="goToLend(book._id);">{{ book.title }}</td>
                    <td @click="goToLend(book._id);">{{ book.author }}</td>
                    <td @click="goToLend(book._id);">{{ book.publisher }}</td>
                    <td @click="goToLend(book._id);">{{ book.library }}</td>
                    <td>
                      <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                        <button class="btn btn-warning me-md-2" type="button" @click="goToLend(book._id);">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
                          </svg>
                        </button>
                        <!-- <button class="btn btn-danger me-md-2" type="button" data-bs-toggle="modal" data-bs-target="#deleteModal">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash mx-3" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                          </svg>
                        </button> -->
                        <!-- <button class="btn btn-danger me-md-2" type="button" @click="sendModal(book.isbn, book.title);">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash mx-3" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                          </svg>
                        </button> -->
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
    this.getBooklist();
    /* axios.get('https://api.hnpwa.com/v0/news/1.json')
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      }); */
  },
  mounted() {
    //this.test();
  },
  watch: {
    isbn() {
      //console.log("watch");
    }
  },
  methods: {
    sendModal(isbn, title) {
      if(window.confirm(title + " 삭제하시겠습니까?")){
        //this.goToDelete(this.isbn);
        //console.log("del");
        this.goToDelete(isbn);
        
      }
      
      //  
      // this.$store.commit('currenrBook()');
      //this.$emit('openModal', isbn);
    },


    test: function(book) {
      alert(book.title);
      //페이지 이동
    },
    
    addRowHandlers() {
      //var vm_isbn = this.isbn;
      //console.log('this.isbn=' + vm_isbn);
      var table = document.getElementById("tableId");
      var rows = table.getElementsByTagName("tr");
      for (let i = 0; i < rows.length; i++) {
        var currentRow = table.rows[i];
        var createClickHandler = function(row) {
          return function() {
            var cell = row.getElementsByTagName("td")[3];
            var isbn = cell.innerHTML;
            //vm_isbn = isbn;

            //console.log(vm_isbn);
            console.log(isbn);
            console.log(this);
          };

          //console.log(currentRow);
          //return row.getElementsByTagName("td")[3];


          //console.log(currentRow);
          //console.log(row.getElementsByTagName("td")[3]);
          //return row.getElementsByTagName("td")[3];
        };
        currentRow.onclick = createClickHandler(currentRow);
        //currentRow.onclick = console.log('row = ' + table.rows[i]);
      }
      //console.log(vm_isbn);
      //console.log('this.isbn' + this.isbn);
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
    goToDetail(id) {
      //console.log(isbn, id);
      //this.$router.push({path:'/detail', query:{isbn:isbn, id:id}}); 
      this.$router.push({path:'/detail', query:{id:id}}); 
    },
    goToModify(id) {
      //console.log(isbn, id);
      this.$router.push({path:'/modify', query:{id:id}}); 
    },
    goToLend(id) {
      //console.log(isbn, id);
      this.$router.push({path:'/lend', query:{id:id}}); 
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
