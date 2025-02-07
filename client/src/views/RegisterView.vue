<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-12 col-md-8 col-lg-6 mx-auto border py-4 px-md-4">
        <form>
          <h1 class="h3 mb-3">Register</h1>
          <div class="mb-2">
            <label for="email" class="form-label">E-Mail address</label>
            <input type="email" class="form-control" id="email">
          </div>
          <div class="mb-2">
            <label for="username" class="form-label">Username</label>
            <input type="text" class="form-control" id="username">
          </div>
          <div class="mb-2">
            <label for="password1" class="form-label">Password</label>
            <input type="password" class="form-control" id="password1">
          </div>
          <div class="mb-3">
            <label for="password2" class="form-label">Password (again)</label>
            <input type="password" class="form-control" id="password2">
          </div>
          <button class="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>