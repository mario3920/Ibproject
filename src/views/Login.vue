<template>
  <!-- -->

  <b-card class="text-center" id="loginCard">
    <b-row align-content="center">
      <!-- blank left space -->
      <b-col sm="4"></b-col>
      <!-- login center space -->
      <b-col sm="4">
        <b-form-group>

          <!-- user input space -->
          <b-form-group label-cols="2" label="Login:" label-for="user">
            <b-form-input class id="user"></b-form-input>
          </b-form-group>

          <!-- password input space -->
          <b-form-group label-cols="2" label="Senha:" label-for="Pass">
            <b-form-input type="Password" id="Pass"></b-form-input>
          </b-form-group>

          <b-button id="btnLogin">Button</b-button>

        </b-form-group>
      </b-col>
      <!--blank right space -->
      <b-col sm="4"></b-col>

    </b-row>
  </b-card>
</template>

<script>
export default {};
</script>
<style>

</style>