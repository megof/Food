<template>
  <div class="img js-fullheight" style="background-image: url(images/bg.jpg)">
    <div id="login">
      <section class="ftco-section">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-6 text-center mb-5">
              <h2 class="heading-section">Iniciar Sesion</h2>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-md-6 col-lg-4">
              <div class="login-wrap p-0">
                <div class="signin-form">
                  <div class="form-group">
                  </div>
                  <div class="form-group">
                    <button type="submit" @click="login" class="form-control btn btn-primary submit px-3">
                      Iniciar
                    </button>
                  </div>
                  <div class="form-group d-md-flex">
                    <div class="w-50">
                      <label class="checkbox-wrap checkbox-primary">Remember Me
                        <input type="checkbox" checked />
                        <span class="checkmark"></span>
                      </label>
                    </div>
                    <!--      <div class="w-50 text-md-right">
                      <a href="#" style="color: #fff">Forgot Password</a>
                    </div> -->
                  </div>
                </div>
                <!--    <p class="w-100 text-center">&mdash; Or Sign In With &mdash;</p>
                <div class="social d-flex text-center">
                  <a href="#" class="px-2 py-2 mr-md-1 rounded"
                    ><span class="ion-logo-facebook mr-2"></span> Facebook</a
                  >
                  <a href="#" class="px-2 py-2 ml-md-1 rounded"
                    ><span class="ion-logo-twitter mr-2"></span> Twitter</a
                  >
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
