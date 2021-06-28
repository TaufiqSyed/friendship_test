const qnaList = [
  {
    q: '1. 오늘 점심은 중식! <br> 당신의 선택은?',
    a: [
      { answer: 'a. 짬뽕', type: [1, 2, 4, 9] },
      { answer: 'b. 짜장', type: [0, 3, 6, 5, 10, 8] },
      { answer: 'c. 못 골라', type: [7, 11] },
    ]
  },
  {
    q: '2. 쉬는 날에는 당연히 ',
    a: [
      { answer: 'a. 이불밖은 위험해, 집에 있을래', type: [0, 3, 2, 8] },
      { answer: 'b. 시간아까워! 놀러나가야지', type: [1, 6, 5, 10] },
    ]
  },
  {
    q: '3. 좋아하는 계절은',
    a: [
      { answer: 'a. 봄', type: [1, 3, 2, 10, 8] },
      { answer: 'b. 여름', type: [7, 9, 11] },
      { answer: 'c. 가을', type: [0, 6, 5, 4] },
      { answer: 'c. 겨울', type: [0, 6, 5, 4] },
    ]
  },
  {
    q: '4. 여행을 떠나기 전에는',
    a: [
      { answer: 'a. 야무지게 계획을 짠다 ', type: [1, 2, 4 ] },
      { answer: 'b. 어떻게든 되겠지~ 별 생각 없다 ', type: [7, 10, 8, 9, 11] },
    ]
  },
  {
    q: '5. 전생을 믿나요?',
    a: [
      { answer: 'a. 아니? 인생은 단 한번 뿐이야', type: [1, 7, 10, 4, 9 ] },
      { answer: 'b. 인연은 돌고 돌아 또 만난다고 믿어', type: [0, 3, 6, 11] },
    ]
  },

  {
    q: '6. 지금 나에게 가장 중요한 것은?',
    a: [
      { answer: 'a. 커리어', type: [4, 9, 11] },
      { answer: 'b. 사랑', type: [0, 3, 6, 10 ] },
      { answer: 'c. 우정', type: [1, 7, 2, 5, 8 ] },
    ]
  },
  {
    q: '7. 가장 활동적인 시간은',
    a: [
      { answer: 'a. 아침이지!', type: [1, 7, 11] },
      { answer: 'b. 저녁이다!', type: [2, 4, 9 ] },
    ]
  },
  {
    q: '8. 외계인은 있을까?',
    a: [
      { answer: 'a. 있었으면 왜 지금까지 안 밝혀졌겠어?.', type: [0, 4, 9 ] },
      { answer: 'b. 분명 어딘가에 존재하고 있을거야!', type: [3, 2, 6, 5, 10, 8 ] },
      { answer: 'c. 그런 생각은 다음에.. 먹고 살기도 바빠', type: [1, 7, 11] },
    ]
  },
  {
    q: '9. 처음 보는 사람이 <br>반갑게 내 이름을 부른다면,',
    a: [
      { answer: 'a. 당황하지 않은 척 나도 인사한다', type: [7, 0, 5, 9 ] },
      { answer: 'b. 놀란 얼굴로 "누구세요?" 묻는다', type: [1, 3, 6, 11] },
      { answer: 'c. 기억력이 좋아서 못 알아볼 리가 없다', type: [2, 10, 8, 4] },
    ]
  },
  {
    q: '10. 고된 여행길, <br>모르는 사람이 간식을 건넸을 때 ',
    a: [
      { answer: 'a. 고맙다고 인사한 뒤 한 입 베어문다', type: [4, 9, 11] },
      { answer: 'b. 의심하다가 몰래 버린다', type: [0, 2, 6, 5] },
      { answer: 'c. 뭐야.. 이 사람 나 좋아하나?', type: [1, 7, 3, 10, 8] },
    ]
  },
  {
    q: '11. 미용실에서 내가 요구한 길이의 <br>두배를 잘라버렸을 때 ',
    a: [
      { answer: 'a. 이건 아니지! 따지고서 돈을 깎는다', type: [1, 4, 9, 11] },
      { answer: 'b. 속상하지만 돈을 내고 집에 돌아와 운다', type: [7, 0, 3, 6, 10] },
    ]
  },
  {
    q: '12. 운명을 믿는가? ',
    a: [
      { answer: 'a. 정해진 운명은 없어. 내가 개척해나가는거지', type: [1, 4, 9, 11] },
      { answer: 'b. 이 세상엔 내가 어쩔 수 없는 흐름이 있어', type: [7, 0, 3, 6, 10] },
    ]
  },
  {
    q: '13. 나로 말할 것 같으면?',
    a: [
      { answer: 'a. 다정하고 스윗한 배려쟁이', type: [3, 6, 4, 9 ] },
      { answer: 'b. 엉뚱발랄 4차원사랑둥이', type: [0, 2, 5, 10, 8] },
      { answer: 'c. 담백하고 편안한 자연주의', type: [1, 7, 11] },
    ]
  }
]

