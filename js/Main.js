<script>
  document.querySelectorAll("gy").forEach(gy => {
    const imgSrc = gy.getAttribute("img");
    const text = gy.innerHTML;

    gy.innerHTML = `
      <div class="gy-img">
        <img src="${imgSrc}" alt="gallery image">
      </div>
      <div class="gy-text">
        ${text}
      </div>
    `;
  });
</script>
