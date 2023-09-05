<template>
  <section class="my-5">
    <h2 class="h2">Login to your account</h2>
    <div style="max-width: 600px" class="mx-auto">
      <form
        novalidate
        @submit.prevent="handleSubmit"
        class="d-flex flex-column gap-3 mt-3"
        :class="{ 'was-validated': isValidated }"
      >
        <div class="items-center gap-4 form-floating">
          <input
            required
            placeholder="Your name"
            type="text"
            name=""
            id="input-1"
            class="form-control"
          />
          <div class="invalid-feedback">Looks bad!</div>
          <label class="form-label" for="input-1">Name</label>
        </div>
        <div class="input-group has-validation">
          <input
            required
            type="email"
            class="form-control"
            placeholder="Email"
            aria-label="Email"
            aria-describedby="basic-addon2"
          />
          <span class="input-group-text" id="basic-addon2">@gmail.com</span>
          <div class="valid-feedback">Looks good!</div>
          <div class="invalid-feedback">Looks bad!</div>
        </div>

        <select
          class="form-select mb-3 form-select-sm"
          aria-label=".form-select-lg example"
        >
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>

        <div class="items-center gap-4 form-floating">
          <input
            required
            placeholder="Password"
            type="password"
            name=""
            id="pass"
            class="form-control"
          />
          <label class="form-label" for="pass">Password</label>
        </div>

        <div class="d-flex justify-content-between">
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label class="form-check-label" for="flexRadioDefault1">
              Default radio
            </label>
          </div>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
          />
          <label class="form-check-label" for="inlineCheckbox1">1</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
          />
          <label class="form-check-label" for="inlineCheckbox2">2</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="inlineCheckbox3"
            value="option3"
            disabled
          />
          <label class="form-check-label" for="inlineCheckbox3"
            >3 (disabled)</label
          >
        </div>
        <p>{{ selected }}</p>

        <button type="submit" class="w-auto btn btn-primary">Send</button>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isValidated = ref(false)
const selected = ref([])

function handleSubmit() {
  isValidated.value = true
}
</script>
