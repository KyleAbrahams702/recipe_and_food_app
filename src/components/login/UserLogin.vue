<template>
  <p>Test</p>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
export default {
  components: {},
  data() {
    return {
      v$: useVuelidate(),
      name: null,
      email: null,
      password: null,
    };
  },
  validations() {
    return {
      name: { required },
      email: { required, email },
      password: { required, minLength: minLength(6) },
    };
  },
  methods: {
    testFunction() {
      this.v$.$validate();
      if (!this.v$.$error) alert("Successfully Submitted");
    },
  },
};
</script>

<style>
.p-float-label {
  display: inline-block;
}
</style>
