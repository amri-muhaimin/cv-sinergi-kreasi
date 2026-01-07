(function(){
  const phoneDigits = "6282228467348";
  const phoneDisplay = "+62 822-2846-7348";
  const email = "sinergikreasi.cv@gmail.com";
  const address = "Grand Harvest Cluster Derryl, Surabaya";

  const qs = (sel, root=document) => root.querySelector(sel);
  const qsa = (sel, root=document) => Array.from(root.querySelectorAll(sel));

  function waLink(text){
    const msg = encodeURIComponent(text || "Halo CV Sinergi Kreasi, saya ingin konsultasi layanan.");
    return `https://wa.me/${phoneDigits}?text=${msg}`;
  }

  function setText(sel, val){
    qsa(sel).forEach(el => { el.textContent = val; });
  }
  function setHref(sel, val){
    qsa(sel).forEach(el => { el.setAttribute('href', val); });
  }

  document.addEventListener("DOMContentLoaded", () => {
    setText(".js-phone", phoneDisplay);
    setText(".js-email", email);
    setText(".js-address", address);
    setHref(".js-wa-default", waLink());
    qsa(".js-wa", document).forEach(el => {
      const t = el.getAttribute("data-wa-text") || "";
      el.setAttribute("href", waLink(t));
      el.setAttribute("target","_blank");
      el.setAttribute("rel","noopener");
    });

    // active nav
    const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
    qsa("[data-nav]").forEach(a => {
      if ((a.getAttribute("href")||"").toLowerCase() === path) a.classList.add("active");
    });

    // mobile menu
    const btn = qs("#mobileMenuBtn");
    const menu = qs("#mobileMenu");
    if(btn && menu){
      btn.addEventListener("click", () => {
        menu.classList.toggle("hidden");
      });
    }
  });
})();
