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
                          <h2 class="card-title">도서</h2>
                          <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
                          <router-link to="/addbook" class="btn btn-primary">Add Item</router-link>
                        </div>
                    </div>
                </div>
              </div>

              <!-- Modal -->
              <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">도서 삭제</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                       정말 삭제하시겠습니까?
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">취소</button>
                      <button type="button" class="btn btn-danger" @click="goToDelete(book.isbn);">{{isbn}}삭제</button>
                    </div>
                  </div>
                </div>
              </div>

              <table id="tableId" class="table table-hover mt-3">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">제목</th>
                    <th scope="col">저자</th>
                    <th scope="col">출판사</th>
                    <th scope="col">ISBN</th>
                  </tr>
                </thead>
                <tbody>
                  <!-- <tr :key="i" v-for="(book, i) in books" @click="addRowHandlers"> -->
                  <tr :key="i" v-for="(book, i) in books">
                    <th scope="row">{{ i+1 }}</th>
                    <!-- <td><img :src="`{{ book.link }}`" alt="빈표지" width="25px" height="25px">{{ imSrc }}</td> -->
                    <!-- <td>{{ book.link }}</td> -->
                    <td>{{ book.title }}</td>
                    <td>{{ book.author }}</td>
                    <td>{{ book.publisher }}</td>
                    <td>{{ book.isbn }}</td>
                    <td>
                      <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                        <button class="btn btn-warning me-md-2" type="button" @click="goToDetail(book.isbn, book._id);">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square mx-3" viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                          </svg>
                        </button>
                        <!-- <button class="btn btn-danger me-md-2" type="button" data-bs-toggle="modal" data-bs-target="#deleteModal">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash mx-3" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                          </svg>
                        </button> -->
                        <button class="btn btn-danger me-md-2" type="button" @click="goToDelete(book.isbn);">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash mx-3" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
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
//import axios from 'axios';

export default {
  data() {
    return {
      books: [],
      isbn: '',
      bookDetail: [],
      bookDelete: [],
    }
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
      console.log("watch");
    }
  },
  methods: {
    test() {
      console.log('aaa');
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
      let url = "http://127.0.0.1:8001/book/";
      let book = await this.$api(url, "get", {});
      this.books = book.output;
      //console.log(this.books);
    },
    async getBookDetail(isbn) {
      let bookDetail = await this.$api("http://localhost:8001/book/isbn/" + isbn, "get", {});
      if(bookDetail.rows > 0) {
        this.bookDetail = bookDetail.output;
      }
      //console.log('id=' + this.bookDetail._id);
    },
    goToDetail(isbn, id) {
      console.log(isbn, id);
      this.$router.push({path:'/detail', query:{isbn:isbn, id:id}}); 
    },
    async goToDelete(isbn) {
      let bookDelete = await this.$api("http://localhost:8001/book/", "delete", {isbn});
      if(bookDelete.rows > 0) {
        this.bookDelete = bookDelete.output;
      }
      this.getBooklist();
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
