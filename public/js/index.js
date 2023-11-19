document.addEventListener('DOMContentLoaded', () => {
  M.Parallax.init(
    document.querySelectorAll('.parallax')
  )
})

![...document.querySelectorAll('.nojs')]
.forEach(i => i.classList.remove('nojs'))

!(e => {
  e.innerHTML = unescape('%63%74%74%71%74%30%63%79%40%64%75%63%6b%2e%63%6f%6d')
  e.href = 'mailto:' + e.innerHTML
})(document.querySelector('[href="mailto:honeypot@cia.gov"]'))
