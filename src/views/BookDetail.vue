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
                <a href="#" class="btn btn-primary">도서 등록/수정</a>
              </div>
            </div>
          </div>
        </div>
        <form>
          <div class="mt-3">
            <label for="isbn" class="form-label">ISBN</label>
            <input type="text" class="form-control" id="isbn">
            <div id="isbnHelp" class="form-text text-primary">바코드스캐너를 이용하세요.</div>
          </div>
          <div class="mt-3">
            <label for="coverImage" class="form-label">표지 이미지</label>
            <input type="text" class="form-control" id="coverImage">
          </div>
          <div class="mt-3">
            <label for="bookTitle" class="form-label">제목</label>
            <input type="text" class="form-control" id="bookTitle">
          </div>
          <div class="mt-3">
            <label for="author" class="form-label">저자</label>
            <input type="text" class="form-control" id="author">
          </div>
          <div class="mt-3">
            <label for="publisher" class="form-label">출판사</label>
            <input type="text" class="form-control" id="publisher">
          </div>
          <div class="mt-3">
            <label for="publisher" class="form-label">서고</label>
            <input type="text" class="form-control" id="publisher">
          </div>
        </form>
      </div>
    </main>
  </div>
</template>
