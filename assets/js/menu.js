<!-- JavaScript for the responsive burger menu -->
<script>
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
</script>
</body>
