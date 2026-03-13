<template>
  <NuxtLayout name="legal">
    <div class="w-full max-w-4xl px-4 py-16 mx-auto">
      <h1 class="mb-12 text-3xl font-bold text-gray-900 md:text-4xl">
        Legal Notice
      </h1>

      <div class="flex flex-col gap-8">
        <div>
          <h2 class="text-xl font-semibold text-gray-900">
            Responsible according to § 5 TMG
          </h2>
          <p class="text-gray-600">
            Jane Schönfeld<br />
            Holstenplatz 1<br />
            24103 Kiel<br />
            Germany
          </p>
        </div>

        <div>
          <h2 class="text-xl font-semibold text-gray-900">Contact</h2>
          <p class="text-gray-600">
            E-Mail: janeluciaschoenfeld@gmail.com
          </p>
        </div>

        <div>
          <h2 class="text-xl font-semibold text-gray-900">Disclaimer</h2>
          <p class="text-gray-600">
            Despite careful content control, I assume no liability for the
            content of external links. The operators of the linked pages are
            solely responsible for their content.
          </p>
        </div>

        <div class="pt-4">
          <NuxtLink to="/" class="text-primary hover:underline">
            &larr; Back to home
          </NuxtLink>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
