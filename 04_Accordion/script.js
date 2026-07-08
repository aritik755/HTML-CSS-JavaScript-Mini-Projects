let questionArr = document.querySelectorAll('.question');
      console.log(questionArr)

      questionArr.forEach(function(question){
        question.addEventListener('click', function(e){
          const parentE1 = this.parentElement;
          const answerE1 = parentE1.querySelector('.answer');
          answerE1.classList.toggle('show');
        });
      });