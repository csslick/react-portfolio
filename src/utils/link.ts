
const link = () => {

  // 앵커 요소 클릭 시 스크롤 이동
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = anchor.getAttribute('href');

      // 해당 id의 요소르 이동
      if(targetId) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start' // 또는 'center', 'end'
          });
        }
      }
    });
  });

};

export default link;