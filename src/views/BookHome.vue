<template>
  <div>
  <main class="mt-3">
          <div class="container">
              <h1>Welcome to 도서관리</h1>
              <div class="row mt-3">
                <div class="col-lg-3 col-mid-6">
                    <div class="card" style="width: 18rem;">
                        <!-- <img src="..." class="card-img-top" alt="..."> -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-book" viewBox="0 0 16 16">
                            <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
                        </svg>
                        <div class="card-body">
                          <h2 class="card-title">도서조회/등록</h2>
                          <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
                          <router-link to="/list" class="btn btn-primary">조회/등록</router-link>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-mid-6">
                  <div class="card" style="width: 18rem;">
                      <!-- <img src="..." class="card-img-top" alt="..."> -->
                      <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-arrow-up-circle" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
                      </svg>
                      <div class="card-body">
                        <h2 class="card-title">도서반납</h2>
                        <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
                        <a href="#" class="btn btn-primary disabled">반납</a>
                      </div>
                  </div>
                </div>
                <div class="col-lg-3 col-mid-6">
                  <div class="card" style="width: 18rem;">
                      <!-- <img src="..." class="card-img-top" alt="..."> -->
                      <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-arrow-down-circle" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
                      </svg>
                      <div class="card-body">
                        <h2 class="card-title">도서대출</h2>
                        <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
                        <a href="#" class="btn btn-primary disabled">대출</a>
                      </div>
                  </div>
                </div>
                <div class="col-lg-3 col-mid-6">
                  <div class="card" style="width: 18rem;">
                      <!-- <img src="..." class="card-img-top" alt="..."> -->
                      <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                      </svg>
                      <div class="card-body">
                        <h2 class="card-title">사용자</h2>
                        <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
                        <a href="#" class="btn btn-primary disabled">사용자</a>
                      </div>
                  </div>
                </div>
              </div>
              
          </div>
      </main>
    </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

/* export default {
  name: 'Home',
  components: {
    HelloWorld
  }
} */
</script>
