<template>
  <NuxtLayout name="legal">
    <div class="w-full max-w-4xl px-4 py-16 mx-auto">
      <h1 class="mb-12 text-3xl font-bold text-gray-900 md:text-4xl">
        Privacy Policy
      </h1>

      <div class="flex flex-col gap-8">
        <div>
          <h2 class="text-xl font-semibold text-gray-900">Privacy</h2>
          <p class="text-gray-600">
            This website does not actively collect personal data (e.g. through
            forms or user accounts), does not use tracking cookies, and does not
            employ any analytics tools.
          </p>
        </div>

        <div>
          <h2 class="text-xl font-semibold text-gray-900">Hosting</h2>
          <p class="text-gray-600">
            This website is hosted on a private VPS. When you visit the website,
            the web server automatically stores technically necessary connection
            data (e.g. IP address, date and time of access, and browser
            information) in server log files. This data is used solely for the
            secure operation of the website and is automatically deleted after a
            short period.
          </p>
          <p class="mt-2 text-gray-600">
            The legal basis for processing is Art. 6(1)(f) GDPR.
          </p>
        </div>

        <div>
          <h2 class="text-xl font-semibold text-gray-900">
            External content
          </h2>
          <p class="text-gray-600">
            This website embeds content from external providers. When loading
            this content, personal data (e.g. your IP address) may be
            transmitted to the respective provider.
          </p>
          <ul class="mt-2 ml-6 text-gray-600 list-disc">
            <li>
              YouTube (Google LLC):
              https://policies.google.com/privacy
            </li>
            <li>
              GitHub (Microsoft):
              https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement
            </li>
          </ul>
        </div>

        <div>
          <h2 class="text-xl font-semibold text-gray-900">Contact</h2>
          <p class="text-gray-600">
            If you have any questions about data privacy, feel free to contact
            me at any time using the email address provided in the legal notice.
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
