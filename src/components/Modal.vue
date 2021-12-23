<template>
  <div>
    <!-- Modal -->
    <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="$emit('close-modal')">취소</button>
            <button type="button" class="btn btn-danger" @click="closeModal">확인</button>
        </div>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Modal',
    methods: {
        closeModal() {
            this.$emit('closeModal');
        }
    },
    props: {
        title: String,
        message: String
    }
}
</script>

<style>

</style>