const infoList = [
    {
      name: ' Lv1. 친해지길 바라..<br> 어색한 사이 ',
      desc: '아직은 멀뚱멀뚱, 만나도 할 얘기가 그리 많지 않은 사이. 하지만 언젠간 엄청난 절친이 될 수 있을 것 같은 예감이 들어요. 안부가 궁금할 땐 카톡도 해보고, 프로필 뮤직이 괜찮으면 노래추천도 받으면서 조금씩 가까워져보는 건 어떨까요? 오답노트 필수!'
    },
    {
      name: ' Lv2. 가끔 봐도 반가운 좋은 친구 ',
      desc: '연애 유형의 진국인 당신! 소에 해당하는 당신은 상대방만 바라보는 해바라기 연애 스타일이랍니다. 매사에 끈기가 있어 연애를 할 때 성실하고 진심을 다하는 성향을 가지고, 온화하며 따뜻한 마음을 가지고 있어요. 한 번 좋아하면 끝까지 좋아하는 의리파지만 자존심이 쌔 은근히 고집이 강하답니다. 또한 욱하는 성질이 있어 이런 부분들을 조심해야 하고, 질투심이 많아 사랑이 집착으로 바뀔 수 있어 주의해야 된답니다! '
    },
    {
      name: ' Lv3. 서로 열심히 알아가는 중 ',
      desc: '한 번 좋아하는 사람이 있으면 내 사람으로 만드는 당신! 호랑이에 해당하는 당신은 썸부터 사랑까지 한 번에 직진하는 스타일이랍니다. 연애할 때 주로 이끄는 성향을 가지고 있고, 시원시원한 성격과 유쾌한 성격을 가지고 있어요. 대쪽같은 성격에다 실수를 용납하는 대인배지만 유혹에 약하고 허영때문에 들뜨는 성격이라 다른 이성의 접근에 주의해야 돼요. 또한 내가 한 말로 인해 상대방이 상처를 받을 수 있기 때문에, 항상 말 조심이 필요하답니다!'
    },
    {
      name: ' Lv4. 언제든 연락할 수 있는 베스트 프렌드 ',
      desc: '상대방을 홀리게 만드는 당신! 신비롭고 독특한 매력을 가져, 상대방이 푹 빠지게 만드는 스타일이에요. 직감이 발달되어 손재주가 뛰어난 편이고, 연애할 때 통통 튀는 모습들을 많이 보여준답니다. 유순하고 낙천적인 성향이지만, 자칫잘못하면 상대방에게 천진난만한 아이처럼 보일 수 있는 점을 주의해야 돼요. 또한 감정 기복이 심한 편이라 변덕스러운 마음을 가질 수 있어, 이런 부분들에 신경을 쓴다면 좋은 연애를 할 수 있어요.'
    },
    {
      name: ' Lv5. 우린 눈빛만 봐도 알지! 소울메이트 ',
      desc: '상대방과의 미래를 꿈꾸는 당신! 현실적인 연애보다는, 미래에 대한 이상적인 연애관을 가지고 있어요. 매일매일 사랑하는 사람과 보낼 미래를 생각하기 때문에, 좋은 신랑감이 될 수 있는 자질이 있답니다. 또한 일적으로나 사랑으로나 야망이 커, 크게 성공할 확률이 높고 리더십이 매우 뛰어나답니다. 다만 높은 이상에 비해서 현실이 자신의 마음에 들지 않으면 허세를 부리거나 사람들을 무시하는 경우가 많으니 이점들을 주의하면 좋을 것 같아요!'
    },
  {
    name: ' 기념일에 무슨 이벤트 할까, <br>이벤트 플래너 <뱀> ',
    desc: '상대방의 기념일을 챙기며 깜짝 놀라게 하는 당신!, 아이디어가 뛰어나고 남다른 감각이 있어, 상대방에게 많은 이벤트를 해주는 스타일이에요. 연애할 때 눈치도 빠르고, 감동을 줄 수 있어 상대방이 매일 행복하답니다. 전체적으로 화려한 연애를 하지만, 은근히 비밀이 많고 우유부단한 성격을 가지고 있답니다. 또한 귀가 매우 얇아 남의 이야기를 곧이 곧대로 믿어, 상대방을 의심하기도 하기 때문에 조심해야 된답니다!'
  },
  {
    name: '어 오늘 머리 바꿨네 잘 어울린다, <br>센스가 뛰어난 <말>',
    desc: '연애할 때, 센스가 넘쳐나는 당신! 말재주가 뛰어나며 처세술이 뛰어나, 상대방의 호감을 금방 얻는답니다. 낙천적이고 유연한 성격을 가지고 있으며, 구속받는 것을 싫어하는 스타일이에요. 소중한 사람들을 위해 희생할 줄도 알지만, 쾌략 지향적인 경우가 많아 사치와 허영에 물드는 경우가 다반수입니다. 한탕 주의에 빠져 쉽게 망가질 수 있기 때문에 이 점을 주의해야 된답니다!'
  },
  {
    name: '난 너랑 하는 것들 다 좋아, <br>순종적인 <양>',
    desc: '연애할 때 모든 걸 맞춰주려고 하는 당신! 다정한 느낌과 상냥한 모습을 가지고 있어, 상대방 입장에서 편안한 느낌을 받을 수 있답니다. 타오르는 연애보다는 안정적인 연애를 추구하고, 상대방에게 마음을 여는 순간 진심으로 사랑에 푹 빠질 수 있습니다. 또한 강인한 생존력과 수완이 좋으나, 한편으로는 자신이 원하는 바를 모두 쟁취하려는 고집이 있어요. 이 고집이 심해지면 다른 사람 눈에서는 계산적인 사람처럼 보여 매력을 잃을 수 있습니다!'
  },
  {
    name: '난 당신의 연예인, <br>끼가 넘치는 재주꾼 <원숭이>',
    desc: '지치고 힘들 때 언제나 행복을 주는 당신! 정말 끼가 많고 말재주가 많다보니 팔방미인이라는 소리를 많이 듣는 편이랍니다. 또한 다재다능하고 총명하여 어떤 일이든지 잘할 수 있고, 유머 감각도 뛰어나 주변 사람들이 많이 따르는 마당발 타입입니다. 연애할 때 상대방의 기분을 잘 맞춰주고 즐거운 분위기를 유지하나, 다소 본인의 체면을 중시하는 경향이 있어요. 이 점 때문에 잔머리를 굴리다 타인에게 교활하다는 인상을 주게 될 수도 있기 때문에 조금 조심하면 좋을 것 같아요!'
  },
  {
    name: '이건 이거고 저건 저거지 , <br>공과사 확실한 <닭>',
    desc: '깔끔한 연애를 추구하며 맺고 끊는 것이 확실한 당신! 단아하고 고고한 이미지를 가지고 있어 우아한 매력을 표출하는 편이랍니다. 집중력과 기억력이 좋아 상대방과 있었던 일들을 다 기억해주는 편이고, 겉으로는 무뚝뚝하나 은근히 감수성이 풍부하답니다. 다만 자신이 생각한 선을 벗어나면 냉소적으로 바뀌고, 평소 직설적인 편이라 차갑다는 인상을 많이 줄 수 있어요. 섬세한 사람이기 때문에 예민한 경우가 많으니 마음을 평안히 다스리고, 상대방에게 좀만 더 따뜻하게 대하면 좋을 것 같아요!'
  },
  {
    name: '난 네가 좋아 너무 좋아, <br>애교만땅 <개>',
    desc: '애교쟁이 그 자체인 당신! 둥글둥글하게 처세를 잘 하고, 붙임성이 매우 좋아 사교성이 매우 뛰어난 편이랍니다. 또한 궁금한 것을 참지 못해 호기심이 많고, 강아지같이 상대방에게 찰싹 달라붙는 것을 좋아하는 스타일이에요. 성격이 매우 쾌활하나, 감정의 기복이 은근히 심해 상대방이 하는 말에 대해 크게 상처받는 편입니다. 또한 성격이 급한 경우가 많아, 차분하게 행동을 하지 못하는 편이기 때문에 이 점을 좀만 조심하면 좋을 것 같아요! '
  },
  {
    name: '산은 산이요 연애는 연애로다, <br>느긋하고 온순한 <돼지>',
    desc: '단아하고 고상한 품격을 가진 당신! 마음을 먹을 때 느긋하게 행동하고, 상대방에 대한 배려가 상당히 많아 온화한 성품을 가지고 있어요. 또한 솔직한 성격으로 신뢰를 받을 수 있는 타입이며, 어떠한 일을 하든 책임감이 강해 무사히 마무리한답니다. 현실적인 성향이 강해 실리를 잘 챙기나, 표현력이 다소 부족해 상대방이 사랑받는다는 감정을 못 느낄수도 있어요. 은근히 질투심이 강하고 고지식한 면이 강해, 누가 자기에게 잘못하면 지구 끝까지 복수 할 수 있을 정도이기 때문에 이 점을 조심해야 한답니다! '
  },
]