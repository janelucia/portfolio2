<template>
  <div class="flex flex-col min-h-screen">
    <header
      class="fixed top-0 z-50 flex items-center justify-between w-full h-16 px-6 border-b border-gray-200 shadow-sm bg-white/95 backdrop-blur-md"
    >
      <NuxtLink to="/" class="text-2xl font-bold text-gray-900">{JS}</NuxtLink>
    </header>
    <main class="flex flex-col items-center flex-grow gap-4 pt-16">
      <slot />
    </main>
    <footer class="py-8">
      <div class="max-w-6xl px-6 mx-auto">
        <div class="flex flex-col items-center gap-2">
          <p class="text-sm text-gray-500">Built with ❤️ in Kiel, Germany</p>
          <p class="text-xs text-gray-400">
            © {{ new Date().getFullYear() }} Jane Schönfeld
          </p>
          <div class="flex gap-4">
            <NuxtLink
              to="/impressum"
              class="text-xs text-gray-400 transition-colors hover:text-primary"
            >
              Legal Notice
            </NuxtLink>
            <NuxtLink
              to="/datenschutz"
              class="text-xs text-gray-400 transition-colors hover:text-primary"
            >
              Privacy Policy
            </NuxtLink>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
