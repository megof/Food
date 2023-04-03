<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="waves" id="waves">
    <path
      fill="#fdbd10"
      fill-opacity="1"
      d="M0,128L40,133.3C80,139,160,149,240,160C320,171,400,181,480,170.7C560,160,640,128,720,138.7C800,149,880,203,960,208C1040,213,1120,171,1200,149.3C1280,128,1360,128,1400,128L1440,128L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
    ></path>
  </svg>
</template>

<style scoped>
.waves {
  transform: translateY(-12rem);
  z-index: 0;
  margin-top: -2.5rem;
  margin-bottom: -1.5rem;
}

.waves-hidden {
  transform: translateY(0rem);
  transition: 0.3s ease-in-out;
}
</style>
