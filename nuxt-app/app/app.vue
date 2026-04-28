<template>
  <div
    class="bg-surface text-on-surface selection:bg-primary selection:text-on-primary min-h-screen"
  >
    <!-- TopAppBar -->
    <header
      class="fixed top-0 w-full z-50 bg-[#141312]/80 backdrop-blur-xl transition-all duration-300"
    >
      <div
        class="flex justify-between items-center px-8 py-4 w-full max-w-7xl mx-auto"
      >
        <div
          class="text-2xl font-black tracking-tighter text-[#e6e2df] heading-michroma"
        >
          SynRG
        </div>
        <nav class="hidden md:flex items-center gap-8">
          <a
            class="text-[#fbb893] border-b-2 border-[#fbb893] pb-1 font-['Public_Sans'] font-bold tracking-tight text-sm"
            href="#"
            >Solutions</a
          >
          <a
            class="text-[#d6c3b9] hover:text-[#e6e2df] transition-colors font-['Public_Sans'] font-bold tracking-tight text-sm"
            href="#"
            >Technical Stack</a
          >
          <a
            class="text-[#d6c3b9] hover:text-[#e6e2df] transition-colors font-['Public_Sans'] font-bold tracking-tight text-sm"
            href="#"
            >Case Studies</a
          >
          <a
            class="text-[#d6c3b9] hover:text-[#e6e2df] transition-colors font-['Public_Sans'] font-bold tracking-tight text-sm"
            href="#"
            >About</a
          >
        </nav>
        <div class="flex items-center gap-4">
          <button
            class="bg-primary hover:bg-primary-container text-on-primary font-bold py-2 px-6 rounded transition-all duration-300 active:scale-95 text-sm tracking-tight"
          >
            Get Started
          </button>
        </div>
      </div>
    </header>

    <main class="pt-24 overflow-x-hidden">
      <!-- Hero Section -->
      <section
        class="relative min-h-[921px] flex items-center px-8 max-w-7xl mx-auto"
      >
        <div
          class="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full items-center"
        >
          <div class="lg:col-span-7 z-10">
            <div
              class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high border border-outline-variant/20 mb-6"
            >
              <span
                class="w-2 h-2 rounded-full bg-primary animate-pulse"
              ></span>
              <span
                class="text-label-sm uppercase tracking-[0.2em] text-primary-fixed-dim font-medium text-[10px]"
                >Precision Engineering</span
              >
            </div>
            <h1
              class="text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tighter heading-michroma text-on-surface mb-8"
            >
              Architectural Integrity for
              <span class="text-primary block">Accounting Systems</span>
            </h1>
            <p
              class="text-lg md:text-xl text-on-surface-variant max-w-xl mb-10 leading-relaxed font-light"
            >
              We engineer the digital conduits that power modern accounting.
              SynRG blends deep Canadian tax compliance expertise with
              high-performance software architecture to build unbreakable
              foundations for your firm.
            </p>
            <div class="flex flex-wrap gap-4">
              <button
                class="bg-gradient-to-br from-primary to-primary-container text-on-primary-fixed px-8 py-4 rounded-lg font-bold flex items-center gap-2 hover:shadow-[0_0_20px_rgba(251,184,147,0.3)] transition-all"
              >
                Review Capabilities
                <span class="material-symbols-outlined text-sm"
                  >arrow_forward</span
                >
              </button>
              <button
                class="bg-surface-container-highest border border-outline-variant/30 text-on-surface px-8 py-4 rounded-lg font-medium hover:bg-surface-container-high transition-colors"
              >
                Technical Stack
              </button>
            </div>
          </div>
          <div class="lg:col-span-5 relative">
            <div class="relative w-full aspect-square max-w-md mx-auto">
              <div
                class="absolute inset-0 bg-primary/10 rounded-full blur-3xl"
              ></div>
              <div
                class="relative z-10 rounded-2xl overflow-hidden border border-outline-variant/20 bg-surface-container-low shadow-2xl transform lg:rotate-3"
              >
                <img
                  alt="Precision technical hardware close-up"
                  class="w-full h-full object-cover grayscale contrast-125 opacity-80 mix-blend-luminosity"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDd-IwO8doMgljbIWFSWlTUVV0UH8OJltE5oufg-jH5B6l5K5bwYN3nXGOZfLPIP128EUAdzf9wTmphDQYgXhsAYHzRdgEcBNxFcPV_NGY_Ur1hhxuIvNejwDVqktUk_FETl27D6oiPUNk7XaHOn_k2sBQImucoIdsHL5rce4SBTHp-tsGQhjmzM43UAxtS9VNxGRswT9bItld6xYkFFlhJ5GQnjkThqYMEo47wacs_rCKyx8N3qP4yXbMlp2WtlvyG3S9zrCnnAnO"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"
                ></div>
                <div
                  class="absolute bottom-6 left-6 right-6 p-6 glass-panel rounded-xl border border-outline-variant/10"
                >
                  <p
                    class="text-xs font-mono text-primary uppercase tracking-widest mb-2"
                  >
                    Active Protocol
                  </p>
                  <p class="text-sm text-on-surface leading-snug">
                    Real-time telemetry integration for multi-layered cloud
                    architectures.
                  </p>
                </div>
              </div>
              <!-- Geometric Accents -->
              <div
                class="absolute -top-12 -right-12 w-32 h-32 border-t-2 border-r-2 border-primary/30 rounded-tr-[4rem]"
              ></div>
              <div
                class="absolute -bottom-8 -left-8 w-24 h-24 border-b border-l border-primary/20"
              ></div>
            </div>
          </div>
        </div>
      </section>

      <!-- Core Capabilities Section -->
      <section class="py-24 bg-surface-container-low">
        <div class="max-w-7xl mx-auto px-8">
          <div
            class="flex flex-col md:flex-row justify-between items-end mb-16 gap-8"
          >
            <div class="max-w-2xl">
              <h2
                class="text-3xl md:text-4xl font-bold heading-michroma text-on-surface mb-6"
              >
                Core Capabilities
              </h2>
              <p class="text-on-surface-variant leading-relaxed">
                We bridge the gap between abstract strategy and executable
                technical architecture through three specialized pillars.
              </p>
            </div>
            <div
              class="hidden md:block h-px flex-1 bg-outline-variant/30 mx-12"
            ></div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- Capability Card 1 -->
            <div
              class="group bg-surface-container-high p-8 rounded-xl border border-outline-variant/10 hover:border-primary/40 transition-all duration-500 relative overflow-hidden"
            >
              <div
                class="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[100%] transition-all group-hover:bg-primary/10"
              ></div>
              <div class="text-primary-fixed-dim mb-6">
                <span class="material-symbols-outlined text-4xl"
                  >developer_board</span
                >
              </div>
              <h3 class="text-xl font-bold mb-4 text-on-surface">
                Bespoke Development
              </h3>
              <p class="text-sm text-on-surface-variant leading-relaxed mb-8">
                Moving beyond spreadsheets. We build custom applications using
                Bun, Nuxt, and Postgres to automate complex tax logic and client
                workflows.
              </p>
              <div
                class="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-widest group-hover:gap-4 transition-all"
              >
                Learn More
                <span class="material-symbols-outlined text-sm"
                  >arrow_forward</span
                >
              </div>
            </div>
            <!-- Capability Card 2 -->
            <div
              class="group bg-surface-container-high p-8 rounded-xl border border-outline-variant/10 hover:border-primary/40 transition-all duration-500 relative overflow-hidden"
            >
              <div
                class="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[100%] transition-all group-hover:bg-primary/10"
              ></div>
              <div class="text-primary-fixed-dim mb-6">
                <span class="material-symbols-outlined text-4xl">hub</span>
              </div>
              <h3 class="text-xl font-bold mb-4 text-on-surface">
                Systems Integration
              </h3>
              <p class="text-sm text-on-surface-variant leading-relaxed mb-8">
                Unifying your stack. We create secure API bridges between legacy
                accounting software and modern cloud ecosystems for real-time
                data synchronization.
              </p>
              <div
                class="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-widest group-hover:gap-4 transition-all"
              >
                Learn More
                <span class="material-symbols-outlined text-sm"
                  >arrow_forward</span
                >
              </div>
            </div>
            <!-- Capability Card 3 -->
            <div
              class="group bg-surface-container-high p-8 rounded-xl border border-outline-variant/10 hover:border-primary/40 transition-all duration-500 relative overflow-hidden"
            >
              <div
                class="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[100%] transition-all group-hover:bg-primary/10"
              ></div>
              <div class="text-primary-fixed-dim mb-6">
                <span class="material-symbols-outlined text-4xl"
                  >architecture</span
                >
              </div>
              <h3 class="text-xl font-bold mb-4 text-on-surface">
                Technical Advisory
              </h3>
              <p class="text-sm text-on-surface-variant leading-relaxed mb-8">
                Strategic roadmapping for the "High-State" firm. We audit your
                technical debt and architect a scalable path toward digital
                modernization.
              </p>
              <div
                class="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-widest group-hover:gap-4 transition-all"
              >
                Learn More
                <span class="material-symbols-outlined text-sm"
                  >arrow_forward</span
                >
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Technical Stack / Featured Project Section -->
      <section class="py-24 relative">
        <div class="max-w-7xl mx-auto px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div class="order-2 lg:order-1">
              <div
                class="relative rounded-2xl overflow-hidden shadow-2xl border border-outline-variant/20 bg-surface-container-lowest"
              >
                <img
                  alt="Technical infrastructure interface"
                  class="w-full aspect-video object-cover opacity-60"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoxzA5cl9xliSp9YiCIi1XqkVdX3Pc-X-dNvGznb5dZ-CVMZrwh4X2AN0iTM7P_BRLfb7xYeRqT8hcghm7AYeVVskFju667LMPOkH9gqfUs-UtndvG3FUyTbLAn40ZPAzjOtXw1jQ4vnWMulWIFb9gPMwxmyEzzBDED9AhCS36JY5nGy9wtFsbDs0S03yU-xOoMEwb_8V_HFpdglMS7iS_qqb0br1VhqSCyxS5tjzVvXCbsvsVAp1fQ-flawHklRkX_8TifbRBV1ab"
                />
                <div class="absolute inset-0 flex items-center justify-center">
                  <div
                    class="bg-surface-container-highest/80 backdrop-blur-md p-6 rounded-lg border border-primary/20 max-w-sm"
                  >
                    <h4 class="text-primary font-bold mb-2">
                      Featured Project
                    </h4>
                    <p class="text-lg font-bold mb-1 text-on-surface">
                      SynTaxes
                    </p>
                    <p class="text-sm text-on-surface-variant mb-4">
                      A complete digital transformation of operational legacy
                      systems.
                    </p>
                    <div class="flex flex-wrap gap-2">
                      <span
                        class="px-2 py-1 bg-secondary-container text-on-secondary-container text-[10px] rounded uppercase font-bold tracking-widest"
                        >local first</span
                      >
                      <span
                        class="px-2 py-1 bg-secondary-container text-on-secondary-container text-[10px] rounded uppercase font-bold tracking-widest"
                        >multi-tenant</span
                      >
                      <span
                        class="px-2 py-1 bg-secondary-container text-on-secondary-container text-[10px] rounded uppercase font-bold tracking-widest"
                        >comprehensive</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="order-1 lg:order-2">
              <span
                class="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4 block"
                >Engineered Excellence</span
              >
              <h2
                class="text-3xl md:text-5xl font-bold heading-michroma text-on-surface mb-8 uppercase tracking-widest"
              >
                Strategic Technical Stacks
              </h2>
              <div class="space-y-6">
                <div class="flex gap-4 items-start">
                  <div
                    class="w-12 h-12 shrink-0 rounded bg-primary/10 flex items-center justify-center text-primary"
                  >
                    <span class="material-symbols-outlined">memory</span>
                  </div>
                  <div>
                    <h3
                      class="font-bold text-on-surface mb-2 heading-michroma uppercase tracking-widest text-sm"
                    >
                      Modernized Core Architecture
                    </h3>
                    <p class="text-on-surface-variant text-sm leading-relaxed">
                      Built on the Bun/Nuxt stack for sub-100ms response times
                      and architectural longevity.
                    </p>
                  </div>
                </div>
                <div class="flex gap-4 items-start">
                  <div
                    class="w-12 h-12 shrink-0 rounded bg-primary/10 flex items-center justify-center text-primary"
                  >
                    <span class="material-symbols-outlined">security</span>
                  </div>
                  <div>
                    <h3
                      class="font-bold text-on-surface mb-2 heading-michroma uppercase tracking-widest text-sm"
                    >
                      Agentic Integration Layer
                    </h3>
                    <p class="text-on-surface-variant text-sm leading-relaxed">
                      Specifically engineered to be "machine-readable," allowing
                      LLMs to navigate and execute firm protocols with 100%
                      accuracy.
                    </p>
                  </div>
                </div>
                <div class="flex gap-4 items-start">
                  <div
                    class="w-12 h-12 shrink-0 rounded bg-primary/10 flex items-center justify-center text-primary"
                  >
                    <span class="material-symbols-outlined">auto_graph</span>
                  </div>
                  <div>
                    <h3
                      class="font-bold text-on-surface mb-2 heading-michroma uppercase tracking-widest text-sm"
                    >
                      Agentic Integration Layer
                    </h3>
                    <p class="text-on-surface-variant text-sm leading-relaxed">
                      A universal API framework that extends TXL’s utility
                      across disparate accounting platforms and client portals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Impact/Statistics Section -->
      <section
        class="py-24 bg-surface-container-lowest border-y border-outline-variant/10"
      >
        <div class="max-w-7xl mx-auto px-8">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div>
              <div
                class="text-4xl md:text-5xl font-bold heading-michroma text-primary mb-2"
              >
                10+
              </div>
              <div
                class="text-xs uppercase tracking-[0.2em] text-on-surface-variant font-medium"
              >
                years in production
              </div>
            </div>
            <div>
              <div
                class="text-4xl md:text-5xl font-bold heading-michroma text-primary mb-2"
              >
                LLM
              </div>
              <div
                class="text-xs uppercase tracking-[0.2em] text-on-surface-variant font-medium"
              >
                ready
              </div>
            </div>
            <div>
              <div
                class="text-4xl md:text-5xl font-bold heading-michroma text-primary mb-2"
              >
                Zero
              </div>
              <div
                class="text-xs uppercase tracking-[0.2em] text-on-surface-variant font-medium"
              >
                Latency
              </div>
            </div>
            <div>
              <div
                class="text-4xl md:text-5xl font-bold heading-michroma text-primary mb-2"
              >
                100%
              </div>
              <div
                class="text-xs uppercase tracking-[0.2em] text-on-surface-variant font-medium"
              >
                logic preservation
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="py-32 relative overflow-hidden">
        <div
          class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,184,147,0.05)_0%,transparent_70%)]"
        ></div>
        <div class="max-w-4xl mx-auto px-8 text-center relative z-10">
          <h2
            class="text-4xl md:text-6xl font-bold heading-michroma text-on-surface mb-8 leading-tight"
          >
            Ready to Engineer Your Next
            <span class="text-primary italic">Competitive Edge?</span>
          </h2>
          <p
            class="text-xl text-on-surface-variant mb-12 font-light max-w-2xl mx-auto"
          >
            Let's discuss how SynRG Consulting can transform your operational
            overhead into a high-performance integrated ecosystem.
          </p>
          <div class="flex flex-col sm:flex-row justify-center gap-6">
            <button
              class="bg-primary text-on-primary font-bold px-10 py-5 rounded-lg text-lg hover:shadow-[0_0_30px_rgba(251,184,147,0.4)] transition-all"
            >
              Schedule Consultation
            </button>
            <button
              class="bg-transparent border border-outline text-on-surface font-bold px-10 py-5 rounded-lg text-lg hover:bg-surface-container-highest transition-all"
            >
              View Documentation
            </button>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="bg-[#0f0e0d] border-t border-[#52443d]/15 mt-20">
      <div
        class="flex flex-col md:flex-row justify-between items-center px-8 py-12 w-full max-w-7xl mx-auto gap-6"
      >
        <div class="flex flex-col items-center md:items-start gap-4">
          <div
            class="text-lg font-bold text-[#e6e2df] heading-michroma uppercase tracking-widest"
          >
            SynRG
          </div>
          <p class="font-['Inter'] text-sm text-[#d6c3b9]">
            © 2024 SynRG Technical Systems. All rights reserved.
          </p>
        </div>
        <div class="flex flex-wrap justify-center gap-8">
          <a
            class="text-[#9f8d85] hover:text-[#fbb893] transition-colors underline-offset-4 hover:underline text-sm font-['Inter']"
            href="#"
            >Privacy Policy</a
          >
          <a
            class="text-[#9f8d85] hover:text-[#fbb893] transition-colors underline-offset-4 hover:underline text-sm font-['Inter']"
            href="#"
            >Terms of Service</a
          >
          <a
            class="text-[#9f8d85] hover:text-[#fbb893] transition-colors underline-offset-4 hover:underline text-sm font-['Inter']"
            href="#"
            >Documentation</a
          >
          <a
            class="text-[#9f8d85] hover:text-[#fbb893] transition-colors underline-offset-4 hover:underline text-sm font-['Inter']"
            href="#"
            >Status</a
          >
        </div>
        <div class="flex gap-4">
          <div
            class="w-10 h-10 rounded bg-surface-container-highest flex items-center justify-center text-on-surface hover:text-primary transition-colors cursor-pointer"
          >
            <span class="material-symbols-outlined text-xl">share</span>
          </div>
          <div
            class="w-10 h-10 rounded bg-surface-container-highest flex items-center justify-center text-on-surface hover:text-primary transition-colors cursor-pointer"
          >
            <span class="material-symbols-outlined text-xl">mail</span>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
useHead({
  title: "SynRG Technical Systems | Precision Integrated Ecosystems",
  link: [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap",
    },
  ],
});
</script>

<style>
body {
  font-family: "Space Grotesk", sans-serif;
  background-color: #141312;
  color: #e6e2df;
}
.material-symbols-outlined {
  font-variation-settings:
    "FILL" 0,
    "wght" 400,
    "GRAD" 0,
    "opsz" 24;
}
.glass-panel {
  backdrop-filter: blur(20px);
  background: rgba(54, 52, 51, 0.5);
}
.geometric-accent {
  position: absolute;
  z-index: -1;
}
.heading-michroma {
  font-family: "Michroma", sans-serif;
}
</style>
