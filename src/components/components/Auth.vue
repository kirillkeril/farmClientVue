<script>
import UserService from "@/service/user.service";
import {useForm} from "@/use/useForm";
import {ref} from "vue";

const required = val => !!val;
const minLength = minL => val => val.length >= minL;
const isEmail = val => val.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

export default {
  setup() {
    const theSame = ref(true);
    const form = useForm({
      name: {
        value: '',
        validators: {
          required
        }
      },
      email: {
        value: '',
        validators: {
          required,
          isEmail
        }
      },
      password: {
        value: '',
        validators: {
          required,
          minLength: minLength(8)
        }
      },
      passwordConfirm: {
        value: '',
        validators: {
          required,
        }
      },
    });
    function submit() {
      if(form.password.value === form.passwordConfirm.value){
        theSame.value = true;
        console.log(form.name.value);
      } else theSame.value = false;
    }

    return {form, submit, theSame};
  }
}
</script>

<template>
<div class="container">
    <header>
        <div class="logo">
            <img src="../../assets/images/logo.svg" alt="logo"/>
        </div>
        <h1 class="title">Зарегистрируйтесь</h1>
    </header>
    <main>
        <form class="authForm" name="auth" @submit.prevent="submit">
          <Input
              name="name"
              placeholder="Как вас зовут?"
              v-model="form.name.value"
              :class="{invalid: !form.name.valid && form.name.touched}"
              @blur="form.name.blur"
          />
          <small class="error" v-if="form.name.errors.required && form.name.touched">Это обязательное поле</small>

          <Input
              name="email"
              type="email"
              placeholder="Электронная почта"
              :class="{invalid: !form.email.valid && form.email.touched}"
              v-model="form.email.value"
              @blur="form.email.blur"
          />
          <small class="error" v-if="form.email.errors.required && form.email.touched">Это обязательное поле</small>
          <small class="error" v-else-if="form.email.errors.isEmail && form.email.touched">Введите валидный email</small>

          <Input
              name="password"
              type="password"
              placeholder="Пароль"
              :class="{invalid: !form.password.valid && form.password.touched}"
              v-model="form.password.value"
              @blur="form.password.blur"
          />
          <small class="error" v-if="form.password.errors.required && form.password.touched">Это обязательное поле</small>
          <small class="error" v-else-if="form.password.errors.minLength && form.password.touched">Минимальная длина пароля - 8 символов</small>

          <Input
              name="passwordCheck"
              type="password"
              placeholder="Повторите пароль"
              :class="{invalid: !form.passwordConfirm.valid && form.passwordConfirm.touched}"
              v-model="form.passwordConfirm.value"
              @blur="form.passwordConfirm.blur"
          />
          <small class="error" v-if="form.passwordConfirm.errors.required && form.passwordConfirm.touched">Это обязательное поле</small>
          <small class="error" v-if="!theSame">Пароли не совпадают</small>

          <div class="formFooter">
              <Button :disabled="!form.valid" type="submit">Регистрация</Button>
<!--                <Checkbox>Даю согласие на обработку персональных данных</Checkbox>-->
              <p class="agreement">Регистрируюясь, вы даете согласие на обработку персональных данных</p>
          </div>
        </form>
        <footer>
            <p>Уже есть аккаунт? <span class="switch">Войти</span></p>
        </footer>
    </main>
</div>
</template>

<style scoped>
.error {
  color: red;
  text-align: left;
}
.invalid {
  border-color: red !important;
}
.container {
    max-width: 550px;
    text-align: center;
    box-shadow: 4px 4px 35px rgba(0, 0, 0, 0.05);
    border-radius: 15px;
    padding: 36px 16px;
    color: var(--secondaryText);
    display: flex;
    flex-direction: column;
    align-items: center;
}
@media (min-width: 650px) {
    .container {
        padding: 40px;
    }
}
header {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 24px;
}
.logo img {
    width: 100%;
    height: 100%;
}
.logo {
    width: 250px;
    margin-bottom: 24px;
}
.title {
    color: var(--darkText);
    font-family: "Open Sans";
    font-weight: 600;
    line-height: 33px;
    font-size: 24px;
}
main {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}
.authForm * {
    width: 100%;
}
.authForm {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 24px;
}
.authForm > *:not(:last-child) {
    margin-bottom: 16px;
}
.formFooter {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.formFooter > *:not(:last-child) {
    margin-bottom: 16px;
}
.agreement {
    font-size: 14px;
}
.switch {
    color: var(--minorBrandColor);
}
</style>