window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
$(document).ready(function () {
  // fixes issue on laggy scrolling
  // window.scrollTo(0, 0);
  $("html").css('scroll-behavior', 'auto');

  const questions = [
    '2. I always set goals for me and then I try my best to achieve them.',
    '3. Much of what happens to me is probably a matter of chance.',
    '4. I am good at spotting a business opportunity.',
    '5. I am a self-motivated person.',
    '6. Getting promoted is really a matter of being a little luckier than the next guy.',
    '7. I am not the master of my entrepreneurial destiny.',
    '8. I put my ideas into action whenever I can.',
    '9. I am good at connecting my ideas, people, and opportunities.',
    '10. I believe I can succeed at almost any endeavor to which I set my mind.',
    '11. When facing difficult tasks, I am certain that I will accomplish them.',
    '12. My negotiating skills are poor.',
    '13. I am not good at making decisions.',
    '14. What I choose to do makes an enormous difference in my life.',
    '15. I am good at getting people to agree with me.',
  ]

  const newQuestions = [
    [
      '1. A lot of my time is spent doing stuff that\'s meaningful to me.',
      '2. I mostly achieve my goals when I work hard.',
      '3. I don’t like to make changes in my daily working routine.',
      '4. I feel that more meaning is needed in my life.',
      '5. I find changes in my routine interesting.',
      '6. My actions determine how my life will develop.',
      '7. I\'m excited for what the workday has in store for me!',
      '8. It seems there is not much I can do to shape my future.',
      '9. I find it enjoyable when I am able to multitask.',
      '10. I\'m usually excited about life, you know? Most days it\'s really fun and interesting.',
      '11. I really don\'t like it when my usual routine gets disrupted.',
      '12. It\'s totally in my hands how the rest of my life plays out.',
    ],
    [
      '13. My life is quite dull (boring).',
      '14. Establishing and maintaining a daily working schedule has proven to be beneficial for me, and I am quite content with this routine.',
      '15. The choices I make have a significant impact on my life.',
      '16.	People say that I am confident and determined.',
      '17.	I am good at connecting my ideas, people, and opportunities.',
      '18.	I look at situations objectively to reach my end goals.',
      '19.	People often tell me I inspire them.',
      '20.	I put my ideas in action whenever I can.',
      '21.	Success in entrepreneurship requires hard work and persistence.',
      '22.	Making a lot of money in entrepreneurship is a matter of market chance.',
      '23.	I have noticed that there is a direct connection between the effort I put in and the rewards I receive.',
      '24.	The number of failed startups indicates that more entrepreneurs are not trying hard enough to make their startup work.',
    ],
    [
      '25.	Start-ups are a gamble for entrepreneurs.',
      '26.	When I have a good business idea, I can convince others to support it.',
      '27.	Succeeding with a business idea is really a matter of being luckier than the next person.',
      '28.	If entrepreneurs know how to deal with people, they can easily lead people.',
      '29.	I have little influence over the way other people behave.',
      '30.	My accomplishments were the result of my own efforts, luck had little to do with it.',
      '31.	Entrepreneurs like me can change the course of world affairs if we set our minds to do it.',
      '32.	What happens to me is likely a matter of chance.',
      '33.	I am not the master of my own entrepreneurial destiny.',
      '34.	Having a good relationship with people is a skill that an entrepreneur must practice.',
      '35.	It is almost impossible to gain unanimous agreement from all stakeholders in a business setting.',
    ],
    /** */
    [
      '36. As an entrepreneur or potential entrepreneur, I am or would be afraid that a failure of my business will have financial consequences on my family',
      '37. As an entrepreneur or potential entrepreneur, I am or would be afraid of not being able to pitch the idea effectively.',
      '38. As an entrepreneur or potential entrepreneur, I am or would be afraid of not knowing what is needed to run a business.',
      '39. As an entrepreneur or potential entrepreneur, I am or would be afraid of others thinking I have no idea of what I am doing.',
      '40. As an entrepreneur or potential entrepreneur, I am or would be afraid of the reputational consequences of not paying people.',
      '41. As an entrepreneur or potential entrepreneur, I am or would be afraid that the idea is not good enough for investors.',
      '42. As an entrepreneur or potential entrepreneur, I am or would be afraid that no one will be interested in the product/service.',
      '43. As an entrepreneur or potential entrepreneur, I am or would be afraid that this business idea is too difficult to implement.',
      '44. As an entrepreneur or potential entrepreneur, I am or would be afraid that there won\'t be a market for the product/service.',
      '45. As an entrepreneur or potential entrepreneur, I am or would be afraid of not being able to finance the business.',
      '46. As an entrepreneur or potential entrepreneur, I am or would be afraid of not being able to get the required funding for the business.',
      '47. As an entrepreneur or potential entrepreneur, I am or would be afraid the business will not be as profitable as I would like.',
      '48. As an entrepreneur or potential entrepreneur, I am or would be afraid that I will be forced to sell important assets.',
      '49. As an entrepreneur or potential entrepreneur, I am or would be afraid that my business risks having a negative cash-flow.',
      '50. As an entrepreneur or potential entrepreneur, I am or would be afraid that the business goes into bankruptcy.',
    ],
    /** */
    [
      '51.	I am conscious of how my body feels when I experience strong emotions.',
      '52.	I accept my mistakes and offer my sincere apologies.',
      '53.	I prefer to assess all the necessary facts before forming an opinion.',
      '54.	I have released any feelings of sadness, anger, or fear from the past and I am now able to move forward.',
      '55.	I regulate how much I "open up" with people, both allowing an emotion and controlling it when necessary.',
      '56.	I am conscious of my emotions and understand them well.',
      '57.	I continually remind myself that I am capable and proficient.	',
      '58.	I foster an atmosphere of openness and inclusivity, wherein individuals are encouraged to express their thoughts.',
      '59.	I can deal calmly and sensitively with others when they are in an emotional state.	',
      '60.	I have the ability to recognize and comprehend the emotions of others in a conversation, and accurately match my own emotions to theirs.',
    ],
    [
      '61.	Whenever I am engaged in conversation with someone, I give them my undivided attention. ',
      '62.	I can effectively persuade others to adopt my point of view without pressuring or punishing them.',
      '63.	It is my conviction that individuals can discover shared understanding and come to a mutually acceptable agreement.',
      '64.	I am knowledgeable in accurately interpreting my friends\' emotions through their actions.',
      '65.	I am able to control my temper and handle difficulties rationally.',
      '66.	I really understand what and how I feel.',
      '67.	I always set goals for me and then I try my best to achieve them.',
      '68.	I am a self-motivated person.',
      '69.	I\'m confident I\'ll reach the majority of my aspirations!',
      '70.	When facing difficult tasks, I am certain that I will accomplish them.	',
    ],
    [
      '71.	All in all, I believe that I\'m able to achieve the outcomes that are important to me.	',
      '72.	I\'m confident that I have what it takes to achieve success in entrepreneurship.',
      '73.	I will be able to successfully overcome many challenges.',
      '74.	I am confident that I can perform effectively on many different tasks.',
      '75.	I\'m usually pretty good at getting things done compared to other people.',
      '76.	I can rise to the challenge and do really well when things get tough.',
      '77.	There are times when I tend to shy away from difficult jobs.',
      '78.	Often, I believe that difficult tasks or situations are beyond my control or capability.',
      '79.	I\'m usually fixated on what could go wrong or the mistakes I make.',
      '80.	I\'m usually not too sure of myself and tend to doubt my abilities quite easily.',
    ],
    /** */
    [
      '81.	Being able to solve problems',
      '82.	Managing money',
      '83.	Being creative',
      '84.	Getting people to agree with you',
      '85.	Being a leader',
      '86.	Making decisions',
      '87.	Spotting a business opportunity',
      '88.	Negotiating a deal',
      '89.	Resolving conflicts',
      '90.	Entrepreneurship potential',

    ],

  ];

  const addNextPrevBtn = (i) => {
    if (i === 0) {
      return `
        <input type="button" name="next" class="next action-button" value="Next" />
      `
    } else if (i > 0 && i < newQuestions.length - 1) {
      return `
        <input type="button" name="previous" class="previous action-button" value="Previous" />
        <input type="button" name="next" class="next action-button" value="Next" />
      `
    } else {
      return `
        <input type="button" name="previous" class="previous action-button" value="Previous" />
        <a href="#" class="submit action-button" target="_top">Submit</a>
      `
    }
  }

  const goTop = () => window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });

  const populateFields = async (arr) => {
    // console.log(arr)
    // await arr.reduce(async (p, c, i) => {
    //   await c.reduce(async (x, y, j) => {

    //     if (y) {
    //       console.log('#set-' + i + '-row-' + j + '-color-' + y)
    //       $('#set-' + i + '-row-' + j + '-color-' + y).prop('checked', true)
    //     }
    //   }, 0)
    // }, 0)

    let
      i = 0,
      j = 0
    for (const ar of arr) {
      for (const y of ar) {
        if (y) {
          console.log('#set-' + i + '-row-' + j + '-color-' + y)

          $('input[id=set-' + i + '-row-' + j + '-color-' + y + ']').on('click', function (event) {
            if (!$('input[type=checkbox]:checked').length) {
              $(this).prop('checked', true);
            }
          });
          // $('#set-' + i + '-row-' + j + '-color-' + y).prop('checked', true)
        }
        j++
      }
      i++
    }
  }

  const createFieldSet = (setId) => {
    return `
    <fieldset data-id="${setId}">
      <div class="set" id="set-${setId}">
      </div>
    </fieldset>
    `
  }

  const addQuestion = (gid, qid, question) => {
    return `
    <div class="question-container" id="set-${gid}-que-${qid}">
      <div class="row">
          <div class="title d-flex justify-content-center">
              <div>
                  <p class="text-center">${question}</p>
              </div>
          </div>
      </div>
      <div class="row p-0">
          <div
              class="row custom-radios d-flex align-items-center justify-content-center question-container-row">
              <div
                  class="d-flex align-items-center justify-content-between p-3 question-container-main-row">
                  <div>
                      <input type="radio" id="set-${gid}-row-${qid}-color-1" name="set_${gid}_color[${qid}]" value="1"
                          class="choice">
                      <label for="set-${gid}-row-${qid}-color-1">
                          <span>
                              1
                          </span>
                      </label>
                  </div>

                  <div>
                      <input type="radio" id="set-${gid}-row-${qid}-color-2" name="set_${gid}_color[${qid}]" value="2"
                          class="choice">
                      <label for="set-${gid}-row-${qid}-color-2">
                          <span>
                              2
                          </span>
                      </label>
                  </div>

                  <div>
                      <input type="radio" id="set-${gid}-row-${qid}-color-3" name="set_${gid}_color[${qid}]" value="3"
                          class="choice">
                      <label for="set-${gid}-row-${qid}-color-3">
                          <span>
                              3
                          </span>
                      </label>
                  </div>

                  <div>
                      <input type="radio" id="set-${gid}-row-${qid}-color-4" name="set_${gid}_color[${qid}]" value="4"
                          class="choice">
                      <label for="set-${gid}-row-${qid}-color-4">
                          <span>
                              4
                          </span>
                      </label>
                  </div>
                  <div>
                      <input type="radio" id="set-${gid}-row-${qid}-color-5" name="set_${gid}_color[${qid}]" value="5"
                          class="choice">
                      <label for="set-${gid}-row-${qid}-color-5">
                          <span>
                              5 
                          </span>
                      </label>
                  </div>
              </div>
          </div>
      </div>

      <div class="row">
          <div class="d-flex justify-content-between">
              <div class=" p-2 rate-label">Not at all</div>
              <div class="p-2 rate-label">Fully agree</div>
          </div>
      </div>

      <div class="d-flex mb-3 pt-1">
          <div class="me-auto p-2 mob-rate-label">Not at all</div>
          <div class="p-2 mob-rate-label">Fully agree</div>
      </div>
    </div>

    </div>
    `}
    ;

  const addProgressBar = (arr) => {
    const li = arr.reduce((p, c, i) => {
      const l = i === 0
        ? '<li class="active"></li>'
        : '<li></li>'
      p += l;
      return p;
    }, '')

    return `
        <ul id="progressbar">
          ${li}
        </ul>
      `;
  }

  // Initial load
  const parent = $(".container-main");
  const headerDiv = $('header');
  const mediumScreen = $('.medium-screen');
  const mobileScreen = $('.mobile-screen');
  const sideNavCon = $('.sidenav-container');
  const sideNav = $('#mySidenav');
  const barMenu = $('i.fa-bars');
  const dataCon = $('.data-container');
  const form = $('#msform');
  let navHeight = headerDiv ? headerDiv.outerHeight() : 0;
  let width = $(window).width();
  const result = [];
  let currentField = 0;
  let newResult, locResult;

  newResult = Array
    .from({ length: newQuestions.length }, (v, i) => i)
    .map((d, i) => newQuestions[i].map(o => null))

  const r = new Set()
  r.group = ['a', 'b', 'c', 'd', 'e'];
  r.a = [0, 1, 2];
  r.b = [3];
  r.c = [4, 5, 6];
  r.d = [7];

  form.append(addProgressBar(r.group));
  // if (!localStorage.result) {
  //   localStorage.result = JSON.stringify(
  //     Array
  //       .from({ length: newQuestions.length }, (v, i) => i)
  //       .map((d, i) => newQuestions[i].map(o => null))
  //   );

  //   newResult = JSON.parse(localStorage.result);
  // } else {
  //   console.log(localStorage.result)
  //   newResult = JSON.parse(localStorage.result);
  //   populateFields(newResult);
  // }

  const saveResult = () => {
    localStorage.result = JSON.stringify(newResult)
  }

  console.log(newResult)
  // localStorage.names = JSON.stringify(names);
  // var storedNames = JSON.parse(localStorage.names);

  const isCompleteFieldSet = () => {
    return newResult[currentField].every(n => n !== null);
  }

  let currPBarIndex = 0;
  const activeProgressBar = () => {
    console.log(r)
    r.group.forEach((e, i) => {
      if (r[e] && r[e].length && r[e].includes(currentField)) {
        console.log(e, r[e], currentField, i, r[e].includes(currentField))

        $("#progressbar li").eq(i).addClass("active");
        currPBarIndex++;
      }
    })
  }

  const inActiveProgressBar = (cField) => {
    console.log(r)
    // idenfity current group of current field
    const x = r.group.filter(e => {
      if (r[e] && r[e].length && r[e].includes(cField)) {
        return e;
      }
    });

    const y = r.group.filter(e => {
      if (r[e] && r[e].length && r[e].includes(cField - 1)) {
        return e;
      }
    })

    if (x && x.length && y && y.length && x[0] !== y[0]) {
      const fIndex = r.group.findIndex(l => l === x[0])
      $("#progressbar li").eq(fIndex).removeClass("active");
    }
  }

  const scrollBack = () => {
    let errMsg = '';
    const errMod = $('#errorModal');

    const prevFieldTotal = [...newResult.slice(0, currentField)].reduce((x, y, j) => {
      x += y.length;
      return x;
    }, 0)

    console.log('PrevTotal', prevFieldTotal);
    const errMessages = [...newResult[currentField]].reduce((p, c, i) => {
      p = [...p];

      if (!c) p.push(i + 1 + prevFieldTotal)

      return p;
    }, [])

    const tempErrMessages = errMessages.join(', ');

    console.log(errMessages)
    if (errMessages.length) {
      errMsg = tempErrMessages;
      // alert(`Please answer question number(s):${errMsg} `)

      errMod.find('.error-message').text(errMsg)
      errMod.modal('toggle');


      // var nq = $('.question-container').eq(errMessages[0] - 1);
      const nq = $('#set-' + currentField + '-que-' + (errMessages[0] - 1 - prevFieldTotal))
      console.log(nq.offset().top, -navHeight)
      $('html, body').animate({
        scrollTop: nq.offset().top + (-navHeight)
      }, 1000);
    }

  }

  const setNav = (w) => {
    if (w < 850) {
      mediumScreen.addClass('display-none');
      mobileScreen.removeClass('display-none');
    } else {
      mediumScreen.removeClass('display-none');
      mobileScreen.addClass('display-none');
    }
  }

  setNav(width);

  $(window).resize(function () {
    navHeight = headerDiv.outerHeight()
    width = $(this).width()

    console.log('[ Width ]', width, navHeight)
    setNav(width);
  });

  const openNav = () => {
    console.log('removing')
    barMenu.addClass('display-none');
    sideNavCon.removeClass('display-none')
    // sideNav.removeClass('display-none')
    document.getElementById("mySidenav").style.width = "250px";
  }

  const closeNav = () => {
    barMenu.removeClass('display-none');
    sideNavCon.addClass('display-none')
    // sideNav.addClass('display-none')
    document.getElementById("mySidenav").style.width = "0";
  }

  $('i.fa-bars').on('click', function () {
    openNav()
  });
  $('.close-nav-btn').on('click', function () {
    closeNav()
  })

  $('.nav-links').mouseover(function () {
    $('.nav-links li > a').eq(0).removeClass('active')
  });

  $('.nav-links').mouseout(function () {
    $('.nav-links li > a').eq(0).addClass('active')
  });

  $('#top').on('click', function () {
    document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
  });

  const updateFooter = () => {
    var docHeight = $(window).height();
    var footerHeight = $('.footer').height();
    var footerTop = $('.footer').position().top + footerHeight;

    if (footerTop < docHeight) {
      $('.footer').css('margin-top', 10 + (docHeight - footerTop) + 'px');
    }
  }



  // questions.forEach((p, i) => {
  //   i = i + 1;
  //   const questionBody = parent.find('.question-container:first').clone(true, true);
  //   const temp = $(questionBody);
  //   const radios = temp.find('input[type=radio]');

  //   $(temp).find('input[type=radio]').each(function () {
  //     // Update the 'rules[0]' part of the name attribute to contain the latest count 
  //     $(this).attr('name', $(this).attr('name').replace('color\[0\]', `color\[${i}\]`));
  //     $(this).attr('id', $(this).attr('id').replace('row-0-color', `row-${i}-color`));

  //     $(this).siblings('label').attr('for', $(this).siblings('label').attr('for').replace('row-0-color', `row-${i}-color`));
  //   });

  //   temp.find('.title p').html(p);
  //   console.log(temp.attr('id'))
  //   temp.attr('id', temp.attr('id').replace('que-1', `que-${i + 1}`))

  //   parent.append(questionBody)
  // });

  newQuestions.forEach((p, i) => {
    const formContainer = $('#msform');


    formContainer.append(createFieldSet(i))

    const setContainer = $('#set-' + i);

    p.forEach((q, j) => {
      setContainer.append(addQuestion(i, j, q))
    });

    setContainer.after(addNextPrevBtn(i))
  })

  /** */
  let current_fs, next_fs, previous_fs; //fieldsets
  let left, opacity, scale; //fieldset properties which we will animate
  let animating; //flag to prevent quick multi-click glitches


  // $('fieldset').click('.next', function () {
  $('.next').on('click', function () {
    // event.preventDefault()
    const isComplete = isCompleteFieldSet();
    console.log('Is Complete Before Next', currentField, newResult, isComplete);
    if (!isComplete) {
      scrollBack();
      return
    }
    // else {
    // if (!isComplete) return;

    if (animating) return false;
    animating = true;
    console.log('clicked next')
    // current_fs = $(this).parent();
    // next_fs = $(this).parent().next();

    current_fs = $(this).closest('fieldset');
    next_fs = $(this).closest('fieldset').next();



    //activate next step on progressbar using the index of next_fs
    // $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");


    //show the next fieldset
    next_fs.show();

    //hide the current fieldset with style
    current_fs.animate({ opacity: 0 }, {
      step: function (now, mx) {
        //as the opacity of current_fs reduces to 0 - stored in "now"
        //1. scale current_fs down to 80%
        scale = 1 - (1 - now) * 0.2;
        //2. bring next_fs from the right(50%)
        left = (now * 50) + "%";
        //3. increase opacity of next_fs to 1 as it moves in
        opacity = 1 - now;
        current_fs.css({
          'transform': 'scale(' + scale + ')',
          // 'position': 'absolute'
        });
        next_fs.css({ 'left': left, 'opacity': opacity });
      },
      duration: 800,
      complete: function () {
        current_fs.hide();
        animating = false;
      },
      //this comes from the custom easing plugin
      easing: 'easeInOutBack'
    });
    /** */

    currentField++;
    console.log(currentField)
    goTop();
    activeProgressBar();
    // }




  });

  $('.previous').click(function () {
    if (animating) return false;
    animating = true;

    // current_fs = $(this).parent();
    // previous_fs = $(this).parent().prev();
    current_fs = $(this).closest('fieldset');
    previous_fs = $(this).closest('fieldset').prev();

    //de-activate current step on progressbar
    // $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

    //show the previous fieldset
    previous_fs.show();

    //hide the current fieldset with style
    current_fs.animate({ opacity: 0 }, {
      step: function (now, mx) {
        //as the opacity of current_fs reduces to 0 - stored in "now"
        //1. scale previous_fs from 80% to 100%
        scale = 0.8 + (1 - now) * 0.2;
        //2. take current_fs to the right(50%) - from 0%
        left = ((1 - now) * 50) + "%";
        //3. increase opacity of previous_fs to 1 as it moves in
        opacity = 1 - now;
        current_fs.css({ 'left': left });
        previous_fs.css({ 'transform': 'scale(' + scale + ')', 'opacity': opacity });
      },
      duration: 800,
      complete: function () {
        current_fs.hide();
        animating = false;
      },
      //this comes from the custom easing plugin
      easing: 'easeInOutBack'
    });
    /** */

    inActiveProgressBar(currentField);
    currentField--;
    console.log(currentField)
    goTop();
  });

  /** */


  const bg = "../images/gradient.png";

  // just removed this for now
  // $('body').css('background-image', 'url(' + bg + ')');
  //console.log("RarityBG" + trinketJSON.RarityBG);


  console.log(parent.find('.question-container').length)


  $('.choice').on('change', function () {
    const par = $(this).closest('.question-container');
    const nextQuestion = $(par).next();
    const fieldSet = $(this).closest('fieldset');
    const fieldSetIndex = $(fieldSet).attr('data-id');

    if (nextQuestion.length !== 0) {
      $('html, body').animate({
        scrollTop: $(`#${nextQuestion.attr('id')}`).offset().top + (-navHeight)
      }, 1000);

    }

    // if (par.attr('id') === 'que-15') {
    //   $("html, body").animate({ scrollTop: dataCon.offset().top }, 1000);
    // }

    Array.from({ length: newQuestions[fieldSetIndex].length }, (v, i) => i).forEach(function (ti, i) {
      const rate = $(`input[name='set_${fieldSetIndex}_color[${i}]']:checked`).attr('value')
      // const rate = $(`#set-${fieldSetIndex}-que-${i} input[name='color[${i}]']:checked`).attr('value')
      newResult[fieldSetIndex][i] = rate ? +rate : null
    });


    console.log(currentField, par.attr('id'), newResult)
    saveResult();
    // const isComplete = newResult[fieldSetIndex].every(n => n === n);
    // console.log('Is Complete ', fieldSetIndex, newResult, isComplete);

    // if (isComplete) {
    //   $("html, body").animate({ scrollTop: dataCon.offset().top }, 1000);
    //   // dataCon.animate({ scrollTop: 0 + (-navHeight) }, 1000);
    // }
  });
  /** */

  $('form').on('submit', async function (event) {
    event.preventDefault();

    const apiCall = async () => {
      const name = $('#name').val().trim();
      const email = $('#email').val().trim();
      const errMod = $('#errorModal');
      let errMsg = '';
      console.log(name, email, result)

      // validation
      if (!result.length)
        errMsg = 'Please fill all the survey questions';

      if (!name.length)
        errMsg = 'Please enter your name';

      if (!email.length)
        errMsg = 'Please enter your email';

      if (email.length) {
        const checkMail = isEmail(email);
        if (!checkMail)
          errMsg = 'Please use a valid email';
      }

      if (errMsg.length) {
        errMod.find('.error-message').text(errMsg);
        errMod.modal('show');
        return;
      }


      const errMessages = result.reduce((p, c, i) => {
        p = [...p];

        if (!c) p.push(i + 1)

        return p;
      }, [])

      const tempErrMessages = errMessages.join(', ');

      if (errMessages.length) {
        // alert(`Please answer question number(s):${tempErrMessages} `)
        errMsg = tempErrMessages;

        errMod.find('.error-message').text(errMsg)
        errMod.modal('toggle');

        var nq = $('.question-container').eq(errMessages[0] - 1);
        $('html, body').animate({
          scrollTop: nq.offset().top + (-navHeight)
        }, 1000);
      }

      // // Call API
      // $.ajax({
      //   url: "https://node-wp-v1.herokuapp.com/api/v1/questions",
      //   type: "post",
      //   data: JSON.stringify({
      //     data: [...result],
      //     name,
      //     email,
      //   }),
      //   success: function (response) {
      //     console.log(response)
      //     // You will get response from your PHP page (what you echo or print)
      //   },
      //   error: function (jqXHR, textStatus, errorThrown) {
      //     console.log(textStatus, errorThrown);
      //   }
      // });



      const asyncPostCall = async () => {
        try {
          $('#submit').html('<i class="fa fa-spinner fa-spin"></i> Get results');

          const url = window.location.href.includes('https')
            ? 'https://node-wp-v1.herokuapp.com/api/v1/questions'
            : 'http://localhost:5501/api/v1/questions';

          console.log(url)

          const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              // your expected POST request payload goes here
              data: result,
              name,
              email
            })
          });
          const data = await response.json();

          console.log(data);
          if (data.status === 'success') {
            const { result, score } = data.data
            const successMsg = `Score : ${score} \nResult : ${result}`;

            const successMod = $('#successModal');
            successMod.find('.score').text(score);
            successMod.find('.result').text(result);
            successMod.modal('toggle');
            $('#submit').html('Get results');

            grecaptcha.ready(function () {
              grecaptcha.execute('6Lfn55MjAAAAAPyeQNtgAs27c479whQ3pHuu2kVD', { action: 'submit' }).then(function (token) {
                // Add your logic to submit to your backend server here.
                console.log('TOKEN  > ', token)
              });
            });

          }

        } catch (error) {
          console.log(error)
        }
      }

      asyncPostCall()

    }

    await apiCall()

  });


  function isEmail(email) {
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
  }

});