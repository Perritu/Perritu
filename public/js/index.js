document.addEventListener('DOMContentLoaded', () => {
  M.Parallax.init(
    document.querySelectorAll('.parallax')
  )
})

![...document.querySelectorAll('.nojs')]
.forEach(i => i.classList.remove('nojs'))

!(e => {
  e.innerHTML = unescape('%32%61%78%69%63%61%7a%72%40%64%75%63%6b%2e%63%6f%6d')
  e.href = 'mailto:' + e.innerHTML
})(document.querySelector('[href="mailto:honeypot@cia.gov"]'))
