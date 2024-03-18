<script setup lang="ts">
import { Loading, QSpinnerBall, QInput } from 'quasar';
// import axios from 'axios';
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';
const usernameRules = ref<InstanceType<typeof QInput> | null>(null);
const userpasswordRules = ref<InstanceType<typeof QInput> | null>(null);
const router = useRouter();
const userLogin = ref({
  username: '',
  password: '',
});

const botonClicado = ref(false);
const avatarRotation = ref(0);

const ingresar = async () => {
  botonClicado.value = true;
  try {
    setTimeout(() => {
      botonClicado.value = false;
    }, 500);
    const areCardsValid = await validateInputs();

    if (!areCardsValid) {
      return;
    }

    Loading.show({
      spinner: QSpinnerBall,
      message: 'Verificando acceso',
      spinnerColor: 'grey-1',
      spinnerSize: 100,
    });

    //*
    try {
      setTimeout(() => {
        Loading.hide();

        // const response = await axios.post('/api/login', {
        // username: userLogin.username ,
        // password: userLogin.password
        // });
        // localStorage.setItem('token', response.data.token);
        localStorage.setItem('token', 'okey');
        // Redirigir al usuario a la página de inicio
        router.push('/home');
      }, 2000);

      // Si el inicio de sesión es exitoso, guardar el token de sesión en localStorage
    } catch (error) {
      console.error('Error de inicio de sesión:', error);
      // Manejar errores de inicio de sesión aquí
    }

    //*
  } catch (error) {
    console.log(error);
  } finally {
  }
  // Aquí puedes agregar cualquier otra lógica que desees realizar al hacer clic en el botón
};

const startRotation = () => {
  avatarRotation.value = 360; // Define el ángulo de rotación inicial
};

const stopRotation = () => {
  avatarRotation.value = 0; // Restablece el ángulo de rotación cuando se deja de hacer hover
};

const validateInputs = async () => {
  const validCards: (boolean | undefined)[] = [];
  const validatedFields = await usernameRules.value?.validate();
  validCards.push(validatedFields);
  const validatedFields2 = await userpasswordRules.value?.validate();
  validCards.push(validatedFields2);
  return validCards.every((card) => !!card);
};

onMounted(() => {
  const elementsl = document.querySelectorAll('.animatedl');
  elementsl.forEach((element) => {
    element.classList.add('slide-from-left');
  });
  const elementsr = document.querySelectorAll('.animatedr');
  elementsr.forEach((element) => {
    element.classList.add('slide-from-right');
  });
});

const brightness = ref(1);

const startLightEffect = () => {
  brightness.value = 1.5;
};

const stopLightEffect = () => {
  brightness.value = 1;
};
</script>
<template>
  <div class="q-pa-md example-row-equal-width">
    <div class="row">
      <div class="col">
        <q-card
          class="my-card row justify-center"
          style="width: 100vh; height: 95vh"
          flat
        >
          <div class="row items-center">
            <div class="row">
              <q-card-section>
                <q-list>
                  <q-item class="q-my-sm">
                    <q-item-section avatar>
                      <q-avatar
                        class="avatar"
                        size="80px"
                        :style="{ transform: `rotate(${avatarRotation}deg)` }"
                        @mouseover="startRotation"
                        @mouseleave="stopRotation"
                      >
                        <q-img src="src/assets/img/iconDiscord.jpg" />
                      </q-avatar>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label class="text-bold text-h4 animatedr"
                        >Wayna</q-item-label
                      >
                      <q-item-label
                        class="text-bold text-h5 text-grey animatedr"
                        lines="1"
                        >Devs</q-item-label
                      >
                    </q-item-section>
                  </q-item>
                </q-list>
                <div class="q-pa-md q-gutter-sm">
                  <q-input
                    v-model="userLogin.username"
                    ref="usernameRules"
                    :rules="[(val:any) => !!val || 'Ingrese su usuario']"
                    type="text"
                    placeholder="Usuario"
                    outlined
                    size="sm"
                    dense
                    class="full-width animatedl"
                  />
                  <q-input
                    v-model="userLogin.password"
                    ref="userpasswordRules"
                    :rules="[(val:any) => !!val || 'Ingrese su contraseña']"
                    type="password"
                    placeholder="Contraseña"
                    outlined
                    size="sm"
                    dense
                    class="full-width animatedl"
                  />
                  <q-btn
                    label="Ingresar"
                    color="indigo"
                    class="full-width animatedl"
                    @click="ingresar"
                    :class="{ bounce: botonClicado }"
                  />
                </div>
              </q-card-section>
            </div>
          </div>
        </q-card>
      </div>
      <div class="col">
        <q-card
          class="my-card"
          style="width: 100%; height: 100%"
          flat
          @mouseover="startLightEffect"
          @mouseleave="stopLightEffect"
        >
          <q-img
            src="src/assets/img/discordLogin.jpeg"
            class="full-img bg-indigo"
            :style="{ filter: `brightness(${brightness})` }"
          >
            <div class="text-container top no-background">
              <p
                class="text-white text-h4 q-pa-sm text-center transparent-text"
              >
                Bienvenido
              </p>
            </div>
            <div class="text-container bottom no-background">
              <p class="text-white q-pa-sm text-center transparent-text">
                Plataforma de sorteos para discord
              </p>
            </div>
          </q-img>
        </q-card>
      </div>
    </div>
  </div>
</template>
<style lang="css">
.full-img {
  width: 100%;
  height: 100%;
  filter: opacity(100%);
}
.full-img::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0)
  ); /* Definir el degradado horizontal */
}
.text-container {
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.no-background {
  background-color: transparent !important;
}

.top {
  top: 0;
}

.bottom {
  bottom: 0;
}

/* Definir la animación de rebote */
@keyframes bounce {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

/* Aplicar la animación de rebote al botón */
.bounce {
  animation: bounce 0.5s ease;
}
.avatar {
  transition: transform 0.5s ease; /* Aplica una transición suave a la rotación */
}

.avatar:hover {
  transform: rotate(360deg); /* Define la rotación cuando se hace hover */
}

.transparent-text {
  opacity: 0.5; /* Cambia este valor para ajustar la opacidad */
}

@keyframes slideFromLeft {
  from {
    opacity: 0;
    transform: translateX(-90px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Aplicar la animación a los elementos */
.slide-from-left {
  animation: slideFromLeft 0.5s ease-out forwards;
}

@keyframes slideFromRight {
  from {
    opacity: 0;
    transform: translateX(90px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Aplicar la animación a los elementos */
.slide-from-right {
  animation: slideFromRight 0.5s ease-out forwards;
}

.my-card {
  overflow: hidden;
}

/* Definir la animación de luz */
@keyframes lightEffect {
  0% {
    filter: brightness(1);
  }
  50% {
    filter: brightness(1.5);
  }
  100% {
    filter: brightness(1);
  }
}

/* Aplicar la animación al elemento */
.full-img:hover {
  animation: lightEffect 2s ease-in-out infinite;
}
</style>
